function celsiusToFarenheit(celsiusTemperature) {
  return (celsiusTemperature * 9) / 5 + 32;
}

function farenheitToCelsius(farenheitTemperature) {
  return ((farenheitTemperature - 32) * 5) / 9;
}

module.exports = {
  celsiusToFarenheit,
  farenheitToCelsius,
};