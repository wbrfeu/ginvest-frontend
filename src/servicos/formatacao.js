function formataDinheiroBR(valor) {
    if (valor === null) { return null }

    return valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

function formataPercentualBR(valor) {
    if (valor === null) { return null }

    return valor.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 0}) + " %"
}

function formataDataBR(data) {
    if (data === null) { return null }

    if (typeof(data) === "string") {
        data = new Date(data)
    }

    const dataFormatada = data.getDate() + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()

    return dataFormatada
}

export { formataDinheiroBR, formataPercentualBR, formataDataBR }