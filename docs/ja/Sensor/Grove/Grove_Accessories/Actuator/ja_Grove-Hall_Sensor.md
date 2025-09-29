---
description: Grove - ホールセンサー
title: Grove - ホールセンサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Hall_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - ホールセンサー
category: センサー
bzurl: https://seeedstudio.com/Grove-Hall-Sensor-p-965.html
oldwikiname: Grove_-_Hall_Sensor
prodimagename: Grove-Hall_Sensor_New.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/hall sensor.jpg
surveyurl: https://www.research.net/r/Grove-Hall_Sensor
sku: 101020046
tags: grove_digital, io_5v, plat_duino, plat_linkit
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New.jpg)

ホールセンサーはホール効果に基づいており、これは電気導体内の電流とそれに垂直な磁場によって、導体内で電圧差が生じる現象です。この Grove には連続動作型スイッチが搭載されています。このデバイスの出力は、ホールセンサーに垂直な磁場（南極性）が動作点閾値 BOP を超えると低（オン）に切り替わり、磁場が消失すると高（オフ）に切り替わります。この Twig は RPM を測定するために使用できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)

## バージョントラッカー

| リビジョン | 説明                     | リリース日       |
|------------|--------------------------|------------------|
| Grove - Hall Sensor v0.9b | 初回公開リリース         | 2011年10月3日 |

## 特徴

- Grove互換インターフェース
- 上昇および下降の遷移期間が400ns
- 連続動作型ホール効果センサー
- 逆バッテリー保護

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

| 項目                   | 最小値 | 標準値   | 最大値 | 単位  |
|------------------------|--------|----------|--------|-------|
| 電源電圧              | 3.8    | 5.0      | 24     | V     |
| 電源電流              | 4.1    | -        | 24     | mA    |
| 動作温度              | -40    | -        | 85     | ºC    |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## アプリケーションアイデア

- RPMメーター
- シンプルなDCモーター

## はじめに

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

### Arduinoで遊ぶ

#### デモンストレーション

Hallセンサーは、Arduino/Seeeduinoで利用可能な外部割り込みを使用して動作します。この例では、デジタルピン2にある割り込み0を使用しています。他の割り込みについては、[attachInterrupt()](https://arduino.cc/en/Reference/AttachInterrupt)をご覧ください。

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove - Hall Sensor |
|----------------|-------------|---------------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New%20_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)|

- **ステップ2.** Grove - Hall SensorをGrove-Base ShieldのポートD2に接続します。
- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

:::note
Grove Base Shieldがない場合は、以下のようにGrove - Hall SensorをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove - Hall Sensor |
|-----------------|---------------------|
| 5V             | 赤                  |
| GND            | 黒                  |
| 接続なし       | 白                  |
| D2             | 黄色                |

#### ソフトウェア

- **ステップ1.** [Hall Sensorコード](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)をダウンロードします。

- **ステップ2.** 2つのコードのうち1つを開きます。例えば、デモ**MagnetControlLED**。

- **ステップ3.** コードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
/****************************************************************************/ 
// 機能: 南極が上向きの磁石がオンボードセンサーに近づくと、
//       LEDが点灯します。それ以外の場合はLEDが消灯します。
// ハードウェア: Grove - Hall Sensor, Grove - LED
// Arduino IDE: Arduino-1.0
// 作成者: FrankieChu  
// 日付: 2013年1月20日
// バージョン: v1.0
// by www.seeedstudio.com
//
// このライブラリはフリーソフトウェアです。再配布および/または
// 修正は、GNU Lesser General Public Licenseのバージョン2.1または
// それ以降のバージョンの条件に従って行うことができます。
//
// このライブラリは有用であることを願って配布されていますが、
// 商品性や特定の目的への適合性に関する保証はありません。
// 詳細についてはGNU Lesser General Public Licenseをご覧ください。
//
// このライブラリとともにGNU Lesser General Public Licenseのコピーを
// 受け取ったはずです。受け取っていない場合は、以下に書面で
// お問い合わせください:
// Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
//
/*磁気ピンとLEDピンのマクロ定義*/
#define HALL_SENSOR 2
#define LED 4 // Grove - LEDはArduinoのD4に接続されています

void setup()
{
  pinsInit();
}
 
void loop() 
{
 if(isNearMagnet()) // Hallセンサーが磁石に近い場合
 {
  turnOnLED();
 }
 else
 {
  turnOffLED();
 }
}
void pinsInit()
{
 pinMode(HALL_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}

/*Hallセンサーが南極が上向きの磁石に近い場合、trueを返します。*/
/*それ以外の場合はfalseを返します。*/
boolean isNearMagnet()
{
 int sensorValue = digitalRead(HALL_SENSOR);
 if(sensorValue == LOW) // センサー値がLOWの場合
 {
  return true; // はい、trueを返します
 }
 else
 {
  return false; // いいえ、falseを返します
 }
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
```

- **ステップ4.** 南極が上向きの磁石がオンボードセンサーに近づくと、LEDが点灯します。それ以外の場合はLEDが消灯します。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - Hall SensorをポートD2に接続し、Grove - Red LEDをBase ShieldのポートD4に接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[ArduinoでのCodecraft使用ガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)もご覧ください。
:::

**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/cc_Hall_Sensor.png)

Arduino/Seeeduinoにプログラムをアップロードします。

:::tip
コードのアップロードが完了すると、Hall Sensorが磁場の変化を検出した際にLEDが点灯します。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove-Hall Sensor 回路図](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip)

- **[デモ]** [ホールセンサーデモコード](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)

- **[データシート]** [A1101 データシート](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/datasheet.pdf)

- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove_Hall_Sensor_CDC_File.zip)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_Hall_Sensor から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>