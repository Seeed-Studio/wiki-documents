---
description: Grove - 振動センサー(SW-420)
title: Grove - 振動センサー(SW-420)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Vibration_Sensor_SW-420
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 振動センサー (SW-420) は、高感度の非方向性振動センサーです。モジュールが安定している場合、回路はオンになり、出力は高になります。動きや振動が発生すると、回路が一時的に切断され、出力が低になります。同時に、必要に応じて感度を調整することもできます。

総じて、これは振動や傾きを検知するための完璧なモジュールです。


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html)

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 振動センサー (SW-420) | 初期リリース                                                                                               | 2018年9月      |

## 特徴

- 非方向性
- 高感度
- 振動や傾きに反応
- 防水性
- 耐圧性

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|インターフェース|デジタル|
|サイズ|長さ: 40mm 幅: 20mm 高さ: 10mm| 
|重量|4.3g|
|パッケージサイズ|長さ: 140mm 幅: 85mm 高さ: 10mm|
|総重量|10g|

## 応用例

- 車、自転車、オートバイの防犯アラーム
- ゲームコントロール
- 振動検知

## ハードウェア概要

### ピンマップ

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/pin_map.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>


### 回路図

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/Schematic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/Schematic.jpg" alt="pir" width={600} height="auto" /></p>


まず、左下隅にある **SW1** から始めましょう。実際には、**SW1** は振動モジュール **SW-420** です。モジュールが安定状態にある場合、モジュールはオンになります。**U1A** の **Pin2** は **SW1** を通じて **GND** に接続されています。

**VR1** はポテンショメータであり、ポテンショメータの **Pin2** は **U1A** の **Pin3** に接続されています。

**U1A** は [コンパレータ](https://en.wikipedia.org/wiki/Comparator) です。コンパレータの場合、以下のようになります：

```
V_out =
{
  High,  if V+ > V-
  Low,   if V+ < V-
}
```

**V+** は **Pin3** に接続され、**V-** は **Pin2** に接続され、**V<sub>out</sub>** は **Pin1** に接続されています。

**V+** はポテンショメータを回転させることで調整できます。例えば、VCC/2 に設定することができます。

**V-** は **SW1(SW-420)** に依存します：

- モジュールが安定状態にある場合、**SW1** はオンになり、**U1A** の **Pin2** は **SW1** を通じて **GND** に接続されます。この場合：

```
V- = 0V
V+ = VCC/2
=> V_out = High
```


- モジュールが振動または傾いた場合、**SW1** はオフになり、**V-** の電圧は **R1** を通じて **VCC** によって引き上げられます。**V-** が VCC/2 より高くなると、次のようになります：

```
V- > VCC/2
V+ = VCC/2
=> V_out = Low
```


これで **V+** を設定して感度を調整できます。覚えておいてください：**V+** の電圧が低いほど、感度が高くなります😆

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - 振動センサー|Grove - ブザー|
|--------------|-------------|-----------------|----|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove - 振動センサー（SW-420）をBase Shieldの**D2**ポートに接続します。

- **ステップ2.** Grove - ブザーをBase Shieldの**D3**ポートに接続します。

- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/connect.JPG" alt="pir" width={600} height="auto" /></p>

:::note
        Grove Base Shieldがない場合は、以下のように直接このモジュールをSeeeduinoに接続することもできます。
:::

| Seeeduino     |  Grove - 振動センサー         |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| NC           | 白                    |
| D2           | 黄                   |

| Seeeduino     |  Grove - ブザー         |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| NC           | 白                    |
| D3           | 黄                   |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** Arduino IDEを開き、新しいスケッチを開始します。

- **ステップ2.** 以下のコードをすべてコピーするか、コードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、新しいスケッチにコードをコピーしてください。

```cpp
// 定数は変更されません。ここではピン番号を設定するために使用されます:
const int buttonPin = 2;     // プッシュボタンのピン番号
const int buzzer =  3;      // ブザーのピン番号

// 変数は変更されます:
int buttonState = 0;         // プッシュボタンの状態を読み取るための変数

void setup() {
  // LEDピンを出力として初期化:
  pinMode(buzzer, OUTPUT);
  // プッシュボタンピンを入力として初期化:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // プッシュボタンの状態を読み取る:
  buttonState = digitalRead(buttonPin);

  // プッシュボタンが押されているか確認します。押されている場合、buttonStateはHIGHです:
  if (buttonState == HIGH) {
    // LEDをオンにする:
    digitalWrite(buzzer, LOW);
  } else {
    // LEDをオフにする:
    digitalWrite(buzzer, HIGH);
  }
}
```

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

:::success
    すべてが正常に動作すれば、Grove - 振動センサーを動かしたり、揺らしたり、傾けたりするたびに、Grove - ブザーが鳴ります。
:::

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - 振動センサーをポートD2に接続し、Grove - ブザーをBase ShieldのポートD3に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[Arduinoを使用したCodecraftガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)もご覧ください。
:::

**ステップ 2.** 下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/cc_Vibration_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/cc_Vibration_Sensor.png" alt="pir" width={600} height="auto" /></p>

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、振動センサーが振動を検知した際にブザーが鳴ります。
:::

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove%20-%20Vibration%20Sensor%20(SW-420)%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 振動センサー (SW-420) eagleファイル](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove%20-%20Vibration%20Sensor%20(SW-420)%20v1.1.zip)
- **[Codecraft]** [CDCファイル](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove_Vibration_Sensor_CDC_File.zip)

## プロジェクト

この製品の紹介動画と簡単なデモです。ぜひお試しください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/oFmvKxoZIuw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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