---
description: Grove 树莓派基础套件
title: Grove 树莓派基础套件
keywords:
- Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Base_Kit_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


## GROVE 系统

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png)

Grove 是一个模块化原型系统，由基础单元和各种带有标准化连接器的模块组成。基础单元通常是一个微处理器，允许与 Grove 模块进行通信、处理和控制输入或输出。每个 Grove 模块通常处理单一功能，从简单的按钮到更复杂的心率传感器。标准化的 Grove 连接器允许用户采用积木式方法组装 Grove 单元，与基于跳线或焊接的系统相比，它更容易组装或拆卸，这简化了实验、构建和原型制作的学习系统。
我们还为各种开发平台提供 Grove 转排针转换器或 Grove 基础 HAT，适用于那些想要在没有 Grove 系统开发板的情况下使用 Grove 传感器和执行器模块的用户。

Grove 系统用户需要至少具备一些基本的电子知识背景，否则您需要通过这个基础教程来学习 Grove 系统的一些基本操作，本教程的第一部分包含入门套件中包含的组件的基本信息列表，然后是为 Seeeduino Lotus 设置 Arduino IDE 的基本设置。接下来，11 个教程课程提供了入门套件中每个单独组件的基本操作以及通过组合多个模块的应用，这为学习者提供了一些关于 Grove 系统连接和编程的见解和基础知识。

## GROVE 树莓派基础套件

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/kit.jpg)

Grove 入门套件包含一个 Grove 基础 Hat（适用于树莓派）和 10 个 Grove 模块。详细信息如下所列。

### 产品详情

#### Grove 基础 Hat

**[Grove 树莓派基础 Hat](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg)

如今，Grove 系列传感器、执行器和显示器已经发展成为一个庞大的家族。未来将有越来越多的 Grove 模块加入 Grove 生态系统。我们看到 Grove 帮助创客、工程师、教师、学生甚至艺术家构建、制作、创造...我们始终认为让 Grove 模块与更多平台兼容是我们的责任。现在我们为您带来了 Grove 树莓派基础 Hat 和 Grove 树莓派 Zero 基础 Hat，换句话说，我们为树莓派带来了 Grove 系统。

Grove 树莓派基础 Hat 提供数字/模拟/I2C/PWM/UART 端口以满足您的所有需求。在内置 MCU 的帮助下，树莓派还可以使用 12 位 8 通道 ADC。

**特性**

- 支持 Raspberry 2/3B/3B+/Zero
- 内置 MCU
- 12 位 ADC
- 多类型 Grove 端口

**硬件概述**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pi_pinout.jpg)

GPIO：与树莓派相同的引脚排列。

PWM：Grove PWM 端口连接到 GPIO/BCM 引脚 12（PWM0）和 GPIO/BCM 引脚 13（PWM1），这是树莓派的硬件 PWM 引脚，此外，您可以将所有 GPIO 引脚用作软件 PWM 引脚。

:::note

- Grove 端口旁边的所有丝印层引脚编号都是 BCM 引脚编号。BCM 引脚和物理引脚之间的区别请参考[这里](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)

- 与硬件 PWM 相比，软件 PWM 不够精确，在高频率下会出现问题。

- GPIO/BCM 引脚 18 也标记为 PWM0，实际上 GPIO/BCM 12 和 GPIO/BCM 18 共享同一个 PWM 通道，因此它们不能设置为不同的速率。

- 音频插孔输出也使用 PWM 0 和 PWM 1，因此您不能同时在该插座上输出音频并使用 PWM。
:::

UART：Grove UART 端口连接到 GPIO14（UART0 TX）和 GPIO15（UART0 RX）。UART 通常在树莓派上用作通过 GPIO 控制它的便捷方式，或从串行控制台访问内核启动消息（默认启用）。它也可以用作将 Arduino、bootloaded ATmega、ESP8266 等与您的树莓派接口的方式。

数字：此板上有 6 个数字 Grove 插座，通常 Grove 电缆的黄线（连接到 4 引脚 Grove 插座的顶部引脚）是信号线，因此我们将数字 Grove 端口命名为 D5/D16/D18/D22/D24/D26。

