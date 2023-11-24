---
description: XIAO Round Dislay Basic Tutorial
title: 快速上手
keywords:
- XIAO
- Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/get_start_round_display
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# 基于 XIAO 的圆形显示器快速上手

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div>

## 引言

Seeed Studio Round Display for XIAO是一款兼容所有XIAO开发板的扩展板。它的一侧有一个全覆盖的触摸屏，设计为39毫米的圆盘。它包含板载RTC、充电芯片、TF卡插槽，体积小巧，非常适合智能家居、可穿戴设备等的交互式显示器。

### 规格

<table align="center">
	<tr>
	    <th>项目</th>
	    <th>细节</th>
	</tr>
	<tr>
	    <th>电源供应</th>
	    <td>USB Type-C: 5V @35 mA <br></br> 电池充电: 3.7V @37mA</td>
	</tr>
	<tr>
	    <th>充电电流</th>
	    <td>~ 485 mA</td>
	</tr>
  <tr>
	    <th>可扩展内存</th>
	    <td>最多支持32GB FAT格式的TF卡槽</td>
	</tr>
  <tr>
	    <th>屏幕</th>
	    <td>1.28英寸触摸屏 <br></br> 240×240 分辨率 <br></br> 65K 色彩</td>
	</tr>
  <tr>
	    <th>其他外部设备t</th>
	    <td>JST  1.25连接器</td>
	</tr>
  <tr>
	    <th>尺寸</th>
	    <td>39mm x 39mm</td>
	</tr>
</table>


### 功能

- **电容式触摸屏扩展板**：显示器采用1.28英寸圆形，240×240分辨率，65K颜色，提供清晰多彩的图像展示
- **高兼容性**：与所有XIAO系列产品高度兼容，轻松集成到您当前的项目中
- **丰富的外围设备**：具有板载RTC、电池充电芯片、TF卡插槽、JST 1.25连接器，所有这些都在其紧凑的尺寸内
- **手表尺寸设计**：采用39毫米圆形设计，适用于可穿戴和空间有限的项目
-**即插即用**：所有引脚均引出，无需焊接

## 硬件概述

在我们开始之前，我们可以参考以下图片来了解圆形显示器的引脚设计，以便于我们理解圆形显示器的功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

## 入门

### 硬件准备

如果您想充分利用圆显的功能并获得良好的体验，我们强烈建议您购买我们的XIAO系列作为圆显的主板。

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
	    <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
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

圆形显示器背面的一排引脚是为XIAO系列设计的。如果你手头有XIAO，你不需要准备任何额外的电缆，只需对准XIAO的引脚并将其直接插入圆形显示器即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::danger
请注意，连接XIAO时，**XIAO的C型连接器应面向圆形显示器的外侧**。如果你不小心颠倒了极性，不要太担心，圆形显示器有一个电源保护电路，不会轻易损坏，但我们不建议你长时间保持反向连接。
:::

圆形显示的推荐方向是：当您面对圆形显示时，XIAO的Type-C连接器朝向右侧，因此圆形显示的打开/关闭按钮位于左下角。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### 软件准备

要使用圆形显示器，我们需要对XIAO系列进行编程。推荐的编程工具是Arduino IDE，您需要为XIAO配置Arduino环境并添加板载软件包。

