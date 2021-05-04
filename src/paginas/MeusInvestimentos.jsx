import TabelaAcoes from '../componentes/meusinvestimentos/TabelaAcoes'
import TabelaFII from '../componentes/meusinvestimentos/TabelaFII'
import TabelaTitPriv from '../componentes/meusinvestimentos/TabelaTitPriv'
import TabelaTD from '../componentes/meusinvestimentos/TabelaTD'

export default function MeusInvestimentos() {
    return (
        <div>
            <TabelaTD/>
            <TabelaAcoes/>
            <TabelaFII/>
            <TabelaTitPriv/>
        </div>
    )
}
