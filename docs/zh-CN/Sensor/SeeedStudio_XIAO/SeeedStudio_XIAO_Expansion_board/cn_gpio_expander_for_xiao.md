---
description: 创建一个具有丰富内容的文档页面
title: XIAO的IO扩模块
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/io_expander_for_xiao
last_update:
  date: 10/26/2023
  author: 金 菊
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/GPIO-Expander-for-XIAO-p-5795.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div><br />

XIAO的IO扩展模块是一款先进的扩展板，旨在增强Seeed Studio XIAO系列的功能。该板块采用MCP23017芯片，提供额外的16个IO引脚，使用户能够在项目中进行扩展而无需受限。无论您是一个想要尝试更多组件的爱好者，还是一个寻求可靠的IO扩展解决方案的专业人士，这个板块都可以满足您的需求。它与XIAO系列的兼容性确保了无缝集成，使您的开发过程更加顺畅高效。

## 特性

- 与XIAO的无缝集成：专为与Seeed Studio XIAO系列完美配合设计。
- 额外的16个IO引脚：采用MCP23017芯片，为您的项目提供了16个额外的IO引脚。
- 可配置地址的I2C接口：默认的I2C地址为0x21，但可以配置为0x20。
- 坚固的设计：采用高品质材料构建，以确保长久耐用和可靠性。

## 规格

- 芯片: MCP23017
- IO引脚数量：16个
- 通信协议：I2C
- 默认I2C地址：0x21（可配置为0x20）
- 工作电压：3.3V
- 尺寸：21mm x 17mm

## 应用领域

XIAO的IO扩展器非常灵活，可以应用于多种应用领域，包括但不限于：

- 家庭自动化系统：扩展您在智能家居设置中可以控制的设备数量。
-机器人技术：在机器人上添加更多的传感器、电机或其他组件，而不会耗尽IO引脚。
- 游戏主机：设计具有大量按钮和开关的自定义控制器或其他外围设备。
- 工业控制系统：在工业环境中管理更多的设备和传感器。
- 教育项目：在教学项目中向学生介绍微控制器和电子学，不受IO引脚数量的限制。

## 硬件概述

本节将详细介绍XIAO IO扩展板上的各种组件和接口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png" alt="pir" width={800} height="auto" /></p>

### 0. 标准XIAO引脚

这些是用于连接XIAO微控制器的标准引脚。

### 1. J1引脚

J1引脚允许用户通过焊接决定是否将MCP23017的RST、INTB和INTA引脚连接到XIAO的D6、D1和D0引脚。从上到下，它们分别是RST、INTB、INTA。

默认情况下，当您使用扩展板时，区域8的附加输出引脚是启用的。如果您不想启用它们，您需要使用刀片切割区域J1中相邻的两个引脚。

### 2. MCP23017芯片

这是主要的IO扩展芯片，提供额外的16个IO引脚。

### 3. J2引脚

这个引脚用于选择I2C地址。默认地址为0x21。如果焊接此引脚，地址可以更改为0x20。

### 4.MCP23017输出引脚
这些是来自MCP23017芯片的输出引脚。每个引脚的定义可以在板子的背面看到。它们从PA0到PB7，共提供了16个IO引脚。

### 5. Grove引脚

如果您想连接Grove模块，可以焊接提供的Grove插座。该Grove接口连接到I2C总线。如果您选择在此处使用IIC引脚，则无法使用区域4中的扩展IO引脚。

### 6. VCC引脚

这是一个输出引脚，可用于为其他组件供电。

### 7. GND引脚

这也是一个输出引脚，可用于接地其他组件。

### 8. 其他输出引脚
这些是一些额外的输出引脚，包括GND、INTB、INTA和RST。如果您希望焊接这些引脚以供其他用途，请随意这样做。

## 入门指南

欢迎使用IO扩展板的快速入门指南。本指南旨在帮助您与XIAO RP2040主控制器配合使用，设置和开始使用新的IO扩展板。

### 硬件准备

有三种主要的使用方式：

**模式1：SMD模式**

如果您的XIAO主板上的引脚未焊接，您可以选择直接的SMD方法，将XIAO主板和扩展板焊接到PCB板上，以使用GPIO扩展功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg" alt="pir" width={800} height="auto" /></p>

:::注意：所示的PCB板仅用于展示，且在文章发布时并未上架销售。
:::

**模式2：通过引脚排线，XIAO直接与扩展板连接**

在这种方法中，您可以选择将连接线直接焊接到GPIO扩展板上，以连接您的目标设备。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg" alt="pir" width={800} height="auto" /></p>


**模式3：XIAO主板通过长引脚排线与扩展板连接，并通过焊接引脚排线来实现扩展板的扩展**

通过这种连接方法，您可以自由地安装杜邦线到GPIO扩展板上，为您的应用提供便捷的布线方式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg" alt="pir" width={800} height="auto" /></p>


