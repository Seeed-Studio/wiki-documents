---
description: Grove - Digital Light Sensor
title: Grove - Digital Light Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Digital_Light_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" /></div>

This module is based on the I2C light-to-digital converter TSL2561 to transform light intensity to a digital signal. Different from traditional analog light sensor, as [Grove - Light Sensor](https://www.seeedstudio.com/depot/grove-light-sensorp-p-1253.html?cPath=144_148), this digital module features a selectable light spectrum range due to its dual light sensitive diodes: infrared and full spectrum.

We can switch among three detection modes to take your readings. They are infrared mode, full spectrum and human visible mode. When running under the human visible mode, this sensor will give you readings just close to your eye feelings.

<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## Version

| Product Version              | Changes                                                                                                                                                                                    | Released Date |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - Digital Light Sensor V1.1 | Initial                                                                                                                                                                                    | Oct 2015      |

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2102 Wireless Light Intensity Sensor with higher performance and robustness for light intensity detection. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) for your next successful industrial project.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td align="center"><font size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 Light</strong></a></td>
    </tr>
  </tbody></table>

## Features

- Selectable detection modes
- High resolution 16-Bit digital output at 400 kHz I2C Fast-Mode
- Wide dynamic range: 0.1 - 40,000 LUX
- Wide operating temperature range: -40°C to 85°C
- Programmable interrupt function with User-Defined Upper and lower threshold settings
- I2C Address  0x29

:::note
If you want to use multiplue I2C devices, please refer to [Software I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).
:::

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Specifications

| Items                      | Min  |  Typical |  Max  |  Unit |
|----------------------------|------|----------|-------|-------|
| Supply voltage, VDD        | 3.3  |     5    |  5.1  |   V   |  
| Operating temperature      | -30  |     \    |  70   |   ℃      |
| SCL,SDA input low voltage  | -0.5 |     \    |  0.8  |   V   |
| SCL,SDA input high voltage | 2.3  |     \    |  5.1  |   V   |

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Hardware Overview

**U1:** TSL2561 IC, Light-To-Digital Converter. Here is the Functional Block Diagram.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Functional_Block_Diagram_2.jpg" /></div>

- **Register Map**

  The TSL2561 is controlled and monitored by sixteen registers (three are reserved) and a command register accessed through the serial interface. These registers provide for a variety of control functions and can be read to determine results of the ADC conversions. The register set is summarised as shown below.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Register.jpg" /></div>

- **Spectrum Response Curve**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Spectral_responsivity.jpg" /></div>

  Two channels of the digital light sensor have different response characteristic. That's why you can choose its working mode by having both of them on or one of them off.

**U3:** XC6206MR332 IC, Positive Voltage Regulators.

**Q1,Q2:** BSN20 IC, N-channel Enhancement Mode Vertical D-MOS Transistor.

**SCL,SDA:** I2C Signal Interface

## Getting Started

:::note
If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4 | Base Shield | Grove - Digital light sensor |
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

- **Step 2.** Connect Grove - Digital light Sensor to **I2C** port of base shield.
- **Step 3.** Plug the base Shield into Arduino.
- **Step 4.** Connect Arduino to PC by using a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/arduino%20connection.jpg" /></div>

#### Software

- **Step 1.** Download the library from here [Digital Light Sensor Library](https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor/archive/master.zip);
- **Step 2.** Please follow [how to install an arduino library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) procedures to install library.
- **Step 3.** Open the code directly by the path: **File -> Example ->Digital_Light_Sensor->Digital_Light_Sensor**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/library%20example.jpg" /></div>

- Or copy below code to IDE and upload to Arduino.

```c  
/*
    Digital_Light_Sensor.ino
    A library for TSL2561

    Copyright (c) 2012 seeed technology inc.
    Author     : zhangkun
    Create Time:
    Change Log :

    The MIT License (MIT)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

#include <Wire.h>
#include <Digital_Light_TSL2561.h>
void setup()
{
  Wire.begin();
  Serial.begin(9600);
  TSL2561.init();
}

void loop()
{
  Serial.print("The Light value is: ");
  Serial.println(TSL2561.readVisibleLux());
  delay(1000);
}
```

- **Step 4.** Open the serial monitor to monitor the result.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Digital_Light_Sensor_Score_Picture.jpg" /></div>

### Play With Raspberry Pi

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - Digital light sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

