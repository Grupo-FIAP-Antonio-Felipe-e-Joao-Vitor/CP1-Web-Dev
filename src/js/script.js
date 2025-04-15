// EXERCICIO 1

let variavel1; //Variavel undefined
let variavel2 = ""; //Variavel com valor vazio
let variavel3 = 10; //Variavel com valor

console.log(variavel1)
console.log(variavel2)
console.log(variavel3)



// EXERCICIO 2
// Operadores comarativos retornam TRUE ou FALSE

let variavel4 = 5;
let variavel5 = 6;
let variavel6 = '5';
let variavel7 = '5';

console.log(variavel4 >= variavel5) // Retorna falso, porque 5 não é maior ou igual a 6
console.log(variavel4 <= variavel5) // Retorna verdadeiro, porque 5 é menor que 6
console.log(variavel4 == variavel5) // Retorna falso, porque 5 nõ é igual a 6
console.log(variavel4 != variavel5) // Retorna verdadeiro, porque 5 é diferente de 6
console.log(variavel4 === variavel6) // Retorna falso, porque o === compara os valores e o tipo, sendo assim mesmo que ambas são 5, o tipo de uma é number e o tipo de outra é string
console.log(variavel6 === variavel7) // Retorna verdadeiro, porque tanto o valor quanto o tipo das variaveis são iguais