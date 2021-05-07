import { useHookstate } from "@hookstate/core"
import { meusInvestimentos } from "../../estadosglobais/investimentos"
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import Paper from '@material-ui/core/Paper'
import { formataDataBR, formataDinheiroBR, formataPercentualBR } from '../../servicos/formatacao'
import { v4 as uuidv4 } from 'uuid'

// TODO - Permitir deletar linhas já cadastradas dos investimentos(Ativos). 
// Não pode colocar lixeira na linha, é necessário fazer uma página de exclusão de ativos.

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
})

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#e0e2e4",
        color: theme.palette.common.black,
        fontSize: 14,
    },
    body: { fontSize: 14, },
    footer: {
        fontSize: 14,
        backgroundColor: "#e0e2e4",
        color: theme.palette.common.black,
    },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow)

const StyledTableContainer = withStyles((theme) => ({
    root: {
        width: 1500,
    },
}))(TableContainer)

export default function TabelaTD() {
    const classes = useStyles()
    const invest = useHookstate(meusInvestimentos)
    const lista = invest.get().td

    if (lista === undefined || lista === null || lista.length === 0) { return null }

    let valorVendaTotal = 0
    let resultadoBrutoTotal = 0
    let irTotal = 0
    let resultadoLiquidoTotal = 0

    for (let i = 0; i < lista.length; i++) {
        const element = lista[i]
        valorVendaTotal += element.quantidade * element.valorUnitarioAtualVenda
        resultadoBrutoTotal += element.resultadoBruto
        irTotal += element.ir
        resultadoLiquidoTotal += element.resultadoLiquido
    }

    return (
        <div>
            <StyledTableContainer component={Paper} >
                <Table className={classes.table} aria-label="customized table" size="small">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Título</StyledTableCell>
                            <StyledTableCell align="center">Data</StyledTableCell>
                            <StyledTableCell align="center">Corretora</StyledTableCell>
                            <StyledTableCell align="center">Quantidade</StyledTableCell>
                            <StyledTableCell align="right">Valor de Venda</StyledTableCell>
                            <StyledTableCell align="right">Resultado Bruto</StyledTableCell>
                            <StyledTableCell align="center">Resultado Bruto %</StyledTableCell>
                            <StyledTableCell align="right">IR</StyledTableCell>
                            <StyledTableCell align="right">Resultado Líq.</StyledTableCell>
                            <StyledTableCell align="center">Resultado Líq. %</StyledTableCell>
                            <StyledTableCell align="center">Resultado Mensal</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {lista.map((row) => (
                            <StyledTableRow key={uuidv4()}>
                                <StyledTableCell component="th" scope="row">{row.nome}</StyledTableCell>
                                <StyledTableCell align="center">{formataDataBR(row.dataNegociacao)}</StyledTableCell>
                                <StyledTableCell align="center">{row.idCorretora}</StyledTableCell>
                                <StyledTableCell align="center">{row.quantidade}</StyledTableCell>
                                <StyledTableCell align="right">{formataDinheiroBR(row.valorUnitarioAtualVenda * row.quantidade)}</StyledTableCell>
                                <StyledTableCell align="right">{formataDinheiroBR(row.resultadoBruto)}</StyledTableCell>
                                <StyledTableCell align="center">{formataPercentualBR(row.resultadoBrutoPercent)}</StyledTableCell>
                                <StyledTableCell align="right">{formataDinheiroBR(row.ir)}</StyledTableCell>
                                <StyledTableCell align="right">{formataDinheiroBR(row.resultadoLiquido)}</StyledTableCell>
                                <StyledTableCell align="center">{formataPercentualBR(row.resultadoLiquidoPercent)}</StyledTableCell>
                                <StyledTableCell align="center">{formataPercentualBR(row.rentabLiqMensalCorresp)}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <StyledTableCell>Total</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right">{formataDinheiroBR(valorVendaTotal)}</StyledTableCell>
                            <StyledTableCell align="right">{formataDinheiroBR(resultadoBrutoTotal)}</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right">{formataDinheiroBR(irTotal)}</StyledTableCell>
                            <StyledTableCell align="right">{formataDinheiroBR(resultadoLiquidoTotal)}</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </StyledTableContainer>
        </div>
    )
}