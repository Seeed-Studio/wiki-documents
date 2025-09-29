---
description: Grove - 压电振动传感器
title: Grove - 压电振动传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Piezo_Vibration_Sensor
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Grove-Piezo_Vibration_Sensor-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Grove-Piezo_Vibration_Sensor-1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Vibration_Sensor_02.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Vibration_Sensor_02.jpg" alt="pir" width={600} height="auto" /></p>

Grove-压电振动传感器适用于柔性、振动、冲击和触摸的测量。该模块基于PZT薄膜传感器LDT0-028。当传感器来回移动时，其内部的电压比较器会产生一定的电压。宽动态范围（0.001Hz~1000MHz）保证了出色的测量性能。而且，您可以通过用螺丝刀调节板载电位器来调整其灵敏度。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)
## 版本

| 产品版本              | 变更                                                                                                                                                                                    | 发布日期 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - 压电振动传感器 V1.1 | 初始版本                                                                                                                                                                                    | 2014年7月      |

## 特性

-   标准grove接口
-   宽动态范围：0.1Hz~180Hz
-   可调节灵敏度
-   对强冲击具有高接收性

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上面提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 应用

-   洗衣机振动感应
-   低功耗唤醒开关
-   低成本振动感应
-   汽车报警器
-   身体运动
-   安防系统

## 入门指南


### 与Arduino一起使用

#### 硬件

Grove - 压电振动传感器在检测到振动时输出逻辑高电平。我们可以使用Arduino的任何引脚来读取数据。这里是一个压电振动传感器控制LED的示例。当检测到振动时，该传感器输出逻辑高信号（可以通过调节电位器来改变灵敏度），LED点亮。

- 步骤1. 准备以下物品：

| Seeeduino V4 | Base Shield | Grove - 压电振动传感器 |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|)<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|

- 步骤2. 使用4针grove线缆将模块连接到base shield的**D2**端口，我们使用**板载LED数字引脚13**作为输出。
- 步骤3. 将Basic Shield插入Arduino。
- 步骤4. 使用USB线缆将Arduino连接到PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/piezo%20vibration%20connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/piezo%20vibration%20connection.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    当您通过顺时针调节电位器增加阈值电压时，即使原本输出高电平，也可能输出低电平。
:::
#### 软件

- 步骤1. 复制并粘贴以下代码到新的Arduino草图中。

```c
const int ledPin=13;
void setup() {
    Serial.begin(9600);
    pinMode(ledPin,OUTPUT);
}

void loop() {
    int sensorState = digitalRead(2);
    Serial.println(sensorState);
    delay(100);
    if(sensorState == HIGH)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}
```

- 步骤2. 当检测到振动时LED将点亮。



### 与Raspberry Pi一起使用（配合Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 压电振动传感器|
|----------------|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|


- **步骤2**. 将Grove Base Hat插入Raspberry Pi。
- **步骤3**. 将Grove - 压电振动传感器连接到Base Hat的端口12。
- **步骤4**. 通过USB线缆将Raspberry Pi连接到PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Hat.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    对于步骤3，您可以将压电振动传感器连接到**任何GPIO端口**，但请确保使用相应的端口号更改命令。
:::

#### 软件

:::note
     如果您使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用Python3**运行此命令行。
:::
- **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤2**. 通过克隆grove.py库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤3**. 执行以下命令运行代码。

```
cd grove.py/grove
python3 grove_piezo_vibration_sensor.py 12

```

以下是grove_piezo_vibration_sensor.py代码。

```python

import time
from grove.gpio import GPIO


class GrovePiezoVibrationSensor(GPIO):
    def __init__(self, pin):
        super(GrovePiezoVibrationSensor, self).__init__(pin, GPIO.IN)
        self._on_detect = None

    @property
    def on_detect(self):
        return self._on_detect

    @on_detect.setter
    def on_detect(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_detect = callback

    def _handle_event(self, pin, value):
        if value:
            if callable(self._on_detect):
                self._on_detect()

Grove = GrovePiezoVibrationSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    pir = GrovePiezoVibrationSensor(int(sys.argv[1]))

    def callback():
        print('Detected.')

    pir.on_detect = callback

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::success
    如果一切顺利，您将能够看到以下结果
:::
```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_piezo_vibration_sensor.py 12
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
^CTraceback (most recent call last):
  File "grove_piezo_vibration_sensor.py", line 84, in <module>
    main()
  File "grove_piezo_vibration_sensor.py", line 80, in main
    time.sleep(1)
KeyboardInterrupt

```


您可以通过简单地按 ++ctrl+c++ 来退出此程序。



### 与树莓派一起使用（配合 GrovePi_Plus）

#### 硬件

- 步骤 1. 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove - 压电振动传感器 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|

- 步骤 2. 将 GrovePi_Plus 插入树莓派。
- 步骤 3. 将 Grove-压电振动传感器连接到 GrovePi_Plus 的 A0 端口。
- 步骤 4. 通过 USB 线缆将树莓派连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/grove%20connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/grove%20connection.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note 
     如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 来运行此命令行。
:::

- 步骤 1. 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 来配置开发环境。
- 步骤 2. Git 克隆 Github 仓库。

```python
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- 步骤 3. 执行以下命令来检测振动。

```python
cd ~/GrovePi/Software/Python
python3 grove_piezo_vibration_sensor.py
```

这是 grove_piezo_vibration_sensor.py 代码。

```python
import time
import grovepi

# 将 Grove 压电振动传感器连接到模拟端口 A0
# OUT,NC,VCC,GND
piezo = 0

grovepi.pinMode(piezo,"INPUT")

while True:
    try:
        # 当检测到振动时，传感器输出逻辑高信号
        print grovepi.analogRead(piezo)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- 步骤 4. 我们将在终端上看到如下所示的振动显示。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_piezo_vibration_sensor.py
1023
1023
1023
1023
18
17
18
17
```

:::note
    我们也可以使用 grovepi.digitalRead(2) 来读取振动状态，只需将传感器连接到 GrovePi 的 D2 端口。
:::

## 常见问题

**Q1: 这是数字输出还是模拟输出？**

A1: 这是数字输出，低电平或高电平。


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[PDF]** [下载 Wiki PDF](https://files.seeedstudio.com/wiki//Grove-Piezo_Vibration_Sensor/res//Grove-Piezo_Vibration_Sensor_wiki.pdf)
- **[Eagle]** [Grove - 压电振动传感器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip)
- **[PDF]** [Grove - 压电振动传感器原理图 PDF 文件](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Gvove-Piezo_Vibration_Sensor.pdf)
- **[PDF]** [Grove - 压电振动传感器 PCB PDF 文件](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Gvove%20-%20Piezo%20Vibration%20Sensor%20v1.1%20PCB.pdf)
- **[数据手册]** [压电振动传感器数据手册](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Piezo_Vibration_Sensor.pdf)


## 项目

**Arduino Grove 入门套件 - 压电振动传感器**：教您如何在 Arduino Grove 入门套件中使用压电振动传感器。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/trduunze/grove-starter-kit-for-arduino-piezo-vibration-sensor-92c531/embed' width='350'></iframe>

**座椅监控器**：使用 ARTIK 云监控客舱座椅状态。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/momososo/seat-monitor-4288dc/embed' width='350'></iframe>

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