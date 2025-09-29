---
description: Raspberry Pi用Groveベースキット
title: Raspberry Pi用Groveベースキット
keywords:
- キット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Base_Kit_for_Raspberry_Pi
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


## GROVEシステム

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png)

Groveは、標準化されたコネクタを備えたベースユニットとさまざまなモジュールで構成されるモジュール型プロトタイピングシステムです。ベースユニットは通常、Groveモジュールからの入力や出力を通信、処理、制御するマイクロプロセッサです。各Groveモジュールは通常、単一の機能を担当し、単純なボタンからより複雑な心拍センサーまで幅広く対応します。標準化されたGroveコネクタにより、ユーザーはGroveユニットをブロックのように組み立てることができ、ジャンパーやはんだ付けベースのシステムと比較して、組み立てや分解がはるかに簡単であり、実験、構築、プロトタイピングの学習システムを簡素化します。
また、GroveセンサーやアクチュエータモジュールをGroveシステム開発ボードなしで使用したい方のために、Grove to Pin Header ConverterやGrove Base HATを提供しています。

Groveシステムのユーザーは、少なくとも基本的な電子知識の背景を持っている必要があります。そうでない場合は、この基本チュートリアルを通じてGroveシステムの基本操作を学ぶ必要があります。このチュートリアルの最初の部分では、スターターキットに含まれるコンポーネントに関する基本情報のリストを提供し、その後、Seeeduino Lotus用のArduino IDEの基本設定を説明します。そして、11のチュートリアルセッションでは、スターターキットに含まれる各コンポーネントの基本操作と、複数のモジュールを組み合わせたアプリケーションを紹介し、Groveシステムの接続とコーディングに関する基本的な知識と洞察を学ぶことができます。

## Raspberry Pi用Groveベースキット

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/kit.jpg)

Groveスターターキットには、1つのGrove Base Hat（Raspberry Pi用）と10個のGroveモジュールが含まれています。詳細情報は以下に記載されています。

### 製品詳細

#### Grove ベースハット

**[Raspberry Pi用Grove Base Hat](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg)

現在、Groveシリーズのセンサー、アクチュエータ、ディスプレイは大規模なファミリーに成長しています。将来的にはさらに多くのGroveモジュールがGroveエコシステムに参加する予定です。Groveは、メーカー、エンジニア、教師、学生、さらにはアーティストが構築、製作、創造するのを助けると考えています。私たちは常に、Groveモジュールをより多くのプラットフォームと互換性を持たせる責任があると感じています。そこで、Raspberry Pi用のGrove Base HatとRaspberry Pi Zero用のGrove Base Hatを提供します。つまり、Raspberry PiにGroveシステムを導入します。

Raspberry Pi用Grove Base Hatは、デジタル/アナログ/I2C/PWM/UARTポートを提供し、すべてのニーズに対応します。内蔵MCUの助けを借りて、Raspberry Pi用に12ビット8チャンネルADCも利用可能です。

**特徴**

- Raspberry Pi 2/3B/3B+/Zeroをサポート
- 内蔵MCU
- 12ビットADC
- 多種類のGroveポート

**ハードウェア概要**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pi_pinout.jpg)

GPIO：Raspberry Piと同じピン配置。

PWM：Grove PWMポートはGPIO/BCMピン12（PWM0）およびGPIO/BCMピン13（PWM1）に接続されており、これらはRaspberry PiのハードウェアPWMピンです。さらに、すべてのGPIOピンをソフトPWMピンとして使用することもできます。

:::note

- Groveポートの横にあるシルクスクリーン層のピン番号はすべてBCMピン番号です。BCMピンと物理ピンの違いについては[こちら](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)を参照してください。

- ハードウェアPWMと比較して、ソフトウェアPWMはそれほど正確ではなく、高周波数では問題が発生する可能性があります。

- GPIO/BCMピン18もPWM0としてマークされていますが、実際にはGPIO/BCM 12とGPIO/BCM 18は同じPWMチャンネルを共有しているため、異なるレートに設定することはできません。

- オーディオジャック出力もPWM0およびPWM1を使用するため、そのソケットでオーディオ出力を行いながらPWMを使用することはできません。
:::

UART：Grove UARTポートはGPIO14（UART0 TX）およびGPIO15（UART0 RX）に接続されています。UARTは、GPIOを介してRaspberry Piを便利に制御したり、シリアルコンソールからカーネルブートメッセージにアクセスしたりするために一般的に使用されます（デフォルトで有効）。また、Arduino、ブートローダー付きATmega、ESP8266などをRaspberry Piとインターフェースする方法としても使用できます。

デジタル：このボードには6つのデジタルGroveソケットがあります。通常、Groveケーブルの黄色のワイヤー（4ピンGroveソケットの上部ピンに接続される）は信号線であるため、デジタルGroveポートをD5/D16/D18/D22/D24/D26と名付けています。

