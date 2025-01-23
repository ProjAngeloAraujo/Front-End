let data = new Date();
console.log(data)

let ano = data.getFullYear();
console.log(ano);

let mes = data.getMonth();
console.log(mes);
const mesesDoAno = ["Jan", "Fev", "Mar", "Abril", "Mai","Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
let mesEscrito = mesesDoAno[mes];
console.log(mesEscrito);

let diaMes = data.getDate();
console.log(diaMes);

let diaSemana = data.getDay();
console.log(diaSemana);
const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
let diasSemanaEscrito = diasSemana[diaSemana];
console.log(diasSemanaEscrito)

let hora = data.getHours();
console.log(hora);
let minutos = data.getMinutes();
console.log(minutos);
let segundos = data.getSeconds();
console.log(segundos);
let milesegundos = data.getMilliseconds();
console.log(milesegundos);

let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR);
let dataBRCurt = data.toLocaleString('pt-BR', { dateStyle: 'short' });
console.log(dataBRCurt);
let dataBRTime = data.toLocaleString('pt-BR', { timeStyle: 'short' });
console.log(dataBRTime);

d = new Date();
diaMes = d.getDate();
mes = d.getMonth();
ano = d.getFullYear();

let dataPadraoBR = diaMes + " / " + mes + " / " + ano;
console.log(dataPadraoBR);

diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x<10 ? '0' + x : '' + x;};
dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

var hoje = new Date();
var vencimento = new Date (2026, 0, 15);

if(hoje > vencimento){
    console.log("Sua conta está vencida!");
}else{
    console.log("Sua conta não está vencida!");
}

var dataInicial = new Date();
var dataFinal = new Date(2026, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias + "dias")