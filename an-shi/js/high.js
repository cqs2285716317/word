/**
 * Created by Administrator on 2017/2/28 0028.
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

  GLOBAL.titleA();

  $('#applyFloatBox').click(function () {
    $('#fixedBox').css('display', 'none');
    $('#popup').css('display', 'block');
  });
  
  $('#closeBtn').click(function () {
    $('#popup').css('display', 'none');
    $('#fixedBox').css('display', 'block');
  });

  $('#msgCancel').click(function () {
    $('#popup').css('display', 'none');
    $('#fixedBox').css('display', 'block');
  });
});