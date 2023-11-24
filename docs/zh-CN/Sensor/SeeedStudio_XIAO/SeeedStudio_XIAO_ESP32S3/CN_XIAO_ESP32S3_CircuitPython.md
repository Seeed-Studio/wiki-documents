---
description: CircuitPython for ESP32S3
title: ESP32S3 的 CircuitPython 编程
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO_ESP32S3_CircuitPython
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# 使用 XIAO ESP32S3 用 CircuitPython 在 OLED 屏显示文字


CircuitPython是XIAO ESP32S3的理想编程语言，因为它简化了物理计算项目。它基于Python，具有初学者友好的语法，并包括用于访问传感器和显示器等硬件的模块。由于CircuitPython已经支持ESP32S3芯片，本项目尝试在Seeed Studio XIAO ESP32S3板上编译CircuitPython。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

## 硬件准备

我在这里使用Seeed Studio XIAO ESPS3和Seeed Studio Grove OLED显示器0.96作为硬件。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio Grove OLED Display 0.96</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买  🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 软件准备

我正在使用Thonny IDE软件（Windows）和一些相关的库和文件。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>related files(libraries)</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::信息
在使用它之前，我需要说明我在这里使用的软件/固件是为ESP32S3芯片设计的。因此，当您尝试使用引脚时，请确保使用通用输入/输出，而不是板上的引脚<br/>
例如，当您尝试使用左侧第一行中的接点时。请确保它是 `GPIO1` 而不是 `A0` 或者`D0`。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:500, height:'auto'}}/></div>
:::

## 入门

### 在BootLoader模式下将XIAO ESP32S3板连接到PC

具体方法是：

- **步骤 1**. 按住XIAO ESP32S3上的BOOT（引导）按钮，不要松开它。

- **步骤 2**. 按住BOOT（引导）按钮，然后通过数据线连接到计算机。连接到计算机后释放BOOT按钮。

- **步骤 3**. 上传**Blink**程序以检查XIAO ESP32S3的操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### 打开Thonny并配置选项

1. 运行Thonny后，导航“工具->选项”并单击“选项”选择

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png" /></div>

2.选择“解释器”选项，然后单击“CircuitPython（generic）”选择

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png" /></div>

### XIAO ESP32S3板的Flash CircuitPython固件

1. 点击Thonny中的“（esptool）”。它将提示您下载最新的CircuitPython固件并将其闪存到板上。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png" /></div>

2. Thonny中的“（esptool）”如下所示，并首先选择正确的“目标端口”。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png" /></div>

3. 选择CircuitPython系列作为“ESP32-S3”，并选择变体作为“Espressif•ESP32-S3-DevKitC-1-N8”。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png" /></div>

4. Thonny将填充重置，您现在可以单击“安装”。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png" /></div>

5. 显示“完成”一段时间后，可以关闭窗口。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png" /></div>

6. 电脑上会有一个“CIRCUITPY”驱动程序，显示主板已成功闪存。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png" /></div>

###将相关文件（库）添加到“CIRCUITPY”驱动程序

从[相关文件(库)]复制所有文件(https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip)至“电路”驱动器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png" /></div>


:::笔记
使用“Seeed Studio Grove OLED Display 0.96”时，需要“adafruit_ssd1306.mpy”文件和“adafrut_framebuf.mpy”

adafruit_framebuf库使用名为font5x8.bin的字体文件来呈现文本。此文件需要在执行代码的环境中可以访问。
:::

### 编写代码（IIC）并上传以实现OLED显示

1. 添加文件后，我现在可以使用命令import adafruit_ssd1306将adafruit_ssd1306库导入到代码中，并且环境现在被配置为驱动OLED显示器。代码如下所示：

```cpp
from board import *
from busio import I2C
import busio
import adafruit_ssd1306

i2c = I2C(IO6,IO5)  # Initialize I2C communication using IO6 and IO5 pins

# Create a display object with 128x64 resolution and an I2C address of 0x3C
display = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)

# Clear the display
display.fill(0)
display.show()

# Write text on the display
display.text('SeeedStudio ESP32S3', 0, 0 , 1)
display.text('Code by CircuitPython!', 0, 20 , 2)
display.show()
```

2. 点击“Run”按钮上传代码

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png" /></div>

3. 最终结果

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

## 而且

- 相关文件均来自组装的[Adafruit CircuitPython库捆绑包](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip)形式 https://circuitpython.org/libraries您可以使用CircuitPython找到所有支持的硬件文件。
- The "font5x8.bin"文件来自[此处](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin)

## ✨ 参与者项目

- 此项目由Seeed Studio[贡献者项目]支持(https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- 感谢 [Isaac的努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340) 你的作品将[展出](https://wiki.seeedstudio.com/Honorary-Contributors/)。

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
