---
description: Grove-VOC and eCO2 Gas Sensor(SGP30)
title: Grove-VOC and eCO2 Gas Sensor(SGP30)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-VOC_and_eCO2_Gas_Sensor-SGP30
last_update:
  date: 1/4/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg" alt="pir" width={600} height="auto" /></p>


The Grove-VOC and eCO2 Gas Sensor(SGP30) is an air quality detection sensor. This grove module is based on SGP30, we provide TVOC(Total Volatile Organic Compounds) and CO2eq output for this module.


The SGP30 is a digital multi-pixel gas sensor designed for easy integration into air purifier, demand-controlled ventilation, and IoT applications. Sensirion’s CMOSens®technology offers a complete sensor system on a single chip featuring a digital I2C interface, a temperature controlled micro hotplate, and two preprocessed indoor air quality signals. As the first metal-oxide gas sensor featuring multiple sensing elements on one chip, the SGP30 provides more detailed information about the air quality.



<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::tip
We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.
:::

## Upgradable to Industrial Sensors
With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2103 Wireless CO2, Temperature, and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) for your next successful industrial project.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td align="center"><font size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 Air Temp &amp; Humidity &amp; CO2</strong></a></td>
    </tr>
  </tbody></table>




## Features

- Multi-pixel gas sensor for indoor air quality applications
- Outstanding long-term stability
- I2C interface with TVOC and CO2eq output signals
- Low power consumption
- Chip module tape and reel packaged, reflow solderable


## Specification


