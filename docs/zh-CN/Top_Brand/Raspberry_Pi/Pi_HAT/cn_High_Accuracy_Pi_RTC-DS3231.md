---
description: 适用于树莓派的 DS3231 高精度 RTC（实时时钟）
title: 适用于树莓派的 DS3231 高精度 RTC（实时时钟）
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/High_Accuracy_Pi_RTC-DS3231
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/main.jpg"/></div>

高精度树莓派 RTC 基于时钟芯片 DS3231。DS3231 是一款低成本、极高精度的 I2C 实时时钟（RTC）。它通过 I2C 接口为树莓派提供 RTC 功能。凭借来自 TCXO（温度补偿晶体振荡器）的时钟源，RTC 维护秒、分、时、星期、日期、月份和年份信息。月末日期会自动调整为少于 31 天的月份，包括闰年修正。时钟可在 24 小时或 12 小时格式下工作，并带有 AM/PM 指示器。时钟提供两个可编程的时间报警和可编程方波输出。INT/SQW 引脚要么由于报警条件产生中断，要么输出方波信号，选择由 INTCN 位控制。

如果您希望即使在树莓派断电时也保留时间信息，您需要在电池座中插入一个 3V CR1225 锂电池。如果您正在为 Arduino 项目寻找 RTC，请也查看我们的博客 Arduino RTC 教程：使用 DS1307 RTC 与 Arduino 轻松入门。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/High-Accuracy-Pi-RTC-%28DS3231%29-p-3214.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| 高精度树莓派 RTC (DS3231) | 初始版本                                                                                               | 2018年9月      |

:::note
        电池不包含在内。
:::

## 特性

- 支持树莓派 2/ 3 B/B+/4/Zero
- 支持秒、分、时、星期、月份、年份
- 支持 24 小时或 12 小时格式，带 AM/PM 指示器
- 低功耗
- 两个时间报警
- 快速 (400kHz) I2C 接口

## 规格

|项目|值|
|---|---|
|工作电压|3.3V|
|工作温度|0℃ 到 +70℃|
|精度|0°C 到 +40°C 范围内 ±2ppm|
|接口|I2C|
|I2C 地址|0x68|
|尺寸|长: 25mm 宽: 25mm 高: 8mm|
|重量|4.2g|
|包装尺寸|长: 85mm 宽: 75mm 高: 25mm|
|毛重|15g|

## 典型应用

任何需要在树莓派上使用实时时钟的应用。

## 开始使用

### 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

### 所需材料

|树莓派|高精度树莓派 RTC(DS3231)|
|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/High-Accuracy-Pi-RTC-DS3231.html" target="_blank">立即购买</a>|

:::note
请轻柔地插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。
:::

### 引脚定义

![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/pin_out.jpg)

:::note

- 芯片本身支持报警功能，我们也保留了相关的硬件接口，但我们的软件库不包含此功能（S/INT 引脚），您需要进行相关的软件开发。

- RX/TX 在此模块中未使用，但 6x2 排针占用了树莓派的 RX/TX 引脚，所以我们将 RX/TX 引出并提供了一个 2 针排针。
:::

### 安装

我们提供的驱动程序仅适用于 Raspbian Jessie/Stretch。

:::tip
如果您不知道如何使用树莓派，请在开始前查看[这里](https://www.raspberrypi.org/documentation/)。
:::

- **步骤 1. 驱动程序安装**

在您的终端中输入以下命令

```
git clone https://github.com/Seeed-Studio/pi-hats.git
```

下载完成后，在终端中输入以下命令

```
cd pi-hats
sudo ./install.sh -u rtc_ds3231
```

- **步骤 2. 关闭树莓派电源**

```
sudo shutdown -h now
```

- **步骤 3. 将 HAT 插入树莓派**

![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/connect.jpg)

请确保将此 HAT 的引脚 1 插入树莓派 GPIO 的引脚 1，如上图所示。

- **步骤 4. 给树莓派上电**

## 使用方法

现在您可以使用以下命令检查驱动程序是否安装成功。

```
./install.sh -l
```

如果您想卸载驱动程序，可以使用以下命令：

```
sudo ./install.sh -u
```

**现在让我们看看 RTC 模块能做什么：**

读取硬件时钟并打印结果

```
sudo hwclock -r
```

从硬件时钟设置系统时间

```
sudo hwclock -s
```

从当前系统时间设置硬件时钟

```
sudo hwclock -w
```

更多用法

```
hwclock --help
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [高精度树莓派 RTC(DS3231) Eagle 文件](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip)

- **[PDF]** [数据手册 DS3231](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/datasheet.pdf)

## 项目

这是本产品的介绍视频

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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