---
name: Seeeduino XIAO - Arduino Microcontroller - SAMD21 Cortex M0+
category: Development Board
bzurl: 
prodimagename:
surveyurl: 
sku: 102010328
tags:
---

![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino-XIAO/master/img/Seeeduino-XIAO-preview-1.jpg)

The Seeeduino XIAO is the smallest member of the Seeeduino family. It carries the powerful ATSAMD21G18A-MU which is a low-power microcontrollers. On the other hand, this little board has good performance in processing but needs less power. As a matter of fact, it is designed in a tiny size and can be used for wearable devices and small projects.

Seeeduino XIAO has 14 GPIO PINs, which can be used for 11 digital interfaces, 11 mock interfaces, 10 PWM interfaces (d1-d10), 1 DAC output pin D0, 1 SWD pad interface, 1 I2C interface, 1 SPI interface, 1 UART interface, Serial communication indicator (T/R), Blink light (L). The colors of LEDs(Power,L,RX,TX) are green, yellow, blue and blue. Moreover, Seeeduino XIAO has a Type-C interface which can supply power and download code. There are two reset button, you can short connect them to reset the board.


<p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features

- Powerful CPU: ARM® Cortex®-M0+ 32bit 48MHz microcontroller(SAMD21G18) with 256KB Flash,32KB SRAM.
- Flexible compatibility: Compatible with Arduino IDE.
- Easy project operation: Breadboard-friendly.
- Small size: As small as a thumb(20x17.5mm) for wearable devices and small projects.
- Multiple development interfaces: 11 digital/analog pins, 10 PWM Pins, 1 DAC output, 1 SWD Bonding pad interface, 1 I2C interface, 1 UART interface, 1 SPI interface.

## Specification

|Item|Value|
|---|---|
|CPU|ARM Cortex-M0+ CPU(SAMD21G18) running at up to 48MHz|
|Flash Memory|256KB|
|SRAM|32KB|
|Digital I/O Pins|11|
|Analog I/O Pins|11|
|I2C interface|1|
|SPI interface|1|
|UART interface|1|
|Power supply and downloading interface| Type-C|
|Power|3.3V/5V DC|
|Dimensions|20×17.5×3.5mm|



## Hardware Overview


![](https://github.com/SeeedDocument/Seeeduino-XIAO/raw/master/img/Seeeduino-XIAO-pinout.jpg)


![](https://github.com/SeeedDocument/Seeeduino-XIAO/raw/master/img/Seeeduino%20XIAO%20pinout%202.png)

![](https://github.com/SeeedDocument/Seeeduino-XIAO/raw/master/img/regulator_to_3.3v.png)


!!!Note

    For general I/O pins:
    Working voltage of MCU is 3.3V . Voltage input connected to general I/O pins may cause chip damage if it' higher than 3.3V .

    For power supply pins:
    The built-in DC-DC converter circuit able to change 5V voltage into 3.3V allows to power the device with a 5V supply via VIN-PIN and 5V-PIN.

    Please pay attention to use, do not lift the shield cover.
    
    
### Reset


Sometimes the Seeeduino XIAO port may disappear when user programming process fails. we can solve this problem by the following operation: 

- Connect the Seeeduino XIAO to your computer.
- Use tweezers or short lines to short the RST pins in the diagram twice.
- The orange LED lights flicker on and light up.

At this point, the chip enters Bootloader mode and the burn port appears again. Because the samd21 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes with a quick reset.


![](https://github.com/SeeedDocument/Seeeduino-XIAO/raw/master/img/XIAO-reset.gif)


### Interrupt


All pins on Seeeduino XIAO support interrupts, but two pins cannot be used at the same time: 5 pin and 7 pin. For more detail about Interrupt please check [here](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp).


### Pin Multuiplexing

We don't need to configure the pins ourselves, after using the pins, you can call a function directly.

- Use pin 6 as the digital pin:

```c
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

- Use pin 6 as the analog pin:

```c


void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

- Use pin 6 as the TX pin of UART(RX pin of UART is pin 7):

```c

void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hello,World");
    delay(1000);
}
```

- Use pin 5 as the SCL pin of IIC(SDA pin of IIC is pin 4):

```c
// Wire Master Writer
// by Nicholas Zambetti <http://www.zambetti.com>

// Demonstrates use of the Wire library
// Writes data to an I2C/TWI slave device
// Refer to the "Wire Slave Receiver" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup()
{
  Wire.begin(); // join i2c bus (address optional for master)
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // transmit to device #4
  Wire.write("x is ");        // sends five bytes
  Wire.write(x);              // sends one byte  
  Wire.endTransmission();    // stop transmitting
  x++;
  delay(500);
}
```

- Use pin 8 as the SCK pin of SPI(MISO pin of SPI is pin 9,MOSI pin of SPI is pin 10):

```c
#include <SPI.h>
const int SS = 7;
void setup (void) {
   digitalWrite(SS, HIGH); // disable Slave Select
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8
}

void loop (void) {
   char c;
   digitalWrite(SS, LOW); // enable Slave Select
   // send test string
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(SS, HIGH); // disable Slave Select
   delay(2000);
}
```

## Getting Started


### Hardware


**Materials required**

- Seeeduino XIAO x1 
- Computer x1
- USB typc cable x1

!!!Tip

    Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).


- Step 1. Prepare a Seeeduino XIAO and a Type-C cable.

- Step 2. Connect the Seeeduino XIAO to your computer.Then the yellow power LED should go on.


### Software


!!!Note


    If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](http://wiki.seeed.cc/Getting_Started_with_Arduino)



- **Step 1. You need to Install an Arduino Software.**


[![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_Stalker_V3_1/master/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.


!!!Note
 
    If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.


- **Step 2. Open the Blink example**  

Open the LED blink example sketch: **File > Examples >01.Basics > Blink**.


![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/select_blink.png)


- **Step 3. Add Seeeduino to your Arduino IDE**

Click on **File > Preference**, and fill Additional Boards Manager URLs with the url below:
    *https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*


![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png)


Click **Tools-> Board-> Boards Manager...**, print  keyword "**Seeeduino XIAO**" in the searching blank. Here comes the "Seeed SAMD Boards". Install it.


![](https://github.com/SeeedDocument/Seeeduino-XIAO/raw/master/img/XIAO-board.png)


- **Step 4. Select your board and port** 

After installing the board, click **Tools-> Board**, find "**Seeeduino XIAO M0**" and select it. Now you have already set up the board of Seeeduino XIAO for Arduino IDE.


![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino-XIAO/master/img/board.png)




Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.


![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino-XIAO/master/img/port.png)


- **Step 5.Upload the program**  


Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.


![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/upload_image.png)

 
 A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions.


## The sample application

 - [How to use Seeeduino XIAO to log in to your Raspberry PI](http://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI Communication Interface](http://wiki.seeedstudio.com/XIAO-SPI-Communication-Interface)


## Resourses

- **[PDF]** [Seeeduino XIAO](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)

- **[PDF]** [ATSAMD218A-MU datasheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[ZIP]** [Seeeduino KiCAD 3D Model](http://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino%20XIAO%20KICAD.zip)

- **[LBR]** [Seeeduino Eagle 3D Model](http://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino%20XIAO.lbr)


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).