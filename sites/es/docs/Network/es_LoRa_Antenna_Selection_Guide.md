---
description: Compara las antenas de Seeed Studio por frecuencia, ganancia, conector, cable adaptador y dispositivo compatible.
title: Guía de selección de antenas LoRa
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png
slug: /lora_antenna_selection_guide
sidebar_position: 0
last_update:
  date: 2026-06-29
  author: Yves
createdAt: '2026-06-29'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/es/lora_antenna_selection_guide/
---

Esta guía ayuda a los clientes a elegir una antena de reemplazo adecuada al comprar o desplegar productos de la serie SenseCAP y dispositivos LoRa compatibles de Seeed Studio. Proporciona una visión completa de las bandas de frecuencia de las antenas, tipos de conectores, cables RF necesarios, dispositivos compatibles y sugerencias prácticas de selección.

Comienza eligiendo una antena que coincida con la banda de frecuencia del dispositivo y luego comprueba si el dispositivo necesita un conector directo o un cable adaptador.

:::warning
No conectes una antena de 2.4/5 GHz a un puerto LoRa de 868/915 MHz. Nunca transmitas sin una antena adecuada conectada.
:::

<style>{`
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
`}</style>

## Guía rápida

Los diagramas siguientes muestran cómo se deben combinar los distintos dispositivos con antenas y cables adaptadores.

<div className="ipex-guide ipex-guide--compact">
  <div className="ipex-card">
    <div className="path-device-grid path-device-grid--two">
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="Wio-E5 Dev Board" /></div>
        <span className="path-device-name">Wio-E5 Dev Board</span>
      </div>
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="Wio-E5 mini" /></div>
        <span className="path-device-name">Wio-E5 mini</span>
      </div>
    </div>
    <b>Dispositivos con puerto SMA</b>
    <span>Wio-E5 Dev Board o Wio-E5 mini</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="path-device-grid path-device-grid--two">
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png" alt="2.8 dBi Long Range Antenna" /></div>
        <span className="path-device-name">2.8 dBi 868 MHz</span>
      </div>
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="2.6 dBi Long Range Antenna" /></div>
        <span className="path-device-name">2.6 dBi 915 MHz</span>
      </div>
    </div>
    <b>Opciones de antena SMA macho</b>
    <span>SKU 318020269 o SKU 318020389</span>
  </div>
</div>

<div className="ipex-guide">
  <div className="ipex-card">
    <div className="path-device-grid path-device-grid--two">
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" alt="Wio-SX1262" /></div>
        <span className="path-device-name">Wio-SX1262</span>
      </div>
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="Wio Tracker L1 Pro" /></div>
        <span className="path-device-name">L1 Pro</span>
      </div>
    </div>
    <b>Dispositivos con conector I-PEX</b>
    <span>Wio-SX1262 o Wio Tracker L1 Pro</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png" alt="SMA-to-I-PEX antenna cable" /></div>
    <b>Cable de antena SMA-a-I-PEX</b>
    <span>120 mm · SKU 321990397</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="SMA male LoRa antenna" /></div>
    <b>Antena SMA macho</b>
    <span>868 MHz SKU 318020269 o 915 MHz SKU 318020389</span>
  </div>
</div>

<div className="band-note"><strong>Los kits de antena de fibra de vidrio normalmente ya incluyen un cable RF para gateway.</strong> Añade un cable por separado principalmente cuando elijas una antena de fibra de vidrio desnuda con conector tipo N, como la SKU 318020613.</div>

<div className="ipex-guide">
  <div className="ipex-card">
    <div className="path-device-grid">
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="SenseCAP Solar Node P1 and P1-Pro" /></div>
        <span className="path-device-name">P1 / P1-Pro</span>
      </div>
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" alt="SenseCAP M1 Indoor Gateway" /></div>
        <span className="path-device-name">SenseCAP M1</span>
      </div>
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png" alt="SenseCAP M2 Data Only Hotspot" /></div>
        <span className="path-device-name">SenseCAP M2</span>
      </div>
    </div>
    <b>Dispositivos con puerto RP-SMA</b>
    <span>P1 / P1-Pro, SenseCAP M1 o SenseCAP M2</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png" alt="RP-SMA to N-Type RF cable" /></div>
    <b>Cable RF de RP-SMA a N-Type</b>
    <span>300 mm · SKU 100007236</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png" alt="N-type fiberglass antenna" /></div>
    <b>Antena de fibra de vidrio sin base</b>
    <span>Ejemplo: SKU 318020613</span>
  </div>
</div>

## Dispositivos compatibles (ejemplos seleccionados)

