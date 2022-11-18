---
name: Grove-VOC and eCO2 Gas Sensor(SGP30)
---


![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg)


The Grove-VOC and eCO2 Gas Sensor(SGP30) is an air quality detection sensor. This grove module is based on SGP30, we provide TVOC(Total Volatile Organic Compounds) and CO2eq output for this module.


The SGP30 is a digital multi-pixel gas sensor designed for easy integration into air purifier, demand-controlled ventilation, and IoT applications. Sensirion’s CMOSens®technology offers a complete sensor system on a single chip featuring a digital I2C interface, a temperature controlled micro hotplate, and two preprocessed indoor air quality signals. As the first metal-oxide gas sensor featuring multiple sensing elements on one chip, the SGP30 provides more detailed information about the air quality.



<p><a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Upgradable to Industrial Sensors
With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2103 Wireless CO2, Temperature, and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) for your next successful industrial project.

<html>
    <table>
		
    </table>
</html>

## Features

- Multi-pixel gas sensor for indoor air quality applications
- Outstanding long-term stability
- I2C interface with TVOC and CO2eq output signals
- Low power consumption
- Chip module tape and reel packaged, reflow solderable


## Specification




## Applications

- Air purifier
- demand-controlled ventilation
- IoT applications
- New house air condition monitor


## Hardware Overview

### Pin Map

![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/pin.jpg)

### Schematic

**Power**

![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc2.jpg)

The typical operating voltage SGP30 is 1.8v, we use a power conversion chip *XC6206P182MR* to provide a stable 3.3V for the MCP9600.


**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc1.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 1.8V, if the I<sup>2</sup>C bus of the Arduino use 5V or 3.3V, this circuit will be needed. In the schematic above, **Q7** and **Q8** are N-Channel MOSFET [BSS138LT3G](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)



## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




