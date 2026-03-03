---
description: Xadow - 气压计 BMP180
title: Xadow - 气压计 BMP180
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Barometer_BMP180
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Xadow-bmp180.JPG)

该模块可以测量当前环境的气压和温度，然后将这些信号转换为海拔信息。BMP180是BMP085的功能兼容继任者，是新一代用于消费应用的高精度数字压力传感器。BMP180的超低功耗、低电压电子元件和卓越性能经过优化，适用于可穿戴设备、手机、PDA、GPS导航设备和户外设备。I2C接口使其能够轻松与微控制器集成。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Barometer-BMP180-v1.0-p-2412.html)


## 规格
---
工作电压：3.3v  
压力范围：300 ~ 1100hPa（+9000m ~ -500m 相对于海平面）  
低功耗  
控制模式：I2C（地址 0x77）  
工作温度：-40 ~ +85 °C  
尺寸：25.43mm x 20.35mm  


## 演示
---
**与 Xadow 主板配合使用**

该演示将向您展示如何获取当前环境的气压和温度。

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/IMG_2379.JPG)

!!!注意
    当将 Xadow - 气压计 BMP180 连接到 Xadow - 主板时，您需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。

## 下载库
---
- Xadow 气压计 BMP180 与 Grove - 气压传感器共享库。您可以直接从 GitHub 下载 [库](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)。
- 现在您可以打开代码并将其上传到 Xadow 主板。如果您尚未安装 Xadow 驱动程序，可以通过参考 Wiki 主页面上的 [入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Seeeduino/) 来了解操作步骤。

```
/*
* 从 BMP180 获取气压、海拔和温度。
* 以 9600 波特率将数据打印到串行监视器。
*/
#include "Barometer.h"
#include "Wire.h";
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
   altitude = myBarometer.calcAltitude(pressure); //未经补偿的计算 - 单位：米
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

- 打开串行监视器以接收传感器的数据，包括温度、气压值、相对大气压和海拔。

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Barometer_Sensor.jpg)

- 以下是一个参考图，绘制了海拔高度与气压之间的关系。

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Pressure_and_Altitude.jpg)


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
- [Xadow - 气压计 BMP180 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip)
- [气压传感器库](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
- [BMP180 数据手册](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/BMP180.pdf)

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