---
description: Getting Started with Seeed Studio XIAO SAMD21
title: Getting Started with Seeed Studio XIAO SAMD21
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO
last_update:
  date: 1/11/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" /></p>

The Seeed Studio XIAO SAMD21 is the smallest member of the Seeeduino family. It carries the powerful ATSAMD21G18A-MU which is a low-power microcontrollers. On the other hand, this little board has good performance in processing but needs less power. As a matter of fact, it is designed in a tiny size and can be used for wearable devices and small projects.

Seeed Studio XIAO SAMD21 has 14 PINs, which can be used for 11 digital interfaces, 11 mock interfaces, 10 PWM interfaces (d1-d10), 1 DAC output pin D0, 1 SWD pad interface, 1 I2C interface, 1 SPI interface, 1 UART interface, Serial communication indicator (T/R), Blink light (L) through pin multiplexing. The colors of LEDs(Power,L,RX,TX) are green, yellow, blue and blue. Moreover, Seeed Studio XIAO SAMD21 has a Type-C interface which can supply power and download code. There are two reset button, you can short connect them to reset the board.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## **Documentations**

There are two documentations on the usage of **Seeed Studio XIAO SAMD21** which focus on different areas, check the table below for reference:

|[**Documentation by Seeed**](https://wiki.seeedstudio.com/Seeeduino-XIAO/)|[**Documentation by Nanase**](https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Pinout Digram|Interface|
|Seeed Studio XIAO SAMD21 Getting Started|Seeed Studio XIAO SAMD21 with MicroSD Card(SPI)|
|Seeed Studio XIAO SAMD21 GPIO Usage|Seeed Studio XIAO SAMD21 with GPS(UART)|
|Seeed Studio XIAO SAMD21 Resources|Single Cycle IOBUS|

### **CircuitPython on Seeed Studio XIAO SAMD21**

- Get started with [**CircuitPython on Seeed Studio XIAO SAMD21 **](http://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython).

## **Features**

- Powerful CPU: ARM® Cortex®-M0+ 32bit 48MHz microcontroller(SAMD21G18) with 256KB Flash,32KB SRAM.
- Flexible compatibility: Compatible with Arduino IDE.
- Easy project operation: Breadboard-friendly.
- Small size: As small as a thumb(20x17.5mm) for wearable devices and small projects.
- Multiple development interfaces: 11 digital/analog pins, 10 PWM Pins, 1 DAC output, 1 SWD Bonding pad interface, 1 I2C interface, 1 UART interface, 1 SPI interface.

## **Specification**

|Item|Value|
|---|---|
|CPU|ARM Cortex-M0+ CPU(SAMD21G18) running at up to 48MHz|
|Flash Memory|256KB|
|SRAM|32KB|
|Digital I/O Pins|11|
|Analog I/O Pins|11|
|I2C interface|1|
|SPI interface|1|
|QTouch|7 (A0,A1,A6,A7,A8,A9,A10)|
|UART interface|1|
|Power supply and downloading interface| Type-C|
|Power|3.3V/5V DC|
|Dimensions|20×17.5×3.5mm|

## **Hardware Overview**

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png) -->
  <p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png" alt="pir" width={600} height="auto" /></p>

:::note

For general I/O pins:<br />
  Working voltage of MCU is 3.3V . Voltage input connected to general I/O pins may cause chip damage if it' higher than 3.3V .

For power supply pins:<br />
  The built-in DC-DC converter circuit able to change 5V voltage into 3.3V allows to power the device with a 5V supply via VIN-PIN and 5V-PIN.

Please pay attention to use, do not lift the shield cover.
:::

### **Enter Bootloader Mode**

Sometimes the Seeed Studio XIAO SAMD21 port may disappear when user programming process fails. we can solve this problem by the following operation:

- Connect the Seeed Studio XIAO SAMD21 to your computer.
- Use tweezers or short lines to short the RST pins in the diagram twice.
- The orange LED lights flicker on and light up.

At this point, the chip enters Bootloader mode and the burn port appears again. Because the samd21 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### **Reset**

If you want to reset the Seeed Studio XIAO SAMD21 , perform the following steps:

- Connect the Seeed Studio XIAO SAMD21 to your computer.
- Use tweezers or short lines to short the RST pins **only once**
- The orange LED lights flicker on and light up.

Please note: The behavior of the built-in LED is reversed to the one on an Arduino. On the Seeed Studio XIAO SAMD21 , the pin has to be pulled low, whereas on other micro-controllers it has to be pulled high.  

### **Interrupt**

All pins on Seeed Studio XIAO SAMD21 support interrupts, but two pins cannot be used at the same time: 5 pin and 7 pin. For more detail about Interrupt please check [here](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp).

### **Pin Multuiplexing**

We don't need to configure the pins ourselves, after using the pins, you can call a function directly.

#### **Digital Input and Output**

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

#### **AnalogRead**

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

#### **Serial**

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

#### **I2C**

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

#### **SPI**

- Use pin 8 as the SCK pin of SPI(MISO pin of SPI is pin 9,MOSI pin of SPI is pin 10):

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // disable Slave Select
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // enable Slave Select
   // send test string
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // disable Slave Select
   delay(2000);
}
```

#### **QTouch**

For how to use QTouch, we provide an example project: [How to Make a Fruit Piano on Seeed Studio XIAO SAMD21 ’s Q-Touch Function](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/).

#### **Analog Input and Output**

While it still has PWM-based "analog outputs", the SAMD21 also features true analog output in the form of a digital-to-analog converter (DAC). This module can produce an analog voltage between 0 and 3.3V. It can be used to produce audio with more natural sound, or as a kind of "digital potentiometer" to control analog devices.

The DAC is only available on the Arduino pin A0, and is controlled using analogWrite(A0, `<value>`). The DAC can be set up to 10-bit resolution (make sure to call [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) in your setup), which means values between 0 and 1023 will set the voltage to somewhere between 0 and 3.3V.

In addition to the DAC, the SAMD21's ADC channels also stand apart from the ATmega328: they're equipped with up to 12-bit resolution. That means the analog input values can range from 0-4095, representing a voltage between 0 and 3.3V. To use the ADC's in 12-bit mode, make sure you call [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) in your setup.

**Serial Plotting the DAC**

Here's an example that demonstrates both the DAC and the ADC. To set the experiment up, connect A0 to A1 -- we'll drive A0 with an analog voltage, then read it with A1. It's the simplest circuit we've ever put in a tutorial:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
The Seeed Studio XIAO SAMD21 using the [**Seeed Studio XIAO SAMD21 expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

This sketch produces a sine wave output on A0, with values ranging from 0 to 3.3V. Then it uses A1 to read that output into its ADC, and convert it into a voltage between 0 and 3.3V.

You can, of course, open the serial monitor to view the voltage values stream by. But if the the sine wave is hard to visualize through text, check out Arduino's new Serial Plotter, by going to Tools > Serial Plotter.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

**Code**

```cpp
#define DAC_PIN A0 // Make code a bit more legible

