import { useHookstate } from "@hookstate/core"
import { meusInvestimentos } from "../../estadosglobais/investimentos"

export default function TabelaAcoes() {
    const invest = useHookstate(meusInvestimentos)
    const lista = invest.get().acoes

    if (lista === undefined || lista === null || lista.length === 0) { return null }

    return <h5>Acões: {JSON.stringify(invest.get().acoes)}</h5>
}