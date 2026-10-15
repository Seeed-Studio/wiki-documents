---
description: reComputer R1100 組み立てガイド
title: reComputer R1100 組み立てガイド
keywords:
  - Raspberry pi
  - エッジコントローラ
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer3.jpg
slug: /recomputer_r1100_assembly_guide
last_update:
  date: 2/27/2024
  author: Kasun Thushara
createdAt: '2023-05-22'
updatedAt: '2026-04-23'
url: https://wiki.seeedstudio.com/ja/recomputer_r1100_assembly_guide/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

reComputer R1100 は 4G、LoRa®、Wi-Fi/BLE を含む複数の IoT 無線通信をサポートします。M.2 ソケットを介して SSD カードを拡張し、ストレージ容量を増やしたり、NPU アクセラレータを追加して AI 機能を強化することができます。さらに、当社のハードウェアエンジニアリングサービスでは、ロゴのカスタマイズ、パッケージブランディング、ラベリング、ファームウェアのフラッシュ、イメージングサービスなどを提供し、お客様の特定のニーズに合わせた包括的なサポートを行います。

この Wiki では、周辺機器コンポーネントを取り付けるためのユニットの組み立ておよび分解方法に加えて、マウントオプションについて説明します。

## ハードウェアの前提条件

以下のハードウェアを準備する必要があります

- reComputer R1100 x 1
- 付属品
- ドライバーセット
  - プラスドライバー + 3.5 ビット
  - プラスドライバー + 3.0 ビット
  - マイナスドライバー - 2.5 ビット

## デバイス分解ガイド

問題なく安全に**デバイスを分解する**には、次の手順に従ってください。  

**ステップ 1: 底面の 4 本のネジを外す**  

- 適切なドライバーを使用して、デバイス底面にある**4 本のネジ**を見つけて外します。  

**ステップ 2: 底板を取り外す**  

- ネジを外したら、デバイスから**底板を慎重に持ち上げて取り外します**。  

**ステップ 3: プラスチック製サイドパネルを取り外す**  

- デバイスの 3 面にある**プラスチック製サイドパネル**を確認します。  
- 各パネルを慎重に**こじるか、ツメを外して**取り外します。きつくはまっている場合は工具が必要になることがありますが、破損させないよう注意してください。  

**ステップ 4: ブートスイッチのプラスチックプレートに注意する**  

- パネルの 1 つには**ブートスイッチ**があり、そこに**小さなプラスチックプレートが取り付けられている**場合があります。  
- 分解中にこのプレートが落下したり紛失したりしないように注意してください。  

**ステップ 5: アルミ製外装ケースを取り外す**  

- **サイドパネルを取り外す**と、**アルミ製外装ケース**にアクセスできるようになります。  
- アルミケースを慎重に**持ち上げて取り外します**。  

**ステップ 6: PCB を固定しているネジを外す**  

- 最後に、**PCB（プリント基板）を固定している 4 本のネジ**を**外します**。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dissambly_guide.PNG" style={{width:600, height:'auto'}}/></div>

## Nano SIM カードの取り付け

**ステップ 1: 背面カバーを取り外す**  

- **分解ガイド**に従って、背面カバーを慎重に取り外します。  

**ステップ 2: Nano SIM カードを挿入する**  

- **Nano SIM カード**を指定された**SIM スロット**に挿入します。  

カバーを元に戻して固定する前に、SIM カードが正しく位置合わせされていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/sim_dis.PNG" style={{width:600, height:'auto'}}/></div>

## SSD の取り付け  

**ステップ 1: 背面カバーを取り外す**  

- **分解ガイド**に従って、背面カバーを慎重に取り外します。  

**ステップ 2: SSD を挿入する**  

- **SSD** を **M.2 ソケット**にしっかりと挿入します。  
- **ネジ**を締めて固定します。  

デバイスを再組み立てする前に、SSD が正しく装着されていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ssd_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Wi-Fi/BLE アンテナの取り付け  

**ステップ 1: デバイスを分解する**  

- デバイスを慎重に分解するために、**4.1 節 - 分解ガイド**に従ってください。  

**ステップ 2: アンテナを接続する**  

- **CM4 モジュール**からの**フィーダーライン**を**アンテナホール**に接続し、正しい位置合わせのために添付の図を参照してください。  

**ステップ 3: デバイスを再組み立てする**  

- アンテナが確実に接続されたら、デバイスを**再組み立て**して通常動作できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wifi_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 4G/LoRa® モジュールとアンテナの組み立て

