function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(Document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://igrejadecristo.net/");
    //window.location.href = "https://igrejadecristo.net/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*
function soma(n1, n3) {
    return n1 + n3;
}


var validar = 0;

function validaIdade(idade) {
    if (idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/


//alert(soma(5, 11));
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours);
alert(d.getMinutes);
*/


/*
var count;
for (count=0; count <=5; count++){
    alert(count);
}
*/


/*
var count = 5;
while (count < 5) {
    console.log(count);
    alert(count);
    count++;
}
*/


/*
var idade = prompt("Qual a sua idade")
if (idade < 17) {
    alert("Menor de idade");
} else {
    alert("Maior de idade");
};
*/


/*
var fruta = [{nome:"uva", cor:"roxa"}, {nome:"morango", cor:"vermelho"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"uva", cor:"roxa"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["morango + uva + laranja"];
//lista.push("abacaxi");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "))


//var name = "Lucas Souza";
//var n1 = 15;
//var n3 = 17;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert(n1 + n3);
//console.log(nome);
//console.log(n1 * n3);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão", "Brasil"));