---
description: reServer X86
title: reServer X86 の使用開始
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reServer-Getting-Started
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: reServer
category: reServer
bzurl: 
wikiurl: 
sku: 
--- -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/上架01.png" alt="pir" width={600} height="auto" /></p>

reServer は、reThings ファミリーのマイルストーン製品として、非常にコンパクトで強力です。このスマートな小型サーバーは、エッジからクラウドまで簡単かつ効率的に動作することができます。

reServer は ODYSSEY X86 v2 ボードをベースとし、最新の Intel® Core™ 第11世代プロセッサーと Intel® UHD Graphics または Intel® Iris Xe Graphics を搭載しており、様々なアプリケーションに対して高い CPU と AI パフォーマンスを提供します。2つの高速 2.5 ギガビット Ethernet ポートを備え、5G、LoRa、BLE、WiFi を含むハイブリッド接続をサポートしています。同時に、reServer はほぼあらゆるシナリオで効率的に動作するコンパクトな設計となっています。reServer の整然とした構造により、ハードドライブ、メモリ、PCIe スロットへのアクセスも簡単で、容易なインストール、アップグレード、メンテナンスが可能です。

デュアル SATA III 6.0Gbps データコネクタを備えた reServer は、最大2台の 3.5"/2.5" SATA 内蔵ハードディスクドライブを搭載してより多くのストレージを確保することができます。また、M.2 コネクタを備えており、様々な SSD に接続してより高速な読み書き速度を実現できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-X86-i3-8G-256SSD-p-4965.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 全体寸法 132mm x124mm x233mm のサーバーとしてコンパクトな設計
- 最新の第11世代 Intel® Core™ CPU と Intel® UHD Graphics または Intel® Iris Xe Graphics を搭載
- デュアル 2.5 ギガビット Ethernet ポート、USB 3.2 Type-A ポート、USB 2.0 Type-A ポート、HDMI ポート、DP ポートを含む豊富な周辺機器
- 5G、LoRa、BLE、WiFi を含むハイブリッド接続をサポート（5G と LoRa には追加モジュールが必要）
- 3.5"/2.5" SATA ハードディスクドライブ用のデュアル SATA III 6.0 Gbps データコネクタ、エンクロージャ内に両方を格納するのに十分なスペースを確保
- SSD、4G/5G モジュール、WiFi 6 などの拡張性のための M.2 B-Key/ M-Key/ E-Key
- 優れた放熱性能を持つ大型 VC ヒートシンク付きの静音冷却ファン
- エンクロージャを開けた後の内部コンポーネントへの簡単なアクセスにより、インストール、アップグレード、メンテナンスが容易
- Windows 10 Enterprise（未アクティベート）がプリインストール済み、その他の Windows OS と Linux OS もサポート

## 仕様

<table style={{tableLayout: 'fixed', width: 1173}}>

