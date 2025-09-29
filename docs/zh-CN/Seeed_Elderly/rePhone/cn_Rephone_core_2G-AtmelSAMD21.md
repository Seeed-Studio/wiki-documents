---
description: Rephone Core 2G-AtmelSAMD21
title: Rephone Core 2G-AtmelSAMD21
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Rephone_core_2G-AtmelSAMD21
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cover.jpg)

RePhone 是由 Seeed Studio 创建的最独特且有趣的开发板平台之一，自从它首次在 KickStarter 上亮相以来，就受到了来自全球创客的大量关注和支持。通过 RePhone，你不仅可以为自己 DIY 一个特别的手机，还可以为周围的事物赋予蜂窝连接功能。

RePhone Core 2G-AtmelSAMD21 v1.0 是一个新的 Arduino 兼容 RePhone Core 2G 开发板，它基于 Atmel 的 SAMD21 和 SIM800H。RePhone Core 2G-AtmelSAMD21 v1.0 的大多数功能与 Xadow – GSM+BLE 相同，例如提供丰富的通信协议——GSM、GPRS 和蓝牙，支持四频段 850/900/1800/1900MHz，并支持 2G Nano SD 卡。但 Atmel 的 SAMD21 加上 SIM800H 的解决方案相比 Xadow – GSM+BLE 大幅降低了功耗。如果你正在寻找一个高性能且低功耗的 RePhone 核心模块来赋能世界，那么这个新的 RePhone Core 2G 模块是最佳选择。

:::note:
    RePhone Core 2G-AtmelSAMD21 v1.0 兼容所有 Xadow v2.0 模块，除了 Xadow 1.54 英寸触摸屏。
    如果你想使用 GSM 或 GPRS 功能，请连接电池到开发板，以防止 USB 电源不足导致通信失败。
:::

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)

:::warning
    此产品**不包含**锂聚合物电池，并且我们的 Bazaar 商店也没有出售锂聚合物电池，任何 3.7V 的锂聚合物电池都可以使用。

    此产品**不包含**麦克风、扬声器和 3.5mm 耳机输入接口。如果需要这些功能，你需要购买 [Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html)。
:::

## 特性
---
### Arduino/处理器

* ATSAMD21G18 @ 48MHz，支持 3.3V 逻辑/电源
* Arduino 兼容（基于 Arduino Zero 引导加载程序）
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
---
| 项目 | 值 |
|--------------|-------------------------------------|
| 微控制器 | ATSAMD21G18，32 位 ARM Cortex M0+ |
| 工作电压 | 3.3V |
| 每个 I/O 引脚的直流电流 | 7 mA |
| 闪存 | 256 KB |
| SRAM | 32 KB |
| EEPROM | 无 |
| 时钟速度 | 48 MHz |
| 长度 | 68 mm |
| 宽度 | 30 mm |
| 重量 | 12 g |

## 硬件概览
---
![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hw.png)

* **1- **11针 Xadow 接口
* **2- **用户按钮 (D3)
* **3- **用于编程和供电的 Micro USB 接口
* **4- **35针 Xadow 接口
* **5- **Jst1.0 电池接口
* **6- **Nano SIM 卡（与 iPhone 5/6/7 相同）
* **7- **ATSAMD21G18 芯片
* **8- **充电状态监控 LED
    * 闪烁 - 未插入电池
    * 常亮 - 正在充电
    * 熄灭 - 充电完成
* **9- **芯片 - ETA6003([数据手册](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf))
* **A- **SWD 调试端口
* **B- **天线接口
* **C- **I/O 引脚触点
* **D- **SIM800H

## 引脚图

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)

:::提示
    [点击此处](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)查看大图。
:::
:::注意
    * INT1 连接到 D7
    * INT2 连接到 D12
:::

## Arduino IDE

