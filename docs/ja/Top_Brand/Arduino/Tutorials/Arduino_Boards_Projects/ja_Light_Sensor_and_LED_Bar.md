---
description: 光センサーとLEDバー
title: 光センサーとLEDバー
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Light_Sensor_and_LED_Bar
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: 光センサーとLEDバー
category: チュートリアル
oldwikiname: 光センサーとLEDバー
prodimagename:
surveyurl: https://www.research.net/r/Light_Sensor_and_LED_Bar
--- -->
このデモでは、光センサーの使用方法を紹介します。光の強度を示すために、LEDバーが必要です。

**必要なハードウェア：**

* Arduino

* 光センサー

* LEDバー

**回路：**

光センサーの出力はアナログ信号なので、SeeeduinoのA0に接続します。

LEDバーは10個のIOが必要です。接続方法については、[LEDバー](https://arduino.cc/en/Tutorial/BarGraph)を参照してください。

![](https://files.seeedstudio.com/wiki/Light_Sensor_and_LED_Bar/img/Sidekick_33_1.png)

**コード：**

Arduino IDEを開き、[ファイル] -&gt; [スケッチブック] -&gt; [light_sensor]をクリックします。

analogRead()を使用して光センサーの値を読み取ることができます。この値は光の強度を示します。光が強くなると、値が大きくなります。

データをより滑らかにするために、簡単なフィルタリングが必要です。値を32回読み取り、その平均値を取ります。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>