<thead>
  <tr>
    <th colspan="2">バージョン</th>
    <th colspan="3">ベーシックバージョン</th>
    <th colspan="2">ハイパフォーマンスバージョン</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">プラットフォーム</td>
    <td>プロセッサ</td>
    <td>Intel® Core™ 11th Gen. i3 1115G4</td>
    <td>Intel® Core™ 11th Gen. i3 1125G4</td>
    <td>Intel® Core™ 11th Gen. i5 1135G7</td>
    <td>Intel® Core™ vPro® 11th Gen. i5 1145GRE</td>
    <td>Intel® Core™ vPro® 11th Gen. i7 1185GRE </td>
  </tr>
  <tr>
    <td>プロセッサのコア/スレッド数</td>
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
    <td rowspan="3">メモリ</td>
    <td>技術</td>
    <td colspan="5">デュアルチャネル DDR4-3200</td>
  </tr>
  <tr>
    <td>容量</td>
    <td colspan="3">8GB; 16GB (最大64GBまでサポート)</td>
    <td colspan="2">最大64GBまでサポート</td>
  </tr>
  <tr>
    <td>ECCメモリサポート</td>
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
    <td rowspan="2">先進技術</td>
    <td>Intel®  vPro®</td>
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
    <td colspan="5">eDP 40-Pin 4レーンコネクタ</td>
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
    <td colspan="5">各ディスプレイインターフェース組み合わせで4画面同時表示</td>
  </tr>
  <tr>
    <td rowspan="7">外部I/O</td>
    <td>Ethernet</td>
    <td colspan="5">2 x 2.5GbE LANポート (RJ45, 10/100/1000/2500 Mbpsサポート), Intel® i225</td>
  </tr>
  <tr>
    <td>HDMI/DP</td>
    <td colspan="5">1個/1個</td>
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
    <td colspan="5">1x5.5x2.5mm DCジャック / Wafer 2.0mm 8pin</td>
  </tr>
  <tr>
    <td>Micro SIMカードスロット</td>
    <td colspan="5">1</td>
  </tr>
  <tr>
    <td rowspan="10">内部I/O</td>
    <td>SATA</td>
    <td colspan="5">2 x SATA Gen III 6.0 Gb/s データコネクタ + 3 x SATA電源コネクタ</td>
  </tr>
  <tr>
    <td>COMポート</td>
    <td colspan="5">1 x RS-232/422/485, 1 x RS-232</td>
  </tr>
  <tr>
    <td>GPIO</td>
    <td colspan="3">28-Pin Arduino コプロセッサ 2.54mmヘッダ</td>
    <td colspan="2">30-Pin Raspberry Pi コプロセッサ 2.54mmヘッダ</td>
  </tr>
  <tr>
    <td>オーディオ</td>
    <td colspan="5">Realtek High Definition Audio, マイク + ヘッドフォン コンボコネクタ</td>
  </tr>
  <tr>
    <td>USB2.0</td>
    <td colspan="5">USB2.0 9-pinヘッダ x2 480Mbps</td>
  </tr>
  <tr>
    <td>ファン</td>
    <td colspan="5">2 x 12V 4線ファンヘッダ, PWM制御</td>
  </tr>
  <tr>
    <td>フロントパネル制御</td>
    <td colspan="5">電源オン, リセット, 電源ステータスLED, SATAステータスLED</td>
  </tr>
  <tr>
    <td>S/PDIF</td>
    <td colspan="5">3-Pin 2.54mmヘッダ</td>
  </tr>
  <tr>
    <td>SATA電源</td>
    <td colspan="5">WAFER4-Pin 2.0ピッチコネクタ</td>
  </tr>
  <tr>
    <td>コCPUデバッグポート</td>
    <td colspan="5">6-Pin 0.5mm FPCコネクタ (SWD)</td>
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
    <td colspan="2">1 X PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIO など</td>
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
    <td>熱対策ソリューション</td>
    <td colspan="5">ヒートパイプアセンブリ/熱拡散ベーパーチャンバーアセンブリ</td>
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
    <th colspan="3">ベーシックバージョン</th>
    <th colspan="2">ハイパフォーマンスバージョン</th>
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
    <td>プロセッサのコア/スレッド数</td>
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
    <td>Intel®  vPro®</td>
    <td colspan="3">NO</td>
    <td colspan="2">YES</td>
  </tr>
  <tr>
    <td>Intel® Total Memory Encryption</td>
    <td colspan="3">NO</td>
    <td colspan="2">YES</td>
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
    <td colspan="5">デュアルチャネル DDR4-3200（合計最大64GBまでサポート）</td>
  </tr>
  <tr>
    <td>ECCメモリサポート</td>
    <td colspan="3">NO</td>
    <td colspan="2">YES</td>
  </tr>
  <tr>
    <td>ネットワークコントローラ</td>
    <td colspan="3">Intel® Ethernet Controller I225-V</td>
    <td colspan="2">Intel® Ethernet Controller I225-LM</td>
  </tr>
  <tr>
    <td>拡張</td>
    <td colspan="3">M.2 M-Key; M.2 B-Key; M.2 E-Key; 1 X PCIe x4 Gen4 </td>
    <td colspan="2">M.2 M-Key; M.2 B-Key; M.2 E-Key; 1 X PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIO など</td>
  </tr>
  <tr>
    <td>外部I/O</td>
    <td colspan="3">USB Type-A（USB2.0 Type-A x1 ; USB3.2 Type-A x1）;  HDMI; DP; 2.5GbE LANポート x2; オーディオジャック; DCジャック（12V）;</td>
    <td colspan="2"><div>
  USB Type-C（USB PD / USB 4.0 / Thunderbolt 4）;<br />USB Type-A（USB2.0 Type-A x2 ; USB3.2 Type-A x1）;  HDMI;DP; 2.5GbE LANポート x2; オーディオジャック; DCジャック（12V-19V）;
