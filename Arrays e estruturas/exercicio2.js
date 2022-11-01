/* Crie um programa que seja capaz de percorrer uma lista de números
e imprima cada número pares encontrado.
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
}