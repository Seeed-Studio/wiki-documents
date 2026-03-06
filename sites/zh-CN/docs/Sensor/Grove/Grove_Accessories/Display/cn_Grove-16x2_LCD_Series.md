---
description: Grove - 16x2 LCD
title: Grove - 16x2 LCD
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-16x2_LCD_Series
sku: 104020113, 104020112, 104020111
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2024-04-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/Grove-16x2_LCD_Series/
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 16 x 2 LCD 是一款适用于 Arduino 和 Raspberry Pi 的完美 I2C LCD 显示屏，具有高对比度和易于部署的特点。16x2 表示两行，每行有 16 列，总共 32 个字符。在 Grove I2C 接口的帮助下，仅需 2 个信号引脚和 2 个电源引脚即可完成连接。您甚至不需要担心如何连接这些引脚。只需通过 Grove 电缆将其插入 Seeeduino 或 Arduino/Raspberry Pi + 基板的 I2C 接口即可。无需复杂的布线、焊接，也无需担心因错误的限流电阻而烧毁 LCD。

## 版本

|版本|购买链接|
|---|---|
|Grove - 16 x 2 LCD (黑底黄字)|[立即购买](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|
|Grove - 16 x 2 LCD (黑底红字)|[立即购买](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Red%29-p-3197.html)|
|Grove - 16 x 2 LCD (白底蓝字)|[立即购买](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28White-on-Blue%29-p-3196.html)|



:::note 
         自从 [Grove - LCD RGB 背光](https://wiki.seeedstudio.com/cn/Grove-LCD_RGB_Backlight/) 推出以来，广受好评。基于客户反馈，现在我们为您带来了更具性价比的单色背光衍生产品。
::: 
除了 RGB 背光，这三款产品几乎与 Grove - LCD RGB 背光相同，它们均为 16 字符宽，2 行，并配有高亮度背光。

## 预读

如果您对 **什么是 Grove - 16 x 2 LCD** 和 **它是如何工作的** 不熟悉，强烈建议您提前阅读相关介绍。请访问我们的 **[博客](https://www.seeedstudio.com/blog/2020/01/20/how-to-use-16x2-lcd-with-arduino-grove-lcd-rgb-backlight/)** 获取详细信息。



## 特点

- 显示结构：16 字符 * 2 行
- 显示模式：STN
- 板载 MCU
- I2C 总线接口
- 支持英文和日文字体


## 规格

|项目|参数|
|---|---|
|工作电压|3.3V / 5V|
|工作温度|0 至 50℃|
|存储温度|-10 至 60℃|
|驱动方式|1/16 占空比，1/5 偏置|
|接口|I^2^C|
|I^2^C 地址|0X3E|


## 典型应用

- 温度显示
- 时间显示
- 任何需要简单显示的项目

## 支持的平台

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={600} height="auto" /></p>|


:::caution
         上述提到的支持平台仅表示模块在理论上或软件上的兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 所需材料

| Seeeduino V4.2 | Base Shield | Grove - 16 x 2 LCD |
|----------------|-------------|------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

:::note
        * 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

        * 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

#### 硬件概述

**I2C 上拉电阻**

第一版 Grove - 16 x 2 LCD 系列没有内置上拉电阻，也没有提供焊接可选上拉电阻的焊盘。我们重新设计了模块，新版本已内置上拉电阻。

如果您手头有旧版本，可以按照下图所示，在 Grove 接口背面的焊盘上焊接一个 10kΩ DIP 电阻。请在 **VCC** 和 **SCL** 引脚之间焊接一个 10kΩ DIP 电阻，以及在 **VCC** 和 **SDA** 引脚之间焊接一个 10kΩ DIP 电阻。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg" alt="pir" width={600} height="auto" /></p>

**外观**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg" alt="pir" width={600} height="auto" /></p>

#### 硬件连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

| Seeeduino      | Grove 数据线       | Grove - 16 x 2 LCD |
|----------------|--------------------|-------------------------|
| GND            | 黑色               | GND                     |
| 5V 或 3.3V     | 红色               | VCC                     |
| SDA            | 白色               | SDA                     |
| SCL            | 黄色               | SCL                     |

- **步骤 1.** 将 Grove - 16 x 2 LCD 连接到 Grove-Base Shield 的 **I^2^C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino，并通过 USB 数据线将 Seeeduino 连接到电脑。

#### 软件

:::tip
   如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove-LCD RGB Backlight](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) 库。

:::tip
        Grove - 16 x 2 LCD 与 [Grove-LCD RGB Backlight](https://wiki.seeedstudio.com/cn/Grove-LCD_RGB_Backlight/) 使用相同的库。它们的使用方式几乎相同，唯一的区别是 Grove - 16 x 2 LCD 不支持 RGB 颜色 API，例如 **setRGB()**。
:::

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例代码，可以通过以下三种方式打开：

**1).** 在 Arduino IDE 中直接通过路径打开：**File --> Examples --> Grove - LCD RGB Backlight --> HelloWorld**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

**2).** 在电脑中打开，点击文件夹 **XXXX\Arduino\libraries\Grove_LCD_RGB_Backlight-master\examples\HelloWorld** 中的 **HelloWorld.ino** 文件，**XXXX** 是您安装 Arduino IDE 的位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

**3).** 或者，您可以点击代码块右上角的图标

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

