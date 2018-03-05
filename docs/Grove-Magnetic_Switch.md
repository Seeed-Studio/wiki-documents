---
title: Grove - Magnetic Switch
category: Sensor
bzurl: https://seeedstudio.com/Grove-Magnetic-Switch-p-744.html
oldwikiname: Grove_-_Magnetic_Switch
prodimagename: Magnetic_Switch.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020038 1.jpg
surveyurl: https://www.research.net/r/Grove-Magnetic_Switch
sku: 101020038
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_pi, plat_bbg, plat_wio
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/img/Magnetic_Switch.jpg)

This is a Grove interface compatible Magnetic switch module. It is based on encapsulated dry reed switch CT10. CT10 is single-pole, single throw (SPST) type, having normally open ruthenium contacts. The sensor is a double-ended type and may be actuated with an electromagnet, a permanent magnet or a combination of both. The magnetic switch is a wonderful tool for designers who would like to turn a circuit on and off based on proximity.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

Features
--------

-   Grove compatible interface
-   2.0cm x 2.0cm Grove module
-   Minimum external parts
-   10W rating
-   Rugged encapsulation

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Application Ideas
-----------------

-   Proximity Sensor
-   Security Alarm Sensor
-   Level Sensor
-   Flow Sensor
-   Pulse Counter

Specifications
-------------

<table border="1">
<tr>
<th scope="col">
Items
</th>
<th scope="col">
Min
</th>
<th scope="col">
Norm
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<td>
Working Voltage
</td>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
Switched Power
</td>
<td colspan="3">
10
</td>
<td>
W
</td>
</tr>
<tr align="center">
<td>
Switched Voltage AC,RMS value(max)
</td>
<td colspan="3">
&lt; 140
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
Switched Current DC
</td>
<td colspan="3">
&lt; 500
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Carry Current DC
</td>
<td colspan="3">
&lt; 0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<td>
Contact Resistance
</td>
<td colspan="3">
&lt;200
</td>
<td>
mΩ
</td>
</tr>
<tr align="center">
<td>
Insulation Resistance
</td>
<td colspan="3">
&gt;10<sup>6</sup>
</td>
<td>
MΩ
</td>
</tr>
<tr align="center">
<td>
Operating Temperature
</td>
<td>
-40
</td>
<td>
-
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<td>
Operate Range
</td>
<td>
10
</td>
<td>
-
</td>
<td>
40
</td>
<td>
AT
</td>
</tr>
</table>

Platforms Supported
-------------------

Usage
-----

### With [Arduino](/Arduino "Arduino")

The SIG pin of the module output LOW normally. When a magnet approaches the switch, the magnetic switch close and the SIG pin output HIGH.

The following sketch demonstrates a simple application of using the Magnetic switch to control the led. When you put a magnet that has enough magnetic power close to the module, the switch is closed .Then the SIG pin out put a high voltage. You can use this to control the led.

As the picture on the below indicates, the Magnetic switch is connected to digital port 9 of the **Grove - Base Shield** and the LED is connected to digital port 13. When a Magnet approaches the switch, the SIG pin outputs a High voltage. Then the LED lights up. The hardware installation is as follows:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/img/Grove-Magnetic_Switch.jpg)

-   Copy and paste code below to a new Arduino sketch.

```
    /*******************************************************************************/

    /*macro definitions of magnetic pin and LED pin*/
    #define MAGNECTIC_SWITCH 9
    #define LED 13//the on board LED of the Arduino or Seeeduino

    void setup()
    {
        pinsInit();
    }
     
    void loop() 
    {
        if(isNearMagnet())//if the magnetic switch is near the magnet?
        {
            turnOnLED();
        }
        else
        {
            turnOffLED();
        }
    }
    void pinsInit()
    {
        pinMode(MAGNECTIC_SWITCH, INPUT);
        pinMode(LED,OUTPUT);
    }

    /*If the magnetic switch is near the magnet, it will return ture, */
    /*otherwise it will return false                                */
    boolean isNearMagnet()
    {
        int sensorValue = digitalRead(MAGNECTIC_SWITCH);
        if(sensorValue == HIGH)//if the sensor value is HIGH?
        {
            return true;//yes,return ture
        }
        else
        {
            return false;//no,return false
        }
    }
    void turnOnLED()
    {
        digitalWrite(LED,HIGH);
    }
    void turnOffLED()
    {
        digitalWrite(LED,LOW);
    }
```

-   Upload the code.
-   Then the LED light when there is Magnetic approaches the switch. Have a try!

### With Raspberry Pi

1.You should have a raspberry pi and a grovepi or grovepi+.

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePiPlus).

3.Connection

-   Plug the Magnet Switch to grovepi socket D3 by using a grove cable.

4.Navigate to the demos' directory:
```
    cd yourpath/GrovePi/Software/Python/
```

-   To see the code (this demo has the same usage with tilt switch)
```
    nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```
```
    import time
    import grovepi

    # Connect the Grove Tilt Switch to digital port D3
    # SIG,NC,VCC,GND
    tilt_switch = 3

    grovepi.pinMode(tilt_switch,"INPUT")

    while True:
        try:
            print grovepi.digitalRead(tilt_switch)
            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Run the demo.
```
    sudo python grove_tilt_switch.py
```

6.Result

Put a magnet upon the sensor, the SIG pin will output HIGH.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/img/Grovepi_tilt_Switch_00.png)

Resources
---------

-   [Grove-Magnetic Switch v0.9 Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/res/Magnetic_Switch.zip)
-   [CT10 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/res/CT10.pdf)
-   [Grove-Magnetic Switch v1.3 Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip)
-   [Grove-Magnetic Switch v1.3 PDF File](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/res/Grove-Magnetic_Switch_v1.3_PDF_File.pdf)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Magnetic_Switch -->
