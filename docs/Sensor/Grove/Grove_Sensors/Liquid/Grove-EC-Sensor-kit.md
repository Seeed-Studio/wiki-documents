---
description: Grove - EC Sensor Kit
title: Grove - EC Sensor Kit
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-EC-Sensor-kit
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png" alt="pir" width={600} height="auto" /></p>


<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html)
With the development of technology,our environments  face large challenge.We need a tool to preliminary test whether the water quality
are reach the standard.Grove EC Sensor is a analog electrical conductivity meter.The electrical conductivity sensor (EC sensor) measures the electrical conductivity in a solution which usually used for aquaculture and water quality testing. The Grove - Electrical Conductivity Sensor is specially designed for a low-cost system with a relatively high accuracy which can cover most applications. The Grove connector and BNC probe interface make it easy to use and very suitable for Arduino and Raspberry Pi project. This Kit includes an EC probe and a driver board, and the driver board support both 3.3V and 5V system.



:::note
    This product is non-RoHS certified.
:::
## Feature

- Widely used for most applications of aquaculture and water quality testing   
- Compact size for easy deployment  
- Support with both Arduino and Rasberry Pi 
- Cost-effective

## Specification
|Items|Values|
|---|---|
|Operating voltage	|3.3V/5V|
|EC Range	|0-2000us/cm|
|Resolution	|±5%（STP）|
|Response time	|＜10sec|
|Probe Interface|	BNC|
|Operating temperature	|5-80℃|

## Platform Supported
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## Getting Started

#### Materials Requied

| Arduino uno | Grove-EC Sensor kit | base shield|
|:--------------:|:--------------:|:--------------:|
|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/arduinouno.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.09.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.06.png" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-694.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2.html)|


#### Hardware Connection

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg" alt="pir" width={600} height="auto" /></p>
:::tip
    Please plug the USB cable, Grove-EC Sensor Interface into Arduino Uno board Interface gently, otherwise , you may damage the port.
:::
- **Step 1.** Plug Grove-EC Sensor into Interface **A1** of a base shield with a Grove Cable.

- **Step 2.** Connect a base shield to Arduino Uno.
- **Step 3.** Connect Arduino Uno to PC via a USB cable.
- **Step 4.** Download the code, please refer to the software part.

- **Step 5.** Run the code and the outcome will display on the screen of **Serial Monitor** in your Arduino IDE.


#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::



- **Step 1.** Download the [Demo code](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip).

- **Step 2.** Add the whole **DFRobot_EC_master.zip** file to your Arduino IDE library file. You can refer to [How to install an Arduino library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)

- **Step 3.** Open the **DFRobot_EC_Test** example file with your Arduino IDE.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png" alt="pir" width={600} height="auto" /></p>

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

#### Software Code
```C++
#include "DFRobot_EC.h"
#include <EEPROM.h>

#define EC_PIN A1
float voltage,ecValue,temperature = 25;
DFRobot_EC ec;

void setup()
{
  Serial.begin(115200);  
  
  ec.begin();
}

void loop()
{
    static unsigned long timepoint = millis();
    if(millis()-timepoint>1000U)  //time interval: 1s
    {
      timepoint = millis();
      voltage = analogRead(EC_PIN)/1024.0*5000;   // read the voltage
      //temperature = readTemperature();          // read your temperature sensor to execute temperature compensation
      ecValue =  ec.readEC(voltage,temperature);  // convert voltage to EC with temperature compensation
      Serial.print("temperature:");
      Serial.print(temperature,1);
      Serial.print("^C  EC:");
      Serial.print(ecValue,2);
      Serial.println("ms/cm");
    }
    ec.calibration(voltage,temperature);          // calibration process by Serail CMD
}

float readTemperature()
{
  //add your code here to get the temperature from your temperature sensor
}
```


:::note

     - Before detecting the target solution, the sensor **MUST** be calibrated by conductivity solutions, and it also **MUST** be put into clean water before detecting a new kind of solution and swiped.

     - Before being measured, the electrode must be calibrated with a standard buffer solution. In order to obtain more accurate results, the known conductivity solutions value should be reliable, and closer to the measured one.

     - Do not immerse in liquid for a long time. Otherwise this will shorten the life of the probe.The platinum black layer is attached to the surface of the sheet metal in the probe. It should avoid any object touching it. It can only be washed with distilled water, otherwise, the platinum black layer will be damaged, resulting in an inaccurate measurement.

     - The sensor **MUST NOT** be dipped in the detecting liquid for a long time.
:::

To ensure accuracy, the probe needs to be calibrated for its first use and after not being used for an extended period of time. The following steps use two-point calibration and therefore require standard buffer solutions of 1413us/cm and 12.88ms/cm. The following steps show how to operate two-point calibration.

- **Step 5.** After you have upload the code to Arduino, open the serial monitor,you can see the temperature and electrical conductivity like below picture.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png" alt="pir" width={600} height="auto" /></p>
- **Step 6.** Use distilled water to wash the probe ,then absorb the residual water-drops with paper. Insert the probe into the 1413us/cm standard buffer solution, stir gently, until the values are stable. Input enterec command in the serial monitor to enter the calibration mode.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png" alt="pir" width={600} height="auto" /></p>
- **Step 7.** Input calec commands to start the calibration. The program will automatically identify which of the two standard buffer solutions is present: either 1413us/cm and 12.88ms/cm. In this step, the standard buffer solution is 1413us/cm.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png" alt="pir" width={600} height="auto" /></p>

- **Step 8.** When the calibration is successful,input exitec command to save the relevant parameters and exit the calibration mode.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png" alt="pir" width={600} height="auto" /></p>
After you finished the above steps, the first point calibration is completed. The second point calibration is the same procedure. Here we use the 12.88ms/cm standard buffer solutions. The calibration process is not repeated here.

After completing the above steps, the two-point calibration is completed, and then it can be used for actual measurement. The relevant parameters in the calibration process have been saved to the EEPROM of the main control board.


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/Grove-EC_Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Resources

- **[ZIP]** [Demo Code library](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip)
- **[PDF]** [CD4060BM Material specification](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/CD4060BM_Material_specification.pdf)
- **[PDF]** [DIP TDS Sensor specification](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DIP_TDS_Sensor_specification.pdf)
- **[PDF]** [LMV324 Material specification](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/LMV324_Material_specification.pdf)

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
