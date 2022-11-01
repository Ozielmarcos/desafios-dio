const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);

//estrutura 'for' é usada para percorrer, por um certo numero de vezes

//for (let i = 0;...) nessa 1ª parte, é feita a declaração da variável de controle(geralmente usada "index")
// a 2ª parte, é estrutura de condição, geralmente retorna booleano
// a 3ª parte é, o que vai acontecer, depois que terminar de executar o 'for'

const nome = 'oziel marcos';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}