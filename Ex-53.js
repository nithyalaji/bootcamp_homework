function calculateSupply(age, amount_per_day)
{
var maxage=100;
var years= maxage - age;
var amount_consumed = Math.floor(years * amount_per_day);
console.log( "You will need " + amount_consumed + " to last you until the ripe old age of " + maxage+"");
 
}
 
calculateSupply(10,50);
calculateSupply(24, 1.24);
calculateSupply(30, 10);
