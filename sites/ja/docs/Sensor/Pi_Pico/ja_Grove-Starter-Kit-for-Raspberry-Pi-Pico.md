---
description: Raspberry Pi Pico 向け Grove シールド / Grove スターターキット
title: Raspberry Pi Pico 向け Grove ベーシックキット
keywords:
  - Pi_Pico
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Starter-Kit-for-Raspberry-Pi-Pico
sku: 102110537, 110061282, 102110545, 103100142, 110061283
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2025-05-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/ja/Grove-Starter-Kit-for-Raspberry-Pi-Pico/
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Pico_hardware.png)

Raspberry Pi Pico は、低コストで高性能な新しい人気のマイコンボードです。では、これに Grove センサをどのように接続すればよいのでしょうか？Grove シールドがこの問題を完璧に解決します。

Grove Shield for Pi Pico v1.0 は、Raspberry Pi Pico 向けのプラグアンドプレイシールドで、2 つの I2C、3 つのアナログ、2 つの UART、3 つのデジタルポート、SWD デバッグインターフェースと SPI ピン、3.3V/5V 切り替え可能な電源スイッチなど、さまざまな Grove コネクタを統合しています。ジャンパワイヤやブレッドボードを使わずに、簡単かつ素早くプロトタイプやプロジェクトを構築でき、Pico の無限の可能性を探求できます。このシールドボードはスタッカブルなアドオンボードで、Pi Pico と Seeed の Grove システムをつなぐブリッジとして機能します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 仕様

| パラメータ             | 値/範囲        |
|-----------------------|--------------|
| 動作電圧               | 3.3/5V       |
| 動作温度               | -25℃ ～ +85℃ |
| アナログポート         | 3            |
| デジタルポート         | 3            |
| UART ポート            | 2            |
| I2C ポート             | 2            |
| サイズ                 | 56mm x56mm   |

## 対応ボード

Base Shield は [Pi Pico](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html) でテストされており、完全に互換性があります。

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareoverview.png)

- **1-アナログポート**: A0、A1、A2 の 3 つのアナログポートを含みます。
- **2-デジタルポート**: D16、D18、D20 の 3 つのデジタルポートを含みます。
- **3-UART ポート**: 2 つの UART ポート。
- **4-I2C ポート**: 2 つの I2C ポート。
- **5-電源スイッチ**: 5V/3.3V 切り替え可能な電源スイッチ。
- **6-SPI ポート**: 1 つの spi0 ポート。

- **寸法**: 56mm * 56mm  

## はじめに

### プロジェクト 1: ブザーから異なる音を出す

#### 必要な部材

**ステップ 1.** 次のアイテムを用意します:

| Pi Pico | Grove Shield for Pi Pico | Grove - Buzzer | Grove - Rotary Angle Sensor |
|---------|--------------------------|----------------|-----------------------------|
| ![Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg) | ![Grove Shield for Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png) | ![Grove Buzzer](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png) | ![Grove Rotary Angle Sensor](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png) |
| [今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html) | [今すぐ入手](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html) | [今すぐ入手](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) | [今すぐ入手](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html) |

**ステップ 2.** Grove Buzzer を Grove Shield の A1 ポートに接続します。

**ステップ 3.** Grove Rotary Angle Sensor を Grove Shield の A0 ポートに接続します。

**ステップ 4.** Grove Shield を Pi Pico に挿し込みます。

**ステップ 5.** Pi Pico を USB ケーブルで PC に接続します。

![Hardware Setup](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareconnection.jpg)

#### ソフトウェアのセットアップ

**ステップ 1.** Thonny IDE をダウンロードします:

- [Windows](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.exe)
- [Mac](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.pkg)

**Linux 開発環境の場合**:

お使いのシステムに応じて、さまざまな方法で Thonny をインストールできます:

- **PC 向けバイナリバンドル (Thonny + Python)**:

  ```bash
  bash <(wget -O - https://thonny.org/installer-for-linux)
  ```

