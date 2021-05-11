import { autenticacao, autenticacaoInicial, removeAutenticacaoStorage } from '../estadosglobais/autenticacao'
import { meusInvestimentos, meusInvestimentosInicial, removeInvestimentosStorage } from '../estadosglobais/investimentos'
import { removeTabelasUteisStorage, tabelasUteis, tabelasUteisInicial } from '../estadosglobais/tabelas-uteis'

function logout() {
    removeAutenticacaoStorage()
    removeInvestimentosStorage()
    removeTabelasUteisStorage()
    autenticacao.set(autenticacaoInicial)
    meusInvestimentos.set(meusInvestimentosInicial)
    tabelasUteis.set(tabelasUteisInicial)
}

export { logout }