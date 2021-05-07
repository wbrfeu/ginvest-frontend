import axios from 'axios'
import { urlBackendSalvaNovaNotaNegoc } from '../constantes/urls'
import { leAutenticacaoStorage } from '../estadosglobais/autenticacao'
import { capturaErro } from './capturaerro'

async function enviaNovaNotaTD(notaNegoc) {    
    const token = leAutenticacaoStorage().token

    const requestOptions = {
        url: urlBackendSalvaNovaNotaNegoc,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': token
        },
        data: notaNegoc
    }

    try {
        const result = await axios(requestOptions)
        return result.data
    } catch (error) {        
        throw new Error("Erro no Envio da Nota de Negociação TD: " + capturaErro(error))
    }
}

export { enviaNovaNotaTD }