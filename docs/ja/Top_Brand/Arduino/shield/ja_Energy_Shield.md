---
description: Energy_Shield
title: Energy Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Energy_Shield
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Energy_Shield.jpg" alt="pir" width={600} height="auto" /></p>

Energy Shieldは、LiPoバッテリーをベースとした電源シールドで、プロジェクトを継続的に稼働させることができます。利用可能な電源が存在する場合は、バッテリーを常に充電状態に保ちます。一般的なソーラーパネル（JSTコネクタ経由）、マイクロコントローラーのUSBポート経由のUSB、ArduinoのDCジャック経由の9Vおよび12V DCアダプターなど、幅広い電源を受け入れることができます。また、Arduinoプロジェクトに電力を供給するだけでなく、シールドに標準USBポートが搭載されているため、スマートフォン、MP3プレーヤー、タブレットなどのモバイル電気デバイスのバッテリー切れを救済することも可能です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/energy-shield-p-1373.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 幅広い電源入力に対応
- 過電圧保護
- 85%以上の高効率電力変換
- 充電および動作状態を示す包括的なLEDインジケーター

## 仕様

**電力出力仕様**

<table align="center">
  <tbody>
  <tr>
    <td><h3>項目</h3></td>
    <td><h3>最小</h3></td>
    <td><h3>標準</h3></td>
    <td><h3>最大</h3></td>
    <td><h3>単位</h3></td>
  </tr>
  <tr>
    <td><h4>電圧</h4></td>
    <td><h4>4.9</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.1</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h4>電流</h4></td>
    <td><h4>5</h4></td>
    <td><h4>/</h4></td>
    <td><h4>750</h4></td>
    <td><h4>mA</h4></td>
  </tr>
  </tbody></table>

**JSTコネクタ経由の電力入力仕様**

| 項目               | 最小 | 標準     | 最大 | 単位 |
|--------------------|-----|---------|-----|------|
| 有効電圧          | 4.5 | 5       | 5.5 | V    |
| 電流              | 1   | /       | 800 | mA   |
| 保護電圧          | /   | /       | 12  | V    |

<table align="center">
  <tbody>
  <tr>
    <td><h3>項目</h3></td>
    <td><h3>最小</h3></td>
    <td><h3>標準</h3></td>
    <td><h3>最大</h3></td>
    <td><h3>単位</h3></td>
  </tr>
  <tr>
    <td><h4>有効電圧</h4></td>
    <td><h4>4.5</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.5</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h4>電流</h4></td>
    <td><h4>1</h4></td>
    <td><h4>/</h4></td>
    <td><h4>800</h4></td>
    <td><h4>mA</h4></td>
  </tr>
  <tr>
    <td><h4>保護電圧</h4></td>
    <td><h4>/</h4></td>
    <td><h4>/</h4></td>
    <td><h4>12</h4></td>
    <td><h4>V</h4></td>
  </tr>
  </tbody></table>

**動作モードの説明**

Energy Shieldは、JSTコネクタ、ArduinoのUSBポート、およびDCジャックの3つの異なるポートから電流を引き出してバッテリーを充電することができます。電圧範囲は以下の通りです：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Working_Mode_Explanation.jpg" alt="pir" width={600} height="auto" /></p>

入力電圧が6.6V未満の場合、Energy Shieldの動作モードを「Charge」と「ON」の間で切り替えることができます。動作モード選択スイッチを使用します。「Charge」状態では、LiPoバッテリーは出力せず、既存の電源からのみ電流を引き出します。「ON」状態では、バッテリーが充電されると同時にシステム全体に電力を供給します。

しかし、入力電圧が6.6Vを超える場合、スイッチの状態に関係なく、Energy Shieldは強制的に「Charge」モードに入ります。

## ハードウェア概要

---------
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Energy_Shield_Interface_V2.0.jpg" alt="pir" width={600} height="auto" /></p>

**ハードウェア構成**

