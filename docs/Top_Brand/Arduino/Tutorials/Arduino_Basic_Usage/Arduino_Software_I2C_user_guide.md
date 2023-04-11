---
description: I2C User Guide for Arduino Boards
title: I2C User Guide for Arduino Boards
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arduino_Software_I2C_user_guide
last_update:
  date: 1/16/2023
  author: jianjing Huang
---


# Arduino Software I2C User Guide

The standard I2C library for the Arduino is the Wire library. While this library is sufficient most of the time, there are situations when it cannot be used:

- the I2C pins A4/A5 (or SDA/SCL) are in use already for other purposes
- same I2C addresses devices are used

So we write the SoftwareI2C library to use digit port and analog
port to enable multiple same I2C addresses devices work on Arduino.

## I2C Scanner for Arduino

I2C Scanner is a simple sketch that scans the I2C-Bus for devices. You can upload the code to your Arduino to find out the I2C address of the modules. Upload the below sketch and open the Serial Monitor to view results:

```cpp
#include <Wire.h>

void setup()
{
    Wire.begin();

    Serial.begin(9600);
    while (!Serial); // Wait for serial monitor
    Serial.println("---I2C Scanner---");
}

void loop()
{
    byte error, address;
    int nDevices;

    Serial.println("Scanning...");

    nDevices = 0;
    for(address = 1; address < 127; address++ )
    {
        Wire.beginTransmission(address);
        error = Wire.endTransmission();

        Wire.beginTransmission(address+1);

    if (error == 0 && Wire.endTransmission() != 0 ) // Special flag for SAMD Series
    {
        Serial.print("I2C device found at address 0x");
        if (address<16)
            Serial.print("0");
        Serial.print(address,HEX);
        Serial.println("!");

        nDevices++;
    }
    else if (error==4) 
    {
        Serial.print("Unknown error at address 0x");
        if (address<16) 
            Serial.print("0");
        Serial.println(address,HEX);
    }
    }
    if (nDevices == 0)
        Serial.println("No I2C devices found\n");
    else
        Serial.println("done\n");

    delay(5000);           // wait 5 seconds for next scan
}
```

## Install SoftwareI2C Library

----

