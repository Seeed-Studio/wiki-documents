
/* 
*****
add mutiple language steps 
*****
*/

/**************************
 ***************************
    //@ 本地 和 线上 环境的开关 
    //@ 线上环境 : _IsProduction = true  
    //@ 测试环境 : _IsProduction = false 
    //@ 本地环境 : _IsLocal = true ; 
**************************
***************************/

var _IsProduction = true ;
var _Language = "en";
var _IsLocal = false ;

// root URL 
//  测试版本 :  "http://192.168.5.153/b/wiki.seeedstudio.com"
//  线上版本 ： "http://wiki.seeedstudio.com"

  var developUrl = "http://192.168.5.153/b/wiki.seeedstudio.com";
  var productionUrl = "https://wiki.seeedstudio.com"


//  add the language code & Title 
_SiteData = {
    "en" : "EN",
    "cn" : "中文",
    "jp" : "日本語",
    "vn" : "VN",
    "id" : "IDN",
    "cz" : "Czech",
    "ph" : "Filipino"
}

if(_IsLocal){
    developUrl = "http://127.0.0.1:5500/b/wiki.seeedstudio.com";
    productionUrl = "http://127.0.0.1:5500"
}

var _RootURL = _IsProduction ?  productionUrl : developUrl ;
var _SubRootPath = _IsProduction ? "" : "/b/wiki.seeedstudio.com";
/* 
*****
    Over 
*****
*/




 var site = {    
    isProduction : _IsProduction,
    subRootPath : _SubRootPath ,
    rootURl : _RootURL,
    siteData : _SiteData,
    setSiteMaps : function(){
        var obj = {};
        var sites = JSON.parse(JSON.stringify(this.siteData));
        var subRootPath = this.subRootPath;
        console.log(subRootPath)
        for(var siteCode in sites){
            var regs = Object.keys(sites).slice();
            var index = regs.indexOf(siteCode);
            if(index<0){continue}
            regs.splice(index,1);  
            var siteReg = new RegExp("\^\(\/" + regs.join("\|/") + "\)");
            var newPathName = location.pathname.replace(subRootPath,"");
                newPathName = newPathName.replace(siteReg,"")
                if(newPathName.indexOf("/") != 0){newPathName = "/"+newPathName}
                if(siteCode == "en"){
                    obj[siteCode] = this.rootURl + newPathName
                }else{
                    obj[siteCode] = this.rootURl + "/" +siteCode + newPathName;
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
    },

    /* modify  add nav generate  */
    filePath :"mkdocs/mkdocs.json",
    currentLang : _Language,
    navData:[],
    navDom : {},
    trackTarget :{
        track:true
    },
    activeTarget : {},
    drawNav : function(level,ul,navList){
        var self = this ;
        var navDom = self.navDom ;
        var activeTarget = self.activeTarget;
        var activeLevel = activeTarget.activeLevel;
        var html = '';
        level = level ? parseInt(level) : 1;
        if(self.activeTarget['1'].active){
            if(!activeLevel || level>activeLevel ){return}
            if( parseInt(activeTarget[level].index) == NaN  ) return ;
            ul = ul || document.querySelector('.md-nav--primary[data-md-level="0"]>ul.md-nav__list');
            var li = ul.querySelector('li[data-track-index="'+activeTarget[level].index+'"]')
            var input = li.querySelector("input[data-md-toggle]");
            var navRoot = document.querySelector(".md-sidebar--primary[data-md-component='navigation']");
            if(input && navRoot && navRoot.offsetTop >0) input.checked = true;
            var subUl = li.querySelector('ul[data-md-level="'+level+'"]');
            if(!subUl) {
                return
            }
            var navList = navList ?  navList[activeTarget[level].index] : self.navDom[activeTarget[level].index];
            var liHtml = navList.html || ' ';
            for(var i in navList){
                var item = navList[i];
                html += (item.html ? item.html : '');
            }
            subUl.innerHTML = html ;
            self.drawNav(++level,subUl,navList)
        }else{
            ul = ul || document.querySelector('.md-nav--primary[data-md-level="0"]>ul.md-nav__list');
            var lis = ul.children
            for (let index = 0;index < lis.length;index++) {
                if(index != activeTarget[level].index&&(level==1||level==2)) {
                    lis[index].style.display = 'none'
                }
            }
            var li =  lis[activeTarget[level].index]
            var input = li.querySelector("input[data-md-toggle]");
            var navRoot = document.querySelector(".md-sidebar--primary[data-md-component='navigation']");
            if(input && navRoot && navRoot.offsetTop >0) input.checked = true;
            var subUl = li.querySelector('ul[data-md-level="'+level+'"]');
            if(!subUl) {
                return
            }
            var navList = navList ?  navList[activeTarget[level].index] : self.navDom[activeTarget[level].index];
            var liHtml = navList.html || ' ';
            for(var i in navList){
                var item = navList[i];
                html += (item.html ? item.html : '');
            }
            subUl.innerHTML = html ;
            self.drawNav(++level,subUl,navList)
        }
    },
    collapseNav : function(value){
        console.log(value)
    },
    getParentInputLeval : function(el,end){
        if(!end) end  = document;
        var p = el.parentNode;
        var parents = []
        while(p != end){
            var o = p ;
            var input = o.querySelector("input[checkbox]")
            if(input){
                parents.push(input.getAttribute("data-track-index"));
            }
            p = o.parentNode;
        }
        return parents;
    },
    removeClass: function(element,cName){        //移除一个class
        var self = this
        if(self.hasClass(element,cName)){
            element.className = element.className.replace(new RegExp('(\\s|^)'+cName+'(\\s|$)'),' ');
        }
    },
    hasClass: function(element,cName){        //检查class是否存在
        return !!element.className.match(new RegExp('(\\s|^)'+cName+'(\\s|$)'));
    },
    bindCollapse: function(){
        var self = this;
        var ul = document.querySelector('.md-nav--primary[data-md-level="0"]>ul.md-nav__list');
        ul.addEventListener("change",function(e){
            var html = '';
           if(e.target.nodeName == "INPUT" && e.target.checked ){
               var level = e.target.getAttribute("data-track-index");
               var levels = e.target.getAttribute("data-track-id");
               var li = e.target.parentNode;
               self.removeClass(li,'md-nav__link--active')
               var ul = e.target.parentNode.querySelector('ul[data-track-id="'+levels+'"]');
               if(!level || !levels || !ul || ul.querySelector("li")) return
                levels = levels.split("-");
                var navList = {};
                for(var i = 0; i<levels.length; i++){
                    if(i == 0){
                        navList = self.navDom[levels[i]] ? self.navDom[levels[i]] : {}
                    }else{
                        navList = navList[levels[i]] ? navList[levels[i]] : {}
                    }
                }
                for(var index in navList){
                    var item = navList[index];
                    // li.outerHTML = (item.html ? item.html : '');
                    html += (item.html ? item.html : '');
                    // ul.appendChild(li)
                }
                /* console.log(navList)
                console.log(html); */
                ul.innerHTML = html
                return navList ;
           }else if(e.target.nodeName == "INPUT" && !e.target.checked ){
               var level = e.target.getAttribute("data-track-index");
               var levels = e.target.getAttribute("data-track-id");
               var dom = {};
               var ul = {};
               var length = 0;
               if(!level || !levels || !ul) return
               levelsNew = levels.split('-')
               length = levelsNew.length;
               var navList = {};
               var activeTarget = self.activeTarget;
               var activeLevel = activeTarget.activeLevel;
               if(length == 3){
                    dom = document.querySelector('.md-nav--primary[data-md-level="0"]>ul.md-nav__list');
                    ul = dom.querySelector('ul[data-track-id="'+levelsNew[0]+'"]').querySelector('ul[data-track-id="'+levelsNew[0]+ '-'+levelsNew[1]+'"]')
                    lis = ul.getElementsByTagName('li')
                    for(var i = 0;i < lis.length;i++){
                        lis[i].style.display = 'block'
                    }
                    if(activeTarget[3].index == levelsNew[2]){
                        var tempDom = ul.querySelector('li[data-track-id="'+levels+'"]')
                        var className = tempDom.getAttribute("class");
                        tempDom.setAttribute('class',className + ' md-nav__link--active')
                    }
                }else if(length == 2){
                   dom = document.querySelector('.md-nav--primary[data-md-level="0"]>ul.md-nav__list');
                   ul = dom.querySelector('ul[data-track-id="'+levelsNew[0]+'"]')
                   lis = ul.getElementsByTagName('li')
                   for(var i = 0;i < lis.length;i++){
                       lis[i].style.display = 'block'
                   }
                   if(activeTarget[2].index == levelsNew[1]){
                       var tempDom = ul.querySelector('li[data-track-id="'+levels+'"]')
                       var className = tempDom.getAttribute("class");
                       tempDom.setAttribute('class',className + ' md-nav__link--active')
                   }
                }else if(length == 1){
                    dom = document.querySelector('.md-nav--primary[data-md-level="0"]>ul.md-nav__list');
                    lis = dom.getElementsByTagName('li')
                    for(var i = 0;i < lis.length;i++){
                        lis[i].style.display = 'block'
                    }
                    if(activeTarget[1].index == levelsNew[0]){
                        var tempDom = dom.querySelector('li[data-track-id="'+levelsNew[0]+'"]')
                        var className = tempDom.getAttribute("class");
                        tempDom.setAttribute('class',className + ' md-nav__link--active')
                    }
                }
           }
        })
        
    },
    //创建面包屑
    createBread: function(){
        var self = this
        var activeTarget = self.activeTarget;
        var activeLevel = activeTarget.activeLevel;
        var activeLength = activeTarget.activeLevel;
        var breadList = []
        var breadItem = self.navData;
        var temp = {}
        for(var i = 0;i < activeLength;i++){
            //将导航数据与初始化的激活数据比对，当前的目录存在一个数组中
            breadItem = breadItem[activeTarget[i+1].index]
            for(var key in breadItem){
                breadList.push(key)
                breadItem = breadItem[key]
            }
        }
        var bread = document.querySelector('.md-header-nav__title'),
            breadStr = ''
            //先将目前错误的面包屑置为空
            bread.innerHTML = ''
        //如果面包屑层级大于1，则初始化会有span，最后一个才是直接字符串
        if(activeLength > 1){
            for(var i = 0;i < activeLength-1;i++){
                breadStr += '<span class="md-header-nav__parent" style="cursor:pointer;">'+ breadList[i] +'</span>'
            }
            breadStr += breadList[activeLength-1]
        }else{
            //如果面包屑层级等于1，则直接字符串
            breadStr += breadList[0]
        }
        //将拼接的html字符串赋值给面包屑容器
        bread.innerHTML = breadStr
    },
    //面包屑每一层级绑定点击事件
    bindBreadClick: function(){
        var self = this
        var bread = document.querySelector('.md-header-nav__title'),
         breadList  = bread.children,
         length = breadList.length;
         for (var j = 0 ; j<length; j++) {
            (function(j){breadList[j].onclick = function() {
                breadList[j].parentNode.style.color = 'hsla(0,0%,100%,.7)'
                var sibling = breadList[j].parentNode.children
                for(var n = 0;n<sibling.length;n++){
                    self.removeClass(sibling[n],'bread-active')
                    sibling[n].style.color = 'hsla(0,0%,100%,.7);'
                }
                breadList[j].setAttribute('class',breadList[j].getAttribute('class')+' bread-active')
                var dom = {},
                level1 = {},
                level2 = {};
                var activeTarget = self.activeTarget;
                var activeLevel = activeTarget.activeLevel;
                if(j == 0){
                    //第一步：点击一级目录的时候，先让一级下的所有li标签都显示
                    dom = document.querySelector('.md-nav--primary[data-md-level="0"]>ul.md-nav__list');
                    level2 = self.getChildren(dom)
                    for(var i = 0;i < level2.length;i++){
                       level2[i].style.display = 'block'
                    }
                    //第二步：让一级目录已展开并且非当前的li标签都折叠
                    var inputs = dom.getElementsByTagName('input')
                    for(var m = 0;m < inputs.length;m++){
                        if(m != activeTarget[1].index&&inputs[m].checked){
                            inputs[m].click()
                        }
                    }
                    //第三步：当前的一级li标签没有展开，就让展开，已展开就不处理
                    if(dom.querySelector('input[data-track-id="'+ activeTarget[1].index +'"]').checked){
                        dom.querySelector('input[data-track-id="'+ activeTarget[1].index +'"]').click()
                    }
                 }else{
                    //第1步：点击二级目录的时候，先让已显示、展开且非当前的一级li标签都折叠（这是已点击一级目录面包屑并且展开了其他的li标签）
                    dom = document.querySelector('.md-nav--primary[data-md-level="0"]>ul.md-nav__list');
                    var inputs = dom.getElementsByTagName('input')
                    for(var m = 0;m < inputs.length;m++){
                        if(m != activeTarget[1].index&&inputs[m].checked&&inputs[m].parentNode.style.display == 'block'){
                            inputs[m].click()
                        }
                    }
                    //第2步：将当前的一级目录展开
                    if(!dom.querySelector('input[data-track-id="'+ activeTarget[1].index +'"]').checked){
                        dom.querySelector('input[data-track-id="'+ activeTarget[1].index +'"]').click()
                    }
                    //第3步：将已显示、展开非当前的li标签折叠
                    dom = dom.querySelector('ul.md-nav__list')
                    var inputs = dom.getElementsByTagName('input')
                    for(var m = 0;m < inputs.length;m++){
                        if(m != activeTarget[2].index&&inputs[m].checked&&inputs[m].parentNode.style.display == 'block'){
                            inputs[m].click()
                        }
                    }

                    //第4步：将当前的二级目录展开
                    console.log(activeTarget[2].index,dom,dom.querySelector('input[data-track-id="1-7"]'))
                    if(!dom.querySelector('input[data-track-id="'+ activeTarget[1].index + '-' + activeTarget[2].index +'"]').checked){
                        dom.querySelector('input[data-track-id="'+ activeTarget[1].index + '-' + activeTarget[2].index +'"]').click()
                    }

                    //第5步：将当前所有的二级目录显示
                    level1 = document.querySelector('li[data-track-index="'+ activeTarget[1].index +'"]')
                    level2 = self.getChildren(level1.querySelector('ul.md-nav__list'))
                    for(var i = 0;i < level2.length;i++){
                        level2[i].style.display = 'block'
                    }
                    //第6步：如果当前的二级目录展开，那么就要将它折叠起来
                    if(level2[activeTarget[j+1].index].querySelector('input').checked){
                        level2[activeTarget[j+1].index].querySelector('input').click()
                    }
                 }
            }})(j);
        }
    },
    //获取直接子元素
    getChildren : function(obj){
          var objChild = [] ;
          var objs = obj.getElementsByTagName('*');
          for(var i=0,j=objs.length; i<j;++i){
            if(objs[i].nodeType != 1){alert(objs[i].nodeType);
              continue ;
            }
            var temp = objs[i].parentNode;
            if(temp.nodeType == 1){
              if(temp == obj){
                objChild[objChild.length] = objs[i] ;
              }
            }else if(temp.parentNode == obj){
              objChild[objChild.length] = objs[i] ;
            }
          }
          return objChild ;
        },
    generateSubNav : function(navData,level,id,ul,navDom,preIndex,trackId){
        var self = this;
        level = level ? level : 1;
        id = id ? id  : "nav";
        ul = ul ? ul : document.querySelector('.md-nav--primary[data-md-level="0"]>ul.md-nav__list');
        navDom = navDom  ? navDom : self.navDom;
        for(var i = 0 ; i < navData.length ; i++){
            var navItem  = navData[i];
            var li = document.createElement("li");
            li.setAttribute("data-track-index" , i);
            var newId = id+ "-" + (i+1) ;
            var newTrackId = trackId ? trackId +'-'+i : i;
            var active = false ;
            li.setAttribute('data-track-id' ,newTrackId)
            navDom[i] = {html:'',active:false};
            if(self.trackTarget.track) self.trackTarget[level] = {index:i};
            if(Object.prototype.toString.call(navItem) == '[object Object]'){
                for(var key in navItem){
                    var title = key ;
                    var navList = navItem[key] ; 
                    if(Object.prototype.toString.call(navList) == '[object Array]'){
                        li.className =  "md-nav__item  md-nav__item--nested";
                        var html = '<input type="checkbox" class="md-toggle md-nav__toggle" id="'+newId+'" data-track-id="'+newTrackId+'" data-track-index="'+i+'" data-md-toggle="'+newId+'"/>' +
                                   '<label class="md-nav__link" for="'+newId+'">'+title+'</label>'+
                                   '<nav class="md-nav" data-md-component="collapsible" data-md-level="'+level+'">'+
                                   '<label class="md-nav__title" for="'+newId+'">'+title+'</label>'+
                                    '<ul class="md-nav__list"  data-track-id="'+newTrackId+'" data-md-level="'+level+'" data-md-scrollfix > '+ '</ul>'+
                                   '</nav>' ;
                        li.innerHTML = html;
                        navDom[i]["html"] = li.outerHTML; 
                        self.generateSubNav(navList,level+1,newId,li.querySelector('ul[data-md-level="'+level+'"]'),navDom[i],i,newTrackId);

                    }else if(Object.prototype.toString.call(navList) == "[object String]"){
                        li.className = "md-nav__item";
                        var path = (self.currentLang == "en" ? "/" : "/" + self.currentLang + "/") + navList.replace(/\.md$/,'/');
                        active = location.pathname.indexOf(path) < 0 ? false : true; 
                        path = path.replace(/index\/$/,"");   
                               
                        if(level == 1 && i == 0 && (location.pathname == "/" || location.pathname == self.subRootPath + (self.currentLang == "en" ? "/" : "/" + self.currentLang + "/"))){
                            active = true 
                        }    

                        var newUrl = self.rootURl  + path ;
                        li.innerHTML = '<a href="'+newUrl+'" class="md-nav__link '+(active? 'md-nav__link--active' : '')+'" title="'+ title +'">'+title+'</a>'
                        navDom[i]["html"] =  li.outerHTML ; 
                        navDom[i][title] =  title; 
                        navDom[i]["active"] = active ;
                        if(active){
                            self.trackTarget[level] = {index:i,active:true};
                            self.trackTarget['activeLevel'] = level ;
                            self.activeTarget = JSON.parse(JSON.stringify(self.trackTarget))
                            window.activeTarget =self.activeTarget;
                            self.trackTarget.track = false ;
                        }

                    }
                    if(level <= 1) ul.appendChild(li);
                }

            }
        }
    },
    generateNav : function(){
        var self = this ;
        document.querySelector('.md-nav--primary[data-md-level="0"]>ul.md-nav__list').innerHTML = "";
        self.generateSubNav(self.navData);
    },
    finishRequest : function(xhr){
        var self = this;
        var res = xhr.responseText;
        var jsonData = {};
        // try{
            var jsonData = JSON.parse(res);    
            self.navData = jsonData["nav"] || {};
            window.navData = self.navData ;
            window.navDom = self.navDom ;
            window.trackTarget =self.trackTarget;
            self.generateNav();
            self.drawNav();
            self.bindCollapse()
            var self = this
            var activeTarget = self.activeTarget;
            var activeLevel = activeTarget.activeLevel;
            self.createBread()
            self.bindBreadClick()
        // }catch(e){
        //     console.log(e)
        // }
    },
    getNavData : function(){
        var self = this ;
        var xhr = new XMLHttpRequest();
        var relativeUrl = (self.currentLang == "en" ? "/" : "/" + self.currentLang + "/") + self.filePath;
        var url = self.rootURl  + relativeUrl ;
        xhr.open('GET',url,true);
        xhr.send();
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
              self.finishRequest(xhr);
            }
        }
    }
    /* modify  add nav generate  END*/
} 

site.getNavData();

// site.setSiteRule();
document.addEventListener('DOMContentLoaded',function(){
    site.setSiteRule();
})


/* modify highlight code script */

function highlightCode(){
    var script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/highlight.min.js";
    var lineScript = document.createElement("script");
    lineScript.src = "https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.7.0/highlightjs-line-numbers.min.js";
    var link = document.createElement("link");
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/styles/default.min.css";
    document.head.appendChild(script);
    document.head.appendChild(lineScript);
    document.head.appendChild(link); 
    script.onload = function(){ 
        // hljs.initHighlightingOnLoad();
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
          });
    }
    lineScript.onload = function(){
        // hljs.initLineNumbersOnLoad();
        document.querySelectorAll('pre code').forEach((block) => {
            // hljs.highlightBlock(block);
            hljs.lineNumbersBlock(block);
          });
    }
   
//    if(hljs && hljs.initHighlightingOnLoad){hljs.initHighlightingOnLoad()}
//    if(hljs && hljs.initLineNumbersOnLoad){hljs.initLineNumbersOnLoad()}
}

highlightCode();

/* modify highlight code script END */

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
