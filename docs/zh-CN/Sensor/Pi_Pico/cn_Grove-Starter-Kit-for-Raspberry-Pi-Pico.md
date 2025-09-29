---
description: Grove Shield / Grove Starter Kit for Raspberry Pi Pico
title: Grove Basic Kit for Raspberry Pi Pico
keywords:
- Pi_Pico
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Starter-Kit-for-Raspberry-Pi-Pico
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Pico_hardware.png)

Raspberry Pi Pico 是一款新的流行的低成本、高性能微控制器板，那么如何将 Grove 传感器集成到其中呢？Grove 扩展板完美地解决了这个问题。

Grove Shield for Pi Pico v1.0 是 Raspberry Pi Pico 的即插即用扩展板，集成了各种类型的 Grove 连接器，包括 2×I2C、3×模拟、2×UART、3×数字端口、SWD 调试接口和 SPI 引脚，3.3v/5v 可选电源开关。它能够以简单快速的方式构建原型和项目，无需跳线和面包板，您可以探索 Pico 的无限可能性。该扩展板是一个可堆叠的附加板，充当 Pi Pico 和 Seeed 的 Grove 系统之间的桥梁。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 规格参数

| 参数             | 数值/范围  |
|-----------------------|--------------|
| 工作电压     | 3.3/5V       |
| 工作温度 | -25℃ 到 +85℃ |
| 模拟端口          | 3            |
| 数字端口         | 3            |
| UART 端口            | 2            |
| I2C 端口             | 2            |
| 尺寸                  | 56mm x56mm   |

## 兼容板卡

该基础扩展板已测试并完全兼容 [Pi Pico](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)。

## 硬件概述

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareoverview.png)

- **1-模拟端口**：包括 3 个模拟端口，A0、A1、A2。
- **2-数字端口**：包括 3 个数字端口，D16、D18、D20。
- **3-UART 端口**：2 个 UART 端口。
- **4-I2C 端口**：2 个 I2C 端口。
- **5-电源开关**：5V/3.3V 可选电源开关。
- **6-SPI 端口**：1 个 spi0 端口。

- **尺寸**：56mm * 56mm  

## 入门指南

### 项目 1：蜂鸣器发出不同声音

#### 所需材料

**步骤 1.** 准备以下物品：

| Pi Pico | Grove Shield for Pi Pico | Grove - Buzzer | Grove - Rotary Angle Sensor |
|---------|--------------------------|----------------|-----------------------------|
| ![Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg) | ![Grove Shield for Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png) | ![Grove Buzzer](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png) | ![Grove Rotary Angle Sensor](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png) |
| [立即获取](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html) | [立即获取](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html) | [立即获取](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) | [立即获取](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html) |

**步骤 2.** 将 Grove 蜂鸣器连接到 Grove 扩展板的 A1 端口。

**步骤 3.** 将 Grove 旋转角度传感器连接到 Grove 扩展板的 A0 端口。

**步骤 4.** 将 Grove 扩展板插入 Pi Pico。

**步骤 5.** 使用 USB 线缆将 Pi Pico 连接到您的 PC。

![Hardware Setup](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareconnection.jpg)

#### 软件设置

**步骤 1.** 下载 Thonny IDE：

- [Windows](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.exe)
- [Mac](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.pkg)

**Linux 开发环境**：

您可以根据您的系统以不同方式安装 Thonny：

- **PC 二进制包（Thonny + Python）**：

  ```bash
  bash <(wget -O - https://thonny.org/installer-for-linux)
  ```

- **使用 pip**：

  ```bash
  pip3 install thonny
  ```

- **对于 Debian、Raspbian、Ubuntu、Mint 和类似发行版**：

  ```bash
  sudo apt install thonny
  ```

- **对于 Fedora**：

  ```bash
  sudo dnf install thonny
  ```

