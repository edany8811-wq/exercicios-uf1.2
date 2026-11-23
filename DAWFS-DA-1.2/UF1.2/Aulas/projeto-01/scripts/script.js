/*
variaves:
-let
-const
*/ 

let nome= "Daniela"; // string
let idade= 18; // number (inteiro)
let estaPresente = true; // boolean (true ou false)
let altura = 1.70; // number (float)
let nota; // underfined
let media = null; //valor internacional de vazio

const morada = "vila nova"

nome= "Daniela"
idade= 19
// morada= "street"; // nao pode ser alterada uma const

console.log("Meu nome e: "+ nome, "minha idade" + idade);
console.log("minha morada e: " + morada)
console.log(typeof nome); // tipo de dados da variavel nome

let nomCafe = "Capuccino";
let preco = 250; // escudos
let quantidade;
let resposta = prompt("Quantos Capuccinos deseja pedir?");
quantidade = parseInt(resposta);
let total = 0;

total = preco * quantidade;
console.log(nome + "pediu" + quantidade + " " + nomCafe);
console.log("O total a pagar e de " + total + "escudos.");
