---
name: XIAO RP2040
category: Development Board
bzurl: 
prodimagename:
surveyurl: 
sku: 102010328
tags:
---

# **XIAO RP2040 with MicroPython**

## **What is MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) is a Python interpreter (with partial native code compilation feature). It provides a subset of Python 3.5 features, implemented for embedded processors and constrained systems. Read more about the differences to CPython [here](https://github.com/micropython/micropython/wiki/Differences).

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png)

## **Get Started with [MicroPython](https://github.com/micropython/micropython/wiki)**

Because the XIAO RP2040 uses the same chip as the Raspberry Pi Pico (RP2040), Therefore, XIAO RP2040 is compatible with [Pico's MicroPython UF2 files](https://www.raspberrypi.org/documentation/microcontrollers/#getting-started-with-micropython). You can [click here](https://www.raspberrypi.org/documentation/microcontrollers/#getting-started-with-micropython) to jump to the UF2 download screen for Raspberry Pi Pico.

Once the download is complete, connect the XIAO RP2040 to your computer via the data cable. Then hold down the BOOT button and press the RUN button. This will set the XIAO RP2040 to BOOT mode and you will have an extra removable disk on your computer. Please drag the downloaded [Pico's MicroPython UF2 files](https://www.raspberrypi.org/documentation/microcontrollers/#getting-started-with-micropython) to a removable disk, it will reboot and now you can begin your MicroPython journey!

## **[MicroPython](https://github.com/micropython/micropython/wiki)** Pins

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-Pin.jpg)

## Install Thonny editor

Easy to get started. Thonny comes with Python 3.7 built-in, so just one simple installer is needed and you're ready to learn to program. First, click Thonny.org to enter the download page. In the upper right corner of the page, select the Thonny installation package according to your operating system to download.  Double-click the installation package you downloaded to open it, and install it according to the steps.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png)

Now that you have Thonny installed, open the application. You should see the main interface of Thonny:

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_7.png)

The main interface of Thonny is very simple, divided into the following four parts:

- 1.Toolbar: basic common tools, such as new, open, save, run the current script, stop, etc.

- 2.Code editor: Thonny's core area, where we will write Python/MicroPython code.  

- 3.Shell: We can run commands here, and the results of the commands will be displayed in the Shell immediately. We also can see outputs of our code in the Shell window.

- 4.Interpreter: Here you can select the type of interpreter to compile the program. Click Python 3.7.9, find MicroPython (Raspberry pi Pico) in the pop-up menu, and click OK to switch the interpreter to Pico interpreter. You can also click "Tools>>>Options>>>Interpreter" to select.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png)

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png)

## **Connect XIAO RP2040**

Use the data cable to connect the development board to the computer, and then click the "Restart backend" button on the toolbar. If XIAO RP2040 is successfully connected to the computer, you will see the MicroPython version information and device name in the Shell. 

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_10.png)

### **Light up the onboard LED light**

Because the P25 of the development board is connected to an LED light, we can turn on LED light by pulling up the P25 pin. Next, click "File" and select "New File" to create a new program file, and then write the following code:

```c++
from machine import Pin, Timer
 
led = Pin(25, Pin.OUT)
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

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_12.png)

If it works well, you will see the LED light turn on and off once a second. And the output of the increasing number will be displayed in the Shell. 

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png)

### RGB LED

This project needs to use the [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) library to control RGB LED adjustable color lights. After downloading the library file and saving it in XIAO RP2040, we can start to write the program.

```c++
from ws2812 import WS2812
import utime
import machine
power = machine.Pin(11,machine.Pin.OUT)
power.value(1)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 150, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
BLUE = (0, 0, 255)
PURPLE = (180, 0, 255)
WHITE = (255, 255, 255)
COLORS = (BLACK, RED, YELLOW, GREEN, CYAN, BLUE, PURPLE, WHITE)

led = WS2812(12,1)#WS2812(pin_num,led_count)

while True:
    print("Beautiful color")
    for color in COLORS: 
        led.pixels_fill(color)
        led.pixels_show()
        utime.sleep(0.2)
```
Results show:

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png)

### **IIC**

In this project,  Grove - [OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) was used to demonstrate IIC function.

**Wiring**

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png)

Download the [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py) library and save it in XIAO RP2040, then write the following code and run it.

```c++
from ssd1306 import SSD1306_I2C
from machine import Pin, I2C
from time import sleep

i2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)#Grove - OLED Display 0.96" (SSD1315)
oled = SSD1306_I2C(128, 64, i2c)

while True:  
    oled.fill(0)#clear
    oled.text("Hello,World!",0,0)
    oled.show()
    #sleep(0.5)
```
Results show:

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png)

Some additional libraries and sample code:

[XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)















































