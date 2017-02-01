$(document).ready(function(){

    $( "li .item" ).click(function() {
        $("li .item.left").addClass("zoomOutLeft");
        $("li .item.right").addClass("zoomOutRight");
    });


    $( "#start-test" ).click(function() {
        $(".item-person").addClass("zoomOutLeft");
        $(".item-person.check").addClass("zoomOutRight");
    });



    /***slider***/


    var numberSlides = $('.carousel ul li').length;
    var widthSlide = $('.carousel ul li').width();
    console.log(widthSlide);
    console.log(widthSlide*numberSlides);
    $('.carousel ul li.active').width(widthSlide);
    $('.carousel ul li.not-active').width(150);
    $('.carousel ul').width(numberSlides*widthSlide);

    var left = 150;
    $( "#i-see-video" ).click(function() {
        $(".carousel ul").animate({marginLeft: -left +"px"}, 200, function(){


        });

        $(".carousel ul li.active").removeClass("active").animate({width: 150 +"px"}, 200).next('.carousel ul li').addClass('active').width(widthSlide);
        left = left + 155;
    });

    /****pause video****/
    // $(document).on('click', '#close_vid', function() {
    //     jQuery("iframe").each(function() {
    //         jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    //     });
    // });


});