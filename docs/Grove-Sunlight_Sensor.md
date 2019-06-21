---
name: Grove - Sunlight Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Sunlight-Sensor-p-2530.html
oldwikiname: Grove - Sunlight Sensor
prodimagename: Grove_sunlight_sensor_view.jpg
surveyurl: https://www.research.net/r/grove_sunlight_sensor
sku: 101020089
---

![](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/img/Grove_sunlight_sensor_view.jpg)

Grove - Sunlight Sensor is a multi-channel digital light sensor, which has the ability to detect UV-light, visible light and infrared light.

This device is based on SI1145, a new sensor from SiLabs. The Si1145 is a low-power, reflectance-based, infrared proximity, UV index and ambient light sensor with I2C digital interface and programmable-event interrupt output. This device offers excellent performance under a wide dynamic range and a variety of light sources including direct sunlight.

Grove - Sunlight Sensor include an on-bard Grove connector, which help you to connect it your Arduino easily. You can use this device for making some project which need to detect the light, such as a simple UV detector.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Sunlight-Sensor-p-2530.html)

## Features
---
- Digital light sensor
- Wide spectrum detection range to improve accuracy.
- Programmable configuration which make it versatile for various applications.
- Detect sunlight directly
- Grove compatible
- I2C Interface(7-bit)

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Specification
---
|||
|---|---|
|Operating Voltage	|3.0-5.5V|
|Working current	|3.5mA|
|Wave length	|280-950nm|
|Default I2C Address|	0x60|
|Operating Temperature|	-45-85℃|

## Hardware Overview
---
![](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/img/Hardware_overview.jpg)

- Grove Connector - a 4pin interface, contain VCC, GND, SDA and SCL
- LED - LED Driver pin
- INT - a programmable interrupt output
- SI1145 - IC

## Getting Started
---
After this section, you can make Grove - Sunlight Sensor run with only few steps.

**Preparations**

Now we are making a simple demo to get data from Grove - Sunlight Sensor require following modules.

