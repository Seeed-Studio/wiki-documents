---
description: Grove - 气压传感器
title: Grove - 气压传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Barometer_Sensor
last_update:
  date: 1/4/2023
  author: shuxu hu
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg" alt="pir" width={600} height="auto" /></p>


此 Grove - 气压传感器采用 Bosch BMP085 高精度芯片，用于检测气压和温度。它可以广泛测量从 300hPa 到 1100hPa 的压力范围，即海拔 +9000m 到 -500m，超高精度为 0.03hPa（0.25m）在超高分辨率模式下。该芯片仅接受 1.8V 至 3.6V 的输入电压。然而，添加外部电路后，该模块变得兼容 3.3V 和 5V。因此，它可以在 Arduino/#Seeeduino 或 Seeeduino Stalker 上使用，无需修改。它设计为通过 I2C 总线直接连接到微控制器。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>
](https://www.seeedstudio.com/Grove-Barometer-Sensor-p-1199.html)

特点
--------

-   数字双线 (I2C) 接口
-   宽气压范围
-   灵活的供电电压范围
-   超低功耗
-   低噪声测量
-   完全校准
-   包含温度测量

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
应用场景
-----------------

-   GPS 导航增强
-   室内和室外导航
-   休闲和运动
-   天气预报
-   垂直速度指示（上升/下降速度）

规格
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
电压
</th>
<td>
3
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
电流
</th>
<td>
89
</td>
<td>
/
</td>
<td>
130
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
压力范围
</th>
<td>
300
</td>
<td>
/
</td>
<td>
1100
</td>
<td>
hPa
</td>
</tr>
<tr align="center">
<th scope="row">
更快的 I2C 数据传输
</th>
<td>
/
</td>
<td>
/
</td>
<td>
3.4
</td>
<td>
MHZ
</td>
</tr>
<tr align="center">
<th scope="row">
尺寸
</th>
<td colspan="3">
20.4*24.3*9.7
</td>
<td>
mm
</td>
</tr>
<tr align="center">
<th scope="row">
重量
</th>
<td colspan="3">
2
</td>
<td>
g
</td>
</tr>
</table>
使用方法
-----

### 使用 Arduino

气压条件是预测天气变化和推算海拔高度的标准之一。以下是一个演示，展示如何从此 Grove - 气压传感器读取气压数据。

1. 使用 Grove 电缆将其连接到 Seeeduino 或 Grove - 基础扩展板的 IIC 端口，并通过 USB 电缆将 Arduino 连接到 PC。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG" alt="pir" width={600} height="auto" /></p>


2. 下载库文件 [Barometer_Sensor Library](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip)；将其解压到 Arduino IDE 的库文件路径：..\\arduino-1.0.1\\libraries。

3. 创建一个新的 Arduino 草图并将以下代码粘贴到其中，或者通过路径直接打开代码：File -> Example -> Barometer_Sensor -> Barometer_Sensor。

```
/* Barometer demo V1.0
*  基于 Jim Lindblom 的代码
*  获取压力、海拔和温度数据。
*  以 9600 波特率通过串口监视器输出。
*
*  By:https://www.seeedstudio.com
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
    pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//获取压力
    altitude = myBarometer.calcAltitude(pressure); //未补偿计算 - 单位：米
    atm = pressure / 101325;

    Serial.print("Temperature: ");
    Serial.print(temperature, 2); //显示两位小数
    Serial.println("deg C");

    Serial.print("Pressure: ");
    Serial.print(pressure, 0); //仅显示整数
    Serial.println(" Pa");

    Serial.print("Ralated Atmosphere: ");
    Serial.println(atm, 4); //显示四位小数

    Serial.print("Altitude: ");
    Serial.print(altitude, 2); //显示两位小数
    Serial.println(" m");

    Serial.println();

    delay(1000); //等待一秒后再次获取数据
}
```

4. 打开串口监视器以接收传感器的数据，包括温度、气压值、相对气压和海拔高度。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


以下是一个参考图，绘制了海拔高度与气压之间的关系。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg" alt="pir" width={600} height="auto" /></p>


### 使用 Raspberry Pi

1. 您需要准备一个 Raspberry Pi 和一个 GrovePi 或 GrovePi+。

2. 您需要完成开发环境的配置，否则请参考 [这里](/cn/GrovePi_Plus/)。

3. 连接

- 将气压传感器插入 GrovePi 的 i2c 插座。

4.进入示例代码目录：
```
cd yourpath/GrovePi/Software/Python/grove_barometer/adafruit/
```

- 查看代码

```
nano grove_i2c_barometic_sensor_example.py   # 按 "Ctrl+x" 退出 #
```

```
#!/usr/bin/python

import smbus
import RPi.GPIO as GPIO
#import grovepi from grove_i2c_barometic_sensor import BMP085

# ===========================================================================
# 示例代码
# ===========================================================================

# 初始化 BMP085 并使用标准模式（默认值）
# bmp = BMP085(0x77, debug=True)
bmp = BMP085(0x77, 1)

# 如果需要指定不同的工作模式，请取消以下某一行的注释：
# bmp = BMP085(0x77, 0)  # 超低功耗模式
# bmp = BMP085(0x77, 1)  # 标准模式
# bmp = BMP085(0x77, 2)  # 高分辨率模式
# bmp = BMP085(0x77, 3)  # 超高分辨率模式

rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
    bus = smbus.SMBus(1)
else:
    bus = smbus.SMBus(0)

temp = bmp.readTemperature()

# 读取当前气压值
pressure = bmp.readPressure()

# 根据估算的平均海平面气压（1013.25 hPa）计算海拔高度
# 调用以下函数，但这可能不太准确
# altitude = bmp.readAltitude()

# 如果需要更准确的海拔高度，请输入正确的平均海平面气压值。
# 例如，如果当前气压值为 1023.50 hPa，请输入 102350，因为我们在整数值中包含两位小数
altitude = bmp.readAltitude(101560)

print "Temperature: %.2f C" % temp
print "Pressure:    %.2f hPa" % (pressure / 100.0)
print "Altitude:    %.2f m" % altitude
```

5.运行示例代码。
```
sudo python grove_i2c_barometic_sensor_example.py
```

6.结果

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png" alt="pir" width={600} height="auto" /></p>



## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



资源
---------

-   [Grove - Barometer Sensor Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip)
-   [气压传感器库](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip)
-   [气压传感器库的 Github 仓库](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
-   [BST-BMP085-DS000-06](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/BST-BMP085-DS000-06.pdf)


<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Barometer_Sensor -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>