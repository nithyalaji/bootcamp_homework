var today = new Date();
console.log("Today : " + today);

console.log(
  "today.getHours():" +
    today.getHours() +
    "\ntoday.getMinutes():" +
    today.getMinutes()
);
var a = 9;
console.log("math.sqrt(9):" + Math.sqrt(a));

console.log("Math.abs(9-10):" + Math.abs(a - 10));

var num = Math.ceil(Math.random() * 10);
console.log("Random number:" + num);

var name = "abcd";
var n = 120;
this[name] = n;

console.log("this[name]=n like key(name)-value(120) pair:" + this[name]);

var str = "python";
console.log("str.substring(0,2) of str=python:" + str.substring(0, 2));
