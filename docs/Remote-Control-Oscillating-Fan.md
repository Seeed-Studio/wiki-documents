# Remote Control Oscillating Fan

<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/beginnerKit-5-projects/Remote-Control-Oscillating-Fan/Fan_IRcontroler.gif
"/></div>



## Overview

This wiki introduces how to make a remote control oscillating fan.


## Feature

- The fan power controlled by the controller. 
- The fan swing way is able to use remote control.

## Component required

### hardware

- [**Grove Beginner Kit**](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)
- [**Grove mini fan**](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)
- [**Grove-Servo**](https://www.seeedstudio.com/Grove-Servo.html)
- [**Grove - IR (Infrared) Receiver**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

### Software
- Download the [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)
- Navigate to **Sketch** -> **Include Library** -> **Manage Libraries**, search **IRremote** then install it. 

!!!Note
    Refer How to [**install library**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

## Hardware Connection
Please follow the same color line to connect each sensor on the board.
<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/beginnerKit-5-projects/Remote-Control-Oscillating-Fan/Remote-Control-Oscillating-Fan-pic.png"/></div>


This is controller botton function. 
<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/beginnerKit-5-projects/Remote-Control-Oscillating-Fan/remote_controller.png"/></div>


## Arduino Instructions

1. Follow the connection picture connect all the sensor on the board.
2. Copy the code stick on the Aruino IDE then upload it.
3. Place the Fan in the safety position, try to press the button make sure it can work safely.


```CPP
#include <IRremote.h>
#include <Servo.h>

Servo myservo;  // create servo object to control a servo
int RECV_PIN = 2; // set pin 2 as IR control 

IRrecv irrecv(RECV_PIN); 

decode_results results;  

int pos = 0;    // variable to store the servo position
int fanPin = 6;  // set D6 as control switch 
int fanState = LOW;
int IO = 0;

void setup()
{
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // remind enabling IR
  irrecv.enableIRIn(); // Start the receiver
  Serial.println("Enabled IRin");
  myservo.attach(3);  // attaches the servo on pin 2 to the servo object
  pinMode(fanPin, OUTPUT);
}

//  power_encode 2155829415     left  2155870215  right  2155821255

void loop() {
  
  if (irrecv.decode(&results)) { //checking IR signal

    if(results.value == 2155829415){      // Power off/on
      IO++;
      if(IO%2 == 0){
        fanState = HIGH;
        digitalWrite(fanPin, fanState);
        delay(100);
        }
       else{
        fanState = LOW;
        digitalWrite(fanPin, fanState);
        delay(100);
        }
      
      }

    if(results.value == 2155821255){      // fan swing to left
         for (pos = 0; pos <= 90; pos += 1) { // goes from 0 degrees to 90 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(40);                       // waits 15ms for the servo to reach the position
        }
      }

    if(results.value == 2155870215){      // fan swing to right
          for (pos = 90; pos >= 0; pos -= 1) { // goes from 90 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(40);                       // waits 15ms for the servo to reach the position
        }
      }
    
    Serial.println(results.value, HEX); 
    Serial.println(results.value);
    irrecv.resume();                    //recive next intrustion
    
  }
  delay(100);
}

```