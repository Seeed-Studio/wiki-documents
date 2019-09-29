---
name: Grove - 3-Axis Digital Accelerometer ±200g (ADXL372)
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 101020632

---

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/master/img/101020632-preview.png)


You can find a variety of [3-axis accelerometers](https://www.seeedstudio.com/tag/accelerometer.html) on our website that can meet different scenarios and needs. This time, we bring you the industrial grade, high stability, high precision and low power ADI ADXL series three-axis accelerometers.  

The Grove - 3-Axis Digital Accelerometer ±200g (ADXL372) is a ultralow power digital output [MEMS](https://www.seeedstudio.com/tag/MEMS.html)  Accelerometer, it can provide a 12-bit output at 100 mg/LSB scale factor. The most notable feature of this sensor is its ultra-low power consumption(only 22μA in measurment mode) and large measurement range(±200g). All the data output via the Grove I2C port, the I2C address is changeable. In order to meet a wider range of measurement needs, the sampling rate can be selected from 400Hz/800Hz/1600Hz/3200Hz/6400Hz, and the bandwidth can be selected from 200Hz/400Hz/800Hz/1600Hz/3200Hz. In addition to being used as an acceleration measurement, you can also use this module to do impact and shock detection.


The ADI ADXL Series Accelerometer includes four products that will meet your different range and output needs:

Product|Measurement Range|Output Port|Power Consumption
-----|-----|----|----
[Grove - 3-Axis Analog Accelerometer ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10<br>±20g|Analog|measurement mode:150 μA<br>standby mode:21 μA
[Grove - 3-Axis Analog Accelerometer ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g<br>±40g|Analog|measurement mode:150 μA<br>standby mode:21 μA
[Grove - 3-Axis Digital Accelerometer ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g<br>±20g@25600 LSB/g<br>±40g@12800 LSB/g|Digital I2C|measurement mode:200μA
[Grove - 3-Axis Digital Accelerometer ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|Digital I2C|measurement mode:22μA

 
<p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- Large measuring range: ±200g
- Ultralow power consumption: 22 μA at 3200 Hz ODR
- Selectable oversampling ratio and bandwidth
- Deep embedded FIFO to minimize host processor load
- Build-in 12-bit analog-to-digital converter (ADC)



## APPLICATIONS

- Portable Internet of Things (IoT) edge nodes
- Concussion and head trauma detection
- Impact and shock detection
- Asset health assessment



## Pinout

![](https://github.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/raw/master/img/pinout1.jpg)

![](https://github.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/raw/master/img/pinout2.jpg)

## Specification

|Parameter|Value|
|---|---|
|Supply voltage|3.3V / 5V|
|Operating ambient temperature| -40 – 125℃|
|Sensitivity at X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub><br>(Ratiometric to V<sub>1P8ANA)</sub>|±50mg/°C(Nowmal Operation.)<br>±35mg/°C(Low Noise Mode.)|
|Sensitivity Change due to Temperature|±0.01%/°C  (TA = −40°C to +125°C)|
|0g OFFSET|±1g(.Typ)|
|Output interface|Digital|

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |






## Getting Started

### Play With Arduino


**Materials required**


| Seeeduino V4.2 | Base Shield |Grove 3-aixs Accelermeter ADXL372|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/master/img/thumbnail.jpg)
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|



>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


#### Hardware Connection


- **Step 1.** Connect the Grove - 3-Axis Analog Accelerometer ±200g (ADXL372) to the **I2c** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/master/img/_DAS3075.png)


#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.



- **Step 1.** Download the [Seeed_ADXL_372 library](https://github.com/Seeed-Studio/Accelerometer_ADXL372) from Github.

- **Step 2**. Refer to How to [install library](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) to install library for Arduino.
- **Step 3**. Then open `example/ADXL_372/continuous_reading` 
![Alt text](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/master/img/1555913126073.png)

```cpp
//continuous_reading.ino

#include "Wire.h"
#include "adxl372.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SERIALUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif


float cali_data[3];

#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250

float cali_buf[3][CALI_BUF_LEN];


ADXL372 acc;
xyz_t xyz;

float deal_cali_buf(float *buf)
{
	float cali_val = 0;
	
	for(int i = 0;i < CALI_BUF_LEN;i++)
	{
		cali_val += buf[i];
	}
	cali_val = cali_val/CALI_BUF_LEN;
	return (float)cali_val;
}


void calibration(void)
{
	SERIAL.println("Please Place the module horizontally!");
	delay(1000);
	SERIAL.println("Start calibration........");
	
  
	for(int i=0;i<CALI_BUF_LEN;i++)
	{
		while (!(acc.status() & DATA_READY)); 
		acc.read(&xyz);
		cali_buf[0][i] = xyz.x;
		cali_buf[1][i] = xyz.y;
		cali_buf[2][i] = xyz.z;
		delay(CALI_INTERVAL_TIME);
		SERIAL.print('.');
	}
	SERIAL.println('.');
	for(int i=0;i<3;i++)
	{
		cali_data[i] =  deal_cali_buf(cali_buf[i]);
		if(2 == i){
      
			cali_data[i] -= 10;
		}
		SERIAL.println(cali_data[i]);
	}
	SERIAL.println("Calibration OK!!");
}


void setup() {
  SERIAL.begin(115200);

  acc.begin();
  
  SERIAL.println(acc.id(), HEX);
  acc.timing_ctrl(RATE_400);
  acc.measurement_ctrl(BW_200, true);
  acc.power_ctrl(MEASUREMENT_MODE);
  acc.setActiveTime(10);

  calibration();
}

void loop() {
  if (acc.status() & DATA_READY) {
    acc.read(&xyz);
    SERIAL.print("X position acc = ");
    SERIAL.print((xyz.x - cali_data[0]) / 10.0);
    SERIAL.println(" g ");
    SERIAL.print("Y position acc = ");
    SERIAL.print((xyz.y - cali_data[1]) / 10.0);
    SERIAL.println(" g ");
    SERIAL.print("Z position acc = ");
    SERIAL.print((xyz.z - cali_data[2]) / 10.0);
    SERIAL.println(" mg ");
  }
  SERIAL.println("   ");
  SERIAL.println("   ");
  delay(1000);
}
```


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).
- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.

- **Step 6. Calibration** wait for calibration, just few seconds the calibration will be finished

- **Step 7.** Now you can use this sensor, and the output will be like this:


```C++
Please Place the module horizontally!
Start calibration........
................
18.07
-10.73
-40.13
Calibration OK!!
X position acc = 0.09 g 
Y position acc = 0.17 g 
Z position acc = 1.31 mg 
   
   
X position acc = -0.11 g 
Y position acc = -0.03 g 
Z position acc = 1.31 mg 
   


```




## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/blob/master/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>





## Resources

- **[ZIP]** [Grove-3-Axis_Digital_Accelerometer-200g-ADXL372 Schematic file](https://github.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/blob/master/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip)
- **[PDF]** [ADXL 372 Datasheet](https://github.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/blob/master/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip)



## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>