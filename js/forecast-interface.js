var apiKey = require("./../.env").apiKey;

$(document).ready(function() {
  $('#forecastLocation').click(function() {
    var city = $('#location').val();
    $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&mode=json&units=metric&cnt=16&appid=' + apiKey).then(function(response) {
      console.log(response);
      $('.showForecast').text("");
      response.list.forEach(function(day){
        var date = new Date(day.dt*1000);
        $('.showForecast').append("<h3>" + (date.getMonth()+1) +"-"+ date.getDate() + "</h3><p>" + day.temp.day + " degrees celcius</p>");
      });
    }).fail(function(error) {
      debugger;
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
