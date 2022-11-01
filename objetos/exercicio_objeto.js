
/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura. 
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
Instancie uma pessoa chamada José que tenha 70kg, 1,75 de altura e peça ao José
para dizer o valor do seu IMC.
*/
class Pessoa { //definindo pessoas, atributos
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) { //método/atributo
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() { // cálculo do IMC
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() { //incrementando a classificação
        const imc = this.calcularImc();  //criando variável, puxando a função de cálculo

        if (imc < 18.5) {        //condições de classificação
            return 'Abaixo do peso.';   //trocando "consolo.log" por "return"
        }
        else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal.';
        }
        else if (imc >= 25 && imc < 30) {
            return 'Acima do peso.';
        }
        else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        }
        else {
            return 'Obesidade grave.';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75); //estanciando uma pessoa
console.log(jose.calcularImc(), jose.classificarImc()); //imprimindo a pessoa, chamando a função IMC
//imprimindo a classificação
const oziel = new Pessoa('Oziel', 60, 1.80);
console.log(oziel.calcularImc(), oziel.classificarImc());
const andreia = new Pessoa('Andreia', 55, 1.62);
console.log(andreia.calcularImc(), andreia.classificarImc());