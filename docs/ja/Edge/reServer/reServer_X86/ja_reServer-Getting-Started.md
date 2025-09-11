---
description: reServer X86
title: reServer X86 の使い方
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reServer-Getting-Started
last_update:
  date: 05/15/2025
  author: w0x7ce

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ---
name: reServer
category: reServer
bzurl: 
wikiurl: 
sku: 
--- -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/上架01.png" alt="pir" width={600} height="auto" /></p>

reServer は、reThingsファミリーのマイルストーン製品として、非常にコンパクトで強力なスマートサーバーです。この小型サーバーは、エッジからクラウドまで簡単かつ効率的に動作することができます。

reServer は ODYSSEY X86 v2 ボードをベースにしており、最新の Intel® Core™ 第11世代プロセッサと Intel® UHD Graphics または Intel® Iris Xe Graphics によって駆動されます。これにより、さまざまなアプリケーションにおいて高いCPUおよびAI性能を発揮します。2つの高速2.5ギガビットイーサネットポートを備え、5G、LoRa、BLE、WiFiを含むハイブリッド接続をサポートします。同時に、reServer はコンパクトな設計で、ほぼすべてのシナリオで効率的に動作します。また、reServer の整然とした構造により、ハードドライブ、メモリ、PCIeスロットへのアクセスが簡単で、インストール、アップグレード、メンテナンスが容易です。

デュアルSATA III 6.0Gbpsデータコネクタを備えたreServer は、最大2つの3.5インチ/2.5インチSATA内部ハードディスクドライブを装備して、より多くのストレージを確保できます。また、M.2コネクタを備えており、より高速な読み書き速度を実現するためにさまざまなSSDを接続できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-X86-i3-8G-256SSD-p-4965.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 全体寸法132mm x 124mm x 233mmのコンパクトなサーバーデザイン
- 最新の第11世代Intel® Core™ CPUおよびIntel® UHD GraphicsまたはIntel® Iris Xe Graphicsを搭載
- デュアル2.5ギガビットイーサネットポート、USB 3.2 Type-Aポート、USB 2.0 Type-Aポート、HDMIポート、DPポートを含む豊富な周辺機器
- 5G、LoRa、BLE、WiFiを含むハイブリッド接続をサポート（5GおよびLoRaは追加モジュールが必要）
- デュアルSATA III 6.0Gbpsデータコネクタで3.5インチ/2.5インチSATAハードディスクドライブをサポートし、筐体内に両方を収納可能なスペースを確保
- SSD、4G/5Gモジュール、WiFi 6などの拡張性を提供するM.2 B-Key/M-Key/E-Key
- 大型VCヒートシンクを備えた静音冷却ファンで優れた放熱性能
- 筐体を開けた後、内部コンポーネントへのアクセスが容易で、インストール、アップグレード、メンテナンスが簡単
- Windows 10 Enterprise（未アクティベート）をプリインストール、他のWindows OSおよびLinux OSもサポート

## 仕様

<table style={{tableLayout: 'fixed', width: 1173}}>

