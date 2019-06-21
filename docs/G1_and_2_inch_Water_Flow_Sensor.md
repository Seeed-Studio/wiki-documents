---
name: G1&2" Water Flow Sensor
category: MakerPro
bzurl: https://www.seeedstudio.com/g12-water-flow-sensor-p-635.html?cPath=84_87&zenid=020999c566d2f31841dc54602b7d02ef
oldwikiname: G1/2 Water Flow sensor
prodimagename: 113990010%201.jpg
surveyurl: https://www.research.net/r/G1_and_2_inch_Water_Flow_Sensor
sku: 314150005
---
![](https://github.com/SeeedDocument/G1_and_2_inch_Water_Flow_Sensor/raw/master/img/flowsensor_LRG.jpg)

Water flow sensor consists of a plastic valve body, a water rotor, and a hall-effect sensor. When water flows through the rotor, rotor rolls. Its speed changes with different rate of flow. The hall-effect sensor outputs the corresponding pulse Signal.

**Version Tracker**

|Revision|	Descriptions|	Release|
|---|---|---|---|
|v1.0|	Initial public release	|May 31, 2010|
|v2.0|	Public release 2.0|	Jul 05, 2010|

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g12-water-flow-sensor-p-635.html?cPath=84_87&zenid=020999c566d2f31841dc54602b7d02ef)

## Specification
---
|items|value|
|---|---|
|Mini. Wokring Voltage	|DC 4.5V|
|Max. Working Current	|15mA(DC 5V)|
|Working Voltage	|5V～24V|
|Flow Rate Range	|1～30L/min|
|Load Capacity	|≤10mA(DC 5V)|
|Operating Temperature	|≤80℃|
|Liquid Temperature|	≤120℃|
|Operating Humidity	|35%～90%RH|
|Water Pressure	|≤2.0MPa|
|Storage Temperature	|-25℃～+80℃|
|Storage Humidity	|25%～95%RH|

## Mechanic Dimensions
---
Unit:mm

