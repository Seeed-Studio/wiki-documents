---
name: Grove - Heelight Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html
prodimagename: 350px-Ultrasonic_Ranger.jpg
surveyurl: https://www.research.net/r/Grove-Heelight-Sensor
sku: 101020312
---
![](https://github.com/SeeedDocument/Grove_Heelight_Sensor/raw/master/img/Heelight%20Sensor%20plus%20coin.jpg)

Grove – Heelight Sensor is a smart voice sensor that can recognize up tp 500 digital voice commands. It was originally used on the Heelight – a smart colorful bulb that can be controlled by digital sound waves. Now we introduce this sensor into the small and neat Grove modules, allow you to realize smart control in your Arduino – based projects.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html)

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
|Name	|Function|	Qty	|Link|
|---|---|---|---|
|Base Shield V2|	Provide Grove connectors	|1	|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|
|Seeeduino V4.2|	Controller	|1	|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|
|Grove - Heelight Sensor	|Sensor|	1|	[Get One Now](https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html)|

### Hardware Connection
- Plug the Base Shield V2 on the Seeeduino V4.2
- Connect the Grove - Heelight Sensor to D6 port of Base Shield V2.
![](https://github.com/SeeedDocument/Grove_Heelight_Sensor/raw/master/img/hardware%20connection.JPG)

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
Open the serial monitor, set baud rate to be 57600, then play the sound. We have prepared 511 different [digital sounds](https://github.com/SeeedDocument/Grove_Heelight_Sensor/raw/master/res/audio.zip) for you. Every time one sound is played, the heelight sensor will output a hex value correspond to the sound, and the last 2 characters of the hex value is the same as the sounds value.
![](https://github.com/SeeedDocument/Grove_Heelight_Sensor/raw/master/img/heelight%20sensor%20output.png)

!!!Note
    If this sensor doesn't work well when you play the specific sounds we provided via PC or other speakers, please set the volume in a low level. We recommend 10/100 in windows PC.


## Resources
- [Website of Heelight](http://www.heelight.com/)
- [500+ digital voice audio](https://github.com/SeeedDocument/Grove_Heelight_Sensor/raw/master/res/audio.zip)
- [Example Code](https://github.com/SeeedDocument/Grove_Heelight_Sensor/tree/master/res/Grove_-_Heelight_Sensor_example)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>