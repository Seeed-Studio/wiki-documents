---
description: SenseCAP シリーズ製品および互換性のある Seeed Studio LoRa デバイスを購入または展開する際に、周波数、利得、コネクタ、変換ケーブル、対応デバイス別にアンテナを比較します。
title: LoRa アンテナ選択ガイド
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png
slug: /lora_antenna_selection_guide
sidebar_position: 0
last_update:
  date: 2026-06-29
  author: Yves
createdAt: '2026-06-29'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/lora_antenna_selection_guide/
---

このガイドは、SenseCAP シリーズ製品および互換性のある Seeed Studio LoRa デバイスを購入または展開する際に、適切な交換用アンテナを選択するのに役立ちます。アンテナの周波数帯、コネクタの種類、必要な RF ケーブル、対応デバイス、および実践的な選定のヒントを包括的にまとめています。

まず、デバイスの周波数帯に合ったアンテナを選び、その後でデバイスが直接接続用コネクタを必要とするのか、変換ケーブルを必要とするのかを確認してください。

:::warning
2.4/5 GHz アンテナを 868/915 MHz LoRa ポートに接続しないでください。適切なアンテナが接続されていない状態で送信してはいけません。
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

## クイックガイド

以下の図は、各種デバイスをアンテナおよび変換ケーブルとどのように組み合わせるべきかを示しています。

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
    <b>SMA ポートを備えたデバイス</b>
    <span>Wio-E5 Dev Board または Wio-E5 mini</span>
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
    <b>SMA オスアンテナの選択肢</b>
    <span>SKU 318020269 または SKU 318020389</span>
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
    <b>I-PEX ソケットを備えたデバイス</b>
    <span>Wio-SX1262 または Wio Tracker L1 Pro</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png" alt="SMA-to-I-PEX antenna cable" /></div>
    <b>SMA-to-I-PEX アンテナケーブル</b>
    <span>120 mm · SKU 321990397</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="SMA male LoRa antenna" /></div>
    <b>SMA オスアンテナ</b>
    <span>868 MHz SKU 318020269 または 915 MHz SKU 318020389</span>
  </div>
</div>

<div className="band-note"><strong>ガラス繊維アンテナキットには、通常すでにゲートウェイ用 RF ケーブルが含まれています。</strong>SKU 318020613 のような N 型コネクタ付きガラス繊維アンテナ単体を選ぶ場合にのみ、別途ケーブルを追加してください。</div>

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
    <b>RP-SMA ポートを備えたデバイス</b>
    <span>P1 / P1-Pro、SenseCAP M1、または SenseCAP M2</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png" alt="RP-SMA to N-Type RF cable" /></div>
    <b>RP-SMA から N 型 RF ケーブル</b>
    <span>300 mm · SKU 100007236</span>
  </div>
  <div className="ipex-arrow">→</div>
  <div className="ipex-card">
    <div className="ipex-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png" alt="N-type fiberglass antenna" /></div>
    <b>ベースなしガラス繊維アンテナ</b>
    <span>例：SKU 318020613</span>
  </div>
</div>

## 対応デバイス（代表例）

以下のデバイスは代表的な例にすぎません。他の SenseCAP や Seeed Studio デバイスについても、同じ選定ロジックを使用してください。まずアンテナ周波数を一致させ、その後、デバイスが直接 SMA/RP-SMA 接続を必要とするのか、あるいは変換ケーブルを必要とするのかを確認します。

<div className="device-grid">
  <a className="device-card" href="/ja/LoRa_E5_Dev_Board/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="Wio-E5 Development Kit" /></div>
    <div className="device-card-body"><strong>Wio-E5 Dev Board</strong><span>直接 SMA アンテナ</span></div>
  </a>
  <a className="device-card" href="/ja/LoRa_E5_mini/">
    <div className="device-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="Wio-E5 mini" /></div>
    <div className="device-card-body"><strong>Wio-E5 mini</strong><span>直接 SMA アンテナ</span></div>
  </a>
  <a className="device-card" href="/ja/wio_sx1262/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" alt="Wio-SX1262 module" /></div>
    <div className="device-card-body"><strong>Wio-SX1262</strong><span>120 mm SMA-to-I-PEX ケーブル（321990397）→ SMA アンテナ</span></div>
  </a>
  <a className="device-card" href="/ja/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/">
    <div className="device-card-image"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" alt="SenseCAP M1 Indoor Gateway" /></div>
    <div className="device-card-body"><strong>SenseCAP M1 Gateway</strong><span>RP-SMA ケーブル → ベア N 型ガラス繊維アンテナ</span></div>
  </a>
  <a className="device-card" href="/ja/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/">
    <div className="device-card-image"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/09.png" alt="SenseCAP M2 Data Only Hotspot" /></div>
    <div className="device-card-body"><strong>SenseCAP M2 Data Only</strong><span>RP-SMA ケーブル → ベア N 型ガラス繊維アンテナ</span></div>
  </a>
  <a className="device-card" href="/ja/meshtastic_solar_node/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="SenseCAP Solar Node P1 and P1-Pro" /></div>
    <div className="device-card-body"><strong>Solar Node P1 / P1-Pro</strong><span>RP-SMA ケーブル → ベア N 型ガラス繊維アンテナ</span></div>
  </a>
  <a className="device-card" href="/ja/wio_tracker_l1_node/">
    <div className="device-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="Wio Tracker L1 Pro" /></div>
    <div className="device-card-body"><strong>Wio Tracker L1 Pro</strong><span>120 mm SMA-to-I-PEX ケーブル（321990397）→ SMA アンテナ</span></div>
  </a>
