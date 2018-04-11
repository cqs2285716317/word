/**
 * Created by Administrator on 2017/3/17 0017.
 */
var GLOBAL = {
  init: function () {
    this.scrollTop();
    this.sidebar();
    this.resize();
  },
  resize: function () {
    var _self = this;
    window.onresize = function () {
      _self.sidebar();
    }
  },
  scrollTop: function () {
    $('#gotop').click(function () {
      $('html, body').animate({scrollTop:0}, 'slow');
    });
  },
  sidebar: function () {
    var top = $(window).height() - $('#sidebar').height();
    var win_x = $(window).width();
    var left = 10;
    if (win_x >= 1280) {
      left = (win_x - 1280)/2;
    }
    $('#sidebar').css({'top': top/2+'px', 'left': left+'px'});
  },
  scrollTo: function (id) {
    var top = $('#'+id).offset().top;
    $('html, body').animate({scrollTop:top}, 'slow');
  }
};

$(function () {
  GLOBAL.init();
  
  $('#getBtn').click(function () {
    $('#popup').css('display', 'block');
  });

  $('#clearBtn').click(function () {
    $('#popup').css('display', 'none');
  });
});