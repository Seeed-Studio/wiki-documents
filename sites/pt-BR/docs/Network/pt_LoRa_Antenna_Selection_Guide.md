---
description: Compare Seeed Studio antennas by frequency, gain, connector, adapter cable, and compatible device.
title: Guia de Seleção de Antenas LoRa
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png
slug: /lora_antenna_selection_guide
sidebar_position: 0
last_update:
  date: 2026-06-29
  author: Yves
createdAt: '2026-06-29'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/pt-br/lora_antenna_selection_guide/
---

Este guia ajuda clientes a escolher uma antena de substituição adequada ao comprar ou implantar produtos da série SenseCAP e dispositivos LoRa compatíveis da Seeed Studio. Ele fornece uma visão geral completa das faixas de frequência das antenas, tipos de conectores, cabos RF necessários, dispositivos compatíveis e sugestões práticas de seleção.

Comece escolhendo uma antena que corresponda à faixa de frequência do dispositivo e, em seguida, verifique se o dispositivo precisa de um conector direto ou de um cabo adaptador.

:::warning
Não conecte uma antena de 2,4/5 GHz a uma porta LoRa de 868/915 MHz. Nunca transmita sem uma antena adequada conectada.
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

## Guia rápido

Os diagramas abaixo mostram como diferentes dispositivos devem ser combinados com antenas e cabos adaptadores.

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
    <b>Dispositivos com porta SMA</b>
    <span>Wio-E5 Dev Board ou Wio-E5 mini</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="path-device-grid path-device-grid--two">
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png" alt="2.8 dBi Long Range Antenna" /></div>
        <span className="path-device-name">2,8 dBi 868 MHz</span>
      </div>
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="2.6 dBi Long Range Antenna" /></div>
        <span className="path-device-name">2,6 dBi 915 MHz</span>
      </div>
    </div>
    <b>Opções de antena SMA macho</b>
    <span>SKU 318020269 ou SKU 318020389</span>
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
    <b>Dispositivos com soquete I-PEX</b>
    <span>Wio-SX1262 ou Wio Tracker L1 Pro</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png" alt="SMA-to-I-PEX antenna cable" /></div>
    <b>Cabo de antena SMA-para-I-PEX</b>
    <span>120 mm · SKU 321990397</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="SMA male LoRa antenna" /></div>
    <b>Antena SMA macho</b>
    <span>868 MHz SKU 318020269 ou 915 MHz SKU 318020389</span>
  </div>
</div>

<div className="band-note"><strong>Kits de antena de fibra de vidro geralmente já incluem um cabo RF para gateway.</strong> Adicione um cabo separado principalmente quando você escolher uma antena de fibra de vidro nua com conector tipo N, como a SKU 318020613.</div>

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
    <b>Dispositivos com porta RP-SMA</b>
    <span>P1 / P1-Pro, SenseCAP M1 ou SenseCAP M2</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png" alt="RP-SMA to N-Type RF cable" /></div>
    <b>Cabo RF RP-SMA para N-Type</b>
    <span>300 mm · SKU 100007236</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png" alt="N-type fiberglass antenna" /></div>
    <b>Antena de fibra de vidro sem base</b>
    <span>Exemplo: SKU 318020613</span>
  </div>
</div>

## Dispositivos compatíveis (exemplos selecionados)

Os dispositivos abaixo são apenas exemplos representativos. Para outros dispositivos SenseCAP ou Seeed Studio, use a mesma lógica de seleção: combine primeiro a frequência da antena e depois confirme se o dispositivo precisa de uma conexão direta SMA/RP-SMA ou de um cabo adaptador.

