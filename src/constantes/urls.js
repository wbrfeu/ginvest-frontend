// Caminhos do Ambiente de DESENVOLVIMENTO
const urlBackendDesenv = "http://localhost:2000"
const urlFrontendDesenv = "http://localhost:3000"

// Caminhos do Ambiente de PRODUÇÃO
const urlBackendProd = "http://34.68.109.223:2000"
const urlFrontendProd = "http://localhost:9050"

// Verifica em qual ambiente o frontend está rodando e aponta para o backend correto
let urlBackend = null
let urlFrontend = null
if (process.env.NODE_ENV === "development") {
    urlBackend = urlBackendDesenv
    urlFrontend = urlFrontendDesenv
}
else if (process.env.NODE_ENV === "production") {
    urlBackend = urlBackendProd
    urlFrontend = urlFrontendProd
}

const urlBackendLogin = urlBackend + "/login/google"

const urlBackendInvestimentos = urlBackend + "/investimentos"

const urlBackendSalvaNovaNotaNegoc = urlBackend + "/td/novann"

const urlBackendTabUteis = urlBackend + "/tabelasuteis"

export {
    urlBackendLogin,
    urlBackendInvestimentos,
    urlBackendSalvaNovaNotaNegoc,
    urlBackendTabUteis,
    urlFrontend
}