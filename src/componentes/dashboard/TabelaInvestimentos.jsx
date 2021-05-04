import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import Paper from '@material-ui/core/Paper'
import { formataDinheiroBR, formataPercentualBR } from '../../servicos/formatacao'

const useStyles = makeStyles({
    table: {
        minWidth: 400,
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
        width: 450,

    },
}))(TableContainer)


export default function TabelaInvestimentos(props) {
    const classes = useStyles()
    const dados = props.dados

    return (
        <StyledTableContainer component={Paper} >
            <Table className={classes.table} aria-label="customized table" size="small" >
                <TableHead >
                    <TableRow>
                        <StyledTableCell>Ativos</StyledTableCell>
                        <StyledTableCell align="right">Valor Atual (R$)</StyledTableCell>
                        <StyledTableCell align="right">Proporção</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {dados.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{formataDinheiroBR(row.value)}</StyledTableCell>
                            <StyledTableCell align="right">{formataPercentualBR(row.percent)}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <StyledTableCell>Total</StyledTableCell>
                        <StyledTableCell align="right">{formataDinheiroBR(props.total)}</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </StyledTableContainer>
    )
}
