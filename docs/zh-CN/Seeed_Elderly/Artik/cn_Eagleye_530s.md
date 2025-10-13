---
description: Eagleye_530s
title: Eagleye 530s
keywords:
- Eagleye_530s
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Eagleye_530s
last_update:
  date: 01/20/2023
  author: Matthew
---

![输入图片描述](https://files.seeedstudio.com/wiki/Eagleye_530s/img/eagleye_530s.JPG)

Seeed 是一家经验丰富的物联网技术平台开发套件设计公司。我们最新的开发套件——Eagleye 530s，旨在帮助您开始为 [Samsung ARTIK™ 物联网平台](https://www.artik.io/)开发产品和服务。

Eagleye 530s 是一个高性能、经过测试、成本效益高且可用于生产的开发套件，它将 Samsung ARTIK™ 530s——一个 1GB 的系统模块 (SoM)——集成到一个定制的信用卡大小的板上。有关 ARTIK™ 530s 的更多信息，请点击这里。

什么是 Samsung ARTIK™？Samsung ARTIK™ 是一个预集成的物联网平台，包括企业级系统模块 (SoMs)、云服务以及端到端的安全性，用于设计和开发强大的物联网解决方案。在设计和构建物联网产品时，开发人员通常会忽视安全性的重要性。ARTIK 为 SoMs 和云集成了安全服务，使您更容易让您的产品更加安全。

如上所述，Eagleye 530s 基于 ARTIK 530s 1GB SoM，它是一个运行在 1.2 GHz 的四核 Cortex® A9，配备 4GB 闪存、硬件级安全功能以及 Linux 操作系统 (Ubuntu)。Eagleye 530s 还提供了 40 针 GPIO 和配件接口，包括 Micro SD、以太网 10/100/1000、Wi-Fi 802.11 a/b/g/n、蓝牙 BLE 4.2 802.15.4 和 ZigBee/Thread。它还支持完整的 HDMI、MIPI 摄像头接口、视频和音频媒体。

由于 Eagleye 530s 与许多“创客”硬件配件针脚兼容，它使 Samsung ARTIK™ 开发人员能够轻松利用广泛的“创客”配件市场，并使用现成的传感器（例如 [GrovePi+](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)、[Grove 传感器](https://www.seeedstudio.com/grove.html)）、语音识别（例如 [ReSpeaker 2-mic array](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) 和 [ReSpeaker 4-mic array](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html)）、继电器、GPS、蜂窝连接等进行原型设计和构建，为企业开发人员创建功能丰富的概念验证 (PoC) 或生产就绪产品提供了许多选择。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4IR768d8Ins" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Eagleye-530s-p-3035.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## 版本

| 产品版本            | 变更    | 发布日期       |
|---------------------|---------|---------------|
| Eagleye 530s Rev1.0 | 初始版本 | 2018年2月28日 |

## 特性

- 由三星 ARTIK™ 物联网平台驱动。
- 集成 ARTIK 530s 1GB SoM，采用四核 Cortex® A9，运行频率为 1.2 GHz。
- 包含 40 针 GPIO 和配件接口。
- 支持 Micro SD、以太网 10/100/1000、Wi-Fi 802.11 a/b/g/n、蓝牙 BLE 4.2 802.15.4 和 ZigBee/Thread。
- 支持全 HDMI、MIPI 摄像头接口、视频和音频媒体。

## 规格

| 参数              |                        | 值/范围                                                                   |
|------------------|------------------------|---------------------------------------------------------------------------|
| 处理器           |                        |                                                                           |
|                  | CPU                    | 四核 ARM® Cortex®-A9@1.2GHz                                               |
|                  | GPU                    | 3D 图形加速器                                                             |
| 媒体             |                        |                                                                           |
|                  | 摄像头接口             | 4 通道 MIPI CSI，最高支持 5M (1920x1080@30fps)                        |
|                  | 显示                   | 4 通道 MIPI DSI 和 HDMI1.4a (1920x1080p@60fps) 或 LVDS (1280x720p@60fps)  |
|                  | 音频                   | 两路 I2S 音频输入/输出                                                    |
| 内存             |                        |                                                                           |
|                  | DRAM                   | 512MB/1GB DDR3                                                            |
|                  | 闪存                   | 4GB eMMC v4.5                                                             |
| 安全性           |                        |                                                                           |
|                  | 安全元件               | 支持点对点认证和数据传输的安全性                                          |
| 无线电           |                        |                                                                           |
|                  | WLAN                   | IEEE 802.11a/b/g/n，双频 SISO                                             |
|                  | 蓝牙®                 | 4.2 (BLE+经典蓝牙)                                                        |
|                  | 802.15.4               | ZigBee®/Thread                                                            |
| 电源管理         |                        |                                                                           |
|                  | PMIC                   | 使用板载降压转换器和 LDO 为 ARTIK 530 模块提供所有电源                     |
| 接口             |                        |                                                                           |
|                  | 以太网                 | 10/100/1000Base-T MAC（需要外部 PHY）                                     |
|                  | 模拟和数字 I/O         | GPIO、UART、I2C、SPI、USB 主机、USB OTG、HSIC、ADC、PWM、I2S、JTAG |

## 硬件概述

**框图**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/block_digram.png)

**接口**

以下图片展示了 Eagleye 530s 的顶部和底部整体预览。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/eagleye_530s_front.JPG)

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/eagleye_530s_back.JPG)

- <font face size={5} font color="ff0000">ⓐ</font> <strong>直流电源：</strong> 5V直流电源供电。

- <font face size={5} font color="ff0000">ⓑ</font><strong>USB Host 2.0接口：</strong> 具有两个USB 2.0接口。

- <font face size={5} font color="ff0000">ⓒ</font> <strong>以太网：</strong> 以太网接口基于802.3az-2010，符合节能以太网（EEE）标准。接口的最大理论速度为1000Mbps。

- <font face size={5} font color="ff0000">ⓓ</font> <strong>耳机插孔：</strong> 具有一个4针耳机插孔接口，支持立体声音频。

