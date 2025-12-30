---
description: Grove Base Hat for Raspberry Pi
title: Grove Base Hat for Raspberry Pi
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Base_Hat_for_Raspberry_Pi
last_update:
  date: 12/29/2025
  author: Brandy
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg)

今日、Grove シリーズのセンサー、アクチュエーター、ディスプレイは大きなファミリーに成長しました。将来的にはより多くの Grove モジュールが Grove エコシステム全体に加わる予定です。Grove がメーカー、エンジニア、教師、学生、さらにはアーティストが構築し、作り、創造するのに役立つのを見てきました...私たちは常に Grove モジュールをより多くのプラットフォームと互換性を持たせることが私たちの責任だと感じています。今回、Raspberry Pi 用の Grove Base Hat と [Grove Base Hat for Raspberry Pi Zero](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html) をお届けします。言い換えれば、Raspberry Pi に Grove システム全体をもたらします。

Grove Base Hat for Raspberry Pi は、すべてのニーズを満たすために Digital/Analog/I2C/PWM/UART ポートを提供します。内蔵 MCU の助けにより、12 ビット 8 チャンネル ADC も Raspberry Pi で利用できます。

率直に言って、現在約 60 の Grove モジュールが Grove Base Hat for Raspberry Pi をサポートしています。しかし、新しい互換モジュールを追加し続けます。使用すればするほど、より多くの Grove が追加されます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- Raspberry Pi 2/3B/3B+/4/Zero をサポート
- 内蔵 MCU
- 12 ビット ADC
- マルチタイプ Grove ポート  

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V|
|MCU|STM32/MM32|
|ADC|12 ビット 8 チャンネル|
|Grove ポート|    6 Digital <br />4 Analog <br /> 3 I2C <br /> 1 PWM  <br /> 1UART|
|Raspberry pi 通信バス|I2C|
|I2C アドレス|0x04/0x08|

:::caution
動作電圧は 3.3V です。3.3V を超える電圧を入力しないでください。Raspberry Pi を損傷する可能性があります。さらに、この HAT は Grove ポート経由で 5V Grove モジュールと動作できません。3.3V 互換の Grove モジュールを使用してください。
:::

## ハードウェア概要

### ピン配置

**概要**

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/overview.jpg)

**GPIO**

Raspberry Pi と同じピン配置です。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/1.jpg)

**PWM（パルス幅変調）**

Grove PWM ポートは GPIO/BCM ピン 12（PWM0）と GPIO/BCM ピン 13（PWM1）に接続されており、これは Raspberry Pi のハードウェア PWM ピンです。さらに、すべての GPIO ピンをソフト PWM ピンとして使用できます。

:::note
0- Grove ポートの横にあるシルクスクリーン層のピン番号はすべて BCM ピン番号です。BCM ピンと物理ピンの違いについては [こちら](https://www.raspberrypi.org/forums/viewtopic.php?p=726435) を参照してください

1- ハードウェア PWM と比較して、ソフトウェア PWM はそれほど正確ではなく、高周波数で問題が発生します。

2- GPIO/BCM ピン 18 も PWM0 としてマークされていますが、実際には GPIO/BCM 12 と GPIO/BCM 18 は同じ PWM チャンネルを共有しているため、異なるレートに設定することはできません。

3- オーディオジャック出力も PWM 0 と PWM 1 を使用するため、そのソケットでオーディオ出力と PWM を同時に使用することはできません。
:::

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/3.jpg)

**UART**

Grove UART ポートは GPIO14（UART0 TX）と GPIO15（UART0 RX）に接続されています。UART は一般的に Pi で GPIO 経由で制御する便利な方法として、またはシリアルコンソールからカーネルブートメッセージにアクセスする方法として使用されます（デフォルトで有効）。また、Arduino、ブートローダー付き ATmega、ESP8266 などを Pi とインターフェースする方法としても使用できます。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/2.jpg)

**Digital**

このボードには 6 つのデジタル Grove ソケットがあります。通常、Grove ケーブルの黄色いワイヤー（4 ピン Grove ソケットの上部ピンに接続）が信号ワイヤーなので、デジタル Grove ポートを **D5/D16/D18/D22/D24/D26** と名付けています。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/4.jpg)

