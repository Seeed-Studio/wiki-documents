---
name: XIAO RP2040
category: Development Board
bzurl: 
prodimagename:
surveyurl: 
sku: 102010328
tags:
---

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_Preview-07.png)

The XIAO RP2040 is as small as the Seeeduino XIAO but it's more powerful. On one hand, it carries the powerful Dual-core RP2040 processor that can flexible clock running up to 133 MHz which is a low-power microcontrollers. On the XIAO RP2040 there is also 264KB of SRAM, and 2MB of on-board Flash memory which can provide more program to save and run. On the other hand, this little board has good performance in processing but needs less power.  
All in all, it is designed in a tiny size as small as a thumb(20x17.5mm) and can be used for wearable devices and small projects.

There are 14 GPIO PINs on XIAO RP2040, on which there are 11 digital pins, 4 analog pins, 11 PWM Pins,1 I2C interface, 1 UART interface, 1 SPI interface, 1 SWD Bonding pad interface.


<p style=":center"><a href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## **Features**

- Powerful MCU: Dual-core ARM Cortex M0+ processor, flexible clock running up to 133 MHz
- Rich on-chip resources: 264KB of SRAM, and 2MB of on-board Flash memory
- Flexible compatibility: Support Micropython/Arduino/CircuitPython
-  Easy project operation: Breadboard-friendly & SMD design, no components on the back
- Small size: As small as a thumb(20x17.5mm) for wearable devices and small projects.
- Multiple interfaces: 11 digital pins, 4 analog pins, 11 PWM Pins,1 I2C interface, 1 UART interface, 1 SPI interface, 1 SWD Bonding pad interface.

## **Specification**

|Item|Value|
|---|---|
|CPU|Dual-core ARM Cortex M0+ processor up to 133MHz|
|Flash Memory|2MB|
|SRAM|264KB|
|Digital I/O Pins|11|
|Analog I/O Pins|4|
|PWM Pins|11|
|I2C interface|1|
|SPI interface|1|
|UART interface|1|
|Power supply and downloading interface| Type-C|
|Power|3.3V/5V DC|
|Dimensions|20×17.5×3.5mm|


## **Hardware Overview**

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/bigger-one.jpg)

!!!Note

    For general I/O pins:
    Working voltage of MCU is 3.3V . Voltage input connected to general I/O pins may cause chip damage if it' higher than 3.3V .

    For power supply pins:
    The built-in DC-DC converter circuit able to change 5V voltage into 3.3V allows to power the device with a 5V supply via VIN-PIN and 5V-PIN.

    Please pay attention to use, do not lift the shield cover.
    
    
### **Enter Bootloader Mode**


Sometimes the XIAO RP2040 port may disappear when user programming process fails. we can solve this problem by the following operation: 

- Long press the "B" button.
- Connect the XIAO PR2040 to your computer.
- The computer will appear a disk driver.

At this point, the chip enters Bootloader mode and the burn port appears again. Because the RP2040 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps.

### **Reset**

If you want to reset the XIAO RP2040, perform the following steps:

- Connect the XIAO RP2040 to your computer.
- Press the "R" pins **once**.

Please note: The behavior of the built-in programmable Single-colour LEDs(two are blue, one is green) are reversed to the one on an Arduino. On the XIAO RP2040, the pin has to be pulled low to enable.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/01(1).jpg)


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO RP2040 v1.10 SCH&PCB.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;">
</div>


## Resourses

- **[ZIP]** [XIAO RP2040 Schematic](files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO RP2040 v1.10 SCH&PCB.zip)

- **[PDF]** [RP2040 datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>