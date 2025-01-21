class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " Biiiiiiiii";
    }
}

const ferrari = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013)
console.log(ferrari.buzina());
console.log(gol)
gol.ano = 2016;
console.log(gol)