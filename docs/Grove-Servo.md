---
title: Grove - Servo
category: Actuator
bzurl: https://www.seeedstudio.com/Grove-Servo-p-1241.html
oldwikiname:  Grove - Servo
prodimagename: Grove—Servo.jpg
surveyurl: https://www.research.net/r/Grove-Servo
sku:  316010005
tags: grove_i2c, io_5v, plat_duino, plat_linkit

---
![](https://github.com/SeeedDocument/Grove-Servo/raw/master/img/Grove—Servo.jpg)

Grove - Servo is DC motor with gearing and feedback system. It is used in driving mechanism of robots. The module is a bonus product for Grove lovers. We regulated the three-wire servo into a Grove standard connector. You can plug and play it as a typical Grove module now, without jumper wires clutter.

But if you feel more like a proto servo, check out EMAX 9g ES08A High Sensitive Mini Servo. They are the same model, both of good quality and burden-free price.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Servo-p-1241.html)

Feature
---
*   Small module
*   Grove Compatible Interface
*   Easy to use

Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Min
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Max
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th> Working Voltage
</th>
<td> 4.8
</td>
<td> 5.0
</td>
<td> 6.0
</td>
<td> V
</td></tr>
<tr>
<th> Torque
</td>
<td colspan="3"> 1.5/1.8
</td>
<td> Kg.cm
</td></tr>
<tr>
<th scope="row"> Speed
</th>
<td colspan="3"> 0.12/0.16
</td>
<td> s/60°
</td></tr>
<tr>
<th scope="row"> Size
</th>
<td colspan="3"> 32X11.5X24
</td>
<td> mm
</td></tr>
<tr>
<th scope="row"> Weight
</th>
<td colspan="3"> 8.5
</td>
<td> g
</td></tr></table>

Platforms Supported
-------------------

Getting Started
---
### Connection

Here we will show you how this Grove - Servo works via a simple demo. First of all, we need to prepare the below stuffs:

| Seeeduino V4 | Grove - Servo | Base Shield |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Servo/raw/master/img/Grove%20Servo_s.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

The Servo has three wires: power, ground, and signal. The power wire is typically red, and should be connected to the 5V pin on the Arduino/Seeeduino board. The ground wire is typically black or brown and should be connected to a ground pin on the Arduino board. The signal pin is typically yellow, orange or white and should be connected to Digital 9 on the Arduino board. We can change to the digital port as we like. But don't forget to change the port number in the definition of the demo code at the same time.

-   Connect the module to **D9** port of Base Shield.
-   Plug Grove- Base Shield into Arduino.
-   Connect Arduino to PC via a USB cable.


### Software

- Let's sweep the shaft of a servo back and forth across 180 degrees by using [Adruino Servo Library](http://arduino.cc/en/Reference/Servo).
- Open the code directly by the path: **File -> Examples ->Servo->Sweep**.

  ![](https://github.com/SeeedDocument/Grove-Servo/raw/master/img/library%20example.jpg)

```
/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
}
```

- Upload the sketch. We can see the servo sweep.

Resources
---------

- **[Document]** [Understanding RC Servos](http://www.rchelicopterfun.com/rc-servos.html)
- **[Library]**[Arduino Tutorial - Servo Library](https://www.arduino.cc/en/Reference/Servo)
- **[Demo]** [Digital/Analog Clock - Arduino + PaperCraft](http://www.instructables.com/id/DigitalAnalog-Clock-Arduino-PaperCraft/?ALLSTEPS)
- **[Demo]** [Low Cost Hobby Servo XY Table](http://www.instructables.com/id/Low-Cost-Hobby-Servo-XY-Table/?ALLSTEPS)
