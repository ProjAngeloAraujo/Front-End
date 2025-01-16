const lista = [];
lista[0] = "banana";
lista[1] = "goiaba";

lista[1] = "truco"
let x = lista[1];
alert(x);
console.log(lista);
console.log(lista[lista.length -1]);
alert(lista.length);

lista.push("paciencia");

alert(Array.isArray(lista));