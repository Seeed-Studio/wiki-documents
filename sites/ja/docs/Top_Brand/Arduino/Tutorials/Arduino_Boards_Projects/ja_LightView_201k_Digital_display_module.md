---
description: LightView 201k デジタルディスプレイモジュール
title: LightView 201k デジタルディスプレイモジュール
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LightView_201k_Digital_display_module
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: LightView 201k デジタルディスプレイモジュール
category: チュートリアル
bzurl:
oldwikiname: LightView 201k デジタルディスプレイモジュール
prodimagename:
surveyurl: https://www.research.net/r/LightView_201k_Digital_display_module
sku:
--- -->

LightView 201k デジタルディスプレイのスタートガイド  
このガイドでは、LightView 201k デジタルディスプレイをカメラシールドと接続して簡単に始める方法を説明します。

1. 必要な材料

- Seeeduino V3.0  
- カメラシールド  
- LightView 201k デジタルディスプレイ  

2. 接続方法

![](https://files.seeedstudio.com/wiki/LightView_201k_Digital_display_module/img/Lightviewdisplay.png)

1. – 明るさ+  
2. – 明るさ-  
3. – GND  
4. – AV-  
5. – AV+  
6. – GND  
7. – VCC (3.9~5V)  

4本のラインを接続する必要があります。

1. 4 AV- =&gt; カメラシールドの V_OUT- （2ピンヘッダーをはんだ付けする必要があります）  

2. 5 AV+ =&gt; カメラシールドの V_OUT+ （2ピンヘッダーをはんだ付けする必要があります）  

3. 6 GND =&gt; Arduino の GND  

4. 7 VCC =&gt; Arduino の 5V  

最終的な組み立ては以下のようになります：

![](https://files.seeedstudio.com/wiki/LightView_201k_Digital_display_module/img/图片2.jpg)

3. 動作原理  
このディスプレイはAV入力のみを必要とします。カメラシールドはAV信号を生成するために使用されます。Seeeduinoにコードをアップロードする必要はありません。Seeeduinoが行う唯一のことは、カメラシールドに電力を供給することです。AV信号の出力は、カメラシールドで使用されているVC0706チップセットの組み込み機能です。言い換えれば、Seeeduinoとカメラシールドが必要ない場合もあります。必要なのはAV信号です。このディスプレイをAV信号を出力できる任意のTVボックスに接続することができます。また、GoProのAV出力に接続することも可能です。それだけです。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>