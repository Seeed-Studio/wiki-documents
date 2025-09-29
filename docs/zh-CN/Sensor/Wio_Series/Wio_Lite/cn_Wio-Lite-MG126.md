---
title: Wio Lite MG126
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Lite-MG126/
slug: /cn/Wio-Lite-MG126
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Wio-Lite-MG126-wiki.jpg)

Wio Lite MG126 是一款基于 SAMD21 的高性价比开发板，板载 MG126 蓝牙模块。SAM D21 是基于 ARM Cortex-M0+ 的微控制器，MG126 是 2.4GHz 单模蓝牙收发器模块。与 Wio Lite W600 相同，该开发板也兼容 Arduino zero（使用相同的 Arduino Core SAM D21），并具有与 Adafruit Feather 系列相同的兼容外形规格。

我们引出了 SAM D21 的 3.3V I/O 引脚，SAM D21 芯片具有丰富的 I/O 资源，包括 14 个数字引脚、6 个模拟引脚、1 个 UART 端口、1 个 I2C 端口和 1 个 ICSP 端口。越来越多的 Seeed 开发板使用 Type C 接口来供电和传输数据，Wio Lite MG126 也是如此。同时，还有一个 JST2.0 锂电池端口，您可以使用 3.5V 或 4.2V 锂电池为该开发板供电。  

现在，让我们来谈谈蓝牙核心 MG126。MG126 是一个 2.4GHz BLE RF 收发器，具有软件可配置寄存器和嵌入式数据包处理引擎。它可以在超低功耗下工作。MG126 的蓝牙空中数据速率为 1Mbps，MG126 可以通过 SPI 接口以 4Mbps 的速度与 Arduino 核心通信。

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- Arduino Zero 兼容 / Adafruit Feather 兼容
- 2.4GHz ISM 频段工作，2MHz 信道间隔
- 1Mbps 空中数据速率
- 超低功耗

## 规格参数

|参数|值|
|---|--------|
|**主控制器**||
|微控制器|SAM D21|
|数字 I/O 引脚|14|
|模拟输入通道|6|
|每个 I/O 引脚直流电流|40 mA|
|IO 输入电压|3.3 V|
|SRAM|32 KB|
|Flash|256 KB|
|最大 CPU 频率|48 MHz|
|**蓝牙**||
|蓝牙核心|MG126|
|频段|2.4GHz ISM|
|数据速率|1Mbps 空中数据速率|
|与 MCU 通信|SPI（最大 4Mbps）|
|发射器|可编程输出功率：-28 ~ +4 dBm（无外部 RF PA）0dBm 输出功率时 20mA|
|接收器|集成信道滤波器 -85 dBm 灵敏度 可编程 LNA 增益|
|天线|板载 PCB 天线|
|最大蓝牙连接距离|10 m|
|**其他**||
|电源输入端口|USB Type C JST2.0 锂电池|
|工作电压|USB 5V 电池 4.2 V|
|可恢复保险丝|保护电流 1A|
|电池充电电流|400 mA|

## 硬件概述

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Hardware-overview.jpg)

:::tip
    - PCB 天线在安装时不应被金属屏蔽，否则会导致蓝牙信号衰减；
    - 模块背面标有电池的正负极。严禁将电池正负极接反。
:::

## 开始使用

在开始之前，请从 Google/Apple Store 下载 **nRF Connect** 应用程序。**nRF Connect** 兼容标准蓝牙协议功能，所有示例都基于此应用程序进行测试。

## 硬件

**所需材料**

- Wio Lite Mg126 x1
- 计算机 x1
- USB type-c 数据线 x1
- 跳线 x1

:::tip
        某些 USB 数据线只能供电而无法传输数据。如果您没有 USB 数据线或不知道您的 USB 数据线是否可以传输数据，您可以查看 [Seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)。
:::

通过 USB 数据线将 Wio Lite MG126 连接到您的计算机。

## 软件

### 步骤 1. 您需要安装 Arduino 软件。

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序 (arduino.exe)。

:::note
    如果 Arduino 软件以不同语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

