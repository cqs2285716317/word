/**
 * Created by Administrator on 2017/7/18 0018.
 */
function hoverFunc(select, css) {
  $(select).hover(
    function () {console.log(1);
      $(this).addClass(css);
    },
    function () {
      $(this).removeClass(css);
    }
  );
}

hoverFunc('.nav-li', 'nav_li_hover');