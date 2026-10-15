---
description: Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)
title: Pin Multiplexing for both versions
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/XIAO-BLE-Sense-Pin-Multiplexing/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)

Seeed Studio XIAO nRF52840 (Sense) has rich interfaces. There are **11 digital I/O** that can be used as **PWM pins** and **6 analog inputs** that can be used as **ADC pins**. It supports all three common serial communication interfaces such as **UART, I2C, and SPI**. This wiki will be helpful to learn about these interfaces and implement them in your next projects!

> The basic functions here perform both well for both Seeed Studio XIAO nRF52840 Arduino libraries.

## Hardware overview

<Tabs>
<TabItem value="nRF52840" label="XIAO nRF52840" default>

### XIAO nRF52840 Front

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Back

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Pin Map**

| XIAO Pin                 | Function         | Chip Pin      | Description                                          | Arduino Name |
| :---------------------: | :-------------: | :-------:     | :-------------------------------------------------- | :-------:    |
| 5V                      | VBUS             |               | Power Input/Output                                   |              |
| GND                     |                  |               |                                                      |              |
| 3V3                     | 3V3_OUT          |               | Power Output                                         |              |
| D0                      | Analog           | P0.02         | GPIO, AIN0                                           | 0            |
| D1                      | Analog           | P0.03         | GPIO, AIN1                                           | 1            |
| D2                      | Analog           | P0.28         | GPIO, AIN4                                           | 2            |
| D3                      | Analog           | P0.29         | GPIO, AIN5                                           | 3            |
| D4                      | Analog, SDA      | P0.04         | GPIO, I2C Data, AIN2                                 | 4            |
| D5                      | Analog, SCL      | P0.05         | GPIO, I2C Clock, AIN3                                | 5            |
| D6                      | TX               | P1.11         | GPIO, UART Transmit                                  | 7/6          |
| D7                      | RX               | P1.12         | GPIO, UART Receive                                   | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO, SPI Clock                                      | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO, SPI Data                                       | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO, SPI Data                                       | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                  |              |
| NFC2                    |                  | P0.10         | NFC                                                  |              |
| Reset                   |                  | P0.18         | RESET                                                |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | Enable control for battery voltage reading           |              |
| RF Switch Port Select   |                  | P2.05         | Switch onboard antenna                               |              |
| RF Switch Power         |                  | P2.03         | Power                                                |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                          |              |
| USER_LED_R              |                  | P0.26         | User-controlled red RGB LED pin                      | 11           |
| USER_LED_B              |                  | P0.06         | User-controlled blue RGB LED pin                     | 13/12        |
| USER_LED_G              |                  | P0.30         | User-controlled green RGB LED pin                    | 12/13        |

</TabItem>
<TabItem value="nRF52840Plus" label="XIAO nRF52840 Plus">

### XIAO nRF52840 Plus Front

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Plus Back

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Pin Map**

| XIAO Pin                 | Function             | Chip Pin  | Alternate Functions | Description                              | Arduino Name |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | Power Input/Output                       |              |
| GND                     |                      |           |                    |                                          |              |
| 3V3                     | 3V3_OUT              |           |                    | Power Output                             |              |
| D0                      | Analog              | P0.02     |                    | GPIO, ADC                                | 0            |
| D1                      | Analog              | P0.03     |                    | GPIO, ADC                                | 1            |
| D2                      | Analog              | P0.28     |                    | GPIO, ADC                                | 2            |
| D3                      | Analog              | P0.29     |                    | GPIO, ADC                                | 3            |
| D4                      | Analog, SDA          | P0.04     |                    | GPIO, I2C Data, ADC                      | 4            |
| D5                      | Analog, SCL          | P0.05     |                    | GPIO, I2C Clock, ADC                     | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO, UART Transmit                      | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO, UART Receive                       | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO, SPI Clock                          | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO, SPI Data                           | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO, SPI Data                           | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO, I2S, ADC                           |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO, I2S, ADC                           |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO, I2S, ADC                           |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO, UART Receive, ADC                  |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO, UART Transmit, ADC                 |              |
| D16                     | AIN7_BAT             | P0.31     |                    | Battery voltage ADC read pin             |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO, SPI                                |              |
| D18                     | MISO1                | P1.05     |                    | GPIO, SPI                                |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO, SPI                                |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | Enable control for battery voltage reading |              |
| Reset                   |                      | P0.18     |                    | RESET                                    |              |
| RF Switch Port Select   |                      | P2.05     |                    | Switch onboard antenna                   |              |
| RF Switch Power         |                      | P2.03     |                    | Power                                    |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |              |
| USER_LED_R              |                      | P0.26     |                    | User-controlled red RGB LED pin          | 11           |
| USER_LED_B              |                      | P0.06     |                    | User-controlled blue RGB LED pin         | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | User-controlled green RGB LED pin        | 12/13        |

</TabItem>
<TabItem value="nRF52840Sense" label="XIAO nRF52840 Sense">

### XIAO nRF52840 Sense Front

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Sense Back

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Pin Map**

