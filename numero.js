const prompt=require("prompt-sync")();
let numero = Number(prompt("digite seu numero:"));
if(numero ==0){
    console.log("nomero neutro:"+numero)
}else if(numero >=1){
    console.log("seu numero e positivo:"+numero)
}else{
    console.log("seu numero e negativo:"+numero)
}