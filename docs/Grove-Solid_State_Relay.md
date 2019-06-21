---
name: Grove - Solid State Relay
category: Actuator
bzurl: https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html
oldwikiname: Grove - Solid State Relay
prodimagename: Grove_Solid_State_Relay_1.jpg
surveyurl: https://www.research.net/r/Grove_Solid_State_Relay
sku: 103020004
---
![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/Grove_Solid_State_Relay_1.jpg)

Grove – Solid State Relay is a non-contact electronic switch module that has relay features. Based on S208T02, it has a maximum output of 250VAC/4A, with a switching speed less than 10ms. This module is equipped with acrylic base and a 3D-printed protection insulation shield, for user’s safety. The featured LED indicates that the relay is on. It can be widely used in various areas such as computer peripheral interfaces, temperature/speed/light adjustment, servo control, petrochemical, medical instrumentations, financial devices, coal, meters, traffic signals, etc.


!!!Notice
        This module only works with AC load for the output. If you use DC load, once the relay is turned on, it will always stay on.



<p style=":center"><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- 3D-printed protection insulation shield
- Compatible with both 3.3V and 5V control level
- Low switching latency (≤10ms)
- LED on-state indicator
- Featured radiator provide better stability
- Acrylic base and insulation paper increase safety performance
- Grove compatible

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)


## Application Ideas

- Operations that require low-latency switching, e.g. stage light control
- Devices that require high stability, e.g. medical devices, traffic signals
- Situations that require explosion-proof, anticorrosion, moisture-proof, e.g. coal, chemical industries.

## Specification

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

![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/Ssr_interface.jpg)

!!!Cautions
        **1.**	If the output voltage is higher than 36V, you need to ensure the module is in the off state before you operate with the screws.
        
        **2.**	The heat sink can be in very high temperature, do not touch it during use.


## Getting Started



### Play With Arduino


!!!Note
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

!!!Warning
        This demon works with 220V AC load, please pay attention for your safety.

#### Materials required


| Seeeduino V4.2 | Base Shield| Bulb |Grove - Solid State Relay|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/bulb.jpg)|![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|Use your own bulb :)</a>|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy




#### Hardwave

- **Step 1.** Connect the Grove - Solid State Relay to port **D3** of Grove-Base Shield.

- **Step 2.** Connect the wire of the bulb to the **output port** of the Grove - Solid State Relay. 

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a Micro-USB cable.




!!!Note
    If we don't have the base shield, we also can directly connect the Grove-Relay and Grove-Button to Arduino board. Please follow below connection.


| Grove - Solid State | Arduino |Grove Cable|
|-------------|---------|------|
| GND         | GND     |Black|
| VCC         | 5V      |Red|
| SIG         | D3      |Yellow|


![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/Arduino_relay.jpg)

#### Software

- **Step 1.** Open the Arduino IDE and copy the following code into a new sketch.

```
/*
  Grove - Solid State Relay Demo Code
  The ssr will turn on for 5s and then turn off for 5s, and so on.
  http://www.seeedstudio.com
*/

int ssrControlPin = 3;
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

- **Step 2.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).


Done uploading, then you will see the bulb turn on 5s and then turn off 5s continuously.



### Play With Raspberry Pi

#### Hardware

**Materials required**

| Raspberry pi | GrovePi_Plus|  Grove-Relay|
|--------------|-------------|------|
|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg)|![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">Get One Now</a>|



- **Step 1.** Plug the GrovePi_Plus into Raspberry.

- **Step 2.** Connect the Grove-Relay to **D4** port of GrovePi_Plus.

- **Step 3.** Connect the wire of the bulb to the **output port** of the Grove - Solid State Relay. 

- **Step 4.** Connect the Raspberry to PC via USB cable.


![](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/img/PI_RELAY.jpg)


#### Software

If this is the first time you use GrovePi, please do this part step by step. If you are an old friend with GrovePi, you can skip **Step1** and **Step2**.


- **Step 1.** Setting Up The Software. In the command line, type the following commands:

```
sudo curl -kL dexterindustries.com/update_grovepi | bash

```

```
sudo reboot
```

```
cd /home/pi/Desktop
```
```
git clone https://github.com/DexterInd/GrovePi.git
```

For more detail about this part, please refer to [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/).


- **Step 2.** Follow [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) to update the latest firmware of GrovePi.


!!!Note
    We firmly suggest you to update the firmware, or for some sensors you may get errors.


- **Step 3.** Run the following command to run the demo and get the result.

```
cd /home/pi/Desktop/GrovePi/Software/Python/

```

```
sudo python grove_solid_state_relay.py 
```

The result should be like:

```
pi@raspberrypi:~/Desktop/GrovePi/Software/Python$ sudo python grove_solid_state_relay.py
on
off
on
off
on
off
on
off
on
off
on
off

```

If you want to check the code, please type the command below.

```
nano grove_solid_state_relay.py   # "Ctrl+x" to exit #
```

The code is:

```python
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

- **[Zip]** [Grove - Solid State Relay Eagle File](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/res/Ssr_eaglefile.zip)
- **[RAR]** [Grove - Solid State Relay Demo Code](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/res/SSR_Demo_Code.rar)
- **[PDF]** [S208T02 Datasheet](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/res/S208t02_datasheet.pdf)
- **[PDF]** [Grove - Solid State Relay in PDF](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/res/SSR_v0.9b.pdf)
- **[PDF]** [Grove - Solid State Relay Test Report](https://github.com/SeeedDocument/Grove-Solid_State_Relay/raw/master/res/Grove-SSR_Test_Report_V0.3.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>