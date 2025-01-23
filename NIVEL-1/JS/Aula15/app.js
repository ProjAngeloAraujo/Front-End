const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano:2001,
    motor: ["1.6", "1.4", "1.0"]
}

let texto = JSON.stringify(carro);

document.getElementById('area').innerHTML = texto;

let obj = JSON.parse(texto);
console.log(obj.motor[2]);

function buscarCEP(){
    let input = document.getElementById('cep').Value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function(){
        document.getElementById('texto').innerHTML = this.responseText;
    }
}