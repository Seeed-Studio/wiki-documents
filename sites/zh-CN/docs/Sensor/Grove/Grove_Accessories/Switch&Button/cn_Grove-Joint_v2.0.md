---
description: Grove - Joint v2.0
title: Grove - Joint v2.0
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Joint_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint.jpg)

Grove - Joint v2.0 与 Seeeduino Lotus 有许多相似之处。它是一款迷你 ATMEGA328 微控制器开发板，使用 Atmel ATMEGA328P-MU 和 CH340。ATMEGA328P-MU 是一款高性能、低功耗的 AVR 8 位微控制器。CH340 是一款 USB 总线转换芯片，可实现 USB 到串口接口。Grove - Joint v2.0 包含两个 Grove 接口，包括 I<sup>2</sup>C 端口和两个数字 I/O。此外，它还支持电池供电，您可以使用它完成一些简单的应用。

## 规格

* 微控制器：ATmega328P-MU

* 工作电压：5V

* 数字 I/O 引脚：2

* I2C 端口：1

* 模拟输入通道：2（与 I<sup>2</sup>C 复用）

* 每个 I/O 引脚的直流电流：40 mA

* 闪存：32 KB (ATmega328P-MU)

* RAM：2 KB (ATmega328P-MU)

* EEPROM：1 KB (ATmega328P-MU)

* 时钟速度：12 MHz

## 硬件概览

以下是 Grove - Joint 模块的框图，包含以下部分：

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_instruction1_.jpg)

* **电池接口** - 该模块支持电池供电。
* **光传感器** - 板上有一个光传感器，连接到 **A0** 引脚。
* **状态 LED** - 有 3 个 LED 指示板的状态：TX(**D1**)、RX(**D0**) 和 L(**D10**)。

* **输入端口** - 输入端口是一个 Grove I<sup>2</sup>C 接口，同时也是两个模拟通道（**A4** 和 **A5**）。

* **输出端口** - 输出端口也是一个 Grove 接口，包括两个数字 I/O（**D3** 和 **D5**）。

* **按钮** - 按钮连接到 **D2**，也可以用作开关。
* **Micro USB 端口** - 可用于供电和代码下载。
* **电源 LED** - LED+ 连接到 VCC，LED- 连接到 **D6**，您可以将 **D6** 设为 HIGH 来关闭此 LED 以节省电量。

* **充电 LED** - LED+ 连接到 VCC，LED- 连接到 **A3**，您可以将 **A3** 设为 HIGH 来关闭此 LED 以节省电量。

## 应用场景

* 电池供电玩具

* 小型应用

* 可穿戴电子设备

* 婴儿监护器

## 入门指南

现在，让我们开始使用这款迷你 Arduino 板。

### 驱动安装

Grove - Joint v2.0 使用 CH340 下载程序，需要安装驱动。

##### Windows/Linux

完全兼容 Windows 操作系统中的串口应用程序。

* 1) 将其插入电脑的 USB 端口。

* 2) 等待在设备管理器中找到它。

* 3) 如果未找到端口，请从[这里](http://www.wch.cn/downloads.php?name=pro&amp;proid=5)下载驱动。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/CH340_Driver.jpg)

##### Mac OS

从这里下载驱动：[http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

在 Mac OS Yosemite 上：

* 1) 下载并安装 CH340/CH341 驱动程序包。

* 2) 打开终端程序（位于 /Applications/Utilities/）。

* 3) 输入命令：`sudo nvram boot-args="debug=0x146 kext-dev-mode=1"`

* 4) 输入您的 sudo 密码。

* 5) 重启电脑。

在 Yosemite 系统中，驱动未签名，因此需要绕过签名驱动检查。

如果您想恢复 Mac 的设置，可以通过重新定义 boot-arg 为之前的设置，或者清除 boot-args，如下所示：`sudo nvram -d boot-args`

要查看当前的 boot-args（如果有），请输入：`sudo nvram boot-args`

### 准备工作

现在我们为 Grove - Joint v2.0 制作一个演示，需要以下模块：

* [Grove 旋转角度传感器](https://www.seeedstudio.com/depot/Grove-Rotary-Angle-Sensor-p-770.html)

* [数字 RGB LED 柔性灯带](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-60-LED-1-Meter-p-1666.html)

Grove - Joint 兼容 Arduino。
如果这是您第一次使用 Arduino，请参考 Getting_Started_with_Seeeduino 开始您的 Arduino 之旅。

### 硬件安装

Grove - Joint 有两个 Grove 插座，用于连接上述两个模块：
它们是：

* Grove 旋转角度传感器 - 连接到 Grove 输入端口。

* 数字 RGB LED 柔性灯带 - 连接到 Grove 输出端口。

如下图所示：

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_demo_.jpg)

### 软件操作

使用 Micro USB 数据线将 Grove - Joint 连接到电脑，如果状态 LED 未闪烁，请按下按钮。

点击[这里](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_demo.rar)下载测试代码，并将其解压到任意文件夹（例如 D 盘或桌面）。

<!-- 现在您需要为 Arduino [配置草图文件夹](/cn/How_To_Use_Sketchbook)。 -->

启动 Arduino IDE，点击 File&gt;Preferences，并在 Sketchbook 位置添加下载的测试代码的绝对路径。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo1.jpg)

配置完成后，请重启 Arduino，点击 File&gt;Sketchbook 并选择 Grove- Joint demo，测试代码将显示出来。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo2.jpg)

点击 Tools&gt;Board 选择 Arduino Fio，并选择相应的串口。

<!-- 现在点击 Upload(CTRL+U) 上传测试代码。如有错误提示，请参考[这里](/cn/Arduino_Common_Error "Arduino 常见错误")，您也可以在[论坛](http://forum.seeedstudio.com/)上发表评论。 -->

### 查看结果

上传完成后，您可以旋转角度传感器，您会发现 RGB LED 会一个接一个地亮起。

### 获取电池电压

Battery+ 连接到 A2。您可以读取此引脚以获取电池电压。

上传以下代码以获取电池电压。
```
// Grove - Joint 获取电池电压

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
    Serial.println("Grove - Joint V2 测试 - 电池");
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
**注意** 当您将 Grove Joint 插入电脑时，电池正在充电，因此您读取的电压可能不准确。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

*   [Eagle 格式原理图](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar)

*   [PDF 格式原理图](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_SCH.rar)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>