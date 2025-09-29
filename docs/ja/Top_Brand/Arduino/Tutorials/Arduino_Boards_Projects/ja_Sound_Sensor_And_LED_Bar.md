---
description: サウンドセンサーとLEDバー
title: サウンドセンサーとLEDバー
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sound_Sensor_And_LED_Bar
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: サウンドセンサーとLEDバー
category: チュートリアル
oldwikiname: サウンドセンサーとLEDバー
prodimagename:
surveyurl: https://www.research.net/r/Relay_Control_LED
--- -->
このデモでは、サウンドセンサーを使用して音の強度を示す方法を紹介します。音の強度を示すために、LEDバーが必要です。

**必要なハードウェア：**

* Arduino

* サウンドセンサー

* LEDバー

**回路：**

サウンドセンサーの出力はアナログ信号です。これをSeeeduinoのA0に接続します。

LEDバーは10個のIOを必要とします。接続方法については、[LEDバー](https://arduino.cc/en/Tutorial/BarGraph)を参照してください。

![](https://files.seeedstudio.com/wiki/Sound_Sensor_And_LED_Bar/img/Sidekick_35_1.png)

**コード：**

Arduino IDEを開き、File -&gt; Sketchbook -&gt; sound_sensorをクリックします。

analogRead()を使用して光センサーの値を読み取ることができます。この値は光の強度を示します。光が強いほど、値は大きくなります。

データをより滑らかにするために、簡単なフィルタリングが必要です。値を32回読み取り、平均値を取ります。

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>