//1. Arithmetic Operations
    let a = 5
    let b = 30
    console.log("Sum is:",a+b);
    console.log("Subtraction value is:",a-b);
    console.log("multiply sum is:",a*b);
    console.log("Divide is:",a/b);
    console.log("Reminder is:",a%b);

//2. Assignment Operations
    console.log("Divid:",a/=b);
    console.log("Addition is:",a+=b);
    console.log("Subtration:",a-=b);
    console.log("Multiply:",a*=b);
   
//3. Camparision Operations
    if(a<b){
        console.log("A less than B");
    } 
    else if(a>b){
        console.log("A greather than B");
    }
    else if(a<=b){
        console.log("A less than or equat to B");
    } 
    else if(a>=b){
        console.log("A grater than or equat to B");
    } 
    else if(a==b){
        console.log("A equat to B");
    }
    else if(a===b){
        console.log("A equat to B with same data type");
    }

//3\4. Logical Operations

let c = 10
let d = 15
if(a<b && c<d){
    console.log("Both condition is true");
}
else if(b>a || c<d){
    console.log("One or more condition is true");
}
if(c!=b){
    console.log("C not equal to b");
}

// 5. Ternary Operations
const e = c<d? "yes": "No";
console.log(e);
let x = -10
let y = x? "Negative-number": "Positive-number"
console.log(y);