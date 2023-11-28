---
description: Getting Started with Seeed Studio XIAO ESP32S3.
title: Seeed Studio XIAO ESP32S3 (Sense) 开发板
keywords:
- esp32s3
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_getting_started
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# Seeed Studio XIAO ESP32S3 (Sense) 开发板

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Seeed Studio XIAO ESP32S3 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


## 介绍

Seeed Studio XIAO系列是小型开发板，共享类似的硬件结构，尺寸实际上是拇指大小。这里的代号“小”代表它的一半特征“小”，另一半将是“羊角面包”。
Seeed Studio XIAO ESP32S3 Sense集成了摄像头传感器、数字麦克风和SD卡支持。结合嵌入式ML计算能力和摄影能力，这款开发板可以成为您开始使用智能语音和视觉AI的绝佳工具。

###规范

<table align="center">
	<tr>
	    <th>项目</th>
	    <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <th>处理器</th>
	    <td align="center" colspan="2">ESP32-S3R8 <br></br> Xtensa LX7双核32位处理器，工作频率高达240 MHz </td>
	</tr>
	<tr>
	    <th>无线</th>
	    <td align="center" colspan="2">完整的2.4GHz Wi-Fi子系统<br></br>BLE:蓝牙5.0，蓝牙网状</td>
	</tr>
    <tr>
	    <th>内置传感器</th>
	    <td align="center"> - </td>
        <td align="center">适用于1600*1200的OV2640摄像头传感器<br></br>数字麦克风</td>
	</tr>
    <tr>
	    <th>存储器</th>
	    <td align="center">片上8M PSRAM和8MB闪存</td>
        <td align="center">片上8M PSRAM和8MB闪存<br></br> 板载SD卡插槽，支持32GB FAT</td>
	</tr>
    <tr>
	    <th>接口</th>
	    <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x User LED, 1x Charge LED  <br></br> 1x Reset button, 1x Boot button</td>
        <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x User LED, 1x Charge LED, 1x B2B Connector (with 2 additional GPIOs)  <br></br> 1x Reset button, 1x Boot button</td>
	</tr>
    <tr>
	    <th>尺寸</th>
	    <td align="center">21 x 17.5mm</td>
        <td align="center">21 x 17.5 x 15mm（带扩展板）</td>
	</tr>
    <tr>
	    <th rowspan="5">功率</th>
	    <td colspan="2" align="center">输入电压（Type-C）：5V <br></br> 输入电压（BAT）：4.2V</td>
	</tr>
    <tr>
	    <td>电路工作电压（准备工作）： <br></br> - Type-C: 5V@<strong>19mA</strong> <br></br> - BAT: 3.8V@<strong>22mA</strong></td>
        <td>Circuit operating Voltage  (ready to operate): <br></br> - Type-C: 5V@<strong>38.3mA</strong> <br></br> - BAT: 3.8V@<strong>43.2mA</strong> （带扩展板）</td>
	</tr>
	<tr>
	    <td align="center"> - </td>
        <td>网络摄像头Web应用程序：<br></br> - Type-C: <br></br> - - 平均功耗：5V/<strong>138mA</strong> <br></br> - - 拍照时刻：5V/<strong>341mA</strong> <br></br> - 电池： <br></br> - - 平均功耗：3.8V/<strong>154mA</strong> <br></br> - - 拍照时刻：3.8V/<strong>304mA</strong></td>
	</tr>
	<tr>
	    <td align="center"> - </td>
        <td>麦克风录音和SD卡写入：  <br></br> - Type-C: <br></br> - - 平均功耗：5V/<strong>46.5mA</strong> <br></br> - - 峰值功耗：5V/<strong>89.6mA</strong> <br></br> - 电池： <br></br> - - 平均功耗：3.8V/<strong>54.4mA</strong> <br></br> - - 峰值功耗：3.8V/<strong>108mA</strong></td>
	</tr>
    <tr>
	    <td align="center">充电电池电流：<strong>100mA</strong></td>
		<td align="center">充电电池电流：<strong>100mA</strong></td>
	</tr>
    <tr>
        <th>低功耗模型</th>
        <td>调制解调器睡眠模式： <strong>3.8V/25 mA</strong> <br></br> 轻度睡眠模式： <strong>3.8V/2 mA</strong> <br></br> 深度睡眠模式： <strong>3.8V/14 μA</strong></td>
        <td>在没有任何外围设备的情况下： <br></br> - 调制解调器睡眠模式： <strong>3.8V/25.5 mA</strong> <br></br> - 轻度睡眠模式： <strong>3.8V/2.4 mA</strong> <br></br> -深度睡眠模式： <strong>3.8V/63.768 μA</strong> <br></br> 连接摄像头：<br></br> - 调制解调器睡眠模式： <strong>3.8V/44.57 mA</strong> <br></br> - 轻度睡眠模式：<strong>3.8V/5.47 mA</strong> <br></br> - 深度睡眠模式： <strong>3.8V/3.00 mA</strong> <br></br> 连接SD卡： <br></br> - 调制解调器睡眠模式： <strong>3.8V/32.8 mA</strong> <br></br> - 轻度睡眠模式： <strong>3.8V/3.48 mA</strong> <br></br> - 深度睡眠模式： <strong>3.8V/1.08 mA</strong><br></br> 同时连接摄像头和SD卡：<br></br> - 调制解调器睡眠模式： <strong>3.8V/55.72 mA</strong> <br></br> - 轻度睡眠模式： <strong>3.8V/6.56 mA</strong> <br></br> - 深度睡眠模式： <strong>3.8V/3.98 mA</strong></td>
    </tr>
    <tr>
        <th>启用Wi-Fi的功耗</th>
        <td align="center">活动模型： <strong>~ 100 mA</strong></td>
        <td align="center">活动模型： <strong>~ 110 mA</strong> (带扩展板)</td>
    </tr>
    <tr>
        <th>BLE启用功耗</th>
        <td align="center">活动模型：<strong>~ 85 mA</strong></td>
        <td align="center">活动模型： <strong>~ 102 mA</strong> (带扩展板)</td>
    </tr> 
    <tr>
        <th>工作温度</th>
        <td colspan="2" align="center">-40°C ~ 65°C</td>
    </tr>
