/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considernado o preço
normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e
efetuar o cálculo adequado.

Código, condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no dinheiro ou Pix, recebe 15% de desconto;
- Em 2 vezes, preço normal de etiqueta sem juros;
-Acima de 2 vezes, preço normal de etiqueta mais juros de 10%;
*/

const preco_etiqueta = 100
const forma_pagamento = 4;
let numero_parcelas = 6
let taxa
let valor_pagar

if (forma_pagamento === 1) {
    console.log(preco_etiqueta - (preco_etiqueta * 0.1));
}
else if (forma_pagamento === 2) {
    console.log(preco_etiqueta - (preco_etiqueta * 0.15))
}
else if (forma_pagamento === 3) {
    console.log(preco_etiqueta);
}
else {
    console.log(preco_etiqueta + (preco_etiqueta * 0.1));
}