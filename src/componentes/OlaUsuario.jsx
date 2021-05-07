import { autenticacao } from "../estadosglobais/autenticacao"
import { useHookstate } from '@hookstate/core'

export default function OlaUsuario() {
    const auth = useHookstate(autenticacao)

    return <h2>Olá {auth.get().nome}</h2>
}