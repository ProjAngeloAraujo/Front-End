var hora = new Date().getHours();

if (hora < 12){
    alert('Bom dia');
}else if(hora < 18){
    alert('Boa tarde');
}
else{
    alert('Boa noite');
}

function verificar(){
    let nome = document.getElementById("nome").value;
    if(nome == "" || nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ficar vasio";
        p.style.color = "red";
    }
    else{
        let p = document.getElementById("teste");
        p.innerHTML = "Concluido!";
        p.style.color = "green";
    }
}