</div>
</td>
  </tr>
  <tr>
    <td>ワイヤレス接続</td>
    <td colspan="5">WIFI、BLE、LTE/4G/5G/LoRaWANサポート</td>
  </tr>
</tbody>
</table>

## ハードウェア概要

reServerには、異なるハードウェア構成を持つ2つの異なるバージョンがあります：ベーシック版とハイパフォーマンス版です。

### ベーシック版

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/09%20%E4%BD%8E%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reServer%20mainboard%20.png" alt="pir" width={1000} height="auto" /></p>

### ハイパフォーマンス版

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/09-%E9%AB%98%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

### ピン情報

#### 8ピン電源コネクタ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/8P_power_connector.png" alt="pir" width={800} height="auto" /></p>

#### 28ピンArduinoピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/28P_arduino.png" alt="pir" width={800} height="auto" /></p>

#### 9ピンCOMピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_COM_pinout.png" alt="pir" width={800} height="auto" /></p>

#### 9ピンUSB2.0ピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_USB2.0_pinout.png" alt="pir" width={800} height="auto" /></p>

#### 9ピンフロントパネルピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_front_panel_pinout.png" alt="pir" width={800} height="auto" /></p>

## 寸法

両バージョンとも同じ寸法です。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/10-%E4%BD%8E%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

## reServerクイックスタート

最も速く簡単な方法でreServerを始めたい場合は、以下のガイドに従ってください。

### 必要なハードウェア

reServerを始める前に、以下のハードウェアを準備する必要があります。

- reServer
- 電源アダプタ（付属）
- 外部モニター
- HDMI/DPケーブル
- キーボードとマウス

### ハードウェアの取り付け

この部分では、reServer内部のハードウェアの取り付けや交換方法を紹介します。必要がない場合は、この部分をスキップしてください。
この部分を読む前に、このページの最後に添付されている**組み立てガイドマニュアル**に従って、reServerのメインボードにアクセスしてください。

#### DDR4の取り付け

新しいDDR4を追加してメモリを拡張できます。デュアルチャネルSO-DIMMスロットは、最大64GBまでのDDR4-3200MT/sをサポートします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/ddr4.png" alt="pir" width={800} height="auto" /></p>

#### SSDの取り付け

M.2 M-Key 2242/2280（PCIe 3.0 x4）により、SSDを追加できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20M-Key.png" alt="pir" width={800} height="auto" /></p>

#### WiFiモジュールの取り付け

以下の手順に従ってWiFiモジュールを追加できます。

- **ステップ1.** M.2 M-KeyスロットからSSDを取り外します。

- **ステップ2.** WiFiアンテナケーブルを取り外し、M.2 E-Keyから事前にインストールされているWiFiモジュールを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key.png" alt="pir" width={800} height="auto" /></p>

- **ステップ3.** 新しいWiFiモジュールを取り付け、WiFiアンテナケーブルを接続し直します。

- **ステップ4.** SSDをM.2 M-Keyに戻します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key%20antenna.png" alt="pir" width={800} height="auto" /></p>

**注意:** reServerには2つの2.4/5GHz WiFiアンテナが付属しており、reServer内部のWiFiモジュールのアンテナケーブルと接続するアダプタにアンテナを取り付けることで、より良いWiFi接続性を実現できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/antenna.png" alt="pir" width={800} height="auto" /></p>

