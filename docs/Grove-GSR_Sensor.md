---
name: Grove - GSR Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-GSR-sensor-p-1614.html
oldwikiname: Grove_-_GSR_Sensor
prodimagename: GSR.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020052 1.jpg
surveyurl: https://www.research.net/r/Grove-GSR_Sensor
sku: 101020052
tags: grove_analog, io_3v3, io_5v, plat_duino, plat_linkit, plat_pi, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-GSR_Sensor/master/img/GSR.jpg)

GSR stands for galvanic skin response, is a method of measuring the electrical conductance of the skin. Strong emotion can cause stimulus to your sympathetic nervous system, resulting more sweat being secreted by the sweat glands. Grove - GSR allows you to spot such strong emotions by simple attaching two electrodes to two fingers on one hand. It is an interesting to create emotion related projects like sleep quality monitor.

!!!Warning
    Grove-GSR Sensor measures the resistance of the people, NOT Conductivity!

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)

## Version

| Product Version                  |  Changes | Released Date                                |
|------------------------|----------------|--------------------------------------------|
| Grove - GSR_Sensor V1.0      | Initial     |  June 19, 2013     |
| Grove - GSR_Sensor V1.2  |Add C3 100nf between M324PW-TSSOP14 and GND  | July 31, 2014 |

## Specification

| Parameter               | Value/Range                    |
|-------------------------|--------------------------------|
| Operating voltage       | 3.3V/5V                        |
| Sensitivity             | Adjustable via a potentiometer |
| Input Signal            | Resistance, NOT Conductivity   |
| Output Signal           | Voltage, analog reading        |
| Finger contact material | Nickel                         |



!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started
### Play With Arduino
#### Hardware

- Step 1. We need to prepare the below stuffs:

| Seeeduino V4.2 | Base Shield |  Grove - GSR|
|--------------|----------------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/img/Grove-GSR_s.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- Step 2. Connect the Grove-GSR to **A0** on Base Shield.
- Step 3. Plug the base Shield into Seeeduino-V4.2.
- Step 4. Connect Seeeduino-V4.2 to PC by using a USB cable.

![](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/img/Hardware_connection.jpg)

!!!Note
    If we don't have a Base Shield, don't worry, the sensor can be connected to your Arduino directly. Please follow below tables to connect with Arduino.

| Seeeduino |Grove-GSR Sensor |
|------------------|---------|
| GND              | Black  |
| 5V               |  Red   |
| NC               | White  |
| A0               | Yellow |

#### Software

- Step 1. Copy the code into Arduino IDE and upload.

```
const int GSR=A0;
int sensorValue=0;
int gsr_average=0;

void setup(){
  Serial.begin(9600);
}

void loop(){
  long sum=0;
  for(int i=0;i<10;i++)           //Average the 10 measurements to remove the glitch
      {
      sensorValue=analogRead(GSR);
      sum += sensorValue;
      delay(5);
      }
   gsr_average = sum/10;
   Serial.println(gsr_average);
}

```

- Step 2. Do not Wear the GSR sensor.
- Step 3. Click the Tools-> Serial Plotter from Arduino IDE
- Step 4. Use the screw driver to adjust resistor until the serial output as 512.
- Step 5. Wear the GSR sensor.
- Step 6. We will see the below graph. Please deep breath and see the trends.  

![](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/img/Grove-GSR_Result.png)

**Human Resistance** = ((1024+2*Serial_Port_Reading)*100000)/(512-Serial_Port_Reading), unit is ohm, Serial_Port_Reading is the value display on Serial Port(between 0~1023)




### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - GSR Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/img/Grove-GSR_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry Pi.
- **Step 3**. Connect the Grove - GSR Sensor to to the A0 port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.

![](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/img/With_Hat.jpg)

!!! Note
    For step 3 you are able to connect the Grove - GSR sensor to **any Analog Port** but make sure you change the command with the corresponding port number.


#### Software

- **Step 1**. Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
nano grove_gsr_sensor.py

```
Then you should copy following code in this file and hit ++ctrl+x++ to quit and save.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveGSRSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def GSR(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGSRSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGSRSensor(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('GSR value: {0}'.format(sensor.GSR))
        time.sleep(.3)

if __name__ == '__main__':
    main()


```

- **Step 4**. Excute below command to run the code 

```

python grove_gsr_sensor.py 0

```

```


!!!success
    If everything goes well, you will be able to see the following result
    

```python

pi@raspberrypi:~/grove.py/grove $ python grove_gsr_sensor.py 0
Detecting...
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 383
GSR value: 256
GSR value: 314
GSR value: 348
GSR value: 361
GSR value: 368
GSR value: 371
^CTraceback (most recent call last):
  File "grove_gsr_sensor.py", line 69, in <module>
    main()
  File "grove_gsr_sensor.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt


