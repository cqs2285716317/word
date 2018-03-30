/**
 * Created by Administrator on 2017/3/3 0003.
 */
$(function () {
  GLOBAL.titleSelect('', '', function (obj) {
    var _id = $(obj).attr('id');
    $('.title-0').each(function () {
      $(this).addClass('el-hide');
    });

    $('.'+_id).removeClass('el-hide');
  });

  GLOBAL.popup('popupBox');

  $('#applyFloatBox').click(function () {
    $('#popup').css('display', 'block');
  });

  $('#closeBtn').click(function () {
    $('#popup').css('display', 'none');
  });

  $('#msgCancel').click(function () {
    $('#popup').css('display', 'none');
  });
});