import { createState } from '@hookstate/core'

const key = "tabelasuteis"

const tabelasUteisInicial = {
    corretoras: null,
    td: null,
    acoes: null,
    fii: null,
    tit_priv: null
}

const tabelasUteis = createState(leTabelasUteisStorage())

function leTabelasUteisStorage() {
    const strArmazenada = sessionStorage.getItem(key)

    if (strArmazenada === null) {
        return tabelasUteisInicial
    }

    const objTemp = JSON.parse(strArmazenada)
    
    return {
        corretoras: objTemp.corretoras,
        td: objTemp.td,
        acoes: objTemp.acoes,
        fii: objTemp.fii,
        tit_priv: objTemp.tit_priv
    }
}

function salvaTabelasUteisStorage(obj) {
    sessionStorage.setItem(key, JSON.stringify(obj))
}

function removeTabelasUteisStorage() {
    sessionStorage.removeItem(key)
}

export { tabelasUteis, leTabelasUteisStorage, salvaTabelasUteisStorage, removeTabelasUteisStorage }