アナログ：Raspberry PiにはADCがないため、アナログセンサーを直接使用することはできません。しかし、内蔵MCU STM32の助けを借りて、Grove Base Hatは外部12ビットADCとして機能することができます。これにより、Raspberry Piでアナログセンサーを使用することが可能になります。さらに嬉しいことに、1つではなく4つのアナログGroveソケットが利用可能です。アナログセンサーはアナログ電圧を12ビットADCに入力します。ADCがアナログデータをデジタルデータに変換した後、I2Cインターフェースを介してデジタルデータをRaspberry Piに入力します。

I2C：このボードには3つのI2Cポートがあり、すべてRaspberry PiのI2Cピンに直接接続されています。この部分はI2Cハブと考えることができます。Seeedの新しいGroveモジュールのほとんどはI2Cインターフェースを持っているため、これらの3つのポートが非常に便利であることがわかるでしょう。

SWD：このHatにファームウェアを書き込むためにSWDポートを使用します。さらに、このセクションには3つのGPIOピン（ピン9/ピン10/ピン11）が表示されます。これらの3つのピンは、いずれのGroveポートでも使用されていないため、ピンの競合を心配することなく自由に使用できます。

#### Groveモジュール

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer.jpg)

このモジュールは圧電ブザーを主なコンポーネントとして使用しており、デジタル出力に接続され、ロジックレベルがHighに設定されると高音を発生させます。また、アナログPWM出力から生成される周波数に応じてさまざまな音を出すこともできます。（注：通常の人間の耳が識別できる周波数範囲は20Hzから20kHzです。）

**[Grove - 赤色LEDボタン](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDButton.jpg)

Grove - LEDボタンは、Grove - 黄色ボタン、Grove - 青色LEDボタン、Grove - 赤色LEDボタンで構成されています。このボタンは安定しており、10万回の長寿命を誇ります。内蔵LEDを使用することで、多くの興味深いプロジェクトに応用でき、ボタンの状態をLEDで表示するのに非常に便利です。

**[Grove - 光センサー](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lightsensor.jpg)

Grove - 光センサーは、光の強度を検出するためにフォトレジスタ（光依存抵抗）を統合しています。光の強度が増加するとフォトレジスタの抵抗が減少します。基板上のデュアルOpAmpチップLM358は、光の強度に対応する電圧を生成します（つまり、抵抗値に基づいています）。出力信号はアナログ値であり、光が明るいほど値が大きくなります。

**[Grove - 土壌湿度センサー](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Moisture_sensor.jpg)

この湿度センサーは、土壌の湿度を検出したり、センサーの周囲に水があるかどうかを判断するために使用できます。これにより、庭の植物が乾燥しているときに人間に助けを求めることができます。このセンサーは非常に使いやすく、土壌に挿入してデータを読み取るだけです。このセンサーを使用して、植物が「今、喉が渇いています。水をください」とメッセージを送るような小さなプロジェクトを作成できます。

**[Grove - ミニPIRモーションセンサー](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/miniPIR.jpg)

Grove - ミニPIRモーションセンサーは、範囲内での動き、通常は人間の動きを検知することができます。Grove - ベースシールドに接続してプログラムするだけで、検知範囲内で誰かが動くと、センサーはSIGピンでHIGHを出力します。

