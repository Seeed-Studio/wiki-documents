"use strict";(self.webpackChunkwiki_pt_br=self.webpackChunkwiki_pt_br||[]).push([["36558"],{41289(e,t,a){a.r(t),a.d(t,{metadata:()=>r,default:()=>h,frontMatter:()=>c,contentTitle:()=>i,toc:()=>n,assets:()=>d});var r=JSON.parse('{"id":"Robotics/Robot_Actuator/pt_Feetech_Servo","title":"Servomotor Feetech","description":"Este wiki fornece tutoriais para servomotores Feetech.","source":"@site/docs/Robotics/Robot_Actuator/pt_Feetech_Servo.md","sourceDirName":"Robotics/Robot_Actuator","slug":"/feetech_servo","permalink":"/pt-br/feetech_servo","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/pt-BR/docs/Robotics/Robot_Actuator/pt_Feetech_Servo.md","tags":[],"version":"current","lastUpdatedBy":"Li Shanghang","lastUpdatedAt":1763942400000,"frontMatter":{"description":"Este wiki fornece tutoriais para servomotores Feetech.","title":"Servomotor Feetech","keywords":["atuador","motor","bra\xe7o","rob\xf3tica"],"image":"https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech servo all.webp","slug":"/feetech_servo","last_update":{"date":"11/24/2025","author":"Li Shanghang"},"createdAt":"2025-06-23","updatedAt":"2026-03-16","url":"https://wiki.seeedstudio.com/pt-br/feetech_servo/"},"sidebar":"ptBRSidebar","previous":{"title":"Guia Completo de Controle de Motor HighTorque","permalink":"/pt-br/hightorque_control"},"next":{"title":"Servo Motor FashionStar","permalink":"/pt-br/fashionstar_servo"}}'),o=a(31085),s=a(71184);let c={description:"Este wiki fornece tutoriais para servomotores Feetech.",title:"Servomotor Feetech",keywords:["atuador","motor","bra\xe7o","rob\xf3tica"],image:"https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech servo all.webp",slug:"/feetech_servo",last_update:{date:"11/24/2025",author:"Li Shanghang"},createdAt:"2025-06-23",updatedAt:"2026-03-16",url:"https://wiki.seeedstudio.com/pt-br/feetech_servo/"},i="Hub de Documenta\xe7\xe3o dos Servomotores Feetech",d={},n=[{value:"Ficha T\xe9cnica",id:"ficha-t\xe9cnica",level:2},{value:"SDK",id:"sdk",level:2},{value:"Software de Depura\xe7\xe3o",id:"software-de-depura\xe7\xe3o",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Suporte T\xe9cnico &amp; Discuss\xe3o de Produto",id:"suporte-t\xe9cnico--discuss\xe3o-de-produto",level:2}];function l(e){let t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"hub-de-documenta\xe7\xe3o-dos-servomotores-feetech",children:"Hub de Documenta\xe7\xe3o dos Servomotores Feetech"})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:800,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech servo all.webp",className:"nav-icon",alt:"Slamtec LiDAR"})}),"\n",(0,o.jsx)("div",{class:"get_one_now_container",style:{textAlign:"center"},children:(0,o.jsx)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/STS3215-19kg-cm-7-4V-Serial-Servo-p-6338.html",target:"_blank",children:(0,o.jsx)("strong",{children:(0,o.jsx)("span",{children:(0,o.jsx)("font",{color:"FFFFFF",size:"4",children:" Adquira Agora \u{1F5B1}"})})})})}),"\n",(0,o.jsx)("div",{class:"category-group",children:(0,o.jsxs)("div",{class:"category-card robot-kits",children:[(0,o.jsx)(t.h2,{id:"ficha-t\xe9cnica",children:"Ficha T\xe9cnica"}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/108090003_FEETECH_ST-3215-C047-Datasheet.pdf",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"ST3215-C047 12V 1:345"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/101090142_Feetech_ST-3215-C046_Datasheet.pdf",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"ST3215-C046 7.4v 1:147"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/101090141_Feetech_ST-3215-C044_Datasheet.pdf",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"ST3215-C044 7.4v 1:191"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/108090023_STS3215-C001_Datasheet.pdf",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"ST3215-C001 7.4v 1:345"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/HL-3915-C001%2012V%201%20320%20.xlsx",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"HL-3915-C001 12V 1:320 "})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/HL-3615-C002%206V%201%2096%20.xlsx",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"HL-3615-C002 6V 1:96  "})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/products/Feetech/FE-URT-1.xlsx",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"FE-URT-1  "})}),(0,o.jsx)(t.h2,{id:"sdk",children:"SDK"}),(0,o.jsx)("a",{href:"https://gitee.com/ftservo/FTServo_Arduino",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Arduino"})}),(0,o.jsx)("a",{href:"https://gitee.com/ftservo/FTServo_Python",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Python"})}),(0,o.jsx)("a",{href:"https://gitee.com/ftservo/FTServo_Linux",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Linux"})}),(0,o.jsx)("a",{href:"https://gitee.com/ftservo/FTServo_stm32HAL",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Stm32HAL"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Analysis_of_SCS_Memory_Table.xlsx",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"An\xe1lise da Tabela de Mem\xf3ria SCS"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Communication_Protocol_Manual.pdf",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Manual do Protocolo de Comunica\xe7\xe3o"})}),(0,o.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Hexadecimal_instructions_generate_tables.xlsx",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Tabelas de Gera\xe7\xe3o de Instru\xe7\xf5es Hexadecimais"})}),(0,o.jsx)(t.h2,{id:"software-de-depura\xe7\xe3o",children:"Software de Depura\xe7\xe3o"}),(0,o.jsx)("a",{href:"https://gitee.com/ftservo/fddebug",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"FDServo"})}),(0,o.jsx)(t.h2,{id:"exemplos",children:"Exemplos"}),(0,o.jsx)("a",{href:"https://wiki.seeedstudio.com/pt-br/bus_servo_driver_board/",className:"nav-item",children:(0,o.jsx)("span",{className:"text",children:"Primeiros Passos com a Placa Controladora de Servo de Barramento / Adaptador XIAO Bus Servo"})})]})}),"\n",(0,o.jsx)(t.h2,{id:"suporte-t\xe9cnico--discuss\xe3o-de-produto",children:"Suporte T\xe9cnico & Discuss\xe3o de Produto"}),"\n",(0,o.jsx)(t.p,{children:"Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experi\xeancia com nossos produtos seja a mais tranquila poss\xedvel. Oferecemos v\xe1rios canais de comunica\xe7\xe3o para atender a diferentes prefer\xeancias e necessidades."}),"\n",(0,o.jsxs)("div",{class:"button_tech_support_container",children:[(0,o.jsx)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.jsx)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})]}),"\n",(0,o.jsxs)("div",{class:"button_tech_support_container",children:[(0,o.jsx)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.jsx)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})]}),"\n",(0,o.jsx)("style",{children:`
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
`})]})}function h(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},71184(e,t,a){a.d(t,{R:()=>c,x:()=>i});var r=a(14041);let o={},s=r.createContext(o);function c(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);