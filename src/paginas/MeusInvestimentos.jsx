import TabelaAcoes from '../componentes/meusinvestimentos/TabelaAcoes'
import TabelaFII from '../componentes/meusinvestimentos/TabelaFII'
import TabelaTitPriv from '../componentes/meusinvestimentos/TabelaTitPriv'
import TabelaTD from '../componentes/meusinvestimentos/TabelaTD'
import TituloTabelaTD from '../componentes/meusinvestimentos/TituloTabelaTD'

export default function MeusInvestimentos() {
    return (
        <div>
            <TituloTabelaTD/>            
            <TabelaTD/>

            <TabelaAcoes/>
            
            <TabelaFII/>
            
            <TabelaTitPriv/>
        </div>
    )
}
