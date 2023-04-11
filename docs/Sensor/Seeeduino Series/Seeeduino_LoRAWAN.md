---
description: Seeeduino LoRaWAN
title: Seeeduino LoRaWAN
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_LoRAWAN
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/cover.png)

Seeeduino LoRaWAN is an Arduino development board with LoRaWan protocol embedded, through which you can get started quickly to experience LoRa's advantage in the field of IoT. Based on the communication module RHF76-052AM, Seeeduino LoRaWAN is compatible with LoRaWAN Class A/C and supports a variety of communication frequencies.

The 4 onboard standard Grove connectors allow Seeeduino LoRaWan to connect with hundreds of Grove sensors and actuators from Seeedstudio conveniently, as a result, users are able to be more focus on the application itself without worrying about the compatibility issue between different modules. In addition, the board has embedded an integrated lithium battery management chip that allows the board to be charged by USB interface. In low consumption mode, a full charged lithium battery can power the board for several months.

If you want to build an IoT application quickly, Seeeduino LoRaWAN is your best choice.

<iframe width={800} height={450} src="https://www.youtube.com/embed/4df5kaaKa6I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

|Product Version|Released Date | How to Buy|
|-------|-------------|----------|
|Seeeduino LoRaWAN |Dec 20, 2016|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)|
|Seeeduino LoRaWAN W/GPS |Dec 20, 2016|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-LoRaWAN-W%2FGPS-p-2781.html)|

## Version Change

|Item| Seeeduino LoRaWAN W/GPS | Seeeduino LoRaWAN |
|---|---|---|
|Main Chip|ATSAMD21|ATSAMD21|
|GPS communication|√|x|
|modular|RHF76-052DM|RHF76-052AM|
|modular Release Time|2018|2018|

:::note
    Please update the firmware when the first time to use it. Please always plug 3.7V Lipo battery in case USB power supply is not sufficient.
:::

:::tip
    Seeeduino LoRaWAN W/GPS is consist of GPS module.
:::

## Features

* Minimum current (3.7V lipo battery) - 2mA
* Minimum current (3.7V lipo battery & remove PWR LED) - 80 uA

**Arduino/Processor**

* ATSAMD21G18 @ 48MHz with 3.3V logic/power
* Arduino compatible (based on Arduino Zero bootloader)
* Embedded with lithium battery management chip and status indicator led
* 20 GPIOs
* 4 on-board Grove connectors
* 18 x PWM pins
* 6 x analog inputs
* 1 x analog output (A0)
* 3.3V regulator with 200mA output
* Reset button

**LoRaWAN/RHF76-052**

* 1.45uA sleep current in WOR mode (Spec of the modules, not the board)
* High link budget of 160dB. -140dBm sensitivity and 19dBm Output power.
* Dual band, 434/470MHz and 868/915MHz
  * 19dBm@434MHz/470MHz
  * 14dBm@868MHz/915MHz
* Support LoRaWAN protocol, Class A/C
* Ultra long range communication
* Ultra low power consumption
* Firmware upgrade
* Small size: 23mm X 28mm with 33 pin SMT package

:::warning
    Unlike most Arduino & Genuino boards, the Zero runs at 3.3V. The maximum voltage that the I/O pins can tolerate is 3.3V. Applying voltages higher than 3.3V to any I/O pin could damage the board.
:::

## Specification

| Item|Value|
|--------------|-------------------------------------|
|Microcontroller |ATSAMD21G18, 32-Bit ARM Cortex M0+ |
|Operating Voltage |3.3V|
|Digital I/O Pins |20|
|PWM Pins |All but pins 2 and 7|
|UART |2 (Native and Programming)|
|Analog Input Pins| 6, 12-bit ADC channels|
|Analog Output Pins |1, 10-bit DAC|
|External Interrupts |All pins except pin 4|
|DC Current per I/O Pin |7 mA|
|Flash Memory |256 KB|
|SRAM |32 KB|
|EEPROM |None|
|Clock Speed |48 MHz|
|Lenght |68 mm|
|Width |53 mm|
|Weight |19.6g(without GPS), 19.9(with GPS)|

## Application Ideas

* Internet of Things
* Smart House
* Security
* Smart Grid
* Intelligent Farm
* Intelligent Park

