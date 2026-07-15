---
description: 按频段、增益、连接器、转接线缆和兼容设备对 Seeed Studio 天线进行对比。
title: LoRa 天线选型指南
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png
slug: /lora_antenna_selection_guide
sidebar_position: 0
last_update:
  date: 2026-06-29T12:00:00.000Z
  author: Yves
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
url: https://wiki.seeedstudio.com/cn/lora_antenna_selection_guide/
---

本指南帮助用户在购买或部署 SenseCAP 系列产品及兼容的 Seeed Studio LoRa 设备时，选择合适的替换天线。文中提供了天线频段、连接器类型、所需射频线缆、兼容设备以及实用选型建议的完整概览。

首先选择与设备频段匹配的天线，然后检查设备是需要直接连接器还是需要转接线缆。

:::warning
不要将 2.4/5 GHz 天线连接到 868/915 MHz LoRa 端口。切勿在未连接合适天线的情况下发射。
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

## 快速指南

下图展示了不同设备应如何与天线和转接线缆进行匹配。

<div className="ipex-guide ipex-guide--compact">
  <div className="ipex-card">
    <div className="path-device-grid path-device-grid--two">
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="Wio-E5 Dev Board" /></div>
        <span className="path-device-name">Wio-E5 开发板</span>
      </div>
      <div className="path-device">
        <div className="path-device-thumb"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="Wio-E5 mini" /></div>
        <span className="path-device-name">Wio-E5 mini</span>
      </div>
    </div>
    <b>带 SMA 端口的设备</b>
    <span>Wio-E5 开发板或 Wio-E5 mini</span>
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
    <b>SMA 公头天线选项</b>
    <span>SKU 318020269 或 SKU 318020389</span>
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
    <b>带 I-PEX 座子的设备</b>
    <span>Wio-SX1262 或 Wio Tracker L1 Pro</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png" alt="SMA-to-I-PEX antenna cable" /></div>
    <b>SMA-to-I-PEX 天线线缆</b>
    <span>120 mm · SKU 321990397</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="SMA male LoRa antenna" /></div>
    <b>SMA 公头天线</b>
    <span>868 MHz SKU 318020269 或 915 MHz SKU 318020389</span>
  </div>
</div>

<div className="band-note"><strong>玻璃钢天线套件通常已经包含网关射频线缆。</strong> 只有在选择诸如 SKU 318020613 这类裸 N 型玻璃钢天线时，才主要需要额外添加线缆。</div>

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
    <b>带 RP-SMA 接口的设备</b>
    <span>P1 / P1-Pro、SenseCAP M1 或 SenseCAP M2</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png" alt="RP-SMA to N-Type RF cable" /></div>
    <b>RP-SMA 转 N 型射频线缆</b>
    <span>300 mm · SKU 100007236</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png" alt="N-type fiberglass antenna" /></div>
    <b>无底座玻璃钢天线</b>
    <span>示例：SKU 318020613</span>
  </div>
</div>

## 兼容设备（部分示例）

下面列出的设备只是具有代表性的示例。对于其他 SenseCAP 或 Seeed Studio 设备，请使用相同的选择逻辑：先匹配天线频率，然后确认设备是需要直接 SMA/RP-SMA 连接还是需要转接线缆。

