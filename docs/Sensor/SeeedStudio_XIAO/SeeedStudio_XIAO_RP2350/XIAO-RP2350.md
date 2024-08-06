---
title: Getting Started with Seeed Studio XIAO RP2350
description: |
  XIAO RP2350, a cutting-edge microcontroller from Seeed Studio. It features a dual-core processor, increased SRAM and flash memory, and enhanced connectivity.
image: https://files.seeedstudio.com/wiki/XIAO_RP2350/img/1-102010550%20XIAO%20RP2350%20thumbnail%20.png
slug: /getting-started-xiao-rp2350
keywords:
  - xiao
  - RP2350
sidebar_position: 0
author: Spencer
last_update:
  date: 2024-08-06T09:04:29.524Z
---

## Seeed Studio XIAO RP2350

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/XIAO_RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg" 
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} 
  />
</div>

The XIAO RP2350 packs the power of the Raspberry Pi RP2350 (dual Cortex-M33 cores running at 150MHz with FPU, enhanced security and encryption) into the classic XIAO form factor. Measuring just 21x17.5mm, it features 19 multifunction GPIOs, an RGB LED, and a Battery Management System with ultra-low power consumption of 27μA, battery power supply, and direct battery voltage measurement. Thanks to the XIAO ecosystem, the XIAO RP2350 is compatible with a wide range of add-ons, including displays, LED matrix, Grove modules, CAN Bus, Vision AI sensors, and mmWave sensors. With native support for MicroPython, C, and C++, the XIAO RP2350 is perfect for developers of all levels looking to create compact, battery-powered applications for smart control, wearables, DIY keyboards, and more.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com">
  <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
  </a>
</div>

<br></br>

## Features

- **Powerful MCU Board:** Equipped with a Raspberry Pi RP2350 chip featuring symmetric dual Arm Cortex-M33 @ 150MHz with FPU.
- **Enhanced Security Features:** Built-in secure boot and encrypted bootloader ensure application security.
- **Software Support:** Compatible with C/C++ and MicroPython, ensuring easy project development and prototyping.
- **Rich Onboard Resources:** Integrates an RGB LED, 2MB Flash, 520kB SRAM, and 19 multifunction GPIOs(Analog, Digital, I²C, UART, SPI, PWM).
- **Expanded 8 New IOs:** Compared to previous XIAO MCUs, the addition of 8 IO pins on the back supports more complex applications.
- **Efficient Power Design:** Ultra-low power consumption of just 27μA in sleep mode, enabling battery power supply. Direct battery voltage measurement via internal IO enhances the battery management system (BMS).
- **Compact Thumb-Sized Design:** Measuring 21 x 17.5mm, adopting Seeed Studio's classic XIAO form factor, ideal for space-conscious applications.
- **Production-friendly:** Surface Mount Device (SMD) design with all components on the front and stamp holes on both sides, facilitating efficient mass production.

## Specification

<table align="center">
    <tr>
        <td>Product</td>
        <td>XIAO RP2040</td>
        <td><b>XIAO RP2350</b></td>
    </tr>
    <tr>
        <td rowspan="2">Processor</td>
        <td>Raspberry Pi RP2040</td>
        <td>Raspberry Pi RP2350</td>
    </tr>
    <tr>
        <td>Dual Cortex-M0+ @ 133MHz</td>
        <td>Dual Cortex-M33 @ 150MHz, FPU</td>
    </tr>
    <tr>
        <td>RAM</td>
        <td>264kB SRAM</td>
        <td>520kB SRAM</td>
    </tr>
    <tr>
        <td>Flash</td>
        <td>2MB Onboard</td>
        <td>2MB PSRAM</td>
    </tr>
    <tr>
        <td>LEDs</td>
        <td>1 user LED, 1 power LED, two LEDs for serial port downloading, 1 RGB LED</td>
        <td>1 user LED, 1 power LED，1 RGB LED</td>
    </tr>
    <tr>
        <td>Interface</td>
        <td>11 Pins:4x Analog,11x Digital, 1x I²C, 1x UART, 1x SPI, All PWM</td>
        <td><b>19 Pins:3x Analog,19x Digital, 2x I²C, 2x UART, 2x SPI, All PWM</b></td>
    </tr>
    <tr>
        <td>Button</td>
        <td>1 RESET button, 1 BOOT button</td>
        <td>1 RESET button, 1 BOOT button</td>
    </tr>
    <tr>
        <td>Security</td>
       <td align="center"> - </td>
        <td>OTP, Secure Boot, Arm TrustZone</td>
    </tr>
    <tr>
        <td>Low power</td>
       <td align="center"> - </td>
        <td>27μA</td>
    </tr>
    <tr>
        <td>Software compatibility</td>
        <td>Support Micropython / Arduino / CircuitPython</td>
        <td>Support Micropython / C,C++</td>
    </tr>
    <tr>
        <td>Working Temperature</td>
        <td>-20°C-70°C</td>
        <td>-20°C-70°C</td>
    </tr>
    <tr>
        <td>Dimensions</td>
        <td>21x17.5 mm</td>
        <td>21x17.5 mm</td>
    </tr>
