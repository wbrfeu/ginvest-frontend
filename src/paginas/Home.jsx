import { useHookstate } from '@hookstate/core'
import OlaUsuario from '../componentes/OlaUsuario'
import { meusInvestimentos } from '../estadosglobais/investimentos'
import { buscaInvestimentos } from '../servicos/buscainvestimentos'
import { erroGlobal } from '../estadosglobais/erro-global'
import DialogoErro from '../componentes/DialogoErro'

export default function Home() {
    // Ao entrar no Home faz a carga dos Meus Investimentos,
    // a partir do Backend e salva na Variavel de Estado
    const invest = useHookstate(meusInvestimentos)
    const erro = useHookstate(erroGlobal)

    // só vai buscar os investimentos no backend se não houver valores atualizados no estado global
    if (invest.get().td === null || invest.get().acoes === null || invest.get().fii === null || invest.get().tit_priv === null) {
        buscaInvestimentos()
            .then((result) => {
                invest.set(result)
            })
            .catch((err) => {
                erro.set(err.message)
            })
    }

    // TODO - Importar tabelas úteis aqui....

    return (
        <>
            <OlaUsuario />
            <DialogoErro />
        </>
    )


}
