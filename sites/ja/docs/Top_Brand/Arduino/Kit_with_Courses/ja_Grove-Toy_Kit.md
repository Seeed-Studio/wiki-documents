---
description: Grove - Toy Kit
title: Grove - Toy Kit
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Toy_Kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


Grove Toy Kitは、簡単におもちゃを改造し、自分の個性に合わせてアップグレードする方法を提供します。このキットは、人間の動きを感知したり、音を聞いたり、動きを検出したり、OLEDディスプレイを表示したりするなど、通常のおもちゃに多くのクールな機能を追加します。Toy Hacking Contestの参加者のおかげで、以下に示す6つの素晴らしいプロジェクトが、このGrove Toy Kitで何ができるかを示しています。

Grove Toy Kitには以下が含まれます：

<!-- *   1 x [Grove - Base_Shield_V2](/ja/Base_Shield_V2 "Grove - Base Shield")

*   1 x [Grove - OLED Display 128*64](/ja/Grove-OLED_Display_0.96inch "Grove - OLED Display 128*64")

*   1 x [Grove - Sound Sensor](/ja/Grove-Sound_Sensor "Grove - Sound Sensor")

*   1 x [Grove - Chainable RGB LED](/ja/Grove-Chainable_RGB_LED "Grove - Chainable RGB LED")

*   1 x [Grove - Buzzer](/ja/Grove_Starter_Kit_Plus/#7-grove-buzzer)

*   1 x [Grove - PIR Motion Sensor](/ja/Grove-PIR_Motion_Sensor "Grove - PIR Motion Sensor")

*   1 x [Grove - 3-Axis Analog Accelerometer](/ja/Grove-3-Axis_Analog_Accelerometer "Grove-3-Axis_Analog_Accelerometer")

*   10 x Grove - Universal 4 pin Cable

*   5 x Grove - X2 Servo cable

*   2 x Super strong metal core Servo MG-995 -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Toy-Kit-p-995.html)

## バージョントラッカー

<table>
<tr>
<th>改訂版</th>
<th>説明</th>
<th>リリース日</th>
</tr>
<tr>
<td width="300px">GROVE - Toy Kit</td>
<td width="500px">V0.9b改訂版が公開</td>
<td width="200px">2011年11月23日</td>
</tr>
</table>

## おもちゃを敏感にする

おもちゃを敏感にするために、このキットにはいくつかのセンサーを用意しています。

### PIR Motion Sensor: 人間の動きに敏感

近づいたときにおもちゃが「こんにちは」と言うようにしてみませんか？PIRセンサーを使用すると、おもちゃはセンサーの検出範囲内に人間が入ったことを検出できます。検出範囲と保持時間は、2つのポテンショメータを調整することで変更できます。

[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/PIR_motion_sensor.jpg)]

### Sound Sensor: 聞いて、音がある！

Sound Sensorを使用すると、おもちゃは環境のノイズに敏感になります。Grove - Sound Sensorはシンプルなマイクです。パワーアンプLM386とエレクトレットマイクを基にしており、環境の音の強さを検出するために使用できます。出力値はポテンショメータで調整可能です。

[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Sound_sensor.jpg)]

### 3-axis Accelerometer: 動きの検出

I2C 3-axis Accelerometerを使用すると、おもちゃは加速度を検出できるようになります。つまり、子供が人形を激しく振ると、人形が「ねえ、君！前回振ったときよりも強いね！」と言うかもしれません。

<center>

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Accelerometer.jpg)

</center>

### I2C Touch Sensor: おもちゃを触覚に敏感にする

I2C Touch Sensorを使用して、おもちゃ（例：くまのプーさん）を指の触覚に敏感にすることができます。このセンサーはコントローラーと4つの触覚センサーを含んでおり、4つのチャンネルで人間の指の触覚や近接を感じることができます。さらに、追加のチャンネルを作成するか、[Seeed Studioから触覚センサーを購入する](https://www.seeedstudio.com/depot/grove-i2c-touch-sensor-p-840.html?cPath=144_195)ことで、最大4つのチャンネルを追加することが可能です。

[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/I2C_Touch_Sensor.jpg)]

