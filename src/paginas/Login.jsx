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

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <br/>
                <a href={process.env.REACT_APP_GOOGLELOGIN} >
                    <img src={ImgBotaoGoogle} alt="Login com Google" />
                </a>
                <br/>
                <AlertaErro msg={errorMsg} />

            </div>
        </Container>
    )
}