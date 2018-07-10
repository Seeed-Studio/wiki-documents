/**
 * [checkLanguage 设置页面语言链接]
 *
 */
function checkLanguage() {
  var reg = /\/cn\//,
    oCNs = document.querySelectorAll('.cn'),
    oENs = document.querySelectorAll('.en'),
    cnApi = 'http://wiki.seeedstudio.com/cn' + location.pathname;
    enApi = 'http://wiki.seeedstudio.com' + location.pathname.slice(3);
  if (reg.test(location.href)) {
    isShow(oCNs, 'none')
    isShow(oENs, 'block', enApi)
  } else {
    isShow(oCNs, 'block', cnApi)
    isShow(oENs, 'none')
  }
}

function isShow(obj, style, url) {
  if (!url) {
    obj.forEach(function(item, key) {
      item.style.display = style
    })
  } else {
    obj.forEach(function(item, key) {
      item.style.display = style
      item.onclick = function(){
          location.href = url;
      }
    })
  }
}

checkLanguage();

// 邮箱输入 阻止F/S触发搜索聚焦
document.getElementById("mce-EMAIL").addEventListener("keydown",function(e){
  window.event ? window.event.cancelBubble = true : e.stopPropagation();
},false);  