</div>

## アンテナ概要

### 860〜930MHz アンテナ

これらのアンテナは、サブ GHz の LoRa、LoRaWAN、および Meshtastic デバイスに使用します。以下の製品はアンテナの形状ごとにグループ化されているため、高利得のガラス繊維アンテナ、コンパクトなロッドアンテナ、屋内用マグネットベースアンテナのどれが必要かを素早く判断できます。

#### ガラス繊維アンテナ

ガラス繊維アンテナは、ゲートウェイ、屋根に設置されたノード、その他屋外での通信距離を向上させる必要がある固定設置向けに選ばれることが多いです。デバイスに必要な RF ケーブルがすでに含まれているか、RP-SMA から N 型へのケーブルが別途必要かを確認してください。

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/_/-/_-min_1_2.png" alt="3 dBi fiberglass antenna kit with magnetic base" /></div>
  <div className="antenna-card-body">
    <h3>3 dBi ガラス繊維アンテナ</h3>
    <span className="antenna-sku">SKU 318020652</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>周波数</b>902〜928 MHz</div>
      <div className="antenna-spec"><b>利得</b>3 dBi</div>
      <div className="antenna-spec"><b>長さ</b>360 mm</div>
      <div className="antenna-spec"><b>同梱物</b>マグネットベース</div>
    </div>
    <p className="antenna-connect"><b>接続先：</b>SenseCAP M1 Indoor Gateway。付属のベースは可搬または一時的な設置に適しています。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-902-928MHz-3dBi-with-Antenna-Base-p-5130.html">製品を見る →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020691__1_.jpg" alt="5.8 dBi fiberglass antenna kit" /></div>
  <div className="antenna-card-body">
    <h3>5.8 dBi ガラス繊維アンテナ</h3>
    <span className="antenna-sku">SKU 318020691</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>周波数</b>902〜928 MHz</div>
      <div className="antenna-spec"><b>利得</b>5.8 dBi</div>
      <div className="antenna-spec"><b>長さ</b>800 mm</div>
      <div className="antenna-spec"><b>同梱物</b>1 m CFD200 + ブラケット</div>
    </div>
    <p className="antenna-connect"><b>接続先：</b>付属の RP-SMA ケーブルを介して SenseCAP M1 Gateway および Solar Node P1/P1-Pro に接続します。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html">製品を見る →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020613_first-min_1.png" alt="7 dBi fiberglass antenna" /></div>
  <div className="antenna-card-body">
    <h3>7 dBi ガラス繊維アンテナ</h3>
    <span className="antenna-sku">SKU 318020613</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>周波数</b>900〜930 MHz</div>
      <div className="antenna-spec"><b>利得</b>7 dBi</div>
      <div className="antenna-spec"><b>長さ</b>920 mm</div>
      <div className="antenna-spec"><b>同梱物</b>アンテナ本体のみ</div>
    </div>
    <p className="antenna-connect"><b>接続先：</b>付属の RP-SMA ケーブルを介して SenseCAP M1 Gateway および Solar Node P1/P1-Pro に接続します。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/Lora-Fiberglass-Antenna-900-930MHz-7dBi-920mm-p-4926.html">製品を見る →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020693__1_3.jpg" alt="8 dBi fiberglass antenna kit" /></div>
  <div className="antenna-card-body">
    <h3>8 dBi ガラス繊維アンテナ</h3>
    <span className="antenna-sku">SKU 318020693</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>周波数</b>902〜928 MHz</div>
      <div className="antenna-spec"><b>利得</b>8 dBi</div>
      <div className="antenna-spec"><b>長さ</b>1300 mm</div>
      <div className="antenna-spec"><b>同梱物</b>1 m CFD200 + ブラケット</div>
    </div>
    <p className="antenna-connect"><b>接続先：</b>付属の RP-SMA ケーブルを介して SenseCAP M1 Gateway および Solar Node P1/P1-Pro に接続します。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-928MHz-8dBi-1300mm-p-5278.html">製品を見る →</a>
  </div>
