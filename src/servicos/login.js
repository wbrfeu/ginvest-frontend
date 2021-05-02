import axios from 'axios'
import { urlBackendLogin } from '../constantes/urls'
import { salvaAutenticacaoStorage } from '../estadosglobais/autenticacao'
import { capturaErro } from './capturaerro'

async function loginGoogle(code) {
    const requestOptions = {
        url: urlBackendLogin,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
            code: code
        }
    }

    try {
        const result = await axios(requestOptions)
        salvaAutenticacaoStorage(result.data)
        return result.data
    } catch (error) {
        throw new Error(capturaErro(error))
    }
}

export { loginGoogle }