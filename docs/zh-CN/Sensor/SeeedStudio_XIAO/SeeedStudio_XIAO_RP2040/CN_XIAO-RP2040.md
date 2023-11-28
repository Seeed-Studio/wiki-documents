---
description: 概述
title: 入门指南
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-RP2040
last_update:
  date: 11/2/2023
  author: 金 菊
---

#  Seeed Studio XIAO RP2040 开发板

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>


Seeed Studio XIAO RP2040与Seeed Studio XIAO SAMD21一样小巧，但更加强大。一方面，它搭载了强大的双核RP2040处理器，可灵活运行高达133 MHz的时钟频率，是一款低功耗微控制器。在Seeed Studio XIAO RP2040上还有264KB的SRAM和2MB的板载闪存，可提供更多的程序存储和运行空间。另一方面，这块小板子在处理性能上表现出色，但功耗较低。

总之，它设计成了一个迷你的尺寸，仅有拇指大小（20x17.5mm），可用于可穿戴设备和小型项目。

Seeed Studio XIAO RP2040上有14个GPIO引脚，其中包括11个数字引脚、4个模拟引脚、11个PWM引脚、1个I2C接口、1个UART接口、1个SPI接口和1个SWD Bonding pad接口。

Seeed Studio XIAO RP2040与Seeed Studio XIAO扩展板兼容。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get one now 🖱️</font></span></strong>
    </a>
</div>

## **特点**

- 强大的微控制器：双核ARM Cortex M0+处理器，可灵活运行高达133 MHz的时钟频率。
- 丰富的芯片资源：264KB的SRAM和2MB的板载闪存
- 灵活的兼容性：支持Micropython/Arduino/CircuitPython
-  灵活的兼容性：支持Micropython/Arduino/CircuitPython
- 小巧的尺寸：与拇指一样小（20x17.5mm），适用于可穿戴设备和小型项目。
- 多种接口：11个数字引脚，4个模拟引脚，11个PWM引脚，1个I2C接口，1个UART接口，1个SPI接口，1个SWD Bonding pad接口。


## **规格**

|项目|值|
|---|---|
|CPU|双核ARM Cortex M0+处理器，最高可达133MHz|
|闪存|2MB|
|静态随机存储器|264KB|
|数字 I/O 引脚|11|
|模拟 I/O 引脚|4|
|PWM 引脚|11|
|I2C 接口|1|
|SPI 接口|1|
|UART 接口|1|
|电源和下载接口| Type-C|
|电源|3.3V/5V DC|
|大小|20×17.5×3.5mm|


## **硬件概述**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::注意

    对于一般的I/O引脚：
    MCU的工作电压为3.3V。如果将高于3.3V的电压输入连接到一般的I/O引脚上，可能会导致芯片损坏。

    对于电源引脚：
    内置的DC-DC转换器电路能够将5V电压转换为3.3V，可以通过VIN引脚和5V引脚使用5V电源来供电设备。

    请注意使用，不要抬起盖板。
:::    
    
### **进入Bootloader模式**


有时当用户编程过程失败时，seed Studio XIAO RP2040端口可能会消失。我们可以通过以下操作来解决这个问题:

- 长按“B”键。
- 将Seeed Studio XIAO PR2040连接到您的计算机。
- 计算机将出现一个磁盘驱动程序。

此时，芯片进入引导加载程序模式，刻录端口再次出现。因为RP2040芯片有两个分区，一个是引导加载程序，另一个是用户程序。该产品出厂时将在系统内存中刻录引导加载程序代码。我们可以通过执行上述步骤来切换模式。

### **重置**

如果需要重置Seeed Studio XIAO RP2040，请执行以下步骤:

- 将Seeed Studio XIAO RP2040连接到您的计算机。
- 按“R”针 **一次**.

请注意: 内置可编程单色led(它们是红色，蓝色和绿色)的行为与Arduino上的行为相反。在seed Studio XIAO RP2040上，引脚必须拉低才能使能。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ## 示意图在线查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div> -->


## 资源文件


- **[PDF]** [RP2040 数据手册](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO RP2040 原理图](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)

- **[ZIP]** [Seeed Studio XIAO RP2040 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO RP2040尺寸在DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip)

- **[LBR]** [Seeed Studio XIAO RP2040的Eagle封装图案](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO RP2040 引脚分配表](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO RP2040 3D 模型](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040认证文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-Certification.zip)



## 技术支持和产品讨论

感谢您选择我们的产品！我们将为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>