将以下代码复制到 Arduino IDE 的新草图中。

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
    // 设置 LCD 的列数和行数：
    lcd.begin(16, 2);
    
    //lcd.setRGB(colorR, colorG, colorB);
    
    // 在 LCD 上打印消息。
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // 将光标设置到第 0 列，第 1 行
    // （注意：第 1 行是第二行，因为计数从 0 开始）：
    lcd.setCursor(0, 1);
    // 打印自复位以来的秒数：
    lcd.print(millis()/1000);

    delay(100);
}
```

:::note
        * 库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

* 由于 **Grove - 16 x 2 LCD** 系列均为单色背光，您需要注释掉与 RGB 颜色相关的代码。在上述示例代码中，即第 6 行和第 17 行。
:::

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::success
如果一切正常，您将看到 LCD 显示经典句子：**hello world**。
:::

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg" alt="pir" width={600} height="auto" /></p>

:::note
如果您没有 Base Shield，带有 I2C 接口的 Seeeduino VX 系列也可以正常工作。
:::

### 使用 Raspberry Pi（搭配 Grove Base Hat for Raspberry Pi）
#### 硬件

- **步骤 1.** 本项目使用的物品：

<div class="table-center">
	<table>
		<tr>
			<th>Raspberry Pi</th>
			<th>Grove Base Hat for RasPi</th>
			<th>Grove - 16x2 LCD</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- **步骤 2.** 将 Grove Base Hat 插入 Raspberry Pi。
- **步骤 3.** 将 Grove - 16 x 2 LCD 连接到 Base Hat 的 I2C 接口。
- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到电脑。

#### 软件

- **步骤 1.** 按照 [软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境，并在 Raspberry Pi 上安装 grove.py。
- **步骤 2.** 执行以下命令运行代码。

```
# Python3 的虚拟环境
virtualenv -p python3 env
source env/bin/activate
# 输入命令
grove_16x2_lcd
```

以下是 jhd1802.py 的代码：

```python
from grove.display.base import *
from grove.i2c import Bus
import time
import sys

# sphinx autoapi required
__all__ = ["JHD1802"]

class JHD1802(Display):
    '''
    Grove - 16 x 2 LCD，使用芯片 JHD1802。
        - Grove - 16 x 2 LCD (黑底黄字)
        - Grove - 16 x 2 LCD (黑底红字)
        - Grove - 16 x 2 LCD (白底蓝字)

    同时，这也是我们的类名，
    可以驱动上述三种 LCD。

    参数:
        address(int): I2C 设备地址，默认为 0x3E。
    '''
    def __init__(self, address = 0x3E):
        self._bus = Bus()
        self._addr = address
        if self._bus.write_byte(self._addr, 0):
            print("检查 LCD {} 是否插入，然后重试"
                    .format(self.name))
            sys.exit(1)
        self.textCommand(0x02)
        time.sleep(0.1)
        self.textCommand(0x08 | 0x04) # 显示开启，无光标
        self.textCommand(0x28)

    @property
    def name(self):
        '''
        获取设备名称

        返回:
            string: JHD1802
        '''
        return "JHD1802"

    def type(self):
        '''
        获取设备类型

        返回:
            int: ``TYPE_CHAR``
        '''
        return TYPE_CHAR

    def size(self):
        '''
        获取显示尺寸

        返回:
            (行数, 列数): 显示尺寸，以字符为单位。
        '''
        # 字符 16x2
        # 返回 (行数, 列数)
        return 2, 16

    def clear(self):
        '''
        清屏并将光标定位到左上角。
        '''
        self.textCommand(0x01)

    def draw(self, data, bytes):
        '''
        对字符类型显示设备未实现。
        '''
        return False

    def home(self):
        '''
        将光标定位到 LCD 的左上角。
        即在该位置输出后续文本到显示屏。
        '''
        self.textCommand(0x02)
        time.sleep(0.2)

    def setCursor(self, row, column):
        '''
        定位 LCD 光标；即设置后续写入 LCD 的文本显示位置。

        参数:
            row   (int): 光标所在行，0 为第一行
            column(int): 光标所在列，0 为第一列

        返回:
            None
        '''
        # print("setCursor: row={}, column={}".format(row,column))
        self.textCommand((0x40 * row) + (column % 0x10) + 0x80)

    def write(self, msg):
        '''
        向 LCD 写入字符。

        参数:
            msg (string): 要写入显示屏的字符

        返回:
            None
        '''
        for c in msg:
            self._bus.write_byte_data(self._addr,0x40,ord(c))

    def _cursor_on(self, enable):
        if enable:
            self.textCommand(0x0E)
        else:
            self.textCommand(0x0C)
            
            
    def textCommand(self, cmd):
        self._bus.write_byte_data(self._addr,0x80,cmd)
        
