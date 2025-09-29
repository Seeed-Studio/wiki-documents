---
title: SDLogger - 开源硬件数据记录器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/SDLogger-Open_Hardware_Data_Logger/
slug: /cn/SDLogger-Open_Hardware_Data_Logger
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](http://bz.seeedstudio.com/depot/images/product/sdlogger1.jpg)

SDLogger 是一个基于 [SparkFun](http://www.sparkfun.com/) / [Nathan Seidle 的 OpenLog](https://github.com/sparkfun/OpenLog/wiki/) 的简单串口数据记录器。它使用 ATmega644P 处理器，运行频率为 14.7456MHz，并记录到全尺寸 SD 卡。它支持标准 SD 卡（FAT16）和 SDHC 卡（FAT32）。SDLogger 配备了 OpenLog 固件 1.61（支持 SDHC/FAT32 和大容量 2048 字符输入缓冲区），同时安装了 Arduino 兼容的引导加载程序，方便程序更新。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/sdlogger-open-hardware-data-logger-p-723.html?cPath=132_136)


##   特性

*   配置简单，使用方便

*   自动记录串口输入端口接收到的数据

*   可通过 SD 卡上的配置文件进行配置

*   支持 2400、4800、9600、19200、38400、57600、115200 和 230400 串口波特率，8-N-1 格式

*   支持最大 2GB 的标准 SD 卡（FAT16）和最大 16GB 的 SDHC 卡（FAT32）

*   大容量输入缓冲区（2048 字符）

*   全尺寸 SD 卡外形

*   14.7456 MHz 晶体振荡器，用于精确的波特率生成

*   输入电压范围：3.3 至 12V

*   安装了 Arduino 兼容的引导加载程序，方便程序更新

*   完整支持 Arduino 环境 - 可作为低成本 Arduino 开发板使用

*   在 Arduino 环境中支持的 I/O 端口（除主串口外）：4 个模拟输入、第二串口、I2C 端口

*   使用 Arduino 环境简单恢复 SDLogger 原始固件的过程

*   SDLogger 硬件/固件由 Saanlima/Magnus Karlsson 设计，并根据 CC BY-SA v3 许可发布

*   设计文件、Arduino 代码和其他移植代码可在 [GitHub](http://github.com/magnuskarlsson/SDLogger) 上获取

##   资源

1.  SDLogger Wiki 页面

1.  *   [基本操作](https://github.com/magnuskarlsson/SDLogger/wiki/Basic-operation)

1.  *   [SDLogger FTDI 电缆使用指南](https://github.com/magnuskarlsson/SDLogger/wiki/FTDI-cable-Howto)

1.  *   [SDLogger 作为 Arduino 开发板使用指南](https://github.com/magnuskarlsson/SDLogger/wiki/Arduino-howto)

1.  *   [如何使用 Arduino 环境恢复原始固件](https://github.com/magnuskarlsson/SDLogger/wiki/SDLogger-firmware-restore)

1.  OpenLog Wiki 页面（其中许多信息也适用于 SDLogger）

1.  *   [OpenLog 数据表 Wiki 链接](https://github.com/sparkfun/OpenLog/wiki/datasheet)

1.  *   [OpenLog 固件命令集 Wiki 链接](https://github.com/sparkfun/OpenLog/wiki/command-set)


###   致谢

1.  FAT16/FAT32 固件最初由 Roland Riegel 设计，并根据 GPL v2 发布。

2.  OpenLog 硬件和固件由 [SparkFun](http://www.sparkfun.com/) / Nathan Seidle 的 OpenLog 开发，并根据 CC-SA v3 许可发布。

3.  Arduino SdFat 库由 Bill Greiman 编写，并根据 GPL v3 发布。

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>