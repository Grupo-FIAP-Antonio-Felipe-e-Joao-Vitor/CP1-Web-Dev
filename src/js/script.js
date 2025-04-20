// EXERCICIO 1

// let variavel1; //Variavel undefined
// let variavel2 = ""; //Variavel com valor vazio
// let variavel3 = 10; //Variavel com valor

// console.log(variavel1)
// console.log(variavel2)
// console.log(variavel3)



// // EXERCICIO 2
// // Operadores comarativos retornam TRUE ou FALSE

// let variavel4 = 5;
// let variavel5 = 6;
// let variavel6 = '5';
// let variavel7 = '5';

// console.log(variavel4 >= variavel5) // Retorna falso, porque 5 não é maior ou igual a 6
// console.log(variavel4 <= variavel5) // Retorna verdadeiro, porque 5 é menor que 6
// console.log(variavel4 == variavel5) // Retorna falso, porque 5 nõ é igual a 6
// console.log(variavel4 != variavel5) // Retorna verdadeiro, porque 5 é diferente de 6
// console.log(variavel4 === variavel6) // Retorna falso, porque o === compara os valores e o tipo, sendo assim mesmo que ambas são 5, o tipo de uma é number e o tipo de outra é string
// console.log(variavel6 === variavel7) // Retorna verdadeiro, porque tanto o valor quanto o tipo das variaveis são iguais




// EXERCICIO 3

// function calcularIMC (peso, altura) {
//     let IMC = peso / (altura * altura)


//     switch (true) {
//         case IMC < 18.5:
//             alert("Abaixo do peso")
//             break;
//         case IMC >= 18.5 && IMC <= 24.9:
//             alert("Peso ideal")
//             break;
//         case IMC > 24.9:
//             alert("Acima do peso")
//             break;
//         default:
//             break;
//     }
// }

// let peso = prompt("Peso em Kg"); // Peso em kg
// let altura = prompt("Altura em metros"); // Altura em metros

// calcularIMC(peso, altura)

// // EXERCICIO 4

// for(let i=0; i<=50; i++){
//     console.log(`O valor é: ${i}`)
// }

// EXERCICIO 5

// const usuario = "admin"
// const senha = 1234

// cadastro = prompt("Digite seu usuário")
// codigo = parseInt(prompt("Digite sua senha"))

// while(cadastro !== usuario || codigo !== senha){
//     alert("Falha na autenticação")
//     cadastro = prompt("Digite seu usuário")
//     codigo = parseInt(prompt("Digite sua senha"))
//     if (cadastro == usuario &&  codigo == senha){
//         break
//     }
// }

// alert("Sucesso na autenticação")

// EXERCICIO 6

// let nt1 = parseFloat(prompt("Digite sua primeira nota"))
// let nt2 = parseFloat(prompt("Digite sua segunda nota"))
// let nt3 = parseFloat(prompt("Digite sua terceira nota"))
// let nt4 = parseFloat(prompt("Digite sua quarta nota"))
// let nt5 = parseFloat(prompt("Digite sua quinta nota"))
// let nt6 = parseFloat(prompt("Digite sua sexta nota"))
// let nt7 = parseFloat(prompt("Digite sua setima nota"))

// media = ((nt1 + nt2 + nt3 + nt4 + nt5 + nt6 + nt7)/7)

// if (media >= 6){
//     alert("Você foi aprovado")
// }else{
//     alert("Você foi reprovado")
// }


// EXERCICIO 7

//     let nome = prompt("Isira seu nome")
//     let idade = prompt("Insira sua idade")
//     let curso = prompt("Insira seu curso")
//     let ano = prompt("Insira em que ano do curso você está")

//     alert(`Nome: ${nome}
// Idade: ${idade}
// Curso: ${curso}
// Ano: ${ano}`)

//EXERCICIO 8

// const texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";
// const primeiraPosicaoEm = texto.indexOf("em");
// const ultimaPosicaoIa = texto.lastIndexOf("ia");
// const buscaCiencia = texto.includes("ciência");
// const buscaMetodos = texto.includes("métodos");

// console.log("Primeira posição de 'em':", primeiraPosicaoEm);
// console.log("Última posição de 'ia':", ultimaPosicaoIa);
// console.log("Palavra 'ciência' presente?", buscaCiencia);
// console.log("Palavra 'métodos' presente?", buscaMetodos);

//EXERCICIO 9

// let valorString = "578.21";
// let valorFloat = parseFloat(valorString);
// let tipoVariavel = typeof valorFloat;

// console.log("Valor original:", valorString);
// console.log("Valor convertido para float:", valorFloat);
// console.log("Tipo da variável:", tipoVariavel);