function capturaErro(error) {
    let msg = null

    if (error.response) {
        msg = error.response.status + " - " + toString(error.response.data)
    }
    else {
        msg = error.message
    }
    return msg
}

// Se o tipo de obj é um objeto dá uma stringuificada, se não, volta o próprio
// tipo primitivo (number, boolean...)
function toString(obj) {
    let msg = JSON.stringify(obj)

    // Limpar os caracteres " e \
    msg = msg.replaceAll('"', '')
    msg = msg.replaceAll('\\', '')

    return msg
}

export { capturaErro }