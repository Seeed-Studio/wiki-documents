---
description: Grove Shield / Grove Starter Kit for Raspberry Pi Pico
title: Grove Basic Kit for Raspberry Pi Pico
keywords:
- Pi_Pico
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Starter-Kit-for-Raspberry-Pi-Pico
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Pico_hardware.png)

Raspberry Pi Picoは、低コストで高性能な新しい人気のマイクロコントローラーボードです。では、Groveセンサーをどのように統合するのでしょうか？Grove Shieldがこの問題を完璧に解決します。

Pi Pico v1.0用Grove Shieldは、Raspberry Pi Pico用のプラグアンドプレイ型シールドで、2つのI2C、3つのアナログ、2つのUART、3つのデジタルポート、SWDデバッグインターフェース、SPIピン、3.3V/5V選択可能な電源スイッチなど、さまざまな種類のGroveコネクタを統合しています。ジャンパーワイヤーやブレッドボードを使用せずに、簡単かつ迅速にプロトタイプやプロジェクトを構築でき、Picoの無限の可能性を探求することができます。このシールドボードは、Pi PicoとSeeedのGroveシステムをつなぐブリッジとして機能するスタッカブルなアドオンボードです。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 仕様

| パラメータ             | 値/範囲       |
|-----------------------|--------------|
| 動作電圧             | 3.3/5V       |
| 動作温度             | -25℃ ～ +85℃ |
| アナログポート       | 3            |
| デジタルポート       | 3            |
| UARTポート           | 2            |
| I2Cポート            | 2            |
| サイズ               | 56mm x 56mm  |

## 対応ボード

Base Shieldは[Pi Pico](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)でテストされ、完全に互換性があります。

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareoverview.png)

- **1-アナログポート**: A0、A1、A2の3つのアナログポートを含む。
- **2-デジタルポート**: D16、D18、D20の3つのデジタルポートを含む。
- **3-UARTポート**: 2つのUARTポート。
- **4-I2Cポート**: 2つのI2Cポート。
- **5-電源スイッチ**: 5V/3.3V選択可能な電源スイッチ。
- **6-SPIポート**: 1つのspi0ポート。

- **寸法**: 56mm * 56mm  

## はじめに

### プロジェクト1: ブザーから異なる音を出す

#### 必要な材料

**ステップ1.** 以下のアイテムを準備してください:

| Pi Pico | Pi Pico用Grove Shield | Grove - ブザー | Grove - ロータリー角度センサー |
|---------|--------------------------|----------------|-----------------------------|
| ![Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg) | ![Grove Shield for Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png) | ![Grove Buzzer](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png) | ![Grove Rotary Angle Sensor](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png) |
| [今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html) | [今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html) | [今すぐ購入](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) | [今すぐ購入](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html) |

**ステップ2.** GroveブザーをGrove ShieldのポートA1に接続します。

**ステップ3.** Groveロータリー角度センサーをGrove ShieldのポートA0に接続します。

**ステップ4.** Grove ShieldをPi Picoに差し込みます。

**ステップ5.** USBケーブルを使用してPi PicoをPCに接続します。

![ハードウェアセットアップ](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareconnection.jpg)

#### ソフトウェアセットアップ

**ステップ1.** Thonny IDEをダウンロードします:

- [Windows](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.exe)
- [Mac](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.pkg)

**Linux開発環境の場合**:

システムに応じてThonnyをインストールする方法は以下の通りです:

- **PC用バイナリバンドル (Thonny + Python)**:

  ```bash
  bash <(wget -O - https://thonny.org/installer-for-linux)
  ```

- **pipを使用**:

  ```bash
  pip3 install thonny
  ```

- **Debian、Raspbian、Ubuntu、Mintなどの類似ディストリビューションの場合**:

  ```bash
  sudo apt install thonny
  ```

- **Fedoraの場合**:

  ```bash
  sudo dnf install thonny
  ```

**ステップ2.** Thonnyを開き、コンピュータをRaspberry Pi Picoに接続します。Thonnyで**Run**メニューに移動し、**Select Interpreter**を選択して、ドロップダウンから"**MicroPython (Raspberry Pi Pico)**"を選択します。その後、Pi PicoのCOMポートを選択します。

**注意**: インタープリターリストに"**MicroPython (Raspberry Pi Pico)**"が表示されない場合は、Thonnyの最新バージョンがインストールされていることを確認してください。

![インタープリター選択](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/interpreter.png)
![COMポート選択](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/comport.png)

