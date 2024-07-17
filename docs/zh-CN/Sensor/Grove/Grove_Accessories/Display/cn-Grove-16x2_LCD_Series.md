---
description: Grove - 16x2 液晶显示屏
title: Grove - 16x2 液晶显示屏
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-16x2_LCD_Series
last_update:
  date: 03/22/2024
  author: WuFeifei
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 16 x 2 LCD是一款高对比度、易于部署的I2C LCD显示屏，非常适合Arduino和Raspberry Pi使用。16x2意味着两行，每行有16列，总共32个字符。借助Grove I2C连接器，仅需要2个信号引脚和2个电源引脚。您甚至不需要关心如何连接这些引脚。只需通过Grove线缆将其插入Seeeduino或Arduino/Raspberry Pi+baseshield的I2C接口即可。这样就避免了复杂的布线、焊接，以及因错误的限流电阻而导致LCD烧毁的担忧。

## 版本

|版本|购买链接|
|---|---|
|The Grove - 16 x 2 LCD (黑底黄字)|[立即购买](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|
|The Grove - 16 x 2 LCD (黑底红字)|[立即购买](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Red%29-p-3197.html)|
|The Grove - 16 x 2 LCD (蓝底白字) |[立即购买](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28White-on-Blue%29-p-3196.html)|



:::注意
         自推出以来，[Grove - LCD RGB Backlight](https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/)受到了广泛好评。基于客户的反馈，现在，我们为您带来了更具成本效益的单色背光衍生产品。
::: 
除了RGB背光之外，这三款产品与Grove - LCD RGB Backlight几乎相同，它们都是16个字符宽，2行显示，带有高亮背光。

## 预备知识

如果您不熟悉**什么是Grove - 16 x 2 LCD**和**它是如何工作的**，强烈建议您先阅读相关介绍。请访问我们的**[博客](https://www.seeedstudio.com/blog/2020/01/20/how-to-use-16x2-lcd-with-arduino-grove-lcd-rgb-backlight/)**以获取详细信息。



## 特点

- 显示结构：16个字符 * 2行
- 显示模式：STN
- 板载MCU
- I2C总线接口
- 支持英文和日文字体

## 规格

|项目|值|
|---|---|
|工作电压|3.3V / 5V|
|工作温度|0 至 50℃|
|存储温度|-10 I^2^C地址 60℃|
|驱动方式|1/16 占空比, 1/5 偏置|
|接口|I^2^C|
|I^2^C地址|0X3E|

## 典型应用

- 温度显示
- 时间显示
- 任何需要简单显示屏的项目

## 支持的平台

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={600} height="auto" /></p>|

:::注意
         上文提到的所支持的平台是对模块软件或理论兼容性的指示。在大多数情况下，我们仅针对Arduino平台提供软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/示例代码，因此用户需要自己编写软件库。
:::

## 入门指南

### Arduino实践

#### 所需材料

| Seeeduino V4.2 | 基础盾板 |  Grove - 16 x 2 LCD |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

:::注意
        * 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的电缆无法传输数据。如果您不确定手中的线是否合适，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

        * 购买时，每个Grove模块都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。

#### 硬件概述

**I2C上拉电阻**

Grove - 16 x 2 LCD系列的第一个版本没有内置上拉电阻，也没有提供焊接可选上拉电阻的焊盘。我们已经重新设计了模块，新版本内置了上拉电阻。

如果您手上有旧版本，您可以在Grove连接器背面的焊盘上自己焊接一个10kΩ DIP电阻。请按照下面的图片操作，在**VCC**和**SCL**引脚之间以及**VCC**和**SDA**引脚之间各焊接一个10kΩ DIP电阻。

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg" alt="pir" width={600} height="auto" /></p>

**概述**

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg" alt="pir" width={600} height="auto" /></p>

#### 硬件连接

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

| Seeeduino      |  Grove 线缆     | Grove - 16 x 2 LCD |
|--------------- |--------------------|-----|
| GND            | 黑色            | GND |
| 5V 或 3.3V    | 红色              | VCC |
| SDA            | 白色            | SDA |
| SCL            | 黄色           | SCL |

- **步骤 1.** 将 Grove - 16 x 2 LCD 连接到 Grove-Base Shield 的 **I^2^C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino，并通过 USB 线缆将 Seeeduino 连接到电脑。

#### 软件

:::提示
   如果您是第一次使用 Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove-LCD RGB Backlight](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) 库。

:::提示
        Grove - 16 x 2 LCD 与 [Grove-LCD RGB Backlight](https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/) 共用同一个库。它们的使用方式几乎相同，只不过 Grove - 16 x 2 LCD 不支持 RGB 颜色 API，例如 **setRGB()**。
:::

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例，您可以通过以下三种方式打开它：

**1).** 在 Arduino IDE 中直接通过路径打开：**文件 --> 示例 --> Grove - LCD RGB Backlight --> HelloWorld**。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