- <font face size={5} font color="ff0000">ⓔ</font> <strong>启动开关：</strong> 当选择“eMMc优先启动”作为启动选项时，系统将首先尝试从eMMc启动，如果失败，系统将搜索SD卡启动。如果从SD卡启动也失败，系统将尝试从USB启动。当选择SD卡启动选项时，系统首先从SD卡启动，如果失败，将继续尝试USB启动。当选择USB作为启动机制时，仅尝试USB启动。

| SW402 | eMMc优先启动 | SD卡优先启动 | USB优先启动 |
|-------|--------------|--------------|-------------|
| 1     | 关闭         | 关闭         | 打开        |
| 2     | 关闭         | 关闭         | 打开        |
| 3     | X            | X            | X           |
| 4     | 关闭         | 打开         | X           |

- <font face size={5} font color="ff0000">ⓕ</font> <strong>HDMI：</strong> 具有一个HDMI 1.4a连接器。支持以下视频格式：
  - 480p/480i @59.94Hz/60Hz, 576p/576i@50Hz
  - 720p/720i @50Hz/59.94Hz/60Hz
  - 1080p/1080i @50Hz/59.94Hz/60Hz

- <font face size={5} font color="ff0000">ⓖ</font> <strong>USB OTG：</strong> 具有一个USB OTG接口。

- <font face size={5} font color="ff0000">ⓗ</font> <strong>USB UART：</strong> 具有一个USB UART接口。

- <font face size={5} font color="ff0000">ⓘ</font> <strong>用户按钮S4：</strong> 名为S4的开关，映射到GPIO 54。

- <font face size={5} font color="ff0000">ⓚ</font> <strong>电源开启指示灯：</strong> 当板子通电时，指示灯将亮起。

- <font face size={5} font color="ff0000">ⓛ</font> <strong>电源输入指示灯：</strong> 当板子接收到电源时，指示灯将亮起。

- <font face size={5} font color="ff0000">ⓜ</font> <strong>SD卡插入指示灯：</strong> 当SD卡插入板子时，指示灯将亮起。

- <font face size={5} font color="ff0000">ⓝ</font> <strong>用户按钮S3：</strong> 名为S3的开关，映射到GPIO 50。

- <font face size={5} font color="ff0000">ⓞ</font> <strong>MIPI CSI：</strong> MIPI CSI接口可以支持静态分辨率为5百万像素或动态分辨率为1080P的视频捕捉。

- <font face size={5} font color="ff0000">ⓟ</font> <strong>ANT(802.11)：</strong> 如果需要802.11或蓝牙®功能，需安装随Eagleye 530s附带的天线。

- <font face size={5} font color="ff0000">ⓠ</font> <strong>复位：</strong> 板子复位。

- <font face size={5} font color="ff0000">ⓡ</font> <strong>电源：</strong> 一旦电源开关打开，按下电源按钮（S1）约1秒。

- <font face size={5} font color="ff0000">ⓢ</font> <strong>ANT(802.11)：</strong> 如果需要802.11或蓝牙®功能，需安装随Eagleye 530s附带的天线。

- <font face size={5} font color="ff0000">ⓣ</font> <strong>用户引脚：</strong> 为了使其成为多功能控制和监控设备，Eagleye 530s提供了许多可编程信号引脚。这些引脚可以直接处理诸如控制继电器、生成模拟电压和监控模拟传感器的任务，以及涉及并行和串行通信的复杂任务，与更复杂的控制和传感器设备交互。

- <font face size={5} font color="ff0000">ⓤ</font> <strong>ANT(Zigbee)：</strong> 如果需要Zigbee功能，需安装随Eagleye 530s附带的天线。

- <font face size={5} font color="ff0000">ⓥ</font> <strong>电源开关：</strong> 通过选择跳线JP1和JP2，可以选择电源来源。当使用DC-5V适配器供电时，跳线JP2将放置在3-4位置并连接。当跳线JP1处于1-2位置时，电源由USB-UART提供。当Eagleye 530s使用外部电源适配器时，请确保使用5V-2.5A适配器，插头规格为2.1x5.5mm。

:::warning
    切勿同时连接两者！
:::

- <font face size={5} font color="ff0000">ⓦ</font> <strong>SD卡插槽：</strong> 具有一个支持SD3.0的SD卡接口。

- <font face size={5} font color="ff0000">ⓧ</font> <strong>JTAG：</strong> 具有一个JTAG接口。

**机械图纸**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/MECHANICAL1.png)
![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/MECHANICAL2.png)
![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/MECHANICAL5.png)
![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/MECHANICAL4.png)

:::note
    机械图纸所有尺寸单位为[毫米]。
:::

## 应用创意

- DIY
- 物联网与智能家居
- 机器人

## 入门指南

**开箱演示**

本节将介绍如何通过在开发PC上设置串行连接并启动 Eagleye 530s 开发环境来开始使用您的 Eagleye 530s 开发环境。

**硬件**

- 步骤 1. 将电源开关（硬件概览中的编号21）设置为 USB。
- 步骤 2. 将 USB 电缆从 PC 连接到 USB UART（硬件概览中的编号8）。
- 步骤 3. 按下电源按钮超过1秒，我们将看到绿色/红色 LED（硬件概览中的编号10/11）亮起。

  ![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/usb_connection.jpg)

**软件**

与 Eagleye 530s 模块建立连接可以通过有线或无线方式完成。这里我们选择安装 PuTTY，一个免费的串行控制台。软件可以从 [http://www.putty.org/](http://www.putty.org/) 下载。下载后，请按照以下步骤操作：

- 步骤 1. 打开控制面板中的设备管理器。
- 步骤 2. 在使用 PC 时安装 USB 到串行驱动程序。驱动程序可以在以下位置找到：[https://www.ftdichip.com/Drivers/CDM/CDM21218_Setup.zip](https://www.ftdichip.com/Drivers/CDM/CDM21218_Setup.zip)。其他驱动程序请访问 [https://www.ftdichip.com/Drivers/D2XX.htm](https://www.ftdichip.com/Drivers/D2XX.htm)。
- 步骤 3. 在连接 USB 串行电缆时检查 PC 上的 COM 端口号。在我们的例子中，分配的 COM 端口是 COM9。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Com.png)

- 步骤 4. 按以下方式设置 PuTTY 配置：
  - 将“Serial line”设置为步骤 3 中找到的 COM 端口号。
  - 将 COM 速度设置为“115200”。
  - 将连接类型设置为“Serial”。
  - 将会话保存为 Eagleye 530s。
- 步骤 5. 选择保存的会话并点击“Open”按钮。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Putty_setup.png)

