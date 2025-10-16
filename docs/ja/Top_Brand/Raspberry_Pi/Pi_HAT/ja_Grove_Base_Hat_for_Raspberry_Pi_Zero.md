---
description: Raspberry Pi Zero用Grove Base Hat
title: Raspberry Pi Zero用Grove Base Hat
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Base_Hat_for_Raspberry_Pi_Zero
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/main.jpg)

現在、Groveシリーズのセンサー、アクチュエータ、ディスプレイは大きなファミリーへと成長しています。将来的にはさらに多くのGroveモジュールがGroveエコシステムに加わる予定です。Groveは、メーカー、エンジニア、教師、学生、さらにはアーティストが構築し、作り、創造するのを助けています。私たちは常に、Groveモジュールをより多くのプラットフォームと互換性を持たせる責任があると感じています。そこで、[Raspberry Pi用Grove Base Hat](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)とRaspberry Pi Zero用Grove Base Hatを提供します。つまり、Raspberry PiにGroveシステム全体をもたらします。

Raspberry Pi用Grove Base Hatは、デジタル/アナログ/I2C/PWM/UARTポートを提供し、すべてのニーズに対応します。内蔵MCUの助けを借りて、Raspberry Pi用に12ビット6チャンネルのADCも利用可能です。

率直に言えば、現在約60のGroveモジュールがRaspberry Pi用Grove Base Hatをサポートしています。しかし、私たちは引き続き新しい互換モジュールを追加していきます。使用すればするほど、より多くのGroveが追加されます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- Raspberry Pi 2/3 B/B+ Zeroをサポート
- 内蔵MCU
- 12ビットADC
- 複数タイプのGroveポート  

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V|
|MCU|STM32|
|ADC|12ビット 6チャンネル|
|Groveポート|2 デジタル <br />3 アナログ <br /> 1 I2C <br /> 1 PWM  <br /> 1 UART|
|Raspberry Pi通信バス|I2C|
|I2Cアドレス|0x04|

:::caution
動作電圧は3.3Vです。3.3Vを超える電圧を入力しないでください。そうしないとRaspberry Piが損傷する可能性があります。また、このHatはGroveポートを介して5VのGroveモジュールと動作しません。3.3V互換のGroveモジュールを使用してください。
:::

## ハードウェア概要

### ピンアウト

**概要**

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/overview.jpg)

**GPIO**

Raspberry Piと同じピンアウトです。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/1.jpg)

**デジタル**

このボードには2つのデジタルGroveソケットがあります。通常、Groveケーブルの黄色のワイヤー（4ピンGroveソケットの上部ピンに接続される）は信号線であるため、デジタルGroveポートを**D5/D16**と名付けています。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/2.jpg)

**アナログ**

ご存知の通り、Raspberry PiにはADCがないため、アナログセンサーを直接使用することはできません。しかし、内蔵MCU STM32の助けを借りて、Grove Base Hatは外部12ビットADCとして機能します。これにより、Raspberry Piでアナログセンサーを使用することが可能になります。さらに嬉しいことに、1つではなく4つのアナログGroveソケットが利用可能です。

アナログセンサーはアナログ電圧を12ビットADCに入力します。ADCがアナログデータをデジタルデータに変換した後、I2Cインターフェースを介してデジタルデータをRaspberry Piに入力します。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/4.jpg)

**PWM（パルス幅変調）**

Grove PWMポートはGPIO/BCMピン12（PWM0）およびGPIO/BCMピン13（PWM1）に接続されており、これらはRaspberry PiのハードウェアPWMピンです。さらに、すべてのGPIOピンをソフトPWMピンとして使用することもできます。

:::note
0- Groveポートの横にあるシルクスクリーン層のピン番号はBCMピン番号です。BCMピンと物理ピンの違いについては[こちら](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)を参照してください。

