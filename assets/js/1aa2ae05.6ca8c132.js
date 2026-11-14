"use strict";(self.webpackChunkwiki_en=self.webpackChunkwiki_en||[]).push([["60440"],{15119(e,a,n){n.r(a),n.d(a,{metadata:()=>s,default:()=>h,frontMatter:()=>d,contentTitle:()=>t,toc:()=>l,assets:()=>r});var s=JSON.parse('{"id":"Network/LoRa_Antenna_Selection_Guide","title":"LoRa Antenna Selection Guide","description":"Compare Seeed Studio antennas by frequency, gain, connector, adapter cable, and compatible device.","source":"@site/docs/Network/LoRa_Antenna_Selection_Guide.md","sourceDirName":"Network","slug":"/lora_antenna_selection_guide","permalink":"/lora_antenna_selection_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/en/docs/Network/LoRa_Antenna_Selection_Guide.md","tags":[],"version":"current","lastUpdatedBy":"Yves","lastUpdatedAt":1782691200000,"sidebarPosition":0,"frontMatter":{"description":"Compare Seeed Studio antennas by frequency, gain, connector, adapter cable, and compatible device.","title":"LoRa Antenna Selection Guide","image":"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png","slug":"/lora_antenna_selection_guide","sidebar_position":0,"last_update":{"date":"2026-06-29T00:00:00.000Z","author":"Yves"},"createdAt":"2026-06-29","updatedAt":"2026-07-09","url":"https://wiki.seeedstudio.com/lora_antenna_selection_guide/"},"sidebar":"ProductSidebar","previous":{"title":"The Things Indoor Gateway","permalink":"/The-Things-Indoor-Gateway"},"next":{"title":"Getting Started with Wi-Fi HaLow Module for XIAO","permalink":"/getting_started_with_wifi_halow_module_for_xiao"}}'),i=n(31085),c=n(71184);let d={description:"Compare Seeed Studio antennas by frequency, gain, connector, adapter cable, and compatible device.",title:"LoRa Antenna Selection Guide",image:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",slug:"/lora_antenna_selection_guide",sidebar_position:0,last_update:{date:new Date("2026-06-29T00:00:00.000Z"),author:"Yves"},createdAt:"2026-06-29",updatedAt:"2026-07-09",url:"https://wiki.seeedstudio.com/lora_antenna_selection_guide/"},t,r={},l=[{value:"Quick guide",id:"quick-guide",level:2},{value:"Compatible devices (selected examples)",id:"compatible-devices-selected-examples",level:2},{value:"Antenna Overview",id:"antenna-overview",level:2},{value:"860-930MHz antennas",id:"860-930mhz-antennas",level:3},{value:"Fiberglass antennas",id:"fiberglass-antennas",level:4},{value:"Rod antennas",id:"rod-antennas",level:4},{value:"Indoor antennas",id:"indoor-antennas",level:4},{value:"2.4 GHz and 5 GHz antennas",id:"24-ghz-and-5-ghz-antennas",level:3},{value:"RF cables",id:"rf-cables",level:2}];function o(e){let a={admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"This guide helps customers choose a suitable replacement antenna when purchasing or deploying SenseCAP series products and compatible Seeed Studio LoRa devices. It provides a complete overview of antenna frequency bands, connector types, required RF cables, compatible devices, and practical selection suggestions."}),"\n",(0,i.jsx)(a.p,{children:"Start by choosing an antenna that matches the device frequency band, then check whether the device needs a direct connector or an adapter cable."}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"Do not connect a 2.4/5 GHz antenna to an 868/915 MHz LoRa port. Never transmit without a suitable antenna connected."})}),"\n",(0,i.jsx)("style",{children:`
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
`}),"\n",(0,i.jsx)(a.h2,{id:"quick-guide",children:"Quick guide"}),"\n",(0,i.jsx)(a.p,{children:"The diagrams below show how different devices should be matched with antennas and adapter cables."}),"\n",(0,i.jsxs)("div",{className:"ipex-guide ipex-guide--compact",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png",alt:"Wio-E5 Dev Board"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-E5 Dev Board"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png",alt:"Wio-E5 mini"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-E5 mini"})]})]}),(0,i.jsx)("b",{children:"Devices with SMA port"}),(0,i.jsx)("span",{children:"Wio-E5 Dev Board or Wio-E5 mini"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png",alt:"2.8 dBi Long Range Antenna"})}),(0,i.jsx)("span",{className:"path-device-name",children:"2.8 dBi 868 MHz"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"2.6 dBi Long Range Antenna"})}),(0,i.jsx)("span",{className:"path-device-name",children:"2.6 dBi 915 MHz"})]})]}),(0,i.jsx)("b",{children:"SMA male antenna options"}),(0,i.jsx)("span",{children:"SKU 318020269 or SKU 318020389"})]})]}),"\n",(0,i.jsxs)("div",{className:"ipex-guide",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png",alt:"Wio-SX1262"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-SX1262"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg",alt:"Wio Tracker L1 Pro"})}),(0,i.jsx)("span",{className:"path-device-name",children:"L1 Pro"})]})]}),(0,i.jsx)("b",{children:"Devices with I-PEX socket"}),(0,i.jsx)("span",{children:"Wio-SX1262 or Wio Tracker L1 Pro"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png",alt:"SMA-to-I-PEX antenna cable"})}),(0,i.jsx)("b",{children:"SMA-to-I-PEX Antenna Cable"}),(0,i.jsx)("span",{children:"120 mm \xb7 SKU 321990397"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"SMA male LoRa antenna"})}),(0,i.jsx)("b",{children:"SMA male antenna"}),(0,i.jsx)("span",{children:"868 MHz SKU 318020269 or 915 MHz SKU 318020389"})]})]}),"\n",(0,i.jsxs)("div",{className:"band-note",children:[(0,i.jsx)("strong",{children:"Fiberglass antenna kits usually already include a gateway RF cable."})," Add a separate cable mainly when you choose a bare N-type fiberglass antenna such as SKU 318020613."]}),"\n",(0,i.jsxs)("div",{className:"ipex-guide",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png",alt:"SenseCAP Solar Node P1 and P1-Pro"})}),(0,i.jsx)("span",{className:"path-device-name",children:"P1 / P1-Pro"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Indoor Gateway"})}),(0,i.jsx)("span",{className:"path-device-name",children:"SenseCAP M1"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png",alt:"SenseCAP M2 Data Only Hotspot"})}),(0,i.jsx)("span",{className:"path-device-name",children:"SenseCAP M2"})]})]}),(0,i.jsx)("b",{children:"Devices with RP-SMA port"}),(0,i.jsx)("span",{children:"P1 / P1-Pro, SenseCAP M1, or SenseCAP M2"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png",alt:"RP-SMA to N-Type RF cable"})}),(0,i.jsx)("b",{children:"RP-SMA to N-Type RF Cable"}),(0,i.jsx)("span",{children:"300 mm \xb7 SKU 100007236"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",alt:"N-type fiberglass antenna"})}),(0,i.jsx)("b",{children:"Fiberglass antenna without base"}),(0,i.jsx)("span",{children:"Example: SKU 318020613"})]})]}),"\n",(0,i.jsx)(a.h2,{id:"compatible-devices-selected-examples",children:"Compatible devices (selected examples)"}),"\n",(0,i.jsx)(a.p,{children:"The devices below are only representative examples. For other SenseCAP or Seeed Studio devices, use the same selection logic: match the antenna frequency first, then confirm whether the device needs a direct SMA/RP-SMA connection or an adapter cable."}),"\n",(0,i.jsxs)("div",{className:"device-grid",children:[(0,i.jsxs)("a",{className:"device-card",href:"/LoRa_E5_Dev_Board/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png",alt:"Wio-E5 Development Kit"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-E5 Dev Board"}),(0,i.jsx)("span",{children:"SMA antenna directly"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/LoRa_E5_mini/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png",alt:"Wio-E5 mini"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-E5 mini"}),(0,i.jsx)("span",{children:"SMA antenna directly"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/wio_sx1262/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png",alt:"Wio-SX1262 module"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-SX1262"}),(0,i.jsx)("span",{children:"120 mm SMA-to-I-PEX cable (321990397) \u2192 SMA antenna"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Indoor Gateway"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"SenseCAP M1 Gateway"}),(0,i.jsx)("span",{children:"RP-SMA cable \u2192 bare N-type fiberglass antenna"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png",alt:"SenseCAP M2 Data Only Hotspot"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"SenseCAP M2 Data Only"}),(0,i.jsx)("span",{children:"RP-SMA cable \u2192 bare N-type fiberglass antenna"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/meshtastic_solar_node/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png",alt:"SenseCAP Solar Node P1 and P1-Pro"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Solar Node P1 / P1-Pro"}),(0,i.jsx)("span",{children:"RP-SMA cable \u2192 bare N-type fiberglass antenna"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/wio_tracker_l1_node/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg",alt:"Wio Tracker L1 Pro"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio Tracker L1 Pro"}),(0,i.jsx)("span",{children:"120 mm SMA-to-I-PEX cable (321990397) \u2192 SMA antenna"})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"antenna-overview",children:"Antenna Overview"}),"\n",(0,i.jsx)(a.h3,{id:"860-930mhz-antennas",children:"860-930MHz antennas"}),"\n",(0,i.jsx)(a.p,{children:"Use these antennas for sub-GHz LoRa, LoRaWAN, and Meshtastic devices. The products below are grouped by antenna form factor so you can quickly decide whether you need a high-gain fiberglass antenna, a compact rod antenna, or an indoor magnetic-base antenna."}),"\n",(0,i.jsx)(a.h4,{id:"fiberglass-antennas",children:"Fiberglass antennas"}),"\n",(0,i.jsx)(a.p,{children:"Fiberglass antennas are usually selected for gateways, roof-mounted nodes, and other fixed installations that need better outdoor range. Check whether the device already includes the required RF cable or whether you need an RP-SMA-to-N-type cable."}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/_/-/_-min_1_2.png",alt:"3 dBi fiberglass antenna kit with magnetic base"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"3 dBi Fiberglass Antenna"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020652"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequency"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Gain"}),"3 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Length"}),"360 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Included"}),"Magnetic base"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Connects to:"})," SenseCAP M1 Indoor Gateway. The included base is suitable for movable or temporary installation."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-902-928MHz-3dBi-with-Antenna-Base-p-5130.html",children:"View product \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020691__1_.jpg",alt:"5.8 dBi fiberglass antenna kit"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"5.8 dBi Fiberglass Antenna"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020691"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequency"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Gain"}),"5.8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Length"}),"800 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Included"}),"1 m CFD200 + bracket"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Connects to:"})," SenseCAP M1 Gateway and Solar Node P1/P1-Pro through the included RP-SMA cable."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html",children:"View product \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",alt:"7 dBi fiberglass antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"7 dBi Fiberglass Antenna"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020613"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequency"}),"900-930 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Gain"}),"7 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Length"}),"920 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Included"}),"Antenna only"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Connects to:"})," SenseCAP M1 Gateway and Solar Node P1/P1-Pro through the included RP-SMA cable."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/Lora-Fiberglass-Antenna-900-930MHz-7dBi-920mm-p-4926.html",children:"View product \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020693__1_3.jpg",alt:"8 dBi fiberglass antenna kit"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"8 dBi Fiberglass Antenna"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020693"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequency"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Gain"}),"8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Length"}),"1300 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Included"}),"1 m CFD200 + bracket"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Connects to:"})," SenseCAP M1 Gateway and Solar Node P1/P1-Pro through the included RP-SMA cable."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-928MHz-8dBi-1300mm-p-5278.html",children:"View product \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"rod-antennas",children:"Rod antennas"}),"\n",(0,i.jsx)(a.p,{children:"Rod antennas are compact SMA antennas for development boards and portable LoRa devices. Devices with an I-PEX antenna socket need the 120 mm SMA-to-I-PEX Antenna Cable (SKU 321990397) before using these antennas."}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png",alt:"868 MHz 2.8 dBi SMA antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.8 dBi Long Range Antenna"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020269"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequency"}),"868 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Gain"}),"2.8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Length"}),"195 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Connector"}),"SMA male"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Connects to:"})," Wio-E5 Dev Board or Wio-E5 mini directly; Wio-SX1262 or Wio Tracker L1 Pro through the 120 mm SMA-to-I-PEX Antenna Cable (SKU 321990397)."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/External-Antenna-868MHz-L195mm-black-folding-antena-With-Male-SMA-J-p-5045.html",children:"View product \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"915 MHz 2.6 dBi SMA antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.6 dBi Long Range Antenna"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020389"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequency"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Gain"}),"2.6 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Length"}),"195 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Connector"}),"SMA male"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Connects to:"})," Wio-E5 Dev Board or Wio-E5 mini directly; Wio-SX1262 or Wio Tracker L1 Pro through the 120 mm SMA-to-I-PEX Antenna Cable (SKU 321990397)."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html",children:"View product \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"indoor-antennas",children:"Indoor antennas"}),"\n",(0,i.jsx)(a.p,{children:"Indoor antennas are suitable for desktop gateways, light hotspots, or temporary indoor placement where a magnetic base is more convenient than a fixed outdoor mount."}),"\n",(0,i.jsx)("div",{className:"antenna-grid",children:(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/1/110991765_feature-02.jpg",alt:"860-930 MHz indoor antenna with magnetic base"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"3 dBi Indoor"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 110991765"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequency"}),"860-930 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Gain"}),"3 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Length"}),"295 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Mount"}),"Magnetic base"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Connects to:"})," SenseCAP M2 Data Only Hotspot and SenseCAP M2 Light Hotspot."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html",children:"View product \u2192"})]})]})}),"\n",(0,i.jsx)(a.h3,{id:"24-ghz-and-5-ghz-antennas",children:"2.4 GHz and 5 GHz antennas"}),"\n",(0,i.jsx)("div",{className:"band-note",children:(0,i.jsx)("strong",{children:"These products are for BLE/Wi-Fi, not 868/915 MHz LoRa."})}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg",alt:"2.4 GHz FPC antenna for XIAO nRF54L15"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.4 GHz FPC Antenna A-04"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 100039813"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequency"}),"2.4 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Gain"}),"1.86 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Connector"}),"I-PEX 4"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Cable"}),"50 mm"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Connects directly to:"})," XIAO nRF54L15 for BLE, Matter, Thread, or Zigbee."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html",children:"View product \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/1-103990623-2.4ghz-rod-antenna-for-xiao-esp32c3-45font.jpg",alt:"2.4GHz rod antenna for Seeed Studio XIAO"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.4GHz Rod Antenna for Seeed Studio XIAO"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 103990623"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequency"}),"2.4 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Gain"}),"2.81 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Type"}),"Rod antenna"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Board end"}),"I-PEX"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Connects directly to:"})," Seeed Studio XIAO ESP32C3, XIAO ESP32C6, and XIAO ESP32S3 (Sense) for 2.4 GHz wireless communication."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html",children:"View product \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg",alt:"2.4 and 5 GHz external antenna set"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"2.4G/5G External Antenna Set"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 114993587"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequency"}),"2.4 / 5 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"External end"}),"RP-SMA male"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Cable"}),"1.13 coax"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Length"}),"130 mm"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"For:"})," RTL8822CE/RTL8852BE Wi-Fi NIC kits and compatible reComputer Jetson systems, including reComputer J4012."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html",children:"View product \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"rf-cables",children:"RF cables"}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png",alt:"SMA to I-PEX antenna cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"SMA to I-PEX Antenna Cable"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 321990397"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Length"}),"120 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ends"}),"I-PEX \u2192 SMA"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"For:"})," Wio-SX1262 or Wio Tracker L1 Pro I-PEX socket \u2192 SMA male rod antenna. This cable converts the small board-side I-PEX connection to an enclosure-friendly SMA socket."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html",children:"View product \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990875_feature-02.jpg",alt:"CFD400 N Female to RP-SMA Male cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"CFD400 Gateway RF Cable"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 321990875 / 876 / 877"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Lengths"}),"1 m / 3 m / 5 m"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ends"}),"N female \u2192 RP-SMA male"]})]}),(0,i.jsxs)(a.p,{children:[(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"For:"})," SenseCAP M1 Indoor Gateway or SenseCAP ONE Outdoor Gateway \u2192 N-type fiberglass antenna. Use the shortest workable length."]}),"\n",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-1m-p-5322.html",children:"1 m"})," \xb7 ",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-3m-p-5320.html",children:"3 m"})," \xb7 ",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-5m-p-5321.html",children:"5 m"})]})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png",alt:"RP-SMA Male to N-Type Female RF cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"RP-SMA to N-Type RF Cable"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 100007236"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Length"}),"300 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ends"}),"RP-SMA male \u2192 N female"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"For:"})," Solar Node P1/P1-Pro, SenseCAP M1, or SenseCAP M2 \u2192 bare N-type fiberglass antenna."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-RP-SMA-Male-to-N-Type-SMA-Female-300mm.html",children:"View product \u2192"})]})]})]})]})}function h(e={}){let{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},71184(e,a,n){n.d(a,{R:()=>d,x:()=>t});var s=n(14041);let i={},c=s.createContext(i);function d(e){let a=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(c.Provider,{value:a},e.children)}}}]);