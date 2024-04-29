---
description: Pin multiplexing with Seeed Studio XIAO ESP32C6.
title: Pin Multiplexing With Seeed Studio XIAO ESP32C6
keywords:
  - esp32c6
  - xiao
  - pin multiple
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg
slug: /xiao_pin_multiplexing_esp33c6
sidebar_position: 2
last_update:
  date: 04/10/2024
  author: Spencer
---

# Arduino Programming with Seeed Studio XIAO ESP32C6

<div class="table-center">
	<table>
		<tr>
			<th>Seeed Studio XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        ">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

The Seeed Studio XIAO ESP32C6 is powered by the highly-integrated [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6), built on **two 32-bit RISC-V processors**, with a high-performance (HP) processor with **running up to 160 MHz**, and a low-power (LP) 32-bit RISC-V processor, which can be clocked up to 20 MHz. There are **512KB SRAM and 4 MB Flash on the chip**, allowing for more programming space, and binging more possibilities to the IoT control scenarios. 

## Getting Started

### Pinout Overview

Before we begin, let's review all the pins that the XIAO ESP32C6 has and its functions with the following schematic.

<table align="center">
	<tr>
	    <th>XIAO ESP32C6/XIAO ESP32C6 indication diagram</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32C6/XIAO ESP32C6 Sense Pin List</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>


- 5V - This is 5v out from the USB port. You can also use this as a voltage input but you must have some sort of diode (schottky, signal, power) between your external power source and this pin with anode to battery, cathode to 5V pin.
- 3V3 - This is the regulated output from the onboard regulator. You can draw 700mA
- GND - Power/data/signal ground <!-- Need to be confirmed -->

## Serial

The XIAO ESP32C6 has a hardware UART for serial communication.

### Hardware Preparation

1. Connect the **TX pin** of an *external device* to the RX pin (`D7`) of the XIAO.
2. Connect the **RX pin** of the *external device* to the TX pin (`D6`) of the XIAO.

### Code

Here's an Arduino sketch demonstrating serial communication:

#### Software Serial

You'll need to install [EspSoftwareSerial](https://github.com/plerup/espsoftwareserial) to implement Arduino software serial.

```cpp
#include <SoftwareSerial.h>

// RX pin, TX pin
SoftwareSerial mySerial(D7, D6);

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600); // Baud rate for software serial
}

void loop() {
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received via software serial: ");
    Serial.println(data);
  }

  if (Serial.available()) {
    char data = Serial.read();
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

In this example, software serial communication is set up on pins 2 (RX) and 3 (TX) using a baud rate of 9600. The `loop` function checks for incoming data on both the hardware serial port (`Serial`) and the software serial port (`mySerial`), and echoes back the received data to the other port.

#### Hardware Serial

In the Arduino framework, the UART0 peripheral, which corresponds to pins D6/D7 at the hardware level, is referred to as Serial0.

```cpp
#include <HardwareSerial.h>
HardwareSerial mySerial(0); // Alias for UART0 (Serial0)

void setup() {
  Serial.begin(9600); // Initialize hardware serial (USB)
  mySerial.begin(9600); // Initialize UART0 (Serial0)
}

void loop() {
  if (Serial.available()) { // Check if data is available on USB serial
    char data = Serial.read();
    Serial.print("Received on USB: ");
    Serial.println(data);
  }
  
  if (mySerial.available()) { // Check if data is available on UART0 (Serial0)
    char data = mySerial.read();
    Serial.print("Received on UART0: ");
    Serial.println(data);
  }
}
```

This code demonstrates using the hardware serial port UART0 (referred to as Serial0 in the Arduino framework) for serial communication. It initializes both the USB serial port (`Serial`) and the UART0 serial port (`mySerial`) in the setup() function.

In the loop() function, it checks for incoming data on both serial ports. If data is available on the USB serial port (Serial), it reads the data and prints a message indicating it was received on USB. If data is available on the UART0 serial port (`mySerial`), it reads the data and prints a message indicating it was received on UART0.

## Digital I/O

The XIAO ESP32C6 has 12 GPIO pins that you can configure as input or output.

### Hardware Preparation

1. Connect an LED to pin `D10`, with a current-limiting resistor in series.
2. Connect a button to pin `D1`, with an external pull-up resistor (optional if using the internal pull-up resistor).

### Software Implementation

The GPIO API provides functions to configure and interact with the GPIO pins. Refer to the [GPIO API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/gpio.html) documentation for more details.

```cpp
const int buttonPin = D1; // Button pin
const int ledPin = D10; // LED pin