模拟：众所周知，树莓派中没有 ADC，因此它不能直接与模拟传感器配合使用。现在在内置 MCU STM32 的帮助下，Grove 基础 hat 可以作为外部 12 位 ADC 工作，这意味着您可以在树莓派上使用模拟传感器。更令人高兴的是，不是一个而是四个模拟 Grove 插座可用。模拟传感器将模拟电压输入到 12 位 ADC。ADC 将模拟数据转换为数字数据后，通过 I2C 接口将数字数据输入到树莓派。

I2C：此板上有三个 I2C 端口可用，它们都直接连接到树莓派的 I2C 引脚。您可以将这部分视为 I2C 集线器。Seeed 的大多数新 Grove 模块都有 I2C 接口，您可能会发现这三个端口非常有用。

SWD：我们使用 SWD 端口将固件烧录到此 hat。此外，您可以在此部分看到 3 个 GPIO 引脚，即引脚 9/引脚 10/引脚 11。这三个引脚不被任何 Grove 端口使用，您可以自由使用它们而不用担心引脚冲突。

#### Grove 模块

**[Grove - 蜂鸣器](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer.jpg)

该模块使用压电蜂鸣器作为主要组件，当连接到数字输出并且逻辑电平设置为高电平时，它可以产生高音调，否则它可以根据连接到它的模拟PWM输出产生的频率产生各种音调。（注意：正常人耳能够区分的频率范围在20 Hz到20kHz之间。）

**[Grove - 红色LED按钮](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDButton.jpg)

Grove - LED按钮由Grove - 黄色按钮、Grove - 蓝色LED按钮和Grove - 红色LED按钮组成。该按钮稳定可靠，使用寿命长达100,000次。内置LED，您可以将其应用于许多有趣的项目中，使用LED显示按钮状态非常实用。

**[Grove - 光传感器](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lightsensor.jpg)

Grove - 光传感器集成了一个光敏电阻（光依赖电阻）来检测光强度。当光强度增加时，光敏电阻的阻值减小。板载双运放芯片LM358产生与光强度相对应的电压（即基于阻值）。输出信号是模拟值，光线越亮，数值越大。

**[Grove - 湿度传感器](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Moisture_sensor.jpg)

该湿度传感器可用于检测土壤湿度或判断传感器周围是否有水，让您花园中的植物在口渴时能够向人类求助。该传感器使用非常简单，您只需将其插入土壤中并读取数据即可。使用该传感器，您可以制作一个小项目，让植物向您发送消息，如"我现在渴了，请给我一些水。"

**[Grove - 迷你PIR运动传感器](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/miniPIR.jpg)

Grove - 迷你PIR运动传感器允许您感应运动，通常是其范围内的人体运动。只需将其连接到Grove - Base shield并编程，当任何人在其检测范围内移动时，传感器将在其SIG引脚上输出高电平。

