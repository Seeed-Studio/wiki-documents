---
name: PIR Motion sensor module
category: MakerPro
bzurl: https://www.seeedstudio.com/pir-motion-sensor-module-p-74.html?cPath=84_88&zenid=020999c566d2f31841dc54602b7d02ef
oldwikiname:  PIR Motion sensor module
prodimagename:  Pir_motion_sensor_v1.0.jpg
surveyurl: https://www.research.net/r/PIR_Motion_sensor_module
sku:   113990020
---
![](https://github.com/SeeedDocument/PIR_Motion_sensor_module/raw/master/img/Pir_motion_sensor_v1.0.jpg)

PIR（Passive Infrared Detection）are used to detect motion of human movement. This version has a large lens which can support long range and wide angle. 2.54mm standard connector is easy to fix it anywhere.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/pir-motion-sensor-module-p-74.html?cPath=84_88&zenid=020999c566d2f31841dc54602b7d02ef)

##   Features
---
*   Long range

*   Wide angle

*   Low consumption

*   DC 3.0-5.5V power supplier

##   Specifications
---
*   Input Voltage: DC3.0-5.5V

*   Current: 100uA(max)

*   Detecting distance: 9m(max)

*   Output signal: 0,3 VCC (Output high when motion detected)

*   Sentry Angle: 120°

*   Connector:3Pin 2.54mm pitch
*   Size： L36*W26*H21(mm)

##   Usage
---
The following sketch demonstrates a simple application of sensing montion. When someone moves in its detecting range, it will output High through its SIG pin and the LED will light. Otherwise, it will output LOW. Then you can use it to detect the motion of people.

![](https://github.com/SeeedDocument/PIR_Motion_sensor_module/raw/master/img/PIR_motion_sensor_module_connection.JPG)

###   Programming

Includes important code snippet.
Demo code like :
```
/*******************************************************************************/
/*macro definitions of PIR motion sensor pin and LED pin*/
#define PIR_MOTION_SENSOR 8//Use pin 8 to receive the signal from the module
#define LED    4//the Grove - LED is connected to D4 of Arduino

void setup()
{
    pinsInit();
}

void loop()
{
    if(isPeopleDetected())//if it detects the moving people?
    turnOnLED();
    else
    turnOffLED();
}
void pinsInit()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
/***************************************************************/
/*Function: Detect whether anyone moves in it's detecting range*/
/*Return:-boolean, ture is someone detected.*/
boolean isPeopleDetected()
{
    int sensorValue = digitalRead(PIR_MOTION_SENSOR);
    if(sensorValue == HIGH)//if the sensor value is HIGH?
    {
        return true;//yes,return ture
    }
    else
    {
        return false;//no,return false
    }
}
```

##   Resources
---
- [PIR Motion sensor Eagle file](https://github.com/SeeedDocument/PIR_Motion_sensor_module/raw/master/res/PIR_sensor_v1.0.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>