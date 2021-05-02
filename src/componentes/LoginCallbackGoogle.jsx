import { Redirect, useLocation } from "react-router"
import { useHookstate } from '@hookstate/core'
import queryString from 'query-string'
import { loginGoogle } from "../servicos/login"
import { autenticacao } from "../estadosglobais/autenticacao"
import Inicializando from "./Inicializando"
import { rotaLogin } from "../constantes/rotas"

export default function LoginCallbackGoogle() {
    // Faz a ligação com a variável de estado
    const auth = useHookstate(autenticacao)
    
    // Pega a URL da resposta do Google e extrai os parâmetros dela
    const location = useLocation()
    const qs = queryString.parse(location.search)

    // Se houver algum erro na resposta do Google seta a variavel de estado de erro
    // com a informação de erro e ela vai ser mostrada na tela de login
    if(qs.error !== undefined && qs.error !== "") {
        auth.set({
            nome: null,
            token: null,
            errorMsg: "Google Service Error: " + qs.error
        })
        return <Redirect to = {rotaLogin}/>
    }

    // Se o Google respondeu sem um código de erro, seta variável de estado
    // com informação de Undefined e retorna para a tela de login com essa informação
    if (qs.code === undefined || qs.state !== "ginvest") {
        auth.set({
            nome: null,
            token: null,
            errorMsg: "Google Service Error: Undefined Code or State Violation"
        })
        return <Redirect to = {rotaLogin}/>
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
                errorMsg: JSON.stringify(err.message)
            })
        })

    return <Inicializando />
}

/*
exemplo de URL de retorno do Google:
http://localhost:3000/login/callback/google?state=ginvest&code=4%2F0AY0e-g76xT9rDz0RD0Lq6vjj4h_JWBhJQNOLtIfnk3CroL0yZErMxaaIRBDiKo9t_njgpg&scope=openid&authuser=0&prompt=consent#

// Possível retorno do Google com ERRO
http://localhost:3000/login/callback/google?error=access_denied_putaquepariu


http://localhost:3000/login/callback/google?state=bla
*/