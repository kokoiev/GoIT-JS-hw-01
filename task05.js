"use strict";

let userCountry;
userCountry = prompt("Укажите страну для оформления доставки!");
userCountry = userCountry.toLocaleLowerCase();

let deliveryChina = 100;
let deliveryChile = 250;
let deliveryAustralia = 170;
let deliveryIndia = 80;
let deliveryJamaica = 120;

if (userCountry !== null) {
  switch (userCountry) {
    case "китай":
      alert(`Доставка в ${userCountry} будет стоить ${deliveryChina} кредитов`);
      break;
    case "чили":
      alert(`Доставка в ${userCountry} будет стоить ${deliveryChile} кредитов`);
      break;
    case "австралия":
      alert(
        `Доставка в ${userCountry} будет стоить ${deliveryAustralia} кредитов`
      );
      break;
    case "индия":
      alert(`Доставка в ${userCountry} будет стоить ${deliveryIndia} кредитов`);
      break;
    case "ямайка":
      alert(
        `Доставка в ${userCountry} будет стоить ${deliveryJamaica} кредитов`
      );
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
}
