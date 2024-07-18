// Array Creation and Access
// Task 1
let arr1 =[1,2,3,4,5];
// console.log(arr1);
// console.log(arr1[0],arr1[4]);

// 2. Array Methods (basic)
arr1.push(6);
// console.log("PUsh: ",arr1);
arr1.pop();
// console.log("Pop:",arr1);
arr1.shift();
// console.log("Shift: ",arr1);
arr1.unshift(8);
// console.log("Unshift: ",arr1);

// 3. Array Methods (Intemediate)
// task 7
let arrMap =[1,2,3,4,5];
// console.log("arrMap: ",arrMap);
const mapArr = arrMap.map( (n)=> n*n);
// console.log("MapArr: ",mapArr);
 
// task 8
let filter1 = [1,2,3,4,5,6,7,8];
const filterArr = filter1.filter(function(even){
   return even % 2 === 0
})
// console.log("Filter: ",filterArr);

// task 9
let reduceArr = [1,2,3,4,5,6,7];
const newReduce = reduceArr.reduce(function(add,val){
    return add + val
},0)
// console.log("Reducd: ",newReduce);

// 4. Array Iteration
// Task 10
const newArr = [3,2,4,5,6,7];
for(i=0; i<newArr.length; i++){
    // console.log(newArr[i]);
}
// task 11
newArr.forEach(function(e){
    // console.log(e);
})

// 5. Multi-dimensional Arrays
// Task 12
let multiArr = [[1,2,3,4],[5,6,7,8]];
console.log(multiArr);
// task 13
console.log(multiArr[0][0]);