/**
 * Created by Administrator on 2017.12.04.
 */
(function() {

  var currClientWidth,

    fontValue,

    originWidth;

  originWidth = 750;//ui设计稿的宽度，一般750或640

  __resize();


  window.addEventListener('resize', __resize, false);


  function __resize() {

    currClientWidth = document.documentElement.clientWidth;

    if (currClientWidth > 768) {

      currClientWidth = 768;

    }

    if (currClientWidth < 320) {

      currClientWidth = 320;

    }

    fontValue = ((625 * currClientWidth) / originWidth).toFixed(2);

    document.documentElement.style.fontSize = fontValue + '%';

  }

})();

var GLOBAL = {
  /*
   *倒计时
   * obj dom 对象
   * call_back 回调函数
   * */
  countDown: function (obj, call_back) {
    var total_time = 60, init_value = '', _obj = $(obj);

    init_value = _obj.text();

    _obj.attr('disabled', 'disabled');

    (function time() {
      call_back && call_back(total_time);

      _obj.text(' ');
      _obj.text(total_time);

      total_time-- >= 0 ? setTimeout(time, 1000) : _obj.text(init_value) && _obj.removeAttr('disabled');
    })();
  }
};