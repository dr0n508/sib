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
    var widthElementProgressBar = widthSlide/(numberSlides)-10;

    var elementProgressBar = '<span class="segment" style="width: ' + widthElementProgressBar + 'px"></span>';

    $('.segment').width(widthElementProgressBar);

    for (i = 0; i < numberSlides-1; i++) {
        $(elementProgressBar).appendTo('.progress-bar');
    }





    //
    // console.log(widthSlide);
    // console.log(widthSlide*numberSlides);
    // console.log(widthSlide/(numberSlides+1)-10);
    $('.carousel ul li').width(150);
    $('.carousel ul li.active').width(widthSlide);
    $('.carousel ul').width(numberSlides*widthSlide);

    var left = 150;


    $(document).on('click', '#i-see-video', function() {
        console.log('pause video');
        $('#next-video').prop('disabled', false);
        $('#repeat-video').prop('disabled', false);
        $('#i-see-video').prop('disabled', true);
    });

    $(document).on('click', '#next-video', function() {
        $('#repeat-video').prop('disabled', true);
        $('#next-video').prop('disabled', true);
        $('#i-see-video').prop('disabled', false);

    });

    $(document).on('click', '#repeat-video', function() {
        console.log('repet video');
        $('#i-see-video').prop('disabled', false);
        $('#next-video').prop('disabled', true);
    });






    $( "#next-video" ).click(function() {

        if ( $(".carousel ul li:last").hasClass("active") ) {

            window.location.href = "results.html";

        }
        else  {

            $(".carousel ul").animate({marginLeft: -left +"px"}, 200, function(){
            });
            $(".carousel ul li.active").removeClass("active").animate({width: 150 +"px"}, 200).next('.carousel ul li').addClass('active').width(widthSlide);
            left = left + 155;
            $(".progress-bar .segment.active").next('.progress-bar .segment').addClass('active');
        }

    });

    /****pause video****/
    $(document).on('click', '#repeat', function() {
        jQuery("iframe").each(function() {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        });
    });





});