**[Grove - サーボ](https://www.seeedstudio.com/Grove-Servo-p-1241.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Servo.jpg)

Grove - サーボは、ギアとフィードバックシステムを備えたDCモーターです。ロボットの駆動機構に使用されます。このモジュールはGrove愛好者向けのボーナス製品です。3線式サーボをGrove標準コネクタに調整しました。これにより、ジャンパーワイヤーの煩雑さを避け、通常のGroveモジュールとして簡単にプラグアンドプレイできます。

**[Grove - 温湿度センサー（DHT11）](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/DHT11.jpg)

この温湿度センサーは、事前に校正されたデジタル出力を提供します。独自の静電容量センサー要素が相対湿度を測定し、温度は負の温度係数（NTC）サーミスタによって測定されます。優れた信頼性と長期安定性を備えています。ただし、このセンサーは0度以下の温度では動作しないことに注意してください。

**[Grove - リレー](https://www.seeedstudio.com/Grove-Relay-p-769.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Relay.jpg)

Grove - リレーモジュールは、デジタルの常時開スイッチです。これを使用すると、低電圧（例えばコントローラーの5V）で高電圧の回路を制御できます。基板上にはインジケーターLEDがあり、制御端子が閉じると点灯します。

**[Grove - 超音波レンジャー](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Ultrasonic.jpg)

このGrove - 超音波レンジャーは、40kHzで動作する非接触距離測定モジュールです。信号ピンを介して10uS以上のパルストリガー信号を提供すると、Grove_Ultrasonic_Rangerは40kHzの8サイクルレベルを発信し、エコーを検出します。エコー信号のパルス幅は測定距離に比例します。以下がその計算式です：  
距離 = エコー信号のハイタイム * 音速（340M/S）/2  
Grove_Ultrasonic_Rangerのトリガー信号とエコー信号は1つのSIGピンを共有します。

**[Grove - 16 x 2 LCD（白地に青文字）](https://www.seeedstudio.com/Grove-16-x-2-LCD-White-on-Blu-p-3196.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd.jpg)

このGrove - 16x2 LCDモジュールは、16文字×2行のLCDディスプレイで、I2Cバスインターフェースを使用して開発ボードと通信します。これにより、ピンヘッダーが10本から2本に削減され、Groveシステムにとって非常に便利です。このLCDディスプレイモジュールはカスタマイズされた文字もサポートしており、簡単なコーディング設定でハートのシンボルやスティックマンを作成して表示することができます。

## はじめに

### 最低限必要なもの

- micro USB ケーブル
- Raspberry Pi
- SD カード
- Raspberry Pi 用 Grove ベースキット

### 基本チュートリアル

#### Arduino IDE の基本設定

#### Raspbian イメージの書き込み方法

**1. Raspbian Stretch のダウンロード**

[Raspberry Pi 公式サイト](https://www.raspberrypi.org/downloads/raspbian/)から [Raspbian Stretch](https://www.raspberrypi.org/downloads/raspbian/) をダウンロードし、「デスクトップと推奨ソフトウェア付き」バージョンを選択してください。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss0.png)

**2. Win32 Disk Imager**

- [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/) を Sourceforge プロジェクトページからインストーラー形式でダウンロードし、インストールを実行します。

- SD カードを SD カードリーダーに挿入し、PC に接続します。

- デスクトップまたはメニューから Win32DiskImager ユーティリティを実行します。

- デバイスボックスで、SD カードの対応するドライブ文字を選択します。正しいドライブを選択するよう注意してください。間違ったドライブを選択すると、コンピュータのハードディスク上のデータが破損する可能性があります！コンピュータの SD カードスロットを使用していて、Win32DiskImager ウィンドウにドライブが表示されない場合は、外部 SD アダプターを試してください。

- 「Write」をクリックし、書き込みが完了するのを待ちます。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss1.png)

- 完了。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss2.png)

- イメージャーを終了し、SD カードを取り出します。

#### 基本設定

**無線接続と SSH**

**1.** 「wpa_supplicant.conf」という名前のファイルを /boot フォルダに作成し、以下のコードをコピーします。

```txt
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

:::note
Wi-Fi 名とパスワードは、PC が接続しているローカル Wi-Fi と同じである必要があります（PC と Raspberry Pi が同じ LAN に接続されていることを確認してください）。
:::

**2.** 「ssh」という名前の空のファイルを /boot フォルダに作成します。

**3.** Raspbian を挿入した SD カードを Raspberry Pi に挿入します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/sd_card.jpg)

**4.** Raspberry Pi を電源に接続し、起動します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/power.jpg)

**5.** PC と Raspberry Pi を接続するために putty を開きます。

putty のダウンロード：[https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png)

**Raspberry Pi**
デフォルトのユーザー名 : pi  
デフォルトのパスワード : raspberry

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss4.jpg)

**VNC 設定**

**1.** ターミナルで以下のコマンドを入力して raspi-config を開きます。

```bash
sudo raspi-config
```

矢印キーで「5 interfacing Options」に移動し、「Enter」を押して選択します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

矢印キーで「P3 VNC」に移動し、「Enter」を押して選択します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss6.png)

「Yes」を選択して有効にします。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss7.png)

「Ok」を選択します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss8.png)

**2.** VNC Viewer をインストールします。

[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) をダウンロードします。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss9.png)

VNC Viewer を開き、Raspberry Pi の IP アドレスを入力します。IP アドレスは、Raspberry Pi のターミナルで `ifconfig` コマンドを入力することで確認できます（または raspberrypi.local を入力することもできます）。

:::note
raspberrypi.local を使用して Pi にログインする場合、LAN 内で使用中の Raspberry Pi が 1 台だけであることを確認してください。
:::

デフォルトのユーザー名とパスワードを入力すると、Raspberry Pi のリモートデスクトップにアクセスできます！

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss10.png)

成功！

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss11.PNG)

**ベースハットの設定**

**1.** Raspberry Pi をシャットダウンします。

```bash
sudo shutdown -h now
```

Raspberry Pi に Grove Base Hat for Raspberry Pi を接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pi&hat.jpg)

**2.** micro USB ケーブルで Raspberry Pi に電源を供給し、I2C を有効にします。

ターミナルで以下のコマンドを入力して raspi-config を開きます。

```bash
sudo raspi-config
```

矢印キーで「5 interfacing Options」に移動し、「Enter」を押して選択します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

矢印キーで「P5 I2C」に移動し、「Enter」を押して選択します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss13.png)

「Yes」を選択して有効にします。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss14.png)

「Ok」を選択します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss15.png)

「Finish」を選択して変更を保存します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss16.png)

**3.** 以下のコマンドを使用して、ワンクリックでインストールを実行します。

```bash
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss12.PNG)

すべてが正常に進行すると、以下の通知が表示されます。

```bash
Successfully installed grove.py-0.6
#######################################################
Lastest Grove.py from github install complete   !!!!!
#######################################################
```

**4.** ワンクリックインストール以外にも、[すべての依存関係をインストール](https://github.com/Seeed-Studio/grove.py#installation)することができます。

**5.** 最新の python.py リポジトリライブラリをクローンします。

```bash
git clone https://github.com/Seeed-Studio/grove.py
```

### Grove – LED ボタンデモ

すべての基本的なRaspberry Piのセットアップが完了したら、LEDデモコードを実行できます。注意：以下を続けるには、上記の手順を完了している必要があります。

**ハードウェア接続**

ステップ 1: Grove - Red LED Button を Base Hat の D5 ポートに接続します。

ステップ 2: Base Hat を Raspberry Pi に挿入します。

ステップ 3: Raspberry Pi を micro USB ケーブルで電源に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDbutton.png)

**コードのアップロード**

ステップ 1: 以下のコマンドを実行して Python ファイルを作成します。

```bash
cd grove.py
nano example.py
```

ステップ 2: 以下のコードを Python ファイルにコピーします。

:::caution
 テキストエディタが Unix フォーマットであることを確認してください。
:::

```python
#!/usr/bin/env python

import time
from grove.grove_ryb_led_button import GroveLedButton

def main():
    ledbtn = GroveLedButton(5)
    
    while True:
        ledbtn.led.light(True)
        time.sleep(1)
        
        ledbtn.led.light(False)
        time.sleep(1)

if __name__ == '__main__':
    main()
```

ステップ 3: プログラムを実行します。

```bash
sudo chmod +x  example.py
sudo ./example.py
```

LEDボタンをシングルクリックすると、LEDが「ON」モードに変わり、長押しすると「OFF」になります。LEDボタンをダブルクリックすると、LEDが点滅します。

```bash
pi@raspberrypi:~/grove.py $ sudo ./example.py
turn on  LED
turn on  LED
turn off LED
turn on  LED
blink    LED
^CTraceback (most recent call last):
  File "./example.py", line 17, in <module>
    main()
  File "./example.py", line 14, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

**点滅コードの説明**

Pythonでは、モジュールが相互に参照されるため、異なるモジュールが異なる「**main**」定義を持つ場合があります。ただし、実行時には1つのエントリプログラムしか存在できません。エントリプログラムの選択は **name** の値に依存します。「if__name__=='**main**'」が等しい場合、それはPythonエミュレーションのエントリを意味します。

```python
if __name__ == '__main__':
    main()
```

## Raspberry Pi 用 Grove Base Kit

 さあ、Groveシステムを探索する準備はできましたか？基本的なGroveモジュールを使い始めるための8つのチュートリアルを用意しました。このセクションでは、モジュールをどのように組み合わせて実際のアプリケーションに適用できるかを紹介します。

### 前提条件

Groveチュートリアルを始めるには、Raspberry PiとPythonプログラミング言語の基本的な知識が必要です。上記の基本セットアップチュートリアルを正常に完了し、LED点滅デモを終了して、Raspberry PiとGrove Base Hatが完全に動作していることを確認してください。

### 学習成果

- Grove Base Hatを使用してGroveモジュールを使ったアプリケーションを構築できるようになる。
- Grove Starter Kitの各コンポーネントをデモンストレーションし、このチュートリアル後に関連モジュールを自分のプロジェクトで活用できるようになる。
- このキットに含まれるモジュールの種類とその用途を識別できるようになる。
- アナログ信号とデジタル信号の違いを理解する。

### レッスン 1: ブザー

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer.jpg)

**目的**

ブザーを使用して音を生成し、特定の周波数を設定して音階を作成します。

**ハードウェア要件**

自分で準備するもの

- micro-USB ケーブル
- Raspberry Pi 3 Model B
- コンピュータ

キットに含まれるもの

- Grove Base Hat
- Grove ケーブル
- Grove – Buzzer

**ハードウェア接続**

**ステップ 1.** Groveケーブルを使用してGrove - BuzzerをBase HatのPWMポートに接続し、HatをRaspberry Piに挿入します。

**ステップ 2.** Raspberry Piをmicro USBケーブルで電源に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer&pi.jpg)

**ソフトウェアプログラミング**

:::note
Python.pyリポジトリライブラリをRaspberry Piにクローンしていることを確認してください。
:::

ステップ 1: 以下のコマンドを実行してPythonファイルを作成します。

```bash
cd grove.py
nano lesson_1.py
```

ステップ 2: 以下のコードをコピーします。

```python
#!/usr/bin/env python
import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

def main():
    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))
    
    CHORDS = [upmBuzzer.BUZZER_DO, upmBuzzer.BUZZER_RE, upmBuzzer.BUZZER_MI, 
        upmBuzzer.BUZZER_FA, upmBuzzer.BUZZER_SOL, upmBuzzer.BUZZER_LA, 
        upmBuzzer.BUZZER_SI]
    for i in range(0, len(CHORDS)):
        buzzer.playSound(CHORDS[i], 500000)
        time.sleep(0.1)
    
    del buzzer
    print('application exiting...')

