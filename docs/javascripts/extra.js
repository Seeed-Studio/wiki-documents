
/* 
*****
add mutiple language steps 
*****
*/


//  add the language code & Title 
_SiteData = {
    "en" : "EN",
    "cn" : "中文",
    "jp" : "日本語",
    "vn" : "VN",
    "id" : "IDN",
    "cz" : "Czech"
}

/* 
*****
    Over 
*****
*/

 var site = {    
    rootURl : '',
    siteData : _SiteData,
    setSiteMaps : function(){
        // var rooturl = this.rootUrl;
        var obj = {};
        var sites = JSON.parse(JSON.stringify(this.siteData));
        for(var siteCode in sites){
            var regs = Object.keys(sites).slice();
            var index = regs.indexOf(siteCode);
            if(index<0){continue}
            regs.splice(index,1);  
            var siteReg = new RegExp("\^\(\/" + regs.join("\|/") + "\)");
            if(siteCode == "en"){
                obj[siteCode] = this.rootURl + location.pathname.replace(siteReg,"");
            }else{
                obj[siteCode] = this.rootURl + "/" +siteCode + location.pathname.replace(siteReg,"");
            } 
        }
        console.log(obj)
        return obj  
    },
    createSiteList : function(ele){
        if(!ele) return ;
        var sites = JSON.parse(JSON.stringify(this.siteData));
        ele.innerHTML = "" ;
        var siteMap = this.setSiteMaps();
        var activeEle = undefined;
        for(var siteCode in this.siteData){
            var currentReg = new RegExp("/"+siteCode+"/");
            var el = document.createElement("a");
            el.innerText = sites[siteCode];
            el.setAttribute("class",siteCode);
            el.setAttribute("data-lang",siteCode);
            console.log(currentReg)
            if(currentReg.test(location.pathname)){
                el.setAttribute("href","javascript:;");
                activeEle = el;
            }else{
                el.setAttribute("href",siteMap[siteCode] || "javascript:;");
                ele.appendChild(el);
            }
        }
        if(activeEle) ele.insertBefore(activeEle,ele.querySelector("a"));
         if(ele.querySelector("a").getAttribute("data-lang") && ele.querySelector("a").getAttribute("data-lang") == "en"){
            ele.querySelector("a").setAttribute("href","javascript:;")
         }
        
    },
    setSiteRule:function(){
        var navPC = document.querySelector(".md-header .md-header-nav #language-site-nav")
        var navMobile = document.querySelector(".md-header .md-header-nav #m-language-site-nav")
        this.createSiteList(navPC);
        this.createSiteList(navMobile);
    }
} 
// site.setSiteRule();
document.addEventListener('DOMContentLoaded',function(){site.setSiteRule();})

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