Los dispositivos siguientes son solo ejemplos representativos. Para otros dispositivos SenseCAP o Seeed Studio, utiliza la misma lógica de selección: primero haz coincidir la frecuencia de la antena y luego confirma si el dispositivo necesita una conexión directa SMA/RP-SMA o un cable adaptador.

<div className="device-grid">
  <a className="device-card" href="/es/LoRa_E5_Dev_Board/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="Wio-E5 Development Kit" /></div>
    <div className="device-card-body"><strong>Wio-E5 Dev Board</strong><span>Antena SMA directamente</span></div>
  </a>
  <a className="device-card" href="/es/LoRa_E5_mini/">
    <div className="device-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="Wio-E5 mini" /></div>
    <div className="device-card-body"><strong>Wio-E5 mini</strong><span>Antena SMA directamente</span></div>
  </a>
  <a className="device-card" href="/es/wio_sx1262/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" alt="Wio-SX1262 module" /></div>
    <div className="device-card-body"><strong>Wio-SX1262</strong><span>Cable SMA a I-PEX de 120 mm (321990397) → antena SMA</span></div>
  </a>
  <a className="device-card" href="/es/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/">
    <div className="device-card-image"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" alt="SenseCAP M1 Indoor Gateway" /></div>
    <div className="device-card-body"><strong>SenseCAP M1 Gateway</strong><span>Cable RP-SMA → antena de fibra de vidrio N-type desnuda</span></div>
  </a>
  <a className="device-card" href="/es/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/">
    <div className="device-card-image"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png" alt="SenseCAP M2 Data Only Hotspot" /></div>
    <div className="device-card-body"><strong>SenseCAP M2 Data Only</strong><span>Cable RP-SMA → antena de fibra de vidrio N-type desnuda</span></div>
  </a>
  <a className="device-card" href="/es/meshtastic_solar_node/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="SenseCAP Solar Node P1 and P1-Pro" /></div>
    <div className="device-card-body"><strong>Solar Node P1 / P1-Pro</strong><span>Cable RP-SMA → antena de fibra de vidrio N-type desnuda</span></div>
  </a>
  <a className="device-card" href="/es/wio_tracker_l1_node/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="Wio Tracker L1 Pro" /></div>
    <div className="device-card-body"><strong>Wio Tracker L1 Pro</strong><span>Cable SMA a I-PEX de 120 mm (321990397) → antena SMA</span></div>
  </a>
</div>

## Descripción general de antenas

### Antenas de 860-930MHz

Utiliza estas antenas para dispositivos LoRa, LoRaWAN y Meshtastic sub-GHz. Los productos siguientes están agrupados por factor de forma de la antena para que puedas decidir rápidamente si necesitas una antena de fibra de vidrio de alta ganancia, una antena de varilla compacta o una antena de interior con base magnética.

#### Antenas de fibra de vidrio

Las antenas de fibra de vidrio se suelen elegir para gateways, nodos montados en el techo y otras instalaciones fijas que necesitan mejor alcance en exteriores. Comprueba si el dispositivo ya incluye el cable RF necesario o si necesitas un cable de RP-SMA a N-type.

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/_/-/_-min_1_2.png" alt="3 dBi fiberglass antenna kit with magnetic base" /></div>
  <div className="antenna-card-body">
    <h3>Antena de fibra de vidrio de 3 dBi</h3>
    <span className="antenna-sku">SKU 318020652</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frecuencia</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Ganancia</b>3 dBi</div>
      <div className="antenna-spec"><b>Longitud</b>360 mm</div>
      <div className="antenna-spec"><b>Incluye</b>Base magnética</div>
    </div>
    <p className="antenna-connect"><b>Se conecta a:</b> SenseCAP M1 Indoor Gateway. La base incluida es adecuada para instalaciones móviles o temporales.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-902-928MHz-3dBi-with-Antenna-Base-p-5130.html">View product →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020691__1_.jpg" alt="5.8 dBi fiberglass antenna kit" /></div>
  <div className="antenna-card-body">
    <h3>Antena de fibra de vidrio de 5.8 dBi</h3>
    <span className="antenna-sku">SKU 318020691</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frecuencia</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Ganancia</b>5.8 dBi</div>
      <div className="antenna-spec"><b>Longitud</b>800 mm</div>
      <div className="antenna-spec"><b>Incluye</b>1 m CFD200 + soporte</div>
    </div>
    <p className="antenna-connect"><b>Se conecta a:</b> SenseCAP M1 Gateway y Solar Node P1/P1-Pro mediante el cable RP-SMA incluido.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html">View product →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png" alt="7 dBi fiberglass antenna" /></div>
  <div className="antenna-card-body">
    <h3>Antena de fibra de vidrio de 7 dBi</h3>
    <span className="antenna-sku">SKU 318020613</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frecuencia</b>900-930 MHz</div>
      <div className="antenna-spec"><b>Ganancia</b>7 dBi</div>
      <div className="antenna-spec"><b>Longitud</b>920 mm</div>
      <div className="antenna-spec"><b>Incluye</b>Solo antena</div>
    </div>
    <p className="antenna-connect"><b>Se conecta a:</b> SenseCAP M1 Gateway y Solar Node P1/P1-Pro mediante el cable RP-SMA incluido.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/Lora-Fiberglass-Antenna-900-930MHz-7dBi-920mm-p-4926.html">View product →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020693__1_3.jpg" alt="8 dBi fiberglass antenna kit" /></div>
  <div className="antenna-card-body">
    <h3>Antena de fibra de vidrio de 8 dBi</h3>
    <span className="antenna-sku">SKU 318020693</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frecuencia</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Ganancia</b>8 dBi</div>
      <div className="antenna-spec"><b>Longitud</b>1300 mm</div>
      <div className="antenna-spec"><b>Incluye</b>1 m CFD200 + soporte</div>
    </div>
    <p className="antenna-connect"><b>Se conecta a:</b> SenseCAP M1 Gateway y Solar Node P1/P1-Pro mediante el cable RP-SMA incluido.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-928MHz-8dBi-1300mm-p-5278.html">View product →</a>
  </div>
