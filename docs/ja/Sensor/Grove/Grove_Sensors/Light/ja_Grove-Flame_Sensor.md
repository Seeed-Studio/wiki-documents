---
description: Grove - 炎センサー
title: Grove - 炎センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Flame_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Flame_Sensor_01.jpg" /></div>

Grove - 炎センサーは、火源や波長範囲が760nm～1100nmの他の光源を検出するために使用できます。このセンサーは、高速かつ高感度なNPNシリコンフォトトランジスタであるYG1006センサーをベースにしています。黒いエポキシ樹脂により、このセンサーは赤外線に対して感度が高くなっています。消防ロボットゲームでは、このセンサーは非常に重要な役割を果たし、ロボットの目として火源を見つけるために使用されます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## 特徴

- Groveインターフェース
- 高い光感度
- 高速応答時間
- 簡単に使用可能
- 感度調整可能

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小
</th>
<th scope="col">
標準
</th>
<th scope="col">
最大
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
電圧
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.30
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
電流
</th>
<td>
/
</td>
<td>
20
</td>
<td>
/
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
スペクトル帯域幅の範囲
</th>
<td>
760
</td>
<td>
940
</td>
<td>
1100
</td>
<td>
nm
</td>
</tr>
<tr align="center">
<th scope="row">
検出範囲
</th>
<td>
0
</td>
<td>
~
</td>
<td>
1
</td>
<td>
m
</td>
</tr>
<tr align="center">
<th scope="row">
応答時間
</th>
<td colspan="3">
15
</td>
<td>
μS
</td>
</tr>
<tr align="center">
<th scope="row">
動作温度
</th>
<td>
-25
</td>
<td>
~
</td>
<td>
85
</td>
<td>
℃
</td>
</tr>
</table>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

このモジュールは主に赤外線を検出するために使用されます。コンパレータ出力を介してデジタル信号 0 と 1 を出力します。赤外線が検出されると出力値は 0 になります。また、精密ポテンショメータによって感度を調整することができます。

### Arduinoで遊ぶ

このモジュールは主に赤外線を検出するために使用されます。コンパレータ出力を介してデジタル信号 0 と 1 を出力します。赤外線が検出されると出力値は 0 になります。また、精密ポテンショメータによって感度を調整することができます。

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備してください:

| Seeeduino V4.2 | Base Shield | Grove-Flame_Sensor | Grove - Red LED |
|----------------|-------------|---------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)|[今すぐ購入](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- **ステップ 2.** Grove-Flame_Sensor を Grove-Base Shield のポート **D2** に接続します。
- **ステップ 3.** Grove - Red LED を Grove-Base Shield のポート **D3** に接続します。
- **ステップ 4.** Grove - Base Shield を Seeeduino に差し込みます。
- **ステップ 5.** USBケーブルを使用して Seeeduino をPCに接続します。

<!--リンク-->
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_ardu.jpg" /></div>

:::note
Grove Base Shield がない場合は、以下のように直接このモジュールを Seeeduino に接続することもできます。
:::

| Seeeduino       | Grove-Flame_Sensor  |
|-----------------|---------------------|
| 5V             | 赤                  |
| GND            | 黒                  |
| 接続なし       | 白                  |
| D2             | 黄色                |

| Seeeduino       | Grove - Red LED    |
|-----------------|---------------------|
| 5V             | 赤                  |
| GND            | 黒                  |
| 接続なし       | 白                  |
| D3             | 黄色                |

#### ソフトウェア

**ステップ 1.** 以下のコードをコピーしてコントローラボードに書き込んでください。

以下はコードです:

```c
    /******************************************************************************/

#define FLAME_SENSOR 2 // センサーをデジタルピン2に接続
#define LED 3 // Grove - LED をピン3に接続

void setup()
{
    pinsInit();
}
void loop()
{
    if(isFlameDetected())
    turnOnLED();
    else turnOffLED();
}
    /********************************/
void pinsInit()
{
    pinMode(FLAME_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
    digitalWrite(LED,LOW);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
boolean isFlameDetected()
{
    if(digitalRead(FLAME_SENSOR))
    return false;
    else return true;
}
```

**ステップ 2.** 赤外線がある場合、LEDが点灯します。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Flame Sensor をポート D2 に接続し、Grove - Red LED を Base Shield のポート D3 に接続します。

**ステップ 2.** Base Shield を Seeeduino/Arduino に差し込みます。

**ステップ 3.** USBケーブルを使用して Seeeduino/Arduino をPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/) を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[Codecraftを使用したArduinoガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開いてください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/cc_Flame_Sensor.png" /></div>

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
コードのアップロードが完了すると、Flame Sensorが炎を検出したときにLEDが点灯します。
:::

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備してください:

| Raspberry Pi | GrovePi_Plus | Grove-Flame_Sensor |
|--------------|--------------|--------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry に差し込みます。
- **ステップ 3.** Grove-Flame_Sensor を GrovePi_Plus の **D2** ポートに接続します。
- **ステップ 4.** USBケーブルを使用して Raspberry をPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_rpi.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構成します。
- **ステップ 2.** GitHubリポジトリをクローンします。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行してこのセンサーを使用します。

```bash
cd ~/GrovePi/Software/Python
python grove_flame_sensor.py
```

以下は例のコードです:

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Flame Sensor (https://www.seeedstudio.com/wiki/Grove_-_Flame_Sensor)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## ライセンス
MITライセンス (MIT)
Raspberry Pi用GrovePi: GroveセンサーをRaspberry Piに接続するためのオープンプラットフォーム。
Copyright (C) 2017 Dexter Industries
このソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）のコピーを取得したすべての人に対し、以下の条件に従い、ソフトウェアを制限なく使用、コピー、変更、公開、配布、サブライセンス、または販売する権利を無償で許可します。
上記の著作権表示およびこの許可通知は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。
このソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。商品性、特定目的への適合性、および非侵害性を含むがこれらに限定されない保証はありません。いかなる場合も、著者または著作権者は、契約、不法行為、またはその他の理由に基づく請求、損害賠償、またはその他の責任について責任を負いません。
'''
import time
import grovepi

# Grove Flame Sensor をデジタルポート D2 に接続
# SIG,NC,VCC,GND
flame_sensor = 2

grovepi.pinMode(flame_sensor,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(flame_sensor))
        time.sleep(.5)

    except IOError:
        print ("エラー")
```

## 参考資料

このセンサーは、波長が760nmから1100nmの範囲にある光源を検出することができます。以下の画像は、スペクトル感度を示しています。
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Spectral_Sensitive.jpg" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove - Flame Sensor Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip)
- **[ライブラリ]** [Grove_Flame_Sensor ライブラリのGithubリポジトリ](https://github.com/Seeed-Studio/Grove_Flame_Sensor)
- **[データシート]** [LM293D データシート](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/LM293D.pdf)
- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove_Flame_Sensor_CDC_File.zip)

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢です。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには、最新のSenseCAP S210xをお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>