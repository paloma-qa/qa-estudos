// FUNÇÃO 1 — Validar idade
function validarIdade(idade) {
    if (idade >= 18) {
        return "Acesso permitido";
    } else {
        return "Acesso negado — menor de idade";
    }
}

// FUNÇÃO 2 — Calcular desconto
function calcularDesconto(preco, desconto) {
    const valorFinal = preco - (preco * desconto / 100);
    return valorFinal;
}

// --- TESTES VALIDAR IDADE ---
console.log("--- IDADE ---");
console.log(validarIdade(18));   // Acesso permitido
console.log(validarIdade(17));   // Acesso negado
console.log(validarIdade(0));    // Acesso negado
console.log(validarIdade(-1));   // Acesso negado ⚠️ BUG — idade inválida, sistema deveria rejeitar

// --- TESTES CALCULAR DESCONTO ---
console.log("--- DESCONTO ---");
console.log(calcularDesconto(100, 10));  // esperado: 90  | obtido: 90  ✅
console.log(calcularDesconto(200, 50));  // esperado: 100 | obtido: 100 ✅
console.log(calcularDesconto(100, 0));   // esperado: 100 | obtido: 100 ✅ — sem desconto
console.log(calcularDesconto(100, 100)); // esperado: 0   | obtido: 0   ✅ — desconto total