**步骤 2.** 打开 Thonny 并将您的计算机连接到 Raspberry Pi Pico。在 Thonny 中，转到 **Run** 菜单，选择 **Select Interpreter**，然后从下拉菜单中选择"**MicroPython (Raspberry Pi Pico)**"。然后，选择您的 Pi Pico 的 COM 端口。

**注意**：如果您在解释器列表中没有看到"**MicroPython (Raspberry Pi Pico)**"，请确保您安装了最新版本的 Thonny。

![解释器选择](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/interpreter.png)
![COM 端口选择](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/comport.png)

**步骤 3.** 如果 Raspberry Pi Pico 已连接并运行 MicroPython，Thonny 应该会自动连接到 REPL。现在，将以下代码复制到 Thonny IDE 中并按绿色的 **Run** 按钮。

```python
from machine import Pin, PWM, ADC
from time import sleep

adc = ADC(0)  # ADC输入（旋钮电位器）连接到A0
pwm = PWM(Pin(27))  # DAC输出（蜂鸣器）连接到A1
pwm.freq(10000)

while True:
    val = adc.read_u16()  # 读取A0端口ADC值（65535~0）
    # 驱动蜂鸣器，当ADC值小于300时关闭蜂鸣器
    if val > 300:
        pwm.freq(int(val / 10))
        pwm.duty_u16(10000)
    else:
        pwm.duty_u16(0)
    
    print(val)
    sleep(0.05)
```

现在，旋转 **Grove 旋转角度传感器**，当您调整角度时，您将听到蜂鸣器发出不同的声音。

### 项目 2：检测温度和湿度

<Tabs>
<TabItem  value="Old" label="选项 1：DHT11 和 SSD1315" default>

#### 所需材料

**步骤 1.** 准备以下物品：

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
    </tr>
    </table>
</div>

**步骤 2.** 将 Grove OLED Display 0.96" 连接到 Grove Shield 的 I2C1 端口。

**步骤 3.** 将 Grove Temperature Humidity Sensor (DHT11) 连接到 Grove Shield 的 I2C0 端口。

**步骤 4.** 将 Grove Shield 插入 Pi Pico。

**步骤 5.** 使用 USB 线缆将 Pi Pico 连接到您的 PC。

#### 软件设置

请参考演示 1 的软件部分。

1. 将以下代码复制到 Thonny IDE 中：

```python
from ssd1306 import SSD1306_I2C
from dht11 import *
from machine import Pin, I2C
from time import sleep

i2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)  # OLED连接到I2C1
oled = SSD1306_I2C(128, 64, i2c)
dht2 = DHT(18)  # 温湿度传感器连接到D18

while True:
    temp, humid = dht2.readTempHumid()  # 读取温度和湿度
    '''I2C端口测试和OLED显示测试'''
    oled.fill(0)  # 清屏
    oled.text("Temp:  " + str(temp), 0, 0)  # 在第1行显示温度
    oled.text("Humid: " + str(humid), 0, 8)  # 在第2行显示湿度
    oled.show()
    sleep(0.5)

```

2. 将以下所需的Python文件下载到您的本地机器：
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

3. 在 Thonny IDE 中打开 **dht11.py**，点击 `文件 -> 另存为 -> MicroPython 设备`，并在您的设备上以 **dht11.py** 的名称保存文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/saveas.png" style={{width:700, height:'auto'}}/></div>

<br></br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/open.png" style={{width:700, height:'auto'}}/></div>

4. 重复相同的过程，将 **ssd1306.py** 保存到您的 MicroPython 设备。

#### 运行项目

一旦两个文件都保存到您的 MicroPython 设备，通过按下 Thonny 中的绿色 **运行** 按钮来运行演示代码。

您现在应该能看到温度和湿度显示在 OLED 屏幕上，类似于下面的图像：

![OLED Display Output](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/oled1.jpg)


</TabItem>
<TabItem value="New" label="选项 2：DHT20 和 LCD1602" default>

#### 所需材料

**步骤 1.** 准备以下物品：

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-16x2-LCD-White-on-Blue.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
    </tr>
    </table>
</div>


