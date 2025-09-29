---
title: Pin Multiplexing with Seeed Studio XIAO MG24
description: Pin multiplexing with Seeed Studio XIAO MG24(Sense).
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/2.webp
slug: /xiao_mg24_pin_multiplexing
keywords:
  - XIAO
  - MG24
last_update:
  date: 11/6/2024 
  author: Jason
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/top.png" style={{width:700, height:'auto'}}/></div>

***The XIAO MG24*** features up to ***22 regular pins***, ***18 analog pins***, ***18 digital pins***, ***2 SPI***, ***2 UART***, ***2 I2C***, and supports ***all PWM***. It offers a rich variety of pins available for our use. In this wiki, I will teach you how to drive these pins, enabling us to utilize them effectively 😀!

## Digital

### Hardware Preparation

<table align="center">
  <tr>
      <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Relay</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

Please install XIAO MG24(Sense) onto the expansion board, and connect the relay to the **A0/D0** interface of the expansion board via a Grove cable. Finally, connect XIAO to the computer via a USB-C cable.

### Software Implementation

In this example, we will implement control of a relay's on/off state using a button connected to the XIAO expansion board. When the button is pressed, the relay turns on, and when the button is released, the relay turns off.

```c
const int buttonPin = D1;     // the number of the pushbutton pin
int buttonState = 0;          // variable for reading the pushbutton status
const int relayPin = D0;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
  } else {
    // turn Relay off:
    digitalWrite(relayPin, LOW);
  }
}
```

### Result graph

If everything goes smoothly, after uploading the program, you should see the following effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/2.gif" style={{width:500, height:'auto'}}/></div>

## Digital as PWM

All GPIO pins on XIAO MG24(Sense) support PWM output. Therefore, you can use any pin to output PWM to adjust the brightness of lights, control servos, and other functions.

### Hardware Preparation

<table align="center">
 <tr>
     <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

:::tip
Please install XIAO MG24(Sense) onto the expansion board, then connect the Variable Color LED to the A0/D0 interface of the expansion board using a Grove cable. Finally, connect XIAO to your computer via USB-C cable.
:::

### Software Implementation

In this example, we will demonstrate how to use PWM output to control the brightness of a light.

```cpp
int LED_pin = D0;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

### Result graph

If the program runs successfully, you will see the following running effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/5.gif" style={{width:500, height:'auto'}}/></div>

## Analog

XIAO MG24(Sense) Development Board  have to 12 bit ADC for high-resolution reading of analog sensor values , it can help us to read more accurate values.

Next , We will choose two sensors to reflect the characteristics of ADC .

### Hadware Preparation

<table align="center">
 <tr>
     <th>Seeed Studio XIAO MG24 Sense</th>
         <th>Grove-Variable Color LED</th>
     <th>Grove-Rotary Angle Sensor </th>
     <th>Seeed Studio Grove Base for XIAO </th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Implementation

<Tabs>
  <TabItem value="Without DMA" label="analogRead Without DMA" default>

``` cpp
const int analogInPin = D1;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 9;  // Analog output pin that the LED is attached to

int sensorValue = 0;  // value read from the pot
int outputValue = 0;  // value output to the PWM (analog out)

void setup() {
  Serial.begin(115200);
}

void loop() {
  sensorValue = analogRead(analogInPin);
  outputValue = map(sensorValue, 0, 4095, 0, 255);
  analogWrite(analogOutPin, outputValue);

  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);
  delay(100);
}
```

  </TabItem>
  <TabItem value="With DMA" label="analogRead With DMA">

``` cpp
#define ANALOG_VALUE_MIN 0     // Define the minimum analog value
#define ANALOG_VALUE_MAX 4095  // Define the maximum analog value for 12-bit ADC
#define NUM_SAMPLES 128        // Define the number of samples to collect each time

const int analogInPin = D1;            // Analog input pin that the potentiometer is attached to
const int analogOutPin = LED_BUILTIN;  // Analog output pin that the LED is attached to

// Buffers for storing samples
uint32_t analog_buffer[NUM_SAMPLES];        // Global buffer to store sampled values
uint32_t analog_buffer_local[NUM_SAMPLES];  // Local buffer to store sampled values for calculations

volatile bool data_ready_flag = false;  // Data ready flag indicating new sample data is available

void analog_samples_ready_cb();                         // Callback function called when samples are ready
void calculate_and_display_analog_level();              // Function to calculate and display the analog level
float getAverage(uint32_t *buffer, uint32_t buf_size);  // Function to compute the average of the given buffer

