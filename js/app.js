const convert = document.getElementById("convert");
const result = document.getElementById("result");
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");
convert.addEventListener("click", function () {
  let fromCurrency = from.value;
  let toCurrency = to.value;
  let amt = amount.value;
  

  if (fromCurrency === "EUR" && toCurrency === "YEN") rate = 155.59;
  else if (fromCurrency === "EUR" && toCurrency === "USD") rate = 1.09;
  else if (fromCurrency === "USD" && toCurrency === "EUR") rate = 0.92;
  else if (fromCurrency === "USD" && toCurrency === "YEN") rate = 143.02;
  else if (fromCurrency === "YEN" && toCurrency === "EUR") rate = 0.0064;
  else if (fromCurrency === "YEN" && toCurrency === "USD") rate = 0.007;
  else rate = 1

  let total = rate * amt;
  result.innerHTML = `${amt} ${fromCurrency} = ${total.toFixed(2)} ${toCurrency}`;

});
