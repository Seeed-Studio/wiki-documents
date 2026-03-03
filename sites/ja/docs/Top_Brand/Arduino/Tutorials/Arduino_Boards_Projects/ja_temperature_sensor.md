---
description: 温度センサー
title: 温度センサー
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/temperature_sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: 温度センサー
category: チュートリアル
oldwikiname: 温度センサー
prodimagename:
surveyurl: https://www.research.net/r/Temperature_Sensor
--- -->
Temp &amp; Humi Sensor を使用して、家の温度と湿度を取得することができます。

このデモでは、値を取得してLCDに表示する方法を紹介します。

**必要なハードウェア:**

* Arduino

* Temp &amp; Humi Sensor

* LCD

**回路：**

Temp &amp; Humi Sensor を A0 に接続します。

LCD の接続については、[LCD](https://arduino.cc/en/Tutorial/LiquidCrystal) を参照してください。

![](https://github.com/Jeremyym/Temperature_Sensor/raw/master/img/Sidekick_34_1.png)

**コード:**

Arduino IDE を開き、File -&gt; Sketchbook -&gt; TempHumiSensor をクリックします。

`readHumidity()` を使用して湿度を取得し、`readTemperature()` を使用して温度を取得できます。この2つの関数は浮動小数点値を返します。

LCD については、[LCD](https://arduino.cc/en/Tutorial/LiquidCrystal) を参照してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>