</table>

###特征

- **强大的MCU板**: 采用ESP32S3 32位双核Xtensa处理器芯片，运行频率高达240 MHz，安装多个开发端口，支持Arduino/MicroPython
- **高级功能** (用于Sense): 可拆卸的OV2640相机传感器，分辨率为1600*1200，与OV5640相机传感器兼容，内置额外的数字麦克风
- **精心设计的电源**:锂电池充电管理功能，提供4种功耗模式，可实现低至14μA的深度睡眠模式
- **拥有更多可能性的美好记忆**: 提供8MB PSRAM和8MB FLASH，支持用于外部32GB FAT内存的SD卡插槽
- **出色的射频性能**: 支持2.4GHz Wi-Fi和BLE双无线通信，连接U.FL天线时支持100m+远程通信
- **拇指大小的紧凑型设计**:21x17.5mm，采用XIAO的经典外形，适用于可穿戴设备等空间有限的项目

## 硬件概述

在一切开始之前，有一些产品的基本参数是非常重要的。下表提供了有关Seeed Studio XIAO ESP32S3特性的信息。

<table align="center">
	<tr>
	    <th>XIAO ESP32S3/SIAO ESP32S3感应前端指示图</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/1.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/SIAO ESP32S3感应返回指示图</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/3.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/SIAO ESP32S3感应引脚列表</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>


- 5V-这是从USB端口输出的5V。你也可以将其用作电压输入，但你必须在外部电源和这个引脚之间有某种二极管（肖特基二极管、信号二极管、电源二极管），阳极到电池，阴极到5V引脚。

- 3V3-这是车载调节器的调节输出。你可以画700mA

- GND-电源/数据/信号接地

### 捆扎Pins

在每次启动或重置时，芯片都需要一些初始配置参数，例如加载芯片的引导模式、闪存的电压等。这些参数通过捆扎引脚传递。复位后，捆扎引脚作为常规IO引脚工作。

在芯片复位时由给定的捆扎引脚控制的参数如下：

• **芯片引导模式**–GPIO0和GPIO46

