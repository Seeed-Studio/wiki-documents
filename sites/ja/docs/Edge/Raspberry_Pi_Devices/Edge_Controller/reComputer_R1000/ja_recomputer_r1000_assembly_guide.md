---
description: reComputer R1000 組み立てガイド
title: reComputer R1000 組み立てガイド
keywords:
  - エッジ
  - reComputer R1000
  - 組み立てガイド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_r1000_assembly_guide
sku: 113991274,E24010521,113991334,113991375
last_update:
  date: 06/06/2024
  author: Evelyn Chen
createdAt: '2023-05-22'
updatedAt: '2026-04-23'
url: https://wiki.seeedstudio.com/ja/recomputer_r1000_assembly_guide/
---
# reComputer R1000 組み立てガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/recomputer_r1000_assembly.gif" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br />

reComputer R1000 は、4G、LoRa®、Wi-Fi/BLE を含む複数の IoT 無線通信をサポートします。M.2 ソケットを介して SSD カードを拡張することでストレージを増設したり、NPU アクセラレータを追加して AI 機能を強化することができます。さらに、当社のハードウェアエンジニアリングサービスでは、ロゴのカスタマイズ、パッケージブランディング、ラベリング、ファームウェアの書き込み、イメージングサービスなどを提供し、お客様の特定のニーズに合わせた包括的なサポートを行います。

この Wiki では、周辺機器コンポーネントを取り付けるためのユニットの組み立ておよび分解方法に加え、マウントオプションについて説明します。

## ハードウェアの前提条件

以下のハードウェアを用意する必要があります

- reComputer R1000 x 1
- 付属品
- ドライバーセット
  - プラスドライバー + 3.5 ビット
  - プラスドライバー + 3.0 ビット
  - マイナスドライバー - 2.5 ビット

### 分解ガイド

次の手順に従うことで、問題なくデバイスを分解できます。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/Disassembly_guide.gif" /></div>

**STEP 1:** 底面の 4 本のネジと側面パネルのアースネジを取り外します：

- デバイス底面にある 4 本のネジを、適切なドライバーを使用して探し出し、取り外します。
- 側面パネルからアースネジを取り外して外します。

**STEP 2:** 底板を取り外します：

- ネジを外したら、デバイスから底板を慎重に持ち上げて取り外します。

**STEP 3:** プラスチック製の側面パネルを取り外します：

- デバイスの 3 面にあるプラスチック製の側面パネルを確認します。
- 各側面パネルをデバイスからそっとこじるか、ツメを外して取り外します。きつい場合は工具が必要になることがありますが、パネルを傷つけないよう注意してください。

**STEP 4:** ブートスイッチのプラスチックプレートに注意します：

- パネルの 1 つにはブートスイッチがあり、小さなプラスチックプレートが取り付けられている場合があります。
- 分解作業中にこのプレートが落下したり紛失したりしないように注意してください。

**STEP 5:** アルミ製外装ケースを取り外します：

- 側面パネルを取り外すと、アルミ製の外装ケースにアクセスできます。
- デバイスからアルミケースを慎重に持ち上げて取り外します。

**STEP 6:** 基板（PCB）を固定している 4 本のネジを取り外します

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" /></div>

### SSD の組み立て

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/ssd.gif" /></div>

**STEP 1:** 分解ガイドに従って背面カバーを取り外します。

**STEP 2:** SSD を M.2 ソケットに挿入し、ネジで固定します。

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass02.jpg" /></div>

### Wi-Fi/BLE アンテナの組み立て

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/Wifi_and_ble.gif" /></div>