if __name__ == '__main__':
    main()
```

ステップ 3: プログラムを実行します。

```bash
sudo chmod +x lesson_1.py
sudo ./lesson_1.py
```

すべてが正常に動作すれば、ブザーが「ドレミファソラシ」の音を出していることに気付くはずです。

### レッスン 2: 赤色LEDボタン

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDButton.jpg)

**目的**

Grove - Red LED Buttonを使用してLEDの点滅を制御し、Grove - Buzzerで異なる音響効果を作成します。

**ハードウェア要件**

自分で準備するもの

- micro-USB ケーブル
- Raspberry Pi 3 Model B
- コンピュータ

キットに含まれるもの

- Grove Base Hat
- Grove ケーブル
- Grove - Red LED Button
- Grove – Buzzer

**ハードウェア接続**

**ステップ 1.** Groveケーブルを使用してGrove - BuzzerをPWMポートに、Grove - Red LED ButtonをBase HatのD5に接続し、HatをRaspberry Piに挿入します。

**ステップ 2.** Raspberry Piをmicro USBケーブルで電源に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Buzzer&Button.png)

**ソフトウェアプログラミング**

:::note
Python.pyリポジトリライブラリをRaspberry Piにクローンしていることを確認してください。
:::

ステップ 1: 以下のコマンドを実行してPythonファイルを作成します。

```bash
cd grove.py
nano lesson_2.py
```

ステップ 2: 以下のコードをコピーします。

```python
#!/usr/bin/env python

