import { createState } from '@hookstate/core'

const autenticacao = createState(leSessionStorage())

function leSessionStorage() {
    const obj = {
        nome: null,
        token: null,
        errorMsg: null 
    }

    const strArmazenada = sessionStorage.getItem("autenticacao")

    if(strArmazenada === null) {
        return obj
    }

    const objTemp = JSON.parse(strArmazenada)
    obj.nome = objTemp.nome
    obj.token = objTemp.token

    // TODO - Ler da Session Storage e retornar o seu conteúdo
    return obj
}

export { autenticacao }