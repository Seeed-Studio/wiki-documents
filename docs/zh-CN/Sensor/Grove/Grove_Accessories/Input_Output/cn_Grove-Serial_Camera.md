---
title: Grove - 串口摄像头
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Serial_Camera/
slug: /cn/Grove-Serial_Camera
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_camera.jpg)

串口摄像头是一款易于 MCU 使用的 JPEG 彩色摄像头模块。它集成了图像处理 DSP，可生成 320*240 或 640*480 的 JPEG 图像（不包含缩略图信息）。拍摄的图片将存储在内部缓冲区中，并通过 UART 端口传输。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Camera-p-945.html)

特点
--------

- Grove 接口
- JPEG 压缩图像（无缩略图信息）
- 5V 电源供电
- 小巧紧凑
- 协议控制

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格参数
--------------

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
工作电压
</th>
<td>
4.8
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
波特率
</td>
</tr>
</table>

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

应用场景
-----------------

- 使用 [SD 卡扩展板](https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109) 的数码相机
- 视频监控系统

使用方法
-----

### 在 PC 上使用摄像头

**步骤 1**：下载专用串口调试工具 [VC0703COMTOOL.rar](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar) 并安装。

**步骤 2**：使用串口转换工具 UartSBee 将串口摄像头连接到 PC。

| 串口摄像头 | Uart_SB v3.1 |
|---------------|---------------|
| GND (黑色)   | GND           |
| VCC (红色)     | VCC           |
| RX (白色)    | TX            |
| TX (黄色)   | RX            |

**步骤 3**：将 Uart_SB v3.1 连接到电脑并打开 vc0703CommTool 软件。选择与摄像头连接的正确 COM 端口号，默认波特率为 115200，然后打开端口。

**步骤 4**：点击“Get Version”按钮以重置摄像头。

**步骤 5**：点击“Fbuf”按钮准备拍摄照片。

1. 点击“stop CFbuf”拍摄照片。

2. 点击“Sel File”选择存储照片的文件名。

3. 点击“Read”从缓冲区读取数据并存储到所选文件中，如下图所示：

    ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera_Picture.jpg)

4. 点击“Resume”恢复帧更新，以便继续拍摄下一张照片。

### 使用 Arduino 和 SD 卡操作摄像头

**步骤 1**：将 Grove - 串口摄像头连接到 Arduino 板，硬件包括 Seeeduino V3.0、SD 卡扩展板、SanDisk microSD™ 卡 2GB、Grove - 按钮。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera.jpg) -->

**步骤 2**：将串口接收缓冲区（默认 64 字节）更改为 128 字节。打开 hardware/arduino/cores 目录，编辑名为 wiring_serial.c 或 HardwareSerial.cpp 的文件，顶部有一个 #define SERIAL_BUFFER_SIZE 64，表示缓冲区使用了 64 字节。需要将其更改为 128。更多详情，请参考 [Arduino Hacks](http://learn.adafruit.com/arduino-tips-tricks-and-techniques/arduino-hacks)。

**步骤 3**：下载 [Grove - 串口摄像头库](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip)，上传到 Seeeduino。如果无法编译，请确认 [SD 库](https://arduino.cc/en/Reference/SD) 是否在您的 Arduino IDE 文件夹中。

**步骤 4**：打开串口监视器，按下按钮拍摄照片（在 SD 卡和摄像头初始化后）。

资源
---------

- [VC0703 调试工具](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar)
- [串口摄像头使用手册.pdf](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/Manual_for_serial_camera.pdf)
- [Grove - 串口摄像头库](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip)

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