// VARIÁVEIS
let nome = "Ana";
const idade = 29;   // <-- começa com 29
let aprovada = true;

// CT08 — let permite mudar
nome = "Maria";
console.log(nome); // Maria ✓

// CT07 — const NÃO permite mudar
// idade = 30;  // comentado — qualquer reatribuição causa TypeError, mesmo valor igual
console.log(idade); // imprime 29 — valor original preservado

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof aprovada);

// ================================
// FUNÇÕES
// ================================

// FUNÇÃO 1 — Soma simples
function soma(a, b) {
    return a + b;
}

// FUNÇÃO 2 — Validar login
function verificarLogin(usuario, senha) {
    if (usuario === "paloma" && senha === "123456") {
        return "Login válido";
    } else {
        return "Login inválido";
    }
}

// ================================
// EXECUTANDO OS TESTES
// ================================

// Testando soma
console.log("--- SOMA ---");
console.log(soma(5, 3));       // esperado: 8  | obtido: 8  ✅
console.log(soma(10, 0));      // esperado: 10 | obtido: 10 ✅
console.log(soma(-2, 5));      // esperado: 3  | obtido: 3  ✅

// Testando login
console.log("--- LOGIN ---");
console.log(verificarLogin("paloma", "123456"));  // Login válido
console.log(verificarLogin("paloma", "errada"));  // Login inválido
console.log(verificarLogin("", ""));              // Login inválido
console.log(verificarLogin("PALOMA", "123456"));  // console.log(verificarLogin("PALOMA", "123456"));  // ❌ BUG — retorna inválido, mas deveria aceitar independente de maiúscula/minúscula