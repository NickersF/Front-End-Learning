// Basic AJAX Request
$(document).ready(function() {

    $("#getAjaxText1_btn").click(function(){
        $.ajax({
            url: "ajaxtext1.txt",
            success: function(result) {
                $("#ajaxText1").html(result);
            }
        });
    });

});