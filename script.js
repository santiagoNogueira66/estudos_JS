var nome = prompt("digite o seu nome");
var idade = Number.parseInt(prompt("digite a sua idade"));
var nota1 = Number(prompt("digite a primeira nota"));
var nota2 = Number(prompt("digite a segunda nota"));

var media = (nota1+nota2)/2;
document.write(`O aluno ${nome} com ${idade} anos tem a media ${media}`);
