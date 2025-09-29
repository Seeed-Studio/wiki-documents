---
title: Grove - 串口 MP3 播放器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Serial_MP3_Player/
slug: /cn/Grove-Serial_MP3_Player
last_update:
  date: 01/09/2022
  author: gunengyu
---

[![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3sensor_02.jpg)](https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

Grove-串口 MP3 播放器是一种简单的 MP3 播放设备，其设计基于高质量的 MP3 音频芯片——WT5001。它支持 8KHZ~44.1kHZ 采样频率的 MP3 和 WAV 文件格式。该产品具有多个外设端口：标准 UART Grove 接口、双声道耳机插孔、外部接口以及 Micro SD 卡接口。您可以通过串口工具发送命令来控制 MP3 的播放状态，例如切换歌曲、调整音量和播放模式等。虽然它看起来是一个简单的模块，但功能却非常强大。想知道音质如何？快来体验吧！

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

特点
--------

- 标准 Grove 接口
- 异步串口控制播放模式
- 忙碌指示器
- 复位按钮
- 标准 Micro SD 卡接口
- 支持 FAT16 和 FAT32 文件系统

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

硬件概览
-------------------

![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3_interface.jpg)

- ①：左声道 Grove 接口。
- ②：耳机接口：3.5mm 耳机插孔。
- ③：右声道 Grove 接口。
- ④：WT5001。
- ⑤：LED 指示灯：音乐播放时 LED 会亮起。
- ⑥：UART Grove 接口。
- ⑦：SD 卡：Micro SD 卡（≤2GB）。

## 玩转 Arduino

### 硬件

Grove - 串口 MP3 播放器可以通过 Arduino/Seeeduino 控制。我们提供了一个 Serial_MP3 测试代码供您使用。我相信您可以轻松上手。有关更详细的信息，请参考以下说明。硬件安装步骤如下：

- 将 Grove - 串口 MP3 播放器连接到 Arduino/Seeeduino 的数字 2 端口。注意，您可以根据需要更改引脚编号，但请确保在代码中进行相应的更改。然后使用 USB 数据线将 Arduino/Seeeduino 连接到 PC。
- 将耳机插入 Grove - 串口 MP3 播放器。至此，硬件部分已完成。

### 软件

- **步骤 1.** 从 [Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player) 下载库文件。
- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- **步骤 3.** 您可以选择 **Seeed_Serial_MP3_Player/examples/WT2003S_Terminal_Player** 示例并上传到 Arduino。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。
- **步骤 4.** 我们将在 COM 终端看到如下信息。

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png)

- **步骤 5.** 请键入相关命令以播放音乐。

:::tip
    该库支持 AVR/SAMD/STM32F4 设备，同时支持硬件和软件串口。
:::

串口分为两种类型。一种是 COMSerial，表示与 Grove-MP3 模块连接的通信端口。另一种是 ShowSerial，表示与 PC 连接的串口信息显示端口。

大多数 Arduino 板至少有一个串口，有些有多个串口（例如 Arduino Mega 有 4 个串口）。它通过数字引脚 0 (RX) 和 1 (TX) 与设备通信，同时通过 USB 与计算机通信。因此，如果您在引脚 D0 和 D1 上连接 UART 设备，则必须在通过 USB 下载程序之前移除它们，否则会导致上传失败。有时您需要的串口数量超过硬件串口的数量。如果是这种情况，您可以使用软件串口，它通过软件模拟串口硬件。软件串口需要 Arduino 控制器的大量帮助来发送和接收数据，因此它不如硬件串口快速或高效。有关串口的更多信息，请参考 [Seeed Arduino Serial](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Serial/)。

- **AVR:** 在以下示例中，我们将软件串口定义为 COMSerial（与 Grove-MP3 模块连接）。并非所有数字引脚都可以用于软件串口。您可以参考 [软件串口](https://www.arduino.cc/en/Reference/SoftwareSerial) 了解详细的引脚信息。我们将硬件串口定义为 ShowSerial（与 PC 连接）。如果您使用 Arduino Mega，可以将硬件串口连接到 ShowSerial，将其他 Serial1/Serial2/Serial3 连接到 COMSerial。您可以参考 AVR Mega 设置。

- **SAMD:** 在以下示例中，SAMD 不支持软件串口。我们使用硬件串口 **Serial1** 与 Grove-MP3 模块通信，并使用 **SerialUSB** 在 PC 上打印消息。

- **STM32F4:** 在以下示例中，我们使用硬件串口 **Serial** 与 Grove-MP3 模块通信，并使用 **SerialUSB** 在 PC 上打印消息。

:::note
    有关串口的更多信息，请参考 [Seeed Arduino Serial](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Serial/)。
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

- 现在您可以听到存储在 SD 卡中的歌曲。在播放模式下，D1 指示灯会亮起；在暂停模式下，指示灯会闪烁。更多体验等待您探索！

还有另一种通过串口工具控制 MP3 播放模式的方法。在这种方法中，您需要一个 [UartSBee](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=63_66) 将 MP3 连接到 PC。硬件安装如下图所示：
![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Using_UartSBee_to_Control_MP3.jpg)

连接完成后，打开串口工具发送命令。有关具体命令，请参阅参考部分！
![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Serial_tool_to_send_commands.jpg)

更多体验等待您探索！

参考
----------

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
首次发送此命令时音乐将停止。再次发送此命令后，音乐将继续播放。
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
此命令可以触发播放下一首歌曲，或者如果播放器正在播放最后一首歌曲，则触发播放第一首歌曲。
</td>
</tr>
<tr>
<th scope="row">
下一首
</th>
<td>
7E 02 A5 7E
</td>
<td>
此命令可以触发播放下一首歌曲，或者如果播放器正在播放最后一首歌曲，则触发播放第一首歌曲。
</td>
</tr>
<tr>
<th scope="row">
上一首
</th>
<td>
7E 02 A6 7E
</td>
<td>
此命令可以触发播放上一首歌曲。当您正在播放第一首歌曲时，发送此命令可以触发播放最后一首歌曲。
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
音量共有 32 个级别，从 00 到 31。00 为静音，31 为最大音量。
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
XX=00 表示单曲播放且不循环（默认）
</td>
</tr>
<tr>
<td>
XX=01 表示单曲循环播放模式
</td>
</tr>
<tr>
<td>
XX=02 表示所有曲目循环播放模式
</td>
</tr>
<tr>
<td>
XX=03 表示随机播放模式
</td>
</tr>
</table>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Grove - 串口 MP3 播放器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip)
- [Grove - 串口 MP3 播放器 PDF 格式原理图](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-Serial_MP3_Player.pdf)
- [GitHub 上的演示代码](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- [WT5001 数据手册](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/WT5001_datasheet_V1.5.pdf)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Serial_MP3_Player -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>