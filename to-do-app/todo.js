// Write a JavaScript function that takes an input from the user and dynamically creates a new list item element containing the input value.
// The new list item should be appended to an existing unordered list (ul) element with the ID "todoList". Additionally, add a button to each
//list item that allows the user to remove the item when clicked. Lastly, Add a checkbox for each list item so that a user can finish a task.
// When a task is  done, the name should be crossed through.
// Expected Output:
// When the user enters "Buy Fruits" and clicks a "Add" button, a new list item with the text "Buy Fruits” should be added 
//to the "todoList" ul.
// The list item should have a "Remove" button next to it.
// When the user clicks the "Remove" button, the corresponding list item should be removed from the "todoList" ul.


const createNewList = () => {
let newList = document.createElement('li');
newList.textContent = document.getElementById('input-item').value;
let unorderedList = document.querySelector('#todolist');
unorderedList.appendChild(newList);

let buttonRemove = document.createElement('button');
buttonRemove.className = 'delete-btn';
buttonRemove.textContent = 'Remove';
newList.appendChild(buttonRemove);
buttonRemove.addEventListener('click', function remove(){
    newList.remove()
 }) 
 let input = document.createElement('input');
 input.type = 'checkbox'
newList.prepend(input);
input.addEventListener('click', function() {
    let strike = document.createElement('s');
    strike.innerText = newList;
document.body.appendChild(strike);
});
} 

 let buttonAdd = document.querySelector('#button-add');
 buttonAdd.addEventListener('click', createNewList);
 

