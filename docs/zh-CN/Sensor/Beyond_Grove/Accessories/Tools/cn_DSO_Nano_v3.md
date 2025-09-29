---
title: DSO Nano v3
nointro:
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/DSO_Nano_v3
last_update:
  date: 02/03/2022
  author: gunengyu
---
<!-- ---
name: DSO Nano v3
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html
oldwikiname:  DSO Nano v3
prodimagename:  Nano_v3.jpg
surveyurl: https://www.research.net/r/DSO_Nano_v3
sku:     109990013
--- -->
![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Nano_v3.jpg)

DSO Nano v3 是一款便携式数字存储示波器。基于 32 位 ARM Cortex-M3 微控制器，它配备了 320*240 彩色显示屏、USB 接口和充电功能。它体积小巧，操作简单；满足学校实验室、电气维修和工程的基本需求。DSO Nano 第 3 版与第 2 版的不同之处在于它不使用白色塑料外壳，而是使用更耐用、更坚固的黑色金属外壳。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)

## 特性

---

* 便携且轻便
* 彩色显示屏
* 波形存储和回放
* 6 种触发模式
* 200KHz 模拟带宽
* 完整的测量标记和信号特性
* 内置信号发生器
* 可选配件
* 开源硬件和固件

## 通用安全规则

---
为了确保您的安全并避免对产品/连接设备的任何损坏，请仔细阅读以下安全规则。为了避免任何可能的危险，请根据规则使用本产品。

* **使用适当的电源线。** 请使用在所在国家/地区认证的专用电源线。
* **正确连接/断开。** 当探头/测试线连接到电源时，请勿插拔。在插拔电流探头之前，请断开被测电路的电源。
* **遵守所有端子额定值。** 为避免火灾/电击，请勿测量 DC100V 或以上的信号，否则设备可能会损坏。请仔细阅读手册以了解连接前相关额定值的详细信息。
* **请勿在潮湿环境中操作。**

* **请勿在易燃/爆炸环境中操作。**

* **请保持产品表面清洁干燥。**

## 规格

---

### 关键规格

<table>
<tr>
<td width="400px">显示屏</td>
<td width="600px">全彩 2.8" TFT LCD 65K 320×240</td>
</tr>
<tr>
<td>模拟带宽</td>
<td>0 - 200KHz</td>
</tr>
<tr>
<td>最大采样率</td>
<td>1Msps 12Bits</td>
</tr>
<tr>
<td>采样存储深度</td>
<td>4096 点</td>
</tr>
<tr>
<td>水平灵敏度</td>
<td>1uS/Div~10S/Div</td>
</tr>
<tr>
<td>水平位置</td>
<td>可调，带指示器</td>
</tr>
<tr>
<td rowspan="2">垂直灵敏度</td>
<td>10mV/Div~10V/Div (使用 ×1 探头)</td>
</tr>
<tr>
<td>0.5V/Div~100V/Div (使用 ×10 探头)</td>
</tr>
<tr>
<td>垂直位置</td>
<td>可调，带指示器</td>
</tr>
<tr>
<td>输入阻抗</td>
<td>&gt;500KΩ</td>
</tr>
<tr>
<td>最大输入电压</td>
<td>40Vpp (使用 ×1 探头)</td>
</tr>
<tr>
<td>耦合</td>
<td>DCs</td>
</tr>
<tr>
<td rowspan="4">触发模式</td>
<td>自动、正常、单次、无、扫描和适配</td>
</tr>
<tr>
<td>上升/下降沿/电平触发</td>
</tr>
<tr>
<td>触发电平可调，带指示器</td>
</tr>
<tr>
<td>触发灵敏度可调，带指示器</td>
</tr>
<tr>
<td rowspan="4">波形功能</td>
<td>自动测量：频率、周期时间、占空比、峰值电压、均方根电压、平均电压和直流电压</td>
</tr>
<tr>
<td>带标记的精确垂直测量</td>
</tr>
<tr>
<td>带标记的精确水平测量</td>
</tr>
<tr>
<td>保持/运行</td>
</tr>
<tr>
<td>信号发生器</td>
<td>10Hz~1MHz 方波</td>
</tr>
<tr>
<td>波形存储</td>
<td>Micro SD 卡</td>
</tr>
<tr>
<td>通过 USB 连接 PC</td>
<td>作为 SD 卡读取器</td>
</tr>
<tr>
<td>升级</td>
<td>USB</td>
</tr>
<tr>
<td>电源</td>
<td>500mAh 3.7V 锂电池 / USB</td>
</tr>
<tr>
<td>尺寸（不含探头）</td>
<td>91mm*62mm*13mm</td>
</tr>
</table>

### 结构

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/DSO_Nano_v3_Structure.jpg)

注意：我的设备（序列号 E1C5A0C1）没有标示的“TF 卡槽”。金属外壳上没有插槽，即使打开外壳，电路板上也没有连接器（甚至没有放置连接器的位置）。

## 使用说明

---

### 基本操作

