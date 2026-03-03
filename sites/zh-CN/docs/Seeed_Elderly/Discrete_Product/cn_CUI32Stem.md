---
description: CUI32Stem
title: CUI32Stem
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/CUI32Stem
last_update:
  date: 1/13/2023
  author: shuxu hu
---

Create USB Interface 是一个开源的微控制器板，可以使用 C、BASIC 或 Arduino 语言进行编程。最新版本称为 CUI32Stem，专为与 GROVE 原型系统协同工作而设计，包括各种传感器和执行器。它采用高性能的 Microchip® PIC32 微控制器，无需焊接即可实现与各种用户发明的可编程交互！:)

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32StemFrontSmall.png)

这些图片的高分辨率版本可以在以下链接中找到：[正面](https://files.seeedstudio.com/wiki/CUI32Stem/res/CUI32StemFront.jpg) 和 [背面](https://files.seeedstudio.com/wiki/CUI32Stem/res/CUI32StemBack.jpg)。

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32StemBackSmall.png)

CUI32Stem 可以运行 Arduino 代码（通过多平台 [ChipKIT MPIDE](http://themakersworkbench.com/node/422) 版本的 Arduino IDE 编译），并且还预装了免费的实时操作系统 [StickOS](http://www.cpustick.com/)，这是编程该板最快捷的方式（在终端窗口中使用 BASIC，无需在计算机上安装任何软件）。这两个功能使得对于微控制器单元 (MCU) 的新手来说非常容易上手。对于希望充分利用 CUI32Stem 上强大的 32 位微控制器的高级用户，可以直接在 Microchip [MPLAB X](http://www.microchip.com/mplabx) 中开发 C 语言程序，该软件适用于 Windows、Mac OS X 和 Linux。

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32Stem_Grove_Dash_Kit-2.jpg)

[CUI32Stem Dash Kit]

CUI32Stem 可以单独购买（引脚头装在袋中，未焊接，提供纤薄的外形以适应低调安装位置），或者作为两个不同的 GROVE 套件的一部分购买（其中一个较大的套件如上图所示，包含无线功能和更多 Grove 元件，另一个即将推出）。当作为套件的一部分发货时，CUI32Stem 板将预焊接引脚头（允许 GROVE 元件简单地插拔）。有关购买方式的更多详细信息，请参见下文的“如何购买”部分。您可以通过板上的“V*选择器”选择“V*引脚”提供 3.3V 或 5V，以匹配所选 GROVE 元件的适当电压——CUI32Stem 上的非模拟引脚支持 5V（尽管微控制器本身运行在 3.3V）。