:::tip
    Use Grove modules to expand your application
:::
There are 4 Grove connects on board. If this is your first time to hear about Grove, please put had on [Grove System](https://wiki.seeedstudio.com/Grove_System/) for more details.
In brief, Groves is hundreds of sensor that in standard style, which is consist of sensors, actuators, displays as well as communication.

## Hardware Overview

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/hw_LoRa.png)

* **1.** Micro USB - Programming and supply power to the board
* **2.** Grove connectors
* **3.** JST2.0 Lipo battery input (3.7V) and charge status led
* **4.** DFU Button - Firmware mode button
* **5.** Reset Button
* **6.** Arduino Pinout
* **7.** ICSP pins
* **8.** Firmware mode led
* **9.** Wire antenna
* **A.** uFL antenna
* **B.** RF module - RHF76-052AM
* **C.** ARM Cortex M0 processor - ATSAMD21G18
* **D.** LEDs
  * ***RX/TX*** - blink when data on UART(from/to USB)
  * ***L*** - an led connect to D13
  * ***PWR*** - power

:::tip
    If you want to use the 4 on-board Grove connector, please use digitalWrite(38, HIGH) to open VCC. Otherwise you can't provide power to Grove modules.
:::
**Pin Map**

|Pin Name|GPIO Num|External Interrupt|PWM|Analog In|Analog Out|Function|
|--------|--------|-----------|---|---------|----------|--------|
|0       |#0      |YES        |YES|         |          | RX(Serial)|
|1       |#1      |YES        |YES|         |          | TX(Serial)|
|2       |#2      |YES        |   |         |          |        |
|3       |#3      |YES        |YES|         |          |        |
|4       |#4      |           |YES|         |          |        |
|5       |#5      |YES        |YES|         |          |        |
|6       |#6      |YES        |YES|         |          |        |
|7       |#7      |YES        |   |         |          |        |
|8       |#8      |YES        |YES|         |          |        |
|9       |#9      |YES        |YES|         |          |        |
|10      |#10     |YES        |YES|         |          |        |
|11      |#11     |YES        |YES|         |          |        |
|12      |#12     |YES        |YES|         |          |        |
|13      |#13     |YES        |YES|         |          |        |
|SDA     |#20     |YES        |YES|         |          |        |
|SCL     |#21     |YES        |YES|         |          |        |
|A0      |#A0     |YES        |YES|YES      |YES       |        |
|A1      |#A1     |YES        |YES|YES      |          |        |
|A2      |#A2     |YES        |YES|YES      |          |        |
|A3      |#A3     |YES        |YES|YES      |          |        |
|A4      |#A4     |YES        |YES|YES      |          |Voltage of Battery|
|A5      |#A5     |YES        |YES|YES      |          |Charge Status|

:::note
    All pins can act as Digital Input and Output
:::

## Getting Started

:::note
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)
:::

First you need to install the latest Arduino IDE, and [ADD Seeeduino LoRa to your Arduino IDE](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/).

## Install the Driver (For Windows)

When the first time to insert the board, you should get a USB COM device name Seeeduino LoRaWAN that need to install a driver. Click on the below button to download driver for the board.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/driver.png)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/driver.zip)

To make sure the driver was installed successful, open your Device Manager to see if **Seeeduino LoRaWAN** exists.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/device_manager.png)

## 1. Blink

Now we can upload our first demo - Blink to Seeeduino LoRaWAN.

Open your Arduino IDE and click on **File > Examples > 01.Basics > Blink** to open the sketch or copy the blow code:

```c
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  pinMode(13, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);              // wait for a second
  digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);              // wait for a second
}
```

And Then,

* Click on **Tools > Board > Seeeduino LoRaWAN**

If you can not find the Seeeduino LoRaWAN, please check [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/)

* Click on **Tools > Port** to select a right port number. (*Don't choose COM1*)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink1.png)

Then click on the **Upload** button on the left-top of Arduino IDE, seconds later the sketch was uploaded successful.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink2.png)

If the uploading is success, you should the some info in red and please the on-board LED, it's blinking.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink3.png)

## 2. Battery

You can power the board via a 3.7V Lipo battery. There's a JST2.0 cable included, use it if you can't get a battery with JST2.0 connector.