• **VDD_SPI电压**–GPIO45

• **ROM消息打印**–GPIO46

• **JTAG信号源**–GPIO3

GPIO0、GPIO45和GPIO46在芯片复位时连接到芯片的内部弱上拉/下拉电阻器。
这些电阻器确定捆扎引脚的默认位值。此外，这些电阻器决定位
如果捆扎引脚连接到外部高阻抗电路，则值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

要更改位值，捆扎引脚应连接到外部下拉/上拉电阻。如果ESP32-S3被主机MCU用作设备，则捆扎引脚电压电平也可以由主机控制MCU。

所有捆扎针都有插销。在系统复位时，锁存器对其各自捆扎引脚的位值进行采样并存储它们，直到芯片断电或关闭。锁存器的状态不能以任何其他方式更改。它使捆扎引脚值在整个芯片操作期间可用，并且引脚在重置后被释放用作常规IO引脚。

关于捆扎针的定时要求，存在诸如设置时间和保持时间之类的参数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>


## 入门

为了让您更快地开始使用XIAO ESP32S3，请阅读下面的硬件和软件准备，以准备XIAO。

### 工厂程序

我们用一个简单的工厂程序对每个新的XIAO ESP32S3和XIAO ESP32_Sense进行预编程。

1. **XIAO ESP32S3**

常规版本中预设的出厂程序是触针点亮程序。当你接通XIAO的电源时，触摸它的一些引脚，橙色的用户指示灯就会亮起。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32S3 Sense**

XIAO ESP32S3 Sense附带预装的WebCam示例程序。你可以使用这个程序，给晓一个良好的天线安装和电源。有关详细信息，您可以阅读有关该程序的Wiki。

