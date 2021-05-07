import { autenticacao, autenticacaoInicial, removeAutenticacaoStorage } from '../estadosglobais/autenticacao'
import { meusInvestimentos, meusInvestimentosInicial, removeInvestimentosStorage } from '../estadosglobais/investimentos'

function logout() {
    removeAutenticacaoStorage()
    removeInvestimentosStorage()
    autenticacao.set(autenticacaoInicial)
    meusInvestimentos.set(meusInvestimentosInicial)
}

export { logout }