<div className="device-grid">
  <a className="device-card" href="/pt-br/LoRa_E5_Dev_Board/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="Wio-E5 Development Kit" /></div>
    <div className="device-card-body"><strong>Wio-E5 Dev Board</strong><span>Antena SMA diretamente</span></div>
  </a>
  <a className="device-card" href="/pt-br/LoRa_E5_mini/">
    <div className="device-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="Wio-E5 mini" /></div>
    <div className="device-card-body"><strong>Wio-E5 mini</strong><span>Antena SMA diretamente</span></div>
  </a>
  <a className="device-card" href="/pt-br/wio_sx1262/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" alt="Wio-SX1262 module" /></div>
    <div className="device-card-body"><strong>Wio-SX1262</strong><span>Cabo SMA-para-I-PEX de 120 mm (321990397) → antena SMA</span></div>
  </a>
  <a className="device-card" href="/pt-br/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/">
    <div className="device-card-image"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" alt="SenseCAP M1 Indoor Gateway" /></div>
    <div className="device-card-body"><strong>SenseCAP M1 Gateway</strong><span>Cabo RP-SMA → antena de fibra de vidro N-type sem base</span></div>
  </a>
  <a className="device-card" href="/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/">
    <div className="device-card-image"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png" alt="SenseCAP M2 Data Only Hotspot" /></div>
    <div className="device-card-body"><strong>SenseCAP M2 Data Only</strong><span>Cabo RP-SMA → antena de fibra de vidro N-type sem base</span></div>
  </a>
  <a className="device-card" href="/pt-br/meshtastic_solar_node/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="SenseCAP Solar Node P1 and P1-Pro" /></div>
    <div className="device-card-body"><strong>Solar Node P1 / P1-Pro</strong><span>Cabo RP-SMA → antena de fibra de vidro N-type sem base</span></div>
  </a>
  <a className="device-card" href="/pt-br/wio_tracker_l1_node/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="Wio Tracker L1 Pro" /></div>
    <div className="device-card-body"><strong>Wio Tracker L1 Pro</strong><span>Cabo SMA-para-I-PEX de 120 mm (321990397) → antena SMA</span></div>
  </a>
</div>

## Visão geral das antenas

### Antenas de 860-930MHz

Use estas antenas para dispositivos LoRa, LoRaWAN e Meshtastic sub-GHz. Os produtos abaixo estão agrupados por formato de antena para que você possa decidir rapidamente se precisa de uma antena de fibra de vidro de alto ganho, uma antena de haste compacta ou uma antena interna com base magnética.

#### Antenas de fibra de vidro

Antenas de fibra de vidro são geralmente escolhidas para gateways, nós montados em telhados e outras instalações fixas que precisam de melhor alcance externo. Verifique se o dispositivo já inclui o cabo RF necessário ou se você precisa de um cabo RP-SMA-para-N-type.

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/_/-/_-min_1_2.png" alt="3 dBi fiberglass antenna kit with magnetic base" /></div>
  <div className="antenna-card-body">
    <h3>Antena de fibra de vidro 3 dBi</h3>
    <span className="antenna-sku">SKU 318020652</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequência</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Ganho</b>3 dBi</div>
      <div className="antenna-spec"><b>Comprimento</b>360 mm</div>
      <div className="antenna-spec"><b>Inclui</b>Base magnética</div>
    </div>
    <p className="antenna-connect"><b>Conecta-se a:</b> SenseCAP M1 Indoor Gateway. A base incluída é adequada para instalação móvel ou temporária.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-902-928MHz-3dBi-with-Antenna-Base-p-5130.html">Ver produto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020691__1_.jpg" alt="5.8 dBi fiberglass antenna kit" /></div>
  <div className="antenna-card-body">
    <h3>Antena de fibra de vidro 5,8 dBi</h3>
    <span className="antenna-sku">SKU 318020691</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequência</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Ganho</b>5,8 dBi</div>
      <div className="antenna-spec"><b>Comprimento</b>800 mm</div>
      <div className="antenna-spec"><b>Inclui</b>1 m CFD200 + suporte</div>
    </div>
    <p className="antenna-connect"><b>Conecta-se a:</b> SenseCAP M1 Gateway e Solar Node P1/P1-Pro por meio do cabo RP-SMA incluído.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html">Ver produto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png" alt="7 dBi fiberglass antenna" /></div>
  <div className="antenna-card-body">
    <h3>Antena de fibra de vidro 7 dBi</h3>
    <span className="antenna-sku">SKU 318020613</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequência</b>900-930 MHz</div>
      <div className="antenna-spec"><b>Ganho</b>7 dBi</div>
      <div className="antenna-spec"><b>Comprimento</b>920 mm</div>
      <div className="antenna-spec"><b>Inclui</b>Apenas antena</div>
    </div>
    <p className="antenna-connect"><b>Conecta-se a:</b> SenseCAP M1 Gateway e Solar Node P1/P1-Pro por meio do cabo RP-SMA incluído.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/Lora-Fiberglass-Antenna-900-930MHz-7dBi-920mm-p-4926.html">Ver produto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020693__1_3.jpg" alt="8 dBi fiberglass antenna kit" /></div>
  <div className="antenna-card-body">
    <h3>Antena de fibra de vidro 8 dBi</h3>
    <span className="antenna-sku">SKU 318020693</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequência</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Ganho</b>8 dBi</div>
      <div className="antenna-spec"><b>Comprimento</b>1300 mm</div>
      <div className="antenna-spec"><b>Inclui</b>1 m CFD200 + suporte</div>
    </div>
    <p className="antenna-connect"><b>Conecta-se a:</b> SenseCAP M1 Gateway e Solar Node P1/P1-Pro por meio do cabo RP-SMA incluído.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-928MHz-8dBi-1300mm-p-5278.html">Ver produto →</a>
  </div>
