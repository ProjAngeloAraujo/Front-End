const carro = {
    marca: "ford",
    modelo: "Mustang",
    ano: 1990,
    placa: "XYZ-1234",
    buzina: function() { alert('iiiiiiiiii') },
    completo: function(){
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
    } 
};

console.log(carro.completo());