import { Alert } from "@material-ui/lab"

export default function AlertaErro(props) {
    if(props.msg === null || props.msg === "") {
        return null
    }

    return (
        <Alert severity="error" variant="filled">
            {props.msg}
        </Alert>
    )
    
}