COMANDOS BASICOS
---------------------------------------------------------------------------
if-
if (idade >= 18) {
 console.log("Libera catraca");
} else {
 console.log("Barra catraca");
}
---------------------------------------------------------------------
while
	while(true) {
 var x = prompt("Digite o primeiro número ou N");
 var y = prompt("Digite o segundo número ou N");
 if (x == "N" || y == "N") {
 break;
 }
 var resultado = Number(x) + Number(y);
 alert("O resultado da soma é: " + resultado);
}
-------------------------------------------------------------------------------
operadores do for
x++ - incrementar de 1 em 1.
x-- - decrementar de 1 em 1.
x+=2 - incrementar de 2 em 2 (ou de n);
x-=2 - decrementar de 2 em 2 (ou de n);
x*=2 - multiplicar de 2 em 2 (ou de n);

Diferente (!=)
Menor (<) ou Menor igual (<=)
Maior (>) ou Maior igual (>=)

for(x = 0;x <= 15;x++) {
 console.log(x);
}
-------------------------------------------------------------------------------------
funcçao em cima de outra função
exemplo 1-
var paisagem = function() {
 var res = "";
 var vale = function(quant) {
 for (var c = 0; c < quant; c++) {
 res += "_";
 }
 };
 var montanha = function(quant) {
 res += "/";
 for (var c = 0; c < quant; c++) {
 res += "'";
 }
 res += "\\";
 };
 vale(3);
 montanha(4);
 vale(6);
 montanha(1);
 vale(1);
 return res;
};
exemplo 2-
function potencia(base, expoente) {
 if (expoente == undefined) {
 expoente = 2; // define o expoente padrão
 }
 var resultado = 1;
 for (var cont = 0; cont < expoente; cont++) {
 resultado *= base;
 }
 return resultado;
}
console.log(potencia(2));
// → 4
console.log(potencia(2, 3));
// → 8
---------------------------------------------------------------------------------------
operadores de comparação
Igual (==)
Diferente (!=)
Menor (<) ou Menor igual (<=)
Maior (>) ou Maior igual (>=)
-----------------------------------------------------------------------------------
operadores logicos do if 
AND (&&)
OR (||)
NOT (!)
----------------------------------------------------------------------------------------
declarar variaveis-
var nome = "Felipe"; //string
var idade = 22;      //numero
var endereco = "Rua dos Bobos, número 0."; //string
var aposentado = false;  //true or false
----------------------------------------------------------------------------
console.log-Esta função basicamente exibe um valor de entrada no console
var x = 1;
console.log(x);
---------------------------------------------------------------------------
alert-Esta função basicamente exibe na tela do usuário uma mensagem
var x = 1;
alert(x);
----------------------------------------------------------------------------
prompt-Armazenar os valores
var x = prompt("Digite seu número da sorte");
alert(x);
-----------------------------------------------------------------------
confirm- confirma
var x = confirm("O seu número da sorte é 13?");
alert(x);
-----------------------------------------------------------------------------