下载并安装[最新的 Arduino IDE](https://www.arduino.cc/en/Main/Software)后，需要进行一些设置。
打开 Arduino IDE，点击 **文件 > 首选项**。
将以下代码复制到 **附加开发板管理器 URLs** 中，然后点击 **确定**。

```c
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/setting.png)

接下来，进入 **工具 > 开发板 > 开发板管理器**。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/boards_manager.png)

点击 **安装** 按钮，等待几分钟直到开发板安装完成。

安装完成后，你可以在 **工具 > 开发板** 的底部找到 RePhone core 2G-AtmelSAMD21。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/board_r2.png)

### 安装驱动程序（适用于 Windows）

首次插入开发板时，你会看到一个名为 RePhone 2G SAMD21 的 USB COM 设备，需要安装驱动程序。点击以下按钮下载开发板的驱动程序。

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/driver.png)](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip)

为了确保驱动程序安装成功，请打开设备管理器查看是否存在 **RePhone 2G SAMD21**。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/device_manager.png)

### Hello World

现在我们可以将第一个示例程序 - Hello World 上传到开发板。

打开 Arduino IDE，复制以下代码：

```c
void setup()
{
    SerialUSB.begin(115200);
}

void loop()
{
    SerialUSB.println("Hello world!");
    delay(1000);
}
```

然后，

* 点击 **工具 > 开发板 > RePhone core 2G-AtmelSAMD21**
* 点击 **工具 > 端口** 选择正确的端口号。（*不要选择 COM1*）

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/arduino_ide.png)

接着点击 Arduino IDE 左上角的 **上传** 按钮，几秒钟后程序上传成功。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload.png)

如果上传成功，你会看到一些红色信息。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload_done.png)

打开 Arduino IDE 的串口监视器，你会看到每秒打印一次 "Hello World"。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hello_world.png)

## AT 指令模式
---
RePhone Core 2G 板支持 AT 指令模式。SIM800H 的 TX/RX 连接到 AtemlSAMD21 的 Serial1(D0/D1)。

复制以下代码并上传到您的开发板。

```c
#include "atmelsamd21_gprs.h"

void setup()
{
    SerialUSB.begin(115200);
    while(!SerialUSB);

    SerialUSB.println("RePhone core 2G - AtmelSAMD21 AT Command Test");
    gsm.preInit();                  // 开机

    while(0 != gsm.init())
    {
        SerialUSB.println("GSM 初始化错误。");
        delay(2000);
    }

    SerialUSB.println("GSM 初始化成功。");
}

void loop()
{
    while(SerialUSB.available())Serial1.write(SerialUSB.read());
    while(Serial1.available())SerialUSB.write(Serial1.read());
}

```

打开串口监视器，等待 ***GSM 初始化成功。*** 打印到监视器上，然后您可以输入指令。
尝试输入 "AT"，以获得 "OK" 的响应。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cmd.png)

:::提示
    所有指令必须以换行符(\r\n)结束。
:::
点击下面的按钮获取详细的 AT 指令文档。

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/at_cmd.png)](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)


## 示例
---
我们已经制作了许多示例来展示该模块的工作方式。
在开始之前，请确保：

1. 插入一张 nano SIM 卡
2. 插入天线
3. 如果您有锂电池，请将其插入到开发板

点击 **文件 > 示例**，然后您可以打开这些示例。
### AtmelSAMD21_SIM800

* **Bluetooth_AT_Command_And_Music_Play**: 通过蓝牙播放音乐
* **GSM_GPRS_HTTP_GET**: 从 [mbed.org](http://mbed.org) 获取 hello.txt
* **GSM_Receive_SMS**: 接收短信
* **GSM_Voice_Call**: 接收语音电话

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

### rephone_menu_all

* **rephone_menu_test**

### TwilioMessage

* **message_test**: Twilio 消息发送/接收

## RePhone 系列
有几个可链式扩展模块可以增强功能和特性——Xadow Audio、Xadow LED 5x7、Xadow Basic Sensors、Xadow Duino、Xadow GPS v2 和 Xadow NFC v2。

| GPS v2 | 基础传感器 | NFC v2 |
|----------------|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product3.jpg)|
|[了解更多详情](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)|[了解更多详情](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)|[了解更多详情](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)|

| LED 5 x 7 | 音频 | Xadow GSM Breakout |
|----------------|--------------|-------------|
|![](https://files.seeedstudio.com/wiki/Rephone/image/product4.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product7.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product8.jpg)|
|[了解更多详情](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)|[了解更多详情](https://www.seeedstudio.com/Xadow-Audio-p-2554.html)|[了解更多详情](https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html)|

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## 资源
---
- [PDF格式原理图](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/pdf_sch_rephone_2g.pdf)
- [EAGLE格式原理图](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip)
- [驱动程序](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip)
- [ETA6003数据手册](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf)
- [SIM800H的AT指令集](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/SIM800_AT.pdf)
- [下载以上所有资源](https://github.com/SeeedDocument/RePhone-core-2G-AtmelSAMD21/archive/master.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>