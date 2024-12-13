// Create two input elements that only accept numeric characters. 
// By default the values of both inputs should be equal to 0 and your job is to allow the user to enter
//  their own in both inputs, and get the value they put in and compare them. and make sure that 
//  the first input value is equal to the second one. If the values are not the same an error message 
//  should be displayed somewhere on the page in the following way: 
//  If the first number is larger (number in the first input), show the error message 
//  “First number is larger”, and when the second number is larger show the message: 
//  “Second number is larger” 

//  UI Design
// The error messages should be displayed in red
// The validation should happen as the user is typing in the inputs they don’t have to click or do anything. 
// As soon as the values are not the same a correct error message should be 
// displayed and hidden as soon as the values are the same. 

let parentDiv = document.getElementById('inputs')
let inputOne =document.createElement('input');
let inputTwo = document.createElement('input');
inputOne.id = 'input-one';
inputTwo.id = 'input-two';
parentDiv.appendChild(inputOne);
parentDiv.appendChild(inputTwo);
inputOne.type = 'number';
inputOne.defaultValue = 0;
inputTwo.type = 'number';
inputTwo.defaultValue = 0;
const compare = () => {
    if(inputOne.value === inputTwo.value){
        alert ('the values are equal');
        }
       alert ('The values are not equal')
    }
parentDiv.addEventListener('keyPress', compare)

