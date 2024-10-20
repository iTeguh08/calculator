// v. prompt

// let a = parseFloat(prompt("Masukkan angka pertama"));
// let b = parseFloat(prompt("Masukkan angka kedua"));
// let operasi = prompt("Pilih operasi (+, -, x, /");
// let hasil;
// if (operasi === "+") {
//     hasil = a + b;
// } else if (operasi === "-") {
//     hasil = a - b;
// } else if (operasi === "*") {
//     hasil = a * b;
// } else if (operasi === "/") {
//     hasil = a / b;
// } else {
//     alert("Operasi tidak dikenali")
// }

// if (hasil != undefined) {
//     alert("Hasil = " + hasil);
// }

function calculate(operation) {
    var answer;
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = ' '
    } else {
        if (operation === '+') {
            answer = num1 + num2;
        } else if (operation === '-') {
            answer = num1 - num2;
        } else if (operation === 'x') {
            answer = num1 * num2;
        } else if (operation === '/') {
            answer = num1 / num2;
        }
        document.getElementById('result').textContent = num1 + ` ` + operation + ` ` + num2 + ` = ` + answer;
    }
}