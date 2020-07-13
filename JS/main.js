//  P Á G I N A S   W E B   C O M   J A V A S C R I P T  //

// = = = = = parte 5 = = = = = //

//Manipulando elementos da página

function clicou(){

    alert("Valeu, obrigado por clicar!");

    document.getElementById("agradecimento").innerHTML = "<i>Obrigado</i> por <b>clicar</b>. Clique aqui passear em outras páginas!";
    console.log(document.getElementById("agradecimento"));

}

function passear(){
    window.open("https://innovationlabschools.com"); // abre página em outra janela
    window.location.href = "http://www.uol.com.br/"; // abre página na mesma janela
}

function trocar(elemento){  //utilizando o benefício do artifício THIS no HTML - simplifica a carga do objeto, 
                            //o manuseio de suas propriedades e dispensa o byId
    //console.log(elemento.textContent);
   if (elemento.textContent == "Frase sensível"){

        elemento.innerHTML = "Tira esse mouse de cima de mim!";
        
   }else {

        elemento.innerHTML = "Frase sensível";
   }
}


function aviso_importante(){

    var d=new Date();

    alert("AVISO IMPORTANTE:" + "\n" +"Hoje é dia " + d.getDate() +" do mês " + (d.getMonth() + 1) + " do ano de " + d.getFullYear() + "!");
}

function mudanca(elemento){
    //console.log(elemento.value);
    document.getElementById("muda_valor").innerHTML = "Vale "+elemento.value;
}

function meuValor(botao){
    alert("Estou valendo ..." + botao.textContent + "!");
}