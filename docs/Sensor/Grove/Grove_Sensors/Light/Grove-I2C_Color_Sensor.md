---
description: Grove - I2C Color Sensor
title: Grove - I2C Color Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-I2C_Color_Sensor
last_update:
  date: 12/29/2025
  author: Brandy
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" /></div>

This module is based on the color sensor TCS3414CS with digital output I2C. Based on the 8\*2 array of filtered photodiodes and 16-bit analog-to-digital converters, you can measure the color chromaticity of ambient light or the color of objects. Of the 16 photodiodes, 4 have red filters, 4 have green filters, 4 have blue filters and 4 have no filter(clear). With the synchronization input pin, an external pulsed light source can provide precise synchronous conversion control.

:::note
Please note that the latest version V2.0 has replaced the IC with TCS3472 and the old library has also been updated, If you are using the V2.0 version, please use the [new library](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472).
:::





Features
--------

- Grove compatible interface
- 16-Bit digital output with I2C
- SYNC Input Synchronizes Integration Cycle to Modulated Light Sources
- Operating temperature range -40°C to 85°C
- Programmable interrupt function with User-Defined Upper and lower threshold settings
- RoHS Compliant

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

Specifications
-------------

| Parameter | Value/Range            |
|-----------|------------------------|
| PCB Size  | 2.0 cm \* 4.0 cm       |
| Interface | 2.0mm pitch pin header |
| VCC       | 3.3 - 6.0 V            |
| I2C Speed | 400 kHz                |

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Getting Started
---------------

Following documents help in getting the user started with Grove.

