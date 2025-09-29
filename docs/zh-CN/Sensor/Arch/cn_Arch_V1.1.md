---
description: Arch V1.1
title: Arch V1.1
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arch_V1.1
last_update:
  date: 2/1/2023
  author: hushuxu
---

![输入图片描述](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Arch.jpg)

Arch V1.1 是一款支持 mbed 的开发板，具有 Arduino 形式的外形和 Grove 接口，适用于快速原型开发。通过多种 Shield 和 Grove 模块、mbed SDK 以及大量的软件库，您可以快速构建原型。

[![输入图片描述](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/seeeduino-arch-p-1561.html)

版本追踪
-------

<table>
<colgroup>
<col width="25%" />
<col width="50%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th>版本</th>
<th>描述</th>
<th>发布日期</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Seeeduino Arch V1.0</td>
<td><ul>
<li>首次公开发布</li>
</ul></td>
<td>2013-6-17</td>
</tr>
<tr class="even">
<td>Arch V1.1</td>
<td><ul>
<li>名称从 Seeeduino Arch 更改为 Arch</li>
<li>交换 D13 和 D11</li>
<li>新增一个 Grove 接口</li>
<li>移除双二极管</li>
</ul></td>
<td></td>
</tr>
</tbody>
</table>

特点
-------

-   支持 mbed
    -   在线开发工具
    -   易于使用的 C/C++ SDK
    -   大量已发布的库和项目

-   Arduino 外形，三个 Grove 接口
    -   兼容 3.3V 的 Shield
    -   大量 Grove 模块
-   拖放式编程
-   NXP LPC11U24 MCU
    -   低功耗 ARM Cortex-M0 核心
    -   48MHz，32KB Flash，8KB RAM，4KB EEPROM
    -   USB 设备，2xSPI，UART，I2C

规格
-------------

| 项目                          | 典型值  |
|-------------------------------|----------|
| 工作电压                      | 7 ~ 12V  |
| 微控制器                      | LPC11U24 |
| Flash 内存                    | 32KB     |
| EEPROM                        | 4KB      |
| RAM                           | 8KB      |
| UART                          | 1        |
| I2C                           | 1        |
| ADC 通道                      | 8        |
| I/O 引脚                      | 40       |
| 数字 I/O 最大输入电压         | 5.0V     |

硬件概览
------

![输入图片描述](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Arch_V1.1_Pinout.png)

这里有一个[单色版本](https://seeed-studio.github.io/Artwork/images/arch_v1.1_pinout_mono.png)，方便打印。

快速开始
-----------

![输入图片描述](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Get_started_with_arch.png)

1.  点击[此链接](https://mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeeduino-Arch)登录或注册 mbed
2.  导入 mbed_blinky 程序
3.  编写代码！然后您可以编译代码并下载输出的二进制文件。
4.  现在将 Arch 板连接到您的电脑并长按复位按钮，它会自动显示为名为 CRP DISABLD 的 USB 驱动器。进入 CRP DISABLD，删除固件文件并将下载的二进制文件复制到 CRP DISABLD。快速按下复位按钮以运行新的二进制文件。

您可以更改以下代码并再次尝试。

```
    #include "mbed.h"

    BusOut leds(LED1, LED2, LED3, LED4);

    int main() {
        uint8_t count = 0;
        while(1) {
            leds = count++;
            wait(1);
        }
    }
```

在 Windows、Linux 或 Mac 上编程 Arch
-----------------------------------------

Arch 没有 mbed 接口。它使用 USB 内部系统编程（ISP）来升级固件。

要进入 USB ISP 模式，将 Arch 连接到您的电脑并长按其按钮，然后会出现一个名为 "CRP DISABLD" 的磁盘。

-   在 Windows 上
    1.  删除 "CRP DISABLD" 磁盘中的 firmware.bin 文件。
    2.  将新的固件复制到磁盘中。

-   在 Linux 上
    1.  如果磁盘未挂载，请将磁盘挂载到 /path/to/mount
    2.  **dd if=new_firmware.bin of=/path/to/mount/firmware.bin conv=notrunc**

-   在 Mac 上，您需要使用终端运行以下脚本，将 .bin 文件复制到 Arch

    1.  **dd if=new_firmware.bin of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc**

如果您愿意，还可以创建一个 **Automator** 应用程序以支持将文件拖放到您的板上。只需创建一个 "*Run Shell Script*"，并使用以下命令：

dd if=$\* of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc

您还需要将 `"Pass Input"` 选项从 `"to stdin"` 更改为 `"as arguments"`——否则您会在日志中收到错误 `"The action 'Run Shell Script' encountered an error"` 或 `"dd: no value specified for if (1)"`。

此外，改进后的脚本形式为：

**`dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`**

它可以处理文件路径中的空格，并且仅使用提供的第一个文件。

快速按下按钮以运行新的固件。

应用
------------

-   [使用 Seeeduino Arch 作为调试适配器调试另一个 Seeeduino Arch](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)
-   [环境感知](https://mbed.org/users/yihui/notebook/sense-environment/)
-   [使用 Grove RTC](https://mbed.org/cookbook/seeed-grove-RTC)
-   [使用 Grove - 超声波测距仪](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

资源
---------

-   [Arch V1.1 的原理图](https://upverter.com/yihui/35f45e266de84e9c/Arch/)

<!-- 此 Markdown 文件由 https://www.seeedstudio.com/wiki/Arch_V1.1 创建 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>