import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

from grove.button import Button
from grove.grove_ryb_led_button import GroveLedButton

def main():
    # Grove - LED Button connected to port D5
    button = GroveLedButton(5)
    
    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))
    
    def on_event(index, event, tm):
        if event & Button.EV_SINGLE_CLICK:
            print('single click')
            button.led.light(True)
            buzzer.playSound(upmBuzzer.BUZZER_DO, 500000)
            
        elif event & Button.EV_LONG_PRESS:
            print('long press')
            button.led.light(False)
            buzzer.playSound(upmBuzzer.BUZZER_DO, 1000000)
            
    button.on_event = on_event
    
    while True:
        time.sleep(1)

if __name__ == '__main__':
    main()
```

**ステップ 3：プログラムを実行する**

```bash
sudo chmod +x lesson_2.py
sudo ./lesson_2.py
```

:::tip success
すべてが正常に動作すれば、LEDボタンを長押しするとLEDが消灯し、ブザーが長い「ド」の音を発します。一方、ボタンを短く押すとLEDが点灯し、ブザーが短い「ド」の音を発します。
:::

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_2.py
single click
single click
single click
long press
single click
long press
long press
Traceback (most recent call last):
  File "./lesson2.py", line 34, in <module>
    main()
  File "./lesson2.py", line 31, in main
    time.sleep(1)
KeyboardInterrupt
^Cpi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LED&Buz_demo.jpg)

### レッスン 3: 光センサー

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lightsensor.jpg)

**目的**

このレッスンでは、Grove - 光センサーを使用してGrove - サーボを制御する方法を学びます。この場合、サーボの回転角度は光の強度に応じて変化します。

**必要なハードウェア**

自分で準備するもの

- micro-USB ケーブル
- Raspberry Pi 3 Model B
- コンピュータ

キットに含まれるもの

- Grove Base Hat
- Grove ケーブル
- Grove - 光センサー
- Grove - サーボ

**ハードウェア接続**

**ステップ 1** Grove - 光センサーをポート A0 に接続し、Grove - サーボを PWM ポートに接続します。

**ステップ 2** Base Hat を Raspberry Pi に挿入します。

**ステップ 3** Raspberry Pi を micro USB ケーブルで電源に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/servo&light.png)

**ソフトウェアプログラミング**

:::note
Python ライブラリリポジトリを Raspberry Pi にクローンしていることを確認してください。
:::

ステップ 1: 以下のコマンドを実行して Python ファイルを作成します

```bash
cd grove.py
nano lesson_3.py
```

ステップ 2: 以下のコードをコピーします

```python
#!/usr/bin/env python

