import NavBar from '../componentes/NavBar'
import OlaUsuario from '../componentes/OlaUsuario'

export default function Home() {
    return <NavBar inside={ <OlaUsuario/> }/>
}
