---
name: G3/4 Water Flow sensor
category: MakerPro
bzurl: https://www.seeedstudio.com/g34-water-flow-sensor-p-1083.html?cPath=144_151
oldwikiname:  G3/4 Water Flow sensor
prodimagename:  3wsp.JPG
surveyurl: https://www.research.net/r/G3_4_Water_Flow_sensor
sku:   314150003
---
![](https://github.com/SeeedDocument/G3-4_Water_Flow_sensor/raw/master/img/P21408651.jpg)

Water flow sensor consists of a plastic valve body, a water rotor, and a hall-effect sensor. When water flows through the rotor, rotor rolls. Its speed changes with different rate of flow. The hall-effect sensor outputs the corresponding pulse Signal.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)]( https://www.seeedstudio.com/g34-water-flow-sensor-p-1083.html?cPath=144_151)

##   Specification
---
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
<td>1～60L/min
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
<td>≤2.0MPa
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

##   Mechanic Dimensions
---
###   Sensor Components

<table >
<tr>
<th>No.
</th>
<th>Name
</th>
<th>Quantity
</th>
<th>Material
</th>
<th>Note
</th></tr>
<tr style="font-size: 90%">
<td width="200"> 1
</td>
<td width="150">  Valve body
</td>
<td width="150">  1
</td>
<td width="150">  PA66+33%glass fiber
</td>
<td width="150">
</td></tr>
<tr style="font-size: 90%">
<td width="200"> 2
</td>
<td width="150">  Stainless steel bead
</td>
<td width="150">  1
</td>
<td width="150">  Stainless steel SUS304
</td>
<td width="150">
</td></tr>
<tr style="font-size: 90%">
<td> 3
</td>
<td>  Axis
</td>
<td>  1
</td>
<td>  Stainless steel SUS304
</td>
<td>
</td></tr>
<tr style="font-size: 90%">
<td> 4
</td>
<td>  Impeller
</td>
<td>  1
</td>
<td>  POM
</td>
<td>
</td></tr>
<tr style="font-size: 90%">
<td> 5
</td>
<td>  Ring magnet
</td>
<td>  1
</td>
<td>  Ferrite
</td>
<td>
</td></tr>
<tr style="font-size: 90%">
<td> 6
</td>
<td>  Middle ring
</td>
<td>  1
</td>
<td>  PA66+33%glass fiber
</td>
<td>
</td></tr>
<tr style="font-size: 90%">
<td> 7
</td>
<td>  O-seal ring
</td>
<td>  1
</td>
<td>  Rubber
</td>
<td>
</td></tr>
<tr style="font-size: 90%">
<td> 8
</td>
<td>  Electronic seal ring
</td>
<td>  1
</td>
<td>  Rubber
</td>
<td>
</td></tr>
<tr style="font-size: 90%">
<td> 9
</td>
<td>  Cover
</td>
<td>  1
</td>
<td>  PA66+33%glass fiber
</td>
<td>
</td></tr>
<tr style="font-size: 90%">
<td> 10
</td>
<td>  Screw
</td>
<td>  4
</td>
<td>  Stainless steel SUS304
</td>
<td>
</td></tr>
<tr style="font-size: 90%">
<td> 11
</td>
<td>  Cable
</td>
<td>  1
</td>
<td>  1007 24AWG
</td>
<td>
</td></tr></table>

##  Usage Example
---
<font>Note: This example is abstracted from the forum, which was done by Charles Gantt. Thanks for his contribution.Let's see how it works.</font>

###  Reading Water Flow rate with Water Flow Sensor

This is part of a project I have been working on and I thought I would share it here since there have been a few threads on how to read water flow rate in liters per hour using the Water Flow Sensor found in the Seeed Studio Depo. It uses a simple rotating wheel that pulses a hall effect sensor. By reading these pulses and implementing a little math, we can read the liquids flow rate accurate to within 3%. The threads are simple G3/4 so finding barbed ends will not be that hard.

**Hardware Installation**

You will need  Seeeduino / Arduino ,Water Flow Sensor,10K resistor,a breadboard and some jumper wires.

Wiring up the Water Flow Sensor is pretty simple. There are 3 wires: Black, Red, and Yellow.
Black to the Seeeduino's ground pin
Red to Seeeduino's 5v pin
The yellow wire will need to be connected to a 10k pull up resistor.and then to pin 2 on the Seeeduino.

Here is a fritzing diagram I made to show you how to wire it all up.

![](https://github.com/SeeedDocument/G3-4_Water_Flow_sensor/raw/master/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

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
    Calc = (NbTopsFan * 60 / 5.5); //(Pulse frequency x 60) / 5.5Q, = flow rate

    in L/hour
    Serial.print (Calc, DEC); //Prints the number calculated above
    Serial.print (" L/hour\r\n"); //Prints "L/hour" and returns a  new line
}
```
You can refer our forum for more details about [Reading Water Flow rate with Water Flow Sensor](http://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632).

##   Wiring Diagram
---
The external diameter of thread the connections use is 1.4mm.

![](https://github.com/SeeedDocument/G3-4_Water_Flow_sensor/raw/master/img/Wfs-wiring.jpg)

##   Output Table
---
Pulse frequency (Hz) in Horizontal Test= 5.5Q, Q is flow rate in L/min. (Results in +/- 3% range)

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

![](https://github.com/SeeedDocument/G3-4_Water_Flow_sensor/raw/master/img/G34_Flow_rate_to_frequency.jpg)

##   FAQ
---
Here is the Sensors FAQ, people can go here to find questions and answers for this kind of products.

**What materials is water flow sensor made of?**

Nylon with fiber, avoiding strong acid and strong base.

**Is the water flow sensor safe for drinking water?**

Yeah, it has been used on drinking machine.


##   Resource
---
*   [Reading Water Flow rate with Water Flow Sensor](http://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

*   [Water Flow rate display on LCD](http://www.practicalarduino.com/projects/water-flow-gauge)

*   [datasheet for the material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)


##   Related Projects
---
It's a pity that we don't have any demo about G3/4 Water Flow Sensor in the [Recipe](http://www.seeedstudio.com/recipe/) yet.

Post your awesome project about G3/4 Water Flow Sensor to <font color="#FF0000">win $100 Coupon!</font>. Please feel free to contact us: [recipe@seeed.cc](mailto:recipe@seeed.cc)

Here we introduce some projects about [Grove-Water Sensor](http://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html).

###  What is Grove - Water Sensor

![](https://github.com/SeeedDocument/G3-4_Water_Flow_sensor/raw/master/img/Twig-Water_Sensor.jpg)

This water sensor module is part of the Twig system.You can use it with the analog pins to detect the amount of water induced contact between the grounded and sensor traces.

It works by having a series of exposed traces connected to ground and interlaced between the grounded traces are the sens traces.

The sensor traces have a weak pull-up resistor of 1 MΩ. The resistor will pull the sensor trace value high until a drop of water shorts the sensor trace to the grounded trace.

This circuit will work with the digital I/O pins of your Arduino.

###   Arduino Plant Warden

![](https://github.com/SeeedDocument/G3-4_Water_Flow_sensor/raw/master/img/552c2c4f2e5a8.jpg)

This project uses Grove - Water Sensor to create a simple but effective solution to watering plants.

How it works:

*   Display readouts of water sensor and temperature sensor on OLED screen

*   Send alert and activate a pump driver when water is under threshold.

*   Supply the variation in color by 10 RGB LEDs.

[**I want to make it.**](http://www.seeedstudio.com/recipe/102-arduino-plant-warden.html)

[**More Awesome Projects by Water Sensor**](http://www.seeedstudio.com/recipe/index.php?query=water+sensor)

###   Share Your Awesome Projects with Us

Born with the spirit of making and sharing, that is what we believe makes a maker.

And only because of this, the open source community can be as prosperous as it is today.

It does not matter what you are and what you have made, hacker, maker, artist or engineers.

As long as you start sharing your works with others, you are being part of the open source community and you are making your contributions.

Now share your awesome projects with us on [Recipe](http://www.seeedstudio.com/recipe/), and win a chance to become the Core User of Seeed.

*   Core Users, are those who show high interests in Seeed products and make significant contributions on Recipe.
*   We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improve the product performance and user experience. And in most cases when our Core Users have some good ideas of making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible.

<font color="#FF0000">Get more information about Core User, please email to:</font> [recipe@seeed.cc](mailto:recipe@seeed.cc)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>