**[Grove - 舵机](https://www.seeedstudio.com/Grove-Servo-p-1241.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Servo.jpg)

Grove - 舵机是带有齿轮传动和反馈系统的直流电机。它用于机器人的驱动机构。该模块是Grove爱好者的奖励产品。我们将三线舵机调节为Grove标准连接器。现在您可以像典型的Grove模块一样即插即用，无需跳线杂乱。

**[Grove - 温湿度传感器（DHT11）](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/DHT11.jpg)

该温湿度传感器提供预校准的数字输出。独特的电容式传感器元件测量相对湿度，温度由负温度系数（NTC）热敏电阻测量。它具有出色的可靠性和长期稳定性。请注意，该传感器不适用于0度以下的温度。

**[Grove - 继电器](https://www.seeedstudio.com/Grove-Relay-p-769.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Relay.jpg)

Grove-继电器模块是一个数字常开开关。通过它，您可以用低电压控制高电压电路，比如控制器上的5V。板上有一个指示LED，当受控端子闭合时会亮起。

**[Grove - 超声波测距仪](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Ultrasonic.jpg)

该Grove - 超声波测距仪是一个工作在40KHz的非接触式距离测量模块。当我们通过信号引脚提供超过10uS的脉冲触发信号时，Grove_Ultrasonic_Ranger将发出8个40kHz周期电平并检测回声。回声信号的脉冲宽度与测量距离成正比。公式如下：距离 = 回声信号高电平时间 * 声速（340M/S）/2。Grove_Ultrasonic_Ranger的触发和回声信号共享1个SIG引脚。

**[Grove - 16 x 2 LCD（蓝底白字）](https://www.seeedstudio.com/Grove-16-x-2-LCD-White-on-Blu-p-3196.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd.jpg)

该Grove – 162 LCD模块是一个16字符2行LCD显示器，它使用I2C总线接口与开发板通信，因此将引脚头从10个减少到2个，这对于Grove系统非常方便。该LCD显示模块还支持自定义字符，您可以通过简单的编码配置在该LCD模块上创建和显示心形符号或火柴人。

## 入门指南

### 最低要求

- micro USB 数据线
- Raspberry Pi
- SD 卡
- Grove Base Kit for Raspberry Pi

### 基础教程

#### Arduino IDE 基础设置

#### 如何烧录 Raspbian 镜像

**1. Raspbian Stretch 下载**

从 Raspberry Pi 官方网站下载 [Raspbian Stretch](https://www.raspberrypi.org/downloads/raspbian/)，选择"with desktop and recommended software"版本。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss0.png)

**2. Win32 Disk Imager**

- 从 Sourceforge 项目页面下载 [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/) 安装文件，运行它来安装软件。

- 将 SD 卡插入 SD 卡读卡器并连接到您的 PC。

- 从桌面或菜单运行 Win32DiskImager 工具。

- 在设备框中，选择 SD 卡对应的驱动器盘符。请小心选择正确的驱动器：如果您选择了错误的驱动器，可能会破坏计算机硬盘上的数据！如果您使用的是计算机中的 SD 卡插槽，并且在 Win32DiskImager 窗口中看不到驱动器，请尝试使用外部 SD 适配器。

- 点击"Write"并等待写入完成。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss1.png)

- 完成。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss2.png)

- 退出镜像工具并弹出 SD 卡。

#### 基础配置

**无线连接和 SSH**

**1.** 在 /boot 文件夹中创建一个名为"wpa_supplicant.conf"的文件，并复制以下代码。

```txt
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

:::note
Wi-Fi 名称和密码应与您的 PC 连接的本地 Wi-Fi 相同（确保您的 PC 和 Raspberry Pi 在同一局域网中）。
:::

**2.** 在 /boot 文件夹中创建一个名为"ssh"的空白文件。

**3.** 将带有 Raspbian 的 SD 卡插入 Raspberry Pi

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/sd_card.jpg)

**4.** 将 Raspberry Pi 连接到电源并开机。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/power.jpg)

**5.** 打开 putty 连接 PC 到 Raspberry Pi。

下载 putty：[https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png)

**Raspberry Pi**
默认用户名：pi
默认密码：raspberry

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss4.jpg)

**VNC 配置**

**1.** 在终端中输入以下命令打开 raspi-config。

```bash
sudo raspi-config
```

向下箭头到 5 interfacing Options 并按"enter"选择。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

向下箭头到 P3 VNC 并按"enter"选择。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss6.png)

选择"Yes"启用它。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss7.png)

选择"Ok"。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss8.png)

**2.** 安装 VNC Viewer

下载 [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss9.png)

打开 VNC Viewer 并输入 Raspberry Pi 的 IP 地址。您可以在 Raspberry Pi 的终端中输入 `ifconfig` 命令找到 IP 地址（或者您可以输入 raspberrypi.local）。

:::note
如果您使用 raspberrypi.local 登录您的 Pi，您应该确保在您的局域网中只有一个 Raspberry Pi 在使用。
:::

输入默认用户名和密码，现在您可以进入 Raspberry Pi 的远程桌面！

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss10.png)

成功！

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss11.PNG)

**Base Hat 配置**

**1.** 关闭 Raspberry Pi

```bash
sudo shutdown -h now
```

将 Grove Base Hat for Raspberry Pi 插入 Raspberry Pi。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pi&hat.jpg)

**2.** 用 micro-usb 数据线给 Raspberry Pi 供电以启用 I2C

在终端中输入以下命令打开 raspi-config。

```bash
sudo raspi-config
```

向下箭头到 5 interfacing Options 并按"enter"选择。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

向下箭头到 P5 I2C 并按"enter"选择。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss13.png)

选择"Yes"启用它。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss14.png)

选择"Ok"。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss15.png)

选择"Finish"保存更改。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss16.png)

**3.** 一键安装，快速开始，无论您怎么称呼它，使用下面的单个命令。

```bash
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss12.PNG)

如果一切顺利，您将看到以下通知。

```bash
Successfully installed grove.py-0.6
#######################################################
Lastest Grove.py from github install complete   !!!!!
#######################################################
```

**4.** 除了一键安装，您也可以[安装所有依赖项](https://github.com/Seeed-Studio/grove.py#installation)。

**5.** 克隆最新的 python.py 仓库库。

```bash
git clone https://github.com/Seeed-Studio/grove.py
```

### Grove – LED 按钮演示

在完成树莓派的所有基本设置后，我们现在可以运行LED演示代码。注意：您应该首先完成上述步骤才能继续以下操作。

**硬件连接**

步骤1：将Grove - 红色LED按钮连接到Base Hat的D5端口

步骤2：将Base Hat插入树莓派

步骤3：通过micro USB线缆将树莓派连接到电源。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDbutton.png)

**上传代码**

步骤1：运行以下命令创建python文件

```bash
cd grove.py
nano example.py
```

步骤2：在python文件中复制以下代码

:::caution
 请确保文本编辑器处于unix格式。
:::

```python
#!/usr/bin/env python

import time
from grove.grove_ryb_led_button import GroveLedButton

def main():
    ledbtn = GroveLedButton(5)
    
    while True:
        ledbtn.led.light(True)
        time.sleep(1)
        
        ledbtn.led.light(False)
        time.sleep(1)

if __name__ == '__main__':
    main()
```

步骤3：运行程序

```bash
sudo chmod +x  example.py
sudo ./example.py
```

当您单击LED按钮时，LED将变为"开启"模式，如果长按则为"关闭"。如果您双击LED按钮，LED将闪烁。

```bash
pi@raspberrypi:~/grove.py $ sudo ./example.py
turn on  LED
turn on  LED
turn off LED
turn on  LED
blink    LED
^CTraceback (most recent call last):
  File "./example.py", line 17, in <module>
    main()
  File "./example.py", line 14, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

**闪烁代码说明**

在python中，由于模块之间相互引用，不同的模块可能有不同的"**main**"定义，每次只能有一个入口程序。入口程序的选择取决于**name**的值。"if__name__=='**main**'"相等，意味着它是python仿真的入口。

```python
if __name__ == '__main__':
    main()
```

## 树莓派Grove基础套件

 现在，您准备好探索Grove系统了吗？我们为您设计了8个教程，让您从一些基本的Grove模块开始。本节介绍如何将模块组合并应用于实际应用中。

### 先决条件

要开始Grove教程，您需要具备树莓派和Python编程语言的基础知识。请确保您已成功完成上述基本设置教程，并完成LED闪烁演示，确保它与您的树莓派和Grove Base Hat完全正常工作。

### 学习成果

- 能够使用Grove Base Hat与Grove模块构建应用程序。
- 能够演示Grove入门套件的每个组件，并在本教程后将相关模块应用到您自己的项目中
- 能够识别此套件中包含的模块类型及其应用。
- 理解模拟信号和数字信号之间的区别。

### 课程1：蜂鸣器

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer.jpg)

**目标**

使用蜂鸣器产生一些噪音，并设置特定频率来产生一些音调。

**硬件要求**

自备

- micro-USB线缆
- 树莓派3 Model B
- 计算机

套件中包含

- Grove Base Hat
- Grove线缆
- Grove – 蜂鸣器

**硬件连接**

**步骤1.** 使用Grove线缆将Grove - 蜂鸣器连接到Base Hat的PWM端口，并将Hat插入树莓派。

**步骤2.** 通过micro USB线缆将树莓派连接到电源。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer&pi.jpg)

**软件编程**

:::note
请确保您已将python.py存储库库克隆到您的树莓派。
:::

步骤1：运行以下命令创建python文件

```bash
cd grove.py
nano lesson_1.py
```

步骤2：复制以下代码

```python
#!/usr/bin/env python
import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

def main():
    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))
    
    CHORDS = [upmBuzzer.BUZZER_DO, upmBuzzer.BUZZER_RE, upmBuzzer.BUZZER_MI, 
        upmBuzzer.BUZZER_FA, upmBuzzer.BUZZER_SOL, upmBuzzer.BUZZER_LA, 
        upmBuzzer.BUZZER_SI]
    for i in range(0, len(CHORDS)):
        buzzer.playSound(CHORDS[i], 500000)
        time.sleep(0.1)
    
    del buzzer
    print('application exiting...')

