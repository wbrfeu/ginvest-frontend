import { useHookstate } from '@hookstate/core'
import NavBar from '../componentes/NavBar'
import OlaUsuario from '../componentes/OlaUsuario'
import { meusInvestimentos } from '../estadosglobais/investimentos'
import { buscaInvestimentos } from '../servicos/buscainvestimentos'
import { erroGlobal } from '../estadosglobais/erro-global'

export default function Home() {
    // Ao entrar no Home faz a carga dos Meus Investimentos,
    // a partir do Backend e salva na Variavel de Estado
    const invest = useHookstate(meusInvestimentos)
    const erro = useHookstate(erroGlobal)
    
    if (invest.get() === null) {
        buscaInvestimentos()
        .then((result) => {
            invest.set(result)
        })
        .catch((err) => {
            erro.set(err.message)
        })
    }

    return <NavBar inside={ <OlaUsuario/> }/>
}
