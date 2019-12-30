---
name: Grove-Integrated-Pressure-Sensor-Kit
category: sensor
bzurl: 
surveyurl: 
sku: 110020248
tags:
---


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/master/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-wiki.jpg)


Grove integrated pressure sensor suite (MPX5700AP), this module adopts advanced integrated silicon pressure sensor MPX5700AP, which has the advantages of high precision, good reliability and no calibration. It is very suitable for the construction of Arduino pressure measurement system, capable of measuring air pressure in the range of 15Kpa to 700Kpa.We included a syringe and a rubber tube in the kit.  


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features

 - 2.5% Maximum Error over 0° to 85°C
 - Available in Absolute, Differential and Gauge Configurations
 - Patented Silicon Shear Stress Strain Gauge
 - Durable Epoxy Unibody Element


!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)




## Specification

|Parameter|Value/Range|
|---|---|
|Operating Voltage|	3.3V/5V DC|
| output interface | analog |
|Measuring Range|15Kpa-700Kpa|
|Appearance size|<20*40mm|


## Hardware Overview


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/master/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-pin.jpg)


## Platforms Supported


| Arduino| Raspberry Pi| BeagleBone| Wio| LinkIt ONE|
|--------|-------------|-----------|----|-----------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


!!!Caution  

    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started


### Play With Arduino


!!!Note

    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.




**Materials required**


| Seeeduino V4.2 | Grove-Integrated-Pressure-Sensor-Kit | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/master/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-210-157.png)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|


!!!note

	**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
	**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.




#### Hardware Connection


- **Step 1.** Connect Grove Integrated Pressure Sensor to port **A0** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/master/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-con.jpg)


!!!Note   
     
    If we don't have Grove Base Shield, We also can directly connect Grove-Integrated-Pressure-Sensor-Kit to Seeeduino as below.





| Seeeduino       | Grove-Integrated-Pressure-Sensor-Kit |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| A0            | Yellow                  |



#### Software


!!!Attention

    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.



- **Step 1.** Copy the code below into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).


```c
int rawValue; // A/D readings
int offset = 410; // zero pressure adjust
int fullScale = 9630; // max pressure (span) adjust
float pressure; // final pressure
#define SERIAL Serial

void setup() {
  SERIAL.begin(9600);
}

void loop() {
  rawValue = 0;
  for (int x = 0; x < 10; x++) rawValue = rawValue + analogRead(A0);
  pressure = (rawValue - offset) * 700.0 / (fullScale - offset); // pressure conversion

  SERIAL.print("Raw A/D is  ");
  SERIAL.print(rawValue);
  SERIAL.print("   Pressure is  ");
  SERIAL.print(pressure, 1); // one decimal places
  SERIAL.println("  kPa");
  delay(1000);
}
```


- **Step 2.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**.


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/master/img/result1.png)


- **Step 3.**  Now you can use this sensor, and the output will be like this:


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/master/img/result2.png)


## Resources


- **[ZIP]** [Grove Integrated Pressure Sensor schematic diagram](https://github.com/SeeedDocument/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/raw/master/res/Grove%20-%20Integrated%20Pressure%20Sensor%20Kit%20(MPX5700AP)_v1.0.zip)

- **[PDF]** [LMV358 Datasheet](https://github.com/SeeedDocument/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/raw/master/res/LMV358_datasheet.pdf)

- **[PDF]** [MPX5700AP Datasheet](https://github.com/SeeedDocument/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/raw/master/res/LMV358_datasheet.pdf)


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/raw/master/res/Grove%20-%20Integrated%20Pressure%20Sensor%20Kit%20(MPX5700AP)_v1.0.zip" style="border-radius: 0px 0px 4px 4px; height:500px; border-style: solid; border-width: 1px; border-color: rgb(241,241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" /></div>


## Tech Support


Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>                                                                                                                                                                                                                                                                                                                                                                                                                                               