<thead>
  <tr>
    <th colspan="2">バージョン</th>
    <th colspan="3">基本バージョン</th>
    <th colspan="2">高性能バージョン</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">プラットフォーム</td>
    <td>プロセッサ</td>
    <td>Intel® Core™ 第11世代 i3 1115G4</td>
    <td>Intel® Core™ 第11世代 i3 1125G4</td>
    <td>Intel® Core™ 第11世代 i5 1135G7</td>
    <td>Intel® Core™ vPro® 第11世代 i5 1145GRE</td>
    <td>Intel® Core™ vPro® 第11世代 i7 1185GRE</td>
  </tr>
  <tr>
    <td>プロセッサのコア/スレッド</td>
    <td>2C/4T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
  </tr>
  <tr>
    <td>コプロセッサ</td>
    <td colspan="3">Microchip® ATSAMD21G18 32ビット ARM® Cortex-M0+ @ 48MHz</td>
    <td colspan="2">Raspberry Pi® RP2040 32ビット デュアル ARM Cortex-M0+ @ 133MHz</td>
  </tr>
  <tr>
    <td rowspan="3">メモリ</td>
    <td>技術</td>
    <td colspan="5">デュアルチャネル DDR4-3200</td>
  </tr>
  <tr>
    <td>容量</td>
    <td colspan="3">8GB; 16GB（最大64GBサポート）</td>
    <td colspan="2">最大64GBサポート</td>
  </tr>
  <tr>
    <td>ECCメモリ対応</td>
    <td colspan="3">NO</td>
    <td colspan="2">YES</td>
  </tr>
  <tr>
    <td>グラフィックス</td>
    <td>コントローラ</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 96EUs(400-1300MHz)</td>
  </tr>
  <tr>
    <td rowspan="2">高度な技術</td>
    <td>Intel® vPro®</td>
    <td colspan="3">NO</td>
    <td colspan="2">YES</td>
  </tr>
  <tr>
    <td>Intel® Total Memory Encryption</td>
    <td colspan="3">NO</td>
    <td colspan="2">YES</td>
  </tr>
  <tr>
    <td>ネットワーク</td>
    <td>コントローラ</td>
    <td colspan="3">Intel® Ethernet Controller I225-V</td>
    <td colspan="2">Intel® Ethernet Controller I225-LM</td>
  </tr>
  <tr>
    <td rowspan="2">ワイヤレス</td>
    <td>WiFi</td>
    <td colspan="5">M.2 E-Key(PCIE &amp; CNViサポート), Intel® Wi-Fi 6 AX201(オプション)</td>
  </tr>
  <tr>
    <td>Bluetooth</td>
    <td colspan="5">Bluetooth 5.0, BLE(オプション)</td>
  </tr>
  <tr>
    <td rowspan="4">ディスプレイ</td>
    <td>LCD</td>
    <td colspan="5">eDP 40ピン 4レーンコネクタ</td>
  </tr>
  <tr>
    <td>HDMI</td>
    <td colspan="5">1 x HDMI 2.0b, 最大4Kx2Kx24bpp@60Hz</td>
  </tr>
  <tr>
    <td>DP</td>
    <td colspan="5">1 x DP1.4a 7680x4320x24bpp@60Hz</td>
  </tr>
  <tr>
    <td>マルチディスプレイ</td>
    <td colspan="5">各ディスプレイインターフェースの組み合わせで4つの同時ディスプレイ</td>
  </tr>
  <tr>
    <td rowspan="7">外部I/O</td>
    <td>イーサネット</td>
    <td colspan="5">2 x 2.5GbE LANポート (RJ45, 10/100/1000/2500 Mbps対応), Intel® i225</td>
  </tr>
  <tr>
    <td>HDMI/DP</td>
    <td colspan="5">1つ/1つ</td>
  </tr>
  <tr>
    <td>USB Type-C</td>
    <td colspan="3">N/A</td>
    <td colspan="2">USB PD / USB 4.0 / Thunderbolt 4</td>
  </tr>
  <tr>
    <td>USB Type-A</td>
    <td colspan="3">USB2.0 Type A x1 ; USB3.2 Type A x1</td>
    <td colspan="2">USB2.0 Type A x2 ; USB3.2 Type A x1</td>
  </tr>
  <tr>
    <td>LED</td>
    <td colspan="5">電源ステータス</td>
  </tr>
  <tr>
    <td>電源供給</td>
    <td colspan="5">1x5.5x2.5mm DCジャック / Wafer 2.0mm 8ピン</td>
  </tr>
  <tr>
    <td>Micro Simカードスロット</td>
    <td colspan="5">1</td>
  </tr>
  <tr>
    <td rowspan="10">内部I/O</td>
    <td>SATA</td>
    <td colspan="5">2 x SATA Gen III 6.0 Gb/sデータコネクタ + 3 x SATA電源コネクタ</td>
  </tr>
  <tr>
    <td>COMポート</td>
    <td colspan="5">1 x RS-232/422/485, 1 x RS-232</td>
  </tr>
  <tr>
    <td>GPIO</td>
    <td colspan="3">28ピン Arduinoコプロセッサ 2.54mmヘッダ</td>
    <td colspan="2">30ピン Raspberry Piコプロセッサ 2.54mmヘッダ</td>
  </tr>
  <tr>
    <td>オーディオ</td>
    <td colspan="5">Realtek高精細オーディオ、マイク+ヘッドフォンコンボコネクタ</td>
  </tr>
  <tr>
    <td>USB2.0</td>
    <td colspan="5">USB2.0 9ピンヘッダ x2 480Mbps</td>
  </tr>
  <tr>
    <td>ファン</td>
    <td colspan="5">2 x 12V 4線ファンヘッダ、PWM制御</td>
  </tr>
  <tr>
    <td>フロントパネル制御</td>
    <td colspan="5">電源オン、リセット、電源ステータスLED、SATAステータスLED</td>
  </tr>
  <tr>
    <td>S/PDIF</td>
    <td colspan="5">3ピン 2.54mmヘッダ</td>
  </tr>
  <tr>
    <td>SATA電源</td>
    <td colspan="5">WAFER4ピン 2.0ピッチコネクタ</td>
  </tr>
  <tr>
    <td>コプロセッサデバッグポート</td>
    <td colspan="5">6ピン 0.5mm FPCコネクタ (SWD)</td>
  </tr>
  <tr>
    <td rowspan="4">拡張</td>
    <td>M.2 M-Key</td>
    <td colspan="5">1 x M-Key 2242/2280(PCIe 3.0 x4）</td>
  </tr>
  <tr>
    <td>M.2 E-Key</td>
    <td colspan="5">1 x E-Key 2230(PCIe 3.0 x1; USB2.0 x1;Intel CNVi)</td>
  </tr>
  <tr>
    <td>M.2 B-Key</td>
    <td colspan="5">1 x B-Key2242/2252/2280(PCIe 3.0 x2; USB2.0 x1)</td>
  </tr>
  <tr>
    <td>高速I/O</td>
    <td colspan="3">1 X PCIe x4 Gen4 </td>
    <td colspan="2">1 X PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIOなど</td>
  </tr>
  <tr>
    <td rowspan="2">電源</td>
    <td>供給電圧</td>
    <td colspan="3">DCジャック: 12V</td>
    <td colspan="2">DCジャック: 12V-19V</td>
  </tr>
  <tr>
    <td>RTCバッテリー</td>
    <td colspan="5">リチウム 3V/210mAH</td>
  </tr>
  <tr>
    <td>認証</td>
    <td>EMC</td>
    <td colspan="5">CE,FCC,TELEC</td>
  </tr>
  <tr>
    <td rowspan="3">機械的仕様</td>
    <td>寸法</td>
    <td colspan="5">132mm*124mm*233mm</td>
  </tr>
  <tr>
    <td>熱ソリューション</td>
    <td colspan="5">ヒートパイプアセンブリ/ヒートスプレッディングベイパーチャンバーアセンブリ</td>
  </tr>
  <tr>
    <td>重量</td>
    <td colspan="5">1800g</td>
  </tr>
</tbody>
</table>

## 比較

<table style={{tableLayout: 'fixed', width: 1354}}>
<thead>
  <tr>
    <th>バージョン</th>
    <th colspan="3">基本バージョン</th>
    <th colspan="2">高性能バージョン</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>外観</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png" alt="reserver basic" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png" alt="reserver basic" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png" alt="reserver basic" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%20%E9%AB%98%E9%85%8D.png" alt="reserver high" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%20%E9%AB%98%E9%85%8D.png" alt="reserver high" width={150} height={100} />
</td>
  </tr>
  <tr>
    <td>プロセッサ</td>
    <td>Intel® Core™ 11th Gen. i3 1115G4</td>
    <td>Intel® Core™ 11th Gen. i3 1125G4</td>
    <td>Intel® Core™ 11th Gen. i5 1135G7</td>
    <td>Intel® Core™ vPro® 11th Gen. i5 1145GRE</td>
    <td>Intel® Core™ vPro® 11th Gen. i7 1185GRE </td>
  </tr>
  <tr>
    <td>プロセッサのコア/スレッド</td>
    <td>2C/4T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
  </tr>
  <tr>
    <td>コプロセッサ</td>
    <td colspan="3">Microchip® ATSAMD21G18 32-Bit ARM® Cortex-M0+ @ 48MHz </td>
    <td colspan="2">Raspberry Pi® RP2040 32-Bit Dual ARM Cortex-M0+ @ 133MHz</td>
  </tr>
  <tr>
    <td>Intel® vPro®</td>
    <td colspan="3">なし</td>
    <td colspan="2">あり</td>
  </tr>
  <tr>
    <td>Intel® Total Memory Encryption</td>
    <td colspan="3">なし</td>
    <td colspan="2">あり</td>
  </tr>
  <tr>
    <td>グラフィックス</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 96EUs(400-1300MHz)</td>
  </tr>
  <tr>
    <td>メモリ</td>
    <td colspan="5">デュアルチャネル DDR4-3200（合計最大64GB対応）</td>
  </tr>
  <tr>
    <td>ECCメモリ対応</td>
    <td colspan="3">なし</td>
    <td colspan="2">あり</td>
  </tr>
  <tr>
    <td>ネットワークコントローラー</td>
    <td colspan="3">Intel® Ethernet Controller I225-V</td>
    <td colspan="2">Intel® Ethernet Controller I225-LM</td>
  </tr>
  <tr>
    <td>拡張</td>
    <td colspan="3">M.2 M-Key; M.2 B-Key; M.2 E-Key; 1 X PCIe x4 Gen4 </td>
    <td colspan="2">M.2 M-Key; M.2 B-Key; M.2 E-Key; 1 X PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIOなど</td>
  </tr>
  <tr>
    <td>外部I/O</td>
    <td colspan="3">USB Type-A（USB2.0 Type-A x1 ; USB3.2 Type-A x1）; HDMI; DP; 2.5GbE LANポート x2; オーディオジャック; DCジャック（12V）;</td>
    <td colspan="2"><div>
  USB Type-C（USB PD / USB 4.0 / Thunderbolt 4）;<br />USB Type-A（USB2.0 Type-A x2 ; USB3.2 Type-A x1）; HDMI; DP; 2.5GbE LANポート x2; オーディオジャック; DCジャック（12V-19V）;
</div>
</td>
  </tr>
  <tr>
    <td>ワイヤレス接続</td>
    <td colspan="5">WIFI、BLEおよびLTE/4G/5G/LoRaWAN対応</td>
  </tr>
</tbody>
</table>

## ハードウェア概要

reServer には、基本バージョンと高性能バージョンの2つの異なるバージョンがあり、それぞれ異なるハードウェア構成を持っています。

### 基本バージョン

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/09%20%E4%BD%8E%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reServer%20mainboard%20.png" alt="pir" width={1000} height="auto" /></p>

### 高性能バージョン

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/09-%E9%AB%98%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

### ピン情報

#### 8ピン電源コネクタ
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/8P_power_connector.png" alt="pir" width={800} height="auto" /></p>

#### 28ピン Arduino ピン配置
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/28P_arduino.png" alt="pir" width={800} height="auto" /></p>

#### 9ピン COM ピン配置
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_COM_pinout.png" alt="pir" width={800} height="auto" /></p>

#### 9ピン USB2.0 ピン配置
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_USB2.0_pinout.png" alt="pir" width={800} height="auto" /></p>

#### 9ピン フロントパネル ピン配置
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_front_panel_pinout.png" alt="pir" width={800} height="auto" /></p>

## 寸法

両バージョンとも同じ寸法です。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/10-%E4%BD%8E%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

## reServer のクイックスタート

reServer を最速かつ簡単に始めるには、以下のガイドに従ってください。

### 必要なハードウェア

reServer を始める前に、以下のハードウェアを準備してください。

- reServer
- 電源アダプタ（付属）
- 外部モニター
- HDMI/DP ケーブル
- キーボードとマウス

### ハードウェアのインストール

このセクションでは、reServer 内部のハードウェアをインストールまたは交換する方法を紹介します。必要がない場合は、このセクションをスキップしてください。
このセクションを読む前に、ページ末尾に添付されている **組み立てガイドマニュアル** に従って reServer のメインボードにアクセスしてください。

#### DDR4 のインストール

新しい DDR4 を追加してメモリを拡張できます。デュアルチャネル SO-DIMM スロットは DDR4-3200MT/s をサポートし、最大64GBまで対応しています。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/ddr4.png" alt="pir" width={800} height="auto" /></p>

#### SSD のインストール

M.2 M-Key 2242/2280（PCIe 3.0 x4）を使用して SSD を追加できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20M-Key.png" alt="pir" width={800} height="auto" /></p>

#### WiFi モジュールのインストール

以下の手順に従って WiFi モジュールを追加できます。

- **ステップ 1.** M.2 M-Key スロットから SSD を取り外します。

- **ステップ 2.** WiFi アンテナケーブルを取り外し、M.2 E-Key に取り付けられている既存の WiFi モジュールを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 3.** 新しい WiFi モジュールを取り付け、WiFi アンテナケーブルを再接続します。

- **ステップ 4.** SSD を M.2 M-Key に再インストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key%20antenna.png" alt="pir" width={800} height="auto" /></p>

**注意:** reServer には 2.4/5GHz WiFi アンテナが2本付属しています。WiFi モジュール内のアンテナケーブルに接続されたアダプタにアンテナを取り付けることで、より良い WiFi 接続を実現できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/antenna.png" alt="pir" width={800} height="auto" /></p>

#### 4G/5G/LoRaWAN モジュールのインストール

reServer は、M.2 B-Key 2242/2252/2280（PCIe 3.0 x2; USB2.0 x1）で 4G/5G/LoRaWAN モジュールのインストールをサポートしています。**（4G/5G/LoRaWAN モジュールは reServer に含まれていません）**
以下の手順に従って 4G/5G/LoRaWAN モジュールを追加してください。

- **ステップ 1.** 4G/5G/LoRaWAN モジュールを M.2 B-Key に取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 2.** アンテナケーブルをモジュールに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key%20antenna.png" alt="pir" width={800} height="auto" /></p>

**注意:** 5G/4G を有効にするには、標準 SIM カードを micro SIM カードスロットに挿入する必要があります。

#### HDD のインストール

reServer は、2つの 3.5"/2.5" 内部ハードディスクドライブをインストールして、より多くのストレージを確保することができます。**（HDD は reServer に含まれていません）**
以下の手順に従って HDD をインストールしてください。

- **ステップ 1.** ネジを外し、ブラケットを引き出します。

- **ステップ 2.** HDD をブラケットにネジで固定します。

- **ステップ 3.** HDD ブラケットを押し下げて、HDD を SATA ポートに接続します。

- **ステップ 4.** HDD ブラケットをネジで固定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/07.png" alt="pir" width height="auto" /></p>

### ハードウェア接続

このセクションでは、reServer のインターフェース接続について説明します。
reServer には2つのバージョンがあります。異なるバージョンではインターフェースが異なる場合がありますのでご注意ください。

#### ディスプレイ接続

reServer をディスプレイに接続する方法は3つありますが、3つ目の方法は高性能バージョンのみ利用可能です。
**方法 1.** HDMI ポート

**方法 2.** DP ポート

**方法 3.** USB Type-C（高性能バージョンのみ利用可能）

基本バージョン
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/DIsplay%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能バージョン  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20display.png" alt="pir" width={800} height="auto" /></p>

#### キーボードとマウスの接続

USBポートを使用してキーボードとマウスを接続します。基本バージョンにはUSB 3.2ポート1つとUSB 2.0ポート1つがあり、高性能バージョンにはUSB 3.2ポート1つとUSB 2.0ポート2つがあります。  
基本バージョン  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/USB%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能バージョン  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20usb.png" alt="pir" width={800} height="auto" /></p>

#### オーディオ接続

基本バージョンでは、オーディオジャックは左側のI/Oパネルにあります。一方、高性能バージョンでは、オーディオジャックは右側のI/Oパネルに配置されています。  

基本バージョン  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/Audio%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能バージョン  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20audio.png" alt="pir" width={800} height="auto" /></p>

#### 電源接続

reServerを起動する方法は2つあり、2つ目の方法は高性能バージョンのみで使用可能です。

**方法1.** AC-DC電源アダプター（製品ボックスに含まれています）をAC電源コード（製品ボックス外ですがパッケージ内に含まれています）と接続し、それをreServerの12V DCジャックに接続します。

**方法2.** USB Type-C充電ケーブル（reServerには含まれていません）をThunderbolt 4 USB Type-Cポート（このポートは高性能バージョンのみで利用可能）に接続します。

基本バージョン  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/Power%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能バージョン  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20power.png" alt="pir" width={800} height="auto" /></p>

### オペレーティングシステムのインストール

すべてのreServerバージョンには、Windows 10 Enterprise（未アクティベート）が事前にインストールされています。簡単に起動してOSをアクティベートすることができます。ただし、reServerは他のWindows OSやLinux OSもサポートしているため、事前インストールされたOSを希望するOSに置き換えることが可能です。

## リソース

- **[PDF]** [reServer 組立ガイド](https://files.seeedstudio.com/wiki/reServer/Assembly%20Guide%20of%20reServer.pdf)
- **[PDF]** [Atmel-SAMD21データシート](https://files.seeedstudio.com/wiki/reServer/wiki/Atmel-SAMD21-datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>