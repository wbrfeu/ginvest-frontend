import { useHookstate } from "@hookstate/core"
import { meusInvestimentos } from "../../estadosglobais/investimentos"

export default function TabelaFII() {
    const invest = useHookstate(meusInvestimentos)
    const lista = invest.get().fii

    if (lista === undefined || lista === null || lista.length === 0) { return null }

    return <h5>FII: {JSON.stringify(invest.get().fii)}</h5>
}