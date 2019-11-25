var dato = parseFloat(document.getElementById('MediaS').value);

function factorial(dato) {
    if (dato <= 1) {
        return 1;
    } else {
        return dato * factorial(dato - 1);
    }

}