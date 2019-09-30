---
name: Grove - CO2 & Temperature & Humidity Sensor (SCD30)
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 101020634
---


![](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/img/main.jpg)


The Grove - CO2 & Temperature & Humidity Sensor (SCD30) is a high precision carbon dioxide sensor, which is based on Sensirion SCD30. The measuring range of this sensor is 0 ppm-40'000 ppm, and the measurement accuracy can reach to ±(30 ppm + 3%) between 400ppm to 10'000ppm.  
 
In addition to the Non-Dispersive Infrared(NDIR) measurement technology for CO2 detection, the SCD30 integrates Sensirion humidity and temperature sensors on the same sensor module.    



<p style=":center"><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


!!!Tip
    We've released the [Seeed Gas Sensor Selection Guide](http://wiki.seeedstudio.com/Seeed_Gas_Sensor_Selection_Guide/), it will help you choose the gas sensor that best suits your needs.


## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - CO2 & Temperature & Humidity Sensor (SCD30) V1.0 | Initial                                                                                               | Dec 2018      |


## Application Ideas

- Air Purifier
- Environmental Monitoring
- Plant Environmental Monitoring



## Feature

- NDIR CO2 sensor technology
- Integrated temperature and humidity sensor
- Best performance-to-price ratio
- Dual-channel detection for superior stability
- Digital interface I2C
- Low power consumption
- Ultra-long sensor lifetime (15 years)




##Specification

|Parameter|Value|
|---|---|
|Supply voltage|3.3V / 5V|
|Operating temperature| 0 – 50℃|
|Storage temperature|- 40°C – 70°C|
|Humidity operating conditions|0 – 95 %RH|
|Sensor lifetime|15 years|
|Interface|I2C|
|I2C Address|0x61|
|Size|L: 58mm W: 38mm H: 19mm|
|Weight|19.7g|
|Package Size|L: 110mm W: 70mm H: 40mm|   
|Gross weight| 27g|




<div align="center"><b>Table 1.</b><i>General Specification</i></div>


|Parameter|Conditions|Value|
|---|---|----|
|CO2 measurement range||0 – 40’000 ppm|
|Accuracy| 400ppm – 10'000ppm| ± (30 ppm + 3%)|
|Repeatability|400ppm – 10'000ppm|10ppm|
|Response time|τ63%|20 s|

<div align="center"><b>Table 2.</b><i>CO2 Sensor Specifications</i></div>



|Parameter|Conditions|Value|
|---|---|----|
|Humidity measurement range||0 %RH – 100 %RH|
|Accuracy| 0 – 50°C, 0 – 100%RH| ±2 %RH|
|Repeatability||0.1 %RH|
|Response time|τ63%|8 s|

<div align="center"><b>Table 3.</b><i>Humidity Sensor Specifications</i></div>



|Parameter|Conditions|Value|
|---|---|----|
|Temperature measurement range||-40°C – 120°C|
|Accuracy| 0 – 50°C| ±0.5°C|
|Repeatability||0.1°C|
|Response time|τ63%|> 2 s|

<div align="center"><b>Table 4.</b><i>Temperature Sensor Specifications</i></div>



|Parameter|Conditions|Value|
|---|---|----|
|Average current|Update interval 2 s|19 mA|
|Max. current| During measurement| 75 mA|
|Energy consumption|1 measurement|120 mJ|


<div align="center"><b>Table 5.</b><i>Electrical Specifications</i></div>



## Hardware Overview



<div align="center">
<figure>
  <p style=":center"><a href="https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/img/pinout.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/img/pinout.jpg" /></a></p>
</figure>
</div>


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |




## Getting Started


### Play With Arduino


#### Hardware

**Materials required**


| Seeeduino V4.2 | Base Shield | Grove-CO2 & T&H SCD30|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/img/thumbnial.png)
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|


>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.




!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.



**Hardware Connection**


