$(document).ready(function(){

    $( "li .item" ).click(function() {
        $("li .item.left").addClass("zoomOutLeft");
        $("li .item.right").addClass("zoomOutRight");
    });


    $( "#start-test" ).click(function() {
        $(".item-person").addClass("zoomOutLeft");
        $(".item-person.check").addClass("zoomOutRight");
    });


    var numberSlides = $('.carousel ul li').length;
    var widthSlide = $('.carousel ul li').width();
    console.log(widthSlide);
    console.log(widthSlide*numberSlides);
    $('.carousel ul li.active').width(widthSlide);
    $('.carousel ul li.not-active').width(600);
    $('.carousel ul').width(numberSlides*widthSlide);






});