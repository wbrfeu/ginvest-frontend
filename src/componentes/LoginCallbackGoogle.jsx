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

    if(qs.error !== undefined && qs.error !== "") {
        auth.set({
            nome: null,
            token: null,
            errorMsg: "Google Service Error: " + qs.error
        })
        return <Redirect to="/login"/>
    }

    if (qs.code === undefined || qs.state !== "ginvest") {
        auth.set({
            nome: null,
            token: null,
            errorMsg: "Google Service Error: Undefined Code or State Violation"
        })
        return <Redirect to="/login"/>
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

// Possível retorno do Google com ERRO
http://localhost:3000/login/callback/google?error=access_denied_putaquepariu


http://localhost:3000/login/callback/google?state=bl
*/