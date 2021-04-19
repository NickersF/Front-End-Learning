$(function () {
    $("#slideDownDiv").on("click", function () {
        $("#slideDownDiv").toggleClass("animate-div-el-reverse");
    });
    $("#animBorderDiv").on("click", function () {
        $("#animBorderDiv").toggleClass("animate-border-el-reverse");
    });
});