| XIAO Pin                 | Function         | Chip Pin      | Description                                          | Arduino Name |
| :---------------------: | :-------------: | :-------:     | :-------------------------------------------------- | :-------:    |
| 5V                      | VBUS             |               | Power Input/Output                                   |              |
| GND                     |                  |               |                                                      |              |
| 3V3                     | 3V3_OUT          |               | Power Output                                         |              |
| D0                      | Analog           | P0.02         | GPIO, AIN0                                           | 0            |
| D1                      | Analog           | P0.03         | GPIO, AIN1                                           | 1            |
| D2                      | Analog           | P0.28         | GPIO, AIN4                                           | 2            |
| D3                      | Analog           | P0.29         | GPIO, AIN5                                           | 3            |
| D4                      | Analog, SDA      | P0.04         | GPIO, I2C Data, AIN2                                 | 4            |
| D5                      | Analog, SCL      | P0.05         | GPIO, I2C Clock, AIN3                                | 5            |
| D6                      | TX               | P1.11         | GPIO, UART Transmit                                  | 7/6          |
| D7                      | RX               | P1.12         | GPIO, UART Receive                                   | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO, SPI Clock                                      | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO, SPI Data                                       | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO, SPI Data                                       | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                  |              |
| NFC2                    |                  | P0.10         | NFC                                                  |              |
| Reset                   |                  | P0.18         | RESET                                                |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | Enable control for battery voltage reading           |              |
| 6 DOF IMU_PWR           |                  | P1.08         | Power switch of the 6D module                        |              |
| 6 DOF IMU__INT1         |                  | P0.11         | Interrupt signal pin of the 6D module                |              |
| PDM Microphone_DATA     |                  | P0.16         | PDM audio data input pin                             |              |
| PDM Microphone_CLK      |                  | P1.00         | PDM audio clock output pin                           |              |
| RF Switch Port Select   |                  | P2.05         | Switch onboard antenna                               |              |
| RF Switch Power         |                  | P2.03         | Power                                                |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                          |              |
| USER_LED_R              |                  | P0.26         | User-controlled red RGB LED pin                      | 11           |
| USER_LED_B              |                  | P0.06         | User-controlled blue RGB LED pin                     | 13/12        |
| USER_LED_G              |                  | P0.30         | User-controlled green RGB LED pin                    | 12/13        |

</TabItem>
<TabItem value="nRF52840SensePlus" label="XIAO nRF52840 Sense Plus">

### XIAO nRF52840 Sense Plus Front

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Sense Plus Back

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Pin Map**

| XIAO Pin                 | Function             | Chip Pin  | Alternate Functions | Description                              | Arduino Name |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | Power Input/Output                       |              |
| GND                     |                      |           |                    |                                          |              |
| 3V3                     | 3V3_OUT              |           |                    | Power Output                             |              |
| D0                      | Analog              | P0.02     |                    | GPIO, ADC                                | 0            |
| D1                      | Analog              | P0.03     |                    | GPIO, ADC                                | 1            |
| D2                      | Analog              | P0.28     |                    | GPIO, ADC                                | 2            |
| D3                      | Analog              | P0.29     |                    | GPIO, ADC                                | 3            |
| D4                      | Analog, SDA          | P0.04     |                    | GPIO, I2C Data, ADC                      | 4            |
| D5                      | Analog, SCL          | P0.05     |                    | GPIO, I2C Clock, ADC                     | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO, UART Transmit                      | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO, UART Receive                       | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO, SPI Clock                          | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO, SPI Data                           | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO, SPI Data                           | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO, I2S, ADC                           |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO, I2S, ADC                           |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO, I2S, ADC                           |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO, UART Receive, ADC                  |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO, UART Transmit, ADC                 |              |
| D16                     | AIN7_BAT             | P0.31     |                    | Battery voltage ADC read pin             |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO, SPI                                |              |
| D18                     | MISO1                | P1.05     |                    | GPIO, SPI                                |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO, SPI                                |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | Enable control for battery voltage reading |              |
| 6 DOF IMU_PWR           |                      | P1.08     |                    | Power switch of the 6D module            |              |
| 6 DOF IMU__INT1         |                      | P0.11     |                    | Interrupt signal pin of the 6D module    |              |
| PDM Microphone_DATA     |                      | P0.16     |                    | PDM audio data input pin                 |              |
| PDM Microphone_CLK      |                      | P1.00     |                    | PDM audio clock output pin               |              |
| Reset                   |                      | P0.18     |                    | RESET                                    |              |
| RF Switch Port Select   |                      | P2.05     |                    | Switch onboard antenna                   |              |
| RF Switch Power         |                      | P2.03     |                    | Power                                    |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |              |
| USER_LED_R              |                      | P0.26     |                    | User-controlled red RGB LED pin          | 11           |
| USER_LED_B              |                      | P0.06     |                    | User-controlled blue RGB LED pin         | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | User-controlled green RGB LED pin        | 12/13        |

</TabItem>
</Tabs>

## Digital

Connect a pushbutton to Pin D6 and an LED to Pin D10. Then upload the following code to control the ON/OFF of LED using the pushbutton.

```cpp
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

```cpp
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

Use Serial1 to use the UART via GPIO instead of USB. You can use both concurrently as well.
Use pin D6 as the TX pin of UART and pin D7 as RX pin of UART to send the "Hello World!" message.

```cpp
void setup() {
    Serial1.begin(115200);
    while (!Serial1);
}
 
void loop() {
    Serial1.println("Hello World!");
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
 
U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ 5, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);
 
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
