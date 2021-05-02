import { createState } from '@hookstate/core'

// "autenticação" ela é criada pelo fato de ser importada por outro módulo
const key = "autenticacao"
const autenticacao = createState(leAutenticacaoStorage())

function leAutenticacaoStorage() {
    const strArmazenada = sessionStorage.getItem(key)

    if (strArmazenada === null) {
        return {
            nome: null,
            token: null,
            errorMsg: null
        }
    }

    const objTemp = JSON.parse(strArmazenada)

    return {
        nome: objTemp.nome,
        token: objTemp.token,
        errorMsg: null
    }
}

function salvaAutenticacaoStorage(obj) {
    sessionStorage.setItem(key, JSON.stringify(obj))
}

function removeAutenticacaoStorage() {
    sessionStorage.removeItem(key)
}

export { autenticacao, leAutenticacaoStorage, salvaAutenticacaoStorage, removeAutenticacaoStorage }