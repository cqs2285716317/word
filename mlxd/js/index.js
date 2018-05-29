/**
 * Created with WebStorm.
 * User: Administrator
 * Date: 2016/11/30
 * Time: 11:01
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    var $window = $(window),
        view = {
            height: $window.height(),
            width: $window.width()
        };
  /*  var bodyH = $('body,html').height();
    if(bodyH<view.height){
        $('.footer').css({'position':'absolute','bottom':'0'});
    }*/
    var name = ".nav";
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if(top>0){
            $(name).addClass('nav-fixed');
            $('.container').css('margin-top',100);
            $('.w1000').css('margin-top',200);
            $('.container02').css('margin-top',100);
            if(top>800){
                $('.index-head').addClass('baf');
            }else {
                $('.index-head').removeClass('baf');
            }
        }else {
            $(name).removeClass('nav-fixed');
            $('.container').css('margin-top',0);
            $('.w1000').css('margin-top',75);
            $('.container02').css('margin-top',11);
        }
    });

    var banner_length = $('#bannerSwiper .swiper-wrapper').find('.swiper-slide').length;
    for(var i=1;i<=banner_length;i++){
        var src = $('#bannerSwiper .swiper-wrapper').find('#swiper-slide'+i).attr('data-src');
        $('#swiper-slide'+i).css({'background-image':'url('+src+')'});
    }


    $('.check-box').click(function(){
        $(this).toggleClass('check-box-checked');
    });
    $(".notice-box .span01").click(function(){
        $(this).parent().fadeOut();
    });
    $('.library-box .top-bar').hover(function(){
        if(!$(this).is(":animated")){
            $(this).animate({'height':'191px'},100)
        } else{
            return false;
        }
    },function(){
        $(this).animate({'height':'40px'},100)
    });
    $(".close").click(function(){
        $(this).parent().hide();
        $('.mask').hide();
    });
    $(".close-eye").click(function(){
        var $this = $(this);
        var $input = $(this).parent().find('.login-input').attr('id');
        //document.getElementById($input).type="password";
        if (document.getElementById($input).type == "password") {
            document.getElementById($input).type="text";
            $this.addClass('eye');
        }
        else {
            document.getElementById($input).type="password";
            $this.removeClass('eye');
        }
    });

    $(".resume-item-link-1").click(function(){
        $('.resume-item-link-1').toggleClass('resume-item-link_hover');
        $('.resume-box').toggle();
    });
    
    $(".right-item-open").click(function(){
        var $this = $(this);
        var index = $this.parent().index();
        if($this.hasClass('right-item-open-up')){
            $this.removeClass('right-item-open-up').html('展开');
            $this.parent().next().hide();
        }else {
            $this.addClass('right-item-open-up').html('收起');
            $this.parent().next().show();
        }
    });
    $(".resume-box .resume-btm-btn").click(function(){
        var $this = $(this);
        if(!$this.parent().prev().hasClass('none')){
            $this.removeClass('resume-btm-btn-up').html("展开");
            $this.parent().prev().addClass('none');
        }else {
            $this.addClass('resume-btm-btn-up').html("收起");
            $this.parent().prev().removeClass('none');
        }
    });
    $(".edit-box .resume-btm-btn").click(function(){
        var $this = $(this);
        if(!$this.parent().next().hasClass('none')){
            $this.removeClass('resume-btm-btn-up').html("展开");
            $this.parent().next().addClass('none');
            $('#pack_up').hide();
        }else {
            $this.addClass('resume-btm-btn-up').html("收起");
            $this.parent().next().removeClass('none');
            $('#pack_up').show();
            $('#pack_up .resume-btm-btn').html("");
            $('#pack_up .resume-btm-btn').addClass('resume-btm-btn-up').html("");
        }
    });
    $("#pack_up").click(function(){
        var $this = $(this);
        $('#edit_more').addClass('none');
        $(".edit-box .resume-btm-btn").removeClass('resume-btm-btn-up').html("展开");
        $this.hide();
    });
    $(".right-notice .close").click(function(){
        $('.right-notice').hide();
    });
    $(".skill-show-box-left .item").click(function(){
        var $this = $(this),
            index = $this.index();
        $this.addClass('item_hover').siblings().removeClass('item_hover');
        $(".skill-show-box-right").find('.cooperation-checkbox').eq(index).show().siblings().hide()
    });
    $(".reg-box-ability-txt").click(function(){
        $(this).toggleClass('reg-box-ability-txt-selected');
        $('.reg-ability-checkbox').toggle();
        $('.reg-cont').toggleClass('h720');
    });
    $(".ability-checkbox-item").click(function(){
        $(this).toggleClass('ability-checkbox-item_checked');
    });
    $(".ability-btn1").click(function(){
        $(".reg-box-ability-txt").click();
    });

    $(".data-now").change(function(){
        $(this).toggleClass('data-now-checked');
        $(this).prev().toggle();
        $('.span-to').toggle();
    });

    $(".alt-code").click(function(){
        $('.pop-code,.mask').show();
    });
});
