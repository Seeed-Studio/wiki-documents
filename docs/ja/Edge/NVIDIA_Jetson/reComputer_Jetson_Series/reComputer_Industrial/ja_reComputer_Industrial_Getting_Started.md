---
description: reComputer Industrial 入門ガイド
title: reComputer Industrial の使い方
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Industrial_Getting_Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer Industrial の使い方

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>

reComputer Industrial シリーズは、NVIDIA Jetson™ Xavier NX/ Orin Nano/Orin NX/ モジュールを含む完全なシステムを提供し、AI性能は20 TOPSから100 TOPSまで対応しています。Jetpack 5.1.1がプリインストールされており、reComputer Industrialは開発を簡素化し、ビデオ分析、物体検出、自然言語処理、医療画像処理、ロボットなどのアプリケーション構築に最適です。これにより、スマートシティ、セキュリティ、産業オートメーション、スマートファクトリーなどの業界でデジタルトランスフォーメーションを実現します。

reComputer Industrialはパッシブヒートシンクとファンレス設計を備えており、厳しい環境での使用に最適です。パッシブヒートシンクは効率的な冷却を可能にし、ファンが不要なため、埃やその他の汚染物質によるコンポーネント故障のリスクを軽減します。ファンレス設計は騒音レベルと消費電力を削減し、騒音に敏感な環境での使用に適しており、エネルギーコストを最小限に抑えます。

reComputer Industrialには2つのRJ45 GbEポートがあり、そのうち1つはPoE PSEポートで、IPカメラなどのデバイスにEthernet経由で電力を供給します。これにより、別途電源を用意する必要がなくなり、電源コンセントが容易に利用できない場所でのネットワークデバイスの展開が簡単になります。もう1つのGbEポートはネットワークスイッチやルーターに接続するために使用され、ネットワーク上の他のデバイスとの通信やインターネットへのアクセスを可能にします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 特徴

- **ファンレスコンパクトPC:** 熱設計基準、広い温度対応範囲 -20 ~ 60°C、0.7m/sの気流
- **産業用インターフェース設計:** 2x RJ-45 GbE(1つはPOE-PSE 802.3 af対応); 1x RS-232/RS-422/RS-485; 4x DI/DO; 1x CAN; 3x USB3.2; 1x TPM2.0 (モジュールオプション)
- **ハイブリッド接続:** 5G/4G/LTE/LoRaWAN® (モジュールオプション)対応、1x Nano SIMカードスロット
- **柔軟な取り付け:** デスク、DINレール、壁取り付け、VESA
- **認証:** FCC、CE、RoHS、UKCA

## 仕様

