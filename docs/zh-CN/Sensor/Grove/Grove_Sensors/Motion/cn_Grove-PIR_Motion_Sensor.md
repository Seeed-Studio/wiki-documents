---
description: Grove - PIR 运动传感器
title: Grove - PIR 运动传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-PIR_Motion_Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove_-_PIR_Motion_Sensor.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove_-_PIR_Motion_Sensor.jpg" alt="pir" width={600} height="auto" /></p>

该传感器允许您感知运动，通常是其范围内的人体运动。只需将其连接到 Grove - Base shield 并对其进行编程，当有人在其检测范围内移动时，传感器将在其 SIG 引脚上输出高电平。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)

## 特性

- Grove 兼容接口
- 可调节检测距离
- 可调节保持时间

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
## 规格参数

|参数	|值/范围
|---|---|
|工作电压|	3V–5V
|工作电流(VCC = 3V)|	100uA
|工作电流(VCC = 5V)|	150uA
|测量范围	|0.1 - 6m
|默认检测距离|	3m
|保持时间	|1 - 25s
|工作波长	|7 - 14um
|检测角度|	120 度

## 支持的平台


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上面提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

:::note
    如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::
### 与Arduino一起使用

#### 硬件


- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | Grove - PIR运动传感器 | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|


- **步骤2.** 将Grove - PIR运动传感器连接到Grove-Base Shield的**D2**端口。

- **步骤3.** 将Grove - Base Shield插入Seeeduino。

- **步骤4.** 通过USB线将Seeeduino连接到PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_arduino.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_arduino.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	如果我们没有Grove Base Shield，我们也可以直接将Grove-PIR运动传感器连接到Seeeduino，如下所示。
:::
| Seeeduino       | Grove - PIR运动传感器 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| D2            | 黄色                  |



#### 软件

- 将下面的代码复制到Arduino IDE中并上传。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。


```c
/*
PIR运动传感器引脚的宏定义
使用引脚2接收模块的信号
*/
#define PIR_MOTION_SENSOR 2


void setup()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    Serial.begin(9600);  

}

void loop()
{
    // 如果检测到移动的人
    // 要了解更多关于为什么数字数字被用作布尔值的信息，请查看 https://www.techtarget.com/whatis/definition/Boolean#:~:text=The%20Boolean%20data,1%20or%200
    if(digitalRead(PIR_MOTION_SENSOR))
        Serial.println("Hi,people is coming");
    else
        Serial.println("Watching");

 delay(200);
}

```


:::note
    检测距离和保持时间可以通过在板上添加两个额外的电位器来调节。详细信息请参考下面的V1.2 Eagle。该模块也可以通过更改跳线帽设置为可重新触发或不可重新触发。
:::

结果应该如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/result_arduino.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/result_arduino.png" alt="pir" width={600} height="auto" /></p>

:::tip
使用跳线帽短接两个引脚来触发可重复或不可重复触发。如果您使用GND和引脚1，组合结果是不可重复触发（默认）。如果您使用引脚1和VCC，触发是可重复的。不可重复触发意味着事件在一个周期内（通常几秒钟）发生一次。在wiki示例的情况下，它是一个不可重复触发。
:::

### 与Codecraft一起使用

#### 硬件

**步骤1.** 将Grove - PIR运动传感器连接到Base Shield的D2端口。

**步骤2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤3.** 通过USB线将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将主程序拖到工作区域。

:::note
    如果这是您第一次使用Codecraft，另请参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤2.** 拖拽积木块如下图所示，或打开可在本页末尾下载的cdc文件。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/cc_PIR_Motion_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/cc_PIR_Motion_Sensor.png" alt="pir" width={600} height="auto" /></p>

将程序上传到您的Arduino/Seeeduino。

:::success
    当代码上传完成后，当有人来时LED将点亮。
:::
### 与Raspberry Pi一起使用（使用Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - PIR运动传感器 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|


- **步骤2**. 将Grove Base Hat插入Raspberry。
- **步骤3**. 将PIR运动传感器连接到Base Hat的端口12。
- **步骤4**. 通过USB线将Raspberry Pi连接到PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Motion_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Motion_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    对于步骤3，您可以将PIR运动传感器连接到**任何GPIO端口**，但请确保使用相应端口号更改命令。
:::

#### 软件

- **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤2**. 通过克隆grove.py库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤3**. 执行以下命令运行代码。

```
cd grove.py/grove
python grove_mini_pir_motion_sensor.py 12

```

