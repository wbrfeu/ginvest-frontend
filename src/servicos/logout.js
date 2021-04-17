import { autenticacao } from '../estadosglobais/autenticacao'

function logout() {
    autenticacao.set({
        nome: null,
        token: null,
        errorMsg: null 
    })
}

export { logout }