---
title: Grove - 超声波测距仪
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Ultrasonic_Ranger/
slug: /cn/Grove-Ultrasonic_Ranger
last_update:
  date: 03/01/2023
  author: gunengyu
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/V2.jpg" alt="pir" width={600} height="auto" /></p>

这款 Grove - 超声波测距仪是一个工作在 40KHz 的非接触式距离测量模块。当我们通过信号引脚提供一个超过 10uS 的脉冲触发信号时，Grove_Ultrasonic_Ranger 将发出 8 个周期的 40kHz 循环电平并检测回声。回声信号的脉冲宽度与测量距离成正比。公式如下：距离 = 回声信号高电平时间 * 声速 (340M/S)/2。Grove_Ultrasonic_Ranger 的触发和回声信号共享 1 个 SIG 引脚。

:::warning
 请勿热插拔 Grove-超声波测距仪，否则会损坏传感器。测量区域必须不少于 0.5 平方米且表面平滑。
:::
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

## 版本

| 产品版本              | 变更                                                                                                                                                                                    | 发布日期 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-超声波测距仪 V1.0 | 初始版本                                                                                                                                                                                    | 2012年3月      |
| Grove-超声波测距仪 V2.0 | 改进了低压主板的电源稳定性，具体变更如下：1. 增加了电容 C14 2. 重新设计布局使其更加整洁 3. 兼容 3.3V 电压系统 | 2017年7月     |

## 规格参数

|参数| 数值/范围|
|:------|:------------------|
|工作电压| 3.2~5.2V|
|工作电流| 8mA|
|超声波频率| 40kHz|
|测量范围| 2-350cm|
|分辨率| 1cm|
|输出|PWM|
|尺寸|50mm X 25mm X 16mm|
|重量|13g|
|测量角度|15度|
|工作温度|-10~60摄氏度|
|触发信号|10uS TTL|
|回声信号|TTL|

:::tip
    更多关于 Grove 模块的详细信息请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

|Arduino|Raspberry|ArduPy|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png)|

:::note
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

:::note
    如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起使用

#### 硬件

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove - 超声波测距仪 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **步骤2.** 将超声波测距仪连接到Grove-Base Shield的D7端口。

- **步骤3.** 将Grove - Base Shield插入Seeeduino。

- **步骤4.** 通过USB线将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/arduino%20connection.jpg)

:::note
 如果我们没有Grove Base Shield，我们也可以直接将Grove_Ultrasonic_Ranger连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove-超声波测距仪 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| D7            | 黄色                  |

#### 软件

- **步骤1.** 从Github下载[UltrasonicRanger库](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip)。

- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)来为Arduino安装库。

- **步骤3.** 将代码复制到Arduino IDE中并上传。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```cpp
#include "Ultrasonic.h"

Ultrasonic ultrasonic(7);
void setup()
{
 Serial.begin(9600);
}
void loop()
{
 long RangeInInches;
 long RangeInCentimeters;

 Serial.println("The distance to obstacles in front is: ");
 RangeInInches = ultrasonic.MeasureInInches();
 Serial.print(RangeInInches);//0~157 inches
 Serial.println(" inch");
 delay(250);

 RangeInCentimeters = ultrasonic.MeasureInCentimeters(); // two measurements should keep an interval
 Serial.print(RangeInCentimeters);//0~400cm
 Serial.println(" cm");
 delay(250);
}
```

- **步骤4.** 我们将在终端上看到距离显示如下。

```sh
The distance to obstacles in front is:
2 inches
6 cm
The distance to obstacles in front is:
2 inches
6 cm
The distance to obstacles in front is:
2 inches
6 cm
```

### 与Codecraft一起使用

#### 硬件

**步骤1.** 将Grove - 超声波测距仪连接到Base Shield的D7端口。

**步骤2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤3.** 通过USB线将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将主程序拖到工作区域。

:::note
    如果这是您第一次使用Codecraft，请参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤2.** 按照下图拖拽积木块，或打开可在本页面末尾下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/cc_Ultrasonic_Ranger.png)

将程序上传到您的Arduino/Seeeduino。

:::success
    当代码上传完成后，您将在串口监视器中看到距离显示。
:::

### 与Raspberry Pi一起使用（使用Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 超声波测距仪 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **步骤2**. 将Grove Base Hat插入Raspberry。

- **步骤3**. 将Grove - 超声波测距仪连接到Base Hat的D5端口。

- **步骤4**. 通过USB线将Raspberry Pi连接到PC。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

:::note
    对于步骤3，您可以将超声波测距仪连接到**任何GPIO端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