```


You can quit this program by simply press ++ctrl+c++.

!!!Notice
        You may have noticed that for the analog port, the silkscreen pin number is something like **A1, A0**, however in the command we use parameter **0** and **1**, just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.





## FAQ

### Q1: What is the unit of output?

A1:  We measure the signal by voltage and print to COM port as (0~1023). 


### Q2: About the formula of **Human Resistance**.

A2:

Let's look at the schematic file.

![](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/img/11.jpg)


We can divide this schematic into two parts, there are two [Voltage Follower](https://www.electrical4u.com/voltage-follower/) on the left and an [Op Amp Subtractor](https://www.electrical4u.com/difference-amplifier/) on the right.

Let's check the left side at first.

![](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/img/2.jpg)


For the point between `R2` and `R7`, the voltage is

 
$$
V_{R27}= VCC*\frac{R_2}{R_2+R_7}
$$


Since both `R2` and `R7` are 4.7KΩ


$$
V_{R27}= \frac{VCC}{2}
$$


According to the characteristics of [Voltage Follower](https://www.electrical4u.com/voltage-follower/), `U2=U3`, `U5=U6`. Let's check `U3` and `U5`

$$
U_3= \frac{VCC}{2}*\frac{R_1}{R_1+R_5}
$$





`R1` is a rheostat, we set it to 200k ohms by default, if you don't know whether it is 200KΩ, you can leave the GSR sensor empty and rotate the rheostat until the value of the serial output becomes **512**.

>Why 512? For the 10-bit ADC, the output full range is 1024, 512 is the half value. Adjusting to 512 will make subsequent calculations easy. The derivation of this formula is also based on R1 equal to 200K ohms.

OK, now R1=R5=200kΩ


$$
U_3= \frac{VCC}{2}*\frac{R_1}{R_1+R_5}=\frac{VCC}{4}=U_2
$$

How about `U5`


$$
U_5= \frac{VCC}{2}*\frac{R_{GSR}}{R_6+R_{GSR}}=U_6
$$

R<sub>GSR</sub> is the human skin resistance.


Now let's check about the right side.


![](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/img/3.jpg)


You can consider the right part as an **Op Amp Subtractor**, we won't talk much about what is an [Op Amp Subtractor](https://www.electrical4u.com/difference-amplifier/)(click to check), all you need to know is that:

When $\frac{R_4}{R_8}=\frac{R_{11}}{R_{10}}$

$$
U_{SIG}=\frac{R_4}{R_8}*(U_6-U_2)=2*(U_6-U_2)
$$


That is to say:


$$
U_{SIG}=2*(U_5-U_3)=2*(\frac{VCC}{2}*\frac{R_{GSR}}{R_6+R_{GSR}}-\frac{VCC}{4})
$$


Which is


$$
U_{SIG}=VCC*(\frac{R_{GSR}}{R_6+R_{GSR}}-\frac{1}{2})
$$

Now let's check the serial output. For the 10-bit ADC, the output full range is 1024 corresponding VCC.



$$
\frac{U_{SIG}}{VCC}=\frac{Serial-Port-Reading}{1024}
$$

$\downarrow$ $\downarrow$

$$
U_{SIG}=VCC*\frac{Serial-Port-Reading}{1024}
$$


Therefor,

$$
\frac{Serial-Port-Reading}{1024}=(\frac{R_{GSR}}{R_6+R_{GSR}}-\frac{1}{2})
$$


Let's sort it out, and the final result is as follows:


$$
R_{GSR}=R_6*\frac{2*Serial-Port-Reading+1024}{1024-2*Serial-Port-Reading}
$$


R6=200KΩ=200000Ω

$$
R_{GSR}=100000*\frac{2*Serial-Port-Reading+1024}{512-Serial-Port-Reading}
$$



## Resources


- **[PDF]** [Download Wiki PDF](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/res/Grove-GSR_Sensor_WiKi.pdf)
- **[PDF]** [Grove-GSR v1.0 Sch](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/res/Grove%20-%20GSR%20v1.0%20SCH.pdf)
- **[PDF]** [Grove-GSR v1.0 PCB](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/res/Grove%20-%20GSR%20v1.0%20PCB.pdf)
- **[PDF]** [Grove-GSR v1.2 Sch](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/res/Grove%20-%20GSR_v1.2_SCH.pdf)
- **[PDF]** [Grove-GSR v1.2 PCB](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/res/Grove%20-%20GSR_v1.2_PCB.pdf)
- **[Eagle]** [Grove - GSR v1.0 Eagle File](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/res/Grove-GSR_Eagle_File_V1.0.zip)
- **[Eagle]** [Grove - GSR v1.2 Eagle File](https://github.com/SeeedDocument/Grove-GSR_Sensor/raw/master/res/Grove-GSR_Eagle_File_V1.2.zip)
- **[Datasheet]** [LM324 datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-GSR_Sensor/master/res/Lm324.pdf)


## Projects

**eMotion - Towards a Better Future**: We believe we can use biometric sensors, the security of the Helium platform and strength of Google Cloud to surface possible anxiety states.


<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/factoryeight/emotion-towards-a-better-future-a01489/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>