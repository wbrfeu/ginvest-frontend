import axios from 'axios'
import { urlBackendInvestimentos } from '../constantes/urls'
import { leAutenticacaoStorage } from '../estadosglobais/autenticacao'
import { salvaInvestimentosStorage } from '../estadosglobais/investimentos'
import { capturaErro } from './capturaerro'

async function buscaInvestimentos() {    
    const token = leAutenticacaoStorage().token
   
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
        salvaInvestimentosStorage(result.data)
        return result.data
    } catch (error) {        
        throw new Error("Erro ao Buscar os Investimentos: " + capturaErro(error))
    }
}

export { buscaInvestimentos }
