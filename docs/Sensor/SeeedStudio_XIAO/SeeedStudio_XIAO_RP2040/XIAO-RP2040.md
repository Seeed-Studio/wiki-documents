---
description: Overview
title: Getting Started with Seeed Studio XIAO RP2040
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Getting Started with Seeed Studio XIAO RP2040

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>

The Seeed Studio XIAO RP2040 is as small as the Seeed Studio XIAO SAMD21 but it's more powerful. On one hand, it carries the powerful Dual-core RP2040 processor that can flexible clock running up to 133 MHz which is a low-power microcontrollers. On the Seeed Studio XIAO RP2040 there is also 264KB of SRAM, and 2MB of on-board Flash memory which can provide more program to save and run. On the other hand, this little board has good performance in processing but needs less power.  
All in all, it is designed in a tiny size as small as a thumb(21x17.8mm) and can be used for wearable devices and small projects.

There are 14 GPIO PINs on Seeed Studio XIAO RP2040, on which there are 11 digital pins, 4 analog pins, 11 PWM Pins,1 I2C interface, 1 UART interface, 1 SPI interface, 1 SWD Bonding pad interface.

Seeed Studio XIAO RP2040 is compatible to the Seeed Studio XIAO expansion board.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## **Features**

- Powerful MCU: Dual-core ARM Cortex M0+ processor, flexible clock running up to 133 MHz
- Rich on-chip resources: 264KB of SRAM, and 2MB of on-board Flash memory
- Flexible compatibility: Support Micropython/Arduino/CircuitPython
- Easy project operation: Breadboard-friendly & SMD design, no components on the back
- Small size: As small as a thumb(21x17.8mm) for wearable devices and small projects.
- Multiple interfaces: 11 digital pins, 4 analog pins, 11 PWM Pins,1 I2C interface, 1 UART interface, 1 SPI interface, 1 SWD Bonding pad interface.

## **Specification**

| Product Name | Seeed Studio XIAO RP2040 |
|-------------|-------------------------|
| **Chipset** | [Silicon - Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040) |
| **Processor** | Dual Cortex M0+ processor running at up to 133 MHz |
| **RAM** | 264KB SRAM |
| **Flash** | 2MB Onboard Flash |
| **Interface** | GPIO Pin x14<br/>Digital Pin x11<br/>Analog Pin x4<br/>I2C x1<br/>UART x1<br/>SPI x1<br/>PWM x11 |
| **Onboard** | User LED (3 Colors) x1<br/>Power LED x1<br/>RGB LED x1<br/>Reset Button x1<br/>Boot Button x1 |
| **Wireless Connectivity** | / |
| **Power** | Input Voltage (Type-C): 5V<br/>Input Voltage (BAT): 5V |
| **Low Power Mode(Typ.)** | / |
| **Software Compatibility** | Arduino, PlatformIO, MicroPython, CircuitPython, tinyGo, Rust, Zephyr, [Exhibition for XIAO Series \| Seeed Studio Wiki](https://wiki.seeedstudio.com/xiao_topic_page/) |
| **Working Temperature** | -20°C-70°C |
| **Dimensions** | 21x17.8mm |
| **Varients** | [Seeed Studio XIAO RP2040 3PCS Pack \| Save 10% for tiny Mic...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html)<br/>[Seeed Studio XIAO RP2040 Pre-Soldered \| Plug-and-Play mini ...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html) |

## **Hardware Overview**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
For general I/O pins:
Working voltage of MCU is 3.3V. Voltage input connected to general I/O pins may cause chip damage if it's higher than 3.3V.

For power supply pins:
The built-in DC-DC converter circuit able to change 5V voltage into 3.3V allows to power the device with a 5V supply via VIN-PIN and 5V-PIN.

XIAO RP2040 currently only supports battery power supply and cannot connect to Type-C while a battery is connected, as it may pose a safety risk.

Please pay attention to use, do not lift the shield cover.
:::

## **Pin Map**
| XIAO Pin        | Function     | Chip Pin          | Description                          |
| :-------------: | :---------: | :---------------: | :---------------------------------- |
| 5V              | VBUS        |                                       | Power Input/Output                   |
| GND             |             |                                       |                                      |
| 3V3             | 3V3_OUT     |                                       | Power Output                         |
| D0              | Analog      | GPIO26                                   | GPIO, ADC                            |
| D1              | Analog      | GPIO27                                   | GPIO, ADC                            |
| D2              | Analog      | GPIO28                                   | GPIO, ADC                            |
| D3              | Analog      | GPIO29                                   | GPIO, ADC                            |
| D4              | SDA         | GPIO6                                    | GPIO, I2C Data                       |
| D5              | SCL         | GPIO7                                    | GPIO, I2C Clock                      |
| D6              | TX          | GPIO0                                    | GPIO, UART Transmit                  |
| D7              | RX,CSn      | GPIO1                                    | GPIO, UART Receive,CSn               |
| D8              | SCK         | GPIO2                                    | GPIO, SPI Clock                      |
| D9              | MISO        |GPIO4                                    | GPIO, SPI Data                       |
| D10             | MOSI        | GPIO3                                    | GPIO, SPI Data                       |
| Reset           |             | RUN                                   | RUN                                  |
| Boot            |             | RP2040_BOOT                           | Enter Boot Mode                      |
| CHARGE_LED      |             | VCC_3V3                               | CHG-LED_Red                          |
| RGB LED         |             | GPIO12                       | RGB LED                              |
| USER_LED_R      |             | GPIO17                           | User-controlled red RGB LED pin      |
| USER_LED_B      |             | GPIO25                            | User-controlled blue RGB LED pin     |
| USER_LED_G      |             | GPIO16                          | User-controlled green RGB LED pin    |

### **Enter Bootloader Mode**

Sometimes the Seeed Studio XIAO RP2040 port may disappear when user programming process fails. We can solve this problem by the following operation:

- Long press the "B" button.
- Connect the Seeed Studio XIAO PR2040 to your computer.
- The computer will appear a disk driver.

At this point, the chip enters Bootloader mode and the burn port appears again. Because the RP2040 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps.

### **Reset**

If you want to reset the Seeed Studio XIAO RP2040, perform the following steps:

- Connect the Seeed Studio XIAO RP2040 to your computer.
- Press the "R" pins **once**.

Please note: The behavior of the built-in programmable Single-colour LEDs (They are red, blue and green) are reversed to the one on an Arduino. On the Seeed Studio XIAO RP2040, the pin has to be pulled low to enable.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

**Hardware Design**
- **📄[Datasheet]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Schematic]** [XIAO RP2040 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[PCB Design Files]** 
  - [ XIAO RP2040 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip )
  - [XIAO RP2040 Eagle Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO RP2040 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**Mechanical Design**
- **📄[2D Dimensions]** [XIAO RP2040 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[3D Model]** [ XIAO RP2040 3D Model](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

## Course Resources

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
