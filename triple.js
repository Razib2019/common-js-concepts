// Always use (===)
// Equal Comparison doesn't work for non-primitive type 

/* 
(==) check only value
(===) check value and data type both
*/

// Type coercion
// Type conversion
// Type casting
const first = 1;
const second = true;
if (first === second) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}