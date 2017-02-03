$(document).ready(function(){


    /****animated-index*****/

    setTimeout(function(){
        $(".list-device-classification .item").addClass("animated fadeInUp block");
    }, 500);

    $( ".list-device-classification .item" ).click(function() {

        $(".list-device-classification .item").addClass("animated fadeOutDown");

        // $(".list-device-classification .item.left").addClass("animated fadeOut");
        // setTimeout(function(){
        //     $('.list-device-classification .item.right').addClass('animated fadeOutRight');
        // }, 1000);
        setTimeout(function(){
            $(".header-index").addClass('fadeOut');
        }, 500);
    });


/****chose-3-persons****/


    setTimeout(function(){
        $(".chose3people").addClass("animated fadeInUp block");
    }, 500);

    $( ".item-person" ).click(function() {
        if ($(".item-person.check").length == 3) {

        } else {
            $(this).addClass("check");
            if ($(".item-person.check").length == 3) {
                $('#start-test').prop('disabled', false);
                $('.number-chosen-people').addClass("ready");

                $( ".item-person" ).each(function(i,elem) {
                    if ($(this).hasClass("check")) {

                    } else {
                        $(this).addClass("not-check");
                    }
                });
            }
        }
    });

    $( "#start-test" ).click(function() {
        $(this).addClass('animated bounceIn');


        $(".chose3people").addClass("fadeOutDown");



        $(".item-person.not-check").addClass("animated bounceOut");

        setTimeout(function(){
            $(".main-header").addClass('fadeOut');
        }, 500);


        // setTimeout(function(){
        //     $('.item-person.check').addClass('animated bounce');
        // }, 1000);
        // setTimeout(function(){
        //     $('.item-person.check').addClass('animated bounceOutRight');
        // }, 1500);
        // setTimeout(function(){
        //     $('.header-chose3people').addClass('animated bounceOutUp');
        // }, 2500);

    });

    /***video***/



    var vid = document.getElementById("main-video");
    vid.onplay = function() {
        $('#i-see-video').prop('disabled', false);
    };

    $(document).on('click', '#main-video', function() {
        $('#main-video').get(0).play();
    });

    $(document).on('click', '#i-see-video', function() {
        $('#main-video').get(0).pause();

        $('#next-video').prop('disabled', false);
        $('#repeat-video').prop('disabled', false);
        $('#i-see-video').prop('disabled', true);
    });

    $(document).on('click', '#next-video', function() {
        $('#repeat-video').prop('disabled', true);
        $('#next-video').prop('disabled', true);
        $('#i-see-video').prop('disabled', true);
        alert('грузим другое видео')
    });

    $(document).on('click', '#repeat-video', function() {
        $('#main-video').get(0).play();
        $('#i-see-video').prop('disabled', false);
        $('#next-video').prop('disabled', true);
    });


    /****same height video and counter thumbnail****/
    maintainSameHeight($('[data-same-height="video"]'));

    function maintainSameHeight($list) {
        var height = 0;

        $list.each(function () {
            var $this = $(this);
            if ($this.outerHeight() > height) {
                height = $this.outerHeight();
            }
        });

        $list.css("height", height);
    }
    /******/

});