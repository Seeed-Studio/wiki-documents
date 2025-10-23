---
title: Grove - 舵机
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Servo/
slug: /cn/Grove-Servo
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove—Servo.jpg)

Grove - 舵机是一种带有齿轮和反馈系统的直流电机，常用于机器人驱动机制。该模块是为Grove爱好者提供的额外产品。我们将三线舵机调整为Grove标准连接器。现在您可以像使用典型的Grove模块一样即插即用，无需跳线杂乱。

如果您更喜欢原型舵机，可以查看 EMAX 9g ES08A 高灵敏迷你舵机。它们是同一型号，质量优良且价格实惠。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Servo-p-1241.html)

特点
---

* 小型模块
* Grove兼容接口
* 使用方便

规格
---

<table cellSpacing={0} width="80%">
  <tbody>
    <tr>
      <th scope="col"> 项目 </th>
      <th scope="col"> 最小值 </th>
      <th scope="col"> 典型值 </th>
      <th scope="col"> 最大值 </th>
      <th scope="col"> 单位 </th>
    </tr>
    <tr>
      <th> 工作电压 </th>
      <td> 4.8 </td>
      <td> 5.0 </td>
      <td> 6.0 </td>
      <td> V </td>
    </tr>
    <tr>
      <th> 扭矩 </th>
      <td colSpan={3}> 1.5/1.8 </td>
      <td> Kg.cm </td>
    </tr>
    <tr>
      <th scope="row"> 速度 </th>
      <td colSpan={3}> 0.12/0.16 </td>
      <td> s/60° </td>
    </tr>
    <tr>
      <th scope="row"> 尺寸 </th>
      <td colSpan={3}> 32X11.5X24 </td>
      <td> mm </td>
    </tr>
    <tr>
      <th scope="row"> 重量 </th>
      <td colSpan={3}> 8.5 </td>
      <td> g </td>
    </tr>
  </tbody>
</table>

支持的平台
-------------------

| Arduino                                                                                             | 树莓派                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

:::note
本文中描述的连接舵机的方法并不是最合适或推荐的方式。对于舵机，尤其是同时使用多个舵机时，应该使用专用的舵机驱动板为舵机提供额外的电力，并通过驱动板由开发板控制舵机。由于 Seeed Studio 目前没有提供合适的驱动板，本文仅作为使用示例展示如何直接将舵机连接到主板。这种方法**不推荐**用于实际项目。
:::

这里我们将通过一个简单的演示向您展示如何使用 Grove - Servo。首先，我们需要准备以下物品：

