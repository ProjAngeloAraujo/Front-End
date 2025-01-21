function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    setTimeout(function(){ 
        document.getElementById('tempo').innerHTML = "Executou o Timeout!";
     }, 1000);
}

function pararContagem(){
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem!";
}

function ativarCronometro(){
    tempo = setInterval(function(){
        var cronometro = document.getElementById('cronometro').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('cronometro').innerHTML = soma;
    },1000);
}

function pararCronometro(){
    clearInterval(tempo);
    document.getElementById('cronometro').innerHTML = "Parou a contagem!";
}

function ativarRegressiva(){
    tempo = setInterval(function(){
        var contagem = document.getElementById('regressiva').innerHTML;
        var regressiva = parseInt(contagem) - 1;
        if(regressiva < 0){
            clearInterval(tempo);
            document.getElementById('regressiva').innerHTML = "Acabo a contagem!";
            return 0;
        };
        document.getElementById('regressiva').innerHTML = regressiva;
    }, 1000);
}