// 1. Activity, task 1
const number = document.querySelector(".input-box");
const button = document.querySelector(".sub-button");
let nums = document.querySelector(".num");
        button.addEventListener('click', function(){
            if(number.value > 0){
                nums.innerHTML="This number is Positive";
            } else if(number.value < 0) {
                nums.innerHTML="This number is Negative";
            } else{
                nums.innerHTML="Please enter a vailid number";
            }
        })

// Task 2
const voterAge = document.querySelector(".voter");
        const ageButton = document.querySelector(".voter-age");
        const Eligible = document.querySelector("#vote");
        ageButton.addEventListener('click', function(){
            if(voterAge.value >= 18){
                Eligible.innerHTML="You eligible for vote";
            } else {
                Eligible.innerHTML="You not eligible for vote";
            }
        })

// 2. Activity task 3

let num1 = 10;
let num2 = 20;
let num3 = 12;
let largestValues = 0;
if(num1 >= num2){
    if(num1 >= num3){
        largestValues = num1;
    } else{
        largestValues = num3;
    }
} else{
    if(num2 >= num1){
        if(num2>= num3){
            largestValues = num2
        }else{
            largestValues = num3;
        }
    }
}
// console.log(`Largest number is: ${largestValues}`);


// 3. Activity task 4
let day =2;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break; 
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
    default:
        console.log("Please enter 1 to 7");
        break;
    
}

// task 5
let score =23;
let Grade
switch(true){
    case (score >= 90 && score <= 100):
        Grade = 'A';
        break;
    case (score >= 80 && score <=89):
        Grade = 'B'
        break;
    case (score >= 70 && score <=79):
        Grade = 'C';
        break;
    case (score >= 50 && score <=69):
        Grade = 'D';
        break;
    case (score >= 33 && score <=49):
        Grade = 'E';
        break; 
    case (score >= 0 && score <=32):
        Grade = 'F';
        break;
    default:
        Grade = "Invalid Grade";
        break;
}
// console.log(`Student grade is ${Grade}`);

// 4. Activity task 6
let evenOdd = 41;

let isNumber = (evenOdd % 2 === 0)? "even":"Odd"
console.log(isNumber);

// task 7
