"use strict";

let message;
const ADMIN_PASSWORD = 12345;

let userAnswer;
userAnswer = +prompt("Enter password");

if (userAnswer === 0) {
  alert("Отменено пользовтелем");
} else if (userAnswer === ADMIN_PASSWORD) {
  alert("Добро пожаловать!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}