void setup() {
  pinMode(ledPin, OUTPUT); // Set LED pin as output
  pinMode(buttonPin, INPUT); // Set button pin as input
  // If not using an external pull-up resistor
  pinMode(buttonPin, INPUT_PULLUP); // Enable internal pull-up resistor
}

void loop() {
  int buttonState = digitalRead(buttonPin); // Read button state
  digitalWrite(ledPin, buttonState); // Write button state to LED
}
```

#### Interrupt Method

You can also use interrupts to handle button presses more efficiently.

```cpp
// Define the pin numbers for the button and LED
const int buttonPin = D1;
const int ledPin = D10;

// Define a structure to hold button-related data
struct Button {
    const uint8_t PIN; // Pin number for the button
    uint32_t numberKeyPresses; // Counter for the number of button presses
    bool pressed; // Flag to indicate if the button is currently pressed
};

// Create an instance of the Button structure for the button
Button my_button = {buttonPin, 0, false};

// Interrupt Service Routine (ISR) to handle button presses
void ARDUINO_ISR_ATTR isr(void* arg) {
    Button* s = static_cast<Button*>(arg); // Cast the argument to a Button pointer
    s->numberKeyPresses += 1; // Increment the number of button presses
    s->pressed = true; // Set the pressed flag
}

void setup() {
    Serial.begin(115200);
    pinMode(my_button.PIN, INPUT_PULLUP); // Set the button pin as input with internal pull-up resistor
    attachInterruptArg(my_button.PIN, isr, &my_button, FALLING); // Attach the ISR to the button pin, triggered on falling edge
}

void loop() {
    if (my_button.pressed) { // Check if the button is pressed
        Serial.printf("Button 1 has been pressed %lu times\n", my_button.numberKeyPresses); // Print the number of button presses
        my_button.pressed = false; // Reset the pressed flag
    }

    static uint32_t lastMillis = 0; // Variable to store the last time the interrupt was detached
    if (millis() - lastMillis > 10000) { // Check if 10 seconds have elapsed
        lastMillis = millis(); // Update the last detach time
        detachInterrupt(my_button.PIN); // Detach the interrupt from the button pin
    }
}
```

In this example, we use a `Button` structure to hold the button-related data, including the pin number, the number of key presses, and a flag to indicate if the button is currently pressed.

The `isr` function is an Interrupt Service Routine (ISR) that handles button presses. It increments the number of button presses and sets the pressed flag to true.

In the `setup` function, we initialize the serial communication, set the button pin as an input with an internal pull-up resistor, and attach the `isr` function to the button pin as an interrupt handler triggered on a falling edge (button press).

In the `loop` function, we check if the button is pressed. If it is, we print the number of button presses to the serial monitor and reset the pressed flag. Additionally, we include a section that detaches the interrupt from the button pin every 10 seconds, presumably to allow for other operations or to prevent unintended interrupts.
Okay, got it. Here is the rewritten and more comprehensible version:

## ADC - Analog to Digital Converter

The XIAO ESP32C6 has several analog input pins that allow reading analog voltages.

Refer to the [ADC API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/adc.html) documentation for more details.

### Hardware Setup

1. Connect a potentiometer to pin A0, with one end connected to 3.3V and the other to GND.

### Software Implementation

Here's an Arduino sketch that reads an analog value:

```cpp
const int analogPin = A0; 

