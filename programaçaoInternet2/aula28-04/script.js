let h1Text = document.querySelector("#h1Text");

let inputText = document.querySelector("#inputText");

let btTrocaText = document.querySelector("#btTrocaText");

function trocarText(){
    //retornando o texto digitado no campo
    let textoDigitado = inputText.value;

    //Alterando o texto do elemento h1
    h1Text.textContent = textoDigitado;
}

btTrocaText.onclick = function(){
    trocarText(); 
}