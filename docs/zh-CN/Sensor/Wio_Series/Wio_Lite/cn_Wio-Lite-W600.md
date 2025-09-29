---
title: Wio Lite W600
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Lite-W600/
slug: /cn/Wio-Lite-W600
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/Wio-Lite-W600-wiki.jpg)

Wio Lite W600 是一款具有成本效益的 Arduino 兼容开发板，搭载 W600 WiFi 模块。Wio Lite W600 采用 Atmel® | SMART™ SAM D21 ARM Cortex-M0+ 微控制器，W600 WiFi 核心是一个 2.4GHz WiFi 模块，采用 ARM Cortex-M3。由于 Wio Lite W600 使用 SAM D21（与 Arduino Zero 使用的芯片相同）作为其 Arduino 核心，理论上它与 Arduino Zero 完全兼容。

它引出了 SAM D21 引脚，该开发板的 I/O 电平为 3.3V。有 6 个模拟引脚和 14 个数字引脚，还提供一个 UART、一个 I2C、一个 ICSP 端口。您可以使用 5V USB Type C 和 3.5V~4.2V 锂电池为该开发板供电。

至于 WiFi 核心，它是我们的老朋友 - W600 模块。我们已经发布了 W600 模块和 [Grove -  W600](https://www.seeedstudio.com/W600-Module-p-4020.html)，Wio Lite W600 是 [W600 系列](https://www.seeedstudio.com/tag/W600-WIFI.html)的新成员。W600 模块采用 ARM Cortex-M3，具有 1MB 片上闪存和 freeRTOS 内核。它通过了 CE/FCC 认证，支持 802.11 b/g/n。

除此之外，我们同时发布了 [Grove Shield for Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html)。通过这个扩展板，我们为 Wio Lite 系列和 Feather 社区带来了超过 200 个 Grove 传感器、执行器和显示器。

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" height="450" width="600" alt="Seeed relay quick selection diagram"  />
  </a>
</figure>
</div>

告别面包板的复杂接线和烙铁的烦人焊接。

你好，[Grove](https://wiki.seeedstudio.com/cn/Grove_System/)！

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- Arduino Zero 兼容 / Adafruit Feather 兼容
- 2.4GHz 板载 WiFi 模块支持 802.11 b/g/n
- 支持 200+ Grove 模块
- 成本效益高

## 规格参数

|项目|值|
|------------|-----------|
|微控制器|SAM D21 |
|最大 CPU 频率|48 MHz|
|SRAM|32 KB|
|闪存|256 KB|
|电源输入|USB Type C 5V 锂电池 3.5 V ~ 4.2 V|
|数字 I/O 引脚|14|
|模拟输入通道|6|
|每个 I/O 引脚直流电流|40 mA|
|IO 输入电压|3.3 V|
|||
|WiFi 核心|W600|
|CPU|32位嵌入式 Cortex-M3|
|RAM|288 KB|
|闪存|1 MB|
|Wi‐Fi 模式|IEEE802.11b/g/n|
|频率范围|2.4~2.4835 GHz|
|网络类型|STA/AP/AP+STA/Wi‐Fi Direct|
|网络协议|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
|验证|WEP/WPA‐PSK/WPA2‐PSK|
|加密|WEP64/WEP128/TKIP/CCMP(AES)|

## 硬件概述

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/hardware-overview.jpg)

## 入门指南

## 硬件

**所需材料**

- Wio Lite W600 x1
- 计算机 x1
- USB type-c 数据线 x1

:::tip
    某些USB数据线只能供电而无法传输数据。如果您没有USB数据线或不确定您的USB数据线是否可以传输数据，您可以查看 [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)。
:::

使用USB数据线将Wio Lite W600连接到您的计算机。

## 软件

## 步骤1. 您需要安装Arduino软件。

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**启动Arduino应用程序**

双击您之前下载的Arduino应用程序（arduino.exe）。

:::note
    如果Arduino软件以不同语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

## 步骤2. 设置您的Arduino IDE。

打开您的Arduino IDE，点击 **File > Preferences**，并将下面的网址复制到 *Additional Boards Manager URLs*

```c
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json

```

 ![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

## 步骤3. 将Wio Lite W600开发板添加到您的Arduino IDE  

请按照 [Seeed Board Intallation Guide](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/) 并搜索关键词 **seeeduino_samd_zero** 来将 **Wio Lite W600** 添加到您的Arduino IDE中。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE1.png"/>
  <figcaption> <i>关键词是 **seeeduino_samd_zero**</i> </figcaption>
</figure>
</div>

## 步骤4. 将W600库添加到您的Arduino IDE

从Seeed Github下载 [W600 Library](https://github.com/Seeed-Studio/Seeed_Arduino_W600/archive/master.zip)。然后参考 [How to install library](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为Arduino安装库。

## 步骤5. 重启Arduino IDE。打开AP-Station示例，您可以通过以下路径在Arduino IDE中打开它：**File --> Examples -->W600_wifi-->log_data。

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE3.png)

## 步骤6. 使用您自己的AP和Station修改代码。在下图中，Wio Lite W600作为station加入标记为**A**的AP，同时Wio Lite W600将为其他设备创建**B AP**。您应该更改AP名称和密码。

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE-4.jpg)

## 步骤7. 选择您的开发板和端口

您需要在 **Tools > Board** 菜单中选择与您的Arduino对应的条目。
选择 **Seeeduino Zero**。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE2.png"/>
  <figcaption><i>选择正确的开发板</i></figcaption>
</figure>
</div>

从Tools | Serial Port菜单中选择Arduino开发板的串行设备。这很可能是COM3或更高（**COM1**和**COM2**通常保留给硬件串行端口）。要找出端口，您可以断开Arduino开发板的连接并重新打开菜单；消失的条目应该就是Arduino开发板。重新连接开发板并选择该串行端口。

## 步骤 8. 上传代码

现在，只需点击环境中的"Upload"按钮。等待几秒钟，如果上传成功，状态栏中将出现"Done uploading."消息。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png"/>
  <figcaption><i>上传代码</i></figcaption>
</figure>
</div>

上传完成几秒钟后，Wio Lite W600 将接入您设置的 AP，您可以使用手机接入由 Wio Lite W600 创建的 AP

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Wio Lite W600 Eagle 文件](https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip)
- **[PDF]** [W600-数据手册](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)

## 技术支持与产品讨论

如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
