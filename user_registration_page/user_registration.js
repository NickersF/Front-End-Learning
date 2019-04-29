// Author: Nicholas Fazzolari
// Style the forms and output and add to codepen

'use strict';

// The user class could come in handy in the future of the project?
class User {
    constructor(firstName, lastName, userName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._userName = userName;
    }

    // Getters
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get userName() {
        return this._userName;
    }

    get formattedFullName() {
        return this._firstName + " " + this._lastName
    }

    // Setters
    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }

    set lastName(newLastName) {
        this._lastName = newLastName;
    }

    set userName(newuserName) {
        this._userName = newuserName;
    }
}

// Temporary - make the object after extraction
let someUser = new User();

// Get the data from the form fields.
function getUserInfo() {
    someUser.firstName = document.getElementById('firstNameInput').value;
    someUser.lastName = document.getElementById('lastNameInput').value;
    someUser.userName = document.getElementById('userNameInput').value;
}

// Set the text content of the HTML of the gathered form data
function setUserInfo() {
    let firstNameResult = document.getElementById('firstNameResult');
    let lastNameResult = document.getElementById('lastNameResult');
    let userNameResult = document.getElementById('userNameResult');

    firstNameResult.textContent = someUser.firstName;
    lastNameResult.textContent = someUser.lastName;
    userNameResult.textContent = someUser.userName;
}

function handleUserInfo() {
    getUserInfo();
    setUserInfo();
}

// Event listener which will fire the function to get the user name and draw it
const subButton = document.getElementById('subButton');
subButton.addEventListener('click', handleUserInfo, false);