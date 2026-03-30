---
description: reComputer Industrial R22xx は、Raspberry Pi CM5 をベースに Hailo-8 AI アクセラレータを搭載し、最大 26 TOPS を実現する産業グレードの AI 搭載 NVR です。PoE PSE をサポートする 4 つのギガビット Ethernet ポートに加え、さらに 1 つのギガビット Ethernet ポートを備え、高帯域幅のビデオストリーミングと IP カメラ向けのシンプルな PoE 展開を可能にします。豊富な産業用 I/O、柔軟なワイヤレス接続、ファンレス熱設計、–20 °C から 50 °C までの広い動作温度範囲を備え、要求の厳しいシナリオにおいても信頼性の高い AI ビデオ解析と連続した安定動作を実現します。
title: reComputer Industrial R22xx 組み立てガイド
keywords:
  - Edge Controller
  - Raspberry pi
  - Edge Controller
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /recomputer_industrial_r22xx_assembly_guide
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2023-05-22'
updatedAt: '2026-03-02'
url: https://wiki.seeedstudio.com/ja/recomputer_industrial_r22xx_assembly_guide/
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

reComputer Industrial R22xx は、4G、5G、LoRa®、Wi-Fi/BLE、Zigbee を含むさまざまな IoT ワイヤレス通信をサポートします。M.2 スロットによる SSD ストレージ拡張、または NPU アクセラレータによる AI 機能拡張に対応しています。購入時に AI アクセラレータを同時に選択した場合、追加で 26TOPS の演算能力を得ることができます。さらに、当社のハードウェアエンジニアリングサービスでは、ロゴのカスタマイズ、パッケージブランディング、ラベリング、ファームウェアの書き込みおよびイメージングサービスなど、お客様のニーズに合わせた包括的なサポートを提供します。

この Wiki では、周辺コンポーネントを取り付けるためのユニットの組み立ておよび分解方法に加え、マウントオプションについて説明します。

## ハードウェアの前提条件

以下のハードウェアを準備する必要があります

- reComputer Industrial R22xx x 1
- 付属品
- ドライバーセット
  - プラスドライバー + 3.5 ビット
  - プラスドライバー + 3.0 ビット
  - マイナスドライバー - 2.5 ビット

## デバイス分解ガイド

次の手順に従うことで、問題なくデバイスを分解できます。

**ステップ 1：** 底面の 4 本のネジを外し、前面パネルと背面パネルを取り外します：

- 適切なドライバーを使用して、デバイス底面にある 4 本のネジを見つけて取り外します。
- ネジを外したら、デバイスから前面パネルと背面パネルを慎重に持ち上げて取り外します。

**ステップ 2：** 側面のアンテナコネクタナットを外し、ボトムパネルを取り外します。

**ステップ 3：** 拡張ボードを取り外します。

**ステップ 4：** PCB を固定している 4 本のネジを取り外します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.1-1.png" style={{width:800, height:'auto'}}/></div>

## Nano SIM カードの取り付け

**ステップ 1：** Nano SIM カードを SIM スロットに挿入します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.2-1.png" style={{width:800, height:'auto'}}/></div>

## SSD の取り付け  

**ステップ 1：** 分解ガイドに従って背面カバーを取り外します。

**ステップ 2：** SSD を M.2 ソケットに挿入し、ネジで固定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.3-1.png" style={{width:800, height:'auto'}}/></div>

## M.2 AI アクセラレータの組み立て

**ステップ 1：** セクション 4.1「Disassembly Guide」に従って、デバイス全体を分解します。
**ステップ 2：** AI アクセラレータを M.2 ソケットに挿入し、ネジで固定します。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.4-1.png" style={{width:800, height:'auto'}}/></div>

## 5G/4G/LoRa®/Zigbee モジュールとアンテナの組み立て

**ステップ 1：** 拡張ボードを取り外し、4G モジュール / LoRa® モジュール / Zigbee モジュールを Mini-PCIe/M.2 B-KEY スロットに挿入してネジで固定します。

**ステップ 2：** 次の図に示すように、フィーダーを筐体のアンテナ穴に接続します。

**ステップ 3：** 対応するモジュールのアンテナベースにフィーダーを取り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.5-1.png" style={{width:800, height:'auto'}}/></div>


## TPM 2.0 モジュールの組み立て

**ステップ 1：** 分解ガイドに従って背面カバーを取り外します。

**ステップ 2：** TPM 2.0 モジュールを J26 ソケットに挿入します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.6-1.png" style={{width:800, height:'auto'}}/></div>

## UPS および PoE モジュールの組み立て

**ステップ 1：** CM5 モジュール側の基板に UPS および PoE モジュールを取り付ける前に、提供されている分解ガイドに従ってデバイス全体を分解します。

**ステップ 2：** UPS モジュールを取り付けます**  

- 2 本の PM2.0xL5.0 ネジと M2.0x5.0 スペーサーを使用して、金属接点パッドのない 2 つの穴に UPS モジュールを固定します。
- UPS モジュールが正しく位置合わせされ、付属のネジとスペーサーでしっかりと固定されていることを確認します。

**ステップ 3：PoE モジュールを取り付けます**  

- **PoE モジュール**を基板上の**指定スロット**に合わせます。  
- 近接するコンポーネントを損傷しないよう注意しながら、**PoE モジュールを基板にはんだ付け**します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.7-1.png" style={{width:800, height:'auto'}}/></div>

