---
description: reComputer R1000 組み立てガイド
title: reComputer R1000 組み立てガイド
keywords:
  - Edge
  - reComputer R1000
  - Assembly Guide
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recomputer_r1000_assembly_guide
last_update:
  date: 06/06/2024
  author: Evelyn Chen
---
# reComputer R1000 組み立てガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/recomputer_r1000_assembly.gif" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<br />

reComputer R1000は、4G、LoRa®、Wi-Fi/BLE、Zigbeeを含む複数のIoTワイヤレス通信をサポートしています。M.2ソケット経由でSSDカードの拡張によりストレージを増加させたり、AI機能のためのNPUアクセラレータを追加することができます。さらに、当社のハードウェアエンジニアリングサービスには、ロゴのカスタマイズ、パッケージブランディング、ラベリング、ファームウェアフラッシュ、イメージングサービスなどが含まれ、お客様の特定のニーズに対する包括的なサポートを提供します。

このWikiでは、周辺機器コンポーネントを取り付けるためのユニットの組み立てと分解方法、および取り付けオプションについて説明します。

## ハードウェア前提条件

以下のハードウェアを準備する必要があります

- reComputer R1000 x 1
- アクセサリ
- ドライバーセット
  - Phillips + 3.5 bit
  - Phillips + 3.0 bit
  - Slotted - 2.5 bit

### 分解ガイド

以下の手順に従うことで、問題なくデバイスを分解できるはずです。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/Disassembly_guide.gif" /></div>

**ステップ1:** 底面の4本のネジとサイドパネルのアースネジを取り外す：

- 適切なドライバーを使用して、デバイス底面にある4本のネジを見つけて外します。
- サイドパネルからアースネジを取り外します。

**ステップ2:** フロアパネルを取り外す：

- ネジを取り外したら、デバイスからフロアパネルを慎重に持ち上げて外します。

**ステップ3:** プラスチック製サイドパネルを取り外す：

- デバイスの3面にあるプラスチック製サイドパネルを特定します。
- 各サイドパネルをデバイスから慎重にこじ開けるか、スナップを外します。きつい場合は工具を使用する必要があるかもしれませんが、パネルを損傷しないよう注意してください。

**ステップ4:** ブートスイッチのプラスチックプレートに注意する：

- パネルの1つにあるブートスイッチに注意してください。小さなプラスチックプレートが取り付けられている場合があります。
- 分解過程でこのプレートが落下したり紛失したりしないよう確認してください。

**ステップ5:** アルミニウム外装ケーシングを取り外す：

- サイドパネルを取り外したら、アルミニウム外装ケーシングにアクセスできます。
- デバイスからアルミニウムケーシングを慎重に持ち上げて取り外します。

**ステップ6:** PCBを固定している4本のネジを取り外す

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" /></div>

### SSDの組み立て

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/ssd.gif" /></div>

**ステップ1:** 分解ガイドに従って背面カバーを取り外します。

**ステップ2:** SSDをM.2ソケットに装着し、ネジで固定します。

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass02.jpg" /></div>

### Wi-Fi/BLEアンテナの組み立て

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/Wifi_and_ble.gif" /></div>