- **pip を使用する方法**:

  ```bash
  pip3 install thonny
  ```

- **Debian、Raspbian、Ubuntu、Mint などのディストリビューション向け**:

  ```bash
  sudo apt install thonny
  ```

- **Fedora 向け**:

  ```bash
  sudo dnf install thonny
  ```

**ステップ 2.** Thonny を開き、コンピュータを Raspberry Pi Pico に接続します。Thonny で **Run** メニューに移動し、**Select Interpreter** を選択して、ドロップダウンから "**MicroPython (Raspberry Pi Pico)**" を選びます。その後、Pi Pico 用の COM ポートを選択します。

**注意**: インタプリタ一覧に "**MicroPython (Raspberry Pi Pico)**" が表示されない場合は、Thonny の最新版がインストールされていることを確認してください。

![Interpreter Selection](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/interpreter.png)
![COM Port Selection](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/comport.png)

**ステップ 3.** Raspberry Pi Pico が接続されており MicroPython が動作していれば、Thonny は自動的に REPL に接続します。次に、以下のコードを Thonny IDE にコピーし、緑色の **Run** ボタンを押します。

```python
from machine import Pin, PWM, ADC
from time import sleep

adc = ADC(0)  # ADC input (knob potentiometer) connected to A0
pwm = PWM(Pin(27))  # DAC output (buzzer) connected to A1
pwm.freq(10000)

while True:
    val = adc.read_u16()  # Read A0 port ADC value (65535~0)
    # Drive the buzzer, turn off the buzzer when the ADC value is less than 300
    if val > 300:
        pwm.freq(int(val / 10))
        pwm.duty_u16(10000)
    else:
        pwm.duty_u16(0)

    print(val)
    sleep(0.05)
```

ここで **Grove Rotary Angle Sensor** を回転させると、角度を変えるにつれてブザーから異なる音が聞こえます。

### プロジェクト 2: 温度と湿度の検出

<Tabs>
<TabItem  value="Old" label="オプション 1: DHT11 と SSD1315" default>

#### 必要な部材

**ステップ 1.** 次のアイテムを用意します:

<div class="table-center">
 <table align="center" style={{width: 950, height: "auto", overflowX: 'scroll', textAlign: 'left',}}>
    <tr>
        <th>Pi Pico</th>
        <th>Grove Shield for Pi Pico</th>
        <th>Grove OLED Display 0.96" (SSD1315)</th>
        <th>Grove Temperature & Humidity Sensor (DHT11)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
    </tr>
    </table>
</div>

**ステップ 2.** Grove OLED Display 0.96" を Grove Shield の I2C1 ポートに接続します。

**ステップ 3.** Grove Temperature Humidity Sensor (DHT11) を Grove Shield の D18 ポートに接続します。

**ステップ 4.** Grove Shield を Pi Pico に挿し込みます。

**ステップ 5.** Pi Pico を USB ケーブルで PC に接続します。

#### ソフトウェアのセットアップ

ソフトウェアについては Demo 1 のセクションを参照してください。

1. 次のコードを Thonny IDE にコピーします:

```python
from ssd1306 import SSD1306_I2C
from dht11 import *
from machine import Pin, I2C
from time import sleep

i2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)  # OLED connected to I2C1
oled = SSD1306_I2C(128, 64, i2c)
dht2 = DHT(18)  # Temperature and humidity sensor connected to D18

while True:
    temp, humid = dht2.readTempHumid()  # Read temperature and humidity
    '''I2C port test and OLED display test'''
    oled.fill(0)  # Clear the screen
    oled.text("Temp:  " + str(temp), 0, 0)  # Display temperature on line 1
    oled.text("Humid: " + str(humid), 0, 8)  # Display humidity on line 2
    oled.show()
    sleep(0.5)
```

