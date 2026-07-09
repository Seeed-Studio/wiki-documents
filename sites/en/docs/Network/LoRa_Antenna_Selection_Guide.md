---
description: Compare Seeed Studio antennas by frequency, gain, connector, adapter cable, and compatible device.
title: LoRa Antenna Selection Guide
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png
slug: /lora_antenna_selection_guide
sidebar_position: 0
last_update:
  date: 2026-06-29T12:00:00.000Z
  author: Yves
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
url: https://wiki.seeedstudio.com/lora_antenna_selection_guide/
---

This guide helps customers choose a suitable replacement antenna when purchasing or deploying SenseCAP series products and compatible Seeed Studio LoRa devices. It provides a complete overview of antenna frequency bands, connector types, required RF cables, compatible devices, and practical selection suggestions.

Start by choosing an antenna that matches the device frequency band, then check whether the device needs a direct connector or an adapter cable.

:::warning
Do not connect a 2.4/5 GHz antenna to an 868/915 MHz LoRa port. Never transmit without a suitable antenna connected.
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

## Quick guide

The diagrams below show how different devices should be matched with antennas and adapter cables.

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
    <b>Devices with SMA port</b>
    <span>Wio-E5 Dev Board or Wio-E5 mini</span>
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
    <b>SMA male antenna options</b>
    <span>SKU 318020269 or SKU 318020389</span>
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
    <b>Devices with I-PEX socket</b>
    <span>Wio-SX1262 or Wio Tracker L1 Pro</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png" alt="SMA-to-I-PEX antenna cable" /></div>
    <b>SMA-to-I-PEX Antenna Cable</b>
    <span>120 mm · SKU 321990397</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="SMA male LoRa antenna" /></div>
    <b>SMA male antenna</b>
    <span>868 MHz SKU 318020269 or 915 MHz SKU 318020389</span>
  </div>
</div>

<div className="band-note"><strong>Fiberglass antenna kits usually already include a gateway RF cable.</strong> Add a separate cable mainly when you choose a bare N-type fiberglass antenna such as SKU 318020613.</div>

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
    <b>Devices with RP-SMA port</b>
    <span>P1 / P1-Pro, SenseCAP M1, or SenseCAP M2</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png" alt="RP-SMA to N-Type RF cable" /></div>
    <b>RP-SMA to N-Type RF Cable</b>
    <span>300 mm · SKU 100007236</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png" alt="N-type fiberglass antenna" /></div>
    <b>Fiberglass antenna without base</b>
    <span>Example: SKU 318020613</span>
  </div>
</div>

## Compatible devices (selected examples)

The devices below are only representative examples. For other SenseCAP or Seeed Studio devices, use the same selection logic: match the antenna frequency first, then confirm whether the device needs a direct SMA/RP-SMA connection or an adapter cable.

<div className="device-grid">
  <a className="device-card" href="/LoRa_E5_Dev_Board/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="Wio-E5 Development Kit" /></div>
    <div className="device-card-body"><strong>Wio-E5 Dev Board</strong><span>SMA antenna directly</span></div>
  </a>
  <a className="device-card" href="/LoRa_E5_mini/">
    <div className="device-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="Wio-E5 mini" /></div>
    <div className="device-card-body"><strong>Wio-E5 mini</strong><span>SMA antenna directly</span></div>
  </a>
  <a className="device-card" href="/wio_sx1262/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" alt="Wio-SX1262 module" /></div>
    <div className="device-card-body"><strong>Wio-SX1262</strong><span>120 mm SMA-to-I-PEX cable (321990397) → SMA antenna</span></div>
  </a>
  <a className="device-card" href="/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/">
    <div className="device-card-image"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" alt="SenseCAP M1 Indoor Gateway" /></div>
    <div className="device-card-body"><strong>SenseCAP M1 Gateway</strong><span>RP-SMA cable → bare N-type fiberglass antenna</span></div>
  </a>
  <a className="device-card" href="/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/">
    <div className="device-card-image"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png" alt="SenseCAP M2 Data Only Hotspot" /></div>
    <div className="device-card-body"><strong>SenseCAP M2 Data Only</strong><span>RP-SMA cable → bare N-type fiberglass antenna</span></div>
  </a>
  <a className="device-card" href="/meshtastic_solar_node/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="SenseCAP Solar Node P1 and P1-Pro" /></div>
    <div className="device-card-body"><strong>Solar Node P1 / P1-Pro</strong><span>RP-SMA cable → bare N-type fiberglass antenna</span></div>
  </a>
  <a className="device-card" href="/wio_tracker_l1_node/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="Wio Tracker L1 Pro" /></div>
    <div className="device-card-body"><strong>Wio Tracker L1 Pro</strong><span>120 mm SMA-to-I-PEX cable (321990397) → SMA antenna</span></div>
  </a>
