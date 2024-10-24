---
description: CircuitPython for XIAO ESP32S3
title: XIAO ESP32S3 Project CircuitPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_project_circuitpython
last_update:
  date: 08/18/2024
  author: Isaac, Djair Guilherme
---

# Project Overview

This wiki has been updated: https://wiki.seeedstudio.com/xiao_esp32s3_with_micropython/

CircuitPython is an ideal programming language for XIAO ESP32S3 as it simplifies physical computing projects. Based on Python, it has beginner-friendly syntax and includes modules for accessing hardware like sensors and displays. Since CircuitPython already supports the ESP32S3 chip, this project attempts to compile CircuitPython on Seeed Studio XIAO ESP32S3 Board.

## XIAO ESP32S3 with OLED Display

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

### Hardware Preparation

I am using Seeed Studio XIAO ESPS3 and Seeed Studio Grove OLED Display 0.96 as the hardware here.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Software Preparation

I am using Thonny IDE software(Windows) and some related libraries and files.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>related files(libraries)</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:500, height:'auto'}}/></div>


### Getting Started

#### Download XIAO ESP32S3 Circuitpython Firmware

[Circuitpython Firmwares 9.1.1 and 9.20 Alpha for XIAO ESP32S3 Sense](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)


#### Connect the XIAO ESP32S3 board to PC under the BootLoader Mode

The specific method is:

- **Step 1**. Press and hold the BOOT button on the XIAO ESP32S3 without releasing it.

- **Step 2**. Keep the BOOT button pressed and then connect to the computer via the data cable. Release the BOOT button after connecting to the computer.

- **Step 3**. Upload the **Blink** program to check the operation of the XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

#### Open Thonny and Configure the options

1. After running Thonny, navigate "Tools -> Options" and click the "Options" selection

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png" /></div>

2. Select "Interpreter" option and click the "CircuitPython (generic)" selection

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png" /></div>

### Flash CircuitPython firmware to the XIAO ESP32S3 board

1. Click on "(esptool)" in Thonny. It will prompt you to download the latest CircuitPython firmware and flash it to the board.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png" /></div>

2. The "(esptool)" in Thonny is shown like below and fisrtly choose the right "Target port".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png" /></div>

3. Select the CircuitPython family as "ESP32-S3" and Select the icon with the three horizontal lines next to the install button, to include the Firmware you downloaded.
Eg. (seeed_xiao_esp32s3_911.bin or seeed_xiao_esp32s3_920.bin)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png" /></div>

4. Thonny will fill the reset and you can click the "Install" now.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png" /></div>

5. After a while showing "Done", the window can be closed.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png" /></div>

6. There will be a "CIRCUITPY" driver on the PC, which shows the board has successfully been flashed.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png" /></div>

#### Add the related files(libraries) to the "CIRCUITPY" driver

Copy all the files from the [related files(library)](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip) to the "CIRCUITPY" driver.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png" /></div>


:::note
The "adafruit_ssd1306.mpy" file and "adafruit_framebuf.mpy" file are necessary while using "Seeed Studio Grove OLED Display 0.96"

The adafruit_framebuf library uses a font file named font5x8.bin to render text. This file needs to be accessible within the environment where your code is executed.
:::

#### Write code(IIC) and upload to achieve OLED display

1. After adding the files, I can now import the adafruit_ssd1306 library into the code using the command import adafruit_ssd1306 and the environment is now configured to drive the OLED display. The code is shown below:

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

2. Upload the code by clicking the "Run" buttion

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png" /></div>

3. The final result

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>


## XIAO ESP32S3 Sense with  Using XIAO Round Display with Sense Camera

### Hardware Preparation

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Software Preparation

1. Install firmware to XIAO ESP32S3 Sense.

<div className="table-center">
  <table align="center">
    <tr>
      <th>Firmware</th>
      <td>
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense"
            style={{ color: '#FFFFFF', fontSize: '16px', textDecoration: 'none' }}
          >
            <strong>Download ⏬</strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

2. Install necessary modules and dependencies.

You allways could install CircuitPython libraries using the tool [circup](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup/install-circup), from Adafruit. When installed, you just type to install any libraries.

```linux
# install circup
pip install setuptools
pip install circup
pip install --upgrade circup
# install module to library
circup install gc9a01 adafruit_ticks 
```

### Getting Started

After install all libraries, needed, just type the code to code.py or main.py to CIRCIUTPY, bellow to see Camera Frame at Round Display.

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


## What's more

- The related files are all from the assembled [Adafruit CircuitPython library bundle](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip) form https://circuitpython.org/libraries and you can find all the supported hardware files using CircuitPython.
- The "font5x8.bin" file is from [here](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin)
- [Firmware](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense) for Round Display and camera

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- Thanks [Isaac's efforts](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340) and your work will be [exhibited](https://wiki.seeedstudio.com/Honorary-Contributors/).
- And [Djair Guilherme](https://github.com/Seeed-Studio/wiki-documents/issues/1237#issuecomment-2295415274).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