:::note
     如果您使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用Python3**运行此命令行。
:::

- **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。

- **步骤2**. 通过克隆grove.py库下载源文件。

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤3**. 执行以下命令运行代码。

```sh
cd grove.py/grove
python3 grove_ultrasonic_ranger.py 5 6
```

以下是grove_ultrasonic_ranger.py代码。

```python
import sys
import time
from grove.gpio import GPIO

usleep = lambda x: time.sleep(x / 1000000.0)

_TIMEOUT1 = 1000
_TIMEOUT2 = 10000

class GroveUltrasonicRanger(object):
    def __init__(self, pin):
        self.dio =GPIO(pin)

    def _get_distance(self):
        self.dio.dir(GPIO.OUT)
        self.dio.write(0)
        usleep(2)
        self.dio.write(1)
        usleep(10)
        self.dio.write(0)

        self.dio.dir(GPIO.IN)

        t0 = time.time()
        count = 0
        while count < _TIMEOUT1:
            if self.dio.read():
                break
            count += 1
        if count >= _TIMEOUT1:
            return None

        t1 = time.time()
        count = 0
        while count < _TIMEOUT2:
            if not self.dio.read():
                break
            count += 1
        if count >= _TIMEOUT2:
            return None

        t2 = time.time()

        dt = int((t1 - t0) * 1000000)
        if dt > 530:
            return None

        distance = ((t2 - t1) * 1000000 / 29 / 2)    # cm

        return distance

    def get_distance(self):
        while True:
            dist = self._get_distance()
            if dist:
                return dist

Grove = GroveUltrasonicRanger

def main():
    if len(sys.argv) < 2:
        print('Usage: {} pin_number'.format(sys.argv[0]))
        sys.exit(1)

    sonar = GroveUltrasonicRanger(int(sys.argv[1]))

    print('Detecting distance...')
    while True:
        print('{} cm'.format(sonar.get_distance()))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

:::success
    如果一切顺利，您将能够看到以下结果
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_ultrasonic_ranger.py 5 6
Detecting distance...
121.757901948 cm
246.894770655 cm
2.60205104433 cm
0.205533257846 cm
0.657706425108 cm
247.433267791 cm
122.485489681 cm
^CTraceback (most recent call last):
  File "grove_ultrasonic_ranger.py", line 110, in <module>
    main()
  File "grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt
```

您可以通过简单地按 ++ctrl+c++ 来退出此程序。

### 与树莓派一起使用（配合 GrovePi_Plus）

#### 硬件

- **步骤 1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove - 超声波测距传感器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **步骤 2.** 将 GrovePi_Plus 插入树莓派。

- **步骤 3.** 将 Grove-超声波测距传感器连接到 GrovePi_Plus 的 **D4** 端口。

- **步骤 4.** 通过 USB 线缆将树莓派连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/pi%20connection.jpg)

#### 软件

:::note
     如果您使用的是 **树莓派配合 Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 来运行此命令行。
:::

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 来配置开发环境。

- **步骤 2.** Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行以下命令来使用超声波测距传感器测量距离。

```
cd ~/GrovePi/Software/Python
python3 grove_ultrasonic.py
```

这里是 grove_ultrasonic.py 代码。

```python
# GrovePi + Grove 超声波测距传感器

from grovepi import *

# 将 Grove 超声波测距传感器连接到数字端口 D4
# SIG,NC,VCC,GND

ultrasonic_ranger = 4

while True:
    try:
        # 从超声波传感器读取距离值
        print ultrasonicRead(ultrasonic_ranger)

    except TypeError:
        print "Error"
    except IOError:
        print "Error"
```

- **步骤 4.** 我们将在终端上看到距离显示如下。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_ultrasonic.py
9
9
9
9
9
9
9
9
9
9
9
```

### 与 Wio Terminal 一起使用（ArduPy）

#### 硬件

- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove - 超声波测距传感器 |
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即获取](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **步骤 2.** 将 Grove - 超声波测距传感器连接到 Wio Terminal 的 **D0** 端口。

- **步骤 3.** 通过 USB Type-C 线缆将 Wio Terminal 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/with-WT.jpg)

#### 软件

- **步骤 1.** 按照 [**ArduPy 入门指南**](https://wiki.seeedstudio.com/cn/ArduPy/) 在 Wio Terminal 上配置 ArduPy 开发环境。

- **步骤 2.** 使用以下命令确保 ArduPy 固件包含超声波测距传感器 ArduPy 库。更多信息，请参考 [**这里**](https://wiki.seeedstudio.com/cn/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example)。

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
aip build
aip flash
```

