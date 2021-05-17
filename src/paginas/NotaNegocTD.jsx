import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { enviaNovaNotaTD } from '../servicos/envia-novanota-td'
import { meusInvestimentos, meusInvestimentosInicial, removeInvestimentosStorage } from '../estadosglobais/investimentos'
import { tabelasUteis } from '../estadosglobais/tabelas-uteis'
import { rotaHome } from '../constantes/rotas'
import { useHookstate } from '@hookstate/core'
import { Redirect } from 'react-router-dom'
import { erroGlobal } from '../estadosglobais/erro-global'
import DialogoErro from '../componentes/DialogoErro'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 150,
    },
    delete: {
        verticalAlign: "bottom"
    },
}))

const notaNegocTitInicial = {
    codIsin: "",
    indicadorCV: "",
    quantidade: "",
    valorLiquido: ""
}

const notaNegocInicial = {
    numeroNotaNegociacao: "",
    dataNegociacao: "",
    idCorretora: "",
    titulos: [
        { ...notaNegocTitInicial },
        { ...notaNegocTitInicial }
    ]
}

export default function NotaNegocTD() {
    const classes = useStyles()
    const erro = useHookstate(erroGlobal)
    const invest = useHookstate(meusInvestimentos)
    const tabuteis = useHookstate(tabelasUteis)
    let [notaNegoc, setNotaNegoc] = useState(notaNegocInicial)

    const clonaNotaNegoc = () => {
        const notaNegocClonada = { ...notaNegoc }
        const titulosClonados = notaNegocClonada.titulos.map((t) => {
            return {...t}
        })

        notaNegocClonada.titulos = titulosClonados
        return notaNegocClonada
    }

    // Vê qual objeto foi alterado e modifica no set o obj da Nota Negoc
    const handleChange = (event) => {
        const notaNegocAlterada = clonaNotaNegoc()

        if (event.target.name === "numero-nota") {
            notaNegocAlterada.numeroNotaNegociacao = event.target.value
        }

        if (event.target.name === "data-negoc") {
            notaNegocAlterada.dataNegociacao = event.target.value
        }

        if (event.target.name === "select-corretora") {
            notaNegocAlterada.idCorretora = event.target.value
        }

        let [nome, indice] = event.target.name.split("_")
        indice = parseInt(indice)

        if (nome === "select-titulo") {
            notaNegocAlterada.titulos[indice].codIsin = event.target.value
        }

        if (nome === "select-cv") {
            notaNegocAlterada.titulos[indice].indicadorCV = event.target.value
        }

        if (nome === "quantidade") {
            notaNegocAlterada.titulos[indice].quantidade = event.target.value
        }

        if (nome === "valorliq") {
            notaNegocAlterada.titulos[indice].valorLiquido = event.target.value
        }

        setNotaNegoc(notaNegocAlterada)
    }

    // ADICIONA uma nova linha os títulos
    const handleAdicionaTitulo = () => {
        const notaNegocAlterada = { ...notaNegoc }
        notaNegocAlterada.titulos.push({ ...notaNegocTitInicial })
        setNotaNegoc(notaNegocAlterada)
    }

    // DELETA uma linha dos títulos
    const handleDelete = (event) => {
        let stringSplitada = event.currentTarget.name.split("_")
        let indice = stringSplitada[1]
        indice = parseInt(indice)

        const notaNegocAlterada = { ...notaNegoc }
        notaNegocAlterada.titulos.splice(indice, 1)
        setNotaNegoc(notaNegocAlterada)
    }

    const handleSave = () => {
        enviaNovaNotaTD(notaNegoc)
            .then((result) => {
                removeInvestimentosStorage()
                invest.set(meusInvestimentosInicial)    // Ao voltar para Home força execução de buscaInvestimentos()
                setNotaNegoc(notaNegocInicial)  // zera o estado da nota de negociação para inicial, para que ao entrar na tela novamente esteja tudo apagado
            })
            .catch((err) => {
                erro.set(err.message)
            })
    }

    if (erro.get() !== null) {
        return <DialogoErro />
    }

    if (invest.get().td === null || invest.get().acoes === null || invest.get().fii === null || invest.get().tit_priv === null) {
        return <Redirect to={rotaHome} />
    }

    const listaTitulos = (i) => {
        return (
            <FormControl className={classes.formControl}>
                <InputLabel id="titulo">Título</InputLabel>
                <Select name={`select-titulo_${i}`} value={notaNegoc.titulos[i].codIsin} onChange={handleChange} >
                    <MenuItem value=""><em>nenhum</em></MenuItem>
                    {tabuteis.get().td.map((t, i) => 
                        <MenuItem key={`corret_${i}`} value={t.codIsin}>{t.nome}</MenuItem>
                    )}
                </Select>
            </FormControl>
        )
    }

    const listaCV = (i) => {
        return (
            <FormControl className={classes.formControl}>
                <InputLabel id="cv">Compra/Venda</InputLabel>
                <Select name={`select-cv_${i}`} value={notaNegoc.titulos[i].indicadorCV} onChange={handleChange} >
                    <MenuItem value=""><em>nenhuma</em></MenuItem>
                    <MenuItem value={"c"}>Compra</MenuItem>
                    <MenuItem value={"v"}>Venda</MenuItem>
                </Select>
            </FormControl>
        )
    }
    

    const listaCorretoras = () => {
        return (
            <FormControl className={classes.formControl}>
                <InputLabel id="corretora">Corretora</InputLabel>
                <Select name="select-corretora" value={notaNegoc.idCorretora} onChange={handleChange} >
                    <MenuItem value=""><em>nenhuma</em></MenuItem>
                    {tabuteis.get().corretoras.map((c, i) => 
                        <MenuItem key={`corret_${i}`} value={c.idCorretora}>{c.nome}</MenuItem>
                    )}
                </Select>
            </FormControl>
        )
    }

    return (
        <div>
            <h3>Nota de Negociação de Tesouro Direto</h3>
            <form className={classes.root} >

                <TextField name="numero-nota" label="Número da Nota" value={notaNegoc.numeroNotaNegociacao} onChange={handleChange} />

                <TextField name="data-negoc" label="Data Negociação" helperText="d/m/aaaa" value={notaNegoc.dataNegociacao} onChange={handleChange} />

                {listaCorretoras()}

                <h3 style={{ color: 'gray' }}>Títulos</h3>

                {
                    notaNegoc.titulos.map((titulo, i) => {
                        return (
                            <div key={`list_${i}`}>
                                {listaTitulos(i)}
                                {listaCV(i)}
                                <TextField name={`quantidade_${i}`} label="Quantidade" value={titulo.quantidade} onChange={handleChange} />
                                <TextField name={`valorliq_${i}`} label="Valor Líquido R$" value={titulo.valorLiquido} onChange={handleChange} />

                                <IconButton name={`lixeira_${i}`} className={classes.delete} onClick={handleDelete}>
                                    <DeleteIcon />
                                </IconButton>
                                <br />
                            </div>
                        )
                    })
                }

                <IconButton onClick={handleAdicionaTitulo} >
                    <AddCircleIcon />
                </IconButton>
                <br />

                <Grid container justify="center">
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Salvar Títulos
                    </Button>
                </Grid>

            </form>
        </div>

    )


}