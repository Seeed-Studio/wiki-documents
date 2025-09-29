---
description: Grove - OLED Display 1.12&#34
title: Grove - OLED Display 1.12&#34
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-OLED_Display_1.12inch
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/main.jpg" />
</div>

Our new 1.12” OLED displays are perfect when you need a small display with 16 grayscale. The visible portion of the OLED measures 1.12” diagonal and contains 96x96(version 1.0) |  128x128(version 2.0) grayscale pixels. Because the display uses OLEDs, there is no backlight, and the contrast is very high.

This OLED uses the SSD1327(V1.0) or SH1107G(V2.1) driver chip, which manages the display. You can talk to the driver chip using 4-wire I2C (clock, data, power, and GND pins).

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)

## Specification

- Communicate Mode: I2C
- Grayscale Display: 16 Gray shades.
- Supports both Normal and Inverse Color Display.
- Supports Continuous Horizontal Scrolling.
- Grove compatible Interface

## Version

  ---

  | Product Version              | Changes                                                                                                                                                                                    | Released Date |
  |------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
  |Grove - OLED Display 1.12" V1.0 | Initial                                                                                                                                                                                    | Mar 2012      |
  |Grove - OLED Display 1.12" V2.1 | Change the driver IC from SSD1327 to SH1107G, upgrade the grayscale pixels from 96X96 to 128X128 | Nov 2015     |

## Specifications

---

|Item|Value|
|-----|------|
|Operating Voltage | 3.3/5 V|
|Dot Matrix | 96x96 |
| Display Color| 16 Grayscale |
| OLED Display | LY120-96096 |
| Driver Chip | SSD1327Z |
| Dot Size | 0.15(W)mm x 0.15(H)mm |
| Dot Pitch | 0.75(W)mm x 0.175(H)mm|
| Operating Temperature | -40~70 oC|

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Platforms Supported
<!-- ---

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play with Arduino

#### Hardware

Here we will show you how this Grove - OLED Display works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - OLED Display 1.12`` | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

This is an easy-to-use module, what you need to do is connect the module to I2C port of a Base Shield. There're 4 pins, defined as below.

|pin|Function  | Note   | Cable color |
|--------|------|-----|---------------|
|pin1 | SCL | I2C Clock | YELLOW |
|pin2   | SDA| I2C Data| WHITE|
|pin3   | VCC  | Power, 5V/3.3V| RED |
|pin4 | GND  | Ground | BLACK |

**Hardware Overview**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/connection.jpg" />
</div>

#### Software

- **Step 1.** Connect Grove - OLED Display 1.12'' to **I2C** port of Base Shield via Grove cable.

- **Step 2.** Open Arduino IDE and the Library Manager **(Sketch > Include Library > manage Libraries)** to install the library of u8g2.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>

- **Step 3.** Enter "**u8g2**" into the search field and select latest version and Cclick "Install" button.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>

- **Step 4.** Upload the demo code below in your Arduino IDE.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_ncenB10_tr);
    u8g2.drawStr(0,24,"Hello World!");
  } while ( u8g2.nextPage() );
}
```

:::success
       There will be a "Hello World!" displayed on the screen of Grove - OLED Display 1.12'' if everything goes well.
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/outcome.jpg" />
</div>

:::note
        If there's no Base Shield with you, [Seeeduino Vx Series](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) with **I2C interface** do work as well.
:::

#### U8g2 Library Introduction

U8g2 is a monochrome graphics library for embedded devices. U8g2 supports monochrome OLEDs and LCDs, which include our chip SSD1327/SH1107G.

The Arduino library U8g2 can be installed from the library manager of the Arduino IDE. U8g2 also includes U8x8 library:

**U8g2**

- Includes all graphics procedures (line/box/circle draw).
- Supports many fonts. (Almost) no restriction on the font height.
- Requires some memory in the microcontroller to render the display.

**U8x8**

- Text output only (character) device.
- Only fonts allowed with fit into a 8x8 pixel grid.
- Writes directly to the display. No buffer in the microcontroller required.

Here provides the [**U8g2 Library wiki**](https://github.com/olikraus/u8g2/wiki) as well as the [U8g2 API Reference](https://github.com/olikraus/u8g2/wiki/u8g2reference) page.

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1.** Things used in this project:

<div class="table-center">
 <table>
  <tr>
   <th>Raspberry pi</th>
      <th>Grove Base Hat for RasPi </th>
      <th>Grove - OLED Display 1.12''</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Step 2.** Plug the Grove Base Hat into Raspberry.
- **Step 3.** Connect the Grove - OLED Display 1.12'' to I2C port of the Base Hat.
- **Step 4.** Connect the Raspberry Pi to PC through USB cable.

#### Software

- **Step 1.** Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment install the grove.py to your raspberry pi.
- **Step 2.** Excute below commands to run the code.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_lcd_1.2inches
```

