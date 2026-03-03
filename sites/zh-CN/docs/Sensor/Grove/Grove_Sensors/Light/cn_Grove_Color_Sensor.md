---
description: Grove - 颜色传感器 V3.0 - I2C 接口 - 基于 VEML6040
title: Grove-颜色传感器 V3.0 - I2C 接口
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove_Color/top.jpg 
slug: /cn/grove_color_sensor_v3_0_iic
last_update:
  date: 10/12/2024
  author: Jason
---


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove_Color/top.jpg" /></div>

## 描述

这是一个用于测量环境光色度或物体颜色的传感器。通过同步输入引脚，外部脉冲光源可以提供精确的同步转换控制。


## 特性
- 颜色检测：测量红、绿、蓝和白光分量。
- I2C 接口：通过 I2C 轻松与微控制器集成进行数据访问。
- 供电电压：工作电压为 3.3V 或 5V。
- 同步：可与外部脉冲光源配合工作以获得准确读数。
- 紧凑设计：小尺寸外形，便于集成到各种项目中。
- 低功耗：适用于电池供电设备。


## 规格

| 参数                       | 值/范围                                                       |
|----------------------------|---------------------------------------------------------------|
| 颜色通道                   | 红、绿、蓝和透明（白）                                        |
| 供电电压                   | 3.3V 至 5V                                                   |
| 接口                       | I2C                                                          |
| 分辨率                     | 16位颜色数据输出                                              |
| 工作温度范围               | -40°C 至 +85°C                                               |
| 电流消耗                   | 200μA                                                        |
| 可选最大检测范围           | 515.4、1031、2062、4124、8248 或 16496 勒克斯，最高灵敏度 0.007865 勒克斯/步| 


## 入门指南

### 指示图
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Grove_Color/22222.png" /></div>

### 硬件

**步骤 1. 准备以下物品：**

- _与 Arduino 配合使用_

| Seeeduino V4.2 | Base Shield| Grove - 颜色传感器 V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _连接 Grove 与 Arduino_


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/0.png" /></div>


- _与 XIAO ESP32 系列配合使用_

| Seeed Studio Grove Base for XIAO| XIAO ESP32-S3| Grove - 颜色传感器 V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[立即购买](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|[立即购买](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _连接 Grove 与 XIAO ESP32S3_


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/1.png" /></div>


两种不同的组合，但使用相同的代码。

### 软件

- 步骤 1. 下载库文件


安装 [VEML6040](https://files.seeedstudio.com/wiki/Grove_Color/VEML6040.zip") 库。


- 步骤 2. 将代码复制到 Arduino IDE 并上传。

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
- 步骤 3. 打开串口查看打印内容。

当我将颜色传感器放置在查看器的白色区域时，我们打开串口发现 WHITE 的值是最高的

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/12.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/4.png" /></div>

## 资源

* **[SCH]** [Grove_Color_Sensor 参考信息](https://files.seeedstudio.com/wiki/Grove_Color/SCH.pdf)
* **[数据手册]**  [VISHAY_VEML6040A3OG_Datasheet.PDF](https://files.seeedstudio.com/wiki/Grove_Color/314020801_VISHAY_VEML6040A3OG_Datasheet.pdf)



## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a></div>