void setup() {
  // Initialize serial communication at 115200 bits per second
  Serial.begin(115200);
  
  // Set the resolution to 12 bits (0-4095)
  analogReadResolution(12);
}

void loop() {
  // Read the analog value and millivolts for the analogPin
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);
  
  // Print the values to the Serial Monitor
  Serial.printf("ADC analog value = %d\n", analogValue);
  Serial.printf("ADC millivolts value = %d\n", analogVolts);
  
  delay(100); // Delay for clear reading from serial
}
```

This code reads the analog value from the specified pin and prints it, along with the millivolt value, to the Serial Monitor.

## PWM Signal / LED Control

The XIAO  ESP32-C6 has 6 LEDC channels that can generate independent waveforms, which can be used, for example, to drive RGB LED devices.

Refer to the [LEDC API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ledc.html) documentation for more details.

### Hardware Setup

1. Connect an LED to pin `D2` with a current-limiting resistor in series.

### Software Implementation

Here are Arduino sketches that demonstrate PWM output:

#### General PWM

```cpp
const int ledPin = D2;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  for (int dutyCycle = 0; dutyCycle <= 255; dutyCycle++) {
    analogWrite(ledPin, dutyCycle);
    delay(10);
  }
}
```

This code gradually increases the LED brightness using PWM.

#### LED Control

```cpp
/*
 LEDC Software Fade

 This example shows how to software fade an LED
 using the ledcWrite function.

 Code adapted from the original Arduino Fade example:
 https://www.arduino.cc/en/Tutorial/Fade

 This example code is in the public domain.
 */

// Use 12-bit precision for the LEDC timer
#define LEDC_TIMER_12_BIT  12

// Use 5000 Hz as the LEDC base frequency
#define LEDC_BASE_FREQ     5000

// Fade LED PIN (replace with LED_BUILTIN constant for the built-in LED)
#define LED_PIN            D5

int brightness = 0;    // How bright the LED is
int fadeAmount = 5;    // How many points to fade the LED by

// Arduino-like analogWrite
// Value has to be between 0 and valueMax
void ledcAnalogWrite(uint8_t pin, uint32_t value, uint32_t valueMax = 255) {
  // Calculate duty, 4095 from 2 ^ 12 - 1
  uint32_t duty = (4095 / valueMax) * min(value, valueMax);

  // Write duty to LEDC
  ledcWrite(pin, duty);
}

void setup() {
  // Setup timer and attach timer to the LED pin
  ledcAttach(LED_PIN, LEDC_BASE_FREQ, LEDC_TIMER_12_BIT);
}

void loop() {
  // Set the brightness on the LEDC channel
  ledcAnalogWrite(LED_PIN, brightness);

  // Change the brightness for the next loop iteration
  brightness = brightness + fadeAmount;

  // Reverse the direction of the fading at the ends of the fade
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  // Wait for 30 milliseconds to see the dimming effect
  delay(30);
}
```

This code demonstrates how to fade an LED using the ledcWrite function. The LED brightness gradually increases and decreases in a continuous loop.

## I2C

The XIAO ESP32C6 has a hardware I2C interface for communicating with I2C devices.

Refer to the [I2C API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/i2c.html) documentation for more details.

### Hardware Preparation

1. Connect the SDA pin of the I2C device to the SDA pin (`D4`) of the XIAO.
2. Connect the SCL pin of the I2C device to the SCL pin (`D5`) of the XIAO.

### Software Implementation

#### Master Mode

Here's an Arduino sketch that demonstrates reading from an I2C sensor:

```cpp
#include <Wire.h>

const int sensorAddress = 0x40;

void setup() {
  Wire.begin();
  Serial.begin(115200);
}