if __name__ == '__main__':
    main()
```

步骤3：运行程序

```bash
sudo chmod +x lesson_1.py
sudo ./lesson_1.py
```

如果一切顺利，您应该注意到蜂鸣器正在发出"Do Re Mi Fa So La Si"的声音。

### 课程2：红色LED按钮

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDButton.jpg)

**目标**

使用Grove - 红色LED按钮控制LED的闪烁，并让Grove - 蜂鸣器发出不同的声音效果。

**硬件要求**

自备

- micro-USB线缆
- 树莓派3 Model B
- 计算机

套件中包含

- Grove Base Hat
- Grove线缆
- Grove - 红色LED按钮
- Grove – 蜂鸣器

**硬件连接**

**步骤1.** 使用Grove线缆将Grove - 蜂鸣器连接到PWM端口，将Grove - 红色LED按钮连接到Base Hat的D5端口，并将Hat插入树莓派。

**步骤2.** 通过micro USB线缆将树莓派连接到电源。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Buzzer&Button.png)

**软件编程**

:::note
请确保您已将python.py存储库库克隆到您的树莓派。
:::

步骤1：运行以下命令创建python文件

```bash
cd grove.py
nano lesson_2.py
```

步骤2：复制以下代码

```python
#!/usr/bin/env python

import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

