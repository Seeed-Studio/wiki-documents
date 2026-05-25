---
description: reServer Industrial 入門ガイド
title: reServer Industrial 入門ガイド
keywords:
  - reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reServer_Industrial_Getting_Started
sku: 114110247,114110248,114110250,114110249
last_update:
  date: 09/22/2023
  author: Lakshantha
createdAt: '2023-06-08'
updatedAt: '2026-03-04'
url: https://wiki.seeedstudio.com/ja/reServer_Industrial_Getting_Started/
---

# reServer Industrial を使い始める

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

reServer Industrial シリーズは、NVIDIA Jetson™ Orin Nano/Orin NX モジュールを搭載したファンレスでコンパクトな AI 対応 NVR（Network Video Recorder）サーバーを提供し、20 TOPS から 100 TOPS までの AI 性能を実現します。reServer Industrial は Jetpack 5.1.1 をプリインストールしており、開発を簡素化し、強力な AI 機能と組み合わせて VMS（Video Management System）を構築するのに最適で、スマートシティ、セキュリティ、産業オートメーション、スマートファクトリーなど、さまざまな業界におけるデジタルトランスフォーメーションを実現します。

reServer Industrial はパッシブヒートシンクとファンレス設計を採用しており、要求の厳しい環境での使用に最適です。パッシブヒートシンクによりファンを必要とせず効率的な冷却が可能となり、ほこりやその他の汚染物質によるコンポーネント故障のリスクを低減します。ファンレス設計は騒音レベルと消費電力も低減するため、静音性が求められる環境での使用に適しており、エネルギーコストの削減にもつながります。

reServer Industrial には 5 つの RJ45 GbE ポートがあり、そのうち 4 つは PoE PSE ポートで、IP カメラなどのデバイスに Ethernet 経由で電力を供給できます。これにより別途電源を用意する必要がなくなり、電源コンセントが容易に利用できない場所でもネットワーク機器を容易に展開できます。残りの GbE ポートはネットワークスイッチやルーターへの接続に使用され、ネットワーク上の他のデバイスとの通信やインターネットへのアクセスを可能にします。

:::note
カスタマイズ可能なオプション：ロゴブランディング、パッケージング、ファームウェア書き込み。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

## 特長

- **ファンレスコンパクト Edge AI サーバー:** NVIDIA Jetson™ Orin Nano/Orin NX モジュールを搭載し、20 TOPS から 100 TOPS までの AI 性能を実現、動作温度範囲は -20 ～ 60°C（0.7m/s の気流条件）
- **マルチストリーム処理:** 5× GbE RJ45（うち 4 ポートは 802.3af PSE）、複数ストリームをリアルタイムで処理
- **拡張可能なストレージ:** 2.5" SATA HDD/SSD 用の 2 つのドライブベイに加え、NVMe SSD 用の M.2 2280 ソケットを搭載
- **産業用インターフェース:** COM ポート、DI/DO ポート、CAN ポート、USB 3.1、およびオプションの TPM2.0 モジュールを搭載
- **ハイブリッド接続性:** Nano SIM カードスロットを備え、5G/4G/LTE/LoRaWAN®（モジュールはオプション）をサポート
- **認証:** FCC、CE、UKCA、ROHS、KC

## 仕様