void loop() {
  Wire.beginTransmission(sensorAddress);
  Wire.write(0x01);  // Register address
  Wire.endTransmission();

  Wire.requestFrom(sensorAddress, 2);
  if (Wire.available() >= 2) {
    int data = Wire.read() << 8 | Wire.read();
    Serial.println(data);
  }

  delay(100);
}
```

This code reads a 16-bit value from register `0x01` of an I2C sensor.

#### Slave Mode

Here's an Arduino sketch that demonstrates using the XIAO ESP32C6 as an I2C *slave device*:

```cpp
#include "Wire.h"

#define I2C_DEV_ADDR 0x55

uint32_t i = 0;

void onRequest() {
  Wire.print(i++);
  Wire.print(" Packets.");
  Serial.println("onRequest");
}

void onReceive(int len) {
  Serial.printf("onReceive[%d]: ", len);
  while (Wire.available()) {
    Serial.write(Wire.read());
  }
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Wire.onReceive(onReceive);
  Wire.onRequest(onRequest);
  Wire.begin((uint8_t)I2C_DEV_ADDR);

#if CONFIG_IDF_TARGET_ESP32
  char message[64];
  snprintf(message, 64, "%lu Packets.", i++);
  Wire.slaveWrite((uint8_t *)message, strlen(message));
#endif
}

void loop() {
  // Slave device code here
}
```

In this slave mode example, the XIAO ESP32C6 is configured as an I2C slave device with address `0x55`. The `onReceive` callback function is called when the slave receives data from the master, and the `onRequest` callback function is called when the master requests data from the slave.

## SPI

The XIAO ESP32C6 microcontroller board features a built-in SPI interface, facilitating fast data exchange with other SPI-compatible devices. This is particularly useful in projects that require quick communication between multiple devices.

- For detailed technical specifications, refer to the [XIAO ESP32C6 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf).
- Learn more about how to use the SPI interface with the XIAO ESP32C6 by consulting the [SPI API Documentation](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/spi.html#).

### Hardware Preparation

To connect your XIAO ESP32C6 to another SPI device, follow these steps:

1. **MOSI (Master Out Slave In):** Connect the `MOSI` pin of the SPI device to pin `D10` on the XIAO.
2. **MISO (Master In Slave Out):** Connect the `MISO` pin of the SPI device to pin `D9` on the XIAO.
3. **SCK (Serial Clock):** Connect the `SCK` pin of the SPI device to pin `D8` on the XIAO.
4. **CS (Chip Select):** Connect the `CS` pin of the SPI device to a digital pin (for example, `D3`) on the XIAO.

```
MOSI -> D10
MISO -> D9
SCK -> D8
CS -> D3 (as an example)
```

### Software Implementation

Below is a simplified Arduino sketch that demonstrates basic SPI communication with an SPI device using the XIAO ESP32C6. This sketch sends a command to the SPI device and reads back the response(reads back data from an SPI device).

```cpp
#include <SPI.h>

const int csPin = 3;  // Use pin D3 for Chip Select (CS)

void setup() {
  // Initialize SPI communication
  SPI.begin();            
  // Set the CS pin as an output
  pinMode(csPin, OUTPUT); 
  // Set the CS pin high to indicate no active communication
  digitalWrite(csPin, HIGH);
}

void loop() {
  // Start communication with the device
  digitalWrite(csPin, LOW);
  SPI.transfer(0x01);  // Send a command to the device
  int data = SPI.transfer(0);  // Read the response
  digitalWrite(csPin, HIGH);  // End communication

  // Print the received data
  Serial.println(data);       
  delay(100);  // Wait for a short period
}
```
:::note
Ensure the pin assignments in your sketch match the physical connections in your hardware setup. The above example uses predefined pin numbers based on the `pin_arduino.h` file for the XIAO ESP32-C6, with an additional definition for the CS pin.
:::

## Resources

- [XIAO ESP32C6 Documentation](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)
- [ESP32-C6 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)
- [Arduino Reference](https://www.arduino.cc/reference/en/)
- [Arduino ESP32 Reference](https://docs.espressif.com/projects/arduino-esp32/en/latest/index.html)