</div>

</div>

#### Antenas de varilla

Las antenas de varilla son antenas SMA compactas para placas de desarrollo y dispositivos LoRa portátiles. Los dispositivos con un conector de antena I-PEX necesitan el cable de antena SMA a I-PEX de 120 mm (SKU 321990397) antes de usar estas antenas.

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png" alt="868 MHz 2.8 dBi SMA antenna" /></div>
  <div className="antenna-card-body">
    <h3>Antena de largo alcance de 2.8 dBi</h3>
    <span className="antenna-sku">SKU 318020269</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frecuencia</b>868 MHz</div>
      <div className="antenna-spec"><b>Ganancia</b>2.8 dBi</div>
      <div className="antenna-spec"><b>Longitud</b>195 mm</div>
      <div className="antenna-spec"><b>Conector</b>SMA macho</div>
    </div>
    <p className="antenna-connect"><b>Se conecta a:</b> Wio-E5 Dev Board o Wio-E5 mini directamente; Wio-SX1262 o Wio Tracker L1 Pro mediante el cable de antena SMA a I-PEX de 120 mm (SKU 321990397).</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/External-Antenna-868MHz-L195mm-black-folding-antena-With-Male-SMA-J-p-5045.html">Ver producto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="915 MHz 2.6 dBi SMA antenna" /></div>
  <div className="antenna-card-body">
    <h3>Antena de largo alcance de 2.6 dBi</h3>
    <span className="antenna-sku">SKU 318020389</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frecuencia</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Ganancia</b>2.6 dBi</div>
      <div className="antenna-spec"><b>Longitud</b>195 mm</div>
      <div className="antenna-spec"><b>Conector</b>SMA macho</div>
    </div>
    <p className="antenna-connect"><b>Se conecta a:</b> Wio-E5 Dev Board o Wio-E5 mini directamente; Wio-SX1262 o Wio Tracker L1 Pro mediante el cable de antena SMA a I-PEX de 120 mm (SKU 321990397).</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html">Ver producto →</a>
  </div>
</div>

</div>

#### Antenas de interior

Las antenas de interior son adecuadas para gateways de escritorio, light hotspots o colocación temporal en interiores donde una base magnética es más conveniente que un montaje fijo en exteriores.

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/1/110991765_feature-02.jpg" alt="860-930 MHz indoor antenna with magnetic base" /></div>
  <div className="antenna-card-body">
    <h3>3 dBi Interior</h3>
    <span className="antenna-sku">SKU 110991765</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frecuencia</b>860-930 MHz</div>
      <div className="antenna-spec"><b>Ganancia</b>3 dBi</div>
      <div className="antenna-spec"><b>Longitud</b>295 mm</div>
      <div className="antenna-spec"><b>Montaje</b>Base magnética</div>
    </div>
    <p className="antenna-connect"><b>Se conecta a:</b> SenseCAP M2 Data Only Hotspot y SenseCAP M2 Light Hotspot.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html">Ver producto →</a>
  </div>
</div>

</div>

### Antenas de 2.4 GHz y 5 GHz

