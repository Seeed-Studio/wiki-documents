"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41143],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=a(n),u=i,m=d["".concat(p,".").concat(u)]||d[u]||g[u]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var a=2;a<o;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var r=n(9668),i=(n(96540),n(15680));const o={description:"This article mainly introduces how to install CODESYS and how to deploy new projects in R1000",title:"How to install CODESYS for reComputer R1000",keywords:["Edge Controller","reComputer R1000","CODESYS"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/reComputer_r1000_install_codesys",last_update:{date:"10/8/2024",author:"ShuishengPeng"}},l=void 0,s={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/CODESYS/recomputer_r1000_install_codesys",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/CODESYS/recomputer_r1000_install_codesys",title:"How to install CODESYS for reComputer R1000",description:"This article mainly introduces how to install CODESYS and how to deploy new projects in R1000",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/CODESYS/recomputer_r1000_install_codesys.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/CODESYS",slug:"/reComputer_r1000_install_codesys",permalink:"/reComputer_r1000_install_codesys",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/CODESYS/recomputer_r1000_install_codesys.md",tags:[],version:"current",lastUpdatedBy:"ShuishengPeng",lastUpdatedAt:1728345600,formattedLastUpdatedAt:"Oct 8, 2024",frontMatter:{description:"This article mainly introduces how to install CODESYS and how to deploy new projects in R1000",title:"How to install CODESYS for reComputer R1000",keywords:["Edge Controller","reComputer R1000","CODESYS"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/reComputer_r1000_install_codesys",last_update:{date:"10/8/2024",author:"ShuishengPeng"}},sidebar:"ProductSidebar",previous:{title:"Publishing Industrial Data to AWS Cloud Using N3uron, MQTT, and Modbus",permalink:"/recomputer_r1000_n3uron_modbus_mqtt_aws"},next:{title:"reComputer R1000 with balena",permalink:"/reComputer_r1000_balena"}},p={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:2},{value:"Software Preparation",id:"software-preparation",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Install CODESYS",id:"install-codesys",level:3},{value:"Update dependency packages",id:"update-dependency-packages",level:3},{value:"Deployment CODESYS run-time",id:"deployment-codesys-run-time",level:3},{value:"Deploy a new project",id:"deploy-a-new-project",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:a},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"CODESYS is a popular automation software development platform widely used in industrial control and automation systems. Its full name is Controller Development System, which was first developed by the German company 3S-Smart Software Solutions.\nThis article mainly introduces how to download and install CODESYS, and finally deploy the CODESYS project to reComputer R1000"),(0,i.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,i.yg)("h2",{id:"hardware-preparation"},"Hardware Preparation"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{class:"table-nobg"},(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.yg)("h2",{id:"software-preparation"},"Software Preparation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://store.codesys.com/de/codesys.html"},"CODESYS Development System V3")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html"},"CODESYS Control for Raspberry Pi SL"))),(0,i.yg)("h2",{id:"getting-start"},"Getting Start"),(0,i.yg)("h3",{id:"install-codesys"},"Install CODESYS"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 1"),": Go to the CODESYS store, find ",(0,i.yg)("inlineCode",{parentName:"p"},"CODESYS Development System V3")," and download it, then find ",(0,i.yg)("inlineCode",{parentName:"p"},"CODESYS Control for Raspberry Pi SL")," and download it."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/1.png"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/2.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2"),": Double-click the downloaded ",(0,i.yg)("inlineCode",{parentName:"p"},"CODESYS 64 3.5.20.30.exe")," file and click ",(0,i.yg)("inlineCode",{parentName:"p"},"install")," to download the ",(0,i.yg)("inlineCode",{parentName:"p"},"CODESYS Installer"),"."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/3.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 3"),": After the ",(0,i.yg)("inlineCode",{parentName:"p"},"CODESYS Installer")," is downloaded, the ",(0,i.yg)("inlineCode",{parentName:"p"},"InstallShield Wizard")," will pop up automatically. Click ",(0,i.yg)("inlineCode",{parentName:"p"},"Next")," to start installing ",(0,i.yg)("inlineCode",{parentName:"p"},"CODESYS"),"."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 4"),": Click to accept the license, then click ",(0,i.yg)("inlineCode",{parentName:"p"},"Next")," to proceed to the next step."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/5.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 5"),": Click ",(0,i.yg)("inlineCode",{parentName:"p"},"I have read the information"),", then click ",(0,i.yg)("inlineCode",{parentName:"p"},"Next")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/6.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 6"),": Modify the installation directory and click ",(0,i.yg)("inlineCode",{parentName:"p"},"Next")," after the modification is completed."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/7.png"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/8.png"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/9.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 7"),": Select ",(0,i.yg)("inlineCode",{parentName:"p"},"Complete")," to fully install CODESYS, then click ",(0,i.yg)("inlineCode",{parentName:"p"},"Next")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/10.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 8"),": Click ",(0,i.yg)("inlineCode",{parentName:"p"},"Install")," to start the installation. It will take some time, just wait for the installation to complete"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/11.png"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/12.png"})),(0,i.yg)("h3",{id:"update-dependency-packages"},"Update dependency packages"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 1"),": After the installation is complete, open ",(0,i.yg)("inlineCode",{parentName:"p"},"CODESYS V3.5 SP20 Patch 3"),", click ",(0,i.yg)("inlineCode",{parentName:"p"},"Tools"),"---\x3e",(0,i.yg)("inlineCode",{parentName:"p"},"CODESYS Installer..")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p1.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2"),": In the new window, click ",(0,i.yg)("inlineCode",{parentName:"p"},"Install File(s)"),", then select the package to be installed. After selecting, the package will be parsed"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p2.png"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p3.png"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p4.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 3"),": Click ",(0,i.yg)("inlineCode",{parentName:"p"},"I accept the license agreement(s)"),", then click ",(0,i.yg)("inlineCode",{parentName:"p"},"Continue")," to start the installation"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p5.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 4"),": A pop-up window will appear, asking you to close ",(0,i.yg)("inlineCode",{parentName:"p"},"CODESYS V3.5 SP20 Patch 3"),". Close CODESYS and then click ",(0,i.yg)("inlineCode",{parentName:"p"},"OK"),". CODESYS will start installing the new package."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p6.png"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p7.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 5"),": Wait for the installation to complete"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p8.png"})),(0,i.yg)("h3",{id:"deployment-codesys-run-time"},"Deployment CODESYS run-time"),(0,i.yg)("p",null,"CODESYS Runtime refers to the CODESYS runtime system, which is the software installed on the target device to execute the PLC program created with the CODESYS development environment. CODESYS Runtime turns the target device (such as embedded systems, industrial computers, Raspberry Pi, etc.) into a programmable logic controller (PLC)."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 1"),": Make sure reComputer R1000 and the host computer are in the same network segment"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2"),": Click ",(0,i.yg)("inlineCode",{parentName:"p"},"Tools"),"---\x3e",(0,i.yg)("inlineCode",{parentName:"p"},"Update Raspberry Pi")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r1.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 3"),": Enter the username and password of reComputer R1000, IP address, then click Install to download ",(0,i.yg)("inlineCode",{parentName:"p"},"run time")," to reComputer R1000, and finally click ",(0,i.yg)("inlineCode",{parentName:"p"},"Start")," to start ",(0,i.yg)("inlineCode",{parentName:"p"},"run time")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r2.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 4"),": When the following message appears in the message bar, it means that reComputer R1000 has successfully run ",(0,i.yg)("inlineCode",{parentName:"p"},"run time")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r3.png"})),(0,i.yg)("h3",{id:"deploy-a-new-project"},"Deploy a new project"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 1"),": Click ",(0,i.yg)("inlineCode",{parentName:"p"},"File"),"---\x3e",(0,i.yg)("inlineCode",{parentName:"p"},"New project")," to create a new project"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n1.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2"),": Enter the project name, select ",(0,i.yg)("inlineCode",{parentName:"p"},"Project"),"---\x3e",(0,i.yg)("inlineCode",{parentName:"p"},"Standard project"),", and finally click ",(0,i.yg)("inlineCode",{parentName:"p"},"OK")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n2.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 3"),": Select ",(0,i.yg)("inlineCode",{parentName:"p"},"CODESYS Control for Raspberry Pi 64 SL (CODESYS)")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"Device")," column, select ",(0,i.yg)("inlineCode",{parentName:"p"},"Structured Text (ST)")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"PLC_PRG in"),", and finally click ",(0,i.yg)("inlineCode",{parentName:"p"},"OK"),". A new project is created. Later, we will demonstrate how to deploy the project."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n3.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 4"),": After creating the project, double-click it. In the new pop-up window, click ",(0,i.yg)("inlineCode",{parentName:"p"},"Scan Network"),", which can find the reComputer R1000 in the same network segment."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n4.png"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n5.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 5"),": Select R1000 and click ",(0,i.yg)("inlineCode",{parentName:"p"},"OK")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n6.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 6"),": In the ",(0,i.yg)("inlineCode",{parentName:"p"},"Add Device User")," window, fill in the reComputer R1000 username and password, and finally click ",(0,i.yg)("inlineCode",{parentName:"p"},"OK")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n7.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 7"),": Then the ",(0,i.yg)("inlineCode",{parentName:"p"},"Device User Login")," window will pop up, fill in the reComputer R1000 username and password again, and finally click OK"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n8.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 8"),": After the connection is successful, you can see that the status lights are all green"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n9.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 9"),": Click the Deploy button on the toolbar as shown to compile and deploy the current project to reComputer R1000"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n10.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 10"),": Click the Start button on the toolbar to start the current project in reComputer R1000"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n11.png"})),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);