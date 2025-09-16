---
description: reServer Industrial 入門ガイド
title: reServer Industrial 入門ガイド
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reServer_Industrial_Getting_Started
last_update:
  date: 09/22/2023
  author: Lakshantha
---

# reServer Industrial 入門ガイド

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

reServer Industrial シリーズは、NVIDIA Jetson™ Orin Nano/Orin NX モジュールを搭載したファンレス、コンパクト、AI対応NVR（ネットワークビデオレコーダー）サーバーを提供し、20 TOPSから100 TOPSまでのAI性能を実現します。reServer Industrial は JetPack 5.1.1 がプリインストールされており、開発を簡素化し、強力なAI機能と組み合わせたVMS（ビデオ管理システム）の構築に最適で、スマートシティ、セキュリティ、産業オートメーション、スマートファクトリーなどの業界にデジタル変革をもたらします。

reServer Industrial は、パッシブヒートシンクとファンレス設計を採用しており、過酷な環境での使用に最適です。パッシブヒートシンクにより、ファンを必要とせずに効率的な冷却が可能で、ほこりやその他の汚染物質による部品故障のリスクを軽減します。ファンレス設計により、騒音レベルと消費電力も削減され、騒音に敏感な環境での使用に適し、エネルギーコストを最小限に抑えます。

reServer Industrial は5つのRJ45 GbEポートを備えており、そのうち4つはIPカメラなどのデバイスにイーサネット経由で電力を供給するPoE PSEポートです。これにより、別の電源が不要になり、電源コンセントが容易に利用できない場所でのネットワークデバイスの展開が簡単になります。残りのGbEポートは、ネットワークスイッチやルーターへの接続に使用され、ネットワーク上の他のデバイスとの通信やインターネットへのアクセスを可能にします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 特徴