- [Preface - Getting Started](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [to Grove](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

### Hardware Connections

Grove products have an eco system and all have the same connector which can plug onto the Grove Base Shield. Connect this module to the I2C port of Base Shield. However, you can also connect Grove - I2C Color Sensor to Arduino without Base Shield by jumper wires.

| Arduino UNO | Grove - I2C Color Sensor |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

Software Installation
---------------------

Download Arduino and install Arduino driver

Getting Started with Seeeduino/Arduino

Demos
-----

This module can be used to detect the color of light source or the color of objects. When used to detect the color of the light source, the led switch should be turned off, and the light source should shine the sensor directly. When used to detect the color of things, the led should be on and you should put the object on the top of the enclosure closely. The theory of sensing the color of objects is Reflective Sensing Theory. Like the picture below.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Reflcect.jpg" /></div>

### Color Sensor Library

We have created a library to help you start playing quickly with the Seeeduino/Arduino, in this section we'll show you how to set up the library.

#### Setup

1. Download the [library code as a zip file](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor) from the Grove_I2C_Color_Sensor github page. If you are using the latest version V2.0(IC is TCS3472 ), please use this [new library](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
2. Unzip the downloaded file into your …/arduino/libraries.
3. Rename the unzipped folder "Color_Sensor"
4. Start the Arduino IDE (or restart if it is open).

#### Description of function

This is the most important/useful function in the library, we invite you to look at the .h and .cpp files yourself to see all the functions available.

##### Read RGB data through the library function

**readRGB(int \*red, int \*green, int \*blue)**

- **red:** The variable address to save R.
- **green:** The variable address to save G.
- **blue:** The variable address to save B.

```
void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // When turn on the color sensor LED, ledStatus = 1; When turn off the color sensor LED, ledStatus = 0.
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    //Read RGB values to variables.
        delay(300);
        Serial.print("The RGB value are: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
    }
}
```

### Color Sensor Examples/Applications

This example shows how to use features of Grove - I2C Color Sensor and display the detected color with a [Chainable RGB LED Grove](/Grove-Chainable_RGB_LED/).

:::note
If you haven't downloaded  <a href="https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED">Grove-Chainable RGB LED library</a> to your Arduino IDE before, please download and set up the library first.
:::

- Open File->Examples->Color_Sensor->example->ColorSensorWithRGB-LED sketch for a complete example, or copy and paste code below to a new Arduino sketch.

**Description**: This example can measure the color chromaticity of ambient light or the color of objects, and via Chainable RGB LED Grove, display the detected color.

You also can use other display modules to display the detected color by Grove - I2C Color Sensor.

```
#include <Wire.h>
#include <GroveColorSensor.h>
#include <ChainableLED.h>
 
#define CLK_PIN   7
#define DATA_PIN  8
#define NUM_LEDS  1            //The number of Chainable RGB LED
 
ChainableLED leds(CLK_PIN, DATA_PIN, NUM_LEDS);
 
void setup()
{
    Serial.begin(9600);
    Wire.begin();
}
 
void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // When turn on the color sensor LED, ledStatus = 1; When turn off the color sensor LED, ledStatus = 0.
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    //Read RGB values to variables.
        delay(300);
        Serial.print("The RGB value are: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
        for(int i = 0; i<NUM_LEDS; i++)
        {
            leds.setColorRGB(i, red, green, blue);
        }
    }
}
```

- Upload the code to the development board.
- Then Grove_-_Chainable_RGB_LED would display the color which is detected.

### Play With Raspberry Pi 

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove-I2C_Color_Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-I2C-Color-Sensor-p-854.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the  Grove-I2C_Color to the **I2C** port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/Color.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Enter the relevant virtual environment.

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **Step 3**. Excute below command to run the code.

- The following is to check thegrove_i2c_color_sensor_v2.py code.

```
less grove_i2c_color_sensor_v2.py
```

```python
import time
from grove.i2c import Bus


_CMD      = 0x80
_AUTO     = 0x20

_ENABLE   = 0x00
_ATIME    = 0x01
_WTIME    = 0x03
_AILT     = 0x04
_AIHT     = 0x06
_PERS     = 0x0C
_CONFIG   = 0x0D
_CONTROL  = 0x0F
_ID       = 0x12
_STATUS   = 0x13
_CDATA    = 0x14
_RDATA    = 0x16
_GDATA    = 0x18
_BDATA    = 0x1A

_AIEN       = 0x10
_WEN        = 0x08
_AEN        = 0x02
_PON        = 0x01

_GAINS  = (1, 4, 16, 60)


class GroveI2cColorSensorV2:
    """Driver for Grove I2C Color Sensor (TCS34725)"""

    def __init__(self, bus=1, address=0x29):
        self.address = address
        self.bus = Bus(bus)

        self.awake = False

        if self.id not in (0x44, 0x4D):
            raise ValueError('Not find a Grove I2C Color Sensor V2')

        self.set_integration_time(24)
        self.set_gain(4)

    def wakeup(self):
        enable = self._read_byte(_ENABLE)
        self._write_byte(_ENABLE, enable | _PON | _AEN)
        time.sleep(0.0024)

        self.awake = True

    def sleep(self):
        enable = self._read_byte(_ENABLE)
        self._write_byte(_ENABLE, enable & ~_PON)

        self.awake = False

    def is_awake(self):
        return self._read_byte(_ENABLE) & _PON

    def set_wait_time(self, t):
        pass

    @property
    def id(self):
        return self._read_byte(_ID)

    @property
    def integration_time(self):
        steps = 256 - self._read_byte(_ATIME)
        return steps * 2.4

    def set_integration_time(self, t):
        """Set the integration time of the sensor"""
        if t < 2.4:
            t = 2.4
        elif t > 614.4:
            t = 614.4
        
        steps = int(t / 2.4)
        self._integration_time = steps * 2.4
        self._write_byte(_ATIME, 256 - steps)

    @property
    def gain(self):
        """The gain control. Should be 1, 4, 16, or 60.
        """
        return _GAINS[self._read_byte(_CONTROL)]

    def set_gain(self, gain):
        if gain in _GAINS:
            self._write_byte(_CONTROL, _GAINS.index(gain))

    @property
    def raw(self):
        """Read RGBC registers
        return 16 bits red, green, blue and clear data
        """

        if not self.awake:
            self.wakeup()

        while not self._valid():
            time.sleep(0.0024)

        data = tuple(self._read_word(reg) for reg in (_RDATA, _GDATA, _BDATA, _CDATA))
        return data

    @property
    def rgb(self):
        """Read the RGB color detected by the sensor.  Returns a 3-tuple of
        red, green, blue component values as bytes (0-255).
        """
        r, g, b, clear = self.raw
        if clear:
            r = int(255 * r / clear)
            g = int(255 * g / clear)
            b = int(255 * b / clear)
        else:
            r, g, b = 0, 0, 0
        return r, g, b

    def _valid(self):
        """Check if RGBC is valid"""
        return self._read_byte(_STATUS) & 0x01

    def _read_byte(self, address):
        command = _CMD | address
        return self.bus.read_byte_data(self.address, command)

    def _read_word(self, address):
        command = _CMD | _AUTO | address
        return self.bus.read_word_data(self.address, command)

    def _write_byte(self, address, data):
        command = _CMD | address
        self.bus.write_byte_data(self.address, command, data)

    def _write_word(self, address, data):
        command = _CMD | _AUTO | address
        data = [(data >> 8) & 0xFF, data & 0xFF]
        self.bus.write_i2c_block_data(self.address, command, data)


Grove = GroveI2cColorSensorV2


def main():
    sensor = GroveI2cColorSensorV2()

    print('Raw data of red-filtered, green-filtered, blue-filtered and unfiltered photodiodes')
    while True:
        # r, g, b = sensor.rgb
        r, g, b, clear = sensor.raw
        print((r, g, b, clear))
        time.sleep(1.0)

if __name__ == '__main__':
    main()
```
- Run this code
```

python grove_i2c_color_sensor_v2.py

```

If everything goes smoothly, you will see the following phenomenon.😄

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/color_result.png" alt="pir" width={600} height="auto" /></p>







Other Reference
---------------

This module is based on the color sensor TCS3414CS. The TCS3414CS digital color sensor returns data from four channels: red(R), green(G), blue(B) and clear(C)(non-filtered). The response from the red, green and blue channels (RGB) can be used to determine a particular source’s chromaticity coordinates (x, y). These standards are set by the Commission Internationale de l’Eclairage (CIE). The CIE is the main international organization concerned with color and color measurement.In order to acquire the color of a given object using TCS3414CS, we must first map the sensor response (RGB) to the CIE tristimulus values (XYZ). It is then necessary to calculate the chromaticity coordinates (x, y).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Coordinates_transform.png" /></div>

Chromaticity Calculation Process Overview

The equations to do the transformation:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Equations.png" /></div>

Transformation Equations

- When we get coordinates (x, y), please reference the below figure so as to get the recommended color.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Chromaticity_Diagram.jpg" /></div>

## FAQs

**Q1: How to understand the commands? For example, REG_GREEN_LOW = 0xD0**

A1: From the attached picture, you can see what's in the command. When using byte protocol command, it must be like 0x80+ADDRESS. For example, REG_TIMING( 01h ) = 0x81
For byte and block read, the command should be 0xC0+ADDRESS, REG_GREEN_LOW( 10h ) = 0xD0.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Color%20sensor%20register.png" /></div>

# Grove-I2C Color Sensor Eagle File V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-I2C Color Sensor Eagle File V2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Resources

---------

- **[Library]**[Library for Grove - I2C Color Sensor V1.2](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)
- **[Library]**[Library for Grove - I2C Color Sensor V2.0](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
- **[Eagle]**[Grove-I2C Color Sensor Eagle File V1.2](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip)
- **[Eagle]**[Grove-I2C Color Sensor Eagle File V2.0](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip)
- **[Datasheet]**[TCS3414-A Datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3404_TCS3414-A.pdf)
- **[Datasheet]**[TCS3472 Datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3472%20Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Color_Sensor -->

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
