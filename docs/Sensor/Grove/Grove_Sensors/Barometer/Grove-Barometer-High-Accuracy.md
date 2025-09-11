---
description: Grove - Barometer (High-Accuracy)
title: Grove - Barometer (High-Accuracy)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.webp
slug: /Grove-Barometer-High-Accuracy
last_update:
  date: 4/22/2025
  author: carla guo
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" alt="pir" width={600} height="auto" /></p>

This Grove - Barometer (High-Accuracy) Sensor features a HP206F high-accuracy chip to detect barometric pressure, Altimeter, and temperature. It can widely measure pressure ranging from 300mbar~1200mbar, with a resolution of 0.02mbar during the measurement.
The chip only accepts 1.8V to 3.6V input voltage. However, with outer circuit added, this module becomes compatible with 3.3V and 5V. Therefore, it can be used on Arduino/Seeeduino or Seeeduino Stalker without modification. It is designed to be connected directly to a micro-controller via the I2C bus.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Get One Now </font></span></strong></a>
</div>

## Features

- Digital two wire (I2C) interface
- Command-based Reading, Compensated (Optional)
- Programmable Events and Interrupt Controls
- Full Data Compensation
- Wide barometric pressure range
- Flexible supply voltage range
- Ultra-low power consumption
- Altitude Resolution down to 0.01 meter
- Temperature measurement included
- I2C Address: 0x76

:::note
    If you want to use multiplue I2C devices, please refer to [Software I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).
:::
:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Application Ideas

- High Precision Mobile Altimeter / Barometer
- Industrial Pressure and Temperature Sensor System
- Automotive Systems
- Personal Electronics Altimetry
- Adventure and Sports watches
- Medical Gas Control System
- Weather Station Equipment
- Indoor Navigation and Map Assist
- Heating, Ventilation, Air Conditioning

## Specifications

<div class="table-center">
<table align="center">
 <tr>
     <th style={{width:300, height:'auto'}}>Parameter</th>
      <th style={{width:300, height:'auto'}}>Description</th>
 </tr>
  <tr>
    <td>Supply Voltage</td>
    <td>1.8v~3.6v</td>
  </tr>
  <tr>
    <td>Operation Temperature Range</td>
    <td>-40℃~85℃</td>
  </tr>
  <tr>
    <td>Pressure Measurement Range</td>
    <td>300mbar~1200mbar</td>
  </tr>
  <tr>
    <td>Pressure Resolution</td>
    <td>0.02mbar</td>
  </tr>
  <tr>
    <td>Altitude Resolution</td>
    <td>0.2m</td>
  </tr>
  <tr>
    <td>Dimension</td>
    <td>20.4 × 41.8 × 9.7 mm</td>
  </tr>
</table>
</div>

## Platforms Supported

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Hardware Overview
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg) -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg" style={{width:700, height:'auto'}}/></div>

## Getting started

### Play with Arduino

Barometric condition is one of the criteria used to predict coming change in weather and altitude above sea level. Here is a demo to show you how to read the barometric data from this Grove - Barometer Sensor.

#### Hardware

- **Step 1.** Prepare the below stuffs:

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino V4.2</th>
   <th>Base Shield</th>
   <th>Grove-Barometer-High-Accuracy</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Step 2.** Connect Grove-Barometer-High-Accuracy to port **I2C** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::
<!--I2C-->
| seeeduino_v4 | Grove-Barometer-High-Accuracy  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### Software

