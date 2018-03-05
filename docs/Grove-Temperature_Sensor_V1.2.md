---
title: Grove - Temperature Sensor V1.2
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html
oldwikiname: Grove - Temperature Sensor V1.2
prodimagename: Grove_Temperature_Sensor_View.jpg
surveyurl: https://www.surveymonkey.com/r/Grove-Temperature_Sensor_V1-2
sku: 101020015
tags: io_3v3, io_5v, plat_duino
---
![](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Grove_Temperature_Sensor_View.jpg)

The Grove - Temperature Sensor uses a [Thermistor](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/res/NCP18WF104F03RC.pdf) to detect the ambient temperature. The resistance of a thermistor will increase when the ambient temperature decreases. It's this characteristic that we use to calculate the ambient temperature. The detectable range of this sensor is -40 - 125ºC, and the accuracy is ±1.5ºC

Note: This wiki works with Grove - Temperature sensor V1.1 as well, for V1.0 please refer to [Grove - Temperature Sensor](http://wiki.seeedstudio.com/wiki/Grove_-_Temperature_Sensor)

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)

Specifications
---
- Voltage: 3.3 ~ 5V
- Zero power resistance: 100 KΩ
- Resistance Tolerance: ±1%
- Operating temperature range: -40 ~ +125 ℃
- Nominal B-Constant： 4250 ~ 4299K

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)


Platforms Supported
-------------------

Getting Started
---
After this section, you can make Grove - Temperature Sensor V1.1/1.2 run with only few steps.

**Preparations**  

Now we are making a simple demo to get data from Grove - Temperature Sensor V1.1/1.2 require following modules.

- Seeeduino v4.2

Seeeduino V4.2 is fully compatible with Arduino.If this is your first time using Arduino, Please refer to [here](http://wiki.seeedstudio.com/wiki/Getting_Started_with_Seeeduino) to start your Arduino journey.

**Hardware Connection**

Just connect Grove - Temperature Sensor into A5 connector of Seeeduino v4.2
as shown below:

![](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Grove_Temperature_Sensor_Hw_connect.jpg)


**Download**

Launch Arduino IDE and click File>New to open a new page.

Then copy below code into Arduino IDE:
```
// Demo code for Grove - Temperature Sensor V1.1/1.2
// Loovee @ 2015-8-26

#include <math.h>

const int B = 4275;               // B value of the thermistor
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A5;     // Grove - Temperature Sensor connect to A5

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int a = analogRead(pinTempSensor);

    float R = 1023.0/a-1.0;
    R = R0*R;

    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // convert to temperature via datasheet

    Serial.print("temperature = ");
    Serial.println(temperature);

    delay(100);
}
```

Click Tools>Board to choose Arduino UNO and select respective serial port.

Now click Upload(CTRL+U) to burn testing code. Please refer to here for any error prompt and you can also add comment on forum

**Review Results**

After upload completed, Open Serial Monitor of your Arduino IDE, you can get the temperature:

![](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Grove_Temperature_Sensor_result.jpg)


Reference
---
If you want to know how the algorithm of temperature coming, please refer to the below image:

![](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Grove_Temperature_Sensor_Basic_Characteristics.jpg)


Resources
---
- [Schematic at Easyeda](https://easyeda.com/Seeed/Grove_Temperature_sensor_v1_2-ed433e462f14455e9aa38ae1a06e4680)
- [Grove - Temperature Sensor v1.1 Eagle File](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/res/Grove_-_Temperature_sensor_v1.1.zip)
- [Grove - Temperature Sensor v1.1.PDF](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/res/Grove_-_Temperature_sensor_v1.1.pdf)
- [Temperature Sensor datasheet](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/res/NCP18WF104F03RC.pdf)
