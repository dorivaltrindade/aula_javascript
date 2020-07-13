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

/* var lista = ['maça', 'pera','laranja'];
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
console.log(lista.join("") + " -> fica com " + lista.join("").length + " caracteres"); */

// - - -  D I C I O N Á R I O  - - - //

/* var frutas = {nome:"maçã", cor:"vermelha"};
console.log(frutas.nome);

// lista de dicionários //

var fruteira = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"},{nome:"pera", cor:"verde"}];
console.log(fruteira[2].nome);
console.log(fruteira);
console.log(fruteira.length);
console.log(fruteira[0].cor.length); */

// = = = = = parte 3 = = = = = //

//  C O N D I C I O N A I S | L A Ç O S | R E P E T I Ç Õ E S | D A T E  //

var idade = prompt("Qual é a sua diade?");

if (idade >= 18) {
    alert ("maior de idade");
} else {
    alert ("menor de idade");
}

var count = 0;

while (count <5){
    console.log(count);
    count = count +1;
}

for(count=0; count <=5; count++){
    console.log(count);
}

var d = new Date();
console.log ("Ano = " + d.getFullYear()); 
console.log ("Mês = " + (d.getMonth()+1));
console.log("Dia do Mês = " + d.getDate());
console.log ("Horas = " + d.getHours());
console.log ("Minutos = " + d.getMinutes());
console.log ("Dia da Semana = " + d.getDay());

// = = = = = Fim da Introdução = = = = = //

// = = = = = parte 4 = = = = = //

//  P Á G I N A S   W E B   C O M   J A V A S C R I P T  //


// = = = = = Funções = = = = = //


function soma(n1,n2){
    return n1+ n2;
}

alert("Resultado da soma: "+ soma(5,10));

function setReplace(frase, expressao_anterior, expressao_nova){
    return frase.replace(expressao_anterior, expressao_nova);
}

alert("Trocando os países: " + setReplace("Vai Japão !!!","Japão","Brasil"));

validar = 50000 ; //variável global, mudará de tipo por meio da função validaIdade() //

function validaIdade(idade){

    //var validar; //quando a variável 'validar' local for habilitada, o console.log vai exibir 
                 //o valor alternativo zero para a variável 'validar' global. Se não for usada,
                 //a variável global validar receberá TRUE ou FALSE conforme a função validaIdade()

    if (idade >= 18 ){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Digite a sua idade:");
validaIdade(idade);
console.log("Maior de idade :"+ validar);

// = = = = = Fim das Funções = = = = = //