**步骤 2.** 将 Grove 16x2 LCD (White on Blue) 连接到 Grove Shield 的 I2C1 端口。

**步骤 3.** 将 Grove Temperature & Humidity Sensor V2.0 (DHT20) 连接到 Grove Shield 的 D18 端口。

**步骤 4.** 将 Grove Shield 插入 Pi Pico。

**步骤 5.** 使用 USB 线缆将 Pi Pico 连接到您的 PC。

#### 软件设置

请参考演示 1 的软件部分。

1. 将以下代码复制到 Thonny IDE 中：

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

2. 将以下所需的 Python 文件下载到您的本地机器：
   - [DHT20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/DHT20.py)
   - [lcd1602.py](https://files.seeedstudio.com/wiki/Grove-16x2_LCD--White_on_Blue/lcd1602.py)

3. 在 Thonny IDE 中打开 **DHT20.py**，点击 `文件 -> 另存为 -> MicroPython 设备`，并在您的设备上以 **DHT20.py** 的名称保存文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/saveas.png" style={{width:750, height:'auto'}}/></div>

<br></br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/open.png" style={{width:750, height:'auto'}}/></div>

4. 重复相同的过程，将 **lcd1602.py** 保存到您的 MicroPython 设备。

#### 运行项目

一旦两个文件都保存到您的 MicroPython 设备，通过按下 Thonny 中的绿色**运行**按钮来运行演示代码。

您现在应该能看到温度和湿度显示在 OLED 屏幕上，类似于下面的图像：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/oled_output.jpg" style={{width:750, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 项目 3：控制 LED 和继电器

#### 所需材料

- 步骤 1. 准备以下物品：

| Pi Pico | Grove Shield for Pi Pico|  Grove-button |Grove-LED|Grove relay|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ledsocket.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[立即获取](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[立即获取](https://www.seeedstudio.com/Grove-Button-p-766.html)|[立即获取](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[立即获取](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

- 步骤 2. 将 Grove 按钮连接到底板的数字引脚 18。
- 步骤 3. 将 Grove LED 连接到底板的 D16 端口。
- 步骤 4. 将 Grove 继电器连接到底板的 D20 端口。
- 步骤 5. 将 Grove Shield for Pi Pico 插入 Pi Pico。
- 步骤 6. 通过 USB 线缆将 Pi Pico 连接到 PC。

#### 软件

请参考演示 1 的软件部分。

首先将下面的代码复制到 Thonny IDE 中。

```python showLineNumbers
from machine import Pin

button = Pin(18, Pin.IN, Pin.PULL_UP)# 按钮连接到 D18
button.irq(lambda pin: InterruptsButton(),Pin.IRQ_FALLING)#设置按键中断
led = Pin(16, Pin.OUT)#led 连接到 D16
relay = Pin(20, Pin.OUT)
tmp = 0
'''按键中断函数，按下按键时改变灯的状态'''
def InterruptsButton(): #按钮输入
    global tmp
    tmp = ~tmp
    led.value(tmp)
    relay.value(tmp)
while True:  
    pass

```

现在请点击绿色按钮运行演示代码。

然后您可以按下 Grove 按钮，您可以控制 LED 和继电器的开启和关闭。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/demo3.jpg)

### 项目 4：闪烁颜色

#### 所需材料

- 步骤 1. 准备以下物品：

| Pi Pico | Grove Shield for Pi Pico|  RGB LED WS2813 mini |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/redrgb.png)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[立即获取](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[立即获取](https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html)|

- 步骤 2. 将 RGB LED WS2813 mini 连接到 Base Shield 的端口 18。
- 步骤 3. 将 Grove Shield for Pi Pico 插入 Pi Pico。
- 步骤 4. 通过 USB 线缆将 Pi Pico 连接到 PC。

#### 软件

请参考演示 1 的软件部分。

首先将以下代码复制到 Thonny IDE 中。

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

然后请下载 [ws2812.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/ws2812.py) 到您的本地。使用 Thonny 打开 ws2812.py，点击 文件->另存为->MicroPython 设备。

在文件名列中输入 **ws2812.py**，点击"确定"，然后文件就保存在 文件->打开->MicroPython 设备中。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ws2813savelocal.png)

将文件保存到您的 MicroPython 设备后，现在请点击绿色按钮运行演示代码。
然后您可以看到 RGB LED WS2813 mini 闪烁美丽的颜色，如下所示。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ws2813mini.gif)

