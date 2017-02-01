$(document).ready(function(){

    $( "li .item" ).click(function() {
        $("li .item.left").addClass("magictime rotateLeft");
        $("li .item.right").addClass("magictime rotateRight");
    });


    $( "#start-test" ).click(function() {
        $(".item-person.not-check").addClass("magictime rotateRight");
        $(".item-person.check").addClass("magictime bombRightOut");
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