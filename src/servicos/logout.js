import { autenticacao } from '../estadosglobais/autenticacao'

function logout() {
    sessionStorage.removeItem("autenticacao")

    autenticacao.set({
        nome: null,
        token: null,
        errorMsg: null 
    })
}

export { logout }