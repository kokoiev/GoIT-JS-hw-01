"use strict";

let credits = 23580;
const PRICE_PER_DROID = 3000;
let userAnswer;
userAnswer = +prompt(`Какое количество дронов вы хотите приобрести?`);

let totalPrice;
totalPrice = userAnswer * PRICE_PER_DROID;

if (totalPrice == 0) {
  alert("Отменено пользователем");
} else if (totalPrice > credits) {
  alert("Недостаточно средств на счету!");
} else {
  credits = credits - totalPrice;
  alert(
    `Вы купили ${userAnswer} дроидов, на счету осталось ${credits} кредитов.`
  );
}
