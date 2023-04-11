---
description: Grove - OLED Display 0.96" (SSD1315)
title: Grove - OLED Display 0.96" (SSD1315)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-OLED-Display-0.96-SSD1315
last_update:
  date: 1/9/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg" alt="pir" width={600} height="auto" /></p>

The Grove - OLED Display 0.96" (SSD1315) is a monochrome(white) 128×64 pixels passive display matrix module with Grove I2C Interface.

Thanks to the new SSD1315 chip, it can work with 3.3V, so that we removed the expensive DC-DC boost circuit. And with the onboard level shift circuit, the new Grove - OLED Display 0.96" can work with 3.3V and 5V platform. That is to say, you can use it easily as an Arduino OLED display, Raspberry Pi OLED display, etc.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)
## Feature

- 3.3V/5V compatible
- Changeable I2C address
- Low power consumption
- Monochrome(white) 128×64 pixels
- High contrast, high brightness
- Wide operating temperature range: -40℃ ~ +85 ℃


## Specification

|Parameter|Value|
|---|---|
|Input voltage|3.3V / 5V|
|Output Voltage| 0 ~ 2.3V |
|Pixels|128 x 64|
|Temperature Range|-40℃ ~ +85 ℃|
|Interface|I2C/Digital|

## Hardware Overview

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-pin.jpgg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-pin.jpg" /></a></p>
  </figure>
</div>



## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Getting Started

### Play With Arduino


**Materials required**


| Seeeduino V4.2 | Base Shield | Grove - OLED Display 0.96"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|

>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.

#### Hardware Connection

- **Step 1.** Plug Grove - TDS Sensor to **I2C** port of Grove - Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to a PC via a USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/connection.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/connection.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.**  Navigate to **Sketch** -> **Include Library** -> **Manage Libraries...** and Search and Install **`U8g2`** library in the **Library Manager**.

- **Step 2.**  Open the Arduino IDE and create a new file, then copy the following code into the new file.

```C++
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif


U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);  // High speed I2C

// U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Low spped I2C

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();					// clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);	// choose a suitable font
  u8g2.drawStr(0,10,"Hello World!");	// write something to the internal memory
  u8g2.sendBuffer();					// transfer internal memory to the display
  delay(1000);  
}
```

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** The OLED Display should look like this:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/result.png" /></div>


## U8g2 Library Introduction

U8g2 is a monochrome graphics library for embedded devices. U8g2 supports monochrome OLEDs and LCDs, which include our chip SSD1315.

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

## FAQ

**Q1#** Example not working with other boards?

**A1:** The U8g2 has different modes while initialising, instead of hardware I2C, it could also use software I2C. If not working, please try to use Software I2C. For more information please visit [u8g2](https://github.com/olikraus/U8g2_Arduino). Some examples and brief introductions are also provided [here](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0).

## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove%20-%20OLED%20Display%200.96%20(SSD1315)_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Resources

- **[ZIP]** [Grove - OLED Display 0.96" Schematic file](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove%20-%20OLED%20Display%200.96%20(SSD1315)_v1.0.zip)
- **[PDF]** [OLED Module Datasheet](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/OEL%20Display%20Module.pdf)

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>