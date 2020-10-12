# Oscillating fan

<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/beginnerKit-5-projects/Oscillating-fan/Oscillating-Fan-gif.gif"/></div>


## Overview

This wiki introduce how to make a Mini fan to plase on your room keep cool. 

## Feature

- Automatic swing fan

## Component required

### Hardware
- [**Grove Beginner Kit**](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)
- [**Grove mini fan**](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)
- [**Grove-Servo**](https://www.seeedstudio.com/Grove-Servo.html)


### Software
- Download the [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

### Hardware Connection
<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/beginnerKit-5-projects/Oscillating-fan/Osc-fan.png"/></div>

## Arduino Instructions

1. Copy the Code and stick on the Arduino IDE
2. Select the current port: Tools -> Port -> COM (number)
2. Upload the code

!!!note
    Please set the fan in the safety position.

## Code

```CPP
#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int pos = 0;    // variable to store the servo position
int fanPin = 6;  // set D6 as control switch 
int fanState = LOW;

void setup() {
    Serial.begin(9600);
    myservo.attach(2);  // attaches the servo on pin 2 to the servo object
    pinMode(fanPin, OUTPUT);
}

void loop() {

 fanState = HIGH;
 digitalWrite(fanPin, fanState);

   for (pos = 0; pos <= 100; pos += 1) { // goes from 0 degrees to 100 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(40);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 100; pos >= 0; pos -= 1) { // goes from 100 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(40);                       // waits 15ms for the servo to reach the position
  }
}
```