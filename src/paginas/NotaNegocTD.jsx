import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'


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
}))

const notaNegocInicial = {
    numeroNotaNegociacao: "",
    dataNegociacao: "",
    idCorretora: "",
    titulos: [
        { 
            codIsin: null,
            indicadorCV: null,
            quantidade: null,
            valorLiquido: null
        },
        { 
            codIsin: null,
            indicadorCV: null,
            quantidade: null,
            valorLiquido: null
        },
        { 
            codIsin: null,
            indicadorCV: null,
            quantidade: null,
            valorLiquido: null
        }        
    ]
}

export default function NotaNegocTD() {
    const classes = useStyles()
    let [notaNegoc, setNotaNegoc] = useState(notaNegocInicial)

    const handleChange = (event) => {
        const notaNegocAlterada = { ...notaNegoc}

        if (event.target.name === "numero-nota") {
            notaNegocAlterada.numeroNotaNegociacao = event.target.value
        }

        if (event.target.name === "data-negoc") {
            notaNegocAlterada.dataNegociacao = event.target.value
        }

        if (event.target.name === "select-corretora") {
            notaNegocAlterada.idCorretora = event.target.value
        }

        console.log('Nota Alterada:')
        console.log(notaNegocAlterada)
        setNotaNegoc(notaNegocAlterada)


        //setCorretora(event.target.value)
        //setNotaNegoc()
    }

    return (
        <div>
            <h3>Nota de Negociação de Tesouro Direto</h3>
            <form className={classes.root} >
                <TextField name="numero-nota" label="Número da Nota" onChange={handleChange} />
                <TextField name="data-negoc" label="Data Negociação" onChange={handleChange} />

                <FormControl className={classes.formControl}>
                    <InputLabel id="corretora">Corretora</InputLabel>
                    <Select name="select-corretora" value={notaNegoc.idCorretora} onChange={handleChange} >
                        <MenuItem value=""><em>nenhuma</em></MenuItem>
                        <MenuItem value={"easy"}>Easynvest</MenuItem>
                        <MenuItem value={"clear"}>Clear</MenuItem>
                        <MenuItem value={"xp"}>XP</MenuItem>
                    </Select>
                </FormControl>
                <h3 style={{color: 'gray'}}>Títulos</h3>
            </form>
        </div>

    )


}