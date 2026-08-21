---
description: Wio Tracker L1 の概要
title: Wio Tracker L1 の概要
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-L1.webp
slug: /wio_tracker_l1_node
sidebar_position: 1
last_update:
  date: 12/18/2025
  author: Michelle Huang
createdAt: '2025-05-23'
updatedAt: '2026-08-03'
url: https://wiki.seeedstudio.com/ja/wio_tracker_l1_node/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="pir" width={600} height="auto" /></p>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>
Wio Tracker L1 シリーズは、LoRa（862～930 MHz）、高効率な処理を行う nRF52840、そして高精度な位置情報取得のための L76K GPS モジュールを搭載した、低消費電力かつ高い拡張性を備えた [Meshtastic®](https://meshtastic.org/) ノードです。柔軟性を重視した設計により、OLED や E-Ink ディスプレイ、ソーラーパネルおよびバッテリー電源に対応しており、幅広い IoT やオフグリッド用途に最適です。

## L1 シリーズのモデル

:::tip
Wio Tracker L1 シリーズは 4 つのバージョンが用意されており、用途に最も適したものを選択できます。
:::

### シリーズ紹介

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/TTiDN3h7cNk?si=2F0PXFlQmDSefCdX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### バージョン比較

|製品名|Wio Tracker L1 Lite|Wio Tracker L1|Wio Tracker L1 Pro|Wio Tracker L1 E-Ink|
|------------------|------------------|--------------------------|-----------------------|-----------------------|
|画像|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993653-wio-tracker-l1-lite.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993648-wio-tracker-l1.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993649-wio-tracker-l1-pro.jpg" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/L1-e-ink.png" alt="pir" width={300} height="auto" />|
|購入リンク|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html)</p>|
|LoRa|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|GPS|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|画面|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>1.3 インチ OLED</p><br/><p style={{textAlign: 'center'}}>解像度：128 × 64 ピクセル</p>|<p style={{textAlign: 'center'}}>1.3 インチ OLED</p><br/><p style={{textAlign: 'center'}}>解像度：128 × 64 ピクセル</p>|<p style={{textAlign: 'center'}}>2.13 インチ E-ink</p><br/><p style={{textAlign: 'center'}}>解像度：122 × 250 ピクセル</p>|
|ソーラー＋バッテリーコネクタ|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>内蔵 2000mAh バッテリー</p>|<p style={{textAlign: 'center'}}>✅</p>|
|筐体|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>-</p>|

## 概要

### 特長

- **Meshtastic ファームウェアをプリインストール**
Meshtastic ファームウェアがあらかじめインストールされているため、箱から出してすぐにシームレスなセットアップで使用を開始できます。

- **3 種類の電源供給オプション**
Type-C 急速充電、ソーラー入力、リチウムイオンバッテリー電源に対応し、さまざまな環境で柔軟に展開可能です。屋外やモバイル用途に最適です。

- **柔軟なディスプレイ対応**
1.3 インチ OLED と 2.13 インチ E-Ink のオプション画面に対応し、消費電力や視覚的フィードバックのニーズに応じて多様な表示方法を選択できます。

- **高い拡張性**
Grove エコシステムと完全互換であり、PTH ヘッダおよび SWD デバッグインターフェースを備えているため、カスタムハードウェア拡張や高度な開発が可能です。

### 仕様

:::tip
最新ロットの L1、L1 Lite、L1 E-Ink にはすべてバッテリーアダプターケーブルが付属しており、1mm インターフェースを 2mm インターフェースに変換します。これにより、使用できるバッテリーの選択肢が広がります。
:::

<table>
  <tr>
    <th colspan="1">プロセッサ</th>
    <th colspan="1">
      Nordic nRF52840<br />ARM® Cortex®-M4（FPU 搭載）、最大 64 MHz 動作
    </th>
  </tr>
  <tr>
    <td colspan="1">オンチップメモリ</td>
    <td colspan="1">1 MB フラッシュおよび 256 kB RAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">無線</td>
    <td colspan="1">LoRa：<a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html">Wio-SX1262</a> をベースとし、862～930MHz に対応</td>
  </tr>
   <tr>
  <td colspan="1">L1 Pro 用 LoRa アンテナ：3dBi</td>
  </tr>
  <tr>
    <td colspan="1">Bluetooth 5.0</td>
  </tr>
  <tr>
    <td colspan="1">GPS</td>
    <td colspan="1">L76K（GPS、BeiDou、GLONASS、QZSS）</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">インターフェース</td>
    <td colspan="1">Grove *1：UART/IIC/GPIO</td>
  </tr>
  <tr>
    <td colspan="1">スルーホール（PTH）：UART/IIC/GPIO/アナログ</td>
  </tr>
  <tr>
    <td colspan="1">SWD 用のはんだ付けパッドを用意</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">電源入力</td>
    <td colspan="1">USB Type-C：5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">ソーラーパネル（2P-2.0mm）：5V — 1A（5V を超えないこと）</td>
  </tr>
  <tr>
    <td colspan="1">リチウムバッテリー（2P-1.25mm）：3.7V — 1A</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">[OLED 画面](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html)</td>
    <td colspan="1">サイズ：1.3 インチ</td>
  </tr>
  <tr>
    <td colspan="1">解像度：128 × 64 ピクセル</td>
  </tr>
  <tr>
    <td colspan="1">有効表示エリア（mm）：34.5 × 23.0</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">[E-Ink 画面](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)</td>
    <td colspan="1">サイズ：2.13 インチ</td>
  </tr>
  <tr>
    <td colspan="1">解像度：122 × 250 ピクセル</td>
  </tr>
  <tr>
    <td colspan="1">有効表示エリア（mm）：48.55 × 23.7046</td>
  </tr>
  <tr>
    <td colspan="1">認証</td>
    <td colspan="1">FCC、CE、RoHS</td>
  </tr>
</table>

### ハードウェア概要

**Wio Tracker L1**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker-l1.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Lite**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1_lite.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1-pro.png" alt="pir" width={800} height="auto" /></p>

**ブロック図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1%20Diagram.png" alt="pir" width={800} height="auto" /></p>

## 技術サポートと製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>