var a=10;
var b=20;
var a=100;
var c=a+b;
console.log(c);
console.log(typeof(a));

let x=10;
let y=20;
// let x=100; // Cannot redeclare block-scoped variable 'x'.t
let z=x+y;
console.log(z);
console.log(typeof(x));
var a = 'e';
console.log(typeof(a));

var marks = Array(6)
var marks = new Array(20,40,35,12,37,100)
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[5]);
console.log(marks[6]); // Exception

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

var numbers = Array(1,2,3,4,5,6,7,8,9,10);
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index]%2==0) {
        console.log(numbers[index]);
    }
}

for (let i=0; i<=100;i++) {
  if (i%2==0) {
    console.log(i + " is an even number");
  } else {
    console.log(i + " is an odd number");
  }    
}