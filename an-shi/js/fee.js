/**
 * Created by Administrator on 2017/2/28 0028.
 */
function fileUpload(t) {
  var file = document.getElementById(t).files[0];
  var name = file.name.split('.');
  $('#fileName').html('');
  $('#fileName').html(name[0]);
  $('#fileSew').html('');
  $('#fileSew').html('.'+name[1]);
}

function fileUpload1(t) {
  var file = document.getElementById(t).files[0];
  console.log(file);
  var name = file.name.split('.');
  $('#fileName1').html('');
  $('#fileName1').html(name[0]);
  $('#fileSew1').html('');
  $('#fileSew1').html('.'+name[1]);
}

function deleteFile(t) {
  $('#'+t).val('');
  $('#fileName1').html('');
  $('#fileSew1').html('');
}

function noUpload() {
  if ($('#fileRadio').attr('src') == '../img/checkbox_checked.png') {
    $('#fileRadio').attr('src', '../img/checkbox_empty.png');
    $('#fileBox').removeClass('el-hide');
  } else {
    $('#fileRadio').attr('src', '../img/checkbox_checked.png');
    $('#fileBox').addClass('el-hide');
  }
}

function selectYear(c,id) {
  $('.'+c).each(function () {
    $(this).attr('src', '../img/checkbox_empty.png');
  });

  $('#'+id).attr('src', '../img/checkbox_checked.png');
}

function selectYear1(c,id,y) {
  $('.'+c).each(function () {
    $(this).attr('src', '../img/checkbox_empty.png');
  });

  $('#'+id).attr('src', '../img/checkbox_checked.png');

  $('.radio-ctn').each(function () {
    $(this).addClass('el-hide');
  });

  $('#'+y).removeClass('el-hide');

  if (y == 'radioName') {
    $('#fileUpload2').removeClass('el-hide');
    $('#fileName').html('');
    $('#fileName').html('个人身份证正反面');
    $('#fileName1').html('');
    $('#fileName1').html('年度收入情况证明');
  }

  if (y == 'radioFirm') {
    $('#fileUpload2').removeClass('el-hide');
    $('#fileName').html('');
    $('#fileName').html('年度所得税纳税申报表');
    $('#fileName1').html('');
    $('#fileName1').html('企业法人营业执照');
  }

  if (y == 'radioFirm1') {
    $('#fileName').html('');
    $('#fileName').html('事业单位营业执照');
    $('#fileUpload2').addClass('el-hide');
  }
}

$(function () {
  GLOBAL.titleSelect('', '', function (obj) {
    var _id = $(obj).attr('id');
    $('.title-0').each(function () {
      $(this).addClass('el-hide');
    });

    $('.'+_id).removeClass('el-hide');
  });

  GLOBAL.popup('popupBox');

  $('#applyBtn').click(function () {
    $('#popup').css('display', 'block');
  });

  $('#applyBtn1').click(function () {
    $('#popup').css('display', 'block');
  });

  $('#closeBtn').click(function () {
    $('#popup').css('display', 'none');
  });

  $('#msgCancel').click(function () {
    $('#popup').css('display', 'none');
  });
});