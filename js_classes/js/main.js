// JS Classes example

class Person {
    userName;
    password;
    email;

    get getUserInfoString() {
        return this.userName + "," + this.password + "," + this.email + "\n";
    }
}

$(document).ready(function() {

    $("#newUserSubmit_btn").click(function() {

        let newUser = new Person();
        // let userNameString = $("#userNameInput").val();

        newUser.userName = $("#userNameInput").val();
        newUser.password = $("#passwordInput").val();
        newUser.email = $("#emailInput").val();
        $("#displayPerson").text(newUser.getUserInfoString);
        console.log(newUser);
        console.log(newUser.getUserInfoString);
    });

});

// Accordion: event element if true slide up if false slide down