---
description: GrovePi Plus
title: GrovePi Plus
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/GrovePi_Plus
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/110060049%2010_02.jpg)

[GrovePi](http://www.dexterindustries.com/GrovePi/)は、[Grove Sensors](#/Grove_System "Grove System")を[Raspberry Pi](https://www.seeedstudio.com/depot/s/Raspberry%2520Pi.html?search_in_description=0)に接続するための拡張ボードです。[GrovePi](https://www.seeedstudio.com/depot/GrovePi-p-1672.html)の新バージョンとして、Raspberry Pi Model B+およびModel A+をサポートします。すべてのバージョンのRaspberry Piに完全に一致する3つの取り付け穴と、カメラケーブル用のアウトレット穴があります。また、電圧レベル変換サブ回路が改良されています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/GrovePi-p-2241.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

---

* 7つのデジタルポート

* 3つのアナログポート

* 3つのI2Cポート

* GrovePiに接続する1つのシリアルポート

* Raspberry Piに接続する1つのシリアルポート

* GroveヘッダーVcc出力電圧：5Vdc

## はじめに

---

**<big>GrovePi+のクイックスタートガイドへようこそ。</big>**

動作の詳細について知りたい場合は、設計者の[Githubリポジトリ](https://github.com/DexterInd/GrovePi)で設計ファイルをすべて確認できます。

**Raspberry Pi用GrovePi PlusとGrovePi+の比較**

| パラメータ                   | [Raspberry Pi用GrovePi Plus](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](https://wiki.seeedstudio.com/ja/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| 動作電圧                   | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Groveポート                 | 6 デジタル(3.3V)   4 アナログ(3.3V)   3 I2C(3.3V)   1 PWM(3.3V)  1 RPISER(UART) Raspberry Piに接続(3.3V)  1 SWD | 7 デジタル(5V)  3 アナログ(5V)  3 I2C(5V)  1 SERIAL: ATMEGA328P D0/1に接続(5V)  1 RPISER: Raspberry Piに接続(3.3V)  1 ISP |
| Grove-Digital               | Raspberry Piに直接接続                                                                                           | ATMEGA328Pデジタルピンに接続し、I2C信号に変換してからレベルコンバータを通じてRaspberry Piに接続                                      |
| Grove-Analog                | STM32F030F4P6(12bit ADC)に接続し、I2C信号に変換してから直接Raspberry Piにルート                                   | ATMEGA328Pアナログピン(10bit ADC)に接続し、I2C信号に変換してからレベルコンバータを通じてRaspberry Piに接続                        |
| Grove-I2C                   | Raspberry Piに直接接続                                                                                           | レベルコンバータを通じてRaspberry Piに接続                                                                                         |
| Grove-PWM                   | Raspberry Piに直接接続                                                                                           | 該当なし                                                                                                                          |
| RPISER                      | Raspberry Piに直接接続                                                                                           | Raspberry Piに直接接続                                                                                                           |
| SERIAL                      | 該当なし                                                                                                         | ATMEGA328PデジタルピンD0/D1に接続し、I2C信号に変換してからレベルコンバータを通じてRaspberry Piに接続                                |
| SWD                         | STM32F030F4P6にファームウェアを書き込む                                                                           | 該当なし                                                                                                                          |
| ISP                         | 該当なし                                                                                                         | ATMEGA328Pにファームウェアを書き込む                                                                                              |
| Raspberry Piコネクタピン数  | 40                                                                                                                | 26                                                                                                                               |

### GrovePiをRaspberry Piに接続する

まず、GrovePiをRaspberry Piに取り付けます。以下の画像のように、GrovePiをRaspberry Piの上にスライドさせて取り付けます。

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/GrovePiPlus_wiki_3.jpg)

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/GrovePi_Wiki_1.JPG)

GrovePiを積み重ねる際には、ピンが正しく整列していることを確認してください。

### Raspberry Pi上でソフトウェアをセットアップする

次に、Raspberry Pi上にソフトウェアをインストールします。インストールには2つのオプションがあります：

* BrickPiイメージを使用することができます。

* 自分の画像を使用する場合: すでに Raspberry Pi 上で独自の Linux ディストリビューションを実行している場合は、GrovePi のセットアップに弊社の bash スクリプトを使用できます。

**BrickPi イメージを使用する場合**

* BrickPi イメージをダウンロードし、SD カードにインストールします。[こちらが SD カードを設定する手順が記載された BrickPi ページへのリンクです](http://www.dexterindustries.com/BrickPi/getting-started/pi-prep/)。このインストールには最低 4GB の SD カードが必要です。

* 適切な場所に Github リポジトリをクローンします。

```
git clone https://github.com/DexterInd/GrovePi.git
```

* Scripts フォルダ内の bash スクリプトを実行して Raspbian を設定します。[こちらがスクリプトを使用したセットアップのチュートリアルです。](http://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)

* Raspberry Pi を再起動します。

**独自のイメージを設定する場合**

* 適切な場所に Github リポジトリをクローンします。

```
git clone https://github.com/DexterInd/GrovePi.git
```

* Scripts フォルダ内の bash スクリプトを実行して Raspbian を設定します。[こちら](http://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)がスクリプトを使用したセットアップのチュートリアルです。

* Raspberry Pi を再起動し、GrovePi の使用を開始します。

### GrovePi のテスト

Raspberry Pi を GrovePi と連携するように設定したら、実際に動作を確認する時です。

GrovePi の動作を説明するために、3 つの簡単なプロジェクトを開発しました。

## 対応製品

---

### Grove リスト

* [1. Grove - ボタン](https://wiki.seeedstudio.com/ja/Grove-Button#With_Raspberry_Pi)

* [2. 光センサー](https://wiki.seeedstudio.com/ja/Grove-Light_Sensor#With_Raspberry_Pi)

* [3. ブザー](https://wiki.seeedstudio.com/ja/Grove-Buzzer#With_Raspberry_Pi)

* [4. サウンドセンサー](https://wiki.seeedstudio.com/ja/Grove-Sound_Sensor#With_Raspberry_Pi)

* [5. Grove - 赤色 LED](https://wiki.seeedstudio.com/ja/Grove-Red_LED#With_Raspberry_Pi)

* [6. LCD RGB バックライト](https://wiki.seeedstudio.com/ja/Grove-LCD_RGB_Backlight#With_Raspberry_Pi)

* [7. 回転角センサー](https://wiki.seeedstudio.com/ja/Grove-Rotary_Angle_Sensor#With_Raspberry_Pi)

* [8. Grove-温湿度センサー Pro](https://wiki.seeedstudio.com/ja/Grove-Temperature_and_Humidity_Sensor_Pro/#With_Raspberry_Pi)

* [9. 超音波レンジャーセンサー](https://wiki.seeedstudio.com/ja/Grove-Ultrasonic_Ranger#With_Raspberry_Pi)

* [10. リレー](https://wiki.seeedstudio.com/ja/Grove-Relay#With_Raspberry_Pi)

* [11. Grove-4桁ディスプレイ](https://wiki.seeedstudio.com/ja/Grove-4-Digit-Display#With_Raspberry_Pi)

* [12. Grove-6軸加速度計およびコンパス V2.0](https://wiki.seeedstudio.com/ja/Grove-6-Axis_AccelerometerAndCompass_V2.0#With_Raspberry_Pi)

* [13. Grove - バロメーター (高精度)](https://wiki.seeedstudio.com/ja/Grove-Barometer(High-Accuracy)#With_Raspberry_Pi)

* [14. Grove-バロメーターセンサー-BMP180](https://wiki.seeedstudio.com/ja/Grove-Barometer_Sensor-BMP180#With_Raspberry_Pi)

* [15. Grove-ダストセンサー](https://wiki.seeedstudio.com/ja/Grove-Dust_Sensor#With_Raspberry_Pi)

* [16. Grove-電流センサー](https://wiki.seeedstudio.com/ja/Grove-Electricity_Sensor#With_Raspberry_Pi)

* [17. Grove-電磁石](https://wiki.seeedstudio.com/ja/Grove-Electromagnet#With_Raspberry_Pi)

* [18. Grove-炎センサー](https://wiki.seeedstudio.com/ja/Grove-Flame_Sensor#With_Raspberry_Pi)

* [19. Grove-ガスセンサー-MQ2](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ2#With_Raspberry_Pi)

* [20. Grove-ジェスチャー v1.0](https://wiki.seeedstudio.com/ja/Grove-Gesture_v1.0#With_Raspberry_Pi)

* [21. Grove-GPS](https://wiki.seeedstudio.com/ja/Grove-GPS#With_Raspberry_Pi)

* [22. Grove-高温センサー](https://wiki.seeedstudio.com/ja/Grove-High_Temperature_Sensor#With_Raspberry_Pi)

* [23. Grove-赤外線反射センサー](https://wiki.seeedstudio.com/ja/Grove-Infrared_Reflective_Sensor#With_Raspberry_Pi)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2BEagle%20FIle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* **[Eagle]** [GrovePi_Plus V3.0 Eagleファイル](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2BEagle%20FIle.zip)
* **[PDF]** [GrovePi_Plus V3.0 回路図PDFファイル](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2B%20v3.0%20Sch.pdf)
* **[PDF]** [GrovePi_Plus V3.0 PCB PDFファイル](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2B%20v3.0%20PCB.pdf)
* **[ドキュメント]** [GrovePi用ソフトウェアのセットアップ](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/Setting_Up_Software_for_GrovePi.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>