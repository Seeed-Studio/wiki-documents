---
description: Grove - 指纹传感器
title: Grove - 指纹传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Fingerprint_Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Print_Sensor.jpg" /></div>

指纹传感器是一款光学指纹传感器，可以让指纹检测和验证变得超级简单。它内置了一个高性能的DSP芯片AS601，用于图像渲染、计算、特征查找和搜索。您还可以直接录入新的指纹 - 最多可以在板载FLASH存储器中存储162个指纹。镜头中有一个红色LED，在拍照时会亮起，让您知道它的工作状态。它易于使用，是您能获得的最好的指纹传感器。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Fingerprint-Sensor-p-1424.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

规格参数
-------------

- 供电电压：3.6~6.0 V
- 工作电流（最大）：120 mA
- 指纹成像时间：1.0 S
- 匹配模式：比较模式 1:1
- 搜索模式：1:N
- 存储容量：162个模板
- 误识率：0.001%（安全等级3）
- 拒识率：1.0%（安全等级3）
- 波特率：9600, 19200, 28800, 38400, 57600bps（默认为57600）
- 接口：TTL串口
- 工作温度：-20 ~ +50 ℃
- 接口

| 引脚编号 | 名称 | 类型 | 功能描述                                     |
|----------|------|------|---------------------------------------------|
| 1        | Vin  | in   | 正电源输入端（线色：红色）                   |
| 2        | TD   | out  | 串行数据输出，TTL逻辑电平（线色：黄色）      |
| 3        | RD   | in   | 串行数据输入，TTL逻辑电平（线色：白色）      |
| 4        | GND  | -    | 信号地（线色：黑色）                        |

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

入门指南
-------------

指纹传感器模块通常用于保险箱 - 它有一个高性能的DSP芯片，用于图像渲染、计算、特征查找和搜索。连接到任何具有TTL串口的微控制器或系统，发送数据包来拍照、检测指纹、哈希和搜索。您还可以直接录入新的指纹 - 最多可以在板载FLASH存储器中存储162个指纹。镜头中有一个红色LED，在拍照时会亮起，让您知道它的工作状态。

- 将传感器连接到Grove - Base Shield的数字端口2。
- 将Grove - Base Shield插入Arduino，并使用USB线将Arduino连接到PC。

当您插入电源时，您可以看到红色LED闪烁，这表示传感器正在工作。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/FingerPrint_Sensor1.jpg" /></div>

- 下载[指纹传感器库](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/Fingerprint_library.rar)并将其解压到Arduino IDE的libraries文件夹中，路径为：..\\arduino-1.0.1\\libraries。

该库可以录入和搜索，因此非常适合任何项目。它可以帮助您在10分钟内开始运行。使用光学指纹传感器基本上有两个要求。首先，您需要录入指纹 - 这意味着为每个指纹分配ID号，以便稍后查询它们。一旦您录入了所有指纹，您就可以轻松地"搜索"传感器，要求它识别当前拍摄的是哪个ID（如果有的话）。

- 通过路径直接打开录入代码：**File->Example->FingerPrint->Enroll**。
- 将代码上传到Arduino。
- 启动串口工具并选择Arduino使用的ComNum和BaudRate。
- 选择"SendNew"选项。发送您要使用的ID号。您可以使用多达162个ID号。它会要求您将手指按在传感器上。此时，您应该看到红色LED闪烁。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/FingerPrint_Sensor3.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger1.jpg" /></div>

- 如果您的按压正常，您可以看到以下消息。然后您需要重复这个过程，以获得第二次清晰的指纹。使用同一根手指！成功后您将看到消息。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger2.jpg" /></div>

- 如果出现问题，如指纹不清晰或图像有问题，您需要重新操作。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger_Print_Score_2.jpg" /></div>

一旦您完成指纹录入，最好进行快速测试以确保它能在数据库中找到。

- 打开演示代码：fingerprint 并上传它。
- 当提示时，将不同/相同的手指按在传感器上。如果是同一根手指，您应该得到匹配的ID编号，如下所示。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger_Print_Score_3.jpg" /></div>

- 如果不是数据库中的手指，串口将不会输出任何内容。

:::tip
有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

资源
--------

- **[库文件]** [指纹传感器库文件](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/Fingerprint_library.rar)
- **[数据手册]** [智安泰ZFM-206系列数据手册（适用于此版本，但为简体中文）](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/ZFM206用户手册V2.1.pdf)
- **[数据手册]** [智安泰ZFM-20系列数据手册（适用于旧系列，但为英文）](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/ZFM-user-manualV15.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Fingerprint_Sensor -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>