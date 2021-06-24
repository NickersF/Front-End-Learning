$(function() {

    // For animate_div.html
    $("#slideDownDiv").on("click", function() {
        $("#slideDownDiv").toggleClass("animate-div-el-reverse");
    });

    $("#animBorderDiv").on("click", function() {
        $("#animBorderDiv").toggleClass("animate-border-el-reverse");
    });

    // For animate position.html
    $("#PositionableDiv").on("click", function(){
        $("#PositionableDiv").removeClass("positional-div-static").addClass("positional-div-animation");
    });
});