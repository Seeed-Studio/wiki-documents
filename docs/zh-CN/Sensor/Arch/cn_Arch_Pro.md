---
description: Arch Pro
title: Arch Pro
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arch_Pro
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro.jpg)

Arch Pro 是一个支持 mbed 的开发板，用于快速原型设计。它是 mbed LPC1768 的一个变体，内置以太网、USB 主机/设备、Grove 接口和 Arduino 形式因子。通过各种 Shield 和 Grove 模块以及大量适用于 Arch Pro 的软件库，您可以快速轻松地实现以太网、USB 主机/设备和 NFC 应用。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Arch-Pro-p-1677.html)

特点
--------

-   支持 mbed
    -   在线开发工具
    -   易于使用的 C/C++ SDK
    -   便捷的库

-   Arduino 形式因子，带有两个 Grove 接口
-   拖放式编程
-   使用 CMSIS-DAP 进行调试
-   USB 虚拟串口用于通信

规格
-------------

| 参数            | 值/可用性                                    |
|-----------------|-----------------------------------------------|
| MCU             | NXP LPC1768 变体（带 ARM Cortex-M3 内核）     |
| 时钟速度        | 100 MHz                                       |
| 闪存            | 512 KB                                        |
| RAM             | 64KB                                          |
| UART            | 4 个                                          |
| I2C             | 3 个                                          |
| SPI             | 2 个                                          |
| 以太网          | 是                                            |
| USB 主机/设备   | 是                                            |

支持的平台
-----------------

-   mbed

应用创意
-----------------

-   [以太网](https://mbed.org/handbook/Ethernet-Interface)
-   [USB 主机](https://mbed.org/handbook/USBHost) 或 [设备](https://mbed.org/handbook/USBDevice)
-   [NFC](https://mbed.org/users/yihui/notebook/rapid-prototyping-with-nfc/)
-   [RTOS](https://mbed.org/handbook/RTOS)
-   [Lua](http://mbed.org/users/jsnyder/notebook/elua-preliminary-port/)

硬件概览
-----------------

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro_v1_pinout.png)

这里有一个[单色版本](https://seeed-studio.github.io/Artwork/images/arch_pro_v1_pinout_mono.png)，方便打印。

<div className="admonition note">
  <p className="admonition-title">注意</p>
  <p>Arch Pro 的 Grove 接口丝印在 PCB 顶部标记为 3V3，而在底部标记为 5V。Grove Vcc 默认是 3V3，但可以通过将 R50 移动到 R51 来更改为 5V。SPI Vcc 引脚可以通过填充 R52（3V3）或 R53（5V）为 0R 来设置——默认情况下未填充。</p>
</div>

入门指南
---------------

由于 Arch Pro 兼容 mbed LPC1768，可以使用 mbed C/C++ SDK、库和在线开发工具快速构建原型。以下是如何点亮 LED 的步骤。这可以在不到 10 分钟内完成。

第一步：注册一个 mbed 账户。

-   打开 [mbed.org](https://developer.mbed.org/)，点击登录或注册。如果您已经注册，请直接点击登录。

第二步：进入在线开发工具。

-   点击 Compiler，打开在线 mbed IDE。在编程之前，最好阅读 mbed Compiler 的[入门指南](https://developer.mbed.org/getting-started/)。

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Open_Compiler.jpg)

第三步：编辑代码。

-   点击左上角的 "New" 创建一个程序，并在 main.cpp 文件中编辑一个闪烁程序。

```
#include "mbed.h"
 
DigitalOut  led1(LED1);
 
int main() {
    while(1) {
        led1 = !led1; 
        wait(0.5); 
    }
}
```

第四步：添加设备。

-   点击右上角的 “No device selected”，然后点击左下角的 “Add a device” 按钮，如下图所示。

<div className="admonition note">
  <p className="admonition-title">注意</p>
  如果您已经使用过 mbed 设备，它会显示在右上角，而不是 “No device selected”。
</div>

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/选择设备.jpg)

-   弹出页面显示设备列表，如下图所示。选择 “mbed LPC1768”。

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/选择设备1.jpg)

-   进入 mbed LPC1768 页面并点击 “Add to mbed Compiler”。现在您已成功添加 Mbed LPC1768。返回 mbed 编译器页面并点击 “No device selected”。点击左下角的 "LPC1768"，屏幕显示如下图所示。

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro_add_platform.png)

-   点击 “Select Platform” 后，您可以在 mbed 在线编译器中看到选定的开发板。

第五步：编译并下载。

-   点击 "Compile"。编译成功后，mbed IDE 会生成一个 bin 文件。将 bin 文件保存到您的电脑上。

第六步：更新固件。

-   使用 USB Micro B 数据线将 Arch Pro 的 USB 接口（靠近 'BUTTON'）连接到您的电脑；它会自动显示为名为 MBED 的 USB 设备。
-   将生成的 bin 文件复制到 MBED 设备（在您的电脑上）。此时 USB 设备会消失并重新出现。
-   按下 Arch Pro 的 BUTTON，您会看到 LED 闪烁。

调试
-----

要启用 SWD 调试或通过 USB 虚拟串口获取调试信息，请安装 [mbed 提供的驱动程序](https://developer.mbed.org/handbook/Windows-serial-configuration)。

更新或恢复固件
--------------------------

Arch Pro 的最新固件版本是 v0221，构建日期为 2015 年 1 月 28 日。要检查您的固件版本和构建日期，请在文本编辑器中打开 MBED.HTM 或 DETAILS.TXT 文件（位于您的 MBED 磁盘中）。

-   [Arch Pro 固件 v221 2015-01-28](https://developer.mbed.org/media/uploads/yihui/lpc11u35_lpc1768_if_mbed_20150128.bin) 修复 Mac OS X 10.10 Yosemite 只读文件系统问题
-   [Arch Pro 固件 v0203 2014-09-02](https://github.com/xiongyihui/CMSIS-DAP/raw/arch_pro/interface/mdk/lpc11u35/lpc11u35_lpc1768_if_mbed_bootloader.bin)

要更新：

-   需要一台 Windows 或 Linux 电脑。
-   下载最新的固件。
-   按住 Arch Pro 的按钮并将其开机。
-   一个名为 MBED LOADER 的磁盘将会出现。
-   将下载的固件拖放到该磁盘中。

<div class="admonition note">
<p class="admonition-title">注意事项</p>
<p>LocalFileSystem 不可用：由于 Arch Pro 没有外部闪存来存储文件，因此该板不支持 LocalFileSystem。</p>
<p>P0_27 和 P0_28 不支持 DigitalOut：P0_28 和 P0_27 是用于兼容 I2C 的开漏数字 I/O。需要外部上拉电阻来提供输出功能。</p>
<p>USB 串行通信：在 Windows 系统中，安装 mbed Windows 串口驱动以使用 USB 串行通信。请参考 <a href="https://developer.mbed.org/handbook/Windows-serial-configuration">Windows 串口配置</a></p>
</div>


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



资源
---------

-   [Arch Pro V1.0 原理图 PDF](https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0_Schematic.pdf)
-   [Arch Pro V1.0 EAGLE 文件](https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0.zip)
-   [LPC1768 数据手册](https://files.seeedstudio.com/wiki/Arch_Pro/res/LPC1769_68_67_66_65_64_63.pdf)
-   [LPC17xx 用户手册](https://files.seeedstudio.com/wiki/Arch_Pro/res/LPC17xxUserManual.pdf)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Arch_Pro -->


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>