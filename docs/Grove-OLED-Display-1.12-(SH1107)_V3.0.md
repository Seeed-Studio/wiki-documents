---
name: Grove - OLED Display 1.12" (SH1107) V3.0
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 104020250
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit
---

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

The Grove - OLED Display 1.12 V3.0 (SH1107) is a **monochrome** display with 128*128 resolution. Compared with LCDs, there are many advantages on OLED(Organic Light Emitting Diode) like self-emission, high contrast ratio, slim/thin outline, wide viewing angle and low power consumption. The display works on both 3.3V and 5V supply voltage. You can use either **I2C** or **SPI** interface to light up the display with your microcontroller to display words, images, and whatever you want.

<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>

## Feature

- 3.3V/5V power supply compatible
- Changeable I2C address
- SPI available
- Low power consumption
- monochrome 128×128 pixels
- High contrast, high brightness
- Wide operating temperature range: -40℃ ~ +85 ℃



## Version
  ---
  | Product Version              | Changes                                                                                                                                                                                    | Released Date |
  |------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
  |Grove - OLED Display 1.12" V1.0 | Initial                                                                                                                                                                                    | Mar 2012      |
  |Grove - OLED Display 1.12" V2.1 | Change the driver IC from SSD1327 to SH1107G, upgrade the grayscale pixels from 96X96 to 128X128 | Nov 2015     |
  |Grove - OLED Display 1.12" V3.0 | Change the driver IC from SSD1107G to SH1107, upgrade the interface from I2C to I2C/SPI | July 2021     |

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)


## Platforms Supported
---

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

### Hardware

Here we will show you how this Grove - OLED Display works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - OLED Display 1.12`` V3.0 | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

This is an easy-to-use module, what you need to do is connect the module to I2C port of a Base Shield. There're 4 pins, defined as below.

|pin|Function  | Note   | Cable color |
|--------|------|-----|---------------|
|pin1	| SCL | I2C Clock | YELLOW |
|pin2   | SDA| I2C Data| WHITE|
|pin3   | VCC  | Power, 5V/3.3V| RED |
|pin4	| GND  | Ground | BLACK |

**Hardware Overview (I2C)**

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2185.JPG"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

### **Software (I2C)**

- **Step 1.** Connect Grove - OLED Display 1.12'' V3.0.
 to **I2C** port of Base Shield via Grove cable.

- **Step 2.** Open Arduino IDE and the Library Manager **(Sketch > Include Library > manage Libraries)** to install the library of u8g2.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

- **Step 3.** Enter "**u8g2**" into the search field and select latest version and Cclick "Install" button.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

- **Step 4.** Upload the demo code below in your Arduino IDE.

```C++
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
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

!!!Success
       There will be a "Hello Seeed!" displayed on the screen of Grove - OLED Display 1.12'' if everything goes well.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

!!!Note
        If there's no Base Shield with you, [Seeeduino Vx Series](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) with **I2C interface** do work as well.


**Hardware Overview (SPI)**

- **Step 1.** Soldering male header and connect the wires.

- **Step 2.** Please follow the **YELLOW** line to cut down the wire on the board and follow the **WHITE** line to solder the SPI pannels and the middle pannels one by one.

![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png)

!!!Caution
    Please **be careful** to cut the wires one by one by following the **YELLOW** lines, otherwise you will damage all the display. We recommand you to cut the wires under magnifying glass.

**Caution**: This is the wrong method to cut wires!

![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png)

- **Step 3.** Follow the picture to connect the display and Seeeduino with wires.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/wires.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

- **Step 4.** Connect Seeeduino to a PC via a USB cable.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2188.JPG"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

### Software (**SPI**)

- **Step 1.** Open Arduino IDE and the Library Manager **(Sketch > Include Library > manage Libraries)** to install the library of u8g2.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

- **Step 2.** Enter "**u8g2**" into the search field and select latest version and Cclick "Install" button.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

- **Step 3.** Upload the demo code below in your Arduino IDE.

```C++
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

!!!Success
       There will be a "Hello Seeed!" displayed on the screen of Grove - OLED Display 1.12'' if everything goes well.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

## Play on RaspberryPi

**Materials required**


| Raspberry pi | Grove Base Hat for Raspberry Pi | Grove - OLED Display 1.12" V3.0|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png)
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|

### Get ready for RaspberryPi

#### I2C Connection

- **Step 1.** Plug OLED Yellow&Blue Display 0.96" to **I2C** port of Grove - Base Hat.

- **Step 2.** Plug Grove - Base Hat into RaspberryPi.

- **Step 3.** Connect RaspberryPi to a PC via Serial or SSH.

#### SPI Connection

- **Step 1.** Follow the sheet to connect the wires on Grove - Base Hat.

| Grove - OLED Display 1.12" V3.0 Pins | Raspberry Pi GPIO |  BCM2835 Code |
|--------------|-------------|-------------|
| VCC | 3.3V | 3.3V |
| GND | GND | GND |
| SI | MOSI | 10 |
| SCL | SCLK | 11 |
| CS | CE0 | 8 |
| DC | GPIO.6 | 25 |
| RES | GPIO.2 | 27 |

- **Step 2.** Plug Grove - Base Hat into RaspberryPi.

- **Step 3.** Connect RaspberryPi to a PC via Serial or SSH.

![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG)

#### Software

- **Step 1.**  Enable I2C and SPI on RaspberryPi

```shell
sudo apt-get install -y i2c-tools
sudo raspi-config
```

Follow the pictures to enable I2C and SPI on your RaspberryPi.

![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png)

![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png)

![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png)

![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg)

![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg)

And then reboot your RaspberryPi

```shell
sudo reboot
```

- **Step 2.** Install necessary libraries

```shell
sudo apt-get install wget gcc make unzip -y
```

- **Step 3.** Download the demo codes

**1.** For [**I2C**](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip)

```shell
wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip
mkdir I2C
unzip RaspberryPiI2C.zip ./I2C/
cd ./I2C/RaspberryPiI2C/c/
sudo chmod 777 test.sh
./test.sh
```

**2.** For [**SPI**](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip)

```shell
wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip
mkdir SPI
unzip RaspberryPiSPI.zip ./SPI/
cd ./SPI/RaspberryPiSPI/c/
sudo chmod 777 test.sh
./test.sh
```

If you want to have more demo, we also have a little video clip.

```shell
sudo chmod 777 badapple.sh
./badapple.sh
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/mHhZgUNkPM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## U8g2 Library Introduction

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



## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources
---------
* **[Eagle]** [Grove-OLED Display 1.12inch in Eagle](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip)
* **[PDF]** [Grove-OLED Display 1.12inch V3.0 Sch](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.pdf)
* **[Datasheet]** [SH1107_datasheet](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/SH1107V2.1.pdf)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>