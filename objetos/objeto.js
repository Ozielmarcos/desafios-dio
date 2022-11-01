/*Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível
por kilômetro rodado
Crie um método que dado a quantidade de kilômetro  e o preço do combustível,
nos de o valor gasto em reais para realizar um percursso.
*/
class Carro { //definiçoes do carro
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) { //atributos do carro
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    gastoViagem(distancia, precoCombustivel) {//calculo
        return (distancia * this.gastoMedioKm) * precoCombustivel;
    }

}

const gol = new Carro('Volkswagem', 'Branco', 1 / 10); //estânciando carros
console.log(gol.gastoViagem(78, 4.59));

const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.gastoViagem(78, 3.55));
