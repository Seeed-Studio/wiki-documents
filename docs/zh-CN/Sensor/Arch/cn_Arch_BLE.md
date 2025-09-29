---
description: Arch BLE
title: Arch BLE
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arch_BLE
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Arch_BLE.jpg)

Arch BLE 是一款基于 Nordic nRF51822 的 mbed 开发板。它采用 Arduino 的外形尺寸，并配备 Grove 接口，非常容易创建一个蓝牙低功耗（BLE）设备。

nRF51822 是一个强大的多协议单芯片解决方案，专为超低功耗无线应用设计。它集成了 Nordic 最新的高性能无线电收发器、ARM Cortex M0 MCU，以及 256kB 闪存和 16kB RAM 内存。nRF51822 支持蓝牙®低功耗和 2.4 GHz 协议栈。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-BLE-p-1998.html)

功能特点
--------

-   mbed 支持
    -  在线 IDE
    -  易于使用的 C/C++ SDK
    -  实用的库
-   基于 LPC11U35 的 CMSIS DAP
    -  拖放式编程
    -  使用 CMSIS DAP 标准进行调试
    -  USB 虚拟串口用于通信
-   Arduino 外形尺寸，配备 Grove 接口
-   Nordic nRF51822 多协议蓝牙® 4.0 低功耗/2.4GHz RF SoC
    -  ARM Cortex M0 处理器
    -  256kB 闪存/16kB RAM
    -  可配置的数字 I/O 映射
-   USB Micro B 接口

硬件概览
------

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Arch_BLE_Pinout.png)

快速入门
-----------

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Get_started_with_mbed.png)

1.  点击 [此链接](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE) **登录或注册 mbed**
2.  导入 mbed_blinky 程序
3.  点击顶部工具栏中的 **Compile** 图标编译程序，然后下载编译后的 hex 文件。
4.  将下载的 hex 文件拖放到 MBED 磁盘中

您可以打开 **main.cpp** 来更改程序。例如，使用以下代码每 0.1 秒闪烁一次 LED：
```
    #include "mbed.h"

    DigitalOut led(p30);           // 板载 LED 连接到 p30

    int main()
    {
        while (true) {
            led = !led;
            wait(0.1);
        }
    }
```

<div className="admonition note">
  <p className="admonition-title">注意</p>
  <p>如果您遇到编译错误提示 'device.h' 未找到，请尝试在您的程序中将 mbed 库更新到最新版本。</p>
</div>

应用场景
------------

-  彩色像素灯，一个彩色 LED 灯条，可以通过手机控制。

    *  硬件
        -  [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html?cPath=19_21)
        -  [数字 RGB LED 灯条](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)
        -  支持 BLE 的安卓设备

    ![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Ble_color_pixels_bb.png)
    ![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Color_pixels_app.png)


    *  运行步骤

        1.  下载 [BLE_Color_Pixels_Arch_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)
        2.  将 hex 文件复制到 Arch BLE 的 MBED 磁盘中
        3.  下载 [Color Pixels 安卓应用](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)

如果您想更改程序，请点击 [此链接](https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE) 将 Color Pixels 程序导入 mbed 在线 IDE。

如果 BLE 设备频繁断开连接，可以通过更改 BLE 参数来提高稳定性——广告持续时间（在 main.cpp 中）、最小间隔和最大间隔（在 nRF51822/projectconfig.h 中）。

```
#define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< 最小可接受连接间隔 */
#define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< 最大可接受连接间隔 */
```

-  一个通过手机控制的玩具车。

    *  硬件
        -  [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html?cPath=19_21)
        -  [Shield Bot](https://www.seeedstudio.com/Shield-Bot-p-1380.html)

更新或恢复固件
--------------------------

Arch BLE 的最新固件版本是 v0221，构建日期为 2015 年 3 月 2 日。要检查您的固件版本和构建日期，请在文本编辑器中打开 MBED 磁盘中的 MBED.HTM 文件。

更新日志：

-   2014-06-26：首个版本
-   2014-08-25：支持拖放由 gcc 工具链生成且不含 softdevice 的 hex 文件
-   2014-10-08：使用 USB EJECT INSET 替代重新连接 USB，增加 Intel hex 数据行缓冲区（从 64 字节增加到 128 字节）
-   2015-02-03：修复 Mac OS X 10.10 Yosemite 只读文件系统问题

已知问题：

-   使用 Chrome 浏览器直接下载 hex 文件到 MBED 磁盘时可能出现问题。原因是 Chrome 在下载时会创建临时文件。如果您使用 Chrome，请将 hex 文件保存到其他位置，然后再复制到 MBED 磁盘。

固件：

-   [Arch BLE 的固件 v0221 2015-02-03](https://developer.mbed.org/media/uploads/yihui/arch_ble_interface_v221_20150203_2.bin)
-   [Arch BLE 的固件 v0203 2014-10-08](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)
-   [Arch BLE 的固件 v0203 2014-08-25](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20140825.bin)

刷写新固件步骤：

-   按住 Arch BLE 的按钮并将其通电。
-   一个 CRP DISABLD 磁盘会弹出。
    -   在 Windows 上，用上述固件替换 firmware.bin。
    -   在 Linux/Mac 上，使用命令：**dd if=\{new_firmware.bin\} of=\{firmware.bin\} conv=notrunc**

## 在线原理图查看器

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

-   [Arch BLE mbed 开发平台页面](https://developer.mbed.org/platforms/Seeed-Arch-BLE/)
-   [PDF 格式的原理图](https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_pdf.pdf)
-   [EAGLE 格式的原理图和板文件](https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_Eagle.zip)
-   [LPC11U35 固件](https://files.seeedstudio.com/wiki/Arch_BLE/res/Lpc11u35_nrf51822_if_mbed.bin.zip)
-   [适用于 Android 的 Seeed BLE Color Pixels 应用](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)
-   [BLE Color Pixels 应用的源码](https://github.com/Seeed-Studio/ble_color_pixels)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Arch_BLE -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时拥有流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>