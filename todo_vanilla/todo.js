// Author: Nicholas Fazzolari

let listNameInput;
let listItemInput;
let listTitleEl;
let newListEl;
let listItemEl;
let listItemCount = 0;
let listRoot = document.getElementById('listRoot'); // Entry point for DOM manipulation

// Gets the user input value of the form element for the list creation
function getListName() {
    listNameInput = document.getElementById('listTitle').value;
}

// Inserts a heading element and fills it with the form value
function createList() {
    listTitleEl = document.createElement('h1');
    listTitleEl.id = "listTitle";
    listTitleEl.innerText = listNameInput;

    newListEl = document.createElement('ul');
    newListEl.id = "todoList";

    listRoot.append(listTitleEl);
    listRoot.append(newListEl);
}

// Wrapped up for use with the button
function eventCreateList() {
    getListName();
    createList();
}

// Gets user input value of the list item
function getListItemName() {
    listItemInput = document.getElementById('listItem').value;
}

// Inserts the list item into the DOM
function createListItem() {
    listItemEl = document.createElement('li');
    listItemCount++;
    newListEl.id = listItemCount.toString();
    listItemEl.innerText = listItemInput;

    newListEl.append(listItemEl);
}

// Wrapped up for use with the add listen item button
function eventCreateListItem() {
    getListItemName();
    createListItem();
}

const submitListName = document.getElementById('submitListName');
submitListName.addEventListener('click', eventCreateList, false);

const submitListItem = document.getElementById('submitListItem');
submitListItem.addEventListener('click', eventCreateListItem, false);