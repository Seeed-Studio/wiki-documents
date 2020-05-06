---
name: Grove - Temperature&Humidity Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html
oldwikiname: Grove_-_Temperature&Humidity_Sensor
prodimagename: Grove-TempAndHumiSensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020011 1.jpg
surveyurl: https://www.research.net/r/Grove-TemperatureAndHumidity_Sensor
sku: 101020011
---

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg)

This Temperature&Humidity sensor provides a pre-calibrated digital output. A unique capacitive sensor element measures relative humidity and the temperature is measured by a negative temperature coefficient (NTC) thermistor. It has excellent reliability and long term stability. Please note that this sensor will not work for temperatures below 0 degree.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>



## Features
--------

-   Relative Humidity and temperature measurement
-   Full range temperature compensation Calibrated
-   Digital signal
-   Long term stability
-   Long transmission distance(>20m)
-   Low power consumption

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)

## Applications Ideas
------------------

-   Consumption product
-   Weather station
-   Humidity regulator
-   Air conditioner


## Specifications
--------------

### Key Specifications

| Items        |   Min                  |
|--------------|------------------------|
| PCB Size     | 2.0cm*4.0cm            |
| Interface    | 2.0mm pitch pin header |
| IO Structure | SIG,VCC,GND,NC         |
| ROHS         | YES                    |

### Electronic Characterstics

<table border="1">
<tr>
<th>
Items
</th>
<th>
Conditions
</th>
<th>
Min
</th>
<th>
Norm
</th>
<th>
Max
</th>
<th>
Unit
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
Measuring Current Supply
</td>
<td>
-
</td>
<td>
1.3 
</td>
<td>
- 
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Average Current Supply
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Measuring Range
</td>
<td>
Humidity
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Accuracy
</td>
<td>
Humidity
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensitivity
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repeatability
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Long-term Stability
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/year
</td>
</tr>
<tr align="center">
<td>
Signal Collecting Period
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>



Platforms Supported
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Note
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



Getting Started


When MCU sends a trigger signal, sensor will change from low power consumption mode to active mode. After the trigger signal sensor will send a response signal back to MCU, then 40 bit collected data is sent out and a new signal collecting is trigged.(Note that the 40 bit collected data which is sent from sensor to MCU is already collected before the trigger signal comes.) One trigger signal receives one time 40 bit response data from sensor. Single-bus data is used for communication between MCU and sensor.
The communication process is shown below:

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg)

It costs 5ms for single time communication.The high-order bit of data sends out first. Signal Data is 40 bit, comprised of 16 bit humidity data, 16 bit temperature data and 8 bit checksum.The data format is:

    8bits integer part of humidity+8bits decimal part of humidity
    +8bits integer part of temperature+8bits decimal part of temperature
    +8bits checksum.

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- **Step 2.** Connect Grove - Temperature&Humidity Sensor to port **D2** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg)


!!!Note
---
name: Grove - Temperature&Humidity Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html
oldwikiname: Grove_-_Temperature&Humidity_Sensor
prodimagename: Grove-TempAndHumiSensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020011 1.jpg
surveyurl: https://www.research.net/r/Grove-TemperatureAndHumidity_Sensor
sku: 101020011
---

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg)

This Temperature&Humidity sensor provides a pre-calibrated digital output. A unique capacitive sensor element measures relative humidity and the temperature is measured by a negative temperature coefficient (NTC) thermistor. It has excellent reliability and long term stability. Please note that this sensor will not work for temperatures below 0 degree.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>



## Features
--------

-   Relative Humidity and temperature measurement
-   Full range temperature compensation Calibrated
-   Digital signal
-   Long term stability
-   Long transmission distance(>20m)
-   Low power consumption

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)

## Applications Ideas
------------------

-   Consumption product
-   Weather station
-   Humidity regulator
-   Air conditioner


## Specifications
--------------

### Key Specifications

| Items        |   Min                  |
|--------------|------------------------|
| PCB Size     | 2.0cm*4.0cm            |
| Interface    | 2.0mm pitch pin header |
| IO Structure | SIG,VCC,GND,NC         |
| ROHS         | YES                    |

### Electronic Characterstics

<table border="1">
<tr>
<th>
Items
</th>
<th>
Conditions
</th>
<th>
Min
</th>
<th>
Norm
</th>
<th>
Max
</th>
<th>
Unit
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
Measuring Current Supply
</td>
<td>
-
</td>
<td>
1.3 
</td>
<td>
- 
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Average Current Supply
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Measuring Range
</td>
<td>
Humidity
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Accuracy
</td>
<td>
Humidity
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensitivity
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repeatability
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Long-term Stability
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/year
</td>
</tr>
<tr align="center">
<td>
Signal Collecting Period
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>



