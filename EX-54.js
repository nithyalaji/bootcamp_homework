function calcCircumfrence(radius) {
  var Circumference =( 2 * radius * Math.PI) .toFixed(2);
  console.log("The circumference is " + Circumference);
}

function calcArea(radius) {
  var area = (radius * radius * Math.PI).toFixed(2);
  console.log("The Area is " + area);
}

function calcAll(radius) {
  calcCircumfrence(radius);
  calcArea(radius);
}


calcAll(5);
