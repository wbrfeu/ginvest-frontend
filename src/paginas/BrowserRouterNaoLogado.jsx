import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import LoginCallbackGoogle from '../componentes/LoginCallbackGoogle'
import Login from "./Login"
import { rotaCallbackGoogle, rotaLogin } from '../constantes/rotas'

export default function BrowserRouterNaoLogado() {
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