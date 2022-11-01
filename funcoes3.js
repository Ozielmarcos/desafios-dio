function aplicar_desconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicar_juros(valor, juros) {
    return valor + (valor * (juros / 100));
}


const preco_etiqueta = 100
const forma_pagamento = 4;


if (forma_pagamento === 1) {
    console.log(aplicar_desconto(preco_etiqueta, 10));
}
else if (forma_pagamento === 2) {
    console.log(aplicar_desconto(preco_etiqueta, 15))
}
else if (forma_pagamento === 3) {
    console.log(preco_etiqueta);
}
else {
    console.log(aplicar_juros(preco_etiqueta, 10));
}