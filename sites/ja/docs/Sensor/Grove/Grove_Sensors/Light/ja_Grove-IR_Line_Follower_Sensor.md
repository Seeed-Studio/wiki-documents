---
description: Grove - Follower V3.0
title: Grove-IR Line Follower Sensor V3.0 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/top.jpg
slug: /ja/grove_line_follower
last_update:
  date: 05/15/2025
  author: Jason
---


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/top.jpg" /></div>


## 説明

このセンサーはラインフォローロボットでの使用を目的として設計されています。2つのIR LEDと2つのIR感光フォトトランジスタを備えています。基板上の目のように見えるセンサーは実際にはIR LEDと感光フォトトランジスタです。フォトトランジスタがIR LEDから反射された赤外線を検出すると、デジタル信号を出力し、その信号は高から低に変化します。


## 特徴
- 高速応答時間
- 高い解析能力
- 可視波長カットオフ λp=940nm
- 調整可能なポテンショメータとインジケータLED
- デュアル検出機能

                                                                                                                                     
## 仕様

| パラメータ                  | 値/範囲                                                   |
|----------------------------|---------------------------------------------------------------|
| 電源電圧                   |  3.3V ～ 5V                                                   |
| インターフェース            | デジタル                                                       |
| 消費電流                   | 50mA                                                           |
| 動作温度範囲               | -40°C ～ +85°C                                                |


## はじめに

### インジケーション図
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/111111.png"/></div>

### ハードウェア

**ステップ 1. 以下のものを準備してください:**

- _Arduinoで遊ぶ_

| Seeeduino V4.2 | ベースシールド|  Grove - Follower V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _ArduinoにGroveを接続_

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/8.png" /></div>

- _XIAO ESP32シリーズで遊ぶ_

| Seeed Studio Grove Base for XIAO| XIAO ESP32-S3|  Grove - Follower V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[今すぐ購入](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _XIAO ESP32S3にGroveを接続_

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/7.png" /></div>

2つの異なる組み合わせですが、同じコードを使用します。

### ソフトウェア

- ステップ 1. Arduino IDEにコードをコピーしてアップロードします。

```c
#define LEFT 3
#define RIGHT 2

void setup() {
  Serial.begin(9600);
  pinMode(LEFT, INPUT);
  pinMode(RIGHT, INPUT);
}
void loop() {
  int towar_left=digitalRead(LEFT);
  int towar_right=digitalRead(RIGHT);
  Serial.print("ラインフォロワー : 左 ");
  Serial.print(towar_left);
  Serial.print("  右 ");
  Serial.println(towar_right);
}
```
- ステップ 2. シリアルポートを開いて印刷された内容を確認します。

センサーを黒いエリアに置くと、シリアルポートは以下の内容を印刷します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/2.png" /></div>

### デモ使用法

白いエリアに近づくと、センサーボードの赤いライトが点灯し、黒いエリアに近づくと赤いライトが消灯します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/5.gif" /></div>



## リソース

* **[SCH]** [Grove IR Line Follower Sensor Reference Information](https://files.seeedstudio.com/wiki/Grove_Line_Follower/SCH.pdf)
* **[データシート]**  [ITR9909_Datasheet.PDF](https://files.seeedstudio.com/wiki/Grove_Line_Follower/datasheet.pdf)



## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a></div>