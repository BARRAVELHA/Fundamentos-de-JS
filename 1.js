const prompt = require("prompt-sync")();
let idade = Number(prompt("digite sua idade:"));
if(idade<=18){
    console.log("voce tem menor de 18 anos");
}else{
    console.log("voce tem maior de 18 anos");
}