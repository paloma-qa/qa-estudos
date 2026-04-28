// ARRAYS — lista de usuários
// Array com objetos representando usuários do sistema
// Contém casos válidos e inválidos para simular cenários de teste
const usuarios = [
    { nome: "Paloma", email: "paloma@email.com", idade: 29 }, // ✅ usuário válido
    { nome: "Ana",    email: "ana@email.com",    idade: 17 }, // ⚠️ menor de idade
    { nome: "Carlos", email: "carlos@email.com", idade: 25 }, // ✅ usuário válido
    { nome: "",       email: "sem-arroba.com",   idade: -1 }, // ❌ 3 bugs: nome vazio, email inválido, idade negativa
    { nome: "João",   email: "joao@email.com",   idade: "vinte" }, // ❌ BUG: idade como string em vez de number
];

// LOOP — percorre cada usuário e valida os dados
for (let i = 0; i < usuarios.length; i++) {
    const u = usuarios[i];
    console.log("--- Usuário:", u.nome, "---");

    // CT01 — Nome não pode ser vazio
    if (u.nome === "") {
        console.log("❌ Nome vazio");
    }

    // CT02 — Email deve conter @
    if (!u.email.includes("@")) {
        console.log("❌ Email inválido:", u.email);
    }

    // CT03 — Idade deve ser número, positiva e maior ou igual a 18
    if (typeof u.idade !== "number") {
        console.log("❌ Idade deve ser um número, recebeu:", typeof u.idade);
    } else if (u.idade < 0) {
        console.log("❌ Idade inválida:", u.idade);
    } else if (u.idade < 18) {
        console.log("⚠️ Menor de idade:", u.idade);
    } else {
        console.log("✅ Usuário válido");
    }
}   