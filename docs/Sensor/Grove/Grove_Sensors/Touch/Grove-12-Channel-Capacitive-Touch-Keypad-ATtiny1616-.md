---
description: Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)
title: Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki.jpg)

The Grove 12 button Capacitive Touch Keypad is built around the ATtiny1616, an AVR® 8-bit processor running at up to 16 MHz. ATtiny1616 is a low-power, high-performance chip integrated QTouch® peripheral touch controller which supports capacitive touch interfaces with proximity sensing and driven shield. With this module, you can easily create an arduino password keypad or a DIY phone keypad.  

We made this keypad into a 3x4 form, just like the layout of a mobile phone keyboard. The traditional keypad requires 3 vertical lines and 4 horizontal lines to scan, which will occupy 7 I/O pins of the microcontroller. With the help of ATtiny1616 and Grove connector, only RX and TX two pins are enough for Grove - 12-Channel Capacitive Touch Keypad. You can easily use this module with a microcontroller with a hardware UART interface, or you can use the software UART to read the button input with two normal I/O pins.

All in all, the Grove 12 button Capacitive Touch Keypad is an easy-to-use module that requires very little code, especially when you use it with [Grove compatible mainboards](https://www.seeedstudio.com/seeeduino-boards-c-987.html), no soldering, just plug and play.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- Low Power ATtiny1616 controller
- 3.3V / 5V compatible
- Capacitive touch, high sensitivity
- 12 button keypad
- 4 pin Grove UART connector
- On-board LED indicator

## Applications

- Phone keypad
- Password access
- Extended input interface

## Pinout

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg" alt="Touch Keypad hardware" title="hardware overview" />
  <figcaption><b>Figure 1</b>. <i>Hardware overview</i></figcaption></a>
</figure>
</div>

## Specification

|Parameter|Value|
|---|---|
|Supply voltage|3.3V / 5V|
|CPU| AVR® 8-bit CPU @ 16MHz|
|Sensor type|Capacitive Touch Keypad|
|Button Quantity|12|
|Operate temperature Range|-40°C to 105°C|
|Output Interface|UART|
|Firmware Download Interface|UPDI|

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Getting Started

### Play With Arduino

**Materials required**

| Seeeduino V4.2 | Base Shield |Grove 12 button Capacitive Touch Keypad|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html)|

>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.

:::note
**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

#### Hardware Connection

- **Step 1.** Connect the Grove 12 Channel Capacitive Touch Keypad to the **D2** port of the Base Shield.

> If you are using a SAM board, then you should connect to the **UART** port. Please refer to table 1 for more detail

