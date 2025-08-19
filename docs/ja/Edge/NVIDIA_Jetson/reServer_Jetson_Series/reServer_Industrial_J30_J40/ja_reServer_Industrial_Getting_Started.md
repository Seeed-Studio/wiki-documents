---
description: reServer Industrial 入門ガイド
title: reServer Industrial 入門ガイド
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reServer_Industrial_Getting_Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reServer Industrial 入門ガイド

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

reServer Industrial シリーズは、NVIDIA Jetson™ Orin Nano/Orin NX モジュールを搭載したファンレスでコンパクトなAI対応NVR（ネットワークビデオレコーダー）サーバーを提供します。これらは20 TOPSから100 TOPSのAI性能を持ち、Jetpack 5.1.1がプリインストールされており、開発を簡素化します。強力なAI機能を備えたVMS（ビデオ管理システム）の構築に理想的であり、スマートシティ、セキュリティ、産業オートメーション、スマートファクトリーなどの産業におけるデジタルトランスフォーメーションを実現します。

reServer Industrial はパッシブヒートシンクとファンレス設計を採用しており、厳しい環境での使用に最適です。パッシブヒートシンクはファンを必要とせず効率的な冷却を可能にし、埃やその他の汚染物質によるコンポーネント故障のリスクを軽減します。ファンレス設計はまた、騒音レベルと消費電力を削減し、騒音に敏感な環境での使用に適しており、エネルギーコストを最小限に抑えます。

reServer Industrial は5つのRJ45 GbEポートを備えており、そのうち4つはPoE PSEポートで、IPカメラなどのデバイスにイーサネット経由で電力を供給します。これにより、別途電源を用意する必要がなくなり、電源コンセントが容易に利用できない場所でのネットワークデバイスの展開が簡単になります。残りのGbEポートはネットワークスイッチやルーターに接続するために使用され、ネットワーク上の他のデバイスとの通信やインターネットへのアクセスを可能にします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 特徴

