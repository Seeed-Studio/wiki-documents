---
description: Grove - OLED Yellow&Blue Display 0.96(SSD1315) - SPI/IIC -3.3V/5V
title: Grove - OLED Yellow&Blue Display 0.96(SSD1315) - SPI/IIC -3.3V/5V
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07.png" alt="pir" width={600} height="auto" /></p>

The Grove - OLED Yellow&Blue Display 0.96 (SSD1315) is a **blue and yellow** two-colour display with 128*64 resolution. Compared with LCDs, there are many advantages on OLED(Organic Light Emitting Diode) like self-emission, high contrast ratio, slim/thin outline, wide viewing angle and low power consumption. The display works on both 3.3V and 5V supply voltage. You can use either **I2C** or **SPI** interface to light up the display with your microcontroller to display words, images, and whatever you want.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)
## Feature

- 3.3V/5V power supply compatible
- Changeable I2C address
- SPI available
- Low power consumption
- Yellow and Blue two-colour 128×64 pixels
- High contrast, high brightness
- Wide operating temperature range: -40℃ ~ +85 ℃

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img//10402049_Feature-02.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Feature-02.png" /></a></p>
  </figure>
</div>


## Specification

|Parameter|Value|
|---|---|
|Input voltage|3.3V / 5V|
|Output Voltage| 0 ~ 2.3V |
|Pixels|128 x 64|
|Temperature Range|-40℃ ~ +85 ℃|
|Interface|I2C/SPI|

## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Getting Started

### Play With Arduino


**Materials required**


| Seeeduino V4.2 | Base Shield | Grove - OLED Yellow&Blue Display 0.96"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)|

>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.

#### Hardware Connection (**I2C**)

- **Step 1.** Plug Grove - OLED Yellow&Blue Display 0.96" to **I2C** port of Grove - Base Shield using Grove cable.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to a PC via a USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/hd.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/hd.jpg" alt="pir" width={600} height="auto" /></p>

#### Software (**I2C**)

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.**  Navigate to **Sketch** -> **Include Library** -> **Manage Libraries...** and Search and Install [**U8g2**](https://github.com/olikraus/u8g2) library in the **Library Manager**.

- **Step 2.**  Open the Arduino IDE and create a new file, then copy the following code into the new file.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Software I2C

void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_luBIS08_tf);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Seeed!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Studio!");    // write something to the internal memory
  u8g2.drawStr(0,50,"Hello World!");    // write something to the internal memory
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(100);  
}
```

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** The OLED Display should look like this:

<div align="center"><img src="./hd1.jpg" /></div>

#### **Hardware Connection (SPI)**

- **Step 1.** Soldering male header and connect the wires.

- **Step 2.** Please follow the **YELLOW** line to cut down the wire on the board and follow the **WHITE** line to solder the SPI pannels and the middle pannels one by one.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png" alt="pir" width={600} height="auto" /></p>

:::caution
    Please **be careful** to cut the wires one by one by following the **YELLOW** lines, otherwise you will damage all the display. We recommand you to cut the wires under magnifying glass.
:::
**Caution**: This is the wrong method to cut wires!

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png" alt="pir" width={600} height="auto" /></p>

- **Step 3.** Follow the picture to connect the display and Seeeduino with wires.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/02s.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/02s.png" alt="pir" width={600} height="auto" /></p>

- **Step 4.** Connect Seeeduino to a PC via a USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software (**SPI**)

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.**  Navigate to **Sketch** -> **Include Library** -> **Manage Libraries...** and Search and Install [**U8g2**](https://github.com/olikraus/u8g2) library in the **Library Manager**.

- **Step 2.**  Open the Arduino IDE and create a new file, then copy the following code into the new file.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 12, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8); // Software SPI
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_luBIS08_tf);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Seeed!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Studio!");    // write something to the internal memory
  u8g2.drawStr(0,50,"Hello World!");    // write something to the internal memory
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(100);  
}
```

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** The OLED Display should look like this:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi2.jpg" /></div>


### Play With RaspberryPi


**Materials required**


| Raspberry pi | Grove Base Hat for Raspberry Pi | Grove - OLED Yellow&Blue Display 0.96"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|

#### **Hardware Connection(I2C)**

- **Step 1.** Plug OLED Yellow&Blue Display 0.96" to **I2C** port of Grove - Base Hat.

- **Step 2.** Plug Grove - Base Hat into RaspberryPi.

- **Step 3.** Connect RaspberryPi to a PC via Serial or SSH.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Step 1.**  Enable I2C on RaspberryPi

```shell
sudo apt-get install -y python-smbus
sudo apt-get install -y i2c-tools
sudo raspi-config
```

Follow the pictures to enable I2C on your RaspberryPi.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" alt="pir" width={600} height="auto" /></p>

And then reboot your RaspberryPi

```shell
sudo reboot
```

- **Step 2.** Install necessary libraries

```shell
sudo apt-get install git
sudo apt-get install python-pip python3-pip
sudo apt-get install python-pil python3-pil
sudo pip install Adafruit-BBIO
sudo pip3 install Adafruit-BBIO
sudo pip install Adafruit-SSD1306
sudo pip3 install Adafruit-SSD1306
```

Then clone the **Seeed_Python_SSD1315** from GitHub

```shell
git clone https://github.com/IcingTomato/Seeed_Python_SSD1315.git
```

We can use `stats.py` for demo.

```shell
cd ~/Adafruit_Python_SSD1306/example/
sudo python stats.py
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi1.jpg" alt="pir" width={600} height="auto" /></p>

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


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/Grove%20-%20OLED%20Yellow&Blue%20Display%200.96%20(SSD1315)_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Resources

- **[ZIP]** [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)_V1.0 Schematic file](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/Grove%20-%20OLED%20Yellow&Blue%20Display%200.96%20(SSD1315)_V1.0.zip)
- **[PDF]** [OLED Module Datasheet](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/0.96-30PIN-ZJY096-2864KSWPG01.pdf)
- **[PDF]** [SSD1315 Datasheet](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/SSD1315.pdf)

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>