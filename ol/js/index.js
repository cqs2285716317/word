/**
 * Created with WebStorm.
 * User: Administrator
 * Date: 2016/12/20
 * Time: 10:38
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    var windowH = $(window).height(),
        windowW = $(window).width(),
        containerIndexH,
        src_bgH,
        src_bgOldH = $('.src-bg').height();
    containerIndexH = windowH-604;
    src_bgH = windowH-134;
    if(containerIndexH<196){
        $('.container-index').css('height','196px');
    }else {
        $('.container-index').css('height',containerIndexH);
    }
    //产品家族
    if(src_bgH<src_bgOldH){
        $('.src-bg').css('height',src_bgOldH);
    }else if(src_bgH<666){
        $('.src-bg').css('height','666px');
    }else {
        $('.src-bg').css('height',src_bgH);
    }
    //关于我们


    //banner swiper
    var $bannerSwp =  $('#bannerSwiper .swiper-wrapper');
    var banner_length = $bannerSwp.find('.swiper-slide').length;
    for(var i=1;i<=banner_length;i++){
        var src = $bannerSwp.find('#swiper-slide'+i).attr('data-src');
        $('#swiper-slide'+i).css({'background-image':'url('+src+')','background-repeat': 'no-repeat','background-position':'center center'});
    }


    var cp_src = $('.src-bg').attr('data-src');
    $('.src-bg').css({'background-image':'url('+cp_src+')','background-repeat': 'no-repeat','background-position':'center top','background-size':'cover'});

    //nav hover
    $(".nav-li").hover(function(){
        var index = $(this).index();
        $(this).addClass('li_hover').siblings().removeClass('li_hover');
        $(this).addClass('li_hover'+index).siblings().removeClass('li_hover'+index);
    },function(){
        var index = $(this).index();
        $(this).removeClass('li_hover');
        $(this).removeClass('li_hover'+index);
    });

   var  bodyH = $("body").height();
    if(bodyH<windowH){
        $("body").css('height',windowH);
        $('.footer').css({'position':'absolute','bottom':'0'});
    }

    //产品中心 hover
    $('.link-box a').hover(function(){
        $(this).find('img').show();
        //$('.cp-img').css('opacity',0.5)
    },function(){
        $(this).find('img').hide();
        //$('.cp-img').css('opacity',1)
    });

    var mySwiper = new Swiper('#bannerSwiper', {
        loop: true,
        autoplay: 2500,
        speed: 1000,
        pagination: '#bannerpagination',
        paginationClickable: false,
        grabCursor: false,
        nextButton: '.arrow-right',
        prevButton: '.arrow-left',
        centeredSlides: true,
        autoplayDisableOnInteraction: false,
        parallax: true
    });
});
