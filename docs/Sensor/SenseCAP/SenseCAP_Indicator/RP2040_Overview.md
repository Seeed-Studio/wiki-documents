---
description: RP2040 Overview
title: RP2040 Overview
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 5/01/2023
  author: Yvonne
---

# **RP2040 Overview**

SenseCAP Indicator is embeded with [RP2040](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?), RP2040 features a dual-core ARM Cortex-M0+ processor with clock speeds up to 133 MHz, 264KB of RAM, and a range of peripherals such as USB, UART, SPI, and I2C. It also includes a unique feature called Programmable I/O (PIO), which allows users to implement custom digital interfaces without the need for specialized hardware.




<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"/></div>



## **CO2 Sensor(Built-in)**

SenseCAP Indicator (D1S/D1Pro Version)has a built-in SCD41 sensor, which can detect the CO2 value with a range of 0-40000ppm.
CO2 content is an important criterion for assessing the quality of air and ensuring that it is safe and healthy for all who breathe it.


The levels of CO2 in the air: 
* Normal outdoor level: 350 - 450 ppm
* Acceptable levels: < 600 ppm
* Complaints of stuffiness and odors: 600 - 1000 ppm
* ASHRAE and OSHA standards: 1000 ppm
* General drowsiness: 1000 - 2500 ppm
* Adverse health effects may be expected: 2500 - 5000 ppm




**Example Code**:

This example reads the value of the built-in SCD41 Co2 sensor through the IIC interface, and print it to the serial monitor.

Based on the following library：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)
[SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)

**Note**: When using the built-in sensor, the sensor power must be enabled.


```
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
String SDDataString = "";

//The built-in sensor needs to be powered on
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // stop potentially previously started measurement
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // Start Measurement
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute startPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("sensor scd4x: ");
  // Read Measurement
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("Error trying to execute readMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("Invalid sample detected, skipping.");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("Temperature:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("Humidity:");
    Serial.println(humidity);
  }
}

int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_scd4x_init();
}

void loop() {
  delay(5000);
  sensor_scd4x_get();
}


```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/scd4xsensor.png"/></div>

**Note:** The temperature and humidity in this built-in SCD41 sensor does not fully represent the air temperature and humidity


## **tVOC Sensor(Built-in)**

The built-in SGP40 sensor in the SenseCAP Indicator is a high-quality, reliable TVOC sensor that can be used in a wide range of applications to monitor indoor and outdoor air quality. It with a measurement range of 1-500 VOC Index Points.

TVOCs are a group of organic chemicals that are emitted as gases from a variety of sources, including building materials, cleaning products, and personal care products.


**Example Code:**

This example reads the value of the built-in SGP40 TVOC sensor through the IIC interface, and print it to the serial monitor.

Based on the following library：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)

