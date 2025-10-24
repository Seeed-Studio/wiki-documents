---
title: Grove - 2-Channel Solid State Relay
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-2-Channel_Solid_State_Relay/
slug: /ja/Grove-2-Channel_Solid_State_Relay
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/mian.jpg)

コイルを使用する代わりに、パッケージ化されたソリッドステートリレー（SSR）は、サイリスタやトランジスタなどのパワー半導体デバイスを使用しており、機械式リレーよりもはるかに高速なスイッチング速度を提供します。**Grove - 2-Channel Solid State Relay**は、高品質な**G3MC202P**モジュールをベースにしており、5VDCで最大240VACを制御することができます。このモジュールは2つのチャンネルを持ち、それぞれを個別に制御することが可能です。Groveインターフェースを利用することで、ArduinoとSSRを非常に便利に使用することができます。

異なる用途に応じて、一連のソリッドステートリレーを用意しています。

[Grove - Solid State Relay V2](https://wiki.seeedstudio.com/ja/Grove-Solid_State_Relay_V2)

Grove - 2-Channel Solid State Relay

[Grove - 4-Channel Solid State Relay](https://wiki.seeedstudio.com/ja/Grove-4-Channel_Solid_State_Relay)

[Grove - 8-Channel Solid State Relay](https://wiki.seeedstudio.com/ja/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 2-Channel Solid State Relay | 初版                                                                                               | 2018年8月      |

## 特徴

- 機械式リレーに対する利点：

  - ソリッドステートリレーは機械式リレーと比較して高速なスイッチング速度を持ち、物理的な接点がないため摩耗しません
  - 完全に静かな動作
  - 物理的な接点がないためスパークが発生せず、爆発性環境で使用可能で、スイッチング中にスパークが発生しないことが重要です
  - 動作回数が多くても、可動部品がなく接点が摩耗したり炭素が蓄積することがないため、寿命が延びます
  - モノブロック構造のコンパクトで薄型のSSRは、PCB、端子、ヒートシンクを一体化したリードフレームを採用しており、機械式リレーよりもはるかに小型で、より多くのチャンネルを統合可能です

- 欠点：

  - クローズ時に高い抵抗（熱を発生）と電気ノイズの増加
  - オープン時に低い抵抗と逆漏れ電流
  - AC負荷にのみ対応

## 仕様

|項目|値|
|---|---|
|動作入力電圧|4~6V|
|定格入力電圧|5V|
|定格負荷電圧|100～240 VAC 50/60 Hz|
|負荷電圧範囲|75～264 VAC 50/60 Hz|
|負荷電流|スイッチごとに0.1～2A|
|漏れ電流|最大1.5mA（200VAC時）|
|絶縁抵抗|最小1,000MΩ（500VDC時）|
|動作時間|負荷電源サイクルの1/2 + 最大1ms|
|リリース時間|負荷電源サイクルの1/2 + 最大1ms|
|保存温度|-30°C～100°C（結露や氷結なし）|
|動作温度|-30°C～80°C（結露や氷結なし）|
|動作湿度|45%～85%RH|
|入力インターフェース|デジタル|
|出力ポート|2ピンのDIPメスブルー端子|
|ゼロクロス|対応|
|認証|UL / CSA|
|サイズ|長さ: 40mm 幅: 40mm 高さ: 23mm|
|重量|16.0g|
|パッケージサイズ|長さ: 115mm 幅: 65mm 高さ: 50mm|
|総重量|138g|

:::note
        **漏れ電流**に注意してください。1.5mAは低消費電力LEDを駆動するのに十分な強さがあるため、リレーがオフの状態でもLEDが微かな光を放つ場合があります。
:::

## 応用例

- 低遅延のスイッチングが必要な操作、例：ステージライトの制御
- 高い安定性が求められるデバイス、例：医療機器、交通信号
- 防爆、防腐、耐湿が必要な状況、例：石炭産業、化学産業

## ハードウェア概要

### ピンマップ

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/pin_map.jpg)

### 回路図

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/schematic_.jpg)

**K1** はリレーモジュールです。**INT+** と **INT-** の間に 5V の電圧が加えられると、リレーがオンになります。その結果、**LOAD1** が **LOAD2** に接続されます。NPN トランジスタ **Q2**（BC817-40）を使用して、**INT+** と **INT-** の間の電圧を制御します。

**CTR1** は Arduino または他のボードからの制御信号です。10k の抵抗 **R7** によってプルダウンされており、信号がない場合、**Q2** の「ゲート」（ポート 1）は 0V になります。この場合、**Q2** はオフになり、**K1** もオフになります。**CTR1** が 5V になると、**Q2** がオンになります。**K1** の **INT-** はシステムの GND に接続され、**INT+** と **INT-** の間に 5V が生じるため、**K1** がオンになり、**LOAD1** が **LOAD2** に接続されます。

:::note
このセクションでは回路図の一部のみを示しています。完全なドキュメントについてはResourcesを参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg)  |

:::caution
上記で示されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊んでみよう

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - 2-Channel Solid State Relay |
|----------------|-------------|-------------------------------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを差し込む際は慎重に行ってください。無理に差し込むとポートを損傷する可能性があります。また、データ転送が可能な4本線のUSBケーブルを使用してください。2本線のケーブルではデータ転送ができません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。

    **2** Groveモジュールを購入すると、Groveケーブルが付属しています。万が一ケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。

    **3** ファンを2つご自身で準備する必要があります。
:::

- **ステップ 1.** Grove - 2-Channel Solid State RelayをGrove-Base Shieldのポート**D2**に接続します。

- **ステップ 2.** ワイヤーを1本切断し、一端をスイッチ1の**LOAD1**に、もう一端をスイッチ1の**LOAD2**に接続します。

- **ステップ 3.** 別のワイヤーを切断し、一端をスイッチ2の**LOAD1**に、もう一端をスイッチ2の**LOAD2**に接続します。

- **ステップ 4.** スイッチ1の**LOAD1**を電源に接続し、スイッチ1の**LOAD2**をファン1に接続します。

- **ステップ 5.** スイッチ2の**LOAD1**を電源に接続し、スイッチ2の**LOAD2**をファン2に接続します。

- **ステップ 6.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 7.** SeeeduinoをMicro-USBケーブルでPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/connect.jpg)

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** Arduino IDEを開き、新しいファイルを作成します。以下のコードをコピーするには、コードブロックの右上隅にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、新しいスケッチに貼り付けてください。

```cpp
#include <Arduino.h>
uint8_t channel1 = 2;
uint8_t channel2 = 3;
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

- **ステップ 2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::tip
    2つのオンボードLEDが交互に点灯・消灯し、2つのファンが交互にオン・オフするのが確認できます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/res/Grove-2-Channel_Solid_State_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 2-Channel Solid State Relay eagle ファイル](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/res/Grove-2-Channel_Solid_State_Relay.zip)
- **[PDF]** [G3MC202P のデータシート](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)

## プロジェクト

こちらはこの製品の紹介ビデオです。簡単なデモも含まれていますので、ぜひお試しください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>