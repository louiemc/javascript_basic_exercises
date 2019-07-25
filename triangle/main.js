// declare variables and set them equal to the lengths of the triangle
let a = 5;
console.log("Side 1 is: " + a);
let b = 6;
console.log("Side 2 is: " + b);
let c = 7;
console.log("Side 3 is: " + c);

// declare a variable to compute area of a triangle A=1/2bh
// declare variable for the perimeter which will be halved
let p = (a + b + c) / 2;
console.log("Half the perimeter is: " + p);
// Equation for area of a triangle; Heron's Formula
let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log("The area of the triangle is: " + area);
console.log("Equation: sqrt( p * (p - a) * (p - b) * (p - c)");


