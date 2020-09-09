let input;
let total = 0;
console.log(total);

do {
  input = prompt(`Введите число`);
  console.log(input);

  total = total + +input;
} while (input !== null);

console.log(`Общая сумма чисел равна ${total}`);
