---
description: Seeed Studio XIAO RP2040 with MicroPython
title: Seeed Studio XIAO RP2040 with MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-with-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# **Seeed Studio XIAO RP2040 with MicroPython**

## **Introduction of MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) is a Python interprer with a partial native code compilation feature. It provides a subset of Python 3.5 features, implemented for embedded processors and constrained systems. It is different from CPython and you can read more about the differences [here](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## **Getting Started**

First, we are going to connect the Seeed Studio XIAO RP2040 to the computer and upload a simple code from MicroPython to check whether the board is functioning well.

### **Hardware Setup**

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) x1
- Tpye-C cable x1
- PC x1

### **Software Setup**

- **Step 1**. Download and Install the latest version of [Thonny editor](https://thonny.org/) according to your operating system

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Step 2**. Launch the Thonny

- **Step 3**. Click **"Tools-->Options"** to open the settings.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Step 4**. Chose the "Interpreter" interface and select the device as **"MicroPython(Raspberry Pi Pico)"** and the port as **"Try to detect prot automatically"**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png" /></div>

### **Connect Seeed Studio XIAO RP2040 to the PC and Light it up**

- **Step 1**. Press and hold the "BOOT" button and then connect the Seeed Studio XIAO RP2040 to the PC through the Type-C cable. If it works well, there is an "RPI-RP2" desk shown on the PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **Step 2**. Click **Install or update MicroPython**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/installandupdate.png" /></div>

It will then automatically search for the device and display it on the Target Volume. In the version selection in Micropython below, we just leave the default.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/chooseversion.png" /></div>

Click on the Install button and close this page when the installation status says Done. The following information will be shown on the interface once the firmware is complete.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk3.png" /></div>

- **Step 3**. Copy the following codes to Thonny.

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

- **Step 4**. Upload the codes by clicking the "Run current script" button. For the first time, Thonny will ask where you want to save your codes file. Both **This Computer** and **Raspberry Pi Pico** are fine.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

If it works well, you will see the LED light turn on and off once a second. And the output of the increasing number will as well be displayed in the Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png" /></div>

The connection is commplete and now we can proceed to the other projects.

## **Light up RGB LED on the Seeed Studio XIAO RP2040**

There is an RGB LED equipped in the Seeed Studio XIAO RP2040 and we are going to light it up by MicroPython. It is required a third-party library so we need to add an additional library first.

- **Step 1**. Download the [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) library and open it with Thonny.

- **Step 2**. Click "File-->Save as" and save the library.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Chose the "Raspberry Pi Pico" as the location we save.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

Make sure the saved file name is "ws2812.py", otherwise it will not work.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png" /></div>

- **Step 3**. Copy the following codes to Thonny.

```cpp
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

- **Step 4**. Upload the codes by clicking the "Run current script" button. For the first time, Thonny will ask where you want to save your codes file. Both **This Computer** and **Raspberry Pi Pico** are fine.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

If it works well, you will see the RGB LED light convert and flash the lights. And the output of the text "Beautiful Color" will as well be displayed in the Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## **Connect with Seeed Studio XIAO RP2040 with Display through IIC**

In this project, we are going to connect [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) through the IIC interface to demonstrate the IIC function on the Seeed Studio XIAO RP2040.

**Hardware Connect**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Step 1**. Download the [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py) library and open it with Thonny.

- **Step 2**. Click "File-->Save as" and save the library in the "Raspberry Pi Pico"

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Chose the "Raspberry Pi Pico" as the location we save.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

Make sure the saved file name is "ssd1306.py", otherwise it will not work.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk8.png" /></div>

- **Step 3**. Copy the following codes to Thonny.

```cpp
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

- **Step 4**. Upload the codes by clicking the "Run current script" button. For the first time, Thonny will ask where you want to save your codes file. Both **This Computer** and **Raspberry Pi Pico** are fine.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

If it works well, you will see the text "Hello,World!" displayed on the screen.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## Additional Resources

Some additional libraries and sample codes are here:

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

## Tech support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