Platforms Supported
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Note
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



Getting Started


When MCU sends a trigger signal, sensor will change from low power consumption mode to active mode. After the trigger signal sensor will send a response signal back to MCU, then 40 bit collected data is sent out and a new signal collecting is trigged.(Note that the 40 bit collected data which is sent from sensor to MCU is already collected before the trigger signal comes.) One trigger signal receives one time 40 bit response data from sensor. Single-bus data is used for communication between MCU and sensor.
The communication process is shown below:

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg)

It costs 5ms for single time communication.The high-order bit of data sends out first. Signal Data is 40 bit, comprised of 16 bit humidity data, 16 bit temperature data and 8 bit checksum.The data format is:

    8bits integer part of humidity+8bits decimal part of humidity
    +8bits integer part of temperature+8bits decimal part of temperature
    +8bits checksum.

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- **Step 2.** Connect Grove - Temperature&Humidity Sensor to port **D2** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg)


!!!Note
---
name: Grove - Temperature&Humidity Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html
oldwikiname: Grove_-_Temperature&Humidity_Sensor
prodimagename: Grove-TempAndHumiSensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020011 1.jpg
surveyurl: https://www.research.net/r/Grove-TemperatureAndHumidity_Sensor
sku: 101020011
---

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg)

This Temperature&Humidity sensor provides a pre-calibrated digital output. A unique capacitive sensor element measures relative humidity and the temperature is measured by a negative temperature coefficient (NTC) thermistor. It has excellent reliability and long term stability. Please note that this sensor will not work for temperatures below 0 degree.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>



## Features
--------

-   Relative Humidity and temperature measurement
-   Full range temperature compensation Calibrated
-   Digital signal
-   Long term stability
-   Long transmission distance(>20m)
-   Low power consumption

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)

## Applications Ideas
------------------

-   Consumption product
-   Weather station
-   Humidity regulator
-   Air conditioner


## Specifications
--------------

### Key Specifications

| Items        |   Min                  |
|--------------|------------------------|
| PCB Size     | 2.0cm*4.0cm            |
| Interface    | 2.0mm pitch pin header |
| IO Structure | SIG,VCC,GND,NC         |
| ROHS         | YES                    |

### Electronic Characterstics

<table border="1">
<tr>
<th>
Items
</th>
<th>
Conditions
</th>
<th>
Min
</th>
<th>
Norm
</th>
<th>
Max
</th>
<th>
Unit
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
Measuring Current Supply
</td>
<td>
-
</td>
<td>
1.3 
</td>
<td>
- 
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Average Current Supply
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Measuring Range
</td>
<td>
Humidity
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Accuracy
</td>
<td>
Humidity
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensitivity
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repeatability
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Long-term Stability
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/year
</td>
</tr>
<tr align="center">
<td>
Signal Collecting Period
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>



Platforms Supported
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Note
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



Getting Started


When MCU sends a trigger signal, sensor will change from low power consumption mode to active mode. After the trigger signal sensor will send a response signal back to MCU, then 40 bit collected data is sent out and a new signal collecting is trigged.(Note that the 40 bit collected data which is sent from sensor to MCU is already collected before the trigger signal comes.) One trigger signal receives one time 40 bit response data from sensor. Single-bus data is used for communication between MCU and sensor.
The communication process is shown below:

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg)

It costs 5ms for single time communication.The high-order bit of data sends out first. Signal Data is 40 bit, comprised of 16 bit humidity data, 16 bit temperature data and 8 bit checksum.The data format is:

    8bits integer part of humidity+8bits decimal part of humidity
    +8bits integer part of temperature+8bits decimal part of temperature
    +8bits checksum.

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- **Step 2.** Connect Grove - Temperature&Humidity Sensor to port **D2** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg)


!!!Note
---
name: Grove - Temperature&Humidity Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html
oldwikiname: Grove_-_Temperature&Humidity_Sensor
prodimagename: Grove-TempAndHumiSensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020011 1.jpg
surveyurl: https://www.research.net/r/Grove-TemperatureAndHumidity_Sensor
sku: 101020011
---

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg)

This Temperature&Humidity sensor provides a pre-calibrated digital output. A unique capacitive sensor element measures relative humidity and the temperature is measured by a negative temperature coefficient (NTC) thermistor. It has excellent reliability and long term stability. Please note that this sensor will not work for temperatures below 0 degree.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>



