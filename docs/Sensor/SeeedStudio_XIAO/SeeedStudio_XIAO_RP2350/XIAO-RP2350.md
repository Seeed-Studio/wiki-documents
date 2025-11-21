---
title: Getting Started with Seeed Studio XIAO RP2350(MicroPython)
description: |
  XIAO RP2350, a cutting-edge microcontroller from Seeed Studio. It features a dual-core processor, increased SRAM and flash memory, and enhanced connectivity.
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.webp
slug: /getting-started-xiao-rp2350
keywords:
  - xiao
  - RP2350
sidebar_position: 0
last_update:
  author: Spencer
  date: 2024-11-22T05:59:15.764Z
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Seeed Studio XIAO RP2350

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg"
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html?utm_source=seeed&utm_medium=wiki" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
  </a>
</div><br></br>

The XIAO RP2350 packs the power of the Raspberry Pi RP2350 (dual Cortex-M33 cores running at 150MHz with FPU, enhanced security and encryption) into the classic XIAO form factor. Measuring just 21x17.8mm, it features 19 multifunction GPIOs, an RGB LED, and a Battery Management System with ultra-low power consumption of 50μA, battery power supply, and direct battery voltage measurement. Thanks to the XIAO ecosystem, the XIAO RP2350 is compatible with a wide range of add-ons, including displays, LED matrix, Grove modules, CAN Bus, Vision AI sensors, and mmWave sensors. With native support for MicroPython, C, and C++, the XIAO RP2350 is perfect for developers of all levels looking to create compact, battery-powered applications for smart control, wearables, DIY keyboards, and more.

## Features

- **Powerful MCU Board:** Equipped with a Raspberry Pi RP2350 chip featuring symmetric dual Arm Cortex-M33 @ 150MHz with FPU.
- **Enhanced Security Features:** Built-in secure boot and encrypted bootloader ensure application security.
- **Software Support:** Compatible with C/C++ and MicroPython, ensuring easy project development and prototyping.
- **Rich Onboard Resources:** Integrates an RGB LED, 2MB Flash, 520kB SRAM, and 19 multifunction GPIOs(Analog, Digital, I²C, UART, SPI, PWM).
- **Expanded 8 New IOs:** Compared to previous XIAO MCUs, the addition of 8 IO pins on the back supports more complex applications.
- **Efficient Power Design:** Ultra-low power consumption of just 50μA in sleep mode, enabling battery power supply. Direct battery voltage measurement via internal IO enhances the battery management system (BMS).
- **Compact Thumb-Sized Design:** Measuring 21 x 17.8mm, adopting Seeed Studio's classic XIAO form factor, ideal for space-conscious applications.
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
        <td>2MB Flash</td>
    </tr>
    <tr>
        <td>LEDs</td>
        <td>1 user LED(3 colors), 1 power LED, 1 RGB LED</td>
        <td>1 user LED, 1 charge LED(Battery Charging Indicator)，1 RGB LED</td>
    </tr>
    <tr>
        <td>Interface</td>
        <td>11 Pins:4x Analog,11x Digital, 1x I²C, 1x UART, 1x SPI, All PWM</td>
        <td><b>19 Pins:3x Analog,19x Digital, 2x I²C, 2x UART, 2x SPI, All PWM</b></td>
    </tr>
    <tr>
        <td>Button</td>
        <td align="center" colspan="2">1 RESET button, 1 BOOT button</td>
    </tr>
    <tr>
        <td>Security</td>
       <td align="center"> - </td>
        <td>OTP, Secure Boot, Arm TrustZone</td>
    </tr>
    <tr>
        <td>Low power</td>
       <td align="center"> - </td>
        <td>4.2V/50uA</td>
    </tr>
    <tr>
        <td>Software compatibility</td>
        <td>Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr, <a href="https://wiki.seeedstudio.com/xiao_topic_page/">and more to come</a></td>
        <td>Arduino, PlatformIO, MicroPython, CircuitPython, <a href="https://wiki.seeedstudio.com/xiao_topic_page/">and more to come</a></td>
    </tr>
    <tr>
        <td>Working Temperature</td>
        <td align="center" colspan="2">-20°C~70°C</td>
    </tr>
    <tr>
        <td>Dimensions</td>
        <td align="center" colspan="2">21x17.8 mm</td>
    </tr>
</table>

## Hardware Overview

<div class="table-center">
<table align="center">
 <tr>
     <th>XIAO RP2350 Front Pinout</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 Back Pinout</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Back Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 Components</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 Components" /></div></td>
 </tr>
