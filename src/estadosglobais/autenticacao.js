import { createState } from '@hookstate/core'

const autenticacao = createState({
    nome: null,
    token: null,
    errorMsg: null 
})

export { autenticacao }