$().ready(function() {
// 在键盘按下并释放及提交后验证提交表单
  $("#myForm").validate({
    submitHandler:function(form){
      form.submit();
    },
    // debug:false,
    rules: {
      phone: {
        required: true,
        maxlength: 11,
        minlength: 11
      },
      code: {
        required: true,
        maxlength: 6,
        minlength: 6,
        digits: true
      },
      psd: {
        required: true,
        maxlength: 16,
        minlength: 6
      },
      confirmPsd: {
        required: true,
        maxlength: 16,
        minlength: 6,
        equalTo: "#psd"
      }
    },
    messages: {
      phone: {
        required: "必填",
        maxlength: "请输入正确的手机号",
        minlength: "请输入正确的手机号"
      },
      code: {
        required: "必填",
        maxlength: "请输入正确的6位数验证码",
        minlength: "请输入正确的6位数验证码",
        digits: "请输入整数"
      },
      psd: {
        required: "密码为6-16位数字、字母或下划线",
        maxlength: "密码为6-16位数字、字母或下划线",
        minlength: "密码为6-16位数字、字母或下划线"
      },
      confirmPsd: {
        required: "密码为6-16位数字、字母或下划线",
        maxlength: "密码为6-16位数字、字母或下划线",
        minlength: "密码为6-16位数字、字母或下划线",
        equalTo: "两次输入密码不一样"
      }
    },
    errorPlacement: function(error, element) {
      error.insertAfter(element.parent());
    },
    focusCleanup: true,
    errorClass: 'error-hint',
    success: function (e) {
    }
  })
});

$(function () {
  /* 输入框监听*/
  $('input').bind('input', function (e) {

    validateFn(this);

    var value = $(this).val(), input_clear = $(this).parent().find('.input-clear');

    if (value) {
      input_clear.removeClass('none');
    } else {
      input_clear.addClass('none');
    }
  });

  /* 输入框的情况按钮*/
  $(document).on('click', '.input-clear', function () {
    $(this).parent().find('input').val('');
    $(this).addClass('none');

    validateFn(this);
  });

  /* 验证码、提交按钮 可点击验证函数*/
  function validateFn (e) {
    var jsVerify = $('#jsVerify'),
      phone = $("#phone"),
      myForm = $("#myForm"),
      submit_btn = $("button[type='submit']")[0];

    if (myForm.length && myForm.valid()) {
      $(submit_btn).removeAttr('disabled');
    } else {
      $(submit_btn).attr('disabled', 'disabled');
    }

    if (phone.length && phone.valid()) {
      jsVerify.removeAttr('disabled');
    } else {
      jsVerify.attr('disabled', 'disabled');
    }
  }

  /* 验证码倒计时*/
  $(document).on('click', '#jsVerify', function () {
    var gl = GLOBAL;

    gl.countDown('#jsVerify');
  });
});
