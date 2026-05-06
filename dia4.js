// ================================
// 🧪 VALIDAÇÃO DE SENHA
// ================================

function validarSenha(senha) {

    // CT01 — Tipo deve ser string
    if (typeof senha !== "string") {
        return "❌ Senha deve ser texto";
    }

    // CT02 — Senha obrigatória (não vazia)
    if (senha.length === 0) {
        return "❌ Senha obrigatória";
    }

    // CT03 — Tamanho mínimo
    if (senha.length < 8) {
        return "❌ Senha muito curta — mínimo 8 caracteres";
    }

    // CT04 — Deve conter letra maiúscula
    if (senha === senha.toLowerCase()) {
        return "❌ Senha deve ter pelo menos uma letra maiúscula";
    }

    // CT05 — Senha válida
    return "✅ Senha válida";
}

// ================================
// 🧪 CENÁRIOS DE TESTE — SENHA
// ================================

// CT06 — Senha curta
console.log(validarSenha("abc"));
// esperado: erro de tamanho | obtido: OK ✅

// CT07 — Sem letra maiúscula
console.log(validarSenha("abcdefgh"));
// esperado: erro de maiúscula | obtido: OK ✅

// CT08 — Senha válida
console.log(validarSenha("Abcdefgh"));
// esperado: válida | obtido: OK ✅

// CT09 — Tipo inválido (number)
console.log(validarSenha(123456));
// esperado: erro de tipo | obtido: OK ✅

// CT10 — Senha vazia
console.log(validarSenha(""));
// esperado: "Senha obrigatória" | obtido: OK ✅


// ================================
// 🧪 CÁLCULO DE FRETE
// ================================

function calcularFrete(peso, distancia) {

    // CT11 — Tipos devem ser number
    if (typeof peso !== "number" || typeof distancia !== "number") {
        return "❌ Peso e distância devem ser números";
    }

    // CT12 — Valores devem ser positivos
    if (peso <= 0 || distancia <= 0) {
        return "❌ Valores devem ser maiores que zero";
    }

    // CT13 — Cálculo do frete
    const frete = peso * distancia * 0.5;

    return "✅ Frete: R$ " + frete.toFixed(2);
}

// ================================
// 🧪 CENÁRIOS DE TESTE — FRETE
// ================================

// CT14 — Valores válidos
console.log(calcularFrete(10, 100));
// esperado: R$ 500.00 | obtido: OK ✅

// CT15 — Peso zero
console.log(calcularFrete(0, 100));
// esperado: erro | obtido: OK ✅

// CT16 — Distância negativa
console.log(calcularFrete(10, -5));
// esperado: erro | obtido: OK ✅

// CT17 — Tipo inválido
console.log(calcularFrete("10", 100));
// esperado: erro de tipo | obtido: OK ✅

// CT18 — Outro cenário válido
console.log(calcularFrete(5, 200));
// esperado: R$ 500.00 | obtido: OK ✅


// ================================
// 🔎 MELHORIAS IDENTIFICADAS
// ================================

// MELHORIA01 — Separar mensagens de erro por tipo (padrão API)
// MELHORIA02 — Retornar valores numéricos ao invés de string (melhor para testes automatizados)
// MELHORIA03 — Validar senha com regras mais completas (número, caractere especial)
// MELHORIA04 — Padronizar mensagens de retorno (ex: JSON)

// 💡 Exemplo ideal (API real):
// { "status": "error", "message": "Senha inválida" }