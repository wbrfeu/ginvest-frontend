import axios from 'axios'
import { urlBackendLogin } from '../constantes/urls'

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
        sessionStorage.setItem("autenticacao", JSON.stringify(result.data))
        return result.data
    } catch (error) {
        throw "Service Login Error: " + error.message
    }
}

export { loginGoogle }