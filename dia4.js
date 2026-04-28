// FUNÇÃO 1 — Validar senha forte
function validarSenha(senha) {
    if (typeof senha !== "string") {
        return "❌ Senha deve ser texto";
    }
    if (senha.length < 8) {
        return "❌ Senha muito curta — mínimo 8 caracteres";
    }
    if (senha === senha.toLowerCase()) {
        return "❌ Senha deve ter pelo menos uma letra maiúscula";
    }
    return "✅ Senha válida";
}

// --- TESTES VALIDAR SENHA ---
console.log("--- VALIDAR SENHA ---");
// CT01 — Senha curta
console.log(validarSenha("abc"));        // esperado: ❌ Senha muito curta | obtido: ❌ Senha muito curta ✅

// CT02 — Sem letra maiúscula
console.log(validarSenha("abcdefgh"));   // esperado: ❌ Sem maiúscula | obtido: ❌ Sem maiúscula ✅

// CT03 — Senha válida
console.log(validarSenha("Abcdefgh"));   // esperado: ✅ Válida | obtido: ✅ Válida ✅

// CT04 — Tipo errado (number em vez de string)
console.log(validarSenha(123456));       // esperado: ❌ Deve ser texto | obtido: ❌ Deve ser texto ✅

// CT05 — Senha vazia
console.log(validarSenha(""));          // esperado: ❌ Senha obrigatória | obtido: ❌ Muito curta ⚠️ MELHORIA — mensagem poderia ser mais clara


// FUNÇÃO 2 — Calcular frete
function calcularFrete(peso, distancia) {
    if (typeof peso !== "number" || typeof distancia !== "number") {
        return "❌ Peso e distância devem ser números";
    }
    if (peso <= 0 || distancia <= 0) {
        return "❌ Valores devem ser maiores que zero";
    }
    const frete = peso * distancia * 0.5;
    return "✅ Frete: R$ " + frete.toFixed(2);
}

// --- TESTES CALCULAR FRETE ---
console.log("--- CALCULAR FRETE ---");
// CT06 — Peso e distância válidos
console.log(calcularFrete(10, 100));     // esperado: ✅ R$ 500.00 | obtido: ✅ R$ 500.00 ✅

// CT07 — Peso zero
console.log(calcularFrete(0, 100));      // esperado: ❌ Valores maiores que zero | obtido: ❌ Valores maiores que zero ✅

// CT08 — Distância negativa
console.log(calcularFrete(10, -5));      // esperado: ❌ Valores maiores que zero | obtido: ❌ Valores maiores que zero ✅

// CT09 — Tipo errado (string em vez de number)
console.log(calcularFrete("10", 100));   // esperado: ❌ Deve ser número | obtido: ❌ Deve ser número ✅

// CT10 — Outro cálculo válido
console.log(calcularFrete(5, 200));      // esperado: ✅ R$ 500.00 | obtido: ✅ R$ 500.00 ✅