1- ハードウェアPWMと比較して、ソフトウェアPWMはそれほど正確ではなく、高周波数では問題が発生する可能性があります。

2- GPIO/BCMピン18もPWM0としてマークされていますが、実際にはGPIO/BCM 12とGPIO/BCM 18は同じPWMチャンネルを共有しているため、異なるレートに設定することはできません。

3- オーディオジャック出力もPWM 0およびPWM 1を使用するため、そのソケットでオーディオ出力を行いながらPWMを使用することはできません。
:::

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/5.jpg)

**I2C**

Grove I2CポートはRaspberry PiのI2Cピンに直接接続されています。Seeedの新しいGroveモジュールのほとんどがI2Cインターフェースを持っているため、このポートは非常に便利です。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/6.jpg)

**UART**

Grove UARTポートはGPIO14（UART0 TX）およびGPIO15（UART0 RX）に接続されています。UARTは、GPIOを介してRaspberry Piを制御する便利な方法として、またはシリアルコンソールからカーネルブートメッセージにアクセスする方法（デフォルトで有効）として一般的に使用されます。また、Arduino、ブートローダー付きATmega、ESP8266などをRaspberry Piとインターフェースする方法としても使用できます。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/7.jpg)

**SWD**

このHatにファームウェアを書き込むためにSWDポートを使用します。さらに、このセクションには3つのGPIOピン、すなわち**ピン9/ピン10/ピン11**が表示されています。これらの3つのピンはどのGroveポートでも使用されていないため、ピンの競合を心配することなく自由に使用できます。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/3.jpg)

## はじめに

### ハードウェア

#### 必要な材料