import time

from grove.grove_servo import GroveServo
from grove.grove_light_sensor_v1_2 import GroveLightSensor

def main():
    # Grove - サーボを PWM ポートに接続
    servo = GroveServo(12)

    # Grove - 光センサーをポート A0 に接続
    sensor = GroveLightSensor(0)

    while True:
        angle = sensor.light * 180 / 1000
        print('光の値 {}, {} 度に回転します。'.format(sensor.light, angle))
        servo.setAngle(angle)

        time.sleep(1)

if __name__ == '__main__':
    main()
```

ステップ 3：プログラムを実行する

```bash
sudo chmod +x lesson_3.py
sudo ./lesson_3.py
```

すべてが正常に動作すれば、光の強度の変化に応じてサーボの回転角度が変化します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/light_on&off.jpg)

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_3.py
光の値 300, 113 度に回転します。
光の値 80, 80 度に回転します。
光の値 166, 165 度に回転します。
光の値 498, 132 度に回転します。
光の値 601, 60 度に回転します。
光の値 200, 21 度に回転します。
光の値 459, 99 度に回転します。
光の値 172, 173 度に回転します。
光の値 319, 138 度に回転します。
^CTraceback (most recent call last):
  File "./lesson3.py", line 23, in <module>
    main()
  File "./lesson3.py", line 20, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

### レッスン 4: モーションセンサー & リレー

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir+relay.jpg)

**目的**

Grove - mini PIR モーションセンサーを使用して動きを検出し、人が近づいた場合にライトを点灯させます。

**必要なハードウェア**

自分で準備するもの

- micro-USB ケーブル
- Raspberry Pi 3 Model B
- コンピュータ

キットに含まれるもの

- Grove Base Hat
- Grove ケーブル
- Grove - mini PIR モーションセンサー
- Grove - リレー

**ハードウェア接続**

**ステップ 1** Grove - mini PIR モーションセンサーをポート D5 に接続し、Grove - リレーを Base Hat のポート D16 に接続します。

**ステップ 2** Base Hat を Raspberry Pi に挿入します。

**ステップ 3** Raspberry Pi を micro USB ケーブルで電源に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir&relay.png)

**ソフトウェアプログラミング**

:::note
Python ライブラリリポジトリを Raspberry Pi にクローンしていることを確認してください。
:::

ステップ 1: 以下のコマンドを実行して Python ファイルを作成します

```bash
cd grove.py
nano lesson_4.py
```

ステップ 2: 以下のコードをコピーします

```python
#!/usr/bin/env python

import time

from grove.grove_mini_pir_motion_sensor import GroveMiniPIRMotionSensor
from grove.grove_relay import GroveRelay

def main():
    # Grove - mini PIR モーションセンサーをポート D5 に接続
    sensor = GroveMiniPIRMotionSensor(5)
    
    # Grove - リレーをポート D16 に接続
    relay = GroveRelay(16)
    
    def on_detect():
        print('動きを検出しました')
        
        relay.on()
        print('リレーがオンになりました')
        
        time.sleep(1)
        
        relay.off()
        print('リレーがオフになりました')
    
    sensor.on_detect = on_detect
    
    while True:
        time.sleep(1)

if __name__ == '__main__':
    main()
```

ステップ 3：プログラムを実行する

```bash
sudo chmod +x lesson_4.py
sudo ./lesson_4.py
```

すべてが正常に動作すれば、動きを検出するとリレーがオン/オフする様子が確認できます。

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_4.py
動きを検出しました
リレーがオンになりました
リレーがオフになりました
動きを検出しました
リレーがオンになりました
リレーがオフになりました
^CTraceback (most recent call last):
  File "./lesson_4.py", line 33, in <module>
    main()
  File "./lesson_4.py", line 30, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir_light.jpg)

### レッスン 5: 超音波センサー & リレー

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra+relay.jpg)

**目的**

このレッスンでは、Grove - 超音波レンジャーを使用して距離を検出します。誰かが近づくと、Grove - リレーのライトが「オン」になります。

**必要なハードウェア**

自分で準備するもの

- micro-USB ケーブル
- Raspberry Pi 3 Model B
- コンピュータ

キットに含まれるもの

- Grove Base Hat
- Grove ケーブル
- Grove - 超音波レンジャー
- Grove - リレー

**ハードウェア接続**

**ステップ 1** Grove - 超音波レンジャーをポート D5 に接続し、Grove - リレーを Base Hat のポート D16 に接続します。

**ステップ 2** Base Hat を Raspberry Pi に挿入します。

**ステップ 3** Raspberry Pi を micro USB ケーブルで電源に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra&relay.png)

**ソフトウェアプログラミング**

:::note
Python.py リポジトリライブラリを Raspberry Pi にクローンしていることを確認してください。
:::

ステップ 1: 以下のコマンドを実行して Python ファイルを作成します。

```bash
cd grove.py
nano lesson_5.py
```

ステップ 2: 以下のコードをコピーします。

```python
#!/usr/bin/env python

