---
description: Grove - 温度传感器 V1.2
title: Grove - 温度传感器 V1.2
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Temperature_Sensor_V1.2
last_update:
  date: 1/3/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View.jpg" /></div>

Grove - 温度传感器使用[热敏电阻](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf)来检测环境温度。当环境温度降低时，热敏电阻的阻值会增加。我们利用这一特性来计算环境温度。该传感器的检测范围是 -40 - 125ºC，精度为 ±1.5ºC

注意：本说明文档同样适用于 Grove - 温度传感器 V1.1，对于 V1.0 版本请参考 [Grove - 温度传感器](https://wiki.seeedstudio.com/cn/Grove-Temperature_Sensor)

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 可升级为工业级传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固耐用的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和稳定性的 S2101 无线温湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。试试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，助力您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 空气温湿度传感器</strong></a></td>
    </tr>
  </tbody>
</table>

## 规格参数

---

- 电压：3.3 ~ 5V
- 零功率电阻：100 KΩ
- 电阻容差：±1%
- 工作温度范围：-40 ~ +125 ℃
- 标称B常数：4250 ~ 4299K

:::tip
更多关于Grove模块的详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

-------------------

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" /></div>|

:::caution
上述提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

---
在本节之后，您只需几个步骤就可以让Grove - 温度传感器 V1.1/1.2 运行起来。

:::note
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起使用

#### 硬件

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove - 温度传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **步骤2.** 将Grove - 温度传感器连接到Grove-Base Shield的**A0**端口。

- **步骤3.** 将Grove - Base Shield插入Seeeduino。

- **步骤4.** 通过USB线将Seeeduino连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/connect_Arduino.jpg" /></div>

:::note
 如果我们没有Grove Base Shield，我们也可以直接将Grove_Ultrasonic_Ranger连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 温度传感器 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| A0            | 黄色                  |

#### 软件

- **步骤1.** 启动Arduino IDE，点击**文件>新建**打开新页面。将以下代码复制到新页面中并上传。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```cpp
// Grove - 温度传感器 V1.1/1.2 演示代码
// Loovee @ 2015-8-26

#include <math.h>

const int B = 4275000;            // 热敏电阻的B值
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A0;     // Grove - 温度传感器连接到A0

#if defined(ARDUINO_ARCH_AVR)
#define debug  Serial
#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
#define debug  SerialUSB
#else
#define debug  Serial
#endif

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int a = analogRead(pinTempSensor);

    float R = 1023.0/a-1.0;
    R = R0*R;

    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // 通过数据表转换为温度

    Serial.print("temperature = ");
    Serial.println(temperature);

    delay(100);
}
```

**步骤2.** 点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。如果一切正常，您将获得温度值。

结果应该如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_result.jpg" /></div>

### 与Raspberry Pi一起使用（使用Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 温度传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **步骤2**. 将Grove Base Hat插入Raspberry。
- **步骤3**. 将温度传感器连接到Base Hat的A0端口。
- **步骤4**. 通过USB线将Raspberry Pi连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Temperature_Hat.jpg" /></div>

:::note
对于步骤3，您可以将温度传感器连接到**任何模拟端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

:::caution
如果您使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用Python3**运行此命令行。
:::

- **步骤 1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库下载源文件。

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3**. 执行以下命令运行代码。

```sh
cd grove.py/grove
python3 grove_temperature_sensor.py 0
```

以下是 grove_temperature_sensor.py 代码。

```python
import sys
import time
from grove.factory import Factory


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = Factory.getTemper("NTC-ADC", pin)

    print('Detecting temperature...')
    while True:
        print('{} Celsius'.format(sensor.temperature))
        time.sleep(1)


if __name__ == '__main__':
    main()
```

:::tip
    如果一切顺利，您将能够看到以下结果
:::

```python
pi@raspberrypi:~/grove.py/grove $ python3 grove_temperature_sensor.py 0
Hat Name = 'Grove Base Hat RPi'
Detecting temperature...
24.7473402633 Celsius
24.7473402633 Celsius
24.7473402633 Celsius
24.7112751977 Celsius
24.7112751977 Celsius
^CTraceback (most recent call last):
  File "grove_temperature_sensor.py", line 53, in <module>
    main()
  File "grove_temperature_sensor.py", line 49, in main
    time.sleep(1)
KeyboardInterrupt
```

您可以通过简单地按 ++ctrl+c++ 退出此程序。

:::note
您可能已经注意到，对于模拟端口，丝印引脚编号类似于 **A1, A0**，但在命令中我们使用参数 **0** 和 **1**，与数字端口相同。因此请确保将模块插入正确的端口，否则可能会出现引脚冲突。
:::

### 与 Raspberry Pi 配合使用（使用 GrovePi_Plus）

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove - Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。

- **步骤 3.** 将 Grove - Temperature Sensor 连接到 GrovePi_Plus 的 **A0** 端口。

- **步骤 4.** 通过 USB 线将 Raspberry 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/connect_pi.jpg" /></div>

#### 软件

- **步骤 1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)配置开发环境。

- **步骤 2.** 按照[更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)更新 GrovePi 的最新固件。