**Step 1.** Download the [library](https://github.com/Seeed-Studio/Grove_Barometer_HP20x) from Github.

**Step 2.** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

**Step 3.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example -> Grove barometer HP20x -> HP20x_demo.

Here is the code

```c
/*
* Demo name  : HP20x_dev demo
* Usage      : I2C PRECISION BAROMETER AND ALTIMETER [HP206F hopeRF]
* Author     : Oliver Wang from Seeed Studio
* Version    : V0.2
* Change log : Add kalman filter 2014/04/04
               Update the chip to HP206F 2025/04/07
*/

#include <HP20x_dev.h>
#include <KalmanFilter.h>

#include "Arduino.h"
#include "Wire.h"

unsigned char ret = 0;

    /* Instance */
KalmanFilter t_filter;    //temperature filter
KalmanFilter p_filter;    //pressure filter
KalmanFilter a_filter;    //altitude filter


void setup()
{
    Serial.begin(9600);        // start serial for output

    Serial.println("****HP20x_dev demo by seeed studio****\n");
    Serial.println("Calculation formula: H = [8.5(101325-P)]/100 \n");
      /* Power up,delay 150ms,until voltage is stable*/
    delay(150);
      /* Reset HP20x_dev*/
    HP20x.begin();
    delay(100);

      /* Determine HP20x_dev is available or not*/
    ret = HP20x.isAvailable();
    if(OK_HP20X_DEV == ret)
    {
        Serial.println("HP20x_dev is available.\n");
    }
    else
    {
        Serial.println("HP20x_dev isn't available.\n");
    }

}


void loop()
{
    char display[40];
    if(OK_HP20X_DEV == ret)
    {
        Serial.println("------------------\n");
        long Temper = HP20x.ReadTemperature();
        Serial.println("Temper:");
        float t = Temper/100.0;
        Serial.print(t);
        Serial.println("C.\n");
        Serial.println("Filter:");
        Serial.print(t_filter.Filter(t));
        Serial.println("C.\n");

        long Pressure = HP20x.ReadPressure();
        Serial.println("Pressure:");
        t = Pressure/100.0;
        Serial.print(t);
        Serial.println("hPa.\n");
        Serial.println("Filter:");
        Serial.print(p_filter.Filter(t));
        Serial.println("hPa\n");

        long Altitude = HP20x.ReadAltitude();
        Serial.println("Altitude:");
        t = Altitude/100.0;
        Serial.print(t);
        Serial.println("m.\n");
        Serial.println("Filter:");
        Serial.print(a_filter.Filter(t));
        Serial.println("m.\n");
        Serial.println("------------------\n");
        delay(1000);
    }
}
```

**Step 4.** Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude.

### Play With Raspberry Pi

#### Hardware

- **Step 1.** Prepare the below stuffs:

<div class="table-center">
 <table align="center">
  <tr>
   <th>SRaspberry pi</th>
   <th>Grove Base Hat for Raspberry Pi</th>
   <th>Grove-Barometer-High-Accuracy</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Step 2.** Plug the Grove Base Hat for Raspberry Pi into Raspberry.
- **Step 3.** Connect Grove-Barometer-High-Accuracy  to **I2C** port of Grove Base Hat for Raspberry Pi.
- **Step 4.** Connect the Raspberry to PC through USB cable.

<!-- ![with_rpi](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Step 1.** Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#install-dependencies) to configure the development environment and install dependencies.

- **Step 2.** Git clone the Github repository.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
sudo pip3 install .
```

- **Step 3.** Excute below commands to use this sensor

```bash
sudo apt install python3-virtualenv
virtualenv -p python3 env
source env/bin/activate
cd ./grove.py/grove
python3 grove_i2c_hp206f_driver.py
```

Here is the code :

```python
#!/usr/bin/env python
#
# Library for interacting with Grove - HP20x sensor (used to measure temperature, pressure and altitude)
#
# This is the library for Grove Base Hat which used to connect grove sensors for raspberry pi.
#

'''
## License

The MIT License (MIT)

Grove Base Hat for the Raspberry Pi, used to connect grove sensors.
Copyright (C) [Your Company Name or Relevant Party] 

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
'''

import time
from grove.i2c import Bus

# Class for interacting with the HP20x sensor
class HP20x:
    def __init__(self):
        # Initialize the I2C bus on Raspberry Pi (bus 1)
        self.bus = Bus()
        # I2C address of the HP206F sensor, may need adjustment based on actual situation
        self.address = 0x76

        # I2C device ID when CSB PIN is at VDD level (address is 0x76)
        self.HP20X_I2C_DEV_ID = (0xEC) >> 1
        # I2C device ID when CSB PIN is at GND level (address is 0x77)
        self.HP20X_I2C_DEV_ID2 = (0XEE) >> 1
        # Soft reset command for the HP20x sensor
        self.HP20X_SOFT_RST = 0x06
        # Write conversion command for the HP20x sensor
        self.HP20X_WR_CONVERT_CMD = 0x40
        # Different oversampling rate (OSR) configurations for conversion
        self.HP20X_CONVERT_OSR4096 = 0 << 2
        self.HP20X_CONVERT_OSR2048 = 1 << 2
        self.HP20X_CONVERT_OSR1024 = 2 << 2
        self.HP20X_CONVERT_OSR512 = 3 << 2
        self.HP20X_CONVERT_OSR256 = 4 << 2
        self.HP20X_CONVERT_OSR128 = 5 << 2

        # Commands for reading pressure, altitude, temperature, etc.
        self.HP20X_READ_P = 0x30  # Read pressure command
        self.HP20X_READ_A = 0x31  # Read altitude command
        self.HP20X_READ_T = 0x32  # Read temperature command
        self.HP20X_READ_PT = 0x10  # Read pressure and temperature command
        self.HP20X_READ_AT = 0x11  # Read altitude and temperature command
        self.HP20X_READ_CAL = 0X28  # RE-CAL ANALOG command

        # Write register mode for the HP20x sensor
        self.HP20X_WR_REG_MODE = 0xC0
        # Read register mode for the HP20x sensor
        self.HP20X_RD_REG_MODE = 0x80

        # Set the oversampling rate configuration
        self.OSR_CFG = self.HP20X_CONVERT_OSR1024
        # Conversion time corresponding to the oversampling rate (in milliseconds)
        self.OSR_ConvertTime = 25

    def begin(self):
        # Send a soft reset command to the HP20x sensor
        self.HP20X_IIC_WriteCmd(self.HP20X_SOFT_RST)
        # Wait for 0.1 seconds to ensure the reset operation is completed
        time.sleep(0.1)

    def isAvailable(self):
        # Check if the HP20x sensor is available by reading the register at address 0x0F
        return self.HP20X_IIC_ReadReg(0x0F)

    def ReadTemperature(self):
        # Send a conversion command with the specified oversampling rate configuration
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # Wait for the conversion time (converted to seconds)
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # Read 3 bytes of raw temperature data from the sensor
        t_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_T, 3)
        # Combine the 3 bytes of data to form a single value
        t = t_raw[0] << 16 | t_raw[1] << 8 | t_raw[2]
        # Handle negative values using 2's complement
        if t & 0x800000:
            t |= 0xff000000
            us = (1 << 32)
            t = -1 * (us - t)
        # Return the temperature value in degrees Celsius (divided by 100)
        return t / 100.0

    def ReadPressure(self):
        # Send a conversion command with the specified oversampling rate configuration
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # Wait for the conversion time (converted to seconds)
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # Read 3 bytes of raw pressure data from the sensor
        p_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_P, 3)
        # Combine the 3 bytes of data to form a single value
        p = p_raw[0] << 16 | p_raw[1] << 8 | p_raw[2]
        # Handle negative values using 2's complement
        if p & 0x800000:
            p |= 0xff000000
        # Return the pressure value in hectopascals (divided by 100)
        return p / 100.0

    def ReadAltitude(self):
        # Send a conversion command with the specified oversampling rate configuration
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # Wait for the conversion time (converted to seconds)
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # Read 3 bytes of raw altitude data from the sensor
        a_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_A, 3)
        # Combine the 3 bytes of data to form a single value
        a = a_raw[0] << 16 | a_raw[1] << 8 | a_raw[2]
        # Handle negative values using 2's complement
        if a & 0x800000:
            a |= 0xff000000
            us = (1 << 32)
            a = -1 * (us - a)
        # Return the altitude value in meters (divided by 100)
        return a / 100.0

    def HP20X_IIC_WriteCmd(self, uCmd):
        # Write a command byte to the specified I2C address
        self.bus.write_byte(self.address, uCmd)

    def HP20X_IIC_ReadReg(self, bReg):
        # Read a byte from the specified register address
        return self.bus.read_byte_data(self.address, bReg | self.HP20X_RD_REG_MODE)


