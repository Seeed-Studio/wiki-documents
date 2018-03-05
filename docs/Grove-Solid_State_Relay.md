---
title: Grove - Solid State Relay
category: Actuator
bzurl: https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html
oldwikiname: Grove - Solid State Relay
prodimagename: Grove_Solid_State_Relay_1.jpg
surveyurl: https://www.research.net/r/Grove_Solid_State_Relay
sku: 103020004
---
![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/Grove_Solid_State_Relay_1.jpg)

Grove – Solid State Relay is a non-contact electronic switch module that has relay features. Based on S208T02, it has a maximum output of 250VAC/4A, with a switching speed less than 10ms. This module is equipped with acrylic base and a 3D-printed protection insulation shield, for user’s safety. The featured LED indicates that the relay is on. It can be widely used in various areas such as computer peripheral interfaces, temperature/speed/light adjustment, servo control, petrochemical, medical instrumentations, financial devices, coal, meters, traffic signals, etc.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html)

## Features
---
- 3D-printed protection insulation shield
- Compatible with both 3.3V and 5V control level
- Low switching latency (≤10ms)
- LED on-state indicator
- Featured radiator provide better stability
- Acrylic base and insulation paper increase safety performance
- Grove compatible

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)


## Application Ideas
---
- Operations that require low-latency switching, e.g. stage light control
- Devices that require high stability, e.g. medical devices, traffic signals
- Situations that require explosion-proof, anticorrosion, moisture-proof, e.g. coal, chemical industries.

## Specification
---
|Item	|Min	|Typical	|Max	|Uint|
|---|---|---|---|---|
|Input Voltage|	3.0|3.3|5.0|VDC|
|Input Current|	16|20|50|mA|
|Output Voltage	|-|220|250|VAC|
|Output Current	|--|--|4.0|A
|Operating frequency|45|50|65|Hz
|Operating temperature|-25|25|85|℃
|Turn-on time	|--|10|--|ms|
|Turn-off time	|--|10|--|ms|
|Dimension	|-|44x44x32|-|mm|
|Net Weight	|-|25.5|-|g|

## Interface Function
---
![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/Ssr_interface.jpg)

!!!Cautions
1.	If the output voltage is higher than 36V, you need to ensure the module is in the off state before you operate with the screws.
2.	The heat sink can be in very high temperature, do not touch it during use.


## Usage

**With Arduino**

The Grove - Solid State Relay has a variety of applications. Here we elaborate on how to use it to control a bulb.

First off, you'll need to connect it to the Arduino like so:

1.  Connect the Grove - Solid State Relay to Digital 13 of Grove-Base Shield via a Grove 4 pin wire.
2.  Plug Grove-Base Shield onto Arduino and connect Arduino to PC via a USB cable.
3.  Connect the bulb to OUTPUT of Grove - Solid State Relay.

![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/Grove_-_SSR2.JPG)

