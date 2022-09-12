// Static Typed or strickly Typed or Strongly Typed Programming Language
/* int a = 5;
string b = 'alim halim khalim'
bool c=True;
object student={name:'noya dhman', id:55}
int[] numbers=[12,45,78]
string[] friends=['abul','babul'];
*/


// JavaScript dynamic typed programming language
// primitive type
const a = 5;
const b = 'Amar Sonar Bangla';
const d = true;

// non-primitive type
const ages = [45, 65, 48];
const student = { id: 23, class: 7 };


// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

// primitive type
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

// non-primitive type
// it's contain reference for non-primitive types(both array and object) if we don't re-assign value and if we re-assign value then it'll take value as new assigned value. If we change partially any value then both of the variable will be change like below example
let p = { job: 'web developer' };
let q = p;
q.job = 'backend developer';
console.log(p, q);