void setup() {
  Serial.begin(115200);
  pinMode(analogOutPin, OUTPUT);

  // Start DMA sampling, storing samples in analog_buffer, with callback on completion
  analogReadDMA(analogInPin, analog_buffer, NUM_SAMPLES, analog_samples_ready_cb);
  Serial.println("Sampling started...");
}

void loop() {
  // If data is ready, process it
  if (data_ready_flag) {
    data_ready_flag = false;
    calculate_and_display_analog_level();
  }
}

void analog_samples_ready_cb() {
  // Copy data to the local buffer in order to prevent it from overwriting
  memcpy(analog_buffer_local, analog_buffer, NUM_SAMPLES * sizeof(uint32_t));
  data_ready_flag = true;
}

void calculate_and_display_analog_level() {
  // Rolling average for smoothing the analog level
  static uint32_t rolling_average = 0u;

  // Stop sampling in order to prevent overwriting the current data
  ADC.scan_stop();

  // Get the average of the sampled values
  uint32_t analog_level = (uint32_t)getAverage(analog_buffer_local, NUM_SAMPLES);
  // Adjust the analog level
  analog_level = constrain(analog_level, ANALOG_VALUE_MIN, ANALOG_VALUE_MAX);
  // Calculate the rolling average
  rolling_average = (analog_level + rolling_average) / 2;

  // Map the current average level to brightness
  int brightness = map(rolling_average, ANALOG_VALUE_MIN, ANALOG_VALUE_MAX, 0, 255);
  if (LED_BUILTIN_ACTIVE == LOW) {
    analogWrite(analogOutPin, 255 - brightness);
  } else {
    analogWrite(analogOutPin, brightness);
  }
  // Print the average analog level and brightness output
  Serial.print("sensor = ");
  Serial.print(rolling_average);
  Serial.print("\t output = ");
  Serial.println(brightness);

  // Restart sampling
  analogReadDMA(analogInPin, analog_buffer, NUM_SAMPLES, analog_samples_ready_cb);
}

// Gets the average value of the provided samples
float getAverage(uint32_t *buffer, uint32_t buf_size) {
  if (!buffer) {
    return 0.0f;
  }

  float sum = 0.0f;
  for (uint32_t i = 0u; i < buf_size; i++) {
    sum += buffer[i];
  }
  return sum / buf_size;
}
```

  </TabItem>
</Tabs>

:::tip
It should be noted that if you want to use DMA to read analog signals, your library version needs to be greater than 2.2.0. Currently, the new version has not been approved and you need to manually install it.
:::

### Result graph

If everything goes smoothly, after uploading the program, you should see the following effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/4.gif" style={{width:500, height:'auto'}}/></div>

## UART

When working with Arduino IDE, Serial communication is an essential part of many projects. To use Serial in Arduino IDE, you need to start by opening the Serial Monitor window. This can be done by clicking on the **Serial Monitor** icon in the toolbar or by pressing the **Ctrl+Shift+M** shortcut key.

### General Serial Usage

Some of the commonly used Serial functions include:

- `Serial.begin()` -- which initializes the communication at a specified baud rate;
- `Serial.print()` -- which sends data to the Serial port in a readable format;
- `Serial.write()` -- which sends binary data to the Serial port;
- `Serial.available()` -- which checks if there is any data available to be read from the Serial port;
- `Serial.read()` -- which reads a single byte of data from the Serial port;
- `Serial.flush()` -- which waits for the transmission of outgoing serial data to complete.

By using these Serial functions, you can send and receive data between the Arduino board and your computer, which opens up many possibilities for creating interactive projects.

Here is an example program:

```c
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // send data to the serial port
  Serial.println("Hello World!");

  // read data from the serial port
  if (Serial.available() > 0) {
    // read the incoming byte:
    char incomingByte = Serial.read();
    // print the incoming byte to the serial monitor:
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }
  
  // wait for a second before repeating the loop
  delay(1000);
}
```

### Usage of Serial1

According to the above XIAO MG24(Sense) Pin diagrams for specific parameters, we can observe that there are TX pin and RX pin.
This is different from serial communication, but the usage is also very similar, except that a few parameters need to be added.
So next, we will use the pins led out by the chip for serial communication.

```c
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

## I2C

XIAO MG24(Sense) has an I2C interface that can be used for data transmission and parsing of many sensors, as well as for using some OLED screens.

### Harware Preparation

<table align="center">
 <tr>
     <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

