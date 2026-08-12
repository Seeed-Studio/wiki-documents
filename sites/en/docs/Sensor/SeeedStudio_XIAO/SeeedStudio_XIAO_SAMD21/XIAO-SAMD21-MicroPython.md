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
createdAt: '2023-01-16'
updatedAt: '2025-12-04'
url: https://wiki.seeedstudio.com/XIAO-SAMD21-MicroPython/
---

# **Seeed Studio XIAO SAMD21 with MicroPython**

## **Introduction of MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) is a Python interprer with a partial native code compilation feature. It provides a subset of Python 3.5 features, implemented for embedded processors and constrained systems. It is different from CPython and you can read more about the differences [here](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## Getting Started

First, we are going to connect the Seeed Studio XIAO SAMD21 to the computer and upload a simple code from MicroPython to check whether the board is functioning well.

### Hardware Setup

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Type-C cable x1
- PC x1

### Flash the Firmware

#### For XIAO SAMD21

- **Step 1**. Press and hold the **BOOT** button and then connect the Seeed Studio XIAO SAMD21 to the PC through the Type-C cable. If it works well, there is an **Arduino** disk shown on the PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **Step 2**. Flash the firmware

Just go to the official [XIAO SAMD21 MicroPython Firmware](https://micropython.org/download/SEEED_XIAO_SAMD21/) and download the latest firmware

It is also possible to [compile your own firmware](https://wiki.seeedstudio.com/Compiling_MicroPython_for_embedded_devices/) in order to ensure security and support for the latest features, but this is not necessary.
<br/>
#### For XIAO SAMD21 Plus

- **Step 1**. Connect the XIAO SAMD21 Plus to your PC with a Type‑C cable, then press the Reset button twice consecutively. If everything works correctly, an **Arduino** disk will appear on your PC.

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **Step 2**. Click the link below to download the firmware, then drag‑and‑drop the `.uf2` file into the **Arduino** disk to finish firmware flashing.
[XIAO SAMD21 Plus MicroPython Firmware](https://files.seeedstudio.com/wiki/XIAO_SAMD/img/xiao-samd21-plus-micropython.zip)

### Software Setup

- **Step 1**. Download and Install the latest version of [Thonny editor](https://thonny.org/) according to your operating system

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Step 2**. Launch the Thonny

- **Step 3**. Click **Tools-->Options** to open the settings.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Step 4**. Chose the **Interpreter** interface and select the device as **MicroPython(generic)** and the port as **Board CDC @ Port**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/mpy_1.png" /></div>

## Software Development

### SEEED XIAO SAMD21 Series pin assignment table

| MicroPython Pin Name | XIAO SAMD21 GPIO (ID) | XIAO SAMD21 Plus GPIO (ID) | IRQ<br />SAMD21 / Plus | ADC | Function |
| :--- | :---: | :---: | :---: | :---: | :--- |
| D0 / A0 / A0_D0 | PA02 (2) | PA02 (2) | 2 / 2 | 0 | GPIO, ADC, DAC |
| D1 / A1 / A1_D1 | PA04 (4) | PA04 (4) | 4 / 4 | 4 | GPIO, ADC |
| D2 / A2 / A2_D2 | PA10 (10) | PA10 (10) | 10 / 10 | 18 | GPIO, ADC |
| D3 / A3 / A3_D3 | PA11 (11) | PA11 (11) | 11 / 11 | 19 | GPIO, ADC |
| D4 / A4 / A4_D4 / SDA | PA08 (8) | PA08 (8) | NMI / NMI | 16 | GPIO, ADC, I2C SDA |
| D5 / A5 / A5_D5 / SCL | PA09 (9) | PA09 (9) | 9 / 9 | 17 | GPIO, ADC, I2C SCL |
| D6 / A6 / A6_D6 / TX | PB08 (40) | PB08 (40) | 8 / 8 | 2 | GPIO, ADC, UART TX |
| D7 / A7 / A7_D7 / RX | PB09 (41) | PB09 (41) | 9 / 9 | 3 | GPIO, ADC, UART RX |
| D8 / A8 / A8_D8 / SCK | PA07 (7) | PA07 (7) | 7 / 7 | 7 | GPIO, ADC, SPI SCK |
| D9 / A9 / A9_D9 / MISO | PA05 (5) | PA05 (5) | 5 / 5 | 5 | GPIO, ADC, SPI MISO |
| D10 / A10 / A10_D10 / MOSI | PA06 (6) | PA06 (6) | 6 / 6 | 6 | GPIO, ADC, SPI MOSI |
| D11 / TX_LED | PA19 (19) | — | 3 / — | — | Original-board TX LED |
| D12 / RX_LED | PA18 (18) | PA28 (28) | 2 / 8 | — | Original RX LED; Plus expansion GPIO |
| D13 / USER_LED / SCL1 | PA17 (17) | PA17 (17) | 1 / 1 | — | Original user LED; Plus I2C1 SCL |
| D14 / SDA1 | — | PA16 (16) | — / 0 | — | Plus I2C1 SDA |
| D15 | — | PA15 (15) | — / 15 | — | Plus expansion GPIO |
| D16 | — | PA14 (14) | — / 14 | — | Plus expansion GPIO |
| D17 | — | PA13 (13) | — / 13 | — | Plus expansion GPIO |
| D18 | — | PA12 (12) | — / 12 | — | Plus expansion GPIO |
| D19 / I2S_SD | — | PA19 (19) | — / 3 | — | Plus GPIO and I2S data |
| D20 / I2S_SCK | — | PA20 (20) | — / 4 | — | Plus GPIO and I2S clock |
| D21 / I2S_WS | — | PA21 (21) | — / 5 | — | Plus GPIO and I2S word select |
| D22 | — | PB10 (42) | — / 10 | — | Plus expansion GPIO |
| D23 | — | PB11 (43) | — / 11 | — | Plus expansion GPIO |
| D24 | — | PB23 (55) | — / 7 | — | Plus expansion GPIO |
| D25 | — | PA23 (23) | — / 7 | — | Plus expansion GPIO |
| D26 | — | PA22 (22) | — / 6 | — | Plus expansion GPIO |
| D27 | — | PA18 (18) | — / 2 | — | Plus expansion GPIO |
| RGB_LED | — | PA27 (27) | — / 15 | — | Addressable RGB LED data |
| BUTTON | — | PB22 (54) | — / 6 | — | Plus user button |
| SWCLK | PA30 (30) | PA30 (30) | 10 / 10 | — | SWD clock |
| SWDIO | PA31 (31) | PA31 (31) | 11 / 11 | — | SWD data |

:::note
The number inside parentheses in GPIO (ID) refers to the MicroPython SAMD Pin ID, not the physical MCU package pin number.
:::

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

### DAC Support

Thank you to Aleksei Tertychnyi for submitting the code, all related functionalities were developed and contributed by him.

```python
from machine import Pin, Timer, DAC
 
led = Pin(18, Pin.OUT)
counter = 0

dac = DAC(0) #DAC on A0 output
 
def loop(tim):
    global counter
    led.value(counter%2)
    print('DAC value: ', end =" ")
    print(counter)
    dac.write(counter%1024)
    counter = counter + 1
 
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=loop)
```

Voltage on **pin A0** will start to gradually increase, after reaching maximum at appoximately *3.3V*, will drop to *0V* and cycle will repeat.

### ADC Support
ADC example MicroPython code:

```python
from machine import Pin, Timer, ADC
led = Pin(18, Pin.OUT)  # digital output for blinking
counter = 0             # simple counter for LED toggle

ADC_CONVERT_V = 1.0 / 65535.0  # conversion factor: raw ADC (16-bit) → voltage (vref=1.0V)

adc = ADC(4, vref=0)   # ADC reads on pin A4, using internal 1.0V reference
adcVoltage = 0.0       # variable to store measured voltage

def fun(tim):
    global counter, adcVoltage  # make sure we update the global variables
    counter += 1                # increment counter
    adcVoltage = adc.read_u16() * ADC_CONVERT_V  # read ADC and convert to voltage
    print(adcVoltage)           # print voltage to REPL
    led.value(counter % 2)      # toggle LED every callback (blink)

tim = Timer(-1)                    # create a virtual timer
tim.init(period=1000,              # callback period in milliseconds (1000 ms = 1 s)
         mode=Timer.PERIODIC,      # periodic callback
         callback=fun)             # function to call
```

## MicroPython Device Console

Our partner **Neil** has written a command line console program for XIAO using MicroPython. With this programme you can easily upload, download and delete files. We thank him for his contribution to XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div>

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
