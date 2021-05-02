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
        backgroundColor: "#8d9db6",
        color: theme.palette.common.white,
        fontSize: 16,
    },
    body: { fontSize: 16, },
    footer: { 
        fontSize: 16,
        backgroundColor: "#8d9db6",
        color: theme.palette.common.white,
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
        width: 500,
    },
}))(TableContainer)


export default function TabelaInvestimentos(props) {
    const classes = useStyles()
    const dados = props.dados

    return (
        <StyledTableContainer component={Paper} >
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Ativos</StyledTableCell>
                        <StyledTableCell align="right">Valor Atual (R$)</StyledTableCell>
                        <StyledTableCell align="right">Proporção</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {dados.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
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