- **步骤 3.** 复制以下代码并保存为 `ArduPy-ultrasonic.py`：

```python
from arduino import grove_ultra_ranger
from machine import LCD
from machine import Sprite
import time

Ultrasonic = grove_ultra_ranger(0)
lcd = LCD()
spr = Sprite(lcd) # 创建一个缓冲区

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.RED)
        spr.drawString("Ultrasonic Sensor", 55, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Centimeters: ", 20, 50)
        spr.drawString("- Inches: ", 20, 80)
        spr.drawNumber(Ultrasonic.cm, 200,50)
        time.sleep_ms(50) # 需要等待数据再次读取
        spr.drawNumber(Ultrasonic.inch, 130,80)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("前方障碍物的距离是:", Ultrasonic.cm, '厘米')
        print("前方障碍物的距离是:", Ultrasonic.inch, '英寸')

if __name__ == "__main__":
    main()
```

- **步骤 4.** 将 `ArduPy-ultrasonic.py` 保存在您知道的位置。运行以下命令并**替换** `<YourPythonFilePath>` 为您的 `ArduPy-ultrasonic.py` 位置。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 示例：
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ultrasonic.py"
```

- **步骤 5.** 我们将在终端上看到距离显示如下，并在 Wio Terminal LCD 屏幕上显示。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ultrasonic.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
前方障碍物的距离是: 3 厘米
前方障碍物的距离是: 1 英寸
前方障碍物的距离是: 7 厘米
前方障碍物的距离是: 2 英寸
前方障碍物的距离是: 6 厘米
前方障碍物的距离是: 2 英寸
前方障碍物的距离是: 6 厘米
前方障碍物的距离是: 2 英寸
前方障碍物的距离是: 4 厘米
前方障碍物的距离是: 1 英寸
前方障碍物的距离是: 7 厘米
前方障碍物的距离是: 2 英寸
```

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/WT-ur.jpg)

## 常见问题

**Q1: Grove超声波传感器是如何工作的？**

- A1: 当我们通过信号引脚提供超过10uS的脉冲触发信号时，Grove_Ultrasonic_Ranger将发出8个40kHz周期的电平并检测回声。回声信号的脉冲宽度与测量距离成正比。公式如下：距离 = 回声信号高电平时间 * 声速 (340M/S)/2。

**Q2: 为什么Grove超声波传感器只有1个信号引脚，而其他超声波传感器有Trig和Echo引脚？**

- A2: Grove_Ultrasonic_Ranger的触发和回声信号通过MCU共享1个SIG引脚。

**Q3: 我们可以将多个超声波传感器连接到一个Arduino吗？**

- A4: 可以，这里是示例，一个传感器连接到D2，另一个连接到D3。

```cpp
#include "Ultrasonic.h"

Ultrasonic ultrasonic1(2);
Ultrasonic ultrasonic2(3);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    long RangeInCentimeters1;
    long RangeInCentimeters2;

    RangeInCentimeters1 = ultrasonic1.MeasureInCentimeters(); // two measurements should keep an interval
    Serial.print(RangeInCentimeters1);//0~400cm
    Serial.println(" cm");
    
    RangeInCentimeters2 = ultrasonic2.MeasureInCentimeters(); // two measurements should keep an interval
    Serial.print(RangeInCentimeters2);//0~400cm
    Serial.println(" cm");
    
    delay(250);
}
```

## 资源

- **[PDF]** [下载Wiki PDF](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-Ultrasonic_Ranger_WiKi.pdf)
- **[PDF]** [Grove_Ultrasonic Ranger原理图](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove_Ultrasonic%20Ranger%20Schematic.pdf)
- **[PDF]** [陶瓷超声波传感器 NU40C16T/R-1](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/NU40C16T-R-1.pdf)
- **[库文件]** [Grove_Ultrasonic Ranger库](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip)
- **[Codecraft]** [CDC文件](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove_Ultrasonic_Ranger_CDC_File.zip)
- **[项目]** [彩色螺旋](https://community.seeedstudio.com/project_detail.html?id=138)
- **[项目]** [室内闪电云](https://community.seeedstudio.com/project_detail.html?id=182)
- **[项目]** [自动水位控制器](https://community.seeedstudio.com/project_detail.html?id=241)
- **[示例]** [示例_测量距离和LED显示](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Example_Measure_distance_and_led_display.zip)
- **[示例]** [示例_测量并显示距离](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Example_Measure_and_display_the_distance.zip)

## 项目

**改造Seeed新办公室的楼梯**: 将办公室的楼梯变成一个互动装置，甚至是向访客传达"仅限员工"信息的酷炫方式。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

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