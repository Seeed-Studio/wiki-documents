---
description: XIAO ESP32S3 的 CircuitPython
title: XIAO ESP32S3 项目 CircuitPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_project_circuitpython
last_update:
  date: 08/18/2024
  author: Isaac, Djair Guilherme
---

# 项目概述

此 wiki 已更新：https://wiki.seeedstudio.com/xiao_esp32s3_with_micropython/

CircuitPython 是 XIAO ESP32S3 的理想编程语言，因为它简化了物理计算项目。基于 Python，它具有初学者友好的语法，并包含用于访问传感器和显示器等硬件的模块。由于 CircuitPython 已经支持 ESP32S3 芯片，本项目尝试在 Seeed Studio XIAO ESP32S3 开发板上编译 CircuitPython。

## XIAO ESP32S3 与 OLED 显示屏

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

### 硬件准备

我在这里使用 Seeed Studio XIAO ESPS3 和 Seeed Studio Grove OLED Display 0.96 作为硬件。

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 软件准备

我使用的是 Thonny IDE 软件（Windows）以及一些相关的库和文件。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>相关文件（库）</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:500, height:'auto'}}/></div>

### 入门指南

#### 下载 XIAO ESP32S3 CircuitPython 固件

[XIAO ESP32S3 Sense 的 CircuitPython 固件 9.1.1 和 9.20 Alpha](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)

#### 在 BootLoader 模式下将 XIAO ESP32S3 开发板连接到 PC

具体方法如下：

- **步骤 1**. 按住 XIAO ESP32S3 上的 BOOT 按钮不松开。

- **步骤 2**. 保持按住 BOOT 按钮，然后通过数据线连接到计算机。连接到计算机后松开 BOOT 按钮。

- **步骤 3**. 上传 **Blink** 程序来检查 XIAO ESP32S3 的运行状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

#### 打开 Thonny 并配置选项

1. 运行 Thonny 后，导航到"工具 -> 选项"并点击"选项"选择

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png" /></div>

2. 选择"解释器"选项并点击"CircuitPython (generic)"选择

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png" /></div>

### 将 CircuitPython 固件刷入 XIAO ESP32S3 开发板

1. 在 Thonny 中点击"(esptool)"。它会提示您下载最新的 CircuitPython 固件并将其刷入开发板。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png" /></div>

2. Thonny 中的"(esptool)"如下所示，首先选择正确的"目标端口"。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png" /></div>

3. 选择 CircuitPython 系列为"ESP32-S3"，并选择安装按钮旁边带有三条水平线的图标，以包含您下载的固件。
例如：(seeed_xiao_esp32s3_911.bin 或 seeed_xiao_esp32s3_920.bin)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png" /></div>

4. Thonny 将填充重置，现在您可以点击"安装"。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png" /></div>

5. 显示"完成"后，可以关闭窗口。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png" /></div>

6. PC 上会出现一个"CIRCUITPY"驱动器，这表明开发板已成功刷入固件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png" /></div>

#### 将相关文件（库）添加到"CIRCUITPY"驱动器

将[相关文件（库）](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip)中的所有文件复制到"CIRCUITPY"驱动器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png" /></div>

:::note
使用"Seeed Studio Grove OLED Display 0.96"时，"adafruit_ssd1306.mpy"文件和"adafruit_framebuf.mpy"文件是必需的

adafruit_framebuf 库使用名为 font5x8.bin 的字体文件来渲染文本。此文件需要在执行代码的环境中可访问。
:::

#### 编写代码（IIC）并上传以实现 OLED 显示

1. 添加文件后，我现在可以使用命令 import adafruit_ssd1306 将 adafruit_ssd1306 库导入到代码中，环境现在已配置为驱动 OLED 显示器。代码如下所示：

```python
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

2. 点击"Run"按钮上传代码

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png" /></div>

3. 最终结果

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

## XIAO ESP32S3 Sense 配合 XIAO 圆形显示屏和 Sense 摄像头使用

### 硬件准备

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>XIAO 圆形显示屏</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 软件准备

1. 将固件安装到 XIAO ESP32S3 Sense。

<div className="table-center">
  <table align="center">
    <tr>
      <th>固件</th>
      <td>
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense"
            style={{ color: '#FFFFFF', fontSize: '16px', textDecoration: 'none' }}
          >
            <strong>下载 ⏬</strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

2. 安装必要的模块和依赖项。

您始终可以使用 Adafruit 的工具 [circup](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup/install-circup) 来安装 CircuitPython 库。安装后，您只需输入命令即可安装任何库。

```linux
# install circup
pip install setuptools
pip install circup
pip install --upgrade circup
# install module to library
circup install gc9a01 adafruit_ticks 
```

### 开始使用

安装所有需要的库后，只需将代码输入到 CIRCIUTPY 的 code.py 或 main.py 中，如下所示，即可在圆形显示屏上查看摄像头画面。

```python
import board
import busio
import displayio
import espcamera
import adafruit_ticks
import gc9a01
import struct

i2c = busio.I2C(board.SCL, board.SDA)
spi = busio.SPI(clock=board.SCK, MOSI=board.MOSI)
cam_i2c = busio.I2C(board.CAM_SCL, board.CAM_SDA)

tft_dc  = board.D3
tft_cs  = board.D1
tft_bl  = board.D6

display_bus = displayio.FourWire(spi, command=tft_dc, chip_select=tft_cs)
display = gc9a01.GC9A01(display_bus, width=240, height=240, rotation=0)

# Appears that this example does not use Displayio at all
# print frame directly on display_bus to be faster
# so, rotation setting not works...

main = displayio.Group()
display.root_group = main

# Camera Init
cam = espcamera.Camera(
    data_pins=board.CAM_DATA,
    external_clock_pin=board.CAM_XCLK,
    pixel_clock_pin=board.CAM_PCLK,
    vsync_pin=board.CAM_VSYNC,
    href_pin=board.CAM_HREF,
    pixel_format=espcamera.PixelFormat.RGB565,
    frame_size=espcamera.FrameSize.R240X240,
    i2c=cam_i2c,
    external_clock_frequency=20_000_000,
    framebuffer_count=2,
    grab_mode=espcamera.GrabMode.WHEN_EMPTY)

# Sending init bytes to display_bus
display_bus.send(36, struct.pack(">hh", 0, 239))
display_bus.send(42, struct.pack(">hh", 0, 239))
display_bus.send(43, struct.pack(">hh", 0, 80+239))
display.auto_refresh = False

t0 = adafruit_ticks.ticks_ms()

while True:
    frame = cam.take(1)                                                         
    if isinstance(frame, displayio.Bitmap):                                     
        display_bus.send(44, frame)                                             
        t1 = adafruit_ticks.ticks_ms()                                          
        fps = 1000 / adafruit_ticks.ticks_diff(t1, t0)
        print(f"{fps:3.1f}fps")  # typically runs at about 25fps
        t0 = t1
```

## 更多信息

- 相关文件均来自组装的 [Adafruit CircuitPython 库包](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip)，来源于 https://circuitpython.org/libraries，您可以找到所有支持使用 CircuitPython 的硬件文件。
- "font5x8.bin" 文件来自[这里](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin)
- 用于圆形显示屏和摄像头的[固件](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 感谢 [Isaac 的努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340)，您的工作将被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。
- 以及 [Djair Guilherme](https://github.com/Seeed-Studio/wiki-documents/issues/1237#issuecomment-2295415274)。

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