**ステップ3.** Raspberry Pi Picoが接続され、MicroPythonが実行されている場合、Thonnyは自動的にREPLに接続します。次に、以下のコードをThonny IDEにコピーして、緑色の**Run**ボタンを押します。

```python
from machine import Pin, PWM, ADC
from time import sleep

adc = ADC(0)  # ADC入力 (ノブポテンショメータ) をA0に接続
pwm = PWM(Pin(27))  # DAC出力 (ブザー) をA1に接続
pwm.freq(10000)

while True:
    val = adc.read_u16()  # A0ポートのADC値を読み取る (65535～0)
    # ブザーを駆動し、ADC値が300未満の場合はブザーをオフにする
    if val > 300:
        pwm.freq(int(val / 10))
        pwm.duty_u16(10000)
    else:
        pwm.duty_u16(0)
    
    print(val)
    sleep(0.05)
```

これで、**Groveロータリー角度センサー**を回転させると、角度を調整することでブザーから異なる音が聞こえるようになります。

### プロジェクト2: 温度と湿度の検出

<Tabs>
<TabItem  value="Old" label="オプション1: DHT11とSSD1315" default>

#### 必要な材料


**ステップ 1.** 以下のアイテムを準備してください：

<div class="table-center">
	<table align="center" style={{width: 950, height: "auto", overflowX: 'scroll', textAlign: 'left',}}>
    <tr>
        <th>Pi Pico</th>
        <th>Pi Pico用Groveシールド</th>
        <th>Grove OLEDディスプレイ 0.96" (SSD1315)</th>
        <th>Grove温湿度センサー (DHT11)</th>
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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
    </tr>
    </table>
</div>

**ステップ 2.** Grove OLEDディスプレイ 0.96" をGroveシールドのI2C1ポートに接続してください。

**ステップ 3.** Grove温湿度センサー (DHT11) をGroveシールドのD18ポートに接続してください。

**ステップ 4.** GroveシールドをPi Picoに差し込んでください。

**ステップ 5.** Pi PicoをUSBケーブルを使用してPCに接続してください。

#### ソフトウェアセットアップ

Demo 1のソフトウェアセクションを参照してください。

1. 以下のコードをThonny IDEにコピーしてください：

```python
from ssd1306 import SSD1306_I2C
from dht11 import *
from machine import Pin, I2C
from time import sleep

i2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)  # OLEDをI2C1に接続
oled = SSD1306_I2C(128, 64, i2c)
dht2 = DHT(18)  # 温湿度センサーをD18に接続

while True:
    temp, humid = dht2.readTempHumid()  # 温度と湿度を読み取る
    '''I2CポートテストとOLEDディスプレイテスト'''
    oled.fill(0)  # 画面をクリア
    oled.text("Temp:  " + str(temp), 0, 0)  # 温度を1行目に表示
    oled.text("Humid: " + str(humid), 0, 8)  # 湿度を2行目に表示
    oled.show()
    sleep(0.5)
```

2. 以下の必要なPythonファイルをローカルマシンにダウンロードしてください：
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
        
        # 約20ミリ秒間低電位にする
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
        
        # DHT11がセンサーデータ送信の準備としてバスを少なくとも80US引き上げる
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

                while(not (PINC & pinData.value())):  # 50us待機
                    pass
                    #print('50us待機')
                time.sleep_us(25)

                if(PINC & pinData.value()):
                    result |=(1<<(7-i))
                while(PINC & pinData.value()):  # '1'が終了するまで待機
                    pass
                    #print('1待機')
            self.data[j] = result

        pinData = Pin(self.Data_pin, Pin.OUT, None)
        pinData.value(1)   

        dht11_check_sum = (self.data[0]+self.data[1]+self.data[2]+self.data[3]&0xff)
        # チェックサム確認
        if(self.data[4] is not dht11_check_sum):
            print("DHT11チェックサムエラー")
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

3. Thonny IDEで**dht11.py**を開き、`ファイル -> 名前を付けて保存 -> MicroPythonデバイス`をクリックし、デバイスに**dht11.py**という名前でファイルを保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/saveas.png" style={{width:700, height:'auto'}}/></div>

<br></br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/open.png" style={{width:700, height:'auto'}}/></div>

4. 同じ手順を繰り返して、**ssd1306.py**をMicroPythonデバイスに保存します。

#### プロジェクトの実行

両方のファイルをMicroPythonデバイスに保存したら、Thonnyで緑色の**実行**ボタンを押してデモコードを実行します。

以下の画像のように、OLEDスクリーンに温度と湿度が表示されるはずです：

![OLED Display Output](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/oled1.jpg)


