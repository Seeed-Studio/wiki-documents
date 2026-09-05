"use strict";(self.webpackChunkwiki_ja=self.webpackChunkwiki_ja||[]).push([["78707"],{69292(e,a,s){s.r(a),s.d(a,{metadata:()=>n,default:()=>m,frontMatter:()=>d,contentTitle:()=>t,toc:()=>l,assets:()=>r});var n=JSON.parse('{"id":"Network/ja_LoRa_Antenna_Selection_Guide","title":"LoRa \u30A2\u30F3\u30C6\u30CA\u9078\u629E\u30AC\u30A4\u30C9","description":"SenseCAP \u30B7\u30EA\u30FC\u30BA\u88FD\u54C1\u304A\u3088\u3073\u4E92\u63DB\u6027\u306E\u3042\u308B Seeed Studio LoRa \u30C7\u30D0\u30A4\u30B9\u3092\u8CFC\u5165\u307E\u305F\u306F\u5C55\u958B\u3059\u308B\u969B\u306B\u3001\u5468\u6CE2\u6570\u3001\u5229\u5F97\u3001\u30B3\u30CD\u30AF\u30BF\u3001\u5909\u63DB\u30B1\u30FC\u30D6\u30EB\u3001\u5BFE\u5FDC\u30C7\u30D0\u30A4\u30B9\u5225\u306B\u30A2\u30F3\u30C6\u30CA\u3092\u6BD4\u8F03\u3057\u307E\u3059\u3002","source":"@site/docs/Network/ja_LoRa_Antenna_Selection_Guide.md","sourceDirName":"Network","slug":"/lora_antenna_selection_guide","permalink":"/ja/lora_antenna_selection_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/ja/docs/Network/ja_LoRa_Antenna_Selection_Guide.md","tags":[],"version":"current","lastUpdatedBy":"Yves","lastUpdatedAt":1782691200000,"sidebarPosition":0,"frontMatter":{"description":"SenseCAP \u30B7\u30EA\u30FC\u30BA\u88FD\u54C1\u304A\u3088\u3073\u4E92\u63DB\u6027\u306E\u3042\u308B Seeed Studio LoRa \u30C7\u30D0\u30A4\u30B9\u3092\u8CFC\u5165\u307E\u305F\u306F\u5C55\u958B\u3059\u308B\u969B\u306B\u3001\u5468\u6CE2\u6570\u3001\u5229\u5F97\u3001\u30B3\u30CD\u30AF\u30BF\u3001\u5909\u63DB\u30B1\u30FC\u30D6\u30EB\u3001\u5BFE\u5FDC\u30C7\u30D0\u30A4\u30B9\u5225\u306B\u30A2\u30F3\u30C6\u30CA\u3092\u6BD4\u8F03\u3057\u307E\u3059\u3002","title":"LoRa \u30A2\u30F3\u30C6\u30CA\u9078\u629E\u30AC\u30A4\u30C9","image":"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png","slug":"/lora_antenna_selection_guide","sidebar_position":0,"last_update":{"date":"2026-06-29T00:00:00.000Z","author":"Yves"},"createdAt":"2026-06-29","updatedAt":"2026-07-09","url":"https://wiki.seeedstudio.com/ja/lora_antenna_selection_guide/"},"sidebar":"jaSidebar","previous":{"title":"The Things Indoor Gateway","permalink":"/ja/The-Things-Indoor-Gateway"},"next":{"title":"XIAO \u5411\u3051 Wi-Fi HaLow \u30E2\u30B8\u30E5\u30FC\u30EB\u5165\u9580","permalink":"/ja/getting_started_with_wifi_halow_module_for_xiao"}}'),i=s(31085),c=s(71184);let d={description:"SenseCAP \u30B7\u30EA\u30FC\u30BA\u88FD\u54C1\u304A\u3088\u3073\u4E92\u63DB\u6027\u306E\u3042\u308B Seeed Studio LoRa \u30C7\u30D0\u30A4\u30B9\u3092\u8CFC\u5165\u307E\u305F\u306F\u5C55\u958B\u3059\u308B\u969B\u306B\u3001\u5468\u6CE2\u6570\u3001\u5229\u5F97\u3001\u30B3\u30CD\u30AF\u30BF\u3001\u5909\u63DB\u30B1\u30FC\u30D6\u30EB\u3001\u5BFE\u5FDC\u30C7\u30D0\u30A4\u30B9\u5225\u306B\u30A2\u30F3\u30C6\u30CA\u3092\u6BD4\u8F03\u3057\u307E\u3059\u3002",title:"LoRa \u30A2\u30F3\u30C6\u30CA\u9078\u629E\u30AC\u30A4\u30C9",image:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",slug:"/lora_antenna_selection_guide",sidebar_position:0,last_update:{date:new Date("2026-06-29T00:00:00.000Z"),author:"Yves"},createdAt:"2026-06-29",updatedAt:"2026-07-09",url:"https://wiki.seeedstudio.com/ja/lora_antenna_selection_guide/"},t,r={},l=[{value:"\u30AF\u30A4\u30C3\u30AF\u30AC\u30A4\u30C9",id:"\u30AF\u30A4\u30C3\u30AF\u30AC\u30A4\u30C9",level:2},{value:"\u5BFE\u5FDC\u30C7\u30D0\u30A4\u30B9\uFF08\u4EE3\u8868\u4F8B\uFF09",id:"\u5BFE\u5FDC\u30C7\u30D0\u30A4\u30B9\u4EE3\u8868\u4F8B",level:2},{value:"\u30A2\u30F3\u30C6\u30CA\u6982\u8981",id:"\u30A2\u30F3\u30C6\u30CA\u6982\u8981",level:2},{value:"860\u301C930MHz \u30A2\u30F3\u30C6\u30CA",id:"860930mhz-\u30A2\u30F3\u30C6\u30CA",level:3},{value:"\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA",id:"\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA",level:4},{value:"\u30ED\u30C3\u30C9\u30A2\u30F3\u30C6\u30CA",id:"\u30ED\u30C3\u30C9\u30A2\u30F3\u30C6\u30CA",level:4},{value:"\u5C4B\u5185\u7528\u30A2\u30F3\u30C6\u30CA",id:"\u5C4B\u5185\u7528\u30A2\u30F3\u30C6\u30CA",level:4},{value:"2.4 GHz \u304A\u3088\u3073 5 GHz \u30A2\u30F3\u30C6\u30CA",id:"24-ghz-\u304A\u3088\u3073-5-ghz-\u30A2\u30F3\u30C6\u30CA",level:3},{value:"RF \u30B1\u30FC\u30D6\u30EB",id:"rf-\u30B1\u30FC\u30D6\u30EB",level:2}];function o(e){let a={admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"\u3053\u306E\u30AC\u30A4\u30C9\u306F\u3001SenseCAP \u30B7\u30EA\u30FC\u30BA\u88FD\u54C1\u304A\u3088\u3073\u4E92\u63DB\u6027\u306E\u3042\u308B Seeed Studio LoRa \u30C7\u30D0\u30A4\u30B9\u3092\u8CFC\u5165\u307E\u305F\u306F\u5C55\u958B\u3059\u308B\u969B\u306B\u3001\u9069\u5207\u306A\u4EA4\u63DB\u7528\u30A2\u30F3\u30C6\u30CA\u3092\u9078\u629E\u3059\u308B\u306E\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002\u30A2\u30F3\u30C6\u30CA\u306E\u5468\u6CE2\u6570\u5E2F\u3001\u30B3\u30CD\u30AF\u30BF\u306E\u7A2E\u985E\u3001\u5FC5\u8981\u306A RF \u30B1\u30FC\u30D6\u30EB\u3001\u5BFE\u5FDC\u30C7\u30D0\u30A4\u30B9\u3001\u304A\u3088\u3073\u5B9F\u8DF5\u7684\u306A\u9078\u5B9A\u306E\u30D2\u30F3\u30C8\u3092\u5305\u62EC\u7684\u306B\u307E\u3068\u3081\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,i.jsx)(a.p,{children:"\u307E\u305A\u3001\u30C7\u30D0\u30A4\u30B9\u306E\u5468\u6CE2\u6570\u5E2F\u306B\u5408\u3063\u305F\u30A2\u30F3\u30C6\u30CA\u3092\u9078\u3073\u3001\u305D\u306E\u5F8C\u3067\u30C7\u30D0\u30A4\u30B9\u304C\u76F4\u63A5\u63A5\u7D9A\u7528\u30B3\u30CD\u30AF\u30BF\u3092\u5FC5\u8981\u3068\u3059\u308B\u306E\u304B\u3001\u5909\u63DB\u30B1\u30FC\u30D6\u30EB\u3092\u5FC5\u8981\u3068\u3059\u308B\u306E\u304B\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"2.4/5 GHz \u30A2\u30F3\u30C6\u30CA\u3092 868/915 MHz LoRa \u30DD\u30FC\u30C8\u306B\u63A5\u7D9A\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u9069\u5207\u306A\u30A2\u30F3\u30C6\u30CA\u304C\u63A5\u7D9A\u3055\u308C\u3066\u3044\u306A\u3044\u72B6\u614B\u3067\u9001\u4FE1\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002"})}),"\n",(0,i.jsx)("style",{children:`
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
`}),"\n",(0,i.jsx)(a.h2,{id:"\u30AF\u30A4\u30C3\u30AF\u30AC\u30A4\u30C9",children:"\u30AF\u30A4\u30C3\u30AF\u30AC\u30A4\u30C9"}),"\n",(0,i.jsx)(a.p,{children:"\u4EE5\u4E0B\u306E\u56F3\u306F\u3001\u5404\u7A2E\u30C7\u30D0\u30A4\u30B9\u3092\u30A2\u30F3\u30C6\u30CA\u304A\u3088\u3073\u5909\u63DB\u30B1\u30FC\u30D6\u30EB\u3068\u3069\u306E\u3088\u3046\u306B\u7D44\u307F\u5408\u308F\u305B\u308B\u3079\u304D\u304B\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,i.jsxs)("div",{className:"ipex-guide ipex-guide--compact",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png",alt:"Wio-E5 Dev Board"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-E5 Dev Board"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png",alt:"Wio-E5 mini"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-E5 mini"})]})]}),(0,i.jsx)("b",{children:"SMA \u30DD\u30FC\u30C8\u3092\u5099\u3048\u305F\u30C7\u30D0\u30A4\u30B9"}),(0,i.jsx)("span",{children:"Wio-E5 Dev Board \u307E\u305F\u306F Wio-E5 mini"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png",alt:"2.8 dBi Long Range Antenna"})}),(0,i.jsx)("span",{className:"path-device-name",children:"2.8 dBi 868 MHz"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"2.6 dBi Long Range Antenna"})}),(0,i.jsx)("span",{className:"path-device-name",children:"2.6 dBi 915 MHz"})]})]}),(0,i.jsx)("b",{children:"SMA \u30AA\u30B9\u30A2\u30F3\u30C6\u30CA\u306E\u9078\u629E\u80A2"}),(0,i.jsx)("span",{children:"SKU 318020269 \u307E\u305F\u306F SKU 318020389"})]})]}),"\n",(0,i.jsxs)("div",{className:"ipex-guide",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png",alt:"Wio-SX1262"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-SX1262"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg",alt:"Wio Tracker L1 Pro"})}),(0,i.jsx)("span",{className:"path-device-name",children:"L1 Pro"})]})]}),(0,i.jsx)("b",{children:"I-PEX \u30BD\u30B1\u30C3\u30C8\u3092\u5099\u3048\u305F\u30C7\u30D0\u30A4\u30B9"}),(0,i.jsx)("span",{children:"Wio-SX1262 \u307E\u305F\u306F Wio Tracker L1 Pro"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png",alt:"SMA-to-I-PEX antenna cable"})}),(0,i.jsx)("b",{children:"SMA-to-I-PEX \u30A2\u30F3\u30C6\u30CA\u30B1\u30FC\u30D6\u30EB"}),(0,i.jsx)("span",{children:"120 mm \xb7 SKU 321990397"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"SMA male LoRa antenna"})}),(0,i.jsx)("b",{children:"SMA \u30AA\u30B9\u30A2\u30F3\u30C6\u30CA"}),(0,i.jsx)("span",{children:"868 MHz SKU 318020269 \u307E\u305F\u306F 915 MHz SKU 318020389"})]})]}),"\n",(0,i.jsxs)("div",{className:"band-note",children:[(0,i.jsx)("strong",{children:"\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA\u30AD\u30C3\u30C8\u306B\u306F\u3001\u901A\u5E38\u3059\u3067\u306B\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u7528 RF \u30B1\u30FC\u30D6\u30EB\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002"}),"SKU 318020613 \u306E\u3088\u3046\u306A N \u578B\u30B3\u30CD\u30AF\u30BF\u4ED8\u304D\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA\u5358\u4F53\u3092\u9078\u3076\u5834\u5408\u306B\u306E\u307F\u3001\u5225\u9014\u30B1\u30FC\u30D6\u30EB\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)("div",{className:"ipex-guide",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png",alt:"SenseCAP Solar Node P1 and P1-Pro"})}),(0,i.jsx)("span",{className:"path-device-name",children:"P1 / P1-Pro"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Indoor Gateway"})}),(0,i.jsx)("span",{className:"path-device-name",children:"SenseCAP M1"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png",alt:"SenseCAP M2 Data Only Hotspot"})}),(0,i.jsx)("span",{className:"path-device-name",children:"SenseCAP M2"})]})]}),(0,i.jsx)("b",{children:"RP-SMA \u30DD\u30FC\u30C8\u3092\u5099\u3048\u305F\u30C7\u30D0\u30A4\u30B9"}),(0,i.jsx)("span",{children:"P1 / P1-Pro\u3001SenseCAP M1\u3001\u307E\u305F\u306F SenseCAP M2"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png",alt:"RP-SMA to N-Type RF cable"})}),(0,i.jsx)("b",{children:"RP-SMA \u304B\u3089 N \u578B RF \u30B1\u30FC\u30D6\u30EB"}),(0,i.jsx)("span",{children:"300 mm \xb7 SKU 100007236"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",alt:"N-type fiberglass antenna"})}),(0,i.jsx)("b",{children:"\u30D9\u30FC\u30B9\u306A\u3057\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA"}),(0,i.jsx)("span",{children:"\u4F8B\uFF1ASKU 318020613"})]})]}),"\n",(0,i.jsx)(a.h2,{id:"\u5BFE\u5FDC\u30C7\u30D0\u30A4\u30B9\u4EE3\u8868\u4F8B",children:"\u5BFE\u5FDC\u30C7\u30D0\u30A4\u30B9\uFF08\u4EE3\u8868\u4F8B\uFF09"}),"\n",(0,i.jsx)(a.p,{children:"\u4EE5\u4E0B\u306E\u30C7\u30D0\u30A4\u30B9\u306F\u4EE3\u8868\u7684\u306A\u4F8B\u306B\u3059\u304E\u307E\u305B\u3093\u3002\u4ED6\u306E SenseCAP \u3084 Seeed Studio \u30C7\u30D0\u30A4\u30B9\u306B\u3064\u3044\u3066\u3082\u3001\u540C\u3058\u9078\u5B9A\u30ED\u30B8\u30C3\u30AF\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u307E\u305A\u30A2\u30F3\u30C6\u30CA\u5468\u6CE2\u6570\u3092\u4E00\u81F4\u3055\u305B\u3001\u305D\u306E\u5F8C\u3001\u30C7\u30D0\u30A4\u30B9\u304C\u76F4\u63A5 SMA/RP-SMA \u63A5\u7D9A\u3092\u5FC5\u8981\u3068\u3059\u308B\u306E\u304B\u3001\u3042\u308B\u3044\u306F\u5909\u63DB\u30B1\u30FC\u30D6\u30EB\u3092\u5FC5\u8981\u3068\u3059\u308B\u306E\u304B\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsxs)("div",{className:"device-grid",children:[(0,i.jsxs)("a",{className:"device-card",href:"/ja/LoRa_E5_Dev_Board/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png",alt:"Wio-E5 Development Kit"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-E5 Dev Board"}),(0,i.jsx)("span",{children:"\u76F4\u63A5 SMA \u30A2\u30F3\u30C6\u30CA"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/ja/LoRa_E5_mini/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png",alt:"Wio-E5 mini"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-E5 mini"}),(0,i.jsx)("span",{children:"\u76F4\u63A5 SMA \u30A2\u30F3\u30C6\u30CA"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/ja/wio_sx1262/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png",alt:"Wio-SX1262 module"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-SX1262"}),(0,i.jsx)("span",{children:"120 mm SMA-to-I-PEX \u30B1\u30FC\u30D6\u30EB\uFF08321990397\uFF09\u2192 SMA \u30A2\u30F3\u30C6\u30CA"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/ja/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Indoor Gateway"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"SenseCAP M1 Gateway"}),(0,i.jsx)("span",{children:"RP-SMA \u30B1\u30FC\u30D6\u30EB \u2192 \u30D9\u30A2 N \u578B\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/ja/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png",alt:"SenseCAP M2 Data Only Hotspot"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"SenseCAP M2 Data Only"}),(0,i.jsx)("span",{children:"RP-SMA \u30B1\u30FC\u30D6\u30EB \u2192 \u30D9\u30A2 N \u578B\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/ja/meshtastic_solar_node/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png",alt:"SenseCAP Solar Node P1 and P1-Pro"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Solar Node P1 / P1-Pro"}),(0,i.jsx)("span",{children:"RP-SMA \u30B1\u30FC\u30D6\u30EB \u2192 \u30D9\u30A2 N \u578B\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/ja/wio_tracker_l1_node/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg",alt:"Wio Tracker L1 Pro"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio Tracker L1 Pro"}),(0,i.jsx)("span",{children:"120 mm SMA-to-I-PEX \u30B1\u30FC\u30D6\u30EB\uFF08321990397\uFF09\u2192 SMA \u30A2\u30F3\u30C6\u30CA"})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"\u30A2\u30F3\u30C6\u30CA\u6982\u8981",children:"\u30A2\u30F3\u30C6\u30CA\u6982\u8981"}),"\n",(0,i.jsx)(a.h3,{id:"860930mhz-\u30A2\u30F3\u30C6\u30CA",children:"860\u301C930MHz \u30A2\u30F3\u30C6\u30CA"}),"\n",(0,i.jsx)(a.p,{children:"\u3053\u308C\u3089\u306E\u30A2\u30F3\u30C6\u30CA\u306F\u3001\u30B5\u30D6 GHz \u306E LoRa\u3001LoRaWAN\u3001\u304A\u3088\u3073 Meshtastic \u30C7\u30D0\u30A4\u30B9\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u88FD\u54C1\u306F\u30A2\u30F3\u30C6\u30CA\u306E\u5F62\u72B6\u3054\u3068\u306B\u30B0\u30EB\u30FC\u30D7\u5316\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u9AD8\u5229\u5F97\u306E\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA\u3001\u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u30ED\u30C3\u30C9\u30A2\u30F3\u30C6\u30CA\u3001\u5C4B\u5185\u7528\u30DE\u30B0\u30CD\u30C3\u30C8\u30D9\u30FC\u30B9\u30A2\u30F3\u30C6\u30CA\u306E\u3069\u308C\u304C\u5FC5\u8981\u304B\u3092\u7D20\u65E9\u304F\u5224\u65AD\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsx)(a.h4,{id:"\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA",children:"\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA"}),"\n",(0,i.jsx)(a.p,{children:"\u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA\u306F\u3001\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u3001\u5C4B\u6839\u306B\u8A2D\u7F6E\u3055\u308C\u305F\u30CE\u30FC\u30C9\u3001\u305D\u306E\u4ED6\u5C4B\u5916\u3067\u306E\u901A\u4FE1\u8DDD\u96E2\u3092\u5411\u4E0A\u3055\u305B\u308B\u5FC5\u8981\u304C\u3042\u308B\u56FA\u5B9A\u8A2D\u7F6E\u5411\u3051\u306B\u9078\u3070\u308C\u308B\u3053\u3068\u304C\u591A\u3044\u3067\u3059\u3002\u30C7\u30D0\u30A4\u30B9\u306B\u5FC5\u8981\u306A RF \u30B1\u30FC\u30D6\u30EB\u304C\u3059\u3067\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u304B\u3001RP-SMA \u304B\u3089 N \u578B\u3078\u306E\u30B1\u30FC\u30D6\u30EB\u304C\u5225\u9014\u5FC5\u8981\u304B\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/_/-/_-min_1_2.png",alt:"3 dBi fiberglass antenna kit with magnetic base"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"3 dBi \u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020652"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5468\u6CE2\u6570"}),"902\u301C928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5229\u5F97"}),"3 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"360 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u540C\u68B1\u7269"}),"\u30DE\u30B0\u30CD\u30C3\u30C8\u30D9\u30FC\u30B9"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u63A5\u7D9A\u5148\uFF1A"}),"SenseCAP M1 Indoor Gateway\u3002\u4ED8\u5C5E\u306E\u30D9\u30FC\u30B9\u306F\u53EF\u642C\u307E\u305F\u306F\u4E00\u6642\u7684\u306A\u8A2D\u7F6E\u306B\u9069\u3057\u3066\u3044\u307E\u3059\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-902-928MHz-3dBi-with-Antenna-Base-p-5130.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020691__1_.jpg",alt:"5.8 dBi fiberglass antenna kit"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"5.8 dBi \u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020691"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5468\u6CE2\u6570"}),"902\u301C928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5229\u5F97"}),"5.8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"800 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u540C\u68B1\u7269"}),"1 m CFD200 + \u30D6\u30E9\u30B1\u30C3\u30C8"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u63A5\u7D9A\u5148\uFF1A"}),"\u4ED8\u5C5E\u306E RP-SMA \u30B1\u30FC\u30D6\u30EB\u3092\u4ECB\u3057\u3066 SenseCAP M1 Gateway \u304A\u3088\u3073 Solar Node P1/P1-Pro \u306B\u63A5\u7D9A\u3057\u307E\u3059\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",alt:"7 dBi fiberglass antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"7 dBi \u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020613"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5468\u6CE2\u6570"}),"900\u301C930 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5229\u5F97"}),"7 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"920 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u540C\u68B1\u7269"}),"\u30A2\u30F3\u30C6\u30CA\u672C\u4F53\u306E\u307F"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u63A5\u7D9A\u5148\uFF1A"}),"\u4ED8\u5C5E\u306E RP-SMA \u30B1\u30FC\u30D6\u30EB\u3092\u4ECB\u3057\u3066 SenseCAP M1 Gateway \u304A\u3088\u3073 Solar Node P1/P1-Pro \u306B\u63A5\u7D9A\u3057\u307E\u3059\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/Lora-Fiberglass-Antenna-900-930MHz-7dBi-920mm-p-4926.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020693__1_3.jpg",alt:"8 dBi fiberglass antenna kit"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"8 dBi \u30AC\u30E9\u30B9\u7E4A\u7DAD\u30A2\u30F3\u30C6\u30CA"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020693"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5468\u6CE2\u6570"}),"902\u301C928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5229\u5F97"}),"8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"1300 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u540C\u68B1\u7269"}),"1 m CFD200 + \u30D6\u30E9\u30B1\u30C3\u30C8"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u63A5\u7D9A\u5148\uFF1A"}),"\u4ED8\u5C5E\u306E RP-SMA \u30B1\u30FC\u30D6\u30EB\u3092\u4ECB\u3057\u3066 SenseCAP M1 Gateway \u304A\u3088\u3073 Solar Node P1/P1-Pro \u306B\u63A5\u7D9A\u3057\u307E\u3059\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-928MHz-8dBi-1300mm-p-5278.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"\u30ED\u30C3\u30C9\u30A2\u30F3\u30C6\u30CA",children:"\u30ED\u30C3\u30C9\u30A2\u30F3\u30C6\u30CA"}),"\n",(0,i.jsx)(a.p,{children:"\u30ED\u30C3\u30C9\u30A2\u30F3\u30C6\u30CA\u306F\u3001\u958B\u767A\u30DC\u30FC\u30C9\u3084\u30DD\u30FC\u30BF\u30D6\u30EB LoRa \u30C7\u30D0\u30A4\u30B9\u5411\u3051\u306E\u30B3\u30F3\u30D1\u30AF\u30C8\u306A SMA \u30A2\u30F3\u30C6\u30CA\u3067\u3059\u3002I-PEX \u30A2\u30F3\u30C6\u30CA\u30BD\u30B1\u30C3\u30C8\u3092\u5099\u3048\u305F\u30C7\u30D0\u30A4\u30B9\u3067\u306F\u3001\u3053\u308C\u3089\u306E\u30A2\u30F3\u30C6\u30CA\u3092\u4F7F\u7528\u3059\u308B\u524D\u306B 120 mm SMA-to-I-PEX \u30A2\u30F3\u30C6\u30CA\u30B1\u30FC\u30D6\u30EB\uFF08SKU 321990397\uFF09\u304C\u5FC5\u8981\u3067\u3059\u3002"}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png",alt:"868 MHz 2.8 dBi SMA antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.8 dBi \u30ED\u30F3\u30B0\u30EC\u30F3\u30B8\u30A2\u30F3\u30C6\u30CA"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020269"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5468\u6CE2\u6570"}),"868 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5229\u5F97"}),"2.8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"195 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u30B3\u30CD\u30AF\u30BF"}),"SMA \u30AA\u30B9"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u63A5\u7D9A\u5148\uFF1A"}),"Wio-E5 Dev Board \u307E\u305F\u306F Wio-E5 mini \u306B\u306F\u76F4\u63A5\u63A5\u7D9A\u3001Wio-SX1262 \u307E\u305F\u306F Wio Tracker L1 Pro \u306B\u306F 120 mm SMA-to-I-PEX \u30A2\u30F3\u30C6\u30CA\u30B1\u30FC\u30D6\u30EB\uFF08SKU 321990397\uFF09\u3092\u4ECB\u3057\u3066\u63A5\u7D9A\u3057\u307E\u3059\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/External-Antenna-868MHz-L195mm-black-folding-antena-With-Male-SMA-J-p-5045.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"915 MHz 2.6 dBi SMA antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.6 dBi \u9577\u8DDD\u96E2\u30A2\u30F3\u30C6\u30CA"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020389"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5468\u6CE2\u6570"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5229\u5F97"}),"2.6 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"195 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u30B3\u30CD\u30AF\u30BF"}),"SMA \u30AA\u30B9"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u63A5\u7D9A\u5BFE\u8C61\uFF1A"}),"Wio-E5 Dev Board \u307E\u305F\u306F Wio-E5 mini \u306B\u76F4\u63A5\u63A5\u7D9A\u3001Wio-SX1262 \u307E\u305F\u306F Wio Tracker L1 Pro \u306B\u306F 120 mm SMA-to-I-PEX \u30A2\u30F3\u30C6\u30CA\u30B1\u30FC\u30D6\u30EB\uFF08SKU 321990397\uFF09\u7D4C\u7531\u3067\u63A5\u7D9A\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"\u5C4B\u5185\u7528\u30A2\u30F3\u30C6\u30CA",children:"\u5C4B\u5185\u7528\u30A2\u30F3\u30C6\u30CA"}),"\n",(0,i.jsx)(a.p,{children:"\u5C4B\u5185\u7528\u30A2\u30F3\u30C6\u30CA\u306F\u3001\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u3001\u30E9\u30A4\u30C8\u30DB\u30C3\u30C8\u30B9\u30DD\u30C3\u30C8\u3001\u307E\u305F\u306F\u4E00\u6642\u7684\u306A\u5C4B\u5185\u8A2D\u7F6E\u306B\u9069\u3057\u3066\u304A\u308A\u3001\u56FA\u5B9A\u5F0F\u306E\u5C4B\u5916\u30DE\u30A6\u30F3\u30C8\u3088\u308A\u3082\u78C1\u6C17\u30D9\u30FC\u30B9\u306E\u65B9\u304C\u4FBF\u5229\u306A\u5834\u5408\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsx)("div",{className:"antenna-grid",children:(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/1/110991765_feature-02.jpg",alt:"860-930 MHz indoor antenna with magnetic base"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"3 dBi \u5C4B\u5185\u7528"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 110991765"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5468\u6CE2\u6570"}),"860-930 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5229\u5F97"}),"3 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"295 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u30DE\u30A6\u30F3\u30C8"}),"\u78C1\u6C17\u30D9\u30FC\u30B9"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u63A5\u7D9A\u5BFE\u8C61\uFF1A"}),"SenseCAP M2 Data Only Hotspot \u304A\u3088\u3073 SenseCAP M2 Light Hotspot\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]})}),"\n",(0,i.jsx)(a.h3,{id:"24-ghz-\u304A\u3088\u3073-5-ghz-\u30A2\u30F3\u30C6\u30CA",children:"2.4 GHz \u304A\u3088\u3073 5 GHz \u30A2\u30F3\u30C6\u30CA"}),"\n",(0,i.jsx)("div",{className:"band-note",children:(0,i.jsx)("strong",{children:"\u3053\u308C\u3089\u306E\u88FD\u54C1\u306F 868/915 MHz LoRa \u7528\u3067\u306F\u306A\u304F\u3001BLE/Wi-Fi \u7528\u3067\u3059\u3002"})}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg",alt:"2.4 GHz FPC antenna for XIAO nRF54L15"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.4 GHz FPC \u30A2\u30F3\u30C6\u30CA A-04"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 100039813"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5468\u6CE2\u6570"}),"2.4 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5229\u5F97"}),"1.86 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u30B3\u30CD\u30AF\u30BF"}),"I-PEX 4"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u30B1\u30FC\u30D6\u30EB"}),"50 mm"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u76F4\u63A5\u63A5\u7D9A\u5BFE\u8C61\uFF1A"}),"XIAO nRF54L15\uFF08BLE\u3001Matter\u3001Thread\u3001Zigbee \u7528\uFF09\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/1-103990623-2.4ghz-rod-antenna-for-xiao-esp32c3-45font.jpg",alt:"2.4GHz rod antenna for Seeed Studio XIAO"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Seeed Studio XIAO \u7528 2.4GHz \u30ED\u30C3\u30C9\u30A2\u30F3\u30C6\u30CA"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 103990623"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5468\u6CE2\u6570"}),"2.4 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5229\u5F97"}),"2.81 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u30BF\u30A4\u30D7"}),"\u30ED\u30C3\u30C9\u30A2\u30F3\u30C6\u30CA"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u57FA\u677F\u5074\u7AEF\u5B50"}),"I-PEX"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u76F4\u63A5\u63A5\u7D9A\u5BFE\u8C61\uFF1A"}),"Seeed Studio XIAO ESP32C3\u3001XIAO ESP32C6\u3001XIAO ESP32S3 (Sense) \u306E 2.4 GHz \u7121\u7DDA\u901A\u4FE1\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg",alt:"2.4 and 5 GHz external antenna set"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.4G/5G \u5916\u4ED8\u3051\u30A2\u30F3\u30C6\u30CA\u30BB\u30C3\u30C8"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 114993587"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5468\u6CE2\u6570"}),"2.4 / 5 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u5916\u90E8\u5074\u7AEF\u5B50"}),"RP-SMA \u30AA\u30B9"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u30B1\u30FC\u30D6\u30EB"}),"1.13 \u540C\u8EF8"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"130 mm"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u7528\u9014\uFF1A"}),"RTL8822CE/RTL8852BE Wi-Fi NIC \u30AD\u30C3\u30C8\u304A\u3088\u3073 reComputer J4012 \u3092\u542B\u3080\u4E92\u63DB reComputer Jetson \u30B7\u30B9\u30C6\u30E0\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"rf-\u30B1\u30FC\u30D6\u30EB",children:"RF \u30B1\u30FC\u30D6\u30EB"}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png",alt:"SMA to I-PEX antenna cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"SMA - I-PEX \u30A2\u30F3\u30C6\u30CA\u30B1\u30FC\u30D6\u30EB"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 321990397"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"120 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u7AEF\u5B50"}),"I-PEX \u2192 SMA"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u7528\u9014\uFF1A"}),"Wio-SX1262 \u307E\u305F\u306F Wio Tracker L1 Pro \u306E I-PEX \u30BD\u30B1\u30C3\u30C8 \u2192 SMA \u30AA\u30B9\u30ED\u30C3\u30C9\u30A2\u30F3\u30C6\u30CA\u3002\u3053\u306E\u30B1\u30FC\u30D6\u30EB\u306F\u3001\u5C0F\u578B\u306E\u57FA\u677F\u5074 I-PEX \u63A5\u7D9A\u3092\u3001\u7B50\u4F53\u306B\u53D6\u308A\u4ED8\u3051\u3084\u3059\u3044 SMA \u30BD\u30B1\u30C3\u30C8\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990875_feature-02.jpg",alt:"CFD400 N Female to RP-SMA Male cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"CFD400 \u30B2\u30FC\u30C8\u30A6\u30A7\u30A4 RF \u30B1\u30FC\u30D6\u30EB"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 321990875 / 876 / 877"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"1 m / 3 m / 5 m"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u7AEF\u5B50"}),"N \u30E1\u30B9 \u2192 RP-SMA \u30AA\u30B9"]})]}),(0,i.jsxs)(a.p,{children:[(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u7528\u9014\uFF1A"}),"SenseCAP M1 \u5C4B\u5185\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u307E\u305F\u306F SenseCAP ONE \u5C4B\u5916\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4 \u2192 N \u578B\u30B0\u30E9\u30B9\u30D5\u30A1\u30A4\u30D0\u30FC\u30A2\u30F3\u30C6\u30CA\u3002\u4F7F\u7528\u3059\u308B\u9577\u3055\u306F\u3001\u53EF\u80FD\u306A\u9650\u308A\u77ED\u304F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-1m-p-5322.html",children:"1 m"})," \xb7 ",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-3m-p-5320.html",children:"3 m"})," \xb7 ",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-5m-p-5321.html",children:"5 m"})]})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png",alt:"RP-SMA Male to N-Type Female RF cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"RP-SMA - N \u578B RF \u30B1\u30FC\u30D6\u30EB"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 100007236"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u9577\u3055"}),"300 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"\u7AEF\u5B50"}),"RP-SMA \u30AA\u30B9 \u2192 N \u30E1\u30B9"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"\u7528\u9014\uFF1A"}),"Solar Node P1/P1-Pro\u3001SenseCAP M1\u3001SenseCAP M2 \u2192 \u88F8\u306E N \u578B\u30B0\u30E9\u30B9\u30D5\u30A1\u30A4\u30D0\u30FC\u30A2\u30F3\u30C6\u30CA\u3002"]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-RP-SMA-Male-to-N-Type-SMA-Female-300mm.html",children:"\u88FD\u54C1\u3092\u898B\u308B \u2192"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},71184(e,a,s){s.d(a,{R:()=>d,x:()=>t});var n=s(14041);let i={},c=n.createContext(i);function d(e){let a=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(c.Provider,{value:a},e.children)}}}]);