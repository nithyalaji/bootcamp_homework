people = ["Greg", "Mary", "Devon", "James"];
for(i=0; i<people.length; i++)
{
    console.log(people[i]);

}
firstElement = people.shift();// removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log("First Element:",firstElement);


lastElement = people.pop(); //removes the last element from an array and returns that element. This method changes the length of the array.
console.log("\nlastElement:", lastElement);

console.log("\nElement length  :",people.unshift("MATT"),people); //adds the specified elements to the beginning of an array and returns the new length of the array.

console.log("\nElement length :",people.push("Nithya"),people); //adds the specified elements to the beginning of an array and returns the new length of the array.

for(i=0; i<people.length; i++)
{
    console.log("\nElememnts till MAry:",people[i]);
    if(people[i]=="Mary")
    break;

        
}

console.log("\nshallow copy From 2:",people.slice(2));


console.log("\nindex of mary:",people.indexOf('Mary'));

console.log("\nindex of Foo;",people.indexOf('Foo'));


people = ["Greg", "Mary", "Devon", "James"];
console.log("\nREdefined Array",people);

people.splice(2, 1, "Elizabeth", "Artie");
console.log("\nremoving &replacing elements;",people);

withBob = ["Bob"];
console.log("\n concat withbob:",people.concat(withBob));

