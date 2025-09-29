---
description: reComputer R1100 組み立てガイド
title: reComputer R1100 組み立てガイド
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer3.jpg
slug: /ja/recomputer_r1100_assembly_guide
last_update:
  date: 2/27/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

reComputer R1100は、4G、LoRa®、Wi-Fi/BLE、Zigbeeを含む複数のIoTワイヤレス通信をサポートしています。M.2ソケット経由でSSDカードの拡張によりストレージの増設やAI機能のためのNPUアクセラレータの追加が可能です。さらに、当社のハードウェアエンジニアリングサービスには、ロゴのカスタマイズ、パッケージブランディング、ラベリング、ファームウェアフラッシュ、イメージングサービスなどが含まれ、お客様の特定のニーズに対する包括的なサポートを提供します。

このWikiでは、周辺機器コンポーネントを取り付けるためのユニットの組み立てと分解方法、および取り付けオプションについて説明します。

## ハードウェア前提条件

以下のハードウェアを準備する必要があります

- reComputer R1000 x 1
- アクセサリ
- ドライバーセット
  - Phillips + 3.5 bit
  - Phillips + 3.0 bit
  - Slotted - 2.5 bit

## デバイス分解ガイド

以下の手順に従って、問題なく**デバイスを安全に分解**してください：

**ステップ1：底面の4本のネジを取り外す**

- 適切なドライバーを使用して、デバイス底面の**4本のネジ**を見つけて取り外します。

**ステップ2：底面パネルを取り外す**

- ネジを取り外したら、デバイスから**底面パネルを慎重に持ち上げて**取り外します。

**ステップ3：プラスチック製サイドパネルを取り外す**

- デバイスの3面にある**プラスチック製サイドパネル**を確認します。
- 各パネルを**優しくこじ開けるか、外します**。しっかりと固定されている場合は工具が必要かもしれませんが、破損しないよう注意してください。

**ステップ4：ブートスイッチのプラスチックプレートに注意する**

- パネルの1つにある**ブートスイッチ**に注意してください—**小さなプラスチックプレートが取り付けられている**場合があります。
- 分解中にこのプレートが落下したり紛失したりしないよう確認してください。

**ステップ5：アルミニウム外装ケースを取り外す**

- **サイドパネルを取り外した**状態で、**アルミニウム外装ケース**にアクセスできるようになります。
- アルミニウムケースを**慎重に持ち上げて取り外します**。

**ステップ6：PCBを固定しているネジを取り外す**

- 最後に、**PCB（プリント基板）を固定している4本のネジ**を**取り外します**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dissambly_guide.PNG" style={{width:600, height:'auto'}}/></div>

## Nano SIMカードの取り付け

**ステップ1：背面カバーを取り外す**

- **分解ガイド**に従って、背面カバーを慎重に取り外します。

**ステップ2：Nano SIMカードを挿入する**

- **Nano SIMカード**を指定された**SIMスロット**に配置します。

カバーを元の位置に固定する前に、SIMカードが適切に配置されていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/sim_dis.PNG" style={{width:600, height:'auto'}}/></div>

## SSDの取り付け

**ステップ1: 背面カバーの取り外し**

- **分解ガイド**に従って、背面カバーを慎重に取り外してください。

**ステップ2: SSDの挿入**

- **SSD**を**M.2ソケット**にしっかりと挿入してください。
- **ネジ**を締めて固定してください。

デバイスを再組み立てする前に、SSDが適切に装着されていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ssd_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Wi-Fi/BLEアンテナの取り付け

**ステップ1: デバイスの分解**

- **セクション4.1 - 分解ガイド**に従って、デバイスを慎重に分解してください。

**ステップ2: アンテナの接続**

- **CM4モジュール**からの**フィーダーライン**を**アンテナホール**に接続し、適切な位置合わせについては提供されている図を参照してください。

**ステップ3: デバイスの再組み立て**

- アンテナがしっかりと接続されたら、通常動作のためにデバイスを**再組み立て**してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wifi_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 4G/LoRa®/Zigbeeモジュールとアンテナの組み立て

