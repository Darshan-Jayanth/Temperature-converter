// targeting input feilds, button and storing them in variables
let celsius = document.querySelector("#celsius > input");
let farenheit = document.querySelector("#farenheit > input");
let kelvin = document.querySelector("#kelvin > input");
let btn = document.querySelector("button");

// function to round off values to 2 decimal points
function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

// Input celsius, calculates temperature in farenheit and kelvin
celsius.addEventListener("input", () => {
  let celsiusTemp = parseFloat(celsius.value);
  let farenheitTemp = celsiusTemp * (9 / 5) + 32;
  let kelvinTemp = celsiusTemp + 273.15;

  farenheit.value = roundNumber(farenheitTemp);
  kelvin.value = roundNumber(kelvinTemp);
});
// Input farenheit, calculates temperature in celsius and kelvin
farenheit.addEventListener("input", () => {
  let farenheitTemp = parseFloat(farenheit.value);
  let celsiusTemp = (farenheitTemp - 32) * (5 / 9);
  let kelvinTemp = celsiusTemp + 273.15;

  celsius.value = roundNumber(celsiusTemp);
  kelvin.value = roundNumber(kelvinTemp);
});
// Input kelvin, calculates temperature in celsius and farenheit
kelvin.addEventListener("input", () => {
  let kelvinTemp = parseFloat(kelvin.value);
  let celsiusTemp = kelvinTemp - 273.15;
  let farenheitTemp = celsiusTemp * (9 / 5) + 32;

  celsius.value = roundNumber(celsiusTemp);
  farenheit.value = roundNumber(farenheitTemp);
});
// clears all input feilds with the click on all clear button
btn.addEventListener("click", () => {
  celsius.value = "";
  farenheit.value = "";
  kelvin.value = "";
});