</div>

</div>

#### Antenas de haste

Antenas de haste são antenas SMA compactas para placas de desenvolvimento e dispositivos LoRa portáteis. Dispositivos com soquete de antena I-PEX precisam do Cabo de Antena SMA-para-I-PEX de 120 mm (SKU 321990397) antes de usar essas antenas.

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png" alt="868 MHz 2.8 dBi SMA antenna" /></div>
  <div className="antenna-card-body">
    <h3>Antena de longo alcance 2,8 dBi</h3>
    <span className="antenna-sku">SKU 318020269</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequência</b>868 MHz</div>
      <div className="antenna-spec"><b>Ganho</b>2,8 dBi</div>
      <div className="antenna-spec"><b>Comprimento</b>195 mm</div>
      <div className="antenna-spec"><b>Conector</b>SMA macho</div>
    </div>
    <p className="antenna-connect"><b>Conecta-se a:</b> Wio-E5 Dev Board ou Wio-E5 mini diretamente; Wio-SX1262 ou Wio Tracker L1 Pro por meio do Cabo de Antena SMA-para-I-PEX de 120 mm (SKU 321990397).</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/External-Antenna-868MHz-L195mm-black-folding-antena-With-Male-SMA-J-p-5045.html">Ver produto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="915 MHz 2.6 dBi SMA antenna" /></div>
  <div className="antenna-card-body">
    <h3>Antena de Longo Alcance 2,6 dBi</h3>
    <span className="antenna-sku">SKU 318020389</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequência</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Ganho</b>2,6 dBi</div>
      <div className="antenna-spec"><b>Comprimento</b>195 mm</div>
      <div className="antenna-spec"><b>Conector</b>SMA macho</div>
    </div>
    <p className="antenna-connect"><b>Conecta-se a:</b> Wio-E5 Dev Board ou Wio-E5 mini diretamente; Wio-SX1262 ou Wio Tracker L1 Pro através do Cabo de Antena SMA-para-I-PEX de 120 mm (SKU 321990397).</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html">Ver produto →</a>
  </div>
</div>

</div>

#### Antenas internas

Antenas internas são adequadas para gateways de mesa, light hotspots ou posicionamento interno temporário, onde uma base magnética é mais conveniente do que uma montagem externa fixa.

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/1/110991765_feature-02.jpg" alt="860-930 MHz indoor antenna with magnetic base" /></div>
  <div className="antenna-card-body">
    <h3>3 dBi Interna</h3>
    <span className="antenna-sku">SKU 110991765</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequência</b>860-930 MHz</div>
      <div className="antenna-spec"><b>Ganho</b>3 dBi</div>
      <div className="antenna-spec"><b>Comprimento</b>295 mm</div>
      <div className="antenna-spec"><b>Montagem</b>Base magnética</div>
    </div>
    <p className="antenna-connect"><b>Conecta-se a:</b> SenseCAP M2 Data Only Hotspot e SenseCAP M2 Light Hotspot.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html">Ver produto →</a>
  </div>
</div>

</div>

### Antenas de 2,4 GHz e 5 GHz

