import axios from 'axios'
import { urlBackendInvestimentos } from '../constantes/urls'
import { leSessionStorage } from '../estadosglobais/autenticacao'

async function buscaInvestimentos() {
    const token = leSessionStorage().token
    
    const requestOptions = {
        url: urlBackendInvestimentos,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': token
        }
    }

    try {
        const result = await axios(requestOptions)
        return result.data
    } catch (error) {
        throw new Error("Service 'Busca Investimentos' Error: " + error.message)
    }
}

export { buscaInvestimentos }
