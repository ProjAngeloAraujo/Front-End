function soma (valor1, valor2){
    return valor1 + valor2;
}

function lule(real, dolar) {
    return real * dolar;
}

var valorReal = 1.08;
var cotacao = 6.50;

var total = lule(valorReal, cotacao);
alert("real: " + valorReal + "dolar: " + total);