- **ファンレスコンパクトエッジAIサーバー:** NVIDIA Jetson™ Orin Nano/Orin NX モジュール搭載、20 TOPSから100 TOPSのAI性能、-20 ~ 60°Cの広い温度範囲（0.7m/sの気流）
- **マルチストリーム処理:** 5つのGbE RJ45ポート（802.3af PSE対応の4ポート）、リアルタイム処理で複数ストリームを処理
- **拡張可能なストレージ:** 2.5インチSATA HDD/SSD用の2つのドライブベイ、M.2 2280ソケット（NVMe SSD対応）
- **産業用インターフェース:** COMポート、DI/DOポート、CANポート、USB 3.1、オプションのTPM2.0モジュールを含む
- **ハイブリッド接続:** Nano SIMカードスロット付きで5G/4G/LTE/LoRaWAN®（モジュールオプション）をサポート
- **認証:** FCC、CE、UKCA、ROHS、KC

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
      <td>AI性能</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>1024コア NVIDIA Ampere アーキテクチャ GPU（32 Tensor コア付き）</td>
      <td>512コア NVIDIA Ampere アーキテクチャ GPU（16 Tensor コア付き）</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8コア Arm® Cortex®-A78AE v8.2 64ビット CPU; 2MB L2 + 4MB L3</td>
      <td colSpan={3}>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU; 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>16GB 128ビット LPDDR5 102.4GB/s</td>
      <td>8GB 128ビット LPDDR5 102.4GB/s</td>
      <td>8GB 128ビット LPDDR5 68GB/s</td>
      <td>4GB 64ビット LPDDR5 34GB/s</td>
    </tr>
    <tr>
      <td>ビデオエンコード</td>
      <td colSpan={2}>対応規格: H.265 (HEVC), H.264, AV1 1&#42;4K60 (H.265) &#124; 3&#42;4K30 (H.265) &#124; 6&#42;1080p60 (H.265) &#124; 12&#42;1080p30 (H.265)</td>
      <td colSpan={2}>1080p30は1～2 CPUコアで対応</td>
    </tr>
    <tr>
      <td>ビデオデコード</td>
      <td colSpan={2}>対応規格: H.265 (HEVC), H.264, VP9, AV1 1&#42;8K30 (H.265) &#124; 2&#42;4K60 (H.265) &#124; 4&#42;4K30 (H.265) &#124; 9&#42;1080p60 (H.265) &#124; 18&#42;1080p30 (H.265)</td>
      <td colSpan={2}>対応規格: H.265 (HEVC), H.264, VP9, AV1 1&#42;4K60 (H.265) &#124; 2&#42;4K30 (H.265) &#124; 5&#42;1080p60 (H.265) &#124; 11&#42;1080p30 (H.265)</td>
    </tr>
    <tr>
      <td rowSpan={2}>ストレージ</td>
      <td>eMMC</td>
      <td colSpan={4}>-</td>
    </tr>
    <tr>
      <td>拡張</td>
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD (M.2 NVMe SSD 128G付属)</td>
    </tr>
    <tr>
      <td rowSpan={9}>I/O</td>
      <td>イーサネット</td>
      <td colSpan={4}>1* LAN0 RJ45 GbE (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4* LAN RJ45 GbE PoE(PSE 802.3 af 15 W, 10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4* USB3.1, 1* USB2.0 Type C（デバイスモード）, 1* USB2.0 Type C（デバッグUART & RP2040用）</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4*DI, 4*DO, 3*GND_DI, 2*GND_DO, 1*GND_ISO, 1*CAN</td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={4}>1* DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={2}>1* HDMI 2.1 Type A 7680x4320 @ 30 Hz</td>
      <td colSpan={2}>1* HDMI 1.4 Type A 3840x2160 @ 30 Hz</td>
    </tr>
    <tr>
      <td>SATA</td>
      <td colSpan={4}>2つのドライブベイで2.5インチSATA HDD/SSDをサポート（SATA III 6.0Gbps）</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={4}>1* Nano SIMカードスロット</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td colSpan={4}>リセットボタン、リカバリボタン</td>
    </tr>
    <tr>
      <td rowSpan={5}>拡張</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>Mini PCIe for LoRaWAN®/4G/シリーズワイヤレス（モジュールオプション）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) 4G/5G対応（モジュールオプション）</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={4}>ファンレス、パッシブヒートシンク; 1*ファンコネクタ（5V PWM）</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={4}>1* TPM 2.0コネクタ（モジュールオプション）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>1* RTCソケット（CR1220付属）、*RTC 2ピン</td>
    </tr>
    <tr>
      <td rowSpan={2}>電源</td>
      <td>電源供給</td>
      <td colSpan={4}>DC 12V-36V ターミナルブロック 2ピン</td>
    </tr>
    <tr>
      <td>電源アダプタ</td>
      <td colSpan={4}>24V /5A 電源アダプタ（電源コードなし）</td>
    </tr>
    <tr>
      <td rowSpan={9}>機械的仕様</td>
      <td>寸法（幅 x 奥行 x 高さ）</td>
      <td colSpan={4}>194.33mm*187mm*95.5mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td colSpan={4}>デスク、DINレール、VESA</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan={4}>-20 ~ 60°C（0.7m/s）</td>
    </tr>
    <tr>
      <td>動作湿度</td>
      <td colSpan={4}>95% @ 40°C（結露なし）</td>
    </tr>
    <tr>
      <td>保管温度</td>
      <td colSpan={4}>-40 ~ 85°C</td>
    </tr>
    <tr>
      <td>保管湿度</td>
      <td colSpan={4}>60°C @ 95% RH（結露なし）</td>
    </tr>
    <tr>
      <td>振動</td>
      <td colSpan={4}>3 Grms @ 5 ~ 500 Hz、ランダム、1時間/軸</td>
    </tr>
    <tr>
      <td>衝撃</td>
      <td colSpan={4}>50Gピーク加速度（11ミリ秒の持続時間、eMMC、microSD、またはmSATA）</td>
    </tr>
    <tr>
      <td colSpan={2}>OS</td>
      <td colSpan={4}>Jetpack 5.1.1（以上）プリインストール（ボードサポートパッケージ付きLinux OSを提供）</td>
    </tr>
    <tr>
      <td colSpan={2}>認証</td>
      <td colSpan={4}>FCC、CE、RoHS、UKCA、KC</td>
    </tr>
    <tr>
      <td colSpan={2}>保証</td>
      <td colSpan={4}>2年間</td>
    </tr>
  </tbody>
</table>

## ハードウェア概要

### フルシステム

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

### キャリアボード

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

## JetPackのフラッシュ

:::danger
デバイスにはJetPack 5.1.1がプリインストールされています。特別な要件がない限り、システムを再フラッシュする必要はありません。
:::

reServer Industrialには、JetPack 5.1.1が128GB SSDにプリインストールされており、必要なドライバも含まれています。これには、CUDA、CUDNN、TensorRTなどのSDKコンポーネントが含まれます。ただし、JetPackを付属のSSDまたは新しいSSDに再フラッシュしたい場合は、以下の手順に従ってください。現在、JP5.1.1のガイダンスのみを提供しており、今後も更新を続けていきます。

:::note
reServer IndustrialでSSDを使用する場合、[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)、および[1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)バージョンをSeeedから選択することをお勧めします。
:::

### 必要条件

reServer Industrialを始める前に、以下のハードウェアを準備する必要があります。

- reServer Industrial
- 付属の電源アダプタと電源コード（[USバージョン](https://www.seeedstudio.com/AC-US-p-5122.html)または[EUバージョン](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- UbuntuホストPC（ネイティブまたはVMware Workstation Playerを使用したVM）
- USB Type-Cデータ転送ケーブル
- 外部モニター
- HDMIケーブル
- キーボードとマウス

### 強制リカバリモードに入る

デバイスをフラッシュするために、reServer Industrialボードをリカバリモードにする必要があります。USB Type-Cケーブルを**DEVICE**ポートとPCの間に接続します。ピンを使用して**REC**ホールに挿入し、リカバリボタンを押しながら、付属の**2ピンターミナルブロック電源コネクタ**をボードの電源コネクタに接続します（2本のネジを使用してターミナルを固定してください）。その後、付属の電源アダプタと電源コードを接続してボードの電源を入れます。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
リカバリボタンを押しながらデバイスの電源を入れないと、リカバリモードに入ることができません。
:::

UbuntuホストPCでターミナルウィンドウを開き、コマンド**lsusb**を入力します。使用しているJetson SoMに応じて、以下のいずれかの出力が返される場合、ボードは強制リカバリモードにあります。

- Orin NX 16GBの場合: **0955:7323 NVidia Corp**
- Orin NX 8GBの場合: **0955:7423 NVidia Corp**
- Orin Nano 8GBの場合: **0955:7523 NVidia Corp**
- Orin Nano 4GBの場合: **0955:7623 NVidia Corp**

### フラッシュの異なる方法

ここでは、2つの異なるフラッシュ方法を提供します。

1. NVIDIA JetPack、ハードウェア周辺機器ドライバを含むシステムイメージ全体をダウンロードしてデバイスにフラッシュする
2. NVIDIA公式のL4Tをダウンロードし、付属のハードウェア周辺機器ドライバを使用してデバイスにフラッシュする

:::note
1つ目の方法のダウンロードサイズは約14GB、2つ目の方法のダウンロードサイズは約3GBです。
:::

<!-- コード -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="方法1">

#### システムイメージのダウンロード

- **ステップ1:** 使用しているボードに対応するシステムイメージをUbuntu PCにダウンロードします。

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
        <td rowSpan={4}>reServer Industrial J4012</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWoMiCYaghJGsmgX8ki3lrwB67RFYkI9zvBW6t86w_7chg?e=afbbOs" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EWxVw3rZF-JPuKp0ksJZkGABWmsSxVizaJIqQBL5TDL1JA?e=4JJ2XV" target="_blank" rel="noopener noreferrer">ダウンロード2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaRzlOF50wRDvR-1NIgs61YBKz-py02JpUSoa2xKw8i0YQ?e=Lg5LgL" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV0nlnSfW3NEmcDq4l3u1M4BrzThb0-y44qa4hGXk-XfWg?e=G9ub1C" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdCn0yi0ArRKivHb3mKLrwcBmBEKXlGKLCnNkRQNzyylAw?e=QTnhQa" target="_blank" rel="noopener noreferrer">ダウンロード2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES_8t6K7-0tJmkfcrTs0rgoBGvrBiq4Tr6X6ZTU3SjXxjQ?e=vuiqGS" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={4}>reServer Industrial J4011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY9t48fwnJVLraZyoVzYe2gB5RMb9FMXqKxVT9_WBFnnzQ?e=rcBfY5" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EW5Dood6aQ9DpT6ZaXWF50QBmyAyOowCktzqZj48sQeyhw?e=VVP56J" target="_blank" rel="noopener noreferrer">ダウンロード2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES3YbJVFEWBMjaDiE49HNIwB99DwjtfX4QUl3j9Y2eG5KA?e=uBlimq" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZlrBLKGf5VDiczIJaPNpNoBcby3urzv85oWmS34pKtcGg?e=u7aWDL" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQJBb6D2ISBEnoUnUkqVEgkB9npGJ48jw5p2DXFIWaNJxA?e=lOJiFM" target="_blank" rel="noopener noreferrer">ダウンロード2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERd_GV-EQGtIiqm90pnmAisBKIuOgZnCISP783um9r7OJw?e=nYL7oz" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZDbctjmL2tAtpW_gaqhylABEE5UT2chlro5vi20sFKygA?e=yE5NfC" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb6xTuWGRdlDpJfgLSWS7S4BpnKYxkI9RKl6tJbU0xI4FQ?e=m84vbP" target="_blank" rel="noopener noreferrer">ダウンロード2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERyNbY0Uv3FDpjaziT2Ni3QBZJvs-v5gQ1RXcYwH4x-UxQ?e=jlBd3I" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0cen9MPIhJpM2LBfm2edEBZtw53n2C9PwqsY2XaiSH_w?e=LWQren" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdqRMLVCzHtIkHUShgZ91xoBK367uzXyC_mTGQOzlfJhyQ?e=wgOhwj" target="_blank" rel="noopener noreferrer">ダウンロード2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXv18M5S-gNGvFVyCgUIfOMBveES_RLF25qpEP1uMLGrBA?e=d7b2j7" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ESNHrERy6DJCotXjFJT_5yYBbRzp7AHYujEsbcT4B4ZNCg?e=d1BePF" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeCYmkCdhqRGrh2idfcueV0B4btw0JAzCt8i7ePWZwSeng?e=XH9HDx" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">ダウンロード2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQwZP5Sc6YZDrhcE6BFeMjoBVVq5BLwhT9qXhRKzk8_oyA?e=oSzcOc" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYKvmiXvDrZKnyrWpGDKBXMByXVFfgOkbl0NyF3LY8bEWQ?e=ydwLF5" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaZE000_qQJMvjwjHeCNLxsBh7Uip9Gb5taPt5YqH5TMhg?e=Pfup2v" target="_blank" rel="noopener noreferrer">ダウンロード1</a>
        </td>
        <td>
          -
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Download1とDownload2の画像ファイルは同一です。ダウンロード速度が速いリンクを選択してください。
</p>

<!-- 上記の画像のソースコードは[こちら](https://github.com/Seeed-Studio/Linux_for_Tegra)で確認できます -->

- **ステップ 2:** 生成されたファイルを解凍します

```sh
tar -xvf <file_name>.tar.gz
```

#### Jetson へのフラッシュ

- **ステップ 1:** 先ほど解凍したファイルに移動し、以下のようにフラッシュコマンドを実行します

```sh
cd mfi_reserver-orin-industrial
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

これでシステムイメージのボードへのフラッシュが開始されます。フラッシュが成功すると、以下の出力が表示されます。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 2:** ボードをHDMIコネクタを使用してディスプレイに接続し、初期設定を完了させます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードは再起動し、使用可能な状態になります！

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

- **ステップ 1:** 使用するボードに対応するドライバファイルをUbuntu PCにダウンロードします

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

- **ステップ 2:** ダウンロードした周辺機器ドライバを **Linux_For_Tegra** ディレクトリと同じフォルダに移動します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **ステップ 3:** ダウンロードしたドライバの.zipファイルを解凍します。ここでは、.zipファイルを解凍するために必要な **unzip** パッケージを追加でインストールします

```sh
sudo apt install unzip
sudo unzip xxxx.zip # xxxx をドライバファイル名に置き換えてください
```

ここでファイルを置き換えるかどうか尋ねられます。「A」と入力してENTERを押し、必要なファイルを置き換えます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### Jetson へのフラッシュ

- **ステップ 1:** **Linux_for_Tegra** ディレクトリに移動し、以下のようにフラッシュコマンドを実行します

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

これでシステムイメージのボードへのフラッシュが開始されます。フラッシュが成功すると、以下の出力が表示されます。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 2:** ボードをHDMIコネクタを使用してディスプレイに接続し、初期設定を完了させます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードは再起動し、以下の画面が表示されます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **ステップ 3:** デバイス内でターミナルウィンドウを開き、以下を実行します。デバイスは再起動し、使用可能な状態になります！

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

---

</TabItem>
</Tabs>

<!-- コード終了 -->

## ハードウェアとインターフェースの使用方法

reServer Industrial ボード上のすべてのハードウェアとインターフェースの使用方法について詳しく知りたい場合は、以下の wiki セクションを参照することをお勧めします。

### reServer Industrial の分解

まず最初に、すべてのインターフェースにアクセスするために外装ケースを分解するのが良いでしょう。詳細については、[このドキュメント](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Assembly-Guide.pdf)を参照してください。

### ギガビットイーサネットコネクタ

reServer Industrial には 10/100/1000Mbps 仕様のイーサネットポートが 5 つあり、そのうち 4 つ（LAN1-LAN4）は PSE 802.3 af 15 W に対応しており、これらのポートに直接 PoE カメラを接続できます。これらは PCIe to Ethernet (LAN7430-I/Y9X) モジュールを介して接続されています。ただし、左端のイーサネットポート（LAN0）は、インターネット接続用にルーターに接続するためだけに使用されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

各イーサネットポートには 2 つの LED（緑と黄色）があり、以下を示します。

- 緑色 LED: 1000M ネットワークに接続されている場合のみ点灯
- 黄色 LED: ネットワークアクティビティのステータスを表示

#### 使用方法

- PoE カメラを接続する前に、4 つのイーサネットポートの PoE 機能を有効にする必要があります。以下の手順で有効にしてください。

  <Tabs>
  <TabItem value="Jetpack 5.1.x" label="Jetpack 5.1.x">

    ```sh
    sudo -i
    cd /sys/class/gpio
    echo 315 > export 
    cd gpio315
    echo "out" > direction
    echo 1 > value
    ```

  </TabItem>
  <TabItem value="Jetpack 6" label="Jetpack 6">

    ```sh
    sudo apt update
    sudo apt install gpiod
    gpioset gpiochip2 15=1
    ```
    
  </TabItem>
  </Tabs>

### 物理ネットワーク IP を eth 番号にバインドする
  **インターフェース eth0 から eth3 は PoE 用に指定されており、eth3 は特に PoE4 として参照されます。**

  各 PoE インターフェースに異なる IP アドレスを設定する必要がある場合は、以下の手順に従ってください。

  **ステップ 1**: PoE を reServer Industrial デバイスに接続します。例えば、eth3 を設定する場合、eth3 の名前を POE3 に設定します。

  ```bash
  sudo nmcli connection add type ethernet ifname eth4 con-name POE3
  ```

  **ステップ 2**: POE3 の IP アドレスを **192.168.6.6** に設定します。IP アドレスは実際の使用状況に応じてカスタマイズできます。
  ```bash
  sudo nmcli connection modify POE3 ipv4.addresses 192.168.6.6/24
  ```

  **ステップ 3**: POE3 の IPv4 アドレスを手動設定に変更します。

  ```bash
  sudo nmcli connection modify POE3 ipv4.method manual
  ```

  **ステップ 4**: 接続を開始します。
  ```bash
  sudo nmcli connection up POE3
  ```

### SATA コネクタ

reServer Industrial は 2 つの SATA 2.5 インチ HDD/SSD をサポートしており、SATA データおよび電源コネクタが付属しています。以下のように HDD/SSD を接続できます。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/23.jpg"/></div>

#### 使用方法

システムが起動した後、以下のコマンドで接続された SATA ドライブを確認できます。

```sh
lsblk
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/28.png"/></div>

### RTC

reServer Industrial は、RTC バッテリーに接続するための 2 つの異なる方法を備えています。

#### 接続概要

- 方法 1:

**3V CR1220 コイン型電池**をボード上の RTC ソケットに接続します。電池の**正極（+）**が上向きになるようにしてください。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/6.jpg"/></div>

- 方法 2:

**3V CR2302 コイン型電池（JST コネクタ付き）**をボード上の 2 ピン 1.25mm JST ソケットに接続します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/7.jpg"/></div>

#### 使用方法

- **ステップ 1:** 上記の方法で RTC バッテリーを接続します。

- **ステップ 2:** reServer Industrial を起動します。

- **ステップ 3:** Ubuntu デスクトップで、右上のドロップダウンメニューをクリックし、`設定 > 日付と時刻`に移動します。イーサネットケーブルを介してネットワークに接続し、**自動日付と時刻**を選択して日付/時刻を自動的に取得します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
イーサネット経由でインターネットに接続していない場合は、ここで日付/時刻を手動で設定できます。
:::

- **ステップ 4:** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロックの時刻を確認します。

```sh
sudo hwclock
```

以下のような出力が表示されますが、これは正しい日付/時刻ではありません。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **ステップ 5:** 以下のコマンドを入力して、ハードウェアクロックの時刻を現在のシステムクロックの時刻に変更します。

```sh
sudo hwclock --systohc
```

- **ステップ 6:** イーサネットケーブルを取り外し、インターネットから時刻を取得しないようにして、ボードを再起動します。

```sh
sudo reboot
```

- **ステップ 7:** ハードウェアクロックの時刻を確認し、デバイスの電源を切っても日付/時刻が保持されていることを確認します。

次に、各起動時にハードウェアクロックからシステムクロックを常に同期するスクリプトを作成します。

- **ステップ 8:** 任意のテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは **vi** テキストエディタを使用します。

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **ステップ 9:** **i** キーを押して**挿入モード**に入り、以下の内容をファイル内にコピーして貼り付けます。

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **ステップ 10:** スクリプトを実行可能にします。

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **ステップ 11:** systemd ファイルを作成します。

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **ステップ 12:** ファイル内に以下を追加します。

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **ステップ 13:** systemctl デーモンをリロードします。

```sh
sudo systemctl daemon-reload 
```

- **ステップ 14:** 新しく作成したサービスを起動時に有効化し、サービスを開始します。

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **ステップ 15:** スクリプトが systemd サービスとして正常に動作していることを確認します。

```sh
sudo systemctl status hwtosys.service
```

- **ステップ16:** ボードを再起動すると、システムクロックがハードウェアクロックと同期していることが確認できます。

## M.2 Key M

出荷時、reServer Industrialには128GB SSDがM.2 Key Mスロットに接続されており、JetPackシステムがプリインストールされています。

#### 接続概要

付属のSSDを取り外して新しいSSDを取り付けたい場合は、以下の手順に従ってください。ここでは、[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)、および[1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)のSeeed SSDのみを使用することを推奨します。これらのSSDのみがテストされています。また、このインターフェースはPCIe Gen4.0 SSDをサポートしています。

- **ステップ1:** プリインストールされたSSDのネジを取り外します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/8.jpg"/></div>

- **ステップ2:** SSDコネクタからスライドさせてSSDを取り外します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/9.jpg"/></div>

- **ステップ3:** 新しいSSDを挿入し、ネジを締め直します。

#### 使用方法

接続されたSSDで簡単なベンチマークを行う方法を説明します。

- **ステップ1:** 以下のコマンドを実行して書き込み速度を確認します。

```sh
sudo dd if=/dev/zero of=/home/$USER/test bs=1M count=512 conv=fdatasync
```

- **ステップ2:** 以下のコマンドを実行して読み取り速度を確認します。このコマンドは、上記の書き込み速度確認後に実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/$USER/test of=/dev/null bs=1M count=512
```

### mini PCIe

reServer Industrialにはmini PCIeコネクタが搭載されており、4GおよびLoRaモジュールをサポートしています。ただし、4GモジュールまたはLoRaモジュールのいずれか一方のみを接続できます。一部の4GモジュールにはGPS機能が組み込まれています。これについても説明します。

#### 4Gモジュール接続概要

現在、このボードはEC25EUXGAおよびEC20CEHCLGモジュールをサポートしています。

- **ステップ1:** ボードがすでにオンの場合は電源をオフにします。

- **ステップ2:** 付属のスタンドオフを取り外します。このスタンドオフはM.2 Key Bインターフェースを使用する場合にのみ必要です。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/10.jpg"/></div>

- **ステップ3:** mini PCIeスロットに4Gモジュールをスライドさせて挿入し、プリインストールされたネジを使用してモジュールを2つの穴に固定します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/11.jpg"/></div>

- **ステップ4:** アンテナコネクタの**MAIN**とラベル付けされた部分にアンテナを接続します。ここではIPEXコネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/12.jpg"/></div>

- **ステップ5:** ボード上のSIMカードスロットに4G対応のnano SIMカードを挿入します。SIMカードの金属面が上向きになるようにし、内部のスプリングに当たってロックされるまでカードを完全に挿入します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
SIMカードを取り外す場合は、カードを押し込んで内部スプリングに当てると、スロットからカードが出てきます。
:::

- **ステップ6:** **J8 (Control and UART) Header**の**SIM_MUX_SEL**と**GND**ピンの間にジャンパーを追加します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/14.jpg"/></div>

- **ステップ7:** ボードの電源をオンにします。

#### 4Gモジュール使用方法 - ダイヤルテスト

EC25モジュールを使用する場合、モジュールは自動的に起動し、使用可能になります。ただし、EC20モジュールを使用する場合は、モジュールをリセットする必要があります。

- **ステップ1:** EC25モジュールを使用している場合、このステップをスキップできます。ただし、EC20モジュールを使用している場合は、以下のコマンドを入力して4GモジュールをリセットするGPIO309ピンにアクセスします。

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

EC25モジュールの場合、ボードが起動するとすぐにLED2が緑色に点灯します。EC20モジュールの場合、上記の手順でモジュールをリセットした後にLED2が緑色に点灯します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **ステップ2:** minicomをインストールします。

```sh
sudo apt update
sudo apt install minicom -y
```

- **ステップ3:** 接続された4Gモジュールのシリアルコンソールに入り、ATコマンドを入力して4Gモジュールと対話します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **ステップ4:** **Ctrl+A**を押してから**E**を押してローカルエコーをオンにします。

- **ステップ5:** コマンド**"AT"**を入力してEnterキーを押します。「OK」という応答が表示された場合、4Gモジュールは正常に動作しています。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **ステップ6:** コマンド**"ATI"**を入力してモジュール情報を確認します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **ステップ7:** モジュールをテストするには、以下のコマンドを入力して別の電話番号に発信します。

```sh
ATD<phone_number>;
```

以下の出力が表示されます。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

入力した電話番号が通話を受信できる場合、モジュールは期待通りに動作しています。

#### 4Gモジュール使用方法 - インターネット接続

##### EC25モジュール

EC25モジュールを使用している場合、以下の手順に従ってください。

- **ステップ1:** 上記の手順（4Gモジュール使用方法 - ダイヤルテストセクション）で説明したように4Gモジュールのシリアルコンソールを開いた後、以下のコマンドを実行してインターネットに接続します。ここで**YOUR_APN**をネットワークプロバイダーのAPNに置き換えてください。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

接続が成功すると、上記の画像のように**OK**が出力されるはずです。

- **ステップ 2:** 以下のコマンドを実行して4Gモジュールを再起動します。

```sh
AT+CFUN=1,1
```

これで、シリアル端末で4Gモジュールへの接続が切断されます。

- **ステップ 3:** **CTRL + A**を押してから**Q**を押して**minicom**を閉じます。

- **ステップ 4:** **ifconfig**と入力すると、**usb0**インターフェースにIPアドレスが表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **ステップ 5:** 以下のようにウェブサイトにpingを送信して、インターネット接続があるか確認できます。

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

##### EC20モジュール

EC20モジュールを使用している場合は、以下の手順に従ってください。

- **ステップ 1:** すでにEC20モジュールの4Gモジュールをリセットしている場合（4Gモジュール使用 - テストダイヤルセクション参照）、このステップをスキップできます。ただし、まだリセットしていない場合は、今すぐ行ってください。

- **ステップ 2:** 4Gモジュールのシリアルコンソールに入り、以下のコマンドを入力してECMモードに設定します。

```sh
AT+QCFG="usbnet",1
```

- **ステップ 3:** 4Gモジュールをリセットします。

- **ステップ 4:** 4Gモジュールコンソール内で以下のコマンドを実行してインターネットに接続します。ここで**YOUR_APN**をネットワークプロバイダーのAPNに置き換えてください。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **ステップ 6:** **ifconfig**と入力すると、**usb1**インターフェースにIPアドレスが表示されます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **ステップ 7:** 以下のようにURLにpingを送信して、インターネット接続があるか確認できます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

#### 4Gモジュール使用 - GPSへの接続

一部の4GモジュールにはGPSモジュールが組み込まれています。EC25EUXGAおよびEC20CEHCLGモジュールには4Gモジュールが含まれています。

- **ステップ 1:** 以下のコマンドを実行してGPSモジュールを再起動します。

```sh
echo -e "AT+QGPS=1\r\n" > /dev/ttyUSB2
echo -e "AT+QGPS=0\r\n" > /dev/ttyUSB2
```

- **ステップ 2:** 以下のコマンドを実行してGPSデータを取得します。

```sh
sudo cat /dev/ttyUSB1
```

以下のような出力が表示されます。

```sh
seeed@seeed-x:~$ sudo cat /dev/ttyUSB1
[sudo] password for seeed:
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
```

#### LoRaモジュール接続概要

現在、このボードはWM1302 SPIモジュールをサポートしています。[USバージョン](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html)または[EUバージョン](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)を使用できます。これらはBazaarで入手可能です。

- **ステップ 1:** ボードがすでにオンになっている場合は電源をオフにします。

- **ステップ 2:** LoRaモジュールをmini PCIeスロットに挿入し、事前に取り付けられたネジを使用して、2つの穴にネジを締めてLoRaモジュールを固定します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/16.jpg"/></div>

- **ステップ 3:** アンテナコネクタにアンテナを接続します。この際、IPEXコネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/17.jpg"/></div>

:::note
**SIM_MUX_SEL**と**GND**ピンの間にジャンパーがないことを確認してください。このジャンパーは4Gモジュールを使用する場合にのみ必要です。
:::

- **ステップ 4:** ボードの電源をオンにします。

#### LoRaモジュール使用 - LoRa RFのテスト

LoRaモジュールが接続されると、モジュール上の緑色と青色のLEDが点灯します。

- **ステップ 1:** 以下のコマンドを入力して、LoRaモジュールがシステムに検出されているか確認します。

```sh
i2cdetect -r -y 7
```

以下の出力が表示されれば、モジュールがシステムに検出されています。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **ステップ 2:** 以下のコマンドを入力して、LoRa信号送信ツールをコンパイルおよびビルドします。

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

以下の結果が表示され、LoRaモジュールのLEDが赤色に点灯すれば、モジュールがRF信号を正常に送信していることを意味します。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

送信を停止するには、キーボードで**CTRL + C**を押します。

#### LoRaモジュール使用 - TTNへの接続

次に、TTN（The Things Network）に接続し、reServer IndustrialをTTN LoRaWANゲートウェイとして使用します。

- **ステップ 1:** 以下を入力してパケットフォワーダーを準備します。

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **ステップ 2:** 使用しているLoRaモジュールに応じて以下を実行します。ここではSPI US915バージョンをテストしています。

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

ただし、他のモジュール用のコマンドは以下の通りです。

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

上記のコマンドを実行すると、以下の出力が表示され、最後の行に**コンセントレータEUI**情報が表示されます。この情報は後でTTNゲートウェイを設定する際に使用するため、保持してください。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **ステップ 3:** [このURL](https://console.cloud.thethings.network)にアクセスしてTTNコンソールに入り、希望の地域を選択します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **ステップ 4:** すでにアカウントをお持ちの場合はログインし、アカウントをお持ちでない場合は新しいアカウントを作成してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **ステップ 5:** **Go to gateways** をクリックします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **ステップ 6:** **+ Register gateway** をクリックします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **ステップ 7:** 以前取得した **Concentrator EUI** を **Gateway EUI** セクションに入力し、**Confirm** をクリックします。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **ステップ 8:** 使用している LoRa モジュールに応じて **Frequency plan** を入力します。ここでは US915 バージョンのモジュールを使用しているため、**United States 902-928 MHz, FSB 2 (used by TTN)** を選択しました。その後、**Register gateway** をクリックします。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID** は自動的に入力されています。ただし、任意の値に変更することも可能です。**Gateway name** は必須ではありませんが、必要に応じて入力することもできます。
:::

- **ステップ 9:** ゲートウェイのメインホームページで **Gateway Server Address** をメモしてください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **ステップ 9:** reTerminal Industrial 上で、**lora_pkt_fwd** コマンドとともに使用した **global_conf_json** ファイルを編集します。以下のオプションを変更する必要があります：

  - gateway_ID: デバイスから取得した Concentrator EUI
  - server_address: TTN から取得した Gateway Server Address
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **ステップ 10:** パケットフォワーダーを再実行します。

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

以下の出力が表示された場合、デバイスが TTN に正常に接続されたことを意味します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

### M.2 Key B

reServer Industrial には、4G および 5G モジュールをサポートする M.2 Key B コネクタが搭載されています。現在、**SIM8202G-M2 5G モジュール**でテスト済みです。

#### 5G モジュール接続概要

- **ステップ 1:** ボードがすでに電源オンの場合は電源をオフにします。

- **ステップ 2:** スタンドオフが所定の位置にあることを確認し、スタンドオフの上部ネジを取り外します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/18.jpg"/></div>

- **ステップ 2:** 5G モジュールを M.2 Key B スロットに差し込み、スタンドオフネジを締めて 5G モジュールを固定します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/19.jpg"/></div>

- **ステップ 3:** モジュールのアンテナコネクタに 4 本のアンテナを接続します。この際、IPEX 4 コネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/20.jpg"/></div>

- **ステップ 4:** 5G 対応の nano SIM カードをボードの SIM カードスロットに挿入します。SIM カードの金属面が下向きになるようにし、内部のスプリングに当たるまでカードを完全に挿入してロックします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
SIM カードを取り外す場合は、カードを押し込んで内部スプリングを押すと、カードがスロットから出てきます。
:::

- **ステップ 5:** ボードの電源をオンにします。

#### 5G モジュール使用 - ダイヤルテスト

SIM8202G-M2 5G モジュールを使用する場合、モジュールは自動的に起動しません。まず、いくつかの GPIO をトグルして起動する必要があります。

- **ステップ 1:** 以下のコマンドを入力して 5G モジュールを起動します。

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 0 > value

cd..
echo 341 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 330 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

上記を実行すると、LED2 が緑色に点灯します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **ステップ 2:** minicom をインストールします。

```sh
sudo apt update
sudo apt install minicom -y
```

- **ステップ 3:** 接続された 5G モジュールのシリアルコンソールに入り、AT コマンドを入力して 5G モジュールと対話します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **ステップ 4:** **"AT"** コマンドを入力して Enter を押します。「OK」と表示された場合、5G モジュールは正常に動作しています。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **ステップ 6:** **"ATI"** コマンドを入力してモジュール情報を確認します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **ステップ 7:** モジュールをテストするには、以下のコマンドを入力して別の電話番号に発信します。

```sh
ATD<phone_number>;
```

以下の出力が表示されます。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

#### 5G モジュール使用 - インターネット接続

近日公開

### DI/ DO

reServer Industrial は、4 つのデジタル入力チャネルと 4 つのデジタル出力チャネルをサポートしており、すべてが光学的に絶縁されています。これにより、メインボードを電圧スパイクやその他の電気的障害から効果的に保護します。同じコネクタには CAN インターフェースもあり、これについては後ほどこの Wiki で説明します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

#### DI/DO ピン割り当て表

<table>
  <thead>
    <tr>
      <th>タイプ</th>
      <th>ラベル名</th>
      <th>回路図信号</th>
      <th>モジュールピン番号</th>
      <th>BGA番号</th>
      <th>GPIO番号</th>
      <th>電圧/電流制限</th>
      <th>備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>入力</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>453</td>
      <td rowSpan={4}>合計12V/20mA</td>
      <td rowSpan={4}>12Vデジタル入力、グランド信号は<br />GND_DI (Pin2/4/6) に接続する必要があります</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PAC.06</td>
      <td>492</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>454</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PH.00</td>
      <td>391</td>
    </tr>
    <tr>
      <td rowSpan={4}>出力</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>ピンごとに40V/40mA負荷</td>
      <td rowSpan={4}>デジタル出力、最大耐圧40V、グランド信号は<br />GND_DO (Pin8/10) に接続する必要があります</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PI.01</td>
      <td>400</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PI.02</td>
      <td>401</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PH.07</td>
      <td>398</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>標準差動信号を備えたCANバス、<br />グランド信号はGND_ISO (Pin 12) に接続する必要があります</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>グランド</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12Vデジタル入力の基準グランド信号であり、<br />DIの戻り経路でもあります</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>デジタル出力の基準グランド信号であり、DOの戻り経路でもあります</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>CANの基準グランド信号</td>
    </tr>
  </tbody>
</table>

#### DI の接続概要

以下の図に従ってDIの接続を行うことができます。DIラインには直列に抵抗を追加することをお勧めします。ここでは、4.7kΩの抵抗をDI1ピンに接続してテストしました。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

#### DI の使用方法

DIラインに12Vの電圧を入力することで、入力として検出されます。

- **ステップ 1:** 上記のように **DI1ピン** に接続し、**12V** を入力します。

- **ステップ 2:** 以下のコマンドでDI1のGPIOを開きます。

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
**DI/DO ピン割り当て表** を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DI1ピンのGPIO番号は453、BGA番号はPQ.05です。
:::

- **ステップ 3:** 以下を実行して状態を確認します。

```sh
cat value
```

出力が0の場合、12V入力があります。出力が1の場合、入力電圧がありません。

#### DO の接続概要

以下の図に従ってDOの接続を行うことができます。DOラインには直列に抵抗を追加することをお勧めします。ここでは、4.7kΩの抵抗を使用してテストしました。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

#### DO の使用方法

ここでは、上記の図に記載されているように負荷を接続する必要があります。テストする最も簡単な方法は、マルチメーターを接続することです。または、最大40V以下の電圧を必要とする負荷を接続します。

- **ステップ 1:** 上記のように **DO1ピン** に接続し、**最大40V** を入力します。

- **ステップ 2:** 以下のコマンドでDO1のGPIOを開きます。

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
**DI/DO ピン割り当て表** を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DO1ピンのGPIO番号は399、BGA番号はPI.00です。
:::

- **ステップ 3:** 以下を実行してピンをオンにします。

```sh
echo 1 > value
```

負荷がオンになるか、マルチメーターが入力した電圧を出力する場合、テストは正常に機能しています。

### CAN

reServer Industrialは、5MbpsのCAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートするCANインターフェースを備えています。CANインターフェースは容量性絶縁を使用しており、優れたEMI保護を提供し、産業および自動化アプリケーションで信頼性の高い通信を保証します。120Ωの終端抵抗がデフォルトでインストールされており、この抵抗をGPIOを使用してオン/オフ切り替えできます。

注意: CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続された外部デバイスのグランド信号はCGピンに接続する必要があります。

#### USB to CAN アダプタを使用した接続概要

CANバスをテストおよびインターフェースするには、以下のようにボード上のCANコネクタにUSB to CANアダプタを接続します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

ここでは、[USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) を使用しています。

#### USB to CAN アダプタの使用方法

- **ステップ 1:** 使用しているUSB to CANアダプタのドライバをメーカーのウェブサイトからダウンロードしてインストールします。今回使用したアダプタの場合、ドライバは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)から入手できます。

- **ステップ 2:** 一部のアダプタには、CANデバイスと通信するために必要なPC用ソフトウェアが付属しています。今回使用したアダプタに基づき、[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)からソフトウェアをダウンロードしてインストールしました。

- **ステップ 3:** reServer Industrialでターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** ターミナルで**ifconfig**と入力すると、CANインターフェースが有効になっていることが確認できます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 5:** 先ほどインストールしたCANソフトウェアを開きます。この場合、使用しているCANアダプタに基づいてインストールしたソフトウェアを開きます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **ステップ 6:** USB-CANアダプタをPCに接続し、Windowsの検索バーで「デバイスマネージャー」を検索して開きます。ここで、**ポート (COM & LPT)**の下に接続されたアダプタが表示されます。ここに記載されているシリアルポートをメモしてください。以下の画像では、シリアルポートは**COM9**です。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **ステップ 7:** CANソフトウェアを開き、**COM**セクションの横にある**Refresh**をクリックし、ドロップダウンメニューから接続されたアダプタに対応するシリアルポートを選択します。**COM bps**はデフォルトのままにして、**Open**をクリックします。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **ステップ 8:** **Mode**と**CAN bps**をデフォルトのままにし、**Type**を**Standard frame**に変更して、**Set and Start**をクリックします。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **ステップ 9:** reServer Industrialで以下のコマンドを実行して、PCにCAN信号を送信します。

```sh
cansend can0 123#abcdabcd
```

すると、以下のようにソフトウェアで信号が受信されます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **ステップ 10:** reServer Industrialで以下のコマンドを実行して、PCからのCAN信号を受信する準備をします。

```sh
candump can0 &
```

- **ステップ 11:** CANソフトウェアで、**Send a single frame**をクリックします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

すると、以下のようにreServer Industrialで受信されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

#### reTerminal DMとの接続概要

[reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)を使用できる場合、CANインターフェースを備えているため、直接通信が可能です。

以下の画像を参照して、reServer IndustrialとreTerminal DMをCANで接続してください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

#### reTerminal DMの使用方法

- **ステップ 1:** reTerminal DMを使用する前に、[このWiki](https://wiki.seeedstudio.com/ja/reterminal-dm)を参照してreTerminal DMのセットアップを行ってください。

- **ステップ 2:** reServer Industrialでターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 3:** reTerminal DMでターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** 両方のデバイスで**ifconfig**を入力すると、CANインターフェースが有効になっていることが確認できます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 5:** reTerminal DMで以下を実行して、reServer IndustrialからのCAN信号を受信する準備をします。

```sh
candump can0 &
```

- **ステップ 6:** reServer Industrialで以下のコマンドを実行して、reTerminal DMにCAN信号を送信します。

```sh
cansend can0 123#abcdabcd
```

すると、以下のようにreTerminal DMで受信されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **ステップ 7:** **ステップ 5とステップ 6**を繰り返し、デバイスを入れ替えて実行します。reTerminal DMを使用してCAN信号を送信し、reServer Industrialを使用して受信します。

### RS232/ RS422/ RS485インターフェース

reServer Industrialには、RS232、RS422、RS485通信プロトコルをサポートするDB9コネクタがあり、オンボードのDIPスイッチパネルで異なるインターフェースオプションを切り替えることができます。

以下はDIPスイッチパネルの画像です：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/21.jpg"/></div>

以下の表は、DIPスイッチの位置に基づく異なるモードを説明しています。

<table>
  <thead>
    <tr>
      <th />
      <th>MODE_0</th>
      <th>MODE_1</th>
      <th>MODE_2</th>
      <th>モード</th>
      <th>ステータス</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/52.png" alt="Image" width="200" height="127" /></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 フルデュプレックス</td>
      <td>1T/1R RS-422</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/53.png" alt="Image" width="200" height="127" /></td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>純粋なRS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width="200" height="127" /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 ハーフデュプレックス</td>
      <td>1T/1R RS-485 ,TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width="200" height="127" /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 ハーフデュプレックス</td>
      <td>1T/1R RS-485 ,TX ENABLE High Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width="200" height="127" /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 フルデュプレックス</td>
      <td>1T/1R RS-422 with termination resistor</td>
    </tr>
    <tr>
      <td rowSpan="3"><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width="200" height="127" /></td>
      <td rowSpan="3">1</td>
      <td rowSpan="3">0</td>
      <td rowSpan="3">1</td>
      <td rowSpan="3">純粋なRS-232</td>
      <td>1T/1R RS-232 co-exists with RS485</td>
    </tr>
    <tr>
      <td>バスを必要としないアプリケーション</td>
    </tr>
    <tr>
      <td>スイッチIC（特殊用途向け）</td>
    </tr>
    <tr>
      <td rowSpan="2"><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width="200" height="127" /></td>
      <td rowSpan="2">1</td>
      <td rowSpan="2">1</td>
      <td rowSpan="2">0</td>
      <td rowSpan="2">RS-485 ハーフデュプレックス</td>
      <td>1T/1R RS-485 with termination resistor</td>
    </tr>
    <tr>
      <td>TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td rowSpan="2"><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width="200" height="127" /></td>
      <td rowSpan="2">1</td>
      <td rowSpan="2">1</td>
      <td rowSpan="2">1</td>
      <td>低消費電力</td>
      <td rowSpan="2">すべてのI/Oピンは高インピーダンス</td>
    </tr>
    <tr>
      <td>シャットダウン</td>
    </tr>
  </tbody>
</table>

:::note
出荷時のスイッチのデフォルトモードはRS485で、工場出荷時には010に設定されています。
:::

上記の表はDIPスイッチパネルの最初の3つのスイッチを考慮しています。ただし、4番目のスイッチはスルーレートを切り替える役割を果たしており、これはデータレートに直接関連しています。

<table>
  <thead>
    <tr>
      <th />
      <th>状態</th>
      <th>備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />このRS232/RS422/RS485マルチプロトコルトランシーバーは通信速度を以下のように制限します:<br />RS-232: 最大データレートは1.5Mbps<br />RS-485/RS-422: 最大データレートは10Mbps<br />実際の最大データレートは使用されるJetson SOMに依存します</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: 最大データレートは250Kbps<br />RS-485/RS-422: 最大データレートは250Kbps</td>
    </tr>
  </tbody>
</table>

ここでは、USBからRS232、RS485、RS422へのアダプターを使用してインターフェースをテストします。そのため、進む前にPCにシリアルターミナルアプリケーションをインストールする必要があります。ここでは、セットアップが簡単で使いやすい**Putty**をインストールすることをお勧めします。

- **ステップ1:** [このウェブサイト](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)にアクセスし、PCのアーキテクチャに応じてPuttyをダウンロードしてください。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

ここでは、使用したPCがX86 Windows 64ビットマシンであるため、それに応じてPuttyを選択しました。

- **ステップ2:** ダウンロードしたセットアップを開き、プロンプトに従ってアプリケーションをインストールしてください。

#### 一般的な接続概要

DB9コネクタのピン番号と表を参照して接続を行うことができます。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/61.png"/></div>

<table>
  <thead>
    <tr>
      <th>モード</th>
      <th>001/101</th>
      <th>000/100</th>
      <th>010/011/110</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ピン</td>
      <td>RS232</td>
      <td>RS422</td>
      <td>RS485</td>
    </tr>
    <tr>
      <td>1</td>
      <td />
      <td>TXD-</td>
      <td>Data-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>RXD</td>
      <td>TXD+</td>
      <td>Data+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>TXD</td>
      <td>RXD+</td>
      <td />
    </tr>
    <tr>
      <td>4</td>
      <td />
      <td>RXD-</td>
      <td />
    </tr>
    <tr>
      <td>5</td>
      <td>GND</td>
      <td>GND</td>
      <td>GND</td>
    </tr>
    <tr>
      <td>6</td>
      <td />
      <td />
      <td />
    </tr>
    <tr>
      <td>7</td>
      <td>RTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>8</td>
      <td>CTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>9</td>
      <td />
      <td />
      <td />
    </tr>
  </tbody>
</table>

#### RS232接続概要

ここでは、USBからRS232へのアダプターを使用してインターフェースをテストできます。テストには[UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1)を使用しました。

- **ステップ1:** ボードをオフにします。

- **ステップ2:** DIPスイッチを設定するための2つのオプションがあります。001モードまたは101モードです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **ステップ3:** USBからRS232アダプターをDB9コネクタに接続します。

- **ステップ4:** もう一方の端をPCのUSBポートの1つに接続します。

- **ステップ5:** ボードをオンにします。

#### RS232の使用方法

- **ステップ1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。Windowsが自動的にドライバーをインストールすることもあります。Windows検索で**デバイスマネージャー**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているか確認してください。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **ステップ2:** アダプターが表示されない場合は、使用しているアダプターに応じたドライバーをインストールする必要があります。これらのドライバーは通常、製造元のウェブサイトで見つけることができます。使用しているアダプターの場合、[このページ](https://www.ugreen.com/pages/download)で**20201**をモデル番号として検索し、ドライバーをダウンロードしてください。

- **ステップ3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します。

  - ローカルエコー: 強制オン
  - ローカルライン編集: 強制オン

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ4:** **Session**を選択し、**Connection type**で**Serial**を選択します。**Device Manager**で表示されるシリアルポート番号を設定し、速度をデフォルト（9600）のままにして**Open**をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **ステップ5:** reServer Industrialのターミナルウィンドウで以下を入力して、reServer IndustrialからPCに信号を送信します。

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reServer Industrial" > /dev/ttyTHS0
```

これで、このメッセージがPuttyに表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **ステップ6:** reTerminal Industrialのターミナルウィンドウで以下を入力して、PCからの信号を受信する準備をします。

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ7:** Puttyで何かを入力し、**ENTER**を押すと、それがreServer Industrialのターミナルウィンドウに表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

#### RS422接続概要 

ここでは、USBからRS422アダプターを使用してインターフェースをテストできます。私たちはテストに[DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)を使用しました。

- **ステップ 1:** ボードの電源を切る

- **ステップ 2:** DIPスイッチを設定するには2つのオプションがあります。000モードまたは100モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **ステップ 3:** ジャンパーワイヤーを使用して、USBからRS422アダプターをDB9コネクタに接続します。以下の図のように接続します。ここでは、上記で言及したアダプターを接続しています。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **ステップ 4:** もう一方の端をPCのUSBポートの1つに接続する

- **ステップ 5:** ボードの電源を入れる

#### RS422の使用方法

- **ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windows検索で**Device Manager**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているか確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じたドライバーをインストールする必要があります。これらのドライバーは通常、製造元のウェブサイトで見つけることができます。私たちが使用しているアダプターの場合は、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)を参照してください。

- **ステップ 3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します。

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session**を選択し、**Connection type**で**Serial**を選択します。**Device Manager**で確認したシリアルポート番号を設定し、速度はデフォルト（9600）のままにして**Open**をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 4:** reServer Industrialのターミナルウィンドウで以下を入力して、reServer IndustrialからPCに信号を送信します。

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

これで、このメッセージがPuttyに表示されます。

- **ステップ 5:** reTerminal Industrialのターミナルウィンドウで以下を入力して、PCからの信号を受信する準備をします。

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ 6:** Puttyで何かを入力し、**ENTER**を押すと、それがreServer Industrialのターミナルウィンドウに表示されます。

#### RS485接続概要

ここでは、USBからRS422アダプターを使用してインターフェースをテストできます。私たちはテストに[DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)を使用しました。

- **ステップ 1:** ボードの電源を切る

- **ステップ 2:** DIPスイッチを設定するには3つのオプションがあります。010モード、011モード、または110モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **ステップ 3:** ジャンパーワイヤーを使用して、USBからRS422アダプターをDB9コネクタに接続します。以下の図のように接続します。ここでは、上記で言及したアダプターを接続しています。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **ステップ 4:** もう一方の端をPCのUSBポートの1つに接続する

- **ステップ 5:** ボードの電源を入れる

#### RS485の使用方法

- **ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windows検索で**Device Manager**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているか確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じたドライバーをインストールする必要があります。これらのドライバーは通常、製造元のウェブサイトで見つけることができます。私たちが使用しているアダプターの場合は、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)を参照してください。

- **ステップ 3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します。

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session**を選択し、**Connection type**で**Serial**を選択します。**Device Manager**で確認したシリアルポート番号を設定し、速度はデフォルト（9600）のままにして**Open**をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 4:** reServer Industrialのターミナルウィンドウで以下を入力して、reServer IndustrialからPCに信号を送信します。

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reServer Industrial" > /dev/ttyTHS0
```

これで、このメッセージがPuttyに表示されます。

- **ステップ 5:** reTerminal Industrialのターミナルウィンドウで以下を入力して、PCからの信号を受信する準備をします。

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **ステップ 6:** Puttyで何かを入力し、**ENTER**を押すと、それがreServer Industrialのターミナルウィンドウに表示されます。

### USB

reServer Industrialには、3つのUSB3.2コネクタが搭載されており、以下の機能を備えています：
- デュアルスタックUSBコネクタでは、上部と下部のUSBポートが電流制限ICを共有しており、最大出力電流2.1Aの電源供給能力があります（単一ポートでも2.1A可能）。2.1Aを超えると、過電流保護状態に入ります。
- デュアルスタックUSBコネクタの隣にある単一USBコネクタは、最大出力電流2.1Aの電源供給能力があります。2.1Aを超えると、過電流保護状態に入ります。
- Orin NXモジュールには3つのUSB3.2が搭載されていますが、reServer Industrialではそのうち1つのみが使用され、3方向に変換されています（USB3.1 TYPE-A x2 - J4およびUSB3.1 TYPE-A x1 - J3）。
- デバイスモードはサポートせず、USBホストのみをサポート
- 5V 2.1Aを提供
- ホットスワップ可能

#### 使用方法

接続されたUSBフラッシュドライブで簡単なベンチマークを行う方法を説明します。

- **ステップ1:** 以下のコマンドを実行して書き込み速度を確認します。

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **ステップ2:** 以下のコマンドを実行して読み取り速度を確認します。このコマンドは、上記の書き込み速度確認コマンドを実行した後に実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

### 設定可能なLED

以下の図に示すように、基板上に緑色のLEDがあります。このLEDはデフォルトでデバイスが正常に動作していることを示します。ただし、このLEDをプログラムしてシステムによってON/OFFを制御することも可能です。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/22.jpg"/></div>

#### 使用方法

- **ステップ1:** 緑色のLEDにアクセスするために、ターミナルウィンドウで以下のコマンドを入力します。

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

- **ステップ2:** LEDをOFFにする

```sh
echo 0 > value 
```

- **ステップ3:** LEDをONにする

```sh
echo 1 > value 
```

LEDの使用を終了した場合は、以下を実行してください。

```sh
cd ..
echo 329 > unexport
```

### システムパフォーマンスの監視

**jetson stats**アプリケーションを使用して、システムコンポーネントの温度を監視し、以下のような他のシステム詳細を確認できます。

- CPU、GPU、RAMの使用状況を表示
- 電力モードの変更
- 最大クロックの設定
- JetPack情報の確認

- **ステップ1:** reServer Industrialのターミナルウィンドウで以下を入力します。

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **ステップ2:** ボードを再起動します。

```sh
sudo reboot
```

- **ステップ3:** ターミナルで以下を入力します。

```sh
jtop
```

これで**jtop**アプリケーションが以下のように開きます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **ステップ4:** アプリケーションの異なるページを切り替えて、すべての機能を探索できます！

### TPM

reServer Industrialには、外部TPMモジュールを接続するためのTPMインターフェースが付属しています。ここでは、Infineon SLB9670ベースのTPM2.0モジュールでテストを行いました。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/24.jpg"/></div>

#### 接続概要

以下の図のようにTPMモジュールをTPMコネクタに接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/27.jpg"/></div>

#### 使用方法

以下のコマンドを実行して、TPMモジュールが正しくロードされているか確認します。

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

以下のような出力が表示されます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

### reServer Industrialの最大パフォーマンス

reServer Industrialで最大パフォーマンスを有効にするには、以下の手順に従ってください。

- **ステップ1:** 以下のコマンドを入力して最大電力モードを有効にします。

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

ここで、ボードを再起動するために**YES**と入力する必要があります。

- **ステップ2:** ボードが起動したら、以下のコマンドを入力してCPUクロックを最大周波数に設定します。

```sh
sudo jetson_clocks
```

### GPIOテーブル

reServer IndustrialのGPIOテーブルにアクセスして、すべてのピンマッピングを確認できます。

ターミナルで以下を実行してください。

```sh
sudo cat /sys/kernel/debug/gpio
```

以下のような出力が表示されます。

```sh
gpiochip2: GPIOs 300-315, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-300 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-301 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-302 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-303 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-304 (hst_wake_bt         )
 gpio-305 (bt_wake_hst         )
 gpio-306 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-307 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-308 (can_120R_en         )
 gpio-309 (M2B_PCIe_rst        )
 gpio-310 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-311 (PCIe_ETH_rst        )
 gpio-312 (M2B_WOWWAN          )
 gpio-313 (M2B_DPR_3V3         )
 gpio-314 (SIM_MUX_SEL         )
 gpio-315 (gpio_pin15          )

gpiochip1: GPIOs 316-347, parent: platform/c2f0000.gpio, tegra234-gpio-aon:
 gpio-316 (PAA.00              )
 gpio-317 (PAA.01              )
 gpio-318 (PAA.02              )
 gpio-319 (PAA.03              )
 gpio-320 (PAA.04              )
 gpio-321 (PAA.05              |fixed-regulators:reg) out hi
 gpio-322 (PAA.06              )
 gpio-323 (PAA.07              )
 gpio-324 (PBB.00              )
 gpio-325 (PBB.01              )
 gpio-326 (PBB.02              )
 gpio-327 (PBB.03              )
 gpio-328 (PCC.00              )
 gpio-329 (PCC.01              )
 gpio-330 (PCC.02              )
 gpio-331 (PCC.03              |mux                 ) out hi
 gpio-332 (PCC.04              )
 gpio-333 (PCC.05              )
 gpio-334 (PCC.06              )
 gpio-335 (PCC.07              )
 gpio-336 (PDD.00              )
 gpio-337 (PDD.01              )
 gpio-338 (PDD.02              )
 gpio-339 (PEE.00              )
 gpio-340 (PEE.01              )
 gpio-341 (PEE.02              )
 gpio-342 (PEE.03              )
 gpio-343 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-344 (PEE.05              )
 gpio-345 (PEE.06              )
 gpio-346 (PEE.07              )
 gpio-347 (PGG.00              )
gpiochip0: GPIOs 348-511, parent: platform/2200000.gpio, tegra234-gpio:
 gpio-348 (PA.00               |fixed-regulators:reg) out lo
 gpio-349 (PA.01               )
 gpio-350 (PA.02               )
 gpio-351 (PA.03               )
 gpio-352 (PA.04               )
 gpio-353 (PA.05               )
 gpio-354 (PA.06               )
 gpio-355 (PA.07               )
 gpio-356 (PB.00               )
 gpio-357 (PC.00               )
 gpio-358 (PC.01               )
 gpio-359 (PC.02               )
 gpio-360 (PC.03               )
 gpio-361 (PC.04               )
 gpio-362 (PC.05               )
 gpio-363 (PC.06               )
 gpio-364 (PC.07               )
 gpio-365 (PD.00               )
 gpio-366 (PD.01               )
 gpio-367 (PD.02               )
 gpio-368 (PD.03               )
 gpio-369 (PE.00               )
 gpio-370 (PE.01               )
 gpio-371 (PE.02               )
 gpio-372 (PE.03               )
 gpio-373 (PE.04               )
 gpio-374 (PE.05               )
 gpio-375 (PE.06               )
 gpio-376 (PE.07               )
 gpio-377 (PF.00               )
 gpio-378 (PF.01               )
 gpio-379 (PF.02               )
 gpio-380 (PF.03               )
 gpio-381 (PF.04               )
 gpio-382 (PF.05               )
 gpio-383 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-384 (PG.01               )
 gpio-385 (PG.02               )
 gpio-386 (PG.03               )
 gpio-387 (PG.04               )
 gpio-388 (PG.05               )
 gpio-389 (PG.06               )
 gpio-390 (PG.07               |cd                  ) in  lo IRQ
 gpio-391 (PH.00               )
 gpio-392 (PH.01               )
 gpio-393 (PH.02               )
 gpio-394 (PH.03               )
 gpio-395 (PH.04               )
 gpio-396 (PH.05               )
 gpio-397 (PH.06               )
 gpio-398 (PH.07               )
 gpio-399 (PI.00               )
 gpio-400 (PI.01               )
 gpio-401 (PI.02               )
 gpio-402 (PI.03               )
 gpio-403 (PI.04               )
 gpio-404 (PI.05               )
 gpio-405 (PI.06               )
 gpio-406 (PJ.00               )
 gpio-407 (PJ.01               )
 gpio-408 (PJ.02               )
 gpio-409 (PJ.03               )
 gpio-410 (PJ.04               )
 gpio-411 (PJ.05               )
 gpio-412 (PK.00               )
 gpio-413 (PK.01               )
 gpio-414 (PK.02               )
 gpio-415 (PK.03               )
 gpio-416 (PK.04               )
 gpio-417 (PK.05               )
 gpio-418 (PK.06               )
 gpio-419 (PK.07               )
 gpio-420 (PL.00               )
 gpio-421 (PL.01               )
 gpio-422 (PL.02               |nvidia,pex-wake     ) in  hi ACTIVE LOW
 gpio-423 (PL.03               )
 gpio-424 (PM.00               )
 gpio-425 (PM.01               )
 gpio-426 (PM.02               )
 gpio-427 (PM.03               )
 gpio-428 (PM.04               )
 gpio-429 (PM.05               )
 gpio-430 (PM.06               )
 gpio-431 (PM.07               )
 gpio-432 (PN.00               )
 gpio-433 (PN.01               )
 gpio-434 (PN.02               )
 gpio-435 (PN.03               )
 gpio-436 (PN.04               )
 gpio-437 (PN.05               )
 gpio-438 (PN.06               )
 gpio-439 (PN.07               )
 gpio-440 (PP.00               )
 gpio-441 (PP.01               )
 gpio-442 (PP.02               )
 gpio-443 (PP.03               )
 gpio-444 (PP.04               )
 gpio-445 (PP.05               )
 gpio-446 (PP.06               )
 gpio-447 (PP.07               )
 gpio-448 (PQ.00               )
 gpio-449 (PQ.01               )
 gpio-450 (PQ.02               )
 gpio-451 (PQ.03               )
 gpio-452 (PQ.04               )
 gpio-453 (PQ.05               )
 gpio-454 (PQ.06               )
 gpio-455 (PQ.07               )
 gpio-456 (PR.00               )
 gpio-457 (PR.01               )
 gpio-458 (PR.02               )
 gpio-459 (PR.03               )
 gpio-460 (PR.04               )
 gpio-461 (PR.05               )
 gpio-462 (PX.00               )
 gpio-463 (PX.01               )
 gpio-464 (PX.02               )
 gpio-465 (PX.03               )
 gpio-466 (PX.04               )
 gpio-467 (PX.05               )
 gpio-468 (PX.06               )
 gpio-469 (PX.07               )
 gpio-470 (PY.00               )
 gpio-471 (PY.01               )
 gpio-472 (PY.02               )
 gpio-473 (PY.03               )
 gpio-474 (PY.04               )
 gpio-475 (PY.05               )
 gpio-476 (PY.06               )
 gpio-477 (PY.07               )
 gpio-478 (PZ.00               )
 gpio-479 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-480 (PZ.02               )
 gpio-481 (PZ.03               )
 gpio-482 (PZ.04               )
 gpio-483 (PZ.05               )
 gpio-484 (PZ.06               |cs_gpio             ) out lo
 gpio-485 (PZ.07               )
 gpio-486 (PAC.00              )
 gpio-487 (PAC.01              )
 gpio-488 (PAC.02              )
 gpio-489 (PAC.03              )
 gpio-490 (PAC.04              )
 gpio-491 (PAC.05              )
 gpio-492 (PAC.06              )
 gpio-493 (PAC.07              )
 gpio-494 (PAD.00              )
 gpio-495 (PAD.01              )
 gpio-496 (PAD.02              )
 gpio-497 (PAD.03              )
 gpio-498 (PAE.00              )
 gpio-499 (PAE.01              )
 gpio-500 (PAF.00              )
 gpio-501 (PAF.01              )
 gpio-502 (PAF.02              )
 gpio-503 (PAF.03              )
 gpio-504 (PAG.00              )
 gpio-505 (PAG.01              )
 gpio-506 (PAG.02              )
 gpio-507 (PAG.03              )
 gpio-508 (PAG.04              )
 gpio-509 (PAG.05              )
 gpio-510 (PAG.06              )
 gpio-511 (PAG.07              )
```

## リソース

(リンクを変更してください)
- [reServer Industrial データシート](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial リファレンスガイド](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson デバイスとキャリアボードの比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D ファイル](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技術サポート

問題が発生した場合は、ぜひ私たちの[フォーラム](https://forum.seeedstudio.com/)に投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>