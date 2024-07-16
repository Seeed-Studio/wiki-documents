---
description: Grove - 3-Axis Digital Accelerometer 40g (ADXL357)
title: Grove - 3-Axis Digital Accelerometer 40g (ADXL357)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digital_Accelerometer_40g-ADXL357
last_update:
  date: 1/6/2023
  author: shuxu hu
---



<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png" alt="pir" width={600} height="auto" /></p>



You can find a variety of [3-axis accelerometers](https://www.seeedstudio.com/tag/accelerometer.html) on our website that can meet different scenarios and needs. This time, we bring you the industrial grade, high stability, high precision and low power ADI ADXL series three-axis accelerometers.  

The Grove - 3-Axis Digital Accelerometer ±40g (ADXL357) is a digital output [MEMS](https://www.seeedstudio.com/tag/MEMS.html)  Accelerometer. This sensor has three different selectable measuring ranges and accuracies: ±10g@51200 LSB/g,  ±20g@25600 LSB/g, ±40g@12800 LSB/g. You just need to do little calibration work to get a relatively accurate result. It output all the data via grove I2C port, and the I2C address is also selectable. What's more, we also provide two interrupt output pins which can be configured into 4 modes.

The ADI ADXL Series Accelerometer includes four products that will meet your different range and output needs:

Product|Measurement Range|Output Port
-----|-----|----
[Grove - 3-Axis Analog Accelerometer ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|Analog
[Grove - 3-Axis Analog Accelerometer ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|Analog
[Grove - 3-Axis Digital Accelerometer ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|Digital I2C
[Grove - 3-Axis Digital Accelerometer ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|Digital I2C

 
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)

## Features

- Industry leading noise, minimal offset drift over temperature, and long-term stability, enabling precision applications with minimal calibration.
- Hermetic package offers excellent long-term stability 0 g offset vs. temperature (all axes): 0.75 mg/°C maximum
- Ultralow noise density (all axes): 80 μg/√Hz
- Build-in 20-bit analog-to-digital converter (ADC)
- Low drift, low noise, and low power
- Support two channel interrupt output
- Support FIFO(96*21-bit)




## APPLICATIONS

- Inertial measurement units (IMUs)/altitude and heading reference systems (AHRSs)
- Platform stabilization systems
- Structural health monitoring
- Condition monitoring
- Seismic imaging
- Tilt sensing
- Robotics

## Specification

|Parameter|Value|
|---|---|
|Supply voltage|3.3V / 5V|
|Operating ambient temperature| -40 – 125℃|
|Sensitivity at X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub> / (Ratiometric to V<sub>1P8ANA)</sub>|±10 g@80 mv/g (Typ.) / ±20 g@40 mv/g (Typ.) / ±40 g@20 mv/g (Typ.)|
|Sensitivity Change due to Temperature|±0.01%/°C  (TA = −40°C to +125°C)|
|0g OFFSET / (Referred to V1P8ANA/2)|±125 mg(Typ.)|
|Output interface|Digital|

## Pinout

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>




## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|


## Getting Started

### Play With Arduino


**Materials required**


| Seeeduino V4.2 | Base Shield |Grove 3-aixs Accelermeter ADXL357|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|



>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.


:::note
		**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
	**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

#### Hardware Connection


- **Step 1.** Connect the Grove - 3-Axis Analog Accelerometer ±20g (ADXL357) to the **I2c** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/_DAS3077.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/_DAS3077.png" alt="pir" width={600} height="auto" /></p>


#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::      
- **Step 1.** Download the [Seeed_ADXL_357 library](https://github.com/Seeed-Studio/Seeed_ADXL357B) from Github.

- **Step 2**. Refer to How to [install library](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) to install library for Arduino.

- **Step 3**. Then open `example/ADXL_357/basic_demo` 
<!-- ![Alt text](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/1555916779373.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/1555916779373.png" alt="pir" width={600} height="auto" /></p>

```cpp
//basic_demo.ino
#include "Seeed_adxl357b.h"


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


#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250
int32_t cali_buf[3][CALI_BUF_LEN];
int32_t cali_data[3];

float factory;

Adxl357b  adxl357b;


int32_t deal_cali_buf(int32_t *buf)
{
	int32_t cali_val = 0;
	
	for(int i = 0;i < CALI_BUF_LEN;i++)
	{
		cali_val += buf[i];
	}
	cali_val = cali_val/CALI_BUF_LEN;
	return (int32_t)cali_val;
}


void calibration(void)
{
	int32_t x;
	SERIAL.println("Please Place the module horizontally!");
	delay(1000);
	SERIAL.println("Start calibration........");
	
	for(int i=0;i<CALI_BUF_LEN;i++)
	{
		if(adxl357b.checkDataReady())
		{
			if(adxl357b.readXYZAxisResultData(cali_buf[0][i],cali_buf[1][i],cali_buf[2][i]))
			{
			}
		}
		delay(CALI_INTERVAL_TIME);
		// SERIAL.print('.');
	}
	// SERIAL.println('.');
	for(int i=0;i<3;i++)
	{
		cali_data[i] =  deal_cali_buf(cali_buf[i]);
		SERIAL.println(cali_data[i]);
	}
	x = (((cali_data[2] - cali_data[0]) + (cali_data[2] - cali_data[1]))/2);
	factory = 1.0 / (float)x;
	// SERIAL.println(x);
	SERIAL.println("Calibration OK!!");
}






void setup(void)
{
	uint8_t value = 0;
	float t;
	
	SERIAL.begin(115200);
	if(adxl357b.begin())
	{
		SERIAL.println("Can't detect ADXL357B device .");
		while(1);
	}
	SERIAL.println("Init OK!");
	/*Set full scale range to ±40g*/
	adxl357b.setAdxlRange(FOURTY_G);
	/*Switch standby mode to measurement mode.*/
	adxl357b.setPowerCtr(0);
	delay(100);
	/*Read Uncalibration temperature.*/
	adxl357b.readTemperature(t);
	
	SERIAL.print("Uncalibration  temp = ");
	SERIAL.println(t);
	/**/
	calibration();

}


void loop(void)
{
	int32_t x,y,z;
	uint8_t entry = 0;
	if(adxl357b.checkDataReady())
	{
		if(adxl357b.readXYZAxisResultData(x,y,z))
		{
			SERIAL.println("Get data failed!");
		}
		SERIAL.print("X axis = ");
		SERIAL.print(x*factory);
		SERIAL.println('g');
		SERIAL.print("Y axis = ");
		SERIAL.print(y*factory);
		SERIAL.println('g');
		SERIAL.print("Z axis = ");
		SERIAL.print(z*factory);
		SERIAL.println('g');
		
	}
	delay(100);
}




```
- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.

- **Step 6. Calibration** wait for calibration, just few seconds the calibration will be finished

- **Step 7.** Now you can use this sensor, and the output will be like this:


```cpp
Start calibration.......Init OK!
Uncalibration  temp = 29.20
Please Place the module horizontally!
Start calibration........
-1652
11143
6063
Calibration OK!!
X axis = -1.24g
Y axis = 8.50g
Z axis = 4.55g
X axis = -1.21g
Y axis = 8.43g

```


## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>






## Resources

- **[ZIP]** [Grove-3-Axis_Digital_Accelerometer-40g-ADXL357 Schematic file](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip)
- **[PDF]** [ADXL 357 Datasheet](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/ADXL357.pdf)



## Tech Support & Product Discussion




Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
