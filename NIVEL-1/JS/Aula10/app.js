function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    switch(cor){
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;

        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;

        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;

        default:
            document.getElementById("teste").innerHTML = "Escolher cores possveis";
    }
}