def main():
    import time

    lcd = JHD1802()
    rows, cols = lcd.size()
    print("LCD 型号: {}".format(lcd.name))
    print("LCD 类型 : {} x {}".format(cols, rows))

    lcd.backlight(False)
    time.sleep(1)

    lcd.backlight(True)
    lcd.setCursor(0, 0)
    lcd.write("hello world!")
    lcd.setCursor(0, cols - 1)
    lcd.write('X')
    lcd.setCursor(rows - 1, 0)
    for i in range(cols):
        lcd.write(chr(ord('A') + i))

    time.sleep(3)
    lcd.clear()

if __name__ == '__main__':
    main()
```

```python
(env)pi@raspberrypi:~ grove_16x2_lcd
```
:::tip success
如果一切正常，您将看到以下结果：
:::

- 背光会关闭 1 秒钟，然后重新打开。
- LCD 将显示：
```
hello world!   X
ABCDEFGHIJKLMNOP
```
- 3 秒后，整个显示屏将被清除，屏幕变为空白。

您可以通过按 `ctrl`+`c` 退出此程序。
### 使用 Wio Terminal (ArduPy)

#### 硬件

- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove - 16 x 2 LCD |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

- **步骤 2.** 将 Grove - 16 x 2 LCD 连接到 Wio Terminal 的 **I2C** 端口。

- **步骤 3.** 通过 USB Type-C 数据线将 Wio Terminal 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 按照 [**ArduPy 入门指南**](https://wiki.seeedstudio.com/cn/ArduPy/) 配置 Wio Terminal 上的 ArduPy 开发环境。

- **步骤 2.** 使用以下命令确保 ArduPy 固件包含 Grove - 16 x 2 LCD 的 ArduPy 库。有关更多信息，请参考 [**这里**](https://wiki.seeedstudio.com/cn/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example)。

```sh
aip install Seeed-Studio/seeed-ardupy-lcd1602
aip build
aip flash
```

- **步骤 3.** 复制以下代码并保存为 `ArduPy-LCD1602.py`：

```python
from arduino import grove_lcd1602
import time

lcd = grove_lcd1602()

def main():
    lcd.print("hello, world!")
    lcd.is_blink_cursor = True
    i = 0
    while True:
        lcd.set_cursor(1, 2) #列 1，行 2
        lcd.print(i)
        time.sleep(1)
        i = i + 1

if __name__ == "__main__":
    main()
```

:::note
       有关更多 API 参考，请参阅 [**这里**](https://github.com/Seeed-Studio/seeed-ardupy-lcd1602)。
:::

- **步骤 4.** 将 `ArduPy-LCD1602.py` 保存到您知道的位置。运行以下命令，并将 `<YourPythonFilePath>` 替换为您的 `ArduPy-LCD1602.py` 文件路径。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 示例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-LCD1602.py"
```

- **步骤 5.** 我们将在 Grove - 16 x 2 LCD 上看到结果。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png" alt="pir" width={600} height="auto" /></p>

## 资源

- **[PDF]** [JDH_1804_数据手册](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/res/JDH_1804_Datasheet.pdf)



## 项目

这是该产品的介绍视频，包含简单演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


**Grove 红外通用遥控项目**：有多个遥控器？有一个 Arduino？使用 Keyes 红外遥控器的单键操作控制多个设备。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/ArduinoBasics/grove-ir-universal-remote-project-7ab87f" width={350} />


**使用 RE-Mote 和 LCD 轻松进行范围测试**：减少现场测试（2.4GHz 和 868MHz）所需的设备和准备，将所有必需品装在手中。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/alinan/range-tests-made-easy-with-the-re-mote-and-lcd-6e78b3" width={350} />



## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>