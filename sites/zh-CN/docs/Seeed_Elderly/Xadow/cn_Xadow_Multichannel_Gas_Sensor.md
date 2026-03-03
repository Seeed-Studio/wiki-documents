---
description: Xadow - 多通道气体传感器
title: Xadow - 多通道气体传感器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Multichannel_Gas_Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Multichannel_Gas_Sensor_photo.jpg)

Xadow – 多通道气体传感器是一款非常小巧的传感器板，配备紧凑型MOS传感器MiCS-6814。MiCS-6814是一种坚固的MEMS传感器，用于检测汽车尾气污染以及农业/工业气味。这款传感器板具有两个标准的Xadow接口，非常容易与[Xadow - 主板](https://wiki.seeedstudio.com/cn/Xadow_Main_Board)一起使用。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Multichannel-Gas-Sensor-p-2459.html)

## 特性
---
- 一个封装内包含三个完全独立的传感元件
- 内置ATmega168PA
- I2C接口，支持可编程地址
- 加热功率可关闭以降低功耗
- 标准Xadow外形

## 模块框图

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Multichannel_Gas_Sensor_block_diagram.jpg)

## 电气特性
---
|项目 |条件	|最小值	|典型值	|最大值	|单位|
|---|---|---|---|---|---|
|电压|	-	|3.1	|3.3|	3.5|	V|
|纹波	|@最大功率|	-	|80	|100|	mV|
|加热功率|	-	|-	|-	|88|	mW|
|最大功率|	-|	-|	-|	150|	mW|
|ADC精度|	-|	-|	10|	-	|位|
|ADC电压	|-	|0|	-	|3.3	|V|
|I2C速率|	-|	-	|100	|400	|kHz|
|VIL|	@I2C|	-0.5	|-|	0.99	|V|
|VIH|	@I2C|	2.31|	-|	3.8	|V|

**RED传感器性能**

|RED传感器特性	|符号	|典型值|	最小值	|最大值	|单位|
|---|---|---|---|---|
|空气中的感应电阻	|R0|	-	|100	|1500|	kΩ|
|典型CO检测范围	|FS|	-	|1|	1000|	ppm|
|灵敏度因子	|SR|	-|	1.2|	50|	-|

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Red_sensor.jpg)

**OX传感器性能**
|OX传感器特性	|符号|	典型值	|最小值	|最大值	|单位|
|---|---|---|---|---|---|
|空气中的感应电阻	|R0	|-	|0.8|	20|	kΩ|
|典型NO2检测范围|	FS|	-	|0.05|	10|	ppm|
|灵敏度因子	|SR	|-|	2	|-	|-|

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/OX_sensor.jpg)

**NH3传感器性能**
|NH3传感器特性|	符号	|典型值|	最小值|	最大值|	单位|
|---|---|---|---|---|---|
|空气中的感应电阻	|R0|	-	|10	|1500|	kΩ|
|典型NH3检测范围|	FS	|-	|1	|300|	ppm|
|灵敏度因子|	SR|-	|1.5|	15|	-|

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/NH3_sensor.jpg)

## 引脚定义
---
![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_Pins.jpg)

## 演示

您可以从[Xadow - 主板](https://wiki.seeedstudio.com/cn/Xadow_Main_Board)开始。

**硬件安装：**

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Mutichannel_Gas_Sensor_connect_to_Xadow.JPG)

1) 将Xadow - 多通道气体传感器连接到[Xadow - 主板](https://wiki.seeedstudio.com/cn/Xadow_Main_Board)。不要忘记安装Xadow驱动程序。注意：当将Xadow - 多通道气体传感器连接到[Xadow - 主板](https://wiki.seeedstudio.com/cn/Xadow_Main_Board)时，您需要注意连接方向。连接方法是一个Xadow模块的未填角需要连接到另一个模块的直角（参见每个Xadow模块的四个角）。

上传代码：

2) 下载[Arduino库和Grove/Xadow固件](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)并安装到Arduino库中。

3) 通过以下路径直接打开代码：文件 -> 示例 -> Mutichannel_Gas_Sensor -> ReadSensorValue_Xadow。

ReadSensorValue_Xadow.ino的内容请参考以下代码。

```
/*
    这是一个测试MutichannelGasSensor库的演示代码
    此代码运行在Xadow主板上，I2C从设备是Xadow-MutichannelGasSensor
    Xadow-MutichannelGasSensor上有一个ATmega168PA，它获取传感器输出并反馈给主设备。
    数据是原始ADC值，算法应在主设备上实现。

    如果有任何问题，请随时给我发邮件

    Jacky Zhang，嵌入式软件工程师
    qi.zhang@seeed.cc
    2015年3月17日
*/

#include "xadow.h"
#include <Wire.h>
#include "MutichannelGasSensor.h"

void setup()
{
    Xadow.init();

    Serial.begin(9600);  // 启动串口输出
    Serial.println("电源开启!");

    mutichannelGasSensor.begin(0x04);//从设备的默认I2C地址是0x04
    //mutichannelGasSensor.changeI2cAddr(0x10);
    //mutichannelGasSensor.doCalibrate();
    //delay(8000);
    while(mutichannelGasSensor.readR0() < 0)
    {
        Serial.println("传感器初始化错误!!");
        delay(1000);
    }
    Serial.print("Res0[0]: ");
    Serial.println(mutichannelGasSensor.res0[0]);
    Serial.print("Res0[1]: ");
    Serial.println(mutichannelGasSensor.res0[1]);
    Serial.print("Res0[2]: ");
    Serial.println(mutichannelGasSensor.res0[2]);
    mutichannelGasSensor.powerOn();
}

void loop()
{
    mutichannelGasSensor.readR();
    Serial.print("Res[0]: ");
    Serial.println(mutichannelGasSensor.res[0]);
    Serial.print("Res[1]: ");
    Serial.println(mutichannelGasSensor.res[1]);
    Serial.print("Res[2]: ");
    Serial.println(mutichannelGasSensor.res[2]);

    mutichannelGasSensor.calcGas();
    Serial.print("NH3: ");
    Serial.print(mutichannelGasSensor.density_nh3);
    Serial.println("ppm");
    Serial.print("CO: ");
    Serial.print(mutichannelGasSensor.density_co);
    Serial.println("ppm");
    Serial.print("NO2: ");
    Serial.print(mutichannelGasSensor.density_no2);
    Serial.println("ppm");

    Xadow.greenLed(LEDON);
    delay(500);
    Xadow.greenLed(LEDOFF);
    delay(500);
    Serial.println("...");
}
```

4) 上传代码。记得在Arduino环境的工具 | 板菜单中选择Seeeduino Xadow，并选择[Xadow - 主板](https://wiki.seeedstudio.com/cn/Xadow_Main_Board)使用的正确串口。或者您可以选择Arduino Leonardo代替它。

通过打开串口监视器，您可以看到从传感器读取的原始数据。

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_XadowPrint.jpg)


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
- [Xadow - 多通道气体传感器 v1.0 原理图](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_v1.0_sch.pdf)
- [Xadow - 多通道气体传感器 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_eagle_files.zip)
- [MiCS-6814 数据手册](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/MiCS-6814_Datasheet.pdf)
- [Arduino 库 & Grove/Xadow 固件](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>