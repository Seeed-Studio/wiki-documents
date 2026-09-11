"use strict";(self.webpackChunkwiki_ja=self.webpackChunkwiki_ja||[]).push([["44666"],{32458(e,a,t){t.r(a),t.d(a,{metadata:()=>s,default:()=>l,frontMatter:()=>i,contentTitle:()=>n,toc:()=>c,assets:()=>d});var s=JSON.parse('{"id":"Robotics/Robot_Actuator/ja_FashionStar_Servo","title":"FashionStar\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC","description":"\u3053\u306Ewiki\u306FFashionStar\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002","source":"@site/docs/Robotics/Robot_Actuator/ja_FashionStar_Servo.md","sourceDirName":"Robotics/Robot_Actuator","slug":"/fashionstar_servo","permalink":"/ja/fashionstar_servo","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/ja/docs/Robotics/Robot_Actuator/ja_FashionStar_Servo.md","tags":[],"version":"current","lastUpdatedBy":"Li Shanghang","lastUpdatedAt":1763942400000,"frontMatter":{"description":"\u3053\u306Ewiki\u306FFashionStar\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002","title":"FashionStar\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC","keywords":["actuator","motor","arm","robotics"],"image":"https://files.seeedstudio.com/wiki/robotics/Actuator/fashionstar/fashionstar servo all.webp","slug":"/fashionstar_servo","last_update":{"date":"11/24/2025","author":"Li Shanghang"},"createdAt":"2025-06-23","updatedAt":"2026-01-19","url":"https://wiki.seeedstudio.com/ja/fashionstar_servo/"},"sidebar":"jaSidebar","previous":{"title":"Feetech\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC","permalink":"/ja/feetech_servo"},"next":{"title":"Stackforce \u30B7\u30EA\u30FC\u30BA\u30E2\u30FC\u30BF\u30FC","permalink":"/ja/stackforce_series"}}'),r=t(31085),o=t(71184);let i={description:"\u3053\u306Ewiki\u306FFashionStar\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002",title:"FashionStar\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC",keywords:["actuator","motor","arm","robotics"],image:"https://files.seeedstudio.com/wiki/robotics/Actuator/fashionstar/fashionstar servo all.webp",slug:"/fashionstar_servo",last_update:{date:"11/24/2025",author:"Li Shanghang"},createdAt:"2025-06-23",updatedAt:"2026-01-19",url:"https://wiki.seeedstudio.com/ja/fashionstar_servo/"},n="FashionStar\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30CF\u30D6",d={},c=[{value:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8",id:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8",level:2},{value:"SDK",id:"sdk",level:2},{value:"\u5BF8\u6CD5",id:"\u5BF8\u6CD5",level:2},{value:"\u30C7\u30D0\u30C3\u30B0\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2",id:"\u30C7\u30D0\u30C3\u30B0\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2",level:2},{value:"\u6280\u8853\u6587\u66F8",id:"\u6280\u8853\u6587\u66F8",level:2},{value:"\u6280\u8853\u30B5\u30DD\u30FC\u30C8 &amp; \u88FD\u54C1\u30C7\u30A3\u30B9\u30AB\u30C3\u30B7\u30E7\u30F3",id:"\u6280\u8853\u30B5\u30DD\u30FC\u30C8--\u88FD\u54C1\u30C7\u30A3\u30B9\u30AB\u30C3\u30B7\u30E7\u30F3",level:2}];function h(e){let a={h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"fashionstar\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30CF\u30D6",children:"FashionStar\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30CF\u30D6"})}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("img",{width:800,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/fashionstar/fashionstar servo all.webp",className:"nav-icon",alt:"Slamtec LiDAR"})}),"\n",(0,r.jsx)("div",{class:"get_one_now_container",style:{textAlign:"center"},children:(0,r.jsx)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Fashionstar-RP6-U15H-M-Servo-p-6514.html",target:"_blank",children:(0,r.jsx)("strong",{children:(0,r.jsx)("span",{children:(0,r.jsx)("font",{color:"FFFFFF",size:"4",children:" \u4ECA\u3059\u3050\u5165\u624B \u{1F5B1}"})})})})}),"\n",(0,r.jsx)("div",{class:"category-group",children:(0,r.jsxs)("div",{class:"category-card robot-kits",children:[(0,r.jsx)(a.h2,{id:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8",children:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8"}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/Fashionstar/Fashion%20Star_U51H_Datasheet_EN_V1.1.08.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"HX8-U51H-M 2.26N\xb7m"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/Fashionstar/Fashion%20Star_U50H_Datasheet_EN_V1.1.08.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"HX8-U50H-M 2.26N\xb7m"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/Fashionstar/Fashion%20Star_U50H_Datasheet_EN_V1.1.08.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"RX8-U50H-M 2.26N\xb7m"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/Fashionstar/Fashion%20Star_U15H_Datasheet_EN_V1.1.08.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"HP6-U15H-M 0.59N\xb7m"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/Fashionstar/Fashion%20Star_U15H_Datasheet_EN_V1.1.08.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"RP6-U15H-M 0.59N\xb7m "})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/Fashionstar/Fashion%20Star_U25(H)_Datasheet_EN_V1.1.08.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"HA8-U25H-M 0.88N\xb7m  "})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/Fashionstar/Fashion%20Star_U25(H)_Datasheet_EN_V1.1.08.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"RA8-U25H-M 0.88N\xb7m "})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/Fashionstar/Fashion%20Star_U100H_Datasheet_EN_V1.1.08.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"RX18-U100H-M 4.9N\xb7m "})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/Fashionstar/UC01_Datasheet_EN_V1.1.07.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"TTL-USB\u30B3\u30F3\u30D0\u30FC\u30BF\u30FC UC-01 "})}),(0,r.jsx)(a.h2,{id:"sdk",children:"SDK"}),(0,r.jsx)("a",{href:"https://github.com/servodevelop/fashionstar-uart-servo-arduino",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Arduino"})}),(0,r.jsx)("a",{href:"https://github.com/servodevelop/fashionstar-uart-servo-python",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Python"})}),(0,r.jsx)("a",{href:"https://github.com/servodevelop/fashionstar-uart-servo-cpp",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Cpp"})}),(0,r.jsx)("a",{href:"https://github.com/servodevelop/fashionstar-uart-servo-stm32f407",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Stm32f407"})}),(0,r.jsx)("a",{href:"https://github.com/servodevelop/fashionstar-uart-servo-stm32f103",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Stm32f103"})}),(0,r.jsx)("a",{href:"https://github.com/servodevelop/servo-uart-rs485-sdk",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Uart-Rs485"})}),(0,r.jsx)("a",{href:"https://github.com/servodevelop/fashionstar-uart-servo-micropython-esp32",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Esp32"})}),(0,r.jsx)("a",{href:"https://github.com/servodevelop/fashionstar-uart-servo-ros1",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Ros1"})}),(0,r.jsx)(a.h2,{id:"\u5BF8\u6CD5",children:"\u5BF8\u6CD5"}),(0,r.jsx)("a",{href:"https://github.com/servodevelop/servo-dimension",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"\u30E2\u30C7\u30EB"})}),(0,r.jsx)(a.h2,{id:"\u30C7\u30D0\u30C3\u30B0\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2",children:"\u30C7\u30D0\u30C3\u30B0\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2"}),(0,r.jsx)("a",{href:"https://fashionrobo.com/wp-content/uploads/download/Develop-US_1.1.9.271.zip",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Develop-US"})}),(0,r.jsx)(a.h2,{id:"\u6280\u8853\u6587\u66F8",children:"\u6280\u8853\u6587\u66F8"}),(0,r.jsx)("a",{href:"https://fashionrobo.com/techdoc/",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"\u6280\u8853\u6587\u66F8"})})]})}),"\n",(0,r.jsx)(a.h2,{id:"\u6280\u8853\u30B5\u30DD\u30FC\u30C8--\u88FD\u54C1\u30C7\u30A3\u30B9\u30AB\u30C3\u30B7\u30E7\u30F3",children:"\u6280\u8853\u30B5\u30DD\u30FC\u30C8 & \u88FD\u54C1\u30C7\u30A3\u30B9\u30AB\u30C3\u30B7\u30E7\u30F3"}),"\n",(0,r.jsx)(a.p,{children:"\u79C1\u305F\u3061\u306E\u88FD\u54C1\u3092\u304A\u9078\u3073\u3044\u305F\u3060\u304D\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01\u79C1\u305F\u3061\u306F\u3001\u304A\u5BA2\u69D8\u306E\u88FD\u54C1\u4F53\u9A13\u304C\u53EF\u80FD\u306A\u9650\u308A\u30B9\u30E0\u30FC\u30BA\u306B\u306A\u308B\u3088\u3046\u3001\u3055\u307E\u3056\u307E\u306A\u30B5\u30DD\u30FC\u30C8\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002\u7570\u306A\u308B\u597D\u307F\u3084\u30CB\u30FC\u30BA\u306B\u5BFE\u5FDC\u3059\u308B\u305F\u3081\u3001\u8907\u6570\u306E\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,r.jsxs)("div",{class:"button_tech_support_container",children:[(0,r.jsx)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.jsx)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})]}),"\n",(0,r.jsxs)("div",{class:"button_tech_support_container",children:[(0,r.jsx)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.jsx)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})]}),"\n",(0,r.jsx)("style",{children:`
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

`}),"\n",(0,r.jsx)("style",{children:`

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
`})]})}function l(e={}){let{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},71184(e,a,t){t.d(a,{R:()=>i,x:()=>n});var s=t(14041);let r={},o=s.createContext(r);function i(e){let a=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);