---
name: G1/8" Water Flow Sensor
category: MakerPro
bzurl: http://www.seeedstudio.com/depot/G18-Water-Flow-Sensor-p-1346.html?cPath=25_32
oldwikiname:  G1/8" Water Flow Sensor
prodimagename:  G18_Water_Flow_Sensor.jpg
surveyurl: https://www.research.net/r/G1-8_Water_Flow_Sensor
sku:    314150001
---
[![](https://github.com/SeeedDocument/G1-8_Water_Flow_Sensor/raw/master/img/G18_Water_Flow_Sensor.jpg)](http://www.seeedstudio.com/depot/G18-Water-Flow-Sensor-p-1346.html?cPath=25_32)

Water flow sensor consists of a plastic valve body, a water rotor, and a hall-effect sensor. When water flows through the rotor, rotor rolls. Its speed changes with different rate of flow. The hall-effect sensor outputs the corresponding pulse signal. This one is suitable to detect flow in water dispenser or coffee machine.

We have a comprehensive line of water flow sensors in different diameters. Check them out to find the one that meets your need most.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)

##  Features

*   Compact, Easy to Install

*   High Sealing Performance

*   High Quality Hall Effect Sensor

*   RoHS Compliant

##  Specification

<table >
<tr>
<td>Mini. Wokring Voltage
</td>
<td>DC 4.5V
</td></tr>
<tr>
<td>Max. Working Current
</td>
<td>15mA(DC 5V)
</td></tr>
<tr>
<td width="400px">Working Voltage
</td>
<td width="400px">5V～24V
</td></tr>
<tr>
<td>Flow Rate Range
</td>
<td>0.3~6L/min
</td></tr>
<tr>
<td>Load Capacity
</td>
<td>≤10mA(DC 5V)
</td></tr>
<tr>
<td>Operating Temperature
</td>
<td>≤80℃
</td></tr>
<tr>
<td>Liquid Temperature
</td>
<td>≤120℃
</td></tr>
<tr>
<td>Operating Humidity
</td>
<td>35%～90%RH
</td></tr>
<tr>
<td>Water Pressure
</td>
<td>≤0.8MPa
</td></tr>
<tr>
<td>Storage Temperature
</td>
<td>-25℃～+80℃
</td></tr>
<tr>
<td>Storage Humidity
</td>
<td>25%～95%RH
</td></tr></table>

##  Getting Started

<font>Note: This example is abstracted from the forum, which was done by Charles Gantt. Thanks for his contribution.Let's see how it works.</font>

###   Reading Water Flow rate with Water Flow Sensor

This is part of a project I have been working on and I thought I would share it here since there have been a few threads on how to read water flow rate in liters per hour using the Water Flow Sensor found in the Seeed Studio Depo. It uses a simple rotating wheel that pulses a hall effect sensor. By reading these pulses and implementing a little math, we can read the liquids flow rate accurate to within 3%. The threads are simple G3/4 so finding barbed ends will not be that hard.

**Hardware Installation**

You will need  Seeeduino / Arduino ,Water Flow Sensor,10K resistor,a breadboard and some jumper wires.

Wiring up the Water Flow Sensor is pretty simple. There are 3 wires: Black, Red, and Yellow.
Black to the Seeeduino's ground pin
Red to Seeeduino's 5v pin
The yellow wire will need to be connected to a 10k pull up resistor.and then to pin 2 on the Seeeduino.

Here is a fritzing diagram I made to show you how to wire it all up.

![](https://github.com/SeeedDocument/G1-8_Water_Flow_Sensor/raw/master/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Once you have it wired up you will need to upload the following code to your Seeeduino. Once it is uploaded and you have some fluid flowing through the Water Flow Sensor, you can open the serial monitor and it will display the flow rate, refreshing every second.

**Programming**
```
// reading liquid flow rate using Seeeduino and Water Flow Sensor from Seeedstudio.com
// Code adapted by Charles Gantt from PC Fan RPM code written by Crenn @thebestcasescenario.com
// http:/themakersworkbench.com http://thebestcasescenario.com http://seeedstudio.com

volatile int NbTopsFan; //measuring the rising edges of the signal
int Calc;
int hallsensor = 2;    //The pin location of the sensor

void rpm ()     //This is the function that the interupt calls
{
    NbTopsFan++;  //This function measures the rising and falling edge of the

    hall effect sensors signal
}
// The setup() method runs once, when the sketch starts
void setup() //
{
    pinMode(hallsensor, INPUT); //initializes digital pin 2 as an input
    Serial.begin(9600); //This is the setup function where the serial port is

    initialised,
    attachInterrupt(0, rpm, RISING); //and the interrupt is attached
}
// the loop() method runs over and over again,
// as long as the Arduino has power
void loop ()
{
    NbTopsFan = 0;   //Set NbTops to 0 ready for calculations
    sei();      //Enables interrupts
    delay (1000);   //Wait 1 second
    cli();      //Disable interrupts
    Calc = (NbTopsFan * 60 / 7.5); //(Pulse frequency x 60) / 7.5Q, = flow rate

    in L/hour
    Serial.print (Calc, DEC); //Prints the number calculated above
    Serial.print (" L/hour\r\n"); //Prints "L/hour" and returns a  new line
}
```

You can refer our forum for more details about [Reading Water Flow rate with Water Flow Sensor](http://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632).

##  Wiring Diagram

The external diameter of thread the connections use is 1.4mm.

![](https://github.com/SeeedDocument/G1-8_Water_Flow_Sensor/raw/master/img/Wfs-wiring.jpg)

##  Output Table

Pulse frequency (Hz) in Horizontal Test= 7.5Q, Q is flow rate in L/min. (Results in +/- 3% range)

<table >
<tr>
<td width="400px">Output pulse high level
</td>
<td width="400px">Signal voltage &gt;4.5 V( input DC 5 V)
</td></tr>
<tr>
<td>Output pulse low level
</td>
<td>Signal voltage &lt;0.5V( input DC 5V)
</td></tr>
<tr>
<td>Precision
</td>
<td>3% (Flow rate from 1L/min to 10L/min)
</td></tr>
<tr>
<td>Output signal duty cycle
</td>
<td>40%～60%
</td></tr></table>

##  Resource

*   [Water flow sensor datasheet.pdf](https://github.com/SeeedDocument/G1-8_Water_Flow_Sensor/raw/master/res/Water_flow_sensor_datasheet.pdf)

*   [Reading Water Flow rate with Water Flow Sensor](http://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

*   [Water Flow rate display on LCD](http://www.practicalarduino.com/projects/water-flow-gauge)

*   [datasheet for the material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>