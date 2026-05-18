const prompt = require("prompt-sync")();
let idade = Number(prompt("digite sua idade: "));
let nome = prompt("digite seu nome: ");

if(idade>=18){
    console.log(nome+"voce e maior de idade.");
}else{
    console.log(nome+"voce e menor de idade.");
}
