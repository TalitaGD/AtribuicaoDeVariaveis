console.log("Trabalhando com atribuição de variaiveis"); 

const idade = 20;
let nome = "Talita";
const sobrenome = "Dovigo";

console.log(nome + sobrenome) //NÃO SEPARA
console.log(nome, sobrenome) //SEPARA - OPÇÃO 1)
console.log(nome + " " + sobrenome) //SEPARA - OPÇÃO 2)

console.log('Meu nome é ${nome}'); //NÃO FUNCIONA

nome = nome + sobrenome;
console.log(nome);

let ano; //declaração de valor
ano = 2022; //atribuindo valor
ano = ano + 1; 
console.log(ano);