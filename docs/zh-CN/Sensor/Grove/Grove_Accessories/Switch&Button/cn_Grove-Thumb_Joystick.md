---
description: Grove - 拇指摇杆
title: Grove - 拇指摇杆
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Thumb_Joystick
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1.jpg)

Grove - 拇指摇杆是一款与Grove兼容的模块，非常类似于PS2（PlayStation 2）控制器上的“模拟”摇杆。X轴和Y轴是两个约10k的电位器，通过生成模拟信号来控制二维运动。摇杆还配备了一个按键，可用于特殊应用。当模块处于工作模式时，它将输出两个模拟值，分别代表两个方向。与普通摇杆相比，其输出值限制在较小范围内（即200~800），只有在按下时，X值才会设置为1023，MCU可以检测到按下的动作。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border={0} /></a></p>

## 版本

| 产品版本                     | 变更                                                                                                                                 | 发布日期   |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------|
| Grove - 拇指摇杆 V1.1    | 初始版本                                                                                                                           | 2016年10月 |

## 规格

| 项目                                | 最小值 | 典型值 | 最大值 | 单位 |
|-------------------------------------|--------|---------|--------|------|
| 工作电压                            | 4.75   | 5.0     | 5.25   | V    |
| 输出模拟值（X坐标）                 | 206    | 516     | 798    | \    |
| 输出模拟值（Y坐标）                 | 203    | 507     | 797    | \    |

:::tip
关于Grove模块的更多详情，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为Arduino平台提供软件库或代码示例。无法为所有可能的MCU平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 演示

Grove - 拇指摇杆是一种模拟设备，输出范围为 0 到 1023 的模拟信号。这需要我们使用 Arduino 的模拟端口来读取数据。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | 基础扩展板 | Grove - 拇指摇杆 |
|----------------|------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **步骤 2.** 使用 4 针 Grove 电缆将模块连接到 Grove 基础扩展板的 `A0`/`A1` 端口。
- **步骤 3.** 将 Grove 基础扩展板插入 Seeeduino。
- **步骤 4.** 使用 USB 电缆将 Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Grove-Thumb_Joystick.jpg)

:::note
如果没有 Grove 基础扩展板，我们也可以直接将 Grove - 拇指摇杆连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 拇指摇杆 |
|-----------------|-----------------------|
| 5V              | 红色                 |
| GND             | 黑色                 |
| `A1`            | 白色                 |
| `A0`            | 黄色                 |

#### 软件

- **步骤 1.** 将以下代码复制并粘贴到一个新的 Arduino 草图中。

```c
/*
  拇指摇杆演示 v1.0
  作者：https://www.seeedstudio.com
  将模块连接到 A0 和 A1 端口使用；
*/

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("X 和 Y 坐标是:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

- **步骤 2.** 打开串行监视器，查看输出的模拟信号值。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Grove-Thumd_Joystick_Result.jpg)

Arduino 模拟端口的输出值可以通过以下公式转换为相应的电阻值：R=(float)(1023-sensorValue)\*10/sensorValue。

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove - 拇指摇杆连接到基础扩展板的 `A0` 端口。

**步骤 2.** 将基础扩展板插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 电缆将 Seeeduino/Arduino 连接到您的 PC。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
如果这是您第一次使用 Codecraft，请参阅 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图拖动模块或打开页面底部提供的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/cc_Thumb_Joystick.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
代码上传完成后，您将在串行监视器中看到 X 和 Y 坐标。
:::

### 使用 Raspberry Pi (配备 Grove 基础扩展帽)

#### 硬件

- **步骤 1.** 本项目使用的物品：

| Raspberry Pi | Grove 基础扩展帽 | Grove - 拇指摇杆 |
|--------------|-----------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **步骤 2.** 将 Grove 基础扩展帽插入 Raspberry Pi。
- **步骤 3.** 将拇指摇杆连接到基础扩展帽的 `A0` 端口。
- **步骤 4.** 使用 USB 电缆将 Raspberry Pi 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Thumb_Hat.jpg)

:::note
在步骤 3 中，您可以将拇指摇杆连接到 **任何模拟端口**，但请确保您在命令中使用相应的端口号。
:::

#### 软件

:::caution
如果您使用的是 **Raspberry Pi 且 Raspberry Pi OS >= Bullseye**，您必须仅使用 Python3 执行以下命令。
:::

- **步骤 1.** 按照 [软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2.** 克隆 grove.py 库以下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3.** 执行以下命令运行代码。

```
cd grove.py/grove
python3 grove_thumb_joystick.py 0
```

:::note
您可以使用 ++python grove_thumb_joystick.py pin++ 执行程序，其中 pin 可以是 ADC 组中的 {0, 2, 4, 6}，并将设备连接到相应的插槽 {`A0`, `A2`, `A4`, `A6`}。
:::

以下是 grove_thumb_joystick.py 的代码。

```python
import math
import sys
import time
from grove.adc import ADC


class GroveThumbJoystick:

    def __init__(self, channelX, channelY):
        self.channelX = channelX
        self.channelY = channelY
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channelX), self.adc.read(self.channelY)