</div>

## Antenna Overview

### 860-930MHz antennas

Use these antennas for sub-GHz LoRa, LoRaWAN, and Meshtastic devices. The products below are grouped by antenna form factor so you can quickly decide whether you need a high-gain fiberglass antenna, a compact rod antenna, or an indoor magnetic-base antenna.

#### Fiberglass antennas

Fiberglass antennas are usually selected for gateways, roof-mounted nodes, and other fixed installations that need better outdoor range. Check whether the device already includes the required RF cable or whether you need an RP-SMA-to-N-type cable.

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/_/-/_-min_1_2.png" alt="3 dBi fiberglass antenna kit with magnetic base" /></div>
  <div className="antenna-card-body">
    <h3>3 dBi Fiberglass Antenna</h3>
    <span className="antenna-sku">SKU 318020652</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequency</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Gain</b>3 dBi</div>
      <div className="antenna-spec"><b>Length</b>360 mm</div>
      <div className="antenna-spec"><b>Included</b>Magnetic base</div>
    </div>
    <p className="antenna-connect"><b>Connects to:</b> SenseCAP M1 Indoor Gateway. The included base is suitable for movable or temporary installation.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-902-928MHz-3dBi-with-Antenna-Base-p-5130.html">View product →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020691__1_.jpg" alt="5.8 dBi fiberglass antenna kit" /></div>
  <div className="antenna-card-body">
    <h3>5.8 dBi Fiberglass Antenna</h3>
    <span className="antenna-sku">SKU 318020691</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequency</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Gain</b>5.8 dBi</div>
      <div className="antenna-spec"><b>Length</b>800 mm</div>
      <div className="antenna-spec"><b>Included</b>1 m CFD200 + bracket</div>
    </div>
    <p className="antenna-connect"><b>Connects to:</b> SenseCAP M1 Gateway and Solar Node P1/P1-Pro through the included RP-SMA cable.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html">View product →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png" alt="7 dBi fiberglass antenna" /></div>
  <div className="antenna-card-body">
    <h3>7 dBi Fiberglass Antenna</h3>
    <span className="antenna-sku">SKU 318020613</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequency</b>900-930 MHz</div>
      <div className="antenna-spec"><b>Gain</b>7 dBi</div>
      <div className="antenna-spec"><b>Length</b>920 mm</div>
      <div className="antenna-spec"><b>Included</b>Antenna only</div>
    </div>
    <p className="antenna-connect"><b>Connects to:</b> SenseCAP M1 Gateway and Solar Node P1/P1-Pro through the included RP-SMA cable.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/Lora-Fiberglass-Antenna-900-930MHz-7dBi-920mm-p-4926.html">View product →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020693__1_3.jpg" alt="8 dBi fiberglass antenna kit" /></div>
  <div className="antenna-card-body">
    <h3>8 dBi Fiberglass Antenna</h3>
    <span className="antenna-sku">SKU 318020693</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequency</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Gain</b>8 dBi</div>
      <div className="antenna-spec"><b>Length</b>1300 mm</div>
      <div className="antenna-spec"><b>Included</b>1 m CFD200 + bracket</div>
    </div>
    <p className="antenna-connect"><b>Connects to:</b> SenseCAP M1 Gateway and Solar Node P1/P1-Pro through the included RP-SMA cable.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-928MHz-8dBi-1300mm-p-5278.html">View product →</a>
  </div>