**ステップ1: モジュール配置の確認**

- **Mini-PCIeスロットモジュール**が**SSDカードの上**に配置されていることを確認してください。

**ステップ2: モジュールの取り付け**

- **4G、LoRa®、またはZigbeeモジュール**を適切な**Mini-PCIeスロット**に挿入し、**セクション2.2.8**のマッチングガイドラインに従ってください。
- **ネジを締めて**モジュールを所定の位置に固定してください。

**ステップ3: アンテナの接続**

- **フィーダーライン**をモジュールに接続し、正しい位置については提供されている図を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/lora_dis.PNG" style={{width:600, height:'auto'}}/></div>

## TPM 2.0モジュールの組み立て

**ステップ1: 背面カバーの取り外し**

- **分解ガイド**に従って背面カバーを取り外してください。

**ステップ2: TPM 2.0モジュールの取り付け**

- **TPM 2.0モジュール**を**J13ソケット**にしっかりと挿入してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/tpm_dis.PNG" style={{width:600, height:'auto'}}/></div>

## UPSおよびPoEモジュールの組み立て

**ステップ1: デバイスの分解**

- 取り付け前に、**分解ガイド**に従って**デバイス全体を分解**してください。

**ステップ2: UPSモジュールの取り付け**

- **2本のPM2.0xL5.0ネジ**と**M2.0x5.0スタンドオフ**を使用して、**UPSモジュール**を金属接触パッドのない**指定された穴**に固定してください。
- **UPSモジュール**が**適切に位置合わせ**され、提供されたネジとスタンドオフでしっかりと固定されていることを確認してください。

**ステップ3: PoEモジュールの取り付け**

- **PoEモジュール**をボード上の**指定されたスロット**に位置合わせしてください。
- 近くのコンポーネントへの損傷を防ぐため、精密さを確保して**PoEモジュール**をボードに慎重に**はんだ付け**してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ups_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 取り付けガイド

### DINレール取り付けガイド

reComputer R1100は**DINレール取り付け**を含む複数の取り付け方法をサポートしています。**DINレールクリップ**と**取り付けネジ**はパッケージに含まれています。図に従って、DINレールクリップをデバイス側面の取り付け穴に取り付けてください。固定されたら、デバイスを取り付けレールに設置できます。

#### 取り付け手順

- **デバイスの位置決め:**
  - 図に示すように、デバイスと**レールクリップ**を標準**DINレール**の**上端**に配置してください。
  - デバイスを**下向きに**押して適切に位置合わせしてください。

- **レールクリップの固定:**
  - **レールクリップ**を**DINレール**プロファイルを通して下から振り上げてください。

- **所定位置への固定:**
  - **クリック**音が聞こえるまでデバイスを**レールに向かって**押し、しっかりと取り付けられたことを示してください。

#### 取り外し手順

- **ロックの解除:**
  - **レールクリップ**によって解放されるまでデバイスを**下に**押してください。

- **レールからの取り外し:**
  - デバイスを**DINレール**から**振り出して**ください。

- **持ち上げて取り外し:**
  - デバイスを**上向きに**持ち上げて取り付けレールから完全に取り外してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dinmount.PNG" style={{width:600, height:'auto'}}/></div>

### 壁面取り付けガイド

reComputer R1100は**垂直壁面取り付け**をサポートしていますが、**取り付けブラケット**はパッケージに**含まれておらず**、別途購入する必要があります。

#### 取り付け手順

- **ブラケットの取り付け:**
  - **取り付けブラケット**をデバイスの**背面**に配置してください。

- **ブラケットの固定:**
  - **付属のネジ**を使用して**ブラケット**を固定してください。

- **壁への取り付け:**
  - 壁に**ボアホール**をマークしてください。
  - 必要な**穴**を開けてください。
  - **2本のネジ**を使用してデバイスを壁に固定してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wallmount.PNG" style={{width:600, height:'auto'}}/></div>

## アクセサリーリスト

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

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