- 步骤 6. 用户名和密码均为 root。
- 步骤 7. 我们将看到如下终端界面。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Putty_normal_boot.png)

**操作板载 LED**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/leds_buttons.jpg)

- 步骤 1. 下载 [blink_led.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/blink_led.py) 或复制以下代码并粘贴到 blink_led.py 文件中。

```python
#!/usr/bin/python

import time
import sys

print "Blink an LED"
ledpin = 159 # Blink the blue led, please change to 43 for red led

#export GPIO pin by opening file and writing the pin number to it
pinctl = open("/sys/class/gpio/export", "wb", 0)
try:
    pinctl.write( str(ledpin))
    print "Exported pin", str(ledpin)
except:
    print "Pin ", str(ledpin), " has been exported"
pinctl.close()

#set GPIO pin to be digital output
filename = '/sys/class/gpio/gpio%d/direction' % ledpin
pinctldir = open(filename, "wb", 0)
try:
    pinctldir.write("out")
    print "Set pin ", str(ledpin), " as digital output"
except:
    print "Failed to set pin direction"
pinctldir.close()

#unexport GPIO pin when we are done
def exit_gpio():
    pinctl = open("/sys/class/gpio/unexport", "wb", 0)
    try:
        pinctl.write( str(ledpin))
        print "Unexported pin", str(ledpin)
    except:
        print "Pin ", str(ledpin), " has been unexported"
    pinctl.close()

#change GPIO pin value every 10 seconds
filename = '/sys/class/gpio/gpio%d/value' % ledpin
while True:
    try:
        pin = open(filename, "wb", 0)
        pin.write( str(1) )
        time.sleep(1)

        pin.write( str(0) )
        time.sleep(1)
        pin.close()
    except:
        exit_gpio()
        sys.exit(0)
```

- 步骤 2. 运行 'python blink_led.py'
- 步骤 3. 我们将看到 LED 闪烁。

**操作板载按钮**

- 步骤 1. 下载 [read_button.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/read_button.py) 或复制以下代码到 read_button.py 文件中。

```python
#!/usr/bin/python

import time
import sys

print "Toggle a button"
buttonpin = 54 # Read S4 button, please change to 50 for S3 button

#export pin 8 by opening file and writing the pin number to it
pinctl = open("/sys/class/gpio/export", "wb", 0)
try:
    pinctl.write( str(buttonpin))
    print "Exported pin", str(buttonpin)
except:
    print "Pin ", str(buttonpin), " has been exported"
pinctl.close()

#set pin to be digital input
filename = '/sys/class/gpio/gpio%d/direction' % buttonpin
pinctldir = open(filename, "wb", 0)
try:
    pinctldir.write("in")
    print "Set pin ", str(buttonpin), " as digital input"
except:
    print "Failed to set pin direction"
pinctldir.close()

def exit_gpio():
    #unexport pin
    pinctl = open("/sys/class/gpio/unexport", "wb", 0)
    try:
        pinctl.write( str(buttonpin))
        print "Unexported pin", str(buttonpin)
    except:
        print "Pin ", str(buttonpin), " has been unexported"
    pinctl.close()

#pin value changes when the button is pressed
filename = '/sys/class/gpio/gpio%d/value' % buttonpin
while True:
    try:
        pin = open(filename, "rb", 0)
        print pin.read()
        time.sleep(1)
        pin.close()
    except KeyboardInterrupt:
        exit_gpio()
        sys.exit(0)
```

- 步骤 2. 运行 'python read_button.py'
- 步骤 3. 我们将看到如下终端信息。

```
[root@artik ~]# python read_button.py
Toggle a button
Pin  54  has been exported
Set pin  54  as digital input
1
1
0
0
```

**以太网和 Wi-Fi 网络**

以下说明讨论了设置有线或无线局域网（LAN）。以太网 LAN（有线）端口始终可用。无线 LAN（WLAN）电路单独提供，可以通过连接管理器进行配置。

- 步骤 1. 扫描无线接入点。输入以下命令。
connmanctl 以获得 > 提示符。
- 步骤 2. scan wifi 扫描可用接入点（等待完成）。
- 步骤 3. services 列出接入点。
- 步骤 4. 选择一个接入点。在 > 提示符下输入以下命令。
- 步骤 5. agent on 如果您希望连接管理器提示您输入密码。
- 步骤 6. connect wifi_xxxx 选择所需的接入点（您可以使用 Tab 键开始并自动完成输入）。
- 步骤 7. 如果需要，响应代理查询输入密码。
- 步骤 8. quit 完成后退出。
- 步骤 9. 我们以后无需重复此过程：连接将从现在开始自动进行。

以下是翻译后的内容：

---

这里是终端信息。

```
[root@artik ~]# connmanctl
Error getting VPN connections: The name net.connman.vpn was not provided by any connmanctl> scan wifi
Scan completed for wifi
connmanctl> scan wifi
connmanctl> services
*AO Wired                ethernet_000000000000_cable
    seeed                wifi_722c1f37ca11_XXXXXXXX_managed_psk
    ReSpeaker1DD346      wifi_722c1f37ca11_XXXXXXXX_managed_none
connmanctl> agent on
Agent registered
connmanctl> connect wifi_722c1f37ca11_XXXXXXXX_managed_psk
Agent RequestInput wifi_722c1f37ca11_XXXXXXXX_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory ]
Passphrase? 2018seeed
connmanctl> quit
[root@artik ~]#
```

**固件更新**

