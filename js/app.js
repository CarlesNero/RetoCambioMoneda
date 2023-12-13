const convert = document.getElementById("convert");
const result = document.getElementById("result");
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");
convert.addEventListener("click", function () {
  let fromCurrency = from.value;
  let toCurrency = to.value;
  let amt = amount.value;

  if (!amt || isNaN(amt)) {
    alert("Por favor, ingrese un número válido en el campo de cantidad.");
    return;
  }

  /*   if (fromCurrency === "EUR" && toCurrency === "JPY") rate = 155.59;
  else if (fromCurrency === "EUR" && toCurrency === "USD") rate = 1.09;
  else if (fromCurrency === "USD" && toCurrency === "EUR") rate = 0.92;
  else if (fromCurrency === "USD" && toCurrency === "JPY") rate = 143.02;
  else if (fromCurrency === "JPY" && toCurrency === "EUR") rate = 0.0064;
  else if (fromCurrency === "JPY" && toCurrency === "USD") rate = 0.007;
  else rate = 1; */

  const RATES = {
    EUR: {
      EUR: 1,
      USD: 1.09,
      JPY: 155.59,
      KRW: 1422.69,
    },
    USD: {
      EUR: 0.92,
      USD: 1,
      JPY: 143.02,
      KRW: 1293.01,
    },
    JPY: {
      EUR: 0.0064,
      USD: 0.007,
      JPY: 1,
      KRW: 9.07,
    },
  };

  const rate = RATES[fromCurrency][toCurrency];

  let total = rate * amt;
  result.innerHTML = `${amt} ${fromCurrency} = ${total.toFixed(
    2
  )} ${toCurrency}`;
});
