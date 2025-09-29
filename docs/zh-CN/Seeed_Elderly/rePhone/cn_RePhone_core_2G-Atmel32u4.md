---
description: Rephone Core 2G-Atmel32u4
title: Rephone Core 2G-Atmel32u4
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RePhone_core_2G-Atmel32u4
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/cover.jpg)

RePhone 是由 Seeed Studio 创建的最独特且有趣的开发板平台之一。通过 RePhone，您不仅可以为自己 DIY 一部特别的手机，还可以为周围的物品赋予蜂窝连接功能。第一版 RePhone 核心是 Xadow – GSM+BLE，这次我们提供了另外两个版本的 RePhone 核心，具有更高的性能和更低的功耗，其中之一是 RePhone Core 2G Atmel32u4 v1.0。

RePhone Core 2G Atmel32u4 v1.0 是一个新的 Arduino 兼容的 RePhone Core 2G 开发板，基于 Atmel32u4 和 SIM800H。RePhone Core 2G Atmel32u4 v1.0 的大多数功能与 Xadow – GSM+BLE 相同，例如提供丰富的通信协议（GSM、GPRS 和蓝牙），支持四频段 850/900/1800/1900MHz，并支持 2G Nano SD 卡。但与 Xadow – GSM+BLE 相比，Atmel32u4 加 SIM800H 的解决方案显著降低了功耗。如果您正在寻找一个高性能、低功耗的 RePhone 核心模块来改变世界，那么这个新的 RePhone Core 2G 模块是最佳选择。

我们还提供了一个更强大的新 RePhone Core 2G 版本，其解决方案是 AtmelSAMD21+SIM800。点击[这里](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)了解更多。

:::warning
1. 此产品**不包含**锂聚合物电池，我们的商店也没有销售锂聚合物电池，任何 3.7V 的锂聚合物电池都可以使用。
2. 此产品**不包含**麦克风、扬声器和 3.5mm 耳机输入，您需要购买 [Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html) 来实现这些功能。
:::

## 特性

### Arduino/处理器

* Atmega32u4 工作频率为 16MHz
* 兼容 Arduino IDE（基于 Arduino Leonardo 引导加载程序）
* 内嵌锂电池管理芯片
* 用户按钮

### SIM800H

* 四频段 850/900/1800/1900MHz
* GPRS 多时隙类别 12/10
* GPRS 移动站类别 B
* 符合 GSM 2/2+ 标准
  * 类别 4 (2 W @850/900MHz)
  * 类别 1 (1 W @1800/1900MHz)
* 蓝牙：兼容 3.0+EDR
* FM：频段范围 76~109MHz，步进调谐 50KHz
* 通过 AT 命令控制 3GPP TS 27.007、27.005 和 SIMCOM 增强 AT 命令集
* SIM USAT
* 低功耗
* 工作温度范围：-40 ~ +85 °C

## 规格

| 项目 | 值 |
|--------------|-------------------------------------|
| 微控制器 | Atmega32U4 |
| 工作电压 | 3.3V |
| 每个 I/O 引脚的直流电流 | 50 |
| 闪存 | 32 KB，其中 4KB 被引导加载程序使用 |
| SRAM | 2.5 KB |
| EEPROM | 1KB |
| 时钟速度 | 16 MHz |
| 长度 | 68 mm |
| 宽度 | 30 mm |
| 重量 | 12 g |

## 硬件概览

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/hw.png)

* **1-** 11 针 Xadow 接口
* **2-** 用户按钮 (D3)
* **3-** 用于编程和供电的 Micro USB 接口
* **4-** 35 针 Xadow 接口
* **5-** JST1.0 电池接口
* **6-** Nano SIM 卡（与 iPhone 5/6/7 相同）
* **7-** Atmega32U4 芯片
* **8-** 充电状态监控 LED
  * 闪烁 - 未插入电池
  * 常亮 - 正在充电
  * 熄灭 - 充电完成
* **9-** IC - ETA6003（数据手册）
* **A-** ICSP 焊盘
* **B-** 天线接口
* **C-** I/O 引脚焊盘
* **D-** SIM800H

## 引脚图

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png)](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png)

:::提示
    [点击此处](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png)查看大图。
:::
:::注意
    * INT1 连接到 D7
    * INT2 连接到 D12
:::

## Arduino IDE

下载并安装 [最新的 Arduino IDE](https://www.arduino.cc/en/Main/Software) 后，点击[这里](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)将板子添加到 Arduino IDE。

### 安装驱动程序（适用于 Windows）

首次插入板子时，您会看到一个名为 RePhone 2G SAMD21 的 USB COM 设备，需要安装驱动程序。点击下方按钮下载板子的驱动程序。

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/driver.png)](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/driver.zip)