### 项目 5：检测声音和光线

#### 所需材料

- 步骤 1. 准备以下物品：

| Pi Pico | Grove Shield for Pi Pico| grove 声音传感器 |Grove 光线传感器|Grove-16x2 LCD|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[立即获取](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[立即获取](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|[立即获取](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[立即获取](https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html)|

- 步骤 2. 将 Grove 声音传感器连接到 Base Shield 的模拟引脚 0。
- 步骤 3. 将 Grove 光线传感器连接到 Base Shield 的 A1 端口。
- 步骤 4. 将 Grove 16X2 lcd 连接到 Base Shield 的 I2C1 端口。
- 步骤 5. 将 Grove Shield for Pi Pico 插入 Pi Pico。
- 步骤 6. 通过 USB 线缆将 Pi Pico 连接到 PC。

#### 软件

请参考演示1的软件部分。

首先将下面的代码复制到 Thonny IDE 中。

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

然后请下载 [LCD1602.py](https://files.seeedstudio.com/wiki/Grove-16x2_LCD--White_on_Blue/lcd1602.py) 到您的本地。使用 Thonny 打开 LCD1602.py，点击 文件->另存为->MicroPython 设备。

在文件名列中输入 **LCD1602.py**，点击"确定"，然后文件就保存在 文件->打开->MicroPython 设备中。

:::note
在这个示例中，我们使用的 LCD1602 版本是单色背光版本，如果您需要控制全彩背光版本的 LCD1602，请查看此库文件中的函数以了解如何使用它。
:::

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/lcdlightsound.png)

将文件保存到您的 MicroPython 设备后，现在请点击绿色按钮运行演示代码。
然后您可以获得如下所示的声音传感器和光传感器数据。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/demo5.jpg)

### 项目 6：检测运动

#### 所需材料

- 步骤 1. 准备以下物品：

| Pi Pico | Grove Shield for Pi Pico| grove servo |Grove Mini Fan|Grove mini pir motion sensor|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/groveminifan.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/minipir.png)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[立即获取](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[立即获取](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[立即获取](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)|[立即获取](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html)|

- 步骤 2. 将 Grove servo 连接到 Base Shield 的模拟引脚 1。
- 步骤 3. 将 Grove Mini fan 连接到 Base Shield 的端口 D16。
- 步骤 4. 将 Grove Mini pir motion sensor 连接到 Base Shield 的端口 D18。
- 步骤 5. 将 Grove Shield for Pi Pico 插入 Pi Pico。
- 步骤 6. 通过 USB 线缆将 Pi Pico 连接到 PC。

#### 软件

请参考演示1软件部分。

首先将下面的代码复制到 Thonny IDE 中。

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

现在请点击绿色按钮运行演示代码。
然后当您的手在 pir 传感器前挥过时，您可以看到 grove mini fan 和 grove servo 运行，如下所示。

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/tutieshi_480x272_3s.gif)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [Pico Python SDK](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/pico_python_sdk.pdf)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Grove_shield_for_PI_PICOv1.0SCH.pdf)
- **[Eagle]** [PCB&SCH](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip)

## 课程资源

<div align="center"><img width = "{400}" src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/book.png"/></div>

- **[ZIP]** [基于 MicroPython 的 Raspberry Pi Pico 初学者指南](https://files.seeedstudio.com/Seeed_EDU/Course_documents/Beginner's-Guide-for-Raspberry-Pi-Pico.zip)
- **[ZIP]** [代码](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Codes.rar)
- **[ZIP]** [库文件](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Libraries.rar)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
