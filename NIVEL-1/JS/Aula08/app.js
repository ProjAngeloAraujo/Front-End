const pessoa = ["Angelo","Araujo", 16, "DEV"];
const endereço = ["SP", "RP", "ST"];
document.getElementById("texto").innerHTML = pessoa.join(" - ");
console.log(pessoa);
pessoa.pop();
console.log(pessoa);
pessoa.shift(); //tira o primerio item e reorganiza
console.log(pessoa);
pessoa.unshift("Enzo");
console.log(pessoa);
delete pessoa[0];
console.log(pessoa);
pessoa.splice(1, 0, "lindo", "Souza"); //Qual posição o elemento deve ser adicionado, quantos elementos devem ser removidos, valor que quer adicionar
console.log(pessoa);

const cliente = pessoa.concat(endereço);
console.log(cliente);

const mundial = [
    "Palmeiras",
    "São Paulo",
    "Gremio",
    "Flamengo",
    "Fluminence",
    "vasco"
]

const campeoes = mundial.slice(1, 4);
console.log(campeoes)

const ordemCampeoes = campeoes.sort();
console.log(ordemCampeoes);
console.log(ordemCampeoes.reverse());

const idades = [10, 11, 15, 9, 14];
idades.sort(function(a,b){return a-b});
console.log(idades);

function maxNumber(z){
    return Math.max.apply(null, z);
}
console.log(maxNumber(idades));

function minNumber(z){
    return Math.min.apply(null, z);
}
console.log(minNumber(idades));

const maior10 = idades.filter(filtragem)
function filtragem(valor, index, array){
    return valor > 10;
}
console.log(maior10)