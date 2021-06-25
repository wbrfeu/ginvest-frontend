// Caminhos do Ambiente de DESENVOLVIMENTO
const urlBackendDesenv = "http://localhost:2000"

// Caminhos do Ambiente de PRODUÇÃO
const urlBackendProd = "http://34.68.109.223:2000"

// Verifica em qual ambiente o frontend está rodando e aponta para o backend correto
let urlBackend = null
if (process.env.NODE_ENV === "development") {
    urlBackend = urlBackendDesenv
}
else if (process.env.NODE_ENV === "production") {
    urlBackend = urlBackendProd
}

const urlBackendLogin = urlBackend + "/login/google"

const urlBackendInvestimentos = urlBackend + "/investimentos"

const urlBackendSalvaNovaNotaNegoc = urlBackend + "/td/novann"

const urlBackendTabUteis = urlBackend + "/tabelasuteis"

// Captura o Endereço onde o Frontend Está Rodando
const urlFrontend = window.location.origin

export {
    urlBackendLogin,
    urlBackendInvestimentos,
    urlBackendSalvaNovaNotaNegoc,
    urlBackendTabUteis,
    urlFrontend
}