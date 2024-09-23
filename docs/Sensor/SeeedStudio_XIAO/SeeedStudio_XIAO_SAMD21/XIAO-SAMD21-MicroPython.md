---
description: Seeed Studio XIAO SAMD21 with MicroPython
title: MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SAMD21-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# **Seeed Studio XIAO SAMD21 with MicroPython**

## **Introduction of MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) is a Python interprer with a partial native code compilation feature. It provides a subset of Python 3.5 features, implemented for embedded processors and constrained systems. It is different from CPython and you can read more about the differences [here](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>


## **Getting Started**

First, we are going to connect the Seeed Studio XIAO SAMD21 to the computer and upload a simple code from MicroPython to check whether the board is functioning well.

### **Hardware Setup**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Type-C cable x1
- PC x1

### **Software Setup**

- **Step 1**. Download and Install the latest version of [Thonny editor](https://thonny.org/) according to your operating system

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>


- **Step 2**. Launch the Thonny

- **Step 3**. Click **"Tools-->Options"** to open the settings.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>


- **Step 4**. Chose the "Interpreter" interface and select the device as **"MicroPython(generic)"** and the port as **"Try to detect port automatically"**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/1.jpg" /></div>


### **Connect Seeed Studio XIAO SAMD21 to the PC and Light it up**

- **Step 1**. Press and hold the "BOOT" button and then connect the Seeed Studio XIAO SAMD21 to the PC through the Type-C cable. If it works well, there is an "Arduino" desk shown on the PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>


- **Step 2**. Flash the firmware

For windows:

Copy the [Seeed XIAO SAMD21 firmware for MicroPython Support ](https://micropython.org/resources/firmware/SEEED_XIAO-20220618-v1.19.1.uf2) and place it in this folder

For Linux:

```bash
wget "https://micropython.org/resources/firmware/SEEED_XIAO-20220618-v1.19.1.uf2"
cp SEEED_XIAO-20220618-v1.19.1.uf2 /media/$USER/Arduino/
```

It is also possible to [compile your own firmware](https://wiki.seeedstudio.com/Compiling_MicroPython_for_embedded_devices/) in order to ensure security and support for the latest features, but this is not necessary.

## Software Development

### SEEED XIAO SAMD21 pin assignment table

|Pin|GPIO|Xiao Pin name|IRQ|ADC|
|-|--|---|--|---|
|2|PA02|0|2|0| * | * | * | * |
|4|PA04|1|4|4| * | * | * | * |
|10|PA10|2|10|18| * | * | * | * | 
|11|PA11|3|11|19| * | * | * | * |
|8|PA08|4|*|16| * | * | * | * |
|9|PA09|5|9|17| * | * | * | * |
|40|PB082|6|8|2| * | * | * | * |
|41|PB09|7|9|3| * | * | * | * |
|7|PA07|8|7|7| * | * | * | * |
|5|PA05|9|5|5| * | * | * | * |
|6|PA06|10|6|6| * | * | * | * |
|18|PA18|RX_LED|2|*| * | * | * | * |
|30|PA30|SWCLK|10|*| * | * | * | * |
|31|PA31|SWDIO|11|*| * | * | * | * |
|19|PA19|TX_LED|3|*| * | * | * | * |

### Upload your code

Upload the codes by clicking the "Run current script" button. For the first time, Thonny will ask where you want to save your codes file. Both **This Computer** and **MicroPython device** are fine.

If you want to use the program offline, you should save the program to XIAO SAMD21

Press and hold Ctrl + Shift + S at the same time , then select save to **MicroPython device** 

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>


### GPIO TEST (LED)

We need to prepare:
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

Copy the following codes to Thonny.

We can see that the blue RX_LED is lit up and blinks once per second

```python
from machine import Pin, Timer
 
led = Pin(18, Pin.OUT)
Counter = 0
Fun_Num = 0
 
def fun(tim):
    global Counter
    Counter = Counter + 1 
    print(Counter)
    led.value(Counter%2)
 
tim = Timer(-1)
tim.init(period=500, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/3.gif" /></div>

### GPIO Control Relays

We need to prepare:
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relay](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

output_4 = Pin(8, Pin.OUT)
detect_1 = Pin(4, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)
Counter = 0
     
def fun(tim):
    global Counter
    Counter = Counter + 1
    output_4.value(Counter%2)
    print(Counter%2,detect_1.value())
    if detect_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)
 
tim = Timer(-1)
tim.init(period=200, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video></div>


### Human detection for automatic control

We need to prepare:

- [Doppler radar for human detection](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relay](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

led = Pin(8, Pin.OUT)

input_value_1 = Pin(4, Pin.IN, Pin.PULL_UP)
input_value_2 = Pin(10, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)

Counter = 0
Fun_Num = 0
     
def fun(tim):
    global Counter
    Counter = Counter + 1
    led.value(Counter%2)
    print(input_value_1.value(),input_value_2.value())
    if input_value_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)
 
tim = Timer(-1)
tim.init(period=50, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/5.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video></div>


### I2C Support

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(9), sda=Pin(8), freq=100000)
devices = i2c.scan()
for device in devices:  
    print("Decimal address: ",device," | Hexa address: ",hex(device))

i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51
i2c.writeto(0x51, 'a') # write 'a' to device with address 0x51
print(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51
i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4)) 

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/8.png" /></div>


Familiarity with micropython allows you to do more , we are looking forward to creating more value for you. Feel free to share your projects with us too!

## MicroPython Device Console

Our partner **Neil** has written a command line console program for XIAO using MicroPython. With this programme you can easily upload, download and delete files. We thank him for his contribution to XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div>

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
