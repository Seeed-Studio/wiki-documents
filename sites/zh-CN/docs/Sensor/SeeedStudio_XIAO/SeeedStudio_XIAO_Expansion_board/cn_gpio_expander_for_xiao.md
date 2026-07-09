---
description: 创建一个包含丰富内容的文档页面。
title: XIAO IO 扩展板
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /io_expander_for_xiao
sku: 103030415
last_update:
  date: 07/09/2026
  author: Stephen Lo
createdAt: '2023-09-19'
updatedAt: '2026-04-29'
url: https://wiki.seeedstudio.com/cn/io_expander_for_xiao/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg" alt="pir" width={500} height="auto" /></p>

:::caution
本产品已停止销售。
:::


XIAO IO 扩展板是一款先进的扩展板，旨在增强 Seeed Studio XIAO 系列的功能。该扩展板由 MCP23017 芯片驱动，可额外提供 16 个 IO 引脚，使用户能够在不受限制的情况下扩展项目。无论你是想要尝试更多元器件的爱好者，还是在寻找可靠 IO 扩展解决方案的专业开发者，这块扩展板都能满足你的需求。它与 XIAO 系列的兼容性确保了无缝集成，使你的开发过程更加顺畅高效。

## 特性

- 与 XIAO 无缝集成：专为 Seeed Studio XIAO 系列设计，可完美配合使用。
- 16 个额外 IO 引脚：由 MCP23017 驱动，为你的项目提供额外 16 个 IO 引脚。
- 具有可配置地址的 I2C 接口：默认 I2C 地址为 0x21，可配置为 0x20。
- 设计坚固：采用高质量材料制造，确保使用寿命长且可靠性高。

## 规格

- 芯片：MCP23017
- IO 引脚数量：16
- 通讯协议：I2C
- 默认 I2C 地址：0x21（可配置为 0x20）
- 工作电压：3.3V
- 尺寸：21mm x 17.8mm

## 应用

XIAO IO 扩展板用途广泛，可用于多种应用场景，包括但不限于：

- 家庭自动化系统：扩展你在智能家居中可控制的设备数量。
- 机器人：为你的机器人添加更多传感器、电机或其他元件，而不会耗尽 IO 引脚。
- 游戏主机：设计带有大量按键和开关的自定义控制器或其他外设。
- 工业控制系统：在工业场景中管理更多设备和传感器。
- 教学项目：在不受 IO 引脚数量限制的情况下，向学生讲解微控制器和电子学知识。

## 硬件概览

本节将详细介绍 XIAO IO 扩展板上的各个元件和接口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png" alt="pir" width={800} height="auto" /></p>

### 0. 标准 XIAO 焊盘

这些是用于连接 XIAO 微控制器的标准焊盘。

### 1. J1 焊盘

J1 焊盘允许用户通过焊接来决定是否将 MCP23017 的 RST、INTB 和 INTA 引脚连接到 XIAO 的 D6、D1 和 D0 引脚。从上到下依次为 RST、INTB、INTA。

默认情况下，当你使用扩展板时，区域 8 的附加输出焊盘是启用的。如果你不想启用它们，需要用刀切断 J1 区域中相邻的两个焊盘。

### 2. MCP23017 芯片

这是主要的 I/O 扩展芯片，可额外提供 16 个 IO。

### 3. J2 焊盘

该焊盘用于选择 I2C 地址。默认地址为 0x21。如果你焊接此焊盘，地址可以更改为 0x20。

### 4. MCP23017 输出引脚

这些是来自 MCP23017 芯片的输出引脚。每个引脚的定义可以在板子的背面看到，范围从 PA0 到 PB7，总共提供 16 个 IO。

### 5. Grove 焊盘

如果你希望连接 Grove 模块，可以焊接配套的 Grove 插座。该 Grove 接口连接到 I2C 总线。如果你选择在此处使用 IIC 引脚，则无法再使用区域 4 中扩展的 IO 引脚。

### 6. VCC 引脚

这是一个输出引脚，可用于为其他元件供电。

### 7. GND 引脚

这同样是一个输出引脚，可用于为其他元件提供接地。