</div>

</div>

#### ロッドアンテナ

ロッドアンテナは、開発ボードやポータブル LoRa デバイス向けのコンパクトな SMA アンテナです。I-PEX アンテナソケットを備えたデバイスでは、これらのアンテナを使用する前に 120 mm SMA-to-I-PEX アンテナケーブル（SKU 321990397）が必要です。

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020269_feature-02.png" alt="868 MHz 2.8 dBi SMA antenna" /></div>
  <div className="antenna-card-body">
    <h3>2.8 dBi ロングレンジアンテナ</h3>
    <span className="antenna-sku">SKU 318020269</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>周波数</b>868 MHz</div>
      <div className="antenna-spec"><b>利得</b>2.8 dBi</div>
      <div className="antenna-spec"><b>長さ</b>195 mm</div>
      <div className="antenna-spec"><b>コネクタ</b>SMA オス</div>
    </div>
    <p className="antenna-connect"><b>接続先：</b>Wio-E5 Dev Board または Wio-E5 mini には直接接続、Wio-SX1262 または Wio Tracker L1 Pro には 120 mm SMA-to-I-PEX アンテナケーブル（SKU 321990397）を介して接続します。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/External-Antenna-868MHz-L195mm-black-folding-antena-With-Male-SMA-J-p-5045.html">製品を見る →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/1/318020389_package-03_1.png" alt="915 MHz 2.6 dBi SMA antenna" /></div>
  <div className="antenna-card-body">
    <h3>2.6 dBi 長距離アンテナ</h3>
    <span className="antenna-sku">SKU 318020389</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>周波数</b>902-928 MHz</div>
      <div className="antenna-spec"><b>利得</b>2.6 dBi</div>
      <div className="antenna-spec"><b>長さ</b>195 mm</div>
      <div className="antenna-spec"><b>コネクタ</b>SMA オス</div>
    </div>
    <p className="antenna-connect"><b>接続対象：</b>Wio-E5 Dev Board または Wio-E5 mini に直接接続、Wio-SX1262 または Wio Tracker L1 Pro には 120 mm SMA-to-I-PEX アンテナケーブル（SKU 321990397）経由で接続。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html">製品を見る →</a>
  </div>
</div>

</div>

#### 屋内用アンテナ

屋内用アンテナは、デスクトップゲートウェイ、ライトホットスポット、または一時的な屋内設置に適しており、固定式の屋外マウントよりも磁気ベースの方が便利な場合に使用します。

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/1/110991765_feature-02.jpg" alt="860-930 MHz indoor antenna with magnetic base" /></div>
  <div className="antenna-card-body">
    <h3>3 dBi 屋内用</h3>
    <span className="antenna-sku">SKU 110991765</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>周波数</b>860-930 MHz</div>
      <div className="antenna-spec"><b>利得</b>3 dBi</div>
      <div className="antenna-spec"><b>長さ</b>295 mm</div>
      <div className="antenna-spec"><b>マウント</b>磁気ベース</div>
    </div>
    <p className="antenna-connect"><b>接続対象：</b>SenseCAP M2 Data Only Hotspot および SenseCAP M2 Light Hotspot。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html">製品を見る →</a>
  </div>
</div>

</div>

### 2.4 GHz および 5 GHz アンテナ

