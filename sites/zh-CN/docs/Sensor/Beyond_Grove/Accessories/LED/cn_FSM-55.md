---
title: FSM-55
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/FSM-55/
slug: /cn/FSM-55
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/FSM-55/img/FSM-55_board.jpg)

FSM-55 (Flying Stone Mini 55) 是一个用于操作 5x5 LED 矩阵显示的小型开发板。它的名字来源于其 LED 矩阵。

###   发音

请读作 F-S-M "Go" "Go"，因为 "Go" 在日语中是数字 5 的发音。

##   通过可复现产品实现您的计算自由

###   硬件设计

硬件设计作为自由硬件设计提供。它是使用 KiCAD 设计的。
其原理图设计的许可证为 CC-BY 3.0 Unported，PCB 设计的许可证为 CC-BY-SA 3.0 Unported。
（这应该在其 README 中描述，我会尽快添加。）

当您为自己使用 PCB 设计时，请根据自己的需求进行修改。请不要在您的 PCB 上包含 Flying Stone Technology 的标志。

*   http://git.gniibe.org/gitweb/?p=fsm-55.git

###   固件

固件作为自由软件提供，遵循 GPLv3+ 许可证。

*   http://git.gniibe.org/gitweb/?p=chopstx/chopstx.git;h=refs/heads/cortex-m0-support
<pre>$ git clone --branch cortex-m0-support git://git.gniibe.org/chopstx/chopstx.git</pre>

主程序位于：example-fsm-55 目录下。

哦，对了。我为固件使用了自己的线程库，并将其移植到 Cortex-M0。

###   工具

如果您在 PC 上使用 Windows，供应商工具在 CLI 模式下运行良好。据报告，GUI 版本运行效果不佳。

在自由操作系统上，也许较新的 OpenOCD 可以工作，但对我来说并不适用（截至 Debian 的 0.8 版本）。

我使用了自己的工具，该工具最初是为 Gnuk 项目（针对 FST-01）开发的。

我需要修改工具（stlinkv2.py），以使其能够与 Cortex-M0 MCU 一起工作。

*   http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git;h=refs/heads/stlink-m0-support
<pre>$ git clone --branch stlink-m0-support git://git.gniibe.org/gnuk/gnuk.git</pre>

该工具最初是为 FST-01 开发的。并且其中有一些特定于 FST-01 的功能，例如 SPI 闪存检查。对于 FSM-55，您需要使用 -i 选项（禁止 SPI 闪存检查）来调用它。

`
`

<pre>$ stlinkv2.py -i ...</pre>

##   原因：自由工具对我们非常重要！

开发此板的主要原因之一是 FreeRouting.Net 的关闭。
虽然我（gniibe）没有使用该服务，但这是一个令人遗憾的事件。我希望让更多人注意到使用自由（即自由软件）工具进行 PCB 设计以及当前的情况。

*   FreeRouting.Net: [http://freerouting.net/](http://freerouting.net/)

开发此板的另一个原因是我（gniibe）发现 OpenOCD 的 SWD 支持正在逐步改善，但尚未完美。我希望通过自己努力，创造更多机会来改善 OpenOCD 和 SWD 工具的相关情况。

*   OpenOCD 即将发布的 0.9.0: [http://openocd.sourceforge.net/](http://openocd.sourceforge.net/)

##   Seeed Bazaar 上的可用产品

*   [FSM-55 LED 矩阵显示套件](https://www.seeedstudio.com/depot/FSM55-LED-Matrix-Display-p-2121.html)（2014 年 10 月）

*   <s>[SWD 编程器（ST-Link/V2 克隆版）](https://www.seeedstudio.com/depot/STLink-V2-for-STM8-STM32-interface-programmer-p-2297.html)</s>（2015 年 3 月）

*   **注意**：我不确定 ST-Link/V2 克隆版是否适用于 FSM-55。FSM-55 需要 NRST 引脚连接到编程器。如果克隆版的第 9 号引脚可以作为 NRST 使用，那就可以。但似乎原版 ST-Link/V2 中的 NRST 引脚和 SWIM_RST 是不同的。

*   **注意**：我拿到了 ST-Link/V2 克隆版，但找不到使用它的方法。我们需要弄清楚如何为 FSM-55 的 NRST 断言 SWIM_RST 的第 9 号引脚。2015-05-28

*   **注意**：ST-Link/V2 的固件本身是专有软件。理想情况下，它也应该是自由软件。但目前硬件开发的情况就是这样。BusPirate 或 Versaloon 可以替代使用，但它们在 SWD 上的稳定性尚不足够。

## 链接

### FSM-55 原型电影

*   [https://www.youtube.com/watch?v=7L2qUNF0v2U](https://www.youtube.com/watch?v=7L2qUNF0v2U)

*   [https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK](https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK)

*   [https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr](https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr)

### FSM-55 开发者的文章

*   FSM-55 开发者的文章: [http://www.gniibe.org/tag/fsm-55.html](http://www.gniibe.org/tag/fsm-55.html)

### 哲学

*   Graham Seaman，2001年5月，“自由硬件设计 - 过去、现在、未来”：[https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html](https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html)

*   自由软件和自由硬件设计：[https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html](https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html)

*   1998年的开放硬件定义：[https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html](https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html)

*   定义：[https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html](https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html)

*   Benjamin Mako Hill，2010年6月，“自由软件需要自由工具”：[http://mako.cc/writing/hill-free_tools.html](http://mako.cc/writing/hill-free_tools.html)

### OSHW（FSM-55 开发者认为不够）

*   开源硬件：[http://freedomdefined.org/OSHW](http://freedomdefined.org/OSHW)

*   [http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions](http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions)

### 开放设计

*   开放设计：[https://en.wikipedia.org/wiki/Open_design](https://en.wikipedia.org/wiki/Open_design)

### GCC

*   GCC ARM Embedded：[https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>