- Please follow [how to install an arduino library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) procedures to install library.
- We provide an Arduino Library for **SoftwareI2C**, click on [**here**](https://github.com/Seeed-Studio/Arduino_Software_I2C) to download it.

## Example#1: Scan I2C device address

----

### Connection

Here we will show you how this works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4.2 | Grove - OLED Display 1.12" | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

This is an easy-to-use module, what you need to do is connect the module to **D2 port** of a Base Shield.

![enter image description here](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/One_OLED.jpg)

If you don't have the base shield, please follow below connection.

|Arduino Pin|OLED Pin  |
|--------|------|
|Digit 3 | SDA   |
|Digit 2   | SCL|
|VCC   | VCC  |
|GND | GND  |

### Software

- Open the code directly by the path: **File -> Example ->Arduino_Software_I2C-master->SoftwareI2C_Scan**.

![](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/I2C_Scan.jpg)

```cpp
#include "SoftwareI2C.h"

SoftwareI2C softwarei2c;

void setup()
{
    Serial.begin(115200);
    softwarei2c.begin(3, 2);       // sda, scl
    Serial.println("begin to scan...");
}

void loop()
{
    for(unsigned char i=1; i<=127; i++)
    {
        if(softwarei2c.beginTransmission(i))
        {
            Serial.print("0x");
            Serial.println(i, HEX);

            while(1);
        }
        softwarei2c.endTransmission();
    }

    Serial.println("find nothing");
    while(1);

}
```

- Upload the code to arduino.
- Please configure serial port baud rate as 115200.
- We can see I2C address from the serial monitor.

## Example#2: Display different information on 2 Grove - OLED Display 1.12

----

### Connection

Here we will show you how this works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - OLED Display 1.12`` | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

- Connect one Grove - OLED Display 1.12 to **D2 port** and other to **D4 port**.

![enter image description here](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/Two_OLED.jpg)

### Software

- Click on [here](https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip) to download Grove-OLED-Display-1.12 library.
- **Copy SeeedGrayOLED.cpp and SeeedGrayOLED.h to Arduino_Software_I2C-master folder**
- **Edit SeeedGrayOLED.cpp**

  - Step1: Change the library from Wire.h to SoftwareI2C.h

```cpp
From
#include "Wire.h"
To
#include <SoftwareI2C.h>
```

- Step2: Add initSoftwareI2C function, we have to change the class name for different products.

```cpp
void SeeedGrayOLED::initSoftwareI2C(SoftwareI2C *w, int __sda, int __scl)
{
    Wire = w;
    Wire->begin(__sda, __scl);
}
```

- Step3: Replace all `Wire.` to `Wire->`  For example, change  `Wire.endTransmission()` to `Wire->endTransmission()`.

```cpp
From
Wire.endTransmission();
To
Wire->endTransmission();
```

- **Edit SeeedGrayOLED.h**

  - Step1: Change the library `Wire.h` to `SoftwareI2C.h`

```cpp
From
#include "Wire.h"
To
#include <SoftwareI2C.h>
```

- Step2: Add initSoftwareI2C function into public class

```cpp
void initSoftwareI2C(SoftwareI2C *w, int __sda, int __scl);
```

- Step3: Add SoftwareI2C *Wire into private class

```cpp
SoftwareI2C *Wire;
```

- Open the code directly by the path: **File -> Example ->Arduino_Software_I2C-master->OLED_Display**.

![](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/OLED_Display.jpg)

- We have to define SoftwareI2C objects as well as SeeedGrayOLED objects.

```cpp
//define 2 SoftwareI2C objects
#include "SoftwareI2C.h"  
SoftwareI2C WireS1;
SoftwareI2C WireS2;

//define 2 SeeedGrayOLED objects
#include "SeeedGrayOLED.h"
#include <avr/pgmspace.h>
SeeedGrayOLED SeeedGrayOled1;
SeeedGrayOLED SeeedGrayOled2;
```

- We use initSoftwareI2C instead of Wire.begin during setup.

```cpp
  SeeedGrayOled1.initSoftwareI2C(&WireS1, 3, 2);     // initSoftwareI2C, sda, scl
```

```cpp
//define 2 SoftwareI2C objects
#include "SoftwareI2C.h"  
SoftwareI2C WireS1;
SoftwareI2C WireS2;

//define 2 SeeedGrayOLED objects
#include "SeeedGrayOLED.h"
#include <avr/pgmspace.h>
SeeedGrayOLED SeeedGrayOled1;
SeeedGrayOLED SeeedGrayOled2;


void setup()
{
  SeeedGrayOled1.initSoftwareI2C(&WireS1, 3, 2);     // initSoftwareI2C, sda, scl

  SeeedGrayOled1.init(SSD1327);
  SeeedGrayOled1.clearDisplay();     //Clear Display.
  SeeedGrayOled1.setNormalDisplay(); //Set Normal Display Mode
  SeeedGrayOled1.setVerticalMode();  // Set to vertical mode for displaying text


  for(char i=0; i < 12 ; i++)
  {
  SeeedGrayOled1.setTextXY(i,0);  //set Cursor to ith line, 0th column
  SeeedGrayOled1.setGrayLevel(i); //Set Grayscale level. Any number between 0 - 15.
  SeeedGrayOled1.putString("11111111"); //Print 11111111
  }


  SeeedGrayOled2.initSoftwareI2C(&WireS2, 5, 4);     // initSoftwareI2C, sda, scl

  SeeedGrayOled2.init(SSD1327);             //initialize SEEED OLED display
  SeeedGrayOled2.clearDisplay();     //Clear Display.
  SeeedGrayOled2.setNormalDisplay(); //Set Normal Display Mode
  SeeedGrayOled2.setVerticalMode();  // Set to vertical mode for displaying text

  for(char i=0; i < 12 ; i++)
  {
  SeeedGrayOled2.setTextXY(i,0);  //set Cursor to ith line, 0th column
  SeeedGrayOled2.setGrayLevel(i); //Set Grayscale level. Any number between 0 - 15.
  SeeedGrayOled2.putString("00000000"); //Print 00000000
  }
}

  void loop()
  {

  }
```

- Upload to Sketch.
- We will see 11111111 display on one screen while 00000000 is on other.

## APIs of the library

-----

- begin() function: SoftwareI2C.begin() must first be called to start any software I2C communication using the SoftwareI2C library.  

```cpp
SoftwareI2C::begin(int Sda, int Scl)
```

- beginTransmission function: Used when the ATmega is acting as an I2C master. Sets internal variables in the SoftwareI2C library in preparation for transmitting to the given address.

```cpp
SoftwareI2C.beginTransmission(uchar addr)
```

- endTransmission() function: end for transmitting to the given address.  

```cpp
SoftwareI2C.endTransmission()
```

- write function: Populate the send data buffer with the data found in the argument list. there are 2 functions. One is sending a byte and other is array.

```cpp
SoftwareI2C.write(uchar dta)
```

```cpp
SoftwareI2C::write(uchar len, uchar *dta)
```

- read function: Returns the byte in receive buffer.

```cpp
SoftwareI2C.read()
```

## References

----

- **[Library]**[Arduino SoftwareI2C Library](https://github.com/Seeed-Studio/Arduino_Software_I2C/archive/master.zip)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
