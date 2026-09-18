"use strict";(self.webpackChunkwiki_pt_br=self.webpackChunkwiki_pt_br||[]).push([["59027"],{85841(e,a,s){s.r(a),s.d(a,{metadata:()=>n,default:()=>m,frontMatter:()=>c,contentTitle:()=>t,toc:()=>o,assets:()=>r});var n=JSON.parse('{"id":"Network/pt_LoRa_Antenna_Selection_Guide","title":"Guia de Sele\xe7\xe3o de Antenas LoRa","description":"Compare Seeed Studio antennas by frequency, gain, connector, adapter cable, and compatible device.","source":"@site/docs/Network/pt_LoRa_Antenna_Selection_Guide.md","sourceDirName":"Network","slug":"/lora_antenna_selection_guide","permalink":"/pt-br/lora_antenna_selection_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/pt-BR/docs/Network/pt_LoRa_Antenna_Selection_Guide.md","tags":[],"version":"current","lastUpdatedBy":"Yves","lastUpdatedAt":1782691200000,"sidebarPosition":0,"frontMatter":{"description":"Compare Seeed Studio antennas by frequency, gain, connector, adapter cable, and compatible device.","title":"Guia de Sele\xe7\xe3o de Antenas LoRa","image":"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png","slug":"/lora_antenna_selection_guide","sidebar_position":0,"last_update":{"date":"2026-06-29T00:00:00.000Z","author":"Yves"},"createdAt":"2026-06-29","updatedAt":"2026-07-09","url":"https://wiki.seeedstudio.com/pt-br/lora_antenna_selection_guide/"},"sidebar":"ptBRSidebar","previous":{"title":"The Things Indoor Gateway","permalink":"/pt-br/The-Things-Indoor-Gateway"},"next":{"title":"Introdu\xe7\xe3o ao m\xf3dulo Wi-Fi HaLow para XIAO","permalink":"/pt-br/getting_started_with_wifi_halow_module_for_xiao"}}'),i=s(31085),d=s(71184);let c={description:"Compare Seeed Studio antennas by frequency, gain, connector, adapter cable, and compatible device.",title:"Guia de Sele\xe7\xe3o de Antenas LoRa",image:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",slug:"/lora_antenna_selection_guide",sidebar_position:0,last_update:{date:new Date("2026-06-29T00:00:00.000Z"),author:"Yves"},createdAt:"2026-06-29",updatedAt:"2026-07-09",url:"https://wiki.seeedstudio.com/pt-br/lora_antenna_selection_guide/"},t,r={},o=[{value:"Guia r\xe1pido",id:"guia-r\xe1pido",level:2},{value:"Dispositivos compat\xedveis (exemplos selecionados)",id:"dispositivos-compat\xedveis-exemplos-selecionados",level:2},{value:"Vis\xe3o geral das antenas",id:"vis\xe3o-geral-das-antenas",level:2},{value:"Antenas de 860-930MHz",id:"antenas-de-860-930mhz",level:3},{value:"Antenas de fibra de vidro",id:"antenas-de-fibra-de-vidro",level:4},{value:"Antenas de haste",id:"antenas-de-haste",level:4},{value:"Antenas internas",id:"antenas-internas",level:4},{value:"Antenas de 2,4 GHz e 5 GHz",id:"antenas-de-24-ghz-e-5-ghz",level:3},{value:"Cabos RF",id:"cabos-rf",level:2}];function l(e){let a={admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Este guia ajuda clientes a escolher uma antena de substitui\xe7\xe3o adequada ao comprar ou implantar produtos da s\xe9rie SenseCAP e dispositivos LoRa compat\xedveis da Seeed Studio. Ele fornece uma vis\xe3o geral completa das faixas de frequ\xeancia das antenas, tipos de conectores, cabos RF necess\xe1rios, dispositivos compat\xedveis e sugest\xf5es pr\xe1ticas de sele\xe7\xe3o."}),"\n",(0,i.jsx)(a.p,{children:"Comece escolhendo uma antena que corresponda \xe0 faixa de frequ\xeancia do dispositivo e, em seguida, verifique se o dispositivo precisa de um conector direto ou de um cabo adaptador."}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"N\xe3o conecte uma antena de 2,4/5 GHz a uma porta LoRa de 868/915 MHz. Nunca transmita sem uma antena adequada conectada."})}),"\n",(0,i.jsx)("style",{children:`
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
`}),"\n",(0,i.jsx)(a.h2,{id:"guia-r\xe1pido",children:"Guia r\xe1pido"}),"\n",(0,i.jsx)(a.p,{children:"Os diagramas abaixo mostram como diferentes dispositivos devem ser combinados com antenas e cabos adaptadores."}),"\n",(0,i.jsxs)("div",{className:"ipex-guide ipex-guide--compact",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png",alt:"Wio-E5 Dev Board"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-E5 Dev Board"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png",alt:"Wio-E5 mini"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-E5 mini"})]})]}),(0,i.jsx)("b",{children:"Dispositivos com porta SMA"}),(0,i.jsx)("span",{children:"Wio-E5 Dev Board ou Wio-E5 mini"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png",alt:"2.8 dBi Long Range Antenna"})}),(0,i.jsx)("span",{className:"path-device-name",children:"2,8 dBi 868 MHz"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"2.6 dBi Long Range Antenna"})}),(0,i.jsx)("span",{className:"path-device-name",children:"2,6 dBi 915 MHz"})]})]}),(0,i.jsx)("b",{children:"Op\xe7\xf5es de antena SMA macho"}),(0,i.jsx)("span",{children:"SKU 318020269 ou SKU 318020389"})]})]}),"\n",(0,i.jsxs)("div",{className:"ipex-guide",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid path-device-grid--two",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png",alt:"Wio-SX1262"})}),(0,i.jsx)("span",{className:"path-device-name",children:"Wio-SX1262"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg",alt:"Wio Tracker L1 Pro"})}),(0,i.jsx)("span",{className:"path-device-name",children:"L1 Pro"})]})]}),(0,i.jsx)("b",{children:"Dispositivos com soquete I-PEX"}),(0,i.jsx)("span",{children:"Wio-SX1262 ou Wio Tracker L1 Pro"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png",alt:"SMA-to-I-PEX antenna cable"})}),(0,i.jsx)("b",{children:"Cabo de antena SMA-para-I-PEX"}),(0,i.jsx)("span",{children:"120 mm \xb7 SKU 321990397"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"SMA male LoRa antenna"})}),(0,i.jsx)("b",{children:"Antena SMA macho"}),(0,i.jsx)("span",{children:"868 MHz SKU 318020269 ou 915 MHz SKU 318020389"})]})]}),"\n",(0,i.jsxs)("div",{className:"band-note",children:[(0,i.jsx)("strong",{children:"Kits de antena de fibra de vidro geralmente j\xe1 incluem um cabo RF para gateway."})," Adicione um cabo separado principalmente quando voc\xea escolher uma antena de fibra de vidro nua com conector tipo N, como a SKU 318020613."]}),"\n",(0,i.jsxs)("div",{className:"ipex-guide",children:[(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsxs)("div",{className:"path-device-grid",children:[(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png",alt:"SenseCAP Solar Node P1 and P1-Pro"})}),(0,i.jsx)("span",{className:"path-device-name",children:"P1 / P1-Pro"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Indoor Gateway"})}),(0,i.jsx)("span",{className:"path-device-name",children:"SenseCAP M1"})]}),(0,i.jsxs)("div",{className:"path-device",children:[(0,i.jsx)("div",{className:"path-device-thumb",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png",alt:"SenseCAP M2 Data Only Hotspot"})}),(0,i.jsx)("span",{className:"path-device-name",children:"SenseCAP M2"})]})]}),(0,i.jsx)("b",{children:"Dispositivos com porta RP-SMA"}),(0,i.jsx)("span",{children:"P1 / P1-Pro, SenseCAP M1 ou SenseCAP M2"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png",alt:"RP-SMA to N-Type RF cable"})}),(0,i.jsx)("b",{children:"Cabo RF RP-SMA para N-Type"}),(0,i.jsx)("span",{children:"300 mm \xb7 SKU 100007236"})]}),(0,i.jsx)("div",{className:"ipex-arrow",children:"\u2192"}),(0,i.jsxs)("div",{className:"ipex-card",children:[(0,i.jsx)("div",{className:"ipex-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",alt:"N-type fiberglass antenna"})}),(0,i.jsx)("b",{children:"Antena de fibra de vidro sem base"}),(0,i.jsx)("span",{children:"Exemplo: SKU 318020613"})]})]}),"\n",(0,i.jsx)(a.h2,{id:"dispositivos-compat\xedveis-exemplos-selecionados",children:"Dispositivos compat\xedveis (exemplos selecionados)"}),"\n",(0,i.jsx)(a.p,{children:"Os dispositivos abaixo s\xe3o apenas exemplos representativos. Para outros dispositivos SenseCAP ou Seeed Studio, use a mesma l\xf3gica de sele\xe7\xe3o: combine primeiro a frequ\xeancia da antena e depois confirme se o dispositivo precisa de uma conex\xe3o direta SMA/RP-SMA ou de um cabo adaptador."}),"\n",(0,i.jsxs)("div",{className:"device-grid",children:[(0,i.jsxs)("a",{className:"device-card",href:"/pt-br/LoRa_E5_Dev_Board/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png",alt:"Wio-E5 Development Kit"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-E5 Dev Board"}),(0,i.jsx)("span",{children:"Antena SMA diretamente"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/pt-br/LoRa_E5_mini/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png",alt:"Wio-E5 mini"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-E5 mini"}),(0,i.jsx)("span",{children:"Antena SMA diretamente"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/pt-br/wio_sx1262/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png",alt:"Wio-SX1262 module"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio-SX1262"}),(0,i.jsx)("span",{children:"Cabo SMA-para-I-PEX de 120 mm (321990397) \u2192 antena SMA"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/pt-br/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Indoor Gateway"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"SenseCAP M1 Gateway"}),(0,i.jsx)("span",{children:"Cabo RP-SMA \u2192 antena de fibra de vidro N-type sem base"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png",alt:"SenseCAP M2 Data Only Hotspot"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"SenseCAP M2 Data Only"}),(0,i.jsx)("span",{children:"Cabo RP-SMA \u2192 antena de fibra de vidro N-type sem base"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/pt-br/meshtastic_solar_node/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png",alt:"SenseCAP Solar Node P1 and P1-Pro"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Solar Node P1 / P1-Pro"}),(0,i.jsx)("span",{children:"Cabo RP-SMA \u2192 antena de fibra de vidro N-type sem base"})]})]}),(0,i.jsxs)("a",{className:"device-card",href:"/pt-br/wio_tracker_l1_node/",children:[(0,i.jsx)("div",{className:"device-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg",alt:"Wio Tracker L1 Pro"})}),(0,i.jsxs)("div",{className:"device-card-body",children:[(0,i.jsx)("strong",{children:"Wio Tracker L1 Pro"}),(0,i.jsx)("span",{children:"Cabo SMA-para-I-PEX de 120 mm (321990397) \u2192 antena SMA"})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"vis\xe3o-geral-das-antenas",children:"Vis\xe3o geral das antenas"}),"\n",(0,i.jsx)(a.h3,{id:"antenas-de-860-930mhz",children:"Antenas de 860-930MHz"}),"\n",(0,i.jsx)(a.p,{children:"Use estas antenas para dispositivos LoRa, LoRaWAN e Meshtastic sub-GHz. Os produtos abaixo est\xe3o agrupados por formato de antena para que voc\xea possa decidir rapidamente se precisa de uma antena de fibra de vidro de alto ganho, uma antena de haste compacta ou uma antena interna com base magn\xe9tica."}),"\n",(0,i.jsx)(a.h4,{id:"antenas-de-fibra-de-vidro",children:"Antenas de fibra de vidro"}),"\n",(0,i.jsx)(a.p,{children:"Antenas de fibra de vidro s\xe3o geralmente escolhidas para gateways, n\xf3s montados em telhados e outras instala\xe7\xf5es fixas que precisam de melhor alcance externo. Verifique se o dispositivo j\xe1 inclui o cabo RF necess\xe1rio ou se voc\xea precisa de um cabo RP-SMA-para-N-type."}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/_/-/_-min_1_2.png",alt:"3 dBi fiberglass antenna kit with magnetic base"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de fibra de vidro 3 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020652"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequ\xeancia"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganho"}),"3 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimento"}),"360 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Inclui"}),"Base magn\xe9tica"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Conecta-se a:"})," SenseCAP M1 Indoor Gateway. A base inclu\xedda \xe9 adequada para instala\xe7\xe3o m\xf3vel ou tempor\xe1ria."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-902-928MHz-3dBi-with-Antenna-Base-p-5130.html",children:"Ver produto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020691__1_.jpg",alt:"5.8 dBi fiberglass antenna kit"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de fibra de vidro 5,8 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020691"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequ\xeancia"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganho"}),"5,8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimento"}),"800 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Inclui"}),"1 m CFD200 + suporte"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Conecta-se a:"})," SenseCAP M1 Gateway e Solar Node P1/P1-Pro por meio do cabo RP-SMA inclu\xeddo."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html",children:"Ver produto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png",alt:"7 dBi fiberglass antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de fibra de vidro 7 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020613"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequ\xeancia"}),"900-930 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganho"}),"7 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimento"}),"920 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Inclui"}),"Apenas antena"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Conecta-se a:"})," SenseCAP M1 Gateway e Solar Node P1/P1-Pro por meio do cabo RP-SMA inclu\xeddo."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/Lora-Fiberglass-Antenna-900-930MHz-7dBi-920mm-p-4926.html",children:"Ver produto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020693__1_3.jpg",alt:"8 dBi fiberglass antenna kit"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de fibra de vidro 8 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020693"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequ\xeancia"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganho"}),"8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimento"}),"1300 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Inclui"}),"1 m CFD200 + suporte"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Conecta-se a:"})," SenseCAP M1 Gateway e Solar Node P1/P1-Pro por meio do cabo RP-SMA inclu\xeddo."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-928MHz-8dBi-1300mm-p-5278.html",children:"Ver produto \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"antenas-de-haste",children:"Antenas de haste"}),"\n",(0,i.jsx)(a.p,{children:"Antenas de haste s\xe3o antenas SMA compactas para placas de desenvolvimento e dispositivos LoRa port\xe1teis. Dispositivos com soquete de antena I-PEX precisam do Cabo de Antena SMA-para-I-PEX de 120 mm (SKU 321990397) antes de usar essas antenas."}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png",alt:"868 MHz 2.8 dBi SMA antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de longo alcance 2,8 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020269"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequ\xeancia"}),"868 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganho"}),"2,8 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimento"}),"195 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Conector"}),"SMA macho"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Conecta-se a:"})," Wio-E5 Dev Board ou Wio-E5 mini diretamente; Wio-SX1262 ou Wio Tracker L1 Pro por meio do Cabo de Antena SMA-para-I-PEX de 120 mm (SKU 321990397)."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/External-Antenna-868MHz-L195mm-black-folding-antena-With-Male-SMA-J-p-5045.html",children:"Ver produto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png",alt:"915 MHz 2.6 dBi SMA antenna"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de Longo Alcance 2,6 dBi"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 318020389"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequ\xeancia"}),"902-928 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganho"}),"2,6 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimento"}),"195 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Conector"}),"SMA macho"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Conecta-se a:"})," Wio-E5 Dev Board ou Wio-E5 mini diretamente; Wio-SX1262 ou Wio Tracker L1 Pro atrav\xe9s do Cabo de Antena SMA-para-I-PEX de 120 mm (SKU 321990397)."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html",children:"Ver produto \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"antenas-internas",children:"Antenas internas"}),"\n",(0,i.jsx)(a.p,{children:"Antenas internas s\xe3o adequadas para gateways de mesa, light hotspots ou posicionamento interno tempor\xe1rio, onde uma base magn\xe9tica \xe9 mais conveniente do que uma montagem externa fixa."}),"\n",(0,i.jsx)("div",{className:"antenna-grid",children:(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/1/110991765_feature-02.jpg",alt:"860-930 MHz indoor antenna with magnetic base"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"3 dBi Interna"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 110991765"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequ\xeancia"}),"860-930 MHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganho"}),"3 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimento"}),"295 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Montagem"}),"Base magn\xe9tica"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Conecta-se a:"})," SenseCAP M2 Data Only Hotspot e SenseCAP M2 Light Hotspot."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html",children:"Ver produto \u2192"})]})]})}),"\n",(0,i.jsx)(a.h3,{id:"antenas-de-24-ghz-e-5-ghz",children:"Antenas de 2,4 GHz e 5 GHz"}),"\n",(0,i.jsx)("div",{className:"band-note",children:(0,i.jsx)("strong",{children:"Estes produtos s\xe3o para BLE/Wi-Fi, n\xe3o para LoRa de 868/915 MHz."})}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg",alt:"2.4 GHz FPC antenna for XIAO nRF54L15"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena FPC 2,4 GHz A-04"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 100039813"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequ\xeancia"}),"2,4 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganho"}),"1,86 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Conector"}),"I-PEX 4"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Cabo"}),"50 mm"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Conecta-se diretamente a:"})," XIAO nRF54L15 para BLE, Matter, Thread ou Zigbee."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html",children:"Ver produto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/1-103990623-2.4ghz-rod-antenna-for-xiao-esp32c3-45font.jpg",alt:"2.4GHz rod antenna for Seeed Studio XIAO"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Antena de Haste 2,4 GHz para Seeed Studio XIAO"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 103990623"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequ\xeancia"}),"2,4 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Ganho"}),"2,81 dBi"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Tipo"}),"Antena de haste"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Lado da placa"}),"I-PEX"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Conecta-se diretamente a:"})," Seeed Studio XIAO ESP32C3, XIAO ESP32C6 e XIAO ESP32S3 (Sense) para comunica\xe7\xe3o sem fio de 2,4 GHz."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html",children:"Ver produto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg",alt:"2.4 and 5 GHz external antenna set"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Conjunto de Antena Externa 2,4G/5G"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 114993587"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Frequ\xeancia"}),"2,4 / 5 GHz"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Lado externo"}),"RP-SMA macho"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Cabo"}),"1,13 coaxial"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimento"}),"130 mm"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Para:"})," kits de NIC Wi-Fi RTL8822CE/RTL8852BE e sistemas reComputer Jetson compat\xedveis, incluindo reComputer J4012."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html",children:"Ver produto \u2192"})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"cabos-rf",children:"Cabos RF"}),"\n",(0,i.jsxs)("div",{className:"antenna-grid",children:[(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png",alt:"SMA to I-PEX antenna cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Cabo de Antena SMA para I-PEX"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 321990397"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimento"}),"120 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Extremidades"}),"I-PEX \u2192 SMA"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Para:"})," soquete I-PEX do Wio-SX1262 ou Wio Tracker L1 Pro \u2192 antena de haste SMA macho. Este cabo converte a pequena conex\xe3o I-PEX do lado da placa em um conector SMA adequado para gabinetes."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html",children:"Ver produto \u2192"})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990875_feature-02.jpg",alt:"CFD400 N Female to RP-SMA Male cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Cabo RF CFD400 para Gateway"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 321990875 / 876 / 877"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimentos"}),"1 m / 3 m / 5 m"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Extremidades"}),"N f\xeamea \u2192 RP-SMA macho"]})]}),(0,i.jsxs)(a.p,{children:[(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Para:"})," SenseCAP M1 Indoor Gateway ou SenseCAP ONE Outdoor Gateway \u2192 antena de fibra de vidro tipo N. Use o menor comprimento poss\xedvel."]}),"\n",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-1m-p-5322.html",children:"1 m"})," \xb7 ",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-3m-p-5320.html",children:"3 m"})," \xb7 ",(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-5m-p-5321.html",children:"5 m"})]})]})]}),(0,i.jsxs)("div",{className:"antenna-card",children:[(0,i.jsx)("div",{className:"antenna-card-image",children:(0,i.jsx)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png",alt:"RP-SMA Male to N-Type Female RF cable"})}),(0,i.jsxs)("div",{className:"antenna-card-body",children:[(0,i.jsx)("h3",{children:"Cabo RF RP-SMA para Tipo N"}),(0,i.jsx)("span",{className:"antenna-sku",children:"SKU 100007236"}),(0,i.jsxs)("div",{className:"antenna-specs",children:[(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Comprimento"}),"300 mm"]}),(0,i.jsxs)("div",{className:"antenna-spec",children:[(0,i.jsx)("b",{children:"Extremidades"}),"RP-SMA macho \u2192 N f\xeamea"]})]}),(0,i.jsxs)("p",{className:"antenna-connect",children:[(0,i.jsx)("b",{children:"Para:"})," Solar Node P1/P1-Pro, SenseCAP M1 ou SenseCAP M2 \u2192 antena de fibra de vidro tipo N sem conector."]}),(0,i.jsx)("a",{className:"antenna-link",href:"https://www.seeedstudio.com/RF-Cable-RP-SMA-Male-to-N-Type-SMA-Female-300mm.html",children:"Ver produto \u2192"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71184(e,a,s){s.d(a,{R:()=>c,x:()=>t});var n=s(14041);let i={},d=n.createContext(i);function c(e){let a=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);