<div className="band-note"><strong>Estos productos son para BLE/Wi-Fi, no para LoRa de 868/915 MHz.</strong></div>

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg" alt="2.4 GHz FPC antenna for XIAO nRF54L15" /></div>
  <div className="antenna-card-body">
    <h3>Antena FPC de 2.4 GHz A-04</h3>
    <span className="antenna-sku">SKU 100039813</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frecuencia</b>2.4 GHz</div>
      <div className="antenna-spec"><b>Ganancia</b>1.86 dBi</div>
      <div className="antenna-spec"><b>Conector</b>I-PEX 4</div>
      <div className="antenna-spec"><b>Cable</b>50 mm</div>
    </div>
    <p className="antenna-connect"><b>Se conecta directamente a:</b> XIAO nRF54L15 para BLE, Matter, Thread o Zigbee.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html">Ver producto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/1-103990623-2.4ghz-rod-antenna-for-xiao-esp32c3-45font.jpg" alt="2.4GHz rod antenna for Seeed Studio XIAO" /></div>
  <div className="antenna-card-body">
    <h3>Antena de varilla de 2.4GHz para Seeed Studio XIAO</h3>
    <span className="antenna-sku">SKU 103990623</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frecuencia</b>2.4 GHz</div>
      <div className="antenna-spec"><b>Ganancia</b>2.81 dBi</div>
      <div className="antenna-spec"><b>Tipo</b>Antena de varilla</div>
      <div className="antenna-spec"><b>Extremo de la placa</b>I-PEX</div>
    </div>
    <p className="antenna-connect"><b>Se conecta directamente a:</b> Seeed Studio XIAO ESP32C3, XIAO ESP32C6 y XIAO ESP32S3 (Sense) para comunicación inalámbrica de 2.4 GHz.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html">Ver producto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" alt="2.4 and 5 GHz external antenna set" /></div>
  <div className="antenna-card-body">
    <h3>Juego de antena externa 2.4G/5G</h3>
    <span className="antenna-sku">SKU 114993587</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frecuencia</b>2.4 / 5 GHz</div>
      <div className="antenna-spec"><b>Extremo externo</b>RP-SMA macho</div>
      <div className="antenna-spec"><b>Cable</b>1.13 coaxial</div>
      <div className="antenna-spec"><b>Longitud</b>130 mm</div>
    </div>
    <p className="antenna-connect"><b>Para:</b> Kits de NIC Wi-Fi RTL8822CE/RTL8852BE y sistemas reComputer Jetson compatibles, incluido reComputer J4012.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html">Ver producto →</a>
  </div>
</div>

</div>

## Cables RF

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png" alt="SMA to I-PEX antenna cable" /></div>
  <div className="antenna-card-body">
    <h3>Cable de antena SMA a I-PEX</h3>
    <span className="antenna-sku">SKU 321990397</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Longitud</b>120 mm</div>
      <div className="antenna-spec"><b>Extremos</b>I-PEX → SMA</div>
    </div>
    <p className="antenna-connect"><b>Para:</b> Wio-SX1262 o Wio Tracker L1 Pro con conector I-PEX → antena de varilla SMA macho. Este cable convierte la pequeña conexión I-PEX del lado de la placa en un conector SMA adecuado para carcasas.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html">Ver producto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990875_feature-02.jpg" alt="CFD400 N Female to RP-SMA Male cable" /></div>
  <div className="antenna-card-body">
    <h3>Cable RF CFD400 para gateway</h3>
    <span className="antenna-sku">SKU 321990875 / 876 / 877</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Longitudes</b>1 m / 3 m / 5 m</div>
      <div className="antenna-spec"><b>Extremos</b>N hembra → RP-SMA macho</div>
    </div>
    <p className="antenna-connect"><b>Para:</b> SenseCAP M1 Indoor Gateway o SenseCAP ONE Outdoor Gateway → antena de fibra de vidrio tipo N. Utiliza la longitud funcional más corta.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-1m-p-5322.html">1 m</a> · <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-3m-p-5320.html">3 m</a> · <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-5m-p-5321.html">5 m</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png" alt="RP-SMA Male to N-Type Female RF cable" /></div>
  <div className="antenna-card-body">
    <h3>Cable RF de RP-SMA a tipo N</h3>
    <span className="antenna-sku">SKU 100007236</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Longitud</b>300 mm</div>
      <div className="antenna-spec"><b>Extremos</b>RP-SMA macho → N hembra</div>
    </div>
    <p className="antenna-connect"><b>Para:</b> Solar Node P1/P1-Pro, SenseCAP M1 o SenseCAP M2 → antena de fibra de vidrio tipo N sin conector.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-RP-SMA-Male-to-N-Type-SMA-Female-300mm.html">Ver producto →</a>
  </div>
</div>

</div>
