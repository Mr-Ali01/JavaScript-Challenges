// Task 1
function checkNum(num){
    if(num % 2 === 0){
        return "Even";
    } else{
        return "Odd"
    }
}
// console.log(`Number is: ${checkNum(4)}`);

// Task 2
function square(num){
    return num * num;
}

// console.log(`Square of number is: ${square(5)}`);

// Task 3
const maxNum = function(...nums){
    if(nums[0]>nums[1]){
        return nums[0];
    } else {
        return nums[1]
    }
}
// console.log(`Maximum Number is: ${maxNum(5,4)}`);

// Task 4
const addTwoString = function(str1, str2){
    let str3 ='';
    str3 = str1 + str2;
    return str3;
}
// console.log(`Concatenate Two string ${addTwoString("Samir"," Ali")}`);

// Task 5
const arrowSum = (one,two)=>{
    one+=two;
    return one;
}
// console.log("Sum is",arrowSum(10,5));

// Task 6
const checkString = (str1,str2)=>{
    // if(str1.includes(str2)){
    //     return true;
    // } else{
    //     return false;
    // }
    for(i=0; i<str1.length; i++){
        if(str1[i] === str2){
            return true;
        } 
    }
    return false;
}
let name = "Samir"
// console.log(checkString(name,'m'));

// task 7
function twoPara(num1, num2 = 5){
    return num1+num2;
}
// console.log(`Sum is ${twoPara(9)}`);

// Task 8
function person(name,age=28){
    return `${name} \n Age ${age}`
}

// console.log(`Person name is ${person("Sonu",20)}`);

// Task 9
function one(nums, fun){
  return fun();
}
function two(){
    console.log("Assalamu alikum");
}
one(5,two);

// task 10
function firstFun(secondFun, thirdFun,val){
    return thirdFun(secondFun(val))
}
function add(value){
    return value+3;
}
function multiply(value){
    return value * value;
}
let Results = firstFun(add,multiply,5);
console.log(`Result ${Results}`);