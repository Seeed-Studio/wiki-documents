---
name: Grove - Infrared Temperature Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html
oldwikiname: Grove_-_Infrared_Temperature_Sensor
prodimagename: Grove-Infrared_Temperature_Sensor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020062 1.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Temperature_Sensor
sku: 101020062
tags: grove_analog, io_3v3, io_5v, plat_duino
---

![](https://github.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/raw/master/img/main.jpg)

The Infrared temperature sensor is a non-contact temperature measure model. It is composed of 116 elements of thermocouple in series on a floating micro-membrane, the black Surface of the sensor is good to absorb the incident thermal infrared radiation, which might trigger a voltage response at output. This sensor outputs an analog voltage (0~1.1V) according to target temperature.




<p style=":center"><a href="http://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>



## Version

Product Version | Changes |	Released Date
--|--|--
Grove - Infrared Temperature Sensor v1.0	| Initial |	Dec. 11 2015
Grove - Infrared Temperature Sensor v1.1	| Optimize the layout  |	Jul. 24 2016
Grove - Infrared Temperature Sensor v1.2	| Change the power chip to make the power more stable  |	Feb. 10 2018





## Specifications


-   Voltage: 3-5V
-   Measuring Current Supply: 160-200 uA
-   Measuring Range: -10~100°C
-   Holding Time: 2S
-   Operating Temperature: -10~80 °C
-   Storage Temperature: -35-80 °C

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)
    
## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

### Play With Arduino


The following sketch demonstrates a simple application of measure the measure the surrounding temperature around the sensor and the temperature of the target which is in front of the sensor. And print the result on the serial monitor.

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Prepare the following materials:

| Seeeduino V4.2 | Base Shield| Grove - Infrared Temperature Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/raw/master/img/JUH4jM8D85pxTHah3QXYxhe7.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html)|


- **Step 2.** Connect Grove - Infrared Temperature Sensor to port **A0** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/raw/master/img/connect.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - Temperature and Humidity Sensor Pro to Seeeduino as below.


| Seeeduino       | Grove - Infrared Temperature Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| A1            | White                   |
| A0            | Yellow                  |




#### Software

- **Step 1.** Download the [Demo Code](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/master/res/MeasureTemperature.zip),then double click it to open the demo.


Before measuring temperature, you need simple setting. Following the instruction below before your test and you will gain a accurately result.


- **Step 2.** Regulate the sensor voltage

After uploading the demo program, make the sensor in normal environment more than 5 minutes that make the sensor temperature the same as surrounding temperature. Then open the serial monitor to check the voltage which the sensor output. Ideally, when the ambient temperature is equal to the temperature sensor, the infrared sensor (TP-538U) output is 0V.We should regulate the reference voltage which offset at 0.5V by hardware. As shown below, the sensor voltage is 0.014V, we just need to change the offset\_vol value as0.014 which you obtain from the serial monitor in program.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/master/img/Infrared_Temperature_Sensor_code2.jpg) 
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/master/img/Serialmonitor.jpg)


- **Step 3.** Regulate the sensor detected distance

According to our experiment, the sensor's nominal measure distance is 9CM, but we can’t ensure all sensor have the same character. So if you want to have accurate result, you need to regulate it with Ice and water mixture to measure the 0℃, and use boiled water to regulate the 100℃. After that, you can obtain the effective distance of the sensor.

The specific method for measuring is fill with ice and water in a dark container which has a flat surface. Waiting for the container drop to 0℃, keep the sensor 9CM between object, move the sensor forward or back and check the result, if output is 0℃, note down the distance value. The same method to check boiled water. When you gain a pair of value, make a deal with average calculation. You can begin to measure in a rated distance which you just obtained now.

Now we can measure the surrounding temperature around the sensor. The sensor is apply in a nominal distance, you can have a try in other distance, but the distance-temperature diagram neither sensor’s manufacturer nor we obtained, you can draw it follow the two instructions above. We reserve variable **"temperature_range"** in demo code. We assume that the target distance is 3 cm, the coefficient which you measured may be 5 more or less. Wish you have a fun try.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/master/img/Infrared_Temperature_Sensor_Code_1.jpg)



<div class="admonition note">
<p class="admonition-title">Note</p>
<ol><li> The demo code does not support Atmega168.</li>
<li>In order to gain a accurate measured, the distance(D) and target diament(S) rate D:S must less than 0.5.</li></ol>
</div>

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/master/img/Dsdiagram.jpg)


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the temperature.


The result should be like:

![](https://github.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/raw/master/img/result_arduino.png)




## Resources


- **[Zip]** [Grove-Infrared Temperature Sensor V1.2 Eagle File](https://github.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/raw/master/res/Grove-Infrared_Temperature_Sensor_v1.2.zip)
- **[Zip]** [Grove-Infrared Temperature Sensor V1.0 Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/master/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip)
- **[Zip]** [OTP-538U Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/master/res/OTP-538Udatasheet.zip)
- **[Zip]** [Demo Code](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/master/res/MeasureTemperature.zip)
- **[Zip]** [Infrared Temperature Demo Code with SerialLCD](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/master/res/Infrared_temperature_demo_code_with_serialLCD.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Infrared_Temperature_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>