</div>

</div>

#### Rod antennas

Rod antennas are compact SMA antennas for development boards and portable LoRa devices. Devices with an I-PEX antenna socket need the 120 mm SMA-to-I-PEX Antenna Cable (SKU 321990397) before using these antennas.

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png" alt="868 MHz 2.8 dBi SMA antenna" /></div>
  <div className="antenna-card-body">
    <h3>2.8 dBi Long Range Antenna</h3>
    <span className="antenna-sku">SKU 318020269</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequency</b>868 MHz</div>
      <div className="antenna-spec"><b>Gain</b>2.8 dBi</div>
      <div className="antenna-spec"><b>Length</b>195 mm</div>
      <div className="antenna-spec"><b>Connector</b>SMA male</div>
    </div>
    <p className="antenna-connect"><b>Connects to:</b> Wio-E5 Dev Board or Wio-E5 mini directly; Wio-SX1262 or Wio Tracker L1 Pro through the 120 mm SMA-to-I-PEX Antenna Cable (SKU 321990397).</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/External-Antenna-868MHz-L195mm-black-folding-antena-With-Male-SMA-J-p-5045.html">View product →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="915 MHz 2.6 dBi SMA antenna" /></div>
  <div className="antenna-card-body">
    <h3>2.6 dBi Long Range Antenna</h3>
    <span className="antenna-sku">SKU 318020389</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequency</b>902-928 MHz</div>
      <div className="antenna-spec"><b>Gain</b>2.6 dBi</div>
      <div className="antenna-spec"><b>Length</b>195 mm</div>
      <div className="antenna-spec"><b>Connector</b>SMA male</div>
    </div>
    <p className="antenna-connect"><b>Connects to:</b> Wio-E5 Dev Board or Wio-E5 mini directly; Wio-SX1262 or Wio Tracker L1 Pro through the 120 mm SMA-to-I-PEX Antenna Cable (SKU 321990397).</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html">View product →</a>
  </div>
</div>

</div>

#### Indoor antennas

Indoor antennas are suitable for desktop gateways, light hotspots, or temporary indoor placement where a magnetic base is more convenient than a fixed outdoor mount.

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/1/110991765_feature-02.jpg" alt="860-930 MHz indoor antenna with magnetic base" /></div>
  <div className="antenna-card-body">
    <h3>3 dBi Indoor</h3>
    <span className="antenna-sku">SKU 110991765</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequency</b>860-930 MHz</div>
      <div className="antenna-spec"><b>Gain</b>3 dBi</div>
      <div className="antenna-spec"><b>Length</b>295 mm</div>
      <div className="antenna-spec"><b>Mount</b>Magnetic base</div>
    </div>
    <p className="antenna-connect"><b>Connects to:</b> SenseCAP M2 Data Only Hotspot and SenseCAP M2 Light Hotspot.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html">View product →</a>
  </div>
</div>

</div>

### 2.4 GHz and 5 GHz antennas