[SGP40 TVOC sensor library](https://github.com/Sensirion/arduino-i2c-sgp40)

[Transfer index library: Sensirion Gas Index Algorithm](https://github.com/Sensirion/arduino-gas-index-algorithm)

Note: When using the built-in sensor, the sensor power must be enabled.

```
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <VOCGasIndexAlgorithm.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;
VOCGasIndexAlgorithm voc_algorithm;


//The built-in sensor needs to be powered on
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

/************************ sgp40 tvoc  ****************************/

void sensor_sgp40_init(void) {
  uint16_t error;
  char errorMessage[256];

  sgp40.begin(Wire);

  uint16_t serialNumber[3];
  uint8_t serialNumberSize = 3;

  error = sgp40.getSerialNumber(serialNumber, serialNumberSize);

  if (error) {
    Serial.print("Error trying to execute getSerialNumber(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("SerialNumber:");
    Serial.print("0x");
    for (size_t i = 0; i < serialNumberSize; i++) {
      uint16_t value = serialNumber[i];
      Serial.print(value < 4096 ? "0" : "");
      Serial.print(value < 256 ? "0" : "");
      Serial.print(value < 16 ? "0" : "");
      Serial.print(value, HEX);
    }
    Serial.println();
  }

  uint16_t testResult;
  error = sgp40.executeSelfTest(testResult);
  if (error) {
    Serial.print("Error trying to execute executeSelfTest(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (testResult != 0xD400) {
    Serial.print("executeSelfTest failed with error: ");
    Serial.println(testResult);
  }
}

void sensor_sgp40_get(void) {
  uint16_t error;
  char errorMessage[256];
  uint16_t defaultRh = 0x8000;
  uint16_t defaultT = 0x6666;
  uint16_t srawVoc = 0;

  Serial.print("sensor sgp40: ");

  error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
  if (error) {
    Serial.print("Error trying to execute measureRawSignal(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("SRAW_VOC:");
    Serial.print(srawVoc);
    
    int32_t voc_index = voc_algorithm.process(srawVoc);
    Serial.print(", VOC Index: ");
    Serial.println(voc_index);
  }
}

/************************ setup & loop ****************************/

void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_sgp40_init();
}

void loop() {
  sensor_sgp40_get();
  delay(5000);
}

```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/tvoc.png"/></div>

"SRAW_VOC" refers to the sensor's raw signal output for VOCs, which is usually a voltage or resistance measurement that is proportional to the concentration of VOCs in the air.

"VOC Index" is a calculated value that is used as a way to represent the concentration of VOCs in the air in a more user-friendly format. The VOC index is a numerical value that ranges from 0 to 500, with higher values indicating higher concentrations of VOCs.


## **Grove**

There are two Grove interfaces in the SenseCAP Indicator for connecting Grove modules, one is the default I2C Port and other one is configurable Digital/Analog Pin, it can also be used for PWM outputs. Both Grove ports can be used as Digital.Providing more possibilities for developers. 

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>


This repo will introduce how to use the Grove IOs on the SenseCAP Indicator. This allows you to enjoy the plug and play functionality of the [Grove Ecosystem](https://www.seeedstudio.com/category/Grove-c-1003.html) as well as using the RP2040 compatible GPIO!


### **IIC**

To expand more applications, you can use the IIC interface to connect more sensors. 
Different with the built-in sensors, you only need to define the SCL and SDA pin connections.

Example Code:

This example code introduces how to connect a [Grove TH sensor](https://wiki.seeedstudio.com/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor):

[AHT20 temperature and humidity sensor library](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/)



```
#include <Arduino.h>
#include <Wire.h>
#include "AHT20.h"

AHT20 AHT;

void sensor_aht_init(void) {
  AHT.begin();
}

void sensor_aht_get(void) {
  float humi, temp;
  int ret = AHT.getSensor(&humi, &temp);
  if (ret)  // GET DATA OK
  {
    Serial.print("humidity: ");
    Serial.print(humi * 100);
    Serial.print("  temerature: ");
    Serial.println(temp);
  } else  // GET DATA FAIL
  {
    Serial.println("GET DATA FROM AHT20 FAIL");
  }
}

void setup() {
  Serial.begin(115200);

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_aht_init();
}

void loop() {
  sensor_aht_get();
  delay(5000);
}
```


### **ADC**

To use the Grove configurable A/D Port as Analog port, simply define it as follow:

```
#define ADC1  27
```



**Example Code**:

This example code introduces how to connect the [Light sensor](https://wiki.seeedstudio.com/Grove-Light_Sensor) in the grove ADC interface.
The output signal is analog value, the brighter the light is, the larger the value.

```
#include <Arduino.h>

#define ADC1  27

void setup() {
  Serial.begin(115200);
}

void loop() {
  int adc0_data = analogRead(ADC1);
  Serial.println(adc0_data);
  delay(1000);
}
```


## **Micro SD**

The RP2040 has a set of GPIO pins that can be used to interface with an external MicroSD card module.

To use a MicroSD card with the RP2040, we use the SPI (Serial Peripheral Interface) protocol to connect the SD card module to the GPIO pins of the microcontroller. This involves connecting the following pins on the RP2040 to the corresponding pins on the MicroSD card module:

SPI SCK(such as GPIO10) to SD_SCK 
SPI TX(such as GPIO11) to SD_MOSI
SPI RX(such as GPIO12) to SD_MISO 
A single GPIO pin (such as GPIO13) to the CS (chip select) pin on the SD card module

```
 // Initialize the SPI interface for the SD card
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
```

Once the hardware connection is established, you can use a software library, such as Arduino's SD library, to read and write data to the MicroSD card. The SD library provides functions to initialize the SD card, open and close files, read and write file data, and perform other file system operations.

**Note**: The performance of the MicroSD card interface on the RP2040 will depend on factors such as the speed of the SD card, wiring quality and software efficiency, and a maximum SD card of 32GB is supported





**Example Code**

This example code realizes reading CO2 data and storing the data in SD.

```
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
//Initialize a string to store data for writing to the SD card
String SDDataString = "";  

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}
// Function to power on the sensor
void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // stop potentially previously started measurement
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // Start Measurement
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute startPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("sensor scd4x: ");
  // Read Measurement
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("Error trying to execute readMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("Invalid sample detected, skipping.");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("Temperature:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("Humidity:");
    Serial.println(humidity);
  }
  // Add data to the SD data string
  SDDataString += "scd4x,";
  if (error) {
    SDDataString += "-,-,-,";
  } else {
    SDDataString += String(co2);
    SDDataString += ',';
    SDDataString += String(temperature);
    SDDataString += ',';
    SDDataString += String(humidity);
    SDDataString += ',';
  }
}



int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();
  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();
 // Initialize the SPI interface for the SD card
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
// Check if the SD card is initialized
  if (!SD.begin(chipSelect, 1000000, SPI1)) {
    Serial.println("Card failed, or not present");
  } else {
    Serial.println("card initialized.");
  }

  sensor_scd4x_init();
}

void loop() {

  delay(5000);
  // Clear the SD data string and print a message to the serial monitor
  SDDataString = "";
  Serial.printf("\r\n\r\n--------- start measure %d-------\r\n", cnt);

  SDDataString += String(cnt);
  SDDataString += ',';

  cnt++;
  sensor_scd4x_get();
  // Open the datalog.csv file for writing
  File dataFile = SD.open("datalog.csv", FILE_WRITE);
  // if the file is available, write to it:
  if (dataFile) {
    dataFile.println(SDDataString);
    dataFile.close();
    // print to the serial port too:
    Serial.print("sd write: ");
    Serial.println(SDDataString);
  } else {
    Serial.println("error opening datalog.txt");
  }

}


```





## **Button**

This code initializes the board, registers two button event callbacks, and specifies the button events to be handled. When the user presses the button, the corresponding callback function will be called. 
The ESP_LOGI() function is used to print a message to the console indicating which button event occurred.


```
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "esp_log.h"
#include "bsp_board.h"
#include "bsp_btn.h"


static void __btn_click_callback(void* arg)
{
    ESP_LOGI("btn", "Click");

}

static void __btn_double_click_callback(void* arg)
{
    ESP_LOGI("btn", "Double Click");
}

void app_main(void)
{
    ESP_ERROR_CHECK(bsp_board_init());

    /*
     * Button Event types you can use:
     *     BUTTON_PRESS_DOWN
     *     BUTTON_PRESS_UP
     *     BUTTON_PRESS_REPEAT
     *     BUTTON_SINGLE_CLICK
     *     BUTTON_DOUBLE_CLICK
     *     BUTTON_LONG_PRESS_START
     *     BUTTON_LONG_PRESS_HOLD
     */
    bsp_btn_register_callback( BOARD_BTN_ID_USER, BUTTON_SINGLE_CLICK, __btn_click_callback, NULL);
    bsp_btn_register_callback( BOARD_BTN_ID_USER, BUTTON_DOUBLE_CLICK, __btn_double_click_callback, NULL);
}

```



## **Buzzer**


The built-in buzzer of SenseCAP Indicator is a passive buzzer, meaning that it requires an AC signal(PWM) to trigger and output a sound, you can generate various tones and effects.


**Basic**


```
#include <Arduino.h>

#define Buzzer  19 //Buzzer GPIO 

void setup() {
  digitalWrite(Buzzer, OUTPUT); //Set Buzzer as an output
  analogWrite(Buzzer, 127);   //Generates pwm of 50% duty cycle
}

void loop() {
  delay(1000);
  digitalWrite(Buzzer, LOW); //Turn off the Buzzer
}

```

**Example Code 1**

This example use a buzzer to play melodies. It sends a square wave of the appropriate frequency to the buzzer, generating the corresponding tone.
" Twinkle Twinkle Little Start..."


```
#include <Arduino.h>
#define Buzzer  19 //Buzzer GPIO 


int length = 15;         /* the number of notes */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup() {
    //set buzzer pin as output
    pinMode(19, OUTPUT);
}

void loop() {
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* delay between notes */
    }

}

//Play tone
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(19, HIGH);
        delayMicroseconds(tone);
        digitalWrite(19, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // play the tone corresponding to the note name
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```


**Example Code 2**

This example demonstrates an alarm when the CO2 value is greater than 1000ppm.

```
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>

#define Buzzer  19 //Buzzer GPIO 

SensirionI2CScd4x scd4x;
String SDDataString = "";

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // stop potentially previously started measurement
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // Start Measurement
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute startPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("sensor scd4x: ");
  // Read Measurement
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("Error trying to execute readMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("Invalid sample detected, skipping.");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("Temperature:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("Humidity:");
    Serial.println(humidity);
  }


  if( co2 > 1000 ) {
    analogWrite(Buzzer, 10); 
  } else {
    analogWrite(Buzzer, 0);
  }
}



int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_scd4x_init();

  digitalWrite(Buzzer, OUTPUT);

}

void loop() {
  delay(5000);
  sensor_scd4x_get();
}
```



# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！
if you have large order requirment, please contact iot@seeed.cc