</TabItem>
<TabItem value="New" label="オプション 2: DHT20とLCD1602" default>

#### 必要な材料

**ステップ 1.** 以下のアイテムを準備してください：

<div class="table-center">
	<table align="center" style={{width: 950, height: "auto", overflowX: 'scroll', textAlign: 'left',}}>
    <tr>
        <th>Pi Pico</th>
        <th>Grove Shield for Pi Pico</th>
        <th>Grove 16x2 LCD (白地に青文字)</th>
        <th>Grove 温湿度センサー V2.0 (DHT20)</th>
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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-16x2-LCD-White-on-Blue.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
    </tr>
    </table>
</div>


**ステップ 2.** Grove 16x2 LCD（白地に青文字）をGrove ShieldのI2C1ポートに接続します。

**ステップ 3.** Grove 温湿度センサー V2.0（DHT20）をGrove ShieldのD18ポートに接続します。

**ステップ 4.** Grove ShieldをPi Picoに差し込みます。

**ステップ 5.** USBケーブルを使用してPi PicoをPCに接続します。

#### ソフトウェアのセットアップ

デモ1のソフトウェアセクションを参照してください。

1. 以下のコードをThonny IDEにコピーします：

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

2. 以下の必要なPythonファイルをローカルマシンにダウンロードします：
   - [DHT20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/DHT20.py)
   - [lcd1602.py](https://files.seeedstudio.com/wiki/Grove-16x2_LCD--White_on_Blue/lcd1602.py)

3. Thonny IDEで**DHT20.py**を開き、`ファイル -> 名前を付けて保存 -> MicroPythonデバイス`をクリックし、デバイスに**DHT20.py**という名前でファイルを保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/saveas.png" style={{width:750, height:'auto'}}/></div>

<br></br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/open.png" style={{width:750, height:'auto'}}/></div>

4. 同じ手順を繰り返して、**lcd1602.py**をMicroPythonデバイスに保存します。

#### プロジェクトの実行

両方のファイルをMicroPythonデバイスに保存したら、Thonnyで緑色の**実行**ボタンを押してデモコードを実行します。

以下の画像のように、OLEDスクリーンに温度と湿度が表示されるはずです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/oled_output.jpg" style={{width:750, height:'auto'}}/></div>

</TabItem>
</Tabs>

### プロジェクト 3: LEDとリレーの制御

#### 必要な材料

- ステップ 1. 以下のアイテムを準備してください：

| Pi Pico | Grove Shield for Pi Pico | Grove-button | Grove-LED | Grove relay |
|--------------|-------------|-----------------|-----------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ledsocket.png)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Button-p-766.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

- ステップ 2. Grove ボタンを Base Shield のデジタルピン 18 に接続します。
- ステップ 3. Grove LED を Base Shield のポート D16 に接続します。
- ステップ 4. Grove リレーを Base Shield のポート D20 に接続します。
- ステップ 5. Grove Shield for Pi Pico を Pi Pico に差し込みます。
- ステップ 6. Pi Pico を USB ケーブルを使用して PC に接続します。

#### ソフトウェア

デモ1のソフトウェア部分を参照してください。

以下のコードを最初に Thonny IDE にコピーしてください。

```python showLineNumbers
from machine import Pin

button = Pin(18, Pin.IN, Pin.PULL_UP) # ボタンを D18 に接続
button.irq(lambda pin: InterruptsButton(), Pin.IRQ_FALLING) # キー割り込みを設定
led = Pin(16, Pin.OUT) # LED を D16 に接続
relay = Pin(20, Pin.OUT)
tmp = 0
'''キー割り込み関数、キーが押されたときにライトの状態を変更'''
def InterruptsButton(): # ボタン入力
    global tmp
    tmp = ~tmp
    led.value(tmp)
    relay.value(tmp)
while True:  
    pass
```

緑色のボタンをクリックしてデモコードを実行してください。

その後、Grove ボタンを押すことで、LED とリレーのオン・オフを制御できます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/demo3.jpg)

### プロジェクト 4: カラーの点滅

#### 必要な材料

- ステップ 1. 以下のアイテムを準備してください:

| Pi Pico | Grove Shield for Pi Pico | RGB LED WS2813 mini |
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/redrgb.png)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html)|

- ステップ 2. RGB LED WS2813 mini を Base Shield のポート 18 に接続します。
- ステップ 3. Grove Shield for Pi Pico を Pi Pico に差し込みます。
- ステップ 4. Pi Pico を USB ケーブルを使用して PC に接続します。

#### ソフトウェア