U1: ISL97516 IC、昇圧チップ;

U3: CN3065 IC、充電管理チップ;

U4,U8: LM293D IC、デュアル差動コンパレータ;

充電インジケーター: 充電状態で点灯します;

容量インジケーター: バッテリーの残存寿命を示します;

SW2ボタン: バッテリーの容量を確認します;

**Arduinoで使用されるピン**

Vinピン: DCジャックからバッテリーを充電するための電力を伝達します;

5Vピン: USBポートからバッテリーを充電するための電力を伝達します;

**その他のインターフェース**

JSTソケット：JSTコネクタが必要な外部電源（例: ソーラーパネル）用に提供されています;

バッテリーソケット: LiPoバッテリーを接続するために使用されます;

USBポート: 他のデバイスに5Vを出力します;

使用方法
-----

### 1. 充電例

LiPoバッテリーは多くの外部電源で充電することができます。ここでは、一般的な2つの電源の使用例を示します。

**1) ソーラーパネル**

ソーラーパネルは、私たちが使用する最も一般的なグリーン電源の1つです。1ユニットの典型的な出力は約5Vです。当社のストアでは[多くのソーラーパネル](https://www.seeedstudio.com/s/solar%20panel.html)を提供しています。これらはすべてJSTコネクタが事前に組み込まれており、Energy Shieldとシームレスに接続できます。

以下のようにソーラーパネルをシールドのJSTソケットに接続してください。

:::note
十分な光があり、十分な電流を供給できることを確認してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_using_Solar_Panel_.jpg" alt="pir" width={600} height="auto" /></p>

次に、SW2を押し下げます。「Charge」インジケーターLEDが点灯するのが確認できます。もう1つのインジケーター「Capacity」はバッテリーの残存電力を示します。残存電力が30%未満の場合、赤色に点灯します。残存電力が30%～80%の場合、黄色に点灯します。それ以外の場合は緑色に点灯します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Remaining_power_indicator.jpg" alt="pir" width={600} height="auto" /></p>

**2) 9Vアダプター**

DCアダプターを使用してプロジェクトに電力を供給する場合、9Vアダプターは馴染みのあるものです。ArduinoのDCジャックに9Vアダプターを接続することで、プロジェクトを実行しながらバッテリーを同時に充電することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Remaining_power_indicator.jpg" alt="pir" width={600} height="auto" /></p>

![](https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_using_9V_Jack.jpg)

### 2. シールドによるデバイスへの電力供給

**1) Arduinoへの電力供給**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_for_Arduino.jpg" alt="pir" width={600} height="auto" /></p>

動作モード選択スイッチを「ON」に切り替えます。Arduinoの電源インジケーターLEDを確認し、適切に動作しているか確認してください。

**2) モバイルデバイスへの電力供給**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_for_Phone.jpg" alt="pir" width={600} height="auto" /></p>

シールドの標準USBポートを使用してモバイルデバイスに電力を供給します。

### 3. 変換効率

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Convert_effect.jpg" alt="pir" width={600} height="auto" /></p>

上記のグラフは、Energy Shieldの昇圧回路の変換効率を示しています。昇圧回路は、通常4.2Vまたは3.7VのLiPoバッテリーの電圧を、残存電力の減少に伴い5Vに昇圧し、外部に供給します。この変換効率は、出力電流が約200mAのときにピークに達することがわかります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Energy_Shield/res/Energy_Shield_Eagel_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- [Energy Shield Eagle ファイル](https://files.seeedstudio.com/wiki/Energy_Shield/res/Energy_Shield_Eagel_File.zip)
- [CN3065 データシート](http://www.consonance-elec.com/pdf/datasheet/DSE-CN3065.pdf)
- [ISL97516 データシート](https://files.seeedstudio.com/wiki/Energy_Shield/res/ISL97516.pdf)
- [LM293D データシート](https://files.seeedstudio.com/wiki/Energy_Shield/res/LM293D.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Energy_Shield から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>