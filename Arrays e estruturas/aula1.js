

const alunos = ['oziel', 'andreia', 'terezinha']; // As listas(arrays) ficam dentro de colchetes

alunos.push('fernando');  //maneira usada para adicionar á lista

alunos[4] = 'Pri';  // maneira tbm usada para adicionar a lista, e demarcando a posição.

console.log(alunos);

let lista = []; // As listas podem ser declaradas vazias

lista.push('valdomiro', 50); // as listas podem receber diferentes tipos de dados
lista.push(60);

console.log(lista);

let teste = ['1', '2', '3'];
console.log(teste);
console.log(teste.pop());  //.pop, remove o último ítem da lista e o imprime, pode ser usado
console.log(teste);
teste.push('4', '5', '6');
console.log(teste);
console.log(teste.shift()); // remove o primeiro
console.log(teste);

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length); //.length é usado para percorrer a lista, saber qntos itens a lista possui.

