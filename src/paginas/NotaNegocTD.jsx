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
        verticalAlign:"bottom"
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
    let [notaNegoc, setNotaNegoc] = useState(notaNegocInicial)

    // Vê qual objeto foi alterado e modifica no set o obj da Nota Negoc
    const handleChange = (event) => {
        const notaNegocAlterada = { ...notaNegoc }

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
    const handleAdNota = () => {
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

    // Faz COMMIT na nova nota de negociação
    const handleSave = () => {
        console.log('Salvando Dados')
    }

    const listaTitulos = (i) => {
        return (
            <FormControl className={classes.formControl}>
                <InputLabel id="titulo">Título</InputLabel>
                <Select name={`select-titulo_${i}`} value={notaNegoc.titulos[i].codIsin} onChange={handleChange} >
                    <MenuItem value=""><em>nenhum</em></MenuItem>
                    <MenuItem value={"BRSTNCLTN7U7"}>Tesouro Prefixado 2026</MenuItem>
                    <MenuItem value={"BRSTNCNTB2U0"}>Tesouro IPCA+ 2045</MenuItem>
                    <MenuItem value={"BRSTNCLTN7K8"}>Tesouro Prefixado 2022</MenuItem>
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

    return (
        <div>
            <h3>Nota de Negociação de Tesouro Direto</h3>
            <form className={classes.root} >

                <TextField name="numero-nota" label="Número da Nota" value={notaNegoc.numeroNotaNegociacao} onChange={handleChange} />

                <TextField name="data-negoc" label="Data Negociação" value={notaNegoc.dataNegociacao} onChange={handleChange} />

                <FormControl className={classes.formControl}>
                    <InputLabel id="corretora">Corretora</InputLabel>
                    <Select name="select-corretora" value={notaNegoc.idCorretora} onChange={handleChange} >
                        <MenuItem value=""><em>nenhuma</em></MenuItem>
                        <MenuItem value={"easy"}>Easynvest</MenuItem>
                        <MenuItem value={"clear"}>Clear</MenuItem>
                        <MenuItem value={"xp"}>XP</MenuItem>
                    </Select>
                </FormControl>

                <h3 style={{ color: 'gray' }}>Títulos</h3>

                {
                    notaNegoc.titulos.map((titulo, i) => {
                        return (
                            <div key={`list_${i}`}>
                                {listaTitulos(i)}
                                {listaCV(i)}
                                <TextField name={`quantidade_${i}`} label="Quantidade" value={titulo.quantidade} onChange={handleChange} />
                                <TextField name={`valorliq_${i}`} label="Valor Líquido" value={titulo.valorLiquido} onChange={handleChange} />
                                
                                <IconButton name={`lixeira_${i}`} className={classes.delete} onClick={handleDelete}>
                                    <DeleteIcon />
                                </IconButton>
                                <br />
                            </div>
                        )
                    })
                }

                <IconButton onClick={handleAdNota} >
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