- **ファンレス コンパクト エッジAIサーバー：** NVIDIA Jetson™ Orin Nano/Orin NX モジュールを搭載、20 TOPSから100 TOPSまでのAI性能、0.7m/sの気流で-20～60°Cの広い温度範囲
- **マルチストリーム処理：** 5× GbE RJ45（4つは802.3af PSE）、リアルタイム処理で複数のストリームを処理
- **拡張可能ストレージ：** 2.5" SATA HDD/SSD用の2つのドライブベイ、NVMe SSD用のM.2 2280ソケット
- **産業用インターフェース：** COMポート、DI/DOポート、CANポート、USB 3.1、オプションのTPM2.0モジュールを含む
- **ハイブリッド接続：** Nano SIMカードスロット付きで5G/4G/LTE/LoRaWAN®（モジュールオプション）をサポート
- **認証：** FCC、CE、UKCA、ROHS、KC

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
      <td>AI性能</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>1024コア NVIDIA Ampere アーキテクチャ GPU、32 Tensor コア </td>
      <td>512コア NVIDIA Ampere アーキテクチャ GPU、16 Tensor コア</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8コア Arm® Cortex®-A78AE v8.2 64ビット CPU; 2MB L2 + 4MB L3 </td>
      <td colSpan={3}>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>16GB 128ビット LPDDR5 102.4GB/s</td>
      <td>8GB 128ビット LPDDR5 102.4GB/s</td>
      <td>8GB 128ビット LPDDR5 68 GB/s</td>
      <td>4GB 64ビット LPDDR5 34 GB/s</td>
    </tr>
    <tr>
      <td>ビデオエンコード</td>
      <td colSpan={2}>サポート規格: H.265 (HEVC), H.264, AV1 1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 は1-2 CPUコアでサポート </td>
    </tr>
    <tr>
      <td>ビデオデコード</td>
      <td colSpan={2}>サポート規格: H.265 (HEVC), H.264, VP9, AV1 1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>サポート規格: H.265 (HEVC), H.264, VP9, AV1 1×4K60 (H.265) | 2×4K30 (H.265) | 5×1080p60 (H.265) | 11×1080p30 (H.265)</td>
    </tr>
    <tr>
      <td rowSpan={2}>ストレージ</td>
      <td>eMMC</td>
      <td colSpan={4}>-</td>
    </tr>
    <tr>
      <td>拡張</td>
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD (M.2 NVMe SSD 128G 付属)</td>
    </tr>
    <tr>
      <td rowSpan={9}>I/O</td>
      <td>イーサネット</td>
      <td colSpan={4}>1× LAN0 RJ45 GbE (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 GbE PoE(PSE 802.3 af 15 W, 10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1, 1× USB2.0 Type C(デバイスモード), 1× USB2.0 Type C デバッグUART & RP2040用</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4×DI,4×DO,3×GND_DI,2×GND_DO,1×GND_ISO,1×CAN</td>
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
      <td colSpan={4}>2.5" SATA HDD/SSD対応の2つのドライブベイ(SATA III 6.0Gbps)</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={4}>1× Nano SIMカードスロット</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td colSpan={4}>リセットボタン、リカバリーボタン</td>
    </tr>
    <tr>
      <td rowSpan={5}>拡張</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>LoRaWAN®/4G/シリーズワイヤレス用Mini PCIe (モジュールオプション)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) 4G/5G対応 (モジュールオプション) </td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={4}>ファンレス、パッシブヒートシンク; 1×ファンコネクタ(5V PWM)</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={4}>1× TPM 2.0 コネクタ (モジュールオプション)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>1× RTCソケット (CR1220 付属),×RTC 2ピン</td>
    </tr>
    <tr>
      <td rowSpan={2}>電源</td>
      <td>電源供給</td>
      <td colSpan={4}>DC 12V-36V ターミナルブロック 2ピン</td>
    </tr>
    <tr>
      <td>電源アダプタ</td>
      <td colSpan={4}>24V /5A 電源アダプタ(電源コード別売)</td>
    </tr>
    <tr>
      <td rowSpan={9}>機械的仕様</td>
      <td>寸法 (W x D x H)</td>
      <td colSpan={4}>194.33mm×187mm×95.5mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>設置</td>
      <td colSpan={4}>デスク、DINレール、VESA</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan={4}>-20 ~ 60°C (0.7m/s気流)</td>
    </tr>
    <tr>
      <td>動作湿度</td>
      <td colSpan={4}>95% @ 40 °C (結露なし)</td>
    </tr>
    <tr>
      <td>保存温度</td>
      <td colSpan={4}>-40 ~ 85°C</td>
    </tr>
    <tr>
      <td>保存湿度</td>
      <td colSpan={4}>60°C@ 95% RH(結露なし)</td>
    </tr>
    <tr>
      <td>振動</td>
      <td colSpan={4}>3 Grms @ 5 ~ 500 Hz, ランダム, 1 時間/軸</td>
    </tr>
    <tr>
      <td>衝撃</td>
      <td colSpan={4}>50G ピーク加速度 (11 msec. 持続時間,eMMC,microSD, または mSATA)</td>
    </tr>
    <tr>
      <td colSpan={2}>OS</td>
      <td colSpan={4}>JetPack 5.1.1 (以上) プリインストール (ボードサポートパッケージ付きLinux OSを提供) </td>
    </tr>
    <tr>
      <td colSpan={2}>認証</td>
      <td colSpan={4}>FCC, CE, RoHS, UKCA, KC</td>
    </tr>
    <tr>
      <td colSpan={2}>保証</td>
      <td colSpan={4}>2年</td>
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
デバイスには JetPack 5.1.1 がプリインストールされています。特別な要件がない限り、システムを再フラッシュする必要はありません。
:::

reServer Industrial には、必要なドライバーと共に JetPack 5.1.1 が128GB SSDにプリインストールされています。これには、CUDA、CUDNN、TensorRT などのSDKコンポーネントが含まれています。ただし、付属のSSDまたは新しいSSDにJetPackを再フラッシュしたい場合は、以下の手順に従ってください。現在、JP5.1.1のガイダンスのみを提供しており、今後も継続的に更新していく予定です。

:::note
reServer Industrial でSSDを使用する場合は、Seeedの[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)、[1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)バージョンのみを選択することをお勧めします。
:::

### 前提条件

reServer Industrialを始める前に、以下のハードウェアを準備する必要があります

- reServer Industrial
- 付属の電源アダプター（電源コード付き）（[US版](https://www.seeedstudio.com/AC-US-p-5122.html)または[EU版](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- Ubuntu ホストPC（ネイティブまたはVMware Workstation Playerを使用したVM）
- USB Type-C データ転送ケーブル
- 外部モニター
- HDMIケーブル
- キーボードとマウス

### 強制リカバリーモードに入る

デバイスをフラッシュするために、reServer Industrialボードをリカバリーモードに入れる必要があります。**DEVICE**ポートとPCの間にUSB Type-Cケーブルを接続します。ピンを使って**REC**ホールに挿入してリカバリーボタンを押し、これを押し続けながら、付属の**2ピンターミナルブロック電源コネクター**をボードの電源コネクターに接続し（2本のネジでターミナルを所定の位置にねじ込むことを確認してください）、付属の電源アダプターに電源コードを接続してボードの電源を入れます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
RECOVERYボタンを押しながらデバイスの電源を入れることを確認してください。そうしないとリカバリーモードに入りません
:::

Ubuntu ホストPCで、ターミナルウィンドウを開き、コマンド**lsusb**を入力します。使用するJetson SoMに応じて、返される内容に以下の出力のいずれかがある場合、ボードは強制リカバリーモードになっています。

- Orin NX 16GBの場合：**0955:7323 NVidia Corp**
- Orin NX 8GBの場合：**0955:7423 NVidia Corp**
- Orin Nano 8GBの場合：**0955:7523 NVidia Corp**
- Orin Nano 4GBの場合：**0955:7623 NVidia Corp**

### フラッシュの異なる方法

ここでは2つの異なるフラッシュ方法を提供します。

1. NVIDIA JetPack、ハードウェア周辺機器ドライバーを含む、準備済みのシステムイメージ全体をダウンロードしてデバイスにフラッシュ
2. 公式のNVIDIA L4Tをダウンロードし、付属のハードウェア周辺機器ドライバーを使用してデバイスにフラッシュ

:::note
最初の方法のダウンロードは約14GB、2番目の方法のダウンロードは約3GBです
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="方法1">

#### システムイメージのダウンロード

- **ステップ1：** 使用しているボードに対応するシステムイメージをUbuntu PCにダウンロードします。

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>デバイス</th>
        <th>JetPackバージョン</th>
        <th>L4Tバージョン</th>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETo-G6kS2atGpfsWK6uX2HIBcrwsAboHjDBB_rypE4iyTA?e=GZyglq" target="_blank" rel="noopener noreferrer">Download1</a>
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
  * Download1とDownload2のイメージファイルは同じです。ダウンロード速度の速いリンクを選択してください。
</p>

<!-- The source code for the above images can be found [here](https://github.com/Seeed-Studio/Linux_for_Tegra) -->

- **ステップ 2:** 生成されたファイルを展開する

```sh
tar -xvf <file_name>.tar.gz
```

#### Jetsonにフラッシュする

- **ステップ 1:** 先ほど展開したファイルに移動し、以下のようにフラッシュコマンドを実行する

```sh
cd mfi_reserver-orin-industrial
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

これでボードへのシステムイメージのフラッシュが開始されます。フラッシュが成功すると、以下の出力が表示されます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 2:** ボードのHDMIコネクタを使用してディスプレイに接続し、初期設定セットアップを完了する

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードが再起動し、使用準備が完了します！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

---

</TabItem>
<TabItem value="method2" label="方法 2">

#### NVIDIA L4Tとrootfsをダウンロードして準備する

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

#### ドライバーをダウンロードして準備する

- **ステップ 1:** 使用しているボードに対応するドライバーファイルをUbuntu PCにダウンロードする

<table>
  <thead>
    <tr>
      <th>Jetsonモジュール</th>
      <th>ダウンロードリンク</th>
      <th>JetPackバージョン</th>
      <th>L4Tバージョン</th>
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

- **ステップ 2:** ダウンロードした周辺機器ドライバーを**Linux_For_Tegra**ディレクトリと同じフォルダに移動する

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **ステップ 3:** ダウンロードしたドライバーの.zipファイルを展開する。ここでは.zipファイルの解凍に必要な**unzip**パッケージを追加でインストールします

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

ここでファイルを置き換えるかどうか尋ねられます。Aを入力してENTERを押し、必要なファイルを置き換えます

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### Jetsonにフラッシュする

- **ステップ 1:** **Linux_for_Tegra**ディレクトリに移動し、以下のようにフラッシュコマンドを実行する

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

これでボードへのシステムイメージのフラッシュが開始されます。フラッシュが成功すると、以下の出力が表示されます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 2:** ボードのHDMIコネクタを使用してディスプレイに接続し、初期設定セットアップを完了する

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードが再起動し、以下が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **ステップ 3:** デバイス内でターミナルウィンドウを開き、以下を実行すると、デバイスが再起動し、使用準備が完了します！

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

さらに、CUDA、cuDNN、TensorRTなどのSDKコンポーネントをインストールしたい場合は、以下を実行してください

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## ハードウェアとインターフェースの使用方法

:::info
  reServer Industrialボード上のすべてのハードウェアとインターフェースの使用方法について詳しく学ぶには、この[**wiki**](/ja/reserver_industrial_hardware_interface_usage)に従ってください：
:::

## リソース

(change the links)

- [reServer Industrial データシート](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial リファレンスガイド](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetsonデバイスとキャリアボードの比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3Dファイル](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技術サポート

お気軽に私たちの[フォーラム](https://forum.seeedstudio.com/)に問題を投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
