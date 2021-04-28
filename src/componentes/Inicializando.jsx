import NavBar from "./NavBar"
import LoadingImage from '../static/loading.gif'

export default function Inicializando() {
    return <NavBar inside={
        <table>
            <tbody>
                <tr>
                    <td>
                        <h1>Inicializando</h1>
                    </td>
                    <td>
                        <img width="100" src={LoadingImage} alt="Loading" />
                    </td>
                </tr>
            </tbody>
        </table>
    } />
}