一旦焊接完成，您可以开始将扩展板连接到XIAO RP2040主控制器上。


要对XIAO RP2040进行编程，您将需要一根TYPE-C USB数据线。将一端连接到XIAO RP2040，将另一端连接到您的计算机上。有关对XIAO RP2040进行编程的详细指南，请参考这个链接[Wiki](https://wiki.seeedstudio.com/XIAO-RP2040/)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg" alt="pir" width={600} height="auto" /></p>

### 软件准备

在开始对板子进行编程之前，您需要一个适用于XIAO的特定库。请从这个链接下载MCP23017库 [GitHub link](https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library)。下载完成后，将该库安装到您的编程环境中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

##演示：IO输出高电平和低电平

在Arduino IDE中，打开一个新的代码窗口，并复制以下示例代码：

```cpp
#include <Adafruit_MCP23X17.h>

Adafruit_MCP23X17 mcp;

void setup() {
    Serial.begin(9600);
    Serial.println("MCP23xxx Blink Test!");
    if (!mcp.begin_I2C()) {
        Serial.println("Error.");
        while (1);
    }

    Serial.println("Looping...");

    for(int i=0; i<16; i++) {
        mcp.pinMode(i, OUTPUT);
    }
}

void loop() {
    mcp.digitalWrite(15, LOW); //PB7
    mcp.digitalWrite(14, HIGH); //PB6
    mcp.digitalWrite(13, HIGH); //PB5
    mcp.digitalWrite(12, HIGH); //PB4
    mcp.digitalWrite(11, HIGH); //PB3
    mcp.digitalWrite(10, HIGH); //PB2
    mcp.digitalWrite(9, HIGH); //PB1
    mcp.digitalWrite(8, HIGH); //PB0
    mcp.digitalWrite(7, HIGH); //PA7
    mcp.digitalWrite(6, HIGH); //PA6
    mcp.digitalWrite(5, HIGH); //PA5
    mcp.digitalWrite(4, HIGH); //PA4
    mcp.digitalWrite(3, HIGH); //PA3
    mcp.digitalWrite(2, HIGH); //PA2
    mcp.digitalWrite(1, HIGH); //PA1
    mcp.digitalWrite(0, HIGH); //PA0
    delay(1000);
}
```

将上述代码上传到您的XIAO。代码成功上传后，您会发现除了PB7引脚外，所有引脚都是3.3V高电平。

:::注意事项：
该扩展板只能使用数字输入和输出功能，不支持PWM或模拟输入和输出功能。
:::

### 引脚寻址/引脚编号

在使用单引脚操作（如_pinMode(pinId, dir)_，digitalRead(pinId)或_digitalWrite(pinId, val)）时，引脚使用下面的ID进行寻址。例如，要设置_GPB0_的模式，可以使用_pinMode(8, ...)。 注意 MCP23008和MCP23S08只有_GPAx_引脚。
| MCP23x17引脚 # | 引脚名称 | 引脚ID编号 |
| :------------: | :------: | :----: |
|       21       |   GPA0   |   0    |
|       22       |   GPA1   |   1    |
|       23       |   GPA2   |   2    |
|       24       |   GPA3   |   3    |
|       25       |   GPA4   |   4    |
|       26       |   GPA5   |   5    |
|       27       |   GPA6   |   6    |
|       28       |   GPA7   |   7    |
|       1        |   GPB0   |   8    |
|       2        |   GPB1   |   9    |
|       3        |   GPB2   |   10   |
|       4        |   GPB3   |   11   |
|       5        |   GPB4   |   12   |
|       6        |   GPB5   |   13   |
|       7        |   GPB6   |   14   |
|       8        |   GPB7   |   15   |


## 常见问题解答

### 1. 为什么我的XIAO的IO扩展板没有响应？

**回答**: 请确保XIAO模块正确插入扩展板中。此外，检查是否已安装必要的库，并在Arduino IDE中选择了正确的开发板和端口。

### 2. 我可以将IO扩展板用于其他微控制器吗？
**回答**: 是的，IO扩展板主要设计用于XIAO模块，但也可以与其他支持I2C通信的微控制器一起使用。您可能需要相应地调整代码和连接。

### 3. 如何更改IO扩展板上MCP23017芯片的I2C地址？

**回答**: 默认的I2C地址设置为0x21。如果您想将其更改为0x20，在板上有一个标记为"J2"的跳线帽。您需要焊接J2跳线帽来更改地址。

### 4. 我在我的IO引脚上遇到噪声或不稳定的行为。可能的原因是什么？

**回答**: 请确保连接牢固且没有干扰。使用上拉或下拉电阻可以帮助稳定输入引脚。此外，请确保电源稳定，并能为所有连接的设备提供足够的电流。


##资源

- **[ZIP]** [Eagle文件](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip)
- **[PDF]** [MCP23017数据手册](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf)

## 技术支持和产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>


