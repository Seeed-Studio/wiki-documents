---
description: Grove - Heelight Sensor
title: Grove - Heelight Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Heelight_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/Heelight%20Sensor%20plus%20coin.jpg" /></div>

Grove – Heelight Sensor is a smart voice sensor that can recognize up tp 500 digital voice commands. It was originally used on the Heelight – a smart colorful bulb that can be controlled by digital sound waves. Now we introduce this sensor into the small and neat Grove modules, allow you to realize smart control in your Arduino – based projects.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- Digital Voice Recognition

- Support over 500 digital voice commands

- Compatible with the Grove system

## Specification

| Product Name         | Grove-Heelight Sensor |
|----------------------|-----------------------|
| Operating Voltage    | DC 3.3V~5V            |
| Operating Current    | 15mA                  |
| Identification Range | 0.1~10m               |
| Angle Range          | 360°                  |
| Size                 | 20*20mm               |
| Baud Rate            | 115200                |
| Serial Port Output   | TTL logic level       |

## Getting Started

### What do we need?

|Name |Function| Qty |Link|
|---|---|---|---|
|Base Shield V2| Provide Grove connectors |1 |[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|
|Seeeduino V4.2| Controller |1 |[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|
|Grove - Heelight Sensor |Sensor| 1| [Get One Now](https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html)|

### Hardware Connection

- Plug the Base Shield V2 on the Seeeduino V4.2
- Connect the Grove - Heelight Sensor to D6 port of Base Shield V2.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/hardware%20connection.JPG" /></div>

### Upload the code

Before uploading the code, please make sure you have already selected the right board and COM port. For Seeeduino V4.2, we can choose Arduino/Genuino Uno.

This is the basic example that can show the ability of the sensor, which is output different hex values in the serial monitor when it receives (or hear) different digital sounds. You can also download this example in the Resources

```
/*
  Software serial multple serial test

 Receives from the hardware serial, sends to software serial.
 Receives from software serial, sends to hardware serial.

 The circuit:
 * RX is digital pin 10 (connect to TX of other device)
 * TX is digital pin 11 (connect to RX of other device)

 Note:
 Not all pins on the Mega and Mega 2560 support change interrupts,
 so only the following can be used for RX:
 10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69

 Not all pins on the Leonardo support change interrupts,
 so only the following can be used for RX:
 8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI).

 created back in the mists of time
 modified 25 May 2012
 by Tom Igoe
 based on Mikal Hart's example

 This example code is in the public domain.
*/

#include <SoftwareSerial.h>

SoftwareSerial mySerial(6, 7); // RX, TX

void setup()
{
  // Open serial communications and wait for port to open:
  Serial.begin(57600);
   mySerial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo only
  }


  Serial.println("Goodnight moon!");

  // set the data rate for the SoftwareSerial port

  //mySerial.println("Hello, world?");
}

void loop() // run over and over
{
  if (mySerial.available())
  {
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.println();
  }
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

### Results

Open the serial monitor, set baud rate to be 57600, then play the sound. We have prepared 511 different [digital sounds](https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip) for you. Every time one sound is played, the heelight sensor will output a hex value correspond to the sound, and the last 2 characters of the hex value is the same as the sounds value.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight%20sensor%20output.png" /></div>

:::note
If this sensor doesn't work well when you play the specific sounds we provided via PC or other speakers, please set the volume in a low level. We recommend 10/100 in windows PC.
:::

## Resources

- [Website of Heelight](http://www.heelight.com/)
- [500+ digital voice audio](https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip)
- [Example Code](https://github.com/SeeedDocument/Grove_Heelight_Sensor/tree/master/res/Grove_-_Heelight_Sensor_example)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
