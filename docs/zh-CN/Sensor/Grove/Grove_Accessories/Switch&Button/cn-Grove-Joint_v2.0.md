---
description:  Grove - 关节 v2.0
title: Grove - 关节 v2.0
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Joint_v2.0
last_update:
  date: 03/23/2024
  author: WuFeifei
---
![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint.jpg)

Grove - Joint v2.0与Seeeduino Lotus有很多相似之处。它是一款微型ATMEGA328微控制器开发板。它使用Atmel ATMEGA328P-MU和CH340。ATMEGA328P-MU是一款高性能、低功耗的AVR 8位微控制器。CH340是一款USB总线转换芯片，可以实现USB到串行接口的转换。Grove - Joint v2.0包含两个Grove接口，包括I²C端口和两个数字I/O。它还支持电池供电。您可以使用它进行一些简单的应用。

## 规格

*   微控制器：ATmega328P-MU

*   工作电压：5V
*   数字I/O引脚：2
*   I2C端口：1
*   模拟输入通道：2（与I²C复用）
*   每个I/O引脚的直流电流：40 mA
*   闪存：32 KB（ATmega328P-MU）
*   RAM：2 KB（ATmega328P-MU）
*   EEPROM：1 KB（ATmega328P-MU）
*   时钟速度：12 MHz

## 硬件概述

以下是Grove - Joint模块的框图，它包含以下部分。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_instruction1_.jpg)

*   **电池接口** - 这个模块可以使用电池供电。
*   **光传感器** - 板载有一个连接到**A0**引脚的光传感器。
*   **状态LED** - 有3个LED指示板的状态。TX（**D1**）、RX（**D0**）和L（**D10**）。
*   **输入端口** - 输入端口是一个Grove I²C接口，同时也是两个模拟通道（**A4** & **A5**）。
*   **输出端口** - 输出端口也是一个Grove接口，包括两个数字I/O（**D3** & **D5**）。
*   **按钮** - 按钮连接到**D2**，也可以用作开关。
*   **Micro USB端口** - 它可用于电源供电和下载代码。
*   **电源LED** - LED正极连接到VCC，LED负极连接到**D6**，您可以将**D6**置为高电平以关闭此LED以节省电力。
*   **CHRG LED** - LED正极连接到VCC，LED负极连接到**A3**，您可以将**A3**置为高电平以关闭此LED以节省电力。

## 应用创意

*   电池供电的玩具

*   微型应用
*   可穿戴电子产品
*   婴儿监视器

## 开始使用

现在，让我们开始使用这款迷你的Arduino板吧。

### 驱动安装

Grove - Joint v2.0使用CH340进行下载，因此需要安装相应的驱动程序。

##### Windows/Linux

完全兼容计算机终端Windows操作系统中的串行应用程序

*   1) 将其插入电脑的USB端口。

*   2) 等待，直到在设备管理器中找到它。

*   3) 如果找不到端口，请从[这里](下载驱动程序。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/CH340_Driver.jpg)

#####   Mac OS

从以下链接下载驱动程序： [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

在Mac OS Yosemite上：

*   1) 下载并安装CH340/CH341驱动程序包

*   2) 打开终端程序（位于/Applications/Utilities/）

*   3) 输入命令：`sudo nvram boot-args="debug=0x146 kext-dev-mode=1"`

*   4) 输入sudo密码

*   5) 重新启动计算机

由于Yosemite中的驱动程序未签名，因此需要绕过已签名驱动程序的检查。

如果您想恢复Mac的设置，可以通过将boot-arg重新定义为之前的设置或清除boot-args来退出开发者模式，如下所示：`sudo nvram -d boot-args`

要查看当前的boot-args（如果有），请键入：`sudo nvram boot-args`

### 准备工作

现在我们将为Grove - Joint v2.0制作一个演示，需要以下模块：

*   [Grove旋转角度传感器](https://www.seeedstudio.com/depot/Grove-Rotary-Angle-Sensor-p-770.html)

*   [数字RGB LED柔性条](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-60-LED-1-Meter-p-1666.html)

Grove - Joint与Arduino兼容。
如果您是第一次使用Arduino，请从《Seeeduino入门指南》开始您的Arduino之旅。

### 硬件安装

Grove - Joint有两个Grove插座，用于连接上述两个模块：

*   Grove旋转角度传感器 - 连接到Grove输入端口

*   Grove数字RGB LED柔性条 - 连接到Grove输出端口

如下所示：

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_demo_.jpg)

### 软件工作

使用Micro USB线将Grove - Joint连接到电脑，如果状态LED没有闪烁，请按下按钮。

点击[这里](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_demo.rar)下载测试代码，并将其解压到任何文件夹（例如D盘或桌面）。

<!-- Now you need simple [configurations for Arduino](/How_To_Use_Sketchbook) sketchbook. -->

启动Arduino IDE，点击“文件”>“首选项”，并在草图本位置添加已下载测试代码的绝对路径。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo1.jpg)

配置完成后，请重新启动Arduino，点击“文件”>“草图本”，选择“Grove-Joint 演示”，之后测试代码就会显示出来。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo2.jpg)

点击“工具”>“开发板”选择Arduino Fio，并选择相应的串行端口。

<!-- Now click Upload(CTRL+U) to burn testing code. Please refer to [here](/Arduino_Common_Error "Arduino Common Error") for any error prompt and you can also add comment on [forum](http://forum.seeedstudio.com/) -->

### 查看结果

上传完成后，您可以旋转角度传感器，您会发现RGB LED会逐一亮起。

### 获取电池电压

电池正极连接到A2引脚。您可以读取这个引脚来获取电池的电压。

上传以下代码来获取电池的电压。

```
// Grove - Joint get Battery

const int pinBattery = A2;

int getAnalogData(int pin)
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum+=analogRead(pin);
    }
    return (sum>>5);
}
void setup()
{
    Serial.begin(9600);
    Serial.println("Grove - Joint V2 test - Battery");
}

void loop()
{
    int value = getAnalogData(pinBattery);

    float voltage = value/1023.0*5.0;
    Serial.print(voltage, 2);
    Serial.println(" V");
    delay(1000);
}
```
**注意**：当您将Grove Joint插入电脑时，电池会开始充电，因此您读取的电压可能不准确。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

*   [Eagle中的原理图](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar)

*   [PDF中的原理图](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_SCH.rar)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同形式的支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