**左/右按钮**主要用于在菜单项之间导航。选中的菜单项将被高亮显示，其对应的屏幕元素会闪烁。按下**上/下按钮**进行调整。**OK按钮**用于控制显示/隐藏标记或确认操作。

按下**A（运行/停止）按钮**一次将冻结当前显示。再次按下“A”按钮恢复显示。**B（切换）按钮**用于快速功能操作。

在本文中，可调整的项目将标记为<span style={{color: 'red'}}>红色</span>。

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Dsonanov2-user-interface-1.jpg)

### 用户界面概览

屏幕分为中央显示区域和周围的三个操作栏。顶部菜单提供最常用的信号显示调整功能。底部状态栏提供精确的测量结果和监控状态。右侧功能图标列可用于调整更高级的功能。

### 信号缩放

将光标移动到<font color="red">垂直刻度</font>和<font color="red">时间基准</font>以开始探索信号显示。按上下按钮调整电压/格或时间/格。“格”是屏幕上的网格单位“分格”；通过计算分格数量可以快速估算测量值。垂直刻度范围为10mV/格到10V/格。时间基准范围为1uS/格到10S/格。请注意，在较大的时间基准下，显示可能看起来像冻结，因为10S/格意味着刷新整个屏幕（宽12格）需要120秒。

即使在适当的电压/格设置下，波形可能超出显示范围。您可以更改Y位置，将波形上下移动以使其居中显示。<font color="red">Y位置标记</font>指示0V以供参考。

按下A按钮冻结当前显示（将<font color="red">状态</font>设置为HOLD），再次按下恢复刷新（状态为RUN）。在状态为HOLD时，您可以选择<font color="red">T0</font>图标并按上下按钮进行前后平移。按下OK按钮显示或隐藏X位置标记（黄色虚线垂直线）。

### 触发模式

Nano有六种触发模式，可在屏幕左上角访问。这些模式包括：

**AUTO**：始终刷新显示，并在触发时同步。
**NORM（正常）**：在触发时显示同步波形，未触发时为空白。
**SING（单次）**：显示触发波形并保持，然后在再次触发前为空白。
**SCAN**：重复从左到右扫描波形。
**NONE**：刷新未同步波形，忽略触发。
**FIT**：自动调整垂直和水平刻度以显示波形。

<table>
<caption>触发模式比较表</caption>
<tr>
<th>模式</th>
<th>触发</th>
<th>显示波形</th>
<th>同步</th>
<th>示例应用</th>
</tr>
<tr>
<td width="150px">AUTO</td>
<td width="150px">是</td>
<td width="200px">始终</td>
<td width="200px">是</td>
<td width="300px">通用用途</td>
</tr>
<tr>
<td>NORM</td>
<td>是</td>
<td>触发</td>
<td>是</td>
<td>仅观察周期性信号</td>
</tr>
<tr>
<td>SING</td>
<td>是</td>
<td>触发</td>
<td>自动保持</td>
<td>捕获随机脉冲</td>
</tr>
<tr>
<td>SCAN</td>
<td>否</td>
<td>始终</td>
<td>否</td>
<td>持续监测信号</td>
</tr>
<tr>
<td>NONE</td>
<td>否</td>
<td>始终</td>
<td>否</td>
<td>观察未同步波形</td>
</tr>
<tr>
<td>FIT</td>
<td>是</td>
<td>自动调整</td>
<td>是</td>
<td>轻松观察周期性信号</td>
</tr>
</table>

要设置触发电平，将光标移动到<font color="red">Vt = ??.?mV</font>并按上下按钮。按OK按钮显示或隐藏触发电平标记（水平绿色虚线）。为了微调触发，您可以调整触发灵敏度范围<font color="red">TR</font>和<font color="red">触发类型</font>。默认情况下，触发类型设置为<font color="red">上升S</font>，这意味着当信号从较低触发线穿过较高触发线时触发。<font color="red">下降S</font>同样会在信号边缘下降时触发。

这可以防止由于噪声引起的错误触发，特别是在测量快速低幅信号时。如果将灵敏度设置为0，使两个触发电平标记重叠，则会得到电平触发。请参考[维基百科关于示波器触发的更多信息](https://en.wikipedia.org/wiki/Oscilloscope#Triggered_sweeps)。

### 测量

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Dsonanov2measurement.jpg)

自动测量对于快速探索信号特性非常有用。测量选项包括频率、周期时间、占空比、峰值电压、RMS电压、平均电压和直流电压。请注意，频率、周期时间和占空比只能在触发时测量。

为了获得更精确的测量，请使用测量标记。T2和T1控制时间标记，即两条垂直虚线。两个标记位置之间的精确时间差显示在屏幕底部的“时间测量”中。V1标记和V2标记可以直接从屏幕底部中心的“电压测量”结果面板（“V1-V2=? V”）中调整。

在菜单项中按下OK按钮将隐藏或显示对应的屏幕线。

### 波形存储