from grove.button import Button
from grove.grove_ryb_led_button import GroveLedButton

def main():
    # Grove - LED Button connected to port D5
    button = GroveLedButton(5)
    
    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))
    
    def on_event(index, event, tm):
        if event & Button.EV_SINGLE_CLICK:
            print('single click')
            button.led.light(True)
            buzzer.playSound(upmBuzzer.BUZZER_DO, 500000)
            
        elif event & Button.EV_LONG_PRESS:
            print('long press')
            button.led.light(False)
            buzzer.playSound(upmBuzzer.BUZZER_DO, 1000000)
            
    button.on_event = on_event
    
    while True:
        time.sleep(1)

if __name__ == '__main__':
    main()
```

步骤 3：运行程序

```bash
sudo chmod +x lesson_2.py
sudo ./lesson_2.py
```

:::tip
如果一切顺利，你会发现当你长按 LED 按钮时，LED 会熄灭，蜂鸣器会发出长"Do"声。然而，当你单击时，LED 会亮起，蜂鸣器会发出短"Do"声。
:::

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_2.py
single click
single click
single click
long press
single click
long press
long press
Traceback (most recent call last):
  File "./lesson2.py", line 34, in <module>
    main()
  File "./lesson2.py", line 31, in main
    time.sleep(1)
KeyboardInterrupt
^Cpi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LED&Buz_demo.jpg)

### 课程 3：光传感器

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lightsensor.jpg)

**目标**

在本课程中，我们将向您展示如何使用 Grove - 光传感器来控制 Grove - 舵机。在这种情况下，舵机旋转角度随光强度变化。

**硬件需求**

自备

- micro-USB 线缆
- Raspberry Pi 3 Model B
- 计算机

套件包含

- Grove Base Hat
- Grove 线缆
- Grove - 光传感器
- Grove - 舵机

**硬件连接**

**步骤 1** 将 Grove - 光传感器连接到端口 A0，Grove - 舵机连接到 PWM 端口。

**步骤 2** 将 Base Hat 插入 Raspberry Pi。

**步骤 3** 通过 micro USB 线缆将 Raspberry Pi 连接到电源。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/servo&light.png)

**软件编程**

:::note
请确保您已将 python.py 仓库库克隆到您的 Raspberry Pi。
:::

步骤 1：运行以下命令创建 python 文件

```bash
cd grove.py
nano lesson_3.py
```

步骤 2：复制以下代码

```python
#!/usr/bin/env python

import time

from grove.grove_servo import GroveServo
from grove.grove_light_sensor_v1_2 import GroveLightSensor

