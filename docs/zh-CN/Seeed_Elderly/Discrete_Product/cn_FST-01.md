---
description: FST-01
title: FST-01
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/FST-01
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01_board.jpg)

FST-01 是一款微型 USB 32 位计算机。实际上，FST-01 是一个缩写，其全称是 "Flying Stone Tiny ZERO-ONE"。

它由位于日本群马县前桥市的 Flying Stone Technology 公司设计。

其设计理念是“极简设计”。它采用自由（即自由度）硬件设计。预期的应用包括 Gnuk（用于 GnuPG 的加密令牌）和 NeuG（基于 ADC 噪声的真正随机数生成器）。这些应用程序都是自由软件。

Flying Stone Technology 是“Gnuk”的第二来源制造商，而“Gnuk”由日本自由软件倡议组织（Free Software Initiative of Japan）拥有版权。

对于那些需要丰富功能的人，请考虑 [Maple Mini](https://www.seeedstudio.com/depot/maple-mini-p-861.html)。

```
                        SWD 端口
                        (GND, SWD-CLK, SWD-IO)
    电源端口 +---------------------+
           Vdd |[]           []()() -------+
           GND |[]                  |      |
               |()() I/O 端口       | USB  |
               |      (PA2, PA3)    |      |
               |                    -------+
               +---------------------+
```

请使用 [FST-01 问答网站](http://no-passwd.net/askbot/questions/) 提出您的问题。

|无外壳的 FST-01|带热缩管的 FST-01|带外壳的 FST-01 (P1A-120704U)|
|---|---|---|
|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-without-enclosure-p-1276.html)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-with-heat-shrink-tube-p-1277.html)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-with-white-enclosure-p-1279.html)|

