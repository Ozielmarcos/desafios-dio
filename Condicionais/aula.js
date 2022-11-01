/*Faça um programa par calcular o valor de uma viagem.

declarar 5 variáveis
1-Preço do etanol
2-Preço da gasolina
3-Tipo de combustível que está no seu carro
4-Gasto médio de combustível por Km
5-Distância em Km da viagem

imprimir no console o valor que será gasto para realizar a viagem.*/

const etanol = 3.35
const gasolina = 4.59
const combustivel_gasolina = 'etanol'
const gasto_medio = 10
const distancia_km = 500

if (combustivel_gasolina === 'gasolina') {
    const resultado = (distancia_km / gasto_medio) * gasolina
    console.log(resultado.toFixed(2))
}

else {
    const resultado = (distancia_km / gasto_medio) * etanol
    console.log(resultado.toFixed(2))
}

