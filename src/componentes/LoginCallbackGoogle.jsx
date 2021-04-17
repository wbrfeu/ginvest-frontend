import { Redirect, useLocation } from "react-router"
import { useHookstate } from '@hookstate/core'
import queryString from 'query-string'
import { loginGoogle } from "../servicos/login"
import { autenticacao } from "../estadosglobais/autenticacao"

export default function LoginCallbackGoogle() {
    const auth = useHookstate(autenticacao)
    
    // Pega a URL da resposta do Google e extrai os parâmetros dela
    const location = useLocation()
    const qs = queryString.parse(location.search)

    // TODO - Testar este Redirect se está funcionando
    if (qs.code === undefined || qs.state !== "ginvest") {
        return <Redirect to="/login" />
    }

    // Passa o "code" para o backend fazer o login
    loginGoogle(qs.code)
        .then((result) => {
            auth.set({
                nome: result.nome,
                token: result.token,
                errorMsg: null
            })
        })
        .catch((err) => {
            // TODO - Adicionar mensagem específica de erro do Axios
            auth.set({
                nome: null,
                token: null,
                errorMsg: err
            })
        })

    return <h1>Aguardando resposta ...</h1>
}

/*
exemplo de URL de retorno do Google:
http://localhost:3000/login/callback/google?state=ginvest&code=4%2F0AY0e-g76xT9rDz0RD0Lq6vjj4h_JWBhJQNOLtIfnk3CroL0yZErMxaaIRBDiKo9t_njgpg&scope=openid&authuser=0&prompt=consent#

*/