- Follow [instruction](https://wiki.seeedstudio.com/GrovePi_Plus/) to configure the development environment.
- Plug the sensor to grovepi+ socket **I2C** by using a grove cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/pi%20connection.jpg" /></div>

#### Software

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.

- **Step 1.** Navigate to the demos' directory:

```
cd yourpath/GrovePi/Software/Python/grove_i2c_digital_light_sensor/
```

- **Step 2.** To see the code

```
nano grove_i2c_digital_light_sensor.py  # "Ctrl+x" to exit #
```

```py
#!/usr/bin/python
# TSL2561 I2C Light-To-Digital converter library for the Raspberry Pi.
# Datasheet: https://www.adafruit.com/datasheets/TSL2561.pdf
#
# This library is based on the work by Cedric Maion https://github.com/cmaion/TSL2561
#
# Read http://www.dexterindustries.com/topic/greehouse-project/ for the forum discussion about the sensor

from time import sleep
import smbus
from Adafruit_I2C import Adafruit_I2C
import RPi.GPIO as GPIO
from smbus import SMBus

TSL2561_Control = 0x80
TSL2561_Timing = 0x81
TSL2561_Interrupt = 0x86
TSL2561_Channel0L = 0x8C
TSL2561_Channel0H = 0x8D
TSL2561_Channel1L = 0x8E
TSL2561_Channel1H = 0x8F

TSL2561_Address = 0x29 #device address

LUX_SCALE = 14 # scale by 2^14
RATIO_SCALE = 9 # scale ratio by 2^9
CH_SCALE = 10 # scale channel values by 2^10
CHSCALE_TINT0 = 0x7517 # 322/11 * 2^CH_SCALE
CHSCALE_TINT1 = 0x0fe7 # 322/81 * 2^CH_SCALE

K1T = 0x0040 # 0.125 * 2^RATIO_SCALE
B1T = 0x01f2 # 0.0304 * 2^LUX_SCALE
M1T = 0x01be # 0.0272 * 2^LUX_SCALE
K2T = 0x0080 # 0.250 * 2^RATIO_SCA
B2T = 0x0214 # 0.0325 * 2^LUX_SCALE
M2T = 0x02d1 # 0.0440 * 2^LUX_SCALE
K3T = 0x00c0 # 0.375 * 2^RATIO_SCALE
B3T = 0x023f # 0.0351 * 2^LUX_SCALE
M3T = 0x037b # 0.0544 * 2^LUX_SCALE
K4T = 0x0100 # 0.50 * 2^RATIO_SCALE
B4T = 0x0270 # 0.0381 * 2^LUX_SCALE
M4T = 0x03fe # 0.0624 * 2^LUX_SCALE
K5T = 0x0138 # 0.61 * 2^RATIO_SCALE
B5T = 0x016f # 0.0224 * 2^LUX_SCALE
M5T = 0x01fc # 0.0310 * 2^LUX_SCALE
K6T = 0x019a # 0.80 * 2^RATIO_SCALE
B6T = 0x00d2 # 0.0128 * 2^LUX_SCALE
M6T = 0x00fb # 0.0153 * 2^LUX_SCALE
K7T = 0x029a # 1.3 * 2^RATIO_SCALE
B7T = 0x0018 # 0.00146 * 2^LUX_SCALE
M7T = 0x0012 # 0.00112 * 2^LUX_SCALE
K8T = 0x029a # 1.3 * 2^RATIO_SCALE
B8T = 0x0000 # 0.000 * 2^LUX_SCALE
M8T = 0x0000 # 0.000 * 2^LUX_SCALE



K1C = 0x0043 # 0.130 * 2^RATIO_SCALE
B1C = 0x0204 # 0.0315 * 2^LUX_SCALE
M1C = 0x01ad # 0.0262 * 2^LUX_SCALE
K2C = 0x0085 # 0.260 * 2^RATIO_SCALE
B2C = 0x0228 # 0.0337 * 2^LUX_SCALE
M2C = 0x02c1 # 0.0430 * 2^LUX_SCALE
K3C = 0x00c8 # 0.390 * 2^RATIO_SCALE
B3C = 0x0253 # 0.0363 * 2^LUX_SCALE
M3C = 0x0363 # 0.0529 * 2^LUX_SCALE
K4C = 0x010a # 0.520 * 2^RATIO_SCALE
B4C = 0x0282 # 0.0392 * 2^LUX_SCALE
M4C = 0x03df # 0.0605 * 2^LUX_SCALE
K5C = 0x014d # 0.65 * 2^RATIO_SCALE
B5C = 0x0177 # 0.0229 * 2^LUX_SCALE
M5C = 0x01dd # 0.0291 * 2^LUX_SCALE
K6C = 0x019a # 0.80 * 2^RATIO_SCALE
B6C = 0x0101 # 0.0157 * 2^LUX_SCALE
M6C = 0x0127 # 0.0180 * 2^LUX_SCALE
K7C = 0x029a # 1.3 * 2^RATIO_SCALE
B7C = 0x0037 # 0.00338 * 2^LUX_SCALE
M7C = 0x002b # 0.00260 * 2^LUX_SCALE
K8C = 0x029a # 1.3 * 2^RATIO_SCALE
B8C = 0x0000 # 0.000 * 2^LUX_SCALE
M8C = 0x0000 # 0.000 * 2^LUX_SCALE

# bus parameters
rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
 bus = smbus.SMBus(1)
else:
 bus = smbus.SMBus(0)
i2c = Adafruit_I2C(TSL2561_Address)

debug = False
cooldown_time = 0.005 # measured in seconds
packageType = 0 # 0=T package, 1=CS package
gain = 0        # current gain: 0=1x, 1=16x [dynamically selected]
gain_m = 1      # current gain, as multiplier
timing = 2      # current integration time: 0=13.7ms, 1=101ms, 2=402ms [dynamically selected]
timing_ms = 0   # current integration time, in ms
channel0 = 0    # raw current value of visible+ir sensor
channel1 = 0    # raw current value of ir sensor
schannel0 = 0   # normalized current value of visible+ir sensor
schannel1 = 0   # normalized current value of ir sensor


def readRegister(address):
 try:
  byteval = i2c.readU8(address)

  sleep(cooldown_time)
  if (debug):
   print("TSL2561.readRegister: returned 0x%02X from reg 0x%02X" % (byteval, address))
  return byteval
 except IOError:
  print("TSL2561.readRegister: error reading byte from reg 0x%02X" % address)
  return -1


def writeRegister(address, val):
 try:
  i2c.write8(address, val)

  sleep(cooldown_time)
  if (debug):
   print("TSL2561.writeRegister: wrote 0x%02X to reg 0x%02X" % (val, address))
 except IOError:

  sleep(cooldown_time)
  print("TSL2561.writeRegister: error writing byte to reg 0x%02X" % address)
  return -1

def powerUp():
 writeRegister(TSL2561_Control, 0x03)

def powerDown():
 writeRegister(TSL2561_Control, 0x00)

def setTintAndGain():
 global gain_m, timing_ms

 if gain == 0:
  gain_m = 1
 else:
  gain_m = 16

 if timing == 0:
  timing_ms = 13.7
 elif timing == 1:
  timing_ms = 101
 else:
  timing_ms = 402
 writeRegister(TSL2561_Timing, timing | gain << 4)

def readLux():
 sleep(float(timing_ms + 1) / 1000)

 ch0_low  = readRegister(TSL2561_Channel0L)
 ch0_high = readRegister(TSL2561_Channel0H)
 ch1_low  = readRegister(TSL2561_Channel1L)
 ch1_high = readRegister(TSL2561_Channel1H)

 global channel0, channel1
 channel0 = (ch0_high<<8) | ch0_low
 channel1 = (ch1_high<<8) | ch1_low

 sleep(cooldown_time)
 if debug:
  print("TSL2561.readVisibleLux: channel 0 = %i, channel 1 = %i [gain=%ix, timing=%ims]" % (channel0, channel1, gain_m, timing_ms))

def readVisibleLux():
 global timing, gain

 powerUp()
 readLux()

 if channel0 < 500 and timing == 0:
  timing = 1
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: too dark. Increasing integration time from 13.7ms to 101ms")
  setTintAndGain()
  readLux()

 if channel0 < 500 and timing == 1:
  timing = 2
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: too dark. Increasing integration time from 101ms to 402ms")
  setTintAndGain()
  readLux()

 if channel0 < 500 and timing == 2 and gain == 0:
  gain = 1
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: too dark. Setting high gain")
  setTintAndGain()
  readLux()

 if (channel0 > 20000 or channel1 > 20000) and timing == 2 and gain == 1:
  gain = 0
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: enough light. Setting low gain")
  setTintAndGain()
  readLux()

 if (channel0 > 20000 or channel1 > 20000) and timing == 2:
  timing = 1
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: enough light. Reducing integration time from 402ms to 101ms")
  setTintAndGain()
  readLux()

 if (channel0 > 10000 or channel1 > 10000) and timing == 1:
  timing = 0
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: enough light. Reducing integration time from 101ms to 13.7ms")
  setTintAndGain()
  readLux()

 powerDown()

 if (timing == 0 and (channel0 > 5000 or channel1 > 5000)) or (timing == 1 and (channel0 > 37000 or channel1 > 37000)) or (timing == 2 and (channel0 > 65000 or channel1 > 65000)):
  # overflow
  return -1

 return calculateLux(channel0, channel1)

def calculateLux(ch0, ch1):
 chScale = 0
 if timing == 0:   # 13.7 msec
  chScale = CHSCALE_TINT0
 elif timing == 1: # 101 msec
  chScale = CHSCALE_TINT1;
 else:           # assume no scaling
  chScale = (1 << CH_SCALE)

 if gain == 0:
  chScale = chScale << 4 # scale 1X to 16X

 # scale the channel values
 global schannel0, schannel1
 schannel0 = (ch0 * chScale) >> CH_SCALE
 schannel1 = (ch1 * chScale) >> CH_SCALE

 ratio = 0
 if schannel0 != 0:
  ratio = (schannel1 << (RATIO_SCALE+1)) / schannel0
 ratio = (ratio + 1) >> 1

 if packageType == 0: # T package
  if ((ratio >= 0) and (ratio <= K1T)):
   b=B1T; m=M1T;
  elif (ratio <= K2T):
   b=B2T; m=M2T;
  elif (ratio <= K3T):
   b=B3T; m=M3T;
  elif (ratio <= K4T):
   b=B4T; m=M4T;
  elif (ratio <= K5T):
   b=B5T; m=M5T;
  elif (ratio <= K6T):
   b=B6T; m=M6T;
  elif (ratio <= K7T):
   b=B7T; m=M7T;
  elif (ratio > K8T):
   b=B8T; m=M8T;
 elif packageType == 1: # CS package
  if ((ratio >= 0) and (ratio <= K1C)):
   b=B1C; m=M1C;
  elif (ratio <= K2C):
   b=B2C; m=M2C;
  elif (ratio <= K3C):
   b=B3C; m=M3C;
  elif (ratio <= K4C):
   b=B4C; m=M4C;
  elif (ratio <= K5C):
   b=B5C; m=M5C;
  elif (ratio <= K6C):
   b=B6C; m=M6C;
  elif (ratio <= K7C):
   b=B7C; m=M7C;

 temp = ((schannel0*b)-(schannel1*m))
 if temp < 0:
  temp = 0;
 temp += (1<<(LUX_SCALE-1))
 # strip off fractional portion
 lux = temp>>LUX_SCALE
 sleep(cooldown_time)
 if debug:
  print("TSL2561.calculateLux: %i" % lux)

 return lux

def init():
 powerUp()
 setTintAndGain()
 writeRegister(TSL2561_Interrupt, 0x00)
 powerDown()

def main():
 init()
 while (True):
  print("Lux: %i [Vis+IR=%i, IR=%i @ Gain=%ix, Timing=%.1fms]" % (readVisibleLux(), channel0, channel1, gain_m, timing_ms))
  sleep(1)

if __name__ == "__main__":
        main()
```

- **Step 3.** Run the demo.

```
sudo python3 grove_i2c_digital_light_sensor.py
```

- **Step 4.** Here is the Result.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Grovepi_digital_light_sensor_00.png" /></div>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Grove-Digital%20%20light%20%20sensor%20v1.0%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle]** [Grove - Digital Light Sensor Schematic](https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Grove-Digital%20%20light%20%20sensor%20v1.0%20eagle%20file.zip)
- **[PDF]** [Grove - Digital Light Sensor Sch PDF File](https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Digital%20light%20sensor%20v1.0%20Sch.pdf)
- **[PDF]** [Grove - Digital Light Sensor PCB PDF File](https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Digital%20light%20sensor%20v1.0%20PCB.pdf)
- **[Library]** [Library Github Grove-Digital Light](https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor/archive/master.zip)
- **[Datasheet]** [TSL2561 Datasheet](https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/TSL2561T.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Digital_Light_Sensor -->

## Projects

**Seeed LoRa IoTea Solution**: An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Intel Edison IoT Hydroponic Controller**: An IoT enabled Hydroponics Controller using the Intel Edison during the Boston IoT Hackathon.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/bltrobotics/intel-edison-iot-hydroponic-controller-d7132d/embed' width='350'></iframe>

**COI - Light Transmission Meter**: The finished product uses the light sensor provided in the Grove Starter Kit Plus to measure change in light intensity.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/DigitalFabber/coi-light-transmission-meter-8044fd/embed' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
