---
description: LinkIt ONE
title: LinkIt ONE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_ONE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![输入图片描述](https://files.seeedstudio.com/wiki/Linkit_ONE/image/500px-Linkit-one-page.jpg)

:::danger
由于 MediaTek Labs 的关闭，所有相关链接已失效。如果需要下载相关文件，请通过以下链接搜索：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

LinkIt ONE 开发平台是一款开源的高性能开发板，用于可穿戴设备和物联网设备的原型设计。它基于全球领先的可穿戴设备 SoC MediaTek Aster (**MT2502**)，结合高性能 Wi-Fi (**MT5931**) 和 GPS (**MT3332**) 芯片组，为您提供访问 MediaTek LinkIt 所有功能的能力。它还提供与 Arduino 开发板类似的引脚布局功能，使连接各种传感器、外设和 Arduino 扩展板变得简单。

LinkIt ONE 是一款集成式原型开发板，专为物联网/可穿戴设备设计。它将 GSM、GPRS、Wi-Fi、GPS、蓝牙功能集成到一个基本的 Arduino 形状的开发板中。LinkIt ONE 是由 [Seeed Studio](https://www.seeedstudio.com/) 和 [MediaTek](http://www.mediatek.com/) 联合设计的产品。它结合了双方在开放硬件和工业领先的可穿戴设备及物联网设备参考设计方面的技术，打造了一款强大的开发板。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/item_detail.html?p_id=2017)

:::note
LinkIt ONE 开发板拥有许多功能，其 SDK（软件开发工具包）也非常全面。在使用开发板之前，请仔细阅读本文档。作为联合设计产品，Seeedstudio LinkIt ONE 论坛提供基础级别的硬件技术支持。高级技术支持可在 [MediaTek LinkIt ONE 论坛](https://labs.mediatek.com/forums/forums/list.page) 获取。这些论坛中有大量关于该开发板的常见问题解答。请先搜索解决方案以满足您的需求/解决问题，这样可以节省您的时间。
:::

## 特性
--------------
- 在单个开发板上集成了 ARM7 EJ-S™、GSM、GPRS、Wi-Fi、蓝牙 BR/EDR/BLE、GPS、音频编解码器和 SD 卡连接器。
- 引脚布局类似于 Arduino 开发板，包括数字 I/O、模拟 I/O、PWM、I2C、SPI、UART 和电源供应，兼容 Arduino。
- 提供多种接口，可连接大多数传感器、外设、Groves 和其他组件。
- 你就是你所穿戴的设备。使用 LinkIt ONE 和 MediaTek LinkIt SDK（适用于 Arduino），您可以轻松将您的创意转化为实用的原型，并通过 Seeed 的产品化和敏捷制造服务将其变为现实。

## 规格
------------------
| 参数         | 值               |
|:------|:-----------------|
| 芯片组       | MT2502A (Aster, ARM7 EJ-S (TM)) |
| 时钟速度     | 260MHz          |
| 尺寸         | 3.3x2.1 英寸     |
| 闪存         | 16MB            |
| RAM         | 4MB             |
| 每个 I/O 引脚的直流电流 | 1mA             |
| 模拟引脚     | 3               |
| 数字输出     | 3.3V            |
| 模拟输入     | 5V              |
| UART        | 基于软件的(**Serial**)，也称为 USB 调制解调器端口；基于硬件的串口(**Serial1**, D0&D1) |
| SD 卡        | 最大支持 32GB（Class 10） |
| 定位         | GPS(MT3332)     |
| GSM         | 850/900/1800/1900 MHz |
| GPRS        | Class 12        |
| Wi-Fi       | 802.11 b/g/n    |
| 蓝牙         | BR/EDR/BLE（双模） |

## 应用创意
--------------------
* 物联网
* 智能家居
* 可穿戴设计
* 工业应用
* 传感器集线器
* 自动化与运输

以下是一些项目供您参考。更多精彩项目请访问 Recipe 和 [Instructables](https://www.instructables.com/howto/linkit+one/)。

|Facebook 点赞监控器|短信门报警器|智能床报警器|
|--------------------------|-------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project3.jpg)|
|[立即制作！](https://www.instructables.com/id/Facebook-Like-Monitor/)|[立即制作！](https://www.instructables.com/id/LinkIt-One-Texting-Door-Alarm/)|[立即制作！](https://www.instructables.com/id/Smart-Bed-Alarm-with-LinkIT-ONE/)|


|AWS IoT 教程|Instructables 指示器|DIY 亚克力外壳|
|--------------------------|-------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project6.jpg)|
|[立即制作！](https://www.instructables.com/id/An-AWS-IoT-Tutorial-With-LinkIt-ONE/)|[立即制作！](https://www.instructables.com/id/Make-a-Instructables-Indicator/)|[立即制作！](https://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/)|



## 硬件概览
-------------------
![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/1000px-LinkItONE_RESOURCE.png)

### 配置开关
LinkIt ONE 上有 3 个滑动开关，用于配置功能/工作模式：

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/300px-LinkIt_ONE_Wiki_Button.jpg)

|开关编号|	功能|	位置 1 - 功能|	位置 2 - 功能|
|:------|:-----------------|:-----------------|:-----------------|
|1|	编程模式|	**MS**：在此位置时，连接到 PC 后，LinkIt ONE 板将显示为 10MB 的 USB 驱动器。在此模式下程序不会执行。复制到此驱动器的任何文件都可以通过代码读取。|	UART：此位置用于将板设置为编程模式。在此模式下可以上传固件。|
|2|	电源|	**BAT**：通过锂电池为板供电。要为电池充电，请将开关设置为此位置并将板连接到 PC。|	**USB**：通过 USB 端口为板供电。当没有连接电池时，将开关设置为此位置以编程板。|
|3|	SD/SPI|	**SPI**：此位置允许访问外部 SPI 引脚（D10 - D13）。|**SD**：此位置允许代码访问 SD 卡。此模式还会禁用对 SPI 引脚（D10-D13）的访问。|

:::note
    使用 USB Micro Type-B 插座时请务必小心，否则可能会损坏插座。
:::
## 入门指南

### 流程概览
|编号|	步骤	|了解更多|
|:------|:-----------------|:-----------------|
|1|	安装 Arduino IDE 1.5.7 Beta（Windows 或 MAC OS X 版本）|	[点击这里](https://wiki.seeedstudio.com/cn/LinkIt_ONE/#installing-arduino-ide)|
|2|		[在 MediaTek Labs 注册](https://labs.mediatek.com/dpRegister/create)。	| |
|3|	下载 [Linkit 开发者指南](https://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd) 并阅读。	||
|4|	安装 [LinkIt SDK](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp) 用于 Arduino IDE（Windows 或 MAC OS X）。|	[点击这里](https://wiki.seeedstudio.com/cn/LinkIt_ONE/#installing-mediatek-linkit-one-sdk)|
|5|	安装 LinkIt ONE 驱动程序。|	[点击这里](https://wiki.seeedstudio.com/cn/LinkIt_ONE/#installing-drivers)|
|6|	更新板载固件版本。|	[点击这里](https://wiki.seeedstudio.com/cn/LinkIt_ONE/#updating-firmware)|
|7|	打开 Arduino IDE，选择 LinkIt ONE 板并开始编程。|	[点击这里](https://wiki.seeedstudio.com/cn/LinkIt_ONE/#uploading-code-blinky)||
|8|	连接 GSM、GPS 和 WiFi/BT 天线到 LinkIt ONE 板|	[点击这里](https://wiki.seeedstudio.com/cn/LinkIt_ONE/#connecting-antennae)|
|9	|插入 SIM 卡和 Micro SD 卡|[点击这里](https://wiki.seeedstudio.com/cn/LinkIt_ONE/#inserting-sim-card-and-sd-card)|
|10	|探索示例并享受制作的乐趣！|

### 安装 Arduino IDE
[下载最新的 Arduino IDE](https://www.arduino.cc/en/Main/Software)。有关更高级的主题，请遵循 MediaTekTM 的[说明](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp)。

### 安装 Mediatek LinkIt ONE SDK
- 下载 [LinkIt SDK for Arduino](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp)。在撰写本指南时，使用的是 **v1.1.11** Windows SDK（Beta）。观看适用于 Windows OS 和 MAC OS X 平台的视频指南 [点击这里](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/get-started/index.gsp)。
- 将下载的文件解压到 Arduino IDE 文件夹。
- 双击 .EXE 文件并安装。
- 安装 LinkIt ONE SDK 后，Arduino IDE 将作为 LinkIt ONE IDE 工作。

### 安装驱动程序

- 如果您使用的是 Windows 8/8.1 操作系统，请禁用 **驱动程序签名强制**。阅读 [说明](https://wiki.seeedstudio.com/cn/Driver_for_Seeeduino/#installing-drivers-for-the-seeeduino-with-window8)。

- 将 MS/UART 滑动开关设置为 UART 位置，并将 LinkIt ONE 连接到 PC。
- 打开设备管理器，将显示以下 COM 端口。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp1.jpg)

- 从 ..\LinkIt_ONE_IDE\drivers\mtk 文件夹安装驱动程序。
- 安装驱动程序后，设备管理器应显示以下两个端口：

   **MTK USB Debug Port** 用于上传代码。

   **MTK USB Modem Port** 用于打印消息，例如 Serial.println()。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp2.jpg)  

:::note
    尚无官方 Windows 10 驱动程序。Windows 10 用户可以从 **设备管理器** 手动选择 **\LinkIt_ONE_IDE\drivers\mtk** 中的 Windows 7 驱动文件。这在某些 PC 上已知可用。
:::
### 更新固件
LinkIt ONE 板的固件需要定期更新。最新的 LinkIt ONE SDK 附带一个固件版本。

- 在开始固件更新之前，请确保滑动开关处于正确位置（**MS/UART** 应处于 **MS** 位置，**USB/BAT** 应处于 **USB** 位置）：

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkItONEUpdateFirmware2.jpg)  

- 从 ..**\LinkIt_ONE_IDE\hardware\tools\mtk** 文件夹运行 FirmwareUpdater.exe 应用程序。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-LinkItONEUpdateFirmware.jpg)  

- 点击按钮，然后将 LinkIt ONE 连接到电脑。等待 1 分钟，直到更新成功完成。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-LinkItONEUpdateFirmware_ok.jpg)  

### 上传代码（Blinky）

- 滑动开关应配置为固件上传模式（即将 **MS/UART** 设置为 **UART** 位置，将电源开关设置为 **USB** 位置）。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp3.jpg)

- 在 LinkIt ONE IDE 中打开 **File** -> **Examples** -> **Basics** -> **Blink**。
- 在 **Tools** -> **Port** 中选择对应 **MTK USB Debug port** 的 COM 端口号。
- 点击 **Tools > Board > LinkIt One** 选择板子。

如果找不到 LinkIt One，请查看 [如何将 Seeed 板添加到 Arduino IDE](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)

- 编译并上传代码。
- 标记为 **L** 的 LED 应该会闪烁。

### 连接天线

LinkIt ONE 配备了三个天线，分别用于：

- GSM/GPRS
- Wi-Fi/BT
- GPS

按照以下图片连接天线。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-Linkit_one_antenna.jpg)

:::note
    - 从板上拔出天线时，请小心操作。请勿使用蛮力。
    - 尽量沿垂直于板子的方向施力，否则可能会损坏天线焊盘。
:::

### 插入 SIM 卡和 SD 卡

LinkIt ONE 支持标准尺寸的 SIM 卡和 Micro SD 卡。按照以下图片插入它们：

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkItONE_SIM_SDCard_Insert.jpg)

### 探索 LinkIt ONE SDK 示例

LinkIt ONE SDK 提供了许多示例代码，用于使用 GSM、GPRS、WiFi、BT、音频、GPS 等外设。请先探索这些示例并阅读 API 文档。API 文档可在 [用户指南](https://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd) 和 [API 参考网站](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/api_references/Core_Digital.gsp) 中找到。

## LinkIt ONE 兼容的 Groves 和 Shields

- 我们生产了数百种 Groves 和 Shields，包括传感器、执行器、显示器和其他模块。
- 您可以轻松地使用这些 Groves 和 Shields 实现您的创意。
- 但 LinkIt ONE 并不支持所有这些模块。
- 我们准备了一份兼容的 Groves 和 Shields 列表：

[![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-Compatible_Groves_and_Shields_for_LinkIt_ONE.png)](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/LinkIt_ONE_Comparability_Test.xlsx)

## LinkIt ONE Sidekick Basic Kit 教程

![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/350px-LinkitONESidebox.jpg)

LinkIt ONE Sidekick Basic Kit 是专为 LinkIt ONE 板设计的。这套工具包将帮助您快速熟悉 LinkIt 平台。它包含许多 DIY 项目中最受欢迎的配件：如面包板、跳线、彩色 LED、电阻器、蜂鸣器等。所有这些都装在一个方便携带的盒子里，便于运输并减少杂乱。工具包包括完整的指南，帮助您在创建小型、简单且易于组装的电路时熟悉各种电子元件。指南中提供了 10 个不同的课程，为初学者提供了熟悉 LinkIt ONE 的最佳方式。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/item_detail.html?p_id=2027)

## 常见问题解答

**问题1：LinkIt ONE可以连接3G或4G网络吗？**

回答1：不可以，但您可以使用GPRS网络。

**问题2：成功上传GSM示例后，串行监视器上没有任何输出。**

回答2：请按照以下步骤操作：

- 选择用于打印的Modem USB端口。
- 选择正确的波特率。
- 使用其他示例进行测试。
- 更新固件后再试一次。

**问题3：GPRS功能无法正常工作。我尝试了“LGPRS”代码但没有成功。**

回答3：请按照以下步骤操作：

- 请确保您的GPRS卡未被锁定。
- 您能否在手机上使用此卡访问GPRS网络？
- 短信功能是否正常？

**问题4：为什么无法将“Blink”代码上传到LinkIt ONE？设备是否有缺陷？**

回答4：请按照以下步骤操作：

- 检查两个开关是否在正确的位置（Uart和USB）。
- 选择正确的COM端口（MTK USB DEBUG PORT）。
- 更新固件后再试一次。
- 在另一台电脑上尝试。
- 尝试使用另一根USB线。

**问题5：LinkIt ONE支持录音功能吗？**

回答5：支持，音频插孔可以作为录音的输入接口。其ADC已集成在MT2502A芯片内。

**问题6：LinkIt ONE集成的WiFi模块是否支持监控模式？**

回答6：请参考LinkIt ONE的[WiFi API](https://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html)文档。它支持连接网络的RSSI功能，但不支持非连接WiFi网络的监控模式。

**问题7：可以通过LinkIt ONE的电池插座使用5V电池吗？**

回答7：抱歉，不能使用5V电池。LinkIt ONE板配备了3.7V锂离子可充电电池，建议使用随板提供的电池。

**问题8：在哪里可以找到关于使用GPRS连接LinkIt ONE到网络的信息？**

回答8：LinkIt ONE IDE附带了使用GPRS连接到网络的示例。只需安装最新版本的IDE并查看示例。以下是[GPRS API](https://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html)的链接。


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Linkit_ONE/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

**原理图 / 设计文件：**

- [LinkIt ONE V1.0 Eagle文件](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/202000437_PCBA%20Linkit%20ONE_PDF.zip)
- [LinkIt ONE V1.0 PDF原理图](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip)

**软件：**

- [MediaTek_LinkIt_SDK_for_Arduino](https://labs.mediatek.com/en/platform/linkit-one.html)

**数据表和用户指南：**

- [LinkIt_ONE硬件参考设计_v1_0](https://labs.mediatek.com/site/znch/access_denied/access_denied.gsp)
- [LinkIt ONE引脚图_v1.0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/LinkIt_ONE_Pinout_Diagram_v1_0.pdf)
- [MediaTek_LinkIt开发者指南_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_LinkIt_ONE_Developers_Guide_v1_3.pdf)
- [MediaTek_MT2502A_SOC数据表_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT2502A_SOC_Data_Sheet_v1_0.pdf)
- [MediaTek_MT5931_Wi-Fi数据表_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT5931_Wi-Fi_Data_Sheet_v1_0.pdf)
- [MediaTek_MT3332_GPS数据表_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT3332_GPS_Data_Sheet_v1_0.pdf)

**获取帮助**

- [MediaTek LinkIt ONE论坛](https://labs.mediatek.com/forums/forums/list.page)

**更多信息**

- [另请参阅：LinkIt ONE的Sidekick基础套件](https://www.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_LinkIt_ONE)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>