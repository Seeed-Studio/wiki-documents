---
description: Grove - 碰撞传感器
title: Grove - 碰撞传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Collision_Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/Grove_–_Collision_Sensor_photo.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/Grove_–_Collision_Sensor_photo.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 碰撞传感器可以检测是否发生任何碰撞运动或振动。当检测到振动时，它会输出一个低脉冲信号。为了使输出信号更加可靠和整洁，我们添加了必要的外部电路来减少噪声影响。因此，正常的摇晃不会产生任何输出。该传感器具有高灵敏度。您可以将其应用到您的项目中，例如用于电池管理的自动唤醒和断电功能。

其工作电压为5V，这使其与标准Arduino/Seeeduino 5V系统兼容。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html)

## 规格参数


-   电压：3.3/5V

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::   
## 支持的平台


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上面提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

### 与Arduino一起使用

基于碰撞发生时输出信号会发生变化的原理，我们设计了这个演示：每次传感器检测到碰撞时，LED就会点亮。这里LED作为一个被管理的设备，您可以参考这个演示来控制您的设备，比如自行车灯。

步骤如下：

1.使用Grove线缆将碰撞传感器连接到Grove - Basic Shield的数字端口2，并将LED连接到引脚13。

2.将Grove - Basic Shield插入Arduino。

3.使用USB线缆将Arduino/Seeeduino连接到PC。

4.复制并粘贴下面的代码到新的Arduino草图中，然后上传到您的Arduino。

```c
// 测试Grove - 碰撞传感器
#define LED 13 //Arduino或Seeeduino的板载LED
#define COLLISION_SENSOR 2//碰撞传感器连接到Arduino的D2

void setup()
{
    pins_init();
}

void loop()
{
    if(isTriggered())
    {
        turnOnLED();
        delay(2000);
    }
    else turnOffLED();
}

void pins_init()
{
    pinMode(LED,OUTPUT);
    turnOffLED();
    pinMode(COLLISION_SENSOR,INPUT);
}

boolean isTriggered()
{
    if(!digitalRead(COLLISION_SENSOR))
    {
        delay(50);
        if(!digitalRead(COLLISION_SENSOR))
        return true;//碰撞传感器触发
    }
    return false;
}

void turnOnLED()
{
    digitalWrite(LED,HIGH);//LED点亮
}

void turnOffLED()
{
    digitalWrite(LED,LOW);//LED熄灭
}
```

5.现在您可以检查LED的状态。每次您用手指敲击桌子时，LED都应该点亮。

您可以通过更改代码中的函数delay(50)来调整传感器灵敏度。

```c
if(!digitalRead(COLLISION_SENSOR))
{
    return true;//碰撞传感器触发
}
return false;
```

### 与Codecraft一起使用

#### 硬件

**步骤1.** 将Grove - 碰撞传感器连接到Base Shield的D2端口。

**步骤2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤3.** 通过USB线缆将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并拖拽一个主程序到工作区域。

:::note
    如果这是您第一次使用Codecraft，请参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤2.** 按照下图拖拽代码块，或者打开可在本页面末尾下载的cdc文件。
<!-- 
![cc](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/cc_Collision_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/cc_Collision_Sensor.png" alt="pir" width={600} height="auto" /></p>

将程序上传到您的Arduino/Seeeduino。

:::success
    当代码上传完成后，当碰撞传感器检测到碰撞时，Arduino引脚13上的LED将会点亮。
:::
### 与Raspberry Pi一起使用（配合Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 碰撞传感器|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html)|

- **步骤2**. 将Grove Base Hat插入Raspberry Pi。
- **步骤3**. 将Grove - 碰撞传感器连接到Base Hat的D5端口。
- **步骤4**. 通过USB线缆将Raspberry Pi连接到PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/with_hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/with_hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    对于步骤3，您可以将Grove - 碰撞传感器连接到**任何GPIO端口**，但请确保您使用相应的端口号更改命令。
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
python grove_collision_sensor.py 5

```

以下是grove_collision_sensor.py代码。

```python

import time
from grove.gpio import GPIO


class GroveCollisionSensor(GPIO):
    def __init__(self, pin):
        super(GroveCollisionSensor, self).__init__(pin, GPIO.IN)
        self._last_time = time.time()

        self._on_collision = None
        self._on_NoCollision = None
        self.collisionState = False

    @property
    def on_collision(self):
        return self._on_collision

    @on_collision.setter
    def on_collision(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_collision = callback

    @property
    def on_NoCollision(self):
        return self._on_NoCollision

    @on_NoCollision.setter
    def on_NoCollision(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_NoCollision = callback

    def _handle_event(self, pin, value):
        t = time.time()
        dt, self._last_time = t - self._last_time, t

        if not value:
            if callable(self._on_collision):
                self._on_collision(dt)
        else:
            if callable(self._on_NoCollision):
                self._on_NoCollision(dt)

Grove = GroveCollisionSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    button = GroveCollisionSensor(int(sys.argv[1]))

    def on_collision(t):
        print('Collision')
    def on_NoCollision(t):
        print("No Collision")

    button.on_collision = on_collision
    # button.on_NoCollision = on_NoCollision

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

```

:::success
    如果一切顺利，您将能够看到以下结果
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_collision_sensor.py 5
Collision
Collision
Collision
Collision
Collision
Collision
Collision
^CTraceback (most recent call last):
  File "grove_collision_sensor.py", line 112, in <module>
    main()
  File "grove_collision_sensor.py", line 108, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py/grove $ 

```


您可以通过简单地按 ++ctrl+c++ 来退出此程序。



### 与树莓派一起使用（配合 GrovePi_Plus）

1.您应该已经有了一个树莓派和一个 grovepi 或 grovepi+。

2.您应该已经完成了开发环境的配置，否则请参考[这里](/cn/GrovePi_Plus/)。

3.连接

-   使用 grove 线缆将传感器插入 grovepi 的 D2 接口。

4.导航到演示目录：
```
cd yourpath/GrovePi/Software/Python/
```
-   查看代码

```
nano grove_collision_sensor.py   # "Ctrl+x" 退出 #
```
```
import time
import grovepi

# 将 Grove 碰撞传感器连接到数字端口 D2
# SIG,NC,VCC,GND
collision_sensor = 2

grovepi.pinMode(collision_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(collision_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

5.运行演示。

```
sudo python grove_collision_sensor.py
```


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove-Collision_Sensor_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## 资源


-  **[Zip]** [Grove - 碰撞传感器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove-Collision_Sensor_eagle_file.zip)
-  **[PDF]** [MVS0608.02 数据手册](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/DataSheet-MVS0608_02-v2_1.pdf)
-  **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove_Collision_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Collision_Sensor -->

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