---
description: Raspberry Pi用Grove Base Hat
title: Raspberry Pi用Grove Base Hat
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Base_Hat_for_Raspberry_Pi
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg)

現在、Groveシリーズのセンサー、アクチュエータ、ディスプレイは大きなファミリーへと成長しています。将来的にはさらに多くのGroveモジュールがGroveエコシステムに加わる予定です。Groveは、メーカー、エンジニア、教師、学生、さらにはアーティストが構築、製作、創造するのを助けることを目指しています。私たちは常に、Groveモジュールをより多くのプラットフォームと互換性を持たせる責任を感じています。そこで、Raspberry Pi用のGrove Base Hatと[Raspberry Pi Zero用のGrove Base Hat](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html)を提供します。つまり、Raspberry PiにGroveシステム全体を提供するということです。

Raspberry Pi用のGrove Base Hatは、デジタル、アナログ、I2C、PWM、UARTポートを提供し、すべてのニーズに対応します。内蔵MCUの助けを借りて、Raspberry Pi用に12ビット8チャンネルADCも利用可能です。

率直に言えば、現在約60のGroveモジュールがRaspberry Pi用のGrove Base Hatをサポートしています。しかし、私たちは新しい互換性のあるモジュールを追加し続けます。使用すればするほど、Groveが追加されます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- Raspberry Pi 2/3B/3B+/4/Zeroをサポート
- 内蔵MCU
- 12ビットADC
- 複数タイプのGroveポート  

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V|
|MCU|STM32/MM32|
|ADC|12ビット 8チャンネル|
|Groveポート|    6 デジタル <br />4 アナログ <br /> 3 I2C <br /> 1 PWM  <br /> 1 UART|
|Raspberry Pi通信バス|I2C|
|I2Cアドレス|0x04/0x08|

:::caution
動作電圧は3.3Vです。3.3Vを超える電圧を入力しないでください。そうしないとRaspberry Piが損傷する可能性があります。また、このHatはGroveポートを介して5VのGroveモジュールでは動作しません。3.3V互換のGroveモジュールを使用してください。
:::

## ハードウェア概要

### ピンアウト

**概要**

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/overview.jpg)

**GPIO**

Raspberry Piと同じピンアウト。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/1.jpg)

**PWM（パルス幅変調）**

Grove PWMポートはGPIO/BCMピン12（PWM0）およびGPIO/BCMピン13（PWM1）に接続されており、これらはRaspberry PiのハードウェアPWMピンです。さらに、すべてのGPIOピンをソフトPWMピンとして使用することもできます。

:::note
0- Groveポートの横にあるシルクスクリーン層のピン番号はBCMピン番号です。BCMピンと物理ピンの違いについては[こちら](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)を参照してください。

1- ハードウェアPWMと比較して、ソフトウェアPWMはそれほど正確ではなく、高周波数では問題が発生する可能性があります。

2- GPIO/BCMピン18もPWM0としてマークされていますが、実際にはGPIO/BCM 12とGPIO/BCM 18は同じPWMチャンネルを共有しているため、異なるレートに設定することはできません。

3- オーディオジャック出力もPWM0およびPWM1を使用するため、そのソケットでオーディオ出力を行いながらPWMを使用することはできません。
:::

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/3.jpg)

**UART**

Grove UARTポートはGPIO14（UART0 TX）およびGPIO15（UART0 RX）に接続されています。UARTは通常、GPIOを介してRaspberry Piを制御する便利な方法として使用されるほか、シリアルコンソールからカーネルブートメッセージにアクセスするため（デフォルトで有効）にも使用されます。また、Arduino、ブートローダー付きATmega、ESP8266などをRaspberry Piとインターフェースする方法としても使用できます。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/2.jpg)

**デジタル**

このボードには6つのデジタルGroveソケットがあります。通常、Groveケーブルの黄色のワイヤ（4ピンGroveソケットの上部ピンに接続される）は信号線であるため、デジタルGroveポートを**D5/D16/D18/D22/D24/D26**と名付けています。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/4.jpg)

**アナログ**

ご存知の通り、Raspberry PiにはADCがないため、アナログセンサーを直接使用することはできません。しかし、内蔵MCU STM32の助けを借りて、Grove Base Hatは外部12ビットADCとして機能し、Raspberry Piでアナログセンサーを使用することが可能になります。さらに嬉しいことに、1つではなく4つのアナログGroveソケットが利用可能です。

