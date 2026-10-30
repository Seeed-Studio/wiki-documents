"use strict";(self.webpackChunkwiki_zh_CN=self.webpackChunkwiki_zh_CN||[]).push([["64542"],{65669(e,a,s){s.r(a),s.d(a,{metadata:()=>n,default:()=>m,frontMatter:()=>d,contentTitle:()=>t,toc:()=>l,assets:()=>r});var n=JSON.parse('{"id":"Network/cn_LoRa_Antenna_Selection_Guide","title":"LoRa \u5929\u7EBF\u9009\u578B\u6307\u5357","description":"\u6309\u9891\u6BB5\u3001\u589E\u76CA\u3001\u8FDE\u63A5\u5668\u3001\u8F6C\u63A5\u7EBF\u7F06\u548C\u517C\u5BB9\u8BBE\u5907\u5BF9 Seeed Studio \u5929\u7EBF\u8FDB\u884C\u5BF9\u6BD4\u3002","source":"@site/docs/Network/cn_LoRa_Antenna_Selection_Guide.md","sourceDirName":"Network","slug":"/lora_antenna_selection_guide","permalink":"/cn/lora_antenna_selection_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/zh-CN/docs/Network/cn_LoRa_Antenna_Selection_Guide.md","tags":[],"version":"current","lastUpdatedBy":"Yves","lastUpdatedAt":1782691200000,"sidebarPosition":0,"frontMatter":{"description":"\u6309\u9891\u6BB5\u3001\u589E\u76CA\u3001\u8FDE\u63A5\u5668\u3001\u8F6C\u63A5\u7EBF\u7F06\u548C\u517C\u5BB9\u8BBE\u5907\u5BF9 Seeed Studio \u5929\u7EBF\u8FDB\u884C\u5BF9\u6BD4\u3002","title":"LoRa \u5929\u7EBF\u9009\u578B\u6307\u5357","image":"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png","slug":"/lora_antenna_selection_guide","sidebar_position":0,"last_update":{"date":"2026-06-29T00:00:00.000Z","author":"Yves"},"createdAt":"2026-06-29","updatedAt":"2026-07-09","url":"https://wiki.seeedstudio.com/cn/lora_antenna_selection_guide/"},"sidebar":"CNSidebar","previous":{"title":"The Things Indoor Gateway","permalink":"/cn/The-Things-Indoor-Gateway"},"next":{"title":"XIAO Wi-Fi HaLow \u6A21\u7EC4\u5FEB\u901F\u4E0A\u624B","permalink":"/cn/getting_started_with_wifi_halow_module_for_xiao"}}'),i=s(31085),c=s(71184);let d={description:"\u6309\u9891\u6BB5\u3001\u589E\u76CA\u3001\u8FDE\u63A5\u5668\u3001\u8F6C\u63A5\u7EBF\u7F06\u548C\u517C\u5BB9\u8BBE\u5907\u5BF9 Seeed Studio \u5929\u7EBF\u8FDB\u884C\u5BF9\u6BD4\u3002",title:"LoRa \u5929\u7EBF\u9009\u578B\u6307\u5357",image:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",slug:"/lora_antenna_selection_guide",sidebar_position:0,last_update:{date:new Date("2026-06-29T00:00:00.000Z"),author:"Yves"},createdAt:"2026-06-29",updatedAt:"2026-07-09",url:"https://wiki.seeedstudio.com/cn/lora_antenna_selection_guide/"},t,r={},l=[{value:"\u5FEB\u901F\u6307\u5357",id:"\u5FEB\u901F\u6307\u5357",level:2},{value:"\u517C\u5BB9\u8BBE\u5907\uFF08\u90E8\u5206\u793A\u4F8B\uFF09",id:"\u517C\u5BB9\u8BBE\u5907\u90E8\u5206\u793A\u4F8B",level:2},{value:"\u5929\u7EBF\u603B\u89C8",id:"\u5929\u7EBF\u603B\u89C8",level:2},{value:"860-930MHz \u5929\u7EBF",id:"860-930mhz-\u5929\u7EBF",level:3},{value:"\u73BB\u7483\u94A2\u5929\u7EBF",id:"\u73BB\u7483\u94A2\u5929\u7EBF",level:4},{value:"\u68D2\u72B6\u5929\u7EBF",id:"\u68D2\u72B6\u5929\u7EBF",level:4},{value:"\u5BA4\u5185\u5929\u7EBF",id:"\u5BA4\u5185\u5929\u7EBF",level:4},{value:"2.4 GHz \u548C 5 GHz \u5929\u7EBF",id:"24-ghz-\u548C-5-ghz-\u5929\u7EBF",level:3},{value:"\u5C04\u9891\u7EBF\u7F06",id:"\u5C04\u9891\u7EBF\u7F06",level:2}];function o(e){let a={admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"\u672C\u6307\u5357\u5E2E\u52A9\u7528\u6237\u5728\u8D2D\u4E70\u6216\u90E8\u7F72 SenseCAP \u7CFB\u5217\u4EA7\u54C1\u53CA\u517C\u5BB9\u7684 Seeed Studio LoRa \u8BBE\u5907\u65F6\uFF0C\u9009\u62E9\u5408\u9002\u7684\u66FF\u6362\u5929\u7EBF\u3002\u6587\u4E2D\u63D0\u4F9B\u4E86\u5929\u7EBF\u9891\u6BB5\u3001\u8FDE\u63A5\u5668\u7C7B\u578B\u3001\u6240\u9700\u5C04\u9891\u7EBF\u7F06\u3001\u517C\u5BB9\u8BBE\u5907\u4EE5\u53CA\u5B9E\u7528\u9009\u578B\u5EFA\u8BAE\u7684\u5B8C\u6574\u6982\u89C8\u3002"}),"\n",(0,i.jsx)(a.p,{children:"\u9996\u5148\u9009\u62E9\u4E0E\u8BBE\u5907\u9891\u6BB5\u5339\u914D\u7684\u5929\u7EBF\uFF0C\u7136\u540E\u68C0\u67E5\u8BBE\u5907\u662F\u9700\u8981\u76F4\u63A5\u8FDE\u63A5\u5668\u8FD8\u662F\u9700\u8981\u8F6C\u63A5\u7EBF\u7F06\u3002"}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"\u4E0D\u8981\u5C06 2.4/5 GHz \u5929\u7EBF\u8FDE\u63A5\u5230 868/915 MHz LoRa \u7AEF\u53E3\u3002\u5207\u52FF\u5728\u672A\u8FDE\u63A5\u5408\u9002\u5929\u7EBF\u7684\u60C5\u51B5\u4E0B\u53D1\u5C04\u3002"})}),"\n",(0,i.jsx)("style",{children:`
.ipex-guide {
display: grid;
grid-template-columns: minmax(0, 1.25fr) auto minmax(0, 1fr) auto minmax(0, 1fr);
align-items: center;
gap: 12px;
margin: 18px 0 32px;
padding: 16px;
border: 1px solid #20a162;
border-radius: 8px;
text-align: center;
background: var(--ifm-background-surface-color);
}
.ipex-guide--compact {
grid-template-columns: minmax(280px, 420px) auto minmax(280px, 420px);
justify-content: center;
}
.ipex-card {
border: 1px solid var(--ifm-table-border-color);
border-radius: 8px;
padding: 12px;
min-width: 0;
background: #fff;
}
.ipex-card-image {
height: 148px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
}
.ipex-card-image--device {
height: 188px;
}
.ipex-card-image img {
max-width: 100%;
max-height: 100%;
object-fit: contain;
}
.path-device-grid {
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: 8px;
margin-bottom: 10px;
}
.path-device-grid--two {
grid-template-columns: repeat(2, minmax(0, 1fr));
}
.path-device {
min-width: 0;
}
.path-device-thumb {
height: 74px;
display: flex;
align-items: center;
justify-content: center;
padding: 6px;
border-radius: 6px;
background: #fff;
border: 1px solid var(--ifm-table-border-color);
}
.path-device-thumb img {
width: 100%;
height: 100%;
object-fit: contain;
}
.path-device-name {
display: block;
margin-top: 6px;
font-size: 11px;
line-height: 1.35;
}
.ipex-guide b {
display: block;
font-size: 13px;
}
.ipex-guide span {
color: var(--ifm-color-content-secondary);
font-size: 12px;
}
.ipex-arrow {
color: #20a162;
font-size: 22px;
font-weight: 700;
}
.device-grid {
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
gap: 12px;
margin: 18px 0 34px;
}
.device-card {
border: 1px solid var(--ifm-table-border-color);
border-radius: 8px;
overflow: hidden;
background: var(--ifm-background-surface-color);
color: var(--ifm-font-color-base);
text-decoration: none;
min-width: 0;
}
.device-card:hover {
color: var(--ifm-font-color-base);
text-decoration: none;
border-color: #20a162;
}
.device-card-image {
height: 150px;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
background: #fff;
}
.device-card-image img {
width: 100%;
height: 100%;
object-fit: contain;
}
.device-card-body {
min-height: 110px;
padding: 12px;
}
.device-card-body strong {
display: block;
min-height: 42px;
font-size: 14px;
line-height: 1.4;
}
.device-card-body span {
display: block;
color: var(--ifm-color-content-secondary);
font-size: 12px;
line-height: 1.45;
}
.antenna-grid {
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 16px;
margin: 18px 0 34px;
}
.antenna-card {
border: 1px solid var(--ifm-table-border-color);
border-radius: 8px;
overflow: hidden;
background: var(--ifm-background-surface-color);
min-width: 0;
}
.antenna-card-image {
height: 230px;
display: flex;
align-items: center;
justify-content: center;
padding: 12px;
background: #fff;
}
.antenna-card-image img {
width: 100%;
height: 100%;
object-fit: contain;
}
.antenna-card-body {
padding: 16px;
}
.antenna-card-body h3 {
font-size: 18px;
line-height: 1.35;
margin: 0 0 8px;
}
.antenna-sku {
display: inline-block;
padding: 3px 8px;
margin-bottom: 12px;
border-radius: 4px;
background: #e7f6ee;
color: #176b45;
font-size: 12px;
font-weight: 700;
}
.antenna-specs {
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
border-top: 1px solid var(--ifm-table-border-color);
border-left: 1px solid var(--ifm-table-border-color);
margin-bottom: 12px;
}
.antenna-spec {
padding: 8px;
border-right: 1px solid var(--ifm-table-border-color);
border-bottom: 1px solid var(--ifm-table-border-color);
font-size: 13px;
}
.antenna-spec b {
display: block;
color: var(--ifm-color-content-secondary);
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
}
.antenna-connect {
margin: 0 0 12px;
font-size: 14px;
line-height: 1.55;
}
.antenna-connect b {
color: #176b45;
}
.antenna-link {
font-weight: 700;
}
.band-note {
border: 1px solid #d8a100;
border-radius: 6px;
padding: 12px 14px;
margin-bottom: 18px;
background: #fff8dc;
color: #513f00;
}
html[data-theme='dark'] .antenna-sku {
background: #173d2d;
color: #83deb1;
}
html[data-theme='dark'] .band-note {
background: #332b12;
color: #f4dc82;
}
html[data-theme='dark'] .ipex-card,
html[data-theme='dark'] .path-device-thumb {
background: #182028;
}
@media (max-width: 768px) {
.antenna-grid {
  grid-template-columns: 1fr;
}
.device-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.ipex-guide {
  grid-template-columns: 1fr;
}
.ipex-arrow {
  transform: rotate(90deg);
  justify-self: center;
}
.ipex-card-image {
  height: 180px;
}
.antenna-card-image {
  height: 210px;
}
}
`}),"\n",(0,i.jsx)(a.h2,{id:"\u5FEB\u901F\u6307\u5357",children:"\u5FEB\u901F\u6307\u5357"}),"\n",(0,i.jsx)(a.p,{children:"\u4E0B\u56FE\u5C55\u793A\u4E86\u4E0D\u540C\u8BBE\u5907\u5E94\u5982\u4F55\u4E0E\u5929\u7EBF\u548C\u8F6C\u63A5\u7EBF\u7F06\u8FDB\u884C\u5339\u914D\u3002"}),"\n",(0,i.jsxs)("div",{className:"ipex-guide ipex-guide--compact",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png",alt:"Wio-E5 Dev Board"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-E5 \u5F00\u53D1\u677F"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png",alt:"Wio-E5 mini"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-E5 mini"})]})]}),(0,i.jsx)("b",{children:"\u5E26 SMA \u7AEF\u53E3\u7684\u8BBE\u5907"}),(0,i.jsx)("span",{children:"Wio-E5 \u5F00\u53D1\u677F\u6216 Wio-E5 mini"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png",alt:"2.8 dBi Long Range Antenna"})}),(0,i.jsx)("span",{className:"path-device-name",children:"2.8 dBi 868 MHz"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"2.6 dBi Long Range Antenna"})}),(0,i.jsx)("span",{className:"path-device-name",children:"2.6 dBi 915 MHz"})]})]}),(0,i.jsx)("b",{children:"SMA \u516C\u5934\u5929\u7EBF\u9009\u9879"}),(0,i.jsx)("span",{children:"SKU 318020269 \u6216 SKU 318020389"})]})]}),"\n",(0,i.jsxs)("div",{className:"ipex-guide",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png",alt:"Wio-SX1262"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-SX1262"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg",alt:"Wio Tracker L1 Pro"})}),(0,i.jsx)("span",{className:"path-device-name",children:"L1 Pro"})]})]}),(0,i.jsx)("b",{children:"\u5E26 I-PEX \u5EA7\u5B50\u7684\u8BBE\u5907"}),(0,i.jsx)("span",{children:"Wio-SX1262 \u6216 Wio Tracker L1 Pro"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png",alt:"SMA-to-I-PEX antenna cable"})}),(0,i.jsx)("b",{children:"SMA-to-I-PEX \u5929\u7EBF\u7EBF\u7F06"}),(0,i.jsx)("span",{children:"120 mm \xb7 SKU 321990397"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"SMA male LoRa antenna"})}),(0,i.jsx)("b",{children:"SMA \u516C\u5934\u5929\u7EBF"}),(0,i.jsx)("span",{children:"868 MHz SKU 318020269 \u6216 915 MHz SKU 318020389"})]})]}),"\n",(0,i.jsxs)("div",{className:"band-note",children:[(0,i.jsx)("strong",{children:"\u73BB\u7483\u94A2\u5929\u7EBF\u5957\u4EF6\u901A\u5E38\u5DF2\u7ECF\u5305\u542B\u7F51\u5173\u5C04\u9891\u7EBF\u7F06\u3002"})," \u53EA\u6709\u5728\u9009\u62E9\u8BF8\u5982 SKU 318020613 \u8FD9\u7C7B\u88F8 N \u578B\u73BB\u7483\u94A2\u5929\u7EBF\u65F6\uFF0C\u624D\u4E3B\u8981\u9700\u8981\u989D\u5916\u6DFB\u52A0\u7EBF\u7F06\u3002"]}),"\n",(0,i.jsxs)("div",{className:"ipex-guide",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png",alt:"SenseCAP Solar Node P1 and P1-Pro"})}),(0,i.jsx)("span",{className:"path-device-name",children:"P1 / P1-Pro"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Indoor Gateway"})}),(0,i.jsx)("span",{className:"path-device-name",children:"SenseCAP M1"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png",alt:"SenseCAP M2 Data Only Hotspot"})}),(0,i.jsx)("span",{className:"path-device-name",children:"SenseCAP M2"})]})]}),(0,i.jsx)("b",{children:"\u5E26 RP-SMA \u63A5\u53E3\u7684\u8BBE\u5907"}),(0,i.jsx)("span",{children:"P1 / P1-Pro\u3001SenseCAP M1 \u6216 SenseCAP M2"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png",alt:"RP-SMA to N-Type RF cable"})}),(0,i.jsx)("b",{children:"RP-SMA \u8F6C N \u578B\u5C04\u9891\u7EBF\u7F06"}),(0,i.jsx)("span",{children:"300 mm \xb7 SKU 100007236"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",alt:"N-type fiberglass antenna"})}),(0,i.jsx)("b",{children:"\u65E0\u5E95\u5EA7\u73BB\u7483\u94A2\u5929\u7EBF"}),(0,i.jsx)("span",{children:"\u793A\u4F8B\uFF1ASKU 318020613"})]})]}),"\n",(0,i.jsx)(a.h2,{id:"\u517C\u5BB9\u8BBE\u5907\u90E8\u5206\u793A\u4F8B",children:"\u517C\u5BB9\u8BBE\u5907\uFF08\u90E8\u5206\u793A\u4F8B\uFF09"}),"\n",(0,i.jsx)(a.p,{children:"\u4E0B\u9762\u5217\u51FA\u7684\u8BBE\u5907\u53EA\u662F\u5177\u6709\u4EE3\u8868\u6027\u7684\u793A\u4F8B\u3002\u5BF9\u4E8E\u5176\u4ED6 SenseCAP \u6216 Seeed Studio \u8BBE\u5907\uFF0C\u8BF7\u4F7F\u7528\u76F8\u540C\u7684\u9009\u62E9\u903B\u8F91\uFF1A\u5148\u5339\u914D\u5929\u7EBF\u9891\u7387\uFF0C\u7136\u540E\u786E\u8BA4\u8BBE\u5907\u662F\u9700\u8981\u76F4\u63A5 SMA/RP-SMA \u8FDE\u63A5\u8FD8\u662F\u9700\u8981\u8F6C\u63A5\u7EBF\u7F06\u3002"}),"\n",(0,i.jsxs)("div",{className:"device-grid",children:[(0,i.jsxs)("a",{className:"device-card",href:"/cn/LoRa_E5_Dev_Board/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png",alt:"Wio-E5 Development Kit"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-E5 Dev Board"}),(0,i.jsx)("span",{children:"\u76F4\u63A5\u4F7F\u7528 SMA \u5929\u7EBF"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/cn/LoRa_E5_mini/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png",alt:"Wio-E5 mini"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-E5 mini"}),(0,i.jsx)("span",{children:"\u76F4\u63A5\u4F7F\u7528 SMA \u5929\u7EBF"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/cn/wio_sx1262/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png",alt:"Wio-SX1262 module"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-SX1262"}),(0,i.jsx)("span",{children:"120 mm SMA \u8F6C I-PEX \u7EBF\u7F06 (321990397) \u2192 SMA \u5929\u7EBF"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/cn/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Indoor Gateway"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"SenseCAP M1 Gateway"}),(0,i.jsx)("span",{children:"RP-SMA \u7EBF\u7F06 \u2192 \u88F8 N \u578B\u73BB\u7483\u94A2\u5929\u7EBF"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/cn/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png",alt:"SenseCAP M2 Data Only Hotspot"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"SenseCAP M2 Data Only"}),(0,i.jsx)("span",{children:"RP-SMA \u7EBF\u7F06 \u2192 \u88F8 N \u578B\u73BB\u7483\u94A2\u5929\u7EBF"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/cn/meshtastic_solar_node/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png",alt:"SenseCAP Solar Node P1 and P1-Pro"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Solar Node P1 / P1-Pro"}),(0,i.jsx)("span",{children:"RP-SMA \u7EBF\u7F06 \u2192 \u88F8 N \u578B\u73BB\u7483\u94A2\u5929\u7EBF"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/cn/wio_tracker_l1_node/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg",alt:"Wio Tracker L1 Pro"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio Tracker L1 Pro"}),(0,i.jsx)("span",{children:"120 mm SMA \u8F6C I-PEX \u7EBF\u7F06 (321990397) \u2192 SMA \u5929\u7EBF"})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"\u5929\u7EBF\u603B\u89C8",children:"\u5929\u7EBF\u603B\u89C8"}),"\n",(0,i.jsx)(a.h3,{id:"860-930mhz-\u5929\u7EBF",children:"860-930MHz \u5929\u7EBF"}),"\n",(0,i.jsx)(a.p,{children:"\u8FD9\u4E9B\u5929\u7EBF\u9002\u7528\u4E8E\u4E9A GHz \u9891\u6BB5\u7684 LoRa\u3001LoRaWAN \u548C Meshtastic \u8BBE\u5907\u3002\u4E0B\u9762\u7684\u4EA7\u54C1\u6309\u5929\u7EBF\u5916\u5F62\u5206\u7EC4\uFF0C\u65B9\u4FBF\u4F60\u5FEB\u901F\u51B3\u5B9A\u662F\u9700\u8981\u9AD8\u589E\u76CA\u73BB\u7483\u94A2\u5929\u7EBF\u3001\u7D27\u51D1\u578B\u68D2\u72B6\u5929\u7EBF\uFF0C\u8FD8\u662F\u5BA4\u5185\u78C1\u5438\u5E95\u5EA7\u5929\u7EBF\u3002"}),"\n",(0,i.jsx)(a.h4,{id:"\u73BB\u7483\u94A2\u5929\u7EBF",children:"\u73BB\u7483\u94A2\u5929\u7EBF"}),"\n",(0,i.jsx)(a.p,{children:"\u73BB\u7483\u94A2\u5929\u7EBF\u901A\u5E38\u7528\u4E8E\u7F51\u5173\u3001\u5C4B\u9876\u8282\u70B9\u4EE5\u53CA\u5176\u4ED6\u9700\u8981\u66F4\u597D\u5BA4\u5916\u8986\u76D6\u8303\u56F4\u7684\u56FA\u5B9A\u5B89\u88C5\u573A\u666F\u3002\u8BF7\u68C0\u67E5\u8BBE\u5907\u662F\u5426\u5DF2\u7ECF\u5305\u542B\u6240\u9700\u7684\u5C04\u9891\u7EBF\u7F06\uFF0C\u6216\u8005\u4F60\u662F\u5426\u9700\u8981\u4E00\u6839 RP-SMA \u8F6C N \u578B\u7EBF\u7F06\u3002"}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/_/-/_-min_1_2.png",alt:"3 dBi fiberglass antenna kit with magnetic base"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"3 dBi \u73BB\u7483\u94A2\u5929\u7EBF"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020652"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9891\u7387"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u589E\u76CA"}),"3 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"360 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5305\u542B"}),"\u78C1\u5438\u5E95\u5EA7"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u53EF\u8FDE\u63A5\u8BBE\u5907\uFF1A"}),"SenseCAP M1 \u5BA4\u5185\u7F51\u5173\u3002\u968F\u9644\u7684\u5E95\u5EA7\u9002\u5408\u53EF\u79FB\u52A8\u6216\u4E34\u65F6\u5B89\u88C5\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-902-928MHz-3dBi-with-Antenna-Base-p-5130.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020691__1_.jpg",alt:"5.8 dBi fiberglass antenna kit"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"5.8 dBi \u73BB\u7483\u94A2\u5929\u7EBF"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020691"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9891\u7387"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u589E\u76CA"}),"5.8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"800 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5305\u542B"}),"1 m CFD200 + \u652F\u67B6"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u53EF\u8FDE\u63A5\u8BBE\u5907\uFF1A"}),"\u901A\u8FC7\u968F\u9644\u7684 RP-SMA \u7EBF\u7F06\u8FDE\u63A5 SenseCAP M1 Gateway \u548C Solar Node P1/P1-Pro\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",alt:"7 dBi fiberglass antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"7 dBi \u73BB\u7483\u94A2\u5929\u7EBF"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020613"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9891\u7387"}),"900-930 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u589E\u76CA"}),"7 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"920 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5305\u542B"}),"\u4EC5\u5929\u7EBF"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u53EF\u8FDE\u63A5\u8BBE\u5907\uFF1A"}),"\u901A\u8FC7\u968F\u9644\u7684 RP-SMA \u7EBF\u7F06\u8FDE\u63A5 SenseCAP M1 Gateway \u548C Solar Node P1/P1-Pro\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/Lora-Fiberglass-Antenna-900-930MHz-7dBi-920mm-p-4926.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020693__1_3.jpg",alt:"8 dBi fiberglass antenna kit"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"8 dBi \u73BB\u7483\u94A2\u5929\u7EBF"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020693"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9891\u7387"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u589E\u76CA"}),"8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"1300 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5305\u542B"}),"1 m CFD200 + \u652F\u67B6"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u53EF\u8FDE\u63A5\u8BBE\u5907\uFF1A"}),"\u901A\u8FC7\u968F\u9644\u7684 RP-SMA \u7EBF\u7F06\u8FDE\u63A5 SenseCAP M1 Gateway \u548C Solar Node P1/P1-Pro\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-928MHz-8dBi-1300mm-p-5278.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"\u68D2\u72B6\u5929\u7EBF",children:"\u68D2\u72B6\u5929\u7EBF"}),"\n",(0,i.jsx)(a.p,{children:"\u68D2\u72B6\u5929\u7EBF\u662F\u7528\u4E8E\u5F00\u53D1\u677F\u548C\u4FBF\u643A\u5F0F LoRa \u8BBE\u5907\u7684\u7D27\u51D1\u578B SMA \u5929\u7EBF\u3002\u5E26\u6709 I-PEX \u5929\u7EBF\u5EA7\u7684\u8BBE\u5907\uFF0C\u5728\u4F7F\u7528\u8FD9\u4E9B\u5929\u7EBF\u524D\u9700\u8981\u914D\u5408 120 mm SMA \u8F6C I-PEX \u5929\u7EBF\u7EBF\u7F06\uFF08SKU 321990397\uFF09\u3002"}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png",alt:"868 MHz 2.8 dBi SMA antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.8 dBi \u8FDC\u8DDD\u79BB\u5929\u7EBF"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020269"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9891\u7387"}),"868 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u589E\u76CA"}),"2.8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"195 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u63A5\u53E3"}),"SMA \u516C\u5934"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u53EF\u8FDE\u63A5\u8BBE\u5907\uFF1A"}),"\u76F4\u63A5\u8FDE\u63A5 Wio-E5 Dev Board \u6216 Wio-E5 mini\uFF1B\u901A\u8FC7 120 mm SMA \u8F6C I-PEX \u5929\u7EBF\u7EBF\u7F06\uFF08SKU 321990397\uFF09\u8FDE\u63A5 Wio-SX1262 \u6216 Wio Tracker L1 Pro\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/External-Antenna-868MHz-L195mm-black-folding-antena-With-Male-SMA-J-p-5045.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"915 MHz 2.6 dBi SMA antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.6 dBi \u8FDC\u8DDD\u79BB\u5929\u7EBF"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020389"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9891\u7387"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u589E\u76CA"}),"2.6 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"195 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u8FDE\u63A5\u5668"}),"SMA \u516C\u5934"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u8FDE\u63A5\u5230\uFF1A"}),"\u53EF\u76F4\u63A5\u8FDE\u63A5 Wio-E5 Dev Board \u6216 Wio-E5 mini\uFF1B\u901A\u8FC7 120 mm SMA-to-I-PEX \u5929\u7EBF\u7EBF\u7F06\uFF08SKU 321990397\uFF09\u8FDE\u63A5 Wio-SX1262 \u6216 Wio Tracker L1 Pro\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"\u5BA4\u5185\u5929\u7EBF",children:"\u5BA4\u5185\u5929\u7EBF"}),"\n",(0,i.jsx)(a.p,{children:"\u5BA4\u5185\u5929\u7EBF\u9002\u7528\u4E8E\u684C\u9762\u7F51\u5173\u3001\u8F7B\u70ED\u70B9\uFF0C\u6216\u4E34\u65F6\u5BA4\u5185\u653E\u7F6E\u7684\u573A\u666F\uFF0C\u6B64\u65F6\u78C1\u5438\u5E95\u5EA7\u6BD4\u56FA\u5B9A\u7684\u5BA4\u5916\u5B89\u88C5\u66F4\u65B9\u4FBF\u3002"}),"\n",(0,i.jsx)("div",{className:"antenna-grid",children:(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/1/110991765_feature-02.jpg",alt:"860-930 MHz indoor antenna with magnetic base"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"3 dBi \u5BA4\u5185\u5929\u7EBF"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 110991765"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9891\u7387"}),"860-930 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u589E\u76CA"}),"3 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"295 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5B89\u88C5\u65B9\u5F0F"}),"\u78C1\u5438\u5E95\u5EA7"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u8FDE\u63A5\u5230\uFF1A"}),"SenseCAP M2 Data Only Hotspot \u548C SenseCAP M2 Light Hotspot\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]})}),"\n",(0,i.jsx)(a.h3,{id:"24-ghz-\u548C-5-ghz-\u5929\u7EBF",children:"2.4 GHz \u548C 5 GHz \u5929\u7EBF"}),"\n",(0,i.jsx)("div",{className:"band-note",children:(0,i.jsx)("strong",{children:"\u8FD9\u4E9B\u4EA7\u54C1\u7528\u4E8E BLE/Wi-Fi\uFF0C\u800C\u4E0D\u662F 868/915 MHz LoRa\u3002"})}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg",alt:"2.4 GHz FPC antenna for XIAO nRF54L15"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.4 GHz FPC \u5929\u7EBF A-04"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 100039813"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9891\u7387"}),"2.4 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u589E\u76CA"}),"1.86 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u8FDE\u63A5\u5668"}),"I-PEX 4"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u7EBF\u7F06"}),"50 mm"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u76F4\u63A5\u8FDE\u63A5\u5230\uFF1A"}),"\u7528\u4E8E BLE\u3001Matter\u3001Thread \u6216 Zigbee \u7684 XIAO nRF54L15\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/1-103990623-2.4ghz-rod-antenna-for-xiao-esp32c3-45font.jpg",alt:"2.4GHz rod antenna for Seeed Studio XIAO"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"\u9002\u7528\u4E8E Seeed Studio XIAO \u7684 2.4GHz \u68D2\u72B6\u5929\u7EBF"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 103990623"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9891\u7387"}),"2.4 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u589E\u76CA"}),"2.81 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u7C7B\u578B"}),"\u68D2\u72B6\u5929\u7EBF"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u677F\u7AEF"}),"I-PEX"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u76F4\u63A5\u8FDE\u63A5\u5230\uFF1A"}),"Seeed Studio XIAO ESP32C3\u3001XIAO ESP32C6 \u548C XIAO ESP32S3\uFF08Sense\uFF09\uFF0C\u7528\u4E8E 2.4 GHz \u65E0\u7EBF\u901A\u4FE1\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg",alt:"2.4 and 5 GHz external antenna set"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.4G/5G \u5916\u7F6E\u5929\u7EBF\u5957\u88C5"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 114993587"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9891\u7387"}),"2.4 / 5 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5916\u7AEF"}),"RP-SMA \u516C\u5934"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u7EBF\u7F06"}),"1.13 \u540C\u8F74"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"130 mm"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u9002\u7528\u4E8E\uFF1A"}),"RTL8822CE/RTL8852BE Wi-Fi \u7F51\u5361\u5957\u4EF6\u548C\u517C\u5BB9\u7684 reComputer Jetson \u7CFB\u7EDF\uFF0C\u5305\u62EC reComputer J4012\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"\u5C04\u9891\u7EBF\u7F06",children:"\u5C04\u9891\u7EBF\u7F06"}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png",alt:"SMA to I-PEX antenna cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"SMA \u8F6C I-PEX \u5929\u7EBF\u7EBF\u7F06"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 321990397"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"120 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u4E24\u7AEF"}),"I-PEX \u2192 SMA"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u9002\u7528\u4E8E\uFF1A"}),"Wio-SX1262 \u6216 Wio Tracker L1 Pro I-PEX \u63D2\u5EA7 \u2192 SMA \u516C\u5934\u68D2\u72B6\u5929\u7EBF\u3002\u8BE5\u7EBF\u7F06\u5C06\u5C0F\u578B\u677F\u7AEF I-PEX \u8FDE\u63A5\u8F6C\u6362\u4E3A\u9002\u5408\u5916\u58F3\u5B89\u88C5\u7684 SMA \u63D2\u5EA7\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990875_feature-02.jpg",alt:"CFD400 N Female to RP-SMA Male cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"CFD400 \u7F51\u5173\u5C04\u9891\u7EBF\u7F06"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 321990875 / 876 / 877"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"1 m / 3 m / 5 m"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u4E24\u7AEF"}),"N \u6BCD\u5934 \u2192 RP-SMA \u516C\u5934"]})]}),(0,i.jsxs)(a.p,{children:[(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u9002\u7528\u4E8E\uFF1A"}),"SenseCAP M1 \u5BA4\u5185\u7F51\u5173\u6216 SenseCAP ONE \u5BA4\u5916\u7F51\u5173 \u2192 N \u578B\u73BB\u7483\u94A2\u5929\u7EBF\u3002\u8BF7\u4F7F\u7528\u5C3D\u53EF\u80FD\u77ED\u7684\u53EF\u7528\u957F\u5EA6\u3002"]}),"\n",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-1m-p-5322.html",children:"1 m"})," \xb7 ",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-3m-p-5320.html",children:"3 m"})," \xb7 ",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-5m-p-5321.html",children:"5 m"})]})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png",alt:"RP-SMA Male to N-Type Female RF cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"RP-SMA \u8F6C N \u578B\u5C04\u9891\u7EBF\u7F06"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 100007236"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u957F\u5EA6"}),"300 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u4E24\u7AEF"}),"RP-SMA \u516C\u5934 \u2192 N \u6BCD\u5934"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u9002\u7528\u4E8E\uFF1A"}),"Solar Node P1/P1-Pro\u3001SenseCAP M1 \u6216 SenseCAP M2 \u2192 \u88F8\u9732\u7684 N \u578B\u73BB\u7483\u94A2\u5929\u7EBF\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-RP-SMA-Male-to-N-Type-SMA-Female-300mm.html",children:"\u67E5\u770B\u4EA7\u54C1 \u2192"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},71184(e,a,s){s.d(a,{R:()=>d,x:()=>t});var n=s(14041);let i={},c=n.createContext(i);function d(e){let a=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(c.Provider,{value:a},e.children)}}}]);