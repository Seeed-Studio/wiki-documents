---
title: Grove - 調整可能なPIRモーションセンサー
nointro:
keywords:
  - ドキュメント
  - ドキュサウラス
image: https://wiki.seeedstudio.com/ja/Grove-Adjustable_PIR_Motion_Sensor/
slug: /ja/Grove-Adjustable_PIR_Motion_Sensor
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/main.jpg)

Grove - 調整可能なPIRモーションセンサーは、使いやすい受動型赤外線モーションセンサーで、最大3メートルまで赤外線物体の動きを検知することができます。検知範囲内で赤外線物体が動くと、センサーはSIGピンでHIGHを出力します。また、ポテンショメーターを使用してSIG HIGHの時間を最大130秒まで調整することができ、さらに別のポテンショメーターを使用して検知範囲を調整することも可能です。

<iframe width={800} height={450} src="https://www.youtube.com/embed/EhZ7uDvoALE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Adjustable-PIR-Motion-Sensor-p-3225.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 調整可能なPIRモーションセンサー | 初期リリース                                                                                               | 2018年9月      |

## 特徴

- 内蔵フィルター、高いRFI耐性
- 出力時間、感度、検知範囲の調整可能
- 低電圧、低消費電力

## 仕様

<div>
  |項目|値|
  |---|---|
  |動作電圧|3.3V / 5V|
  |動作温度|-30℃ ~ 70℃|
  |視野角|水平配置 80°<br />垂直配置 55°|
  |検知スペクトル応答(λ)|5nm ~ 14nm|
  |検知距離|0 ~ 3m|
  |HIGHレベルオン時間| &lt;130秒|
  |インターフェース|デジタル|
  |サイズ|長さ: 40mm 幅: 20mm 高さ: 15mm|
  |重量|4.5g|
  |パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 15mm|
  |総重量|10g|
</div>

## 典型的な用途

- PIRモーション検知
- 侵入者検知
- 占有検知
- モーションセンサーライト
- セキュリティシステム
- 自動制御

## ハードウェア概要

### ピン配置

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/pinout_back.jpg)

:::warning
  モジュールに装備されているフレネルレンズはプラスチック製であり、高温や裸火に近づけることは禁止されています。
:::

### 回路図

**電源**

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/11.jpg)

L221Dの典型的な電圧は3.3Vであるため、安定した3.3Vを提供するために[XC6206P332MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)チップを使用しています。XC6206P33の入力範囲は1.8Vから6.0Vまでなので、このモジュールはArduinoで3.3Vおよび5Vの両方で使用することができます。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield |調整可能なPIRモーションセンサー | Grove - 青色LED |
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/led.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Adjustable-PIR-Motion-Sensor-p-3225.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html" target="_blank">今すぐ購入</a>

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove - 調整可能なPIRモーションセンサーをGrove-Base Shieldのポート**D2**に接続し、Grove - 青色LEDをGrove-Base Shieldの**D4**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/connect.jpg)

:::note
        Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove - 調整可能なPIRモーションセンサー |
|--------------- |--------------------|-----|
| GND            | 黒色              | GND |
| 5Vまたは3.3V     | 赤色                | VCC |
| 接続なし            | 白色              | NC |
| D2           | 黄色             | SIG |

| Seeeduino      |  Groveケーブル       | Grove - 青色LED |
|--------------- |--------------------|-----|
| GND            | 黒色              | GND |
| 5Vまたは3.3V     | 赤色                | VCC |
| 接続なし            | 白色              | NC |
| D4           | 黄色             | SIG |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

- **ステップ1.** 以下のコードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、コードをコピーし、Arduino IDEの新しいスケッチに貼り付けます。

```cpp
/*PIRモーションセンサーのピンとLEDピンのマクロ定義*/
#define PIR_MOTION_SENSOR 2//モジュールからの信号を受信するためにピン2を使用
#define LED 4//Grove - LEDはArduinoのD4に接続されています

void setup()
{
 pinsInit();
}

void loop() 
{
 if(isPeopleDetected())//動いている人を検出した場合
  turnOnLED();
 else
  turnOffLED();
}
void pinsInit()
{
 pinMode(PIR_MOTION_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
/***************************************************************/
/*関数: 検出範囲内で誰かが動いているかどうかを検出する*/
/*戻り値: -boolean型、trueは誰かが検出されたことを示す*/
boolean isPeopleDetected()
{
 int sensorValue = digitalRead(PIR_MOTION_SENSOR);
 if(sensorValue == HIGH)//センサー値がHIGHの場合
 {
  return true;//はい、trueを返す
 }
 else
 {
  return false;//いいえ、falseを返す
 }
}
```

- **ステップ2.** デモコードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

:::success
     すべてが正常に動作すれば、センサーに誰かが近づいたり、手を近づけたりすると、LEDが点灯します。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Grove%20-%20Adjustable%20PIR%20Motion%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Adjustable PIR Motion Sensor Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Grove%20-%20Adjustable%20PIR%20Motion%20Sensor.zip)

- **[PDF]** [データシート L221D](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Mini%20SMD%20Digital%20Pyroelectric%20Infrared%20Sensors.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>