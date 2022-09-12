/* 
Truthy:
1. true
2. Any number (+ve , -ve) will be truthy Expect/other than 0
3. Any String will be truthy Except/other than emplty string ('') And if we declare string not number or alphabet just space inside string (' ') then it will show truthy
4. '0', 'false'
5. {}
6. []

Falsy:
1. false
2. If any variable value is 0
3. ''(empty string)
4. undefined
5. null
*/

/* let x = [];
console.log(x);
if (x) {
    console.log('Value of x is truthy');
}
else {
    console.log('Value of x is falsy');
} */

// optional
//Check falsy
/* const y = null;
if (!y) {
    console.log('Value is falsy');
} */

// Check truthy
const z = 50;
if (!!z) {
    console.log('Value is truthy');
}