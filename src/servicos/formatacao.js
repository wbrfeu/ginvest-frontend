// TODO - frontend está exibindo data com fusorário errado

function formataDinheiroBR(valor) {
    if (valor === null) { return null }

    return valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

function formataPercentualBR(valor, digitos = 0) {
    if (valor === null) { return null }

    return valor.toLocaleString('pt-BR', {minimumFractionDigits: digitos, maximumFractionDigits: digitos}) + " %"
}

function formataDataBR(data) {
    if (data === null) { return null }

    if (typeof(data) === "string") {
        data = new Date(data)
    }

    const dataFormatada = data.getDate() + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()

    return dataFormatada
}

function formataNumero(valor, digitos = 0) {
    if (valor === null) { return null }

    return valor.toLocaleString('pt-BR', {minimumFractionDigits: digitos, maximumFractionDigits: digitos})
}

export { formataDinheiroBR, formataPercentualBR, formataDataBR, formataNumero }