<div className="device-grid">
  <a className="device-card" href="/cn/LoRa_E5_Dev_Board/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="Wio-E5 Development Kit" /></div>
    <div className="device-card-body"><strong>Wio-E5 Dev Board</strong><span>直接使用 SMA 天线</span></div>
  </a>
  <a className="device-card" href="/cn/LoRa_E5_mini/">
    <div className="device-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="Wio-E5 mini" /></div>
    <div className="device-card-body"><strong>Wio-E5 mini</strong><span>直接使用 SMA 天线</span></div>
  </a>
  <a className="device-card" href="/cn/wio_sx1262/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" alt="Wio-SX1262 module" /></div>
    <div className="device-card-body"><strong>Wio-SX1262</strong><span>120 mm SMA 转 I-PEX 线缆 (321990397) → SMA 天线</span></div>
  </a>
  <a className="device-card" href="/cn/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/">
    <div className="device-card-image"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" alt="SenseCAP M1 Indoor Gateway" /></div>
    <div className="device-card-body"><strong>SenseCAP M1 Gateway</strong><span>RP-SMA 线缆 → 裸 N 型玻璃钢天线</span></div>
  </a>
  <a className="device-card" href="/cn/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/">
    <div className="device-card-image"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png" alt="SenseCAP M2 Data Only Hotspot" /></div>
    <div className="device-card-body"><strong>SenseCAP M2 Data Only</strong><span>RP-SMA 线缆 → 裸 N 型玻璃钢天线</span></div>
  </a>
  <a className="device-card" href="/cn/meshtastic_solar_node/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="SenseCAP Solar Node P1 and P1-Pro" /></div>
    <div className="device-card-body"><strong>Solar Node P1 / P1-Pro</strong><span>RP-SMA 线缆 → 裸 N 型玻璃钢天线</span></div>
  </a>
  <a className="device-card" href="/cn/wio_tracker_l1_node/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="Wio Tracker L1 Pro" /></div>
    <div className="device-card-body"><strong>Wio Tracker L1 Pro</strong><span>120 mm SMA 转 I-PEX 线缆 (321990397) → SMA 天线</span></div>
  </a>
</div>

## 天线总览

### 860-930MHz 天线

这些天线适用于亚 GHz 频段的 LoRa、LoRaWAN 和 Meshtastic 设备。下面的产品按天线外形分组，方便你快速决定是需要高增益玻璃钢天线、紧凑型棒状天线，还是室内磁吸底座天线。

#### 玻璃钢天线

玻璃钢天线通常用于网关、屋顶节点以及其他需要更好室外覆盖范围的固定安装场景。请检查设备是否已经包含所需的射频线缆，或者你是否需要一根 RP-SMA 转 N 型线缆。

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/_/-/_-min_1_2.png" alt="3 dBi fiberglass antenna kit with magnetic base" /></div>
  <div className="antenna-card-body">
    <h3>3 dBi 玻璃钢天线</h3>
    <span className="antenna-sku">SKU 318020652</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>频率</b>902-928 MHz</div>
      <div className="antenna-spec"><b>增益</b>3 dBi</div>
      <div className="antenna-spec"><b>长度</b>360 mm</div>
      <div className="antenna-spec"><b>包含</b>磁吸底座</div>
    </div>
    <p className="antenna-connect"><b>可连接设备：</b>SenseCAP M1 室内网关。随附的底座适合可移动或临时安装。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-902-928MHz-3dBi-with-Antenna-Base-p-5130.html">查看产品 →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020691__1_.jpg" alt="5.8 dBi fiberglass antenna kit" /></div>
  <div className="antenna-card-body">
    <h3>5.8 dBi 玻璃钢天线</h3>
    <span className="antenna-sku">SKU 318020691</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>频率</b>902-928 MHz</div>
      <div className="antenna-spec"><b>增益</b>5.8 dBi</div>
      <div className="antenna-spec"><b>长度</b>800 mm</div>
      <div className="antenna-spec"><b>包含</b>1 m CFD200 + 支架</div>
    </div>
    <p className="antenna-connect"><b>可连接设备：</b>通过随附的 RP-SMA 线缆连接 SenseCAP M1 Gateway 和 Solar Node P1/P1-Pro。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html">查看产品 →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png" alt="7 dBi fiberglass antenna" /></div>
  <div className="antenna-card-body">
    <h3>7 dBi 玻璃钢天线</h3>
    <span className="antenna-sku">SKU 318020613</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>频率</b>900-930 MHz</div>
      <div className="antenna-spec"><b>增益</b>7 dBi</div>
      <div className="antenna-spec"><b>长度</b>920 mm</div>
      <div className="antenna-spec"><b>包含</b>仅天线</div>
    </div>
    <p className="antenna-connect"><b>可连接设备：</b>通过随附的 RP-SMA 线缆连接 SenseCAP M1 Gateway 和 Solar Node P1/P1-Pro。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/Lora-Fiberglass-Antenna-900-930MHz-7dBi-920mm-p-4926.html">查看产品 →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020693__1_3.jpg" alt="8 dBi fiberglass antenna kit" /></div>
  <div className="antenna-card-body">
    <h3>8 dBi 玻璃钢天线</h3>
    <span className="antenna-sku">SKU 318020693</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>频率</b>902-928 MHz</div>
      <div className="antenna-spec"><b>增益</b>8 dBi</div>
      <div className="antenna-spec"><b>长度</b>1300 mm</div>
      <div className="antenna-spec"><b>包含</b>1 m CFD200 + 支架</div>
    </div>
    <p className="antenna-connect"><b>可连接设备：</b>通过随附的 RP-SMA 线缆连接 SenseCAP M1 Gateway 和 Solar Node P1/P1-Pro。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-928MHz-8dBi-1300mm-p-5278.html">查看产品 →</a>
  </div>
