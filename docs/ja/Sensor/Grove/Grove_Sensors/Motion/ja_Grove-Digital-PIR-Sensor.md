---
description: Grove - デジタル PIR センサー
title: Grove - デジタル PIR センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Digital-PIR-Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- 
![](https://files.seeedstudio.com/products/101020793/img/101020793wiki.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki.png" alt="pir" width={600} height="auto" /></p>


PIR センサーは、人間の動きを検知するための赤外線センサーです。この Grove デジタル PIR センサーは、PIR ファミリーの中で最も安価なセンサーですが、迅速な応答を提供し、「sig」ピンから高信号を生成することができます。

Grove インターフェースを使用することで、Grove デジタル PIR センサーは簡単に接続して使用することができます。また、Arduino ライブラリを必要としません。

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## 特徴

- 低価格：3ドル未満
- 直感的：動きを検知し、「高」と「低」のデジタル信号のみで出力
- シンプル：外部 Arduino ライブラリ不要
- インターフェース：Grove

## 仕様

|項目|値|
|---|---|
|電圧範囲|3V–5V|
|検知角度|100度|
|検知距離|3.2m-12m|
|応答時間|< 1秒|
|動作温度|-20〜85°C|
|インターフェース|Grove|
|寸法|20mm * 20mm * 11.5mm|
|重量|3g|
|バッテリー|含まない|

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

### Arduinoでの開始方法

#### 必要な材料

|Seeeduino XIAO|Grove Breadboard|Grove Digital PIR Motion Sensor|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki210x157.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)|

#### ハードウェア接続

<!-- ![](https://files.seeedstudio.com/products/101020793/img/Hardware_Connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/Hardware_Connection.jpg" alt="pir" width={600} height="auto" /></p>

Groveケーブルを使用して、ブレッドボード上のGroveインターフェースとGroveデジタルPIRセンサーを接続します。

#### ソフトウェア
- **ステップ1** 以下のコードをArduino IDEにコピーしてアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。
```cpp
#define digital_pir_sensor 5 // Pin 5に接続

void setup()
{
  Serial.begin(9600);  // ボーレートを9600に設定
  pinMode(digital_pir_sensor,INPUT); // ピンモードを入力に設定
}

void loop()
{
  bool state = digitalRead(digital_pir_sensor); // PIRセンサーから読み取り
  if (state == 1)
  Serial.println("動きが検出されました");  // 応答がある場合
  else
  Serial.println("何も起こりませんでした");  // PIRセンサーから離れている場合
}
```
- **ステップ2** シリアルポートを開き、PIRセンサーの周囲で動きがあると値が変化するのが確認できます。

### Raspberry Piでの開始方法

#### 必要な材料

|Raspberry Pi 4B(4GB)|Grove Base Hat for Raspberry Pi|Grove Digital PIR Motion Sensor|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki210x157.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)|

#### ハードウェア接続

<!-- ![](https://files.seeedstudio.com/products/101020793/img/pi_PIR_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/pi_PIR_demo.jpg" alt="pir" width={600} height="auto" /></p>

PIRセンサーをGrove Base Hatの「D5」に接続します。

#### コード
- **ステップ1** Raspberry Piのシステムバージョンを更新します。
```
sudo apt-get update
```
- **ステップ2** wiringPiをインストールします。
```
sudo pip install wiringPi
```
Pi 4を使用している場合は、wiringPiのバージョンを選択してください。
```
sudo pip install wiringPi==2.52.0
```
- **ステップ3** 接続している正しいピンを確認します。
```
gpio readall
```
ここでテーブルが表示されます。Pin 5のwiring定義でのピン定義を見つけます。このデモでは、ピン定義は21です。
```
gpio read 21
```
PIRセンサーから値を読み取ることができます。動きがある場合、値は「1」、それ以外の場合は「0」です。

## 回路図オンラインビューア
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/101020793/document/Grove_Digital_PIR_Motion_Sensor_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [BS312 仕様書](https://files.seeedstudio.com/products/101020793/document/BS312规格书.pdf)
- **[PDF]** [ハードウェア回路図](https://files.seeedstudio.com/products/101020793/document/Hardware_Schematic_SCH.pdf)

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>