---
name: Heart Sound Sensor‏‎
category: Discontinued
bzurl:
oldwikiname:  Heart-Sound_sensor‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Heart-Sound_sensor
sku:
tags:

---

The Arch Max is an mbed enabled development board for rapid prototyping.
It's based on a STM32F407VET6 microcontroller with an ARM Cortex-M4F core running at 168MHz. It includes an open link to provide SWD debug, drag-n-drop programming and USB serial communication.

##   Features  

*   mbed enabled

    *   Online development tools

        *   Easy to use C/C++ SDK

        *   Lots of published libraries and projects

*   High performance STM32F407VET6

    *   ARM Cortex-M4 MCU with FPU at 168MHz

        *   512 KB Flash, 192 KB RAM

*   On-board open link for debug and programming

    *   Drag-n-drop programming

        *   USB serial communication

        *   SWD debug with GDB+ pyOCD/OpenOCD, Keil or IAR

*   Arduino form factor, compatible with lots of shields

*   Build-in Ethernet, USB and SD card slot for connectivity and data exchange

##   Specification  

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Typical
</th></tr>
<tr>
<th scope="row"> Work Voltage
</th>
<td> 5V
</td></tr>
<tr>
<th scope="row"> Microcontroller
</th>
<td> STM32F407VET6
</td></tr>
<tr>
<th scope="row"> Flash Memory
</th>
<td> 512kB
</td></tr>
<tr>
<th scope="row"> RAM
</th>
<td> 192kB
</td></tr>
<tr>
<th scope="row"> UART
</th>
<td> 4
</td></tr>
<tr>
<th scope="row"> I2C
</th>
<td> 3
</td></tr>
<tr>
<th scope="row"> SPI
</th>
<td> 3
</td></tr>
<tr>
<th scope="row"> CAN
</th>
<td> 2
</td></tr>
<tr>
<th scope="row"> SDIO
</th>
<td> 1
</td></tr>
<tr>
<th scope="row"> Camera interface
</th>
<td> 1
</td></tr>
<tr>
<th scope="row"> Eth
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
</td></tr>
<tr>
<th scope="row"> Digital I/O Max Input Voltage
</th>
<td> 5.0V
</td></tr>
<tr>
<th scope="row"> Diameter
</th>
<td> 90mm x 44mm
</td></tr></table>

##   Pin definition

![](https://files.seeedstudio.com/wiki/Arch_Max/img/Arch_Max_Pinout.png)

##   Usage

![](https://files.seeedstudio.com/wiki/Arch_Max/img/Get_started_with_mbed.png)

1.  Click [this link](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX) to **login or signup to mbed**

2.  Import the mbed_blinky program

3.  Click the **Compile** icon of the top toolbar to compile the program, then download a compiled hex file.

4.  Drag-n-drop the downloaded bin file into the MBED disk

You can open **main.cpp** to change the program. For example, use the following code to blink the LED every 0.1s

<pre>
#include "mbed.h"

DigitalOut led(LED1);           // on-board led is connected to D13

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
</pre>

##   Debug

To enable SWD debug or to get debug message through USB Virtual serial, please install [the driver from mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

##   Update or Restore Firmware

The latest firmware version for the Arch Max is v0203 built at Oct 8  2014. To check your firmware version and built date, open the MBED.HTM file of your MBED disk in a text editor.

[The firmware v0203 2014-10-08 for Arch Max](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)

*   Hold the Arch Max's button and power on it

*   A CRP DISABLD disk will show

    *   On Windows, replace firmware.bin with the above firmware

        *   On Linux/Mac, use command: **dd if={new_firmware.bin} of={firmware.bin} conv=notrunc**

##   Version

<table>
<tr>
<th> Name </th>
<th> Version </th>
<th> Note
</th></tr>
<tr>
<td> Arch Max v1.0 </td>
<td> v1.0 </td>
<td> 5V power supplier didn't connect to USB power, user should connect to ext-power
</td></tr>
<tr>
<td> Arch Max v1.1 </td>
<td> v1.1 </td>
<td> 5V power supplier can connect to USB power
</td></tr></table>


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


##   Resources

- **[Eagle]**  [Schematics Eagle file for ARCH Max](https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip)
- **[PDF]**[Arch Max PCB](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.pdf)
- **[EAGLE]**[Arch Max sch](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.sch)
- **[Datasheet]**  [STM32F407 datasheet](https://files.seeedstudio.com/wiki/Arch_Max/res/STM32F407.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>