### 步骤 2. 将 Wio Lite MG126 开发板添加到 Arduino IDE

打开您的 Arduino IDE，点击 **File > Preferences**，并将以下 URL 复制到 Additional Boards Manager URLs

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

点击 **Tools > Board > Board Manager**。按名称搜索开发板，只需搜索关键词 `Seeeduino_Wio_Lite_MG126` 并安装相应的开发板。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-2.jpg)

### 步骤 3. 选择您的开发板和端口

您需要在 **Tools > Board** 菜单中选择与您的 Arduino 对应的条目。
选择 **Wio Lite MG126**。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-4.jpg)

从 Tools | Serial Port 菜单中选择 Arduino 开发板的串行设备。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常为硬件串行端口保留）。要找出端口，您可以断开 Arduino 开发板的连接并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串行端口。

:::caution
        在您选择 Wio Lite MG126 开发板之前，您可能无法在 **File > Examples** 选项卡中找到 MG126 示例。当您选择开发板后，示例将出现在这里。
:::

### 步骤 4. 打开演示

从 Seeed Github 下载 [MG126 Library](https://github.com/Seeed-Studio/Seeed_Arduino_MG126)。然后参考 [How to install library](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
点击 **File > Examples >Seeeduino Wio Lite MG126 >analog_output**。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-5.png)

您可以在此文件夹中找到 7 个演示。`button`/`get_bat_vol` 演示不使用蓝牙库，其余的都使用。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-6.jpg)

|演示名称|功能|设备信息|
|-----|-----|----|
|analog_output|通过蓝牙获取开发板上的模拟值并在手机应用程序上显示。|Wio_BLE_Analog|
|button|按下板载用户按钮并在串行监视器中打印。||
|echo_ble|蓝牙回显服务器，即手机接收开发板发送的数据。|Wio_Lite_BLE|
|get_bat_vol|获取外部电池电压||
|rgb_led_matrix_control|控制 [Grove - RGB LED Matrix](https://www.seeedstudio.com/Grove-RGB-LED-Matrix-w-Driver.html) 进行显示|Wio_Led_matrix|
|serial_transparent_transmission|串口数据透明传输，即手机发送的数据将从开发板的串口发送，发送到开发板串口的数据将发送到手机。|Wio_Lite_Serial|
|temp_humidity|从 [Grove - I2C High Accuracy Temp&Humi Sensor (SHT35)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html) 获取信息，并将其发送到您的手机。|Wio_BLE_T&H|

### 步骤 5. 上传程序

现在，只需点击环境中的"Upload"按钮。等待几秒钟，如果上传成功，状态栏中将出现"Done uploading."消息。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
  </figure>
</div>

完成后，Arduino IDE 左下角将弹出 **Done Uploading** 信息。

### 步骤 6. 使用手机连接 MG126

打开 [nRF Connect](#开始使用) 应用程序，点击 **SCANNER** 并搜索页面中 DeviceInfo 的名称。不同的演示有不同的 DeviceInfo，analog_output 对应的 DeviceInfo 是 `Wio_BLE_Analog`。

因此，请在蓝牙设备列表中选择 `Wio_BLE_Analog`。点击 **CONNECT**，然后点击 **Automation IO > Analog**，A0 引脚的值将被显示。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/ana-0.jpg)

:::caution
        由于蓝牙的缓存功能，每次修改蓝牙的特征值（即下载使用不同蓝牙功能的示例）时，您需要清除应用程序的缓存一次，同时您还需要重启手机。
:::

## 函数接口

### WiFi 函数接口

- 1. 蓝牙包类

```
MG126_Ble  
```

- 2. 初始化蓝牙协议栈并打开蓝牙

```
MG126_Ble .ble_init();
```

- 3. 通过蓝牙报告消息

```
sconn_notifydata();
```

这里只列出了一些常用接口，其他接口可以查看示例。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Wio lite MG126 原理图文件](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip)

- **[PDF]** [DS-MG126-BLE-数据手册](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/DS-MG126-BLE.pdf)

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
