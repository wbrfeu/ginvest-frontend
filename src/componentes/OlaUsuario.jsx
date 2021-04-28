import { autenticacao } from "../estadosglobais/autenticacao"
import { useHookstate } from '@hookstate/core'
import AlertaErro from "./AlertaErro"
import { erroGlobal } from '../estadosglobais/erro-global.js'

export default function OlaUsuario() {
    const erro = useHookstate(erroGlobal)
    const auth = useHookstate(autenticacao)

    return (
        <div>
            <h2>Olá {auth.get().nome}</h2>
            <h3><AlertaErro msg={erro.get()} /></h3>
        </div>
    )
}