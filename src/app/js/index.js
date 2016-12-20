$(function() {
    // alert(wWidth = $(window).width());
    // 判断是否为ios系统，决定是否让视频自动播放
    var UA = navigator.userAgent;
    var ios = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!ios) {
        // $('.video')[0].play();
    }

    var hideTimer = null ;
    $(function() {
        $(".J_n_hover").hover(function() {
            clearTimeout(hideTimer); //清除计时器
            $(this).addClass('nHover');
        }, function() {
            var $that = $(this);
            hideTimer = setTimeout(function(){
                $that.removeClass('nHover');
            }, 500);
        });
    })
    // var hideTimer;
    // $(function() {
    //     $(".nHover").mouseleave(function() {
    //         console.log('test');
    //         clearTimeout(hideTimer); //清除计时器
    //         hideTimer = setTimeout("$('.mouseleave').hide();", 1000); //鼠标移除元素区域子元素消失
    //     });
    // })

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

    // 控制视频和banner高度
    function video_set() {
        var _videoBox = $('.video-wrap'),
            _banner = $('.banner'),
            wHeight = $(window).height(),
            wWidth = $(window).width(),
            reHeightB = wWidth / 1080 * 1920 + 'px',
            reHeight = wHeight - $('.header-wrap').height() + 'px',
            vHeight = wWidth / 1920 * 1080 + 'px',
            wRate = parseInt(wWidth) / parseInt(reHeight) > 1920 / 1080;
        if ($(window).width()>610) {
            _banner.height(reHeight);
        } else {
            _banner.height(reHeightB);
        }

        if (wWidth < 610) {
            _videoBox.height(vHeight);
            _videoBox.find('video').css({
                'height': '100%',
                'width': '100%'
            })
        } else {
            _videoBox.height(reHeight);

            _videoBox.find('video').css({
                'height': wRate ? 'auto' : reHeight,
                'width': !wRate ? 'auto' : wWidth
            })
        }
    };

    video_set();

    $(window).resize(function() {
        video_set();
    });

    // 在小屏幕下让导航被点击后收起
    var navMin = $('.nav-min-lv1');
    navMin.click(function(event) {
        if (navMin.hasClass('open')) {
            navMin.removeClass('open');
            $('.min-nav-btn').removeClass('open')
        }
    });

    // 视频控制
    $('video').on("canplay", function() {
        $('.video-mask').css('display', 'none');
    });

    // 监听滚动条并且嘿嘿嘿
    if ($(window).width()>610) {
        $(window).on('scroll', function(event) {
            if ($('.video').hasClass('ed')) {
                return;
            }
            var wHeight = $(window).height() * 0.7,
                sHeight = $(this).scrollTop();
            if (wHeight < sHeight) {
                // console.log(sHeight);
                $('.video')[0].play();
            }
        });
    }

    // 播放ing
    $('video').on("play", function() {
        $('.play').css('display', 'none');
        $('.video-mask').css('display', 'none');
    });

    // 播完操作
    $('video').on("ended", function() {
        $('.video').addClass('ed');
        $('.video-mask').css('display', 'block');
        $('.play').css('display', 'block');
    });

    // 视频再次播放
    $('.play').click(function() {
        $('.video-mask').css('display', 'none');
        $('.play').css('display', 'none');
        $('.video')[0].play();

    });
});
