import { useHookstate } from '@hookstate/core'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import LoginCallbackGoogle from './componentes/LoginCallbackGoogle'
import { autenticacao } from './estadosglobais/autenticacao'
import Ativos from './paginas/Ativos'
import Dashboard from './paginas/Dashboard'
import Home from './paginas/Home'
import Login from "./paginas/Login"
import Relatorios from './paginas/Relatorios'

function App() {
  const auth = useHookstate(autenticacao)
  const { token, errorMsg } = auth.get()

  // Se houve erro, disponibiliza somente a rota de Login
  if (errorMsg !== null && errorMsg !== "") {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" >
            <Login />
          </Route>

          <Route >
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

  // Se não tem token, disponibiliza as rotas de login
  if (token === null) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login/callback/google" >
            <LoginCallbackGoogle />
          </Route>

          <Route exact path="/login" >
            <Login />
          </Route>

          <Route >
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

  // Se o usuário já está logado, disponibiliza as outras rotas exceto a de login
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/ativos">
          <Ativos />
        </Route>

        <Route exact path="/relatorios">
          <Relatorios />
        </Route>

        <Route >
          <Redirect to="/home" />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App
