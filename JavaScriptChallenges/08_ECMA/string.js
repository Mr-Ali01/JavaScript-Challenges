const personName = `Samir ali`
const age= 21;
// console.log(`Person name is ${personName} and age is ${age}`);
 
const infoPErson = `My name is Samir ali
                    and , I from Uttar pradesh
                    , I pursuing BCA form Osmania University`
                    // console.log(infoPErson);
// Activity 2 Destructuring Array
const destrucArr = ['Green', 'Red','Blue']
const [arr1,arr2]=destrucArr;
console.log(arr1,arr2);
 
// Destructuring Object
let bookLibray = {
    title: 'Physics',
    author:'bk',
    year: 1997
}
const {title,author}=bookLibray;
// console.log(title,'and', author);
let {title:titleName, author:authorName}=bookLibray;
// console.log(`${titleName} and ${authorName}`);

// Spread and Rest Operator
const valArr=[1,2,3,4,5];
let newArr =[...valArr]
// console.log(`${valArr} and ${newArr}`);
//  rest operator
function restSum(...num){
    return num.reduce((total , value)=> {
        return total + value
    })
}
// console.log(restSum(3,2,5,3));

// Default Parameter
function add(a,b=a){
    return a+ b;
}
// console.log(add(4,2));

// Enhance Object litral
let litralObj = {
    title: 'Math',
    author:'Mr. ali',
    year: 1995,
    subtract: function(a, b){
        return a - b
    }
}
// console.log(litralObj);
// console.log(litralObj.subtract(7,5));

let samName ="Ali";
let s ={
    [samName]:'this is my tilte name'
}
console.log(s.Ali);
// Define a variable to use as a property name
const keyName = 'dynamicKey';

// Create an object with a computed property name
const obj = {
  [keyName]: 'value associated with dynamicKey'
};

console.log(obj); // Output: { dynamicKey: 'value associated with dynamicKey' }
console.log(obj.dynamicKey); // Output: 'value associated with dynamicKey'
