---
description: Grove - Sunlight Sensor
title: Grove - Sunlight Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Sunlight_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_sensor_view.jpg" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor-p-2530.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Grove - Sunlight Sensor is a multi-channel digital light sensor, which has the ability to detect UV-light, visible light and infrared light.

This device is based on SI1151, a new sensor from SiLabs. The Si1151 is a low-power, reflectance-based, infrared proximity, UV index and ambient light sensor with I2C digital interface and programmable-event interrupt output. This device offers excellent performance under a wide dynamic range and a variety of light sources including direct sunlight.

Grove - Sunlight Sensor include an on-bard Grove connector, which help you to connect it your Arduino easily. You can use this device for making some project which need to detect the light, such as a simple UV detector.

The main chip of the device has been updated to SI1151, the tutorial to SI1145 still remain.

## Version

| Product Version                  | Changes                                                            | Released Date |
|----------------------------------|--------------------------------------------------------------------|---------------|
| Grove - Sunlight Sensor v1.0     | Initial                                                            | Feb 12 2020   |
| Grove - Sunlight Sensor v2.0     | replace Si1145 with Si1151-AB00-GMR                                | Jul 27 2021   |

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

---

- Digital light sensor
- Wide spectrum detection range to improve accuracy.
- Programmable configuration which make it versatile for various applications.
- Detect sunlight directly
- Grove compatible
- I2C Interface(7-bit)

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Specification

---
|||
|---|---|
|Operating Voltage |3.0-5.5V|
|Working current |3.5mA|
|Wave length |280-950nm|
|Default I2C Address| 0x60|
|Operating Temperature| -45-85℃|

## Hardware Overview

---

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Hardware_overview.jpg" /></div>

- Grove Connector - a 4pin interface, contain VCC, GND, SDA and SCL
- LED - LED Driver pin
- INT - a programmable interrupt output
- SI1151 - IC

## Getting Started

---
After this section, you can make Grove - Sunlight Sensor run with only few steps.

### SI1145 - Play with Arduino

**Materials required**

| Seeeduino V4.2 |Grove - Sunlight Sensor|
|--------------|-------------|
|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