- [视频流](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage#project-ii-video-streaming)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

###硬件准备

####焊接接头

XIAO ESP32S3出厂时默认没有引脚头，您需要准备自己的引脚头，并将其焊接到XIAO的相应引脚上，以便连接到扩展板或传感器。

由于XIAO ESP32S3的尺寸很小，焊接接头时请小心，不要将不同的引脚粘在一起，也不要将焊料粘在屏蔽或其他部件上。否则，可能会导致XIAO短路或无法正常工作，由此造成的后果将由用户承担。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### 天线的安装

在XIAO ESP32S3正面的左下角，有一个单独的“WiFi/BT天线连接器”。为了获得更好的WiFi/蓝牙信号，您需要取出包装内的天线并将其安装在连接器上。

天线的安装有一个小技巧，如果你直接用力按压，你会发现很难按压，你的手指会受伤！安装天线的正确方法是先将天线连接器的一侧放入连接器块中，然后在另一侧向下压一点，天线就安装好了。

拆下天线也是这样，不要用蛮力直接拉天线，一侧用力提起，天线很容易取下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### 安装扩展板（用于Sense）

如果您正在购买XIAO ESP32S3 Sense，那么您还应该包括一个扩展板。此扩展板具有1600*1200 OV2640摄像头传感器、板载SD卡插槽和数字麦克风。

通过使用XIAO ESP32S3 Sense安装扩展板，您可以使用扩展板上的功能。

安装扩展板非常简单，只需将扩展板上的连接器与XIAO ESP32S3上的B2B连接器对齐，用力按压并听到“咔嗒”一声，即可完成安装。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

现在，我们的货架上有一款新的完全兼容XIAO ESP32S3 Sense的强大相机OV5640，如果您购买了它，您可以更换相机来使用它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html">
				<strong><span><font color={'FFFFFF'} size={"4"}>点击购买🖱️</font></span></strong>
				</a>
</div>

如果您需要了解ov5640的详细参数信息，可以参考下图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::提示
Wiki中所有关于相机的程序都与OV5640和OV2640相机兼容。
:::

### 软件准备

XIAO ESP32S3的推荐编程工具是Arduino IDE，因此作为软件准备的一部分，您需要完成Arduino的安装。

:::提示
如果这是您第一次使用Arduino，我们强烈建议您参考 [Arduino入门](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

- **步骤1**根据您的操作系统下载并安装Arduino IDE的稳定版本。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

- **步骤 2.** 启动Arduino应用程序。

- **步骤p 3.** 将ESP32板包添加到您的Arduino IDE中。

    导航到**文件>首选项**，并用以下url填充**“Additional Boards Manager url”**：
    *<https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json>*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

    导航到**Tools > Board > Boards Manager...**, 在搜索框中键入关键字* **esp32** 选择最新版本的 **esp32**, 然后安装它。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::警告
XIAO ESP32S3的车载软件包至少需要提供版本**2.0.8**。
:::

<!-- :::tip
We have now submitted a merge request to ESP32 and will be able to search and use XIAO ESP32S3 in the Arduino IDE when ESP32 releases the next version of the on-board package update.

Until then, you can manually add the XIAO ESP32S3 on-board package to the Arduino directory to use it.
:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip"><strong><span><font color={'FFFFFF'} size={"4"}> Download the Package</font></span></strong></a></div>

After you have downloaded the above zip, please unzip it and you will see two files. One is the **XIAO_ESP32S3 folder**, and the other is **boards.txt**.

- **Under Windows PC**

    The default onboard package storage path for ESP32 in Windows is:

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **Under MacOS PC**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.


- **Step 4.** Close the Arduino IDE and reopen it.-->

- **步骤4** - 选择您的板和端口。
在Arduino IDE的顶部，您可以直接选择端口。这可能是COM3或更高版本（**COM1**和**COM2**通常保留用于硬件串行端口）。

此外，在左侧的开发板中搜索**xiao**。选择**XIAO_ESP32S3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

有了这些准备，您就可以开始为XIAO ESP32S3编写程序进行编译和上传。

### BootLoader模式

有时，我们使用错误的程序会使XIAO看起来失去端口或无法正常工作。具体性能为：
- 已连接到计算机，但找不到肖的端口号。
- 计算机已连接，端口号出现，但上载程序失败。

当你遇到以上两种情况时，你可以尝试将XIAO置于BootLoader模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法是：

- **步骤1** 按住XIAO ESP32S3上的BOOT（引导）按钮，不要松开它。
- **第2步** 按住BOOT（引导）按钮，然后通过数据线连接到计算机。连接到计算机后释放BOOT按钮。
- **步骤3** 上传**Blink**程序以检查XIAO ESP32S3的操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>


### 重置

当程序运行异常时，您可以在通电时按一次Reset，让XIAO重新执行上传的程序。
当您在通电时按住BOOT键，然后按一次Reset键时，您也可以进入BootLoader模式。

## 运行您的第一个Blink程序

到目前为止，我相信您已经对晓ESP32S3的功能和硬件有了很好的了解。接下来，让我们以最简单的眨眼程序为例，为您的XIAO ESP32S3执行第一次眨眼！

- **步骤1.** 启动Arduino应用程序。

- **步骤 2.** 引导到 **File > Examples > 01.Basics > Blink**，打开程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 将板卡型号选择为**XIAO ESP32S3**，然后选择正确的端口号上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

一旦程序成功上传，您将看到以下输出消息，您可以观察到XIAO ESP32S3右侧的橙色LED正在闪烁。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
	</tr>
</table>

祝贺你，你已经学会了如何为肖ESP32S3编写和上传程序！

:::提示
只有当XIAO ESP32S3上的用户LED引脚设置为高电平时，LED才会熄灭，只有当引脚设置为低电平时，它才会点亮。
:::

## 电池使用情况

XIAO ESP32S3系列内置电源管理芯片，可使用电池独立供电，或通过XIAO ESP32S3的USB端口为电池充电。

如果您想为晓连接电池，我们建议您购买合格的3.7V可充电锂电池。焊接电池时，请小心区分正极和负极端子。电源的负极端子应位于离USB端口最近的一侧，电源的正极端子应位于远离USB端口的一侧。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::提示
由于XIAO ESP32S3的所有GPIO引脚都分配了自己的功能，因此我们没有为电池引脚配置GPIO。这意味着我们无法通过读取其中一个GPIO的模拟值来获得软件级别的电池电压。如有必要，可以考虑将蓄电池的正极和负极端子连接到其中两个引脚上，以测量蓄电池电压。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::警告
当您使用电池电源时，5V引脚上将没有电压。
:::

同时，我们设计了一个用于电池充电的红色指示灯，通过指示灯显示屏告知用户电池在充电中的当前状态。

1.当XIAO ESP32S3未连接到电池时，当连接Type-C电缆时红灯亮起，30秒后熄灭。
2.当连接电池并连接C型电缆进行充电时，红灯会闪烁。
3.当连接Type-C为电池充满电时，红灯熄灭。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## 深度睡眠模式和唤醒

XIAO ESP32S3具有完整的深度睡眠模式和唤醒功能。在这里，我们将展示ESP提供的两个更常见的例子。

### Demo1: 带外部唤醒功能的深度睡眠

此代码显示如何使用具有外部触发器的深度睡眠作为唤醒源，以及如何将数据存储在RTC内存中以在重新启动时使用。

```cpp
/*
=====================================
This code is under Public Domain License.

Hardware Connections
======================
Push Button to GPIO 33 pulled down with a 10K Ohm
resistor

NOTE:
======
Only RTC IO can be used as a source for external wake
source. They are pins: 0,2,4,12-15,25-27,32-39.

Author:
Pranav Cherukupalli <cherukupallip@gmail.com>
*/

#define BUTTON_PIN_BITMASK 0x200000000 // 2^33 in hex

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  /*
  First we configure the wake up source
  We set our ESP32 to wake up for an external trigger.
  There are two types for ESP32, ext0 and ext1 .
  ext0 uses RTC_IO to wakeup thus requires RTC peripherals
  to be on while ext1 uses RTC Controller so doesnt need
  peripherals to be powered on.
  Note that using internal pullups/pulldowns also requires
  RTC peripherals to be turned on.
  */
  esp_sleep_enable_ext0_wakeup(GPIO_NUM_33,1); //1 = High, 0 = Low

  //If you were to use ext1, you would use it like
  //esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK,ESP_EXT1_WAKEUP_ANY_HIGH);

  //Go to sleep now
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```



### 演示2：带定时器唤醒的深度睡眠

ESP32提供了一种深度睡眠模式，可有效节能，因为功率是物联网应用的重要因素。在这种模式下，CPU、大部分RAM和所有由APB_CLK计时的数字外围设备都关闭了电源。芯片中唯一可以通电的部分是：RTC控制器、RTC外围设备和RTC存储器。

此代码显示了最基本的深度睡眠，并带有一个定时器来唤醒它，以及如何将数据存储在RTC内存中以在重新启动时使用它。

```cpp
/*
Simple Deep Sleep with Timer Wake Up
=====================================
This code is under Public Domain License.

Author:
Pranav Cherukupalli <cherukupallip@gmail.com>
*/

#define uS_TO_S_FACTOR 1000000ULL  /* Conversion factor for micro seconds to seconds */
#define TIME_TO_SLEEP  5        /* Time ESP32 will go to sleep (in seconds) */

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  /*
  First we configure the wake up source
  We set our ESP32 to wake up every 5 seconds
  */
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) +
  " Seconds");

  /*
  Next we decide what all peripherals to shut down/keep on
  By default, ESP32 will automatically power down the peripherals
  not needed by the wakeup source, but if you want to be a poweruser
  this is for you. Read in detail at the API docs
  http://esp-idf.readthedocs.io/en/latest/api-reference/system/deep_sleep.html
  Left the line commented as an example of how to configure peripherals.
  The line below turns off all RTC peripherals in deep sleep.
  */
  //esp_deep_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_OFF);
  //Serial.println("Configured all RTC Peripherals to be powered down in sleep");

  /*
  Now that we have setup a wake cause and if needed setup the
  peripherals state in deep sleep, we can now start going to
  deep sleep.
  In the case that no wake up sources were provided but deep
  sleep was started, it will sleep forever unless hardware
  reset occurs.
  */
  Serial.println("Going to sleep now");
  Serial.flush(); 
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

:::提示
如果你想学习更多地使用深度睡眠模式和唤醒功能，你可以在Arduino IDE中找到更多ESP为芯片正式编写的示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

##UF2引导程序



我们了解到，一些用户希望将UF2文件直接闪存到XIAO，这将启用批量闪存程序的过程。在这里我们将描述这种方法。



###方法一

:::笔记
目前，此方法只能在Windows系统上使用。
:::

**步骤1**。下载所需的脚本zip。并将其提取到本地机器中。
*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**第2步**。将BIN文件转换为UF2文件。

一旦编译并保存了Arduino程序，就可以直接导出二进制文件BIN文件。然后，这个文件将在您的Arduino项目文件夹中生成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

此时，您所需要做的就是将此BIN文件复制到第一步中刚刚提取的**xiaos3-binuf2**目录中，然后执行**convert_uf2.bat**脚本直接生成一个uf2文件。

**步骤3**。将XIAO置于UF2 BootLoader模式。
然后请将XIAO连接到计算机，然后再次运行**boot_uf2.bat**脚本，XIAO将以U盘的形式出现在计算机中，这意味着它已成功进入uf2 BootLoader模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**步骤4**。将UF2文件复制到XIAO ESP32S3。

接下来，您可以访问XIAO ESP32S3的U盘，并将转换后的UF2复制到U盘上。复制完成后，XIAO U盘将自动消失，程序将开始执行。

：：提示

1.请确保您的程序编译和执行没有问题，否则UF2程序可能无法按预期运行。
2.Blink的示例UF2文件在**xiaos3-binUF2**文件夹中提供。当上传此程序时，XIAO ESP32S3上的橙色LED将闪烁，您可以将此UF2文件用作测试。
：：：

**步骤5**。再次进入UF2 BootLoader。
一旦您执行了上述步骤，并且您仍然希望XIAO ESP32S3访问UF2 BootLoader来上传其他UF2文件，您需要先快速按下**重置**按钮，然后再按下**启动**按钮。并且不需要再次执行boot_uf2.bat脚本。

:::注释
按重置，然后启动，并迅速！
:::

###方法二
该项目由定制IDF和UF2工厂应用程序的第二阶段引导程序作为第三阶段引导程序组成。注意：由于IDF是积极开发和经常更改的，它作为子模块包含在lib/esp-IDF中，请在那里运行导出脚本以正确设置环境。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif"><strong><span><font color={'FFFFFF'} size={"4"}>📚 学习更多</font></span></strong></a></div>

##故障排除

###Q1：如果上传程序失败/程序运行异常/找不到设备端口，该怎么办？

如果您遇到上述问题，建议您首先尝试按下XIAO ESP32S3上的重置按钮，尝试重新运行程序。如果问题仍然存在，请重新检查您的程序并阅读中提供的方法**[BootLoader Mode](#bootloader-mode)** 以恢复设备。

###Q2：为什么我的肖有圆角不齐的问题？这是质量问题吗？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

首先，需要注意的是，这不是质量问题，不会影响晓的正常功能。

XIAO ESP32S3是所有XIAO中最复杂的一个，因为它的集成度很高，并且PCB需要在工厂生产中组装在一起。由于集成度高，拼接板连接只能放在四个圆角处，这会导致图片圆角不均匀的问题。我们将努力改进工艺，以确保在后续生产中解决这个问题。

## 资源

[PDF] **[ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### For Seeed Studio XIAO ESP32S3

- **[PDF]** [Seeed Studio XIAO ESP32S3 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Dimension in DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)

- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle footprint](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Factory firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

- **[STEP]** [Seeed Studio XIAO ESP32S3 3D Model](https://grabcad.com/library/seeed-studio-xiao-esp32s3-1)

<!-- - **[ZIP]** [Seeed Studio XIAO ESP32S3 Certification files]() -->

### For Seeed Studio XIAO ESP32S3 Sense

- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense Dimension in DXF (top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense Dimension in DXF (bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Factory firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

- **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D Model](https://grabcad.com/library/seeed-studio-xiao-esp32s3-sense-1)

<!-- - **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Certification files]() -->

### Other

- **[STP]** [XIAO ESP32S3 Sense housing design (top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)

- **[STP]** [XIAO ESP32S3 Sense housing design (bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)


*剩余的开源材料正在编译中，请继续关注*

## 技术支持和产品讨论



感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