Following is the sh1107g.py code.

```python
'''
This is the code for
    - `Grove - 16 x 2 LCD (Black on Red) <https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Re-p-3197.html>`_
    - `Grove - 16 x 2 LCD (Black on Yellow) <https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yello-p-3198.html>`_
    - `Grove - 16 x 2 LCD (White on Blue) <https://www.seeedstudio.com/Grove-16-x-2-LCD-White-on-Blu-p-3196.html>`_

Examples:

    .. code-block:: python

        import time
        from grove.factory import Factory

        # LCD 16x2 Characters
        lcd = Factory.getDisplay("JHD1802")
        rows, cols = lcd.size()
        print("LCD model: {}".format(lcd.name))
        print("LCD type : {} x {}".format(cols, rows))

        lcd.setCursor(0, 0)
        lcd.write("hello world!")
        lcd.setCursor(0, cols - 1)
        lcd.write('X')
        lcd.setCursor(rows - 1, 0)
        for i in range(cols):
            lcd.write(chr(ord('A') + i))

        time.sleep(3)
        lcd.clear()
'''
from grove.display.base import *
# from upm.pyupm_lcd import *
from grove.i2c import Bus
import sys

# sphinx autoapi required
__all__ = ["SH1107G"]

BasicFont = [
        [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x5F,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x07,0x00,0x07,0x00,0x00,0x00],
        [0x00,0x14,0x7F,0x14,0x7F,0x14,0x00,0x00],
        [0x00,0x24,0x2A,0x7F,0x2A,0x12,0x00,0x00],
        [0x00,0x23,0x13,0x08,0x64,0x62,0x00,0x00],
        [0x00,0x36,0x49,0x55,0x22,0x50,0x00,0x00],
        [0x00,0x00,0x05,0x03,0x00,0x00,0x00,0x00],
        [0x00,0x1C,0x22,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x41,0x22,0x1C,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x2A,0x1C,0x2A,0x08,0x00,0x00],
        [0x00,0x08,0x08,0x3E,0x08,0x08,0x00,0x00],
        [0x00,0xA0,0x60,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x08,0x08,0x08,0x08,0x00,0x00],
        [0x00,0x60,0x60,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
        [0x00,0x3E,0x51,0x49,0x45,0x3E,0x00,0x00],
        [0x00,0x00,0x42,0x7F,0x40,0x00,0x00,0x00],
        [0x00,0x62,0x51,0x49,0x49,0x46,0x00,0x00],
        [0x00,0x22,0x41,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x18,0x14,0x12,0x7F,0x10,0x00,0x00],
        [0x00,0x27,0x45,0x45,0x45,0x39,0x00,0x00],
        [0x00,0x3C,0x4A,0x49,0x49,0x30,0x00,0x00],
        [0x00,0x01,0x71,0x09,0x05,0x03,0x00,0x00],
        [0x00,0x36,0x49,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x06,0x49,0x49,0x29,0x1E,0x00,0x00],
        [0x00,0x00,0x36,0x36,0x00,0x00,0x00,0x00],
        [0x00,0x00,0xAC,0x6C,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x14,0x22,0x41,0x00,0x00,0x00],
        [0x00,0x14,0x14,0x14,0x14,0x14,0x00,0x00],
        [0x00,0x41,0x22,0x14,0x08,0x00,0x00,0x00],
        [0x00,0x02,0x01,0x51,0x09,0x06,0x00,0x00],
        [0x00,0x32,0x49,0x79,0x41,0x3E,0x00,0x00],
        [0x00,0x7E,0x09,0x09,0x09,0x7E,0x00,0x00],
        [0x00,0x7F,0x49,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x41,0x22,0x00,0x00],
        [0x00,0x7F,0x41,0x41,0x22,0x1C,0x00,0x00],
        [0x00,0x7F,0x49,0x49,0x49,0x41,0x00,0x00],
        [0x00,0x7F,0x09,0x09,0x09,0x01,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x51,0x72,0x00,0x00],
        [0x00,0x7F,0x08,0x08,0x08,0x7F,0x00,0x00],
        [0x00,0x41,0x7F,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x40,0x41,0x3F,0x01,0x00,0x00],
        [0x00,0x7F,0x08,0x14,0x22,0x41,0x00,0x00],
        [0x00,0x7F,0x40,0x40,0x40,0x40,0x00,0x00],
        [0x00,0x7F,0x02,0x0C,0x02,0x7F,0x00,0x00],
        [0x00,0x7F,0x04,0x08,0x10,0x7F,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x41,0x3E,0x00,0x00],
        [0x00,0x7F,0x09,0x09,0x09,0x06,0x00,0x00],
        [0x00,0x3E,0x41,0x51,0x21,0x5E,0x00,0x00],
        [0x00,0x7F,0x09,0x19,0x29,0x46,0x00,0x00],
        [0x00,0x26,0x49,0x49,0x49,0x32,0x00,0x00],
        [0x00,0x01,0x01,0x7F,0x01,0x01,0x00,0x00],
        [0x00,0x3F,0x40,0x40,0x40,0x3F,0x00,0x00],
        [0x00,0x1F,0x20,0x40,0x20,0x1F,0x00,0x00],
        [0x00,0x3F,0x40,0x38,0x40,0x3F,0x00,0x00],
        [0x00,0x63,0x14,0x08,0x14,0x63,0x00,0x00],
        [0x00,0x03,0x04,0x78,0x04,0x03,0x00,0x00],
        [0x00,0x61,0x51,0x49,0x45,0x43,0x00,0x00],
        [0x00,0x7F,0x41,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x02,0x04,0x08,0x10,0x20,0x00,0x00],
        [0x00,0x41,0x41,0x7F,0x00,0x00,0x00,0x00],
        [0x00,0x04,0x02,0x01,0x02,0x04,0x00,0x00],
        [0x00,0x80,0x80,0x80,0x80,0x80,0x00,0x00],
        [0x00,0x01,0x02,0x04,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x54,0x54,0x54,0x78,0x00,0x00],
        [0x00,0x7F,0x48,0x44,0x44,0x38,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x28,0x00,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x48,0x7F,0x00,0x00],
        [0x00,0x38,0x54,0x54,0x54,0x18,0x00,0x00],
        [0x00,0x08,0x7E,0x09,0x02,0x00,0x00,0x00],
        [0x00,0x18,0xA4,0xA4,0xA4,0x7C,0x00,0x00],
        [0x00,0x7F,0x08,0x04,0x04,0x78,0x00,0x00],
        [0x00,0x00,0x7D,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x80,0x84,0x7D,0x00,0x00,0x00,0x00],
        [0x00,0x7F,0x10,0x28,0x44,0x00,0x00,0x00],
        [0x00,0x41,0x7F,0x40,0x00,0x00,0x00,0x00],
        [0x00,0x7C,0x04,0x18,0x04,0x78,0x00,0x00],
        [0x00,0x7C,0x08,0x04,0x7C,0x00,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x38,0x00,0x00,0x00],
        [0x00,0xFC,0x24,0x24,0x18,0x00,0x00,0x00],
        [0x00,0x18,0x24,0x24,0xFC,0x00,0x00,0x00],
        [0x00,0x00,0x7C,0x08,0x04,0x00,0x00,0x00],
        [0x00,0x48,0x54,0x54,0x24,0x00,0x00,0x00],
        [0x00,0x04,0x7F,0x44,0x00,0x00,0x00,0x00],
        [0x00,0x3C,0x40,0x40,0x7C,0x00,0x00,0x00],
        [0x00,0x1C,0x20,0x40,0x20,0x1C,0x00,0x00],
        [0x00,0x3C,0x40,0x30,0x40,0x3C,0x00,0x00],
        [0x00,0x44,0x28,0x10,0x28,0x44,0x00,0x00],
        [0x00,0x1C,0xA0,0xA0,0x7C,0x00,0x00,0x00],
        [0x00,0x44,0x64,0x54,0x4C,0x44,0x00,0x00],
        [0x00,0x08,0x36,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x7F,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x41,0x36,0x08,0x00,0x00,0x00,0x00],
        [0x00,0x02,0x01,0x01,0x02,0x01,0x00,0x00],
        [0x00,0x02,0x05,0x05,0x02,0x00,0x00,0x00],
]

class SH1107G(Display):
    '''
    OLED Display 1.12"(v2) use chip SH1107G.

    Args:
        address(int): I2C device address, default to 0x3E.
    '''
    MAX_GRAY    = 100
    _REG_CMD    = 0x00
    _REG_DATA   = 0x40
    _PAGE_CNT   = 16
    _PAGE_BYTES = 128
    _TOTAL_BYTES= _PAGE_CNT * _PAGE_BYTES
    
    _DISPLAY_CMD_OFF = 0xAE;
    _DISPLAY_CMD_ON = 0xAF;

    _BASE_LOW_COLUMN_ADDR = 0x00;
    _BASE_HIGH_COLUMN_ADDR = 0x10;
    _BASE_PAGE_START_ADDR = 0xB0;
    def __init__(self, address = 0x3C):
        super(SH1107G, self).__init__()
        self._bus = Bus()
        self._addr = address

        if self._bus.write_byte(self._addr, 0):
            print("Check if the OLED SH1107G inserted, then try again")
            sys.exit(1)
 
        id = self._bus.read_byte_data(self._addr, SH1107G._REG_CMD)
        # print(" id = 0x{:2x}".format(id))
        self._sh1107 = (id & 0x3F) == 0x07

        blk =     [0xAE]   # Display OFF
        blk.append(0xD5)   # Set Dclk
        blk.append(0x50)   # 100Hz
        blk.append(0x20)   # Set row address
        blk.append(0x81)   # Set contrast control
        blk.append(0x80)
        blk.append(0xA0)   # Segment remap
        blk.append(0xA4)   # Set Entire Display ON 
        blk.append(0xA6)   # Normal display
        blk.append(0xAD)   # Set external VCC
        blk.append(0x80)
        blk.append(0xC0)   # Set Common scan direction
        blk.append(0xD9)   # Set phase leghth
        blk.append(0x1F)
        blk.append(0xDB)   # Set Vcomh voltage
        blk.append(0x27)
        blk.append(0xAF)   # Display ON
        blk.append(0xB0)
        blk.append(0x00)
        blk.append(0x10)
        self._cmds(blk)
        self.clear()

    def _cmd(self, cmd):
        try:
            self._bus.write_byte_data(self._addr,
                                    SH1107G._REG_CMD, cmd)
        except IOError:
            print("*** Check if OLED module inserted ***")
            sys.exit(1)

    def _cmds(self, cmds):
        for c in cmds:
            self._cmd(c)

    def _datas(self, datas):
        length = len(datas)
        data = bytearray(length + 1)
        data[0] = SH1107G._REG_DATA
        for i in range(length):
            data[i + 1] = datas[i]
        try:
            self._bus.write_i2c_block_data(self._addr,
                                  SH1107G._REG_DATA, datas)
        except IOError:
            print("*** Check if OLED module inserted ***")
            sys.exit(1)

    @property
    def name(self):
        '''
        Get device name

        Returns:
            string: SH1107G/SSD1307 depends your device plugin.
        '''
        return "SH1107G"

    def type(self):
        '''
        Get device type

        Returns:
            int: ``TYPE_GRAY``
        '''
        return TYPE_GRAY

    def size(self):
        '''
        Get display size

        Returns:
            (Rows, Columns): the display size, in characters.
        '''
        return 16, 16

    def clear(self):
        '''
        Clears the screen and positions the cursor in the upper-left corner.
        '''
        zeros = [ 0x0 for dummy in range(SH1107G._TOTAL_BYTES) ]
        self.draw(zeros, SH1107G._TOTAL_BYTES)

    def draw(self, data, bytes):
        '''
        Quickly transfer/draw bulk data (specified by data) to OLED,
        transfer size specified by bytes.

        Args:
            data (list of int): the data to transfer/draw
            bytes (int)       : data size
        '''

        # all pages fill with data
        for i in range(SH1107G._PAGE_CNT):
            if i > bytes / SH1107G._PAGE_BYTES:
                return
            self._cmd(self._BASE_PAGE_START_ADDR + i)
            self._cmd(self._BASE_LOW_COLUMN_ADDR)
            self._cmd(self._BASE_HIGH_COLUMN_ADDR)
            # fill one PAGE bytes
            for k in range(0, SH1107G._PAGE_BYTES, 32):
                # I2C limit to 32 bytes each transfer
                begin = i * SH1107G._PAGE_BYTES + k
                end   = begin + 32
                self._datas(data[begin:end])

    def home(self):
        '''
        Positions the cursor in the upper-left of the OLED.
        That is, use that location in outputting subsequent text to the display.
        '''
        self.setCursor(0, 0)

    def setCursor(self, row, column):
        '''
        Position the OLED cursor; that is, set the location
        at which subsequent text written to the OLED will be displayed.

        Args:
            row   (int): the row at which to position cursor, with 0 being the first row
            column(int): the column at which to position cursor, with 0 being the first column

 Returns:
     None
        '''
        self._cmd(self._BASE_PAGE_START_ADDR + row)
        self._cmd(0x08 if column % 2 else self._BASE_LOW_COLUMN_ADDR)
        self._cmd(self._BASE_HIGH_COLUMN_ADDR + (column >> 1))

    def _putchar(self, c):
        asc = ord(c)
        if asc < 32 or asc > 127:
                asc = ord(' ')
        for i in range(8):
            fontmap = []
            fontmap.append(BasicFont[asc - 32][i])
            self._datas(fontmap)

    def write(self, msg):
        '''
        Write character(s) to the OLED.

        Args:
            msg (string): the character(s) to write to the display

        Returns:
            None
        '''
        for i in range(len(msg)):
            self._putchar(msg[i])

    def _backlight_on(self, en):
        self._cmd(self._DISPLAY_CMD_ON if en else self._DISPLAY_CMD_OFF)


def main():
    import time

    oled = SH1107G()
    rows, cols = oled.size()
    print("OLED model: {}".format(oled.name))
    print("OLED type : {} x {}".format(cols, rows))

    oled.backlight(False)
    time.sleep(1)

    oled.backlight(True)
    oled.setCursor(0, 0)
    oled.write("hello world!")
    oled.setCursor(0, cols - 1)
    oled.write('X')
    oled.setCursor(rows - 1, 0)
    for i in range(cols):
        oled.write(chr(ord('A') + i))

    time.sleep(3)
    oled.clear()

if __name__ == '__main__':
    main()

```

```python
（env）pi@raspberrypi:~ grove_lcd_1.2inches
```

:::tip success

If everything goes well, you will be able to see the following result

:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/play_with_raspberry.jpg" />
</div>

You can quit this program by simply press `ctrl`+`c`.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

---------

- **[Eagle]** [Grove-OLED Display 1.12inch in Eagle](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip)
- **[PDF]** [Grove-OLED Display 1.12inch Sch](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20Sch.pdf)
- **[PDF]** [Grove-OLED Display 1.12inch PCB](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20PCB.pdf)
- **[Datasheet]** [SSD1327 Datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SSD1327_datasheet.pdf)
- **[Datasheet]** [LY120 Datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/308010007_LCD-22P-0.7.pdf)
- **[Datasheet]** [SH1107G_datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SH1107G_datasheet.pdf)
- **[Tool]** [Reference for Make a 96x96 Image](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Make_A_96X96_Image1.zip)

## Project

**Smart Crops: Implementing IoT in Conventional Agriculture!** Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**Automated Plant Watering System** A device that waters plants and monitors temprature using an ESP8266 and Android app.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ammarshahid572/automated-plant-watering-system-cb23d9/embed' width='350'></iframe>

**Flying BeagleBone Green** BBBmini is a state of the art Linux autopilot / flightcontroller Cape for the BeagleBone. It can be used for Copter, Planes or Rovers.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/mirkix/flying-beaglebone-green-448b60/embed' width='350'></iframe>

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
