import axios from 'axios'
import { urlBackendInvestimentos } from '../constantes/urls'

async function buscaInvestimentos() {
    const requestOptions = {
        url: urlBackendInvestimentos,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }

    try {
        // TODO - Testar se o status da resposta é =200 antes de retornar o result
        const result = await axios(requestOptions)
        return result.data
    } catch (error) {
        throw new Error("Service 'Busca Investimentos' Error: " + error.message)
    }
}

export { buscaInvestimentos }