-- [Raspberry Pi Zero x1](https://www.seeedstudio.com/Seeedstudio-Raspberry-Pi-Zero-Barebones-Kit-p-2964.html)  
-- Raspberry Pi Zero用Grove Base Hat x1  
-- Groveモジュール

- **ステップ 1.** Raspberry Pi ZeroにGrove Base Hatを接続します。

- **ステップ 2.** Groveモジュールを対応するGroveポートに接続します。

- **ステップ 3.** micro-USBケーブルでRaspberry Pi Zeroに電源を供給します。

:::caution
すべてのハードウェア接続が完了した後にRaspberry Piを電源オンすることを推奨します。センサーモジュールをホットプラグしないでください。そうしないと、Raspberry Piがクラッシュする可能性があります。
:::

### ソフトウェア

このセクションでは、**seeed grove.py**ライブラリのインストール方法と、Raspberry Pi Zero用Grove Base HatのI2C、PWM、デジタル、アナログポートの使用方法を紹介します。

:::tip
Raspberry Piの使い方がわからない場合は、開始する前に[こちら](https://www.raspberrypi.org/documentation/)を確認してください。
:::

#### アーキテクチャ

Groveセンサーを操作するために、grove.pyはmraa/smbus2/rpi.gpi/rpi_ws281xなどの多くのハードウェアインターフェースライブラリに依存しています。

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/grove.py/raw/master/images/grove-py-arch.png" /></p>

**オンラインワンクリックインストール**

ワンクリックインストール、クイックスタート、何と呼んでも構いませんが、以下の単一コマンドを使用することで、すべての依存関係と最新のgrove.pyをインストール/更新できます。

:::caution
**Raspberry Pi OS >= Bullseye**を搭載した**Raspberry Pi**を使用している場合、このコマンドラインは使用できません。
:::

```python
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::tip success
すべてが正常に進むと、以下の通知が表示されます。

```text
        Successfully installed grove.py-0.5
        #######################################################
        Lastest Grove.py from github install complete   !!!!!
        #######################################################
```

:::

**ステップバイステップインストール**

ワンクリックインストールに加えて、すべての依存関係と最新のgrove.pyをステップバイステップでインストールすることもできます。詳細については、GitHubページを参照してください。

[ステップバイステップインストール](https://github.com/Seeed-Studio/grove.py#installation)

grove.pyライブラリをクローンしてソースファイルを確認できます。

:::caution
**Raspberry Pi OS >= Bullseye**を搭載した**Raspberry Pi**を使用している場合、このコマンドラインは**Python3のみ**で使用する必要があります。
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

#### 使用方法

:::caution
**Raspberry Pi OS >= Bullseye**を搭載した**Raspberry Pi**を使用している場合、このコマンドラインは**Python3のみ**で使用する必要があります。
:::

これで、Raspberry Pi Zero用Grove Base Hatを使用して多数のGroveモジュールを使用できます。コマンド**grove_**を入力し、`tab`キーを押してサポートされているGroveリストを確認してください。

```
pi@raspberrypi:~$ grove_
grove_3_axis_compass_bmm150        grove_i2c_color_sensor_v2          grove_mini_pir_motion_sensor       grove_rotary_angle_sensor          grove_temperature_sensor
grove_4_digit_display              grove_i2c_motor_driver             grove_moisture_sensor              grove_ryb_led_button               grove_thumb_joystick
grove_air_quality_sensor_v1_3      grove_lcd_1.2inches                grove_oled_display_128x64          grove_servo                        grove_tilt_switch
grove_button                       grove_led                          grove_piezo_vibration_sensor       grove_slide_potentiometer          grove_touch_sensor
grove_collision_sensor             grove_light_sensor_v1_2            grove_pwm_buzzer                   grove_sound_sensor                 grove_ultrasonic_ranger
grove_gesture_sensor               grove_loudness_sensor              grove_recorder_v3_0                grove_switch                       grove_water_sensor
grove_high_accuracy_temperature    grove_mech_keycap                  grove_relay                        grove_temperature_humidity_sensor  
pi@raspberrypi:~$ grove_

```

次に、ポートタイプに応じた使用方法を紹介します。

**PWMポート**

:::caution
**Raspberry Pi OS >= Bullseye**を搭載した**Raspberry Pi**を使用している場合、このコマンドラインは**Python3のみ**で使用する必要があります。
:::

ここでは、PWMポートの例として[Grove - buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)を取り上げます。

*ハードウェア接続図*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/connect1.jpg)

以下のコマンドをコマンドラインインターフェースで入力します：`sudo grove_pwm_buzzer`

```python
pi@raspberrypi:~$ sudo grove_pwm_buzzer
Insert Grove-Buzzer to Grove-Base-Hat slot PWM[12 13 VCC GND]

3800
3400
3000
2900
2550
2270
2000
exiting application
```

ブザーが数回鳴り、その後停止します。プログラムは自動的に終了します。

**デジタルポート**

:::caution
**Raspberry Pi OS >= Bullseye**を搭載した**Raspberry Pi**を使用している場合、このコマンドラインは**Python3のみ**で使用する必要があります。
:::

ここでは、デジタルポートの例として[Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)を取り上げます。

*ハードウェア接続図*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/connect2.jpg)

以下のコマンドをコマンドラインインターフェースで入力します：`grove_ultrasonic_ranger 5 6`

```python
pi@raspberrypi:~$ python3 grove_ultrasonic_ranger 5 6
Detecting distance...
6.979909436456088 cm
7.966469074117726 cm
12.451204760321255 cm
15.184797089675378 cm
17.429220265355603 cm
18.73230112010035 cm
20.717752390894397 cm
19.83807004731277 cm
17.3059003106479 cm

^CTraceback (most recent call last):
  File "/usr/local/bin/grove_ultrasonic_ranger", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_ultrasonic_ranger')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt

```

距離センサー Grove - Ultrasonic Ranger と対象物の間の距離を変更すると、測定値もそれに応じて変化します。  
`ctrl`+`c` を押して終了します。

:::caution
ほとんどの Grove モジュールでは、ピン番号のパラメータを追加する必要があります。例えば、`grove_ultrasonic_ranger 5 6` のように、**5** と **6** は GPIO/BCM ピンを指します。しかし、最初の例である `grove_pwm_buzzer` では、コマンドの後にパラメータを追加していないことに気付いたかもしれません。これは、PWM ポートや I2C ポートではピン番号のパラメータが不要だからです。Grove ソケットのすぐ横にピン番号がシルク印刷されていますので確認してください。
:::

**アナログポート**

ここでは、[Grove - Air quality sensor v1.3](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html) を例に挙げて、アナログポートについて説明します。

*ハードウェア接続図*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/connect3.jpg)

コマンドラインインターフェースで以下のコマンドを入力します：  
`grove_air_quality_sensor_v1_3 0 1`

```python
pi@raspberrypi:~$ grove_air_quality_sensor_v1_3 0 1
Detecting ...
62, Air Quality OK.
63, Air Quality OK.
61, Air Quality OK.
61, Air Quality OK.
59, Air Quality OK.
62, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
59, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.

57, Air Quality OK.
^CTraceback (most recent call last):
  File "/usr/local/bin/grove_air_quality_sensor_v1_3", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_air_quality_sensor_v1_3')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt
```

このセンサーを使用して空気の質を検出できます。`ctrl`+`c` を押して終了します。

:::note
アナログポートの場合、シルク印刷されたピン番号は **A1, A0** のようになっていますが、コマンドでは **0** と **1** を使用します。これはデジタルポートと同じです。そのため、モジュールを正しいポートに接続してください。そうしないとピンの競合が発生する可能性があります。
:::

**I2C**

ここでは、[Grove - OLED Display 128x64](https://www.seeedstudio.com/Grove-OLED-Display-0-9-p-781.html) を例に挙げて、I2C ポートについて説明します。

*ハードウェア接続図*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/connect4.jpg)

コマンドラインインターフェースで以下のコマンドを入力します：  
`grove_oled_display_128x64`

```
pi@raspberrypi:~$ grove_oled_display_128x64
pi@raspberrypi:~$ 
```

何も起こらないように見えますが、OLED を確認すると、サイバー世界で最も有名なフレーズが表示されているのがわかります。😄

:::note
I2C ツールを使用して Grove モジュールの I2C アドレスをスキャンすると、2つ以上のアドレスが見つかる場合があります。0x04 は *Grove Base Hat for Raspberry Pi* のアドレスです。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/res/Grove%20Base%20HAT%20For%20Raspberry%20Pi%20Zero.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

:::noteChange Note

ST32 シリーズのチップが世界的に品薄で、価格が数倍に上昇し、明確な納期がないため、MM32 チップに切り替えざるを得ませんでした。具体的な代替モデルは以下の通りです：STM32F030F4P6TR は MM32F031F6P6 に置き換えられます。チップが置き換えられた後も、製品の機能、特徴、使用方法、コードは変更されません。ただし、ファームウェアのバージョンが変更され、異なるチップに応じて工場出荷時のファームウェアが調整されています。ファームウェアを再書き込みする必要がある場合は、チップに対応するファームウェアをダウンロードしてください。
:::

## リソース

- **[Zip]** [Raspberry Pi Zero 用 Grove Base Hat Eagle ファイル](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/res/Grove%20Base%20HAT%20For%20Raspberry%20Pi%20Zero.zip)

- **[Zip]** [Seeed Grove.py ライブラリ](https://github.com/Seeed-Studio/grove.py/archive/master.zip)

- **[Zip]** [STM32F030F4P6TR ファームウェア](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/grove_rpi_base_hat-v0.2-20180905-02.zip)

- **[Zip]** [MM32F031F6P6 ファームウェア](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_firmware.zip)

- **[PDF]** [STM32 データシート](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6 データシート](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_Datasheet.pdf)

## プロジェクト

この製品の紹介動画はこちらです。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0dFQWwXOOBI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>