：：提示
如果这是您第一次使用Arduino，我们强烈建议您参考[Arduino入门](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

#### 步骤1 .根据您的操作系统下载并安装Arduino IDE的稳定版本。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

#### 步骤2。启动Arduino应用程序。

#### 步骤3。为您正在使用的XIAO配置Arduino IDE。

- 如果您想使用**Seeed Studio XIAO SAMD21**进行后续例程，请参阅**[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** 以完成添加。

- 如果您想使用**Seeed Studio XIAO RP2040**进行后续例程，请参阅**[本教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)**以完成添加。

- 如果您想使用**Seeed Studio XIAO nRF52840**进行后续例程，请参阅**[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** 以完成添加。

- 如果您想使用**Seeed Studio XIAO ESP32C3**进行后续例程，请参阅**[本教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)**以完成添加。
- 如果您想在后面的例程中使用**Seeed Studio XIAO ESP32S3**，请参阅**[本教程](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)**以完成添加。

#### 步骤4。将圆形显示库添加到Arduino。

首先，您需要在Arduino IDE中搜索并下载最新版本的**TFT_eSPI**和**LVGL**库。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/52.png" style={{width:1000, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/53.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

如果您想在扩展板上使用RTC功能，则还需要搜索并安装**I2C BM8563 RTC**库。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>

:::note
与Round Display兼容的**TFT_eSPI**库已提交合并请求，因此在下一版本发布时，您可以在Arduino IDE中搜索并下载**TFT_eSPI**以正常使用。在此之前，如果您需要将**TFT_eSPI**库用于Round Display，请从此处下载。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Maxwelltoo/TFT_eSPI">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

如果您以前安装过**TFT_eSPI**库，请删除原始库并安装新库。
:::

然后，我们还需要下载并导入Round Display的配置库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

既然您已经下载了zip库，请打开Arduino IDE，单击**草图>包含库>添加.zip库**。选择刚下载的zip文件，如果库安装正确，您将在通知窗口中看到**库已添加到库**中。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

然后，您需要获取“lv_conf.h”文件，并将其剪切到Arduino库的根目录中。

：：：小心
请注意，此处的“lv_conf.h”文件来自**Seeed_Arduino_RoundDisplay**，而不是来自**LVGL**库。
：：：

在Windows上，Arduino库的根目录是：
`C:\Users\${UserName}\Documents\Arduino\libraries`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/54.png" style={{width:800, height:'auto'}}/></div>

#### 步骤5。（可选）配置使用环境

Round Display目前适用于两种不同的基于库的显示器，一种是**TFT_eSPI**，另一种是**Arduino GFX**。在nRF52840上，Arduino GFX将具有明显更好的性能。

：：：注释
如果需要使用**TFT_eSPI**库，请继续执行**步骤5**。如果你正在使用Arduino GFX，那么你可以跳过这一步。
关于Round Display的内容，我们的教程将重点介绍**TFT_eSPI**的使用。
：：：

请在Arduino库的根目录中找到**TFT_eSPI**文件夹，然后修改**TFT_eSPI**目录中的“User_Setup_Select.h”文件。

`C:\Users\${UserName}\Documents\Arduino\libraries\TFT_eSPI\User_Setup_Select.h`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/55.png" style={{width:800, height:'auto'}}/></div>

如果要使用**TFT_eSPI**库进行显示驱动，则必须在`#include<User_Setup.h>`行中**注释**，并在该行中**取消注释**`#include <User_Setups/Setup66_Seeed_XIAO_RoundDisplay.h>` 在`User_Setup_Select.h` 文件里。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/56.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wikis/round_display_for_xiao/57.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>


### Arduino图书馆概述

从上面的教程中我们可以看出，Round Display主要使用**LVGL**、**TFT_eSPI**和**Arduino GFX**库。为了节省空间，我们将以绘制表盘为例，分别介绍**LVGL**和**TFT_eSPI**库的使用。

- 您可以通过单击了解**TFT_eSPI**库的接口和使用 **[此处](https://wiki.seeedstudio.com/susing_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library)**.

- 您可以通过单击了解**LVGL**库的界面和使用 **[此处](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library)**.

- 您可以通过单击了解**Arduino GFX**库的界面和使用 **[此处](https://github.com/moononournation/Arduino_GFX)**.

## 点亮圆形显示屏

一旦硬件和软件准备就绪，我们就开始上传我们的第一个示例程序。此示例程序可用于检查圆显的RTC时钟、SD卡和触摸功能是否正常工作。

您可以在Arduino IDE中的 **File -> Examples -> Seeed Arduino Round display -> HardwareTest**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

只需选择您正在使用的XIAO和XIAO所在的端口号，编译并上传即可。

确保圆形显示开关切换到ON（接通）位置。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

如果程序运行顺利，您将看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

：：：注释
此示例程序将测试扩展板的所有功能项目，包括RTC功能。如果您没有安装I2C BM8563 RTC库，则可能会报告错误，您可以注释掉该函数`lv_hardware_test()`，则SD卡的功能检测也将关闭。
:::

## 故障排除

### Q1：为什么我上传程序后，显示屏上什么都不显示？

A： 请检查圆形显示开关是否已打开。如果您使用的是XIAO ESP32C3，您可能还需要在上传程序后按Reset才能使其工作。

### Q2：如果我想将Seeed Studio XIAO ESP32S3 Sense连接到这个扩展屏幕，两个TF卡插槽会发生冲突吗？

A： 这不会造成冲突。不同的SD卡插槽通过芯片选择进行控制，如果您想在Sense上使用microSD卡插槽，芯片选择引脚应为**21**，如果您想要在Round Display上使用microSD卡插槽，则芯片选择引脚应该为**D2**。

我们有[例子](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera) 在S3 Sense相机教程中同时使用硬件和microSD卡。

### Q3：为什么我的XIAO RP2040在使用带有圆形显示的硬件测试代码时会出现一个非常奇怪的C++错误？

A： 这可能是由于您没有为XIAO RP2040选择适当的编译选项造成的。请参考下图设置并重新上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

### Q4：我已经学习了教程，但仍然无法正确编译TFT或LVGL程序，该怎么办？

TFT库和LVGL库的更新可能会导致教程中的过程失败。我们建议您使用我们的[库的测试和稳定版本](https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/libraries)，您甚至无需自己更改其中的配置即可使用。

## 资源

- **[PDF]**[充电IC数据表](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]**[ETA3410数据表](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]**[RTC PCF8563数据表](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]**[1.28''a-Si TFT液晶显示器数据表](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]**[见肖的工作室圆形显示屏](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[ZIP]**[参见XIAO SCH和PCB的Studio圆形显示屏](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[STL]**[圆形显示外壳的3D模型图](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[PDF]**[GJX0128A4-15HY产品介绍](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)


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

