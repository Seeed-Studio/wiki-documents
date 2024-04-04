---
title: Grove - 伺服电机
description: Grove - 伺服电机
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Servo/
slug: /cn/Grove-Servo
last_update:
  date: 03/21/2024
  author: WuFeifei
---
![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove—Servo.jpg)

Grove - Servo 是一个带有齿轮和反馈系统的直流电机。它被用于机器人的驱动机制中。这个模块是 Grove 爱好者的赠品产品。我们将三线伺服电机调节为 Grove 标准连接器。现在，您可以像典型的 Grove 模块一样即插即用，无需杂乱无章的跳线。

但如果您更想试试原型伺服电机，可以看一下 EMAX 9g ES08A 高灵敏微型伺服电机。它们型号相同，品质上乘，且价格实惠。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Servo-p-1241.html)

## 特性

* 小型模块
* 兼容 Grove 接口
* 使用简便

## 规格

<table cellSpacing={0} width="80%">
  <tbody><tr>
      <th scope="col"> 项目
      </th>
      <th scope="col"> 最小值
      </th>
      <th scope="col"> 典型值
      </th>
      <th scope="col"> 最大值
      </th>
      <th scope="col"> 单位
      </th></tr>
    <tr>
      <th> 工作电压
      </th>
      <td> 4.8
      </td>
      <td> 5.0
      </td>
      <td> 6.0
      </td>
      <td> V
      </td></tr>
    <tr>
      <th> 扭矩
      </th><td colSpan={3}> 1.5/1.8
      </td>
      <td> Kg.cm
      </td></tr>
    <tr>
      <th scope="row"> 速度
      </th>
      <td colSpan={3}> 0.12/0.16
      </td>
      <td> s/60°
      </td></tr>
    <tr>
      <th scope="row"> 尺寸
      </th>
      <td colSpan={3}> 32X11.5X24
      </td>
      <td> mm
      </td></tr>
    <tr>
      <th scope="row"> 重量
      </th>
      <td colSpan={3}> 8.5
      </td>
      <td> g
      </td></tr></tbody></table>

支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上述提到的支持平台是模块软件或理论兼容性的一个指示。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户需要编写自己的软件库。
:::

## 入门指南

### 与Arduino一起操作

这里我们将通过一个简单的演示向您展示Grove - Servo是如何工作的。首先，我们需要准备以下物品：

| Seeeduino V4 | Grove - Servo | Base Shield |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

伺服舵机有三根线：电源线、地线和信号线。电源线通常是红色的，应该连接到Arduino/Seeeduino板上的5V引脚。地线通常是黑色或棕色的，应该连接到Arduino板上的一个地线引脚。信号线通常是黄色、橙色或白色的，应该连接到Arduino板上的**D5**引脚。我们可以按照自己的喜好改变数字端口。但请不要忘记在演示代码的定义中同时更改端口号。

* 将模块连接到Base Shield的**D5**端口。
* 将Grove-Base Shield插入Arduino。
* 通过USB线将Arduino连接到电脑。

#### 软件