def main():
    # Grove - 舵机连接到 PWM 端口
    servo = GroveServo(12)

    # Grove - 光传感器连接到端口 A0
    sensor = GroveLightSensor(0)

    while True:
        angle = sensor.light * 180 / 1000
        print('light value {}, turn to {} degree.'.format(sensor.light, angle))
        servo.setAngle(angle)

        time.sleep(1)

if __name__ == '__main__':
    main()
```

步骤 3：运行程序

```bash
sudo chmod +x lesson_3.py
sudo ./lesson_3.py
```

如果一切顺利，光强度的变化将导致舵机的不同旋转角度。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/light_on&off.jpg)

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_3.py
light value 300, turn to 113 degree.
light value 80, turn to 80 degree.
light value 166, turn to 165 degree.
light value 498, turn to 132 degree.
light value 601, turn to 60 degree.
light value 200, turn to 21 degree.
light value 459, turn to 99 degree.
light value 172, turn to 173 degree.
light value 319, turn to 138 degree.
^CTraceback (most recent call last):
  File "./lesson3.py", line 23, in <module>
    main()
  File "./lesson3.py", line 20, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

### 课程 4：运动传感器和继电器

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir+relay.jpg)
<!-- 图片链接缺失 -->
**目标**

使用 Grove - 迷你 PIR 运动传感器检测运动，如果有人来了就点亮灯。

**硬件需求**

自备

- micro-USB 线缆
- Raspberry Pi 3 Model B
- 计算机

套件包含

- Grove Base Hat
- Grove 线缆
- Grove - 迷你 PIR 运动传感器
- Grove - 继电器

**硬件连接**

**步骤 1** 将 Grove - 迷你 PIR 运动传感器连接到 Base Hat 的端口 D5，Grove - 继电器连接到端口 D16。

**步骤 2** 将 Base Hat 插入 Raspberry Pi

**步骤 3** 通过 micro USB 线缆将 Raspberry Pi 连接到电源。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir&relay.png)

**软件编程**

:::note
请确保您已将 python.py 仓库库克隆到您的 Raspberry Pi。
:::

步骤 1：运行以下命令创建 python 文件

```bash
cd grove.py
nano lesson_4.py
```

步骤 2：复制以下代码

```python
#!/usr/bin/env python

import time

from grove.grove_mini_pir_motion_sensor import GroveMiniPIRMotionSensor
from grove.grove_relay import GroveRelay

def main():
    # Grove - 迷你 PIR 运动传感器连接到端口 D5
    sensor = GroveMiniPIRMotionSensor(5)
    
    # Grove - 继电器连接到端口 D16
    relay = GroveRelay(16)
    
    def on_detect():
        print('motion detected')
        
        relay.on()
        print('relay on')
        
        time.sleep(1)
        
        relay.off()
        print('relay off')
    
    sensor.on_detect = on_detect
    
    while True:
        time.sleep(1)

if __name__ == '__main__':
    main()
```

步骤 3：运行程序

```bash
sudo chmod +x lesson_4.py
sudo ./lesson_4.py
```

如果一切顺利，一旦检测到运动，您应该看到继电器开/关。

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_4.py
motion detected
relay on
relay off
motion detected
relay on
relay off
^CTraceback (most recent call last):
  File "./lesson_4.py", line 33, in <module>
    main()
  File "./lesson_4.py", line 30, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir_light.jpg)

### 课程 5：超声波传感器和继电器

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra+relay.jpg)

**目标**

在本课程中，我们使用 Grove - 超声波测距仪检测距离，一旦有人靠近，Grove - 继电器上的灯应该"开启"。

**硬件需求**

自备

- micro-USB 线缆
- Raspberry Pi 3 Model B
- 计算机

套件包含

- Grove Base Hat
- Grove 线缆
- Grove - 超声波测距仪
- Grove - 继电器

**硬件连接**

**步骤 1** 将 Grove - 超声波测距仪连接到 Base Hat 的端口 D5，Grove - 继电器连接到端口 D16。

**步骤 2** 将 Base Hat 插入 Raspberry Pi

**步骤 3** 通过 micro USB 线将树莓派连接到电源。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra&relay.png)

**软件编程**

:::note
请确保您已将 python.py 仓库库克隆到您的树莓派。
:::

步骤 1：运行以下命令创建 python 文件

```bash
cd grove.py
nano lesson_5.py
```

步骤 2：复制以下代码

```python
#!/usr/bin/env python