- **Step 1.** Connect the Grove - CO2 & Temperature & Humidity Sensor (SCD30) to the **I^2^C** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.



![](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/img/connect.png)



#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the [Grove Multi Switch](https://github.com/Seeed-Studio/Seeed_SCD30) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.



- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    a. Open it directly in the Arduino IDE via the path: **File --> Examples -->Grove_scd30_co2_sensor-->SCD30_Example**. 

    ![](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/img/c1.jpg)
    
    b. Open it in your computer by click the **SCD30_Example.ino** which you can find in the folder **XXXX\Arduino\libraries\Seeed_SCD30-master\examples\SCD30_Example**, **XXXX** is the location you installed the Arduino IDE.
    
    ![](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/img/c3.jpg)
    
    c. Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.




```C++
#include "SCD30.h"

#if defined(ARDUINO_ARCH_AVR)
	#pragma message("Defined architecture for ARDUINO_ARCH_AVR.")
	#define SERIAL Serial
#elif defined(ARDUINO_ARCH_SAM)
	#pragma message("Defined architecture for ARDUINO_ARCH_SAM.")
	#define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_SAMD)
	#pragma message("Defined architecture for ARDUINO_ARCH_SAMD.")	
	#define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_STM32F4)
	#pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")
	#define SERIAL SerialUSB
#else
	#pragma message("Not found any architecture.")
	#define SERIAL Serial
#endif



void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    SERIAL.println("SCD30 Raw Data");
    scd30.initialize();
}

void loop()
{
    float result[3] = {0};
    
    if(scd30.isAvailable())
    {
        scd30.getCarbonDioxideConcentration(result);
        SERIAL.print("Carbon Dioxide Concentration is: ");
        SERIAL.print(result[0]);
        SERIAL.println(" ppm");
        SERIAL.println(" ");
        SERIAL.print("Temperature = ");
        SERIAL.print(result[1]);
        SERIAL.println(" ℃");
        SERIAL.println(" ");
        SERIAL.print("Humidity = ");
        SERIAL.print(result[2]);
        SERIAL.println(" %");
        SERIAL.println(" ");
        SERIAL.println(" ");
        SERIAL.println(" ");
    }
    
    delay(2000);
}

```

!!!Attention
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).




!!!Success
		If everything goes well, the raw data of the Grove - CO2 & Temperature & Humidity Sensor (SCD30) should be able to read from Serial Monitor.

![](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/img/c2.jpg)



## Calibration and Placement

In order to get more accurate results in a practical scenario, you need to pay attention to the following two points:  

- 1. The correct placement  
- 2. Calibration

### Placement
 
Please refer to the [SCD30 Design-In Guidelines](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf) for the correct placement.


### Calibration


When activated for the first time a period of minimum 7 days is needed so that the algorithm can find its initial parameter set for ASC. The sensor has to be exposed to fresh air for at least 1 hour every day. Also during that period, the sensor may not be disconnected from the power supply, otherwise the procedure to find calibration parameters is aborted and has to be restarted from the beginning. The successfully calculated parameters are stored in non-volatile memory of the SCD30 having the effect that after a restart the previously found parameters for ASC are still present. For more detail about the calibration, please refer to the [Interface Description Sensirion SCD30 Sensor Module](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)


There are two ino sample in the SCD30 library foldor, you can run the `SCD30_auto_calibration.ino` to start the calibration.


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>






## Resources

- **[ZIP]** [Grove - CO2 & Temperature & Humidity Sensor (SCD30) Schematic file](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip)
- **[PDF]** [SCD30 Design-In Guideline](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf)
- **[PDF]** [SCD30 Datasheet](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/res/Sensirion_CO2_Sensors_SCD30_Datasheet.pdf)
- **[PDF]** [SCD30 Interface Description](https://github.com/SeeedDocument/Grove-CO2-Temperature-Humidity-Sensor-SCD30/raw/master/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)





## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>