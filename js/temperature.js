function Temperature(tempInK) {
  this.tempInK = tempInK;
}

Temperature.prototype.toC = function() {
  var celcius = this.tempInK - 273.15;
  return celcius.toFixed(2); // the toFixed(x) method rounds the number to x decimal places
};

Temperature.prototype.toF = function() {
  var fahrenheit = (9/5)*(this.tempInK - 273.15) + 32;
  return fahrenheit.toFixed(2);
};

exports.temperatureModule = Temperature;
