/**
 * Created by Administrator on 2016/12/1 0001.
 */
var phoneScale = parseInt(window.screen.width) / 750;
document.write('<meta name="viewport" content="width=750, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
document.write('<meta name="format-detection" content="telephone=no">');

function goPageFn(url) {
  window.location.href = url;
}