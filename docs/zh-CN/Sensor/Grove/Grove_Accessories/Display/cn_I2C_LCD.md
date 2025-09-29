---
description: I2C LCD
title: I2C LCD
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/I2C_LCD
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg" alt="pir" width={600} height="auto" /></p>

I2C_LCD 是一个易于使用的显示模块，它可以让显示变得更加简单。使用它可以降低制作的难度，使创客能够专注于工作的核心部分。

我们为 I2C_LCD 开发了 Arduino 库，用户只需几行代码即可实现复杂的图形和文本显示功能。在某些场合，它可以替代 Arduino 的串口监视器，让您无需电脑即可获取运行信息。

不仅如此，我们还开发了专用的图片数据转换软件（位图转换器），目前支持 Windows、Linux 和 Mac OS 平台。通过位图转换软件，您可以将自己喜欢的图片显示在 I2C_LCD 上，而无需复杂的编程。

I2C_LCD 为您提供了一种非常便捷的制作方式。尽情享受吧！

### 产品版本

| 版本 	| 购买方式	|
|-----------|---------------|
|I2C_LCD（带通用 Grove 电缆）|[<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|
|I2C_LCD（带转换 Grove 电缆）|[<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|

## 特性

* 仅占用 2 个 Arduino 引脚（使用 I2C 接口）。
* 支持标准 I2C 模式（100Kbit/s）和快速 I2C 模式（400Kbit/s）。
* 兼容多种通信逻辑电平：2.8~5VDC。
* 支持 Arduino 库，只需一行代码即可完成显示。
* 集成 7 种大小的 ASCII 字体，5 种图形功能。
* 提供专用的图片数据转换软件（位图转换器）。
* 大部分复杂操作由 I2C_LCD 独立控制器处理，节省用户控制器资源。
* 支持光标功能，可设置 16 种光标闪烁频率。
* 支持 128 级背光亮度调节。
* 支持 64 级屏幕对比度调节。
* 支持设备地址修改。
* 支持 127 个 I2C_LCD 并行工作。
* 在调试代码时，可以替代串口监视器监控程序运行状态。
* 提供两种异常恢复方法：重置和恢复出厂设置。
* 兼容 Grove 接口和 4Pin-100mil 接口（在 Grove 插座下）。
* 4 个对称固定孔设计，方便用户安装。
* 独特的中国风外观设计。

## 支持的平台

## 接口功能

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg" alt="pir" width={600} height="auto" /></p>

## 规格
| 参数 | 值 |
|------|-----|
| 屏幕类型 | 双色 LCD |
| 屏幕分辨率 | 128*64 像素 |
| 屏幕活动区域 (长*宽) | 47.1*26.5mm |
| 单个像素大小 | 0.33*0.33mm |
| 通信模式 | I2C(100Kbit/s 和 400Kbit/s) |
| 控制器 | STM8S005KBT6 |
| 工作频率 | 16 MHz |
| 重量 | 20g |

## 电气特性
| 参数 | 最小值 | 典型值 | 最大值 | 单位 |
|------|--------|--------|--------|------|
| 电源电压（5V 到 GND） | 4.5 | 5 | 5.5 | V |
| 逻辑电压（SCL/SDA） | 2.8 | 5 | 5.5 | V |
| HBM ESD | - | 5000 | - | V |
| 温度 | -20 | 25 | 70 | ℃ |

## 应用创意

以下是一些有趣的项目供您参考。

| 显示图片 | 带日历的时钟 | 用作调试器 |
|----------|--------------|------------|
| <p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/BitmapDisplay_p1.png" alt="pir" width={600} height="auto" /></p> | <p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/ClockWithCalendar_p1.png" alt="pir" width={600} height="auto" /></p> | <p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/debugWithMe_p1.png" alt="pir" width={600} height="auto" /></p> |
| [立即制作](https://www.instructables.com/id/Display-Picture-Or-Icon-On-the-fancy-I2CLCD/) | [立即制作](https://www.instructables.com/id/Beautiful-and-practical-clock-with-calendar/) | [立即制作](https://www.instructables.com/id/Use-I2CLCD-to-Debug-Your-Project-1/) |

| 自动加湿器 | 贪吃蛇游戏 |
|------------|------------|
| <p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/AutomaticHumidifier.png" alt="pir" width={600} height="auto" /></p> | <p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/DIY_SnakeGame.png" alt="pir" width={600} height="auto" /></p> |
| [立即制作](https://www.instructables.com/id/DIY-a-Simple-Automatic-Humidifier/) | [立即制作](https://community.seeedstudio.com/project_detail.html?id=1621) |

## 入门指南

**步骤 1：** 在您的电脑上安装最新版本的 Arduino IDE。

[<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={600} height="auto" /></p>](https://www.arduino.cc/en/Main/Software)

**步骤 2：** 下载并安装 I2C_LCD 库到 Arduino IDE：

打开 Arduino IDE，**点击 Sketch -> Include library -> Add .ZIP library**。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg" alt="pir" width={600} height="auto" /></p>

找到并选择您刚刚下载的 **I2C_LCD.zip** 文件。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg" alt="pir" width={600} height="auto" /></p>

重启 Arduino IDE。

**步骤 3：** 选择您喜欢的示例项目。（这里以 "HelloWorld" 项目为例。）

**点击 File > Examples > I2C_LCD > HelloWorld**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg" alt="pir" width={600} height="auto" /></p>

**步骤 4：** 使用 Grove 电缆将 I2C_LCD 连接到您的 Seeeduino Vx 板。然后将 Seeeduino Vx 板连接到您的电脑。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg" alt="pir" width={600} height="auto" /></p>

**步骤 5：** 选择您的板子和串口。

选择板子：**点击 Tools > Board > "Arduino Duemilanove or Diecimila"(Seeeduino V3.0 或早期版本), "Arduino Uno"(Seeeduino Lotus 或 Seeeduino V4.0)**。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg" alt="pir" width={600} height="auto" /></p>

选择串口：**点击 Tools -> Serial Port -> COMX(与您的板子连接的端口)**。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg" alt="pir" width={600} height="auto" /></p>

**步骤 6：** 上传程序并**享受乐趣！**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg" alt="pir" width={600} height="auto" /></p>

**备注：**

1. 有关库安装的更多详细信息，请参考 https://arduino.cc/en/Guide/Libraries。
2. 如果您在使用过程中遇到其他问题，请参考用户手册寻求帮助。如果仍无法解决，请联系我们。

**技术支持：** Joney.s@foxmail.com

## 版本追踪
**I2C_LCD 硬件：**

| 修订版本 	| 发布说明	| 发布日期	|
|-----------|---------------|---------------|
|I2C_LCD_v1.2| 1. 添加生产测试点。 |2015年9月18日|
|I2C_LCD_v1.1| 1. 修改标志位置。 2. 修改板形状。 3. 修改按钮位置。 |2014年5月8日|
|I2C_LCD_v1.0| 1. 修改电源电路布线。 |2014年3月1日|
|I2C_LCD_v0.9b| 1. 初始公开发布。 |2014年2月15日|

**I2C_LCD 库：**

| 修订版本 	| 发布说明	| 发布日期	|
|-----------|---------------|---------------|
|I2C_LCD_v1.21| 支持 LinkIt 板。 |2016年8月21日|
|I2C_LCD_v1.20| 重组 I2C_LCD 驱动接口，使其更易移植到其他板上。 |2016年4月16日|
|I2C_LCD_v1.12| 修复当 y 坐标大于 16 时无法显示位图的错误。|2015年9月4日|
|I2C_LCD_v1.11| 修复 '\t' 无法打印的错误。|2015年6月27日|
|I2C_LCD_v1.10| 1. 添加 LCD 打印功能。 2. 编辑 DeviceAddressConfig 示例。|2015年6月25日|
|I2C_LCD_v1.0| 初始公开发布。 |2014年7月6日|

## 资源

持续更新最新版本。

[Arduino 库的仓库托管在此处](https://github.com/SparkingStudio/I2C_LCD_library)，如果您对代码有任何好的想法，可以向我们提交。

* [I2C_LCD 库](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD_Library.zip)
* [I2C_LCD 用户手册（英文）](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_EN.zip)
* [I2C_LCD 用户手册（中文）](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_CN.zip)
* [BitmapConverter（Windows版）](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.rar)
* [BitmapConverter（MacOS版）](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.dmg)
* [BitmapConverter（Linux版）](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.tar.gz)
* [I2C_LCD 源文件](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD12864_SourceFile.zip)

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