# Class representing the Kalman filter
class KalmanFilter:
    def __init__(self):
        # Process noise covariance
        self.q = 0.01
        # Measurement noise covariance
        self.r = 0.1
        # Initial estimated value
        self.x = 0
        # Initial estimated error covariance
        self.p = 1
        # Initial Kalman gain
        self.k = 0

    def Filter(self, measurement):
        # Prediction step: Update the estimated error covariance
        self.p = self.p + self.q
        # Update step: Calculate the Kalman gain
        self.k = self.p / (self.p + self.r)
        # Update step: Update the estimated value based on the measurement
        self.x = self.x + self.k * (measurement - self.x)
        # Update step: Update the estimated error covariance
        self.p = (1 - self.k) * self.p
        # Return the filtered estimated value
        return self.x


# Kalman filter for temperature data
t_filter = KalmanFilter()
# Kalman filter for pressure data
p_filter = KalmanFilter()
# Kalman filter for altitude data
a_filter = KalmanFilter()

# Create an instance of the HP20x sensor
hp20x = HP20x()


# Function to simulate the setup process
def setup():
    print("****HP20x_dev demo by seeed studio****\n")
    print("Calculation formula: H = [8.5(101325-P)]/100 \n")
    # Wait for 0.15 seconds after power-on to stabilize the voltage
    time.sleep(0.15)
    # Initialize the HP20x sensor
    hp20x.begin()
    # Wait for 0.1 seconds
    time.sleep(0.1)
    # Check if the HP20x sensor is available
    ret = hp20x.isAvailable()
    if ret:
        print("HP20x_dev is available.\n")
    else:
        print("HP20x_dev isn't available.\n")
    return ret