</div>

</div>

#### 棒状天线

棒状天线是用于开发板和便携式 LoRa 设备的紧凑型 SMA 天线。带有 I-PEX 天线座的设备，在使用这些天线前需要配合 120 mm SMA 转 I-PEX 天线线缆（SKU 321990397）。

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png" alt="868 MHz 2.8 dBi SMA antenna" /></div>
  <div className="antenna-card-body">
    <h3>2.8 dBi 远距离天线</h3>
    <span className="antenna-sku">SKU 318020269</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>频率</b>868 MHz</div>
      <div className="antenna-spec"><b>增益</b>2.8 dBi</div>
      <div className="antenna-spec"><b>长度</b>195 mm</div>
      <div className="antenna-spec"><b>接口</b>SMA 公头</div>
    </div>
    <p className="antenna-connect"><b>可连接设备：</b>直接连接 Wio-E5 Dev Board 或 Wio-E5 mini；通过 120 mm SMA 转 I-PEX 天线线缆（SKU 321990397）连接 Wio-SX1262 或 Wio Tracker L1 Pro。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/External-Antenna-868MHz-L195mm-black-folding-antena-With-Male-SMA-J-p-5045.html">查看产品 →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="915 MHz 2.6 dBi SMA antenna" /></div>
  <div className="antenna-card-body">
    <h3>2.6 dBi 远距离天线</h3>
    <span className="antenna-sku">SKU 318020389</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>频率</b>902-928 MHz</div>
      <div className="antenna-spec"><b>增益</b>2.6 dBi</div>
      <div className="antenna-spec"><b>长度</b>195 mm</div>
      <div className="antenna-spec"><b>连接器</b>SMA 公头</div>
    </div>
    <p className="antenna-connect"><b>连接到：</b>可直接连接 Wio-E5 Dev Board 或 Wio-E5 mini；通过 120 mm SMA-to-I-PEX 天线线缆（SKU 321990397）连接 Wio-SX1262 或 Wio Tracker L1 Pro。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html">查看产品 →</a>
  </div>
</div>

</div>

#### 室内天线

室内天线适用于桌面网关、轻热点，或临时室内放置的场景，此时磁吸底座比固定的室外安装更方便。

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/1/110991765_feature-02.jpg" alt="860-930 MHz indoor antenna with magnetic base" /></div>
  <div className="antenna-card-body">
    <h3>3 dBi 室内天线</h3>
    <span className="antenna-sku">SKU 110991765</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>频率</b>860-930 MHz</div>
      <div className="antenna-spec"><b>增益</b>3 dBi</div>
      <div className="antenna-spec"><b>长度</b>295 mm</div>
      <div className="antenna-spec"><b>安装方式</b>磁吸底座</div>
    </div>
    <p className="antenna-connect"><b>连接到：</b>SenseCAP M2 Data Only Hotspot 和 SenseCAP M2 Light Hotspot。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html">查看产品 →</a>
  </div>
</div>

</div>

### 2.4 GHz 和 5 GHz 天线