波形可以保存到micro SD卡或加载到显示屏。您需要一个micro SD卡（未包含）来完成此操作。请注意，目前不支持SDHC卡（大于2GB的高速卡）。按照以下步骤设置您的micro SD卡：

1. 确保您的SD卡支持SPI模式。（最大内存：2G）
2. 使用FAT16文件系统格式化您的SD卡。

当 microSD 卡准备好后，**FS**（文件保存）、**FL**（文件加载）和 **SI**（图像保存）图标将被启用。按下 **FS** 上的 OK 按钮可以保存波形，或者按下 **FL** 可以从 microSD 卡加载波形。此外，您还可以选择 **SI** 以 PNG 格式保存示波图。

### 信号发生器

位于 mini USB 端口下方的 3.5mm 音频插孔用于信号发生器。它输出频率范围为 10Hz 至 1MHz 的方波。频率可以通过 Fo（“频率输出”）进行调整。峰值电压与供电电压相同，如果使用电池供电则约为 3.7V，使用 USB 供电时为 5V。

### 电源供应

DSO Nano 可以通过内部 500mAh 的 LiPo 电池或外部 mini-USB 端口供电。充电大约需要 2 小时 20 分钟，充至 4.12V。全新的设备使用电池供电时只能运行约 1 小时，但在 LiPo 电池完全充电后，电池寿命将会延长。

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Dsonanov2-charging.JPG)

### 固件升级

要升级固件，请执行以下步骤：

1. 下载最新的适用固件到您的电脑。

2. 同时按下 **"Down Key"** 并打开电源，进入 DFU 固件升级模式。
3. 使用 USB 数据线将 DSO Nano v3 连接到您的电脑，您的电脑上会出现一个名为 DFU V3_11_A 的可移动磁盘。将 hex 固件复制到磁盘的根目录。当固件的扩展名从 “hex” 变为 “rdy” 后，重新启动 DSO Nano v3，即完成固件升级。

**注意**：如果有多个 hex 文件（例如 BenF 固件），您必须一次复制一个文件，并等待其变为 "RDY" 后再复制下一个文件。因此，如果您有 file1.hex 和 file2.hex，则流程如下：

1. 复制 file1.hex

2. 等待 file1.rdy

3. 复制 file2.hex

4. 等待 file2.rdy

在 Windows 系统中，您会发现每次复制 hex 文件后，“驱动器”会消失，然后重新出现带有 rdy 文件。

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/DSO_Nano_v3_Firmware_Upgrades1.png)

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/DSO_Nano_v3_Firmware_Upgrades2.png)

## 常见问题

---

* DSO Nano v3 的硬件版本和固件版本是什么？

  DSO Nano v3 的硬件版本为 v2.6，固件版本为 app v2.6，您可以在资源中找到相关信息。

* DSO Nano v2 和 v3 的主要区别是什么？

  实际上，它们具有相同的硬件和固件，也使用相同版本的 DFU 来升级固件。因此，主要区别在于外壳，DSO Nano v3 使用黑色金属外壳，而 DSO Nano v2 使用白色塑料外壳。

## 资源

---

* [DSO_Nano_V3_User_Manual v4.22.pdf](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DS201V_4.22%20User%20Manual%EF%BC%88Increase%20the%20alignment%20and%20hidden%20reference%20line%EF%BC%89.pdf)
* [DSO Nano 官方固件 V4.32](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DS201.V4.32.zip)
* [DSO Nano 官方固件 App2.6](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_2.6_firmware.zip)

* [BenF 固件 v3.64](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/BenF364_LIB353.zip) 感谢 **BenF** 分享这个优秀的固件，以及 **Alf** 将其调整为适配 DFU Ver3.22。请注意，BenF 固件 v3.64 **无法保存**到 V3 的内部存储。如果您的 V3 没有外部卡槽，则无法保存图像或数据。

* [DSO Nano 硬件 v2.6 布局.pdf](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_V2.6_VCT_PCB_Layout.pdf)

* [DSO Nano 硬件 v2.6 原理图.pdf](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_V2.6_VCT_Schematic.pdf)

* [DSO_Nano_V3_User_Manual.pdf](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_V3_User_Manual.pdf)

### DFU Hex/Binaries

当您的 DSO 出现故障时可以使用。

* [DFU_D329_VB_2M_SEEED_for_nano_v3.hex.zip](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DFU_D329_VB_2M_SEEED_for_nano_v3.hex.zip)

* [DFU_A322_for_nano_v3.hex.zip](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DFU_A322_for_nano_v3.hex.zip)

* [Bootloader_for_nano_v2.bin.zip](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/Bootloader_for_nano_v2.bin.zip)

* [DFU_D326_SD_MINI_for_hw1.7.hex.zip](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DFU_D326_SD_MINI_for_hw1.7.hex.zip)

## 外部链接

* [DSO Nano 在 SeeedStudio 论坛](https://forum.seeedstudio.com/viewforum.php?f=22)

* [Pocket Oscilloscope-DS0201 论坛](http://www.minidso.com/bbs/thread.php?fid=6)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>