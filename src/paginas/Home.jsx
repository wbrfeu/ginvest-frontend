
export default function Home(props) {
    return (
        <div>
            <h1>GInvest Home</h1>
            <h2>Olá {props.nome}</h2>
            <h3>Seu Token é {props.token}</h3>
        </div>
    )
}