**ステップ1:** セクション[分解ガイド](/ja/recomputer_r1000_assembly_guide/#assembly--disassembly-guide)に従ってデバイス全体を分解します。

**ステップ2:** 以下の図に従って、CM4モジュールからアンテナホールへフィーダーラインを接続します。

**ステップ3:** 使用のためにデバイスを組み立てます。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass08.jpg" /></div>

### LTEおよびGNSSアンテナの取り付け

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/LTE.gif" /></div>

### 4G/LoRa®/Zigbeeモジュールとアンテナの組み立て

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/LoRa.gif" /></div>

**ステップ1:** Mini-PCIeスロット用のモジュールがSSDカードの上に装着されていることを確認します。

**ステップ2:** 4Gモジュール/LoRa®モジュール/Zigbeeモジュール（セクション"2.2.8"に従って各スロットのマッチング関係に従って）をMini-PCIeスロットに装着し、ネジで固定します。

**ステップ3:** 以下の写真に従ってフィーダーラインを取り付けます。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass03.jpg" /></div>

### TPM 2.0モジュールの組み立て

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/TPM2_0.gif" /></div>

**ステップ1:** 分解ガイドに従って背面カバーを取り外します。

**ステップ2:** TPM 2.0モジュールをJ13ソケットに装着します。

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass04.jpg" /></div>

### UPSおよびPoEモジュールの組み立て

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/UPS.gif" /></div>

**ステップ1:** ボードのCM4モジュール側にUPSおよびPoEモジュールを取り付ける前に、提供された分解ガイドに従ってデバイス全体を分解します。

**ステップ2:**

- 2本のPM2.0xL5.0ネジとM2.0x5.0スタンドオフを使用して、金属接触パッドのない2つの穴にUPSモジュールを固定します。
- UPSモジュールが適切に位置合わせされ、提供されたネジとスタンドオフを使用してしっかりと取り付けられていることを確認してください。

**ステップ3:** PoEモジュールの取り付け

- PoEモジュールをボード上の指定された開口部に位置合わせします。
- PoEモジュールをボードに慎重にはんだ付けします。ボードのコンパクトな性質により、近くのコンポーネントを損傷しないよう、はんだ付け時は注意を払ってください。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/POE-AE.gif" /></div>

:::note
PoEモジュールを正しく取り付けてください。白い点を内側に向け、コンデンサの隣に配置してください。
:::

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass05.jpg" /></div>

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/POE.png" /></div>

## 取り付けガイド

### DINレール取り付けガイド

reComputer R1000は様々な設置方法を提供しています。DINレールクリップと取り付けネジは梱包に含まれています。図に従って、デバイス側面の取り付け穴にDINレールクリップを正しく取り付けてください。ネジをしっかりと締めた後、デバイスを取り付けレールに設置できます。

**ステップ1:** デバイスとレールクリップを標準プロファイルレールの上端の図示された位置に置き、デバイスを押し下げます。
**ステップ2:** デバイスのレールクリップを下から標準プロファイルレールに通します。
**ステップ3:** デバイスを標準プロファイルレールの方向に押します。デバイスがカチッと所定の位置にはまる音が聞こえます。
<br />

*取り外し*
**ステップ1:** レールクリップから外れるまでデバイスを押し下げます。
**ステップ2:** デバイスを標準プロファイルレールから振り出します。
**ステップ3:** デバイスを持ち上げて取り外します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass06.jpg" /></div>

### 壁面取り付けガイド

垂直取り付け方法もreComputer R1000に適していますが、取り付けブラケットは箱に**含まれておらず**、**別途購入**が必要です。

**ステップ1:** 取り付けブラケットをデバイスの背面に配置します。
**ステップ2:** 付属のネジでブラケットを固定します。
**ステップ3:** 穴の位置をマークし、壁に必要な穴を開け、2本のネジを使用してデバイスを壁に固定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass07.jpg" /></div>

## アクセサリリスト

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
        <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">地域選択可能 LoRaWAN ゲートウェイモジュール(SPI)-US915</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">地域選択可能 LoRaWAN ゲートウェイモジュール(SPI)-EU868</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">地域選択可能 LoRaWAN ゲートウェイモジュール(USB)-US915</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">地域選択可能 LoRaWAN ゲートウェイモジュール(USB)-EU868</a></td>
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
        <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Zigbeeモジュール</td>
        <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}></td>
        <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Mini-PCIe USB Zigbeeモジュール</td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Zigbeeアンテナ</td>
        <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/50.png" /></td>
        <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>reComputer R用Zigbeeアンテナキット</td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>4Gモジュール</td>
        <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={6} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/51.png" /></td>
        <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AFXGA-Mini-PCIeモジュール - 北米向け</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EUXGR-Mini-PCIeモジュール - EMEA・タイ向け</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AUXGR-Mini-PCIeモジュール - オーストラリア向け</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EFA-Mini-PCIeモジュール - タイ向け</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EMGA-Mini-PCIeモジュール - マレーシア向け</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-JFA-mini-PCIe-p-5899.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-JFA-mini-PCIe</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>4Gアンテナ</td>
        <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/52.png" /></td>
        <td><a href="https://www.seeedstudio.com/4G-Antenna-Kit-for-reTerminal-DM-p-5713.html" target="_blank" rel="noopener noreferrer">4Gモジュール用4Gアンテナキット</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>GPSアンテナ</td>
        <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/53.png" /></td>
        <td><a href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank" rel="noopener noreferrer">EC25 4Gモジュール用GPSアンテナキット</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>UPSスーパーキャパシタ</td>
        <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/54.png" /></td>
        <td><a href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank" rel="noopener noreferrer">SuperCAP UPS LTC3350モジュール</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>暗号化チップTPM 2.0</td>
        <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/55.png" /></td>
        <td><a href="https://www.seeedstudio.com/TPM2-0-Module-with-infineon-SLB9670-p-5711.html" target="_blank" rel="noopener noreferrer">infineon SLB9670搭載TPM 2.0モジュール</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>SSDカード</td>
        <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/56.png" /></td>
        <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 1TB</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">512GB NVMe M.2 PCle Gen3x4 2280内蔵SSD</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html" target="_blank" rel="noopener noreferrer">256GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html" target="_blank" rel="noopener noreferrer">128GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>PoE</td>
        <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/57.png" /></td>
        <td><a href="https://www.seeedstudio.com/POE-Module-Kit-for-reTerminal-DM-p-5707.html" target="_blank" rel="noopener noreferrer">MQ7813T120 PoEモジュールキット for reTerminal DM</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={2} style={{height: 18, width: '20%'}}>電源アダプター</td>
        <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={2} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/58.png" /></td>
        <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html" target="_blank" rel="noopener noreferrer">電源アダプター-アメリカ仕様</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061505</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">電源アダプター-ヨーロッパ仕様</a></td>
        <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061506</td>
      </tr>
    </tbody>
  </table>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