* 让我们使用[Arduino Servo库](https://arduino.cc/en/Reference/Servo)来控制伺服舵机的轴在180度范围内来回转动。

* 通过以下路径直接打开代码：**文件 -> 示例 -> Servo -> Sweep**。

  ![](https://files.seeedstudio.com/wiki/Grove-Servo/img/library%20example.jpg)

```
/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 https://arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(5);  // attaches the servo on pin 5 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
}
```

* 上传草图。我们可以看到伺服舵机进行摆动。

### 使用Codecraft进行编程

#### 硬件

**步骤 1.** 将Grove - Servo连接到Base Shield的D5端口。

**步骤 2.** 将Base Shield插入到您的Seeeduino/Arduino上。

**步骤 3.** 通过USB线将Seeeduino/Arduino连接到您的电脑。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并拖动一个主程序到工作区域。

:::注意
    如果您是第一次使用Codecraft，请同时参考[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按照下面的图片拖动代码块，或者打开可以在本页面底部下载的cdc文件。

![servo](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo.png)

将程序上传到您的Arduino/Seeeduino。

:::提示
    当代码上传完成后，您会看到伺服舵机进行摆动。
:::

### 使用树莓派进行操作（配合树莓派Grove Base Hat）

#### 硬件

* **步骤 1**. 本项目所用物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Servo|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|

* **步骤 2**. 将Grove Base Hat插入树莓派。
* **步骤 3**. 将Grove - Servo连接到Base Hat的 12号端口。
* **步骤 4**. 通过USB线将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo_Hat.jpg)

:::注意
    在步骤3中，您可以将伺服舵机模块连接到**任何GPIO端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

:::提示
     如果您使用的是**搭载Raspberry Pi OS >= Bullseye的树莓派**，您必须使用此命令行**仅与Python3配合使用**。
:::

* **步骤 1**. 按照[设置软件](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation)来配置开发环境。
* **步骤 2**. 通过克隆grove.py库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

* **步骤 3**. 执行以下命令来运行代码。

```
cd grove.py/grove
python3 grove_servo.py 12

```

以下是grove_servo.py的代码。

```python

import RPi.GPIO as IO
import sys
import time
from numpy import interp

IO.setwarnings(False)
IO.setmode(IO.BCM)

class GroveServo:
    MIN_DEGREE = 0
    MAX_DEGREE = 180
    INIT_DUTY = 2.5

    def __init__(self, channel):
        IO.setup(channel,IO.OUT)
        self.pwm = IO.PWM(channel,50)
        self.pwm.start(GroveServo.INIT_DUTY)

    def __del__(self):
        self.pwm.stop()

    def setAngle(self, angle):
        # Map angle from range 0 ~ 180 to range 25 ~ 125
        angle = max(min(angle, GroveServo.MAX_DEGREE), GroveServo.MIN_DEGREE)
        tmp = interp(angle, [0, 180], [25, 125])
        self.pwm.ChangeDutyCycle(round(tmp/10.0, 1))

Grove = GroveServo

def main():
    if len(sys.argv) < 2:
        print('Usage: {} servo_channel'.format(sys.argv[0]))
        sys.exit(1)

    servo = GroveServo(int(sys.argv[1]))

    while True:
        for x in range(0, 180):
            print x, "degree"
            servo.setAngle(x)
            time.sleep(0.05)
        for x in range(180, 0, -1):
            print x, "degree"
            servo.setAngle(x)
            time.sleep(0.05)

if __name__ == '__main__':
    main()



```

:::提示
    如果一切顺利，您将能够看到伺服舵机进行摆动。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_servo.py 12
0 degree
1 degree
2 degree
3 degree
4 degree
5 degree
6 degree
7 degree
8 degree
9 degree
10 degree
11 degree
12 degree
13 degree
14 degree
15 degree
16 degree
17 degree
18 degree
19 degree
20 degree
21 degree
^CTraceback (most recent call last):
  File "grove_servo.py", line 81, in <module>
    main()
  File "grove_servo.py", line 74, in main
    time.sleep(0.05)
KeyboardInterrupt


```

您可以通过简单地按下 ++ctrl+c++ 来退出此程序。

## 资源

* **[文档]** [理解RC伺服舵机](http://www.rchelicopterfun.com/rc-servos.html)
* **[库]**[Arduino 教程 - Servo 库](https://www.arduino.cc/en/Reference/Servo)
* **[库]** [CodeCraft Code](https://files.seeedstudio.com/wiki/Grove-Servo/res/Servo.zip)
* **[演示]** [数字/模拟时钟 - Arduino + PaperCraft](https://www.instructables.com/id/DigitalAnalog-Clock-Arduino-PaperCraft/?ALLSTEPS)
* **[演示]** [低成本业余伺服XY工作台](https://www.instructables.com/id/Low-Cost-Hobby-Servo-XY-Table/?ALLSTEPS)

## 项目

**Grove伺服舵机模块**：

<iframe width="560" height="315" src="https://www.youtube.com/embed/XNPn7AUmgqU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8GTej6Lv8us" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您使用我们的产品时体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