- 第一步：下载 [固件](https://developer.artik.io/documentation/downloads.html#firmware)，选择“ARTIK 530s 1G”的文件。
- 第二步：使用 [Etcher](https://etcher.io/) 工具将固件烧录到 SD 卡。
- 第三步：将 SD 卡插入 Eagleye 530s 的 SD 卡槽。
- 第四步：将启动开关（硬件概览中的编号 21）Pin4 切换到开启状态。
- 第五步：将 USB 数据线从 PC 连接到 USB UART（硬件概览中的编号 8）。
- 第六步：按住电源按钮超过 1 秒，您将看到绿色/红色/蓝色 LED（硬件概览中的编号 10/11/12）亮起。
- 第七步：您将看到以下消息，表明固件已成功下载。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Putty_firmware.png)

- 第八步：请关闭开发板，移除 SD 卡，并将启动开关 Pin4 切换回关闭状态。

## 使用引脚编程

Eagleye 开发板提供许多可编程信号引脚。其中一些是通用输入/输出（GPIO）引脚，其他则是用于模拟输入、脉宽调制输出和串行通信的固定用途引脚。

- 数字输入（GPIO）——检测低电平（GND）或高电平（Vcc）的直流信号。
- 数字输出（GPIO）——驱动直流电平（GND 或 Vcc），可以动态控制。
- 波形输出（PWM）——通过脉宽调制电路切换直流电平，频率和占空比可动态编程。
- 串口（I2C 和 UART）——根据行业标准协议发送和接收数据。
- 模拟输入（ADC）——读取变化的信号电平并通过模数转换器进行处理。

Linux 内核的 sysfs 功能提供了控制和监控可编程引脚的库。详细信息请参考 [文档](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt)。

以下是连接器的引脚图及其含义。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/pin_map.png)

| 描述       | 引脚名称     | 引脚编号 | 引脚编号 | 引脚名称   | 描述       |
|------------|--------------|----------|----------|------------|------------|
| 3.3V       | 3.3V         | 1        | 2        | 5V         | 5V         |
| I2C        | XI2C0_SDA    | 3        | 4        | 5V         | 5V         |
| I2C        | XI2C0_SCL    | 5        | 6        | GND        | GND        |
| GPIO_161   | XAGPIO0      | 7        | 8        | XUART0_TX  | UART       |
| GND        | GND          | 9        | 10       | XUART0_RX  | UART       |
| GPIO_128   | XGPIO0       | 11       | 12       | I2SBCK1    | I2S        |
| GPIO_129   | XGPIO1       | 13       | 14       | GND        | GND        |
| PWM        | PWM2         | 15       | 16       | XGPIO2     | GPIO_130   |
| 3.3V       | 3.3V         | 17       | 18       | XGPIO3     | GPIO_46    |
| SPI    | XSPIO_MOSI   | 19       | 20       | GND        | GND        |
| SPI    | XSPIO_MISO   | 21       | 22       | PWM0       | PWM        |
| SPI    | XSPIO_CLK    | 23       | 24       | XSPIO0_CS  | SPI    |
| GND        | GND          | 25       | 26       | XGPIO4     | GPIO_14    |
| NC         | NC           | 27       | 28       | NC         | NC         |
| GPIO_27    | XGPIO9       | 29       | 30       | GND        | GND        |
| GPIO_25    | XGPIO6       | 31       | 32       | XGPIO7     | GPIO_0     |
| GPIO_26    | XGPIO8       | 33       | 34       | GND        | GND        |
| I2S        | I2SLRCLK1    | 35       | 36       | XADC0      | ADC        |
| ADC        | XADC1        | 37       | 38       | I2SDIN1    | I2S        |
| GND        | GND          | 39       | 40       | I2SDOUT1   | I2S        |

**通过 Sysfs 控制 GPIO**

例如，引脚 11 是 GPIO，可以用作数字输入或输出。要使用特定的 GPIO，我们首先需要将其方向（模式）设置为输入或输出，然后根据需要读取或写入。

[使用板载 LED](https://files.seeedstudio.com/wiki/Eagleye_530s/res/blink_led.py) 和 [使用板载按钮](https://files.seeedstudio.com/wiki/Eagleye_530s/res/read_button.py) 教程提供了数字 I/O 引脚编程的示例。

:::caution
请在 LED/按钮 Python 程序中更改特定的 GPIO 引脚编号。
:::

**通过 Sysfs 控制 PWM**

例如，引脚 22 是 PWM。我们可以将 LED 的 PWM 连接到 40 引脚的 PWM 和 GND。我们可以设置周期和占空比（最大限制为 1,000,000,000，单位为纳秒）。占空比应始终小于周期。

以下练习演示了使用 PWM 引脚并设置固定的闪烁频率。

- 第一步：导出 PWM0

    ```
    echo 0 > /sys/class/pwm/pwmchip0/export
    ```

    一个 pwm0 子目录被创建。（我们可以使用 echo 0 创建 pwm0，使用 echo 2 创建 pwm2。）

- 第二步：设置属性

  - a) 设置周期（单位：纳秒）为 1 秒

    ```
    echo 1000000000 > /sys/class/pwm/pwmchip0/pwm0/period
    ```

  - b) 设置占空比（单位：纳秒）为 500 毫秒

    ```
    echo 500000000 > /sys/class/pwm/pwmchip0/pwm0/duty_cycle
    ```

  - c) 启用 PWM0

    ```
    echo 1 > /sys/class/pwm/pwmchip0/pwm0/enable
    ```

  - d) 禁用 PWM0

    ```
    echo 0 > /sys/class/pwm/pwmchip0/pwm0/enable
    ```

- 第三步：取消导出 PWM0

    ```
    echo 0 > /sys/class/pwm/pwmchip0/unexport
    ```

以下是关于 pwm0 的终端信息。

```
[root@artik pwmchip0]# echo 0 > /sys/class/pwm/pwmchip0/export    # 请将此处的 0 改为 2 以使用 pwm2
[root@artik pwmchip0]# echo 1000000000 > /sys/class/pwm/pwmchip0/pwm0/period # 请将 pwm0 改为 pwm2 以使用 pwm2
[root@artik pwmchip0]# echo 500000000 > /sys/class/pwm/pwmchip0/pwm0/duty_cycle # 请将 pwm0 改为 pwm2 以使用 pwm2
[root@artik pwmchip0]# echo 1 > /sys/class/pwm/pwmchip0/pwm0/enable  # 请将 pwm0 改为 pwm2 以使用 pwm2
[root@artik pwmchip0]# echo 0 > /sys/class/pwm/pwmchip0/pwm0/enable # 请将 pwm0 改为 pwm2 以使用 pwm2
```

