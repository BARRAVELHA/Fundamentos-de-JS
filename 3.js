const prompt=require("prompt-sync")();
let nota = Number(prompt("nota final de um aluno:"))
if(nota>=7){
    console.log("nota:"+nota+" aprovação")
}else{
    console.log("nota:"+nota+"reprovado")
}