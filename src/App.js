import { useHookstate } from '@hookstate/core'
import { autenticacao } from './estadosglobais/autenticacao'
import BrowserRouterLogado from './paginas/BrowserRouterLogado'
import BrowserRouterNaoLogado from './paginas/BrowserRouterNaoLogado'

function App() {
  const auth = useHookstate(autenticacao) // "autenticação" ela é criada pelo fato de ser importada
  const { token } = auth.get()

  // Se não tem usuário logado, disponibiliza somente as rotas de login
  if (token === null) {
    return (
      <BrowserRouterNaoLogado/>
    )
  }

  // Se o usuário já está logado, disponibiliza as outras rotas exceto a de login
  return (
    <BrowserRouterLogado/>
  )
}

export default App
