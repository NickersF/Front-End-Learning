// JS Classes example

class Person {
    userName;
    password;
    email;
}

let aPerson = new Person();

aPerson.userName = "Nick";
aPerson.password = "password";
aPerson.email = "nick@domain.com";

$(document).ready(function() {

    $("#displayPerson").text(aPerson.userName + ", " + aPerson.password + ", " + aPerson.email);

});
