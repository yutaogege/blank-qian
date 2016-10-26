$(function() {

    $('.J_nav_btn').click(function() {
        var nav_min = $('.nav-min-lv1');
        if (nav_min.hasClass('open')) {
            nav_min.removeClass('open');
            $(this).removeClass('open');
        } else {
            nav_min.addClass('open');
            $(this).addClass('open');
        }
    });

    function video_set() {
        var _videoBox = $('.video-wrap'),
            wHeight = $(window).height(),
            wWidth = $(window).width(),
            reHeight = wHeight - parseInt(_videoBox.css('marginTop')) + 'px',
            wRate = parseInt(wWidth) / parseInt(reHeight) > 1280 / 720;

        _videoBox.height(reHeight);

        _videoBox.find('video').css({
            'height': wRate ? 'auto' : reHeight,
            'width': wRate ? wWidth : 'auto'
        })

    };

    video_set();

    $(window).resize(function() {
        video_set();
    });
});
