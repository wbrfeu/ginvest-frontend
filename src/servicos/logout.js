import { autenticacao, removeAutenticacaoStorage } from '../estadosglobais/autenticacao'
import { meusInvestimentos, removeInvestimentosStorage } from '../estadosglobais/investimentos'

function logout() {
    removeAutenticacaoStorage()
    removeInvestimentosStorage()

    autenticacao.set({
        nome: null,
        token: null,
        errorMsg: null 
    })

    meusInvestimentos.set({
        td: null,
        acoes: null,
        fii: null,
        tit_priv: null
    })
}

export { logout }