let inputResultado = document.querySelector("#inputResultado");

let inputSoma = document.querySelector("#inputSoma");

let inputNumero = document.querySelector("#inputNumero");

let btSomarNum = document.querySelector("#btSomarNum");


function soma(){

    let num2 = Number(inputNumero.value);

    //Convertendo o valor retornado no input em numero
    let num = Number(inputSoma.value);

    inputResultado.textContent = num2 + num;
}

btSomarNum.onclick = function(){
    soma(); 
}