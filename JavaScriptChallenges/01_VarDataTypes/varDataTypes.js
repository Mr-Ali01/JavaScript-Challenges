 // Activity 1 Variable Declaration
 var heros = ["Samir ali", "Taufiq ali", "Ilyas ali"]
 console.log(heros);

 let marks = [44,67,88,96,100]
 console.log(typeof(marks));
 console.log(marks);

 const lang = ["Js", "C", "C++", 'Java',"python"]
 console.log(lang);
 
 // Activity 2 const
 const right = true
 console.log(right)

 //Activity 3 Data types and 4 type of datatype
 let num = 34
 console.log(`Number is: ${num}`);
 console.log(typeof(num));

 let str = "JavaScript"
 console.log(`Name is: ${str}`);
 console.log(typeof(str));

 let isTrue = true;
 console.log(`isTrue is: ${isTrue}`);
 console.log(typeof(isTrue));

 let arr = [22,"JavaScript", true]
 console.log(`array of data: ${arr}`);
 console.log(typeof(arr));

 let obj = {
     name: "Samir ali",
     Role_No: 92,
     Course: "BCA"
 }
 console.log(`My Details: ${obj.name}`);
 for (const key in obj) {
    console.log(key, ' ',obj[key]);
 }
 console.log(typeof(obj));
 
 // Activity 5 Reassignment variable
 let value = 45
 console.log("value is:", value);
 value = "diffrent"
 console.log("value is:", value);
 
 //Activity 6 const understanding
 const name = "samir"
 console.log("name is ",name);
 // name = "ali"
 console.log("name is ",name);