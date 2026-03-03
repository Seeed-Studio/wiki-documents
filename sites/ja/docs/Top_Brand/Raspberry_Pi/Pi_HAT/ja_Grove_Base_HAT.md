---
description: Grove Base HAT
title: Grove Base HAT
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Base_HAT
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Grove%20Base%20HAT.JPG)

Grove Base HAT は、Raspberry Pi に Grove センサーを接続するための拡張ボードです。Raspberry Pi 2 Model B、Raspberry Pi 3 Model B、Raspberry Pi B+ をサポートしています。4つの取り付け穴があり、通常サイズの Raspberry Pi に適合します。また、カメラケーブル用のスペースも確保されています。

## バージョン

<table className="tg">
  <tbody><tr>
      <th className="tg-yw4l">製品バージョン</th>
      <th className="tg-yw42">変更点</th>
      <th className="tg-yw4l">リリース日</th>
    </tr>
    <tr>
      <td className="tg-4eph">Grove Base HAT</td>
      <td className="tg-4eph">初版</td>
      <td className="tg-b7b8">2017年12月15日</td>
    </tr>
  </tbody></table>

## 特徴

* 2つのデジタルポート

* 2つのアナログポート
* 3つのI2Cポート
* 1つのUARTポート
* 1つの電源スイッチ

## ハードウェア概要

以下の画像は、Grove Base HAT のハードウェア機能の概要を示しています。Grove Base HAT の各ピンのピンアウトと代替機能は、ピンアウト図に示されています。これはクイックリファレンスとして使用できます。

![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Hardware_overview.jpg)

* **<font face size={5} font color="00b0f0">❶</font>デジタルポート:**
2つのデジタル Grove ポートは、Grove デジタルセンサーを接続するために使用されます。

* **<font face size={5} font color="00b0f0">❷</font>アナログポート:**
2つのアナログ Grove ポートは、Grove アナログセンサーを接続するために使用されます。Raspberry Pi はアナログ信号をサポートしていないため、ADS1015 チップを使用して ADC 信号を I2C 信号に変換します。

* **<font face size={5} font color="00b0f0">❸</font>I2C ポート:**
3つの I2C Grove ポートは、Grove I2C センサーを接続するために使用されます。

* **<font face size={5} font color="00b0f0">❹</font>UART:**
1つの UART Grove ポートは、Grove UART センサーを接続するために使用されます。Raspberry Pi 3 の UART は Bluetooth に使用されています。[THE RASPBERRY PI UARTS](https://www.raspberrypi.org/documentation/configuration/uart.md) に従って UART を有効にしてください。

* **<font face size={5} font color="00b0f0">❺</font>システム電源スイッチ:**
スライドスイッチは、ボードの論理レベルと動作電圧を 5V または 3.3V に切り替えるために使用されます。

* **<font face size={5} font color="00b0f0">❻</font>ADS1015:**
ADS1015 は、12ビットの分解能を持つ高精度アナログ-デジタルコンバータ（ADC）であり、データは I2C 互換のシリアルインターフェースを介して転送されます。

* **<font face size={5} font color="00b0f0">❼</font>TXS0108:**
この8ビット非反転トランスレータは、2つの独立した構成可能な電源レールを使用します。A ポートは VCCA ピンの供給電圧を追従します。VCCA ピンは 1.2V から 3.6V の任意の供給電圧を受け入れます。A ポートは Raspberry に接続されています。B ポートは VCCB ピンの供給電圧を追従します。VCCB ピンは 1.65V から 5.5V の任意の供給電圧を受け入れます。B ポートは Grove センサーに接続されています。

* **<font face size={5} font color="00b0f0">❽</font>FREE:**
FREE ピンは Grove Base HAT では使用されていません。

## はじめに

### ハードウェア

* ステップ 1. 以下のものを準備してください：

| Raspberry Pi | Grove Base HAT |
|--------------|----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Grove%20Base%20HAT_s.JPG)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|

* ステップ 2. Grove Base HAT を Raspberry Pi に接続します。

* ステップ 3. Raspberry Pi を USB ケーブルを使って PC に接続します。

### ソフトウェア

* ステップ 1. I2C を設定します。I2C はデフォルトでは有効になっていません。`raspi-config` を使用して有効にすることができます。"sudo raspi-config" を実行してください。

* ステップ 2. 下矢印キーで「5 Interfacing Options」に移動し、「Enter」キーを押して選択します。
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.1.png)

* ステップ 3. 下矢印キーで「P5 I2C」に移動し、「Enter」キーを押して選択します。
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.2.png)

* ステップ 4. 「Yes」を選択して有効にします。
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.3.png)

* ステップ 5. 「Ok」を選択します。
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.4.png)

* ステップ 6. 「Finish」を選択して変更を保存します。
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.5.png)

* ステップ 7. [ADS1X15_Driver](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ADS1X15_Driver.zip) を Raspberry Pi の `/home/pi` フォルダにダウンロードして解凍します。

```
wget https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ADS1X15_Driver.zip
unzip ADS1X15_Driver.zip
```

* ステップ 8. `singleended` フォルダに移動して `make` を実行します。緑色でハイライトされた `Singleended` ファイルが表示されます。

```
pi@raspberrypi:~ $ cd ~/Adafruit_ADS1X15_Linux/examples/singleended
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ make
g++ -o singleended.o -c singleended.cpp -I../../ -W -Wall
g++ -o Singleended singleended.o -lads1015 -L../../
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ ls
Makefile  Singleended  singleended.cpp  singleended.o
```

* ステップ 9. `singleended` を実行してデータを読み取ります。

```
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ ./Singleended
Hello!
Getting single-ended readings from AIN0..3
ADC Range: +/- 6.144V (1 bit = 3mV/ADS1015, 0.1875mV/ADS1115)
AIN0: 4095
AIN1: 4095
AIN2: 4095
AIN3: 4095
```

## FAQs

Grove_Base_HAT に関するすべての FAQ を確認するには、**[こちら](http://support.seeedstudio.com/knowledgebase/articles/1831468-grove-base-hat-sku-tbd)** をクリックしてください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Raspberry%20Pi%20Grove%20Base%20HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **[PDF]** [Wiki PDF をダウンロード](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Grove_Base_HAT.pdf)

* **[Eagle]** [Grove Base HAT 回路図ファイル](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Raspberry%20Pi%20Grove%20Base%20HAT.zip)
* **[データシート]** [ADS1015](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ads1015.pdf)
* **[データシート]** [TXS0108](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/txs0108e.pdf)
* **[PDF]** [Grove Base HAT 機械図面](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/hat-board-mechanical.pdf)
* **[Github]** [HAT](https://github.com/raspberrypi/hats)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>