<div className="band-note"><strong>Estes produtos são para BLE/Wi-Fi, não para LoRa de 868/915 MHz.</strong></div>

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg" alt="2.4 GHz FPC antenna for XIAO nRF54L15" /></div>
  <div className="antenna-card-body">
    <h3>Antena FPC 2,4 GHz A-04</h3>
    <span className="antenna-sku">SKU 100039813</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequência</b>2,4 GHz</div>
      <div className="antenna-spec"><b>Ganho</b>1,86 dBi</div>
      <div className="antenna-spec"><b>Conector</b>I-PEX 4</div>
      <div className="antenna-spec"><b>Cabo</b>50 mm</div>
    </div>
    <p className="antenna-connect"><b>Conecta-se diretamente a:</b> XIAO nRF54L15 para BLE, Matter, Thread ou Zigbee.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html">Ver produto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/1-103990623-2.4ghz-rod-antenna-for-xiao-esp32c3-45font.jpg" alt="2.4GHz rod antenna for Seeed Studio XIAO" /></div>
  <div className="antenna-card-body">
    <h3>Antena de Haste 2,4 GHz para Seeed Studio XIAO</h3>
    <span className="antenna-sku">SKU 103990623</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequência</b>2,4 GHz</div>
      <div className="antenna-spec"><b>Ganho</b>2,81 dBi</div>
      <div className="antenna-spec"><b>Tipo</b>Antena de haste</div>
      <div className="antenna-spec"><b>Lado da placa</b>I-PEX</div>
    </div>
    <p className="antenna-connect"><b>Conecta-se diretamente a:</b> Seeed Studio XIAO ESP32C3, XIAO ESP32C6 e XIAO ESP32S3 (Sense) para comunicação sem fio de 2,4 GHz.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html">Ver produto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" alt="2.4 and 5 GHz external antenna set" /></div>
  <div className="antenna-card-body">
    <h3>Conjunto de Antena Externa 2,4G/5G</h3>
    <span className="antenna-sku">SKU 114993587</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequência</b>2,4 / 5 GHz</div>
      <div className="antenna-spec"><b>Lado externo</b>RP-SMA macho</div>
      <div className="antenna-spec"><b>Cabo</b>1,13 coaxial</div>
      <div className="antenna-spec"><b>Comprimento</b>130 mm</div>
    </div>
    <p className="antenna-connect"><b>Para:</b> kits de NIC Wi-Fi RTL8822CE/RTL8852BE e sistemas reComputer Jetson compatíveis, incluindo reComputer J4012.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html">Ver produto →</a>
  </div>
</div>

</div>

## Cabos RF

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png" alt="SMA to I-PEX antenna cable" /></div>
  <div className="antenna-card-body">
    <h3>Cabo de Antena SMA para I-PEX</h3>
    <span className="antenna-sku">SKU 321990397</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Comprimento</b>120 mm</div>
      <div className="antenna-spec"><b>Extremidades</b>I-PEX → SMA</div>
    </div>
    <p className="antenna-connect"><b>Para:</b> soquete I-PEX do Wio-SX1262 ou Wio Tracker L1 Pro → antena de haste SMA macho. Este cabo converte a pequena conexão I-PEX do lado da placa em um conector SMA adequado para gabinetes.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html">Ver produto →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990875_feature-02.jpg" alt="CFD400 N Female to RP-SMA Male cable" /></div>
  <div className="antenna-card-body">
    <h3>Cabo RF CFD400 para Gateway</h3>
    <span className="antenna-sku">SKU 321990875 / 876 / 877</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Comprimentos</b>1 m / 3 m / 5 m</div>
      <div className="antenna-spec"><b>Extremidades</b>N fêmea → RP-SMA macho</div>
    </div>
    <p className="antenna-connect"><b>Para:</b> SenseCAP M1 Indoor Gateway ou SenseCAP ONE Outdoor Gateway → antena de fibra de vidro tipo N. Use o menor comprimento possível.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-1m-p-5322.html">1 m</a> · <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-3m-p-5320.html">3 m</a> · <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-5m-p-5321.html">5 m</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png" alt="RP-SMA Male to N-Type Female RF cable" /></div>
  <div className="antenna-card-body">
    <h3>Cabo RF RP-SMA para Tipo N</h3>
    <span className="antenna-sku">SKU 100007236</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Comprimento</b>300 mm</div>
      <div className="antenna-spec"><b>Extremidades</b>RP-SMA macho → N fêmea</div>
    </div>
    <p className="antenna-connect"><b>Para:</b> Solar Node P1/P1-Pro, SenseCAP M1 ou SenseCAP M2 → antena de fibra de vidro tipo N sem conector.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-RP-SMA-Male-to-N-Type-SMA-Female-300mm.html">Ver produto →</a>
  </div>
</div>

</div>