import time

from grove.grove_relay import GroveRelay
from grove.grove_ultrasonic_ranger import GroveUltrasonicRanger

def main():
    # Grove - Ultrasonic Ranger をポート D5 に接続
    sensor = GroveUltrasonicRanger(5)
    
    # Grove - Relay をポート D16 に接続
    relay = GroveRelay(16)
    
    while True:
        distance = sensor.get_distance()
        print('{} cm'.format(distance))
        
        if distance < 20:
            relay.on()
            print('リレーオン')
            
            time.sleep(1)
            
            relay.off()
            print('リレーオフ')
            
            continue
        
        time.sleep(1)

if __name__ == '__main__':
    main()
```

ステップ 3：プログラムを実行します。

```bash
sudo chmod +x lesson_5.py
sudo ./lesson_5.py
```

すべてが正常に動作すれば、光の強度の変化に応じてサーボの回転角度が変わることが確認できます。

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_5.py
253.722585481 cm
253.739028141 cm
252.896341784 cm
1.20442489098 cm
リレーオン
リレーオフ
4.51762100746 cm
リレーオン
リレーオフ
253.985668051 cm
^CTraceback (most recent call last):
  File "./lesson_5.py", line 34, in <module>
    main()
  File "./lesson_5.py", line 31, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra_light.jpg)

さて、レッスン 4 とレッスン 5 の結果を比較してみてください。Grove - mini PIR モーションセンサーと Grove Ultrasonic Ranger の利点と欠点を挙げることができますか？

### レッスン 6: LCD

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd.jpg)

**目的**

Grove - 16*2 LCD スクリーンを使用して「Hello World」を表示します。

**ハードウェア要件**

自分で準備するもの

- micro-USB ケーブル
- Raspberry Pi 3 Model B
- コンピュータ

キットに含まれるもの

- Grove Base Hat
- Grove ケーブル
- Grove - 16*2 LCD

**ハードウェア接続**

**ステップ 1** Grove - 16*2 LCD を Base Hat の I2C ポートに接続します。

**ステップ 2** Base Hat を Raspberry Pi に挿入します。

**ステップ 3** Raspberry Pi を micro USB ケーブルで電源に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LCD.png)

**ソフトウェアプログラミング**

:::note
Python.py リポジトリライブラリを Raspberry Pi にクローンしていることを確認してください。
:::

ステップ 1: 以下のコマンドを実行して Python ファイルを作成します。

```bash
cd grove.py
nano lesson_6.py
```

ステップ 2: 以下のコードをコピーします。

```python
#!/usr/bin/env python

import time

from grove.display.jhd1802 import JHD1802

def main():
    # Grove - 16x2 LCD(白地に青) を I2C ポートに接続
    lcd = JHD1802()

    lcd.setCursor(0, 0)
    lcd.write('hello, world!!!')

    print('アプリケーション終了...')

if __name__ == '__main__':
    main()
```

ステップ 3：プログラムを実行します。

```bash
sudo chmod +x lesson_6.py
sudo ./lesson_6.py
```

LCD スクリーンに「hello, world!!!」が表示されるはずです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/helloworld.jpg)

Grove - 16*2 LCD スクリーンを使用して他の文字を表示したい場合は、コード内の `lcd.write('hello, world!!!')` を変更するだけです。

### レッスン 7: LCD & 温湿度センサー

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd+dht11.jpg)

**目的**

Grove - 16*2 LCD スクリーンを使用して Grove - 温湿度センサーからのデータ（温度と湿度）を表示します。

**ハードウェア要件**

自分で準備するもの

- micro-USB ケーブル
- Raspberry Pi 3 Model B
- コンピュータ

キットに含まれるもの

- Grove Base Hat
- Grove ケーブル
- Grove - 16*2 LCD
- Grove - 温湿度センサー

**ハードウェア接続**

**ステップ 1** Grove - 16*2 LCD を I2C ポートに接続し、Grove - 温湿度センサーをポート D5 に接続します。

**ステップ 2** Base Hat を Raspberry Pi に挿入します。

**ステップ 3** Raspberry Pi を micro USB ケーブルで電源に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/DHT11&LCD.png)

**ソフトウェアプログラミング**

:::note
Python.py リポジトリライブラリを Raspberry Pi にクローンしていることを確認してください。
:::

ステップ 1: 以下のコマンドを実行して Python ファイルを作成し、seeed-python-dht をインストールします。

```bash
sudo pip3 install seeed-python-dht
cd grove.py
nano lesson_7.py
```

ステップ 2: 以下のコードをコピーします。

```python
#!/usr/bin/env python3

