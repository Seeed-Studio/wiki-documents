---
description: Grove 1.2英寸IPS显示屏入门指南
title: Grove 1.2英寸IPS显示屏
keywords:
- ips
- display
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_1.2inch_ips_display
last_update:
  date: 03/22/2024
  author: WuFeifei
---

# Grove 1.2英寸IPS显示屏

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/2-Grove-1.2-Inch-IPS-Display-font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/grove_1.2inch_ips_display">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>


<br />

Grove 1.2英寸IPS显示屏是Seeed Studio为您精心打造的一款1.2英寸串行液晶显示屏。这款显示屏拥有高达240x240的分辨率，呈现出清晰、色彩丰富的图像表现。其设计初衷在于提供一个简单、高质量的显示解决方案，以满足各种DIY或物联网（IoT）项目的需求。

它采用串行SPI接口，仅需SCK和SDA两个接口即可与主控制器连接，简化了用户的操作，节省了布线时间。RGB彩色显示技术进一步丰富了每个图像的色彩，使其更加鲜艳生动。

同时，Grove 1.2英寸IPS显示屏采用了IPS全视角技术，无论用户从哪个角度观看，都能获得几乎相同的视觉体验。这意味着您的项目将从任何角度都呈现出最佳的显示效果。

此外，我们还选择了ST7789作为显示屏的驱动IC，并为您准备了开源的驱动库和示例代码，以便您能快速开始项目开发。

## 特点

- **简化接口：**显示屏采用串行SPI接口，仅需通过SCK和SDA连接到主控制器。这极大地简化了用户操作，节省了布线时间。
- **高分辨率：**拥有高达240x240像素的分辨率，显示屏可以呈现清晰且生动的图像，提升您项目的视觉体验。
- **全视角IPS技术：**Grove 1.2英寸IPS显示屏采用平面切换（IPS）技术，可确保从所有角度观看时色彩一致、准确。
- **色彩丰富：**显示屏可以呈现高达65k种颜色。RGB彩色显示技术为图像增添了深度和变化，使其更加鲜艳且逼真。
- **小巧尺寸：**屏幕尺寸为24.76x26.8mm，电路板尺寸为40x40mm。其小巧的尺寸使其成为各种DIY或物联网（IoT）项目的理想选择。
- **宽输入电压范围：**电路板可接受3.3V或5V的输入电压，使其兼容各种电源。
- **可靠的驱动IC：**显示屏采用ST7789作为驱动IC。其开源驱动库和示例代码使得用户更容易上手。
- **宽工作温度范围：**工作温度范围在-20至70摄氏度之间，使这款显示屏适用于各种环境。

## 应用创意

- **DIY天气站**：Grove 1.2英寸IPS显示屏可用于自制天气站，提供实时天气信息。它可以展示丰富且生动的图标和数据，提供引人入胜的用户体验。
- **个人数字艺术展示**：显示屏可以融入数字艺术设备中，以其高分辨率和彩色显示来展示您的创意想法。这使得它成为艺术和设计项目的出色组件。
- **DIY游戏主机**：鉴于其高分辨率和全视角显示特点，Grove 1.2英寸IPS显示屏是自制游戏主机的绝佳选择。其生动的彩色显示将提升游戏体验。
- **智能家居系统**：显示屏可以集成到智能家居系统中，提供清晰且生动的视觉反馈，展示各种家居状况或系统状态。
- **教育项目**：在教育领域，显示屏可用于课堂项目，教导学生有关图形、编程和电子学的知识。其简单的接口和易于设置的特点使其成为学习环境的理想选择。
- **工业控制面板**：在工业应用中，显示屏可用于控制面板，展示重要信息或状态，帮助操作人员监控和控制工业过程。其宽视角确保了从不同角度都能清晰可见。

## 硬件概述

### 引脚映射

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/hw.png" alt="pir" width={500} height="auto" /></p>

## 入门指南

:::注意
如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### Arduino实战

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove-1.2 英寸 IPS 显示屏 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/Longan-Labs/Grove-1.2-Inch-IPS-Display/main/images/small.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="/grove_1.2inch_ips_display" target="_blank">立即获取</a>|

:::注意
**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的USB线无法传输数据。如果您不确定您手中的USB线是几根线的，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。
    
**2** 购买每个Grove模块时，都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-(5-PCs-pack)-p-936.html)购买。
:::

- **步骤 1.** 将Grove-1.2英寸IPS显示屏连接到Grove-Base Shield的D7（D7/D8）端口。

- **步骤 2.** 将Grove-Base Shield插入Seeeduino。
- **步骤 3.** 通过USB线将Seeeduino连接到电脑。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/connection.jpg" alt="pir" width={600} height="auto" /></p>

:::注意
如果没有Grove Base Shield，我们也可以直接将Grove-1.2英寸IPS显示屏连接到Seeeduino，如下所示。
:::

| Seeeduino     | Grove-1.2 英寸IPS显示屏 |
|---------------|-------------------------|
| 5V            | 红色(VCC)                    |
| GND           | 黑色 (GND)                  |
| SDA           | 白色  (DTA)                 |
| SCK           | 黄色  (SCK)                |

#### 软件

- **Step 1.** **步骤 1.** 从Github下载Arduino库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_ST7789_Fast/tree/master">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


