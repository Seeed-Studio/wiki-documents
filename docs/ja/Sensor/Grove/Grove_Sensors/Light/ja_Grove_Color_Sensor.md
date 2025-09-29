---
description: Grove - カラーセンサー V3.0 - I2C インターフェース - VEML6040 ベース
title: Grove-カラーセンサー V3.0 - I2C インターフェース
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove_Color/top.jpg 
slug: /ja/grove_color_sensor_v3_0_iic
last_update:
  date: 05/15/2025
  author: Jason
---


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove_Color/top.jpg" /></div>

## 説明

このセンサーは、周囲光の色度や物体の色を測定するためのものです。同期入力ピンを使用することで、外部のパルス光源が正確な同期変換制御を提供できます。

## 特徴
- **色検出**: 赤、緑、青、および白色光成分を測定します。
- **I2Cインターフェース**: I2Cを介してマイクロコントローラーと簡単に統合可能。
- **電源電圧**: 3.3Vまたは5Vで動作。
- **同期機能**: 外部のパルス光源と連携して正確な測定が可能。
- **コンパクト設計**: 小型でさまざまなプロジェクトに簡単に統合可能。
- **低消費電力**: バッテリー駆動デバイスに最適。

## 仕様

| パラメータ                  | 値/範囲                                                   |
|----------------------------|-----------------------------------------------------------|
| 色チャンネル               | 赤、緑、青、クリア（白）                                   |
| 電源電圧                   | 3.3V ～ 5V                                                |
| インターフェース           | I2C                                                       |
| 解像度                     | 16ビットのカラーデータ出力                                 |
| 動作温度範囲               | -40°C ～ +85°C                                            |
| 消費電流                   | 200μA                                                     |
| 選択可能な最大検出範囲     | 515.4、1031、2062、4124、8248、または16,496 lux（最高感度0.007865 lux/ステップ）|

## はじめに

### 配線図
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Grove_Color/22222.png" /></div>

### ハードウェア

**ステップ 1. 以下のものを準備してください:**

- _Arduinoで遊ぶ_

| Seeeduino V4.2 | ベースシールド | Grove - カラーセンサー V3.0 |
|----------------|----------------|-----------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _GroveをArduinoに接続_

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/0.png" /></div>

- _XIAO ESP32シリーズで遊ぶ_

| Seeed Studio Grove Base for XIAO | XIAO ESP32-S3 | Grove - カラーセンサー V3.0 |
|------------------------------------------|-------------------|-----------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[今すぐ購入](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _GroveをXIAO ESP32S3に接続_

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/1.png" /></div>

2つの異なる組み合わせですが、同じコードを使用します。

### ソフトウェア

- ステップ 1. ライブラリをダウンロード

[VEML6040](https://files.seeedstudio.com/wiki/Grove_Color/VEML6040.zip") ライブラリをインストールします。

- ステップ 2. Arduino IDEにコードをコピーしてアップロードします。

```c
#include "Wire.h"
#include "veml6040.h"

VEML6040 RGBWSensor;

void setup() {
  Serial.begin(9600);
  Wire.begin(); 
  if(!RGBWSensor.begin()) {
    Serial.println("エラー: センサーを検出できませんでした");
    while(1){}
  }
   
	RGBWSensor.setConfiguration(VEML6040_IT_320MS + VEML6040_AF_AUTO + VEML6040_SD_ENABLE);
	
  delay(1500);
  Serial.println("Vishay VEML6040 RGBW カラーセンサー自動モード例");
  Serial.println("CCT: 相関色温度（単位: K）");
  Serial.println("AL: 周囲光（単位: lux）");
  delay(1500);
}

void loop() {
  Serial.print("赤: ");
  Serial.print(RGBWSensor.getRed());  
  Serial.print(" 緑: ");
  Serial.print(RGBWSensor.getGreen());  
  Serial.print(" 青: ");
  Serial.print(RGBWSensor.getBlue());  
  Serial.print(" 白: ");
  Serial.print(RGBWSensor.getWhite()); 
  Serial.print(" CCT: ");
  Serial.print(RGBWSensor.getCCT());  
  Serial.print(" AL: ");
  Serial.println(RGBWSensor.getAmbientLight()); 
  delay(400);
}
```

- ステップ 3. シリアルポートを開いて出力内容を確認します。

センサーを白いエリアに置いた場合、シリアルポートを開くとWHITEの値が最も高いことが確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/12.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/4.png" /></div>

## リソース

* **[回路図]** [Grove_Color_Sensor リファレンス情報](https://files.seeedstudio.com/wiki/Grove_Color/SCH.pdf)
* **[データシート]** [VISHAY_VEML6040A3OG_Datasheet.PDF](https://files.seeedstudio.com/wiki/Grove_Color/314020801_VISHAY_VEML6040A3OG_Datasheet.pdf)



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a></div>