**通过 Sysfs 控制 ADC**

例如，针脚 36 是 ADC0。以下命令行示例展示了如何读取 ADC0 的当前值。

```
[root@artik dev]# cat /sys/devices/platform/c0000000.soc/c0053000.adc/iio:device0/in_voltage0_raw
0
[root@artik dev]# cat /sys/devices/platform/c0000000.soc/c0053000.adc/iio:device0/in_voltage0_raw
1211
[root@artik dev]# cat /sys/devices/platform/c0000000.soc/c0053000.adc/iio:device0/in_voltage0_raw
2027
[root@artik dev]# cat /sys/devices/platform/c0000000.soc/c0053000.adc/iio:device0/in_voltage0_raw
3017
[root@artik dev]# cat /sys/devices/platform/c0000000.soc/c0053000.adc/iio:device0/in_voltage0_raw
4095
```

:::note
如果使用针脚 37 (ADC1)，请将 `in_voltage0_raw` 改为 `in_voltage1_raw`。
:::

**UART 控制**

- 第一步：运行以下命令以启用 UART0，我们可以在列表中看到 ttyAMA4，已在 [ARTIK 530s 1G Secure Module Firmware (Ubuntu): A533s_os_18.05.00](https://developer.artik.io/downloads/2768bd32-383a-44cf-9e90-9292712a96ba/download) 中测试。

```
cd /sys/kernel/config/device-tree/overlays/
mkdir ttyAMA4
cd /boot/overlays
cat s5p4418-artik533-compy-serial4.dtbo  > /sys/kernel/config/device-tree/overlays/ttyAMA4/dtbo
cd /dev
ls tty*
```

- 第二步：将 UART0 的 TX/RX 连接到 USB2Serial 转接器。

| 针脚编号 | 针脚名称   | USB2Serial 转接器 |
|----------|------------|--------------------|
| 6        | GND        | GND                |
| 8        | XUART0_TX  | RX                 |
| 10       | XUART0_RX  | TX                 |

- 第三步：向 UART0 发送 "hello"

```
stty -F /dev/ttyAMA4 
echo "hello .." > /dev/ttyAMA4
```

- 第四步：我们可以在串口监视器中看到如下内容。

```
hello ..
hello ..
hello ..
```

## 使用 ReSpeakers 麦克风

**使用 2 Mics Pi HAT**

**硬件**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/2_Mics.jpg)

**安装 2 Mics 驱动**

- 第一步：下载 Seeed-Voicecard 驱动。

```
[root@artik ~]# apt update
[root@artik ~]# apt install git
[root@artik ~]# git clone https://github.com/respeaker/seeed-voicecard
[root@artik ~]# cd seeed-voicecard
[root@artik seeed-voicecard]# git checkout remotes/origin/artikpi -b artiki
```

- 第二步：安装 Seeed-Voicecard 驱动。

```
[root@artik ~]# cd seeed-voicecard/
[root@artik seeed-voicecard]# mount -o remount,rw /lib/modules
[root@artik seeed-voicecard]# sudo mkdir -p /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/
[root@artik seeed-voicecard]# sudo cp snd-soc-ac108.ko.0533GS0F-44U-01Q5 /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/snd-soc-ac108.ko
[root@artik seeed-voicecard]# sudo cp snd-soc-wm8960.ko.0533GS0F-44U-01Q5 /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/snd-soc-wm8960.ko
[root@artik seeed-voicecard]# sudo depmod -a
```

- 第三步：启用 2 Mics。

```
[root@artik ~]# cd seeed-voicecard
[root@artik seeed-voicecard]# su root
[root@artik seeed-voicecard]# mkdir /sys/kernel/config/device-tree/overlays/seeed-voicecard
[root@artik seeed-voicecard]# cat seeed-2mic-voicecard-artik.dtbo > /sys/kernel/config/device-tree/overlays/seeed-voicecard/dtbo
[root@artik seeed-voicecard]# cp wm8960_asound.state /var/lib/alsa/asound.state
[root@artik seeed-voicecard]# alsactl --file=wm8960_asound.state restore
```

:::warning
请在重启后再次运行第三步，否则无法检测到 Seeed Voicecard。
:::

- 第四步：使用 arecord 列出录音设备。

```
[root@artik seeed-voicecard]# arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
pulse
    PulseAudio Sound Server
default
    Playback/recording through the PulseAudio sound server
playback
dmixed
ac108
sysdefault:CARD=Audio
    Artik530 raptor Audio,
    Default Audio Device
dmix:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct sample mixing device
dsnoop:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct sample snooping device
hw:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct hardware device without any conversions
plughw:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Hardware device with all software conversions
sysdefault:CARD=seeed2micvoicec
    seeed-2mic-voicecard,
    Default Audio Device
dmix:CARD=seeed2micvoicec,DEV=0
    seeed-2mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed2micvoicec,DEV=0
    seeed-2mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed2micvoicec,DEV=0
    seeed-2mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed2micvoicec,DEV=0
    seeed-2mic-voicecard,
    Hardware device with all software conversions
```

**捕获/播放音频**

- 使用命令行开始录音

```
arecord -f cd -Dplughw:1,0 /tmp/test.wav
aplay -Dplughw:1,0 /tmp/test.wav
```

以下是硬件设置。我们可以通过 2 Mics 的音频插孔听到播放的声音。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/2_Mics_Playback.jpg)

- 使用 Python 开始录音

  - 第一步：通过以下命令安装 pyaudio 包

      ```
      apt install python-pyaudio
      ```

  - 第二步：使用文本编辑器（如 vi）创建此 [recorder_2Mics.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/recorder_2Mics.py) 文件，该文件记录一个名为 test.wav 的 10 秒音频片段。