## 取り付けガイド

### DIN レール取り付けガイド

reComputer Industrial R21xx は、さまざまな取り付け方法に対応しています。DIN レールクリップと取り付けネジはパッケージに同梱されています。図に従って、デバイス側面の取り付け穴に DIN レールクリップを正しく取り付けてください。ネジをしっかりと締めたら、デバイスを取り付けレールに装着できます。

#### 取り付け手順

- **ステップ 1：** デバイスとレールクリップを、示されている位置の標準プロファイルレールの上端に置き、デバイスを下方向に押します。
- **ステップ 2：** デバイスのレールクリップを、下側から標準プロファイルレールを通して回転させます。
- **ステップ 3：** デバイスを標準プロファイルレールの方向に押します。カチッという音がして、デバイスが所定の位置に固定されます。

#### 取り外し手順

- **ステップ 1：** レールクリップから外れるまでデバイスを下方向に押します。
- **ステップ 2：** デバイスを標準プロファイルレールから回転させて外します。
- **ステップ 3：** デバイスを持ち上げて取り外します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.8.1_din-rail_mounting_guide_1.png" style={{width:1000, height:'auto'}}/></div>

### 壁面取り付けガイド

垂直取り付け方法は reComputer Industrial R2000 にも適していますが、取り付けブラケットは同梱されていないため、別途購入する必要があります。

#### 取り付け手順

- **ステップ 1：** デバイス背面に取り付けブラケットを配置します。
- **ステップ 2：** 付属のネジでブラケットを固定します。
- **ステップ 3：** 穴位置に印を付けて必要な穴を壁に開け、2 本のネジを使用してデバイスを壁に固定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.8.2_wall_mounting_guide_1.png" style={{width:1000, height:'auto'}}/></div>

## 付属品リスト

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}><strong>項目</strong></td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><strong>製品</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>製品名</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>LoRa® モジュール</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/47.png" /></td>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">地域オプション LoRaWAN Gateway Module(SPI)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">地域オプション LoRaWAN Gateway Module(SPI)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">地域オプション LoRaWAN Gateway Module(USB)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">地域オプション LoRaWAN Gateway Module(USB)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>LoRa® アンテナ</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/48.png" /></td>
      <td><a href="https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html" target="_blank" rel="noopener noreferrer">LoRa アンテナキット - 868-915 MHz</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Wi-Fi/BLE アンテナ</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/49.png" /></td>
      <td><a href="https://www.seeedstudio.com/Compute-Module-CM4-Antenna-kit-p-4717.html" target="_blank" rel="noopener noreferrer">Raspberry Pi Compute Module 4 アンテナキット</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>4G モジュール</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={6} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/51.png" /></td>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AFXGA-Mini-PCIe モジュール - 北米向け</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EUXGR-Mini-PCIe モジュール - EMEA およびタイ向け</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AUXGR-Mini-PCIe モジュール - オーストラリア向け</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EFA-Mini-PCIe モジュール - タイ向け</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EMGA-Mini-PCIe モジュール - マレーシア向け</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-JFA-mini-PCIe-p-5899.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-JFA-mini-PCIe</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>4G アンテナ</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/52.png" /></td>
      <td><a href="https://www.seeedstudio.com/4G-Antenna-Kit-for-reTerminal-DM-p-5713.html" target="_blank" rel="noopener noreferrer">4G モジュール用 4G アンテナキット</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>GPS アンテナ</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/GPS_Antenna.png" /></td>
      <td><a href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank" rel="noopener noreferrer">EC25 4G モジュール用 GPS アンテナキット</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>UPS スーパーキャパシタ</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/54.png" /></td>
      <td><a href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank" rel="noopener noreferrer">SuperCAP UPS LTC3350 モジュール</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>暗号化チップ TPM 2.0</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/55.png" /></td>
      <td><a href="https://www.seeedstudio.com/TPM2-0-Module-with-infineon-SLB9670-p-5711.html" target="_blank" rel="noopener noreferrer">infineon SLB9670 搭載 TPM 2.0 モジュール</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={5} style={{height: 18, width: '20%'}}>SSD カード</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={5} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/56.png" /></td>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 2TB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 1TB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">512GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html" target="_blank" rel="noopener noreferrer">256GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html" target="_blank" rel="noopener noreferrer">128GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>電源アダプタ</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.8.2-table-23.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-3P-Black-19V-4-74A-AC-p-6377.html" target="_blank" rel="noopener noreferrer">Power Adapter 3P-Black-19V-4.74A/7.4*5mm</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>313080684</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={5} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.8.2-table-24.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">AC クローバーリーフ電源コード - US</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>313990332</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/AC-UK-p-5124.html" target="_blank" rel="noopener noreferrer">AC クローバーリーフ電源コード - UK</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>313990328</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Cord-JP-0-5m-p-6386.html" target="_blank" rel="noopener noreferrer">AC クローバーリーフ電源コード - JP</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>106990469</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Cord-EU-0-5m-p-6385.html" target="_blank" rel="noopener noreferrer">AC クローバーリーフ電源コード - EU</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>106990468</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Cord-CN-0-5m-p-6387.html" target="_blank" rel="noopener noreferrer">AC クローバーリーフ電源コード - CN</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>106990470</td>
    </tr>
  </tbody>
</table>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
