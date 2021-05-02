import { useHookstate } from '@hookstate/core'
import NavBar from '../componentes/NavBar'
import { meusInvestimentos } from '../estadosglobais/investimentos'

export default function MeusInvestimentos() {
    const invest = useHookstate(meusInvestimentos)

    return <NavBar inside={ <h4>{JSON.stringify(invest.get())}</h4> }/>
}
