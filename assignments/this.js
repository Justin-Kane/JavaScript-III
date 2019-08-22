/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global : when you are in the global scope, 'this' is set to the window
* 2. Implicit : when an object is called, this will refer to whatever is left of the dot
* 3. New : when using a constructor function, this refers to the 
* 4. Explicit : (bind, call} this will get defined immediately after
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHi(name) {
    console.log(this);
}

// Principle 2

// code example for Implicit Binding
const implicitObj = {
    sayHello: function() {
        console.log('implicit binding', this)
    }
}
// Principle 3

// code example for New Binding
function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.sayHello = function() {
        return `Hello, my name is ${this.name}, and i am ${this.age} years old`
    }
}

const justin = new Constructor({name: 'Justin', age: 22});
const george = new Constructor({name: 'george', age: 25});
// ^ the object that 'this' refers to

justin.speak();

// Principle 4

// code example for Explicit Binding
justin.speak.call(george)