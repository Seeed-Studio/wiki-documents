---
description:  Grove - Color Sensor V3.0 - I2C interface - VEML6040 based
title:  Grove-Color Sensor V3.0 - I2C interface 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove_Color/top.jpg 
slug: /grove_color_sensor_v3_0_iic
last_update:
  date: 10/12/2024
  author: Jason
---


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove_Color/top.jpg" /></div>

## Description

It is a sensor to measure the color chromaticity of ambient light or the color of objects. With the synchronization input pin, an external pulsed light source can provide precise synchronous conversion control.


## Features
- Color Detection: Measures red, green, blue, and white light components.
- I2C Interface: Easy integration with microcontrollers via I2C for data access.
- Supply Voltage: Operates at 3.3V or 5V.
- Synchronization: Can work with an external pulsed light source for accurate readings.
- Compact Design: Small form factor for easy integration into various projects.
- Low Power Consumption: Ideal for battery-operated devices.


## Specification

| Parameter                  | Value/Range                                                   |
|----------------------------|---------------------------------------------------------------|
| Color Channels             |   Red, green, blue, and clear (white)                         |
| Supply Voltag              |    3.3V to 5V                                                 |
| Interface                  |        I2C                                                    |
| Resolution                 |16-bit color data output                                       |
| Operating Temperature Range|     -40°C to +85°C                                            |
| Current Consumption        |      200μA                                                    |
| Selectable maximum detection range |515.4, 1031, 2062, 4124, 8248, or 16 496  lux with highest sensitivity 0.007865 lux/step| 


## Getting Started

### indication diagram
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Grove_Color/22222.png" /></div>

### Hardware

**Step 1. Prepare the below stuffs:**

- _Play with Arduino_

| Seeeduino V4.2 | Base Shield| Grove - Color Sensor V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Connect Grove with Arduino_


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/0.png" /></div>


- _Play with XIAO ESP32 Series_

| Seeed Studio Grove Base for XIAO| XIAO ESP32-S3| Grove - Color Sensor V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[Get One Now](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|[Get One Now](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Connect Grove with XIAO ESP32S3_


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/1.png" /></div>


Two different combinations, but using the same code.

### Software

- Step 1. DownLoad Library


Install the [VEML6040](https://files.seeedstudio.com/wiki/Grove_Color/VEML6040.zip") library.


- Step 2. Copy the code into Arduino IDE and upload.

```c
#include "Wire.h"
#include "veml6040.h"

VEML6040 RGBWSensor;

void setup() {
  Serial.begin(9600);
  Wire.begin(); 
  if(!RGBWSensor.begin()) {
    Serial.println("ERROR: couldn't detect the sensor");
    while(1){}
  }
   
	RGBWSensor.setConfiguration(VEML6040_IT_320MS + VEML6040_AF_AUTO + VEML6040_SD_ENABLE);
	
  delay(1500);
  Serial.println("Vishay VEML6040 RGBW color sensor auto mode example");
  Serial.println("CCT: Correlated color temperature in \260K");
  Serial.println("AL: Ambient light in lux");
  delay(1500);
}

void loop() {
  Serial.print("RED: ");
  Serial.print(RGBWSensor.getRed());  
  Serial.print(" GREEN: ");
  Serial.print(RGBWSensor.getGreen());  
  Serial.print(" BLUE: ");
  Serial.print(RGBWSensor.getBlue());  
  Serial.print(" WHITE: ");
  Serial.print(RGBWSensor.getWhite()); 
  Serial.print(" CCT: ");
  Serial.print(RGBWSensor.getCCT());  
  Serial.print(" AL: ");
  Serial.println(RGBWSensor.getAmbientLight()); 
  delay(400);
}
```
- Step 3. Open the serial port to view the printed content.

When I placed the color sensor on the white area of our viewer, we opened the serial port and found that the value of WHITE was the highest

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/12.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/4.png" /></div>






## Resources

* **[SCH]** [Grove_Color_Sensor Reference Information](https://files.seeedstudio.com/wiki/Grove_Color/SCH.pdf)
* **[Datasheet]**  [VISHAY_VEML6040A3OG_Datasheet.PDF](https://files.seeedstudio.com/wiki/Grove_Color/314020801_VISHAY_VEML6040A3OG_Datasheet.pdf)



## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a></div>