<br />

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)来为Arduino安装库。

- **步骤 3.** 下载并正确安装库之后，您可以在示例文件夹中找到一个名为**ST7789_HelloWorld.ino**的示例程序。该程序是为Grove-1.2英寸IPS显示屏设计的。

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

- **步骤 4.** 您会在显示屏上看到“Hello World”的打印内容。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/result.jpg" alt="pir" width={400} height="auto" /></p>

## 使用Arduino UNO实现快速I/O

与使用标准的`digitalWrite()`函数相比，直接通过寄存器操作Arduino的I/O引脚可以提供更高的效率和速度。但是，这种方法通常需要更深入地了解Arduino硬件和微控制器的工作原理。

如果您希望使用更快的I/O，您需要在`Arduino_ST7789_Fast.h`文件中进行一些修改。首先，您应该将第20行更改为：`#define FAST_IO 1`。此外，在第23行到第26行之间，编写用于设置IO为高电平和低电平的代码。下面是一个使用D7/D8的示例：

```cpp
#define FAST_IO 1

#if FAST_IO
#define LCD_SCK_SET PORTD |= (1 << PORTD7); // SET SCK HIGH
#define LCD_SDA_SET PORTB |= (1 << PORTB0); // SET SDA HIGH
#define LCD_SCK_CLR PORTD &= ~(1 << PORTD7); // SET SCK LOW
#define LCD_SDA_CLR PORTB &= ~(1 << PORTB0); // SET SDA LOW
#endif
```

以下是关于如何使用寄存器来控制Arduino UNO上的I/O引脚的简短教程：

Arduino UNO有三个端口，分别标记为B、C和D。每个端口都有一个对应的数据寄存器，即PORTB、PORTC和PORTD。这些寄存器可以直接用于控制I/O引脚。

例如，如果您想将数字引脚13（对应于PORTB的第5位，即PORTB5）设置为HIGH，您可以编写如下代码：

```cpp
PORTB |= (1 << 5);
```

这句话通过位或运算符（|=）和左移运算符（<<）将PORTB的第5位设置为1，而不改变其他位。

相反，如果您想将同一引脚设置为LOW，则可以使用以下代码：

```cpp
PORTB &= ~(1 << 5);
```

这条语句将PORTB的第5位设置为0，而不改变其他位。这是通过位与运算符（&=）和位非运算符（~）实现的。

以下是Arduino UNO上的所有端口及其对应的寄存器：

**数字端口**

- 数字端口0 - 7对应PORTD寄存器，位为PORTD0到PORTD7
- 数字端口8 - 13对应PORTB寄存器，位为PORTB0到PORTB5

**模拟输入端口**

- 模拟输入端口A0 - A5对应PORTC寄存器，位为PORTC0到PORTC5

模拟输入端口也可以作为数字I/O使用，对应于数字引脚编号14到19。例如，A0也可以作为数字引脚14使用。

每个I/O寄存器还有两个相关寄存器，用于控制引脚的模式（输入或输出）和输入引脚的上拉电阻。例如，PORTD的控制寄存器是DDRD和PIND。DDRx寄存器用于设置引脚模式，PINx寄存器用于读取引脚状态。

在向`PORTx`寄存器写入之前，您应首先确保对应的`DDRx`寄存器已正确设置。例如，如果您想将`PD0`设置为输出并输出HIGH，您应该先设置`DDRD`寄存器：

```cpp
DDRD |= (1 << 0);  // Set PD0 as output
PORTD |= (1 << 0);  // Output HIGH to PD0
```

这些信息可以在ATmega328P的数据手册中找到，ATmega328P是Arduino UNO的微控制器。如果您使用的是其他Arduino型号，您可能需要参考相应微控制器的数据手册，因为不同的微控制器可能有不同的端口和寄存器布局。

在操纵寄存器时，必须格外小心，因为任何错误的操作都可能影响其他引脚的状态，甚至影响微控制器的功能。

希望使用本产品寄存器操作模式的用户需要独立理解和实施上述知识和技能。



### 常见问题解答（FAQ）

### 1. 当我重新编程时，如果屏幕处于连接状态，屏幕就不工作。

答：如果您的程序持续与屏幕进行通信，重新编程可能会中断此过程，导致屏幕出现故障。您可以尝试关闭电源以恢复屏幕的正常操作。

### 3. 我应该使用什么样的电源为显示器供电？

答：电路板可以接受3.3V或5V的输入电压，因此您可以在此范围内选择电源。

### 4. 我可以在极端温度条件下使用显示器吗？

答：显示器的工作温度范围为-20至70摄氏度。但是，为了获得最佳性能和延长使用寿命，建议在正常室温条件下操作显示器。

### 5. 我的显示器上的颜色看起来不对。可能是什么问题？

答：请确保在代码中正确初始化了显示器，并且您正在使用正确的颜色值。如果问题仍然存在，可能是显示器或连接线路存在问题。请检查连接，或如果有其他显示器可用，请尝试使用另一个显示器。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove-1.2 英寸IPS显示屏的Eagle文件](https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar)
- **[PDF]** [ST7789 规格书](https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/ST7789V_SPEC_V1.2.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们的产品时体验尽可能顺畅。为了满足不同的偏好和需求，我们提供多个沟通渠道。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>