:::caution
If this is your first time using Arduino, Please put hand on [here](https://wiki.seeedstudio.com/Getting_Started_with_Seeeduino) to start your Arduino journey.
:::

**Connecting hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg" /></div>

:::note
If you need a plug more modules on main control board, you may need a [Grove base shield](https://wiki.seeedstudio.com/Base_Shield_V2/) which will make your work easy.
:::

**Download**

Click [here](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/master) to download the library and then [add](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) it to the Arduino.

Launch Arduino IDE and click **File>Examples>Grove_Sunlight_Sensor>SI1145DEMO** to open the test code.

```cpp
/*
    This is a demo to test Grove - Sunlight Sensor library

*/

#include <Wire.h>

#include "Arduino.h"
#include "SI114X.h"

SI114X SI1145 = SI114X();

void setup() {

    Serial.begin(115200);
    Serial.println("Beginning Si1145!");

    while (!SI1145.Begin()) {
        Serial.println("Si1145 is not ready!");
        delay(1000);
    }
    Serial.println("Si1145 is ready!");
}

void loop() {
    Serial.print("//--------------------------------------//\r\n");
    Serial.print("Vis: "); Serial.println(SI1145.ReadVisible());
    Serial.print("IR: "); Serial.println(SI1145.ReadIR());
    //the real UV value must be div 100 from the reg value , datasheet for more information.
    Serial.print("UV: ");  Serial.println((float)SI1145.ReadUV() / 100);
    delay(1000);
}

```

Click Tools>Board to choose Arduino UNO and select respective serial port.

Now click Upload(CTRL+U) to burn testing code. Please refer to [**here**](https://wiki.seeedstudio.com/Arduino_Common_Error) for any error prompt .

**Review Results**

After upload completed, Open Serial Monitor of your Arduino IDE, you can get the data:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png" /></div>

:::note
    Vis - visible light, unit in lm
    IR - infrared light, unit in lm
    UV - UN index
:::

Now, put Grove - Sunlight Sensor under the sun to see if it's a nice day.

### SI1151 - Play with Arduino

**Materials required**

| Seeeduino V4.2 |Grove - Sunlight Sensor|
|--------------|-------------|
|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

:::caution
If this is your first time using Arduino, Please put hand on [here](https://wiki.seeedstudio.com/Getting_Started_with_Seeeduino) to start your Arduino journey.
:::

**Connecting hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg" /></div>

:::note
If you need a plug more modules on main control board, you may need a [Grove base shield](https://wiki.seeedstudio.com/Base_Shield_V2/) which will make your work easy.
:::

**Download**

Click [here](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/master) to download the library and then [add](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) it to the Arduino.

Launch Arduino IDE and click **File>Examples>Grove_Sunlight_Sensor>SI1151** to open the test code.

```cpp
#include "Si115X.h"

Si115X si1151;

/**
 * Setup for configuration
 */
void setup()
{
    Wire.begin();
    Serial.begin(115200);
    if (!si1151.Begin()) {
        Serial.println("Si1151 is not ready!");
        while (1) {
            delay(1000);
            Serial.print(".");
        };
    }
    else {
        Serial.println("Si1151 is ready!");
    }
}

/**
 * Loops and reads data from registers
 */
void loop()
{
    Serial.print("IR: ");
    Serial.println(si1151.ReadIR());
    Serial.print("Visible: ");
    Serial.println(si1151.ReadVisible());

    delay(500);
}
```

Click Tools>Board to choose Arduino UNO and select respective serial port.

Now click Upload(CTRL+U) to burn testing code. Please refer to [**here**](https://wiki.seeedstudio.com/Arduino_Common_Error) for any error prompt .

**Review Results**

After upload completed, Open Serial Monitor of your Arduino IDE, you can get the data:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png" /></div>

:::note
    Vis - visible light, unit in lm
    IR - infrared light, unit in lm
    UV - UN index
:::

Now, put Grove - Sunlight Sensor under the sun to see if it's a nice day.


### SI1145 - Play with Raspberry Pi

**Materials required**

| Raspberry Pi 4 Model B |Grove - Base Hat for Raspberry Pi|Grove - Sunlight Sensor|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[Get One Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get One Now](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

**Connecting hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg" /></div>

**Step 1.** Connect Grove - Sunlight Sensor to port **I2C** of Grove - Base Hat for Raspberry Pi, Plugged into Raspberry Pi 4 Model B. And then connect the Raspberry Pi 4 Model B with a PC.

**Step 2.** After accessing the system of Raspberry Pi, git clone **[Seeed_Python_SI114X](https://github.com/Seeed-Studio/Seeed_Python_SI114X)** and install **grove.py** by inserting the following command:

```shell
pip3 install Seeed-grove.py
```

Or on supported GNU/Linux systems like the Raspberry Pi, you can install the driver locally from PyPI:

```Shell
pip3 install seeed-python-si114x
```

**Step 3.** To install system-wide (this may be required in some cases):

```Shell
sudo pip3 install seeed-python-si114x
```

And you can insert the following command to upgrade the driver locally from PyPI:

```Shell
pip3 install --upgrade seeed-python-si114x
```

**Software**

```python
import seeed_si114x
import time
import signal
def handler(signalnum, handler):
    print("Please use Ctrl C to quit")
def main():
    SI1145 = seeed_si114x.grove_si114x()
    print("Please use Ctrl C to quit")
    signal.signal(signal.SIGTSTP, handler) # Ctrl-z
    signal.signal(signal.SIGQUIT, handler) # Ctrl-\
    while True:
        print('Visible %03d UV %.2f IR %03d' % (SI1145.ReadVisible , SI1145.ReadUV/100 , SI1145.ReadIR),end=" ")
        print('\r', end='')
        time.sleep(0.5)
if __name__  == '__main__':
    main()
```

Before running the demo code, you must check the corresponding i2c number of the board:

```Shell
ls /dev/i2c*
```

If the i2c device works properly, there will be:

```Shell
/dev/i2c-1
```

**If NOT**, use the command **sudo raspi-config** and reboot to enable the i2c device:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png" /></div>

**Step 4.** Run the demo by the following command:

```Shell
cd Seeed_Python_SI114X-Si115x
```

```Shell
python3 examples/BasicRead.py 
```

:::tipsuccess
The outcome will display as following if everything goes well:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/outcome.png" /></div>

:::note
**Visible** refers to **visible light of Ambient** and **UV** refers to **Ultraviolet (UV) Index** while **IR** means **infrared light of Ambient**.
:::

### SI1151 - Play with Raspberry Pi

**Materials required**

| Raspberry Pi 4 Model B |Grove - Base Hat for Raspberry Pi|Grove - Sunlight Sensor|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[Get One Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get One Now](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

**Connecting hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg" /></div>

**Step 1.** Connect Grove - Sunlight Sensor to port **I2C** of Grove - Base Hat for Raspberry Pi, Plugged into Raspberry Pi 4 Model B. And then connect the Raspberry Pi 4 Model B with a PC.

**Step 2.** After accessing the system of Raspberry Pi, git clone **[Grove_Sunlight_Sensor library](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/Si1151)**

```Shell
git clone git clone git@github.com:Seeed-Studio/Grove_Sunlight_Sensor.git -b Si1151 Si1151_library
```

Before running the demo code, you must check the corresponding i2c number of the board:

```Shell
ls /dev/i2c*
```

If the i2c device works properly, there will be:

```Shell
/dev/i2c-1
```

**If NOT**, use the command **sudo raspi-config** and reboot to enable the i2c device:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png" /></div>

**Step 3.** Run the demo by the following command:

```Shell
cd Seeed_Python_SI114X-Si115x
```

```Shell
python3 seeed_si115x.py
```

:::tipsuccess
The outcome will display as following if everything goes well:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/Sunlighttu.png" /></div>

:::note
**Visible** refers to **visible light of Ambient** and **UV** refers to **Ultraviolet (UV) Index** while **IR** means **infrared light of Ambient**.
:::

## References

**Spectrum**

The content of this chapter is got from [**Wikipedia - Spectrum**](https://en.wikipedia.org/wiki/Spectrum), click to view the original page.

A spectrum (plural spectra or spectrums[1]) is a condition that is not limited to a specific set of values but can vary infinitely within a continuum. The word was first used scientifically within the field of optics to describe the rainbow of colors in visible light when separated using a prism. As scientific understanding of light advanced, it came to apply to the entire electromagnetic spectrum.

Spectrum has since been applied by analogy to topics outside of optics. Thus, one might talk about the spectrum of political opinion, or the spectrum of activity of a drug, or the autism spectrum. In these uses, values within a spectrum may not be associated with precisely quantifiable numbers or definitions. Such uses imply a broad range of conditions or behaviors grouped together and studied under a single title for ease of discussion.

In most modern usages of spectrum there is a unifying theme between extremes at either end. Some older usages of the word did not have a unifying theme, but they led to modern ones through a sequence of events set out below. Modern usages in mathematics did evolve from a unifying theme, but this may be difficult to recognize.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_spectrum.jpg" /></div>

**Lumen**

The content of this chapter is got from [**Wikipedia - Lumen (unit)**](https://en.wikipedia.org/wiki/Lumen_(unit)), click to view the original page.

The lumen (symbol: lm) is the SI derived unit of luminous flux, a measure of the total "amount" of visible light emitted by a source. Luminous flux differs from power (radiant flux) in that luminous flux measurements reflect the varying sensitivity of the human eye to different wavelengths of light, while radiant flux measurements indicate the total power of all electromagnetic waves emitted, independent of the eye's ability to perceive it. Lumens are related to lux in that one lux is one lumen per square meter.

**Ultraviolet index**

The content of this chapter is got from [**Wikipedia - Ultraviolet index**](https://en.wikipedia.org/wiki/Ultraviolet_index), click to view the original page.

The ultraviolet index or UV Index is an international standard measurement of the strength of sunburn-producing ultraviolet (UV) radiation at a particular place and time. The scale was developed by Canadian scientists in 1992, then adopted and standardized by the UN's World Health Organization and World Meteorological Organization in 1994. It is primarily used in daily forecasts aimed at the general public, and is increasingly available as an hourly forecast as well.

The UV Index is designed as an open-ended linear scale, directly proportional to the intensity of UV radiation that causes sunburn on human skin. For example, if a light-skinned individual (without sunscreen or a suntan) begins to sunburn in 30 minutes at UV Index 6, then that individual should expect to sunburn in about 15 minutes at UV Index 12 – twice the UV, twice as fast.

The purpose of the UV Index is to help people effectively protect themselves from UV radiation, which has health benefits in moderation but in excess causes sunburn, skin aging, DNA damage, skin cancer, immunosuppression,[1] and eye damage such as cataracts (see the section Human health-related effects of ultraviolet radiation). Public health organizations recommend that people protect themselves (for example, by applying sunscreen to the skin and wearing a hat and sunglasses) if they spend substantial time outdoors when the UV Index is 3 or higher; see the table below for more-detailed recommendations.

When the day's predicted UV Index is within various numerical ranges, the recommendations for protection are as follows:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/uv%20index.png" /></div>

**Cautionary notes**

When interpreting the UV Index and recommendations, be aware that:

- The intensity of UV radiation reaching the surface of the earth depends on the angle of the sun in the sky. Each day, the sun achieves its highest angle (highest intensity, shortest shadows) at solar noon, which only approximately corresponds to 12:00 on clocks. This is because of the differences between solar time and local time in a given time zone. In general, UV risk is high when the sun is directly enough overhead that people's shadows are shorter than their height.
- Likewise, UV intensity can be higher or lower for surfaces at different angles to the horizontal. For example, if people are walking or standing outdoors, UV exposure to the eyes and vertical surfaces of skin, such as the face, can actually be more severe when the sun is lower, such as the end of a summer's day, or winter afternoons on a ski trail. This is partly a consequence of the fact that the measurement equipment upon which the index is based is a flat horizontal surface.
UV intensity can nearly double with reflection from snow or other bright surfaces like water, sand, or concrete.
- The recommendations given are for average adults with lightly tan skin. Those with darker skin are more likely to withstand greater sun exposure, while extra precautions are needed for children, seniors, particularly fair-skinned adults, and those who have greater sun sensitivity for medical reasons or from UV exposure in previous days. (The skin's recovery from UV radiation generally takes two days or more to run its course.)
- Because of the way the UV Index is calculated, it technically expresses the risk of developing sunburn, which is caused mostly by UVB radiation. However, UVA radiation also causes damage (photoaging, melanoma). Under some conditions, including most tanning beds, the UVA level may be disproportionately higher than described by the UV Index. The use of broad-spectrum (UVA/UVB) sunscreen can help address this concern.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

---

- [Schematic in PDF](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0.pdf)
- [Schematic in Eagle File](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip)
- [Si1145 datasheet](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Si1145-46-47.pdf)
- [Github Repositoriy for Grove - Sunlight Sensor](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor)
- [Spectrum](https://en.wikipedia.org/wiki/Spectrum)
- [Lumen (unit)](https://en.wikipedia.org/wiki/Lumen_(unit))
- [Ultraviolet index](https://en.wikipedia.org/wiki/Ultraviolet_index)
- [Grove - Sunlight Sensor v2.0](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/Grove-SunlightSensorv2.0.zip)
- [SI1151-AB00-GMR Datasheet](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/SI1151-AB00-GMR.pdf)

## Project

**The Environment Cube! Know the Land Beneath You!** A cube with all the necessary sensors, suitable for a wide range of applications like agriculture. Know the land beneath you!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed' width='350'></iframe>

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