You need upload the below code. Please click [here](http://wiki.seeedstudio.com/wiki/Upload_Code) if you do not how to upload.

```
/*
  Grove - Solid State Relay Demo Code
  The ssr will turn on for 5s and then turn off for 5s, and so on.
  http://www.seeedstudio.com
*/

int ssrControlPin = 13;
void setup() {
    // initialize the digital pin as an output.
    pinMode(ssrControlPin, OUTPUT);
}

void loop() {
    digitalWrite(ssrControlPin, HIGH);      // set the SSR on
    delay(5000);                            // wait for 5 second
    digitalWrite(ssrControlPin, LOW);       // set the SSR off
    delay(5000);                            // wait for 5 second
}
```

After upload the code, you can see the bulb will light 5s and then turn off for 5s, and so on.

**With Raspberry Pi**

1. You should have got a raspberry pi and a grovepi or grovepi+.
2. You should have completed configuring the development enviroment, otherwise follow [here](http://wiki.seeedstudio.com/wiki/GrovePi+#Introducing_the_GrovePi.2B).
3. Connection
  - Plug the sensor to grovepi socket D4 by using a grove cable.
4. Navigate to the demos' directory:

```
cd yourpath/GrovePi/Software/Python/
```

- To see the code

```
   nano grove_solid_state_relay.py   # "Ctrl+x" to exit #
```

```
import time
import grovepi

# Connect the Grove Solid State Relay to digital port D4
# CTR,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # switch on for 5 seconds
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # switch off for 5 seconds
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

5. Run the demo.

```
   sudo python grove_solid_state_relay.py
```

## Test Report
---
**1.Experimental purposes**
- Thermal performance of Grove – Solid State Relay(S208T02).
- Limit load current of Grove – SSR.
- Measures to improve the limit load current.

**2.Experimental Principle**

By recording SSR chip temperature at different current and different time points, analysis the data and draw conclusions.

Figure 1 is screenshot from S208T02 datasheet, we can see that at different heat sink and different temperature, SSR’s current is different.

![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/Figure_1.jpg)

There needs a temperature sensor to get the temperature of the chip. I use DS18B20 whose detection range is -25-125℃ to meet the requirements.

Figure 2 shows the experimental equipment and installation plans, the temperature sensor is tied to the right side of the heat sink, to make the temperature that 18b20 detects as close as possible to the heat sink temperature, smear between the sensor and the heat sink thermal plastic. Between the heat sink and SSR coated thermal plastic. Therefore， the temperature of the 18b20 is equal to the temperature of SSR.

![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/Grove-ssr-report-image2.JPG)

**3.Experimental data**

|-	|1min	|5min|	10min|	20min	|stable time|
|---|---|---|---|---|---|
|0.5A|	31.40|	33.75	|34.75|	35.00	|15min|
|1A|	31.8	|36.75	|39.6|	40.56	|18min|
|2A|	34.5|	46.6|	48.88	|51.13	|20min|
|3A	|35.56|	52.81|	58.88	|60.06|	17min|
|4A|	38.00	|57.88|	63.88	|67.00	|19min|
|5A|	44.00|	66.00|	73.12|	75.37|	19min|

!!!Note
    1. The unit of temperature in the table is ℃
    2. When tested room temperature is 28 ℃

**4.Expansion experiment**

  In order to prove that improve the level of heat sink will improve the SSR limit operating current, I did an expansion experiment.

  Cuz I hadn’t a larger heat sink on hand, so I installed a fan (which I take for my PC’s CPU) above the SSR. As shown in Figure 3.

![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/Grove-ssr-report-image3.JPG)

I just test the stable time of different operating current, as shown in Table 2.

|-|	6.0A|	6.5A	|7.0A|	7.5A|
|---|---|---|---|---|
|Stable time|	54.44℃|	57.63℃	|60.06℃|	62.38℃|

**5.Expansion experiment**

From the above experimental results, the following conclusions can be drawn:

  - When current is fixed, with the passage of time, the temperature will stabilize at a certain value. This value is related with the current, the current increases, the stable temperature are greater. At 2A, stable temperature will be more that 50 ℃, So, when the SSR work, you should not touch it.

  - Combined with Figure 1 and our data, I consider that the Grove – SSR can operator 4A load current at max.

  - If load current larger than 5A, such as 7A, you should install a fun on it , or other cooling measures, but it’s not recommended.


## Resources
---
- [Grove - Solid State Relay Eagle File](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/res/Ssr_eaglefile.zip)
- [Grove - Solid State Relay Demo Code](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/res/SSR_Demo_Code.rar)
- [S208T02 Datasheet](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/res/S208t02_datasheet.pdf)
- [Grove - Solid State Relay in PDF](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/res/SSR_v0.9b.pdf)
- [Grove - Solid State Relay Test Report](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/res/Grove-SSR_Test_Report_V0.3.pdf)