**2).** 通过点击位于**XXXX\Arduino\libraries\Grove_LCD_RGB_Backlight-master\examples\HelloWorld**文件夹中的**HelloWorld.ino**文件，在电脑上打开它**。XXXX**是你安装Arduino IDE的位置。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

**3).** 或者，您只需点击代码块右上角的图标

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

即可将以下代码复制到 Arduino IDE 中的一个新草图中。


```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

/*
const int colorR = 255;
const int colorG = 0;
const int colorB = 0;
*/

void setup() 
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);
    
    //lcd.setRGB(colorR, colorG, colorB);
    
    // Print a message to the LCD.
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000);

    delay(100);
}
```

:::注意
       库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。

        * Since the **Grove - 16 x 2 LCD** series are all monochrome backlight, you need to comment out the RGB color related code. In the demo code above, i.e., line 6 and line 17.
:::

- **步骤 4.** 上传示例程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

:::成功后
        如果一切顺利，您会看到 LCD 显示经典句子：**hello world**。
:::

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg" alt="pir" width={600} height="auto" /></p>

:::注意
       如果您没有 Base Shield，带有 I2C 接口的 Seeeduino VX 系列也能正常工作。
:::

### 使用 Wio Terminal (ArduPy) 玩转

#### 硬件

- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove - 16 x 2 LCD |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即获取](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

- **步骤 2.** 将 Grove - 16 x 2 LCD 连接到 Wio Terminal 的 **I2C** 端口。

- **步骤 3.** 通过 USB Type-C 线缆将 Wio Terminal 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 按照 [**ArduPy入门指南**](https://wiki.seeedstudio.com/ArduPy/) 在Wio Terminal 上配置 ArduPy 开发环境。

- **步骤 2.** 使用以下命令确保 ArduPy 固件包含了 Grove - 16 x 2 LCD ArduPy 库。更多信息，请参照 [**这里**](https://wiki.seeedstudio.com/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example).

```sh
aip install Seeed-Studio/seeed-ardupy-lcd1602
aip build
aip flash
```

- **步骤 3.** 复制以下代码并将其保存为 `ArduPy-LCD1602.py`：

```python
from arduino import grove_lcd1602
import time

lcd = grove_lcd1602()

def main():
    lcd.print("hello, world!")
    lcd.is_blink_cursor = True
    i = 0
    while True:
        lcd.set_cursor(1, 2) #column 1, row 2
        lcd.print(i)
        time.sleep(1)
        i = i + 1

if __name__ == "__main__":
    main()
```

:::注意
      有关更多 API 参考，请查阅 [**这里**](https://github.com/Seeed-Studio/seeed-ardupy-lcd1602).
:::

- **步骤 4.** 将 `ArduPy-LCD1602.py` 保存在一个你知道的位置。运行以下命令，并将 `<YourPythonFilePath>` **替换** 为你的 `ArduPy-LCD1602.py` 文件的路径。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-LCD1602.py"
```

- **步骤 5.** 我们将在 Grove - 16 x 2 LCD 上看到结果。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png" alt="pir" width={600} height="auto" /></p>

## 资源

- **[PDF]** [JDH_1804_Datasheet](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/res/JDH_1804_Datasheet.pdf)



## 项目

这是该产品的介绍视频，以及简单的演示，您可以尝试一下。

<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Grove IR通用遥控器项目**：您有多个遥控器吗？您有Arduino吗？使用Keyes IR遥控器只需一键即可操作多个设备。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/ArduinoBasics/grove-ir-universal-remote-project-7ab87f" width={350} />

**使用RE-Mote和LCD轻松进行距离测试**：减少现场测试（2.4GHz和868MHz）所需的设备和准备工作数量，将您所需的一切打包在手。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/alinan/range-tests-made-easy-with-the-re-mote-and-lcd-6e78b3" width={350} />



## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