<div className="band-note"><strong>这些产品用于 BLE/Wi-Fi，而不是 868/915 MHz LoRa。</strong></div>

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg" alt="2.4 GHz FPC antenna for XIAO nRF54L15" /></div>
  <div className="antenna-card-body">
    <h3>2.4 GHz FPC 天线 A-04</h3>
    <span className="antenna-sku">SKU 100039813</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>频率</b>2.4 GHz</div>
      <div className="antenna-spec"><b>增益</b>1.86 dBi</div>
      <div className="antenna-spec"><b>连接器</b>I-PEX 4</div>
      <div className="antenna-spec"><b>线缆</b>50 mm</div>
    </div>
    <p className="antenna-connect"><b>直接连接到：</b>用于 BLE、Matter、Thread 或 Zigbee 的 XIAO nRF54L15。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html">查看产品 →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/1-103990623-2.4ghz-rod-antenna-for-xiao-esp32c3-45font.jpg" alt="2.4GHz rod antenna for Seeed Studio XIAO" /></div>
  <div className="antenna-card-body">
    <h3>适用于 Seeed Studio XIAO 的 2.4GHz 棒状天线</h3>
    <span className="antenna-sku">SKU 103990623</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>频率</b>2.4 GHz</div>
      <div className="antenna-spec"><b>增益</b>2.81 dBi</div>
      <div className="antenna-spec"><b>类型</b>棒状天线</div>
      <div className="antenna-spec"><b>板端</b>I-PEX</div>
    </div>
    <p className="antenna-connect"><b>直接连接到：</b>Seeed Studio XIAO ESP32C3、XIAO ESP32C6 和 XIAO ESP32S3（Sense），用于 2.4 GHz 无线通信。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html">查看产品 →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" alt="2.4 and 5 GHz external antenna set" /></div>
  <div className="antenna-card-body">
    <h3>2.4G/5G 外置天线套装</h3>
    <span className="antenna-sku">SKU 114993587</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>频率</b>2.4 / 5 GHz</div>
      <div className="antenna-spec"><b>外端</b>RP-SMA 公头</div>
      <div className="antenna-spec"><b>线缆</b>1.13 同轴</div>
      <div className="antenna-spec"><b>长度</b>130 mm</div>
    </div>
    <p className="antenna-connect"><b>适用于：</b>RTL8822CE/RTL8852BE Wi-Fi 网卡套件和兼容的 reComputer Jetson 系统，包括 reComputer J4012。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html">查看产品 →</a>
  </div>
</div>

</div>

## 射频线缆

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png" alt="SMA to I-PEX antenna cable" /></div>
  <div className="antenna-card-body">
    <h3>SMA 转 I-PEX 天线线缆</h3>
    <span className="antenna-sku">SKU 321990397</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>长度</b>120 mm</div>
      <div className="antenna-spec"><b>两端</b>I-PEX → SMA</div>
    </div>
    <p className="antenna-connect"><b>适用于：</b>Wio-SX1262 或 Wio Tracker L1 Pro I-PEX 插座 → SMA 公头棒状天线。该线缆将小型板端 I-PEX 连接转换为适合外壳安装的 SMA 插座。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html">查看产品 →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990875_feature-02.jpg" alt="CFD400 N Female to RP-SMA Male cable" /></div>
  <div className="antenna-card-body">
    <h3>CFD400 网关射频线缆</h3>
    <span className="antenna-sku">SKU 321990875 / 876 / 877</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>长度</b>1 m / 3 m / 5 m</div>
      <div className="antenna-spec"><b>两端</b>N 母头 → RP-SMA 公头</div>
    </div>
    <p className="antenna-connect"><b>适用于：</b>SenseCAP M1 室内网关或 SenseCAP ONE 室外网关 → N 型玻璃钢天线。请使用尽可能短的可用长度。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-1m-p-5322.html">1 m</a> · <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-3m-p-5320.html">3 m</a> · <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-5m-p-5321.html">5 m</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png" alt="RP-SMA Male to N-Type Female RF cable" /></div>
  <div className="antenna-card-body">
    <h3>RP-SMA 转 N 型射频线缆</h3>
    <span className="antenna-sku">SKU 100007236</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>长度</b>300 mm</div>
      <div className="antenna-spec"><b>两端</b>RP-SMA 公头 → N 母头</div>
    </div>
    <p className="antenna-connect"><b>适用于：</b>Solar Node P1/P1-Pro、SenseCAP M1 或 SenseCAP M2 → 裸露的 N 型玻璃钢天线。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-RP-SMA-Male-to-N-Type-SMA-Female-300mm.html">查看产品 →</a>
  </div>
</div>

</div>