```python
import pyaudio
import wave

FORMAT = pyaudio.paInt16
CHANNELS = 2
RATE = 48000
CHUNK = 1024
RECORD_SECONDS = 10
WAVE_OUTPUT_FILENAME = "test.wav"

audio = pyaudio.PyAudio()

# 开始录音
stream = audio.open(format=FORMAT, channels=CHANNELS, rate=RATE, input=True, frames_per_buffer=CHUNK)
print "录音中..."
frames = []

threshold = 800
for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
   data = stream.read(CHUNK)
   frames.append(data)
print "录音完成"

# 停止录音
stream.stop_stream()
stream.close()
audio.terminate()

waveFile = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
waveFile.setnchannels(CHANNELS)
waveFile.setsampwidth(audio.get_sample_size(FORMAT))
waveFile.setframerate(RATE)
waveFile.writeframes(b''.join(frames))
waveFile.close()
```

:::caution
有关更多信息，例如与 Google Assistant 的交互，请参考 [ReSpeaker 2-Mics Pi HAT](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT/)。
:::

**使用 4 Mics Pi HAT**

**硬件**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/4_Mics.jpg)

**安装 4 Mics 驱动**

- 第一步：下载 Seeed-Voicecard 驱动。

```
[root@artik ~]# apt update
[root@artik ~]# apt install git
[root@artik ~]# git clone https://github.com/respeaker/seeed-voicecard
[root@artik ~]# cd seeed-voicecard
[root@artik seeed-voicecard]# git checkout remotes/origin/artikpi -b artiki
```

- 第二步：安装 Seeed-Voicecard 驱动。

```
[root@artik seeed-voicecard]# mount -o remount,rw /lib/modules
[root@artik seeed-voicecard]# sudo mkdir -p /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/
[root@artik seeed-voicecard]# sudo cp snd-soc-ac108.ko.0533GS0F-44U-01Q5 /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/snd-soc-ac108.ko
[root@artik seeed-voicecard]# sudo cp snd-soc-wm8960.ko.0533GS0F-44U-01Q5 /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/snd-soc-wm8960.ko
[root@artik seeed-voicecard]# sudo depmod -a
```

- 第三步：启用 4 Mics。

```
[root@artik ~]# cd seeed-voicecard
[root@artik seeed-voicecard]# su root
[root@artik seeed-voicecard]# mkdir /sys/kernel/config/device-tree/overlays/seeed-voicecard
[root@artik seeed-voicecard]# cat seeed-4mic-voicecard-artik.dtbo > /sys/kernel/config/device-tree/overlays/seeed-voicecard/dtbo
[root@artik seeed-voicecard]#
[  574.305000] Please set data-protocol.
[  574.310000]  i2c_id number :0
[  574.310000]  ac108  codec_index :0
[  574.315000]  ac108  I2S data protocol type :1
[  574.335000] ac108_write error->[REG-0x00,val-0x12]
[  574.550000] AC108 PLL freq_in match:24000000, freq_out:24576000
[  574.550000]
[  574.640000] AC108 PLL freq_in match:24000000, freq_out:24576000
[  574.640000]

[root@artik seeed-voicecard]# cp ac108_asound.state /var/lib/alsa/asound.state
[root@artik seeed-voicecard]# cp ac108_plugin/libasound_module_pcm_ac108.so  /usr//lib/arm-linux-gnueabihf/alsa-lib/
[root@artik seeed-voicecard]# cp  asound_4mic.conf   /etc/asound.conf
[root@artik seeed-voicecard]# alsactl --file=ac108_asound.state restore
```

:::caution
请在重启后再次运行第三步，否则无法检测到 Seeed Voicecard。
:::

- 第四步：使用 arecord 列出录音设备。

```
[root@artik seeed-voicecard]# arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
pulse
    PulseAudio Sound Server
default
    Playback/recording through the PulseAudio sound server
playback
dmixed
ac108
sysdefault:CARD=Audio
    Artik530 raptor Audio,
    Default Audio Device
dmix:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct sample mixing device
dsnoop:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct sample snooping device
hw:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct hardware device without any conversions
plughw:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Hardware device with all software conversions
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard,
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Hardware device with all software conversions
```

**录制音频**

- 使用命令行开始录音

```
arecord -Dac108 -f S16_LE -r 48000  -c 4 /tmp/test.wav
```

- 使用 Python 开始录音

  - 第一步：通过以下命令安装 pyaudio 包

      ```
      apt install python-pyaudio
      ```

  - 第二步：使用文本编辑器（如 vi）创建 [recorder_4Mics.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/recorder_4Mics.py) 文件，该文件会录制一个名为 test.wav 的 10 秒音频片段。

```python
import pyaudio
import wave

FORMAT = pyaudio.paInt16
CHANNELS = 4
RATE = 48000
CHUNK = 1024
RECORD_SECONDS = 10
WAVE_OUTPUT_FILENAME = "test.wav"

audio = pyaudio.PyAudio()

# 开始录音
stream = audio.open(format=FORMAT, channels=CHANNELS, rate=RATE, input=True, frames_per_buffer=CHUNK)
print "recording audio..."
frames = []

threshold = 800
for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
   data = stream.read(CHUNK)
   frames.append(data)
print "done recording"

# 停止录音
stream.stop_stream()
stream.close()
audio.terminate()

waveFile = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
waveFile.setnchannels(CHANNELS)
waveFile.setsampwidth(audio.get_sample_size(FORMAT))
waveFile.setframerate(RATE)
waveFile.writeframes(b''.join(frames))
waveFile.close()
```

:::caution
有关更多信息，例如与 Alexa/DuerOS 的交互，请参考 [ReSpeaker 4-Mic Array for Raspberry Pi](https://wiki.seeedstudio.com/cn/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)。
:::

**使用 Mic Array v2.0**

**硬件**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/usb_4Mics.jpg)

**录制音频**

- 使用命令行开始录音

```python
arecord -D plughw:1,0 -f cd test.wav # 录音，请先使用 arecord -l 检查声卡和硬件
aplay -D plughw:1,0 -f cd test.wav # 播放，请先使用 aplay -l 检查声卡和硬件
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # 同时录音和播放
```

