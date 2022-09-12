// Primitive types are pass by value
let num1 = 5;
let num2 = 7;

function multiply(a, b) {
    a = 7;
    const result = a * b;
    return result;
}
console.log(num1);
multiply(num1, num2);
console.log(num1);

// Object and Array Are Passed By Reference
let person1 = { name: 'Jalil', partner: 'Borsha' };
let person2 = { name: 'Raz', partner: 'Anika' };

function makeMovie(couple1, couple2) {
    couple1.name = 'Onnonto';
    couple2.partner = 'Mim';
}
console.log(person1, person2);
makeMovie(person1, person2);
console.log(person1, person2);