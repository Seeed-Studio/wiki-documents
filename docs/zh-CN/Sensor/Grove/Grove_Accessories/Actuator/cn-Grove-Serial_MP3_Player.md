---
title: Grove - Serial MP3 Player
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Serial_MP3_Player/
slug: /cn/Grove-Serial_MP3_Player
last_update:
  date: 03/21/2024
  author: WuFeifei
---

[![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3sensor_02.jpg)](https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

Grove-Serial MP3 Player 是一种简单的 MP3 播放器设备，其设计基于高质量的 MP3 音频芯片——WT5001。它支持 8KHZ~44.1kHZ 采样频率的 MP3 和 WAV 文件格式。该产品具有多个外设端口：一个标准的 UART Grove 接口，一个双声道耳机插孔，一个外部接口以及一个 Micro SD 卡接口。您可以通过串口工具向模块发送命令来控制 MP3 的播放状态，例如切换歌曲、调整音量和播放模式等。虽然它看起来是一个简单的模块，但它拥有如此强大的功能。想知道音质如何吗？快来体验一下吧！

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

## **功能特性**

- 标准 Grove 接口
- 异步串口控制播放模式
- 忙状态指示灯
- 复位按钮
- 标准 Micro SD 卡接口
- 支持 FAT16 和 FAT32 文件系统

:::提示
    更多关于 Grove 模块的信息，请查阅 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上述所提到的支持平台是模块的软件或理论兼容性的指示。在大多数情况下，我们只针对 Arduino 平台提供软件库或代码示例。由于不可能为所有可能的 MCU 平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

**硬件概述**
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3_interface.jpg)

- ①：左声道 Grove 接口。
- ②：耳机接口：3.5mm 耳机
- ③：右声道 Grove 接口。
- ④：WT5001（音频芯片）
- ⑤：LED 指示灯：播放音乐时 LED 亮起。
- ⑥：UART Grove 接口
- ⑦：SD 卡：micro SD 卡（≤2GB）

## 与 Arduino 配合使用

### 硬件

Grove - Serial MP3 播放器可以通过 Arduino/Seeeduino 进行控制。我们为您提供了一个 Serial_MP3 测试代码，相信您可以轻松地开始使用。如需更多详细信息，请参考以下说明。硬件安装步骤：

- 将 Grove - Serial MP3 播放器连接到 Arduino/Seeeduino 的数字 2 端口。请注意，您可以更改引脚号，只需确保在代码中做相应的更改。然后使用 USB 线缆将您的 Arduino/Seeeduino 连接到电脑。
- 将耳机插入 Grove - Serial MP3 播放器。至此，硬件部分已经完成。

### 软件

- **步骤 1.** 从 [Github](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player) 下载 Grove-MP3 v2.0 库。
- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) 来为 Arduino 安装库。
- **步骤 3.** 选择 **Seeed_Serial_MP3_Player/examples/WT2003S_Terminal_Player** 示例并上传到 Arduino。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。
- **步骤 4.** 我们将在 COM 终端看到如下信息。

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png)

- **步骤 5.** 请输入相关命令来播放音乐。

:::提示
    该库支持 AVR/SAMD/STM32F4 设备，既支持硬件串口也支持软件串口。
:::

有两种串口。一种是 COMSerial，代表通信端口（与 Grove-MP3 模块连接）。另一种是 ShowSerial，代表串行信息显示端口（与电脑连接）。

