---
title: Grove - 2-Channel SPDT Relay
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-2-Channel_SPDT_Relay/
slug: /ja/Grove-2-Channel_SPDT_Relay
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/mian.jpg)

Grove - 2-Channel SPDT Relay は、2つの単極双投（SPDT）スイッチを備えています。このスイッチを制御するには、低電圧および低電流信号のみが必要です。具体的には、5V DCを使用して最大250V ACまたは110V DCを制御できます。

最大の特徴は、2つのチャンネルを個別に制御できることです。例えば、SIG1によって制御される場合、COM1をNC1またはNO1に接続することができます。非常に便利で信頼性が高いため、高電圧/高電流デバイスを切り替える必要がある大量の製品やプロジェクトに適用できます。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 高温耐性プラスチック製の外殻
- 高電圧負荷対応
- 低消費電力
- 長寿命

## 仕様

|項目|値|
|---|---|
|動作電圧|5V|
|定格コイル電流|89.3mA|
|TUV認証負荷|10A 250VAC/ 10A 30VDC|
|UL認証負荷|10A 125VAC/ 10A 28VDC|
|最大許容電圧|250VAC/110VDC|
|消費電力|約0.45W|
|接触抵抗|最大100mΩ|
|絶縁抵抗|最小100MΩ (500VDC)|
|最大ON/OFFスイッチング|30操作/分|
|周囲温度|-40°C ～ +85°C|
|動作湿度|45% ～ 85%RH|
|接触材質|AgCdO|
|入力インターフェース|デジタル SIG1/SIG2|
|出力ポート|3ピン DIP メススクリュー端子 - 緑色|

## 応用例

- 家庭用電化製品
- オフィスマシン
- リモコンテレビ受信機
- モニターディスプレイ
- オーディオ機器の高突入電流用途

## ハードウェア概要

### ピンマップ

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/pin_map.jpg)

### 回路図

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/schematic.jpg)

**K1** はリレーモジュールであり、K1の**ピン1**と**ピン3**の間にコイルがあります。デフォルトでは、**COM1**は**NC1**に接続されています。K1の**ピン3**がグランドに接続されると、このコイルは「閉じる」状態になり、**COM1**は**NO1**に接続されます。

このコイルを開くには約90mAが必要ですが、通常ArduinoのGPIOピンは20mA（最大40mA）しか供給できません。そのため、500mAを供給できるNPNトランジスタ[S9013](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)を使用します。

**SIG1**は10kΩのR2によってプルダウンされています。信号がない場合、**Q1**の「ゲート」は0Vとなり、Q1はオフになります。そのため、K1は「開いた」状態になります。**SIG1**が5Vになると、Q1がオンになり、K1の**ピン3**がシステムのGNDに接続されます。これにより、K1の**ピン3**と**ピン1**の間に5Vが生じ、コイルが「閉じる」状態となり、**COM1**は**NO1**に接続されます。

:::tip
**D3**は[フライバックダイオード（キックバックダイオード）](https://en.wikipedia.org/wiki/Flyback_diode)です。フライバックダイオードは、インダクタに接続されたダイオードで、供給電流が突然減少または遮断された際に発生する急激な電圧スパイクを除去するために使用されます。このダイオードは、インダクティブ負荷がスイッチによって制御される回路や、スイッチング電源およびインバータで使用されます。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg)  |

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove - 2-Channel SPDT Relay |Grove-LED x2|
|--------------|-------------|-----------------|--------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Red%20LED.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove---Red-LED-p-1142.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが破損する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove-LEDの**SIG**ピンをGrove - 2-Channel SPDT Relayの**COM**ポートに接続します。Grove-LEDの**GND**ピンをBase Shieldの**GND**に接続します。

- **ステップ2.** Grove - 2-Channel SPDT Relayの**NO**ポートをBase Shieldの**5V**に接続します。**NC**ポートをBase Shieldの**GND**に接続します。

:::tip
        ステップ1とステップ2では、Grove LEDのGNDをシステムのGNDに接続し、SIGをリレーのCOMポートに接続します。COMがNO（5V）に接続されている場合、LEDが点灯し、COMがNC（0V）に接続されている場合、LEDが消灯します。このWikiでは2つのLEDを使用します。LED<sub>1</sub>がSwitch<sub>1</sub>用、LED<sub>2</sub>がSwitch<sub>2</sub>用であることを確認してください。
:::

- **ステップ3.** Grove - 2-Channel SPDT RelayをBase Shieldの**D7**ポートに接続します。

- **ステップ4.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ5.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/connect.jpg)

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** Arduino IDEを開き、新しいファイルを作成して、以下のコードを新しいファイルにコピーします。

```cpp
#include <Arduino.h>
uint8_t channel1 = 7;
uint8_t channel2 = 8;
void setup() {
  pinMode(channel1, OUTPUT);
  pinMode(channel2, OUTPUT);
}
void loop() {
  digitalWrite(channel1, HIGH);
  digitalWrite(channel2, LOW);
  delay(2000);
  digitalWrite(channel1, LOW);
  digitalWrite(channel2, HIGH);
  delay(2000);
}
```

- **ステップ2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::tip
    オンボードLEDが交互に点灯および消灯するのが確認でき、2つのGrove - LEDも同様に動作します。
:::

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/test20180821_142634.gif)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove-2-Channel SPDT Relay eagle ファイル](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip)
- **[PDF]** [SRD 05VDC-SL-C リレーのデータシート](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/SRD_05VDC-SL-C.pdf)
- **[PDF]** [S9013 のデータシート](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)

## プロジェクト

こちらはこの製品の紹介ビデオです。簡単なデモが含まれており、ぜひお試しください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/_8au__eavKk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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