**STEP 1:** セクション [Disassembly Guide](/ja/recomputer_r1000_assembly_guide/#assembly--disassembly-guide) に従って、デバイス全体を分解します。

**STEP 2:** 下の図に従って、CM4 モジュールからアンテナホールまで給電線を接続します。

**STEP 3:** 使用できるようにデバイスを再組み立てします。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass08.jpg" /></div>

### LTE および GNSS アンテナの取り付け

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/LTE.gif" /></div>

### 4G/LoRa® モジュールとアンテナの組み立て

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/LoRa.gif" /></div>

**STEP 1:** Mini-PCIe スロット用のモジュールが、SSD カードの上に搭載されていることを確認します。

**STEP 2:** セクション「2.2.8」に従って各スロットとの対応関係を確認しながら、4G モジュール/LoRa® モジュールを Mini-PCIe スロットに挿入し、ネジで固定します。

**STEP 3:** 下の写真に従って給電線を取り付けます。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass03.jpg" /></div>

### TPM 2.0 モジュールの組み立て

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/TPM2_0.gif" /></div>

**STEP 1:** 分解ガイドに従って背面カバーを取り外します。

**STEP 2:** TPM 2.0 モジュールを J13 ソケットに挿入します。

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass04.jpg" /></div>

### UPS および PoE モジュールの組み立て

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/UPS.gif" /></div>

**STEP 1:** CM4 モジュール側の基板に UPS および PoE モジュールを取り付ける前に、提供されている分解ガイドに従ってデバイス全体を分解します。

**STEP 2:**

- 2 本の PM2.0xL5.0 ネジと M2.0x5.0 スペーサーを使用して、金属接点パッドのない 2 つの穴に UPS モジュールを固定します。
- 付属のネジとスペーサーを使用して、UPS モジュールが正しく位置合わせされ、しっかりと取り付けられていることを確認します。

**STEP 3:** PoE モジュールを取り付けます

- 基板上の所定の開口部に PoE モジュールを合わせます。
- PoE モジュールを基板にはんだ付けします。基板は高密度実装のため、近接するコンポーネントを損傷しないよう、はんだ付けの際は十分注意してください。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/POE-AE.gif" /></div>

:::note
PoE モジュールは正しい向きで取り付けてください。白い点がコンデンサの隣で内側を向くように配置します。
:::

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass05.jpg" /></div>

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/POE.png" /></div>

## 取り付けガイド

### DIN レール取り付けガイド

reComputer R1000 はさまざまな取り付け方法に対応しています。DIN レール用クリップと取り付けネジはパッケージに同梱されています。図に従って、デバイス側面の取り付け穴に DIN レール用クリップを正しく取り付けてください。ネジをしっかりと締めたら、デバイスを取り付けレールに装着できます。

**STEP 1:** 図に示す位置で、デバイスとレールクリップを標準プロファイルレールの上端に当て、デバイスを下方向に押し込みます。
**STEP 2:** デバイスのレールクリップを下側から標準プロファイルレールに引っかけます。
**STEP 3:** デバイスを標準プロファイルレールの方向へ押し込みます。カチッという音がして、デバイスが所定の位置に固定されます。
<br />

*取り外し*
**STEP 1:** レールクリップが外れるまでデバイスを下方向に押し下げます。
**STEP 2:** デバイスを標準プロファイルレールから外側へ回転させます。
**STEP 3:** デバイスを持ち上げてレールから取り外します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass06.jpg" /></div>

### 壁面取り付けガイド

reComputer R1000 には縦向きの取り付け方法も適用できますが、取り付けブラケットは箱には**同梱されておらず**、**別途購入**する必要があります。

**STEP 1:** 取り付けブラケットをデバイス背面に配置します。
**STEP 2:** 付属のネジでブラケットを固定します。
**STEP 3:** 穴位置に印を付けてから、壁に必要な穴を開け、2 本のネジを使用してデバイスを壁に固定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass07.jpg" /></div>

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
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">リージョンオプション LoRaWAN ゲートウェイモジュール（USB）-EU868</a></td>
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
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/53.png" /></td>
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
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>SSD カード</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/56.png" /></td>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 1TB</a></td>
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
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>PoE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/57.png" /></td>
      <td><a href="https://www.seeedstudio.com/POE-Module-Kit-for-reTerminal-DM-p-5707.html" target="_blank" rel="noopener noreferrer">MQ7813T120 PoE モジュールキット for reTerminal DM</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={2} style={{height: 18, width: '20%'}}>電源アダプター</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={2} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/58.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html" target="_blank" rel="noopener noreferrer">電源アダプター - アメリカ仕様</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061505</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">電源アダプター - ヨーロッパ仕様</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061506</td>
    </tr>
  </tbody>
</table>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
