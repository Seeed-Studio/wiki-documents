---
description: Overview
title: Overview
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040
last_update:
  date: 1/11/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>


The Seeed Studio XIAO RP2040 is as small as the Seeed Studio XIAO SAMD21 but it's more powerful. On one hand, it carries the powerful Dual-core RP2040 processor that can flexible clock running up to 133 MHz which is a low-power microcontrollers. On the Seeed Studio XIAO RP2040 there is also 264KB of SRAM, and 2MB of on-board Flash memory which can provide more program to save and run. On the other hand, this little board has good performance in processing but needs less power.  
All in all, it is designed in a tiny size as small as a thumb(20x17.5mm) and can be used for wearable devices and small projects.

There are 14 GPIO PINs on Seeed Studio XIAO RP2040, on which there are 11 digital pins, 4 analog pins, 11 PWM Pins,1 I2C interface, 1 UART interface, 1 SPI interface, 1 SWD Bonding pad interface.

Seeed Studio XIAO RP2040 is compatible to the Seeed Studio XIAO expansion board. 

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

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

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::note

    For general I/O pins:
    Working voltage of MCU is 3.3V . Voltage input connected to general I/O pins may cause chip damage if it' higher than 3.3V .

    For power supply pins:
    The built-in DC-DC converter circuit able to change 5V voltage into 3.3V allows to power the device with a 5V supply via VIN-PIN and 5V-PIN.

    Please pay attention to use, do not lift the shield cover.
:::    
    
### **Enter Bootloader Mode**


Sometimes the Seeed Studio XIAO RP2040 port may disappear when user programming process fails. we can solve this problem by the following operation: 

- Long press the "B" button.
- Connect the Seeed Studio XIAO PR2040 to your computer.
- The computer will appear a disk driver.

At this point, the chip enters Bootloader mode and the burn port appears again. Because the RP2040 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps.

### **Reset**

If you want to reset the Seeed Studio XIAO RP2040, perform the following steps:

- Connect the Seeed Studio XIAO RP2040 to your computer.
- Press the "R" pins **once**.

Please note: The behavior of the built-in programmable Single-colour LEDs(two are blue, one is green) are reversed to the one on an Arduino. On the Seeed Studio XIAO RP2040, the pin has to be pulled low to enable.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Resources


- **[PDF]** [RP2040 datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO RP2040 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)

- **[ZIP]** [Seeed Studio XIAO RP2040 KiCAD file](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Eagle file](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO RP2040 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip)

- **[LBR]** [Seeed Studio XIAO RP2040 Eagle footprint](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO RP2040 pinout sheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO RP2040 3D Model](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Certification files](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-Certification.zip)



## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>