:::warning
    Make sure the positive and negative end of your battery is connected right, otherwise the board may be damaged.
:::
Charge status pin and positive pin of the battery had beed connect to A4 and A5, which allow you to detect the charge status and measure voltage of the battery via coding.

Copy and upload the below code to detect the battery status.

```c++
// battey of Seeeduino LoRaWAN

const int pin_battery_status  = A5;
const int pin_battery_voltage = A4;

void setup() {
    SerialUSB.begin(115200);
    pinMode(pin_battery_status, INPUT);
}

void loop() {

    int a = analogRead(pin_battery_voltage);
    float v = a/1023.0*3.3*11.0;        // there's an 1M and 100k resistor divider
    SerialUSB.print(v, 2);
    SerialUSB.print('\t');
    SerialUSB.println(digitalRead(pin_battery_status));

    delay(1000);
}
```

:::note
    Charge status return 0 while charging, return 1 while charge done or no battery insert.
:::

## 3. Send and Receive Example

There is a well written library for the LoRaWAN modules, for simple applications you even don't need to know much about the protocol about LoRa, which is complex and hard to read.
And please note that you still need some acknowledge about LoRa protocol if you want an advanced application.
You don't need to download the library, it's included in the package already. You can open it at **File > Examples > LoRaWAN**. Those examples include:

* p2p-tx
* p2p-rx
* ABP
* OTAA

You need 2 piece of Seeeduino LoRaWAN to complete this example, one for sending and another for receiving.

### 3.1 P2P Sending

Open your Arduino IDE and click on **File > Examples > LoRaWAN > p2p_tx** to open the sketch or you can copy the code below.
This sketch will broadcast a string "Hello World!" every 3000 ms.

```
// Seduino LoRaWAN - TX example
#include <LoRaWan.h>

void setup(void)
{
    SerialUSB.begin(115200);
    lora.init();
    lora.initP2PMode(433, SF12, BW125, 8, 8, 20);
}

void loop(void)
{
    lora.transferPacketP2PMode("Hello World!");
    SerialUSB.println("Send string.");
    delay(3000);
}
```

### 3.2 P2P Receiving

Open your Arduino IDe and click on **File > Examples > LoRaWAN > p2p_rx** to open the sketch or you can copy the code below.

```
// Seduino LoRaWAN - RX example
#include <LoRaWan.h>

unsigned char buffer[128] = {0, };

void setup(void)
{
    SerialUSB.begin(115200);
    lora.init();
    lora.initP2PMode(433, SF12, BW125, 8, 8, 20);
}

void loop(void)
{
    short length = 0;
    short rssi = 0;

    memset(buffer, 0, 128);
    length = lora.receivePacketP2PMode(buffer, 128,  &rssi, 1);

    if(length)
    {
        SerialUSB.print("Length is: ");
        SerialUSB.println(length);
        SerialUSB.print("RSSI is: ");
        SerialUSB.println(rssi);
        SerialUSB.print("Data is: ");
        for(unsigned char i = 0; i < length; i ++)
        {
            SerialUSB.print("0x");
            SerialUSB.print(buffer[i], HEX);
            SerialUSB.print(" ");
        }
        SerialUSB.println();
    }
}
```

After both of the sketch is well uploaded, open the serial monitor of the receiving board, check if you can get some data as below.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/monitor_rx.png)

### 3.3 ABP