</table>
</div>

Need more details on pinouts? Navigate to [Assets and Resources](#assets--resources) below.

## Platform Supported

The XIAO RP2350, powered by the RP2350, supports MicroPython and the C/C++ SDK provided by Raspberry Pi. This flexibility allows developers to choose their preferred programming language and environment for prototyping and development.

<div class="table-center">
  <table align="center">
    <tr>
      <th>C/C++ SDK</th>
      <th>MicroPython</th>
    </tr>
    <tr>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/C%2B%2B-Logo.wine.png" alt="c-cpp logo" width={200} height="auto" />
      </td>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" alt="MicroPython" width={200} height="auto" />
      </td>
    </tr>
  </table>
</div>

## Getting Started▶️

:::info attention
This page primarily focuses on MicroPython users. For those interested in learning SDK programming or for advanced users, you may want to start with the [Raspberry Pi Pico-series C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf). This guide will help you set up the environment and get started with example code. Additionally, you can visit [XIAO RP2350 with C/C++ SDK](/xiao-rp2350-c-cpp-sdk) for more specific instructions related to the XIAO RP2350.
:::

:::tip
Currently, the ADC function may not work properly when using the official [firmware](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/SEEED_XIAO_RP2350.uf2). Please download and use our modified firmware first. Once the pull request is merged, we will update the relevant content on the Wiki accordingly.
:::

### Step 1: Installing MicroPython on XIAO RP2350

To install the MicroPython firmware on the XIAO RP2350, follow these steps:

**Step 1.1. Download the MicroPython Firmware:**  

- Navigate to the [MicroPython Downloads](https://micropython.org/download/SEEED_XIAO_RP2350/) page.
- Download the latest `.uf2` firmware file compatible with the XIAO RP2350.

:::tip
The default firmware is for ARM architecture, if you want to use RISC-V, please use the corresponding firmware version in the link.
:::

**Step 1.2 Enter BOOTSEL Mode:**  

You can enter BOOTSEL mode on the XIAO RP2350 using either of the two methods below:

<Tabs>
<TabItem value="method1" label="Method 1: Before Connecting to Computer" default>

1. **Press and Hold the BOOT Button**:  
   While your XIAO RP2350 is disconnected from your computer, **press and hold** the BOOT button.
2. **Connect to Your Computer**:  
   While holding the BOOT button, connect the XIAO RP2350 to your computer using a USB cable.
3. **Release the BOOT Button**:  
   After the board is connected to your computer, you can release the BOOT button. The XIAO RP2350 should now be in BOOTSEL mode, and your computer will recognize it as a removable storage device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Hold Boot-> Plug in Cable-> Release Boot</em></div>
</div>

</TabItem>

<TabItem value="method2" label="Method 2: While Connected to Computer">

1. **Press and Hold the BOOT Button**:  
   With the XIAO RP2350 already connected to your computer, press and hold the BOOT button.
2. **Click the RESET Button**:  
   While still holding the BOOT button, press and release the RESET button, which is labeled "B" on the bottom right corner of the board in the image above.
3. **Release the BOOT Button**:  
   After pressing the RESET button, release the BOOT button. The XIAO RP2350 should now be in BOOTSEL mode, and your computer will recognize it as a removable storage device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Hold Boot-> Click Reset-> Release Boot</em></div>
</div>

</TabItem>
</Tabs>

**Step 1.3. Install the Firmware:**  

- **Drag and drop** the downloaded `.uf2` file into the XIAO RP2350's removable storage drive.
- The board will automatically reboot after the file is copied, completing the firmware installation.

### Step 2: Installing Thonny IDE

:::tip about MicroPython

[MicroPython](https://micropython.org/) is an interpreted language similar to [Python](https://www.python.org/). However, unlike Python, MicroPython runs directly on the hardware (bare-metal), providing an interactive prompt (REPL) to execute commands immediately, as well as the ability to run and import scripts from the built-in filesystem.

To connect to the XIAO RP2350 board and start writing and running your Python code, you can use any terminal tool that supports serial connections, such as minicom, PuTTY, electerm, warp, and more. For a more *user-friendly experience*, you can use **[Thonny](https://thonny.org/)** for its ease of use, integrated features, and beginner-friendly interface. This way, you can enjoy writing and running your Python code directly on the device.

:::

Thonny IDE is a beginner-friendly Python editor that's excellent for MicroPython development. Here's how to install it:

1. **Download Thonny:**  
   - Visit the [Thonny Download Page](https://thonny.org/).
   - Choose the appropriate installer for your operating system (Windows, macOS, or Linux) and download it.

2. **Install Thonny:**  
   - **Run** the downloaded installer.
   - **Follow** the on-screen instructions to complete the installation process.

3. **Configure Thonny for MicroPython:**  
   - **Open** Thonny IDE.
   - Look at the bottom-right corner of the Thonny window.
   - Click on the **interpreter** selection area.
   - Choose **'MicroPython (RP2040)'** from the dropdown.
   - Ensure the correct **Port** is selected—Thonny typically auto-detects it.

You're now ready to write and upload MicroPython code to your XIAO RP2350 using Thonny IDE!

<Tabs>
  <TabItem value="thonny-mpy" label="Thonny IDE" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="putty-mpy" label="PuTTY Console">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
</Tabs>

If your device is ready with MicroPython, let's start with a simple project:

### Let's Make It Blink! ✨

Getting the board to blink an LED is often the first program everyone runs. The same goes for the XIAO RP2350.

:::note
The `USER LED`, the yellow LED on the XIAO RP2350, is connected to `GPIO25/D19` according to the schematic diagram.
For all XIAO family boards, the `USER LED` will **light up** when set to a `low level` and **turn off** when set to a `high level`.
:::

<Tabs>
  <TabItem value="blink" label="Blink" default>

```python showLineNumbers
from machine import Pin # Import the Pin class from the machine module
from time import sleep  # Import the sleep function from the time module

# Initialize GPIO25 as an output pin, which controls the USER LED
led = Pin(25, Pin.OUT) 

# Turn off the LED initially
led.value(1) # led.on() -> high level -> light off
sleep(0.5) # Wait for 0.5 seconds

# Turn on the LED
led.value(0) # led.off() -> low level -> light on
sleep(0.5) # Wait for 0.5 seconds

# Enter an infinite loop
while True:
    # Toggle the LED state (on to off or off to on)
    led.toggle() 
    # Print the current state of the LED
    print(f"LED {'ON' if led.value() == 0 else 'OFF'}")
    sleep(0.5) # Wait for 0.5 seconds before the next toggle
```

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/tonny-blink-led.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

  </TabItem>
  <TabItem value="pwm" label="Fading a LED" default>

```python title="examples/rp2/pwm_fade.py" showLineNumbers
# Example using PWM to fade an LED.

import time
from machine import Pin, PWM

# Construct PWM object, with LED on Pin(25).
pwm = PWM(Pin(25))

# Set the PWM frequency.
pwm.freq(1000)

# Fade the LED in and out a few times.
duty = 0
direction = 1
for _ in range(8 * 256):
    duty += direction
    if duty > 255:
        duty = 255
        direction = -1
    elif duty < 0:
        duty = 0
        direction = 1
    pwm.duty_u16(duty * duty)
    time.sleep(0.001)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-fade-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

  </TabItem>
</Tabs>

Once you have copied the code into Thonny IDE, as shown in the image below, simply click the `Run current script` button or press `F5`. This will execute the code snippet and you'll see the LED on the XIAO RP2350 start to blink.

### Play with RGB LEDs

The XIAO RP2350 comes with a built-in RGB LED that you can control using MicroPython. Below is an example of how to cycle through different colors:

```python showLineNumbers
import array, time, random
from machine import Pin
import rp2

NUM_LEDS = 1
LED_PIN = 22  # PICO_DEFAULT_WS2812_PIN
POWER_PIN = 23  # PICO_DEFAULT_WS2812_POWER_PIN

# Global brightness variable (0.0 to 1.0)
BRIGHTNESS = 0.1

@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True, pull_thresh=24)
def ws2812():
    T1 = 2
    T2 = 5
    T3 = 3
    wrap_target()
    label("bitloop")
    out(x, 1)               .side(0)    [T3 - 1]
    jmp(not_x, "do_zero")   .side(1)    [T1 - 1]
    jmp("bitloop")          .side(1)    [T2 - 1]
    label("do_zero")
    nop()                   .side(0)    [T2 - 1]
    wrap()

# Set up the power pin
power_pin = Pin(POWER_PIN, Pin.OUT)
power_pin.value(1)  # Turn on power to the LED

# Create the StateMachine with the ws2812 program, outputting on LED_PIN
sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(LED_PIN))

# Start the StateMachine, it will wait for data on its FIFO.
sm.active(1)

def set_led_color(color):
    sm.put(array.array("I", [color]), 8)

def random_color():
    return random.randint(0, 255) | (random.randint(0, 255) << 8) | (random.randint(0, 255) << 16)

def interpolate(color1, color2, factor):
    r1, g1, b1 = color1 & 255, (color1 >> 8) & 255, (color1 >> 16) & 255
    r2, g2, b2 = color2 & 255, (color2 >> 8) & 255, (color2 >> 16) & 255
    r = int(r1 + factor * (r2 - r1))
    g = int(g1 + factor * (g2 - g1))
    b = int(b1 + factor * (b2 - b1))
    return (b << 16) | (g << 8) | r

def apply_brightness(color, brightness):
    r, g, b = color & 255, (color >> 8) & 255, (color >> 16) & 255
    r = int(r * brightness)
    g = int(g * brightness)
    b = int(b * brightness)
    return (b << 16) | (g << 8) | r

print("Starting random color transitions with adjustable brightness...")

# Main loop
current_color = random_color()
while True:
    next_color = random_color()
    for i in range(100):  # 100 steps for smooth transition
        transition_color = interpolate(current_color, next_color, i / 100)
        final_color = apply_brightness(transition_color, BRIGHTNESS)
        set_led_color(final_color)
        time.sleep_ms(20)  # Adjust this value to change transition speed
    current_color = next_color

    # Optionally, you can change the brightness here for demo purposes
    # BRIGHTNESS = random.random()  # This will set a random brightness each cycle
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-rgb-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

### Battery & Power Management

Is it possible to read the battery voltage without extra components? Yes, with the XIAO RP2350, it’s easier than ever. In previous XIAO family members, such as the [XIAO ESP32C3](/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), reading the battery voltage required manually connecting to *A0* with a resistor.

But with the XIAO RP2350, this process is simplified. You can now directly use the `A3/GPIO29` pin to read the battery voltage level, streamlining your design and development. Just remember to set the `GPIO19` pin to high, as it’s necessary to enable battery level reading.

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

    conversion_factor = 3.3 / (65535)  # Conversion factor for 12-bit ADC and 3.3V reference
    
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

***Datasheets and Schematics***

- 📄 **[PDF]** [RP2350 Datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO RP2350 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf)
- 📄 **[XLSX]** [Seeed Studio XIAO RP2350 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx)
- 📄 **[DXF]** [Seeed Studio XIAO RP2350 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf)
- 🔗 **[Link]** [Seeed Studio XIAO RP2350 3D STEP File](https://grabcad.com/library/seeed-studio-xiao-rp2350-2)
- 📄 **[ZIP]** [Seeed Studio XIAO RP2350 v1.0 SCH&PCB](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip)

- 📄 **[UF2]** [Low Power Test Firmware](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2)

***Related Resources***

- 📄 **[PDF]** [Getting Started with Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf): A comprehensive guide to setting up and programming Raspberry Pi Pico boards, ideal for beginners looking to learn MicroPython or C/C++.
- 📄 **[PDF]** [Raspberry Pi Pico-series Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf) the book which documents the MicroPython setup tutorials and APIs
- 📄 **[PDF]** [Raspberry Pi Pico-series C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) the book which documents the Pico C/C++ SDK APIs
- 🔗 **[Kicad]** [Seeed Studio XIAO RP2350 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Expansion and Applications

[The XIAO series](/xiao_topic_page) has a huge range of peripherals and peripheral accessories for you to learn and use, whether you want a colorful screen that allows for perfect interaction, an integrated board with bright and simple RGB lights, and so on, just waiting to be checked out.

As a member of the XIAO family, the XIAO RP2350 does the same. Of course, to make better use of the extra pins drawn out, new *peripherals and boards* will keep coming along, fully utilizing the performance for which it was created.

- 🌟 **[Expanding with Accessories](/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  Discover the wide range of add-ons and modules compatible with the XIAO Family, from displays and LED matrices to Grove modules and sensors, and learn how they can enhance your projects.

### Community and Learning

Furthermore, dive into the vibrant Raspberry Pi community to expand your knowledge and discover new project ideas. Leverage community-shared resources, forums, and tutorials to enhance your experience with the XIAO RP2350. In addition to the Seeed Studio Wiki, here are a few other recommended places to learn:

- **[Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)**: Get reliable and up-to-date info on the RP2350.
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