float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
int frequency = 440; // Frequency of sine wave

void setup() 
{
  analogWriteResolution(10); // Set analog out resolution to max, 10-bits
  analogReadResolution(12); // Set analog input resolution to max, 12-bits

  SerialUSB.begin(9600);
}

void loop() 
{
  // Generate a voltage value between 0 and 1023. 
  // Let's scale a sin wave between those values:
  // Offset by 511.5, then multiply sin by 511.5.
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // Increase value of x

  // Generate a voltage between 0 and 3.3V.
  // 0= 0V, 1023=3.3V, 512=1.65V, etc.
  analogWrite(DAC_PIN, dacVoltage);

  // Now read A1 (connected to A0), and convert that
  // 12-bit ADC value to a voltage between 0 and 3.3.
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  SerialUSB.println(voltage); // Print the voltage.
  delay(1); // Delay 1ms
}
```

## **Getting Started**

### **Hardware**

**Materials required**

- Seeed Studio XIAO SAMD21 x1
- Computer x1
- USB typc cable x1

:::tip

Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

- Step 1. Prepare a Seeed Studio XIAO SAMD21 and a Type-C cable.

- Step 2. Connect the Seeed Studio XIAO SAMD21 to your computer.Then the yellow power LED should go on.

### **Software**

:::note

If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)
:::

- **Step 1. You need to Install an Arduino Software.**

[<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={600} height="auto" /></p>
](https://www.arduino.cc/en/Main/Software)

**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.

:::note

If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.
:::

- **Step 2. Open the Blink example**  

Open the LED blink example sketch: **File > Examples >01.Basics > Blink**.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **Step 3. Add Seeeduino to your Arduino IDE**

Click on **File > Preference**, and fill Additional Boards Manager URLs with the url below:
    *<https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json>*

<!-- ![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

Click **Tools-> Board-> Boards Manager...**, print  keyword "**Seeed Studio XIAO SAMD21**" in the searching blank. Here comes the "Seeed SAMD Boards". Install it.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

- **Step 4. Select your board and port**

After installing the board, click **Tools-> Board**, find "**Seeed Studio XIAO SAMD21 M0**" and select it. Now you have already set up the board of Seeed Studio XIAO SAMD21 for Arduino IDE.

<!-- 
![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/board.png" alt="pir" width={600} height="auto" /></p>

Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/port.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/port.png" alt="pir" width={600} height="auto" /></p>

- **Step 5.Upload the program**  

Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={600} height="auto" /></p>

 A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions.

:::note
the max size of flash is 8KB the more information at the ATSAMD218A-MU datasheet in resourses
:::

## The sample application

- [How to use Seeed Studio XIAO SAMD21 to log in to your Raspberry PI](https://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI Communication Interface](https://wiki.seeedstudio.com/XIAO-SPI-Communication-Interface)

- [How to unbrick a dead xiao using raspberry pi](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990). Thanks John_Doe for sharing.

## Resourses

- **[PDF]** [ATSAMD218A-MU datasheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO SAMD21 Schematic](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)

- **[ZIP]** [Seeed Studio XIAO SAMD21 KiCAD file](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-KICAD.zip)

- **[ZIP]** [Seeed Studio XIAO SAMD21 Eagle file](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)

- **[DXF]** [Seeed Studio XIAO SAMD21 Dimension in DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar)

- **[LBR]** [Seeed Studio XIAO SAMD21 Eagle footprint](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO SAMD21 Factory firmware](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip)

- **[XLSX]** [Seeed Studio XIAO SAMD21 pinout sheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO SAMD21 3D Model](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip)

- **[ZIP]** [Seeed Studio XIAO SAMD21 Certification files](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-Certification.zip)

## Course Resources

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO.jpg" /></div>

- **[PDF]** [Seeed Studio XIAO SAMD21 in Action——Minitype ＆ Wearable Projects Step by Step](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype＆Wearable-Projects-Step-by-Step.pdf)
- **[ZIP]** [Codes](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-Codes.rar)
- **[ZIP]** [Document](https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-Document.rar)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
