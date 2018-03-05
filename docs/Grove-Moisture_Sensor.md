---
title: Grove - Moisture Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html
oldwikiname: Grove - Moisture Sensor
prodimagename: Moisture_sensor_.jpg
surveyurl: https://www.research.net/r/grove-moisture-sensor
sku: 101020008
---
---
![](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/images/Moisture_sensor_.jpg)

This Moisture Senor can be used for detecting the moisture of soil or judge if there is water around the sensor, let the plant in your garden able to reach out for human's help when they are thirsty. This sensor is very easy to use, you can just simply insert in into the soil and read the data. With this sensor, you can make a small project that can let the plant send a message to you like " I am thirsty now, please feed me some water."

[![](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)

## Features
---
- Soil moisture sensor based on soil resistivity meansurement
- Easy to use
- 2.0 cm X 6.0 cm grove module

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

## Specification
---
|Item|Condition|Min|Typical|Max|Unit|
|---|---|---|---|---|---|
|Voltage|-|3.3|-|5|V|
|Current|-|0|-|35|mA|
|Output Value|Sensor in dry soil<br>Sensor in humid soil<br>Sensor in water|0<br>300<br>700<br>|-|300<br>700<br>950|-|

## Application Ideas
---
- Botanical Gardening
- Moisture Sensoring
- Consistency Measurement


## Usage
---
**With Arduino**

This is a summary of the moisture sensor which can be used to detect the moisture of the soil. When the soil moisture deflicits, the sensor output value will decrease. You can know whether a plant needs water or not by observing the result that the sensor output. The following sketch demostrates a simple application of sensoring the moisture of the soil.

- Connect this module to one of analog port of A0 of [Grove - Base Shield](https://www.seeedstudio.com/Grove-Base-Shield-p-754.html) with 4 pin Grove cable, and then insert the sensor into the soil or plase it in anywhere you want.

- Plug Grove - Base Shield into the Arduino Seeeduino and connect Arduino to PC via an USB cable.

The hardware installation as is shown as below:

![](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/images/518px-Moisture1.jpg)

!!!Note
    This sensor isn't hardened against contaimination or exposure of the control circuitry to water and may be prone to electrolytic corrosion across the probes, so it isn't well suited to being left in place or used outdoors.

- Copy and paste the code below to a new Arduino Sketh

```c
// Test code for Grove - Moisture Sensor 
int sensorPin = A0; // select the input pin for the potentiometer
int sensorValue = 0; // variable to store the value coming from the sensor7

void setup() {
    // declare the ledPin as an OUTPUT:
    Serial.begin(9600);
}
void loop() {
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    Serial.print("sensor = " );
    Serial.println(sensorValue);
    delay(1000);
}
```

- Upload the code, please click [here](https://seeeddoc.github.io/Upload_Code/) if you don't know how to upload.
- The result in different condition after open the serial monitor

![](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/images/in%20differen%20conditions.jpg)

**With TI LaunchPad**


Taking care of your plants(Moisture Sensor)

The following sketch demonstrates a simple application of sensing the moisture in soil.With this, you can know whether your plant needs water or not by observing the result from the output of the sensor

![](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/images/Moisture.jpg)

```c
/*
  Moisture-Sensor
  The following sketch demonstrates a simple application of sensing
  the moisture of the soil. You can know whether a plant needs water
  or not by observing the results that the sensor outputs.
  The circuit:
    * Moisture-Sensor attached to pin 24 (J6 plug on Grove Base BoosterPack)
    * one side pin (either one) to ground
    * the other side pin to +VCC
    * LED anode (long leg) attached to RED_LED
    * LED cathode (short leg) attached to ground
  - NOTE:
    This example code is in the public domain.
    http://seeedstudio.com/wiki/Grove_-_Moisture_Sensor
*/
#include "TM1637.h"
/* Macro Define */
#define CLK 39              /* 4-digital display clock pin */
#define DIO 38              /* 4-digiral display data pin */
#define BLINK_LED RED_LED   /* blink led */
#define MOISTURE_PIN 24     /* pin of moisture sensor */
#define THRESHOLD_VALUE 300 /* threshold for watering the flowers */
#define ON HIGH             /* led on */
#define OFF LOW             /* led off */
#define _handle_led(x) digitalWrite(BLINK_LED, x) /* handle led */

/* Global Varibles */
TM1637 tm1637(CLK, DIO);    /* 4-digital display object */
int analog_value = 0;       /* varible to store the value coming from rotary angle
sensor */
int8_t bits[4] = {0};       /* array to store the single bits of the value */
/* the setup() method runs once, when the sketch starts */
void setup() {
/* Initialize 4-digital display */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);
/* declare the red_led pin as an OUTPUT */
    pinMode(BLINK_LED, OUTPUT);
}
/* the loop() method runs over and over again */
void loop() {
    analog_value = analogRead(MOISTURE_PIN); /* read the value from the sensor */
/* if the value is smaller than threshold, turn on led */
    if(analog_value < THRESHOLD_VALUE) {
        _handle_led(ON);
    } else {
        _handle_led(OFF);
    }
    memset(bits, 0, 4); /* reset array when we use it */
    for(int i = 3; i >= 0; i--) {
/* get single bits of the analog value */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;
        tm1637.display(i, bits[i]); /* display by 4-digital display */
    }
    delay(200);
}
```


**With Raspberry Pi**
1. You should have got a Raspberry Pi and a grove pi or grove pi+
2. You should have completed configuring development environment, otherwise follow here.
3. Connection
- Plug the sensor to grove pi socket A0 by using a grove cable
4. Navigate to the demo's directory.

```
cd yourpath/GrovePi/Software/Python/
```

To see the code

```python
nano grove_moisture_sensor.py # "Ctrl+x" to exit #
import time
import grovepi
# Connect the Grove Moisture Sensor to analog port A0
# SIG,NC,VCC,GND
sensor = 0
while True:
try:
print grovepi.analogRead(sensor)
time.sleep(.5)
except KeyboardInterrupt:
break
except IOError:
print "Error
```

5. Run the demo

```
sudo python grove_moisture_sensor.py
```

## Resources
---
- [202000089_PCBA-Grove Moisture sensor V1.3_schemic file](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/resources/202000089_PCBA-Grove%20Moisture%20sensor%20V1.3_schemic%20file.zip)