:::tip
在本 wiki 中，我们使用路径 **~/GrovePi/** 而不是 **/home/pi/Desktop/GrovePi**，您需要确保步骤 2 和步骤 3 使用相同的路径。

:::note
我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

- **步骤 3.** Git 克隆 Github 仓库。

```sh
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **步骤 4.** 执行以下命令使用 Grove - Temperature Sensor 测量温度。

```sh
cd ~/GrovePi/Software/Python
sudo python3 grove_temperature_sensor.py
```

以下是 grove_temperature_sensor.py 代码。

```python
# NOTE:
#  The sensor uses a thermistor to detect ambient temperature.
#  The resistance of a thermistor will increase when the ambient temperature decreases.
#
#  There are 3 revisions 1.0, 1.1 and 1.2, each using a different model thermistor.
#  Each thermistor datasheet specifies a unique Nominal B-Constant which is used in the calculation forumla.
#
#  The second argument in the grovepi.temp() method defines which board version you have connected.
#  Defaults to '1.0'. eg.
#   temp = grovepi.temp(sensor)        # B value = 3975
#   temp = grovepi.temp(sensor,'1.1')  # B value = 4250
#   temp = grovepi.temp(sensor,'1.2')  # B value = 4250

import time
import grovepi

# Connect the Grove Temperature Sensor to analog port A0
# SIG,NC,VCC,GND
sensor = 0

while True:
    try:
        temp = grovepi.temp(sensor,'1.2')
        print("temp =", temp)
        time.sleep(.5)

    except KeyboardInterrupt:
        break
    except IOError:
        print ("Error")

```

结果应该如下：

```python
pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_temperature_sensor.py

('temp =', 25.28652137917777)
('temp =', 25.28652137917777)
('temp =', 25.28652137917777)
('temp =', 25.28652137917777)
('temp =', 25.368489566400115)
('temp =', 25.61468397498203)
('temp =', 27.43501590142614)
('temp =', 27.85285590636829)
('temp =', 27.18509952680688)
('temp =', 26.852756540240193)

```

### 与 Wio Terminal 配合使用（ArduPy）

#### 硬件

- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove - Temperature Sensor |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即获取](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.htmll)|

- **步骤 2.** 将 Grove - 温度传感器连接到 Wio Terminal 的 **A0** 端口。

- **步骤 3.** 通过 USB Type-C 线缆将 Wio Terminal 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/WT-temp.png" /></div>

#### 软件

- **步骤 1.** 按照 [**ArduPy 入门指南**](https://wiki.seeedstudio.com/cn/ArduPy/) 在 Wio Terminal 上配置 ArduPy 开发环境。

- **步骤 2.** 确保 ArduPy 固件已刷入 Wio Terminal。更多信息请参考 [**这里**](https://wiki.seeedstudio.com/cn/ArduPy/#ardupy-aip-cli-getting-started)。

```sh
aip build
aip flash
```

- **步骤 3.** 复制以下代码并保存为 `ArduPy-temp.py`：

```python
from machine import Pin, ADC
from machine import LCD
from machine import Sprite
import time, math

raw = ADC(Pin(13))
lcd = LCD()
spr = Sprite(lcd) # 创建一个缓冲区
B = 4275 # 热敏电阻的 B 值
R0 = 100000 # R0 = 100k

def temp(reading):
    R = 1023.0 / reading - 1.0
    R = R0*R 
    temperature = 1.0/(math.log(R/R0)/B+1/298.15)-273.15 # 通过数据表转换为温度
    return temperature

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("Temperature Reading", 45, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- ", 20, 50)
        spr.drawFloat(temp(raw.read()), 3, 40,50)
        spr.drawString("C", 120, 50)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("Temperature: ", temp(raw.read()), "C")

if __name__ == "__main__":
    main()
```

- **步骤 4.** 将 `ArduPy-temp.py` 保存在您知道的位置。运行以下命令并将 `<YourPythonFilePath>` **替换**为您的 `ArduPy-temp.py` 位置。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 示例：
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-temp.py"
```

- **步骤 5.** 我们将看到温度值在终端中显示如下，并在 Wio Terminal LCD 屏幕上显示。

```sh
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-temp.py"
Positional argument (/dev/cu.usbmodem141101) takes precedence over --open.
Connected to ardupy
Temperature:  28.08603 C
Temperature:  28.50415 C
Temperature:  28.16953 C
Temperature:  28.25308 C
Temperature:  28.08603 C
Temperature:  28.16953 C
Temperature:  28.08603 C
Temperature:  28.16953 C
Temperature:  28.33671 C
Temperature:  28.16953 C
Temperature:  28.25308 C
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Ardupy-temp.png" /></div>

## 参考资料

---
如果您想了解温度算法的原理，请参考下图：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_Basic_Characteristics.jpg" /></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

- **[Zip]** [Grove - 温度传感器 v1.1 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.zip)
- **[PDF]** [Grove - 温度传感器 v1.1.PDF](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.pdf)
- **[PDF]** [温度传感器数据手册](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf)

## 项目

**温度传感器 Grove 模块**：

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wjL7xOGqAqg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vI9pkmiK8EM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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