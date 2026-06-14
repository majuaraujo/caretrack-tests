const {
    validarLogin,
    registrarHabito,
    gerarAlerta
} = require('./caretrack');

test('Login válido', () => {
    expect(
        validarLogin(
            "usuario@caretrack.com",
            "123456"
        )
    ).toBe(true);
});

test('Login inválido', () => {
    expect(
        validarLogin(
            "usuario@caretrack.com",
            "senhaerrada"
        )
    ).toBe(false);
});

test('Registrar hábito', () => {
    expect(
        registrarHabito(2)
    ).toBe(true);
});

test('Gerar alerta de hidratação', () => {
    expect(
        gerarAlerta(1)
    ).toBe(true);
});