大多数 Arduino 开发板至少有一个 Serial 端口，有些有多个 Serial 端口（例如 Arduino Mega 有 4 个 Serial 端口）。它通过数字引脚 0（RX）和 1（TX）以及通过 USB 与电脑通信。因此，如果您在引脚 D0 和 D1 上连接了 UART 设备，那么在通过 USB 下载程序之前，您必须将其移除。否则，会导致上传失败。有时，您需要的串口数量超过了可用的硬件串口数量。如果是这种情况，您可以使用软件串口，它使用软件来模拟串行硬件。软件串口需要 Arduino 控制器提供大量帮助来发送和接收数据，因此它不如硬件串口快或高效。有关 Serial 的更多信息，请参考 [Seeed Arduino Serial](https://wiki.seeedstudio.com/Seeed_Arduino_Serial/)。

- **AVR：**在下面的示例中，我们将软件串口定义为 COMSerial（与 Grove-MP3 模块连接）。并非所有的数字引脚都可以用于软件串口。您可以参考 [软件串口](https://www.arduino.cc/en/Reference/SoftwareSerial) 以获取具体的引脚信息。我们将硬件串口定义为 ShowSerial（与电脑连接）。如果您使用的是 Arduino Mega，您可以将硬件串口连接到 ShowSerial，将其他的 Serial1/Serial2/Serial3 连接到 COMSerial。因此，您可以参考 AVR Mega 的设置。

- **SAMD：**在下面的示例中，SAMD 不支持软件串口。我们使用硬件串口 **Serial1** 与 Grove-MP3 模块进行通信，并使用 **SerialUSB** 在电脑上打印消息。

- **STM32F4：**在下面的示例中，我们使用硬件串口 **Serial** 与 Grove-MP3 模块进行通信，并使用 **SerialUSB** 在电脑上打印消息。

:::注意
    关于 Serial 的更多信息，请参考 [Seeed Arduino Serial](https://wiki.seeedstudio.com/Seeed_Arduino_Serial/)。
:::

```
#ifdef __AVR__
#include <SoftwareSerial.h>
SoftwareSerial SSerial(2, 3); // RX, TX
#define COMSerial SSerial
#define ShowSerial Serial 

WT2003S<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define COMSerial Serial1
#define ShowSerial SerialUSB 

WT2003S<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
#define COMSerial Serial
#define ShowSerial SerialUSB 

WT2003S<HardwareSerial> Mp3Player;
#endif
```

- 现在您可以听到存储在 SD 卡中的歌曲了。在播放模式下，D1 指示灯会亮起。如果处于暂停模式，指示灯会闪烁。更多体验等您来探索！

另一种方式是通过串口工具来控制 MP3 播放模式。这种方式下，您需要一个 [UartSBee](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=63_66) 来连接 MP3 与电脑。硬件安装如下图所示：
![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Using_UartSBee_to_Control_MP3.jpg)

连接完成后，打开串口工具发送命令。关于具体的命令，请参考相关部分！
![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Serial_tool_to_send_commands.jpg)

更多精彩体验等你来发现！

## 参考资料

常用命令说明：

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
命令名称
</th>
<th scope="col">
命令格式
</th>
<th scope="col">
描述
</th>
</tr>
<tr>
<th scope="row">
暂停
</th>
<td>
7E 02 A3 7E
</td>
<td>
发送此命令后，音乐将停止。再次发送此命令，音乐将继续播放。
</td>
</tr>
<tr>
<th scope="row">
停止
</th>
<td>
7E 02 A4 7E
</td>
<td>
此命令能够触发播放下一首歌曲，如果播放器正在播放最后一首歌曲，则会触发从头开始播放。
</td>
</tr>
<tr>
<th scope="row">
下一曲
</th>
<td>
7E 02 A5 7E
</td>
<td>
此命令能够触发播放下一首歌曲，如果播放器正在播放最后一首歌曲，则会触发从头开始播放。
</td>
</tr>
<tr>
<th scope="row">
上一曲
</th>
<td>
7E 02 A6 7E
</td>
<td>
此命令能够触发播放上一首歌曲。发送此命令时，如果正在播放第一首歌曲，则会触发回到最后一首歌曲进行播放。
</td>
</tr>
<tr>
<th scope="row">
音量控制
</th>
<td>
7E 03 A7 1F 7E
</td>
<td>
音量有32个等级，从00到31。00为静音，31为最大音量。
</td>
</tr>
<tr>
<th rowspan="4" scope="row">
指定播放模式
</th>
<td rowspan="4">
7E 03 A9 XX 7E
</td>
<td>
XX=00 表示单曲不循环播放（默认）
</td>
</tr>
<tr>
<td>
XX=01 表示单曲循环播放模式
</td>
</tr>
<tr>
<td>
XX=02 表示所有曲目循环播放模式。
</td>
</tr>
<tr>
<td>
XX=03 表示随机播放模式。
</td>
</tr>
</table>


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Grove - Serial MP3 Play Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip)
- [Grove - Serial MP3 Play 原理图（PDF格式）](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-Serial_MP3_Player.pdf)
- [github 上的演示代码](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- [WT5001 数据手册](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/WT5001_datasheet_V1.5.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Serial_MP3_Player -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
