---
description: reServer Industrial クイックスタート
title: reServer Industrial クイックスタート
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reServer_Industrial_Getting_Started
last_update:
  date: 09/22/2023
  author: Lakshantha
---

# reServer Industrial をはじめよう

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

reServer Industrial シリーズは、NVIDIA Jetson™ Orin Nano / Orin NX モジュールを搭載した、ファンレスでコンパクト、AI 対応の NVR（Network Video Recorder）サーバーです。AI 性能は 20 TOPS 〜 100 TOPS のレンジをカバーします。reServer Industrial には JetPack 5.1.1 がプリインストールされており、開発を簡素化。高性能な AI 機能とあわせて VMS（Video Management System）の構築に最適で、スマートシティやセキュリティ、産業オートメーション、スマートファクトリーなど、幅広い分野のデジタル変革をもたらします。

reServer Industrial はパッシブヒートシンクとファンレス設計を採用しており、過酷な環境での使用に最適です。パッシブヒートシンクにより、ファンを使用せずに効率的な冷却が可能なため、ほこりなどによる故障リスクを低減します。ファンレス設計は騒音と消費電力も低減するため、静音性が求められる環境での使用や電力コストの最小化にも適しています。

reServer Industrial には 5 つの RJ45 GbE ポートがあり、そのうち 4 ポートは PoE PSE 対応で、IP カメラなどの機器に Ethernet 経由で給電できます。これにより別電源が不要になり、電源コンセントが容易に確保できない場所でもネットワーク機器を容易に展開できます。残りの GbE ポートはネットワークスイッチやルーターへの接続に使用し、ネットワーク上の他デバイスとの通信やインターネット接続を可能にします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 特長

- **ファンレス・コンパクトなエッジ AI サーバー:** NVIDIA Jetson™ Orin Nano / Orin NX を搭載、20〜100 TOPS の AI 性能。動作温度範囲は -20〜60°C（0.7m/s 気流時）
- **マルチストリーム処理:** 5× GbE RJ45（うち 4 ポートは 802.3af PSE）、複数ストリームをリアルタイム処理
- **拡張ストレージ:** 2.5" SATA HDD/SSD 用の 2 ベイに加え、NVMe SSD 用 M.2 2280 ソケットを搭載
- **産業用インタフェース:** COM、DI/DO、CAN、USB 3.1、TPM2.0（オプション）を備える
- **ハイブリッド接続性:** 5G/4G/LTE/LoRaWAN®（モジュールはオプション）対応、Nano SIM スロット搭載
- **各種認証:** FCC、CE、UKCA、ROHS、KC

## 仕様