2. 次の必要な Python ファイルをローカルマシンにダウンロードします:
   - [ssd1306.py](https://github.com/micropython/micropython-lib/blob/master/micropython/drivers/display/ssd1306/ssd1306.py)

```python title=dht11.py
import time
from machine import Pin

MAXTIMINGS  = 85

DHT11 = 11
DHT22 = 22
DHT21 = 21
AM2301 = 21

class DHT(object):
    def __init__(self, data_pin,Type=DHT11):
        self.Data_pin = data_pin
        self.__pinData = Pin(data_pin, Pin.OUT)
        self.firstreading = True
        self.__pinData.value(1)
        self._lastreadtime = 0
        self.data=[0]*5
        self.temp = 0
        self.humid = 0

    def read(self):
        i=0
        j=0
        self.__pinData.value(1) 
        #time.sleep(0.25) 

        self.data[0] =  self.data[1] =  self.data[2] =  self.data[3] =  self.data[4] = 0 

        # now pull it low for ~20 milliseconds
        pinData = Pin(self.Data_pin, Pin.OUT, None)
        pinData.value(0) 
        time.sleep_ms(20)
        pinData.value(1)
        time.sleep_us(41)
        pinData = Pin(self.Data_pin, Pin.IN)
        DHT11_TIMEOUT = -1
        time_cnt=0
        while(0 ==pinData.value()):
            time.sleep_us(5)  
            time_cnt = time_cnt+1
            if(time_cnt > 16): 
                return

        # DHT11 pulls the bus up at least 80 US in preparation for sending sensor data.
        time_cnt=0
        while(1 == pinData.value()):
            time.sleep_us(5)   
            time_cnt = time_cnt+1
            if(time_cnt > 16): 
                return  


        for j in range(5):
            i = 0
            result=0
            PINC = 1
            for i in range(8):

                while(not (PINC & pinData.value())):  # wait for 50us
                    pass
                    #print('wait 50us')
                time.sleep_us(25)

                if(PINC & pinData.value()):
                    result |=(1<<(7-i))
                while(PINC & pinData.value()):  # wait '1' finish
                    pass
                    #print('wait 1')
            self.data[j] = result

        pinData = Pin(self.Data_pin, Pin.OUT, None)
        pinData.value(1)   

        dht11_check_sum = (self.data[0]+self.data[1]+self.data[2]+self.data[3]&0xff)
        # check check_sum
        if(self.data[4] is not dht11_check_sum):
            print("DHT11 checksum error")
        #print(self.data) 
        if ((j >= 4) and ( self.data[4] == dht11_check_sum)):
            return True 
        return False

    def readHumidity(self):
        if (self.read()):
            self.humid = float(self.data[0])
            self.humid = self.humid + float(self.data[1]/10)
        return self.humid

    def readTemperature(self):
        if (self.read()):
            self.temp = float(self.data[2])
            self.temp = self.temp + float(self.data[3]/10)
        return self.temp

    def readTempHumid(self):
        if (self.read()):        
            self.temp = float(self.data[2])
            self.temp = self.temp + float(self.data[3]/10)
            self.humid = float(self.data[0])
            self.humid = self.humid + float(self.data[1]/10)
        return self.temp , self.humid
```

3. Thonny IDE で **dht11.py** を開き、`File -> Save As -> MicroPython device` をクリックして、デバイス上に **dht11.py** という名前で保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/saveas.png" style={{width:700, height:'auto'}}/></div>

<br></br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/open.png" style={{width:700, height:'auto'}}/></div>

4. 同じ手順を繰り返して、**ssd1306.py** を MicroPython デバイスに保存します。

#### プロジェクトの実行

両方のファイルを MicroPython デバイスに保存したら、Thonny の緑色の **Run** ボタンを押してデモコードを実行します。

すると、次の画像のように、OLED 画面に温度と湿度が表示されるはずです：

![OLED Display Output](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/oled1.jpg)

</TabItem>
<TabItem value="New" label="オプション 2: DHT20 と LCD1602" default>

#### 必要な部材

**ステップ 1.** 次のアイテムを準備します：

<div class="table-center">
 <table align="center" style={{width: 950, height: "auto", overflowX: 'scroll', textAlign: 'left',}}>
    <tr>
        <th>Pi Pico</th>
        <th>Grove Shield for Pi Pico</th>
        <th>Grove 16x2 LCD (White on Blue)</th>
        <th>Grove Temperature & Humidity Sensor V2.0 (DHT20)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-10bazaar969249_front.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101020932_preview-07-min_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-16x2-LCD-White-on-Blue.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
    </tr>
    </table>
</div>

**ステップ 2.** Grove 16x2 LCD (White on Blue) を Grove Shield の I2C1 ポートに接続します。

**ステップ 3.** Grove Temperature & Humidity Sensor V2.0 (DHT20) を Grove Shield の D18 ポートに接続します。

**ステップ 4.** Grove Shield を Pi Pico に挿し込みます。

**ステップ 5.** USB ケーブルを使って Pi Pico を PC に接続します。

#### ソフトウェアのセットアップ

ソフトウェアについては Demo 1 のセクションを参照してください。

1. 次のコードを Thonny IDE にコピーします：

```python
from lcd1602 import LCD1602
from dht20 import DHT20
from machine import I2C,Pin
from time import sleep

i2c1 = I2C(1,scl=Pin(7), sda=Pin(6), freq=400000)
d = LCD1602(i2c1, 2, 16)
i2c0 = I2C(0, scl=Pin(9), sda=Pin(8),freq=400000)
dht20 = DHT20(0x38, i2c0)

while True:

    measurements = dht20.measurements
    temp_rounded = round(measurements['t'], 1)
    humidity_rounded = round(measurements['rh'], 1)
    print(f"Temperature: {temp_rounded} °C, humidity: {humidity_rounded} %RH")
    d.home()
    d.print('temp=')
    d.print(str(temp_rounded))
    d.print('C')
    sleep(1)
    d.setCursor(0, 1)
    d.print('humidity=')
    d.print(str(humidity_rounded))
    d.print('%RH')
    sleep(1)
```

2. 以下の必要な Python ファイルをローカルマシンにダウンロードします：
   - [DHT20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/DHT20.py)
   - [lcd1602.py](https://files.seeedstudio.com/wiki/Grove-16x2_LCD--White_on_Blue/lcd1602.py)

3. Thonny IDE で **DHT20.py** を開き、`File -> Save As -> MicroPython device` をクリックして、デバイス上に **DHT20.py** という名前で保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/saveas.png" style={{width:750, height:'auto'}}/></div>

<br></br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/open.png" style={{width:750, height:'auto'}}/></div>

4. 同じ手順を繰り返して、**lcd1602.py** を MicroPython デバイスに保存します。

#### プロジェクトの実行

両方のファイルを MicroPython デバイスに保存したら、Thonny の緑色の **Run** ボタンを押してデモコードを実行します。

すると、次の画像のように、OLED 画面に温度と湿度が表示されるはずです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/oled_output.jpg" style={{width:750, height:'auto'}}/></div>

</TabItem>
</Tabs>

### プロジェクト 3: LED とリレーの制御

#### 必要な部材

- ステップ 1. 次のものを準備します：

| Pi Pico | Grove Shield for Pi Pico|  Grove-button |Grove-LED|Grove relay|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ledsocket.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Button-p-766.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

- ステップ 2. Grove button を Base Shield のデジタルピン 18 に接続します。
- ステップ 3. Grove led を Base Shield の D16 ポートに接続します。
- ステップ 4. Grove Relay を Base Shield の D20 ポートに接続します。
- ステップ 5. Grove Shield for Pi Pico を Pi Pico に挿し込みます。
- ステップ 6. USB ケーブルを使って Pi Pico を PC に接続します。

#### ソフトウェア

ソフトウェアについては demo1 のセクションを参照してください。

まず、以下のコードを Thonny IDE にコピーします。

```python showLineNumbers
from machine import Pin

button = Pin(18, Pin.IN, Pin.PULL_UP)# button connect to D18
button.irq(lambda pin: InterruptsButton(),Pin.IRQ_FALLING)#Set key interrupt
led = Pin(16, Pin.OUT)#led connect to D16
relay = Pin(20, Pin.OUT)
tmp = 0
'''Key interrupt function, change the state of the light when the key is pressed'''
def InterruptsButton(): #button input
    global tmp
    tmp = ~tmp
    led.value(tmp)
    relay.value(tmp)
while True:  
    pass

```

それでは、緑色のボタンをクリックしてデモコードを実行してください。

その後、Grove button を押すことで、LED とリレーのオン／オフを制御できます。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/demo3.jpg)

### プロジェクト 4: 点滅するカラー

#### 必要な部材

- ステップ 1. 次のものを準備します：

| Pi Pico | Grove Shield for Pi Pico|  RGB LED WS2813 mini |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/redrgb.png)|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html)|

