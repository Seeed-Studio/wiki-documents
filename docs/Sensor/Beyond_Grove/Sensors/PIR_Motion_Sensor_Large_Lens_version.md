---
title: PIR Motion sensor module
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/PIR_Motion_Sensor_Large_Lens_version/
slug: /PIR_Motion_Sensor_Large_Lens_version
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/Pir_motion_sensor_v1.0.jpg)

PIR（Passive Infrared Detection）are used to detect motion of human movement. This version has a large lens which can support long range and wide angle. 2.54mm standard connector is easy to fix it anywhere.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/pir-motion-sensor-module-p-74.html?cPath=84_88&zenid=020999c566d2f31841dc54602b7d02ef)

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

![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/PIR_motion_sensor_module_connection.JPG)

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


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   Resources
---
- [PIR Motion sensor Eagle file](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip)

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>