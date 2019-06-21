---
name: Grove Base BoosterPack
category: Others
bzurl: https://www.seeedstudio.com/Grove-Base-BoosterPack-p-2177.html
oldwikiname:  Grove Base BoosterPack
prodimagename: 110020004%205.jpg
surveyurl: https://www.research.net/r/Grove_Base_BoosterPack
sku:  103020019
---
![](https://github.com/SeeedDocument/Grove_Base_BoosterPack/raw/master/img/110020004%205.jpg)

BoosterPacks are plug-in modules that can stack on top of the various LaunchPad kits to add additional functionality, such as sensors, displays, wireless modules &amp; more. The Grove Base BoosterPack is a welcome addition to the LaunchPad/BoosterPack ecosystem, enabling any LaunchPad to interface with the growing offering of Grove modules from Seeed Studio. The Grove Base BoosterPack offers a convenient and easy way for rapid prototypers to use more than one hundred Grove modules with standardized connectors, including sensors, actuators, displays, lights, motors and more.

![](https://github.com/SeeedDocument/Grove_Base_BoosterPack/raw/master/img/Grove_Web_idea.jpg)

**What is Grove？**

Grove is a modular, ready-to-use tool set that takes a building block approach to assembling electronics. The Grove system consists of a base shield and a large selection of modules that feature standardized connectors. The base shield allows for easy connection of any microcontroller to interface with the various Grove modules. Each Grove module addresses a unique function &amp; the overall collection of modules expand a wide range of functionality - from a simple push-button to a complex heart rate sensor. Each one comes with clear documentation and demo code to help you get started quickly.

![](https://github.com/SeeedDocument/Grove_Base_BoosterPack/raw/master/img/IMG_GROVE.JPG)

**What is LaunchPad？**

The LaunchPad is a set of Evaluation Kits from Texas Instruments. To introduce new functionality to the LaunchPad evaluation kits, we present the BoosterPack which acts as a plug-in board that fit on top of the LaunchPad baseboards. It offers a convenient and easy way for you to use more than one hundred Grove modules with standardized connectors, including sensors, actuators, displays, lights, motors and so on.


##   Features
---
*   Seeedstudio presents the newly launched Grove Base BoosterPack allowing Texas Instruments Launchpad to be connected closed with our Groves Family,further enabling rapid prototype and combinations with a range of Sensors, actuators,displays,lights,motors and etc.

*   The Grove Base BoosterPack has thirteen Groves 4-pin standard interfaces ,including five analog, five digital and three serial port, acting as a plug-n-play expansion module on Launchpad based on MSP430 launchpad.It also provides various of tutorials on how to connect with TI MSP430, there are 11 different kinds of projects for reference prototype ,which offers a convenient way to guide your creativity.

*   There is a RED LED on the Grove BoosterPack. It will indicate the power supply.

![](https://github.com/SeeedDocument/Grove_Base_BoosterPack/raw/master/img/BoosterpackpinMapping.jpg)

##   Using the Grove Base BoosterPack
---
###   Using a 40-pin LaunchPad

i.e. MSP-EXP430F5529LP, EK-TM4C123GXL, etc

The BoosterPack was designed in a way to leverage pins in the “inner 20 pins” [21-40]. The pins are connected as shown below in the table:

Using the table below, developers should be able to read an analog value from a Grove module (i.e. potentiometer/turn knob) that is connected to Grove connector ‘J6’ by using the analogRead(24) API call with Energia.

<table>
<tr>
<th> Connector Type </th>
<th> Grove connector Label </th>
<th>   GND   </th>
<th>   VCC   </th>
<th> SIG1 (connection to the BoosterPack pin) </th>
<th> SIG0 (connection to the BoosterPack pin) *
</th></tr>
<tr>
<td> Analog</td>
<td> J5 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 23 (analog capable pin) </td>
<td> 22 (analog capable pin)
</td></tr>
<tr>
<td> Analog</td>
<td> J6 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 25 (analog capable pin) </td>
<td> 24 (analog capable pin)
</td></tr>
<tr>
<td> Analog</td>
<td> J7 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 26 (analog capable pin) </td>
<td> 25 (analog capable pin)
</td></tr>
<tr>
<td> Analog</td>
<td> J8 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 27 (analog capable pin) </td>
<td> 26 (analog capable pin)
</td></tr>
<tr>
<td> Analog</td>
<td> J9 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 28 (analog capable pin) </td>
<td> 27 (analog capable pin)
</td></tr>
<tr>
<td> I2C </td>
<td> J10 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 10 (I2C SDA) </td>
<td> 9 (I2C SCL)
</td></tr>
<tr>
<td> UART </td>
<td> J11 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 4 (UART to MCU) </td>
<td> 3 (UART from MCU)
</td></tr>
<tr>
<td> SPI </td>
<td> J12 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 14 (SPI MISO) </td>
<td> 7 (SPI CLK)
</td></tr>
<tr>
<td> Digital </td>
<td> J13 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 39 (Digital/PWM pin) </td>
<td> 40 (Digital/PWM pin)
</td></tr>
<tr>
<td> Digital</td>
<td> J14 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 38 (Digital/PWM pin) </td>
<td> 39 (Digital/PWM pin)
</td></tr>
<tr>
<td> Digital</td>
<td> J15 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 37 (Digital/PWM pin) </td>
<td> 38 (Digital/PWM pin)
</td></tr>
<tr>
<td> Digital</td>
<td> J16 </td>
<td> GND </td>
<td> 3.3V </td>
<td> 36 (Digital/PWM pin) </td>
<td> 37 (Digital/PWM pin)
</td></tr>
<tr>
<td> Digital</td>
<td> J17 </td>
<td> GND </td>
<td> 3.3V  </td>
<td> 35 (Digital/PWM pin) </td>
<td> 36 (Digital/PWM pin)
</td></tr></table>

###   Using a 20-pin LaunchPad

If you are using a 20-pin LaunchPad, you can use jumpers or jumper wire to make the appropriate connections between a Grove connector &amp; the BoosterPack connector.

Using your specific LaunchPad’s pin out diagram, you can physically/electrically connect the Grove module to the appropriate pin. Pinout diagrams for each LaunchPad are available here:
[http://energia.nu/pin-maps/](http://energia.nu/pin-maps/)

With the help of these pin diagrams, you know which pin has the function you need. If you want to use Grove connector J5 for an analog Grove module (i.e. potentiometer knob), you can use the Energia pin maps to identify an analog-capable pin of the BoosterPack connector. Using a jumper of wire, you can connect pin number 22 with the analog-capable pin that is available. For example, if you are using an MSP-EXP430G2 LaunchPad, you can use a jumper or a cable to connect pin 22 with pin 2.

##   Supported Products
---
###   Grove List

*   [1. Buzzer](/Grove-Buzzer#With_TI_LaunchPad)

*   [2. Relay](/Grove-Relay#With_TI_LaunchPad)

*   [3. 4-Digital Display ](/Grove-4-Digit_Display#With_TI_LaunchPad)

*   [4. Rotary Angle Sensor ](/Grove-Rotary_Angle_Sensor#With_TI_LaunchPad)

*   [5. Light Sensor](/Grove-Light_Sensor#With_TI_LaunchPad)

*   [6. Sound Sensor ](/Grove-Sound_Sensor#With_TI_LaunchPad)

*   [7. PIR Motion Sensor ](/Grove-PIR_Motion_Sensor#With_TI_LaunchPad)

*   [8. Moisture Sensor](/Grove-Moisture_Sensor#With_TI_LaunchPad)

*   [9. Ultrasonic Ranger Sensor](/Grove-Ultrasonic_Ranger#With_TI_LaunchPad)

*   [10. Temperature Humidity Sensor ](/Grove-TemperatureAndHumidity_Sensor)



##   Resources
---
- [Hardware eagle files](https://github.com/SeeedDocument/Grove_Base_BoosterPack/raw/master/res/Grove_Base_BoosterPack_v1.0.zip)

- [Grove Starter Kit For LaunchPad User's Manual](https://github.com/SeeedDocument/Grove_Base_BoosterPack/raw/master/res/Grove%20Starter%20Kit%20Manual.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>