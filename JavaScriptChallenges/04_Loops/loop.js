// Activity 1: For Loop
for(let i = 1; i<=10; i++){
    // console.log(i);
}

// task 2
for(i=1; i<=10; i++){
    // console.log(`5 * ${i} = ${5*i}`);
}

// task 3 While Loop
let j =1;
let sum = 0;
while(j <= 10){
    sum+=j;
    j++;
}
// console.log(`Sum is ${sum}`);

// task 4
let x = 10;
while(x>=1){
    // console.log(x);
    x--;
}

// task 5 Do...while
let one = 1;
do{
    // console.log(one);
    one++;
}while(one<=5)

    // task 6
    let n =5;
    let fact =1;
    let factSum = 1;
    do{
       factSum *= fact;
        fact++;
    }while(fact <= n);
    // console.log(factSum);

// Task 7
let star =""
for(i=0; i<5; i++){
    for(j=0; j<=i; j++){
        star+='*';
    }
    star +='\n';
}
// console.log(star);


// task 8
for(i=1; i<=10; i++){
    if(i === 5){
        continue;
    }else{
        console.log(i);
    }

}

// task 9
for(i=1; i<=10; i++){
    if(i === 7){
        break;
    }else{
        console.log(i);
    }

}

