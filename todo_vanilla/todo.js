/* 
Author: Nicholas Fazzolari
**************************
TODO:
• Implement remove item functionality
• Implement edit in place
• Add form validation
• Consider max and min values for lists and list items (performance)
*/

let listRoot = document.getElementById('listRoot'); // Entry point for DOM manipulation
let listTitleEl;
let newListEl;
let listItemEl;
let listItemCount = 0;

// Inserts a heading element and fills it with the form value sets up empty ul
function createList() {
    listTitleEl = document.createElement('h1');
    listTitleEl.id = "listTitle";
    listTitleEl.innerText = document.getElementById('listTitle').value;

    newListEl = document.createElement('ul');
    newListEl.id = "todoList";

    listRoot.append(listTitleEl);
    listRoot.append(newListEl);
}

// Inserts the list item into the DOM with the user value
function createListItem() {
    listItemEl = document.createElement('li');
    listItemCount++;
    listItemEl.id = listItemCount.toString();
    listItemEl.innerText = document.getElementById('listItem').value;

    newListEl.append(listItemEl);
}

// Events handlers
const submitListName = document.getElementById('submitListName');
submitListName.addEventListener('click', createList, false);

const submitListItem = document.getElementById('submitListItem');
submitListItem.addEventListener('click', createListItem, false);