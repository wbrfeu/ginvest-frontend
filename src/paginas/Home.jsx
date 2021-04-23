import { useHookstate } from '@hookstate/core'
import NavBar from '../componentes/NavBar'
import OlaUsuario from '../componentes/OlaUsuario'
import { meusInvestimentos } from '../estadosglobais/investimentos'
import { buscaInvestimentos } from '../servicos/buscainvestimentos'

export default function Home() {
    // Ao entrar no Home faz a carga dos Meus Investimentos,
    // a partir do Backend e salva na Variavel de Estado
    const invest = useHookstate(meusInvestimentos)
    console.log("Variavel de Estado invest: ")
    console.log(invest.get())

    if (invest.get() === null) {
        console.log("Buscando no Backend dados")

        // TODO - Tratar erro do .catch promisses
        buscaInvestimentos()
        .then((result) => {
            console.log("Resposta do Backend")
            console.log(result)
            invest.set(result)
        })
        .catch((err) => {
            console.log("Erro ao Ler do Backend")
            console.log(err)
        })
    }

    return <NavBar inside={ <OlaUsuario/> }/>
}
