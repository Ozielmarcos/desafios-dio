//Faça um programa para calcular o valor gasto de combustível em uma viagem.
//Você terá 3 variáveis, sendo elas:
// 1- preço do combustível
// 2- gasto médio de combustível pelo carro
// 3- distância em Km da viagem
//Imprima no console o valor que será gasto de combustível para realizar esta vaigem.

const preco_combustivel = 5.79;
const gasto_medio = 10;
let km_total = 100;

let resultado = (km_total / gasto_medio) * preco_combustivel

console.log("R$ " + resultado.toFixed(2));
