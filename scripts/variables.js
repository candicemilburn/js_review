"use strict"
console.log("hello from variables.js")

let price = 25


var product = "boots"

const color = "green"


console.log("The price is $" + price);

console.log(product);

console.log(color);

price = 30
product = "shirt"
console.log(price)
console.log(product)

color = "red"
console.log(color)

//If you try to change the const it will return an
// error because constants do not change

//var doesn't return all of the errors it can cause so 
//its best practice to use the let and const
