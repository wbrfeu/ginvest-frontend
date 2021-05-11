import { useHookstate } from "@hookstate/core"
import { tabelasUteis } from "../estadosglobais/tabelas-uteis"

export default function Relatorios() {
    const tabuteis = useHookstate(tabelasUteis)

    return (
        <>
            <h1>Relatórios</h1>
            <h3>{JSON.stringify(tabuteis.get())}</h3>
        </>
    )

}