<div className="band-note"><strong>These products are for BLE/Wi-Fi, not 868/915 MHz LoRa.</strong></div>

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg" alt="2.4 GHz FPC antenna for XIAO nRF54L15" /></div>
  <div className="antenna-card-body">
    <h3>2.4 GHz FPC Antenna A-04</h3>
    <span className="antenna-sku">SKU 100039813</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequency</b>2.4 GHz</div>
      <div className="antenna-spec"><b>Gain</b>1.86 dBi</div>
      <div className="antenna-spec"><b>Connector</b>I-PEX 4</div>
      <div className="antenna-spec"><b>Cable</b>50 mm</div>
    </div>
    <p className="antenna-connect"><b>Connects directly to:</b> XIAO nRF54L15 for BLE, Matter, Thread, or Zigbee.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html">View product →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/1-103990623-2.4ghz-rod-antenna-for-xiao-esp32c3-45font.jpg" alt="2.4GHz rod antenna for Seeed Studio XIAO" /></div>
  <div className="antenna-card-body">
    <h3>2.4GHz Rod Antenna for Seeed Studio XIAO</h3>
    <span className="antenna-sku">SKU 103990623</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequency</b>2.4 GHz</div>
      <div className="antenna-spec"><b>Gain</b>2.81 dBi</div>
      <div className="antenna-spec"><b>Type</b>Rod antenna</div>
      <div className="antenna-spec"><b>Board end</b>I-PEX</div>
    </div>
    <p className="antenna-connect"><b>Connects directly to:</b> Seeed Studio XIAO ESP32C3, XIAO ESP32C6, and XIAO ESP32S3 (Sense) for 2.4 GHz wireless communication.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html">View product →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" alt="2.4 and 5 GHz external antenna set" /></div>
  <div className="antenna-card-body">
    <h3>2.4G/5G External Antenna Set</h3>
    <span className="antenna-sku">SKU 114993587</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Frequency</b>2.4 / 5 GHz</div>
      <div className="antenna-spec"><b>External end</b>RP-SMA male</div>
      <div className="antenna-spec"><b>Cable</b>1.13 coax</div>
      <div className="antenna-spec"><b>Length</b>130 mm</div>
    </div>
    <p className="antenna-connect"><b>For:</b> RTL8822CE/RTL8852BE Wi-Fi NIC kits and compatible reComputer Jetson systems, including reComputer J4012.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html">View product →</a>
  </div>
</div>

</div>

## RF cables

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png" alt="SMA to I-PEX antenna cable" /></div>
  <div className="antenna-card-body">
    <h3>SMA to I-PEX Antenna Cable</h3>
    <span className="antenna-sku">SKU 321990397</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Length</b>120 mm</div>
      <div className="antenna-spec"><b>Ends</b>I-PEX → SMA</div>
    </div>
    <p className="antenna-connect"><b>For:</b> Wio-SX1262 or Wio Tracker L1 Pro I-PEX socket → SMA male rod antenna. This cable converts the small board-side I-PEX connection to an enclosure-friendly SMA socket.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html">View product →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990875_feature-02.jpg" alt="CFD400 N Female to RP-SMA Male cable" /></div>
  <div className="antenna-card-body">
    <h3>CFD400 Gateway RF Cable</h3>
    <span className="antenna-sku">SKU 321990875 / 876 / 877</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Lengths</b>1 m / 3 m / 5 m</div>
      <div className="antenna-spec"><b>Ends</b>N female → RP-SMA male</div>
    </div>
    <p className="antenna-connect"><b>For:</b> SenseCAP M1 Indoor Gateway or SenseCAP ONE Outdoor Gateway → N-type fiberglass antenna. Use the shortest workable length.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-1m-p-5322.html">1 m</a> · <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-3m-p-5320.html">3 m</a> · <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-5m-p-5321.html">5 m</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png" alt="RP-SMA Male to N-Type Female RF cable" /></div>
  <div className="antenna-card-body">
    <h3>RP-SMA to N-Type RF Cable</h3>
    <span className="antenna-sku">SKU 100007236</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>Length</b>300 mm</div>
      <div className="antenna-spec"><b>Ends</b>RP-SMA male → N female</div>
    </div>
    <p className="antenna-connect"><b>For:</b> Solar Node P1/P1-Pro, SenseCAP M1, or SenseCAP M2 → bare N-type fiberglass antenna.</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-RP-SMA-Male-to-N-Type-SMA-Female-300mm.html">View product →</a>
  </div>
</div>

</div>
