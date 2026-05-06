// ================================
// 🧪 MASSA DE DADOS — USUÁRIOS
// ================================

// Lista de usuários simulando cenários reais (válidos e inválidos)
const usuarios = [
    { nome: "Paloma", email: "paloma@email.com", idade: 29 },   // válido
    { nome: "Ana",    email: "ana@email.com",    idade: 17 },   // menor de idade
    { nome: "Carlos", email: "carlos@email.com", idade: 25 },   // válido
    { nome: "",       email: "sem-arroba.com",   idade: -1 },   // múltiplos erros
    { nome: "João",   email: "joao@email.com",   idade: "vinte" }, // tipo inválido
];

// ================================
// 🧪 CENÁRIOS DE TESTE — VALIDAÇÃO DE USUÁRIO
// ================================

for (let i = 0; i < usuarios.length; i++) {
    const u = usuarios[i];

    console.log(`\n🔍 Validando usuário ${i + 1}:`, u.nome || "NOME VAZIO");

    // CT01 — Nome não pode ser vazio
    if (!u.nome) {
        console.log("❌ CT01 — Nome inválido (vazio)");
    }

    // CT02 — Email deve conter "@"
    if (!u.email.includes("@")) {
        console.log("❌ CT02 — Email inválido:", u.email);
    }

    // CT03 — Idade deve ser número
    if (typeof u.idade !== "number") {
        console.log("❌ CT03 — Idade deve ser number | recebido:", typeof u.idade);
    }

    // CT04 — Idade não pode ser negativa
    else if (u.idade < 0) {
        console.log("❌ CT04 — Idade negativa:", u.idade);
    }

    // CT05 — Usuário menor de idade
    else if (u.idade < 18) {
        console.log("⚠️ CT05 — Usuário menor de idade:", u.idade);
    }

    // CT06 — Usuário válido
    else {
        console.log("✅ CT06 — Usuário válido");
    }
}

// ================================
// 🔎 BUGS IDENTIFICADOS
// ================================

// BUG01 — Sistema aceita nome vazio sem bloquear cadastro
// BUG02 — Validação de email é fraca (apenas verifica "@")
// BUG03 — Idade negativa não é tratada corretamente como erro crítico
// BUG04 — Sistema aceita idade como string (tipo inválido)

// 💡 Sugestões:
// - Validar formato completo de email (regex)
// - Bloquear cadastro com dados inválidos
// - Garantir tipagem correta (number)
// - Criar mensagens de erro padronizadas