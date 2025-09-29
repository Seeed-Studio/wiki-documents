---
description: 入门指南 Grove 1.2英寸 IPS 显示屏
title: Grove 1.2英寸 IPS 显示屏
keywords:
- ips
- display
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_1.2inch_ips_display
last_update:
  date: 06/13/2023
  author: Stephen Lo
---

# Grove 1.2英寸 IPS 显示屏

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/2-Grove-1.2-Inch-IPS-Display-font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-1-2-Inch-IPS-Display-p-5699.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove-1.2英寸IPS显示屏是由Seeed Studio精心打造的一款1.2英寸串行液晶显示屏。它提供了240x240的高分辨率，能够呈现清晰、色彩丰富的图像。设计初衷是为各种DIY或物联网（IoT）项目提供一个简单、高质量的显示解决方案。

该显示屏采用串行SPI接口，仅需连接SCK和SDA即可与主控制器通信。这大大简化了用户操作并节省了布线时间。RGB彩色显示进一步增强了图像的丰富性和色彩表现。

同时，Grove-1.2英寸IPS显示屏采用IPS全视角技术，无论用户从哪个角度观看，都能获得几乎相同的视觉体验。这意味着您的项目可以从任何角度呈现最佳显示效果。

此外，我们选择了ST7789作为显示屏的驱动IC，并为您准备了开源驱动库和示例代码。这将帮助您快速开始项目开发。

## 特性

- **简化接口：** 显示屏采用串行SPI接口，仅需连接SCK和SDA即可与主控制器通信。这大大简化了用户操作并节省了布线时间。
- **高分辨率：** 显示屏具有240x240像素的高分辨率，能够提供清晰且色彩鲜艳的图像，提升项目的视觉体验。
- **全视角IPS技术：** Grove-1.2英寸IPS显示屏采用平面切换（IPS）技术，可从所有视角提供一致、准确的色彩。
- **丰富色彩：** 显示屏最多可显示65k种颜色。RGB彩色显示为图像增添了深度和变化，使其更加生动逼真。
- **紧凑尺寸：** 屏幕尺寸为24.76x26.8mm，电路板尺寸为40x40mm。其紧凑的尺寸使其非常适合各种DIY或物联网项目。
- **宽输入电压范围：** 电路板可接受3.3V或5V的输入电压，兼容多种电源。
- **可靠的驱动IC：** 显示屏使用ST7789作为驱动IC。开源驱动库和示例代码使用户更容易上手。
- **宽工作温度范围：** 工作温度范围为-20至70摄氏度，使该显示屏适用于各种环境。

## 应用创意

- **DIY 气象站**：Grove-1.2 英寸 IPS 显示屏可用于自制气象站，提供实时天气信息。它可以显示丰富多彩的图标和数据，提供引人入胜的用户体验。
- **个人数字艺术展示**：该显示屏可以集成到数字艺术设备中，利用其高分辨率和彩色显示屏展示您的创意。这使其成为艺术或设计项目的绝佳组件。
- **DIY 游戏机**：鉴于其高分辨率和全视角显示，Grove-1.2 英寸 IPS 显示屏是自制游戏机的理想选择。其鲜艳的色彩显示将增强游戏体验。
- **智能家居系统**：该显示屏可以集成到智能家居系统中，清晰生动地显示各种家庭状况或系统状态的视觉反馈。
- **教育项目**：在教育领域，该显示屏可用于课堂项目，教授学生图形、编码和电子学知识。其简单的接口和易于设置的特点使其非常适合学习环境。
- **工业控制面板**：在工业应用中，该显示屏可用于控制面板，显示重要信息或状态，帮助操作员监控和控制工业流程。其广视角确保从不同角度都能清晰可见。

## 硬件概览

### 引脚图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/hw.png" alt="pir" width={500} height="auto" /></p>

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | 基础扩展板 | Grove-1.2 英寸 IPS 显示屏 |
|----------------|------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/Longan-Labs/Grove-1.2-Inch-IPS-Display/main/images/small.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="/cn/grove_1.2inch_ips_display" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否合适，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove-1.2 英寸 IPS 显示屏连接到 Grove 基础扩展板的 D7(D7/D8) 端口。

- **步骤 2.** 将 Grove 基础扩展板插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/connection.jpg" alt="pir" width={600} height="auto" /></p>

:::note
如果没有 Grove 基础扩展板，我们也可以直接将 Grove-1.2 英寸 IPS 显示屏连接到 Seeeduino，如下所示。
:::

| Seeeduino     | Grove-1.2 英寸 IPS 显示屏 |
|---------------|-----------------------------|
| 5V            | 红色 (VCC)                  |
| GND           | 黑色 (GND)                  |
| SDA           | 白色 (DTA)                  |
| SCK           | 黄色 (SCK)                  |

#### 软件

