---
description: Arch Link
title: Arch Link
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arch_Link
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Arch_Link/img/1020800061.jpg)

**Arch Link** 是一款基于 Nordic nRF51822 和 WIZnet W5500 以太网接口的 mbed 开发板。它采用 Arduino 形式的外形设计，配备 Grove 接口和 micro SD 插槽，非常容易创建蓝牙低功耗设备。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-Link-p-2511.html)

特点
--------

- 支持 mbed
  - 在线 IDE
  - 易于使用的 C/C++ SDK
  - 实用的库
- 基于 LPC11U35 的 CMSIS DAP
  - 拖放式编程
  - 使用 CMSIS DAP 标准进行调试
  - USB 虚拟串口用于通信
- Arduino 形式的外形设计，带有 Grove 接口
  - 板载 I2C 和 UART 接口
- Nordic nRF51822 多协议蓝牙® 4.0 低功耗/2.4GHz RF SoC
  - ARM Cortex M0 处理器
  - 256kB 闪存/16kB RAM
  - 可配置的数字 I/O 映射
- WIZnet W5500 以太网
  - 支持以下硬件 TCP/IP 协议：TCP、UDP、ICMP、IPv4、ARP、IGMP、PPPoE
  - 支持省电模式
  - 支持通过 UDP 的远程唤醒功能
  - 支持高速串行外设接口 (SPI 模式 0, 3)
  - 内置 32KB 内存用于 Tx/Rx 缓冲区
  - 嵌入式 10BaseT/100BaseTX 以太网 PHY
  - 配备 RJ45 接口
- USB Micro B 接口
- Micro SD 卡接口

硬件概览
------

![](https://files.seeedstudio.com/wiki/Arch_Link/img/Arch_link_pinout.png)

快速入门
-----------

![](https://files.seeedstudio.com/wiki/Arch_Link/img/Get_started_with_mbed.png)

1. 点击 [此链接](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE) **登录或注册 mbed**
2. 导入 mbed_blinky 程序
3. 点击顶部工具栏中的 **Compile** 图标编译程序，然后下载编译后的 hex 文件。
4. 将下载的 hex 文件拖放到 MBED 磁盘中

您可以打开 **main.cpp** 来修改程序。例如，使用以下代码每 0.1 秒闪烁一次 LED：

```cpp
#include "mbed.h"

DigitalOut led(p30);           // 板载 LED 连接到 p30

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
```

<div class="admonition note">
<p class="admonition-title">注意</p>
<p>如果出现编译错误提示 'device.h' 未找到，请尝试在您的程序中将 mbed 库更新到最新版本。</p>
</div>

应用
------------

1. 彩色像素，一个彩色 LED 灯条，可以通过手机控制。

    - 硬件
        - Arch Link
        - [数字 RGB LED 灯条](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)
        - 带 BLE 的安卓设备

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Ble_color_pixels_bb.png)

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Color_pixels_app.png)

    - 运行步骤

        1. 下载 [BLE_Color_Pixels_Arch_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)
        2. 将 hex 文件复制到 Arch BLE 的 MBED 磁盘中
        3. 下载 [Color Pixels 安卓应用](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)

如果您想修改程序，请点击 [此链接](https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE) 将 Color Pixels 程序导入 mbed 在线 IDE。

如果 BLE 设备频繁断开连接，可以通过修改 BLE 参数来提高稳定性 - 广播持续时间 (main.cpp)、最小间隔和最大间隔 (nRF51822/projectconfig.h)。

```cpp
#define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< 最小连接间隔 */
#define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< 最大连接间隔 */
```

2. 您可以将 Arch Link 用作网页仪表盘。

    - 硬件
        - Arch Link
        - [Grove - 温湿度传感器 Pro](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-Pro-p-838.html)

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Web_dashboard_bb.png)

    - 运行步骤

        1. 下载 [Web_Dashboard_Arch_Link.hex](http://tangram.qiniudn.com/Web_Dashboard_Arch_Link.hex)
        2. 将 hex 文件复制到 Arch Link 的 MBED 磁盘中
        3. 将 Grove - 温湿度传感器 Pro 连接到 I2C Grove 接口
        4. 通过 USB 数据线将 Arch Link 连接到您的电脑
        5. 打开网页浏览器并访问 [http://mbed.org/media/uploads/yihui/web_dashboard.html](http://mbed.org/media/uploads/yihui/web_dashboard.html)

如果您想修改程序，请点击 [此链接](https://mbed.org/compiler/#import:/teams/Seeed/code/Web_Dashboard/;platform:Seeed-Arch-Link) 将 Web Dashboard 程序导入 mbed 在线 IDE。

## 在线原理图查看器

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

-   [Arch Link mbed 开发平台页面](https://developer.mbed.org/platforms/Seeed-Arch-Link/)
-   [PDF 格式的原理图](https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_pdf.pdf)
-   [EAGLE 格式的原理图和板文件](https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_Eagle.zip)
-   [LPC11U35 固件](https://files.seeedstudio.com/wiki/Arch_Link/res/Lpc11u35_nrf51822_if_mbed.bin.zip)
-   [适用于 Android 的 Seeed BLE Color Pixels 应用](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)
-   [BLE Color Pixels 应用源码](https://github.com/Seeed-Studio/ble_color_pixels)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Arch_Link -->

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