* Step 1. Please refer to [LoRa/LoRaWAN Gateway Kit](https://wiki.seeedstudio.com/LoRa_LoRaWan_Gateway_Kit/) to setup gateway first.  
* Step 2. Connect the [Grove-Temperature_and_Humidity_Sensor_Pro](https://wiki.seeedstudio.com/Grove-Temperature_and_Humidity_Sensor_Pro/) to D2 port of base shield.
* Step 3. Connect the base shield to Seeeduino Lorawan.
* Step 4. Download [DHT Library](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/DHT.zip) and unzip to arduino library folder.
* Step 5. Copy below code to arduino IDE and upload.

```c++

#include <LoRaWan.h>
#include "DHT.h"

#define DHTPIN            2   
#define DHTTYPE           DHT22
DHT dht(DHTPIN, DHTTYPE);
unsigned char data[2] = {1, 2};
char buffer[256];

void setup(void)
{     
    dht.begin();
    
    SerialUSB.begin(115200);
    //while(!SerialUSB);
    
    lora.init();
    
    memset(buffer, 0, 256);
    lora.getVersion(buffer, 256, 1);
    SerialUSB.print(buffer); 
    
    memset(buffer, 0, 256);
    lora.getId(buffer, 256, 1);
    SerialUSB.print(buffer);
    
    lora.setKey("2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C");
    
    lora.setDeciveMode(LWABP);
    lora.setDataRate(DR0, EU868);
    
    lora.setChannel(0, 867.7);
    lora.setChannel(1, 867.9);
    lora.setChannel(2, 868.8);
    
    lora.setReceiceWindowFirst(0, 867.7);
    lora.setReceiceWindowSecond(869.5, DR3);
    
    lora.setDutyCycle(false);
    lora.setJoinDutyCycle(false);
    
    lora.setPower(14);
}

void loop(void)
{   
    bool result = false;

    delay(2000);
    int h = dht.readHumidity();
    int t = dht.readTemperature();
    
    //result = lora.transferPacket("Hello World!", 10);
    result = lora.transferPacket(data, 2, 10);
    data[0] = h;
    data[1] = t;
    
    if(result)
    {
        short length;
        short rssi;
        
        memset(buffer, 0, 256);
        length = lora.receivePacket(buffer, 256, &rssi);
        
        if(length)
        {
            SerialUSB.print("Length is: ");
            SerialUSB.println(length);
            SerialUSB.print("RSSI is: ");
            SerialUSB.println(rssi);
            SerialUSB.print("Data is: ");
            for(unsigned char i = 0; i < length; i ++)
            {
                SerialUSB.print("0x");
                SerialUSB.print(buffer[i], HEX);
                SerialUSB.print(" ");
            }
            SerialUSB.println();
        }
    }
}

```

* Step 6. For local server, click Application->Seeed(the name of the Application you just added)->View application data, you will see the data you've just sent from the Seeeduino_LoRAWAN. For Loriot Server, go to Dashboard -> Applications -> SampleApp ->Device , click the Node Device EUI or DevAddr, you will find the data you've just sent here.

### 3.4 OTAA

* Step 1. Please refer to [User Manual](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/RHF-UM01649 IoT Discovery User Manual-seeed-v2.1.pdf) Session 3.2.3 to setup the gateway.
* Step 2. For seeeduino Lorawan, Please open your Arduino IDE and click on **File > Examples > LoRaWAN > OTAA** and refer the code.

```c++
#include <LoRaWan.h>


unsigned char data[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0xA,};
char buffer[256];


void setup(void)
{
    SerialUSB.begin(115200);
    while(!SerialUSB);
    
    lora.init();
    
    memset(buffer, 0, 256);
    lora.getVersion(buffer, 256, 1);
    SerialUSB.print(buffer); 
    
    memset(buffer, 0, 256);
    lora.getId(buffer, 256, 1);
    SerialUSB.print(buffer);
    
    lora.setKey("2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C");
    
    lora.setDeciveMode(LWOTAA);
    lora.setDataRate(DR0, EU868);
    
    lora.setChannel(0, 868.1);
    lora.setChannel(1, 868.3);
    lora.setChannel(2, 868.5);
    
    lora.setReceiceWindowFirst(0, 868.1);
    lora.setReceiceWindowSecond(869.5, DR3);
    
    lora.setDutyCycle(false);
    lora.setJoinDutyCycle(false);
    
    lora.setPower(14);
    
    while(!lora.setOTAAJoin(JOIN));
}

void loop(void)
{   
    bool result = false;
    
    result = lora.transferPacket("Hello World!", 10);
    //result = lora.transferPacket(data, 10, 10);
    
    if(result)
    {
        short length;
        short rssi;
        
        memset(buffer, 0, 256);
        length = lora.receivePacket(buffer, 256, &rssi);
        
        if(length)
        {
            SerialUSB.print("Length is: ");
            SerialUSB.println(length);
            SerialUSB.print("RSSI is: ");
            SerialUSB.println(rssi);
            SerialUSB.print("Data is: ");
            for(unsigned char i = 0; i < length; i ++)
            {
                SerialUSB.print("0x");
                SerialUSB.print(buffer[i], HEX);
                SerialUSB.print(" ");
            }
            SerialUSB.println();
        }
    }
}
```

## 4. GPS Data

:::note
    This chapter works with Seeeduino LoRaWAN W/GPS only.
:::

### 4.1 NMEA

* Step 1. Copy below code you Seeeduino LoRaWAN W/GPS.

```c++
void setup()
{
    Serial2.begin(9600);
    Serial.begin(115200);
}
 
void loop()
{
    while(Serial2.available())
    {
        Serial.write(Serial2.read());
    }
    while(Serial.available())
    {
        Serial2.write(Serial.read());
    }
}
```

* Step 2. Open Serial Monitor then you will get data from GPS.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/gps.png)

### 4.2 Lat and Lng

Thanks for **Todd Krein** for sharing the example in Github. Please download the [TinyGPS++ library](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/TinyGPSPlus-master.zip) and then copy below code to Seeeduino Lorawan.

```c++
#define USE_GPS 1
 
#include "LoRaWan.h"
 
#ifdef USE_GPS
#include "TinyGPS++.h"
TinyGPSPlus gps;
#endif
 
 
void setup(void)
{
 
    char c;
#ifdef USE_GPS
    bool locked;
#endif
 
    SerialUSB.begin(115200);
    while(!SerialUSB);
 
    lora.init();
    lora.setDeviceReset();
 
#ifdef USE_GPS
    Serial2.begin(9600);     // open the GPS
    locked = false;
 
    // For S&G, let's get the GPS fix now, before we start running arbitary
    // delays for the LoRa section
 
    while (!gps.location.isValid()) {
      while (Serial2.available() > 0) {
        if (gps.encode(c=Serial2.read())) {
          displayInfo();
          if (gps.location.isValid()) {
//            locked = true;
            break;
          }
        }
//        SerialUSB.print(c);
      }
 
//      if (locked)
//        break;
 
      if (millis() > 15000 && gps.charsProcessed() < 10)
      {
        SerialUSB.println(F("No GPS detected: check wiring."));
        SerialUSB.println(gps.charsProcessed());
        while(true);
      } 
      else if (millis() > 20000) {
        SerialUSB.println(F("Not able to get a fix in alloted time."));     
        break;
      }
    }
#endif
}
 
 
void loop(void)
{
//displayInfo();
//delay(1000);
}
 
void displayInfo()
{
  SerialUSB.print(F("Location: ")); 
  if (gps.location.isValid())
  {
    SerialUSB.print(gps.location.lat(), 6);
    SerialUSB.print(F(","));
    SerialUSB.print(gps.location.lng(), 6);
  }
  else
  {
    SerialUSB.print(F("INVALID"));
  }
 
  SerialUSB.print(F("  Date/Time: "));
  if (gps.date.isValid())
  {
    SerialUSB.print(gps.date.month());
    SerialUSB.print(F("/"));
    SerialUSB.print(gps.date.day());
    SerialUSB.print(F("/"));
    SerialUSB.print(gps.date.year());
  }
  else
  {
    SerialUSB.print(F("INVALID"));
  }
 
  SerialUSB.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.hour());
    SerialUSB.print(F(":"));
    if (gps.time.minute() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.minute());
    SerialUSB.print(F(":"));
    if (gps.time.second() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.second());
    SerialUSB.print(F("."));
    if (gps.time.centisecond() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.centisecond());
  }
  else
  {
    SerialUSB.print(F("INVALID"));
  }
 
  SerialUSB.println();
}

```

## 5. Low Power

The minimum current is 80uA(for Seeeduino LoRaWAN) under our testing.
Please follow below steps.

1. Remove PWR LED (If you don't remove this LED, the current will > 2mA)
2. Remove CHG LED
3. Upload below code to your board.

```
#include <LoRaWan.h>
#include <EnergySaving.h>

EnergySaving nrgSave;

void blink()
{
    for(unsigned char i = 0; i < 5; i ++)
    {
        digitalWrite(13,HIGH);
        delay(500);
        digitalWrite(13,LOW);
        delay(500);
    }
}

void setup()
{
    for(unsigned char i = 0; i < 26; i ++)      // important, set all pins to HIGH to save power
    {
        pinMode(i, OUTPUT);
        digitalWrite(i, HIGH);
    }

    lora.init();
    blink();    
    lora.setDeviceLowPower();
    blink();    
    nrgSave.begin(WAKE_EXT_INTERRUPT, 7, dummy);    // buton on D7 to wake up the board
    nrgSave.standby();
}

void loop()
{
    blink();
    nrgSave.standby();
}

void dummy(void)
{
    // do something
}

// END File
```

## 6. Update firmware

If you want to check version of you board, please upload below code to your board.

```c++
void setup()
{
    Serial1.begin(9600);
    SerialUSB.begin(115200);
}

void loop()
{
    while(Serial1.available())
    {
        SerialUSB.write(Serial1.read());
    }
    while(SerialUSB.available())
    {
        Serial1.write(SerialUSB.read());
    }
}
```

Open your Serial Monitor and INPUT

```
AT+VER
```

Then you will get the version of your board.

:::note
    If your Seeeduino LoRawan board is an AM version, it cannot support V3 firmware, you need DM version to update the firmware to above 3.0.Because V3 firmware is too large,  AM flash is too small.
:::  

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/VER.png)

The firmware version of is 2.0.10, if you want to update firmware, few steps need to follow.

* Step 1. Copy and upload below code to your board.

```c
// Update firmware to RHF76-052AM
#include <Arduino.h>

void setup()
{
    SerialDBG.begin(115200);
    SerialUSB.begin(115200);
}

void loop()
{
    while(SerialDBG.available())
    {
        SerialUSB.write(SerialDBG.read());
    }
    while(SerialUSB.available())
    {
        SerialDBG.write(SerialUSB.read());
    }
}

```

* Step 2. Remove the board form USB and reconnect again, then press the DFU Button, after the Firmware mode led blinking you can go to the next step.

* Step 3. Click to download the latest firmware, which is a .bin file.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_bin.png)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.0.10-20160923.ebin%202.bin)