Grove = GroveThumbJoystick


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = GroveThumbJoystick(int(pin), int(pin + 1))

    while True:
        x, y = sensor.value
        if x > 900:
            print('摇杆被按下')
        print("X, Y = {0} {1}".format(x, y))
        time.sleep(.2)

if __name__ == '__main__':
    main()

```

:::提示
如果一切正常，您将能够看到以下结果：
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_thumb_joystick.py 0
Hat Name = 'Grove Base Hat RPi'
X, Y = 506 484
X, Y = 484 484
X, Y = 506 484
X, Y = 506 487
Joystick Pressed
X, Y = 999 485
X, Y = 310 736
X, Y = 681 484
Joystick Pressed
X, Y = 999 277
Joystick Pressed
X, Y = 999 487
X, Y = 506 484
X, Y = 501 486
X, Y = 509 484
X, Y = 511 486
X, Y = 510 485
^CTraceback (most recent call last):
  File "grove_thumb_joystick.py", line 69, in <module>
    main()
  File "grove_thumb_joystick.py", line 66, in main
    time.sleep(.2)
KeyboardInterrupt

```

您可以通过简单地按下 ++ctrl+c++ 来退出此程序。

:::注意
您可能已经注意到，对于模拟端口，丝印上的引脚编号类似于 **`A1`、`A0`**，然而在命令中我们使用参数 **0** 和 **1**，与数字端口相同。因此，请确保将模块插入正确的端口，否则可能会发生引脚冲突。
:::

### 使用 Raspberry Pi（搭配 GrovePi_Plus）

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove - Thumb Joystick |
|--------------|-------------|-----------------|
|![输入图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。
- **步骤 3.** 将 Grove-Thumb Joystick 连接到 GrovePi_Plus 的 **`A0`** 端口。
- **步骤 4.** 通过 USB 数据线将 Raspberry 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Pi_Joystick%20connection.jpg)

#### 软件

:::注意
如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 来运行此命令。
:::

- **步骤 1.** 导航到示例代码的目录：

```
cd yourpath/GrovePi/Software/Python/

```

- **步骤 2.** 查看代码

```
nano grove_thumb_joystick.py   # 按 "Ctrl+x" 退出 #
```

```python
import time
import grovepi

# 将 Grove Thumb Joystick 连接到模拟端口 A0

# GrovePi 端口 A0 使用 Arduino 引脚 0 和 1
# GrovePi 端口 A1 使用 Arduino 引脚 1 和 2
# 不要将任何使用引脚 1 的设备插入端口 A1
# 大多数 Grove 传感器仅使用其 4 个引脚中的 3 个，这就是为什么 GrovePi 在相邻端口之间共享 Arduino 引脚
# 如果传感器的引脚定义为 SIG,NC,VCC,GND，则第二个（白色）引脚未连接到任何东西

# 如果您希望连接两个摇杆，请使用端口 A0 和 A2（跳过 A1）

# 使用两个引脚 - 一个用于 X 轴，一个用于 Y 轴
# 此配置表示您正在使用端口 A0
xPin = 0
yPin = 1
grovepi.pinMode(xPin,"INPUT")
grovepi.pinMode(yPin,"INPUT")

# Grove Thumb Joystick 是一个模拟设备，输出范围为 0 到 1023 的模拟信号
# X 和 Y 轴是两个约 10k 的电位器，以及一个短路 X 轴的瞬时按钮

# 我的摇杆产生的结果与上述 URL 中的规格略有不同
# 我在这里列出了两者：

# 规格
#     最小  典型  最大  点击
#  X  206   516   798   1023
#  Y  203   507   797

# 我的摇杆
#     最小  典型  最大  点击
#  X  253   513   766   1020-1023
#  Y  250   505   769
while True:
    try:
        # 获取 X/Y 坐标
        x = grovepi.analogRead(xPin)
        y = grovepi.analogRead(yPin)

        # 计算 X/Y 电阻
        Rx = (float)(1023 - x) * 10 / x
        Ry = (float)(1023 - y) * 10 / y

        # 是否在 X 轴检测到点击？
        click = 1 if x >= 1020 else 0

        print "x =", x, " y =", y, " Rx =", Rx, " Ry =", Ry, " click =", click
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **步骤 3.** 运行示例。

```
sudo python3 grove_thumb_joystick.py
```

- **步骤 4.** 我们将在终端上看到如下输出显示。

![输入图片描述](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/pi_result.png)|

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Eagle_Design_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---------

- **[Eagle]** [Grove-Thumb Joystick 原理图](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Eagle_Design_Files.zip)
- **[Datasheet]** [模拟摇杆数据手册](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Analog_Joystick_Datasheet.jpg)
- **[PDF]** [摇杆原理图 PDF 文件](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Joystick.pdf)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Grove_Thumb_Joystick_CDC_File.zip)

## 项目

**Raspberry Pi 音乐服务器**：Raspberry Pi 项目的第一步。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kishima7/raspberry-pi-music-server-f5a0ae/embed' width='350'></iframe>

**制作一个定制的 Minecraft 控制器**：使用 GrovePi 制作一个定制的 Minecraft 控制器。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dexterindustries/build-a-custom-minecraft-controller-d55d9c/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>