|Board|UART Type|Connect Port|
|-----|---------|------------|
|AVR Board(like Seeeduino V4.2|Soft UART|D2,D3|
|SAM Board(like Seeeduino Lotus M0+|Hardware UART|UART|

<div align="center"><b>Table 1.</b><i>UART Port Selection</i></div>

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki-connect.jpg)

#### Software

:::caution
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [12_Channel_Keypad.ino](https://github.com/Seeed-Studio/Seeed_ATtiny1616/blob/master/12_Channel_Keypad.ino) from Github.

- **Step 2**. Then open `12_Channel_Keypad.ino`, or you can just copy the following code into a new Arduino sketch.

```cpp
#include "SoftwareSerial.h"

#if defined(ARDUINO_ARCH_AVR)
#define SERIAL Serial
SoftwareSerial mySerial(2,3);
#define TRANS_SERIAL  mySerial
#elif defined(ARDUINO_ARCH_SAMD)
#define SERIAL SerialUSB
#define TRANS_SERIAL  Serial
#else

#endif


//RX=2,TX=3(D2) Software Serial Port

void setup() {
 TRANS_SERIAL.begin(9600); 

    SERIAL.begin(9600);  // start serial for output
    SERIAL.println("Version:v1.0");
}

void loop() {
    printData();
}

/*
* data mapping:E1---1；E2---2；E3---3；E4---4；E5---5；E6---6；
*              E7---7；E8---8；E9---9；EA---*；EB---0；EC---#；
*/
void printData() {
    while(TRANS_SERIAL.available()) {
        uint8_t data = TRANS_SERIAL.read();
        switch(data) {
                case 0xE1 :
                    SERIAL.println("1");
                    break;
                case 0xE2 :
                    SERIAL.println("2");
                    break;
                case 0xE3 :
                    SERIAL.println("3");
                    break;
                case 0xE4 :
                    SERIAL.println("4");
                    break;
                case 0xE5 :
                    SERIAL.println("5");
                    break;
                case 0xE6 :
                    SERIAL.println("6");
                    break;
                case 0xE7 :
                    SERIAL.println("7");
                    break;
                case 0xE8 :
                    SERIAL.println("8");
                    break;
                case 0xE9 :
                    SERIAL.println("9");
                    break;
                case 0xEA :
                    SERIAL.println("*");
                    break;
                case 0xEB :
                    SERIAL.println("0");
                    break;
                case 0xEC :
                    SERIAL.println("#");
                    break;
                default:
                    break;
            }
    }

}

```

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the `ctrl`+`shift`+`m` key at the same time. Set the baud rate to **9600**.

:::tipsuccess
Now, touch the keypad, then the monitor will output the corresponding key.
:::

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/arduino-output.jpg" alt="grove keypad demo" title="output" />
  </figure>
</div>

### Play with Raspberry pi

**Materials required**

| Raspberry pi | Grove Base Hat for RasPi| Grove 12 button Capacitive Touch Keypad |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html)|

- **Step 1**. Plug the Grove Base Hat into Raspberry.

- **Step 2**. Connect the Grove 12 button Capacitive Touch Keypad to **UART** port of the Base Hat.

- **Step 3**. Power on the Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pii-connect.jpg)

#### Software

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

##### UART Setting

Before start, we need to configure the Raspberry Pi UART.

- Step 1. Enable Raspberry Pi3 **UART0**.

```
sudo nano /boot/config.txt
```

Then add the content `dtoverlay=pi3-disable-bt` to the end of the **config.txt**

Tap `ctrl`+`x` to quit nano, and tap `y` to save the modification.

- Step 2. Disable the system serivce to use the UART0.

```
sudo systemctl disable hciuart
```

:::note
Pi3-disable-bt disables the Bluetooth device and restores UART0/ttyAMA0 to GPIOs 14 and 15. It is also necessary to disable the system service that initialises the modem so it doesn't use the UART: sudo systemctl disable hciuart.
:::

- Step 3. Delete the `console=serial0,115200` in **cmdline.txt**.

```
sudo nano /boot/cmdline.txt
```

Then delete `console=serial0,115200` in this file.

:::note
        If you can not find `console=serial0,115200` in this txt file, just skip this step.
:::

- Step 4. Reboot the Raspberry Pi

```
sudo reboot
```

For more detial, please check the official [Raspberry Pi UART Config](https://www.raspberrypi.org/documentation/configuration/uart.md)

##### Raspberry Pi Demo

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.

After the system environment is successfully configured, you can see a prompt like this:

```cpp
Running setup.py install for grove.py ... done
Successfully installed grove.py-0.6
#######################################################
  Lastest Grove.py from github install complete   !!!!!
#######################################################

```

Now, tap 'ls', you can find the **grove.py** folder under the root directory.

```cpp
pi@raspberrypi:~ $ ls
01_HelloRPi            Desktop    MagPi         rpi_apa102driver
01_HelloRPi.cpp        Documents  Music         Templates
4mics_hat              Downloads  ofxGPIO       Videos
apa102_led.c           env        Pictures      wiringpi_apa102
bcm2835-1.50           grove.py   Public        wiringpi_apa102.cpp
bcm2835-1.50.tar.gz    led        python_games
bcm2835-1.50.tar.gz.1  led1       respeaker

```

- **Step 3**. Excute the following commands to run the demo.

```
cd grove.py/grove
python grove_12_channel_touch_keypad.py

```

:::tipsuccess
    Then touch the keycap, the terminal will output the corresponding key.
:::

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/grove-py-result.jpg)

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [Grove 12 Channel Capacitive Touch Keypad (ATtiny1616) Schematic file](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip)
- **[PDF]** [ATtiny1616 Datasheet](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/ATtiny1616-1617_Datasheet.pdf)

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
