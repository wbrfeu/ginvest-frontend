function formataDinheiroBR(valor) {
    return valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

function formataPercentualBR(valor) {
    return valor.toLocaleString('pt-BR', {minimumFractionDigits: 1, maximumFractionDigits: 1}) + " %"
}

export { formataDinheiroBR, formataPercentualBR }