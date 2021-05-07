import { useHookstate } from "@hookstate/core"
import { meusInvestimentos } from "../estadosglobais/investimentos"
import { calculaTotaisTD, calculaTotaisAcoes, calculaTotaisTitPriv, calculaTotaisFII } from "../servicos/calculos"
import PieInvestimentos from "../componentes/dashboard/PieInvestimentos"
import TabelaInvestimentos from "../componentes/dashboard/TabelaInvestimentos"
import Box from '@material-ui/core/Box'

export default function Dashboard() {
    const invest = useHookstate(meusInvestimentos)
    let totaisTD = calculaTotaisTD(invest.get().td)
    let totaisAcoes = calculaTotaisAcoes(invest.get().acoes)
    let totaisTitPriv = calculaTotaisTitPriv(invest.get().tit_priv)
    let totaisFII = calculaTotaisFII(invest.get().fii)

    // TODO - Apagar as 3 Linhas abaixo
    totaisAcoes += 10000
    totaisTitPriv += 10000
    totaisFII += 10000

    const totalGeral = totaisTD + totaisAcoes + totaisTitPriv + totaisFII

    const data = [
        { name: 'Ações', value: totaisAcoes, percent: Math.round(100 * totaisAcoes / totalGeral) },
        { name: 'Tesouro Direto', value: totaisTD, percent: Math.round(100 * totaisTD / totalGeral) },
        { name: 'Títulos Privados', value: totaisTitPriv, percent: Math.round(100 * totaisTitPriv / totalGeral) },
        { name: 'FII', value: totaisFII, percent: Math.round(100 * totaisFII / totalGeral) },
    ]

    return (
        <div style={{ width: '100%'}}>
            <h3>Dashboard</h3>
            <Box display="flex" flexWrap="wrap" p={1} m={1} >
                <TabelaInvestimentos dados={data} total={totalGeral} />
                <PieInvestimentos dados={data} />
            </Box>
        </div>
    )
}