- ステップ 2. RGB LED WS2813 mini を Base Shield のポート 18 に接続します。
- ステップ 3. Grove Shield for Pi Pico を Pi Pico に挿し込みます。
- ステップ 4. USB ケーブルを使って Pi Pico を PC に接続します。

#### ソフトウェア

ソフトウェアについては demo1 のセクションを参照してください。

まず、以下のコードを Thonny IDE にコピーします。

```python showLineNumbers
from ws2812 import WS2812
import time

BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 150, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
BLUE = (0, 0, 255)
PURPLE = (180, 0, 255)
WHITE = (255, 255, 255)
COLORS = (BLACK, RED, YELLOW, GREEN, CYAN, BLUE, PURPLE, WHITE)

#WS2812(pin_num,led_count)
led = WS2812(18,30)

print("fills")
for color in COLORS:
    led.pixels_fill(color)
    led.pixels_show()
    time.sleep(0.2)

print("chases")
for color in COLORS:
    led.color_chase(color, 0.01)

print("rainbow")
led.rainbow_cycle(0)


```

それでは、[ws2812.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/ws2812.py) をローカルにダウンロードしてください。Thonny で ws2812.py を開き、file->save as->MicroPython device をクリックします。

File name 欄に **ws2812.py** と入力し、"ok" をクリックすると、File->Open->MicroPython device にファイルが保存されます。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ws2813savelocal.png)