它也可以通过 Flying Stone Technology（飞石技术）以个人对个人的方式购买。请参阅 gniibe.org 网站上的 [购买 FST-01！](http://www.gniibe.org/shop/buy-fst-01) 页面（日文）。

## 应用
---
如上文所述，我们计划在 FST-01 上运行 [Gnuk](http://www.fsij.org/gnuk/)。它是受 **GPLv3** 许可分发的版权软件。

![](https://files.seeedstudio.com/wiki/FST-01/img/Gnuk-sticker.png)

Gnuk 是一个用于 GnuPG 的加密令牌实现，它运行在 STM32F103 上。源代码可在 http://www.gniibe.org/ (https://git.gniibe.org/cgit/chopstx/ttxs.git/) 获取。

有关 Gnuk 的更多信息，请访问：[Gnuk 官方文档](http://www.fsij.org/doc-gnuk/)。

此外，我们计划在 FST-01 上运行 NeuG。

![](https://files.seeedstudio.com/wiki/FST-01/img/NeuG.png)

[NeuG](http://www.gniibe.org/memo/development/gnuk/rng/neug) 是基于 ADC 量化误差的真正随机数生成器实现。

请注意，FST-01 上只能安装一个应用程序（Gnuk 或 NeuG）。

### 开发环境

对于 Gnuk 1.0.1，我们使用 [GCC ARM Embedded 4.6-2012-q2](https://launchpad.net/gcc-arm-embedded/+milestone/4.6-2012-q2-update)。

### FST-01 的第一批产品

在此产品中，包含受版权保护的软件 Gnuk 版本 1.0.1，该软件根据 **GPLv3** 许可授权。本 WiKi 中包含该许可的副本，请参阅 **GPLv3**。
您可以在产品最后一次发货后三年内获得完整的对应源代码，最早不会早于 2016-01-01。源代码可在制造商网站 http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git 获取，我们为产品版本标记了 "release/1.0.1" 标签。

请注意，FST-01 第一批产品中的 Gnuk 二进制文件是使用 GCC ARM Embedded 4.6-2012-q2 编译器的 "-O3 -Os" 选项编译的。

### Gnuk/NeuG 的邮件列表

我们有一个 Gnuk/NeuG 的邮件列表：[https://lists.alioth.debian.org/mailman/listinfo/gnuk-users](https://lists.alioth.debian.org/mailman/listinfo/gnuk-users)

除了 git.gniibe.org，源代码库还可以在以下地址获取：[https://anonscm.debian.org/cgit/gnuk/](https://anonscm.debian.org/cgit/gnuk/)

## 写入 MCU 的 Flash ROM
---
我们使用 SWD 接口来写入 MCU 的 Flash ROM。由于 SWD 是一种较新的技术，目前尚未积累丰富的硬件和软件经验。

我们选择了 ST-Link/V2 作为廉价的 SWD 调试器，并用 Python 编写了自己的工具 stlinkv2.py。该工具 stlinkv2.py 随 Gnuk 一起分发。有关 ST-Link/V2 和 FST-01 的连接，请参阅[这篇文章](http://www.gniibe.org/memo/development/fst-01/dongle/fst-01-swd-connection)。

即将发布的 OpenOCD 0.6.0 将支持 ST-Link/V2 和 SWD。届时您也可以使用它。


### 描述

FST-01 是一个最小化的 STM32F103 板，适合运行以计算为导向的应用程序，例如 Gnuk。
- 尺寸：1.62 x 0.52 英寸（包括 USB 插头）
- USB 总线供电
- MCU：32 位 ARM Cortex M3，72MHz（STM32F103TBU6），Flash ROM：128KB，RAM：20KB
- SPI Flash 内存：4MB
- SWD 接口，两个 I/O 引脚
- MCU 的 Flash ROM 内容：作为测试计划的副产品，FST-01 的 MCU Flash ROM 上预装了 Gnuk 版本 1.0.1，并且受保护。在写入 Flash ROM 之前，您需要禁用保护。

请访问此页面了解详情。

**没有外壳的 FST-01**

这是一个裸板，适用于评估、开发或那些希望使用自己外壳的人。

您可以访问 SWD 接口并更改 Flash ROM 的内容。

**带热缩管的 FST-01**

该板被透明热缩管覆盖。因此无法访问 SWD 接口。
这可以作为 Gnuk Token 的日常使用。

**带外壳的 FST-01 (P1A-120704U)**

该板配有外壳。请注意，用户需要将板安装到外壳中。
如果透明热缩管不符合您的审美，或者您希望更改 MCU 的 Flash ROM 内容，这可能是更好的选择。
虽然 FST-01 PCB 是按照 P1A-120704U 规格建议设计的，但外壳可能稍大一些，您可能需要一点胶水来使板和外壳贴合。否则，板可能会稍微移动（< 1mm 左右）。


## 历史
---
*   2011-08-06: [创意](http://www.gniibe.org/memo/development/fst-01/fst-01-idea)

*   2011-08-08: 初次提交到 [FST-01 Git 仓库](http://www.gniibe.org/gitweb?p=fst-01.git)

*   2011-08-23: 为原型 PCB 下单 Fusion PCB：#33163

*   2011-08-26: [FST-01 的愿望](https://www.seeedstudio.com/wish/?p=783)

*   2011-09-06: 为原型 PCB 下单 Fusion PCB：#34012

*   2011-09-13: 为原型 PCB 下单 Fusion PCB：#34217

*   2011-09-30: 为原型 PCB 下单 Fusion PCB：#35421

*   2011-10-27: 为原型 PCB 下单 Fusion PCB：#37126

*   2011-11-14: 发布 FST-01 PCB 设计版本 1.0

*   2012-07-10: 提交到 Propagete

*   2012-08-??: 下单生产

*   2012-09-27: 第一批生产完成

    *   第一批中，XTAL 更换为具有 20pF 负载电容的型号。（由于零件的可用性。）

        *   第一批中，MCU 的 Flash ROM 内容为 Gnuk 1.0.1，并且受保护。

*   2012-10-08: 在 Seeed Bazaar 开始销售

*   2015-04-01: 在 FSF Shop 开始销售，预装 NeuG：[http://shop.fsf.org/product/usb/](http://shop.fsf.org/product/usb/)

## 自由（如自由）板设计

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-schematic.png)

Fst-01-schematic.png

该板设计以 [KiCAD](http://www.kicad-pcb.org/) 格式提供。请访问 http://git.gniibe.org/gitweb?p=gnuk/fst-01.git。

原理图设计采用 Creative Commons Attribution 3.0 Unported License (CC BY 3.0) 分发。

PCB 设计采用 Creative Commons Attribution-ShareAlike 3.0 Unported License (CC BY-SA 3.0) 分发。

## FST-01 的物料清单 (BOM)
---
<table cellspacing="0">
<caption>FST-01 的物料清单 (BoM)</caption>
<tr>
<th>部件编号</th>
<th>名称</th>
<th>详情</th>
<th>封装</th>
<th>制造商</th>
<th>分销商</th>
<th>分销商参考</th>
</tr>
<tr>
<td>C1</td>
<td>电容</td>
<td>27pF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C2</td>
<td>电容</td>
<td>27pF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C3</td>
<td>电容</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C4</td>
<td>电容</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C5</td>
<td>电容</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C6</td>
<td>电容</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C7</td>
<td>电容</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C8</td>
<td>电容</td>
<td>4.7uF</td>
<td>C0603</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C9</td>
<td>电容</td>
<td>0.01uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C10</td>
<td>电容</td>
<td>4.7uF</td>
<td>C0603</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C11</td>
<td>电容</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>R1</td>
<td>电阻</td>
<td>510R</td>
<td>R0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>D1</td>
<td>LED</td>
<td>蓝色</td>
<td>LED0603</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>J1</td>
<td>连接器</td>
<td>USB 2.0, 1002-015-01001</td>
<td>USB 插头 A 型</td>
<td>CNC Tech</td>
<td>Digikey</td>
<td>1175-1020-ND</td>
</tr>
<tr>
<td>U1</td>
<td>MCU</td>
<td>STM32F103TBU6</td>
<td>QFN36</td>
<td>STMicroelectronics</td>
<td>AVNET</td>
<td>STM32F103TBU6</td>
</tr>
<tr>
<td>U2</td>
<td>LDO 电压调节器</td>
<td>CAT6217-330TDGT3 +3.3V</td>
<td>TSOT23-5</td>
<td>ON Semiconductor</td>
<td>Mouser</td>
<td>698-CAT6217330TD-G</td>
</tr>
<tr>
<td>U3</td>
<td>USB 终端器</td>
<td>NUF2221W1</td>
<td>SOT363</td>
<td>ON Semiconductor</td>
<td>Digikey</td>
<td>NUF2221W1T2GOSTR-ND</td>
</tr>
<tr>
<td>U4</td>
<td>SPI 闪存</td>
<td>SST25VF032B-80-4I-QAE-T</td>
<td>WSON8</td>
<td>Silicon Storage Technology</td>
<td>Digikey</td>
<td>SST25VF032B-80-4I-QAE-T-ND</td>
</tr>
<tr>
<td>X1</td>
<td>晶振</td>
<td>ABM8G-12.000MHZ-18-D2Y-T</td>
<td>3.2mmx2.5mm</td>
<td>Abracon Corporation</td>
<td>Digikey</td>
<td>535-10261-2-ND</td>
</tr>
<tr>
<td></td>
<td>外壳</td>
<td>P1A-120704U 白色</td>
<td>1.2 x .71 x .40 英寸</td>
<td>New Age Enclosures</td>
<td></td>
<td></td>
</tr>
</table>

## FST-01 的组件
---
* STM32F103TB
* SPI 闪存 (32Mbit)
* USB 终端器
* LDO 调节器 (3.3V)
* 12MHz XTAL C<sub>L</sub>=18pF

* LED
* GND/SWDIO/SWDCLK 的 SWD 端口
* VDD/GND/Port0/Port1 的扩展端口
* USB 插头 A 型

**<big>STM32F103TB</big>**

MCU 是由 STMicroelectronics 基于 Cortex-M3 的 ARM 微控制器。运行频率为 72MHz，拥有 128KB 的闪存 ROM 和 20KB 的 RAM。

**<big>SPI 闪存</big>**

机密数据应存储在 MCU 的闪存中，但非机密数据（如公钥环的备份）可以存储在 SPI 闪存中。

我们使用 SST25VF032B（32Mbit = 4MB）。

**<big>USB 终端器</big>**

我们使用 NUF2221W1 USB 上游终端器。

这是因为它具有静电放电保护功能。与两个电容和两个电阻相比，它的占用空间更小。

**<big>LDO 调节器</big>**

我们使用 CAT6217-330 作为 3.3V 调节器（从 5V 转换）。150mA 的电流足够使用。

**<big>XTAL 12MHz C<sub>L</sub>=18pF</big>**

我们使用 12MHz XTAL C<sub>L</sub>=18pF。

这是因为我们可以找到占用空间更小的 12MHz XTAL（相比 8MHz）。

**<big>LED</big>**

我们使用 LED 来显示状态。

**<big>SWD 端口</big>**

SWD 端口用于将固件安装到 MCU 的闪存 ROM 中。

**<big>VDD/GND/Port0/Port1 的扩展端口</big>**

我们决定使用两个 I/O 引脚。（一个 I/O 引脚对于极简设计来说仍然不够。）

使用两个 I/O 引脚，可以实现：

* 串行通信的 TX 和 RX
* 触摸传感器的驱动和输入
* 控制其他 MCU 的 SWD 端口

**<big>USB 插头 A 型</big>**

FST-01 的使用方式是直接连接到 USB 端口，就像 USB 闪存驱动器一样。

## 电路和元件可能的更改
---
**<big>LDO 稳压器</big>**

MCP1700T-330 可以作为替代品（电气特性似乎较差，但适用于更高电流的情况）。在这种情况下，我们需要稍微修改电路。

**<big>晶体振荡器（XTAL）</big>**

可以直接将 XTAL 替换为 12MHz XTAL，C<sub>L</sub>=20pF。  
此更改在设计的容限范围内。

如果从一开始就进行更换，最好同时将 C1 和 C2 替换为 33pF。

请参阅 [维基百科关于负载电容的解释](https://en.wikipedia.org/wiki/Pierce_oscillator#Load_capacitance)。

**<big>屏蔽地与信号地</big>**

FST-01 设计为直接插入 USB 端口使用。  
如果不是直接使用，而是通过延长线连接，最好通过电阻（如果需要，也可以加电容）将屏蔽地和信号地连接起来。

参考链接：  
[http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield](http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield)

**<big>USB_EN</big>**

USB_EN 并非必需，但 NUF2221W1 的第 5 引脚可以直接连接到 3.3V（Vdd）。

在许多使用 STM32F103 的电路板设计中，我们可以看到类似的连接方式，但由于可以通过软件控制 USB D+ 为 0V，因此 USB_EN 并不需要。

**<big>默认无 SPI 闪存</big>**

闪存的容量有些过小，实用性不高，因此可以作为特殊用户的选项，默认情况下不安装芯片也可以。

## PCB 图片
---
PCB 图片由 [prettygerbv](http://projects.qi-hardware.com/index.php/p/eda-tools/source/tree/master/fab/prettygerbv) 生成。

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-front.png)

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-back.png)

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-conn.png)

## FST-01 工程原型
---

![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01-Prototype-PCB.jpg)

FST-01-Prototype-PCB.jpg

感谢 Fusion PCB 服务，我们制作了 FST-01 工程原型的 PCB。

![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01-prototype.jpg)

PCB 组装由 **User:Gniibe** 手工完成。详情请参阅 [我的文章](http://www.gniibe.org/memo/development/fst-01/qfn-diy-soldering)。

## 测试计划概要
---
1. 检查 MCU ID
2. 写入 MCU 的闪存 ROM
3. 检查 LED 闪烁
4. 检查 SPI 闪存 ROM 访问
5. 运行使用 USB 的应用程序并检查是否正常工作（Hub 分配地址）
    1. 上电（或复位）时，LED 发光。
    2. FST-01 应用程序等待 USB Hub 分配 USB 地址。（Hub 检测设备并分配地址需要几秒钟。）
    3. USB 地址分配完成后，FST-01 应用程序进入循环：
        * 等待 5 秒
        * 闪烁 LED（发光 25ms，熄灭 200ms）。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>