let input;
let total = 0;
console.log(total);

do {
  input = prompt(`Введите число`);
  console.log(input);

  const numInput = Number.isNaN(Number(input));
  console.log(numInput);
  if (numInput === true) {
    alert(`${input} Это не число, попробуй ввести число`);
    break;
  }

  total = total + +input;
} while (input !== null);

console.log(`Общая сумма чисел равна ${total}`);
2;
