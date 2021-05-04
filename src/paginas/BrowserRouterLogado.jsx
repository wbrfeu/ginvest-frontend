import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import MeusInvestimentos from './MeusInvestimentos'
import Dashboard from './Dashboard'
import Home from './Home'
import Relatorios from './Relatorios'
import NotaNegocTD from './NotaNegocTD'
import { rotaDashboard, rotaHome, rotaMeusInvest, rotaNotaNegocTD, rotaRelatorios } from '../constantes/rotas'
import NavBar from '../componentes/NavBar'

export default function BrowserRouterLogado() {
    return (
        <BrowserRouter>
            <NavBar inside={
                <Switch>

                    <Route exact path={rotaHome}>
                        <Home />
                    </Route>

                    <Route exact path={rotaDashboard}>
                        <Dashboard />
                    </Route>

                    <Route exact path={rotaMeusInvest}>
                        <MeusInvestimentos />
                    </Route>

                    <Route exact path={rotaRelatorios}>
                        <Relatorios />
                    </Route>

                    <Route exact path={rotaNotaNegocTD}>
                        <NotaNegocTD />
                    </Route>

                    <Route >
                        <Redirect to={rotaHome} />
                    </Route>

                </Switch>
            } />
        </BrowserRouter>
    )
}