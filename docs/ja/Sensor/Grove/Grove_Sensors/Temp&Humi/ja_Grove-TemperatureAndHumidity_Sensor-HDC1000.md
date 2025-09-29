---
description: Grove - 温度＆湿度センサー (HDC1000)
title: Grove - 温度＆湿度センサー (HDC1000)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-TemperatureAndHumidity_Sensor-HDC1000
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/main.jpg" /></div>

Grove - 温度＆湿度センサー (HDC1000) は HDC1000 センサーを使用しています。HDC1000 は Texas Instruments によって設計されました。このセンサーは統合された温度センサーを備えたデジタル湿度センサーで、非常に低消費電力で優れた測定精度を提供します。このデバイスは新しい容量性センサーに基づいて湿度を測定します。湿度と温度センサーは工場で校正されています。革新的な WLCSP (ウェハレベルチップスケールパッケージ) により、超コンパクトなパッケージを使用して基板設計が簡素化されています。HDC1000 のセンサー要素はデバイスの底部に配置されており、これにより HDC1000 は汚れ、ほこり、その他の環境汚染物質に対してより耐久性があります。HDC1000 は -40°C から +125°C の全温度範囲、および 0-100% RH の範囲内で機能します。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- Grove コネクタ対応
- IIC インターフェース
- 低消費電力
- 広い動作電圧範囲
- I2C シリアルバスアドレス設定

