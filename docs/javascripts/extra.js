/**
 * [checkLanguage 设置页面语言链接]
 *
 */
function checkLanguage() {
  var reg = /\/cn\//,
  var regJp = /\/jp\//,
    oCNs = document.querySelectorAll('.cn'),
    oENs = document.querySelectorAll('.en'),
    oJPs = document.querySelectorAll('.jp'),
    cnApi = 'http://wiki.seeedstudio.com/cn' + location.pathname;
    jpApi = 'http://wiki.seeedstudio.com/jp' + location.pathname;
    enApi = 'http://wiki.seeedstudio.com' + location.pathname.slice(3);
  if (reg.test(location.href)) {
    isShow(oCNs, 'none')
    isShow(oJPs, 'block',jpApi)
    isShow(oENs, 'block', enApi)
  }else if(regJp.test(location.href)){
    isShow(oJPs, 'none')
    isShow(oCNs, 'block', cnApi)
    isShow(oENs, 'block', enApi)
  }
  else {
    isShow(oCNs, 'block', cnApi)
    isShow(oJPs, 'block', jpApi)
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