ファイルを MicroPython デバイスに保存したら、緑色のボタンをクリックしてデモコードを実行してください。
すると、下図のように RGB LED WS2813 mini が美しい色で点滅します。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ws2813mini.gif)

### プロジェクト 5: 音と光の検出

#### 必要な材料

- ステップ 1. 以下のものを準備します：

| Pi Pico | Grove Shield for Pi Pico| grove sound sensor |Grove light sensor|Grove-16x2 LCD|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg)|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html)|

- ステップ 2. Grove sound sensor を Base Shield のアナログピン 0 に接続します。
- ステップ 3. Grove light を Base Shield のポート A1 に接続します。
- ステップ 4. Grove 16X2 lcd を Base Shield のポート I2C1 に接続します。
- ステップ 5. Grove Shield for Pi Pico を Pi Pico に挿し込みます。
- ステップ 6. Pi Pico を USB ケーブルで PC に接続します。

#### ソフトウェア

demo1 のソフトウェアの部分を参照してください。

まず、以下のコードを Thonny IDE にコピーします。

```python
#from lcd1602 import LCD1602_RGB  #LCD1602 RGB grove
from lcd1602 import LCD1602
from machine import I2C,Pin,ADC
from time import sleep
i2c = I2C(1,scl=Pin(7), sda=Pin(6), freq=400000)
d = LCD1602(i2c, 2, 16)
#d = LCD1602_RGB.display(i2c, 2, 16)
#d.set_rgb(255, 0, 0)
sleep(1)
light = ADC(0)
sound = ADC(1)

while True:

    lightVal = light.read_u16()
    soundVal = sound.read_u16()
    d.home()
    d.print('lightvalue=')
    d.print(str(lightVal))
    #d.set_rgb(0, 255, 0)
    sleep(1)
    d.setCursor(0, 1)
    d.print('soundvalue=')
    d.print(str(soundVal))
    #d.set_rgb(0, 0, 255)
    sleep(1)

```