:::tip
Grove モジュールの詳細については [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 仕様

<table border="1" cellspacing="0" width="800">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小値
</th>
<th scope="col">
標準値
</th>
<th scope="col">
最大値
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
供給電圧
</th>
<td>
3
</td>
<td>
/
</td>
<td>
5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
動作電流
</th>
<td>
0.12
</td>
<td>
/
</td>
<td>
90
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
相対湿度精度 (標準値)
</th>
<td>
/
</td>
<td>
±3
</td>
<td>
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
相対湿度動作範囲 (標準値)
</th>
<td>
0
</td>
<td>
/
</td>
<td>
100
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
温度精度
</th>
<td>
/
</td>
<td>
±0.2
</td>
<td>
/
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
温度範囲
</th>
<td>
-40
</td>
<td>
/
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
動作温度範囲
</th>
<td>
-20
</td>
<td>
/
</td>
<td>
85
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
寸法
</th>
<td colspan="3">
40*20
</td>
<td>
mm
</td>
</tr>
</table>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-p3.jpg" /></div>

1. Groveコネクタ。
2. Ready：変換の準備完了。
3. デフォルトアドレス: 0x40。
4. ADDR0, ADDR1: I2Cシリアルバスアドレス設定(0x40, 0x41, 0x42, 0x43)

## はじめに

### Arduinoで遊ぶ

以下は、Grove - 温度＆湿度センサー (HDC1000) をSeeeduino v4.2で使用する方法です。

#### 必要な材料

| Seeeduino V4.2 | ベースシールド | Grove - 温度＆湿度センサー(HDC1000) |
|----------------|----------------|------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

#### ハードウェア

- **ステップ1.** Grove - 温度＆湿度センサー(HDC1000)をGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/connect_arduino.jpg" /></div>

:::note
 Grove Base Shieldがない場合は、以下のようにGrove - 温度＆湿度センサー(HDC1000)をSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove - 温度＆湿度センサー(HDC1000) |
|-----------------|------------------------------------|
| 5V              | 赤                                |
| GND             | 黒                                |
| SDA             | 白                                |
| SCL             | 黄色                              |

#### ソフトウェア

- **ステップ1.** [Seeed DHTライブラリ](https://github.com/Seeed-Studio/HDC1000)をGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。新しいスケッチを開き、以下のコードを新しいスケッチにコピーします。

```cpp
/*
 * HDC1000.h
 * HDC1000用ライブラリ 1.0
 *
 * 著作権 (c) 2015 seeed technology inc.
 * 作成者     : Pillar Zuo (baozhu.zuo@seeed.cc)
 * 作成日時   : 2015年4月
 * 変更履歴   :
 *
 * MITライセンス (MIT)
 *
 * このソフトウェアおよび関連文書ファイル（「ソフトウェア」）のコピーを取得するすべての人に、
 * 以下の条件に従ってソフトウェアを使用、コピー、変更、統合、公開、配布、サブライセンス、
 * または販売する権利を無償で許可します。
 *
 * 上記の著作権表示およびこの許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。
 *
 * このソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。
 * 商品性、特定目的への適合性、および非侵害性に関する保証を含みますが、これに限定されません。
 * 著者または著作権者は、契約、不法行為、またはその他の理由により、
 * ソフトウェアの使用またはその他の取引に関連して発生するいかなる請求、損害、またはその他の責任についても責任を負いません。
 */

#include <Wire.h>
#include <HDC1000.h>
 
HDC1000 mySensor;
//HDC1000 mySensor(0x41, 2) <-- DRDYnが有効でArduinoピン2に接続されている場合（より高速な測定が可能）。
 
void setup(){
 Serial.begin(9600);
 mySensor.begin();
}
 
void loop(){
 Serial.print("温度: ");
 Serial.print(mySensor.getTemp()); 
 Serial.print("C, 湿度: ");     
 Serial.print(mySensor.getHumi());
 Serial.println("%");
 delay(1000);
}
```

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ5.** Arduino IDEの**シリアルモニター**を開きます。**ツール->シリアルモニター**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**9600**に設定します。すべてが正常に動作していれば、結果が表示されます。

結果は以下のようになります：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/result.png" /></div>

:::tip
        結果が安定するまでに少し時間がかかる場合があります。
:::

### Raspberry Piで遊ぶ

#### ハードウェア

**必要な材料**

| Raspberry Pi | GrovePi_Plus | 温度＆湿度センサー Pro |
|--------------|--------------|-----------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html" target="_blank">今すぐ購入</a>|

- **ステップ 1.** GrovePi_Plus を Raspberry に接続します。

- **ステップ 2.** このセンサーを GrovePi_Plus の **I2C** ポートに接続します。

- **ステップ 3.** Raspberry を USB ケーブルで PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/pi_connect.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。

- **ステップ 2.** [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) に従って、GrovePi の最新ファームウェアを更新します。

:::tip
この Wiki では、パス **~/GrovePi/** を **/home/pi/Desktop/GrovePi** の代わりに使用しています。ステップ 2 とステップ 3 で同じパスを使用する必要があります。
:::

:::note
ファームウェアを更新することを強くお勧めします。一部のセンサーでは、更新しないとエラーが発生する可能性があります。
:::

:::caution
**Raspberry Pi with Raspberrypi OS >= Bullseye** を使用している場合、**Python3 のみ**で以下のコマンドを使用する必要があります。
:::

- **ステップ 3.** GitHub リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 4.** 以下のコマンドを実行して値を取得します。

```
cd ~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000
sudo python3 grove_hdc_1000_example.py
```

結果は以下のようになります：

```python
pi@raspberrypi:~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000$ sudo python3 grove_hdc_1000_example.py 
Temp    : 27.94 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.21 %
-----------------
Temp    : 29.23 C
Humidity: 78.82 %
-----------------
Temp    : 29.23 C
Humidity: 78.82 %
-----------------
Temp    : 29.23 C
Humidity: 78.43 %
-----------------
Temp    : 29.23 C
Humidity: 78.04 %
-----------------
Temp    : 29.23 C
Humidity: 77.65 %
-----------------
Temp    : 29.23 C
Humidity: 77.65 %
-----------------
```

コードを確認したい場合は、以下のコマンドを使用してください：

```
sudo nano grove_hdc_1000_example.py
```

### Launchpad を使用する場合

#### 必要な材料

- TI MSP430FR4133 LaunchPad × 1
- USB ケーブル（タイプ A からミニタイプ B）× 1
- [Grove - 4 ピンメスジャンパーから Grove 4 ピン変換ケーブル](https://www.seeedstudio.com/depot/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck-p-1020.html) × 1
- [Grove - 温度＆湿度センサー (HDC1000)](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125) × 1

#### ハードウェア接続

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_connections-with_launchpad-2400_s.JPG" /></div>

#### コードをダウンロードして Launchpad に書き込む

1. [デモコード](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000-HDC1000_energia.zip) をダウンロードします。

  <div className="admonition note">
  <p className="admonition-title">注意</p>
  ファイル <span style={{fontStyle: 'italic'}}>readTempHumi.ino</span>（フォルダ <span style={{fontStyle: 'italic'}}>examples</span> 内）を <span style={{fontStyle: 'italic'}}>HDC1000.h</span> と同じフォルダにコピーする必要があります。
</div>

2. コードを Launchpad に書き込みます。

3. *シリアルモニター*（**ツール** -> **シリアルモニター**）を開いて、検出されたデータを確認します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_result-with_launchpad-600.png" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip)
- **[Pdf]** [Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch.pdf](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch.pdf)
- **[Library]** [デモコード](https://github.com/Seeed-Studio/HDC1000)
- **[Datasheet]** [HDC1000_DataSheet.pdf](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Temperature&Humidity_Sensor_(HDC1000) から作成されました -->

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