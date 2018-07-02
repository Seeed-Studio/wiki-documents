---
title: Grove-VOC and eCO2 Gas Sensor-SGP30
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020512
tags: 
---


![](https://github.com/SeeedDocument/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/raw/master/img/IMG_0012a.jpg)


The Grove-VOC and eCO2 Gas Sensor-SGP30 is an air quality detection sensor. This grove module is based on SGP30, we provide TVOC(Total Volatile Organic Compounds) and CO2eq output for this module.


The SGP30 is a digital multi-pixel gas sensor designed for easy integration into air purifier, demand-controlled ventilation, and IoT applications. Sensirion’s CMOSens®technology offers a complete sensor system on a single chip featuring a digital I2C interface, a temperature controlled micro hotplate, and two preprocessed indoor air quality signals. As the first metal-oxide gas sensor featuring multiple sensing elements on one chip, the SGP30 provides more detailed information about the air quality.



<p style="text-align:center"><a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features

- Multi-pixel gas sensor for indoor air quality applications
- Outstanding long-term stability
- I2C interface with TVOC and CO2eq output signals
- Low power consumption
- Chip module tape and reel packaged, reflow solderable


## Specification


<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-eh2d{background-color:#ffffff;border-color:inherit;vertical-align:top}
.tg .tg-xf7g{background-color:#444444;border-color:inherit;text-align:center}
.tg .tg-f5ry{background-color:#ffffff;border-color:inherit}
.tg .tg-28l8{background-color:#ffffff;border-color:inherit;text-align:center}
.tg .tg-3xi5{background-color:#ffffff;border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-3we0{background-color:#ffffff;vertical-align:top}
.tg .tg-i81m{background-color:#ffffff;text-align:center;vertical-align:top}
</style>
<table class="tg" style="undefined;table-layout: fixed; width: 529px">
<colgroup>
<col style="width: 143px">
<col style="width: 98px">
<col style="width: 288px">
</colgroup>
  <tr>
    <th class="tg-xf7g">Parameter</th>
    <th class="tg-xf7g">Signal</th>
    <th class="tg-xf7g">Values</th>
  </tr>
  <tr>
    <td class="tg-f5ry">Working Voltage</td>
    <td class="tg-f5ry" colspan="2">                           3.3V/5V</td>
  </tr>
  <tr>
    <td class="tg-f5ry" rowspan="2">Output range</td>
    <td class="tg-f5ry">TVOC</td>
    <td class="tg-28l8">    0 ppb to 60000ppb</td>
  </tr>
  <tr>
    <td class="tg-eh2d">CO₂eq</td>
    <td class="tg-3xi5">    400 ppm to 60000 ppm</td>
  </tr>
  <tr>
    <td class="tg-eh2d" rowspan="2"><br><br>Sampling rate</td>
    <td class="tg-eh2d">TVOC</td>
    <td class="tg-3xi5">1HZ</td>
  </tr>
  <tr>
    <td class="tg-eh2d">CO₂eq</td>
    <td class="tg-3xi5">1HZ</td>
  </tr>
  <tr>
    <td class="tg-3we0" rowspan="7"><br><br><br><br><br><br><br>Resolution<br></td>
    <td class="tg-3we0" rowspan="3"><br><br>TVOC</td>
    <td class="tg-i81m">0 - 2008 ppb / 1 ppb</td>
  </tr>
  <tr>
    <td class="tg-i81m">2008 - 11110 ppb / 6 ppb</td>
  </tr>
  <tr>
    <td class="tg-i81m">11110 - 60000 ppb / 32 ppb</td>
  </tr>
  <tr>
    <td class="tg-3we0" rowspan="4"><br><br><br>CO₂eq</td>
    <td class="tg-i81m">400 - 1479 ppm / 1 ppm</td>
  </tr>
  <tr>
    <td class="tg-i81m">1479 -5144 ppm / 3 ppm</td>
  </tr>
  <tr>
    <td class="tg-i81m">5144 - 17597 ppm / 9 ppm</td>
  </tr>
  <tr>
    <td class="tg-i81m">17597 - 60000 ppm / 31 ppm</td>
  </tr>
  <tr>
    <td class="tg-3we0">Default I2C address</td>
    <td class="tg-i81m" colspan="2">0X58</td>
  </tr>
</table>



## Applications

- Air purifier
- demand-controlled ventilation
- IoT applications
- New house air condition monitor




## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.






## Getting Started

!!!Note
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.



### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove-VOC and eCO2 Gas Sensor-SGP30 |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.



- **Step 1.** Connect Grove-VOC and eCO2 Gas Sensor-SGP30 to port **D2** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![]()



!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - Temperature and Humidity Sensor Pro to Seeeduino as below.


| Seeeduino     | Grove-VOC and eCO2 Gas Sensor-SGP30 |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |




#### Software

- **Step 1.** Download the [Seeed SGP30 library](https://github.com/Seeed-Studio/SGP30_Gas_Sensor) from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Extract the `SGP30_Gas_Sensor-master.zip` you've just downloaded, in the `examples` folder you will see 3 subfolders:


The `absolute_humidity_example` requires external humidity sensor calibration
The `base_example` is simplely collecting date without any calibration
The `baseline_operation_example` can save the data base value to flash. The software will automatically collects the base values and stores them.


We recommand to use the `baseline_operation_example` , then click the `xxx.ino` file to open the example.

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the result.




The result should be like:

```

318
tVOC  Concentration:74ppb
CO2eq Concentration:506ppm
319
tVOC  Concentration:80ppb
CO2eq Concentration:509ppm
320
tVOC  Concentration:66ppb
CO2eq Concentration:500ppm
321
tVOC  Concentration:69ppb
CO2eq Concentration:511ppm
322
tVOC  Concentration:70ppb
CO2eq Concentration:511ppm
323
tVOC  Concentration:60ppb
CO2eq Concentration:493ppm
324
tVOC  Concentration:72ppb
CO2eq Concentration:502ppm

```


!!!Tips
        1- ppm: parts per million. 1 ppm = 1000 ppb (parts per billion)
        
        2- The result is based on `baseline_operation_example.ino`

        3- We tested this demo in our office room, according to your test environment, the results may be different



## Resources

- **[Zip]** [Grove-VOC and eCO2 Gas Sensor-SGP30 eagle file](https://github.com/SeeedDocument/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/raw/master/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip)
- **[PDF]** [SGP30 Datasheet](https://github.com/SeeedDocument/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/raw/master/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)
- **[PDF]** [SGP30 Driver Integration Guide HW I2C](https://github.com/SeeedDocument/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/raw/master/res/Sensirion_Gas_Sensors_SGP30_Driver-Integration-Guide_HW_I2C.pdf)