| Seeeduino V4 | Grove - Servo | Base Shield |
|--------------|-------------------|-------------|
|![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

舵机有三根线：电源线、地线和信号线。电源线通常是红色的，应连接到 Arduino/Seeeduino 板上的 5V 引脚。地线通常是黑色或棕色的，应连接到 Arduino 板上的地引脚。信号线通常是黄色、橙色或白色的，应连接到 Arduino 板上的 **D5** 引脚。我们可以根据需要更改数字端口，但不要忘记同时更改演示代码中的端口定义。

* 将模块连接到 Base Shield 的 **D5** 端口。
* 将 Grove- Base Shield 插入 Arduino。
* 通过 USB 数据线将 Arduino 连接到 PC。

#### 软件

* 使用 [Arduino Servo Library](https://arduino.cc/en/Reference/Servo) 让舵机的轴在 180 度范围内来回摆动。
* 通过路径直接打开代码：**File → Examples → Servo → Sweep**。

  ![](https://files.seeedstudio.com/wiki/Grove-Servo/img/library%20example.jpg)

```cpp
/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 https://arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // 创建一个舵机对象以控制舵机
// 大多数板上可以创建十二个舵机对象

int pos = 0;    // 用于存储舵机位置的变量

void setup() {
  myservo.attach(5);  // 将舵机连接到引脚 5
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // 从 0 度移动到 180 度
    // 每次移动 1 度
    myservo.write(pos);              // 告诉舵机移动到变量 'pos' 指定的位置
    delay(15);                       // 等待 15 毫秒让舵机到达位置
  }
  for (pos = 180; pos >= 0; pos -= 1) { // 从 180 度移动到 0 度
    myservo.write(pos);              // 告诉舵机移动到变量 'pos' 指定的位置
    delay(15);                       // 等待 15 毫秒让舵机到达位置
  }
}
```

* 上传代码后，我们可以看到舵机摆动。

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove - Servo 连接到 Base Shield 的 D5 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 数据线将 Seeeduino/Arduino 连接到您的 PC。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
如果这是您第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按下图拖动模块或打开页面底部提供的 cdc 文件。

![servo](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
代码上传完成后，您将看到舵机摆动。
:::

### 使用 Raspberry Pi（配合 Grove Base Hat for Raspberry Pi）

:::note
本文中描述的连接舵机的方法并不是最合适或推荐的方式。对于舵机，尤其是同时使用多个舵机时，应该使用专用的舵机驱动板为舵机提供额外的电力，并通过驱动板由开发板控制舵机。由于 Seeed Studio 目前没有提供合适的驱动板，本文仅作为使用示例展示如何直接将舵机连接到主板。这种方法**不推荐**用于实际项目。
:::

#### 硬件

* **步骤 1.** 本项目所需物品：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Servo |
|--------------|------------------------------|-------------------|
|![输入图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|

* **步骤 2.** 将 Grove Base Hat 插入 Raspberry Pi。
* **步骤 3.** 将 Grove - Servo 连接到 Base Hat 的端口 12。
* **步骤 4.** 通过 USB 数据线将 Raspberry Pi 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo_Hat.jpg)

:::note
在步骤 3 中，您可以将舵机模块连接到 **任何 GPIO 端口**，但请确保您更改命令以匹配相应的端口号。
:::

#### 软件

:::tip
如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 执行以下命令。
:::
* **步骤 1.** 按照 [软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
* **步骤 2.** 通过克隆 grove.py 库下载源文件。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

* **步骤 3**. 执行以下命令运行代码。

```bash
cd grove.py/grove
python3 grove_servo.py 12
```

以下是 grove_servo.py 的代码。

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
        IO.setup(channel, IO.OUT)
        self.pwm = IO.PWM(channel, 50)
        self.pwm.start(GroveServo.INIT_DUTY)

    def __del__(self):
        self.pwm.stop()

    def setAngle(self, angle):
        # 将角度从范围 0 ~ 180 映射到范围 25 ~ 125
        angle = max(min(angle, GroveServo.MAX_DEGREE), GroveServo.MIN_DEGREE)
        tmp = interp(angle, [0, 180], [25, 125])
        self.pwm.ChangeDutyCycle(round(tmp / 10.0, 1))

Grove = GroveServo

def main():
    if len(sys.argv) < 2:
        print('用法: {} servo_channel'.format(sys.argv[0]))
        sys.exit(1)

    servo = GroveServo(int(sys.argv[1]))

    while True:
        for x in range(0, 180):
            print(x, "度")
            servo.setAngle(x)
            time.sleep(0.05)
        for x in range(180, 0, -1):
            print(x, "度")
            servo.setAngle(x)
            time.sleep(0.05)

if __name__ == '__main__':
    main()
```

:::tip
如果一切正常，您将能够看到舵机摆动。
:::

```bash
pi@raspberrypi:~/grove.py/grove $ python3 grove_servo.py 12
0 度
1 度
2 度
3 度
4 度
5 度
6 度
7 度
8 度
9 度
10 度
11 度
12 度
13 度
14 度
15 度
16 度
17 度
18 度
19 度
20 度
21 度
^CTraceback (most recent call last):
  File "grove_servo.py", line 81, in <module>
    main()
  File "grove_servo.py", line 74, in main
    time.sleep(0.05)
KeyboardInterrupt
```

您可以通过简单地按下 ++ctrl+c++ 来退出此程序。

## 资源

* **[文档]** [理解 RC 舵机](http://www.rchelicopterfun.com/rc-servos.html)
* **[库]** [Arduino 教程 - 舵机库](https://www.arduino.cc/en/Reference/Servo)
* **[库]** [CodeCraft 代码](https://files.seeedstudio.com/wiki/Grove-Servo/res/Servo.zip)
* **[演示]** [数字/模拟时钟 - Arduino + 纸艺](https://www.instructables.com/id/DigitalAnalog-Clock-Arduino-PaperCraft/?ALLSTEPS)
* **[演示]** [低成本爱好舵机 XY 平台](https://www.instructables.com/id/Low-Cost-Hobby-Servo-XY-Table/?ALLSTEPS)

## 项目

**舵机 Grove 模块**：

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XNPn7AUmgqU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8GTej6Lv8us" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品体验顺畅。以下是几种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>