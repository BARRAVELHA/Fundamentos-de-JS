const prompt=require("prompt-sync")();
let numero = Number(prompt("digite um numero:"))
for(let i=1 ; i<=10;i++){
    let mate = (i * numero);
    console.log("numero:"+numero+"X"+i+"=",mate);}
