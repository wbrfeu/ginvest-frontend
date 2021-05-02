function calculaTotaisTD(listaTD) {
    if (listaTD === null || listaTD.length === undefined || listaTD.length === 0) {
        return 0
    }

    let soma = 0
    for (let i = 0; i < listaTD.length; i++) {
        const td = listaTD[i]
        soma = soma + (td.quantidade * td.valorUnitarioAtualVenda)
    }
    return soma
}

function calculaTotaisAcoes(listaAcoes) {
    if (listaAcoes === null || listaAcoes.length === undefined || listaAcoes.length === 0) {
        return 0
    }

    let soma = 0
    for (let i = 0; i < listaAcoes.length; i++) {
        const td = listaAcoes[i]
        soma = soma + (td.quantidade * td.valorUnitarioAtualVenda)
    }
    return soma
}

function calculaTotaisTitPriv(listaTitPriv) {
    if (listaTitPriv === null || listaTitPriv.length === undefined || listaTitPriv.length === 0) {
        return 0
    }

    let soma = 0
    for (let i = 0; i < listaTitPriv.length; i++) {
        const td = listaTitPriv[i]
        soma = soma + (td.quantidade * td.valorUnitarioAtualVenda)
    }
    return soma
}

function calculaTotaisFII(listaFII) {
    if (listaFII === null || listaFII.length === undefined || listaFII.length === 0) {
        return 0
    }

    let soma = 0
    for (let i = 0; i < listaFII.length; i++) {
        const td = listaFII[i]
        soma = soma + (td.quantidade * td.valorUnitarioAtualVenda)
    }
    return soma
}

export { calculaTotaisTD, calculaTotaisAcoes, calculaTotaisTitPriv, calculaTotaisFII }