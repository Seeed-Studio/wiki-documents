
/* 
*****
add more language steps 
*****
*/

// 1. add the shortcode of the language 
_Languages = ["en" , "cn" ,"jp" ,"vn", "id", "cz"];

// 2. add the title 
_LanguageTitle = {
    "en" : "EN",
    "cn" : "中文",
    "jp" : "日本語",
    "vn" : "VN",
    "id" : "IDN",
    "cz" : "Czech",
}

/* 
*****
    Over 
*****
*/


// 获取每个选择按钮的对应超链接
function setSiteMaps(sites){
    var rootURl = 'http://wiki.seeedstudio.com'
    var obj = {}
    sites.map(function(item,index){
        var regs = sites.slice();
        regs.splice(index,1);
        var siteReg = new RegExp("\^\(\/" + regs.join("\|/") + "\)");
        console.log(siteReg)
        if(item == "en"){
            obj[item] = rootURl + location.pathname.replace(siteReg,"");
        }else{
            obj[item] = rootURl + "/" +item + location.pathname.replace(siteReg,"");
        }
    })
    return obj
  }

  // 根据路径 匹配语言,初始化按钮
  function setSiteRule(){
    var languages = _Languages.slice();  
    var languagesTitle = _LanguageTitle;        
    var siteMap = setSiteMaps(languages);
    var element = document.querySelectorAll(".md-header .md-header-nav .language")
    var mElement = document.querySelector(".md-header .md-header-nav .mLanguage")
    for(var i = 0 ;i<element.length ;i++){
        var ele = element[i] ;
        ele.innerHTML = "" ;
        ele.addEventListener("mouseover",function(){
            ele.style.height = languages.length * 3 + "rem"
        })
        ele.addEventListener("mouseleave",function(){
            ele.style.height = "3rem"
        });
        languages.map(function(item,index){
            var currentReg = new RegExp("/"+item+"/");
            var el = document.createElement("a");
            el.innerText = languagesTitle[item];
            el.setAttribute("class",item);
            if(currentReg.test(location.pathname)){
                el.setAttribute("href","javascript:;")
            }else{
                el.setAttribute("href",siteMap[item])
            }
            ele.appendChild(el);
        })
    }
    
    
   
  }

  setSiteRule()

// 邮箱输入 阻止F/S触发搜索聚焦
if(document.getElementById("mce-EMAIL")){
    document.getElementById("mce-EMAIL").addEventListener("keydown",function(e){
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
  },false); 
  }
   
  
  /* add ACAD View JS Script */
  if(!document.getElementById("acac-script")){
    const acadScript = document.createElement("script");
    acadScript.id = "acad-script";
    acadScript.setAttribute("async","async");
    acadScript.setAttribute("type","text/javascript");
    acadScript.setAttribute("src","https://viewer.altium.com/client/static/js/embed.js");
    document.head.appendChild(acadScript);
  }
    /* add ACAD View JS Script END*/