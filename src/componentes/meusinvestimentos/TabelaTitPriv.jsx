import { useHookstate } from "@hookstate/core"
import { meusInvestimentos } from "../../estadosglobais/investimentos"

export default function TabelaTitPriv() {
    const invest = useHookstate(meusInvestimentos)
    const lista = invest.get().tit_priv

    if (lista === undefined || lista === null || lista.length === 0) { return null }

    return <h5>Títulos Privados: {JSON.stringify(invest.get().tit_priv)}</h5>
}