それでは、[LCD1602.py](https://files.seeedstudio.com/wiki/Grove-16x2_LCD--White_on_Blue/lcd1602.py) をローカルにダウンロードしてください。Thonny で LCD1602.py を開き、file->save as->MicroPython device をクリックします。

File name 欄に **LCD1602.py** と入力し、"ok" をクリックすると、File->Open->MicroPython device にファイルが保存されます。

:::note
この例では、使用している LCD1602 のバージョンは単色バックライト版です。フルカラー・バックライト版の LCD1602 を制御する必要がある場合は、このライブラリファイル内の関数を確認して、その使い方を学んでください。
:::

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/lcdlightsound.png)

ファイルを MicroPython デバイスに保存したら、緑色のボタンをクリックしてデモコードを実行してください。
すると、下図のように sound sensor と light sensor のデータを取得できます。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/demo5.jpg)

### プロジェクト 6: 動きの検出

#### 必要な材料

- ステップ 1. 以下のものを準備します：

| Pi Pico | Grove Shield for Pi Pico| grove servo |Grove Mini Fan|Grove mini pir motion sensor|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/groveminifan.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/minipir.png)|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html)|

- ステップ 2. Grove servo を Base Shield のアナログピン 1 に接続します。
- ステップ 3. Grove Mini fan を Base Shield のポート D16 に接続します。
- ステップ 4. Grove Mini pir motion sensor を Base Shield のポート D18 に接続します。
- ステップ 5. Grove Shield for Pi Pico を Pi Pico に挿し込みます。
- ステップ 6. Pi Pico を USB ケーブルで PC に接続します。

#### ソフトウェア

demo1 のソフトウェアの部分を参照してください。

まず、以下のコードを Thonny IDE にコピーします。

```python
from machine import Pin,ADC,PWM
from time import sleep
import utime

miniFun = Pin(16, Pin.OUT)  
miniPir = Pin(18, Pin.IN)  

pwm_Servo=PWM(Pin(27))
pwm_Servo.freq(500)
Servo_Val =0  

while True:

    if  miniPir.value() == 1 :
        miniFun.value(1)

        while  Servo_Val<65535:
            Servo_Val=Servo_Val+50
            utime.sleep_ms(1)
            pwm_Servo.duty_u16(Servo_Val)
        while Servo_Val>0: 
            Servo_Val=Servo_Val-50
            utime.sleep_ms(1)
            pwm_Servo.duty_u16(Servo_Val)

    else :
        miniFun.value(0)

        pwm_Servo.duty_u16(0)    



```

それでは、緑色のボタンをクリックしてデモコードを実行してください。
すると、下図のように、手を pir sensor の前でさっと動かすと grove mini fan と grove servo が動作します。

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/tutieshi_480x272_3s.gif)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Pico python SDK](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/pico_python_sdk.pdf)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Grove_shield_for_PI_PICOv1.0SCH.pdf)
- **[Eagle]** [PCB&SCH](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip)

## コース用リソース

<div align="center"><img width = "{400}" src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/book.png"/></div>

- **[ZIP]** [Beginners Guide of Raspberry Pi Pico Based on MicroPython](https://files.seeedstudio.com/Seeed_EDU/Course_documents/Beginner's-Guide-for-Raspberry-Pi-Pico.zip)
- **[ZIP]** [Codes](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Codes.rar)
- **[ZIP]** [Libraries](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Libraries.rar)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