![](https://github.com/SeeedDocument/G1_and_2_inch_Water_Flow_Sensor/raw/master/img/Dem1.png)

![](https://github.com/SeeedDocument/G1_and_2_inch_Water_Flow_Sensor/raw/master/img/Dem2.png)

## Sensor Components
---

|No.	|Name|	Quantity|	Material	|Note|
|---|---|---|---|---|
|1|	Valve body	|1|	PA66+33%glass fiber	||
|2|	Stainless steel bead|	1|	Stainless steel SUS304	||
|3|	Axis	|1	|Stainless steel SUS304	||
|4|	Impeller|	1|	POM	||
|5|	Ring magnet	|1|	Ferrite	||
|6|	Middle ring	|1|	PA66+33%glass fiber	||
|7|	O-seal ring	|1|	Rubber	||
|8|	Electronic seal ring	|1|	Rubber	||
|9|	Cover	|1|	PA66+33%glass fiber	||
|10|	Screw	|4|	Stainless steel SUS304	|3.0*11|
|11	|Cable	|1	|1007 24AWG|||

## Usage Example

!!!Note
    This example is abstracted from the forum, which was done by Charles Gantt. Thanks for his contribution.Let's see how it works.

**Reading Water Flow rate with Water Flow Sensor**

This is part of a project I have been working on and I thought I would share it here since there have been a few threads on how to read water flow rate in liters per hour using the Water Flow Sensor found in the Seeed Studio Depo. It uses a simple rotating wheel that pulses a hall effect sensor. By reading these pulses and implementing a little math, we can read the liquids flow rate accurate to within 3%. The threads are simple G3/4 so finding barbed ends will not be that hard.

**Hardware Installation**

You will need Seeeduino / Arduino ,Water Flow Sensor,10K resistor,a breadboard and some jumper wires.

Wiring up the Water Flow Sensor is pretty simple. There are 3 wires: Black, Red, and Yellow. Black to the Seeeduino's ground pin Red to Seeeduino's 5v pin The yellow wire will need to be connected to a 10k pull up resistor.and then to pin 2 on the Seeeduino.

Here is a fritzing diagram I made to show you how to wire it all up.

![](https://github.com/SeeedDocument/G1_and_2_inch_Water_Flow_Sensor/raw/master/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Once you have it wired up you will need to upload the following code to your Seeeduino. Once it is uploaded and you have some fluid flowing through the Water Flow Sensor, you can open the serial monitor and it will display the flow rate, refreshing every second.


**Programming**

```c
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

You can refer our forum for more details about Reading Water Flow rate with Water Flow Sensor.

## Wiring Diagram
---

The external diameter of thread the connections use is 1.4mm.
![](https://github.com/SeeedDocument/G1_and_2_inch_Water_Flow_Sensor/raw/master/img/Wfs-wiring.jpg)

## Output Table
---

Pulse frequency (Hz) in Horizontal Test= 7.5Q, Q is flow rate in L/min. (Results in +/- 3% range)

|items|value|
|---|---|
|Output pulse high level|	Signal voltage >4.5 V( input DC 5 V)|
|Output pulse low level	|Signal voltage <0.5V( input DC 5V)|
|Precision	|3% (Flow rate from 1L/min to 10L/min)|
|Output signal duty cycle	|40%～60%|

## Related Projects

It's a pity that we don't have any demo about G1/2 Water Flow Sensor in the [Recipe](https://community.seeedstudio.com/projects.html#recipe) yet.

Here we introduce some projects about [Grove-Water Sensor](http://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html).

**What is Grove - Water Sensor**

![](https://github.com/SeeedDocument/G1_and_2_inch_Water_Flow_Sensor/raw/master/img/Twig_-_Water_Sensor.jpg)

This water sensor module is part of the Twig system.You can use it with the analog pins to detect the amount of water induced contact between the grounded and sensor traces.

It works by having a series of exposed traces connected to ground and interlaced between the grounded traces are the sens traces.

The sensor traces have a weak pull-up resistor of 1 MΩ. The resistor will pull the sensor trace value high until a drop of water shorts the sensor trace to the grounded trace.

This circuit will work with the digital I/O pins of your Arduino.


**Arduino Plant Warden**

![](https://github.com/SeeedDocument/G1_and_2_inch_Water_Flow_Sensor/raw/master/img/552c2c4f2e5a8.jpg)

This project uses Grove - Water Sensor to create a simple but effective solution to watering plants.
How it works:
- Display readouts of water sensor and temperature sensor on OLED screen
- Send alert and activate a pump driver when water is under threshold.
- Supply the variation in color by 10 RGB LEDs.


[I want to make it.](https://community.seeedstudio.com/project_detail.html?id=103)

[More Awesome Projects by Water Sensor](http://www.seeedstudio.com/recipe/index.php?query=water+sensor)

**Share Your Awesome Projects with Us**

Born with the spirit of making and sharing, that is what we believe makes a maker.
And only because of this, the open source community can be as prosperous as it is today.
It does not matter what you are and what you have made, hacker, maker, artist or engineers.
As long as you start sharing your works with others, you are being part of the open source community and you are making your contributions.

Now share your awesome projects with us on [Recipe](https://community.seeedstudio.com/), and win a chance to become the Core User of Seeed.

- Core Users, are those who show high interests in Seeed products and make significant contributions on Recipe.

- We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improve the product performance and user experience. And in most cases when our Core Users have some good ideas of making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible.

Get more information about Core User, please email to: recipe@seeed.cc

## Licensing
---

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.


## FAQ

Here is the Sensors FAQ, people can go here to find questions and answers for this kind of products.

1. **What materials is water flow sensor made of?**

  - Nylon with fiber, avoiding strong acid and strong base.

2. **Is the water flow sensor safe for drinking water?**

  - Yeah, it has been used on drinking machine.

## Resource
---
- [Water flow sensor datasheet.pdf](https://github.com/SeeedDocument/G1_and_2_inch_Water_Flow_Sensor/raw/master/res/Water_flow_sensor_datasheet.pdf)
- [Reading Water Flow rate with Water Flow Sensor](https://community.seeedstudio.com/topic_detail.html?id=575#p3632)
- [Water Flow rate display on LCD](https://github.com/practicalarduino/WaterFlowGauge)
- [datasheet for the material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>