<table>
  <thead>
    <tr>
      <th colSpan={2}>製品名 </th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">J4012</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html">J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J3011-p-5750.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J3011-p-5750.html">J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J3010-p-5749.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J3010-p-5749.html">J3010</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>NVIDIA Jetson モジュール</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>114110247</td>
      <td>114110248</td>
      <td>114110249</td>
      <td>114110250</td>
    </tr>
    <tr>
      <td rowSpan={6}>プロセッサー<br />システム</td>
      <td>AI 性能</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>32 個の Tensor コアを備えた 1024 コア NVIDIA Ampere アーキテクチャ GPU </td>
      <td>16 個の Tensor コアを備えた 512 コア NVIDIA Ampere アーキテクチャ GPU</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 コア Arm® Cortex®-A78AE v8.2 64 ビット CPU、2MB L2 + 4MB L3 </td>
      <td colSpan={3}>6 コア Arm® Cortex®-A78AE v8.2 64 ビット CPU、1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>8GB 128-bit LPDDR5 68 GB/s</td>
      <td>4GB 64-bit LPDDR5 34 GB/s</td>
    </tr>
    <tr>
      <td>ビデオエンコード</td>
      <td colSpan={2}>対応規格: H.265 (HEVC)、H.264、AV1 1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1～2 コアの CPU により 1080p30 をサポート </td>
    </tr>
    <tr>
      <td>ビデオデコード</td>
      <td colSpan={2}>対応規格: H.265 (HEVC)、H.264、VP9、AV1 1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>対応規格: H.265 (HEVC)、H.264、VP9、AV1 1×4K60 (H.265) | 2×4K30 (H.265) | 5×1080p60 (H.265) | 11×1080p30 (H.265)</td>
    </tr>
    <tr>
      <td rowSpan={2}>ストレージ</td>
      <td>eMMC</td>
      <td colSpan={4}>-</td>
    </tr>
    <tr>
      <td>拡張</td>
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD（M.2 NVMe SSD 128G 付属）</td>
    </tr>
    <tr>
      <td rowSpan={9}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={4}>1× LAN0 RJ45 GbE (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 GbE PoE(PSE 802.3 af 15 W, 10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1、1× USB2.0 Type C（デバイスモード）、1× USB2.0 Type C（デバッグ UART &amp; RP2040 用）</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4×DI、4×DO、3×GND_DI、2×GND_DO、1×GND_ISO、1×CAN</td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={4}>1× DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={2}>1×HDMI 2.1 Type A 7680x4320 30 Hz</td>
      <td colSpan={2}>1×HDMI 1.4 Type A 3840x2160 30 Hz</td>
    </tr>
    <tr>
      <td>SATA</td>
      <td colSpan={4}>2.5" SATA HDD/SSD（SATA III 6.0Gbps）対応の 2 つのドライブベイ</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={4}>1× Nano SIM カードスロット</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td colSpan={4}>リセットボタン、リカバリボタン</td>
    </tr>
    <tr>
      <td rowSpan={5}>拡張</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>LoRaWAN®/4G/シリーズ無線用 Mini PCIe（モジュールはオプション）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) 4G/5G 対応（モジュールはオプション） </td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={4}>ファンレス、パッシブヒートシンク；1×ファンコネクタ（5V PWM）</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={4}>1× TPM 2.0 コネクタ（モジュールはオプション）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>1× RTC ソケット（CR1220 付属）、×RTC 2 ピン</td>
    </tr>
    <tr>
      <td rowSpan={2}>電源</td>
      <td>電源入力</td>
      <td colSpan={4}>DC 12V-36V 2 ピン端子台</td>
    </tr>
    <tr>
      <td>電源アダプター</td>
      <td colSpan={4}>24V /5A 電源アダプター（電源コードなし）</td>
    </tr>
    <tr>
      <td rowSpan={9}>機構</td>
      <td>寸法 (W x D x H)</td>
      <td colSpan={4}>194.33mm×187mm×95.5mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td colSpan={4}>デスク、DIN レール、VESA</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan={4}>-20 ～ 60°C（0.7m/s）</td>
    </tr>
    <tr>
      <td>動作湿度</td>
      <td colSpan={4}>95% @ 40 °C（結露なきこと）</td>
    </tr>
    <tr>
      <td>保管温度</td>
      <td colSpan={4}>-40 ～ 85°C</td>
    </tr>
    <tr>
      <td>保管湿度</td>
      <td colSpan={4}>60°C@ 95% RH（結露なきこと）</td>
    </tr>
    <tr>
      <td>振動</td>
      <td colSpan={4}>3 Grms @ 5 ～ 500 Hz、ランダム、1 時間/軸</td>
    </tr>
    <tr>
      <td>衝撃</td>
      <td colSpan={4}>50G ピーク加速度（11 msec. 継続、eMMC、microSD、または mSATA）</td>
    </tr>
    <tr>
      <td colSpan={2}>OS</td>
      <td colSpan={4}>Jetpack 5.1.1（以上）をプリインストール（ボードサポートパッケージ付き Linux OS を提供） </td>
    </tr>
    <tr>
      <td colSpan={2}>認証</td>
      <td colSpan={4}>FCC、CE、RoHS、UKCA、KC</td>
    </tr>
    <tr>
      <td colSpan={2}>保証</td>
      <td colSpan={4}>2 年</td>
    </tr>
  </tbody>
</table>

## ハードウェア概要

### システム全体

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

### キャリアボード

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

## JetPack をフラッシュする

:::danger
本製品には JetPack 5.1.1 がプリインストールされています。特別な要件がない限り、システムを再フラッシュする必要はありません。
:::

reServer Industrial には、必要なドライバーとともに JetPack 5.1.1 が 128GB SSD にプリインストールされています。これには CUDA、CUDNN、TensorRT などの SDK コンポーネントが含まれます。ただし、付属の SSD または新しい SSD に JetPack を再フラッシュしたい場合は、以下の手順に従ってください。現在は JP5.1.1 のみを対象としたガイドを提供しており、今後も随時更新していきます。

:::note
reServer Industrial で SSD を使用する場合は、Seeed 製の [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)、[1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) の各バージョンのみを推奨します。
:::

### 前提条件

reServer Industrial を使い始める前に、以下のハードウェアを準備する必要があります

- reServer Industrial
- 付属の電源アダプタと電源コード（[US version](https://www.seeedstudio.com/AC-US-p-5122.html) または [EU version](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- Ubuntu ホスト PC（ネイティブ環境、または VMware Workstation Player を使用した VM）
- USB Type-C データ転送ケーブル
- 外部モニタ
- HDMI ケーブル
- キーボードとマウス

### 強制リカバリーモードに入る

次に、デバイスを書き込むために reServer Industrial ボードをリカバリーモードにする必要があります。**DEVICE** ポートと PC の間を USB Type-C ケーブルで接続します。ピンを使用して **REC** ホールに差し込み、リカバリーボタンを押し続けたまま、付属の **2-Pin Terminal block power connector** をボード上の電源コネクタに接続します（端子を固定するために 2 本のネジを必ず締めてください）。その後、付属の電源アダプタと電源コードを接続してボードの電源を入れます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
RECOVERY ボタンを押したまま電源を入れていることを確認してください。そうしないとリカバリーモードに入ることができません
:::

Ubuntu ホスト PC でターミナルウィンドウを開き、コマンド **lsusb** を入力します。使用している Jetson SoM に応じて、返された内容に次のいずれかの出力が含まれていれば、ボードは強制リカバリーモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

### 書き込み方法の種類

ここでは 2 通りの書き込み方法を提供します。

1. NVIDIA JetPack、ハードウェア周辺機器ドライバを含む、当社が用意したシステムイメージ全体をダウンロードしてデバイスに書き込む
2. 公式の NVIDIA L4T をダウンロードし、付属のハードウェア周辺機器ドライバを使用してデバイスに書き込む

:::note
1 つ目の方法のダウンロードサイズは約 14GB、2 つ目の方法のダウンロードサイズは約 3GB です
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="Method 1">

#### システムイメージをダウンロード

- **Step 1:** 使用しているボードに対応したシステムイメージを Ubuntu PC にダウンロードします。

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>Device</th>
        <th>JetPack Version</th>
        <th>L4T Version</th>
        <th>Image Link</th>
        <th>Alternative Image Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={5}>reServer Industrial J4012</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUVO61wR2NhFqcAQCeWxsBsBWgOf5p_BBTxSgPG4gfAx7g?e=v0Qhhm" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EWxVw3rZF-JPuKp0ksJZkGABWmsSxVizaJIqQBL5TDL1JA?e=4JJ2XV" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQApYwrXCs7WTqZPvGNHA7YuAdAS_5YcEIXv-gnenja-Szk?e=Ub9Pvc" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV0nlnSfW3NEmcDq4l3u1M4BrzThb0-y44qa4hGXk-XfWg?e=G9ub1C" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdCn0yi0ArRKivHb3mKLrwcBmBEKXlGKLCnNkRQNzyylAw?e=QTnhQa" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbfqyoEzXBBsDycFgKH0lEB05TQNLcZidMt2Py2ZOtLdw?e=4etAqu" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDs10njGAUER7nbpqF6dI7ZAceK7lnySeHU9k7KIySj6HA?e=iMWtO8" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J4011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYMjh00vng9JhG0d26iS1oIBOhHSs4oa19pPd40qrTkD7Q?e=x6zZTH" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EW5Dood6aQ9DpT6ZaXWF50QBmyAyOowCktzqZj48sQeyhw?e=VVP56J" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDP0PJc34WXRLzV7VqXzinRAWDanqL6CzmSPfSILTojKBI?e=XYR9ee" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZlrBLKGf5VDiczIJaPNpNoBcby3urzv85oWmS34pKtcGg?e=u7aWDL" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQJBb6D2ISBEnoUnUkqVEgkB9npGJ48jw5p2DXFIWaNJxA?e=lOJiFM" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EekoAp4j8WJHi9xe-eoJTW4BH-qx2Sttmlh7uljQdNkGXw?e=g7ZNa1" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
            <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDoOdZqBdvLQaQ45yKI9a7zAVwIdyxIrU_Sk2xicLYy6QE?e=cepk9Z" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J3011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EelLW5qjyWBEgoJN_SUmKhQBTnkElasNJtxxfSgfVuXXuw?e=c2THTl" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb6xTuWGRdlDpJfgLSWS7S4BpnKYxkI9RKl6tJbU0xI4FQ?e=m84vbP" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA4HdvfMZwTQY0Aceq3uygRAVlGI13-oGlSRHRxDpxanUU?e=fCJ8ww" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0cen9MPIhJpM2LBfm2edEBZtw53n2C9PwqsY2XaiSH_w?e=LWQren" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdqRMLVCzHtIkHUShgZ91xoBK367uzXyC_mTGQOzlfJhyQ?e=wgOhwj" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUnzsQBX-jxJkHZNxkYdoFsBN0coyFSY50_5LspOv8kfew?e=2baOzY" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBZKkQtQMJiRYcOfA3DzOtEAV7O4ayXgVWrMKAclHYO-HQ?e=LWfgcH" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J3010</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETo-G6kS2atGpfsWK6uX2HIBcrwsAboHjDBB_rypE4iyTA?e=GZyglq" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">ダウンロード2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQADLFrAQ2RAQb74nXNq6MlnAeaN-qPzaTk0Sg21ZqawFxA?e=KXkWZZ" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQgrBDUICyZCnKBI_qVeupoBYqQJ1dP7_lcxUwxUphg6Qw?e=ObUzPI" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EXxmIAk7sGdOnPcaZHvz7ykB36pGkNwZscpdu3ZytrfD0Q?e=ElJ2bb" target="_blank" rel="noopener noreferrer">ダウンロード2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ET-LxPOYaNtIjoJQ4I-gKEcBxU-AmFX9R-mWPH1p-eyBdA?e=EpAopw" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBUl_MHgm8YSY6OQyCuNEf-AfgUPNTd9-rd2I6pimkcraE?e=KzSPtW" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          -
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Download1 と Download2 の両方のイメージファイルは同じです。ダウンロード速度が速い方のリンクを選択してください。
</p>

<!-- The source code for the above images can be found [here](https://github.com/Seeed-Studio/Linux_for_Tegra) -->

- **Step 2:** 生成されたファイルを解凍します

```sh
tar -xvf <file_name>.tar.gz
```

#### Jetson へフラッシュ

- **Step 1:** 先ほど解凍したファイルへ移動し、次のようにフラッシュコマンドを実行します

```sh
cd mfi_reserver-orin-industrial
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

これでボードへのシステムイメージのフラッシュが開始されます。フラッシュが成功すると、次のような出力が表示されます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Step 2:** ボードを HDMI コネクタを使ってディスプレイに接続し、初期設定を完了します

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードは再起動し、使用できる状態になります！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

---

</TabItem>
<TabItem value="method2" label="方法 2">

#### NVIDIA L4T と rootfs のダウンロードと準備

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

#### ドライバのダウンロードと準備

- **Step 1:** 使用しているボードに対応するドライバファイルを Ubuntu PC にダウンロードします

<table>
  <thead>
    <tr>
      <th>Jetson モジュール</th>
      <th>ダウンロードリンク</th>
      <th>JetPack バージョン</th>
      <th>L4T バージョン</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nx-8-16-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 8GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-8-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-4-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
  </tbody>
</table>

- **Step 2:** ダウンロードした周辺機器ドライバを **Linux_For_Tegra** ディレクトリと同じフォルダに移動します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **Step 3:** ダウンロードしたドライバの .zip ファイルを解凍します。ここでは、.zip ファイルを解凍するために必要な **unzip** パッケージも追加でインストールします

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

ここでファイルを置き換えるかどうかを尋ねられます。必要なファイルを置き換えるために A と入力して ENTER を押します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### Jetson へフラッシュ

- **Step 1:** **Linux_for_Tegra** ディレクトリへ移動し、次のようにフラッシュコマンドを実行します

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

これでボードへのシステムイメージのフラッシュが開始されます。フラッシュが成功すると、次のような出力が表示されます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Step 2:** ボードを HDMI コネクタを使ってディスプレイに接続し、初期設定を完了します

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードは再起動し、次の画面が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **Step 3:** デバイス上でターミナルウィンドウを開き、次を実行します。デバイスは再起動し、使用できる状態になります！

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

さらに、CUDA、cuDNN、TensorRT などの SDK コンポーネントをインストールしたい場合は、次を実行してください

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## ハードウェアおよびインターフェースの使用方法

:::info
  reServer Industrial ボード上のすべてのハードウェアおよびインターフェースの使用方法について詳しく知るには、この [**wiki**](/ja/reserver_industrial_hardware_interface_usage) に従ってください：
:::

## リソース

(リンクを変更してください)

- [reServer Industrial データシート](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial リファレンスガイド](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson デバイスおよびキャリアボードの比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D ファイル](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技術サポート

ご不明な点がありましたら、遠慮なく私たちの [forum](https://forum.seeedstudio.com/) にイシューを投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
