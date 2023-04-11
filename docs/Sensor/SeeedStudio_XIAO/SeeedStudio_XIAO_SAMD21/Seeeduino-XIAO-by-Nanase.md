---
description: Seeed Studio XIAO SAMD21 by Nanase
title: Seeed Studio XIAO SAMD21 by Nanase
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO-by-Nanase
last_update:
  date: 1/11/2023
  author: shuxu hu
---


# Seeed Studio XIAO SAMD21 Get Started By Nanase

This is a document written by  [@nanase_coder](https://twitter.com/nanase_coder). (Translated by Seeed from the original Japanese document: [コインサイズ Arduino互換機 Seeed Studio XIAO SAMD21 を使ってみた](https://qiita.com/nanase/items/0fed598975c49b1d707e#spi-microsd%E3%82%AB%E3%83%BC%E3%83%89)). Thank you Nanase for sharing this with us!

## Documentations

There are two documentations on the usage of **Seeeduino XIAO** which focus on different areas, check the table below for reference:

|[**Documentation by Seeed**](https://wiki.seeedstudio.com/Seeeduino-XIAO/)|[**Documentation by Nanase**](https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Pinout Digram|Interface|
|Seeed Studio XIAO SAMD21 Getting Started|Seeed Studio XIAO SAMD21 with MicroSD Card(SPI)|
|Seeed Studio XIAO SAMD21 GPIO Usage|Seeed Studio XIAO SAMD21 with GPS(UART)|
|Seeed Studio XIAO SAMD21 Resources|Single Cycle IOBUS|

## Features

* ARM Cortex M0 + CPU (SAMD21G18) 48MHz
* 256 KB Flash, 32 KB SRAM
* USB Type-C
* SPI, I2C, UART, DMA available
* coin size(20mm x 17.5mm)
* Logic level:3.3V

There are no components on the backside of the board, and all pins have castellated holes, making it easy to solder onto another board.

### Part list

- 1 x Seeeduino XIAO
- 2 x 7pins header
- 4 x pasters

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2" alt="pir" width={600} height="auto" /></p>

Castellated holes:

<!-- ![image](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg" alt="pir" width={600} height="auto" /></p>

## Specification

|  | Specification |
| --- | --- |
| CPU | ARM Cortex-M0+ CPU(SAMD21G18) running at up to 48MHz(Multiply from 32.768 kHz) |
| Storage | 256KB Flash,32KB SRAM |
| I/O PINs | 14 GPIO PINs,11 analog PINs, 11 digital PINs, 1 DAC output Pin |
|Pin function  |SPI, I2C, UART, PWM, external interrupt, SWD (Power Pad)  |
| Logic level | 3.3V |
| LEDs: |1 user LED, 1 power LED, two LEDs for serial port downloading   |
| Power | USB Type-C interface, power pads at the back|
| Size | 20x17.5x3.5mm |


As you can see, it is a SAMD type Arduino and is similar to the Arduino MKR series, so technically, any library written for them can be used on Seeed Studio XIAO SAMD21. On the other hand, since it is different from the ATmega type Arduino like Arduino Uno, the library which depends on some specific register of ATmega cannot be used.

GPIO 14-pin refers to 11 pins on the side, reset pin, and SWD (SWDIO, SWCLK) on the back.

The UART in the pin function is different from the serial via USB and can be operated by `Serial1`.

## Reset your Board

Check [here](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software) and learn about how to add Seeed Studio XIAO SAMD21 to your Arduino IDE.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO SAMD21 does not have a reset button. Instead, there is a reset pad.
Short connect this reset pad and apply GND to reset your board.

## Bootloader Mode

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1" alt="pir" width={600} height="auto" /></p>

Sometimes the program may crash or it is unable to upload the sketch. You can reset the board twice and enter Bootloader mode. In this mode, the LEDs flash slowly, and the Seeed Studio XIAO SAMD21 is recognized as a USB memory device. The serial port is separated from the normal mode, and it is always in sketch write mode without running the previous program on the board.

To return from bootloader mode to normal mode, upload a sketch or reset it twice quickly again.

If you enter bootloader mode when the Seeed Studio XIAO SAMD21 is not recognized as a USB device by the PC, the LED will blink rapidly.

## LCD

Just like the original Arduino, select Basics> Blink from the sample sketch and upload.

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

Contrary to the original Arduino, it is turned on at LOW and turned off at HIGH.

### Two Blinkable Built-in LEDs

The official website describes two other built-in LEDs as `two LEDs for serial port downloading`. However, looking at the schematic, there is no physical pin connected to these RX and TX LEDs.

If you look at [USBCore.cpp](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/1.7.2/cores/arduino/USB/USBCore.cpp#L622-L627) here, you can see that they are turned on by `digitalWrite` every time serial USB transmission / reception occurs, which means that the two LEDs are are programmable.

```cpp
uint32_t USBDeviceClass::recv(uint32_t ep, void *_data, uint32_t len)
{
    if (!_usbConfiguration)
        return -1;

#ifdef PIN_LED_RXL
    if (rxLEDPulse == 0)
        digitalWrite(PIN_LED_RXL, LOW);

    rxLEDPulse = TX_RX_LED_PULSE_MS;
#endif
```

The specific pin numbers are `variant.h / variant.cpp` like SAMD Arduino, and in case of Seeeduino XIAO, they are assigned to 11 and 12 as follows.

```cpp
#define PIN_LED_13  (13u)
#define PIN_LED     PIN_LED_13
#define LED_BUILTIN PIN_LED

#define PIN_LED_RXL          (12u)
#define PIN_LED_TXL          (11u)
#define PIN_LED2             PIN_LED_RXL
#define PIN_LED3             PIN_LED_TXL
```

Below is a sketch of blinking three LEDs. The LEDs for RX and TX are blue.

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(PIN_LED2, OUTPUT);
  pinMode(PIN_LED3, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  digitalWrite(PIN_LED2, HIGH);
  digitalWrite(PIN_LED3, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  digitalWrite(PIN_LED2, LOW);
  digitalWrite(PIN_LED3, LOW);
  delay(1000);
}
```

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0" alt="pir" width={600} height="auto" /></p>

## Interface

### Serial over USB CDC

Unlike the ATmega type Arduino, the actual state of serial communication of Seeed Studio XIAO SAMD21 is USB CDC. In other words, it can perform faster than normal serial communication.

Therefore, specifying the baud rate by `Serial.begin (speed)` does not make sense, but except for that, it can be used as normal serial.

### Measuring Speed

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9" alt="pir" width={600} height="auto" /></p>

I used [this sketch](https://gist.github.com/nanase/6cc57e14a572196baefd893ade67d32e) to measure the transfer speed from Seeed Studio XIAO SAMD21 to PC, and the transfer rate from the PC to Seeed Studio XIAO SAMD21 should be the same.

The horizontal axis is the buffer size(send at once using `Serial.write (buf, len)`).
If you send 1 byte at a time, you will only get 0.11 Mbps (14.53 KB / s), but if you send 64 bytes, it will be significantly faster at 6.30 Mbps (805.86 KB / s). You can infer that the size of the internal buffer is 64 bytes.

As mentioned above, the LED blinks in serial communication, but there was almost no decrease in speed due to this.

### SPI (MicroSD Card)

Seeed Studio XIAO SAMD21 has a logic level of 3.3V. In other words, microSD card can be handled via SPI without a level shifter.
Some function of SPI is different from that of ATmega type Arduino, please check [here](https://qiita.com/nanase/items/406a8a848d1b259d3af4) for more information.

Here we will read the microSD card using Akizuki Denshi's [micro SD card slot DIP kit](http://akizukidenshi.com/catalog/g/gK-05488/).

We use the Arduino sample code here, but the parameter of `SD.begin (cs_pin)` is specified as `SS`. According to variant.h, SS = 4, which is the same as D4 / A4 / SDA pins. Of course, you can specify other pins.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd" alt="pir" width={600} height="auto" /></p>

```cpp
#include <SPI.h>
#include <SD.h>

File myFile;

void setup() {
  Serial.begin(9600);
  while (!Serial) ;

  Serial.print("Initializing SD card... ");

  if (!SD.begin(SS)) { // <-------------------------------- SS = D4/A4/SDA pin
    Serial.println("initialization failed!");
    while (1) ;
  }
  Serial.println("initialization done.");

  myFile = SD.open("test.txt", FILE_WRITE);

  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");

    myFile.close();
    Serial.println("done.");
  }
  else
    Serial.println("error opening test.txt");

  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    while (myFile.available())
      Serial.write(myFile.read());

    myFile.close();
  }
  else
    Serial.println("error opening test.txt");
}

void loop() { }
```

Result:

```
Initializing SD card...initialization done.
Writing to test.txt...done.
test.txt:
testing 1, 2, 3.
```

### I2C

I2C is also available. 3.3V devices can be directly connected without a level shifter.

This time, we used BME280 to measure temperature and humidity and atmospheric pressure. The BME280 operates at 3.3V, so it can be connected without a level shifter. Check [here](https://qiita.com/nanase/items/f34e03c29410add9c4d0) for detailed instrcution of the connection between Arduino and BME280.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c" alt="pir" width={600} height="auto" /></p>

```cpp
#include <Wire.h>
#include "SparkFunBME280.h"

BME280 sensor;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  sensor.beginI2C(); // Wire を用いて I2C 接続開始
}

void loop() {
  Serial.print("Temp: ");
  Serial.print(sensor.readTempC(), 2);

  Serial.print(" °C, Humidity: ");
  Serial.print(sensor.readFloatHumidity(), 2);

  Serial.print(" %, Pressure: ");
  Serial.print(sensor.readFloatPressure() / 100.0, 1);
  Serial.println(" hPa");

  delay(5000);
}
```

Result:

```
Temp: 22.05 °C, Humidity: 44.99 %, Pressure: 1009.0 hPa
Temp: 22.05 °C, Humidity: 44.72 %, Pressure: 1008.9 hPa
Temp: 22.06 °C, Humidity: 44.81 %, Pressure: 1008.9 hPa
```

## UART

As mentioned earlier, the physical UART pins are different from those on the USB CDC. `Serial1` is used for serial communication using the TX and RX pins.

This time, we connect Seeed Studio XIAO SAMD21 to the GPS receiver kit and get NMEA information from the PC. It is a very simple job when using Xiao, which is just a bridge between gps kit and pc serial.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a" alt="pir" width={600} height="auto" /></p>

```cpp
void setup() {
  Serial.begin(9600);
  Serial1.begin(9600);
}

void loop() {
  if (Serial.available()) {
    char c = (char)Serial.read();
    Serial1.write(c);
  }

  if (Serial1.available()) {
    char c = (char)Serial1.read();
    Serial.write(c);
  }
}
```

This time we use GPSFox to browse NMEA information. The coordinates can be measured easily.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308" alt="pir" width={600} height="auto" /></p>

## Others

### DMA

As one of the features of SAMD type Arduino, you can use DMA on Xiao. Check [here](https://qiita.com/nanase/items/406a8a848d1b259d3af4#dma) for more information about DMA.

### Single Cycle IOBUS

Cortex M0+ has a function called [Single Cycle IOBUS](https://microchipdeveloper.com/32arm:samd21-iobus-overview) that can operate GPIO output in one clock cycle. Writing to a specific register can invert the logic, disable the pin, or change the pin drive current.

### DigitalWrite

You can use digitalWrite to create a pulse, which is a method that works with any Arduino board - just repeating the overhead.

```cpp
void setup() {
  pinMode(PIN_A7, OUTPUT);
}

#define P                     \
  digitalWrite(PIN_A7, HIGH); \
  digitalWrite(PIN_A7, LOW);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

### Use Registers

You can also create a pulse by directly operating the register without using `digitalWrite`.

```cpp
void setup() {
  pinMode(PIN_A7, OUTPUT);
}

#define P                                                             \
  digitalPinToPort(PIN_A7)->OUTSET.reg = digitalPinToBitMask(PIN_A7); \
  digitalPinToPort(PIN_A7)->OUTCLR.reg = digitalPinToBitMask(PIN_A7);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

### Use Single Cycle IOBUS

We use `IOBUS.h` introduced [here](https://lab.sasapea.mydns.jp/2020/03/16/seeeduino-xiao/).

```cpp
#include "IOBUS.h"

#define digitalPinToIOPin(P) ((g_APinDescription[P].ulPort << 5) + g_APinDescription[P].ulPin)
#define PIN_NUM digitalPinToIOPin(PIN_A7)

void setup() {
  IOBUS::pinMode(PIN_NUM, OUTPUT, true);
}

#define P IOBUS::toggleOutput(PIN_NUM);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

|  | DigitalWrite | Registers | Single Cycle IOBUS |
| --- | --- | --- | --- |
| Waveform |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a269f4e-5bd0-8eb4-127e-14b8d239a6a3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=7099c88e5d117efd215ba24fefa7448b" alt="pir" width={600} height="auto" /></p> |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F84a04db3-c854-8862-d253-6ff8fc94aa8f.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d20b7a169be510b3f73e0bea1c97f2bf" alt="pir" width={600} height="auto" /></p>|<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F4358d74f-285c-6d16-1cc3-809946c42125.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d2e46ad06befc79f8b897fc538f1de89" alt="pir" width={600} height="auto" /></p> |
| frequency | 333 kHz | 6 MHz | 24 MHz |
| Number of clock cycles needed to create a pulse | 144 | 8 | 2 |

The logic can be certainly reversed in one cycle (48MHz).

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
