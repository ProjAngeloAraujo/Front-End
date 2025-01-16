function ButtonClick(){
    alert("onclick funfou")
}

function OndbButtonClick(){
    alert("ondblclick funfou")
}

function liga(){
    let div = document.getElementById("hover");
    div.style.backgroundColor = "yellow";
}

function desliga(){
    let div = document.getElementById("hover");
    div.style.backgroundColor = "black";
}

function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append('O mause moveu<br>');
}

function limpar(){
    document.getElementById("campoTexto").value = "";
}

function mudar(){
    console.log("mudou")
}

function teclaPressionada(){
    let input = document.getElementById("campoTecla").value;
    console.log(input)
}