ARRAYS
push e pop-
var nomes = []; // avisa o JavaScript que a variável é um array
nomes.push("Felipe"); // Insere o nome no final do array
nomes.push("Douglas");
nomes.push("João");
nomes.pop(); // Exclui o último valor do array
nomes.push("Mariana");
console.log(nomes);
// → ["Felipe", "Douglas", "Mariana"]
-----------------------------------------------------------------------
unshift - Adiciona no início do array.
var nomes = ["Felipe", "Douglas"];
nomes.unshift("Bruno");
console.log(nomes);
// → ["Bruno", "Felipe", "Douglas"]
------------------------------------------------------------------------
shift - Exclui um elemento no início do array.
var nomes = ["Bruno", "Felipe", "Douglas"];
nomes.shift();
console.log(nomes);
// → ["Felipe", "Douglas"]
------------------------------------------------------------------------
splice - Altera (insere/excluí) um elemento em uma posição específica do array.
modelo -> array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
var nomes = ["Bruno", "Felipe", "Douglas"];
nomes.splice(1, 1, "Zezinho", "Fulano"); // parâmetro deleteCount foi
específicado - 1 elemento após a posição 1 será apagado. E também o
elemento "Zedinho" e "Fulano" serão na posição especificada.
console.log(nomes);
// → ["Bruno", "Zezinho", "Fulano", "Douglas"]
------------------------------------------------------------------------------
length - Retorna a quantidade de elementos de um array.
var nomes = ["Felipe", "Douglas", "João"];
for(i = 0;i < nomes.length;i++) {
 console.log(nomes[i]);
}
// → "Felipe"
// → "Douglas"
// → "João"
--------------------------------------------------------------------------
forEach - Itera sob um arraysem precisar usar o indice []
var nomes = ["Felipe", "Douglas", "João"];
nomes.forEach(function(nome, indice) {
 console.log(indice + " - " + nome);
});
// → "0 - Felipe"
// → "1 - Douglas"
// → "2 - João"
----------------------------------------------------------------------
indexOf - Procura por um valor no array retornando seu índice.
var nomes = ["Bruno", "Zezinho", "Fulano", "Douglas"];
var busca = "Fulano";
var indice = nomes.indexOf(busca);
console.log("Encontrei o " + busca + " em: " + indice);
// → Encontrei o Fulano em: 2
--------------------------------------------------------------------------------

filter -primeiro jeito
var numeros = [10, 18, 1, 15];
var maiorQue10 = function(item) {
 return item > 10;
}
var novosNumeros = numeros.filter(maiorQue10);
console.log(novosNumeros);
// → [18, 15]
----------------------------------------------------------
segundo jeito(mais usado)

var numeros = [10, 18, 1, 15];

var novosNumeros = numeros.filter(function(item)) {
	return item > 10;
});
console.log(novosNumeros);
-----------------------------------------------------------------
filtrar por string
var nomes = ["Bruno", "Zezinho", "Fulano", "Douglas"];
var convidados = nomes.filter(function(item){
 return item.charAt(0) == "Z"; //posição zero = Z
});
console.log(convidados);

---------------------------------------------------------------------
filtrar pares e impares
var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];
var pares = function(item) {
 return !(item % 2);
}
var impares = function(item) {
 return item % 2;
}
var numerosPar = numeros.filter(pares);
var numerosImpar = numeros.filter(impares);
----------------------------------------------------------------------------
filtrar filmes bons por determinada nota
var filmes = [
 {titulo: 'Titanic', duracao: 195, nota: 7.5},
 {titulo: 'The Avengers', duracao: 203, nota: 9.5},
 {titulo: 'Bean', duracao: 90, nota: 6.5}
]
var notaCorte = 8;
var bons = function(item) {
 return item.nota >= notaCorte;	9 
}
var ruins = function(item) {
 return item.nota < notaCorte;
}
var filmesBons = filmes.filter(bons);
var filmesRuins = filmes.filter(ruins);
console.log(filmesBons);
// → [{titulo: "The Avengers", duracao: 203, nota: 9.5}]
console.log(filmesRuins);
// → [{titulo: "Titanic", duracao: 195, nota: 7.5},
// {titulo: "Bean", duracao: 90, nota: 6.5}]
----------------------------------------------------------------------------------
filtrar convidados VIP
var convidados = [
 {nome: "Daniel", vip: true, idade: 21},
 {nome: "Gabriel", vip: true, idade: 54},
 {nome: "Felipe", vip: false, idade: 37}
]
var vips = convidados.filter(function(convidado) {
 return convidado.vip;
});
console.log(vips);
// → [{nome: "Daniel", vip: true, idade: 21},
// {nome: "Gabriel", vip: true, idade: 54}]
---------------------------------------------------------------------------------------