</table>

## Platform Supported

<div class="table-center">
  <table align="center">
    <tr>
      <th>C/C++ SDK</th>
      <th>MicroPython(On the way)</th>
    </tr>
    <tr>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO_RP2350/img/C%2B%2B-Logo.wine.png" alt="MicroPython" width={200} height="auto" />
      </td>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" alt="pir" width={200} height="auto" />
      </td>
    </tr>
  </table>
</div>

## Hardware Overview

<div class="table-center">
<table align="center">
	<tr>
	    <th>XIAO RP2350 Front Pinout</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO RP2350 Back Pinout</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO RP2350 Components</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}}/></div></td>
	</tr>
</table>
</div>

Need more detailed pins out list? check this file: 引脚表格

## Contents Map

The XIAO RP2350 is one of the [XIAO series](/xiao_topic_page) members. This follow-along reading is organized as a `Contents Map` to guide you through a more dedicated and structured exploration. *This map is still growing, and contributions from the community are always welcome*.

Explore these sections to help you get started with the XIAO RP2350 and make the most of its features and capabilities:

### Getting Started ▶️

In this page, we cover the basics of the XIAO RP2350's features, specifications, and potential applications in an easy-to-understand way.

- **[Setting Up the Pico SDK](/xiao-rp2350-c-cpp-sdk)**  
  The Pico SDK is your starting point for developing projects on the XIAO RP2350. This section explains what the SDK is and provides step-by-step setup instructions.
  <!-- - **[Exploring MicroPython](link)**  
  If you're familiar with Python, MicroPython is a great way to start coding on the XIAO RP2350. This section shows you how to use MicroPython and leverage your existing Python skills to quickly create projects. -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Let's Make It Blink! ✨

Getting the board to blink an LED is often the first program everyone runs. The same goes for the XIAO RP2350. For those who want to blink with SDK programming and know how to set up the SDK development environment, check the page [Setting Up the Pico SDK](/xiao-rp2350-c-cpp-sdk).


<Tabs>
  <TabItem value="python" label="MicroPython" default>

```python
from machine import Pin
from time import sleep

led = Pin(25, Pin.OUT) # GPIO25 is for USER LED

while True:
    led.value(1)
    sleep(0.5)
    led.value(0)
    sleep(0.5)
```

  </TabItem>
</Tabs>

#### Demonstration

<!-- A video on YouTuebe -->

### Battery & Power Management

Is it possible to read the battery voltage without extra components? Yes! We heard you. With more pins provided, the XIAO RP2350 makes it possible. For previous members of the XIAO family, such as the [XIAO ESP32C3](/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), reading the battery voltage level required manually connecting to *A0* with a resistor.

However, with the XIAO RP2350, this is no longer necessary. You can now use the `A3/GPIO29` pin to directly read the battery voltage level, simplifying your design and development process. Additionally, for battery level reading, the `GPIO19` must be set to a high value, which is the enable pin for reading the battery level.

Follow along with this code snippet to read the battery voltage using the Pico SDK:

<Tabs>
  <TabItem value="python" label="MicroPython" default>

```python
from machine import Pin, ADC
import time

# Function to initialize the GPIO pin for enabling battery voltage reading
def init_gpio():
    enable_pin = Pin(19, Pin.OUT)
    enable_pin.value(1)  # Set the pin to high to enable battery voltage reading

def main():
    print("ADC Battery Example - GPIO29 (A3)")
    
    init_gpio()  # Initialize the enable pin
    adc = ADC(Pin(29))  # Initialize the ADC on GPIO29

    conversion_factor = 3.3 / (1 << 12)  # Conversion factor for 12-bit ADC and 3.3V reference
    
    while True:
        result = adc.read_u16()  # Read the ADC value
        voltage = result * conversion_factor * 2  # Calculate the voltage, considering the voltage divider (factor of 2)
        print("Raw value: 0x{:03x}, voltage: {:.2f} V".format(result, voltage))
        time.sleep(0.5)  # Delay for 500 milliseconds

if __name__ == '__main__':
    main()
```

  </TabItem>
  <TabItem value="sdk" label="C/C++ SDK">

