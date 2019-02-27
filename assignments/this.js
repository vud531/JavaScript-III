/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. refer to the global/window object
* 2. refer to the object that the property/method is part of
* 3. refer to the parent object that child objects inherit from
* 4. refer to the object when using functions such as call(), bind(), apply() 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var myVar = 1;
console.log(this.myVar);
console.log(this.Array());

// Principle 2

// code example for Implicit Binding
const thor = {
    name:"Thor",
    weapon:"Stormbreaker",
    attack: function() {
        console.log(`${this.name} attacks the enemy with ${this.weapon}.`);
    }
}

thor.attack();
// Principle 3

// code example for New Binding
function Superhero(name, power, weapon) {
    this.name = name;
    this.power = power;
    this.weapon = weapon;
} 

const captainAmerican = new Superhero("Captain American", "Super Strength", "Shield");

console.log(captainAmerican);
// Principle 4

// code example for Explicit Binding

function shoppingCart(items) {
    console.log(`${this["full-name"]()}'s shopping cart: ${items.join(", ")}`)
}

const tim = {
    "first-name": "Tim",
    "last-name": "Cook",
    "full-name": function(){
        return `${this["first-name"]} ${this["last-name"]}`;
    }
}

shoppingCart.call(tim, ["apple", "milk", "beef"]);

