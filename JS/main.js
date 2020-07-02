/* alert ("Alerta do JavaScript do main.js!");

var nome = "Dorival";
var idade = 57;
var duracao_curso =2;
var melhor_time = "O Japão possui o melhor time de futebol do mundo!";
var n1 = 5;
var n2 = 3;



alert( nome +" tem "+idade +" anos.");
alert("Ao terminar o curso, terá "+ (idade + duracao_curso)+" anos!");
console.log (nome);
console.log (idade + duracao_curso);
console.log(melhor_time);
alert(melhor_time.replace("Japão","Brasil"));
console.log(melhor_time.toLowerCase());
console.log("Multiplicando 1º número ("+n1+") * 2º número ("+n2+") = "+n1*n2); */

// = = = = = parte 2 = = = = = //

// - - -  A R R A Y  - - - //

var lista = ['maça', 'pera','laranja'];
console.log(lista);
console.log(lista[1]);    //exibe o elemento da posição 1 da array lista
lista.push('uva'); //acrescenta ao final da array lista
console.log(lista);
lista.pop();    //remove do final da array lista
console.log(lista);
console.log("A array LISTA possui " + lista.length + " elementos.");   //número de elementos da array lista
console.log(lista.toString());  //assim, perde a condição de array e vira string pura
console.log(lista.toString()[0]);   //exibe o primeiro caracter da string pura
console.log(lista.toString().length + " caracteres"); //exibe a cquantidade caracteres dentro da string pura
console.log(lista.join(" | ")); //transforma em string e une os elementos da array separados por " | "
console.log(lista.join(" | ").length + " caracteres"); //21 caracteres
console.log(lista.join("") + " -> fica com " + lista.join("").length + " caracteres");

// - - -  D I C I O N Á R I O  - - - //

var frutas = {nome:"maçã", cor:"vermelha"};
console.log(frutas.nome);

// lista de dicionários //

var fruteira = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"},{nome:"pera", cor:"verde"}];
console.log(fruteira[2].nome);
console.log(fruteira);
console.log(fruteira.length);
console.log(fruteira[0].cor.length);

// = = = = = parte 3 = = = = = //