<div className="band-note"><strong>これらの製品は 868/915 MHz LoRa 用ではなく、BLE/Wi-Fi 用です。</strong></div>

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg" alt="2.4 GHz FPC antenna for XIAO nRF54L15" /></div>
  <div className="antenna-card-body">
    <h3>2.4 GHz FPC アンテナ A-04</h3>
    <span className="antenna-sku">SKU 100039813</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>周波数</b>2.4 GHz</div>
      <div className="antenna-spec"><b>利得</b>1.86 dBi</div>
      <div className="antenna-spec"><b>コネクタ</b>I-PEX 4</div>
      <div className="antenna-spec"><b>ケーブル</b>50 mm</div>
    </div>
    <p className="antenna-connect"><b>直接接続対象：</b>XIAO nRF54L15（BLE、Matter、Thread、Zigbee 用）。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html">製品を見る →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/1-103990623-2.4ghz-rod-antenna-for-xiao-esp32c3-45font.jpg" alt="2.4GHz rod antenna for Seeed Studio XIAO" /></div>
  <div className="antenna-card-body">
    <h3>Seeed Studio XIAO 用 2.4GHz ロッドアンテナ</h3>
    <span className="antenna-sku">SKU 103990623</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>周波数</b>2.4 GHz</div>
      <div className="antenna-spec"><b>利得</b>2.81 dBi</div>
      <div className="antenna-spec"><b>タイプ</b>ロッドアンテナ</div>
      <div className="antenna-spec"><b>基板側端子</b>I-PEX</div>
    </div>
    <p className="antenna-connect"><b>直接接続対象：</b>Seeed Studio XIAO ESP32C3、XIAO ESP32C6、XIAO ESP32S3 (Sense) の 2.4 GHz 無線通信。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html">製品を見る →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" alt="2.4 and 5 GHz external antenna set" /></div>
  <div className="antenna-card-body">
    <h3>2.4G/5G 外付けアンテナセット</h3>
    <span className="antenna-sku">SKU 114993587</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>周波数</b>2.4 / 5 GHz</div>
      <div className="antenna-spec"><b>外部側端子</b>RP-SMA オス</div>
      <div className="antenna-spec"><b>ケーブル</b>1.13 同軸</div>
      <div className="antenna-spec"><b>長さ</b>130 mm</div>
    </div>
    <p className="antenna-connect"><b>用途：</b>RTL8822CE/RTL8852BE Wi-Fi NIC キットおよび reComputer J4012 を含む互換 reComputer Jetson システム。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html">製品を見る →</a>
  </div>
</div>

</div>

## RF ケーブル

<div className="antenna-grid">

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990397_feature-02.png" alt="SMA to I-PEX antenna cable" /></div>
  <div className="antenna-card-body">
    <h3>SMA - I-PEX アンテナケーブル</h3>
    <span className="antenna-sku">SKU 321990397</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>長さ</b>120 mm</div>
      <div className="antenna-spec"><b>端子</b>I-PEX → SMA</div>
    </div>
    <p className="antenna-connect"><b>用途：</b>Wio-SX1262 または Wio Tracker L1 Pro の I-PEX ソケット → SMA オスロッドアンテナ。このケーブルは、小型の基板側 I-PEX 接続を、筐体に取り付けやすい SMA ソケットに変換します。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html">製品を見る →</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/3/2/321990875_feature-02.jpg" alt="CFD400 N Female to RP-SMA Male cable" /></div>
  <div className="antenna-card-body">
    <h3>CFD400 ゲートウェイ RF ケーブル</h3>
    <span className="antenna-sku">SKU 321990875 / 876 / 877</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>長さ</b>1 m / 3 m / 5 m</div>
      <div className="antenna-spec"><b>端子</b>N メス → RP-SMA オス</div>
    </div>
    <p className="antenna-connect"><b>用途：</b>SenseCAP M1 屋内ゲートウェイまたは SenseCAP ONE 屋外ゲートウェイ → N 型グラスファイバーアンテナ。使用する長さは、可能な限り短くしてください。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-1m-p-5322.html">1 m</a> · <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-3m-p-5320.html">3 m</a> · <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-N-Female-to-RP-SMA-Male-CFD400-Black-5m-p-5321.html">5 m</a>
  </div>
</div>

<div className="antenna-card">
  <div className="antenna-card-image"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/0/-/0-sma_rp-sma_.png" alt="RP-SMA Male to N-Type Female RF cable" /></div>
  <div className="antenna-card-body">
    <h3>RP-SMA - N 型 RF ケーブル</h3>
    <span className="antenna-sku">SKU 100007236</span>
    <div className="antenna-specs">
      <div className="antenna-spec"><b>長さ</b>300 mm</div>
      <div className="antenna-spec"><b>端子</b>RP-SMA オス → N メス</div>
    </div>
    <p className="antenna-connect"><b>用途：</b>Solar Node P1/P1-Pro、SenseCAP M1、SenseCAP M2 → 裸の N 型グラスファイバーアンテナ。</p>
    <a className="antenna-link" href="https://www.seeedstudio.com/RF-Cable-RP-SMA-Male-to-N-Type-SMA-Female-300mm.html">製品を見る →</a>
  </div>
</div>

</div>
