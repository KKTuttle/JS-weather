var apiKey = require('./../.env').apiKey;
var Temperature = require('./../js/temperature.js').temperatureModule; // temperatureModule is pulling the Temperature object from our temperature.js file, along with all prototype methods associated with Temperature.

$(document).ready(function() {
  $('.tempType').change(function() {
    var tempType = $( "select option:selected" ).text();
    $('#temperatureLocation').text("Get temperature in " + tempType);
  });

  $('#temperatureLocation').click(function(){
    var city = $('#location').val();
    var tempType = $('.tempType').val();
    console.log(tempType);
    $('#location').val();

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      console.log(response);
      var tempObject = new Temperature(response.main.temp);
      if(tempType == "celcius") {
        $('.showWeather').text("The temperature in " + city + " is " +  tempObject.toC() + " degrees Celcius.");
      } else if(tempType == "fahrenheit") {
        $('.showWeather').text("The temperature in " + city + " is " + tempObject.toF() + " degrees Fahrenheit.");
      } else {
        $('.showWeather').text("The temperature in " + city + " is " + response.main.temp + " degrees Kelvin.");
      }
      // $('.showWeather').text("The temperature in " + city + " is " + response.main.temp + " degrees Kelvin. Temp in Fahrenheit is " + tempObject.toF() + " degrees. Temp in Celcius is " + tempObject.toC() + " degrees.");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
