 // Activity 1: Selecting and Manipulating Elements

 document.getElementsByClassName('title-desc')[0].innerHTML = "this is Title of Dom";
 document.getElementById('para').style.backgroundColor="red";

 // Activity 2: Creating and Appending Element
 const containerBox = document.querySelector('.container');
 const div = document.createElement("div");
 div.innerText="This is a div box";
 containerBox.appendChild(div);

 const ulBox = document.querySelector('.unorder');
 const li = document.createElement('li');
 li.textContent = "Banana";
 ulBox.append(li);

 // Activity 3: Removing Elements
 let pBox = document.getElementById('para');
 // containerBox.removeChild(pBox)
 ulBox.removeChild(ulBox.lastChild)

 //Activity 4: Modifying Attributes and Classes
 const imgBox= document.querySelector('.img-1');
 imgBox.src = "images/image3.jpeg"
 pBox.classList.toggle('para2')

 // Activity 5: Event Handling
 let divBox = document.querySelector(".newDiv");
 let buttonBox = document.querySelector(".button-Box");
 buttonBox.addEventListener('click', ()=>{
     divBox.innerHTML="this is event handling"
     divBox.style.borderColor = 'blue';
 })

 // divBox.addEventListener('mouseover', ()=>{
 //     divBox.style.borderColor = 'blue';

 // })


