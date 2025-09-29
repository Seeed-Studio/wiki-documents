---
description: Xadow - 气压计
title: Xadow - 气压计
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Barometer
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Baro_Meter_01.jpg)

该模块可以测量当前环境的气压和温度，然后您可以将这些信号转换为海拔信息。如果您计划使用 Xadow 制作可穿戴设备并在爬山时测量海拔高度，那么该模块将是您的完美选择。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Barometer-p-1522.html)

## 规格
---
- 工作电压：1.8 ~ 3.3v
- 压力范围：300 ~ 1100hPa（+9000m ~ 4500m 海拔范围）
- 低功耗
- 控制模式：I2C（地址 0x77）
- 工作温度：-40 ~ +85 °C
- 尺寸：25.43mm x 20.35mm

## 演示
---
该演示将向您展示如何获取当前环境的气压和温度。

**硬件安装**

![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/XadowBarometerUsage.jpg)

:::note
    当将 Xadow 气压计连接到 Xadow 主板时，您需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::

## 下载库
----
- Xadow 气压计与 Grove - 气压传感器共享库。您可以直接从 [Github](https://github.com/Seeed-Studio/Grove_Barometer_Sensor) 下载 [库](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)。
- 现在您可以打开代码并将其上传到 Xadow 主板。如果您尚未安装 Xadow 驱动程序，可以通过参考 Wiki 主页面上的 [入门指南](https://wiki.seeedstudio.com/cn/Xadow_Main_Board/) 来学习操作步骤。

```
/*
* 从 BMP085 获取气压、海拔和温度。
* 以 9600 波特率将数据打印到串口监视器。
*/
#include "Barometer.h"
#include <Wire.h>
float temperature;
float pressure;
float atm;
float altitude;
Barometer myBarometer;
void setup(){
  Serial.begin(9600);
  myBarometer.init();
}

void loop()
{
   temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //获取温度，必须先调用 bmp085ReadUT
   pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//获取气压
   altitude = myBarometer.calcAltitude(pressure); //未补偿计算 - 单位为米
   atm = pressure / 101325;

  Serial.print("温度: ");
  Serial.print(temperature, 2); //显示两位小数
  Serial.println("度 C");

  Serial.print("气压: ");
  Serial.print(pressure, 0); //仅显示整数
  Serial.println(" Pa");

  Serial.print("相对大气压: ");
  Serial.println(atm, 4); //显示四位小数

  Serial.print("海拔: ");
  Serial.print(altitude, 2); //显示两位小数
  Serial.println(" 米");

  Serial.println();

  delay(1000); //等待一秒后再次获取值
}
```

- 打开串口监视器以接收传感器的数据，包括温度、气压值、相对大气压和海拔。

![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Xadow_Baremeter_Result.jpg)

- 以下是一个参考图，绘制了海拔高度与气压之间的关系。

![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Pressure_and_Altitude.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow 气压计 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer.zip)
- [Xadow 气压计库](https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer_Library.zip)
- [BST-BMP085-DS000-06](https://files.seeedstudio.com/wiki/Xadow_Barometer/res/BST-BMP085-DS000-06.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>