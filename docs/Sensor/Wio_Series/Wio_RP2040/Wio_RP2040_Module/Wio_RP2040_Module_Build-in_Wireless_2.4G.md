---
title: Wio RP2040 Module
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /Wio_RP2040_Module_Build-in_Wireless_2.4G
last_update:
  date: 01/11/2022
  author: gunengyu
---

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_1.jpg)

Wio RP2040 module is Seeed's self-developed module using RP2040+WiFi chip, supporting MicroPython programming. It has Cortex M0+ dual-core with flexible clock running up to 133MHz. And the module is a low-power microcontroller with wireless functions. With powerful performance and small size, it is a perfect option for various IoT projects development. The module can be easily soldered on various PCB backplanes.

The module has rich interfaces, including 28 GPIO PINs (19 PINs support PIO and PWM), 2 UART, 4 ADC, 2 SPI, 2 I2C. Some pins can be multiplexed, such as GP12 and GP13 with I2C, SPI, UART functions. That’s why 28 GPIO PINs can achieve more I/O PINs and interfaces. Wio RP2040 module also has a USB PIN, which can be designed to supports a USB Type-C interface.
[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-Module-p-4932.html)  

## Key Features

- **Powerful CPU**: dual-core 133MHz Cortex M0+  processor and 264KB SRAM, 2MB Flash
- **Reliable wireless connection**: using powerful WiFi chip, supporting 2.4~2.4835 GHz frequency and AP&Station mode
- **Flexibility**: compatible with Thonny editor
- **Small size**: 18.0x 28.2x 1.0mm 32 Pins SMT
- **Multiple certifications**: FCC and CE Certified
- **Support programming languages**: MicroPython

## Specification

| Name             | Details  |
|-----------------------|--------------|
| Processors     | Dual Cortex M0+ processors, up to 133 MHz       |
| SRAM | 264KB |
| Flash          | 2MB            |
| Wireless connectivity         | 2.4〜2.4835 GHz；IEEE802.11 b/g/n；AP & Station            |
| GPIO，PIO and PWM Pins            | 20            |
| I2C             | 2            |
| SPI                  | 2   |
| UART                  | 2   |
| ADC                  | 4   |
| VIN                  | 5V-3.6V DC   |
| Size                  | 18.0 x 28.2 x 1.0mm   |

## Hardware Overview

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_3.png)

:::note
		I/O pins: The MCU runs at 3.3V. If the voltage input connected to the general-purpose I/O pin is higher than 3.3V, it may cause damage to the chip. Please pay attention to use, do not lift the shielding cover.
:::
## Getting Started
If you want to upload the MicroPython firmware for this module, you can download [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) to the computer, then pull the BOOT pin low and connect the MicroUSB female socket according to the following wiring diagram, and finally, you can connect to the computer through the data cable. At this time, the computer will have an extra removable disk, and then move the firmware you downloaded to the removable disk to complete the firmware update.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/image1.png)


| Firmware version          | Update Log  | Download|
|-----------------------|--------------|---------|
|V1.15.1|The first official version|[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2)|
|V1.15.2|Fix the stability of the Socket and add up the error message of connection failure|[firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2)|
|V1.15.3|Rename the original function 'wait_msg()' to 'check_msg()' function, and add new 'wait_msg()' function.The main difference between them is that original 'wait_msg' function will block the program from executing when it hasn’t 'waite' for the data. And yet the 'check_msg()' function will only detect whether the data is received. When it does, it will execute the callback, and if it doesn't,the program will still continue to execute.|[firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2)|


:::note
    The firmware version used in the wiki tutorial is V1.15.1.
    If you use a new version of the firmware, please refer to the firmware update log to modify the sample code.
:::

### Software

#### 1. Install Thonny
Easy to get started. Thonny comes with Python 3.7 built-in, so just one simple installer is needed and you're ready to learn to program. First, click [Thonny.org](https://thonny.org/) to enter the download page. In the upper right corner of the page, select the Thonny installation package according to your operating system to download.  Double-click the installation package you downloaded to open it, and install it according to the steps.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_4.png)
Now that you have Thonny installed, open the application. You should see the main interface of Thonny:
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_5.png)
The main interface of Thonny is very simple, divided into the following four parts:

1.Toolbar: basic common tools, such as new, open, save, run the current script, stop, etc. 

2.Code editor: Thonny's core area, where we will write Python/MicroPython code.  

3.Shell: We can run commands here, and the results of the commands will be displayed in the Shell immediately. We also can see outputs of our code in the Shell window.

4.Interpreter: Here you can select the type of interpreter to compile the program. Click Python 3.7.9, find MicroPython (Raspberry pi Pico) in the pop-up menu, and click OK to switch the interpreter to Pico interpreter. You can also click "Tools>>>Options>>>Interpreter" to select.

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_6.png)
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_7.png)

#### 2.Connect Wio RP2040 Module
To connect the Wio RP2040 module, you need to correctly lead out the USB pins and connect them to the data cable. Use the data cable to connect the module to the computer, and then click the "Restart backend" button on the toolbar. If Wio RP2040 is successfully connected to the computer, you will see the MicroPython version information and device name in the Shell.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_8.png)

#### 3. Control I/O Pins
You can pull up the GP13 pin with the following code:
```
from machine import Pin, Timer

led = Pin(13, Pin.OUT)
Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    print(Counter)
    led.value(Counter%2)
    
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)


```
Press the play icon in the toolbar to run your code.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_9.png)
You can connect an LED light to the GP13 pin to detect whether the pin is normally driven.

## FAQ

### 1. I need the code to run automatically after startup. 

you need to rename the code to "main.py" and save it on the main control board. When the main control board restarts next time, it will automatically run the main.py program.

### 2. After running code with network functions, errors or crashes are reported if I run other programs.

You can click the RESET button of the main control board to restart the board, and then reconnect to the Thonny editor again to run other programs.

### 3. I want to see more sample programs/projects.

You can refer to the Wio RP2040 mini Dev Board wiki, there are more sample projects, and these projects are common.


## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>