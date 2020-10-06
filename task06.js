let input;
let total = 0;

do {
  input = prompt(`Введите число`);

  const numInput = Number.isNaN(Number(input));

  if (numInput === true) {
    alert(`${input} Это не число, попробуй ввести число`);
    break;
  }

  total = total + +input;
} while (input !== null);

console.log(`Общая сумма чисел равна ${total}`);
