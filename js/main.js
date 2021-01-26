

function clicou(){   
    //innerHTML permite colocar textos, usando até as modificações do HTML
    document.getElementById("agradecimento"). innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //abre uma nova guia com o endereço inserido
    window.open("https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwjQ_NTv07nuAhVGK7kGHSI5ANUQPAgI");
    //abre na mesma guia
    window.location.href ="https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwjQ_NTv07nuAhVGK7kGHSI5ANUQPAgI";
}

function trocar(elemento){
    //passando parãmetro "elemento" a função não fica presa a apenas um lugar
    //document.getElementById("passar").innerHTML ="Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //passando parãmetro "elemento" a função não fica presa a apenas um lugar
    //document.getElementById("passar").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carrregada");
}

function funcaoChange(elemento){
    //".value" pega o valor que está dentro do elemento
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

//js é linguagem de tipo dinâmico
var teste = 0;
test = "ola";
teste = true;
console.log(teste);
*/
/*
var d = new Date();
alert(d.getMonth() + 1); //retorna o mês menos 1, assim tem que somar +1 para vir o correto
*/

/*
var cont;
for (cont = 0; cont <= 5; cont++ ){
    alert(cont);
}*/

/*
var cont = 0;
while(cont < 5) {
    console.log(cont);
    cont++;
}*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade")
}*/

/*
var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[1]);
*/

/* 
var fruta = {nome:"maça", cor: "vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);
*/

/*
var lista = ["maça", "Pêra", "Laranja"];
//lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/
/*
var nome = "Bryan";
var idade = 20;
var idade2 = 10; 
var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
*/