// ================================================
// PROJETO: SISTEMA DE VALIDAÇÃO DE USUÁRIOS
// Autor: Paloma Oliveira | github.com/paloma-qa
// Objetivo: refatorar validações em funções separadas
// Melhoria em relação ao dia3.js: cada validação isolada e reutilizável
// ================================================

// ---- FUNÇÕES DE VALIDAÇÃO ----

// Valida se o nome é uma string não vazia
function validarNome(nome) {
    if (typeof nome !== "string" || nome === "") {
        return "❌ Nome inválido";
    }
    return "✅ Nome válido";
}

// Valida se o email é uma string e contém @
function validarEmail(email) {
    if (typeof email !== "string" || !email.includes("@")) {
        return "❌ Email inválido";
    }
    return "✅ Email válido";
}

// Valida se a idade é um número, positiva e maior ou igual a 18
function validarIdade(idade) {
    if (typeof idade !== "number") {
        return "❌ Idade deve ser um número";
    }
    if (idade < 0) {
        return "❌ Idade inválida";
    }
    if (idade < 18) {
        return "⚠️ Menor de idade";
    }
    return "✅ Idade válida";
}

// Chama todas as validações para um usuário
function validarUsuario(usuario) {
    console.log("--- Validando:", usuario.nome, "---");
    console.log(validarNome(usuario.nome));
    console.log(validarEmail(usuario.email));
    console.log(validarIdade(usuario.idade));
}

// ---- CASOS DE TESTE ----

const usuarios = [
    // CT01 — usuário completamente válido
    { nome: "Paloma", email: "paloma@email.com", idade: 29 },

    // CT02 — ❌ 3 bugs: nome vazio, email sem @, idade negativa
    { nome: "",       email: "sem-arroba.com",   idade: -1 },

    // CT03 — ⚠️ menor de idade, mas nome e email válidos
    { nome: "Ana",    email: "ana@email.com",     idade: 17 },

    // CT04 — ❌ BUG: idade como string em vez de number
    { nome: "João",   email: "joao@email.com",    idade: "vinte" },
];

// Percorre todos os usuários e valida cada um
for (let i = 0; i < usuarios.length; i++) {
    validarUsuario(usuarios[i]);
}