**ステップ 1: モジュールの配置を確認する**  

- **Mini-PCIe スロットモジュール**が **SSD カードの上**に配置されていることを確認します。  

**ステップ 2: モジュールを取り付ける**  

- **4G、LoRa®** を、**2.2.8 節**のマッチングガイドラインに従って、適切な **Mini-PCIe スロット**に挿入します。  
- **ネジを締めて**モジュールを固定します。  

**ステップ 3: アンテナを接続する**  

- 添付の図を参照して正しい位置になるように、**フィーダーライン**をモジュールに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/lora_dis.PNG" style={{width:600, height:'auto'}}/></div>

## TPM 2.0 モジュールの組み立て

**ステップ 1: 背面カバーを取り外す**  

- **分解ガイド**に従って、背面カバーを取り外します。  

**ステップ 2: TPM 2.0 モジュールを取り付ける**  

- **TPM 2.0 モジュール**を **J13 ソケット**にしっかりと挿入します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/tpm_dis.PNG" style={{width:600, height:'auto'}}/></div>

## UPS および PoE モジュールの組み立て

**ステップ 1: デバイスを分解する**  

- 取り付け前に、**分解ガイド**に従って**デバイス全体を分解**します。  

**ステップ 2: UPS モジュールを取り付ける**  

- 金属接触パッドのない**指定された穴**に **UPS モジュール**を固定するために、**2 本の PM2.0xL5.0 ネジ**と **M2.0x5.0 スペーサー**を使用します。  
- **UPS モジュール**が**正しく位置合わせ**され、付属のネジとスペーサーでしっかり固定されていることを確認します。  

**ステップ 3: PoE モジュールを取り付ける**  

- 基板上の**指定スロット**に **PoE モジュール**を合わせます。  
- 近接するコンポーネントを損傷しないよう注意しながら、**PoE モジュールを基板にはんだ付け**します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ups_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 取り付けガイド

### DIN レール取り付けガイド

reComputer R1100 は、**DIN レール取り付け**を含む複数の取り付け方法をサポートしています。**DIN レールクリップ**と**取り付けネジ**はパッケージに同梱されています。図を参照して、DIN レールクリップをデバイス側面の取り付け穴に取り付けてください。固定できたら、デバイスを取り付けレールに装着できます。  

#### 取り付け手順

- **デバイスの位置決め:**  
  - 図に示すように、標準 **DIN レール**の**上端**にデバイスと**レールクリップ**を配置します。  
  - デバイスを**下方向**に押して正しく位置合わせします。  

- **レールクリップを固定する:**  
  - **レールクリップ**を下側から **DIN レール**のプロファイルを通して回転させてはめ込みます。  

- **ロックする:**  
  - デバイスを**レール側へ**押し込み、**カチッ**という音がして確実に取り付けられたことを確認します。  

#### 取り外し手順

- **ロックを解除する:**  
  - デバイスが**レールクリップ**から解放されるまで、デバイスを**下方向**に押します。  

- **レールから外す:**  
  - デバイスを **DIN レール**から**外側へ**回転させて外します。  

- **持ち上げて取り外す:**  
  - デバイスを**上方向**に持ち上げ、取り付けレールから完全に取り外します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dinmount.PNG" style={{width:600, height:'auto'}}/></div>

### 壁面取り付けガイド

reComputer R1100 は**垂直方向の壁面取り付け**をサポートしていますが、**取り付けブラケット**はパッケージには**含まれておらず**、別途購入する必要があります。  

#### 取り付け手順

- **ブラケットを取り付ける:**  
  - デバイスの**背面**に**取り付けブラケット**を配置します。  

- **ブラケットを固定する:**  
  - **付属のネジ**を使用して**ブラケット**を固定します。  

- **壁に取り付ける:**  
  - 壁に**下穴位置**をマーキングします。  
  - 必要な**穴**をドリルで開けます。  
  - **2 本のネジ**を使用してデバイスを壁に固定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wallmount.PNG" style={{width:600, height:'auto'}}/></div>

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
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">地域選択可能 LoRaWAN Gateway Module(SPI)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">地域選択可能 LoRaWAN Gateway Module(SPI)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">地域オプション LoRaWAN ゲートウェイモジュール（USB）-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">地域オプション LoRaWAN ゲートウェイモジュール（USB）-EU868</a></td>
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
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-JFA-mini-PCIe-p-5899.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-JFA-Mini-PCIe</a></td>
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
