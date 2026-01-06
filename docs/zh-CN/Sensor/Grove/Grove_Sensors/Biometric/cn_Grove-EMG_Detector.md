---
description: Grove - EMG 检测器
title: Grove - EMG 检测器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-EMG_Detector
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_product.jpg" /></div>

EMG 检测器是连接人体和电子设备的桥梁，传感器收集微小的肌肉信号，然后通过二级放大和滤波处理，输出信号可以被 Arduino 识别。您可以将此信号添加到您的控制系统中。

:::note
该传感器不能用于医疗目的。
:::

在待机模式下，输出电压为 1.5V。当检测到肌肉活动时，输出信号上升，最大电压为 3.3V。您可以在 3.3V 或 5V 系统中使用此传感器。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

特性
--------

- Grove 兼容
- 3.5mm 连接器
- 6 个一次性表面电极
- 电源电压：3.3V-5V
- 1000mm 电缆引线
- 无需额外电源

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

硬件概述
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_EMG_detector.jpg" /></div>

- J2：Grove 接口，连接到模拟 I/O；
- J1：EMG 一次性表面电极连接器。
- U1：INA331IDGKT，差分放大器。
- U2、U3：OPA333，零漂移放大器。

演示
-------------

此演示将向您展示如何使用 Grove - LCD RGB 背光，我们需要一个 Seeeduino V3.0、一个 Grove - LED Bar 和 Grove - Base Shield。

### 硬件安装

将 Grove - Base Shield 插入 Seeeduino，然后将 Grove - LED Bar 连接到 D8，将 Grove - EMG 传感器连接到 A0。

最后，将三个电极贴到您的肌肉上，并保持每个电极之间的距离。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_connect.jpg" /></div>

:::tip
该产品的零件清单最近已更新。您可能会收到两种规格的连接线，它们的功能完全相同，只是颜色不同，对应关系如下图所示。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/newline.png" /></div>
:::

### 下载代码并上传

您可以在 github 上下载演示代码，点击[这里](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code/)，然后将其解压到任何地方。

然后将代码上传到 Seeeduino，如果您在代码上传方面有任何问题，请参考 Seeeduino 入门指南

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_ide.png" /></div>

### 移动

下载演示代码完成后，需要大约 5 秒钟进行初始化，初始化时您应该保持静止。

您可以看到在初始化时，LED Bar 会从第 10 级降到第 0 级。当 LED Bar 全部关闭时，您现在可以移动了。

当您移动时，您会发现 LED Bar 的级别会发生变化。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_emg_demo_2.gif" /></div>


<!-- # Grove-EMG 传感器 v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div> -->

资源
--------

- [Grove-EMG 传感器 v1.1 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip)
- [演示代码](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_EMG_Detector -->

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

