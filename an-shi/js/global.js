/**
 * Created by Administrator on 2017/2/24 0024.
 */
var GLOBAL = {
  win_x: 0,
  win_y: 0,
  init: function () {
    this.win_y = $(window).height();
    this.win_x = $(window).width();
    this.scrollTop();
    // this.floatBox();
    // this.titleSelect();
    this.titleSelect('btn-click', 'lg-rg-select');
  },
  floatBox: function () {
    var x = this.win_x - 1200;
    if (x <= 0) {
      x = 49
    } else {
      x = 49 + x/2;
    }
    $('#floatBox').css('right', x+'px');
  },
  scrollTop: function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 20) {
        $('#gotop').css('display', 'inline-block');
      } else {
        $('#gotop').css('display', 'none');
      }
    });

    $('#gotop').click(function () {
      window.scrollTo(0,0);
    });
  },
  titleSelect: function (el_class, select_style, back_fun) {
    var _el_class = 'el-click';
    var _select_style = 'select-style';
    el_class && (_el_class = el_class);
    select_style && (_select_style = select_style);
    $('.'+_el_class).click(function () {
      $('.'+_el_class).each(function () {
        $(this).removeClass(_select_style);
      });

      $(this).addClass(_select_style);

      back_fun && back_fun(this);
    });
  },
  popup: function (id) {
    var _height = $('#'+id).height();
    var win_h = $(window).height();
    $('#'+id).css('margin-top', (win_h-_height)/2+'px');
  },
  scrollTo: function (id) {
    var top = $('#'+id).offset().top - 190;
    $('html, body').animate({scrollTop:top}, 'slow');
  },
  titleA: function () {
    var top = 0;
    $(window).scroll(function () {
      top = $('#tInfo').offset().top;
      console.log(top);
      console.log($(window).scrollTop());
      if ($(window).scrollTop() >= top) {
        $('#tInfo').css('display', 'none');
        $('#fixedBox').css('display', 'block');
      }
      if ($(window).scrollTop() <= 200) {
        $('#tInfo').css('display', 'block');
        $('#fixedBox').css('display', 'none');
      }
    });

   /* if (x >= top) {
      $('#tInfo').css('display', 'none');
      $('#fixedBox').css('display', 'block');
    }*/
  }
};

GLOBAL.init();