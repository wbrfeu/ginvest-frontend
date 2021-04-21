import { investimentos } from "../../estadosglobais/investimentos"
import { useHookstate } from '@hookstate/core'
import { buscaInvestimentos } from "../../servicos/buscainvestimentos"

export default function MeusInvestimentos() {
    const invest = useHookstate(investimentos)
    console.log("Variavel de Estado invest: ")
    console.log(invest.get())

    if (invest.get() === null) {
        console.log("Buscando no Backend dados")

        // TODO - Tratar erro do .catch promisses
        buscaInvestimentos()
        .then((result) => {
            console.log("Resposta do Backend")
            console.log(result)
            invest.set(result)
        })
        .catch((err) => {
            console.log("Erro ao Ler do Backend")
            console.log(err)
        })

        return <h4>Aguardando resposta ...</h4>
    }

    return <h4>{ JSON.stringify(invest.get()) }</h4>
    
}