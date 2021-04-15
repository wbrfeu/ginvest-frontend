import { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Error from './componentes/Error'
import LoginCallbackGoogle from './componentes/LoginCallbackGoogle'
import Home from './paginas/Home'
import Login from "./paginas/Login"

function App() {
  const [authentication, setAuthentication] = useState(null)

  if (authentication === null) {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/login/callback/google" >
            <LoginCallbackGoogle setAuthentication={setAuthentication} />
          </Route>

          <Route exact path="/error">
            <Error />
          </Route>

          <Route >
            <Login />
          </Route>

        </Switch>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/error">
          <Error />
        </Route>

        <Route exact path="/home">
          <Home nome={authentication.data.nome} token={authentication.data.token} />
        </Route>

        <Route >
          <Redirect to="/home" />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App
