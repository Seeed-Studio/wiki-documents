---
description: 概述
title: Seeed Studio XIAO RP2040 入门指南
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /cn/XIAO-RP2040
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO RP2040 入门指南

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>


Seeed Studio XIAO RP2040 与 Seeed Studio XIAO SAMD21 一样小巧，但功能更强大。一方面，它搭载了强大的双核 RP2040 处理器，可灵活运行时钟频率高达 133 MHz，是一款低功耗微控制器。Seeed Studio XIAO RP2040 还配备了 264KB 的 SRAM 和 2MB 的板载闪存，可以提供更多的程序存储和运行空间。另一方面，这块小板子在处理性能方面表现出色，但功耗更低。  
总而言之，它采用拇指大小的微型设计（21x17.8mm），可用于可穿戴设备和小型项目。

Seeed Studio XIAO RP2040 有 14 个 GPIO 引脚，其中包括 11 个数字引脚、4 个模拟引脚、11 个 PWM 引脚、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口、1 个 SWD 焊盘接口。

Seeed Studio XIAO RP2040 兼容 Seeed Studio XIAO 扩展板。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## **特性**

- 强大的 MCU：双核 ARM Cortex M0+ 处理器，灵活时钟频率高达 133 MHz
- 丰富的片上资源：264KB SRAM 和 2MB 板载闪存
- 灵活兼容性：支持 Micropython/Arduino/CircuitPython
- 简易项目操作：面包板友好和 SMD 设计，背面无元件
- 小尺寸：拇指大小（21x17.8mm），适用于可穿戴设备和小型项目
- 多种接口：11 个数字引脚、4 个模拟引脚、11 个 PWM 引脚、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口、1 个 SWD 焊盘接口

## **规格参数**

|项目|数值|
|---|---|
|CPU|双核 ARM Cortex M0+ 处理器，最高 133MHz|
|闪存|2MB|
|SRAM|264KB|
|数字 I/O 引脚|11|
|模拟 I/O 引脚|4|
|PWM 引脚|11|
|I2C 接口|1|
|SPI 接口|1|
|UART 接口|1|
|电源供应和下载接口| Type-C|
|电源|3.3V/5V DC|
|尺寸|21×17.8×3.5mm|


## **硬件概述**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
对于通用 I/O 引脚：
MCU 的工作电压为 3.3V。连接到通用 I/O 引脚的电压输入如果高于 3.3V 可能会导致芯片损坏。

对于电源供应引脚：
内置的 DC-DC 转换器电路能够将 5V 电压转换为 3.3V，允许通过 VIN 引脚和 5V 引脚使用 5V 电源为设备供电。

XIAO RP2040 目前仅支持电池供电，在连接电池时不能连接 Type-C，因为这可能存在安全风险。

请注意使用，不要撬开屏蔽罩。
:::    
    
### **进入 Bootloader 模式**


有时当用户编程过程失败时，Seeed Studio XIAO RP2040 端口可能会消失。我们可以通过以下操作解决这个问题：

- 长按"B"按钮。
- 将 Seeed Studio XIAO PR2040 连接到您的计算机。
- 计算机将出现一个磁盘驱动器。

此时，芯片进入 Bootloader 模式，烧录端口再次出现。因为 RP2040 芯片有两个分区，一个是 Bootloader，另一个是用户程序。产品出厂时会在系统内存中烧录 bootloader 代码。我们可以通过执行上述步骤来切换模式。

### **复位**

如果您想复位 Seeed Studio XIAO RP2040，请执行以下步骤：

- 将 Seeed Studio XIAO RP2040 连接到您的计算机。
- 按一次"R"引脚。

请注意：内置可编程单色 LED（红色、蓝色和绿色）的行为与 Arduino 上的相反。在 Seeed Studio XIAO RP2040 上，引脚必须拉低才能启用。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## 原理图在线查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源


- **[PDF]** [RP2040 数据手册](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO RP2040 原理图](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Seeed Studio XIAO RP2040 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO RP2040 DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip)

- **[LBR]** [Seeed Studio XIAO RP2040 Eagle 封装](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO RP2040 引脚图表](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO RP2040 3D 模型](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip)


- 🔗 **[Kicad]** [Seeed Studio XIAO RP2040 封装](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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