import time

from seeed_dht import DHT
from grove.display.jhd1802 import JHD1802

def main():
    # Grove - 16x2 LCD(白地に青) を I2C ポートに接続
    lcd = JHD1802()

    # Grove - 温湿度センサーをポート D5 に接続
    sensor = DHT('11', 5)

    while True:
        humi, temp = sensor.read()
        print('温度 {}C, 湿度 {}%'.format(temp, humi))

        lcd.setCursor(0, 0)
        lcd.write('温度: {0:2}C'.format(temp))

        lcd.setCursor(1, 0)
        lcd.write('湿度: {0:5}%'.format(humi))

        time.sleep(1)

if __name__ == '__main__':
    main()

```

ステップ 3：プログラムを実行します。

```bash
sudo chmod +x lesson_7.py
sudo ./lesson_7.py
```

すべてが正常に動作すれば、現在の温度と湿度の値が LCD スクリーンに表示されるはずです。

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_7.py
温度 23C, 湿度 16%
温度 22C, 湿度 17%
温度 22C, 湿度 17%
^CTraceback (most recent call last):
  File "./lesson_7.py", line 28, in <module>
    main()
  File "./lesson_7.py", line 25, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/temp&humi_LCD.jpg)

### レッスン 8: LCD & 土壌湿度センサー & ブザー

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd+moisture+buzzer.jpg)

**目的**

Grove - 16 * 2 LCD を使用して現在の湿度レベルを表示します。湿度状態が「wet」の場合、Grove - Buzzer が警告を発します。

**ハードウェア要件**

自分で準備するもの

- micro-USB ケーブル
- Raspberry Pi 3 Model B
- コンピュータ

キットに含まれるもの

- Grove Base Hat
- Grove ケーブル
- Grove - 16*2 LCD
- Grove - Moisture Sensor
- Grove - Buzzer

**ハードウェア接続**

**ステップ 1** Grove - 16*2 LCD を I2C ポートに、Grove - Moisture Sensor を A0 ポートに、Grove - Buzzer を Grove Base Hat の PWM ポートに接続します。

**ステップ 2** Base Hat を Raspberry Pi に挿入します。

**ステップ 3** micro USB を使用して Raspberry Pi を PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lesson8.png)

**ソフトウェアプログラミング**

:::note
Python.py リポジトリライブラリを Raspberry Pi にクローンしていることを確認してください。
:::

ステップ 1: 以下のコマンドを実行して Python ファイルを作成します

```bash
cd grove.py
nano lesson_8.py
```

ステップ 2： 以下のコードをコピーします

```python
#!/usr/bin/env python

import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

from grove.grove_moisture_sensor import GroveMoistureSensor
from grove.lcd.sh1107g import JHD1802

def main():
    # Grove - 16x2 LCD(White on Blue) を I2C ポートに接続
    lcd = JHD1802()
    
    # Grove - Moisture Sensor をポート A0 に接続
    sensor = GroveMoistureSensor(0)
    
    # Grove - Buzzer をポート PWM に接続
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))
    
    while True:
        mois = sensor.moisture
        if 0 <= mois and mois < 300:
            level = 'dry'
        elif 300 <= mois and mois < 600:
            level = 'moist'
        else:
            level = 'wet'
            buzzer.playSound(upmBuzzer.BUZZER_DO, 200000)
        
        print('moisture: {}, {}'.format(mois, level))
        
        lcd.setCursor(0, 0)
        lcd.write('moisture: {0:>6}'.format(mois))
        
        lcd.setCursor(1, 0)
        lcd.write('{0:>16}'.format(level))
        
        time.sleep(1)

if __name__ == '__main__':
    main()
```

ステップ 3：プログラムを実行します

```bash
sudo chmod +x lesson_8.py
sudo ./lesson_8.py
```

すべてが正常に動作すれば、LCD 画面に湿度レベルが表示されます。湿度レベルが「wet」に達すると、Buzzer が警告を発します。

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_8.py
moisture: 0, dry
moisture: 0, dry
moisture: 396, moist
moisture: 398, moist
moisture: 407, wet
moisture: 418, wet
^CTraceback (most recent call last):
  File "./lesson_8.py", line 41, in <module>
    main()
  File "./lesson_8.py", line 38, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lesson8.png)

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