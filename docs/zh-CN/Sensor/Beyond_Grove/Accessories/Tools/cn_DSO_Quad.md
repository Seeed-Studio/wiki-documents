---
title: DSO Quad
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/DSO_Quad/
slug: /cn/DSO_Quad
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad，也被称为DSO203，是一款口袋大小的四通道数字示波器，适用于常见的电子工程任务。它基于ARM Cortex M3（STM32F103VCT6），提供72MS/s的采样率，集成了FPGA和高速ADC。内部2MB的USB磁盘可用于存储波形捕获、用户应用程序以及升级固件。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

## 特性

---

* 口袋大小，重量轻
* 两个36MS/s模拟通道，配置为单通道时最高可达72MS/s。**（从.sys版本v1.31升级为两个72MS/s模拟通道，配置为单通道时最高可达144MS/s）**
* 两个数字通道
* 信号发生器
* 多种触发选项
* 简易波形存储
* 固件升级
* 用户应用程序
* 开源

**来源：** [功能支持](http://www.downloadranking.com/privacypolicy.php)

## 应用创意

---

### 用户应用程序

正在进行的项目：

* 使用FFT、频谱图和各种修复的GCC移植 [由 pmos69 和 marcosin 开发](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

* 替代用户界面 [由 gabonator1 开发](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

* 默认固件的GCC移植 [由 tmbinc 开发](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

* 频率响应绘图工具 [由 jpa 开发](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

* FFT示例应用程序 [由 gabonator1 开发](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

* 逻辑分析仪 [由 jpa 开发](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

* Pawn编程环境和各种应用程序 [由 jpa 开发](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

* SYS移植到GCC: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

* 俄罗斯方块 [由 LinX 开发](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

<big>创意收集</big>

**应用程序**

* “简单模式” - 仅提供最基本的功能，帮助没有经验的人使用。
* ["万用表模式" - 基本万用表功能（AC/DC电压表、峰值/均方根/差值功能会很不错）](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)

  * 详细信息见 [https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)
* 协议分析/数据捕获 - 串行、I2C、SPI、CAN
* LCR（微亨、微法和电阻）测量能力 - 内置信号发生器使其成为自然选择。存在三种方法，均需要外部组件 [示例](http://www.edn.com/design/test-and-measurement/4363759/Circuit-measures-capacitance-or-inductance)
* 半导体分析仪 - 使用DAC测试和绘制二极管/晶体管的电压响应（并简单识别组件，例如晶体管引脚排列和极性）
* 射频频谱分析仪
* 一个二维X-Y模式，将模拟通道相互绘制在两个轴上，数字通道可选作为“光束”启用/禁用。
  * [某些东西](https://forum.seeedstudio.com/)似乎存在？尚未在APP2.50中。

* DMX解码器/分析仪和发生器（与外部RS485 IC结合使用）将使其成为剧院技术人员非常有用的小工具。

* 电视模式（模拟电视）：显示帧/场/行（选择场A/B）或行号。显示矢量示波图。显示内容（即电视图像）。

* 与第二个DSO Quad同步，用于四通道模拟/数字信号，可能类似于USBscope50 [从硬件部分移出]

使用“波形输出”在主设备触发时生成脉冲/阶跃，使用C/D作为从设备的触发器

* 创建USB远程控制软件，以便如果LCD损坏，仍然可以通过PC软件使用它。[从硬件部分移出]
* 数据流传输到PC - 使用PC作为存储缓冲区，提供额外的处理能力。PC可以解码I2C字和其他协议，而Quad无法做到。[从硬件部分移出]

* 白噪声功能 - 添加到函数发生器功能中

**增强功能**

* 一个频率/时间视角的频谱分析仪
* 快速傅里叶变换（FFT），便于查看单个信号的频谱数据。

**硬件/设备相关**

* SDR（软件定义无线电），注意我们只有USB全速（12Mb/s）

* 非常需要10倍前置放大器！
* 添加边框按钮以便更容易访问菜单。
* 添加两个模拟通道，可能通过USB扩展设备实现。

* 添加扩展设备端口，使附加设备可以提供更多功能，例如射频生成或能够产生更大幅度的函数发生器。特别是+5V和3.3V输出会很有用。

**其他**

* 为技术支持人员提供服务应用程序。可以分屏显示指令，例如“检查端口3，针脚5是否有信号，如果没有，可能是xyz损坏”。可以有一个下一步按钮，每一步都会选择正确的时间尺度、触发值等。
* 我的手机是基于ARM的，也许可以制作一个USB版本，并开发一个手机应用程序，使我的手机成为显示屏/触摸屏显示器。
* 在两个模拟通道和生成信号上进行简单的数学运算。

* 两个完全隔离的输入可以测量非同一地参考的输入。（例如Velleman两通道个人示波器）
* 输入过电压保护二极管应添加，以保护设备免受高压尖峰的损害。

* 过采样及其软件实现可以减少噪声，并增加有效位深度。
* 特殊技术等效时间采样，可以增加重复信号的带宽。

* 非存储模式：不断扫描可见区域，而不是存储到一个巨大的离屏缓冲区中。我在当前版本中将采样率设置为50ms（例如，用于观察音频信号），它每隔几秒才更新屏幕一次，应该是连续更新。

* _请添加更多想法..._

另请参阅有关 DSO Quad 应用开发的信息。

## 规格

---
<table >
<tr>
<td> 模拟通道 *2 </td>
<td> [CH_A] [CH_B] </td>
</tr>
<tr>
<td> 数字通道 *2 </td>
<td> [CH_C] [CH_D] </td>
</tr>
<tr>
<td> 垂直刻度 </td>
<td> 20mV-10V/div（1-2-5步进）使用 x1 探头 / 200mV-100V/div（1-2-5步进）使用 x10 探头 </td>
</tr>
<tr>
<td> 垂直分辨率 </td>
<td> 8 位 </td>
</tr>
<tr>
<td> 输入耦合 </td>
<td> AC/DC </td>
</tr>
<tr>
<td> 最大输入电压 </td>
<td> 80Vpp（x1 探头）/ 400Vpp（x10 探头） </td>
</tr>
<tr>
<td> 存储 </td>
<td> 每通道 4K / 单通道 8K </td>
</tr>
<tr>
<td> 软件触发类型 </td>
<td> 边沿、脉冲、电平（待添加） </td>
</tr>
<tr>
<td> 硬件触发类型 </td>
<td> 边沿 </td>
</tr>
<tr>
<td> 触发源 </td>
<td> CH1/CH2/EXT </td>
</tr>
<tr>
<td> 触发模式 </td>
<td> 自动、正常、单次、扫描、无 </td>
</tr>
<tr>
<td> 测试信号发生器 </td>
<td> 10Hz 至 8MHz 2.8Vpp 方波，占空比 10~90% 可调 / 10Hz 至 20kHz 2.8Vpp 正弦波、方波、锯齿波、三角波 </td>
</tr>
<tr>
<td> 存储 </td>
<td> 内部 2MB USB 磁盘，BMP、DAT 文件 </td>
</tr>
<tr>
<td> 自动测量 </td>
<td> Vmax, Vmin, Vpp, Vavr, Vrms, Freq, Period, Pulse, Duty </td>
</tr>
<tr>
<td> 光标测量 </td>
<td> 电平、电压 </td>
</tr>
<tr>
<td> 显示模式 </td>
<td> CH1, CH2, EXT, CH1+CH2, CH1-CH2 </td>
</tr>
<tr>
<td> 采样模式 </td>
<td> 实时 </td>
</tr>
<tr>
<td> 采样率 </td>
<td> 30S/s - 72MS/s </td>
</tr>
<tr>
<td> 电源 </td>
<td> LiPo 电池 </td>
</tr>
<tr>
<td> 尺寸 </td>
<td> 98 *60* 14.5 (mm) </td>
</tr>
<tr>
<td> 重量 </td>
<td> 80g（不含电池） </td>
</tr>
<tr>
<td> 包装内配件 </td>
<td> 2 mcx 示波器探头，2 mcx 数字探头 </td>
</tr>
</table>

## 组件

---
请添加核心组件数据表的链接，例如：

<table >
<tr>
<td> CPU                 </td>
<td> 72 Mhz - ARM 32位 Cortex™-M3 CPU - STM32F103VC [[2]](http://www.st.com/internet/mcu/product/164492.jsp)</td>
</tr>
<tr>
<td> FPGA                </td>
<td> ICE65F_VQ100 [[3]](http://www.siliconbluetech.com/media/downloads/iCE65L04DiCEDatasheet.pdf)</td>
</tr>
<tr>
<td> TFT                 </td>
<td></td>
</tr>
<tr>
<td> ADC                 </td>
<td> AD9288-40 [[4]](http://www.analog.com/static/imported-files/data_sheets/AD9288.pdf)</td>
</tr>
<tr>
<td> 运算放大器         </td>
<td> OPA2354 [[5]](http://www.datasheetcatalog.org/datasheet/texasinstruments/opa354.pdf)</td>
</tr>
<tr>
<td> MOSFET开关         </td>
<td></td>
</tr>
<tr>
<td> USB存储            </td>
<td></td>
</tr>
<tr>
<td> （请在此处添加更多） </td>
<td></td>
</tr></table>

## 注意事项

---
不正确操作此设备可能导致身体伤害和/或设备损坏。请注意所有必要的预防措施，并确保在使用设备之前阅读所有文档。

## 升级固件

---
请注意，此过程目前仅适用于 Windows。[Linux 的说明在这里](/cn/DSO_Quad#upgrading-firmware "DSO_Quad/#upgrading-firmware")。(2011-04-29) 如果我们能够让升级磁盘在 Linux 和 Mac 上运行，那么为经验较少的用户编写一个自动化应用程序将会非常容易。甚至可能让升级程序检查硬件版本，以防止上传错误的固件。

### 固件获取位置

这是[最新的固件](https://files.seeedstudio.com/wiki/DSO_Quad/res/PA1_V113.zip)。

您也可以[从源码构建固件](/cn/DSO_Quad-Building_Firmware "DSO Quad:Building Firmware")。

### 版本警告

**警告**：务必使用适合您特定硬件版本的固件。硬件版本会在设备启动时的启动画面上显示。如果您无法确定硬件版本，请在论坛中寻求帮助。如果上传了错误的固件，可能会导致设备损坏。

### 升级步骤

（仅适用于 Windows）使用 mini USB 数据线将 DSO Quad 连接到您的电脑。按住“&gt;||”（播放/暂停）按钮，同时打开设备。您的设备现在处于固件升级模式，系统中应该会出现一个 USB 磁盘。您需要一次上传一个固件文件，每次上传新文件后，设备会断开连接以准备文件。当磁盘重新连接时，您上传的文件扩展名会发生变化（“.rdy”表示上传成功）。

上传文件的顺序非常重要。首先上传 .hex 文件（顺序无关）。要上传 .BIN 文件，您需要先上传对应的 .ADR 文件。这会告诉设备将二进制文件放置的位置（例如，先上传 CFG_FPGA.ADR，然后立即上传 xxxxFPGA.BIN）。如果出现错误，请删除所有文件并重新开始。

完成所有固件文件上传后，关闭设备以完成升级。当您再次启动设备时，固件版本应该已经更新。如果启动画面出现错误，请重新上传固件，并仔细按照上述说明操作。

更多详细信息和 Linux 说明请参见：[DSO_Quad:Upgrading_Firmware](/cn/DSO_Quad#upgrading-firmware "DSO_Quad/#upgrading-firmware")

### 文件描述

<table>
<tr>
<th> 文件类型 </th>
<th> 文件名格式 </th>
<th> 描述</th>
</tr>
<tr>
<td> FPGA 文件 </td>
<td> xxxxFPGA.BIN </td>
<td> FPGA 的配置数据</td>
</tr>
<tr>
<td> Logo 文件 </td>
<td> logo_xxx.BIN </td>
<td> 创建任意 16 色 64*256 的 .BMP 文件（文件大小 = 46.9KB），并将扩展名更改为 .INF。这是启动画面显示的图像。</td>
</tr>
<tr>
<td> 系统文件 </td>
<td> SYS_xxxx.hex </td>
<td> ???（需要描述）</td>
</tr>
<tr>
<td> 应用文件 </td>
<td> APP_xxxx.hex </td>
<td> ???（需要描述）</td>
</tr>
<tr>
<td> 地址文件 </td>
<td> xxxx.ADR </td>
<td> 这些文件告诉设备上传的下一个 .BIN 文件应该放置的位置。每个 FPGA 文件和 LOGO 文件都有一个对应的地址文件，文件命名方式使您可以知道它们的对应关系。</td>
</tr></table>

**注意**：随着新版本的发布，这些文件名可能会略有不同。文件名中的 x 表示可能随时间变化的值。

### 内存布局

![](https://files.seeedstudio.com/wiki/DSO_Quad/img/DSOQuad-bug-2.jpg)

<table  cellpadding="1" cellspacing="1">
<tr>
<td> 开始地址</td>
<td> 结束地址</td>
<td> 大小</td>
<td> 备注</td>
</tr>
<tr>
<td> 0x00000</td>
<td> 0x03fff</td>
<td> 16384</td>
<td> DFU</td>
</tr>
<tr>
<td> 0x04000</td>
<td> 0x0bfff</td>
<td> 32768</td>
<td> SYS</td>
</tr>
<tr>
<td> 0x0c000</td>
<td> 0x13fff</td>
<td> 32768</td>
<td> APP1（默认）</td>
</tr>
<tr>
<td> 0x14000</td>
<td> 0x1bfff</td>
<td> 32768</td>
<td> APP2</td>
</tr>
<tr>
<td> 0x1c000</td>
<td> 0x23fff</td>
<td> 32768</td>
<td> APP3</td>
</tr>
<tr>
<td> 0x24000</td>
<td> 0x2bfff</td>
<td> 32768</td>
<td> APP4</td>
</tr>
<tr>
<td> 0x2c000</td>
<td> 0x3d7ff</td>
<td> 71680</td>
<td> FPGA 比特流（数据表显示最大大小为 533KBit，因此这个值稍大）</td>
</tr>
<tr>
<td> 0x3d800</td>
<td> 0x3ffff</td>
<td> 10240</td>
<td> Logo（bmp，256x64，4 位）</td>
</tr></table>

注意：闪存基地址为 0x08000000，但当 BOOT0 为低时，芯片会将其镜像到 0x00000000。

## 相关页面

* [DSO Quad: 校准](https://wiki.seeedstudio.com/cn/DSO_Quad-Calibration)

* [DSO Quad: 升级固件](https://wiki.seeedstudio.com/cn/DSO_Quad/#upgrading-firmware)

* [DSO Quad: Beta 硬件](https://wiki.seeedstudio.com/cn/DSO_Quad-Beta_HW)

## 外部链接

1. Seeedstudio 博客 [[6]](https://www.seeedstudio.com/blog/tag/dso-quad/)

2. 更多照片在 flickr [[7]](http://www.flickr.com/photos/seeedstudio/tags/dsoquad/)

3. [DS203 在宝马检测中的应用（中文，自动翻译为英文）](http://translate.google.gr/translate?js=n&amp;prev=_t&amp;hl=zh-CN&amp;ie=UTF-8&amp;layout=2&amp;eotf=1&amp;sl=zh-CN&amp;tl=en&amp;u=http%3A%2F%2Fwww.minidso.com%2Fforum%2Fviewtopic.php%3Ff%3D4%26t%3D54) [[原始页面](http://www.minidso.com/forum/viewtopic.php?f=4&amp;t=54)] - 一些为宝马工作的人员使用 DSO203 检测汽车，除了掌上尺寸和便携性能外，DSO203 在检测宝马总线：FlexRay 时表现完美。

## 资源

---

* [最新 V2.72 固件](https://files.seeedstudio.com/products/109990015/DS203.V2.72.zip)
* [原理图和固件 (HW2.2 ~ HW2.72)](https://wiki.seeedstudio.com/cn/DSO_Quad/#upgrading-firmware)

* [HW2.6 的资源讨论板](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929)

* [DS203_yijian_app_user_manual.rar‎](https://files.seeedstudio.com/wiki/DSO_Quad/res/DS203_yijian_app_user_manual.rar)

* [DSO Quad 用户手册](https://files.seeedstudio.com/wiki/DSO_Quad/res/DSO203_user_Guide_2.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>