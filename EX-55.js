function tcelsiusToFahrenheit(Celcsius) {
  var C = Celcsius;
  var F= ((C*1.8)+32).toFixed(1);
  console.log(+C+"°C is " +F+"°F");
}

function  fahrenheitToCelsius(Fahrenheit) {
  var F = Fahrenheit;
    var C = ((F-32)/1.8).toFixed(1);
  
  console.log(+F + "°F is " + C + "°C");
}

tcelsiusToFahrenheit(50);
fahrenheitToCelsius(40);