* Step 4. Open PuTTy and connect to the board

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_1.png)

:::tip
    You can find the latest PuTTy here: [http://www.extraputty.com/download.php](http://www.extraputty.com/download.php)
:::

* Step 5. After connect your board to PuTTy successful, you will find the char 'C' print on the monitor continually.
Click on **Files Transfer > Ymodem > Send**, and select the .bin file we had downloaded at Step4.

* Step 6. Then the updating is started.
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_4.png)

## FAQ

**Q1: Seeeduino Lorawan stopped being recognized by PC**

**A1:** Quickly double-tapping the reset buton to recover the board.

**Q2：Seeeduino Lorawan don't have Examples > LoRaWAN**

**A2:** Click [this](https://github.com/SeeedDocument/seeeduino_LoraWan) to get it.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/202001246 Seeeduino LoRaWAN Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

* [Schematics in Eagle](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/202001246 Seeeduino LoRaWAN Eagle.zip)
* [Sketchup file(3D)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/Seeeduino LoRaWAN.skp)
* [CE certification of RHF 76-052](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/ce-rhf76-052.pdf)
* [RHF76-052 Firmware V2.0.10](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.0.10-20160923.ebin 2.bin)
* [RHF76-052 Firmware V2.1.16AM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.1.16-20171203.ebin.bin)
* [RHF76-052 Firmware V2.1.19AM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.1.19-20180525.ebin.bin)
* [RHF76-052 Firmware V3.3.1DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052dm-v3.3.1-20180707.ebin(1).bin)
* [RHF76-052 Firmware V3.5.13DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052dm-v3.5.13-20190916.ebin.bin)
* [Datasheet of RHF76-052AM/DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf-ds01500_rhf76-052_datasheet_v03.pdf)
* [Datasheet of GPS Chip L70B-M39](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/L70B-M39.pdf)
* [Azure IoT Edge LoRaWAN](https://github.com/Azure/iotedge-lorawan-starterkit/)
* [[RHF-PS01709]LoRaWAN Class ABC AT Command Specification](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/AT-Command-Specificationv1.2.pdf)

## Projects

**LoRa IoTea**: An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed" width={350} />

## Tech Support

  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
  <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
