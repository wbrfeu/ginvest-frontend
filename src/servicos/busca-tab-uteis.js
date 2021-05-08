import axios from 'axios'
import { urlBackendTabUteis } from '../constantes/urls'
import { leAutenticacaoStorage } from '../estadosglobais/autenticacao'
import { salvaTabelasUteisStorage } from '../estadosglobais/tabelas-uteis'
import { capturaErro } from './capturaerro'

async function buscaTabelasUteis() {    
    const token = leAutenticacaoStorage().token
   
    const requestOptions = {
        url: urlBackendTabUteis,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': token
        }
    }

    try {
        const result = await axios(requestOptions)
        salvaTabelasUteisStorage(result.data)
        return result.data
    } catch (error) {        
        throw new Error("Erro ao Buscar as Tabelas Úteis: " + capturaErro(error))
    }
}

export { buscaTabelasUteis }