## Features
--------

-   Relative Humidity and temperature measurement
-   Full range temperature compensation Calibrated
-   Digital signal
-   Long term stability
-   Long transmission distance(>20m)
-   Low power consumption

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)

## Applications Ideas
------------------

-   Consumption product
-   Weather station
-   Humidity regulator
-   Air conditioner


## Specifications
--------------

### Key Specifications

| Items        |   Min                  |
|--------------|------------------------|
| PCB Size     | 2.0cm*4.0cm            |
| Interface    | 2.0mm pitch pin header |
| IO Structure | SIG,VCC,GND,NC         |
| ROHS         | YES                    |

### Electronic Characterstics

<table border="1">
<tr>
<th>
Items
</th>
<th>
Conditions
</th>
<th>
Min
</th>
<th>
Norm
</th>
<th>
Max
</th>
<th>
Unit
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
Measuring Current Supply
</td>
<td>
-
</td>
<td>
1.3 
</td>
<td>
- 
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Average Current Supply
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Measuring Range
</td>
<td>
Humidity
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Accuracy
</td>
<td>
Humidity
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensitivity
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repeatability
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Long-term Stability
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/year
</td>
</tr>
<tr align="center">
<td>
Signal Collecting Period
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>



Platforms Supported
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Note
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



Getting Started


When MCU sends a trigger signal, sensor will change from low power consumption mode to active mode. After the trigger signal sensor will send a response signal back to MCU, then 40 bit collected data is sent out and a new signal collecting is trigged.(Note that the 40 bit collected data which is sent from sensor to MCU is already collected before the trigger signal comes.) One trigger signal receives one time 40 bit response data from sensor. Single-bus data is used for communication between MCU and sensor.
The communication process is shown below:

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg)

It costs 5ms for single time communication.The high-order bit of data sends out first. Signal Data is 40 bit, comprised of 16 bit humidity data, 16 bit temperature data and 8 bit checksum.The data format is:

    8bits integer part of humidity+8bits decimal part of humidity
    +8bits integer part of temperature+8bits decimal part of temperature
    +8bits checksum.

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- **Step 2.** Connect Grove - Temperature&Humidity Sensor to port **D2** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg)


!!!Note
---
name: Grove - Temperature&Humidity Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html
oldwikiname: Grove_-_Temperature&Humidity_Sensor
prodimagename: Grove-TempAndHumiSensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020011 1.jpg
surveyurl: https://www.research.net/r/Grove-TemperatureAndHumidity_Sensor
sku: 101020011
---

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg)

This Temperature&Humidity sensor provides a pre-calibrated digital output. A unique capacitive sensor element measures relative humidity and the temperature is measured by a negative temperature coefficient (NTC) thermistor. It has excellent reliability and long term stability. Please note that this sensor will not work for temperatures below 0 degree.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>



## Features
--------

-   Relative Humidity and temperature measurement
-   Full range temperature compensation Calibrated
-   Digital signal
-   Long term stability
-   Long transmission distance(>20m)
-   Low power consumption

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)

## Applications Ideas
------------------

-   Consumption product
-   Weather station
-   Humidity regulator
-   Air conditioner


## Specifications
--------------

### Key Specifications

| Items        |   Min                  |
|--------------|------------------------|
| PCB Size     | 2.0cm*4.0cm            |
| Interface    | 2.0mm pitch pin header |
| IO Structure | SIG,VCC,GND,NC         |
| ROHS         | YES                    |

### Electronic Characterstics

<table border="1">
<tr>
<th>
Items
</th>
<th>
Conditions
</th>
<th>
Min
</th>
<th>
Norm
</th>
<th>
Max
</th>
<th>
Unit
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
Measuring Current Supply
</td>
<td>
-
</td>
<td>
1.3 
</td>
<td>
- 
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Average Current Supply
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Measuring Range
</td>
<td>
Humidity
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Accuracy
</td>
<td>
Humidity
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensitivity
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repeatability
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Long-term Stability
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/year
</td>
</tr>
<tr align="center">
<td>
Signal Collecting Period
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>



Platforms Supported
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Note
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



Getting Started


When MCU sends a trigger signal, sensor will change from low power consumption mode to active mode. After the trigger signal sensor will send a response signal back to MCU, then 40 bit collected data is sent out and a new signal collecting is trigged.(Note that the 40 bit collected data which is sent from sensor to MCU is already collected before the trigger signal comes.) One trigger signal receives one time 40 bit response data from sensor. Single-bus data is used for communication between MCU and sensor.
The communication process is shown below:

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg)

