---
description: Grove - Temperature and Humidity Sensor Pro
title: Grove - Temperature and Humidity Sensor Pro
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Temperature_and_Humidity_Sensor_Pro
last_update:
  date: 2/1/2023
  author: hushuxu
---

英文 wiki ：https://wiki.seeedstudio.com/Grove-Temperature_and_Humidity_Sensor_Pro/

![](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Temp_humi_pro.jpg)

这是我们的Grove温湿度传感器的一个强大的姐妹版本。 它具有比基本版本更完整和准确的性能。 该传感器的检测范围为5％RH - 99％RH，-40°C至80°C。其精度达到2％RH和0.5°C。如果对使用具有严格的要求，这个传感器是很专业的选择。

[![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.14.3ff19e11cJwMDK&id=45754325612)

规格参数
-------------

|项目|	最小	|标准	|最大	|单位|
|---|---|---|---|---|
|VCC	|	3.3|	-|	6|	V|
|支持测量电流	|	1|	-|	1.5|	mA|
|待机电流|	40|	-|	50|	uA|
|测量范围  **(湿度)**  |5%|	-|	99%|	RH|
|测量范围 **(温度)** |	-40|	-	|80|	°C|
|精度 **(湿度)** |-	|	-|	±2%|	RH|
|精度 **(温度)**	|-|-|	±0.5|	°C|
|分辨率	**(湿度)**	|-|	-|	0.1%	|RH|
|分辨率 **(温度)**	| -|-|	0.1|	°C|
|再现性	**(湿度)** |	-|	-|	±0.3%|	RH|
|再现性 **(温度)** |	-	|-	|±0.2|	°C|
|长期稳定性|		-|	-	|±0.5%	|RH/year|
|信号采集周期|-|	2|	-|	S|
|响应时间1 / e（63％）|	6|	-	|20|	S|

!!!Tip
    关于Grove模块的更多细节请参考[Grove System](http://wiki.seeedstudio.com/cn/Grove_System/)


支持平台
------------------


入门指导
---------------
以下是入门用户指南。

- [ 入门指导](http://wiki.seeedstudio.com/cn/Getting_Started_with_Seeeduino/)
- [Grove的介绍](http://wiki.seeedstudio.com/cn/Grove_System/)

我们提供2个示例，包括在arduino和raspberry pi平台上执行。

**使用 Arduino**

我们将通过一个简单的演示向您展示这个Grove - 温湿度传感器的工作原理。 首先，您需要准备以下内容：

| Seeeduino V4 | Grove - DHT Sensor pro | Base Shield |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11rndqnS&id=45721222112)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.13.3ff19e11ek83a4&id=45754325612)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11crrag2&id=520233320144)|


- 将 Temperature and Humidity Sensor Pro连接到 [Grove - Base Shiel](http://wiki.seeedstudio.com/cn/Base_Shield_V2/) 的D2端口。 然后将Grove - Base Shield插入Arduino，并使用USB数据线将Arduino连接到PC。


![](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Temperature%26Humidity_Sensor_Pro_demo_Seeeduino_600_s.jpg)

- 请遵循 [如何安装arduino库](http://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)来安装库。

- 下载[Seeed DHT库](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)，而arduino板是16MHz XTAL的;还有另一个库 - [DHTlib](https://github.com/RobTillaart/Arduino/tree/master/libraries/DHTlib)也可用，而不仅仅是Seeed DHT库。 该库支持16MHz和8MHz的 Arduino（例如Seeeduino Stalker）

- 重新启动Arduino IDE。 通过路径打开“DHTtester”示例： **File（文件） --> Examples（示例） --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. 通过这个示例，我们可以读取环境的温度和相对湿度信息。

![](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/library%20example.jpg)

!!!Note
    这个Grove - Temperature and Humidity Sensor Pro 和我们的另一个产品[Grove-Temperature and Humidity Sensor](http://wiki.seeed.cc/Grove_Temperature_and_Humidity_Sensor/)正在共享此库。 无论您使用哪种产品，请确保您为传感器的定义的端口生效，并将其他规格的定义在程序中注释掉。 例如，我们在Grove - Temperature and Humidity Sensor Pro 上使用的传感器是DHT 22.因此传感器规格的定义部分应该是：

```
//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)or
```
- 将其上传到您的Arduino板。
- 这里就是输出结果


![](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/DHT_Test_Score.jpg)

**使用Raspberry Pi**

!!! attention 
     如果你正在使用 **Raspberry Pi with Raspberrypi OS >= Bullseye**, 你只能在 **python3** 中使用这个命令行.


首先，您需要准备以下内容：

|  Raspberry pi | Grove - DHT Sensor pro | Grovepi+ |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/pi.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/grovepi%2B.jpg)|
|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.13.3ff19e11WKMOCW&id=528322046763)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.13.3ff19e11cJwMDK&id=45754325612)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e113G7Bdt&id=45506190895)|

- 按照[说明](http://wiki.seeed.cc/GrovePi_Plus/)配置开发环境。

-将grove DHT pro插入Grovepi +的插座D4。
![](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Grovalpi%20dht%20pro)
- 导航到示例目录：

```
  cd yourpath/GrovePi/Software/Python/
```

- 找到这列代码

```
    nano grove_dht_pro.py   # "Ctrl+x" to exit #
```


```
import grovepi

# Connect the Grove Temperature & Humidity Sensor Pro to digital port D4
# SIG,NC,VCC,GND
sensor = 4

while True:
    try:
        [temp,humidity] = grovepi.dht(sensor,1)
        print "temp =", temp, " humidity =", humidity

    except IOError:
        print "Error"
```


- 运行这个示例

```
      sudo python3 grove_dht_pro.py
```
- 这里是输出结果

![](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Grovepi_dht_pro_00.png)


## 原理图在线预览


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源下载

- [Temp Humi Pro in eagle format](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip)
- [Temp Humi Pro PCB in PDF format](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20PCB.pdf)
- [Temp Humi Pro Schematic in PDF format](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20Schematic.pdf)
- [Humidity Temperature Sensor pro library](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Humidity_Temperature_Sensor_pro.zip)
- [AM2302-CN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-CN.pdf)
- [AM2302-EN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf)
