---
description: 适用于树莓派的 DS1307 RTC（实时时钟）
title: 适用于树莓派的 DS1307 RTC（实时时钟）
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Pi_RTC-DS1307
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/main.jpg)

Pi RTC 基于时钟芯片 DS1307，它可以通过 I2C 接口为树莓派提供实时时钟（RTC）。该模块的实时时钟可以计算秒、分钟、小时、日期、月份、星期几和年份，具有闰年补偿功能，有效期至 2100 年。时钟可以在 24 小时或 12 小时格式下工作，并带有 AM/PM 指示器。如果您希望在树莓派断电时保持该模块的计时功能，您需要在电池座中放入一个 3 伏的 CR1225 锂电池。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Pi-RTC-DS1307.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::note
        电池不包含在内。
:::

## 特性

- 支持树莓派 2/ 3 B/B+/4/Zero
- 支持秒、分钟、小时、星期几、月份、年份
- 支持 24 小时或 12 小时格式，带 AM/PM 指示器
- 56 字节电池备份非易失性（NV）RAM 用于数据存储
- 双线串行接口
- 可编程方波输出信号
- 自动断电检测和切换电路

## 规格参数

|项目|值|
|---|---|
|工作电压|5V|
|接口|I2C|
|I2C 地址|0x68|

## 典型应用

任何需要在树莓派上使用实时时间的应用。

## 引脚定义

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/pin_out.jpg)

:::note
RX/TX 在此模块中未使用，但 5x2 排针占用了树莓派的 RX/TX 引脚，因此我们将 RX/TX 引出并提供了一个 2 针排针。
:::

### 原理图

**双向电平转换电路**

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/schematic.jpg)

这是一个典型的双向电平转换电路，用于连接 I^2^C 总线的两个不同电压部分。树莓派的 I<sup>2</sup>C 总线使用 3.3V，但是芯片 DS1307 工作在 5V，因此需要这个电路。在上面的原理图中，**Q1** 和 **Q2** 是 N 沟道 MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)，它们充当双向开关。为了更好地理解这部分，您可以参考 [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## 支持的平台

|                                                                                             | 树莓派                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|  ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 开始使用

### 所需材料

|Raspberry Pi|Pi RTC(DS1307)|
|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|

:::note
请轻柔地插入USB线缆，否则可能会损坏端口。请使用内部有4根线的USB线缆，2根线的线缆无法传输数据。如果您不确定您的线缆是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买
:::

### 安装

我们提供的驱动程序仅适用于Raspbian Jessie/Stretch。

:::tip
如果您不知道如何使用树莓派，请在开始之前查看[这里](https://www.raspberrypi.org/documentation/)。
:::

- **步骤1. 驱动程序安装**

在您的终端中输入以下命令

```
git clone https://github.com/Seeed-Studio/pi-hats.git
```

下载完成后，在您的终端中输入以下命令

```
cd ~/pi-hats/tools
sudo ./install.sh -u rtc_ds1307
```

- **步骤2. 关闭树莓派**

```
sudo shutdown -h now
```

- **步骤3. 将HAT插入树莓派**

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/connect.jpg)

请确保将此帽子的引脚1插入树莓派GPIO的引脚1，就像上图所示。

- **步骤4. 启动树莓派**

### 使用方法

现在您可以使用命令检查驱动程序是否安装成功。

```
./install.sh -l
```

如果您想卸载驱动程序，可以使用以下命令：

```
sudo ./install.sh -u
```

现在让我们看看RTC模块能做什么：

___
读取硬件时钟并打印结果

```
sudo hwclock -r
```

___

从硬件时钟设置系统时间

```
sudo hwclock -s
```

___

从当前系统时间设置硬件时钟

```
sudo hwclock -w
```

___

更多用法

```
hwclock --help
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Pi RTC(DS1307) Eagle文件](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip)

- **[http]** [Seeed Pi RTC库](https://github.com/Seeed-Studio/pi-hats)

- **[PDF]** [数据手册 DS1307](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/DS1307.pdf)

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