It costs 5ms for single time communication.The high-order bit of data sends out first. Signal Data is 40 bit, comprised of 16 bit humidity data, 16 bit temperature data and 8 bit checksum.The data format is:

    8bits integer part of humidity+8bits decimal part of humidity
    +8bits integer part of temperature+8bits decimal part of temperature
    +8bits checksum.

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- **Step 2.** Connect Grove - Temperature&Humidity Sensor to port **D2** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg)


!!!Note
---
name: Grove - Temperature&Humidity Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html
oldwikiname: Grove_-_Temperature&Humidity_Sensor
prodimagename: Grove-TempAndHumiSensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020011 1.jpg
surveyurl: https://www.research.net/r/Grove-TemperatureAndHumidity_Sensor
sku: 101020011
---

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg)

This Temperature&Humidity sensor provides a pre-calibrated digital output. A unique capacitive sensor element measures relative humidity and the temperature is measured by a negative temperature coefficient (NTC) thermistor. It has excellent reliability and long term stability. Please note that this sensor will not work for temperatures below 0 degree.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>



## Features
--------

-   Relative Humidity and temperature measurement
-   Full range temperature compensation Calibrated
-   Digital signal
-   Long term stability
-   Long transmission distance(>20m)
-   Low power consumption

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)

## Applications Ideas
------------------

-   Consumption product
-   Weather station
-   Humidity regulator
-   Air conditioner


## Specifications
--------------

### Key Specifications

| Items        |   Min                  |
|--------------|------------------------|
| PCB Size     | 2.0cm*4.0cm            |
| Interface    | 2.0mm pitch pin header |
| IO Structure | SIG,VCC,GND,NC         |
| ROHS         | YES                    |

### Electronic Characterstics

<table border="1">
<tr>
<th>
Items
</th>
<th>
Conditions
</th>
<th>
Min
</th>
<th>
Norm
</th>
<th>
Max
</th>
<th>
Unit
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
Measuring Current Supply
</td>
<td>
-
</td>
<td>
1.3 
</td>
<td>
- 
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Average Current Supply
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Measuring Range
</td>
<td>
Humidity
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Accuracy
</td>
<td>
Humidity
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensitivity
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repeatability
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Long-term Stability
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/year
</td>
</tr>
<tr align="center">
<td>
Signal Collecting Period
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>



Platforms Supported
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Note
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



Getting Started


When MCU sends a trigger signal, sensor will change from low power consumption mode to active mode. After the trigger signal sensor will send a response signal back to MCU, then 40 bit collected data is sent out and a new signal collecting is trigged.(Note that the 40 bit collected data which is sent from sensor to MCU is already collected before the trigger signal comes.) One trigger signal receives one time 40 bit response data from sensor. Single-bus data is used for communication between MCU and sensor.
The communication process is shown below:

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg)

It costs 5ms for single time communication.The high-order bit of data sends out first. Signal Data is 40 bit, comprised of 16 bit humidity data, 16 bit temperature data and 8 bit checksum.The data format is:

    8bits integer part of humidity+8bits decimal part of humidity
    +8bits integer part of temperature+8bits decimal part of temperature
    +8bits checksum.

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- **Step 2.** Connect Grove - Temperature&Humidity Sensor to port **D2** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg)


!!!Note
---
name: Grove - Tilt Switch
category: Sensor
bzurl: https://seeedstudio.com/Grove-Tilt-Switch-p-771.html
oldwikiname: Grove_-_Tilt_Switch
prodimagename: Tilt1.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/gbtlt.jpg
surveyurl: https://www.research.net/r/Grove-Tilt_Switch
sku: 101020025
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_pi, plat_bbg
---

![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt1.jpg)

The Grove-Tilt Switch is the equivalent of a button, and is used as a digital input. Inside the tilt switch is a pair of balls that make contact with the pins when the case is upright. Tilt the case over and the balls don't touch, thus not making a connection. It is wired to the SIG line, NC is not used on this Grove.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

Features
--------

-   Grove Interface
-   Easy to use
-   Simple Grove module

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
    
Specifications
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Voltage
</th>
<td>
3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Connecting Angle
</th>
<td colspan="3">
10° ~170°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Disconnect angle
</th>
<td colspan="3">
190° ~350°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Electrical Life
</th>
<td colspan="3">
100,000
</td>
<td>
Cycle
</td>
</tr>
</table>

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

