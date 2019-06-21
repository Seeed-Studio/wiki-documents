---
name: Bees Shield
category: Discontinued
bzurl: https://www.seeedstudio.com/Bees-Shield-p-672.html
oldwikiname: Bees Shield
prodimagename: bees shield.jpg
surveyurl: https://www.research.net/r/Bees_Sheild
sku: 103030001
tags: plat_duino
---

![enter image description here](https://github.com/SeeedDocument/Bees_Shield/raw/master/img/bees%20shield.jpg)

Bees_Shield will make interfacing multiple Bee-style (XBee, GPRS Bee, Bluetooth Bee and etc) easier than ever before. Aside from two Bee-style 20p 2.0 pitch sockets, it also has a large prototyping area, and a customizable software serial port for easier prototyping.

[![Get one now](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/Bees-Shield-p-672.html)

## Versions
---------------

| Revision | Descriptions  | Release        |
|----------|--------------|----------------|
| v2.12| Initial public release| June 08, 2010  |


## Features
-------------------
- Dual Bee type socket
- 3 indicator LED(ON/Sleep, RSSI, ASSOC) for each Xbee
- Full size with free drills
- Reset button for each Xbee
- Reset button for base board
- Provide maximal 500mA under 3.3V
- Full break out for each Bee
- Switchable of communication with FTDI-USB /Base board

## Hardware Overview

![](https://github.com/SeeedDocument/Bees_Shield/raw/master/img/Bees%20Shield%20Hardware.jpg)

## Platforms Supported
-------------------

## Getting Started
-------------------
### Work with Bee1

#### Connection
- Plug the Xbee module into the Bee 1 socket, setting the jumpers as below. We use Bee1 SoftwareSerial for communication.

| Arduino Pins   | Bee1 Pins     |
| :------------- | :-------------|
| Digital Pin7   | Bee1_TX       |
| Digital Pin8   | Bee1_RX       |

- Plug Bees Shield into Arduino.
- Connect Arduino to PC via a USB cable.

#### Software
- Copy and Upload the code to Ardunio.

```
#include <SoftwareSerial.h>
SoftwareSerial mySerial(7, 8);

void setup() {
  Serial.begin(9600);
  Serial.println("Goodnight moon!");

  // set the data rate for the SoftwareSerial port
  mySerial.begin(9600);
  mySerial.println("Hello, world?");
}

void loop() {
  // run over and over
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}

```
- When it's uploaded, open the serial to monitor.

### Work with Bee2

#### Connection
- Plug the RFbee module into the Bee 2 socket, toggle switch to USB side.

!!!Note
    Toggle switch to the Atmega's side if you are not uploading a sketch to the Bee2. It does NOT work if the arduino is using ATmega168 – we need at least ATmega328 to pass serial communication through.
- Plug Bees Shield into Arduino.
- Connect Arduino to PC via a USB cable.

#### Software
- Please Copy and Upload the code to Ardunio to disable Uart0 port of Atmega IC first.

```
void setup() {
   DDRD=0x00;
}

void loop() {}

```

### Wireless Arduino programming with Bee2

#### Connection
- Solder the JP1 block on the board for wireless programming.
- Plug Bees Shield into Arduino.

#### Software
- Download [Xbee setting profile](https://github.com/SeeedDocument/Bees_Shield/raw/master/res/Xbee%20setting%20profiles.zip) to transmitter Xbee by using X-CTU.
- Let's use the wireless programming.

#### Expansion function

- First we have to solder two 8-pin female headers and two 6-pin female headers on the Bees shield.
- After the expansion we can insert small shield like music shield on the Bees shield and we can control it wirelessly.

![](https://github.com/SeeedDocument/Bees_Shield/raw/master/img/Bees-Shield-expan2.jpg)


## Resources
-------------------
- **[Eagle]** [Bees_Shield Eagle File ](https://github.com/SeeedDocument/Bees_Shield/raw/master/res/Bees_Shield_V2.12_Eagle_files.zip)
- **[PDF]** [Bees_Shield schematics](https://github.com/SeeedDocument/Bees_Shield/raw/master/res/Bees_Shield%20Sch.pdf)
- **[PDF]** [Bees_Shield PCB](https://github.com/SeeedDocument/Bees_Shield/raw/master/res/Bees_Shield%20PCB.pdf)
- **[Tools]** [Xbee setting profiles](https://github.com/SeeedDocument/Bees_Shield/raw/master/res/Xbee%20setting%20profiles.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>