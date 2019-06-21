---
name: Seeeduino Arch V1.0
category: mbed
bzurl: https://www.seeedstudio.com/seeeduino-arch-p-1561.html
oldwikiname:  Seeeduino Arch V1.0
prodimagename:  Arch_01.jpg
surveyurl: https://www.research.net/r/Seeeduino_Arch_V1
sku:    102080001
---
![](https://github.com/SeeedDocument/Seeeduino_Arch_V1.0/raw/master/img/Arch_01.jpg)

**Seeeduino Arch** is a [mbed](http://mbed.org/handbook/mbed-SDK) enabled development board which combines the advantages of mbed SDK and Arduino formfactor. With Seeeduino Arch, you can use mbed C/C++ SDK, libraries and optimizing online development tools to rapidly build a prototype.
Seeeduino Arch has standard Arduino appearance and Grove connectors. It’s convenient to connect existing Shields and Grove products to Seeeduino Arch.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/seeeduino-arch-p-1561.html)

##  Feature

*   mbed enabled
<dl><dd>

*   online development tools

*   easy to use C/C++ SDK

*   lots of published libraries, projects
</dd></dl>

*   Stardard Arduino Appearance, two Grove connectors
<dl><dd>

*   available with 3.3V compatible shields

*   a large number of grove modules
</dd></dl>

*   Drag-n-drop programming

*   NXP LPC11U24 MCU
<dl><dd>

*   Low power ARM Cortex-M0 Core

*   48MHz, 32KB Flash, 8KB RAM, 4KB EEPROM

*   USB Device, 2xSPI, UART, I2C
</dd></dl>

##  Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Typical
</th></tr>
<tr>
<th scope="row"> Work Voltage
</th>
<td> 7 ~ 9V
</td></tr>
<tr>
<th scope="row"> Microcontroller
</th>
<td> LPC11U24
</td></tr>
<tr>
<th scope="row"> Flash Momery
</th>
<td> 32kB
</td></tr>
<tr>
<th scope="row"> EEPROM
</th>
<td> 4kB
</td></tr>
<tr>
<th scope="row"> RAM
</th>
<td> 8kB
</td></tr>
<tr>
<th scope="row"> UART
</th>
<td> 1
</td></tr>
<tr>
<th scope="row"> I2C
</th>
<td> 1
</td></tr>
<tr>
<th scope="row"> ADC Channels
</th>
<td> 8
</td></tr>
<tr>
<th scope="row"> I/O pins
</th>
<td>40
</td></tr></table>

##  Pinout
---
![](https://github.com/SeeedDocument/Seeeduino_Arch_V1.0/raw/master/img/Arch_Pinout.png)

##  Compare Seeeduino Arch  with Arduino
---
Both Seeedduino and Arduino are platforms used for creating rapid prototyping. However, there are still differences between them. We can get more information about them by comparing from the following form.<center>
<table  cellspacing="0" width="40%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Seeeduino Arch
</th>
<th scope="col"> Arduino
</th></tr>
<tr>
<th scope="row"> Microcontroller
</th>
<td> ARM Cortex-M series MCU
</td>
<td> Mainly AVR 8-bit MCU, using the new Due Cortex-M3 MCU family.
</td></tr>
<tr>
<th scope="row"> Hardware specification
</th>
<td> Standardized size and pin for easy modular build prototypes
</td>
<td> Standardized size and pin for easy modular build prototypes
</td></tr>
<tr>
<th scope="row">  Development Environment
</th>
<td> Online development tool for collaborating and sharing easily, can export project to local for development and debugging. Powerful, yet also simple.
</td>
<td> Arduino IDE, easy to use, simple but functional.
</td></tr>
<tr>
<th scope="row"> Develop and debug
</th>
<td> Support library import, export projects, version control, debugging and other functions.
</td>
<td> Libraries and application code are separate, suitable for writing simple code, without debugging function.
</td></tr></table> </center>
The Seeeduino Arch is compatibility with Arduino in hardware. Now we share their pins destribution. <center>
<table  cellspacing="0" width="40%">
<tr>
<th scope="col"> Arduino
</th>
<th scope="col"> Seeeduino Arch
</th>
<th scope="col"> Description
</th></tr>
<tr>
<th scope="row"> D0
</th>
<td> P0_18
</td>
<td rowspan="14"> Digital I/O
</td></tr>
<tr>
<th scope="row"> D1
</th>
<td> P0_19
</td></tr>
<tr>
<th scope="row">  D2
</th>
<td> P0_17
</td></tr>
<tr>
<th scope="row">  D3
</th>
<td> P1_17
</td></tr>
<tr>
<th scope="row"> D4
</th>
<td> P1_18
</td></tr>
<tr>
<th scope="row">  D5
</th>
<td> P1_24
</td></tr>
<tr>
<th scope="row">  D6
</th>
<td> P1_25
</td></tr>
<tr>
<th scope="row">  D7
</th>
<td> P1_5
</td></tr>
<tr>
<th scope="row"> D8
</th>
<td> P1_26
</td></tr>
<tr>
<th scope="row">  D9
</th>
<td> P1_27
</td></tr>
<tr>
<th scope="row">  D10
</th>
<td> P0_2
</td></tr>
<tr>
<th scope="row"> D11
</th>
<td> P1_29
</td></tr>
<tr>
<th scope="row">  D12
</th>
<td> P0_8
</td></tr>
<tr>
<th scope="row">  D13
</th>
<td> P0_9
</td></tr>
<tr>
<th scope="row">  SDA
</th>
<td> P0_5
</td>
<td rowspan="2"> I2C
</td></tr>
<tr>
<th scope="row"> SCL
</th>
<td> P0_4
</td></tr>
<tr>
<th scope="row"> A0
</th>
<td> P0_11
</td>
<td rowspan="7"> Analog
</td></tr>
<tr>
<th scope="row">  A1
</th>
<td> P0_12
</td></tr>
<tr>
<th scope="row">  A2
</th>
<td> P0_13
</td></tr>
<tr>
<th scope="row"> A3
</th>
<td> P0_14
</td></tr>
<tr>
<th scope="row">  A4
</th>
<td> P0_16
</td></tr>
<tr>
<th scope="row">  A5
</th>
<td> P0_22
</td></tr>
<tr>
<th scope="row">  A6
</th>
<td> P0_23
</td></tr>
<tr>
<th scope="row">  1-MISO1
</th>
<td> P1_21
</td>
<td rowspan="6"> SPI1
</td></tr>
<tr>
<th scope="row"> 2-SCK
</th>
<td> P1_20
</td></tr>
<tr>
<th scope="row"> 3-RESET
</th>
<td> P1_23
</td></tr>
<tr>
<th scope="row"> 4-GND
</th>
<td> /
</td></tr>
<tr>
<th scope="row">  5-MOSI
</th>
<td> P1_22
</td></tr>
<tr>
<th scope="row">  6-VCC
</th>
<td> /
</td></tr>
<tr>
<th scope="row"> 1-SWDIO
</th>
<td> P0_15
</td>
<td rowspan="6"> 2X3 SWD Interface
</td></tr>
<tr>
<th scope="row"> 2-VCC
</th>
<td> /
</td></tr>
<tr>
<th scope="row"> 3-SWCLK
</th>
<td> P0_10
</td></tr>
<tr>
<th scope="row"> 4-
</th>
<td> P1_4
</td></tr>
<tr>
<th scope="row">  5-nRET
</th>
<td> P0_0
</td></tr>
<tr>
<th scope="row">  6-GND
</th>
<td> /
</td></tr>
<tr>
<th scope="row"> D+
</th>
<td> USB_DP
</td>
<td rowspan="5"> USB&amp;ISP
</td></tr>
<tr>
<th scope="row"> D-
</th>
<td> USB_DM
</td></tr>
<tr>
<th scope="row"> VBUS
</th>
<td> P0_3
</td></tr>
<tr>
<th scope="row">  CONNECT
</th>
<td> P0_6
</td></tr>
<tr>
<th scope="row"> ISP
</th>
<td> P0_1
</td></tr>
<tr>
<th scope="row">  RX
</th>
<td> P1_14
</td>
<td rowspan="2"> UART Grove
</td></tr>
<tr>
<th scope="row">TX
</th>
<td> P1_13
</td></tr>
<tr>
<th scope="row">AREF
</th>
<td> P0_7
</td>
<td> /
</td></tr></table>
</center>

##  Usage
---
**Seeeduino Arch** is compatible with **mbed** in software. You can use the comprehensive firmware library and plenty of sample code which is offered by mbed SDK. If you are not familiar with **mbed** platform and **mbed** SDK, please click [here](https://mbed.org/handbook/mbed-NXP-LPC11U24-Getting-Started) to have a good understanding.

The **Seeeduino Arch** can use the free online IDE and C++ compiler from mbed. This compiler is built on optimizing ARMCC compiler engine which. This helps you get your program up and running quickly, and no software installation is required. Downloading programs is as simple as using a USB flash drive (no external programmer is necessary).  

In addition to online IDE and compiler, users can make use of many offline compiler/IDE available for ARM Cortex M micro-controllers ARM Embedded GCC, Keil MDK ARM IAR Embedded Workbench, etc..

In addition, Writing a library is not a difficult task for beginners. You can click [here](http://mbed.org/cookbook/Writing-a-Library) to learn how to write an mbed Library.

Here we show you an easy demo: **water lights** using Seeeduino Arch to get you started.

###   Demo: Water Lights

*   Click the "mbed Enabled" logo to register an account for Seeeduino Arch.
<dl><dd><dl><dd>[![](https://github.com/SeeedDocument/Seeeduino_Arch_V1.0/raw/master/img/Mbedenabled.jpg)](https://mbed.org/account/login/?next=/start?auth=104000000000000000000002F7F0F640e640d504b45e111da24094a9d300da46&amp;firmware=999999)
</dd></dl>
</dd></dl>

*   Open [https://mbed.org/compiler/](https://mbed.org/compiler/) and you will get mbed online IDE. Before programming, you'd better read mbed Complier Getting started.
<dl><dd><dl><dd>![](https://github.com/SeeedDocument/Seeeduino_Arch_V1.0/raw/master/img/Open_Compiler.jpg)

</dd></dl>
</dd></dl>

*   Click "New" to creat new program and select the device "mbed NXP LPC11U24". I believe that this picture explains better.
<dl><dd><dl><dd>![](https://github.com/SeeedDocument/Seeeduino_Arch_V1.0/raw/master/img/Compiler.jpg)

</dd></dl>
</dd></dl>

The below is my code to control the four leds of seeeduino arch.
```
#include "mbed.h"

DigitalOut  led1(LED1);
DigitalOut  led2(LED2);
DigitalOut  led3(LED3);
DigitalOut  led4(LED4);

int main() {
    while(1) {
        led1 = !led1;
        wait(0.5);
        led2 = !led2;
        wait(0.5);
        led3 = !led3;
        wait(0.5);
        led4 = !led4;
        wait(0.5);

    }
}
```

*   Now you can compile the code. If the code has errors, it will prompt you and give you help. And you may find the helps are just what you need.


![](https://github.com/SeeedDocument/Seeeduino_Arch_V1.0/raw/master/img/Error_prompt.jpg)

</dd></dl>
</dd></dl>

*   After successfully compiling the code, save the bin file.

*   Now you need long press the reset button, it will automatically appear as a USB driver named CRP DISABLD.

![](https://github.com/SeeedDocument/Seeeduino_Arch_V1.0/raw/master/img/A_usb_device.jpg)

</dd></dl>
</dd></dl>

*   Go to the CRP DISABLD. Now you need delete the firmware file and add the waterLights_LPC11U24 bin file to CRP DISABLD. Remember to reset the Microcontroller to start it running after you download a new program , now the seeeduino arch will run the waterLight program. You can have a try.

The mbed C/C++ SDK provides the software platform and [libraries](http://mbed.org/cookbook/Homepage) which also can apply to seeeduino Arch. So you can use this available resource to build your applications. And we are looking forward to sharing your more programs combining Seeeduino arch,Shiled and Grove modules.

##  Applications
---
*   [Use Seeeduino Arch as a debug adapter to debug another Seeeduino Arch](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)

*   [Sense environment](https://mbed.org/users/yihui/notebook/sense-environment/)

*   [Play with Grove RTC](https://mbed.org/cookbook/seeed-grove-RTC)

*   [Play with Grove - Ultrasonic ranger](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

##  Resource
---
- [Seeeduino Arch Eagle files](https://github.com/SeeedDocument/Seeeduino_Arch_V1.0/raw/master/res/Seeeduino_Arch_Eagle_files.zip)

- [LPC11U2x datasheet](https://github.com/SeeedDocument/Seeeduino_Arch_V1.0/raw/master/res/LPC11U2x_datasheet.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>