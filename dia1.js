// ================================
// 🧪 VALIDAÇÃO DE VARIÁVEIS
// ================================

// CT01 — validar tipos de dados das variáveis
let nome = "Ana";
const idade = 29;
let aprovada = true;

// esperado:
// nome → string
// idade → number
// aprovada → boolean

console.log(typeof nome);      // esperado: string
console.log(typeof idade);     // esperado: number
console.log(typeof aprovada);  // esperado: boolean

// -------------------------------

// CT02 — validar que variável com "let" permite reatribuição
nome = "Maria";
console.log(nome); // esperado: "Maria" ✅

// CT03 — validar que variável "const" NÃO permite reatribuição
// idade = 30; 
// esperado: erro (TypeError) caso seja descomentado
console.log(idade); // esperado: 29 (valor original preservado)

// ================================
// 🧪 FUNÇÕES
// ================================

// FUNÇÃO 1 — Soma simples
function soma(a, b) {
    return a + b;
}

// FUNÇÃO 2 — Validação de login
function verificarLogin(usuario, senha) {
    if (usuario === "paloma" && senha === "123456") {
        return "Login válido";
    } else {
        return "Login inválido";
    }
}

// ================================
// 🧪 CENÁRIOS DE TESTE
// ================================

// -------------------------------
// CT04 — Soma de números positivos
console.log(soma(5, 3)); 
// esperado: 8 | obtido: 8 ✅

// CT05 — Soma com zero
console.log(soma(10, 0)); 
// esperado: 10 | obtido: 10 ✅

// CT06 — Soma com número negativo
console.log(soma(-2, 5)); 
// esperado: 3 | obtido: 3 ✅

// -------------------------------
// CT07 — Login com credenciais válidas
console.log(verificarLogin("paloma", "123456")); 
// esperado: "Login válido" ✅

// CT08 — Login com senha incorreta
console.log(verificarLogin("paloma", "errada")); 
// esperado: "Login inválido" ✅

// CT09 — Login com campos vazios
console.log(verificarLogin("", "")); 
// esperado: "Login inválido" ✅

// CT10 — Login com usuário em caixa alta
console.log(verificarLogin("PALOMA", "123456")); 
// esperado: "Login válido" (case insensitive)
// obtido: "Login inválido" ❌

// 🔎 BUG IDENTIFICADO:
// O sistema não trata case insensitive no usuário.
// Sugestão de melhoria:
// usar .toLowerCase() na comparação