// Author: Nicholas Fazzolari

let listNameInput;
let listRoot = document.getElementById('listRoot');
let listTitleEl = document.createElement('h1');
listTitleEl.id = "listTitle"

function createListTitle() {
    listNameInput = document.getElementById('listTitle').value;
    listRoot.append(listTitleEl);
}

const submitListName = document.getElementById('submitListName');
submitListName.addEventListener('click', createListTitle, false);