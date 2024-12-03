/**
 * var
 * Scope: function scoped.  
 * Reassignability: Can be reassigned
 * Hoisting : Hoisted to the top of its scope, but initialized as undefined
 * Redeclarion : Possible
 * Hoisting : It's a behaviour in JavaScript where variable and function declarations are moved to the top of their containing scope
 */
function demoVar() {
    console.log(x);
    if (true) {
       var x=10; 
       x=20; // reassign a new value to the existing variable x
       var x=30; // re-declartion
       console.log("var inside the block : " + x); // able to access the var x inside the block
    }
    console.log("var outside the block : " + x); // able to access the var x inside the function
}

demoVar();
// console.log("var outside the function : " + x); // Uncaught ReferenceError ReferenceError: x is not defined

console.log(y); // output : undefined (hoisted, but not initialized)
var y=6;
console.log(y); // output : 5

/**
 * let
 * Scope: Block-scoped
 * Reassignability: Can be reassigned
 * Redeclarion : Not possible
 * Hoisting: Hoisted to the top of its scope but is in the temporal dead zone until declared
 */
function letDemo() {
    if (true) {
        let z=100;
        z=10;
        // let z=20; // Cannot redeclare block-scoped variable 'z'.
        console.log("Accessing let value inside the block : " + z);
    }
    // console.log("Accessing let value outside the block : " + z); // Uncaught ReferenceError ReferenceError: z is not defined
}

letDemo();
// console.log(a); // Uncaught ReferenceError ReferenceError: a is not defined
let a=20;
console.log(a);

/**
 * const
 * Scope : Block-scoped
 * Reassignability : Cannot reassign the value to the const variable once declared with any value
 * Redeclarion : Not Possible
 * Hoisting: Hoisted to the top of its scope but is in the temporal dead zone until declared
 */

function constDemo() {
    if (true) {
        const c=40;
        //c=10; // Assignment to constant variable
        // const c=50; // Cannot redeclare block-scoped variable 'c'
        console.log("Accessing const value inside the block : " + c);
    }
    // console.log("Accessing const value outside the block : " + c);  // Uncaught ReferenceError ReferenceError: c is not defined
}

constDemo();