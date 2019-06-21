---
name: Grove - LED Socket Kit
category: Display
bzurl: https://www.seeedstudio.com/Grove-White-LED-p-1140.html
oldwikiname:  Grove - LED Socket Kit
prodimagename: Grove-White-LED-p-2016.jpeg
surveyurl: https://www.research.net/r/Grove_LED_Socket_Kit
sku:  104030009
---
![](https://github.com/SeeedDocument/Grove-LED_Socket_Kit/raw/master/img/Grove-White-LED-p-2016.jpeg)

Grove - LED is designed for the beginners of Arduino/Seeeduino to monitor controls from digital ports. It can be mounted to the surface of your box or desk easily and used as pilot lamp for power or signal. Its brightness can be adjust by potentiometer.


## Features
---
*   Grove compatible interface

*   3.3V/5V Compatible

*   Adjustable LED orientation

*   Adjustable LED brightness

## Specification
---
<table >
<tr>
<td width="400"> **Item**
</td>
<td width="400"> **Description**
</td></tr>
<tr style="font-size: 90%">
<td> LED Control Mode
</td>
<td> Digital Pin of Arduino
</td></tr>
<tr style="font-size: 90%">
<td> Working Voltage
</td>
<td> 5V
</td></tr>
<tr style="font-size: 90%">
<td> Supply Mode
</td>
<td> Grove Interface
</td></tr></table>

##  Get Started with Aduino
---
Here we show how to use Arduino to control the state of the LED.

1.Connect the LED to  Base Shield's **digital port 2** with 4pin Grove Cable.Of course you can change to other valid digital ports if it's necessary and the definitions of the port should be changed too.

2.Plug it onto the Arduino/Seeeduino. Connect the board to PC using USB cable.

![](https://github.com/SeeedDocument/Grove-LED_Socket_Kit/raw/master/img/Grove-LED.jpg)

3.Copy the demo code to your sketch, then upload to Arduino or Seeeduino board. Please click [here](http://www.seeedstudio.com/wiki/Upload_Code) if you do not know how to upload.

You will see the LED  blink every second.
```
/*************************************************************************
* File Name          : GroveLEDDemoCode.ino
* Author             : Seeedteam
* Version            : V1.1
* Date               : 18/2/2012
* Description        : Demo code for Grove - LED
*************************************************************************/

#define LED 2 //connect LED to digital pin2
void setup() {
    // initialize the digital pin2 as an output.
    pinMode(LED, OUTPUT);
}

void loop() {
    digitalWrite(LED, HIGH);   // set the LED on
    delay(500);               // for 500ms
    digitalWrite(LED, LOW);   // set the LED off
    delay(500);
}
```
##  Get Started with Raspberry Pi
---
Connect the **LED to Port D4** and power on the Raspberry Pi, using the Grove wire connector. This is a test to make led blinking. You can connect to GrovePi+ with it as the picture below.
```
# GrovePi LED Blink example

import time
from grovepi import *

# Connect the Grove LED to digital port D4
led = 4

pinMode(led,"OUTPUT")
time.sleep(1)

while True:
    try:
        #Blink the LED
        digitalWrite(led,1)		# Send HIGH to switch on LED
        time.sleep(1)

        digitalWrite(led,0)		# Send LOW to switch off LED
        time.sleep(1)

    except KeyboardInterrupt:	# Turn LED off before stopping
        digitalWrite(led,0)
        break
    except IOError:				# Print "Error" if communication error encountered
        print "Error"
```
###  Run The Program

*   Find the path to the file(According to your own path)
```
cd GrovePi/Software/Python/
```

*   Run Program
```
sudo python grove_led_blink.py
```

##  Resources
---
*   [Grove - LED V1.3 Source files (Eagle and pdf)](https://github.com/SeeedDocument/Grove-LED_Socket_Kit/raw/master/res/Grove-LED_v1.3_Schematics.zip)

*   [Grove - LED Source files (Eagle and pdf)](https://github.com/SeeedDocument/Grove-LED_Socket_Kit/raw/master/res/Grove-LED_v1.0_Source_File.zip)

*   [GroveLEDDemoCode](https://github.com/SeeedDocument/Grove-LED_Socket_Kit/raw/master/res/GroveLEDDemoCode.zip)

*   [Grove-LED Socket Kit](https://github.com/SeeedDocument/Grove-LED_Socket_Kit/raw/master/res/Grove-LED_Socket_Eagle_File.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>