**Analog**

ご存知のように、Raspberry Pi には ADC がないため、アナログセンサーと直接動作することはできません。内蔵 MCU STM32 の助けにより、Grove ベース HAT は外部 12 ビット ADC として動作でき、これは Raspberry Pi でアナログセンサーを使用できることを意味します。さらに嬉しいことに、1 つではなく 4 つのアナログ Grove ソケットが利用できます。

アナログセンサーはアナログ電圧を 12 ビット ADC に入力します。ADC がアナログデータをデジタルデータに変換した後、I2C インターフェースを通じてデジタルデータを Raspberry Pi に入力します。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/5.jpg)

**I2C**

このボードには 3 つの I2C ポートが利用でき、すべて Raspberry Pi の I2C ピンに直接接続されています。この部分を I2C ハブと考えることができます。Seeed の新しい Grove モジュールのほとんどは I2C インターフェースを持っており、これら 3 つのポートが非常に有用であることがわかるでしょう。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/7.jpg)

**SWD**

SWD ポートを使用してこの HAT にファームウェアを書き込みます。さらに、このセクションには 3 つの GPIO ピン、つまり **ピン 9/ピン 10/ピン 11** があります。これら 3 つのピンは Grove ポートで使用されていないため、ピンの競合を心配することなく自由に使用できます。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/6.jpg)

**Grove Base Hat for Raspberry Pi 対 GrovePi+**

