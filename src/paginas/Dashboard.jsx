import DashboardItens from '../componentes/dashboard/DashboardItens'
import NavBar from '../componentes/NavBar'

export default function Dashboard() {
    return <NavBar inside={ <DashboardItens/> } />
}
