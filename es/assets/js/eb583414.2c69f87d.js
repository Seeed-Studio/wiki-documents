"use strict";(self.webpackChunkwiki_es=self.webpackChunkwiki_es||[]).push([["46152"],{56143(e,a,n){n.r(a),n.d(a,{metadata:()=>s,default:()=>m,frontMatter:()=>d,contentTitle:()=>t,toc:()=>l,assets:()=>r});var s=JSON.parse('{"id":"Network/es_LoRa_Antenna_Selection_Guide","title":"Gu\xeda de selecci\xf3n de antenas LoRa","description":"Compara las antenas de Seeed Studio por frecuencia, ganancia, conector, cable adaptador y dispositivo compatible.","source":"@site/docs/Network/es_LoRa_Antenna_Selection_Guide.md","sourceDirName":"Network","slug":"/lora_antenna_selection_guide","permalink":"/es/lora_antenna_selection_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/es/docs/Network/es_LoRa_Antenna_Selection_Guide.md","tags":[],"version":"current","lastUpdatedBy":"Yves","lastUpdatedAt":1782691200000,"sidebarPosition":0,"frontMatter":{"description":"Compara las antenas de Seeed Studio por frecuencia, ganancia, conector, cable adaptador y dispositivo compatible.","title":"Gu\xeda de selecci\xf3n de antenas LoRa","image":"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png","slug":"/lora_antenna_selection_guide","sidebar_position":0,"last_update":{"date":"2026-06-29T00:00:00.000Z","author":"Yves"},"createdAt":"2026-06-29","updatedAt":"2026-07-09","url":"https://wiki.seeedstudio.com/es/lora_antenna_selection_guide/"},"sidebar":"esSidebar","previous":{"title":"The Things Indoor Gateway","permalink":"/es/The-Things-Indoor-Gateway"},"next":{"title":"Introducci\xf3n al m\xf3dulo Wi-Fi HaLow para XIAO","permalink":"/es/getting_started_with_wifi_halow_module_for_xiao"}}'),i=n(31085),c=n(71184);let d={description:"Compara las antenas de Seeed Studio por frecuencia, ganancia, conector, cable adaptador y dispositivo compatible.",title:"Gu\xeda de selecci\xf3n de antenas LoRa",image:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",slug:"/lora_antenna_selection_guide",sidebar_position:0,last_update:{date:new Date("2026-06-29T00:00:00.000Z"),author:"Yves"},createdAt:"2026-06-29",updatedAt:"2026-07-09",url:"https://wiki.seeedstudio.com/es/lora_antenna_selection_guide/"},t,r={},l=[{value:"Gu\xeda r\xe1pida",id:"gu\xeda-r\xe1pida",level:2},{value:"Dispositivos compatibles (ejemplos seleccionados)",id:"dispositivos-compatibles-ejemplos-seleccionados",level:2},{value:"Descripci\xf3n general de antenas",id:"descripci\xf3n-general-de-antenas",level:2},{value:"Antenas de 860-930MHz",id:"antenas-de-860-930mhz",level:3},{value:"Antenas de fibra de vidrio",id:"antenas-de-fibra-de-vidrio",level:4},{value:"Antenas de varilla",id:"antenas-de-varilla",level:4},{value:"Antenas de interior",id:"antenas-de-interior",level:4},{value:"Antenas de 2.4 GHz y 5 GHz",id:"antenas-de-24-ghz-y-5-ghz",level:3},{value:"Cables RF",id:"cables-rf",level:2}];function o(e){let a={admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Esta gu\xeda ayuda a los clientes a elegir una antena de reemplazo adecuada al comprar o desplegar productos de la serie SenseCAP y dispositivos LoRa compatibles de Seeed Studio. Proporciona una visi\xf3n completa de las bandas de frecuencia de las antenas, tipos de conectores, cables RF necesarios, dispositivos compatibles y sugerencias pr\xe1cticas de selecci\xf3n."}),"\n",(0,i.jsx)(a.p,{children:"Comienza eligiendo una antena que coincida con la banda de frecuencia del dispositivo y luego comprueba si el dispositivo necesita un conector directo o un cable adaptador."}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"No conectes una antena de 2.4/5 GHz a un puerto LoRa de 868/915 MHz. Nunca transmitas sin una antena adecuada conectada."})}),"\n",(0,i.jsx)("style",{children:`
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
`}),"\n",(0,i.jsx)(a.h2,{id:"gu\xeda-r\xe1pida",children:"Gu\xeda r\xe1pida"}),"\n",(0,i.jsx)(a.p,{children:"Los diagramas siguientes muestran c\xf3mo se deben combinar los distintos dispositivos con antenas y cables adaptadores."}),"\n",(0,i.jsxs)("div",{className:"ipex-guide ipex-guide--compact",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png",alt:"Wio-E5 Dev Board"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-E5 Dev Board"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png",alt:"Wio-E5 mini"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-E5 mini"})]})]}),(0,i.jsx)("b",{children:"Dispositivos con puerto SMA"}),(0,i.jsx)("span",{children:"Wio-E5 Dev Board o Wio-E5 mini"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png",alt:"2.8 dBi Long Range Antenna"})}),(0,i.jsx)("span",{className:"path-device-name",children:"2.8 dBi 868 MHz"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"2.6 dBi Long Range Antenna"})}),(0,i.jsx)("span",{className:"path-device-name",children:"2.6 dBi 915 MHz"})]})]}),(0,i.jsx)("b",{children:"Opciones de antena SMA macho"}),(0,i.jsx)("span",{children:"SKU 318020269 o SKU 318020389"})]})]}),"\n",(0,i.jsxs)("div",{className:"ipex-guide",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png",alt:"Wio-SX1262"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-SX1262"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg",alt:"Wio Tracker L1 Pro"})}),(0,i.jsx)("span",{className:"path-device-name",children:"L1 Pro"})]})]}),(0,i.jsx)("b",{children:"Dispositivos con conector I-PEX"}),(0,i.jsx)("span",{children:"Wio-SX1262 o Wio Tracker L1 Pro"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png",alt:"SMA-to-I-PEX antenna cable"})}),(0,i.jsx)("b",{children:"Cable de antena SMA-a-I-PEX"}),(0,i.jsx)("span",{children:"120 mm \xb7 SKU 321990397"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"SMA male LoRa antenna"})}),(0,i.jsx)("b",{children:"Antena SMA macho"}),(0,i.jsx)("span",{children:"868 MHz SKU 318020269 o 915 MHz SKU 318020389"})]})]}),"\n",(0,i.jsxs)("div",{className:"band-note",children:[(0,i.jsx)("strong",{children:"Los kits de antena de fibra de vidrio normalmente ya incluyen un cable RF para gateway."})," A\xf1ade un cable por separado principalmente cuando elijas una antena de fibra de vidrio desnuda con conector tipo N, como la SKU 318020613."]}),"\n",(0,i.jsxs)("div",{className:"ipex-guide",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png",alt:"SenseCAP Solar Node P1 and P1-Pro"})}),(0,i.jsx)("span",{className:"path-device-name",children:"P1 / P1-Pro"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Indoor Gateway"})}),(0,i.jsx)("span",{className:"path-device-name",children:"SenseCAP M1"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png",alt:"SenseCAP M2 Data Only Hotspot"})}),(0,i.jsx)("span",{className:"path-device-name",children:"SenseCAP M2"})]})]}),(0,i.jsx)("b",{children:"Dispositivos con puerto RP-SMA"}),(0,i.jsx)("span",{children:"P1 / P1-Pro, SenseCAP M1 o SenseCAP M2"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png",alt:"RP-SMA to N-Type RF cable"})}),(0,i.jsx)("b",{children:"Cable RF de RP-SMA a N-Type"}),(0,i.jsx)("span",{children:"300 mm \xb7 SKU 100007236"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",alt:"N-type fiberglass antenna"})}),(0,i.jsx)("b",{children:"Antena de fibra de vidrio sin base"}),(0,i.jsx)("span",{children:"Ejemplo: SKU 318020613"})]})]}),"\n",(0,i.jsx)(a.h2,{id:"dispositivos-compatibles-ejemplos-seleccionados",children:"Dispositivos compatibles (ejemplos seleccionados)"}),"\n",(0,i.jsx)(a.p,{children:"Los dispositivos siguientes son solo ejemplos representativos. Para otros dispositivos SenseCAP o Seeed Studio, utiliza la misma l\xf3gica de selecci\xf3n: primero haz coincidir la frecuencia de la antena y luego confirma si el dispositivo necesita una conexi\xf3n directa SMA/RP-SMA o un cable adaptador."}),"\n",(0,i.jsxs)("div",{className:"device-grid",children:[(0,i.jsxs)("a",{className:"device-card",href:"/es/LoRa_E5_Dev_Board/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png",alt:"Wio-E5 Development Kit"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-E5 Dev Board"}),(0,i.jsx)("span",{children:"Antena SMA directamente"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/es/LoRa_E5_mini/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png",alt:"Wio-E5 mini"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-E5 mini"}),(0,i.jsx)("span",{children:"Antena SMA directamente"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/es/wio_sx1262/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png",alt:"Wio-SX1262 module"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-SX1262"}),(0,i.jsx)("span",{children:"Cable SMA a I-PEX de 120 mm (321990397) \u2192 antena SMA"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/es/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Indoor Gateway"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"SenseCAP M1 Gateway"}),(0,i.jsx)("span",{children:"Cable RP-SMA \u2192 antena de fibra de vidrio N-type desnuda"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/es/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png",alt:"SenseCAP M2 Data Only Hotspot"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"SenseCAP M2 Data Only"}),(0,i.jsx)("span",{children:"Cable RP-SMA \u2192 antena de fibra de vidrio N-type desnuda"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/es/meshtastic_solar_node/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png",alt:"SenseCAP Solar Node P1 and P1-Pro"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Solar Node P1 / P1-Pro"}),(0,i.jsx)("span",{children:"Cable RP-SMA \u2192 antena de fibra de vidrio N-type desnuda"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/es/wio_tracker_l1_node/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg",alt:"Wio Tracker L1 Pro"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio Tracker L1 Pro"}),(0,i.jsx)("span",{children:"Cable SMA a I-PEX de 120 mm (321990397) \u2192 antena SMA"})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"descripci\xf3n-general-de-antenas",children:"Descripci\xf3n general de antenas"}),"\n",(0,i.jsx)(a.h3,{id:"antenas-de-860-930mhz",children:"Antenas de 860-930MHz"}),"\n",(0,i.jsx)(a.p,{children:"Utiliza estas antenas para dispositivos LoRa, LoRaWAN y Meshtastic sub-GHz. Los productos siguientes est\xe1n agrupados por factor de forma de la antena para que puedas decidir r\xe1pidamente si necesitas una antena de fibra de vidrio de alta ganancia, una antena de varilla compacta o una antena de interior con base magn\xe9tica."}),"\n",(0,i.jsx)(a.h4,{id:"antenas-de-fibra-de-vidrio",children:"Antenas de fibra de vidrio"}),"\n",(0,i.jsx)(a.p,{children:"Las antenas de fibra de vidrio se suelen elegir para gateways, nodos montados en el techo y otras instalaciones fijas que necesitan mejor alcance en exteriores. Comprueba si el dispositivo ya incluye el cable RF necesario o si necesitas un cable de RP-SMA a N-type."}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/_/-/_-min_1_2.png",alt:"3 dBi fiberglass antenna kit with magnetic base"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de fibra de vidrio de 3 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020652"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frecuencia"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganancia"}),"3 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitud"}),"360 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Incluye"}),"Base magn\xe9tica"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Se conecta a:"})," SenseCAP M1 Indoor Gateway. La base incluida es adecuada para instalaciones m\xf3viles o temporales."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-902-928MHz-3dBi-with-Antenna-Base-p-5130.html",children:"View product \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020691__1_.jpg",alt:"5.8 dBi fiberglass antenna kit"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de fibra de vidrio de 5.8 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020691"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frecuencia"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganancia"}),"5.8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitud"}),"800 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Incluye"}),"1 m CFD200 + soporte"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Se conecta a:"})," SenseCAP M1 Gateway y Solar Node P1/P1-Pro mediante el cable RP-SMA incluido."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html",children:"View product \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",alt:"7 dBi fiberglass antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de fibra de vidrio de 7 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020613"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frecuencia"}),"900-930 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganancia"}),"7 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitud"}),"920 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Incluye"}),"Solo antena"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Se conecta a:"})," SenseCAP M1 Gateway y Solar Node P1/P1-Pro mediante el cable RP-SMA incluido."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/Lora-Fiberglass-Antenna-900-930MHz-7dBi-920mm-p-4926.html",children:"View product \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020693__1_3.jpg",alt:"8 dBi fiberglass antenna kit"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de fibra de vidrio de 8 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020693"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frecuencia"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganancia"}),"8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitud"}),"1300 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Incluye"}),"1 m CFD200 + soporte"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Se conecta a:"})," SenseCAP M1 Gateway y Solar Node P1/P1-Pro mediante el cable RP-SMA incluido."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-928MHz-8dBi-1300mm-p-5278.html",children:"View product \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"antenas-de-varilla",children:"Antenas de varilla"}),"\n",(0,i.jsx)(a.p,{children:"Las antenas de varilla son antenas SMA compactas para placas de desarrollo y dispositivos LoRa port\xe1tiles. Los dispositivos con un conector de antena I-PEX necesitan el cable de antena SMA a I-PEX de 120 mm (SKU 321990397) antes de usar estas antenas."}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png",alt:"868 MHz 2.8 dBi SMA antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de largo alcance de 2.8 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020269"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frecuencia"}),"868 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganancia"}),"2.8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitud"}),"195 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Conector"}),"SMA macho"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Se conecta a:"})," Wio-E5 Dev Board o Wio-E5 mini directamente; Wio-SX1262 o Wio Tracker L1 Pro mediante el cable de antena SMA a I-PEX de 120 mm (SKU 321990397)."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/External-Antenna-868MHz-L195mm-black-folding-antena-With-Male-SMA-J-p-5045.html",children:"Ver producto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"915 MHz 2.6 dBi SMA antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de largo alcance de 2.6 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020389"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frecuencia"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganancia"}),"2.6 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitud"}),"195 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Conector"}),"SMA macho"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Se conecta a:"})," Wio-E5 Dev Board o Wio-E5 mini directamente; Wio-SX1262 o Wio Tracker L1 Pro mediante el cable de antena SMA a I-PEX de 120 mm (SKU 321990397)."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html",children:"Ver producto \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"antenas-de-interior",children:"Antenas de interior"}),"\n",(0,i.jsx)(a.p,{children:"Las antenas de interior son adecuadas para gateways de escritorio, light hotspots o colocaci\xf3n temporal en interiores donde una base magn\xe9tica es m\xe1s conveniente que un montaje fijo en exteriores."}),"\n",(0,i.jsx)("div",{className:"antenna-grid",children:(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/1/110991765_feature-02.jpg",alt:"860-930 MHz indoor antenna with magnetic base"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"3 dBi Interior"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 110991765"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frecuencia"}),"860-930 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganancia"}),"3 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitud"}),"295 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Montaje"}),"Base magn\xe9tica"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Se conecta a:"})," SenseCAP M2 Data Only Hotspot y SenseCAP M2 Light Hotspot."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html",children:"Ver producto \u2192"})]})]})}),"\n",(0,i.jsx)(a.h3,{id:"antenas-de-24-ghz-y-5-ghz",children:"Antenas de 2.4 GHz y 5 GHz"}),"\n",(0,i.jsx)("div",{className:"band-note",children:(0,i.jsx)("strong",{children:"Estos productos son para BLE/Wi-Fi, no para LoRa de 868/915 MHz."})}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg",alt:"2.4 GHz FPC antenna for XIAO nRF54L15"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena FPC de 2.4 GHz A-04"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 100039813"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frecuencia"}),"2.4 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganancia"}),"1.86 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Conector"}),"I-PEX 4"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Cable"}),"50 mm"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Se conecta directamente a:"})," XIAO nRF54L15 para BLE, Matter, Thread o Zigbee."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html",children:"Ver producto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/1-103990623-2.4ghz-rod-antenna-for-xiao-esp32c3-45font.jpg",alt:"2.4GHz rod antenna for Seeed Studio XIAO"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de varilla de 2.4GHz para Seeed Studio XIAO"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 103990623"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frecuencia"}),"2.4 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganancia"}),"2.81 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Tipo"}),"Antena de varilla"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Extremo de la placa"}),"I-PEX"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Se conecta directamente a:"})," Seeed Studio XIAO ESP32C3, XIAO ESP32C6 y XIAO ESP32S3 (Sense) para comunicaci\xf3n inal\xe1mbrica de 2.4 GHz."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html",children:"Ver producto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg",alt:"2.4 and 5 GHz external antenna set"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Juego de antena externa 2.4G/5G"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 114993587"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frecuencia"}),"2.4 / 5 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Extremo externo"}),"RP-SMA macho"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Cable"}),"1.13 coaxial"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitud"}),"130 mm"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Para:"})," Kits de NIC Wi-Fi RTL8822CE/RTL8852BE y sistemas reComputer Jetson compatibles, incluido reComputer J4012."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html",children:"Ver producto \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"cables-rf",children:"Cables RF"}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png",alt:"SMA to I-PEX antenna cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Cable de antena SMA a I-PEX"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 321990397"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitud"}),"120 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Extremos"}),"I-PEX \u2192 SMA"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Para:"})," Wio-SX1262 o Wio Tracker L1 Pro con conector I-PEX \u2192 antena de varilla SMA macho. Este cable convierte la peque\xf1a conexi\xf3n I-PEX del lado de la placa en un conector SMA adecuado para carcasas."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html",children:"Ver producto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990875_feature-02.jpg",alt:"CFD400 N Female to RP-SMA Male cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Cable RF CFD400 para gateway"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 321990875 / 876 / 877"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitudes"}),"1 m / 3 m / 5 m"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Extremos"}),"N hembra \u2192 RP-SMA macho"]})]}),(0,i.jsxs)(a.p,{children:[(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Para:"})," SenseCAP M1 Indoor Gateway o SenseCAP ONE Outdoor Gateway \u2192 antena de fibra de vidrio tipo N. Utiliza la longitud funcional m\xe1s corta."]}),"\n",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-1m-p-5322.html",children:"1 m"})," \xb7 ",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-3m-p-5320.html",children:"3 m"})," \xb7 ",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-5m-p-5321.html",children:"5 m"})]})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png",alt:"RP-SMA Male to N-Type Female RF cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Cable RF de RP-SMA a tipo N"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 100007236"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Longitud"}),"300 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Extremos"}),"RP-SMA macho \u2192 N hembra"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Para:"})," Solar Node P1/P1-Pro, SenseCAP M1 o SenseCAP M2 \u2192 antena de fibra de vidrio tipo N sin conector."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-RP-SMA-Male-to-N-Type-SMA-Female-300mm.html",children:"Ver producto \u2192"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},71184(e,a,n){n.d(a,{R:()=>d,x:()=>t});var s=n(14041);let i={},c=s.createContext(i);function d(e){let a=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(c.Provider,{value:a},e.children)}}}]);