| パラメータ                   | [Grove Base Hat for Raspberry Pi](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](https://wiki.seeedstudio.com/ja/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| 動作電圧             | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Grove ポート                 | 6 x Digital(3.3V); 4 x Analog(3.3V) ; 3 x I2C(3.3V); 1 x PWM(3.3V) ; 1 x RPISER(UART) connect to Raspberry Pi(3.3V) ; 1 x SWD | 7 x Digital(5V); 3 x Analog(5V) ;3 x I2C(5V) ;1 x SERIAL: Connect to ATMEGA328P D0/1(5V) ; 1 x RPISER: Connect to Raspberry Pi(3.3V) ;1 x ISP |
| Grove-Digital               | Raspberry Pi に直接接続                                                                                  | ATMEGA328P デジタルピンに接続し、I2C 信号に変換してからレベルコンバーターを通じて Raspberry Pi へ                      |
| Grove-Analog                | STM32F030F4P6（12 ビット ADC）に接続し、I2C 信号に変換して Raspberry Pi に直接ルーティング                | ATMEGA328P アナログピン（10 ビット ADC）に接続し、I2C 信号に変換してからレベルコンバーターを通じて Raspberry Pi へ       |
| Grove-I2C                   | Raspberry Pi に直接接続                                                                                  | レベルコンバーターを通じて Raspberry Pi に接続                                                                                  |
| Grove-PWM                   | Raspberry Pi に直接接続                                                                                  | NA                                                                                                                               |
| RPISER                      | Raspberry Pi に直接接続                                                                                  | Raspberry Pi に直接接続                                                                                                 |
| SERIAL                      | NA                                                                                                                | ATMEGA328P デジタルピン D0/D1 に接続し、I2C 信号に変換してからレベルコンバーターを通じて Raspberry Pi へ                |
| SWD                         | STM32F030F4P6 にファームウェアを書き込み                                                                                    | NA                                                                                                                               |
| ISP                         | NA                                                                                                                | ATMEGA328P にファームウェアを書き込み                                                                                                      |
| Raspberry Pi コネクタピン | 40                                                                                                                | 26                                                                                                                               |

## 入門ガイド

### ハードウェア

#### 必要な材料

-- [Raspberry Pi x1](https://www.seeedstudio.com/Raspberry-Pi-3-Model--p-3037.html)  
-- Grove Base Hat for Raspberry Pi x1  
-- Grove モジュール

- **ステップ 1.** Grove Base Hat for Raspberry Pi を Raspberry Pi に差し込みます。

- **ステップ 2.** Grove モジュールを対応する Grove ポートに差し込みます。

- **ステップ 3.** micro-usb ケーブルで Raspberry Pi に電源を供給します。

:::caution
すべてのハードウェア接続が完了した後にRaspberry Piの電源を入れることをお勧めします。センサーモジュールのホットプラグは行わないでください。そうしないとRaspberry Piがクラッシュする可能性があります。
:::

### ソフトウェア

:::caution
現在、このボードは市場で2つのバージョンが利用可能です：STM32バージョン（V1.1）とMM32バージョン（V1.0）。現在の出荷バージョンはSTM32バージョンです。

Grove Base Hat for Piを`grove.py`ライブラリで使用する際に問題が発生した場合は、ボードのバージョンを確認してください：

1. **STM32バージョンの場合**、I2Cアドレスは`0x04`です。`/home/username/.local/lib/python3.9/site-packages/adc.py`のI2Cアドレスを`0x04`に変更する必要があります。
2. **MM32バージョンの場合**、I2Cアドレスは`0x08`です。`/home/username/.local/lib/python3.9/site-packages/adc.py`のI2Cアドレスを`0x08`に変更する必要があります。

:::

このセクションでは、**seeed grove.py**ライブラリのインストール方法と、Grove Base Hat for Raspberry PiのI2C、PWM、デジタル、アナログポートの使用方法を紹介します。

:::tip
Raspberry Piの使用方法がわからない場合は、開始前に[こちら](https://www.raspberrypi.org/documentation/)を確認してください。
:::

#### アーキテクチャ

Groveセンサーを操作するために、grove.pyはmraa/smbus2/rpi.gpi/rpi_ws281xなどの多くのハードウェアインターフェースライブラリに依存しています。

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/grove.py/raw/master/images/grove-py-arch.png" /></p>

#### インストール

:::tip
仮想環境は現在、Bookwormで再現するための最も安定した推奨方法です。
:::

##### 依存関係のインストール

**リポジトリの追加**

```linux
echo "deb https://seeed-studio.github.io/pi_repo/ stretch main" | sudo tee /etc/apt/sources.list.d/seeed.list
```

**公開GPGキーの追加**

```linux
curl https://seeed-studio.github.io/pi_repo/public.key | sudo tee /etc/apt/trusted.gpg.d/seeed.gpg > /dev/null
sudo apt update
```

**基盤となる依存関係のインストール（グローバルで問題ありません）**

```linux
# Optional: Seeed binary package (not needed for most sensors)
sudo apt install libbmi088 libbma456
# Required: Python layer dependencies
pip install smbus2 pyserial seeed-python-dht   # DHT DHT series required
```

**I2Cインターフェースの有効化**

```linux
sudo raspi-config
```

- Interfacing Options>I2C>Yes>Ok>Finishを選択
- I2Cインターフェースを有効化

**必要なパッケージのインストール**
:::tip
Python3の最新バージョンでは、分離されたパッケージ管理のために*virtualenv*の使用が推奨されています。
:::

:::tip
**Raspberry Pi with Raspberrypi OS >= Bullseye**を使用している場合は、このコマンドラインを**Python3でのみ**使用する必要があります。以下の手順はBookworm OSで動作します。
:::

<Tabs>

<TabItem value="env" label="仮想環境" default>

```linux
# Create once
mkdir ~/grove_env && cd ~/grove_env
python3 -m venv --system-site-packages env
# From now on, you need to run this first every time you open the terminal.
source ~/grove_env/env/bin/activate 
```

</TabItem>
</Tabs>




##### grove.pyのインストール

初心者またはライブラリユーザーのみの場合は、オンライン方式でインストールしてください。

- 自動依存関係インストールとライブラリデプロイメント。
- 素早く開始でき、手動操作は不要です。

開発者または上級ユーザーの場合は、依存関係をインストールしてからソースコードでgrove.pyをインストールしてください。

- 完全な`grove.py`リポジトリ、ソースコード、例、ドキュメントが含まれます
- ソースコードと例の表示、ライブラリ機能の変更に適しています

<Tabs>
<TabItem  value="Beginner" label="初心者またはライブラリユーザー向け" default>

グローバル環境にインストールするには、以下のコマンドを入力できます：

```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

仮想環境にインストールしたい場合は、まずvirtualenvをアクティブ化してから以下のコマンドを入力してください：

```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | bash -s -- --user-local --bypass-gui-installation
```

</TabItem>
<TabItem  value="Developer" label="開発者または上級ユーザー向け" default>




グローバル環境にインストールするには、以下のコマンドを入力できます：

```linux
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
sudo pip3 install .
```

仮想環境にインストールしたい場合は、まずvirtualenvをアクティブ化してから以下のコマンドを入力してください：

```linux
# Execute in a virtual environment
cd ~/grove_env
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
pip3 install .
```

</TabItem>
</Tabs>

:::note

 Raspberry Piのアップデートにより、ワンクリックインストールスクリプトは比較的古く、ワンクリックインストールが機能しない場合があります。2番目の方法 - より安定したソースコード方式を使用してGroveライブラリをダウンロードすることをお勧めします。

:::

**ルーチン実行のための一般的なテンプレート（新しいターミナルを開くたびに）**

仮想環境
```linux
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
python grove_xxx.py          # xxx = Module Name
```

グローバル環境
```linux
 grove_xxx.py          # xxx = Module Name
```

### 使用方法

これで、Grove Base Hat for Raspberry Piを数十のGroveモジュールと一緒に使用できます。コマンド**grove_**を入力して++tab++キーを押すと、[サポートされているGroveリスト](https://github.com/Seeed-Studio/grove.py/tree/master/doc)を確認できます。

```linux
(env) pi@raspberrypi:~ $ grove_
grove_12_key_cap_i2c_touch_mpr121
grove_16x2_lcd
grove_1wire_thermocouple_amplifier_max31850
grove_3_axis_accelerometer_adxl372
grove_3_axis_compass_bmm150
grove_3_axis_digital_accelerometer
grove_4_digit_display
grove_6_axis_accel_gyro_bmi088
grove_air_quality_sensor_v1_3
grove_button
grove_cap_touch_slider_cy8c
grove_collision_sensor
grove_current_sensor
grove_gesture_sensor
grove_gpio
grove_high_accuracy_temperature
grove_i2c_color_sensor_v2
grove_i2c_motor_driver
grove_i2c_thermocouple_amplifier_mcp9600
grove_imu_9dof_icm20600_ak09918
grove_lcd_1.2inches
grove_led
grove_light_sensor_v1_2
(env) pi@raspberrypi:~ $ grove_
grove_12_key_cap_i2c_touch_mpr121
grove_16x2_lcd
grove_1wire_thermocouple_amplifier_max31850
grove_3_axis_accelerometer_adxl372
grove_3_axis_compass_bmm150
grove_3_axis_digital_accelerometer
grove_4_digit_display
grove_6_axis_accel_gyro_bmi088
grove_air_quality_sensor_v1_3
grove_button
grove_cap_touch_slider_cy8c
grove_collision_sensor
grove_current_sensor
grove_gesture_sensor
grove_gpio
grove_high_accuracy_temperature
grove_i2c_color_sensor_v2
grove_i2c_motor_driver
grove_i2c_thermocouple_amplifier_mcp9600
grove_imu_9dof_icm20600_ak09918
grove_lcd_1.2inches
grove_led
grove_light_sensor_v1_2
grove_loudness_sensor
grove_mech_keycap
grove_mini_pir_motion_sensor
grove_moisture_sensor
grove_multi_switch
grove_multi_switch_poll
grove_oled_display_128x64
grove_optical_rotary_encoder
grove_piezo_vibration_sensor
grove_pwm_buzzer
grove_recorder_v3_0
grove_relay
grove_rotary_angle_sensor
grove_round_force_sensor
grove_ryb_led_button
grove_servo
grove_slide_potentiometer
grove_sound_sensor
grove_step_counter_bma456
grove_switch
grove_temperature_humidity_bme680
grove_temperature_humidity_sht31
grove_temperature_sensor
grove_thumb_joystick
grove_tilt_switch
grove_time_of_flight_distance
grove_touch_sensor
grove_ultrasonic_ranger
grove_uv_sensor
grove_water_sensor
grove_ws2813_rgb_led_strip
```

次に、ポートタイプに応じた使用方法を説明します。

**デジタルポート**

:::caution
**Raspberry Pi with Raspberrypi OS >= Bullseye**を使用している場合は、このコマンドラインを**Python3でのみ**使用する必要があります。
:::

デジタルポートの紹介として、[Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)を例に取ります。

*ハードウェア接続図*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

コマンドラインインターフェースで以下のコマンド`grove_ultrasonic_ranger 5 6`を入力してください。

```python
pi@raspberrypi:~$  grove_ultrasonic_ranger 5 6
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

Grove - Ultrasonic Rangerとターゲットオブジェクトの間の距離を変更すると、測定値がそれに応じて変化します。
++ctrl+c++を押して終了してください。

:::caution
ほとんどのGroveモジュールでは、`grove_ultrasonic_ranger 5 6`のようにピン番号パラメータを追加する必要があります。**5**と**6**はGPIO/BCMピンです。ただし、最初の例`grove_pwm_buzzer`では、コマンドの後にパラメータを追加しなかったことにお気づきかもしれません。これは、PWMポートとI2Cポートにはピン番号パラメータが不要だからです。ピン番号のシルクスクリーンはGroveソケットのすぐ横にあります。
:::

**アナログポート**

:::caution
**Raspberry Pi with Raspberrypi OS >= Bullseye**を使用している場合は、このコマンドラインを**Python3でのみ**使用する必要があります。
:::

アナログポートの紹介として、[Grove - Air quality sensor v1.3](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html)を例に取ります。

*ハードウェア接続図*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

コマンドラインインターフェースで以下のコマンド`grove_air_quality_sensor_v1_3 0 1`を入力してください。

```python
pi@raspberrypi:~$  grove_air_quality_sensor_v1_3 0 1
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

このセンサーを使用して空気品質を検出できます。++ctrl+c++を押して終了します。

:::note
アナログポートでは、シルクスクリーンのピン番号が**A1、A0**のようになっていることにお気づきかもしれませんが、コマンドではデジタルポートと同じように**0**と**1**のパラメータを使用します。そのため、モジュールを正しいポートに接続していることを確認してください。そうでないとピンの競合が発生する可能性があります。
:::

**I2C**

:::caution
**Raspberrypi OS >= Bullseye を搭載した Raspberry Pi**を使用している場合は、このコマンドラインを**Python3 でのみ**使用する必要があります。
:::

I2Cポートの紹介として、[Grove - OLED Display 128x64](https://www.seeedstudio.com/Grove-OLED-Display-0-9-p-781.html)を例に取り上げます。

*ハードウェア接続図*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg)

コマンドラインインターフェースで次のコマンド`grove_oled_display_128x64`を入力します。

```
(env)pi@raspberrypi:~$ python grove_oled_display_128x64
```

何も起こらなかったように見えますが、OLEDを確認すると、サイバー世界で最も有名な文章を見つけることができます。😄

:::note
I2Cツールを使用してGroveモジュールのI2Cアドレスをスキャンすると、2つ以上のアドレスが見つかる場合があります。0x04は*Grove Base Hat for Raspberry Pi*のアドレスです。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

<br></br>

:::noteChange 注意：

ST32シリーズチップが世界的に在庫切れとなり、価格が数倍に上昇し、明確な納期がないため、やむを得ずMM32チップに切り替えることになりました。具体的な代替モデルは以下の通りです：STM32F030F4P6TRはMM32F031F6P6に置き換えられます。チップ交換後も、製品の機能、特徴、使用方法、コードは変更されません。ファームウェアバージョンが変更され、工場出荷時のファームウェアは異なるチップに応じて調整されていることに注意してください。ファームウェアを再書き込みする必要がある場合は、チップに対応するファームウェアをダウンロードしてください。
:::

## リソース

- **[Zip]** [Grove Base Hat for Raspberry Pi Eagle Files](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip)

- **[Zip]** [Seeed Grove.py Library](https://github.com/Seeed-Studio/grove.py/archive/master.zip)

- **[Zip]** [STM32F030F4P6TR-Firmware](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/grove_rpi_base_hat-v0.2-20180905-02.zip)

- **[Zip]** [MM32F031F6P6-Firmware](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_firmware.zip)

- **[PDF]** [STM32 Datasheet](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6_Datasheet.pdf](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_Datasheet.pdf)

## プロジェクト

これはこの製品の紹介ビデオです。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0dFQWwXOOBI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
