---
title: Get Started with Wio RP2040 mini Dev Board
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/
slug: /Wio_RP2040_mini_Dev_Board-Onboard_Wifi
last_update:
  date: 01/11/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_1.jpg)

Wio RP2040 mini Dev Board is a development board based on Wio RP2040 module with wireless function, supporting MicroPython programming. It has a dual-core 133MHz RP2040 cits hip, which is a low-power microcontroller with wireless functions. With powerful performance and small size, it is a perfect option for various IOT projects development. 


The board has rich interfaces, including 28 GPIO PINs (19 PINs support PIO and PWM), 2 UART, 4 ADC, 2 SPI, 2 I2C. Some pins can be multiplexed, such as GP12 and GP13 with I2C, SPI, UART functions. That's why 28 GPIO PINs can achieve more I/O Pins and interfaces. Wio RP2040 mini wireless development board supports a USB Type-C interface, which can supply power and download code. In addition to the onboard power LED light, we also added a  user-controllable LED (it is connected to the GP13 pin). A RESET button (the screen is printed as "RUN" on the board) and a BOOT button (which can be used to re-upload the firmware).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)
## Key Features


- **Powerful CPU:** 
   - dual-core 133MHZ RP2040 processor and 264KB SRAM, 2MB Flash
- **Reliable wireless connection:** 
   - using powerful wifi chip, supporting 2.4~2.4835 GHz frequency and Ap&Station mode
- **Flexibility:**
   - compatible with Thonny editor
- **Easy project operation:** 
   - breadboard friendly
- **Multiple certifications:** 
   - FCC and CE Certified
- **Support programming languages:**
   - MicroPython



## Specification
| Name | Details |
| --- | --- |
| Processors | Dual Cortex M0+ processors, up to 133 MHz |
| SRAM | 264KB |
| Flash | 2MB |
| Wireless connectivity | 2.4〜2.4835 GHz；IEEE802.11 b/g/n；Ap & Station |
| GPIO，PIO and PWM Pins | 20 |
| I2C  | 2 |
| SPI | 2 |
| UART | 2 |
| ADC | 4 |
| Power/Download  | Type-C |
| Power Supply | 5V DC |
| Size | 25.8 x 45.5mm |

## Hardware Overview
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_3.png)
## Pinout Diagram
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_4.png)

:::note
		I/O pins: The MCU runs at 3.3V. If the voltage input connected to the general-purpose I/O pin is higher than 3.3V, it may cause damage to the chip. Please pay attention to use, do not lift the shielding cover.
:::
## Getting Started
The main control board has built-in MicroPython firmware, so users can directly connect to the Thonny code editor. If your firmware is damaged or you want to replace it with other firmware, you can download [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) to the computer. Press and hold the BOOT button of the RP2040 main control board and then connect with the USB cable. At this time, the computer will have an extra removable disk, and then drag the firmware you downloaded to the removable disk to complete the firmware update.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)
### Hardware requirements

- Wio RP2040 mini Dev Board x 1
- Computer x 1
- USB Type-C cable x 1

Connect the Wio RP2040 mini Dev Board to the computer via the USB cable, and the red LED power indicator on the board should light up.

| Firmware version            | Update Log  | Download|
|-----------------------|--------------|---------|
|V1.15.1|The first official version|[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2)|
|V1.15.2|Fix the stability of the Socket and add up the error message of connection failure|[firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2)|
|V1.15.3|Rename the original function 'wait_msg()' to 'check_msg()' function, and add new 'wait_msg()' function.The main difference between them is that original 'wait_msg' function will block the program from executing when it hasn’t 'waite' for the data. And yet the 'check_msg()' function will only detect whether the data is received. When it does, it will execute the callback, and if it doesn't,the program will still continue to execute.|[firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2)|


:::note
       The firmware version used in the wiki tutorial is V1.15.1.
       If you use a new version of the firmware, please refer to the firmware update log to modify the sample code.
:::


## Software
#### 1. Install Thonny 
Easy to get started. Thonny comes with Python 3.7 built-in, so just one simple installer is needed and you're ready to learn to program. First, click [Thonny.org](https://thonny.org/) to enter the download page. In the upper right corner of the page, select the Thonny installation package according to your operating system to download.  Double-click the installation package you downloaded to open it, and install it according to the steps.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_6.png)

Now that you have Thonny installed, open the application. You should see the main interface of Thonny: 

![1.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_7.png)
The main interface of Thonny is very simple, divided into the following four parts:

1.Toolbar: basic common tools, such as new, open, save, run the current script, stop, etc. 

2.Code editor: Thonny's core area, where we will write Python/MicroPython code.  

3.Shell: We can run commands here, and the results of the commands will be displayed in the Shell immediately. We also can see outputs of our code in the Shell window.

4.Interpreter: Here you can select the type of interpreter to compile the program. Click Python 3.7.9, find MicroPython (Raspberry pi Pico) in the pop-up menu, and click OK to switch the interpreter to Pico interpreter. You can also click "Tools>>>Options>>>Interpreter" to select. 

![2.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_8.png)
![3.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_9.png)
#### 2.Connect Wio RP2040 mini Dev Board
Use the data cable to connect the development board to the computer, and then click the "Restart backend" button on the toolbar. If Wio RP2040 is successfully connected to the computer, you will see the MicroPython version information and device name in the Shell.
![4.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_10.png)
#### 3.Light up the onboard LED light.
Because the PIN13 of the development board is connected to an LED light, we can turn on LED light by pulling up the PIN13 pin. Next, click "File" and select "New File" to create a new program file, and then write the following code:
```python
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
​

**Press the play icon in the toolbar to run your code.**
![5.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_11.png)
If it works well, you will see the LED light turn on and off once a second. And the output of the increasing number will be displayed in the Shell. 
![6.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_12.png)


## FAQ


#### 1.I need the code to run automatically after startup. 
you need to rename the code to "main.py" and save it on the main control board. When the main control board restarts next time, it will automatically run the main.py program.


#### 2.After running code with network functions, errors or crashes are reported if I run other programs.
You can click the RESET button of the main control board to restart the board, and then reconnect to the Thonny editor again to run other programs.
## Resourses

- **[BRD]** [Wio_RP2040 mini v1.1](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.brd)

- **[PDF]** [Wio_RP2040 mini v1.1.pdf](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.pdf)

- **[SCH]** [Wio_RP2040 mini v1.1.sch](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.sch)


## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>


