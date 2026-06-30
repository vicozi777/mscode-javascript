function calcular(operacao) {
const n1 = Number(document.getElementById('n1').value);
const n2 = Number(document.getElementById('n2').value);
let total = 0; 
if (operacao === 'sm') {
    total = n1 + n2;
} else if (operacao === 'sb') {
    total = n1 - n2;
}
document.getElementById('resultado').innerText = total;
}