为了确保驱动程序安装成功，请打开设备管理器查看是否存在 **RePhone 2G 32U4**。

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/device_manager.png)

### Hello World

现在我们可以上传第一个示例程序 - Hello World 到板子上。

打开 Arduino IDE，复制以下代码：

```c
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.println("Hello world!");
    delay(1000);
}
```

然后，

* 点击 **工具 > 板子 > RePhone core 2G-Atmel32u4**

如果找不到 RePhone core 2G-Atmel32u4，请查看[如何将 Seeed 板子添加到 Arduino IDE](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)。

* 点击 **工具 > 端口** 选择正确的端口号。（*不要选择 COM1*）

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/arduino_ide.png)

然后点击 Arduino IDE 左上角的 **上传** 按钮，几秒钟后，代码成功上传。

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/upload.png)

如果上传成功，您会看到一些红色信息。

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/upload_done.png)

打开 Arduino IDE 的串口监视器，您将每秒看到打印的 "Hello World"。

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/hello_world.png)

## AT 指令模式

RePhone core 2G 板支持 AT 指令模式。SIM800H 的 TX/RX 连接到 AtemlSAMD21 的 Serial1(D0/D1)。

复制以下代码并上传到板子上。

```c
#include "atmel32u4_gprs.h"

void setup()
{
    Serial.begin(9600);
    while(!Serial);

    Serial.println("SIM800 Serial Debug Test ...");
    gsm.preInit();

    while(0 != gsm.sendATTest())
    {
        Serial.println("sim800 init error!");
    }

    Serial.println("sim800 init O.K!");
}

void loop()
{
    gsm.ATDebug();
}
```

打开串口监视器，等待 ***GSM init ok.*** 打印到监视器上，然后您可以输入指令。
尝试输入 "AT"，您将得到 "OK"。

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/cmd.png)

:::提示
    所有指令必须以换行符 (\r\n) 结束。
:::
点击下方按钮获取详细的 AT 指令文档。

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/at_cmd.png)](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)

## 示例

我们制作了许多示例来展示该模块的工作方式。首先，请执行以下操作：

1. 插入一个 nano SIM 卡
2. 插入天线
3. 如果您有锂电池，请将其插入到板上

点击 **文件 > 示例**，然后您可以打开这些示例。

### Atmel32U4_SIM800

* **Bluetooth_AT_Command_And_Music_Play**: 通过蓝牙播放音乐
* **GSM_GPRS_HTTP_GET**: 从 [mbed.org](http://mbed.org) 获取 hello.txt
* **GSM_Receive_SMS**: 接收短信
* **GSM_Voice_Call**: 接收语音电话
* **SIM800_Serial_Debug**: AT 命令模式

### RePhone_API_for_Arduino

* **gps_test**: [Xadow GPS v2](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html) 示例
* **ledmatrix_test**: [Xadow LED 5x7](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html) 示例
* **nfc_test**: [Xadow NFC v2](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html) 示例
* **sensorhub_test**: [Xadow Basic Sensors](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html) 示例
* **ws2812_test**: [Xadow Duino](https://www.seeedstudio.com/Xadow-Duino-p-2556.html) 示例

### rephone_button

* **button_test**: 板载按钮测试

### rephone_lcm

* **lcm_display_test**: LCD 显示示例

### rephone_menu_gsm

* **rephone_menu_test**

## RePhone 系列

有多个可链式扩展模块，用于增强功能和特性——包括 Xadow Audio、Xadow LED 5x7、Xadow Basic Sensors、Xadow Duino、Xadow GPS v2 和 Xadow NFC v2。

| GPS v2 | 基础传感器 | NFC v2 |
|--------|------------|--------|
| ![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product1.jpg) | ![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product2.jpg) | ![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product3.jpg) |
| [了解更多详情](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html) | [了解更多详情](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html) | [了解更多详情](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html) |

| LED 5 x 7 | 音频 | Xadow GSM Breakout |
|-----------|------|--------------------|
| ![](https://files.seeedstudio.com/wiki/Rephone/image/product4.jpg) | ![](https://files.seeedstudio.com/wiki/Rephone/image/product7.jpg) | ![](https://files.seeedstudio.com/wiki/Rephone/image/product8.jpg) |
| [了解更多详情](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html) | [了解更多详情](https://www.seeedstudio.com/Xadow-Audio-p-2554.html) | [了解更多详情](https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html) |

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 资源

- [PDF 格式原理图](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4/RePhone%20core%202G-Atmel32u4%20v1.0.pdf)
- [EAGLE 格式原理图](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4.zip)
- [驱动程序](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/driver.zip)
- [ETA6003 数据手册](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/ETA6003.pdf)
- [SIM800H 的 AT 命令手册](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/SIM800_AT.pdf)
- [下载以上所有资源](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/archive/master.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>