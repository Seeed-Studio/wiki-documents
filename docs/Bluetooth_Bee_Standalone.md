---
name: Bluetooth Bee-Standalone
category: Wireless
bzurl: https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html
oldwikiname:  Bluetooth Bee-Standalone
prodimagename: P3302883_02.jpg
surveyurl: https://www.research.net/r/Bluetooth_Bee-Standalone
sku:  113050004
---

![](https://github.com/SeeedDocument/Bluetooth_Bee_Standalone/raw/master/https://github.com/SeeedDocument/Bluetooth_Bee_Standalone/raw/master/img/P3302883_02.jpg)

Save that extra Arduino you have lying around for another project, this two-for-one device has the Arduino built-in. Bluetooth Bee with Arduino is an enhanced version of the Bluetooth Bee. We added an onboard ATMEGA168 to it to make it a full-featured Arduino while maintaining the same footprint and instruction set as the Bluetooth Bee. Plus, it still allows you to stack it on XBee Carrier, XBee® Shield, and UartSBee for expansion or reprogramming.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html)

##   Features
---
*   Small footprint
*   Identical settings and pairing methods as the Bluetooth Bee
*   Software serial port adopted between the Bluetooth module and ATMEGA168
*   Remains compatibile with XBee Carrier, XBee® Shield, and UartsBee for expansion

###   Hardware Features

*   Typical -80dBm sensitivity.
*   Up to +4dBm RF transmit power.
*   Fully Qualified Bluetooth V2.0+EDR 3Mbps Modulation.
*   3.3v Power
*   Integrated PCB antenna.
*   Disconnect and monitor the Bluetooth via Software.
*   xBee compatible headers.

###   Software Features

*   Use the SoftSerial program to communication.
*   Default Baud rate: **38400**, Data bits:8, Stop bit:1,Parity:No parity, Data control: has.
*   Supported baud rate: 9600,19200,38400,57600,115200,230400,460800.
*   Use CTS and RTS to control the data stream.
*   Disconnecte the Bluetooth via a rising edge on PC2
*   Status instruction port PB2: low-disconnected, high-connected;
*   PIO10 is connected to <span style="color:red">red</span> led, PIO11 is connected to <span style="color:blue">blue</span> led. When master and slave are paired, <span style="color:red">red</span> and <span style="color:blue">blue</span> led blinks 1time / 2s in interval, while disconnected only <span style="color:blue">blue</span> led blinks 2 times/ s.
*   Auto-connect the last device on power as default.
*   Permit matched device connect by default.
*   Default PINCODE:”0000”.
*   Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection.

##   Application Ideas
---
*   Arduino compatilbe module with Bluetooth communication.
*   Bluetooth Serial Port for PC when connected with [UartSBee](/UartSBee_V4) and uploading SoftSerial program to **ATMEGA168**.

!!!Cautions
    *   3.3 V power needed.
    *   While using with UartSBee, set the operation voltage to 3.3V
    *   Command to change baud rate is persistent even after reset. Hence remember the baud rate for next use.


##   Pin definition and Rating
---
Bottom-view:
 ![](https://github.com/SeeedDocument/Bluetooth_Bee_Standalone/raw/master/img/Bluetooth-standalone_pin.jpg)

- PD4 - PD7 = Arduino IDE digital pins 4 - 7  (5,6 PWM)

- PB0 , PB1 = Arduino IDE digital pins 8 , 9  (9   PWM)

- PC0 - PC3 = Arduino IDE analog  pins 0 - 3  (Note PC2 Disconnects the Bluetooth via a rising edge)


##   Usage
---
Example : Use Bluetooth Bee-Standalone to control a [Grove-Red_LED](/Grove-Red_LED) with XBee carrier.

- Step 1

Connect Grove-Red_LED and Bluetooth Bee-Standalone module to XBee carrier like this.

![](https://github.com/SeeedDocument/Bluetooth_Bee_Standalone/raw/master/img/Bluetooth_Bee-Standalone3.jpg)

- Step 2

Write a program by Arduino-IDE to read informations from the Bluetooth Softserial port and identify to shut or turn on the LED.

```
/*
BluetoothBee Demo Code - Flowcontrol Based Implementation
2010,2011 Copyright (c) Seeed Technology Inc.  All right reserved.

Author: Visweswara R      Modify:Joinj

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

*/


/* Upload this sketch to Seeeduino and press reset*/

#include <NewSoftSerial.h>   //Software Serial Port
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

NewSoftSerial blueToothSerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    pinMode(5,OUTPUT);
    setupBlueToothConnection();
}

void loop()
{
    unsigned char control;
    unsigned char temp;
    while(temp!='4')  {
        temp=blueToothSerial.read();
    }
    Serial.println("You are connected");
    blueToothSerial.print("You are connected");      //You can write you BT communication logic here
    while(1)  {
        temp=blueToothSerial.read();
        switch(temp)  {
            case 'O':{while(temp!='N')  {temp=blueToothSerial.read();}  digitalWrite(5,HIGH);break;}
            case 'S':{while(temp!='H')  {temp=blueToothSerial.read();}  digitalWrite(5,LOW);break;}
            default:break;
        }
    }
}


void setupBlueToothConnection()
{
    blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=SeeedBluetooth-st\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n +STPIN=0000\r\n");
    delay(2000); // This delay is required.
    sendBlueToothCommand("\r\n+INQ=1\r\n");
    delay(2000); // This delay is required.
}

//Checks if the response "OK" is received
void CheckOK()
{
    char a,b;
    while(1)
    {
        if(blueToothSerial.available())
        {
            a = blueToothSerial.read();

            if('O' == a)
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

    while( (a = blueToothSerial.read()) != -1)
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

- Step 3

Connect the XBee carrier to computer with USB-cable and uploading the program to **ATMEGA168** on the Bluetooth Bee-Standalone.

- Step 4

Remove the USB-cable form XBee carrier and connect the 3.7-Voltage battery to XBee carrier like this.

![](https://github.com/SeeedDocument/Bluetooth_Bee_Standalone/raw/master/img/Bluetooth_Bee-Standalone2.jpg)

- Step 5

Use another Bluetooth Bee connect to the Bluetooth Bee-Standalone.How to connect? You can refer to [Bluetooth Bee](/Bluetooth_Bee).When you are connected,you can control the LED by another Bluetooth Bee.The LED will work when you send "ON" to Bluetooth Bee-Standalone and it will be off when you send "SH"(short for SHUT).

![](https://github.com/SeeedDocument/Bluetooth_Bee_Standalone/raw/master/img/Bluetooth_Bee-Standalone1.jpg)

##   Additional ideas
---
*   [How to test your Bluetooth Bee - Standalone](http://dejwoot.blogspot.hk/2012/07/howto-test-your-bluetooth-bee-standalone.html)

##   Resources
---
*   [BlueTooth bee-Standalone Eagle files](https://github.com/SeeedDocument/Bluetooth_Bee_Standalone/raw/master/res/Bluetooth_Bee-Standalone_schematic.zip).

*   [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)

*   [Information](http://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687) on how to setup connections between Bluetooth Bees is available in Seeedstudio Forum.

*   [Information](http://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637) on PC connecting Bluetooth Bee in Seeedstudio Forum

*   [File:Bluetooth Bee Standalone v1.0.pdf](https://github.com/SeeedDocument/Bluetooth_Bee_Standalone/raw/master/res/Bluetooth_Bee_Standalone_v1.0.pdf "File:Bluetooth Bee Standalone v1.0.pdf")

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>