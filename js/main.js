$(document).ready(function(){

    $( "li .item" ).click(function() {
        $("li .item.left").addClass("zoomOutLeft");
        $("li .item.right").addClass("zoomOutRight");
    });


    $( "#start-test" ).click(function() {
        $(".item-person").addClass("zoomOutLeft");
        $(".item-person.check").addClass("zoomOutRight");
    });



});