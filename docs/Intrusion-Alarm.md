# Intrusion Alarm

<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/beginnerKit-5-projects/intrustion-Alarm/intursion%20Alarm.gif"/></div>

## Overview

This wiki introduces how to make a intrusion alarm.

## Feature

- The PIR motion sensor can detect people if in the area, then alarm triggered.


## Component required

### hardware
- [**Grove Beginner Kit**](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)
- [**MINI PIR motion sensor**](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html)

### Software
- Download the [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)


## Hardware Connection
Please follow the same color line to connect each sensor on the board.
<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/beginnerKit-5-projects/intrustion-Alarm/alram.png"/></div>

!!!Note
    The buzzer (D5) and LED (D4) are embedded in the board.

## Arduino Instructions

1. Follow the connection picture connect all the sensor on the board.
2. Place the Mini PIR motion sensor in the location of the detection.
3. Copy the code stick on the Aruino IDE then upload it.


```CPP
#define PIR_MOTION_SENSOR 2//Use pin 2 to receive the signal from the module
 
int BuzzerPin = 5;     // set D5 as buzzer 
int LED_RAD = 4;       // set D4 as LED
 
void setup() {
  pinMode(PIR_MOTION_SENSOR, INPUT);
  pinMode(BuzzerPin, OUTPUT);
  pinMode(LED_RAD, OUTPUT);
}
 
void loop() {

  if(digitalRead(PIR_MOTION_SENSOR)){
    analogWrite(BuzzerPin, 1);
    digitalWrite(LED_RAD, HIGH);
    delay(1000);
    }
  if(!digitalRead(PIR_MOTION_SENSOR)){
    analogWrite(BuzzerPin, 0);
    digitalWrite(LED_RAD, LOW);
    delay(1000);
    }

}

```