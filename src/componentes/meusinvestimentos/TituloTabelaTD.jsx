import { rotaNotaNegocTD } from '../../constantes/rotas.js'
import { NavLink } from 'react-router-dom'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import IconButton from '@material-ui/core/IconButton'

export default function TituloTabelaTD() {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h3>Tesouro Direto</h3>
                        </td>

                        <td>
                            <IconButton color="primary" component={NavLink} to={rotaNotaNegocTD}>
                                <AddCircleIcon />
                            </IconButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}