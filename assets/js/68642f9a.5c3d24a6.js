"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37413],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=i,h=u["".concat(l,".").concat(g)]||u[g]||c[g]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},10384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(9668),i=(a(96540),a(15680));const r={description:"This article mainly introduces how to use fuxa to achieve SCADA.",title:"reComputer R1000 with fuxa to achieve SCADA",keywords:["Edge Controller","reComputer R1000","fuxa","SCADA"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/reComputer_r1000_fuxa_achieve_scada",last_update:{date:"10/8/2024",author:"ShuishengPeng"}},o=void 0,s={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/fuxa/recomputer_r1000_with_fuxa_to_achieve_SCADA",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/fuxa/recomputer_r1000_with_fuxa_to_achieve_SCADA",title:"reComputer R1000 with fuxa to achieve SCADA",description:"This article mainly introduces how to use fuxa to achieve SCADA.",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/fuxa/recomputer_r1000_with_fuxa_to_achieve_SCADA.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/fuxa",slug:"/reComputer_r1000_fuxa_achieve_scada",permalink:"/reComputer_r1000_fuxa_achieve_scada",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/fuxa/recomputer_r1000_with_fuxa_to_achieve_SCADA.md",tags:[],version:"current",lastUpdatedBy:"ShuishengPeng",lastUpdatedAt:1728345600,formattedLastUpdatedAt:"Oct 8, 2024",frontMatter:{description:"This article mainly introduces how to use fuxa to achieve SCADA.",title:"reComputer R1000 with fuxa to achieve SCADA",keywords:["Edge Controller","reComputer R1000","fuxa","SCADA"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/reComputer_r1000_fuxa_achieve_scada",last_update:{date:"10/8/2024",author:"ShuishengPeng"}},sidebar:"ProductSidebar",previous:{title:"reComputer R1000 with fuxa to use WebAPI",permalink:"/reComputer_r1000_fuxa_web_api"},next:{title:"reComputer R1000 install FIN",permalink:"/reComputer_r1000_install_fin"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Hardware Configuration",id:"hardware-configuration",level:3},{value:"Introduction to visual display and main controls",id:"introduction-to-visual-display-and-main-controls",level:2},{value:"Chart",id:"chart",level:3},{value:"Swich",id:"swich",level:3},{value:"Shape",id:"shape",level:3},{value:"Pipe",id:"pipe",level:3},{value:"Circular Gauge",id:"circular-gauge",level:3},{value:"Slider",id:"slider",level:3},{value:"Alarm",id:"alarm",level:3},{value:"SCADA demo",id:"scada-demo",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.yg)(u,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"FUXA is a web-based Process Visualization (SCADA/HMI/Dashboard) software. With FUXA you can create modern process visualizations with individual designs for your machines and real-time data display.It supports Modbus RTU/TCP, Siemens S7 Protocol, OPC-UA, BACnet IP, MQTT, and other protocols. "),(0,i.yg)("p",null,"This article mainly introduces how to use fuxa to achieve SCADA. In the article, fuxa receives data from ",(0,i.yg)("inlineCode",{parentName:"p"},"node-red")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"OPC UA Simulator"),", and displays it using ",(0,i.yg)("inlineCode",{parentName:"p"},"chart")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Circular Gauge"),"; at the same time, it draws a series of patterns to simulate industrial processes."),(0,i.yg)("h2",{id:"getting-start"},"Getting Start"),(0,i.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,i.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{class:"table-nobg"},(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Python 3.11 may be incompatible with fuxa. If your Python version is 3.11, please consider changing to a different Python version.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Using ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/frangoteam/FUXA"},"fuxa")," on reComputer R1000.You can refer to the following steps to install fuxa on reComputer R1000"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"  ## You need to have installed Node Version 14 || 16 || 18.\n  wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz\n  tar -xf node-v18.20.3-linux-arm64.tar.xz\n  cd node-v18.20.3-linux-arm64\n  sudo cp -R * /usr/local/\n  node -v\n  npm -v\n  ## Next install FUXA from npm\n  sudo npm install -g --unsafe-perm @frangoteam/fuxa\n  sudo fuxa\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Regarding how to use fuxa to implement OPC-UA data interaction, you can refer to this ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reComputer_r1000_fuxa_opc_ua/"},"wiki"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Regarding how to use fuxa to implement data interaction with mqtt client, you can refer to this ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reComputer_r1000_fuxa_mqtt_client/"},"wiki"),".Unlike this wiki, the data we publish in ",(0,i.yg)("inlineCode",{parentName:"p"},"node-red")," is processed by the ",(0,i.yg)("inlineCode",{parentName:"p"},"function")," module, and the ",(0,i.yg)("inlineCode",{parentName:"p"},"loop")," module is used for continuous publishing.The code of the ",(0,i.yg)("inlineCode",{parentName:"p"},"function")," module is as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-java"},"## On Start\n  global.set('firstTank', '10000');\n  global.set('secondTank', '0');\n  global.set('thirdTank', '0');\n")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-java"},"## On Message\n  var firstTank = global.get('firstTank');\n  var secondTank = global.get('secondTank');\n  var thirdTank = global.get('thirdTank');\n  if (firstTank <= 0) {\n      global.set('firstTank', 10000);\n      global.set('secondTank', 0);\n      global.set('thirdTank', 0);\n      firstTank=10000;\n      secondTank=0;\n      thirdTank=0;\n  }\n\n  firstTank = firstTank - 3;\n  secondTank++;\n  thirdTank++;\n  thirdTank++;\n  global.set('firstTank',firstTank);\n  global.set('secondTank',secondTank);\n  global.set('thirdTank',thirdTank);\n  var data = {\n      \"firstTank\":firstTank,\n      \"scondTank\":secondTank,\n      \"thirdTank\":thirdTank,\n  };\n  msg.payload = data;\n  return msg;\n")),(0,i.yg)("p",{parentName:"li"},"The main thing is to encapsulate firstTank, secondTank, and thirdTank into json format, and then let the mqtt-out module publish it."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/node-red-mqtt.png"})))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Click the ",(0,i.yg)("inlineCode",{parentName:"p"},"+")," button in the lower right corner of fuxa, enter ",(0,i.yg)("inlineCode",{parentName:"p"},"Name"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Type"),", select ",(0,i.yg)("inlineCode",{parentName:"p"},"Internal"),", and finally click ",(0,i.yg)("inlineCode",{parentName:"p"},"OK")," to get a new module. This module does not have the function of communicating with external devices, but it allows us to Add custom tags. These tags support three data types such as ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"number"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),", which can facilitate our subsequent work."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_internal.gif"})))),(0,i.yg)("h3",{id:"hardware-configuration"},"Hardware Configuration"),(0,i.yg)("p",null,"We use Ethernet cables to connect the W10 PC and reComputer R1000 to a switch to ensure that they are on the same network segment."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png",alt:"pir",width:"500",height:"auto"})),(0,i.yg)("h2",{id:"introduction-to-visual-display-and-main-controls"},"Introduction to visual display and main controls"),(0,i.yg)("h3",{id:"chart"},"Chart"),(0,i.yg)("p",null,"There are curve charts and histograms available in fuxa. Take the curve chart as an example. The properties of ",(0,i.yg)("inlineCode",{parentName:"p"},"Chart")," are as shown in the figure. You can set the ",(0,i.yg)("inlineCode",{parentName:"p"},"Name"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"font size"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"data format"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"time format"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"X axis and Y axis styles")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"Chart")," and other properties. The most important thing is ",(0,i.yg)("inlineCode",{parentName:"p"},"Chart to show"),", which determines the data source we want to display and the format of lines."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/chart_property.png"})),(0,i.yg)("p",null,"We click ",(0,i.yg)("inlineCode",{parentName:"p"},"Chart to show"),", then select ",(0,i.yg)("inlineCode",{parentName:"p"},"New Chart"),", a new pop-up window will appear, click the ",(0,i.yg)("inlineCode",{parentName:"p"},"+")," button in the upper right corner of the new pop-up window, enter ",(0,i.yg)("inlineCode",{parentName:"p"},"Name"),", and then click ",(0,i.yg)("inlineCode",{parentName:"p"},"OK"),", you can successfully create a new line configuration.Then click on the newly created line configuration, then click ",(0,i.yg)("inlineCode",{parentName:"p"},"Add Line"),", select the data you want to display, and finally click ",(0,i.yg)("inlineCode",{parentName:"p"},"OK"),", a new curve will appear. Multiple curves can be added through this process. Finally click ",(0,i.yg)("inlineCode",{parentName:"p"},"OK")," to complete the configuration."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/new_chart_line_confiigure.png"})),(0,i.yg)("p",null,"We use ",(0,i.yg)("inlineCode",{parentName:"p"},"Chart")," here to display data from ",(0,i.yg)("inlineCode",{parentName:"p"},"Prosys OPC UA Simulation Server"),".You can see that the data is successfully displayed in the form of a graph."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_chart.gif"})),(0,i.yg)("h3",{id:"swich"},"Swich"),(0,i.yg)("p",null,"The attributes of the switch are as shown in the figure. We select a boolean data named ",(0,i.yg)("inlineCode",{parentName:"p"},"swich_1")," as the swich state. You can configure the display state of the ",(0,i.yg)("inlineCode",{parentName:"p"},"swich")," when it is on or off, including color configuration, text display, etc."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/swich_property.png"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_swich.gif"})),(0,i.yg)("h3",{id:"shape"},"Shape"),(0,i.yg)("p",null,"Fuxa provides a variety of ",(0,i.yg)("inlineCode",{parentName:"p"},"shape")," for users to draw industrial visualization interfaces. Each ",(0,i.yg)("inlineCode",{parentName:"p"},"shape")," has three attributes, namely ",(0,i.yg)("inlineCode",{parentName:"p"},"Property"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Events"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"Actions"),".\nAmong them, ",(0,i.yg)("inlineCode",{parentName:"p"},"Property")," is mainly used to configure the color of ",(0,i.yg)("inlineCode",{parentName:"p"},"shape"),". By binding a ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"shape")," displays different colors according to the change of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag")," value. You can click the ",(0,i.yg)("inlineCode",{parentName:"p"},"+")," in the upper right corner to set different colors."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_property.png"})),(0,i.yg)("p",null,"Here we take a warehouse pattern as an example, filling its color with ",(0,i.yg)("inlineCode",{parentName:"p"},"Property"),"."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/fill_color.gif"})),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Events")," mainly has two contents, ",(0,i.yg)("inlineCode",{parentName:"p"},"Type")," represents the event type, and ",(0,i.yg)("inlineCode",{parentName:"p"},"Action")," represents the action after the event is triggered."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_Events.gif"})),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Actions")," needs to be bound to a ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag"),", and different ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag")," values \u200b\u200bcan trigger different actions. Set the values \u200b\u200bof ",(0,i.yg)("inlineCode",{parentName:"p"},"Min")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Max"),", and then select the desired action in the ",(0,i.yg)("inlineCode",{parentName:"p"},"Type")," option. When the ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag")," data reaches the interval between Min and Max, the corresponding action will be triggered."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shape_setting_actions.png"})),(0,i.yg)("p",null,"Here we take a warehouse pattern as an example, controlling its rotation and stopping through ",(0,i.yg)("inlineCode",{parentName:"p"},"Actions"),"."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/turn_use_action.gif"})),(0,i.yg)("h3",{id:"pipe"},"Pipe"),(0,i.yg)("p",null,"When displaying industrial processes, you can use ",(0,i.yg)("inlineCode",{parentName:"p"},"pipe")," to represent the flow direction of industrial materials. The properties of the pipe are as shown in the figure. "),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/pipe_prorety.png"})),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"Property")," part can set the width, color and other properties of the pipe. ",(0,i.yg)("inlineCode",{parentName:"p"},"Actions")," also needs to be bound to a ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag"),". Different tag values \u200b\u200ballow the pipeline to have different actions. There are four main actions: ",(0,i.yg)("inlineCode",{parentName:"p"},"Stop"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Turn clockwise"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Turn anticlockwise"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"Hide conten"),". This article shows two actions: ",(0,i.yg)("inlineCode",{parentName:"p"},"Stop")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Turn clockwise"),"."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_pipe.gif"})),(0,i.yg)("p",null,"To simulate the industrial process, we added patterns such as two tanks and some pipes."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/after_add.gif"})),(0,i.yg)("h3",{id:"circular-gauge"},"Circular Gauge"),(0,i.yg)("p",null,"In addition to ",(0,i.yg)("inlineCode",{parentName:"p"},"charts"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Circular Gauge")," can also display data in real time. There are three ",(0,i.yg)("inlineCode",{parentName:"p"},"Circular Gauge")," available. "),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/three_gauge.png"})),(0,i.yg)("p",null,"When using it, you need to specify the data to be displayed by binding a ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag"),". At the same time, you need to specify the maximum range of data that the instrument can display. You can also set attributes such as lines on the instrument panel.Here we select the data of ",(0,i.yg)("inlineCode",{parentName:"p"},"Tank1")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"/dev/fromfuxa")," topic for display."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/gauge_show_data.gif"})),(0,i.yg)("p",null,"After that, the data of ",(0,i.yg)("inlineCode",{parentName:"p"},"Tank2")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Tank3")," are also displayed through the ",(0,i.yg)("inlineCode",{parentName:"p"},"Circular Gauge")," to indicate the current capacity of each tank."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/add_gauge.gif"})),(0,i.yg)("h3",{id:"slider"},"Slider"),(0,i.yg)("p",null,"Use the slider to adjust variables such as flow\u3001pressure.etc. Its properties are as shown in the figure. You can set its color and format. When using it, you need to bind a ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag"),". Then the slider can adjust the value of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag")," in real time. Here we bind a custom ",(0,i.yg)("inlineCode",{parentName:"p"},"Flow control 1")," tag"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider_property.png"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider.gif"})),(0,i.yg)("h3",{id:"alarm"},"Alarm"),(0,i.yg)("p",null,"In the industrial process, excessive certain parameters (such as pressure) may cause some dangers. At this time, an alarm is needed to remind the staff that there may be some problems here. Fuxa supports real-time monitoring of a certain value and triggers an alarm when the value reaches a certain dangerous range.\nBy default, fuxa's interface does not open the alarm bar. You need to set it up to open the alarm bar."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/start_alarm.gif"})),(0,i.yg)("p",null,"After the alarm bar is opened, you can set the alarm. Click the settings button in the upper left corner, then click ",(0,i.yg)("inlineCode",{parentName:"p"},"Alarms"),", and then click ",(0,i.yg)("inlineCode",{parentName:"p"},"+")," in the new window to display the alarm settings window. At this time, a ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag")," needs to be bound, and the system will monitor the value of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag"),". ",(0,i.yg)("inlineCode",{parentName:"p"},"Alarms")," has four levels, namely ",(0,i.yg)("inlineCode",{parentName:"p"},"High High"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"High"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Low"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Message"),". You can set a ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag")," value range for each level, and when the ",(0,i.yg)("inlineCode",{parentName:"p"},"Tag")," value reaches this range,Alerts of the corresponding level will be triggered."),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/alarm_show.gif"})),(0,i.yg)("h3",{id:"scada-demo"},"SCADA demo"),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif"})),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);