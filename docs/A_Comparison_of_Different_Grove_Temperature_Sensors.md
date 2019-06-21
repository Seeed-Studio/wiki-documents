---
name: A Comparison of Different Grove Temperature Sensors
category: Tutorial

---


Temperature is a very important physical parameter to our daily lives. The measurement of temperature can be critical in industry applications and experimental test in labs, some home appliance also require measuring temperature for temperature control. 
The Grove family provides up to ten types of sensors that can be used to measure temperature. They all featured with high reliability and the easy-to-use Grove interface, but they do have their differences and may be used for different projects and applications. 
Here in this wiki we make a list of the key features of very Grove temperature sensors, include cost, measuring range, accuracy, sensitivity, response time, long-term stability and so on. The table can be a reference for you to choose the optimal sensor for your projects.

#How to Choose the Optimal Temperature Sensor

Before you looking at the table, there are several things that need to be considered to select a right sensor for your project. 

###At first, what is the object to be measured?
Is it the ambient air temperature in the room or a specific enclosure? Is it an air vent for airflow or a water tank for liquid? Or maybe an electronic system that may encounter high voltage and cause heating? Things like these would affect your choice of sensors based on cost budget, power consumption, safety factors, response time, and even the distance from sensor to instrument. For example, if you are measuring the temperature in your room, you might just need a cheap, low-cost thermometer that does not need to be very sensitive. But if your object is a greenhouse for growing plants, you might need a high accurate and sensitive sensor that precisely measures both the temperature and humidity.

###Secondly, what is the expected range of temperature to be measured?
The expected range of temperature to be measured is very important. If the object's temperature exceeds the sensor's measuring range, it may result in irreversible damage to the sensor module or even the system that is connected to the sensor.

###Another consideration is, how accurate do you need it to be?
Temperature sensors like thermocouples have very wide measuring range and are adequate to be used in harsh environment, but they usually lack of accuracy and long-term stability. The accuracy of measurement is critical in some cases like medical devices, wearable devices and some home facilities etc. Sensors with higher accuracy usually have higher cost and they have to be used very carefully to avoid physical damage on it (some may require not touching it with bare hand).

#Specification

|Temperature Sensor Name|Interface|Range|Accuracy|Sensitivity|Datasheet|
|-----------------------|---------|----|---------|-----------|----|
|[Temp&Humi Sensor](http://wiki.seeed.cc/Grove-TemperatureAndHumidity_Sensor/) | Digital | 0~50C|+-2C|1C|[DHT11](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/res/DHT11.pdf)|
|[Temp&Humi Sensor Pro](http://wiki.seeed.cc/Grove-Temperature_and_Humidity_Sensor_Pro/) | Digital | -40~80C|+-0.5C|0.1C| [DHT22/AM2302](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/AM2302.pdf) |
|[Temperature Sensor](http://wiki.seeed.cc/Grove-Temperature_Sensor_V1.2/) | Analog | -40~125C|+-1.5C|N/A|[NCP18WF104F03RC](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/res/NCP18WF104F03RC.pdf) |
|[One Wire Temperature Sensor](http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf) | One Wire | -55~125C|+-0.5C|0.5C|[DS18B20](http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf) |
|[High Temperature Sensor](http://wiki.seeed.cc/Grove-High_Temperature_Sensor/) |Analog|-50~600C|2%|N/A|K Type Thermocouple|
|[Temperature&Humidity Sensor (High-Accuracy & Mini)](http://wiki.seeed.cc/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/) |I2C|0~70C|+-0.5C|1C|[TH02](https://raw.githubusercontent.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/master/res/TH02_SENSOR.pdf) |
|[DIGITAL INFRARED TEMPERATURE SENSOR](http://wiki.seeed.cc/Grove-Digital_Infrared_Temperature_Sensor/) |I2C|-40~85C|+-0.5C|0.02C|[MLX90615](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/res/MLX90615.pdf) |
|[Temperature&Humidity Sensor(SHT31)](http://wiki.seeed.cc/Grove-TempAndHumi_Sensor-SHT31/) |I2C|-40~125C|+-0.3C|0.01C|[SHT31](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip) |
|[INFRARED TEMPERATURE SENSOR](http://wiki.seeed.cc/Grove-Infrared_Temperature_Sensor/) |Analog|-10~100C|N/A|N/A|[OTP-538U](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Temperature_Sensor/master/res/OTP-538Udatasheet.zip) |
|[Temperature&Humidity Sensor(HDC1000)](http://wiki.seeed.cc/Grove-TemperatureAndHumidity_Sensor-HDC1000/) |I2C|-40~125C|+-0.2C|0.01C|[HDC1000](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/res/HDC1000.pdf) |
|[Barometer Sensor(BMP180)](http://wiki.seeed.cc/Grove-Barometer_Sensor-BMP180/) |I2C|-40~85C|+-0.5C|0.1C|[BMP180](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/res/BMP180.pdf) |
|[Barometer Sensor(BMP280)](http://wiki.seeed.cc/Grove-Barometer_Sensor-BMP280/) |I2C|-40~85C|+-0.5C|0.01C|[BMP280](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP280/master/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf) |
|[Temp&Humi&Barometer Sensor(BME280)](http://wiki.seeed.cc/Grove-Barometer_Sensor-BME280/) |I2C|-40~85C|+-0.5C|0.01C|[BME280](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BME280/master/res/Grove-Barometer_Sensor-BME280-.pdf) |

More details please download below list.

[![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/list.png)](https://github.com/SeeedDocument/Tutorial_Temperature_Sensor/raw/master/res/temperature%C2%A0sensor%20v2.xlsx)

#Groves

|Temp&Humi Sensor | Temp&Humi Sensor Pro | Thermistor |
|----------------------------|-------------------------------------|------------------------|
|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/1.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/2.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/3.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

|Thermocouple | TH02| Digital Infrared|
|----------------------------|-------------------------------------|------------------------|
|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/4.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/5.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/6.jpg)|
|[GET ONE NOW!](http://www.seeedstudio.com/depot/Grove-High-Temperature-Sensor-p-1810.html)|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)|[GET ONE NOW!](http://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

|SHT31| Infrared| HDC1000 |
|----------------------------|-------------------------------------|------------------------|
|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/7.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/8.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/9.jpg)|
|[GET ONE NOW!](http://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html)|[GET ONE NOW!](http://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html)|[GET ONE NOW!](http://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)|

| BMP180 | BMP280 | BME280 |
|----------------------------|-------------------------------------|------------------------|
|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/10.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/11.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Temperature_Sensor/master/img/12.jpg)|
|[GET ONE NOW!](http://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|[GET ONE NOW!](http://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|[GET ONE NOW!](http://www.seeedstudio.com/depot/Grove-TempHumiBarometer-Sensor-BME280-p-2653.html)|

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>