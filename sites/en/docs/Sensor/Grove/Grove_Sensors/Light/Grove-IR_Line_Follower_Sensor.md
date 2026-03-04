---
description:  Grove - Follower V3.0
title:  Grove-IR Line Follower Sensor V3.0 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/top.jpg
slug: /grove_line_follower
last_update:
  date: 10/12/2024
  author: Jason
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/top.jpg" /></div>


## Description

It is designed for use with line-follower robots. It has 2 IR LEDs and 2 IR sensitive phototransistors. The sensors on the board that look like eyes are actually IR LEDs and sensitive phototransistors. When the phototransistor detects infrared light reflected from the IR LEDs, it outputs a digital signal that changes from high to low.


## Features
- Fast response time
- High analytic
- Cut-off visible wavelength λp=940nm
- Adjustment potentiometer and indicator LED
- Dual detection

                                                                                                                                     
## Specification

| Parameter                  | Value/Range                                                   |
|----------------------------|---------------------------------------------------------------|
| Supply Voltag              |  3.3V to 5V                                                   |
| Interface                  | digital                                                       |
| Current Consumption        |50mA                                                           |
| Operating Temperature Range| -40°C to +85°C                                                |


## Getting Started

### indication diagram
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/111111.png"/></div>

### Hardware

**Step 1. Prepare the below stuffs:**

- _Play with Arduino_

| Seeeduino V4.2 | Base Shield|  Grove - Follower V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Connect Grove with Arduino_

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/8.png" /></div>

- _Play with XIAO ESP32 Series_

| Seeed Studio Grove Base for XIAO| XIAO ESP32-S3|  Grove - Follower V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[Get One Now](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|[Get One Now](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Connect Grove with XIAO ESP32S3_

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/7.png" /></div>

Two different combinations, but using the same code.

### Software

- Step 1. Copy the code into Arduino IDE and upload.

```c
#define LEFT 3
#define RIGHT 2

void setup() {
  Serial.begin(9600);
  pinMode(LEFT, INPUT);
  pinMode(RIGHT, INPUT);
}
void loop() {
  int towar_left=digitalRead(LEFT);
  int towar_right=digitalRead(RIGHT);
  Serial.print("line follower : left ");
  Serial.print(towar_left);
  Serial.print("  right ");
  Serial.println(towar_right);
}
```
- Step 2. Open the serial port to view the printed content.

When we place the sensor in the black area, the serial port will print the following content.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/2.png" /></div>

### Demo usage

When we approach the white area, the red light on the sensor board will light up, and when we approach the black area, the red light on the sensor board will turn off.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/5.gif" /></div>



## Resources

* **[SCH]** [Grove IR Line Follower Sensor Reference Information](https://files.seeedstudio.com/wiki/Grove_Line_Follower/SCH.pdf)
* **[Datasheet]**  [ITR9909_Datasheet.PDF](https://files.seeedstudio.com/wiki/Grove_Line_Follower/datasheet.pdf)



## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a></div>