デモ1のソフトウェア部分を参照してください。

以下のコードを最初に Thonny IDE にコピーしてください。

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

# WS2812(pin_num, led_count)
led = WS2812(18, 30)

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

次に、[ws2812.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/ws2812.py) をローカルにダウンロードしてください。Thonny を使用して ws2812.py を開き、ファイル -> 保存 -> MicroPython デバイスをクリックします。

ファイル名の列に **ws2812.py** を入力し、「OK」をクリックすると、ファイルが保存されます。ファイル -> 開く -> MicroPython デバイスで確認できます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ws2813savelocal.png)

ファイルを MicroPython デバイスに保存した後、緑色のボタンをクリックしてデモコードを実行してください。
すると、RGB LED WS2813 mini が以下のように美しい色で点滅します。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ws2813mini.gif)

### プロジェクト 5: 音と光の検出

#### 必要な材料

- ステップ 1. 以下のアイテムを準備してください:

| Pi Pico | Grove Shield for Pi Pico | Grove サウンドセンサー | Grove ライトセンサー | Grove-16x2 LCD |
|--------------|-------------|-----------------|-----------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html)|

- ステップ 2. Grove サウンドセンサーを Base Shield のアナログピン 0 に接続します。
- ステップ 3. Grove ライトセンサーを Base Shield のポート A1 に接続します。
- ステップ 4. Grove 16X2 LCD を Base Shield のポート I2C1 に接続します。
- ステップ 5. Grove Shield for Pi Pico を Pi Pico に差し込みます。
- ステップ 6. Pi Pico を USB ケーブルを使用して PC に接続します。

#### ソフトウェア

デモ1のソフトウェア部分を参照してください。

まず、以下のコードをThonny IDEにコピーしてください。

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

次に、[LCD1602.py](https://files.seeedstudio.com/wiki/Grove-16x2_LCD--White_on_Blue/lcd1602.py)をローカルにダウンロードしてください。ThonnyでLCD1602.pyを開き、ファイル->名前を付けて保存->MicroPythonデバイスをクリックします。

ファイル名欄に **LCD1602.py** と入力し、「OK」をクリックすると、ファイルが保存されます。保存されたファイルは、ファイル->開く->MicroPythonデバイスから確認できます。

:::note
この例では、使用しているLCD1602のバージョンは単色バックライト版です。フルカラーバックライト版のLCD1602を制御する必要がある場合は、このライブラリファイル内の関数を確認して使用方法を学んでください。
:::

![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/lcdlightsound.png)

ファイルをMicroPythonデバイスに保存した後、緑色のボタンをクリックしてデモコードを実行してください。
すると、以下のように音センサーと光センサーのデータを取得できます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/demo5.jpg)

### プロジェクト6: 動作検知

#### 必要な材料

- ステップ1. 以下のものを準備してください:

| Pi Pico | Grove Shield for Pi Pico| Groveサーボ | Groveミニファン | GroveミニPIRモーションセンサー |
|--------------|-------------|-----------------|-----------------|-----------------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/groveminifan.png)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/minipir.png)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html)|

- ステップ2. GroveサーボをBase Shieldのアナログピン1に接続します。
- ステップ3. GroveミニファンをBase ShieldのポートD16に接続します。
- ステップ4. GroveミニPIRモーションセンサーをBase ShieldのポートD18に接続します。
- ステップ5. Grove Shield for Pi PicoをPi Picoに差し込みます。
- ステップ6. Pi PicoをUSBケーブルを使ってPCに接続します。

#### ソフトウェア

デモ1のソフトウェア部分を参照してください。

まず、以下のコードをThonny IDEにコピーしてください。

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

緑色のボタンをクリックしてデモコードを実行してください。
すると、以下のように手をPIRセンサーの前で振ると、GroveミニファンとGroveサーボが動作します。

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/tutieshi_480x272_3s.gif)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Pico Python SDK](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/pico_python_sdk.pdf)
- **[PDF]** [回路図 (SCH)](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Grove_shield_for_PI_PICOv1.0SCH.pdf)
- **[Eagle]** [PCB & 回路図 (SCH)](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip)

## コースリソース

<div align="center"><img width = "{400}" src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/book.png"/></div>

- **[ZIP]** [MicroPythonを基にしたRaspberry Pi Pico初心者ガイド](https://files.seeedstudio.com/Seeed_EDU/Course_documents/Beginner's-Guide-for-Raspberry-Pi-Pico.zip)
- **[ZIP]** [コード](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Codes.rar)
- **[ZIP]** [ライブラリ](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Libraries.rar)

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