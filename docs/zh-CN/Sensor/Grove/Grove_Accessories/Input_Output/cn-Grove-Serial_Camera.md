---
title: Grove - 串行相机
description: Grove - 串行相机
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Serial_Camera/
slug: /cn/Grove-Serial_Camera
last_update:
  date: 03/23/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_camera.jpg)

串行相机是一款易于微控制器（MCU）使用的JPEG彩色相机模块。它集成了图像处理DSP，可生成不含缩略图信息的320*240或640*480 JPEG图像。捕获的图片将存储在内部缓冲区中，并通过UART端口传输。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Camera-p-945.html)

## 特性

- Grove接口
- 不含缩略图信息的JPEG压缩图像
- 5V电源供电
- 小巧紧凑
- 协议控制

:::提示
   更多关于Grove模块的信息，请参考[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格参数

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
操作电压
</th>
<td>
4,8
</td>
<td>
5.0
</td>
<td>
5.3
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
分辨率（默认）
</th>
<td colspan="3">
640x480 / 320x240
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
串口默认波特率
</th>
<td colspan="3">
115200
</td>
<td>
波特
</td>
</tr>
</table>


支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
    上述列出的支持平台仅表示该模块的软件或理论兼容性。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户必须自行编写软件库。
:::

## 应用创意

- 与[SD卡屏蔽罩](https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109)搭配使用的数码相机
- 视频监控系统

## 使用方法

### 在电脑上使用摄像头

**步骤1**：下载专用的串口调试工具[VC0703COMTOOL.rar](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar)并安装。

**步骤2**：使用UartSBee串口转换器工具，通过USB将串行摄像头连接到电脑。

| 串行摄像头 | Uart\_SB v3.1 |
| ---------- | ------------- |
| GND (黑色) | GND           |
| VCC (红色) | VCC           |
| RX (白色)  | TX            |
| TX (黄色)  | RX            |

**步骤3：**将Uart_SB v3.1连接到电脑并打开vc0703CommTool软件。选择您与摄像头连接的正确COM端口号，默认波特率为115200，然后打开端口。

**步骤4：**点击“获取版本”按钮，这将重置摄像头。

**步骤5：**点击“Fbuf”按钮准备拍照。

1. 点击“停止CFbuf”来拍照。

2. 点击“选择文件”来选择存储图片的文件名。

3. 点击“读取”从缓冲区读取数据并存储到所选文件中，如下所示：

    ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera_Picture.jpg)

4. 点击“恢复”以恢复帧更新，这样您就可以继续拍摄另一张照片。

### 使用Arduino和SD卡与摄像头

**步骤1**：将Grove - Serial Camera连接到Arduino板，所需的硬件部件包括Seeeduino V3.0、SD Card Shield、SanDisk microSD™ Card 2GB、Grove - Button。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera.jpg) -->

**步骤2**：将串行接收缓冲区大小（默认64字节）更改为128字节。打开hardware/arduino/cores目录，并编辑名为wiring_serial.c或HardwareSerial.cpp的文件。在文件顶部附近有一个#define SERIAL_BUFFER_SIZE 64，这表示缓冲区使用了64字节。您需要将此值更改为128。更多详细信息，请参考[Arduino Hacks](http://learn.adafruit.com/arduino-tips-tricks-and-techniques/arduino-hacks)。

**步骤3**：下载[Grove - Serial Camera库](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip)，将其上传到Seeeduino。如果无法编译，请确认您的Arduino IDE文件夹中是否包含[SD库](https://arduino.cc/en/Reference/SD)。

**步骤4**：打开串行监视器，在SD卡和摄像头初始化后，按下按钮拍照。

## 资源

- [VC0703 调试工具](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar)
- [串行摄像头手册.pdf](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/Manual_for_serial_camera.pdf)
- [Grove - Serial Camera 库](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Serial_Camera -->

## 技术支持和产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