<table>
  <thead>
    <tr>
      <th colSpan={2}>製品名</th>
      <th>reComputer Industrial J4012</th>
      <th>reComputer Industrial J4011</th>
      <th> reComputer Industrial J3011 </th>
      <th> reComputer Industrial J3010</th>
      <th>reComputer Industrial J2012</th>
      <th>reComputer Industrial J2011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>NVIDIA Jetson モジュール</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
      <td>Xavier NX 16GB</td>
      <td>Xavier NX 8GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html">110110191</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html">110110190</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html">110110193</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3010-p-5686.html">110110192</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2012-p-5685.html">110110189</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2011-p-5683.html">110110188</a></td>
    </tr>
    <tr>
      <td rowSpan={6}>プロセッサシステム</td>
      <td>AI性能</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
      <td colSpan={2}>21 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>1024コア NVIDIA Ampere アーキテクチャ GPU、32 Tensor コア</td>
      <td>512コア NVIDIA Ampere アーキテクチャ GPU、16 Tensor コア</td>
      <td colSpan={2}>384コア NVIDIA Volta™ GPU、48 Tensor コア</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8コア Arm® Cortex®-A78AE v8.2 64ビット CPU<br />2MB L2 + 4MB L3</td>
      <td colSpan={3}>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU<br />1.5MB L2 + 4MB L3</td>
      <td colSpan={2}>6コア NVIDIA Carmel ARM®v8.2 64ビット CPU、6MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>16GB 128ビット LPDDR5<br />102.4GB/s</td>
      <td>8GB 128ビット LPDDR5<br />102.4GB/s</td>
      <td>8GB 128ビット LPDDR5<br />68 GB/s</td>
      <td>4GB 64ビット LPDDR5<br />34 GB/s</td>
      <td>16GB 128ビット LPDDR4x<br />59.7GB/s</td>
      <td>8GB 128ビット LPDDR4x<br />59.7GB/s</td>
    </tr>
    <tr>
      <td>ビデオエンコード</td>
      <td colSpan={2}>1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1080p30は1-2 CPUコアで対応</td>
      <td colSpan={2}>2×4K60 | 4×4K30 | 10×1080p60 | 22×1080p30 (H.265)<br /> 2×4K60 | 4×4K30 | 10×1080p60 | 20×108p30 (H.264)</td>
    </tr>
    <tr>
      <td>ビデオデコード</td>
      <td colSpan={2}>1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>1×4K60 (H.265) | 2×4K30 (H.265) | 5×1080p60 (H.265) | 11×1080p30 (H.265)</td>
      <td colSpan={2}>2×8K30 | 6×4K60 | 12×4K30 | 22×1080p60 | 44×1080p30 (H.265)<br /> 2×4K60 | 6×4K30 | 10×1080p60 | 22×1080p30 (H.264)</td>
    </tr>
    <tr>
      <td rowSpan={2}>ストレージ</td>
      <td>eMMC<br /></td>
      <td><br />-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td colSpan={2}>16GB eMMC 5.1</td>
    </tr>
    <tr>
      <td>拡張</td>
      <td colSpan={6}>M.2 Key M PCIe Gen4.0 SSD (M.2 NVMe 2280 SSD 128G付属)</td>
    </tr>
    <tr>
      <td rowSpan={6}>I/O</td>
      <td>ネットワーキング</td>
      <td colSpan={6}>1* LAN1 RJ45 GbE PoE(PSE 802.3 af 15 W)<br />1* LAN2 RJ45 GbE (10/100/1000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={6}>3* USB3.2 Gen1, 1* USB2.0 Type C(デバイスモード), 1* USB2.0 Type C デバッグUART &amp; RP2040用</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={6}>4×DI,4×DO,3×GND_DI,2×GND_DO,1×GND_ISO,1×CAN<br /></td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={6}>1* DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={6}>1×HDMI 2.0 Type A</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={6}>1* Nano SIMカードスロット</td>
    </tr>
    <tr>
      <td rowSpan={7}>拡張</td>
      <td>Mini PCIe</td>
      <td colSpan={6}>Mini PCIe for 4G/LoRaWAN®&nbsp;&nbsp;(モジュールオプション) <br /></td>
    </tr>
    <tr>
      <td>Wi-Fi</td>
      <td colSpan={6}>SMD Wi-Fi/Bluetooth対応 (モジュールオプション) </td>
    </tr>
    <tr>
      <td>M.2 Key B </td>
      <td colSpan={6}>M.2 Key B 4G/5G対応 (モジュールオプション) </td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={6}>ファンレス、パッシブヒートシンク<br />1*ファンコネクタ(5V PWM)</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={6}>1* TPM 2.0コネクタ (モジュールオプション) </td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={6}>1* RTCソケット (CR1220付属), 1* RTC 2ピン</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td colSpan={6}>2* CSI (2レーン 15ピン)</td>
    </tr>
    <tr>
      <td rowSpan={2}>電源</td>
      <td>電源供給</td>
      <td colSpan={6}>DC 12V-24V ターミナルブロック 2ピン</td>
    </tr>
    <tr>
      <td>電源アダプタ</td>
      <td colSpan={6}>19V 電源アダプタ(電源コードなし) </td>
    </tr>
    <tr>
      <td rowSpan={3}>機械的仕様<br /></td>
      <td>寸法 (W x D x H)</td>
      <td colSpan={6}>159mm*155mm*57mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={6}>1.57kg</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td colSpan={6}>デスク、DINレール、壁取り付け、VESA</td>
    </tr>
    <tr>
      <td rowSpan={4}>環境</td>
      <td>動作温度</td>
      <td colSpan={6}> -20 ~ 60°C、0.7m/s</td>
    </tr>
    <tr>
      <td>動作湿度</td>
      <td colSpan={6}>95% @ 40 °C (結露なし)</td>
    </tr>
    <tr>
      <td>振動</td>
      <td colSpan={6}>3 Grms @ 5 ~ 500 Hz、ランダム、1時間/軸</td>
    </tr>
    <tr>
      <td>衝撃</td>
      <td colSpan={6}>50Gピーク加速度 (11ミリ秒)</td>
    </tr>
    <tr>
      <td colSpan={2}>OS</td>
      <td colSpan={6}>Jetpack 5.1 (以上)プリインストール (ボードサポートパッケージ付きLinux OS提供)</td>
    </tr>
    <tr>
      <td colSpan={2}>認証</td>
      <td colSpan={6}>FCC、CE、RoHS、UKCA</td>
    </tr>
    <tr>
      <td colSpan={2}>保証</td>
      <td colSpan={6}>2年間</td>
    </tr>
  </tbody>
</table>

## ハードウェア概要

### 全体システム

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/3.jpg"/></div>

### キャリアボード

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/4.jpg"/></div>

## JetPack のフラッシュ

reComputer Industrial には、JetPack 5.1.1 が128GB SSDにプリインストールされており、必要なドライバも含まれています。これには、CUDA、CUDNN、TensorRT などの SDK コンポーネントが含まれています。ただし、JetPack を付属の SSD または新しい SSD に再フラッシュしたい場合は、以下の手順に従ってください。

:::note
reComputer Industrial で SSD を使用する場合、[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) の Seeed 製品を選択することをお勧めします。
:::

### 必要条件

reComputer Industrial を使用する前に、以下のハードウェアを準備してください。

- reComputer Industrial
- 付属の電源アダプタと電源コード（[USバージョン](https://www.seeedstudio.com/AC-US-p-5122.html) または [EUバージョン](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- Ubuntu 20.04 ホストPC
- USB Type-C データ転送ケーブル
- 外部モニター
- HDMI ケーブル
- キーボードとマウス

:::info
物理的な Ubuntu ホストデバイスを使用することを推奨します。以下の表を参照してホストマシンを準備してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2">JetPack バージョン</td>
        <td class="dbon" colspan="3">Ubuntu バージョン (ホストコンピュータ)</td>
    </tr>
    <tr>
        <td>18.04</td>
        <td>20.04</td>
        <td>22.04</td>
    </tr>
    <tr>
        <td>JetPack 5.x</td>
        <td>✅</td>
        <td>✅</td>
        <td></td>
    </tr>
    <tr>
        <td>JetPack 6.x</td>
        <td></td>
        <td>✅</td>
        <td>✅</td>
    </tr>
  </tbody>
</table>
:::

### 強制リカバリーモードに入る

reComputer Industrial ボードをフラッシュするには、リカバリーモードに入る必要があります。
1. **USB2.0 DEVICE** ポートと PC の間に USB Type-C ケーブルを接続します。
2. ピンを使用して **RECOVERY** ホールに挿入し、リカバリーボタンを押し続けます。
3. 付属の **2ピン端子ブロック電源コネクタ** をボードの電源コネクタに接続し、付属の電源アダプタと電源コードを接続してボードの電源を入れます。
4. リカバリーボタンを放します。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/97.png"/></div>

:::note
リカバリーボタンを押しながらデバイスの電源を入れないと、リカバリーモードに入ることができません。
:::

Ubuntu ホスト PC でターミナルウィンドウを開き、コマンド **lsusb** を入力します。使用している Jetson SoM に応じて、以下のいずれかの出力が表示されれば、ボードは強制リカバリーモードに入っています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

### Jetson へのフラッシュ

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Jetpack 5.1.1" label="Jetpack 5.1.1">

ここでは、2つの異なるフラッシュ方法を提供します。

1. NVIDIA JetPack、ハードウェア周辺機器ドライバを含むシステムイメージ全体をダウンロードしてデバイスにフラッシュする
2. NVIDIA の公式 L4T をダウンロードし、付属のハードウェア周辺機器ドライバを使用してデバイスにフラッシュする

:::note
1つ目の方法のダウンロードサイズは約14GB、2つ目の方法のダウンロードサイズは約3GBです。
:::

<Tabs>
<TabItem value="Method 1" label="方法1">

- **ステップ1:** 使用しているボードに対応するシステムイメージを Ubuntu PC にダウンロードします。
  <div class="table-center">
  <table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>デバイス</th>
      <th>イメージリンク1</th>
      <th>イメージリンク2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUhr3fzFqx9DmH83QrXmFAwBEpfC-VGsyBnqHSoOPPAzGQ?e=Wv7d8f" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EcXVegQs83tJpv3kmJPMmSEB8M9djK_gWgJapIJnOJQeUw?e=ntbXLi" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>F6623A277E538F309999107297405E1<br />378CF3791EA9FD19F91D263E3B4C88333</td>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbaTHCLEwfNOqAR1DH-IAWYB20HBEPG2G-IkPJ1dJJcWJw?e=2VYQXJ" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EStCSSWeyUtLkJXMj5Y6tXcBru2PIQNHLl6p2BZsRbzxjA?e=Gaaa6m" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>414DFE16703D0A2EE972DF1C77FCE2E<br />8B44BC71726BB6EE4B1439C2D0F19A653</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbQu844dGA5Fjn3n-320hmoBt6wngMrIv6fErKLEZI1GyQ?e=uSU6qb" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERgyc60CqY9Aog6BMW9-yqQBj8pMaakSFTzHHvb4edt_eg?e=9qFHKp" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>347AB7247ED83286BDFAEF84B49B84C<br />5F5B871AEE68192339EDE4773149D8737</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETnL5lrC6IBPqm6Lafx1nCMBJJjml1IrCagrHPGhxFpzxA?e=BBM0kl" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb7J_TSNsDBCrvc1RbSOmnoBqmjR9jYhkvZpdQJOzkH5KA?e=h4r74v" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>860EC8EB3245CB91E7C5C321B26333B<br />59456A3418731FEF73AE0188DF655EE46</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeD01G8dJ8pIm187oS_VX-sBu3SmD4LhaBmwVz7X4-n_Gw?e=x9ULSq" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Ef_fEAq0aA5JksfnEz62JKABfYTUzlTdOxkiKwoThp17xg?e=UlSs7A" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>821CF92AF1FE8A785689FAF4751615A<br />A30E7F0770B4FA23327DFAF2C8B53FDD7</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVYQRYavCVRJrHGz12qUPlIBdmK3hrjEyglRkuLhBSlYuA?e=SBnrTU" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EVVUAexfVKxDnjbUGtYrJhEB1He6ZXIAD4uriNP76fxbMg?e=kGYF6h" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>DAB8FC069E4C62434C77AE3A6BA13EE<br />FB30003C9A14BFE82DE879B88ACDD85FA</td>
    </tr>
  </tbody>
  </table>
  </div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Download1とDownload2の画像ファイルは同じです。ダウンロード速度が速いリンクを選択してください。
</p>

:::info
ダウンロードしたファームウェアの整合性を確認するには、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンでターミナルを開き、`sha256sum <File>`コマンドを実行して、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがWikiに記載されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全であることが確認されます。
:::

上記のイメージのソースコードは[こちら](https://github.com/Seeed-Studio/Linux_for_Tegra)から入手できます。

- **ステップ 2:** 生成されたファイルを解凍します

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **ステップ 3:** 解凍したファイルに移動し、以下のようにフラッシュコマンドを実行します

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

これで、システムイメージのボードへのフラッシュが開始されます。フラッシュが成功すると、以下の出力が表示されます。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 4:** ボードをHDMIコネクタを使用してディスプレイに接続し、初期設定を完了します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードは再起動し、使用可能な状態になります。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
  </TabItem>
<TabItem value="Method 2" label="方法 2">

**NVIDIA L4Tとrootfsのダウンロードと準備**

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ドライバのダウンロードと準備**

- **ステップ 1:** 使用しているボードに対応するドライバファイルをUbuntu PCにダウンロードします

<table>
  <thead>
    <tr>
      <th>Jetson モジュール</th>
      <th>ダウンロードリンク</th>
      <th>JetPackバージョン</th>
      <th>L4Tバージョン</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB,<br />Orin Nano 8GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nx-8-16-nano-8-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nano-4-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>Jetson Xavier NX 8GB/ 16GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/xavier-nx-8-16-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
  </tbody>
</table>

- **ステップ 2:** ダウンロードした周辺機器ドライバを**Linux_For_Tegra**ディレクトリと同じフォルダに移動します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/125.png"/></div>

- **ステップ 3:** ダウンロードしたドライバの.zipファイルを解凍します。ここでは、.zipファイルを解凍するために必要な**unzip**パッケージを追加でインストールします。

```sh
sudo apt install unzip
sudo unzip xxxx.zip # xxxxをドライバファイル名に置き換えてください
```

ここで、ファイルを置き換えるかどうかを尋ねられます。「A」と入力してENTERを押し、必要なファイルを置き換えます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/126.png"/></div>

- **ステップ 4:** **Linux_for_Tegra**ディレクトリに移動し、以下のようにフラッシュコマンドを実行します。

```sh
cd Linux_for_Tegra

# Orin NXおよびOrin Nanoの場合
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0 recomputer-orin-industrial external

# Xavier NXの場合
sudo ADDITIONAL_DTB_OVERLAY_OPT="BootOrderNvme.dtbo" ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_l4t_t194_qspi_p3668.xml --no-systemimg" --network usb0  recomputer-xavier-nx-industrial external
```

これで、システムイメージのボードへのフラッシュが開始されます。フラッシュが成功すると、以下の出力が表示されます。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 5:** ボードをHDMIコネクタを使用してディスプレイに接続し、初期設定を完了します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードは再起動し、以下の画面が表示されます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **ステップ 6:** デバイス内でターミナルウィンドウを開き、以下を実行します。デバイスは再起動し、使用可能な状態になります。

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

さらに、CUDA、cuDNN、TensorRTなどのSDKコンポーネントをインストールしたい場合は、以下を実行してください。

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```  
  </TabItem>
  </Tabs>

---

</TabItem>
<TabItem value="Jetpack 6.0" label="Jetpack6.0">

- **ステップ 1:** 使用しているボードに対応するシステムイメージを Ubuntu PC にダウンロードします。
<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>デバイス</th>
      <th>リンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcQJulAOt3ZJlnG-xr0lzdcB_d-yLXxEpicXuHr8sIca1w?e=dUWeYw" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>FEB6B83441F4C812921ED4554A3F6E903FCBF48DB1C2CF6C4240E764C3C3A4A3</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERWRQ6mJe2hIoSwsatwN68IBF0prjvm7XX1aHFmsTd25fQ?e=x06NFw" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>77B5967DCDFAAE6725381EAE7BD570A254BD1F9E6E4C28DE8D9D84760C204DF1</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcSZGn8G8QRKqJc1yV8wErsBhCgy_E2UmCX5O9utZtj4ug?e=uel2DE" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>0C5D1A7814E50270A78AD3AE3C04E90C4D7803111567A04018B26C43CEA8D564</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaj1r69kX5hNjzgb0xcOun0BWtd9sjq318O4FFi8bMKHvQ?e=n8wrM1" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>30184A2A2800733118F4CC711010AE523C9A3F0E9565617B1C2E9CF64AE21CF0</th>
    </tr>
  </tbody>
  </table> 
</div>

:::info
ダウンロードしたファームウェアの完全性を確認するには、SHA256 ハッシュ値を比較してください。

Ubuntu ホストマシンでターミナルを開き、`sha256sum <File>` コマンドを実行してダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュ値が Wiki に記載されている SHA256 ハッシュ値と一致する場合、ダウンロードしたファームウェアが完全であることが確認できます。
:::

:::info
上記のイメージのソースコードは [こちら](https://github.com/Seeed-Studio/Linux_for_Tegra) で確認できます。
:::

- **ステップ 2:** ダウンロードしたファイルを解凍します。

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **ステップ 3:** 解凍したファイルのディレクトリに移動し、以下のフラッシュコマンドを実行します。

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

これでシステムイメージのフラッシュが開始されます。フラッシュが成功すると、以下の出力が表示されます。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 4:** ボードを HDMI コネクタを使用してディスプレイに接続し、初期設定を完了します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードが再起動し、使用可能になります。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
</TabItem>

<TabItem value="Jetpack 6.1" label="Jetpack6.1">

- **ステップ 1:** 使用しているボードに対応するシステムイメージを Ubuntu PC にダウンロードします。
<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>デバイス</th>
      <th>リンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNMocOFBZNPqqC-W9uiIM4BgYUw-ZL0pk6juOVPFd_vqg?e=C8ldYX" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>6A2B3A71EE77E7000034351020FBF9A5260F944FB30B5DE672BF7897DEE87B5A</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfYrDXxD_oRCuk5nv8WmtqIBPY9FjkEHiAmsZDpvDj-sfQ?e=qxV5MG" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>EC94A1F9E10D07CE2C78D8C1B742575A84DA543CCD95564D8E0BEC823C0CA514</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeOq0sfMDhBEqZPX-ti_gJ0BzUdSGeFf5RrSdxFnQ70aNQ?e=GVr10a" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>547E541E40A133A2CDEB3FAC399850ABC108325BBF109771420DDBCAF19E5E29</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXK1GomjByJKnmt3OdE5Vq8BSqzYZm1MY_yD18YjmRplLw?e=dIWPKA" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>B7F400C225423C8BC4C00A5915C3C634D2D7B15145FE0735479E6AD7613D07E5</th>
    </tr>
  </tbody>
  </table> 
</div>

:::info
ダウンロードしたファームウェアの完全性を確認するには、SHA256 ハッシュ値を比較してください。

Ubuntu ホストマシンでターミナルを開き、`sha256sum <File>` コマンドを実行してダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュ値が Wiki に記載されている SHA256 ハッシュ値と一致する場合、ダウンロードしたファームウェアが完全であることが確認できます。
:::

:::info
上記のイメージのソースコードは [こちら](https://github.com/Seeed-Studio/Linux_for_Tegra) で確認できます。
:::

- **ステップ 2:** ダウンロードしたファイルを解凍します。

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **ステップ 3:** 解凍したファイルのディレクトリに移動し、以下のフラッシュコマンドを実行します。

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

これでシステムイメージのボードへのフラッシュが開始されます。フラッシュが成功すると、以下の出力が表示されます。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 4:** HDMIコネクタを使用してJ401をディスプレイに接続し、初期設定を完了します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
必要に応じて**システム設定**を完了してください。
:::

</TabItem>

<TabItem value="Jetpack 6.2" label="Jetpack6.2">

- **ステップ 1:** 使用しているボードに対応するシステムイメージをUbuntu PCにダウンロードします。
<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>デバイス</th>
      <th>リンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdypjC_kT7RAqqBHytE_KLwBLU6fEpoQ5Rv_MWYk-lMszQ?e=VV0U9A" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>7273143FCC46E2F7441BCF5FE6B4043C<br />A6428E126C50373462EC3091959CE0AA</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXRpfNGzXmdCi36MrQYtzvABYW0gWcLGshzVhBiodVtPWQ?e=pO824v" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>0C07EC7C852DD72A7E8034965A274193<br />9B2DDA9C88AB9C6E4CB41E6264B95BDC</th>
    </tr>
  </tbody>
  </table> 
</div>

:::info
ダウンロードしたファームウェアの完全性を確認するには、SHA256ハッシュ値を比較してください。

Ubuntuホストマシンでターミナルを開き、`sha256sum <File>`コマンドを実行してダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがWikiに記載されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全であることが確認されます。
:::

:::info
上記のイメージのソースコードは[こちら](https://github.com/Seeed-Studio/Linux_for_Tegra)で確認できます。
:::

:::note
`super mode`を有効にした後の消費電力と発熱の増加により、[reComputer Industrial J4011](https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html)および[reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html)は最高モードで安定して動作することができません。そのため、この更新にはこれら2つの製品は含まれていません。
現在、新しいバージョンのreComputerを設計中です。続報をお待ちください！
:::

- **ステップ 2:** 生成されたファイルを解凍します。

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **ステップ 3:** 以前に解凍したファイルに移動し、以下のようにフラッシュコマンドを実行します。

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

これでシステムイメージのボードへのフラッシュが開始されます。フラッシュが成功すると、以下の出力が表示されます。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 4:** HDMIコネクタを使用してJ401をディスプレイに接続し、初期設定を完了します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
必要に応じて**システム設定**を完了してください。
:::

</TabItem>

</Tabs>

## ハードウェアとインターフェースの使用方法

reComputer Industrial ボード上のすべてのハードウェアとインターフェースの使用方法について詳しく知りたい場合は、準備された関連 Wiki ドキュメントをご参照ください。

- [reComputer Industrial J20 ハードウェアとインターフェースの使用方法](https://wiki.seeedstudio.com/ja/reComputer_Industrial_J20_Hardware_Interfaces_Usage)
- [reComputer Industrial J40, J30 ハードウェアとインターフェースの使用方法](https://wiki.seeedstudio.com/ja/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage)

## リソース

- [reComputer Industrial データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-datasheet.pdf)
- [reComputer Industrial リファレンスガイド](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson デバイスとキャリアボードの比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reComputer Industrial 3D ファイル](https://files.seeedstudio.com/products/NVIDIA/Industrial/reComputer-Industrial.stp)
- [Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイス ワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>