- **步骤 1.** 从 Github 下载 Arduino 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_ST7789_Fast/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- **步骤 2.** 参考 [如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库文件。

- **步骤 3.** 在正确下载并安装库文件后，您可以在示例文件夹中找到名为 **ST7789_HelloWorld.ino** 的示例程序。该程序专为 Grove-1.2 英寸 IPS 显示屏设计。

```cpp
#include <Adafruit_GFX.h>
#include <Arduino_ST7789_Fast.h>

#define SCK   7
#define SDA   8

Arduino_ST7789 lcd = Arduino_ST7789(SCK, SDA);

void setup(void)
{
    lcd.init();
    lcd.fillScreen(BLACK);

    lcd.setCursor(0, 0);
    lcd.setTextColor(RED,BLACK);
    lcd.setTextSize(3);
    lcd.println("HELLO WORLD");
}

void loop()
{

}
```

- **步骤 4.** 您将在显示屏上看到打印的 "HELLO WORLD" 字样。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/result.jpg" alt="pir" width={400} height="auto" /></p>

## 使用 Arduino UNO 进行快速 IO

通过直接操作 Arduino 的 I/O 引脚寄存器，可以实现更高的效率和速度，而不是使用标准的 `digitalWrite()` 函数。然而，这种方法通常需要对 Arduino 硬件和微控制器的工作原理有更深入的了解。

如果您希望使用更快的 I/O，需要对 `Arduino_ST7789_Fast.h` 文件进行一些修改。首先，您需要将第 20 行更改为：`#define FAST_IO 1`。此外，在第 23 到 26 行之间，编写设置 IO 高低电平的代码。以下是使用 D7/D8 的示例：

```cpp
#define FAST_IO 1

#if FAST_IO
#define LCD_SCK_SET PORTD |= (1 << PORTD7); // 设置 SCK 高电平
#define LCD_SDA_SET PORTB |= (1 << PORTB0); // 设置 SDA 高电平
#define LCD_SCK_CLR PORTD &= ~(1 << PORTD7); // 设置 SCK 低电平
#define LCD_SDA_CLR PORTB &= ~(1 << PORTB0); // 设置 SDA 低电平
#endif
```

以下是如何使用寄存器控制 Arduino UNO 上的 I/O 引脚的简要教程：

Arduino UNO 有三个端口，分别标记为 B、C 和 D。每个端口都有一个对应的数据寄存器，分别是 PORTB、PORTC 和 PORTD。这些寄存器可以用来直接控制 I/O 引脚。

例如，如果您希望将数字引脚 13（对应于 PORTB 的第 5 位，即 PORTB5）设置为高电平，可以写如下代码：

```cpp
PORTB |= (1 << 5);
```

此语句将 PORTB 的第 5 位设置为 1，而不会改变其他位。这是通过按位或操作符 (|=) 和左移操作符 (&lt;&lt;) 实现的。

同样，如果您希望将数字引脚 13 设置为低电平，可以写如下代码：

```cpp
PORTB &= ~(1 << 5);
```

此语句将 PORTB 的第 5 位设置为 0，而不会改变其他位。这是通过按位与操作符 (&=) 和按位非操作符 (~) 实现的。

以下是 Arduino UNO 上所有端口及其对应寄存器的说明：

**数字端口**

- 数字端口 0 - 7 对应寄存器 PORTD，位 PORTD0 到 PORTD7
- 数字端口 8 - 13 对应寄存器 PORTB，位 PORTB0 到 PORTB5

**模拟输入端口**

- 模拟输入端口 A0 - A5 对应寄存器 PORTC，位 PORTC0 到 PORTC5

模拟输入端口也可以作为数字 I/O 使用，对应数字引脚编号 14 到 19。例如，A0 也可以作为数字引脚 14 使用。

每个 I/O 寄存器还有两个相关寄存器，用于控制引脚的模式（输入或输出）以及输入引脚的上拉电阻。例如，PORTD 的控制寄存器是 DDRD 和 PIND。DDRx 寄存器用于设置引脚模式，PINx 寄存器用于读取引脚状态。

在写入 `PORTx` 寄存器之前，您应该首先确保对应的 `DDRx` 寄存器已正确设置。例如，如果您希望将 `PD0` 设置为输出并输出高电平，您应该先设置 `DDRD` 寄存器：

```cpp
DDRD |= (1 << 0);  // 将 PD0 设置为输出
PORTD |= (1 << 0);  // 输出高电平到 PD0
```

这些信息可以在 ATmega328P 的数据手册中找到，ATmega328P 是 Arduino UNO 的微控制器。如果您使用其他 Arduino 型号，可能需要参考相应微控制器的数据手册，因为不同的微控制器可能有不同的端口和寄存器布局。

在操作寄存器时，务必谨慎，因为任何错误操作可能会影响其他引脚的状态，甚至影响微控制器的功能。

希望使用本产品寄存器操作模式的用户需要独立理解并实现上述知识和技能。

## 常见问题解答

### 1. 当屏幕连接时重新编程，屏幕无法正常工作。

答：如果您的程序正在与屏幕持续通信，重新编程可能会中断这一过程，导致屏幕无法正常工作。您可以尝试关闭电源以恢复屏幕的正常运行。

### 3. 我应该为显示屏使用什么样的电源？

答：电路板可以接受 3.3V 或 5V 的输入电压，因此您可以使用该范围内的电源。

### 4. 我可以在极端温度条件下使用显示屏吗？

答：显示屏的工作温度范围为 -20 至 70 摄氏度。然而，为了获得最佳性能和延长使用寿命，建议在正常室温条件下使用显示屏。

### 5. 我的显示屏颜色显示不正确，可能是什么问题？

答：请确保在代码中正确初始化显示屏，并使用正确的颜色值。如果问题仍然存在，可能是显示屏或连接线出现问题。请检查连接，或者尝试使用另一块显示屏进行测试。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove-1.2 英寸 IPS 显示屏的 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar)
- **[PDF]** [ST7789 规格书](https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/ST7789V_SPEC_V1.2.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>