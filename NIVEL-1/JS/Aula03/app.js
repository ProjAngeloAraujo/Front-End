/* 

1) Operadores Aritimericos 
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operador Condicional (Ternário)
6) Operadores Lógicos

*/

var valor1, valor2, total, msg;
valor1 = 5;
valor2 = 5;

total = ++valor1;
alert("O valor é: " + total)

valor1 -= valor2
msg = "O valor é: "
alert(msg + valor1)

valor1 = 5;
valor2 = "8";
total = (valor1 !== valor2); //V ou F
alert(total)

var idade, eleitor, resultado;
idade= 68;
eleitor = (idade < 18) ? "Não, Eleitor" : "Sim, eleitor";
alert('A resposta é: ' + eleitor + 'a idade dele é de: ' + idade)

resultado = (idade > 60 && idade < 70);
alert(resultado)

resultado = (idade < 18 || idade === 67);
alert(resultado)

idade = 16
resultado = !(idade < 18);
alert(resultado)