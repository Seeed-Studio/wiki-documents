"use strict";(self.webpackChunkwiki_zh_CN=self.webpackChunkwiki_zh_CN||[]).push([["88050"],{30433(e,t,a){a.r(t),a.d(t,{metadata:()=>r,default:()=>h,frontMatter:()=>c,contentTitle:()=>d,toc:()=>n,assets:()=>i});var r=JSON.parse('{"id":"Robotics/Robot_Actuator/cn_Feetech_Servo","title":"\u98DE\u7279\u8235\u673A","description":"This wiki provides tutorial for Feetech Servo motors.","source":"@site/docs/Robotics/Robot_Actuator/cn_Feetech_Servo.md","sourceDirName":"Robotics/Robot_Actuator","slug":"/feetech_servo","permalink":"/cn/feetech_servo","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/zh-CN/docs/Robotics/Robot_Actuator/cn_Feetech_Servo.md","tags":[],"version":"current","lastUpdatedBy":"Li Shanghang","lastUpdatedAt":1763942400000,"frontMatter":{"description":"This wiki provides tutorial for Feetech Servo motors.","title":"\u98DE\u7279\u8235\u673A","keywords":["actuator","motor","arm","robotics"],"image":"https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech servo all.webp","slug":"/feetech_servo","last_update":{"date":"11/24/2025","author":"Li Shanghang"},"createdAt":"2025-06-23","updatedAt":"2025-11-25","url":"https://wiki.seeedstudio.com/cn/feetech_servo/"},"sidebar":"CNSidebar","previous":{"title":"\u9AD8\u64CE\u7535\u673A\u63A7\u5236\u5B8C\u6574\u6307\u5357","permalink":"/cn/hightorque_control"},"next":{"title":"\u534E\u99A8\u4EAC\u8235\u673A","permalink":"/cn/fashionstar_servo"}}'),o=a(31085),s=a(71184);let c={description:"This wiki provides tutorial for Feetech Servo motors.",title:"\u98DE\u7279\u8235\u673A",keywords:["actuator","motor","arm","robotics"],image:"https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech servo all.webp",slug:"/feetech_servo",last_update:{date:"11/24/2025",author:"Li Shanghang"},createdAt:"2025-06-23",updatedAt:"2025-11-25",url:"https://wiki.seeedstudio.com/cn/feetech_servo/"},d="\u98DE\u7279STS\u7CFB\u5217\u8235\u673A\u6587\u6863\u4E2D\u5FC3",i={},n=[{value:"\u4EA7\u54C1\u624B\u518C",id:"\u4EA7\u54C1\u624B\u518C",level:2},{value:"SDK",id:"sdk",level:2},{value:"\u4E0A\u4F4D\u673A",id:"\u4E0A\u4F4D\u673A",level:2},{value:"\u63A7\u5236\u6848\u4F8B",id:"\u63A7\u5236\u6848\u4F8B",level:2},{value:"\u6280\u672F\u652F\u6301",id:"\u6280\u672F\u652F\u6301",level:2}];function l(e){let t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"\u98DE\u7279sts\u7CFB\u5217\u8235\u673A\u6587\u6863\u4E2D\u5FC3",children:"\u98DE\u7279STS\u7CFB\u5217\u8235\u673A\u6587\u6863\u4E2D\u5FC3"})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:800,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech servo all.webp",className:"nav-icon",alt:"Slamtec LiDAR"})}),"\n",(0,o.jsx)("div",{class:"get_one_now_container",style:{textAlign:"center"},children:(0,o.jsx)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/STS3215-19kg-cm-7-4V-Serial-Servo-p-6338.html",target:"_blank",children:(0,o.jsx)("strong",{children:(0,o.jsx)("span",{children:(0,o.jsx)("font",{color:"FFFFFF",size:"4",children:" \u8D2D\u4E70\u94FE\u63A5 \u{1F5B1}"})})})})}),"\n",(0,o.jsx)("div",{class:"category-group",children:(0,o.jsxs)("div",{class:"category-card robot-kits",children:[(0,o.jsx)(t.h2,{id:"\u4EA7\u54C1\u624B\u518C",children:"\u4EA7\u54C1\u624B\u518C"}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/108090003_FEETECH_ST-3215-C047-Datasheet.pdf",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"ST3215-C047 12V 1:345"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/101090142_Feetech_ST-3215-C046_Datasheet.pdf",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"ST3215-C046 7.4v 1:147"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/101090141_Feetech_ST-3215-C044_Datasheet.pdf",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"ST3215-C044 7.4v 1:191"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/108090023_STS3215-C001_Datasheet.pdf",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"ST3215-C001 7.4v 1:345"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/HL-3915-C001%2012V%201%20320%20.xlsx",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"HL-3915-C001 12V 1:320 "})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/HL-3615-C002%206V%201%2096%20.xlsx",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"HL-3615-C002 6V 1:96  "})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/URT-1%E4%B8%AD%E6%96%87%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"FE-URT-1  "})}),(0,o.jsx)(t.h2,{id:"sdk",children:"SDK"}),(0,o.jsx)("a",{href:"https://gitee.com/ftservo/FTServo_Arduino",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Arduino"})}),(0,o.jsx)("a",{href:"https://gitee.com/ftservo/FTServo_Python",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Python"})}),(0,o.jsx)("a",{href:"https://gitee.com/ftservo/FTServo_Linux",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Linux"})}),(0,o.jsx)("a",{href:"https://gitee.com/ftservo/FTServo_stm32HAL",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Stm32HAL"})}),(0,o.jsx)("a",{href:"http://doc.feetech.cn/#/prodinfodownload?srcType=FT-SMS-STS-emanual-229f4476422d4059abfb1cb0",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"\u5185\u5B58\u8868"})}),(0,o.jsx)("a",{href:"http://doc.feetech.cn/#/prodinfodownload?srcType=FT-SCS-Protocol-41ad23fe8a244712ba160b93",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"\u901A\u4FE1\u534F\u8BAE"})}),(0,o.jsx)("a",{href:"http://md.feetech.cn/wenjian-maxbase-100001/pub/%E4%BA%A7%E5%93%81%E8%A7%84%E6%A0%BC/MD%E6%96%87%E6%A1%A3/202505/5af0e85ab1cb45f596d7cc2b-%E7%A3%81%E7%BC%96%E7%A0%81SMS&STS&HTS-%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E6%8C%87%E4%BB%A4%E7%94%9F%E6%88%90%E8%A1%A8-250508.xlsx",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"\u5341\u516D\u8FDB\u5236\u6307\u4EE4\u751F\u6210\u96C6"})}),(0,o.jsx)(t.h2,{id:"\u4E0A\u4F4D\u673A",children:"\u4E0A\u4F4D\u673A"}),(0,o.jsx)("a",{href:"https://gitee.com/ftservo/fddebug",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"FDServo"})}),(0,o.jsx)(t.h2,{id:"\u63A7\u5236\u6848\u4F8B",children:"\u63A7\u5236\u6848\u4F8B"}),(0,o.jsx)("a",{href:"https://wiki.seeedstudio.com/cn/bus_servo_driver_board/",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"XIAO\u603B\u7EBF\u8235\u673A\u9A71\u52A8\u677F\u63A7\u5236STS3215"})})]})}),"\n",(0,o.jsx)(t.h2,{id:"\u6280\u672F\u652F\u6301",children:"\u6280\u672F\u652F\u6301"}),"\n",(0,o.jsx)(t.p,{children:"\u611F\u8C22\u60A8\u9009\u62E9\u6211\u4EEC\u7684\u4EA7\u54C1\uFF01\u6211\u4EEC\u5C06\u4E3A\u60A8\u63D0\u4F9B\u5168\u65B9\u4F4D\u7684\u652F\u6301\uFF0C\u786E\u4FDD\u60A8\u83B7\u5F97\u987A\u7545\u7684\u4EA7\u54C1\u4F7F\u7528\u4F53\u9A8C\u3002\u6211\u4EEC\u5F00\u901A\u4E86\u591A\u79CD\u6C9F\u901A\u6E20\u9053\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u7528\u6237\u7684\u9700\u6C42\u548C\u504F\u597D\u3002"}),"\n",(0,o.jsxs)("div",{class:"button_tech_support_container",children:[(0,o.jsx)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.jsx)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})]}),"\n",(0,o.jsxs)("div",{class:"button_tech_support_container",children:[(0,o.jsx)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.jsx)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})]}),"\n",(0,o.jsx)("style",{children:`
/* \u{5BFC}\u{822A}\u{5BB9}\u{5668}\u{57FA}\u{7840}\u{6837}\u{5F0F} */
.quick-nav-container {
margin: 2rem 0;
padding: 1rem;
background: #f8f9fa;
border-radius: 16px;
}

/* \u{5361}\u{7247}\u{5BB9}\u{5668}\u{57FA}\u{7840}\u{6837}\u{5F0F} */
.card-container {
margin: 0.1rem 0;
padding: 0.5rem;
border-radius: 16px;
}

/* \u{5BFC}\u{822A}\u{9879}\u{57FA}\u{7840}\u{6837}\u{5F0F} */
.nav-item {
padding: 0.8rem 1.5rem;
border-radius: 12px;
display: flex;
align-items: center;
text-decoration: none;
color: #333;
background: white;
}

/* \u{5BFC}\u{822A}\u{9879}\u{6587}\u{5B57}\u{6837}\u{5F0F} */
.nav-item .text {
font-size: 0.95rem;
white-space: nowrap;
}

/* \u{5185}\u{5BB9}\u{5361}\u{7247}\u{57FA}\u{7840}\u{6837}\u{5F0F} */
.category-card {
padding: 1.5rem;
border-radius: 16px;
background: white;
}

.category-group {
margin-bottom: 2rem;
}

/* \u{5206}\u{7C7B}\u{8272}\u{6807} */
.robot-kits::before {
background: #4a90e2;
}

/* \u{54CD}\u{5E94}\u{5F0F}\u{8BBE}\u{8BA1} */
@media (max-width: 768px) {
.nav-item {
  padding: 0.8rem 1rem;
}
}

/* Dark\u{6A21}\u{5F0F}\u{6837}\u{5F0F} */
html[data-theme='dark'] {
.quick-nav-container {
  background: #1f2937;
}
.nav-item {
  background: #374151;
  color: #e5e7eb;
}
.category-card {
  background: #374151;
  color: #e5e7eb;
}
}

`}),"\n",(0,o.jsx)("style",{children:`

/* \u{5185}\u{5BB9}\u{5361}\u{7247}\u{589E}\u{5F3A}\u{7248}\u{6837}\u{5F0F} */
.nav-grid {
display: block;
gap: 2rem;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
margin-top: 2rem;
}

/* Dark\u{6A21}\u{5F0F} - \u{5185}\u{5BB9}\u{5361}\u{7247} */
html[data-theme='dark'] .category-card {
background: #374151;
box-shadow: 0 4px 6px rgba(0,0,0,0.4);
color: #e5e7eb;
}

.category-group {
margin-bottom: 2rem;
}

/* \u{5206}\u{7C7B}\u{8272}\u{6807} */
.category-card::before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 6px;
height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* \u{60AC}\u{6D6E}\u{7279}\u{6548} */
.category-card:hover {
transform: translateY(-5px);
box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{7279}\u{6548} */
html[data-theme='dark'] .category-card:hover {
box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
z-index: -1;
}

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{5149}\u{6548} */
html[data-theme='dark'] .category-card:hover::after {
background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* \u{94FE}\u{63A5}\u{52A8}\u{753B} */
.category-card a {
position: relative;
display: inline-block;
transition: all 0.2s;
text-decoration: none !important;
color: #333;
}

/* Dark\u{6A21}\u{5F0F} - \u{94FE}\u{63A5} */
html[data-theme='dark'] .category-card a {
color: #d1d5db;
}

.category-card a:hover {
color: #4a90e2;
transform: translateX(5px);
}

/* Dark\u{6A21}\u{5F0F} - \u{94FE}\u{63A5}\u{60AC}\u{6D6E} */
html[data-theme='dark'] .category-card a:hover {
color: #60a5fa;
}

.category-card a::after {
content: "";
position: absolute;
bottom: -2px;
left: 0;
width: 0;
height: 2px;
background: #4a90e2;
transition: width 0.3s;
}

/* Dark\u{6A21}\u{5F0F} - \u{94FE}\u{63A5}\u{4E0B}\u{5212}\u{7EBF} */
html[data-theme='dark'] .category-card a::after {
background: #60a5fa;
}

.category-card a:hover::after {
width: 100%;
}

/* \u{6807}\u{7B7E}\u{6837}\u{5F0F}\u{589E}\u{5F3A} */
.tag {
font-size: 0.75rem;
padding: 2px 8px;
border-radius: 12px;
margin-left: 8px;
transition: all 0.3s;
}

.stable { 
background: #e6f4ea; 
color: #137333;
box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - Stable\u{6807}\u{7B7E} */
html[data-theme='dark'] .stable {
background: #065f46;
color: #a7f3d0;
box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended { 
background: #fce8e6; 
color: #a50e0e;
box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - Recommended\u{6807}\u{7B7E} */
html[data-theme='dark'] .recommended {
background: #7f1d1d;
color: #fca5a5;
box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
transform: translateY(-2px) scale(0.98);
box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - \u{70B9}\u{51FB}\u{6548}\u{679C} */
html[data-theme='dark'] .category-card:active {
box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* \u{54CD}\u{5E94}\u{5F0F}\u{4F18}\u{5316} */
@media (max-width: 768px) {
.nav-grid {
  grid-template-columns: 1fr;
}

.category-card {
  width: 100%;
  margin-top: 0.5rem; /* \u{5361}\u{7247}\u{7D27}\u{8D34}\u{6807}\u{9898} */
}
}

/* Dark\u{6A21}\u{5F0F} - \u{6807}\u{9898}\u{6587}\u{5B57} */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
color: #f9fafb;
}

/* Dark\u{6A21}\u{5F0F} - \u{6B63}\u{6587}\u{6587}\u{5B57} */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
color: #e5e7eb;
}

/* Dark\u{6A21}\u{5F0F} - \u{5F15}\u{7528}\u{5757} */
html[data-theme='dark'] blockquote {
color: #9ca3af;
border-left-color: #4b5563;
}
`})]})}function h(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},71184(e,t,a){a.d(t,{R:()=>c,x:()=>d});var r=a(14041);let o={},s=r.createContext(o);function c(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);