import time

from grove.grove_relay import GroveRelay
from grove.grove_ultrasonic_ranger import GroveUltrasonicRanger

def main():
    # Grove - Ultrasonic Ranger 连接到端口 D5
    sensor = GroveUltrasonicRanger(5)
    
    # Grove - Relay 连接到端口 D16
    relay = GroveRelay(16)
    
    while True:
        distance = sensor.get_distance()
        print('{} cm'.format(distance))
        
        if distance < 20:
            relay.on()
            print('relay on')
            
            time.sleep(1)
            
            relay.off()
            print('relay off')
            
            continue
        
        time.sleep(1)

if __name__ == '__main__':
    main()
```

步骤 3：运行程序

```bash
sudo chmod +x lesson_5.py
sudo ./lesson_5.py
```

如果一切顺利，光强度的变化将导致舵机的不同旋转角度。

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_5.py
253.722585481 cm
253.739028141 cm
252.896341784 cm
1.20442489098 cm
relay on
relay off
4.51762100746 cm
relay on
relay off
253.985668051 cm
^CTraceback (most recent call last):
  File "./lesson_5.py", line 34, in <module>
    main()
  File "./lesson_5.py", line 31, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra_light.jpg)

现在，比较第四课和第五课的结果，您能够列出 Grove - mini PIR 运动传感器和 Grove 超声波测距仪的优缺点吗？

### 第六课：LCD

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd.jpg)

**目标**

使用 Grove - 16*2 LCD 屏幕显示"Hello World"。

**硬件要求**

自备

- micro-USB 线
- 树莓派 3 Model B
- 计算机

套件包含

- Grove Base Hat
- Grove 线缆
- Grove - 16*2 LCD

**硬件连接**

**步骤 1** 将 Grove - 16*2 LCD 连接到 Base Hat 的 I2C 端口。

**步骤 2** 将 Base Hat 插入树莓派。

**步骤 3** 通过 micro USB 线将树莓派连接到电源。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LCD.png)

**软件编程**

:::note
请确保您已将 python.py 仓库库克隆到您的树莓派。
:::

步骤 1：运行以下命令创建 python 文件

```bash
cd grove.py
nano lesson_6.py
```

步骤 2：复制以下代码

```python
#!/usr/bin/env python

import time

from grove.display.jhd1802 import JHD1802

def main():
    # Grove - 16x2 LCD(White on Blue) 连接到 I2C 端口
    lcd = JHD1802()

    lcd.setCursor(0, 0)
    lcd.write('hello, world!!!')

    print('application exiting...')

if __name__ == '__main__':
    main()
```

步骤 3：运行程序

```bash
sudo chmod +x lesson_6.py
sudo ./lesson_6.py
```

您应该看到"hello, world!!!"显示在 LCD 屏幕上。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/helloworld.jpg)

如果您想使用 Grove - 16*2 LCD 屏幕显示其他字符，您可以简单地更改代码中的 `lcd.write('hello, world!!!')`。

### 第七课：LCD 和温湿度传感器

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd+dht11.jpg)

**目标**

使用 Grove - 16*2 LCD 屏幕显示来自 Grove - 温湿度传感器的数据（温度和湿度）

**硬件要求**

自备

- micro-USB 线
- 树莓派 3 Model B
- 计算机

套件包含

- Grove Base Hat
- Grove 线缆
- Grove - 16*2 LCD
- Grove - 温湿度传感器

**硬件连接**

**步骤 1** 将 Grove - 16*2 LCD 连接到 I2C 端口，Grove - 温湿度传感器连接到端口 D5。

**步骤 2** 将 Base Hat 插入树莓派。

**步骤 3** 通过 micro USB 线将树莓派连接到电源。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/DHT11&LCD.png)

**软件编程**

:::note
请确保您已将 python.py 仓库库克隆到您的树莓派。
:::

步骤 1：运行以下命令创建 python 文件并安装 seeed-python-dht。

```bash
sudo pip3 install seeed-python-dht
cd grove.py
nano lesson_7.py
```

步骤 2：复制以下代码

```python
#!/usr/bin/env python3

