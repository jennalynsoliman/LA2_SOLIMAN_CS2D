//storing variables
var a = 25;
var b = 20;
var c = 12;
var d = "15";
const e = 15;

var sum = a + b + c + Number(d) + e; //using parseInt()to avoid concatenating and to sum well

console.log(sum)

//comparing var d and const e using >,<,>=,<=,===
var lessthan = d>e; //Declaring new variables
var morethan = d<e;
var greaterthaEqualto = d>=e;
var lessthaEqualto = d<=e;
var strictequality = d===e;

// to print the result
console.log(lessthan);
console.log(morethan);
console.log(greaterthaEqualto);
console.log(lessthaEqualto);
console.log(strictequality );

var sub = a - b - c - Number(d) - e; //to subtract
var multi = a*c;
var expo = e**e;

console.log(sub);
console.log(multi);
console.log(expo);

// re assign the value
const newVale = c[3];

console.log(e); // displaying the result of reassign value of c.3