以下是grove_mini_pir_motion_sensor.py代码。

```python

import time
from grove.gpio import GPIO


class GroveMiniPIRMotionSensor(GPIO):
    def __init__(self, pin):
        super(GroveMiniPIRMotionSensor, self).__init__(pin, GPIO.IN)
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

Grove = GroveMiniPIRMotionSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    pir = GroveMiniPIRMotionSensor(int(sys.argv[1]))

    def callback():
        print('Motion detected.')

    pir.on_detect = callback

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()

```

:::success
    如果一切正常，您将能够看到以下结果
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_mini_pir_motion_sensor.py 12
Motion detected.
Motion detected.
Motion detected.
^CTraceback (most recent call last):
  File "grove_mini_pir_motion_sensor.py", line 84, in <module>
    main()
  File "grove_mini_pir_motion_sensor.py", line 80, in main
    time.sleep(1)
KeyboardInterrupt

```

您可以通过简单地按++ctrl+c++退出此程序。




### 与Raspberry Pi配合使用（使用GrovePi_Plus）

#### 硬件

- **步骤1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove - PIR运动传感器 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|


- **步骤2.** 将GrovePi_Plus插入Raspberry。

- **步骤3.** 将传感器连接到GrovePi_Plus的**D8**端口。

- **步骤4.** 通过USB线将Raspberry连接到PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_pi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_pi.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件


- **步骤1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)配置开发环境。

- **步骤2.** 按照[更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)更新GrovePi的最新固件。

:::tip
    在本wiki中，我们使用路径**~/GrovePi/**而不是**/home/pi/Desktop/GrovePi**，您需要确保步骤2和步骤3使用相同的路径。
:::
:::note
    我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::
:::note
     如果您使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用Python3**运行此命令行。
:::
- **步骤3.** Git克隆Github仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

-	**步骤4.** 运行以下命令使用PIR运动传感器监测人员移动。

```
cd ~/GrovePi/Software/Python
sudo python3 grove_pir_motion_sensor.py
```

以下是grove_pir_motion_sensor.py代码。

```python
import time
import grovepi

# Connect the Grove PIR Motion Sensor to digital port D8
# SIG,NC,VCC,GND
pir_sensor = 8

grovepi.pinMode(pir_sensor,"INPUT")

while True:
    try:
        # Sense motion, usually human, within the target range
        if grovepi.digitalRead(pir_sensor):
            print 'Motion Detected'
        else:
            print '-'

        # if your hold time is less than this, you might not see as many detections
        time.sleep(.2)

    except IOError:
        print "Error"
```

结果应该如下所示：

```python
pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_pir_motion_sensor.py

-
-
-
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
-
-

```

## 常见问题

**Q1: 如何使距离可调？**

A1: R2：用于调节检测距离（AMP系数，2MΩ）。R6：用于调节保持时间（触发占空比，100KΩ）。

检测距离可以从6米调节到仅几厘米。如果电位器设置到一端，模块会过于敏感，即使没有人在其前方移动，也会被大气触发。保持时间也可以通过延迟时间电位器调节，数值大约从25秒到1秒。

如果焊接了R2和R6，请确保R13和R14为空。

:::note
    存在电路板可能被损坏的风险。在进行此修改之前请仔细考虑。
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Resistor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Resistor.png" alt="pir" width={600} height="auto" /></p>



## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源


- **[Eagle]** [Grove - PIR Motion Sensor Eagle文件 v1.2](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip)
- **[PDF]** [Grove - PIR Motion Sensor v1.2 原理图](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Grove_PIR_Sensor_v1.2.pdf)
- **[PDF]** [Grove - PIR Motion Sensor Eagle V1.2 PCB](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20-%20PIR%20motion%20sensor%20v1.1b%20PCB.pdf)
- **[库文件]** [PIR Motion Sensor的Github仓库](https://github.com/Seeed-Studio/PIR_Motion_Sensor)
- **[数据手册]** [BISS0001 数据手册](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Twig_-_BISS0001.pdf)
- **[数据手册]** [菲涅尔透镜 8120 数据手册](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Fresnel_lens_8120.pdf)
- **[Codecraft]** [CDC文件](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove_PIR_Motion_Sensor_CDC_File.zip)


## 项目

**使用PIR运动传感器的防盗报警器**：本文介绍了使用PIR运动传感器的防盗报警器。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/pooja_baraskar/burglar-alarm-with-pir-motion-sensor-964c42/embed' width='350'></iframe>

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