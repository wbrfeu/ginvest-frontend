import { useHookstate } from '@hookstate/core'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import LoginCallbackGoogle from './componentes/LoginCallbackGoogle'
import { autenticacao } from './estadosglobais/autenticacao'
import MeusInvestimentos from './paginas/MeusInvestimentos'
import Dashboard from './paginas/Dashboard'
import Home from './paginas/Home'
import Login from "./paginas/Login"
import Relatorios from './paginas/Relatorios'
import { rotaCallbackGoogle, rotaDashboard, rotaHome, rotaLogin, rotaMeusInvest, rotaRelatorios } from './constantes/rotas'

function App() {
  const auth = useHookstate(autenticacao) // "autenticação" ela é criada pelo fato de ser importada
  const { token } = auth.get()

  // Se não tem usuário logado, disponibiliza somente as rotas de login
  if (token === null) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = {rotaCallbackGoogle} >
            <LoginCallbackGoogle />
          </Route>

          <Route exact path = {rotaLogin} >
            <Login />
          </Route>

          <Route >
            <Redirect to = {rotaLogin} />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

  // Se o usuário já está logado, disponibiliza as outras rotas exceto a de login
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path = {rotaHome}>
          <Home />
        </Route>

        <Route exact path = {rotaDashboard}>
          <Dashboard />
        </Route>

        <Route exact path = {rotaMeusInvest}>
          <MeusInvestimentos />
        </Route>

        <Route exact path = {rotaRelatorios}>
          <Relatorios />
        </Route>

        <Route >
          <Redirect to = {rotaHome} />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App
