const prompt = require("prompt-sync")();
let nome = [];
for(let i = 0; i < 3;i++){
    let nome = prompt("Digite um nome: ");
    nome.push(nome);
}
console.log("Nomes cadastrados: ");
for(let i =0;i<nomes.length;i++){
    console.log(nome[i]);
}