### 8. 附加输出焊盘

这些是一些附加输出焊盘，包括 GND、INTB、INTA、RST。如果你希望将这些引脚焊接出来以供其他地方使用，可以这样做。

## 入门指南

欢迎阅读 XIAO IO 扩展板快速入门指南。本指南旨在帮助你将新的 IO 扩展板与 XIAO RP2040 主控板配合使用并完成初始设置。

### 硬件准备

使用该扩展板主要有三种方式，

**模式 1：SMD 贴片**

如果你的 XIAO 还未焊接排针，那么你可以选择直接采用 SMD 贴片方式，将 XIAO 和扩展板一起焊接到 PCB 板上，以使用 GPIO 扩展功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg" alt="pir" width={800} height="auto" /></p>

:::note
图片中的 PCB 仅用于展示，在本文撰写时尚未上架销售。
:::

**模式 2：XIAO 通过排针直接与扩展板连接**

在这种方式下，你可以选择将连接线直接焊接到 GPIO 扩展板上，以连接你的目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg" alt="pir" width={800} height="auto" /></p>

**模式 3：XIAO 通过长排针与扩展板连接，并通过焊接排针对扩展板进行扩展**

采用这种连接方式，你可以自由地在 GPIO 扩展板上插接杜邦线，为你的应用提供便捷的布线方式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg" alt="pir" width={800} height="auto" /></p>

焊接完成后，你就可以将扩展板连接到 XIAO RP2040 主控板上。

要对 XIAO RP2040 进行编程，你需要一根 TYPE-C USB 数据线。将一端连接到 XIAO RP2040，另一端连接到电脑。关于 XIAO RP2040 编程的详细指南，请参考此 [Wiki](https://wiki.seeedstudio.com/cn/XIAO-RP2040/)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg" alt="pir" width={600} height="auto" /></p>

### 软件准备

在开始为扩展板编程之前，你需要一个适用于 XIAO 的专用库。从这个 [GitHub 链接](https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library) 下载 MCP23017 库。下载完成后，在你的编程环境中安装该库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## 示例：IO 输出高低电平

在 Arduino IDE 中打开一个新草稿，并复制以下示例代码：

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

将上述代码上传到你的 XIAO。代码成功上传后，你会看到除 PB7 引脚外，所有引脚都是 3.3V 高电平。

:::caution
该扩展板只能使用数字输入和输出，不支持 PWM 或模拟输入输出功能。
:::

### 引脚寻址

当使用 _pinMode(pinId, dir)_、_digitalRead(pinId)_ 或 _digitalWrite(pinId, val)_ 等单引脚操作时，引脚是通过下表中的 ID 进行寻址的。例如，要设置 _GPB0_ 的模式，则使用 _pinMode(8, ...)_。**注意** MCP23008 和 MCP23S08 只有 _GPAx_ 引脚。

| MCP23x17 Pin # | Pin 名称 | Pin ID |
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

## 常见问题

### 1. 为什么我的 XIAO IO 扩展板没有响应？

**回答**：请确保 XIAO 模块已正确插入扩展板。同时检查是否已安装所需的库，并在 Arduino IDE 中选择了正确的开发板和端口。

### 2. 我可以将 XIAO IO 扩展板与其他微控制器一起使用吗？

**回答**：可以，IO 扩展板主要是为 XIAO 模块设计的，但也可以与其他支持 I2C 通信的微控制器一起使用。你可能需要相应地调整代码和连接方式。

### 3. 如何更改 XIAO IO 扩展板上 MCP23017 芯片的 I2C 地址？

**回答**：默认 I2C 地址设置为 0x21。如果你想将其更改为 0x20，板子上有一个标记为 "J2" 的跳线。你需要焊接 J2 跳线来更改地址。

### 4. 我的 IO 引脚出现噪声或行为异常，可能是什么原因？

**回答**：请确保连接牢固且没有干扰。使用上拉或下拉电阻可以帮助稳定输入引脚。同时，确保电源稳定，并且能够为所有连接的设备提供所需电流。

## 资源

- **[ZIP]** [Eagle 文件](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip)
- **[PDF]** [数据手册 - MCP23017](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
