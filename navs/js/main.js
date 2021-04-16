class AccordionMenu {
    menuItems = [];
    headerContent;
    bodyContent;
    
}

$(document).ready(function() {
    let accHeader1 = $("#accHeader1");
    let accBody1 = $("#accBody1");

    accHeader1.click(function() {

        if (accBody1.css("display") == "block") {
            accHeader1.css("background-color", "#43A047");
        } else if (accBody1.css("display") == "none") {
            accHeader1.css("background-color", "#2E7D32");
        }
        accBody1.slideToggle();

    });
});