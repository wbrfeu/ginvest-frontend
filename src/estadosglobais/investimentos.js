import { createState } from '@hookstate/core'

const key = "investimentos"
const meusInvestimentos = createState(leInvestimentosStorage())

function leInvestimentosStorage() {
    const strArmazenada = sessionStorage.getItem(key)

    if (strArmazenada === null) {
        return {
            td: null,
            acoes: null,
            fii: null,
            tit_priv: null
        }
    }

    const objTemp = JSON.parse(strArmazenada)
    
    return {
        td: objTemp.td,
        acoes: objTemp.acoes,
        fii: objTemp.fii,
        tit_priv: objTemp.tit_priv
    }
}

function salvaInvestimentosStorage(obj) {
    sessionStorage.setItem(key, JSON.stringify(obj))
}

function removeInvestimentosStorage() {
    sessionStorage.removeItem(key)
}

export { meusInvestimentos, leInvestimentosStorage, salvaInvestimentosStorage, removeInvestimentosStorage }