<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-eh2d{background-color:#ffffff;border-color:inherit;vertical-align:top}
.tg .tg-xf7g{background-color:#444444;border-color:inherit;:center}
.tg .tg-f5ry{background-color:#ffffff;border-color:inherit}
.tg .tg-28l8{background-color:#ffffff;border-color:inherit;:center}
.tg .tg-3xi5{background-color:#ffffff;border-color:inherit;:center;vertical-align:top}
.tg .tg-3we0{background-color:#ffffff;vertical-align:top}
.tg .tg-i81m{background-color:#ffffff;:center;vertical-align:top}
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
</table> -->

<table border="2" colspan="tg" style={{ width: 529}}>
  <colgroup>
    <col style={{width: 143}}/>
    <col style={{width: 98}}/>
    <col style={{width: 288}}/>
  </colgroup>
  <tr>
    <th colspan="tg-xf7g">Parameter</th>
    <th colspan="tg-xf7g">Signal</th>
    <th colspan="tg-xf7g">Values</th>
  </tr>
  <tr>
    <td colspan="tg-f5ry">Working Voltage</td>
    <td colspan="tg-f5ry" colspan="1">                   3.3V/5V</td>
  </tr>
  <tr>
    <td colspan="tg-f5ry" rowspan="2">Output range</td>
    <td colspan="tg-f5ry">TVOC</td>
    <td colspan="tg-28l8" >  0 ppb to 60000ppb </td>>
  </tr>
  <tr>
    <td colspan="tg-eh2d">CO₂eq</td>
    <td colspan="tg-3xi5">    400 ppm to 60000 ppm</td>
  </tr>
   <tr>
    <td colspan="tg-f5ry" rowspan="2">Sampling 
    rate</td>
    <td colspan="tg-eh2d">TVOC</td>
    <td colspan="tg-3xi5">1HZ</td>
  </tr>
  <tr>
    <td colspan="tg-eh2d">CO₂eq</td>
    <td colspan="tg-3xi5">1HZ</td>
  </tr>
  <tr>
    <td colspan="tg-3we0"
    rowspan="7">Resolution</td>
    <td colspan="tg-3we0" rowspan="3">TVOC</td>
    <td colspan="tg-i81m">0 - 2008 ppb / 1 ppb</td>
  </tr>
  <tr>
    <td colspan="tg-i81m">2008 - 11110 ppb / 6 ppb</td>
  </tr>
  <tr>
    <td colspan="tg-i81m">11110 - 60000 ppb / 32 ppb</td>
  </tr>
  <tr>
    <td colspan="tg-3we0" rowspan="4">CO₂eq</td>
    <td colspan="tg-i81m">400 - 1479 ppm / 1 ppm</td>
  </tr>
  <tr>
    <td colspan="tg-i81m">1479 -5144 ppm / 3 ppm</td>
  </tr>
  <tr>
    <td colspan="tg-i81m">5144 - 17597 ppm / 9 ppm</td>
  </tr>
  <tr>
    <td colspan="tg-i81m">17597 - 60000 ppm / 31 ppm</td>
  </tr>
  <tr>
    <td colspan="tg-3we0">Default I2C address</td>
    <td colspan="tg-i81m" colspan="1">0X58</td>
  </tr>
</table>


## Applications

- Air purifier
- demand-controlled ventilation
- IoT applications
- New house air condition monitor


## Hardware Overview

### Pin Map

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/pin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/pin.jpg" alt="pir" width={600} height="auto" /></p>


### Schematic

**Power**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc2.jpg" alt="pir" width={600} height="auto" /></p>

The typical operating voltage SGP30 is 1.8v, we use a power conversion chip *XC6206P182MR* to provide a stable 3.3V for the MCP9600.


**Bi-directional level shifter circuit**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc1.jpg" alt="pir" width={600} height="auto" /></p>


This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 1.8V, if the I<sup>2</sup>C bus of the Arduino use 5V or 3.3V, this circuit will be needed. In the schematic above, **Q7** and **Q8** are N-Channel MOSFET [BSS138LT3G](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)



## Platforms Supported
<!-- 

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::





## Getting Started

:::note
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::


### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove-VOC and eCO2 Gas Sensor(SGP30) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg" alt="pir" width={500} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank">Get One Now</a>|



:::note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::


- **Step 1.** Connect Grove-VOC and eCO2 Gas Sensor(SGP30) to **I2C** port  of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>



:::note
	If we don't have Grove Base Shield, We also can directly connectGrove-VOC and eCO2 Gas Sensor(SGP30) to Seeeduino as below.
:::

| Seeeduino     | Grove-VOC and eCO2 Gas Sensor(SGP30) |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |




#### Software

- **Step 1.** Download the [Seeed SGP30 library](https://github.com/Seeed-Studio/SGP30_Gas_Sensor) from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Extract the `SGP30_Gas_Sensor-master.zip` you've just downloaded, in the `examples` folder you will see 3 subfolders:


<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/ex.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/ex.png" alt="pir" width={600} height="auto" /></p>



The `absolute_humidity_example` requires external humidity sensor calibration

The `base_example` is simplely collecting date without any calibration

The `baseline_operation_example` can save the data base value to flash. The software will automatically collects the base values and stores them.


We recommand to use the `baseline_operation_example` , then click the `xxx.ino` file to open the example.

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

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


:::tip
        1- ppm: parts per million. 1 ppm = 1000 ppb (parts per billion)
        
        2- The result is based on `baseline_operation_example.ino`

        3- We tested this demo in our office room, according to your test environment, the results may be different
:::


### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove-VOC and eCO2 Gas Sensor(SGP30)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg" alt="pir" width={500} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html)|


- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect Grove-VOC and eCO2 Gas Sensor(SGP30) to port I2C of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30.jpg" alt="pir" width={600} height="auto" /></p>



#### Software

:::note

     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_Python_SGP30.git

```

- **Step 3**. Excute below commands to run the code.

```
cd Seeed_Python_SGP30
sudo python3 setup.py install
cd examples
python3 sgp30_simpleread.py
```

**Error**

It might cause some errors but we should not worry about it.

We copy the path to the error file.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_2.png" alt="pir" width={600} height="auto" /></p>


Here is the path that is shown as the example :  “/usr/local/lib/python3.7/dist-packages/sgp30-0.1.6-py3.7.egg/sgp30"

Use "cd" command to jump in that path and use your compiler to change the codes of "sgp30.py", for example : “sudo nano sgp30.py”.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_3.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_3.png" alt="pir" width={600} height="auto" /></p>

We delete "SMBusWrapper" on the second line and then save it.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_4.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_4.png" alt="pir" width={600} height="auto" /></p>

Go back to “Seeed_Python_SGP30/examples” folder，apply "python3 sgp30_simpleread.py" and all will be fine。

Following is the sgp30_simpleread.py code.

```python
import seeed_sgp30
from grove.i2c import Bus

sgp30 = seeed_sgp30.grove_sgp30(Bus())
while True:
  data = sgp30.read_measurements()
  co2_eq_ppm, tvoc_ppb = data.data
  print("\r  tVOC = {} ppb CO2eq = {}  ".format(
                               tvoc_ppb, co2_eq_ppm))
```

:::success
    If everything goes well, you will be able to see the following result.
:::   
```python

pi@raspberrypi:~/Seeed_Python_SGP30/examples $ python3 sgp30_simpleread.py
  tVOC = 9 ppb CO2eq = 943  
  tVOC = 9 ppb CO2eq = 931  
  tVOC = 10 ppb CO2eq = 920  
  tVOC = 14 ppb CO2eq = 904  
  tVOC = 12 ppb CO2eq = 888  
  tVOC = 13 ppb CO2eq = 873  
  tVOC = 11 ppb CO2eq = 865  
  tVOC = 11 ppb CO2eq = 842  
  tVOC = 9 ppb CO2eq = 828  
  tVOC = 10 ppb CO2eq = 814  
  tVOC = 11 ppb CO2eq = 794  
  tVOC = 14 ppb CO2eq = 786  
  tVOC = 9 ppb CO2eq = 764  
  tVOC = 12 ppb CO2eq = 744  
  tVOC = 11 ppb CO2eq = 739  
  tVOC = 12 ppb CO2eq = 715  
  tVOC = 15 ppb CO2eq = 688  
  tVOC = 13 ppb CO2eq = 669  

```


You can quit this program by simply press ++ctrl+c++.







## Notice

- The SGP30 uses a dynamic baseline compensation algorithm and on-chip calibration parameters to provide two complementary air quality signals. The baseline should be stored in EEPROM.When there is no baseline value in EEPROM at the first time power-ON or the baseline record is older than seven days.The sensor has to run for 12 hours until the baseline can be stored. You can refer to program flow chart blow.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/Get%20baseline%20program%20flow%20chart%20.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/Get%20baseline%20program%20flow%20chart%20.png" alt="pir" width={600} height="auto" /></p>



- The H2_Signal and Ethanol_signal,Both signals can be used to calculate gas concentrations c relative to a reference concentration cref by ln(C/Cref)=(Sref-Sout)/a with a = 512, sref the H2_signal or Ethanol_signal output at the reference concentration, and sout = Sout_H2 or Sout = Sout_EthOH.

- For more accurate measurement,You can set the abslute humidity compensation,Defalt value is 11.57g/m3,A little troublesome is that you should get relatively humidity value of environment from another way,Because there is no humidity measurement part integrated in SGP30..

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/absolute%20humidity%20with%20the%20formula.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/absolute%20humidity%20with%20the%20formula.png" alt="pir" width={600} height="auto" /></p>


Luckly, It's not much neccessary in a normal situation

## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources

- **[Zip]** [Grove-VOC and eCO2 Gas Sensor(SGP30) eagle file](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip)
- **[PDF]** [SGP30 Datasheet](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)
- **[PDF]** [BSS138L Datasheet](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf)
- **[PDF]** [SGP30 Driver Integration Guide HW I2C](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Driver-Integration-Guide_HW_I2C.pdf)




## Tech Support
If you have any technical issue.  submit the issue into our [forum](https://forum.seeedstudio.com/).



