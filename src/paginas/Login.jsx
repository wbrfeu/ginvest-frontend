import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import PersonIcon from '@material-ui/icons/Person'
import ImgBotaoGoogle from '../static/btn_google_signin_light_normal_web.png'
import AlertaErro from '../componentes/AlertaErro'
import { useHookstate } from '@hookstate/core'
import { autenticacao } from '../estadosglobais/autenticacao'
import { rotaCallbackGoogle } from '../constantes/rotas'
import { urlFrontend } from '../constantes/urls'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function Login() {
    const classes = useStyles()
    const auth = useHookstate(autenticacao)
    const { errorMsg } = auth.get()

    const urlGoogle = () => {
        const redirect_uri = urlFrontend + rotaCallbackGoogle
        const urlGoogleFinal = `https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email%20profile&include_granted_scopes=true&response_type=code&state=ginvest&redirect_uri=${redirect_uri}&client_id=269809466369-ib246j23i04lolir3kl97rimp041ptoc.apps.googleusercontent.com&prompt=select_account`
        return urlGoogleFinal
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <h1>GInvest</h1>
                <br/>
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <br/>
                <a href={ urlGoogle() } >
                    <img src={ImgBotaoGoogle} alt="Login com Google" />
                </a>
                <br/>
                <AlertaErro msg={errorMsg} />

            </div>
        </Container>
    )
}