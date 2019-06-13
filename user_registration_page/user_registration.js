// Author: Nicholas Fazzolari
// Style the forms and output and add to codepen

'use strict';

// The user class could come in handy in the future of the project?
class User {
    constructor(firstName, lastName, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }

    // Getters
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get email() {
        return this._email;
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

    set email(newemail) {
        this._email = newemail;
    }
}

// Temporary - make the object after extraction
let someUser = new User();

// Get the data from the form fields.
function getUserInfo() {
    someUser.firstName = document.getElementById('firstNameInput').value;
    someUser.lastName = document.getElementById('lastNameInput').value;
    someUser.email = document.getElementById('emailInput').value;
}

// Set the text content of the HTML of the gathered form data
function setUserInfo() {
    let firstNameResult = document.getElementById('firstNameResult');
    let lastNameResult = document.getElementById('lastNameResult');
    let emailResult = document.getElementById('emailResult');

    firstNameResult.innerText = someUser.firstName;
    lastNameResult.innerText = someUser.lastName;
    emailResult.innerText = someUser.email;
}

function handleUserInfo() {
    getUserInfo();
    setUserInfo();
}

// Event listener which will fire the function to get the user name and draw it
const subButton = document.getElementById('subButton');
subButton.addEventListener('click', handleUserInfo, false);