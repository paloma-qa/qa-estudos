// ================================================
// 🧪 PROJETO: VALIDAÇÃO DE USUÁRIOS
// Autor: Paloma Oliveira
// Objetivo: validar dados de entrada com funções reutilizáveis
// ================================================

// ================================
// 🔧 FUNÇÕES DE VALIDAÇÃO
// ================================

// CT01 — Nome deve ser string não vazia
function validarNome(nome) {
    if (typeof nome !== "string") {
        return "❌ Nome deve ser texto";
    }
    if (nome.trim() === "") {
        return "❌ Nome obrigatório";
    }
    return "✅ Nome válido";
}

// CT02 — Email deve ser válido
function validarEmail(email) {
    if (typeof email !== "string") {
        return "❌ Email deve ser texto";
    }
    if (!email.includes("@")) {
        return "❌ Email inválido";
    }
    return "✅ Email válido";
}

// CT03 — Idade deve ser número válido
function validarIdade(idade) {
    if (typeof idade !== "number") {
        return "❌ Idade deve ser number";
    }
    if (idade < 0) {
        return "❌ Idade inválida";
    }
    if (idade < 18) {
        return "⚠️ Menor de idade";
    }
    return "✅ Idade válida";
}

// ================================
// 🧪 FUNÇÃO PRINCIPAL DE VALIDAÇÃO
// ================================

function validarUsuario(usuario) {
    console.log(`\n🔍 Validando usuário: ${usuario.nome || "NOME VAZIO"}`);

    const resultadoNome = validarNome(usuario.nome);
    const resultadoEmail = validarEmail(usuario.email);
    const resultadoIdade = validarIdade(usuario.idade);

    console.log("CT01:", resultadoNome);
    console.log("CT02:", resultadoEmail);
    console.log("CT03:", resultadoIdade);
}

// ================================
// 🧪 MASSA DE DADOS (TESTES)
// ================================

const usuarios = [

    // CT04 — Usuário válido
    { nome: "Paloma", email: "paloma@email.com", idade: 29 },

    // CT05 — Múltiplos erros
    { nome: "", email: "sem-arroba.com", idade: -1 },

    // CT06 — Menor de idade
    { nome: "Ana", email: "ana@email.com", idade: 17 },

    // CT07 — Tipo inválido na idade
    { nome: "João", email: "joao@email.com", idade: "vinte" },
];

// ================================
// 🔁 EXECUÇÃO DOS TESTES
// ================================

usuarios.forEach(usuario => validarUsuario(usuario));

// ================================
// 🔎 BUGS / MELHORIAS IDENTIFICADAS
// ================================

// BUG01 — Validação de email muito simples (apenas "@")
// BUG02 — Sistema não impede continuidade com múltiplos erros
// BUG03 — Retornos são strings (difícil para automação)

// 💡 MELHORIAS:
// - Usar regex para email
// - Retornar objeto estruturado:
//   { campo: "email", status: "erro", mensagem: "Email inválido" }
// - Parar validação ao encontrar erro crítico (fail fast)