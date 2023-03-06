---
description: Grove - OLED Display 0.66" (SSD1306)
title: Grove - OLED Display 0.66" (SSD1306)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-OLED-Display-0.66-SSD1306_v1.0
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" alt="pir" width={600} height="auto" /></p>

As a new version, the Grove - OLED Display 0.66" (SSD1306) has a smaller screen compared to the other OLED display like Grove - OLED Display 0.96" (SSD1315). And yet it can still display with 64×48 resolution and it preserve the performance like the others, e.g. high brightness, low power consumption and Grove interface on the back, etc.

You can use I2C interface to light up the mini display with your microcontroller to display words, images or whatever you want. 0.66" display screen helps you to show the information in a smaller place and you can use it as Arduino OLED display, Raspberry Pi PLED display, etc.

This Grove-OLED Display supports the U8g2 monochrome displays library written by Olikraus. The library is so convenient and well compatible that it can support SSD1306 and other chips like SSD1315. So get you one now and have fun with this tiny screen!
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)

## Feature

- Based on SSD1306, cropped to 64×48 resolution(Monochrome)
- Ultra-small size: 20 * 20mm
- Changeable I2C address
- 3.3V/5V power supply compatible
- High contrast, high brightness
- Low power consumption
- Wide operating temperature range: -40℃ ~ +85 ℃
- User-friendly design: Grove interface on the back

## Specification

|Parameter|Value|
|---|---|
|Input voltage|3.3V / 5V|
|Output Voltage| 0 ~ 2.3V |
|Pixels|64 x 48|
|Temperature Range|-40℃ ~ +85 ℃|
|Interface|I2C|

## Hardware Overview

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" /></a></p>
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

| Seeeduino V4.2 | Base Shield | Grove - OLED Display 0.66"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/1629856731(1).png" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)|

>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.

#### Hardware Connection

- **Step 1.** Plug Grove - TDS Sensor to **I2C** port of Grove - Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino1.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.**  Navigate to **Sketch** -> **Include Library** -> **Manage Libraries...** and Search and Install **`U8g2`** library in the **Library Manager**.

- **Step 2.**  Open the Arduino IDE and create a new file, then copy the following code into the new file.

```C++
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // All Boards without Reset of the Display

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(32,30,"Hello \n");
  u8g2.drawStr(32,45,"World!");
  u8g2.sendBuffer();
  delay(1000);  
}
```

Note: You should know the Grove - OLED Display 0.66" (SSD1306) screen is based on the 128×64 resolution screen. When you want to display by U8g2 SSD 128*64 drive , you may need to start the point at (31,16) instead of (0,0). The range is from (31,16) to (95,63).

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/note.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/note.png" alt="pir" width={600} height="auto" /></p>

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** The OLED Display should look like this:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino2.png" /></div>

## U8g2 Library Introduction

U8g2 is a monochrome graphics library for embedded devices. U8g2 supports monochrome OLEDs and LCDs, which include our chip SSD1306.

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

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [Grove - OLED Display 0.66 (SSD1306)_v1.0 file](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar)
- **[ZIP]** [SSD1306-Datasheet](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/SSD1306-Datasheet.zip)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