## おもちゃをインタラクティブにする

### クールなOLEDディスプレイ: Grove - OLED Display 128*64

LED 128×64ディスプレイモジュールは、Grove 4ピンI2Cインターフェースを備えたOLEDモノクロ128×64ドットマトリックスディスプレイモジュールです。このディスプレイモジュールの特徴は、高輝度、自発光、高コントラスト比、スリムな外形、広い視野角、広い温度範囲、低消費電力です。画面が大きく、SSD1308チップのすべての列を使用するため、OLED 96×16よりも多くのコンテンツを表示できます。

この非常にクールなOLEDディスプレイは、Grove 4ピンI2Cインターフェースを備え、高輝度、自発光、高コントラスト比、スリムな外形、広い視野角、広い温度範囲、低消費電力を特徴としています。おもちゃやその他の好きなものに統合するのに最適です。

[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Twig-OLED_Display_128x64.jpg)]

### 好きな色で点滅: 可変カラーLED

この可変カラーLEDは、1つの8mm RGB LEDと3つのポテンショメータで構成されています。3つのポテンショメータを調整することで好きな色を得ることができ、LEDのオン/オフを制御できます。今、くまのプーさんの目の色を好きなように変えて、星のように点滅させましょう！

[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Variable_Color_LED.jpg)]

### 録音と再生: サウンドレコーダー

サウンドレコーダーは、音声を録音して再生するために使用できます。おもちゃがあなたの声で「ねえ、かわい子ちゃん、寝る時間だよ」と子供たちにリマインドすることが可能です。

<font color="blue">しかし残念ながら、サウンドレコーダーのチップは生産終了となったため、Toy Kitのパックリストには含まれていません。SeeedのR&Dチームは、サウンドレコーダーを再び動作させることができる別のチップを見つけるために努力しています。長くお待たせすることはありません！</font>

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Sound_Recorder.jpg)]

### 自分だけの音楽を作る: Piezo_Buzzer_Grove

このPiezo_Buzzerは、アナログパルス幅変調出力に接続して、さまざまな音や効果音を生成することができます。