# Function to simulate the loop process
def loop(ret):
    if ret:
        while True:
            print("------------------\n")
            # Read the temperature value from the HP20x sensor
            temper = hp20x.ReadTemperature()
            print("Temper:")
            print(f"{temper}C.\n")
            print("Filter:")
            # Apply the Kalman filter to the temperature value
            print(f"{t_filter.Filter(temper)}C.\n")

            # Read the pressure value from the HP20x sensor
            pressure = hp20x.ReadPressure()
            print("Pressure:")
            print(f"{pressure}hPa.\n")
            print("Filter:")
            # Apply the Kalman filter to the pressure value
            print(f"{p_filter.Filter(pressure)}hPa\n")

            # Read the altitude value from the HP20x sensor
            altitude = hp20x.ReadAltitude()
            print("Altitude:")
            print(f"{altitude}m.\n")
            print("Filter:")
            # Apply the Kalman filter to the altitude value
            print(f"{a_filter.Filter(altitude)}m.\n")
            print("------------------\n")
            # Wait for 1 second before the next reading
            time.sleep(1)


if __name__ == "__main__":
    # Perform the setup process
    ret = setup()
    # Start the loop process if the sensor is available
    loop(ret)
    
```

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High_Accuracy_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle]** [Grove_Barometer_High-Accuracy_v1.0_sch_pcb Eagle File](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High_Accuracy_ v1.0_sch_pcb.zip)
- **[Datasheet]** [HP206F Datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/HP206F_Datasheet.pdf)
- **[Library]** [Github repository for Grove_Barometer_HP20x with arduino](https://github.com/Carla-Guo/Grove_Barometer_HP20x)

## Projects

**Smart Crops**: Implementing IoT in Conventional Agriculture!
Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## Tech Support & Product Discussion

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
