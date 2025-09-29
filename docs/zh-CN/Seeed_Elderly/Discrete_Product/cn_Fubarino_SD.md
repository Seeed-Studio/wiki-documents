---
description: Fubarino SD
title: Fubarino SD
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Fubarino_SD
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Fubarino_SD/img/Fubarinosd.jpg)

Fubarino SD 是一款小型、易于在面包板上使用的微控制器板。它兼容 chipKIT 和 MPIDE，这意味着您可以在 MPIDE 中为其编写草图，MPIDE 是针对 chipKIT 兼容板的 Arduino IDE 分支。板上的微控制器是 Microchip PIC32MX440F256H。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Fubarino-SD-p-1265.html)

##   特性
---
*   USB 接口连接到 PIC32 的 USB 外设。
*   microSD 接口连接到 PIC32 的硬件 SPI 外设。
*   完全集成并兼容 MPIDE —— 实际上，当前版本的 MPIDE 支持 Fubarino SD 作为目标板。
*   所有 I/O 和电源引脚采用标准 "DIP" 封装形式，便于在面包板上使用。
*   可通过 USB 接口供电，外部 3.3V 或外部 2.8V 至 13.2V 电源供电。
*   15 个模拟输入（10 位）
*   45 个数字 I/O 引脚
*   ICSP 接口引脚，可在 MPLAB 或 MPAB X IDE（Microchip 提供的免费工具）下使用硬件编程器或调试器。
*   与所有 chipKIT 兼容板一样，Fubarino SD 可以运行任何 Arduino 草图或库，只要它们不直接访问原生 AVR 寄存器。
*   所有 I/O 工作电压为 3.3V，但许多 I/O 引脚支持 5V。
*   PIC32MX440F256H 是一款 32 位处理器，运行频率为 80 MHz，具有 256K 闪存和 32K RAM。
*   可使用 USB (5V)、3.3V 或 2.3V 至 15V 输入供电。
*   包括 4 个 DMA 通道、1 个 SPI（用于 microSD，但引出到引脚）、2 个 I2C 接口、USB（主机、功能、OTG）、15 个 A/D 通道（10 位）、5 个 16 位定时器、5 个硬件 PWM、PMP 等，作为 PIC32 处理器的一部分。

##   支持

请使用 Github [问题追踪器](https://github.com/fubarino/fubarino.github.com/issues)报告与 Fubarino SD 硬件相关的任何问题。对于 MPIDE、软件或库中的问题，请参考 [chipKIT/MPIDE 论坛](http://www.chipkit.org/forum/index.php) 或 chipKIT/MPIDE Github [问题追踪器](https://github.com/organizations/chipKIT32/dashboard/issues/)。

注意，前 100 块 Fubarino SD 板错误地使用了 PIC32MX795F512 部件。这不应影响从 MPIDE 构建的草图。然而，这意味着 [RetroBSD](http://retrobsd.org/) 是这些前 100 块板的一个选项。

##   资源
---
*   Fubarino SD v1.4 板和原理图（Eagle 6 格式） - [Github 目录](https://github.com/fubarino/fubarino.github.com/tree/master/sd/v1.4)

*   Fubarino SD v1.4 [原理图](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_sch.pdf) (PDF)
*   Fubarino SD v1.4 [板布局](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_brd.pdf) (PDF)
*   Fubarino SD v1.4 [BOM](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_BOM_SeeedFormat.xlsx) (Excel)
*   Fubarino SD [参考手册](https://github.com/fubarino/fubarino.github.com/raw/master/sd/docs/FubarinoSDURefManual.docx) (Word)
*   USB 引导加载程序（兼容 avrdude）[HEX 文件](https://github.com/fubarino/fubarino.github.com/raw/master/sd/files/BL_1_1_6_FuncTest_1_0.hex) 注意：右键单击并选择“另存为”以获取 .HEX 文件 - 板已经预编程了此引导加载程序。
*   [工厂测试草图](https://github.com/fubarino/fubarino.github.com/raw/master/sd/files/FubarinoSD_ManufactureTest.pde) 此草图是工厂用于测试 Fubarino SD 板的 - 右键单击并选择“另存为”。

##   作者

Fubarino SD 由 Brian Schmalz（来自 [Schmalz Haus LLC](http://www.schmalzhaus.com)）和 Rick Anderson（来自 [Fubar Labs](http://fubarlabs.org)）设计。两人也是 chipKIT/MPIDE 开发团队的成员。

##   外部链接

指向提供更多应用创意、文档/数据表或软件库的外部网页的链接

*   MPIDE（多平台集成开发环境）[下载](http://www.chipkit.org/forum)

*   [Fubarino 网站](http://fubarino.org/)（包括最新文件、常见问题解答、教程、示例等）
*   [chipKIT 和 MPIDE 论坛](http://www.chipkit.org/forum/index.php)

*   [chipKIT/MPIDE wiki](http://chipkit.org/wiki/index.php?title=Main_Page "Main_Page")

*   [Digilent Inc](http://www.digilentinc.com) chipKIT 板的设计者
*   [PIC32MX440F256H](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en534168) Microchip PIC32 处理器

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>