- 使用 Python 开始录音

  - 第一步：运行以下脚本以获取 Mic Array 的设备索引号：

    ```python
    apt install python-pip
    pip install pyaudio
    cd ~
    nano get_index.py
    ```

  - 第二步：复制以下代码并粘贴到 [get_index.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/get_index.py)。

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- 第 3 步，按 Ctrl + X 退出并按 Y 保存。

- 第 4 步，运行命令 `sudo python get_index.py`，我们将看到如下设备 ID：

```
输入设备 ID  0  -  Artik530 raptor Audio: - (hw:0,0)
输入设备 ID  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
输入设备 ID  3  -  sysdefault
输入设备 ID  4  -  pulse
输入设备 ID  8  -  default
```

- 第 5 步，将 `RESPEAKER_INDEX = 2` 更改为对应的索引号。运行 Python 脚本 [record.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/record.py) 来录制语音。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 1 # 根据固件更改，default_firmware.bin 为 1 或 i6_firmware.bin 为 6
RESPEAKER_WIDTH = 2
# 运行 getDeviceInfo.py 获取索引
RESPEAKER_INDEX = 2  # 参考输入设备 ID
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* 正在录音")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* 录音完成")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

:::caution
有关更多信息，例如使用 DOA/LED，请参考 [ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array_v2.0/)。
:::

## 使用 GrovePi+

**安装依赖项**

```
apt install g++ libi2c-dev
apt install python-dev
apt install python-smbus
apt install libffi-dev
apt install python-pip
pip install setuptools
pip install smbus-cffi
pip install numpy
```

**使用 GrovePi+ Shield 的 Python I2C**

- 第 1 步，从 GitHub 下载文件。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- 第 2 步，修改源码 `/root/GrovePi/Software/Cpp/grovepi.cpp` 并添加如下所示的一行。

```cpp
void GrovePi::SMBusName(char *smbus_name)
{
 unsigned int hw_revision = gpioHardwareRevision();
 unsigned int smbus_rev;

 if(hw_revision < 4)
  // 类型 1
  smbus_rev = 1;
 else if(hw_revision < 16)
  // 类型 2
  smbus_rev = 2;
 else
  // 类型 3
  smbus_rev = 3;

 if(smbus_rev == 2 || smbus_rev == 3)
  strcpy(smbus_name, "/dev/i2c-1");
 else
  strcpy(smbus_name, "/dev/i2c-0");
  strcpy(smbus_name, "/dev/i2c-1"); // 添加此行以启用 Eagleye_530s 的 I2C
}
```

- 第 3 步，修改源码 `/root/GrovePi/Software/Python/grovepi.py` 并注释如下所示。

```python
if sys.platform == 'uwp':
 import winrt_smbus as smbus
 bus = smbus.SMBus(1)
else:
 import smbus
# import RPi.GPIO as GPIO
# rev = GPIO.RPI_REVISION
# if rev == 2 or rev == 3:
 bus = smbus.SMBus(1)
# else:
#  bus = smbus.SMBus(0)
```

- 第 4 步，每次重置板子时，运行以下两个命令。将它们放入一个 bash 文件中以实现自动化。

```
mkdir /sys/kernel/config/device-tree/overlays/i2c
cat /boot/overlays/s5p4418-artik533-compy-i2c1.dtbo > /sys/kernel/config/device-tree/overlays/i2c/dtbo
```

:::caution
    请在重启后运行第 4 步的命令。
:::

- 第 5 步，请将 Grove-LED 和 Grove-旋转角度传感器连接到 GrovePi，如下所示。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/GrovePi_Demo.jpg)

- 第 6 步，运行 Python 脚本 grove_rotary_angle_sensor.py。

```
cd ~/GrovePi/Software/Python/
python grove_rotary_angle_sensor.py
```

以下是代码。

```python
import time
import grovepi

# 将 Grove 旋转角度传感器连接到模拟端口 A0
# SIG,NC,VCC,GND
potentiometer = 0

# 将 LED 连接到数字端口 D5
# SIG,NC,VCC,GND
led = 5

grovepi.pinMode(potentiometer,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

# ADC 的参考电压为 5v
adc_ref = 5

# Grove 接口的 Vcc 通常为 5v
grove_vcc = 5

# 旋转角度的最大值为 300 度，根据其规格（0 到 300）
full_angle = 300

while True:
    try:
        # 从电位计读取传感器值
        sensor_value = grovepi.analogRead(potentiometer)

        # 计算电压
        voltage = round((float)(sensor_value) * adc_ref / 1023, 2)

        # 计算旋转角度（0 到 300）
        degrees = round((voltage * full_angle) / grove_vcc, 2)

        # 从角度（0 到 300）计算 LED 亮度（0 到 255）
        brightness = int(degrees / full_angle * 255)

        # 给 LED 提供 PWM 输出
        grovepi.analogWrite(led,brightness)

        print("sensor_value = %d voltage = %.2f degrees = %.1f brightness = %d" %(sensor_value, voltage, degrees, brightness))
    except KeyboardInterrupt:
        grovepi.analogWrite(led,0)
        break
    except IOError:
        print ("Error")

```

- 第 7 步，LED 的亮度会随着旋转角度传感器的旋转而变化。我们还会看到如下终端信息：

```
[root@artik Python]# python grove_rotary_angle_sensor.py
sensor_value = 246 voltage = 1.20 degrees = 72.0 brightness = 61
sensor_value = 247 voltage = 1.21 degrees = 72.6 brightness = 61
sensor_value = 258 voltage = 1.26 degrees = 75.6 brightness = 64
sensor_value = 274 voltage = 1.34 degrees = 80.4 brightness = 68
sensor_value = 296 voltage = 1.45 degrees = 87.0 brightness = 73
sensor_value = 318 voltage = 1.55 degrees = 93.0 brightness = 79
sensor_value = 340 voltage = 1.66 degrees = 99.6 brightness = 84
sensor_value = 363 voltage = 1.77 degrees = 106.2 brightness = 90
sensor_value = 387 voltage = 1.89 degrees = 113.4 brightness = 96
```