import time

from seeed_dht import DHT
from grove.display.jhd1802 import JHD1802

def main():
    # Grove - 16x2 LCD(White on Blue) 连接到 I2C 端口
    lcd = JHD1802()

    # Grove - Temperature&Humidity Sensor 连接到端口 D5
    sensor = DHT('11', 5)

    while True:
        humi, temp = sensor.read()
        print('temperature {}C, humidity {}%'.format(temp, humi))

        lcd.setCursor(0, 0)
        lcd.write('temperature: {0:2}C'.format(temp))

        lcd.setCursor(1, 0)
        lcd.write('humidity: {0:5}%'.format(humi))

        time.sleep(1)

if __name__ == '__main__':
    main()

```

步骤 3：运行程序

```bash
sudo chmod +x lesson_7.py
sudo ./lesson_7.py
```

如果一切顺利，您应该看到当前温度和湿度值显示在 LCD 屏幕上

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_7.py
temperature 23C, humidity 16%
temperature 22C, humidity 17%
temperature 22C, humidity 17%
^CTraceback (most recent call last):
  File "./lesson_7.py", line 28, in <module>
    main()
  File "./lesson_7.py", line 25, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/temp&humi_LCD.jpg)

### 第八课：LCD 和土壤湿度传感器和蜂鸣器

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd+moisture+buzzer.jpg)

**目标**

使用 Grove - 16 * 2 LCD 显示当前湿度水平。当湿度状态为"湿润"时，Grove - 蜂鸣器应该发出警报。

**硬件要求**

自备

- micro-USB 数据线
- 树莓派 3 Model B
- 计算机

套件包含

- Grove Base Hat
- Grove 数据线
- Grove - 16*2 LCD
- Grove - 湿度传感器
- Grove - 蜂鸣器

**硬件连接**

**步骤 1** 将 Grove - 16*2 LCD 连接到 I2C 端口，Grove - 湿度传感器连接到 A0 端口，Grove - 蜂鸣器连接到 Grove Base Hat 的 PWM 端口。

**步骤 2** 将 Base Hat 插入树莓派。

**步骤 3** 使用 micro USB 将树莓派与 PC 连接。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lesson8.png)

**软件编程**

:::note
请确保您已将 python.py 仓库库克隆到您的树莓派。
:::

步骤 1：运行以下命令创建一个 python 文件

```bash
cd grove.py
nano lesson_8.py
```

步骤 2：复制以下代码

```python
#!/usr/bin/env python

import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

from grove.grove_moisture_sensor import GroveMoistureSensor
from grove.lcd.sh1107g import JHD1802

def main():
    # Grove - 16x2 LCD(蓝底白字) 连接到 I2C 端口
    lcd = JHD1802()
    
    # Grove - 湿度传感器连接到 A0 端口
    sensor = GroveMoistureSensor(0)
    
    # Grove - 蜂鸣器连接到 PWM 端口
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))
    
    while True:
        mois = sensor.moisture
        if 0 <= mois and mois < 300:
            level = 'dry'
        elif 300 <= mois and mois < 600:
            level = 'moist'
        else:
            level = 'wet'
            buzzer.playSound(upmBuzzer.BUZZER_DO, 200000)
        
        print('moisture: {}, {}'.format(mois, level))
        
        lcd.setCursor(0, 0)
        lcd.write('moisture: {0:>6}'.format(mois))
        
        lcd.setCursor(1, 0)
        lcd.write('{0:>16}'.format(level))
        
        time.sleep(1)

if __name__ == '__main__':
    main()
```

步骤 3：运行程序

```bash
sudo chmod +x lesson_8.py
sudo ./lesson_8.py
```

如果一切顺利，您将能够在 LCD 屏幕上看到湿度水平。一旦湿度水平达到"湿润"，蜂鸣器就会用来警报人们。

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_8.py
moisture: 0, dry
moisture: 0, dry
moisture: 396, moist
moisture: 398, moist
moisture: 407, wet
moisture: 418, wet
^CTraceback (most recent call last):
  File "./lesson_8.py", line 41, in <module>
    main()
  File "./lesson_8.py", line 38, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lesson8.png)

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