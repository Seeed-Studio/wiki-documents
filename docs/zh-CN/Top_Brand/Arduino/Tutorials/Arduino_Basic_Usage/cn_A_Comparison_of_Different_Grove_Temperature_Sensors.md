---
description: 不同 Grove 温度传感器的比较
title: 不同 Grove 温度传感器的比较

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/A_Comparison_of_Different_Grove_Temperature_Sensors
last_update:
  date: 02/02/2023
  author: w0x7ce

no_comments: false # for Disqus

---


温度是我们日常生活中非常重要的物理参数。温度测量在工业应用和实验室实验测试中可能至关重要，一些家用电器也需要测量温度来进行温度控制。
Grove 系列提供多达十种类型的传感器，可用于测量温度。它们都具有高可靠性和易于使用的 Grove 接口，但它们确实有各自的差异，可能用于不同的项目和应用。
在这个 wiki 中，我们列出了每个 Grove 温度传感器的关键特性，包括成本、测量范围、精度、灵敏度、响应时间、长期稳定性等等。该表格可以作为您为项目选择最佳传感器的参考。

# 如何选择最佳温度传感器

在查看表格之前，需要考虑几个因素来为您的项目选择合适的传感器。

### 首先，要测量的对象是什么？

是房间或特定封闭空间中的环境空气温度吗？是用于气流的通风口还是用于液体的水箱？或者可能是一个可能遇到高电压并导致发热的电子系统？这些因素会根据成本预算、功耗、安全因素、响应时间，甚至传感器到仪器的距离来影响您对传感器的选择。例如，如果您要测量房间中的温度，您可能只需要一个便宜、低成本的温度计，不需要非常敏感。但如果您的对象是用于种植植物的温室，您可能需要一个高精度和敏感的传感器，能够精确测量温度和湿度。

### 其次，预期测量的温度范围是什么？
预期测量的温度范围非常重要。如果对象的温度超过传感器的测量范围，可能会对传感器模块甚至连接到传感器的系统造成不可逆转的损坏。

### 另一个考虑因素是，您需要多高的精度？
像热电偶这样的温度传感器具有非常宽的测量范围，适合在恶劣环境中使用，但它们通常缺乏精度和长期稳定性。在某些情况下，如医疗设备、可穿戴设备和一些家用设施等，测量精度至关重要。精度更高的传感器通常成本更高，必须非常小心地使用以避免对其造成物理损坏（有些可能要求不要用裸手触摸）。

# 规格参数

|温度传感器名称|接口|范围|精度|灵敏度|数据手册|
|-----------------------|---------|----|---------|-----------|----|
|[温湿度传感器](https://wiki.seeedstudio.com/cn/Grove-TemperatureAndHumidity_Sensor/) | 数字 | 0~50C|+-2C|1C|[DHT11](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/DHT11.pdf)|
|[温湿度传感器 Pro](https://wiki.seeedstudio.com/cn/Grove-Temperature_and_Humidity_Sensor_Pro/) | 数字 | -40~80C|+-0.5C|0.1C| [DHT22/AM2302](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302.pdf) |
|[温度传感器](https://wiki.seeedstudio.com/cn/Grove-Temperature_Sensor_V1.2/) | 模拟 | -40~125C|+-1.5C|N/A|[NCP18WF104F03RC](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf) |
|[单总线温度传感器](http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf) | 单总线 | -55~125C|+-0.5C|0.5C|[DS18B20](http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf) |
|[高温传感器](https://wiki.seeedstudio.com/cn/Grove-High_Temperature_Sensor/) |模拟|-50~600C|2%|N/A|K 型热电偶|
|[温湿度传感器（高精度迷你版）](https://wiki.seeedstudio.com/cn/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/) |I2C|0~70C|+-0.5C|1C|[TH02](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/TH02_SENSOR.pdf) |
|[数字红外温度传感器](https://wiki.seeedstudio.com/cn/Grove-Digital_Infrared_Temperature_Sensor/) |I2C|-40~85C|+-0.5C|0.02C|[MLX90615](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf) |
|[温湿度传感器(SHT31)](https://wiki.seeedstudio.com/cn/Grove-TempAndHumi_Sensor-SHT31/) |I2C|-40~125C|+-0.3C|0.01C|[SHT31](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip) |
|[红外温度传感器](https://wiki.seeedstudio.com/cn/Grove-Infrared_Temperature_Sensor/) |模拟|-10~100C|N/A|N/A|[OTP-538U](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/OTP-538Udatasheet.zip) |
|[温湿度传感器(HDC1000)](https://wiki.seeedstudio.com/cn/Grove-TemperatureAndHumidity_Sensor-HDC1000/) |I2C|-40~125C|+-0.2C|0.01C|[HDC1000](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf) |
|[气压传感器(BMP180)](https://wiki.seeedstudio.com/cn/Grove-Barometer_Sensor-BMP180/) |I2C|-40~85C|+-0.5C|0.1C|[BMP180](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/BMP180.pdf) |
|[气压传感器(BMP280)](https://wiki.seeedstudio.com/cn/Grove-Barometer_Sensor-BMP280/) |I2C|-40~85C|+-0.5C|0.01C|[BMP280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf) |
|[温湿度气压传感器(BME280)](https://wiki.seeedstudio.com/cn/Grove-Barometer_Sensor-BME280/) |I2C|-40~85C|+-0.5C|0.01C|[BME280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf) |

更多详情请下载以下列表。

[![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/list.png)](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/res/temperature%C2%A0sensor%20v2.xlsx)

# Grove传感器

|温湿度传感器 | 温湿度传感器专业版 | 热敏电阻 |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/1.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/2.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/3.jpg)|
|[立即购买！](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|[立即购买！](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|[立即购买！](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

|热电偶 | TH02| 数字红外|
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/4.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/5.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/6.jpg)|
|[立即购买！](https://www.seeedstudio.com/depot/Grove-High-Temperature-Sensor-p-1810.html)|[立即购买！](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)|[立即购买！](https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

|SHT31| 红外| HDC1000 |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/7.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/8.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/9.jpg)|
|[立即购买！](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html)|[立即购买！](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html)|[立即购买！](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)|

| BMP180 | BMP280 | BME280 |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/10.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/11.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/12.jpg)|
|[立即购买！](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|[立即购买！](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|[立即购买！](https://www.seeedstudio.com/depot/Grove-TempHumiBarometer-Sensor-BME280-p-2653.html)|

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>