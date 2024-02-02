function circleValues(rad) {
  
  return`Perimeter: ${(2*Math.PI*rad).toFixed(2)}, Area: ${(Math.PI*rad*rad).toFixed(2)}`;
}

console.log(circleValues(10)); 
console.log(circleValues(15)); 
console.log(circleValues(25)); 

function reverse(num)
{
    var rev = 0;
    while(num!=0)
    {
    
    var lastdig = num%10;
     rev = (rev*10) + lastdig;
     num =Math.trunc(num/10);
    }
    return rev;
}


console.log("\n\nReverse of 1234 is ", reverse(1234));

function countVowel(str) {
  var count = 0;
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++; 
    }
  }
  return count;
}

console.log("\nThe word ALPHABET has " ,countVowel("ALPHABET"), "Vowels"); 
console.log("\n The word ENERGY has",countVowel("ENERGY"),"vowels");

function flattenArr(arr) {
  return arr.reduce((result, array) => result.concat(array));;
}

console.log("\n Array of [1 2 3],[4 5 6],[7 8 9] is ",flattenArr([ [1, 2, 3],[4, 5, 6],[7, 8, 9],]));


function checkPalindrome(str) {
  for(var i=0;i<str.length;i++){
    if(str.charAt(i)!=str.charAt(str.length-i-1)){ // Comparison fail
      return false;
    }
  }
  return true;
}

console.log("\nmoon is palindrome?:", checkPalindrome("moon")) ;
console.log("\nmalayalam is palindrome?:", checkPalindrome("malayalam"));


function simpleIntrest(principle, rate, time) {
  var finalAmt = principle + principle * time * rate;
  return finalAmt;
}

console.log("\nSimpleInterest for Principle :2000, Rate :5 time:2=", simpleIntrest(20000, 5, 2)); 


function genRandom(start, end) {
  return Math.floor(Math.random() * end) + start;
}

console.log("\nGenerating random number between 1 n 10:",genRandom(1, 10)); 

function getFactorial(num) {
  if (num == 1) {
    return 1; 
  }
  if (num == 0 || num < 0) {
    return 0; 
  }
  return num * getFactorial(num - 1);
}

console.log("\nFactorial for 5:",getFactorial(5));

function addNumber(...args) {
  return args.reduce((total, num) => total + num); 
}

console.log(
  "\nAdd unlimited numbers 2, 4, 5,1,2,3,2:",addNumber(2, 4, 5, 1, 2, 3, 2)); 


  function letterCount(str, c) {
    var count = 0;
    str = str.toLowerCase(); 
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == c) {
        count++; 
      }
    }
    return count;
  }

  console.log("\nCount No of' i 'in Missisippi:",letterCount("Missisippi", "i"));

  function checkPrime(num, div=2) {

  if (num <= 2){
    return (num == 2) ? true : false;
  }

  if (div * div > num){
    return true;
  }
    
  
  if (num % div == 0){
    return false;
  }   
  
  return checkPrime(num, div+1);
}

console.log("\n27 is a prime?",checkPrime(27)) ;
 

