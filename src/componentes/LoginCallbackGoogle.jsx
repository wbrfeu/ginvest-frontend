import { Redirect, useLocation } from "react-router"
import queryString from 'query-string'
import { loginGoogle } from "../servicos/login"

export default function LoginCallbackGoogle(props) {
    const location = useLocation()
    const qs = queryString.parse(location.search)

    // TODO - Testar este Redirect se está funcionando
    if (qs.code === undefined || qs.state !== "ginvest") {
        return <Redirect to="/error" />
    }

    // Passa o "code" para o backend fazer o login
    loginGoogle(qs.code)
        .then((result) => {
            props.setAuthentication(result)
        })
        .catch((err) => {
            console.error("Deu Erro: " + err)
            // TODO - Como exibir esta mensagem de erro no frontend???
        })

    return <h1>Aguardando resposta ...</h1>
}