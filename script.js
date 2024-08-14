function calcularTotal() {
    const precos = {
        acai: 8.00,
        casquinha: 2.00,
        pote: 5.00,
        milkshake: 7.00,
        cupcake: 1.50,
        picole: 1.50,
        brownie: 1.50,
        refresco: 1.00
    };

    let total = 0;

    for (let item in precos) {
        const quantidade = document.getElementById(item).value;
        total += quantidade * precos[item];
    }

    document.getElementById('total').innerText = total.toFixed(2);
}

function calcularTroco() {
    const total = parseFloat(document.getElementById('total').innerText);
    const valorPago = parseFloat(document.getElementById('valorPago').value);
    let troco = 0;

    if (valorPago >= total) {
        troco = valorPago - total;
    }

    document.getElementById('troco').innerText = troco.toFixed(2);
}
