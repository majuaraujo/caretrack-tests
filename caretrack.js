function validarLogin(email, senha) {
    return email === "usuario@caretrack.com" && senha === "123456";
}

function registrarHabito(litros) {
    return litros > 0;
}

function gerarAlerta(litros) {
    return litros < 2;
}

module.exports = {
    validarLogin,
    registrarHabito,
    gerarAlerta
};