<table>
  <thead>
    <tr>
      <th colSpan={2}>製品名</th>
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
      <td rowSpan={6}>プロセッサ<br />システム</td>
      <td>AI 性能</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>1024 コアの NVIDIA Ampere アーキテクチャ GPU（Tensor コア 32）</td>
      <td>512 コアの NVIDIA Ampere アーキテクチャ GPU（Tensor コア 16）</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 コア Arm® Cortex®-A78AE v8.2 64-bit CPU、2MB L2 + 4MB L3</td>
      <td colSpan={3}>6 コア Arm® Cortex®-A78AE v8.2 64-bit CPU、1.5MB L2 + 4MB L3</td>
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
      <td colSpan={2}>対応規格: H.265 (HEVC), H.264, AV1 1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 を 1〜2 CPU コアでサポート</td>
    </tr>
    <tr>
      <td>ビデオデコード</td>
      <td colSpan={2}>対応規格: H.265 (HEVC), H.264, VP9, AV1 1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>対応規格: H.265 (HEVC), H.264, VP9, AV1 1×4K60 (H.265) | 2×4K30 (H.265) | 5×1080p60 (H.265) | 11×1080p30 (H.265)</td>
    </tr>
    <tr>
      <td rowSpan={2}>ストレージ</td>
      <td>eMMC</td>
      <td colSpan={4}>-</td>
    </tr>
    <tr>
      <td>拡張</td>
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD（M.2 NVMe SSD 128G 同梱）</td>
    </tr>
    <tr>
      <td rowSpan={9}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={4}>1× LAN0 RJ45 GbE (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 GbE PoE（PSE 802.3 af 15 W, 10/100/1000Mbps）</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1、1× USB2.0 Type-C（デバイスモード）、1× USB2.0 Type-C（Debug UART &amp; RP2040 用）</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4×DI、4×DO、3×GND_DI、2×GND_DO、1×GND_ISO、1×CAN</td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={4}>1× DB9（RS232/RS422/RS485）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={2}>1× HDMI 2.1 Type A 7680×4320 @ 30 Hz</td>
      <td colSpan={2}>1× HDMI 1.4 Type A 3840×2160 @ 30 Hz</td>
    </tr>
    <tr>
      <td>SATA</td>
      <td colSpan={4}>2× 2.5" SATA HDD/SSD 対応ドライブベイ（SATA III 6.0Gbps）</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={4}>1× Nano SIM スロット</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td colSpan={4}>リセットボタン、リカバリボタン</td>
    </tr>
    <tr>
      <td rowSpan={5}>拡張</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>LoRaWAN® / 4G / シリーズ無線用 Mini PCIe（モジュールはオプション）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B（3042/3052）4G/5G 対応（モジュールはオプション）</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={4}>ファンレス（パッシブヒートシンク）；1× ファンコネクタ（5V PWM）</td>
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
      <td colSpan={4}>DC 12V–36V 端子台 2 ピン</td>
    </tr>
    <tr>
      <td>電源アダプタ</td>
      <td colSpan={4}>24V / 5A 電源アダプタ（電源コードは付属しません）</td>
    </tr>
    <tr>
      <td rowSpan={9}>メカニカル</td>
      <td>寸法（W × D × H）</td>
      <td colSpan={4}>194.33mm × 187mm × 95.5mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td colSpan={4}>卓上、DIN レール、VESA</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan={4}>-20 〜 60°C（0.7m/s）</td>
    </tr>
    <tr>
      <td>動作湿度</td>
      <td colSpan={4}>95% @ 40°C（結露なきこと）</td>
    </tr>
    <tr>
      <td>保管温度</td>
      <td colSpan={4}>-40 〜 85°C</td>
    </tr>
    <tr>
      <td>保管湿度</td>
      <td colSpan={4}>60°C @ 95% RH（結露なきこと）</td>
    </tr>
    <tr>
      <td>振動</td>
      <td colSpan={4}>3 Grms @ 5 〜 500 Hz、ランダム、1 hr/axis</td>
    </tr>
    <tr>
      <td>衝撃</td>
      <td colSpan={4}>50G peak 加速度（11 msec. 継続、eMMC、microSD、または mSATA）</td>
    </tr>
    <tr>
      <td colSpan={2}>OS</td>
      <td colSpan={4}>JetPack 5.1.1（以上）をプリインストール（BSP 付き Linux OS を提供）</td>
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

### フルシステム

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

### キャリアボード

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

## JetPack のフラッシュ

:::danger
このデバイスには JetPack 5.1.1 がプリインストールされています。特別な要件がない限り、システムを再フラッシュする必要はありません。
:::

reServer Industrial には、必要なドライバと共に JetPack 5.1.1 が 128GB SSD にプリインストールされています。CUDA、cuDNN、TensorRT などの SDK コンポーネントも含まれます。既存の SSD に JetPack を再フラッシュする、または新しい SSD にフラッシュしたい場合は、以下の手順に従ってください。現在は JP5.1.1 のみ手順を提供しており、今後も更新していきます。

:::note
reServer Industrial で SSD を使用する場合は、Seeed が提供する [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)、および [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) バージョンのみを推奨します。
:::

### 事前準備

reServer Industrial を始める前に、以下のハードウェアを用意してください。

- reServer Industrial
- 付属の電源アダプタ＋電源コード（[US 版](https://www.seeedstudio.com/AC-US-p-5122.html) または [EU 版](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- Ubuntu ホスト PC（ネイティブ、または VMware Workstation Player を使用した VM）
- USB Type-C データ通信ケーブル
- 外部モニタ
- HDMI ケーブル
- キーボードとマウス

### 強制リカバリモードへ入る

デバイスをフラッシュするため、reServer Industrial ボードをリカバリモードにします。**DEVICE** ポートと PC を USB Type-C ケーブルで接続します。ピンを **REC** ホールに差し込みリカバリボタンを押し続けたまま、付属の **2 ピン端子台電源コネクタ** をボードの電源端子に接続（2 本のネジでしっかり固定）し、付属の電源アダプタと電源コードを接続して電源を投入します。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
RECOVERY ボタンを押しながら電源を入れてください。そうしないとリカバリーモードに入ることができません。
:::

Ubuntu ホスト PC でターミナルを開き、**lsusb** を実行します。使用中の Jetson SoM に応じて、以下のいずれかの出力が表示されれば、ボードは強制リカバリモードに入っています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

### フラッシュ方法

ここでは 2 つの方法を用意しています。

1. NVIDIA JetPack、本体周辺機能ドライバを含む当社提供のシステムイメージをダウンロードしてデバイスにフラッシュする
2. 公式 NVIDIA L4T をダウンロードし、同梱の周辺機能ドライバを使用してデバイスにフラッシュする

:::note
最初の方法のダウンロードサイズは約14GBで、2つ目の方法のダウンロードサイズは約3GBです。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="方法 1">

#### システムイメージをダウンロード

- **手順 1:** 使用するボードに対応するシステムイメージを Ubuntu PC にダウンロードします。

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>デバイス</th>
        <th>JetPack バージョン</th>
        <th>L4T バージョン</th>
        <th>イメージリンク</th>
        <th>代替イメージリンク</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={5}>reServer Industrial J4012</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWoMiCYaghJGsmgX8ki3lrwB67RFYkI9zvBW6t86w_7chg?e=afbbOs" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EWxVw3rZF-JPuKp0ksJZkGABWmsSxVizaJIqQBL5TDL1JA?e=4JJ2XV" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWcp7ma66_9JmfEjnMrxbfEBZk7LxwoJ2YuN-LDWEITE_g?e=NuKvDr" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVOMzCf8ulxAgCOCN9jlsUcBNR29X1dB6ILeYngqVHtwVA?e=UVc1qc" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY9t48fwnJVLraZyoVzYe2gB5RMb9FMXqKxVT9_WBFnnzQ?e=rcBfY5" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EW5Dood6aQ9DpT6ZaXWF50QBmyAyOowCktzqZj48sQeyhw?e=VVP56J" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcbD8zqcSTpAjBmjHZTAvU8BBd80FekQMV9jMD35xU4Arw?e=DNWcyn" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeSEdyl9XTNEkea8ntTsqM8B8w_Hs8JV-toT71bgvR3V0A?e=9P4ZAw" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZDbctjmL2tAtpW_gaqhylABEE5UT2chlro5vi20sFKygA?e=yE5NfC" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb6xTuWGRdlDpJfgLSWS7S4BpnKYxkI9RKl6tJbU0xI4FQ?e=m84vbP" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eeg04qGBxQNOjC2Q0hvfvugBx_V05xFkYM5ThVH9ECMZ6A?e=8fDLxZ" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EahC2mJQOQRBtoqG7fhuIecBSEo7w_Py8nGy_FB51QdtHg?e=W0U23d" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeCYmkCdhqRGrh2idfcueV0B4btw0JAzCt8i7ePWZwSeng?e=XH9HDx" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVqo37I8yiNEjpo14kR5kYAB0ZhMNUhIN8X5pZCEjk4f6A?e=0XGC0W" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQgrBDUICyZCnKBI_qVeupoBYqQJ1dP7_lcxUwxUphg6Qw?e=ObUzPI" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EXxmIAk7sGdOnPcaZHvz7ykB36pGkNwZscpdu3ZytrfD0Q?e=ElJ2bb" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ET-LxPOYaNtIjoJQ4I-gKEcBxU-AmFX9R-mWPH1p-eyBdA?e=EpAopw" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQd4hYwgVPxEk8CtZgfU2SsBzn18zMuQOHXq45yq6gykYw?e=sAoguo" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Download1 と Download2 のイメージファイルは同一です。ダウンロード速度の速い方をお選びください。
</p>

<!-- 上記イメージのソースコードは [こちら](https://github.com/Seeed-Studio/Linux_for_Tegra) にあります -->

- **手順 2:** 生成されたファイルを展開します

```sh
tar -xvf <file_name>.tar.gz
```

#### Jetson へフラッシュ

- **手順 1:** 展開したディレクトリへ移動し、以下のフラッシュコマンドを実行します

```sh
cd mfi_reserver-orin-industrial
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

これでボードへのシステムイメージのフラッシュが開始されます。フラッシュが成功すると、以下のような出力が表示されます。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **手順 2:** ボードの HDMI コネクタを使ってディスプレイに接続し、初期設定を完了します

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードは再起動し、使用できる状態になります。

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

- **手順 1:** 使用するボードに対応するドライバファイルを Ubuntu PC にダウンロードします

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
      <td rowSpan={2}>Jetson Orin NX 8GB / 16GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nx-8-16-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 8GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-8-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-4-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>

- **手順 2:** ダウンロードした周辺機能ドライバを **Linux_For_Tegra** ディレクトリと同じフォルダに移動します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **手順 3:** ダウンロードしたドライバの .zip を展開します。ここでは .zip 解凍に必要な **unzip** パッケージも追加でインストールします。

```sh
sudo apt install unzip
sudo unzip xxxx.zip # xxxx はドライバファイル名に置き換え
```

途中でファイルの置き換えを確認されます。必要なファイルの置換のため、A を入力して ENTER を押してください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### Jetson へフラッシュ

- **手順 1:** **Linux_for_Tegra** ディレクトリに移動し、以下のフラッシュコマンドを実行します

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

これでボードへのシステムイメージのフラッシュが開始されます。フラッシュが成功すると、以下のような出力が表示されます。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **手順 2:** ボードの HDMI コネクタを使ってディスプレイに接続し、初期設定を完了します

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードは再起動し、以下の画面が表示されます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **手順 3:** デバイス上でターミナルを開き、以下を実行します。再起動後、使用可能になります。

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

さらに、CUDA、cuDNN、TensorRT などの SDK コンポーネントをインストールしたい場合は、以下を実行してください。

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## ハードウェアおよび各インタフェースの使い方

:::info
  reServer Industrial ボード上のすべてのハードウェアとインターフェースの使用方法について詳しく知るには、この [**wiki**](/reserver_industrial_hardware_interface_usage) を参照してください：
:::

## リソース

（リンクの更新が必要な場合は置き換えてください）

- [reServer Industrial データシート](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial リファレンスガイド](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson デバイス & キャリアボード比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D ファイル](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技術サポート

ご不明点があれば、[フォーラム](https://forum.seeedstudio.com/) にお気軽に投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
