---
description: I²C液晶显示屏
title: I²C液晶显示屏
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/I2C_LCD
last_update:
  date: 03/22/2024
  author: WuFeifei
---

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg" alt="pir" width={600} height="auto" /></p>

I2C_LCD是一款易于使用的显示模块，它可以使显示变得更加简单。使用它可以降低制作的难度，让制作者能够更专注于工作的核心。

我们为I2C_LCD开发了Arduino库，用户只需几行代码就能实现复杂的图形和文本显示功能。在某些情况下，它可以替代Arduino的串行监视器，让您无需电脑就能获取运行信息。

除此之外，我们还开发了专门的图片数据转换软件（位图转换器），现在已支持Windows、Linux、Mac OS等PC平台。通过位图转换软件，您可以将您喜欢的图片显示在I2C_LCD上，无需复杂的编程。

I2C_LCD能为您提供一种非常方便的制作方式。尽情享受吧！

### 产品版本

| **版本** | **如何购买**	|
|-----------|---------------|
|I2C_LCD（配备通用Grove线缆）|[<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|
|I2C_LCD（配备转换Grove线缆）|[<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|

**特征**

* 仅占用Arduino的2个引脚（使用I2C接口）。
* 支持标准I2C模式（100Kbit/s）和快速I2C模式（400Kbit/s）。
* 兼容多种通信逻辑电平：2.8~5VDC。
* 提供Arduino库支持，使用一行代码即可完成显示。
* 集成7种大小的ASCII字体，5种图形功能。
* 提供专用图片数据转换软件（位图转换器）。
* 大部分复杂操作由I2C_LCD独立控制器处理，节省用户控制器资源。
* 支持光标功能，可设置16种光标闪烁频率。
* 支持128级背光亮度调节。
* 支持64级屏幕对比度调节。
* 支持设备地址修改。
* 支持127个I2C_LCD并行工作。
* 在调试代码时，可替代串行监视器来监控程序运行状态。
* 提供两种异常恢复方法：重置和恢复出厂设置。
* 兼容Grove接口和4Pin-100mil接口（位于Grove插座下）。
* 4个对称固定孔设计，方便用户安装。
* 具有中式独特外观。

##支持的平台

##接口功能

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg" alt="pir" width={600} height="auto" /></p>

\##规格参数
|Parameter|Value|
|---------|-------------|
| 参数                  | 数值                        |
| 屏幕类型              | 双色LCD                     |
| 屏幕分辨率            | 128*64像素                  |
| 屏幕活动区域（长*宽） | 47.1*26.5毫米               |
| 单个像素尺寸          | 0.33*0.33毫米               |
| 通信模式              | I2C（100Kbit/s和400Kbit/s） |
| 控制器                | STM8S005KBT6                |
| 工作频率              | 16 MHz                      |

##电气特性

|参数| 最小值 | 典型值 | 最大值 | 单位 |
|---------|------|------|------|------|
|供电电压（5V至GND）|4.5|5|5.5|V|
|逻辑电压（SCL/SDA）|2.8|5|5.5|V|
|人体模型静电放电（HBM ESD）|-|5000|-|V|
|温度|-20|25|70|℃|

##应用创意

以下是一些有趣的项目供您参考。

|显示图片|时钟与日历|用作调试器|
|-------|-------|-------|
|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/BitmapDisplay_p1.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/ClockWithCalendar_p1.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/debugWithMe_p1.png" alt="pir" width={600} height="auto" /></p>|
| [现在就动手制作吧！](https://www.instructables.com/id/Display-Picture-Or-Icon-On-the-fancy-I2CLCD/) | [现在就动手制作吧！](https://www.instructables.com/id/Beautiful-and-practical-clock-with-calendar/) | [现在就动手制作吧！](https://www.instructables.com/id/Use-I2CLCD-to-Debug-Your-Project-1/ ) |


|自动加湿器|贪吃蛇游戏|
|-------|-------|
|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/AutomaticHumidifier.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/DIY_SnakeGame.png" alt="pir" width={600} height="auto" /></p>|
| [现在就动手制作吧！](https://www.instructables.com/id/DIY-a-Simple-Automatic-Humidifier/) | [现在就动手制作吧！](https://community.seeedstudio.com/project_detail.html?id=1621) |



##入门指南

**步骤 1:** 将Arduino IDE的最新版本安装到您的计算机上。

[<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={600} height="auto" /></p>](https://www.arduino.cc/en/Main/Software)

**步骤 2:** 下载并安装I2C_LCD库到Arduino IDE：

打开Arduino IDE，**点击Sketch（草图）-> Include library（包含库）-> Add .ZIP library（添加.ZIP库）**。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg" alt="pir" width={600} height="auto" /></p>

找到并选择您刚刚下载的**I2C_LCD.zip**文件。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg" alt="pir" width={600} height="auto" /></p>

重新启动Arduino IDE。

**步骤 3:** 选择您喜欢的示例项目。（这里以“HelloWorld”项目为例。）

**点击File（文件）> Examples（示例）> I2C_LCD > HelloWorld**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg" alt="pir" width={600} height="auto" /></p>

**步骤 4:** 使用Grove线缆将I2C_LCD连接到您的Seeeduino Vx板上。然后将Seeeduino Vx板连接到您的计算机。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg" alt="pir" width={600} height="auto" /></p>

**步骤 5:** 选择您的开发板和串行端口。

选择开发板：**点击Tools（工具）> Board（开发板）> "Arduino Duemilanove or Diecimila"（适用于Seeeduino V3.0或更早版本）,"Arduino Uno"（适用于Seeeduino Lotus或Seeeduino V4.0）**。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg" alt="pir" width={600} height="auto" /></p>

选择COM端口：**点击Tools（工具）-> Serial Port（串行端口）-> COMX（与您的开发板连接的端口）**。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg" alt="pir" width={600} height="auto" /></p>

**步骤 6:** 上传程序， **开始享受吧！**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg" alt="pir" width={600} height="auto" /></p>

**PS:**

1. 关于库的安装的更多详细信息，请参考https://arduino.cc/en/Guide/Libraries。
2. 如果在使用过程中遇到其他问题，请参考用户手册以获取帮助。如果无法解决，请联系我们。

**技术支持邮箱：**[Joney.s@foxmail.com](mailto:Joney.s@foxmail.com)

\##版本追踪
**I2C_LCD 硬件：**

| 版本号 | 发行说明                                            | 发行日期      |
|-----------|---------------|---------------|
|I2C_LCD_v1.2| 1. 增加生产测试点。 |2015年9月18日|
|I2C_LCD_v1.1| 1. 修改标志位置。2. 修改板卡形状。3. 修改按钮位置。 |2014年5月8日|
|I2C_LCD_v1.0| 1. 修改电源电路布线。 |2014年3月1日|
|I2C_LCD_v0.9b| 1. 初始公开发行。 |2014年2月15日|

**I2C_LCD 库：**

| 版本号 | 发行说明	| 发行日期	|
|-----------|---------------|---------------|
|I2C_LCD_v1.21| 支持LinkIt开发板。 |2016年8月21日|
|I2C_LCD_v1.20| 重新组织I2C_LCD驱动接口，使其更容易移植到其他开发板上。 |2016年4月16日|
|I2C_LCD_v1.12| 修复当y坐标大于16时无法显示位图的bug。 |2015年9月4日|
|I2C_LCD_v1.11| 修复无法打印'\t'字符的bug。 |2015年6月27日|
|I2C_LCD_v1.10| 1.增加LCD打印功能。2.编辑DeviceAddressConfig示例。 |2015年6月25日|
|I2C_LCD_v1.0| 初始公开发行。 |2014年7月6日|

\##资源

请保持更新至最新版本。

[Arduino库的仓库托管在这里](https://github.com/SparkingStudio/I2C_LCD_library)，如果您对代码有任何好想法，欢迎向我们提交。

* [I2C_LCD 库](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD_Library.zip)
* [I2C_LCD 用户手册（英文）](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_EN.zip)
* [I2C_LCD 用户手册（中文）](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_CN.zip)
* [BitmapConverter(适用于Windows)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.rar)
* [BitmapConverter(适用于MacOS)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.dmg)
* [BitmapConverter(适用于Linux)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.tar.gz)
* [I2C_LCD_源文件](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD12864_SourceFile.zip)
## \##技术支持与产品讨论
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品时能够尽可能地顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