- [Seeeduino v4.2](http://wiki.seeedstudio.com/Seeeduino_v4.2/)

Seeeduino V4.2 is fully compatible with Arduino.

If this is your first time using Arduino, Please put hand on [here](http://wiki.seeedstudio.com/Getting_Started_with_Seeeduino) to start your Arduino journey.

**Connecting hardware**

Just connect Grove - Sunlight Sensor into I2C connector of [Seeeduino v4.2](http://wiki.seeedstudio.com/Seeeduino_v4.2/)


As shown below:

![](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/img/Grove_sunlight_hardware_connect.jpg)

!!!Note
    If you need a plug more modules on main control board, you may need a [Grove base shield](http://wiki.seeedstudio.com/Base_Shield_V2/) which will make your work easy.

**Download**

Click [here](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/res/Grove_Sunlight_Sensor-master.zip) to download the library and decompress it to any libraries folders of Arduino.

You will notice there's "-master" in the end of the library name, just remove it.

Launch Arduino IDE and click **File>Examples>Grove_Sunlight_Sensor>SI1145DEMO** to open the test code.

![](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/img/Grove_sunlight_sensor_arduino.jpg)

Click Tools>Board to choose Arduino UNO and select respective serial port.

Now click Upload(CTRL+U) to burn testing code. Please refer to [**here**](http://wiki.seeedstudio.com/Arduino_Common_Error) for any error prompt and you can also add comment on [**forum**](community.seeedstudio.com/).

**Review Results**

After upload completed, Open Serial Monitor of your Arduino IDE, you can get the data:

![](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/img/Grove_sunlight_sensor_arduino_result.jpg)

!!!Note
    Vis - visible light, unit in lm
    IR - infrared light, unit in lm
    UV - UN index

Now, put Grove - Sunlight Sensor under the sun to see if it's a nice day.


## References

**Spectrum**

The content of this chapter is got from [**Wikipedia - Spectrum**](https://en.wikipedia.org/wiki/Spectrum), click to view the original page.

A spectrum (plural spectra or spectrums[1]) is a condition that is not limited to a specific set of values but can vary infinitely within a continuum. The word was first used scientifically within the field of optics to describe the rainbow of colors in visible light when separated using a prism. As scientific understanding of light advanced, it came to apply to the entire electromagnetic spectrum.

Spectrum has since been applied by analogy to topics outside of optics. Thus, one might talk about the spectrum of political opinion, or the spectrum of activity of a drug, or the autism spectrum. In these uses, values within a spectrum may not be associated with precisely quantifiable numbers or definitions. Such uses imply a broad range of conditions or behaviors grouped together and studied under a single title for ease of discussion.

In most modern usages of spectrum there is a unifying theme between extremes at either end. Some older usages of the word did not have a unifying theme, but they led to modern ones through a sequence of events set out below. Modern usages in mathematics did evolve from a unifying theme, but this may be difficult to recognize.

![](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/img/Grove_sunlight_spectrum.jpg)

**Lumen**

The content of this chapter is got from [**Wikipedia - Lumen (unit)**](https://en.wikipedia.org/wiki/Lumen_(unit)), click to view the original page.

The lumen (symbol: lm) is the SI derived unit of luminous flux, a measure of the total "amount" of visible light emitted by a source. Luminous flux differs from power (radiant flux) in that luminous flux measurements reflect the varying sensitivity of the human eye to different wavelengths of light, while radiant flux measurements indicate the total power of all electromagnetic waves emitted, independent of the eye's ability to perceive it. Lumens are related to lux in that one lux is one lumen per square meter.

**For some examples:**

- Dark night: 0.001—0.02
- Moonlight night: 0.02—0.3
- Cloudy day indoor: 5—50
- Cloudy day outdoor: 50—500
- Sunny day indoor: 100—1000
- Suitable for reading: 500—600
- Home video camera: 1400


**Ultraviolet index**

The content of this chapter is got from [**Wikipedia - Ultraviolet index**](https://en.wikipedia.org/wiki/Ultraviolet_index), click to view the original page.

The ultraviolet index or UV Index is an international standard measurement of the strength of sunburn-producing ultraviolet (UV) radiation at a particular place and time. The scale was developed by Canadian scientists in 1992, then adopted and standardized by the UN's World Health Organization and World Meteorological Organization in 1994. It is primarily used in daily forecasts aimed at the general public, and is increasingly available as an hourly forecast as well.

The UV Index is designed as an open-ended linear scale, directly proportional to the intensity of UV radiation that causes sunburn on human skin. For example, if a light-skinned individual (without sunscreen or a suntan) begins to sunburn in 30 minutes at UV Index 6, then that individual should expect to sunburn in about 15 minutes at UV Index 12 – twice the UV, twice as fast.

The purpose of the UV Index is to help people effectively protect themselves from UV radiation, which has health benefits in moderation but in excess causes sunburn, skin aging, DNA damage, skin cancer, immunosuppression,[1] and eye damage such as cataracts (see the section Human health-related effects of ultraviolet radiation). Public health organizations recommend that people protect themselves (for example, by applying sunscreen to the skin and wearing a hat and sunglasses) if they spend substantial time outdoors when the UV Index is 3 or higher; see the table below for more-detailed recommendations.

When the day's predicted UV Index is within various numerical ranges, the recommendations for protection are as follows:

![](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/img/uv%20index.png)

**Cautionary notes**

When interpreting the UV Index and recommendations, be aware that:

- The intensity of UV radiation reaching the surface of the earth depends on the angle of the sun in the sky. Each day, the sun achieves its highest angle (highest intensity, shortest shadows) at solar noon, which only approximately corresponds to 12:00 on clocks. This is because of the differences between solar time and local time in a given time zone. In general, UV risk is high when the sun is directly enough overhead that people's shadows are shorter than their height.
- Likewise, UV intensity can be higher or lower for surfaces at different angles to the horizontal. For example, if people are walking or standing outdoors, UV exposure to the eyes and vertical surfaces of skin, such as the face, can actually be more severe when the sun is lower, such as the end of a summer's day, or winter afternoons on a ski trail. This is partly a consequence of the fact that the measurement equipment upon which the index is based is a flat horizontal surface.
UV intensity can nearly double with reflection from snow or other bright surfaces like water, sand, or concrete.
- The recommendations given are for average adults with lightly tan skin. Those with darker skin are more likely to withstand greater sun exposure, while extra precautions are needed for children, seniors, particularly fair-skinned adults, and those who have greater sun sensitivity for medical reasons or from UV exposure in previous days. (The skin's recovery from UV radiation generally takes two days or more to run its course.)
- Because of the way the UV Index is calculated, it technically expresses the risk of developing sunburn, which is caused mostly by UVB radiation. However, UVA radiation also causes damage (photoaging, melanoma). Under some conditions, including most tanning beds, the UVA level may be disproportionately higher than described by the UV Index. The use of broad-spectrum (UVA/UVB) sunscreen can help address this concern.


## Resources
---
- [Schematic in PDF](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/res/Grove_-_Sunlight_Sensor_v1.0.pdf)
- [Schematic in Eagle File](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip)
- [Si1145 datasheet](https://github.com/SeeedDocument/Grove-Sunlight_Sensor/raw/master/res/Si1145-46-47.pdf)
- [Github Repositoriy for Grove - Sunlight Sensor](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor)
- [Spectrum](https://en.wikipedia.org/wiki/Spectrum)
- [Lumen (unit)](https://en.wikipedia.org/wiki/Lumen_(unit))
- [Ultraviolet index](https://en.wikipedia.org/wiki/Ultraviolet_index)

## Project

**The Environment Cube! Know the Land Beneath You!** A cube with all the necessary sensors, suitable for a wide range of applications like agriculture. Know the land beneath you!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>