一些 GROVE 元件为 CUI32Stem 增加了无线功能，包括蓝牙和简单的“串行 RF”模块，以及一个正在设计中的“串行 WiFi”模块（尚未发布）。这个串行 WiFi 模块允许 CUI32Stem 通过 802.11 无线访问互联网和/或使用开放声音控制协议 ([OSC](http://opensoundcontrol.org/))。StickOS 支持非常简单的无线链接（参见[示例](http://www.cpustick.com/examples.htm#ex3)），通过专为 CUI32Stem 设计的附加板 ZigFlea，还可以简单地将数据记录到 USB 存储器棒。板上有一个母 USB 连接器的焊盘（位于板的顶部和底部，您可以选择使用哪一个——母 USB 连接器需单独购买，或包含在套件中），允许您使用 USB 主机模式——StickOS 包含 FAT32 文件系统并支持将数据记录到标准闪存驱动器。

预装在每个发货的 CUI32Stem 上的 [StickOS](http://www.cpustick.com/) 包含一个板载 BASIC 编译器、行编辑器、调试器、性能分析器和内联帮助系统，用于创建新的固件程序、保存并运行它们。所有这些都可以通过使用标准终端仿真器进行通信，而无需在计算机上安装任何软件。

Arduino 代码可以使用 [MPIDE](https://github.com/chipKIT32/chipKIT32-MAX/downloads)（多平台集成开发环境）编译并运行在 CUI32Stem 上，该平台有自己的[论坛](http://chipkit.cc/forum/)。最后，C 代码当然可以通过 Microchip 的 MPLAB X IDE 和相应的 C32 编译器为 CUI32Stem 编译，这些都是免费的下载资源。“Microchip 应用程序库”[MAL](http://www.microchip.com/MAL) 也可以免费下载，并且有许多不错的示例。有关 PIC32 上 C 代码的更多示例也可以在[这里](http://www.schmalzhaus.com/UBW32/)找到。

* 对于那些对基准测试感兴趣的人来说，标准 Arduino 的 Coremark 为 18，而 CUI32Stem 的 Coremark 为 203——这是在两者都使用原生 C 代码并进行完全优化编译的情况下实现的。虽然在 StickOS 中运行 BASIC 代码时显然无法看到这种性能，但这种权衡是为了易用性。Arduino 代码在性能方面显然会更接近原生 C 代码。一个展示 CUI32Stem 性能的示例项目（使用 MPIDE 编写的 Arduino 语言）是 Philip Burgess 的开源项目，用于构建一个自包含的[多音合成器](http://hackaday.com/2011/06/08/chipkit-sketch-mini-polyphonic-sampling-synth/)，使用 PIC32。通过压电传感器作为输入，它实现了一个包括实时音频效果的样本播放多音合成器。由于缺乏足够的内部存储器，这个项目在标准 Arduino 上是不可能实现的——而为 Arduino 添加一个“波形盾”或类似设备以访问外部存储器将使实现多音（重叠的音乐音符/声音）变得困难（甚至不可能），正如 Burgess 所展示的那样。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/cui32stem-p-1100.html?cPath=132_208)

## 特性
---
CUI32Stem 被设计为 GROVE 系统的核心。

Arduino 代码可以通过 MPIDE 为 CUI32Stem 编译。

强大的 32 位微控制器，运行频率为 80MHz。

预装易于使用的实时操作系统 - StickOS：

**StickOS BASIC 特性**

*   跟踪或单步执行程序，

*   使用采样分析查看程序运行时间分布，

*   使用断点、断言和监视点，

*   在程序停止时实时操作和检查变量（以及引脚），

*   甚至可以编辑并继续运行程序！

CUI32Stem 是 Microcontrollers For Everyone ([MFE 项目](http://www.cpustick.com/downloads/mfe.pdf)) 的一部分，该项目由 StickOS BASIC 的创作者 Rich Testardi 发起。该项目的目标是鼓励新的休闲用户群体，包括学生、爱好者以及其他非职业用户，学习、享受并使用最先进的微控制器技术构建有用的项目。MFE 的目标明确不是隐藏或抽象微控制器技术，而是使其更易接近、透明且宽容，以便休闲用户能够学习职业用户使用的相同基础概念，但无需投入职业级的精力。

## 规格
---
[PIC32MX795F512H](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en545655) 处理器：

*   80 MHz 时钟频率

*   1.56 DMIPS/MHz

*   512K 闪存

*   128K RAM

*   8 个 DMA 通道

*   3 个 SPI

*   4 个 I2C

*   6 个 UART（串口）

*   全速 USB 2.0 设备或主机模式

*   16 个 A/D 通道，10 位分辨率

## 硬件安装
---
登录 StickOS 非常简单：

1. 如果您使用的是 Windows，请从[这里](http://cpustick.com/downloads.htm)下载 "CPUStick.inf"，然后右键点击文件并选择“安装”；Mac 和 Linux 无需安装即可自动识别 CUI32Stem。

2. 如果您使用的是 Windows 或 Linux，请下载一个终端仿真程序（我在 Windows 上使用 "Tera Term"，在 Linux 上使用 "minicom"）；Mac 内置了 "screen" 命令。

3. 使用 USB 数据线将 CUI32Stem 连接到主机电脑。

4. 确定您的 COM 端口或设备文件名；在 Windows 中，您可以在设备管理器中找到 CPUStick；在 Mac 中，查找 /dev/tty.usbmodemXXX 文件，其中 XXX 与 "关于本机 -> 更多信息 -> 硬件 -> USB" 中 CPUStick 设备的位置 ID 匹配；在 Linux 中，设备文件名取决于发行版。

5. 在您的系统上打开终端仿真程序，并连接到相应的 COM 端口或设备文件。

6. 按下 &lt;Enter&gt; 键以获得提示符：
```
Welcome to StickOS for Microchip PIC32MX2-F128B v1.92c!
Copyright (c) 2008-2012; all rights reserved.
http://www.cpustick.com
support@cpustick.com
(checksum 0x8725)
> _
```
针对初学者的 Mac 特定帮助：
如上所述，所有 Mac 都内置了 "screen" 工具 - 它可以在 Terminal 应用中使用，具体步骤如下：

首先，打开 Terminal。如果您从未使用过它，它位于 Applications/Utilities/Terminal。接下来，输入：

ls /dev/tty.*

以获取所有串口的列表。选择您想要打开的端口。例如，我的列表如下：
```
/dev/tty.Bluetooth-Modem
/dev/tty.Bluetooth-PDA-Sync
/dev/tty.usbmodemfa141
```
您的 CUI32Stem 板会显示类似于最后一个的名称，其中包含 'tty.usbmodem'。

现在，您只需输入 'screen portname' 并按回车键，即可在屏幕上显示 StickOS。在我的例子中，我输入了：screen /dev/tty.usbmodemfa141

之后，您可能需要再次按下回车键，以使 CUI32Stem 返回来自 StickOS 的欢迎消息...

退出 screen 应用的方法是同时按下 control-A 和 control-\。

最后一点：当您将 [GROVE Serial Bluetooth](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html) 元件连接到 CUI32Stem 时，此过程也同样适用。
唯一的区别是名称中会包含 'bluetooth'，当然...如果您不确定，只需逐个尝试，直到找到正确的端口。

## 应用创意
---
使用 CUI32Stem 制作交互式项目非常简单！网上有成千上万的 Arduino 项目示例，只需进行少量修改（例如更改引脚名称以对应 CUI32Stem 的引脚等）即可编译。

对于那些对 BASIC 感兴趣的人——无论是刚开始学习还是想尝试一下……StickOS 真的有那么简单吗？

以下示例使用 CUI32Stem 展示了使用 StickOS 可以完成的一些简单任务，这些任务能够立即产生结果、提供鼓励和反馈。未来将开发更完整的“课程”，以展示如何使用许多 GROVE 元件。

**1/5：让 LED 闪烁**
作为嵌入式编程的“Hello World！”，我们来让 CUI32Stem 的引脚 'rd0' 上的 LED 闪烁：
```
> 10 dim led as pin rd0 for digital output
> 20 while 1 do
> 30	let led = !led
> 40 endwhile
> run
 _
```
程序的第 10 行定义了一个名为“led”的变量，该变量绑定到 CUI32Stem 的引脚 rd0，并配置为数字输出；从此以后，对该变量的任何操作都会立即反映到引脚上。程序的第 20-40 行构成了程序的主循环。第 30 行简单地在循环内反转 CUI32Stem 引脚 rd0 上 LED 的状态。

哦！出了点问题——LED 没有闪烁，而是似乎半亮……哦！我们忘记添加延迟了！让我们用 &lt;Ctrl-C&gt; 停止程序，修复程序并添加 500ms 的延迟，然后从我们停止的地方继续：
```
<Ctrl-C>
STOP at line 30
> 35 sleep 500 ms
> cont
 _
```
好多了！

现在让我们与 CUI32Stem 进行一些交互，再次用 &lt;Ctrl-C&gt; 停止程序……然后检查 LED 的状态（即打印“led”变量的值），并手动让 LED 闪烁：
```
<Ctrl-C>
STOP at line 35
> print led
0
> let led = 1
> print led
1
> let led = 0
> print led
0
>_
```

注意，当我们改变变量时，LED 的状态也随之改变！

**2/5：使用定时器 ISR 让 LED 闪烁**
现在我们的 LED 已经在闪烁了，让我们升级到使用定时器 ISR（中断服务程序）而不是编程循环——这样我们以后可以在“主循环”中做其他事情。我们保留程序的第 10 行，但删除后续所有行，列出程序并从那里开始：
```
> delete 20-
> list
10 dim led as pin rd0 for digital output
end
>_
```

第 10 行仍然定义了一个名为“led”的变量，该变量绑定到 CUI32Stem 的引脚 rd0，并配置为数字输出；第 20 行配置定时器 #1 每 500ms 弹出一次；第 30 行启用定时器中断，并指定每次定时器弹出时运行语句“let led = !led”（如果我们有更多工作要做，可以调用子程序）；最后，第 40 行只是让主循环进入睡眠状态——从此我们只处理中断！

哇，这次居然一次就成功了！ :-)

**3/5：使用输出比较模块让 LED 闪烁**
现在我们对定时器有了一些了解，让我们尝试使用 CUI32Stem 的“输出比较模块”外设，这样我们可以让 LED 闪烁而完全不使用 CPU！同样，这些都是职业用户使用的基本概念！

我们再次用 &lt;Ctrl-C&gt; 停止程序，然后直接在命令行中操作（甚至不写程序），因为我们对自己还不太确定……
```
<Ctrl-C>
STOP at line 40
> dim hz as pin rd0 for frequency output
> hz = 1
>_
```

第一行定义了一个名为“hz”的变量，该变量绑定到 CUI32Stem 的引脚 rd0，并配置为接收输出比较模块的输出；从此以后，对该变量的任何操作都会立即编程为输出比较模块的输出频率（以 Hz 为单位）。

哇，这太酷了！让我们让它变快一点：
```
> hz = 10
>_
```
再快一点：

```
> hz = 100
>_
```

我想把一个蜂鸣器连接到这个东西上，但在继续之前，让我们尝试另一个实验……

**4/5：使用 A/D 转换器读取电位器**
在这个实验中，我们将电位器的中间引脚连接到 CUI32Stem 的引脚 an0，电位器的外部引脚连接到地和 3.3V（当然，你也可以直接插入一个 GROVE 电位器元件）。我们再次在命令行中操作（不写程序），以便观察它的工作原理：
```
> dim pot as pin an0 for analog input
> print pot
1876
>_
```
第一行定义了一个名为“pot”的变量，该变量绑定到 CUI32Stem 的引脚 'an0'，并通过 A/D 转换器配置为模拟输入；从此以后，对该变量的任何引用都会反映当前引脚上读取的毫伏数值！

现在让我们转动电位器，再试一次：
```
> print pot
1201
>_
```
太棒了！！！

**5/5：将所有内容结合起来——模拟到频率转换器！**
好了，让我们将 CUI32Stem 的引脚 rd0 上的 LED 替换为一个小蜂鸣器……现在让我们使用刚刚学到的所有技能编写一个程序，创建一个“模拟到频率转换器”！我们首先用“new”命令清除之前的所有内容，然后从这里开始：
```
> new
> 10 dim buzzer as pin rd0 for frequency output
> 20 dim pot as pin an0 for analog input
> 30 configure timer 1 for 100 ms
> 40 on timer 1 do let buzzer = pot
> 50 halt
> run
 _
```
现在转动电位器，听听蜂鸣器的声音——它从 0 到 3300 Hz，每 100ms 从电位器更新一次！我们太棒了！ :-)

继续（更高级的）StickOS 示例如下：

*   [ZigFlea™ 无线远程 LED 调光器](http://www.cpustick.com/examples.htm#ex3)

*   [LCD 数字温度计](http://www.cpustick.com/examples.htm#ex2)

*   [深入了解（并交互！）您的 MCU！](http://www.cpustick.com/examples.htm#int)

*   [烤箱温度曲线控制器](http://www.cpustick.com/examples.htm#ex1)

##   更高级的编程

安装 MPIDE 多平台 IDE 来编译适用于 CUI32Stem 的 Arduino 代码的步骤详见 [此处](http://www.chipkit.cc/wiki/index.php?title=MPIDE_Installation "MPIDE_Installation")。

使用 MPLAB 编写的简单 C 程序，根据按钮按下状态切换 LED：
```
#define SYSCLK 80000000L

#include <p32xxxx.h>
#include <plib.h>

int main(void)
{
	SYSTEMConfigPerformance(SYSCLK);

	LATE = 0xFFFE; TRISE = 0xFFFE;

	while (1) {
		LATEbits.LATE0 = PORTEbits.RE7;
	}

	return 0;
}
```

##   支持

[在 Seeed 论坛上提问](https://www.seeedstudio.com/forum)。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="http://cui32.googlecode.com/svn/trunk/eagle/CUI32Stem/CUI32Stem.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

##   资源

*   [包含原理图和布局的 ZIP 文件（Eagle 格式）、PDF 格式的原理图、Gerber 文件和 BOM](http://cui32.googlecode.com/svn/trunk/eagle/CUI32Stem/CUI32Stem.zip)

*   [Bootloader 和 StickOS BASIC 固件](http://code.google.com/p/cui32/source/browse/trunk/firmware/CUI32Stem/)

##   如何购买

点击此处从 Seeedstudio Bazaar 购买。

仅购买 CUI32Stem 板（无针脚）：
**型号：[https://www.seeedstudio.com/depot/cui32stem-p-1100.html?cPath=132_208](https://www.seeedstudio.com/depot/cui32stem-p-1100.html?cPath=132_208)**

一个“入门套件”：(插入链接到 Bazaar)
文档 Wiki：CUI32Stem GROVE Dash Bundle

一个“完整套件”：(插入链接到 Bazaar)
文档 Wiki：CUI32Stem GROVE Lab Bundle

##   另请参阅

*   [http://www.cpustick.com/](http://www.cpustick.com/)

*   [http://code.google.com/p/cui32/](http://code.google.com/p/cui32/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>