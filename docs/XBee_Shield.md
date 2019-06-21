---
name: XBee Shield
category: Discontinued
bzurl:
oldwikiname: XBee-Shield
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/XBee-Shield
sku:
tags:

---
 ![](https://github.com/SeeedDocument/XBee-Shield/raw/master/img/Xbshieldn2.jpg) ![](https://github.com/SeeedDocument/XBee-Shield/raw/master/img/Xbshield_bottom.jpg)

A **Xbee shield** allows an **Arduino** or [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) board to communicate wirelessly using **Bee compatible modules** (like Zigbee or BlueTooth Bee). It is designed to be used with **Xbee module from MaxStream**. It can be used as a **Serial Port** / **USB replacement. ** It is used to connect two **Seeeduinos** using **Zigbee** / **Bluetooth Bee** or connect a **Seeeduino** with PC Wirelessly. Two toggle switches decides how **Rxd** and **Txd** pins of Bee modules be connected to **Seeeduino** pins. These two switches provides options to connect **RxD** and **TxD** lines of Bee Modules to **Seeduino Hardware Serial Port** or **Digital pins** **11** and **12** or **FTDI** **RxD** and **Txd** Pins.

 **Model:[WLS114A0P](http://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109)**


Seeed Studio's **XBee®_Shield** is derived from [Arduino Xbee shield](http://www.arduino.cc/en/Main/ArduinoXbeeShield), with following features:

*   Smaller form
*   SMT package for most of the components
*   Low cost

To use X-CTU with [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/), please upload following sketch

<pre>void setup()
{
  DDRB=0;
  DDRC=0;
  DDRD=0;
}

void loop()
{

}  
</pre>

##   Features  

1.  31mm X 41mm board.
2.  Communicate with Arduino/Seeeduino
    *   Via pin 11, 12 Software Serial Port or
    *   Via hardware Serial Port

3.  Xbee modules can be configured by X-CTU via USB
4.  Breakout of all pins

##   Application Ideas  

*   Communicate two Seeeduinos / Arduinos Wirelessly using Bee Modules (**Xbee**,[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/),[RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/))
*   Communicate Seeeduino / Arduino to PC Wirelessly using Bee Modules.
*   Connecting **GPS Bee** to Arduino / Seeeduino

##   Cautions  

<font color="red">
</font>

*   Set the toggle switches to correct position before connecting to Bee Modules or Arduinos.

##   Schematic  

![](https://github.com/SeeedDocument/XBee-Shield/raw/master/img/Xbee_Shield_Schematic.jpg)

##   Specification  

See [features](http://wiki.seeedstudio.com/XBee_Shield/#features "XBee_Shield#Features") above.

##   Mechanic Dimensions  

XBee® Shield is of 3.1cm X 4.1cm size.

##   Usage  

A **Bee module** is connected to Arduino / Seeeduino via the XBee Shield. In case of a Seeeduino, set the operating voltage switch to 3.3V position. Normally the Bee modules are connected via Software Serial Port by setting the toggle switches (**TOG_1** and **TOG_2**)positions to **left-side**. Please refer the below tables for different configuration.

###   Hardware Installation  

![](https://github.com/SeeedDocument/XBee-Shield/raw/master/img/Seeeduino_XBeeShield_XBeePro.jpg) ![](https://github.com/SeeedDocument/XBee-Shield/raw/master/img/Seeeduino_BluetoothBee_Xbee_Shield.JPG)

####   Xbee Shield Outline and Toggle Switch Position  

![](https://github.com/SeeedDocument/XBee-Shield/raw/master/img/XBee_Shield_Outline.jpg)

<table>
<caption> Arduino
</caption>
<tr>
<th> TOG_1
</th>
<th> TOG_2
</th>
<th> Xbee Tx Connected to
</th>
<th> Xbee Rx Connected to
</th></tr>
<tr>
<td width="200"> Left
</td>
<td width="200"> Left
</td>
<td width="300"> Digital pin 11
</td>
<td width="300"> Digital pin 12
</td></tr>
<tr>
<td> Left
</td>
<td> Right
</td>
<td> FT232 RxD
</td>
<td> FT232 TxD
</td></tr>
<tr>
<td> Right
</td>
<td> Left
</td>
<td> Digital pin 11
</td>
<td> Digital pin 12
</td></tr>
<tr>
<td> Right
</td>
<td> Right
</td>
<td> Atmege RxD
</td>
<td> Atmege TxD
</td></tr></table>
<table>
<caption> Arduino Mega
</caption>
<tr>
<th> TOG_1
</th>
<th> TOG_2
</th>
<th> Xbee Tx Connected to
</th>
<th> Xbee Rx Connected to
</th></tr>
<tr>
<td width="200"> Left
</td>
<td width="200"> Left
</td>
<td width="300"> Digital pin 51
</td>
<td width="300"> Digital pin 50
</td></tr>
<tr>
<td> Left
</td>
<td> Right
</td>
<td> FT232 RxD
</td>
<td> FT232 TxD
</td></tr>
<tr>
<td> Right
</td>
<td> Left
</td>
<td> Digital pin 51
</td>
<td> Digital pin 50
</td></tr>
<tr>
<td> Right
</td>
<td> Right
</td>
<td> Atmege RxD0
</td>
<td> Atmege TxD0
</td></tr></table>

###   Testing AT commands on Bees  

Create a new sketch with the following code and download it into your Arduino board.  

<pre>//Serial Relay - Arduino will patch a
//serial link between the computer and the Bee Shield
//at 9600 bps 8-N-1
//Computer is connected to Hardware UART
//Bee Shield is connected to the Software UART

#include &lt;NewSoftSerial.h&gt;
#define RxD 11
#define TxD 12

NewSoftSerial mySerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    mySerial.begin(9600);               // the Bee baud rate  
    Serial.begin(9600);                 // the terminal baud rate  
}

void loop()
{
    if(Serial.available())
    {
       mySerial.print((unsigned char)Serial.read());
     }
    else  if(mySerial.available())
    {
       Serial.print((unsigned char)mySerial.read());
     }  

}</pre>

 After this fire up your favorite serial terminal software, choose the COM port for Arduino, set it to operate at default baud rate of your Bee (XBee default is 9600 8-N-1), connect and send the commands. Try sending "+++" (without the quotes) for XBee module, to the Arduino board. The XBee should respond by sending back an "OK".

###   Send AT Updated Version for V 1.0  

The code above may have worked on earlier versions but the SoftwareSerial library is now part of the core.  The following code is taken almost directly from the [Aruino SoftwareSerial manual.](http://arduino.cc/en/Reference/SoftwareSerial)

<pre>
/*
Example from Arduino SoftwareSerial tutorial
 */
#include &lt;SoftwareSerial.h&gt;

SoftwareSerial mySerial(11, 12); // RX, TX

void setup()  
{
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() // run over and over
{
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
</pre>

Upload this code to the Arudino hosting the Xbee Shield, startup the Serial Monitor and at that point the Arduino serial port will be connected via radio to any other xbee radios currently operating--anything you type in the serial monitor will be sent to the other radios and vise versa.

###   Programming  

The following sketch configures [Bluetooth Bee](https://seeeddoc.github.io/Bluetooth_Bee/) as **Slave Device** and waits for connection request from PC or other master device. Bluetooth Bee is connected to Seeeduino via **XBee®_Shield** as shown above.

```
/*
BluetoothBee Demo Code - Flowcontrol Based Implementation
2010,2011 Copyright (c) Seeed Technology Inc.  All right reserved.

Author: Visweswara R

This demo code is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

For more details about the product please check http://www.seeedstudio.com/depot/

Upload this sketch to Seeeduino and press reset*/

#include <NewSoftSerial.h>   //Software Serial Port
#define RxD 11
#define TxD 12
#define DEBUG_ENABLED  1

NewSoftSerial blueToothSerial(RxD,TxD);

void setup()
{
pinMode(RxD, INPUT);
pinMode(TxD, OUTPUT);
setupBlueToothConnection();  
}

void loop()
{
//Typical Bluetoth command - response simulation:  
//Type 'a' from PC Bluetooth Serial Terminal
//See Wiki for instructions  

  if(blueToothSerial.read() == st0">'a')
  {
    blueToothSerial.println(st0">"You are connected"); //You can     write you BT communication logic here
  }  
}

void setupBlueToothConnection()
{
  blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400
  delay(1000);
  sendBlueToothCommand(\r\n+STWMOD=0\r\n");
  sendBlueToothCommand(\r\n+STNA=SeeeduinoBluetooth\r\n");
  sendBlueToothCommand(\r\n+STAUTO=0\r\n");
  sendBlueToothCommand(\r\n+STOAUT=1\r\n");
  sendBlueToothCommand(\r\n +STPIN=0000\r\n");
  delay(2000); // This delay is required.
  sendBlueToothCommand(\r\n+INQ=1\r\n");
  delay(2000); // This delay is required.
}  


//Checks if the response "OK" is received
void CheckOK()
{
  char a,b;

  while(1)
  {
    if(blueToothSerial.available()) { a = blueToothSerial.read();   if(st0">'O' == a)
    {

      // Wait for next character K. available() is required in some cases, as K is not immediately available.
      while(blueToothSerial.available())
      {
         b = blueToothSerial.read();
         break;
      }

      if('K' == b)
      {
        break;
      }
    }
  }
}  

  while( (a = blueToothSerial.read()) sy3">!= sy2">-1)
  {
     //Wait until all other response chars are received
  }
}


void sendBlueToothCommand(char command[])
{
   blueToothSerial.print(command);
   CheckOK();
}
```

See **Bluetooth Bee Programming**for further information.

##   FAQ  

Please list your question here(if any).

##   Support  

If you have questions or other better design ideas, you can go to our [forum](http://www.seeedstudio.com/forum) or **wish** to discuss.

##   Version Tracker  

<table >
<tr>
<th> Revision
</th>
<th> Descriptions
</th>
<th> Release Date
</th></tr>
<tr style="font-size: 90%;">
<td width="300"> XBee® Shield V1.1
</td>
<td width="500"> new version by Seeedstudio
</td>
<td width="200"> Jul 06, 2009
</td></tr></table>

##   Bug Tracker  

Bug Tracker is the place where you can sumbit any bugs you think you might have found during use. Please write down what you want to say, your answers will help us improve our products.

##   Additional Idea  

The Additional Idea is the place to write your project ideas about this product, or other usages you've found. Or you can write them on Projects page.

##   How to buy  

Click here to buy : [http://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109](http://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109)

##   Licensing  

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.

##   See also  

[Bluetooth Bee documentation](/Bluetooth_Bee "Bluetooth_Bee") demostrating use of **XBee®_Shield**


##   External Links  

Links to external webpages which provide more application ideas, documents/datasheet or software libraries.

##   Resources  

- **[Arduino]**    [Arduino Xbee Shield Page](http://www.arduino.cc/en/Main/ArduinoXbeeShield)

- **[Eagle]**    [eagle for Xbee_Shield_v1.0](https://github.com/SeeedDocument/XBee-Shield/raw/master/res/Eagle_XBee_Shield_v1.0.zip)

- **[PDF]**[XBee_Shield pdf](https://github.com/SeeedDocument/XBee-Shield/raw/master/res/XBee_Shield.pdf)

- **[Eagle]**[XBee_Shield sch](https://github.com/SeeedDocument/XBee-Shield/raw/master/res/XBee_Shield.sch)

- **[Eagle]**    [eagle for Xbee_Shield_v1.1](https://github.com/SeeedDocument/XBee-Shield/raw/master/res/Elage_xbee_shield_v1.1.zip)
- **[PDF]**[Xbee_shield_v1.1 pdf](https://github.com/SeeedDocument/XBee-Shield/raw/master/res/Xbee_shield_v1.11.pdf)

- **[EAGLE]**[Xbee_shield_v1.1 sch](https://github.com/SeeedDocument/XBee-Shield/raw/master/res/Xbee_shield_v1.11.sch)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>