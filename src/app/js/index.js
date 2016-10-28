$(function() {
    // 判断是否为ios系统，决定是否让视频自动播放
    var UA = navigator.userAgent;
    var ios = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!ios) {
        $('.video')[0].play();
    }

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
            'width': !wRate ? 'auto' : wWidth
        })

    };

    video_set();

    $(window).resize(function() {
        video_set();
    });
});