:::caution:
有关更多 Grove 传感器，请参考 [DexterInd Python Library](https://github.com/DexterInd/GrovePi)。我们未测试所有传感器与 Eagleye 530s 的兼容性。如有问题，请联系技术支持。
:::

## 使用扩展板

**使用继电器板**

**硬件**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/relay_shield.jpg)

**软件**

- 第一步：运行以下命令以启用 I2C。

```
mkdir /sys/kernel/config/device-tree/overlays/i2c
cat /boot/overlays/s5p4418-artik533-compy-i2c1.dtbo > /sys/kernel/config/device-tree/overlays/i2c/dtbo
```

:::caution
每次重置板子时，都需要运行以下两个命令。建议将它们放入一个 bash 文件中以实现自动化。
:::

- 第二步：运行 i2cdetect 检测继电器扩展板。

```
[root@artik ~]# i2cdetect -y -r 1
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: 20 -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```

- 第三步：运行以下命令以执行 `relay_lib_seeed_test.py`。

```
[root@artik ~]# cd ~
[root@artik ~]# git clone https://github.com/johnwargo/Seeed-Studio-Relay-Board.git
[root@artik ~]# cd Seed-Studio-Relay-Board/
[root@artik Seed-Studio-Relay-Board]# python relay_lib_seeed_test.py
Turning all relays ON
Turning all relays OFF
Turning relay 1 ON
Turning relay 1 OFF
Turning relay 2 ON
Turning relay 2 OFF
Turning relay 3 ON
Turning relay 3 OFF
Turning relay 4 ON
Turning relay 4 OFF
```

:::caution
更多信息请参考 [Raspberry Pi Relay Board v1.0](https://wiki.seeedstudio.com/cn/Raspberry_Pi_Relay_Board_v1.0/)。
:::

**使用 RS232 扩展板**

**硬件**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/rs232_shield.jpg)

- 第一步：将 USB 线连接到电源。
- 第二步：将 RS232 线连接 RS232 扩展板和 PC。

**软件**

- 第一步：在 PC 端打开 [putty](https://www.putty.org/) 并按以下配置。COM 端口必须设置为设备管理器中的端口。在我们的例子中，分配的 COM 端口是 COM9。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Com.png)

- 第二步：设置 PuTTY 配置如下：
  - 将“Serial line”设置为步骤 3 中找到的 COM 端口号。
  - 将 COM 速度设置为“115200”。
  - 将连接类型设置为“Serial”。
  - 将会话保存为 Eagleye 530s。
- 第三步：选择保存的会话并点击“Open”按钮。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Putty_setup.png)

- 第四步：用户名和密码均为 root。
- 第五步：我们将看到如下终端界面。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Putty_normal_boot.png)

:::caution
更多信息请参考 [Raspberry Pi RS232 Board v1.0](https://wiki.seeedstudio.com/cn/Raspberry_Pi_R232_Board_v1.0/)。
:::

**使用 Breakout 扩展板**

Raspberry Pi Breakout 扩展板提供电源、状态指示灯、按钮以及通用晶体管，例如 NPN、PNP、N-MOS、P-MOS。它与 Eagleye_530s 配合良好。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/breakout_shield.jpg)

:::caution
更多信息请参考 [Raspberry Pi Breakout Board v1.0](https://wiki.seeedstudio.com/cn/Raspberry_Pi_Breakout_Board_v1.0/)。
:::

## 常见问题解答

- 问题1：Eagleye 530s 是否兼容树莓派外壳？

回答1：是的。以下是兼容列表。

| SKU       | 描述                                                                                                    | 备注                                 |
|-----------|--------------------------------------------------------------------------------------------------------|--------------------------------------|
| 103010002 | [GrovePi+](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                         | 参考使用 GrovePi+                   |
| 103030030 | [树莓派扩展板 v1.0](https://www.seeedstudio.com/s/Raspberry-Pi-Breakout-Board-v1.0-p-2410.html)         | 参考使用扩展板                       |
| 103030029 | [树莓派继电器板 v1.0](https://www.seeedstudio.com/Raspberry-Pi-Relay-Board-v1.0-p-2409.html)            | 参考使用扩展板                       |
| 103030028 | [树莓派 RS232 板 v1.0](https://www.seeedstudio.com/Raspberry-Pi-RS232-Board-v1.0-p-2408.html)           | 参考使用扩展板                       |
| 114990835 | [树莓派 HDMI LCD（7英寸）](https://www.seeedstudio.com/Raspberry-Pi-HDMI-LCD-%287-inch%29-p-2763.html) | 显示效果良好，但触摸功能除外。       |

- 问题2：如何设置自动启动功能？

回答2：找到如下图所示的 D401 二极管，通过焊接移除 D401 二极管，并通过焊接一个焊点短接 D401 的两个引脚。

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Auto_boot_1.jpg)

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Auto_boot_2.jpg)

## 资源

- **[PDF]** [ARTIK™ 530s SoM 模块数据手册](https://developer.artik.io/downloads/hw-datasheet-artik-530-v1-0-pdf/download)
- **[认证]** [CE 证书及报告](https://files.seeedstudio.com/wiki/Eagleye_530s/res/CE%20Certificate%26Report.zip)
- **[认证]** [IC 证书及报告](https://files.seeedstudio.com/wiki/Eagleye_530s/res/IC%20Certificate%26Report.zip)
- **[认证]** [FCC 证书及报告](https://files.seeedstudio.com/wiki/Eagleye_530s/res/FCC%20Certificate%26Report.zip)
- **[PDF]** [Eagleye 530s 用户指南](https://files.seeedstudio.com/wiki/Eagleye_530s/res/Eagleye%20530s%20User%20Guide.pdf)
- **[更多阅读]** [ARTIK™ 530s](https://www.artik.io/modules/artik-530/)
- **[更多阅读]** [三星 ARTIK™ 物联网平台](https://developer.artik.io/documentation/artik/getting-started/)
- **[更多阅读]** [人脸识别项目](https://developer.artik.io/documentation/artik/projects/facial-recog.html)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>