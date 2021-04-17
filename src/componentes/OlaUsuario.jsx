import { autenticacao } from "../estadosglobais/autenticacao"
import { useHookstate } from '@hookstate/core'

export default function OlaUsuario() {
    const auth = useHookstate(autenticacao)

    return (
        <div>
            <h2>Olá {auth.get().nome}</h2>
            <h3>Seu Token é {auth.get().token}</h3>
        </div>
    )
}