The OLED display on the XIAO expansion board uses the I2C protocol and is connected to the XIAO's I2C interface through the I2C circuit on the board. Therefore, we can directly plug the XIAO into the expansion board and program it to display content on the screen.

### Software Implementation

This example introduces how to use the OLED display on the Seeed Studio Expansion Base for XIAO MG24(Sense).

***Step 1. Install the Seeed Studio XIAO MG24(Sense) on the Expansion board then conect the Type-C cable.***

***Step 2. Install the u8g2 library.***

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

***Step 3. Copy the code and stick on the Ardiono IDE then upload it.***

- Download the zip file below

📄 **[ZIP]** [smiley_face Header](https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/smiley_face.zip)

- Create a header file named "smiley_face. h" and copy the contents of the downloaded zip file into the header file you created

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/8.png" style={{width:800, height:'auto'}}/></div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>
#include "smiley_face.h" 

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);

int xx = 20; 
int yy = 10; 

void setup() {
    u8g2.begin();
}

void loop() {
    smeil_display();
    delay(500); 
}

void smeil_display() {
    const unsigned char* smileImages[] = {
        semil1, semil2, semil3, semil4, semil5,
        semil6, semil7, semil8, semil9, semil10,
        semil11, semil12, semil13, semil14, semil15,
        semil16, semil17, semil18, semil19, semil20,
        semil21, semil22, semil23, semil24, semil25,
        semil26, semil27
    };

    int delays[] = {
        40, 50, 40, 40, 40,
        40, 40, 50, 40, 40,
        40, 40, 40, 50, 40,
        40, 50, 40, 40, 50,
        40, 50, 40, 40, 50,
        50, 50, 40, 50
    };

    for (int i = 0; i < sizeof(smileImages) / sizeof(smileImages[0]); i++) {
        u8g2.firstPage();
        do {
            u8g2.drawXBMP(xx, yy, 48, 48, smileImages[i]); 
        } while (u8g2.nextPage());
        delay(delays[i]); 
    }
}
```

### Result graph

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/7.gif" style={{width:500, height:'auto'}}/></div>

## SPI

The XIAO MG24(Sense) chip integrates multiple peripherals, including an SPI interface that can be used to connect external SPI devices such as flash memory, displays, sensors, and more.

### Arduino Library Overview

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_ST7789V2_LCD_Display/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Based on the Arduino example program provided by **Waveshare**, we have written an Arduino library for use with the entire XIAO series, and you can go straight to the Github for this library via the button below.

### Hadware Preparation

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO MG24 Sense</th>
   <th>1.69-inch LCD SPI Display</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Pin Connect

After preparing the hardware as mentioned above, use jumper wires to connect the SPI interface of the XIAO and OLED. Please refer to the following diagram for the wiring method.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/3.png" style={{width:700, height:'auto'}}/></div>

### Installation

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### Software Implementation

After downloading and installing the library correctly, you can find two example programs named **helloworld.ino** and **bgcolor.ino** in the examples folder. The bgcolor.ino is an example to show the background color, we set the red as default. And the helloworld.ino is an to show the animation about our company logo, and this example contains the effect which the bgcolor example have.

```cpp
#include <st7789v2.h>
#include "SPI.h"
#include "seeed.h"

st7789v2 Display;

void setup() {
  // put your setup code here, to run once:
  Display.SetRotate(270);
  Display.Init();
  Display.SetBacklight(100);
  Display.Clear(WHITE);
}

void loop() {
  // put your main code here, to run repeatedly:
//  Display.SetPixel(100, 100, RED);
//  Display.DrawPoint(50, 50, YELLOW, DOT_PIXEL_8X8, DOT_FILL_AROUND);

  Display.DrawImage(gImage_seeed, 20, 90, 240, 47);

  Display.DrawLine(15, 65, 65, 65, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(15, 70, 80, 70, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawRectangle(15, 80, 265, 150, GRAY, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  
  Display.DrawCircle(10, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(10, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawLine(200, 160, 265, 160, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(215, 165, 265, 165, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawString_EN(20, 180, "By: Jason", &Font20, WHITE, BLACK);
//  Display.DrawNum(100, 220, 123456, &Font24, RED, BRED);
  Display.DrawFloatNum(100, 210, 1.00, 2, &Font16, WHITE, BLACK);
}
```

You will find Seeed Studio logo printed on the display dynamically.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/1.gif"style={{width:500, height:'auto'}}/></div>

## Finish up

You have learned the basic functions of the XIAO MG24 (Sense) pins. Now, let's further explore the built-in sensors.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