```c title='adc_bat.c'
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

// Function to initialize the GPIO pin for enabling battery voltage reading
void init_gpio() {
    const int enable_pin = 19; // Pin to enable battery voltage reading

    gpio_init(enable_pin); // Initialize the pin
    gpio_set_dir(enable_pin, GPIO_OUT); // Set the pin as output
    gpio_put(enable_pin, 1); // Set the pin to high to enable battery voltage reading
}

int main() {
    stdio_init_all(); // Initialize standard input/output
    printf("ADC Battery Example - GPIO29 (A3)\n");

    init_gpio(); // Initialize the enable pin
    adc_init(); // Initialize the ADC

    // Initialize the ADC GPIO pin (GPIO29)
    adc_gpio_init(29);
    // Select ADC input 3 (corresponding to GPIO29)
    adc_select_input(3);

    while (1) {
        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12); // Conversion factor for 12-bit ADC and 3.3V reference
        uint16_t result = adc_read(); // Read the ADC value
        // Calculate the voltage, considering the voltage divider (factor of 2)
        printf("Raw value: 0x%03x, voltage: %f V\n", result, result * conversion_factor * 2); 
        sleep_ms(500); // Delay for 500 milliseconds
    }
}
```

  </TabItem>
</Tabs>


## Assets & Resources

The XIAO RP2350 harnesses the power of the Raspberry Pi RP2350, leveraging a wealth of shared resources from the Raspberry Pi community. This opens up a world of possibilities for you to tailor your projects on this tiny board with boundless creativity. Below are essential resources and assets to help you get started.

- 📄 **[PDF]** [RP2350 datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO RP2350 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)
- 🗂 **[DXF]** [Seeed Studio XIAO RP2350 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2040-DXF.zip)
- 📄 **[LBR]** [Seeed Studio XIAO RP2350 Eagle footprint](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)
- 📄 **[XLSX]** [Seeed Studio XIAO RP2350 pinout sheet](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2040-pinout_sheet.xlsx)

### Expansion and Applications

[The XIAO series](/xiao_topic_page) has a huge range of peripherals and peripheral accessories for you to learn and use, whether you want a colorful screen that allows for perfect interaction, an integrated board with bright and simple RGB lights, and so on, just waiting to be checked out. 

As a member of the XIAO family, the XIAO RP2350 does the same. Of course, to make better use of the extra pins drawn out, new *peripherals and boards* will keep coming along, fully utilizing the performance for which it was created.

- 🌟 **[Expanding with Accessories](/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  Discover the wide range of add-ons and modules compatible with the XIAO Family, from displays and LED matrices to Grove modules and sensors, and learn how they can enhance your projects.

### Community and Learning

Furthermore, dive into the vibrant Raspberry Pi community to expand your knowledge and discover new project ideas. Leverage community-shared resources, forums, and tutorials to enhance your experience with the XIAO RP2350. In addition to the Seeed Studio Wiki, here are a few other recommended places to learn:

- **[Raspberry Pi Forums](https://www.raspberrypi.org/forums/)**: Engage with other enthusiasts, ask questions, and share your projects.
- **[XIAO GitHub Repository](https://github.com/Seeed-Studio/OSHW-XIAO-Series)**: Explore the official XIAO repository for more centralized documentation and more interaction with our team, **Join Us!**
- **[r/embedded on Reddit](https://www.reddit.com/r/embedded/)**: Join the embedded systems community, share insights, and discuss various topics.
- **[Pico Topic on GitHub](https://github.com/topics/pico)**: Explore repositories and discussions related to the Pico.
- **[Hackster.io](https://www.hackster.io/)**: Discover projects and tutorials related to various hardware platforms, including XIAO and Raspberry Pi.
- **[Instructables](https://www.instructables.com/)**: Find DIY projects and step-by-step guides for creating with XIAO and other hardware.
- **[Element14 Community](https://www.element14.com/community/)**: Participate in discussions, webinars, and projects related to electronics and embedded systems.

And more, you're always welcome to share your projects on our [Seeed Studio Discord](https://discord.com/invite/kpY74apCWj) and [Seeed Studio Forum](https://forum.seeedstudio.com/). These platforms provide an excellent opportunity to connect with other makers, get feedback, and find inspiration. Whether you need help troubleshooting an issue, want to show off your latest creation, or simply wish to be part of a supportive community, *Seeed Studio's Discord and Forum* are the perfect places to engage and collaborate.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>