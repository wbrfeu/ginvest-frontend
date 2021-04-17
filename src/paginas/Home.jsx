import { useHookstate } from '@hookstate/core'
import { autenticacao } from '../estadosglobais/autenticacao'


export default function Home() {
    const auth = useHookstate(autenticacao)

    return (
        <div>
            <h1>GInvest Home</h1>
            <h2>Olá {auth.get().nome}</h2>
            <h3>Seu Token é {auth.get().token}</h3>
        </div>
    )
}