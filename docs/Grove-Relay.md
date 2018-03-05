---
title: Grove - Relay
category: Actuator
bzurl: https://www.seeedstudio.com/Grove-Relay-p-769.html
oldwikiname:
prodimagename: Twig-Relay.jpg
surveyurl: https://www.surveymonkey.com/r/Grove_Relay
sku: 103020005
tags: io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg, plat_pi,plat_wio
---

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/img/Twig-Relay.jpg)

The Grove-Relay module is a digital normally-open switch. Through it, you can control circuit of high voltage with low voltage, say 5V on the controller. There is an indicator LED on the board, which will light up when the controlled terminals get closed.

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/Grove-Relay-p-769.html)  


## Specifications
-------

| Parameter     | V1.1     |V1.2     |
| :------------- | :------------- |:------------- |
| Product Release Date       | 27th Jan 2013       |9th June 2014|
|Operating Voltage|5V|3.3V~5V|
|Operating Current|60mA|100mA|
|Relay Life|100,000 Cycle|100,000 Cycle|
|Max Switching Voltage|250VAC/30VDC|250VAC/30VDC|
|Max Switching Current|5A|5A|

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

## Platforms Supported
--------



## Getting Started
------
### With Arduino

#### Connection
Here we will show you how this Grove - Relay works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - RTC | Grove - RTC |Base Shield |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/Grove_Relay_s.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/button_s.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Relay-p-769.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

-   Connect Grove-Relay module to the **Digital 4 port** of Grove- Base Shield.
-   Connect Grove-Button module to the **Digital 2 & 3 ports** of Grove- Base Shield.
-   Plug Grove- Base Shield into Arduino.
-   Connect Arduino to PC via a USB cable.
![enter image description here](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/button-relay.jpg)

!!!Note
    If we don't have the base shield, we also can directly connect the Grove-Relay and Grove-Button to Arduino board. Please follow below connection.

| Grove-Relay | Arduino |
|-------------|---------|
| GND         | GND     |
| VCC         | 5V      |
| SIG         | D4      |

| Grove-Button#1 | Arduino |
|----------------|---------|
| GND            | GND     |
| VCC            | 5V      |
| SIG            | D2      |

| Grove-Button#2 | Arduino |
|----------------|---------|
| GND            | GND     |
| VCC            | 5V      |
| SIG            | D3      |

#### Software


Below is a demo that shows you how to control a Grove - Relay with a Grove - Button. When one button gets pressed, the relay will close. When the other button gets pressed, the relay will open.

```
// Relay Control

void setup()
{
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, OUTPUT);
}

void loop()
{
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(4, HIGH);
    delay(100);
  }
  if (digitalRead(3)==HIGH)
  {
    digitalWrite(4, LOW);
  }
}

```

### With TI LaunchPad

Controlling other electronics (Relay)

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/img/Relay.jpg)

This example shows how to use the Grove-relay module to control larger load, i.e. a desk lamp light. A 3V voltage signal can cause the relay to switch on, allowing current to flow through the connected appliance.

```
/*
Relay
The basic Energia example.
This example code is in the public domain.
*/

#define RELAY_PIN 39

// the setup routine runs once when you press reset:
void setup() {
         pinMode(RELAY_PIN, OUTPUT); // initialize the digital pin as an output.
}

// the loop routine runs over and over again forever:
void loop() {
         digitalWrite(RELAY_PIN, HIGH); // turn the relay on (HIGH is the voltage level)
         delay(1000);   // wait for a second
         digitalWrite(RELAY_PIN, LOW);   // turn the relay o by making the voltage LOW
         delay(1000);   // wait for a second
}
```
### With Raspberry Pi

#### Connection


- First, We need to prepare the below stuffs:

|  Raspberry pi | Grove - Relay | Grove - Button | Grovepi+ |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/pi.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/Grove_Relay_s.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/button_s.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/grovepi%2B.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Relay-p-769.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|


- Follow [instruction](http://wiki.seeed.cc/GrovePi_Plus/) to configure the development environment.
- Plug Grove-Button to **D3 port** of Grovepi+.
- Plug Grove-Relay to **D4 port** of Grovepi+.
![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/img/GrovePiPlus_Grove_relay.jpeg)

#### Software

This demo shows you how to use Grove - Relay by Raspberry Pi .
```
# Raspberry Pi + Grove Switch + Grove Relay

import time
import grovepi
# Connect the Grove Switch to digital port D3
# SIG,NC,VCC,GND

switch = 3
# Connect the Grove Relay to digital port D4
# SIG,NC,VCC,GND

relay = 4
grovepi.pinMode(switch,"INPUT")
grovepi.pinMode(relay,"OUTPUT")
while True:
    try:
        if grovepi.digitalRead(switch):
            grovepi.digitalWrite(relay,1)
        else:
            grovepi.digitalWrite(relay,0)
            time.sleep(.05)
    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```


- Find the path to the file(According to your own path)
```
cd GrovePi/Software/Python/
```
- Run the Program
```
sudo python grove_switch_relay.py
```

## Resources
----
* **[Eagle]** [Grove - Relay Schematic and PCB in Eagle format](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/res/Grove-Relay_Eagle_Files.zip)
* **[PDF]** [Grove - Relay PCB in PDF format](https://github.com/SeeedDocument/Grove-Relay/raw/master/res/Grove%20-%20Relay%20PCB.pdf)
* **[PDF]** [Grove - Relay Schematic in PDF format](https://github.com/SeeedDocument/Grove-Relay/raw/master/res/Grove%20-%20Relay%20Schematic.pdf)
* **[Datasheet]** [HLS8-T73 Series Relay Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/res/Relay_Datasheet.pdf)
