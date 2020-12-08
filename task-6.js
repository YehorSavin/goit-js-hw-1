let input = confirm("Желаете ввести числа?");
let total = 0;

while (input) {
    input = +prompt();
    total += input;
}

alert(`Общая сумма чисел равна ${total}`);