アナログセンサーはアナログ電圧を12ビットADCに入力します。ADCがアナログデータをデジタルデータに変換した後、デジタルデータをI2Cインターフェースを介してRaspberry Piに入力します。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/5.jpg)

**I2C**

このボードには3つのI2Cポートがあり、すべてRaspberry PiのI2Cピンに直接接続されています。この部分はI2Cハブとして考えることができます。Seeedの新しいGroveモジュールのほとんどがI2Cインターフェースを持っているため、これらの3つのポートは非常に便利です。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/7.jpg)

**SWD**

このHatにファームウェアを書き込むためにSWDポートを使用します。さらに、このセクションには3つのGPIOピン（**ピン9/ピン10/ピン11**）が表示されます。これらの3つのピンはどのGroveポートでも使用されていないため、ピンの競合を心配することなく自由に使用できます。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/6.jpg)

**Raspberry Pi用Grove Base HatとGrovePi+の比較**

| パラメータ                   | [Raspberry Pi用Grove Base Hat](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](https://wiki.seeedstudio.com/ja/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| 動作電圧             | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Groveポート                 | 6 x デジタル(3.3V); 4 x アナログ(3.3V) ; 3 x I2C(3.3V); 1 x PWM(3.3V) ; 1 x RPISER(UART) Raspberry Piに接続(3.3V) ; 1 x SWD | 7 x デジタル(5V); 3 x アナログ(5V) ;3 x I2C(5V) ;1 x SERIAL: ATMEGA328P D0/1(5V)に接続 ; 1 x RPISER: Raspberry Piに接続(3.3V) ;1 x ISP |
| Grove-デジタル               | Raspberry Piに直接接続                                                                                  | ATMEGA328Pデジタルピンに接続し、I2C信号に変換後、レベルコンバータを介してRaspberry Piに接続                      |
| Grove-アナログ                | STM32F030F4P6(12ビットADC)に接続し、I2C信号に変換後、直接Raspberry Piにルート                | ATMEGA328Pアナログピン(10ビットADC)に接続し、I2C信号に変換後、レベルコンバータを介してRaspberry Piに接続       |
| Grove-I2C                   | Raspberry Piに直接接続                                                                                  | レベルコンバータを介してRaspberry Piに接続                                                                                  |
| Grove-PWM                   | Raspberry Piに直接接続                                                                                  | NA                                                                                                                               |
| RPISER                      | Raspberry Piに直接接続                                                                                  | Raspberry Piに直接接続                                                                                                 |
| SERIAL                      | NA                                                                                                                | ATMEGA328PデジタルピンD0/D1に接続し、I2C信号に変換後、レベルコンバータを介してRaspberry Piに接続                |
| SWD                         | STM32F030F4P6にファームウェアを書き込む                                                                                    | NA                                                                                                                               |
| ISP                         | NA                                                                                                                | ATMEGA328Pにファームウェアを書き込む                                                                                                      |
| Raspberry Piコネクタピン | 40                                                                                                                | 26                                                                                                                               |

## はじめに

### ハードウェア

#### 必要な材料

-- [Raspberry Pi x1](https://www.seeedstudio.com/Raspberry-Pi-3-Model--p-3037.html)  
-- Raspberry Pi 用 Grove Base Hat x1  
-- Grove モジュール

- **ステップ 1.** Raspberry Pi に Grove Base Hat を接続します。

- **ステップ 2.** Grove モジュールを対応する Grove ポートに接続します。

- **ステップ 3.** micro-USB ケーブルで Raspberry Pi に電源を供給します。

:::caution
すべてのハードウェア接続が完了した後に Raspberry Pi の電源を入れることをお勧めします。センサーモジュールをホットプラグしないでください。そうしないと、Raspberry Pi がクラッシュする可能性があります。
:::

### ソフトウェア

:::caution
現在、このボードには市場に 2 つのバージョンがあります：STM32 バージョン (V1.1) と MM32 バージョン (V1.0)。現在出荷されているバージョンは STM32 バージョンです。

`grove.py` ライブラリを使用して Grove Base Hat for Pi を使用する際に問題が発生した場合は、ボードのバージョンを確認してください：  
1. **STM32 バージョンの場合**、I2C アドレスは `0x04` です。`/home/username/.local/lib/python3.9/site-packages/adc.py` 内の I2C アドレスを `0x04` に変更する必要があります。  
2. **MM32 バージョンの場合**、I2C アドレスは `0x08` です。`/home/username/.local/lib/python3.9/site-packages/adc.py` 内の I2C アドレスを `0x08` に変更する必要があります。  
:::

このセクションでは、**seeed grove.py** ライブラリのインストール方法と、Raspberry Pi 用 Grove Base Hat の I2C、PWM、デジタル、アナログポートの使用方法を紹介します。

:::tip
Raspberry Pi の使い方がわからない場合は、[こちら](https://www.raspberrypi.org/documentation/) を確認してから始めてください。
:::

#### アーキテクチャ

Grove センサーを操作するために、grove.py は mraa/smbus2/rpi.gpi/rpi_ws281x などの多くのハードウェアインターフェースライブラリに依存しています。

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/grove.py/raw/master/images/grove-py-arch.png" /></p>

#### インストール

:::caution
**Raspberry Pi OS >= Bullseye** を搭載した Raspberry Pi を使用している場合、このコマンドラインは **Python3 のみ** で使用してください。以下の手順は Bookworm OS 上で動作します。
:::

##### 依存関係のインストール
**リポジトリを追加**

```linux
echo "deb https://seeed-studio.github.io/pi_repo/ stretch main" | sudo tee /etc/apt/sources.list.d/seeed.list
```
**公開 GPG キーを追加**

```linux
curl https://seeed-studio.github.io/pi_repo/public.key | sudo apt-key add -
# または
# sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BB8F40F3
```
**I2C インターフェースを有効化**

```linux
sudo raspi-config
```
- Interfacing Options > I2C > Yes > Ok > Finish を選択
- I2C インターフェースを有効化

**必要なパッケージをインストール**

最新バージョンの Python3 では、パッケージ管理を分離するために *virtualenv* を使用することが推奨されます。

<Tabs>
<TabItem value="python3" label="グローバル環境" default>

```linux
sudo pip3 install rpi_ws281x
pip3 install RPi.GPIO
```
</TabItem>
<TabItem value="env" label="仮想環境" default>

```linux
sudo apt install python3-virtualenv
virtualenv -p python3 env
source env/bin/activate

pip install rpi_ws281x RPi.GPIO
```
</TabItem>
</Tabs>

:::note
Pi 5 で RPi.GPIO を使用する際に問題が発生する可能性があります。[こちら](https://forums.raspberrypi.com/viewtopic.php?t=367169#p2230294) で議論されています。RPi.GPIO を rpi-lgpio に置き換えることをお勧めします。コマンド：

```linux
pip uninstall RPi.GPIO
pip install rpi-lgpio
```
:::

##### grove.py のインストール

初心者またはライブラリユーザーの場合、オンライン方法でインストールしてください。
- 依存関係の自動インストールとライブラリの展開
- 手動操作不要で迅速に開始可能

開発者または上級ユーザーの場合、依存関係をインストールした後にソースコードで grove.py をインストールしてください。
- 完全な `grove.py` リポジトリ、ソースコード、例、ドキュメントを含む
- ソースコードや例の閲覧、ライブラリ関数の変更に適している

<Tabs>
<TabItem  value="Beginner" label="初心者またはライブラリユーザー向け" default>

グローバル環境にインストールするには、以下のコマンドを入力してください：
```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

仮想環境にインストールする場合、まず virtualenv をアクティブにしてから以下のコマンドを入力してください：
```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | bash -s -- --user-local --bypass-gui-installation
```

</TabItem>
<TabItem  value="Developer" label="開発者または上級ユーザー向け" default>

グローバル環境にインストールするには、以下のコマンドを入力してください：
```linux
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
sudo pip3 install .
```

仮想環境にインストールする場合、まず virtualenv をアクティブにしてから以下のコマンドを入力してください：

```linux
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
pip3 install .
```
</TabItem>
</Tabs>

### 使用方法

これで、Raspberry Pi 用 Grove Base Hat を使用して多数の Grove モジュールを利用できます。コマンド **grove_** を入力し、++tab++ キーを押して [サポートされている Grove リスト](https://github.com/Seeed-Studio/grove.py/tree/master/doc) を確認してください。

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
**Raspberry PiでRaspberrypi OS >= Bullseye**を使用している場合、このコマンドラインは**Python3のみ**で使用してください。
:::

デジタルポートの例として、[Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)を取り上げます。

*ハードウェア接続図*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

コマンドラインインターフェースで以下のコマンドを入力します：`grove_ultrasonic_ranger 5 6`

```python
pi@raspberrypi:~$ grove_ultrasonic_ranger 5 6
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

Grove - Ultrasonic Rangerとターゲットオブジェクト間の距離を変更すると、測定値がそれに応じて変化します。++ctrl+c++を押して終了します。

:::caution
ほとんどのGroveモジュールでは、`grove_ultrasonic_ranger 5 6`のようにピン番号パラメータを追加する必要があります。ここで、**5**と**6**はGPIO/BCMピンです。ただし、最初の例である`grove_pwm_buzzer`では、コマンドの後にパラメータを追加していないことに気付いたかもしれません。これは、PWMポートとI2Cポートではピン番号パラメータが不要だからです。Groveソケットのすぐ横にピン番号のシルクスクリーンが記載されています。
:::

**アナログポート**

:::caution
**Raspberry PiでRaspberrypi OS >= Bullseye**を使用している場合、このコマンドラインは**Python3のみ**で使用してください。
:::

アナログポートの例として、[Grove - Air quality sensor v1.3](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html)を取り上げます。

*ハードウェア接続図*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

コマンドラインインターフェースで以下のコマンドを入力します：`grove_air_quality_sensor_v1_3 0 1`

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

このセンサーを使用して空気品質を検出できます。++ctrl+c++を押して終了します。

:::note
アナログポートの場合、シルクスクリーンのピン番号は**A1, A0**のようになっていますが、コマンドではデジタルポートと同じように**0**と**1**を使用します。そのため、モジュールを正しいポートに接続してください。そうしないとピンの競合が発生する可能性があります。
:::

**I2C**

:::caution
**Raspberry PiでRaspberrypi OS >= Bullseye**を使用している場合、このコマンドラインは**Python3のみ**で使用してください。
:::

I2Cポートの例として、[Grove - OLED Display 128x64](https://www.seeedstudio.com/Grove-OLED-Display-0-9-p-781.html)を取り上げます。

*ハードウェア接続図*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg)

コマンドラインインターフェースで以下のコマンドを入力します：`grove_oled_display_128x64`

```
(env)pi@raspberrypi:~$ grove_oled_display_128x64
```

何も起こらないように見えますが、OLEDを確認すると、サイバー世界で最も有名なフレーズが表示されていることがわかります。😄

:::note
I2Cツールを使用してGroveモジュールのI2Cアドレスをスキャンすると、2つ以上のアドレスが見つかる場合があります。0x04は*Grove Base Hat for Raspberry Pi*のアドレスです。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

<br></br>

:::noteChange 注意:

ST32シリーズのチップが世界的に品薄となり、価格が数回にわたり上昇し、明確な納期がない状況です。そのため、MM32チップへの切り替えを余儀なくされました。具体的な代替モデルは以下の通りです：STM32F030F4P6TRはMM32F031F6P6に置き換えられます。チップが置き換えられた後も、製品の機能、特徴、使用方法、コードは変更されません。ただし、ファームウェアのバージョンが変更され、工場出荷時のファームウェアは異なるチップに応じて調整されています。ファームウェアを再書き込みする必要がある場合は、チップに対応するファームウェアをダウンロードしてください。
:::

## リソース

- **[Zip]** [Raspberry Pi用Grove Base Hat Eagleファイル](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip)

- **[Zip]** [Seeed Grove.pyライブラリ](https://github.com/Seeed-Studio/grove.py/archive/master.zip)

- **[Zip]** [STM32F030F4P6TRファームウェア](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/grove_rpi_base_hat-v0.2-20180905-02.zip)

- **[Zip]** [MM32F031F6P6ファームウェア](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_firmware.zip)

- **[PDF]** [STM32データシート](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6データシート](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_Datasheet.pdf)

## プロジェクト

この製品の紹介動画です。

<iframe width="560" height="315" src="https://www.youtube.com/embed/0dFQWwXOOBI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>