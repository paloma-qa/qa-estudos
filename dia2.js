// ================================
// 🧪 VALIDAÇÃO DE REGRAS DE NEGÓCIO
// ================================

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

// ================================
// 🧪 CENÁRIOS DE TESTE — VALIDAÇÃO DE IDADE
// ================================

// CT01 — Idade mínima permitida
console.log(validarIdade(18));  
// esperado: "Acesso permitido" | obtido: "Acesso permitido" ✅

// CT02 — Idade menor que o permitido
console.log(validarIdade(17));  
// esperado: "Acesso negado — menor de idade" | obtido: OK ✅

// CT03 — Idade igual a zero
console.log(validarIdade(0));   
// esperado: "Acesso negado — menor de idade" | obtido: OK ✅

// CT04 — Idade negativa (entrada inválida)
console.log(validarIdade(-1));  
// esperado: erro ou validação de entrada inválida ❌
// obtido: "Acesso negado — menor de idade"

// 🔎 BUG IDENTIFICADO:
// O sistema não valida entradas inválidas (idade negativa).
// Sugestão:
// implementar validação para impedir valores menores que 0

// ================================
// 🧪 CENÁRIOS DE TESTE — CÁLCULO DE DESCONTO
// ================================

// CT05 — Desconto padrão
console.log(calcularDesconto(100, 10));  
// esperado: 90 | obtido: 90 ✅

// CT06 — Desconto alto
console.log(calcularDesconto(200, 50));  
// esperado: 100 | obtido: 100 ✅

// CT07 — Sem desconto
console.log(calcularDesconto(100, 0));   
// esperado: 100 | obtido: 100 ✅

// CT08 — Desconto total
console.log(calcularDesconto(100, 100)); 
// esperado: 0 | obtido: 0 ✅

// CT09 — Desconto inválido (>100%)
console.log(calcularDesconto(100, 150)); 
// esperado: erro ou limite de desconto ❌
// obtido: valor negativo

// 🔎 BUG IDENTIFICADO:
// O sistema permite descontos acima de 100%,
// gerando valores negativos.
// Sugestão:
// validar limite máximo de desconto (0–100%)