---
description: Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)
title: Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)

Seeed Studio XIAO nRF52840 (Sense) has rich interfaces. There are **11 digital I/O** that can be used as **PWM pins** and **6 analog inputs** that can be used as **ADC pins**. It supports all three common serial communication interfaces such as **UART, I2C, and SPI**. This wiki will be helpful to learn about these interfaces and implement them in your next projects!

> The basic functions here perform both well for both Seeed Studio XIAO nRF52840 Arduino libraries.

## Digital

Connect a pushbutton to Pin D6 and an LED to Pin D10. Then upload the following code to control the ON/OFF of LED using the pushbutton.

```c++
const int buttonPin = 6;     // pushbutton connected to digital pin 6
const int ledPin =  10;      // LED connected to digital pin 10
 
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
    // turn LED off:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED on:
    digitalWrite(ledPin, LOW);
  }
}
```

## Digital as PWM

Connect an LED to Pin D10. Then upload the following code to see the LED gradually fading.

```cpp
int ledPin = 10;    // LED connected to digital pin 10

void setup() {

}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

## Analog

Connect a potentiometer to Pin A5 and an LED to Pin D10. Then upload the following code to control the blinking interval of the LED by rotating the potentiometer knob.

```c++
const int sensorPin = 5;
const int ledPin =  10; 
void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  // read the value from the sensor:
  int sensorValue = analogRead(sensorPin);
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

## Serial

Use pin D6 as the TX pin of UART and pin D7 as RX pin of UART to send the "Hello World!" message

```c++
void setup() {
    Serial.begin(115200);
    while (!Serial);
}
 
void loop() {
    Serial.println("Hello World!");
    delay(1000);
}
```

## I2C

- **Step 1.** Connect a [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) to the Seeed Studio XIAO nRF52840 (Sense) by following the hardware connection as follows.

|  Grove - OLED Display 1.12 (SH1107) |  Seeed Studio XIAO nRF52840 (Sense) |
|-----------|-----------|
| GND       | GND       |
| VCC       | 5V        |
| SDA       | SDA       | 
| SCL       | SCL       |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png" alt="pir" width={1000} height="auto" /></p>


- **Step 2.** Open Arduino IDE, navigate to `Sketch > Include Library > Manage Libraries...`

- **Step 3.** Search for **u8g2** and install it

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>


- **Step 4.** Upload the following code to display text strings on the OLED Display

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();
 
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

## SPI

- **Step 1.** Connect a [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) to the Seeed Studio XIAO nRF52840 (Sense) by following the hardware connection as follows.

| Grove - OLED Display 1.12 (SH1107) | Seeed Studio XIAO nRF52840 (Sense) |
|-----------|------------|
| GND        | GND       |
| 5V         | 5V        |
| SCL        | SCK       | 
| SI         | MOSI      |
| RES        | D3        |
| D/C        | D4        |
| CS         | D5        |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-SPI.png" alt="pir" width={1000} height="auto" /></p>


- **Step 2.** This OLED display supports both I2C and SPI communication, and the default model is I2C. To use SPI mode, you need to refer [Grove - OLED Display 1.12 (SH1107) V3.0 wiki](https://wiki.seeedstudio.com/Grove-OLED-Display-1.12-SH1107_V3.0/#software-i2c) to change the OLED display communication to SPI before proceeding further

**Note:** Make sure U8g2 library is installed from the previous steps.

- **Step 3.** Upload the following code to display text strings on the OLED Display

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 5, /* dc=*/ 4, /* reset=*/ 3);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();
 
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```