// Author: Nicholas Fazzolari

'use strict';

const textToInsert = "This text was inserted via JavaScript";
const elementToInsert = document.createElement('h1');
const targetElement = document.getElementById('insertTarget');

elementToInsert.innerText = textToInsert;
targetElement.append(elementToInsert);