### Play With Arduino

The SIG pin of the Grove - Tilt Switch output LOW normally. When the Tilt Switch is upright, a pair of balls inside the tilt switch will contact with the pins and the SIG pin will output HIGH.

The following sketch demonstrates a simple application of using the Tilt Switch and Grove - Button to control the led.

-   As the following picture indicates, the Tilt Switch is connected to digital port 5 of the Grove - Base Shield and the Grove-Button to digital port 7. The LED is connected to digital port 1. The hardware installation is as follows:

![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Digitalv1.0b.jpg)

-   Copy and paste code below to a new Arduino sketch.

```
void setup()
{
    pinMode(1, OUTPUT);
    pinMode(5, INPUT);
    pinMode(7, INPUT);
}

void loop()
{

    if (digitalRead(5)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(100);
        digitalWrite(1, LOW);
    }

    if (digitalRead(7)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(200);
        digitalWrite(1, LOW);
    }

}
```

-   Upload the code.
-   Then the LED will light when you press the button or activate the tilt-switch. Have a try!

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Tilt Switch to port D5, then connect a Grove - Button and Grove - Red LED to port D7 and D2 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/cc_Tilt_Switch.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, tilt the tilt switch or press the button, the LED will goes on.

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Tilt Switch |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the tilt switch to port 12 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Hat.jpg)

!!! Note
    For step 3 you are able to connect the tilt switch to **any GPIO Port** but make sure you change the command with the corresponding port number.


#### Software

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python grove_tilt_switch.py 12

```

Following is the grove_tilt_switch.py code.

```python

import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)
        self._on_trigger = None
        self._on_release = None

    @property
    def on_trigger(self):
        return self._on_trigger

    @on_trigger.setter
    def on_trigger(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_trigger = callback

    @property
    def on_release(self):
        return self._on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_release = callback

    def _handle_event(self, pin, value):

        if value:
            if callable(self._on_trigger):
                self._on_trigger()
        else:
            if callable(self._on_release):
                self._on_release()

Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))

    def on_trigger():
        print('Triggered')
    def on_release():
        print("Released.")

    swicth.on_trigger = on_trigger
    swicth.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

!!!success
    If everything goes well, you will be able to see the following result when you touch the tilt switch

```python

pi@raspberrypi:~/grove.py/grove $ python grove_tilt_switch.py 12
Triggered
Released.
Triggered
^CTraceback (most recent call last):
  File "grove_tilt_switch.py", line 106, in <module>
    main()
  File "grove_tilt_switch.py", line 102, in main
    time.sleep(1)
KeyboardInterrupt

```


You can quit this program by simply press ++ctrl+c++.




### Play With Raspberry Pi (with GrovePi_Plus)


### With Raspberry Pi

1.You should have a Raspberry Pi and a Grovepi or Grovepi+. 

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePi_Plus).

3.Connection

-   Plug Tilt_Switch into grovepi socket D3 by using a grove cable.

4.Navigate to the demos' directory:
```
       cd yourpath/GrovePi/Software/Python/
```
-   To see the code
```
    nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```
```
    import time
    import grovepi

    # Connect the Grove Tilt Switch to digital port D3
    # SIG,NC,VCC,GND
    tilt_switch = 3

    grovepi.pinMode(tilt_switch,"INPUT")

    while True:
        try:
            print grovepi.digitalRead(tilt_switch)
            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Run the demo.

```
    sudo python grove_tilt_switch.py
```

6.Result: Put the sensor upright by one side, the SIG pin will output HIGH.

![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Grovepi_tilt_Switch_00.png)



Reference
---------

The operating angle of Grove-Tilt Switch as shown below:

![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Switch_Operate.jpg)

<div class="admonition note">
<p class="admonition-title">Note</p>
The mark J1 on the Grove is the reference terminal.
</div>

# Grove - Tilt Switch v1.0 Eagle File
<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>

# Grove - Tilt Switch v1.1 Eagle File
<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


Resources
---------

-   [Grove - Tilt Switch v1.0 Eagle File](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip)
-   [Grove - Tilt Switch v1.1 PDF File](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_PDF_File.pdf)
-   [Grove - Tilt Switch v1.1 Eagle File](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip)
-   [SW200D Datasheet](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/SW200D_datasheet.pdf)
-   [Codecraft CDC File](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove_Tilt_Switch_CDC_File.zip)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Tilt_Switch -->

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>