[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Piezo_Buzzer_Twig.jpg)](http://garden.seeedstudio.com/index.php?title=GROVE_-_Starter_Kit_V1.0b#Piezo_Buzzer "GROVE_-_Starter_Kit_V1.0b#Piezo_Buzzer")

## 使用方法

Toy Kitは、[Arduino](https://www.seeedstudio.com/depot/arduino-uno-p-694.html?cPath=132_133)または[Seeeduino](https://www.seeedstudio.com/depot/arduino-uno-p-694.html?cPath=132_133)ボード、およびGrove Shieldシリーズと連携して動作します。

以下は、Seeedの顧客によって設計されたいくつかのアプリケーション例です。

### 1. エイドリアンによる自動列車駅

このプロジェクトは、自動鉄道システムに関するものです。基本的なアイデアは、Grove Toy Kitを使用して時間を確認し、列車が駅に到着したときに対応する音を再生し、列車がクロスオーバーに到達したことを認識することです。

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Toy_Kit_Project_1.jpg)

このプロジェクトを進めるには、以下が必要になる場合があります：

* SeeeduinoまたはArduino
* Grove - RTC

**リソース:**

* 詳細なステップバイステップの説明は[こちら](https://www.seeedstudio.com/document/Automated_train_station.ppt)。
* さらに多くの写真は[こちら](https://picasaweb.google.com/111286480499748956103/SeeedstudioProject?authuser=0&amp;feat=directlink)。

### 2. ウェンデルによる吠えるデスクガードドッグ

吠えるデスクガードドッグは、前にある物体を動かそうとする人に吠えます。あなたがいない間にデスクトップに置いておくと、誰かが近づいて物を取ろうとすると、同僚全員に警告を発します。

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Barking_Desk_Guard_Dog.png)

このプロジェクトを進めるには、以下が必要になる場合があります：

* SeeeduinoまたはArduino
* Grove - I2Cタッチセンサー

**リソース:**

* 詳細なステップバイステップの説明は[PDF](https://www.seeedstudio.com/document/Barking_Desk_Guard_Dog.pdf)。
* デモ[動画](https://www.youtube.com/watch?v=8BghIeelvtY)はYouTubeで。

### 3. ハビエルによるIKEAロボットランプ

このプロジェクトは、IKEAランプを改造するものです。一般的な製品がロボットランプに変わり、センサー、ライト、音、動きを追加することでさらに楽しくなります。

[[Image:IKEA Robot Lamp.jpg}550px]]

このプロジェクトを進めるには、以下が必要になる場合があります：

* SeeeduinoまたはArduino

**リソース:**

* プロジェクトページは[こちら](http://arduinoarts.com/2011/09/the-sm-1-project-part-7-the-first-working-version-of-the-ikea-robot-lamp-with-arduino/)。
* 詳細なステップバイステップの説明は[こちら](https://www.seeedstudio.com/blog/www.seeedstudio.com/document/seeedStudioAssemblyInstructions.docx)。
* チュートリアル[動画](https://www.youtube.com/watch?v=hmSlk4zmhYo)はYouTubeで。

### 4. セヴェリン（XinCheJian）による招き猫ハック

上海を歩いていると、多くの店やレストラン、その他の場所で見かけるものがあります。それは「招き猫」です。このプロジェクトでは、Groveコンポーネントを使用してその動く腕を改造します。

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Beckoing_cat_hack.jpg)

このプロジェクトを進めるには、以下が必要になる場合があります：

* SeeeduinoまたはArduino

**リソース:**

* 詳細なステップバイステップの説明は[こちら](http://wiki.xinchejian.com/docs/cat/)。
* デモ[動画](https://www.youtube.com/watch?edit=vd&amp;v=9i7DidiFYts)はYouTubeで。

### 5. マシューによるgRoverロボティクスプラットフォーム

このプロジェクトは、リサイクルショップで簡単に見つけられるリモコンカーを、Seeed StudioのGrove Toy Kitを使用してArduino制御のロボットに再利用するものです。

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/GRover_Robotics_Platform.jpg)

このプロジェクトを進めるには、以下が必要になる場合があります：

* SeeeduinoまたはArduino
* Grove - I2Cタッチセンサー
* バッテリーパック
* Grove - 80cm赤外線近接センサー
* Grove - I2Cハブ
* Grove - I2Cモータードライバー
* Grove - バイブレーター

**リソース:**

* 詳細なステップバイステップの説明 [PDF](https://www.seeedstudio.com/document/gRover.pdf)。

* さらに多くの写真は [こちら](http://www.flickr.com/photos/matthewlange/sets/72157627614719221/with/6176558869/)。

### 6. AlexによるEyeclop

Eyeclopは、タッチセンサーを使用して目の形を変えたり、RGB LEDを点滅させたり、音楽メロディを再生したり、自身を振動させたりするプロジェクトです。Eyeclopは敏感な片目のサイクロプスであり、128x64ピクセルのモノクロOLEDスクリーンに表示されます。タッチセンサー、RGB LED、その他の電子部品はすべてSeeed Studioが作成したGrove Toy Kitの一部です。

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Eyeclop.png)

このプロジェクトを進めたい場合、以下が必要になるかもしれません：

* SeeeduinoまたはArduino

* Grove - I2C Touch Sensor

**リソース:**

* 詳細なステップバイステップの説明 [PDF](https://www.seeedstudio.com/document/Eyeclop%20howto.pdf)。

* YouTubeでのデモ [動画](https://www.youtube.com/watch?v=AjtvoA2FFAs)。

## サポート

質問やより良いデザインアイデアがある場合は、[フォーラム](https://forum.seeedstudio.com)にアクセスしてください。

## 関連情報

* [Grove - Starter Kit](https://www.seeedstudio.com/Grove-Starter-Kit-p-709.html)

* [Grove - ADK Dash Kit](https://www.seeedstudio.com/Grove-ADK-Dash-Kit-p-929.html)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>