#### 4G/5G/LoRaWANモジュールの取り付け

reServerは、M.2 B-Key 2242/2252/2280（PCIe 3.0 x2; USB2.0 x1）での4G/5G/LoRaWANモジュールの取り付けをサポートします。**（4G/5G/LoRaWANモジュールはreServerに含まれていません）**
以下の手順に従って4G/5G/LoRaWANモジュールを追加してください。

- **ステップ1.** 4G/5G/LoRaWANモジュールをM.2 B-Keyに取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key.png" alt="pir" width={800} height="auto" /></p>

- **ステップ2.** アンテナケーブルをモジュールに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key%20antenna.png" alt="pir" width={800} height="auto" /></p>

**注意:** 5G/4Gを有効にするには、標準SIMカードをマイクロSIMカードスロットに挿入する必要があります。

#### HDDの取り付け

reServerは、より多くのストレージを取得するために2つの3.5"/2.5"内蔵ハードディスクドライブの取り付けをサポートします。**（HDDはreServerに含まれていません）**
以下の手順に従ってHDDを取り付けてください。

- **ステップ1.** ネジを取り外し、ブラケットを引き出します

- **ステップ2.** ネジでHDDをブラケットに取り付けます

- **ステップ3.** HDDブラケットを押し下げて、HDDをSATAポートに接続します。

- **ステップ4.** ネジでHDDブラケットを固定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/07.png" alt="pir" width height="auto" /></p>

### ハードウェア接続

この部分では、reServerのインターフェース接続について紹介します。
reServerには2つのバージョンがあります。異なるバージョンでは異なるインターフェースを持つ場合があることに注意してください。

#### ディスプレイ接続

reServerがディスプレイに接続する方法は3つありますが、3番目の方法はハイパフォーマンス版のみです。
**方法1.** HDMIポート

**方法2.** DPポート

**方法3.** USB Type-C（ハイパフォーマンス版のみ利用可能）

ベーシック版
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/DIsplay%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

High performance version
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20display.png" alt="pir" width={800} height="auto" /></p>

#### キーボードとマウスの接続

USBポートを通じてキーボードとマウスを接続します。Basic版にはUSB 3.2ポートが1つとUSB 2.0ポートが1つありますが、High-performing版にはUSB 3.2ポートが1つとUSB 2.0ポートが2つあります。
Basic version
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/USB%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

High performance version
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20usb.png" alt="pir" width={800} height="auto" /></p>

#### オーディオ接続

Basic版では、オーディオジャックは左側のI/Oパネルにありますが、High-performing版では右側のI/Oパネルにあります。

Basic version
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/Audio%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

High performance version
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20audio.png" alt="pir" width={800} height="auto" /></p>

#### 電源接続

reServerに電源を供給する方法は2つあり、2番目の方法はHigh-performing版のみで利用可能です。

**方法1.** AC-DC電源アダプター（製品ボックスに含まれています）をAC電源コード（製品ボックス外ですがパッケージに含まれています）と接続し、reServerの12V DCジャックに接続します。

**方法2.** USB Type-C充電ケーブル（reServerには含まれていません）をThunderbolt 4 USB Type-Cポート（このポートはHigh-performing版でのみ利用可能）に接続します。

Basic version
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/Power%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

High performance version
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20power.png" alt="pir" width={800} height="auto" /></p>

### オペレーティングシステムのインストール

すべてのバージョンのreServerには、Windows 10 Enterprise（未アクティベート）がプリインストールされており、単純に起動してOSをアクティベートできます。ただし、reServerは他のWindows OSやLinux OSもサポートしているため、プリインストールされたOSを希望するOSで上書きすることができます。

## リソース

- **[PDF]** [reServer Assembly Guide](https://files.seeedstudio.com/wiki/reServer/Assembly%20Guide%20of%20reServer.pdf)
- **[PDF]** [Atmel-SAMD21-datasheet](https://files.seeedstudio.com/wiki/reServer/wiki/Atmel-SAMD21-datasheet.pdf)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
