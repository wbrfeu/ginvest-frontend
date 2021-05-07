import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useHookstate } from '@hookstate/core'
import { erroGlobal } from '../estadosglobais/erro-global'


export default function DialogoErro() {
    const erro = useHookstate(erroGlobal)

    const handleOK = () => {
        erro.set(null)
    }

    if (erro.get() === null) {return null}

    return (
        <>            
            <Dialog
                open={true}
                onClose={handleOK}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Erro"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {erro.get()}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOK} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
