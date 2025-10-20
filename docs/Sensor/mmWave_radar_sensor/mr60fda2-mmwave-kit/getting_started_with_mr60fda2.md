---
description: Getting started with 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)
title: Getting started with MR60FDA2
keywords:
- mmwave
- radar
- MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /getting_started_with_mr60fda2_mmwave_kit
sidebar_position: 0
last_update:
  date: 08/19/2024
  author: Spencer
---

# Getting started with 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div><br />

Introducing our advanced **mmWave Sensor Modules** for XIAO, designed to provide cutting-edge monitoring solutions for both fall detection and [heartbeat](https://wiki.seeedstudio.com/getting_started_with_mr60bha2_mmwave_kit/) monitoring. Powered by the robust XIAO ESP32 microcontroller with built-in Wi-Fi and Bluetooth connectivity, these modules offer precise and reliable detection capabilities. Whether you need to monitor falls in real-time or track heartbeats with sensitive accuracy, our modules are equipped with state-of-the-art technology, including customizable RGB LEDs and ambient light sensing. With easy expansion options through Grove GPIO ports, these versatile modules are perfect for a wide range of applications, from smart home integration to healthcare monitoring.

## Features

- **Wi-Fi & Bluetooth Enabled**: Both modules are powered by XIAO ESP32 with pre-flashed ESPHome firmware, ensuring quick setup and customization.
- **Fall Detection Module**:
  - **Precise Fall Detection**: Covers a 3x3x3 meter area with a 100° x 40° detection angle.
  - **Static Presence Detection**: Monitors stationary individuals up to 6 meters away.

<!-- - **Heartbeat Detection Module**:
  - **Sensitive Heartbeat Monitoring**: Detects heartbeats from up to 1.5 meters.
  - **Static Presence Detection**: Monitors stationary individuals up to 6 meters away. -->
  
- **Environmental Sensing**:
  - **BH1750 Light Sensor**: Measures ambient light from 1 to 65,535 lux.
  - **WS2812 RGB LED**: Customizable LED for visual feedback and DIY projects.
- **Expandable Connectivity**: Includes Grove GPIO ports for adding additional sensors and modules.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## Specification

| **General Parameters**   |                                      |
| ------------------------ | ------------------------------------ |
| **mmWave Firmware**      | Fall Detection Monitoring |
| **Detection Range**      | Human Static Presence Detection: up to 6 Meters<br />Fall Detection: <br />- 3x3x3 meter range<br />- Horizontal Field of View (FoV) of 120°<br />- Vertical FoV of 100° |
| **MCU**                  | Seeed Studio XIAO ESP32C6 |
| **LED**                  | WS2812 RGB LED |
| **Button**               | Rest |
| **Light Sensor**         | BH1750 Range: 1 to 65,535 lux with adjustable measurements up to 100,000 lux |
| **Connectivity**         | 1 GPIO Port (D0, D10) |
| **Pin Header Spacing**   | 2.54mm |
| **Power Supply**         | 5V/1A Input |
| **Power consumption**    | 0.5w: Standby Mode<br />0.8w: Activation Mode<br />1.4w: work with Grove Relay status |

## Application

- Security Systems
- Haelthcare Monitoring
- Smart Home Automation
- Elderly Care

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg" style={{width:'auto', height:'auto', "border-radius": '2.8px'}}/></div> -->

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" style={{"border-radius": '12.8px'}}/></div><br />

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg" style={{width:'auto', height:'auto', "border-radius": '6.6px'}}/></div> -->

## Getting Started

### Installation method and sensing range

Top-mounted hanging height 2.2-3.0m, maximum sensing radius 2m, the side with the mmWave sensor needs to align with the direction of detection.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_detect_distant.png" style={{width:600, height:'auto'}}/></div>

:::note
Please use this module in an open space, and stay out of the following scenarios within the detecting range to prevent interference with the module:

- Multiple radars installed too close together  
- Wind moves curtains and sways plants
- Water flow and water film  
- Large areas of metal and mirror reflections  
- Detection through glass and thin wooden boards  
- Installation location prone to vibrations  
- Use of low-quality power supplies  

:::

### Software Preparation (Arduino)

:::info Attention

By default, the MR60BHA2 comes pre-assembled with the [XIAO ESP32C6](/xiao_esp32c6_getting_started), but it's compatible with various other microcontrollers for communication and integration.

:::

If this is your first time using Arduino with the XIAO series, follow the appropriate setup guide for your board:

- **XIAO ESP32S3**: Refer to the [XIAO ESP32S3 Getting Started Guide](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/).
- **XIAO ESP32C3**: Follow the [Getting Started with Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/) guide.
- **XIAO ESP32C6**: Follow the [Getting Started with Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/) guide.

Once your board is set up, proceed with the following steps:

1. **Download the Seeed mmWave Library**:
   - Download the [Seeed mmWave library](https://github.com/Love4yzp/Seeed-mmWave-library) from GitHub.

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>
2. **Install the Library in Arduino IDE**:
   - Open the Arduino IDE.
   - Navigate to **Sketch > Include Library > Add .ZIP Library...**.
   - Select the downloaded `.zip` file to install the library.
3. **Connect Your XIAO Board**:
   - Plug your XIAO board into your computer via USB.
   - In the Arduino IDE, go to **Tools > Board** and select your XIAO board model.
   - Choose the correct port under **Tools > Port**.
4. **Load an Example Sketch**:
   - Go to **File > Examples > Seeed Arduino mmWave**.
   - Select the relevant example for either Fall Detection.
   - Review the code and make any necessary adjustments.
5. **Upload the Sketch**:
   - Click **Upload** to flash the code to your XIAO board.
   - Open the **Serial Monitor** in the Arduino IDE to view real-time sensor data.

<!-- ## Hardware Connections -->

### Usage

This section provides example code snippets to help you quickly start using the Seeed Arduino mmWave Library with various functionalities, including fall detection, RGB LED control, and light sensing.

<!-- 
### Breath Module

This example demonstrates how to use the **MR60BHA2** sensor for monitoring breathing and heartbeat.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// Set up serial communication depending on the board type
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60BHA2 mmWave;

void setup() {
Serial.begin(115200);
mmWave.begin(&mmWaveSerial);
}

void loop() {
if (mmWave.update(100)) {
 float total_phase, breath_phase, heart_phase;
 if (mmWave.getHeartBreathPhases(total_phase, breath_phase, heart_phase)) {
   Serial.printf("total_phase: %.2f\t", total_phase);
   Serial.printf("breath_phase: %.2f\t", breath_phase);
   Serial.printf("heart_phase: %.2f\n", heart_phase);
 }

 float breath_rate;
 if (mmWave.getBreathRate(breath_rate)) {
   Serial.printf("breath_rate: %.2f\n", breath_rate);
 }

 float heart_rate;
 if (mmWave.getHeartRate(heart_rate)) {
   Serial.printf("heart_rate: %.2f\n", heart_rate);
 }

 float distance;
 if (mmWave.getDistance(distance)) {
   Serial.printf("distance: %.2f\n", distance);
 }
}
}
``` -->

#### Fall Module

This example shows how to use the **MR60FDA2** sensor for fall detection.

```cpp
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>
#include <hp_BH1750.h>  //inlude the library
#include "Seeed_Arduino_mmWave.h"

#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmwaveSerial(0);
#else
#  define mmwaveSerial Serial1
#endif

#define LIGHT_GPIO D0

/****** instance ******/

hp_BH1750 BH1750;  // create the sensor object

SEEED_MR60FDA2 mmWave;

Adafruit_NeoPixel pixels =
    Adafruit_NeoPixel(1, /* pixelPin */ D1, NEO_GRB + NEO_KHZ800);

/****** funtions ******/

void relay_init();
void relay_on();
void relay_off();

/****** variables ******/
uint32_t sensitivity = 15;
float height = 2.8, threshold = 1.0;
float rect_XL, rect_XR, rect_ZF, rect_ZB;

const uint8_t dark_lux = 10;

void setup() {
  bool result;
  Serial.begin(115200);
  mmWave.begin(&mmwaveSerial);
  /* init relay device*/
  relay_init();

  /* init RGB LED */
  pixels.begin();
  pixels.clear();
  pixels.setBrightness(8);
  pixels.show();
  pixels.setPixelColor(0, pixels.Color(125, 125, 125));
  /* init built-in light ambient light sensor */
  BH1750.begin(BH1750_TO_GROUND);  // will be false no sensor found
                                   // | already connected to I2C
  BH1750.calibrateTiming();
  BH1750.start(BH1750_QUALITY_HIGH2,
               254);  // start the first measurement in setup
  /* set mmwave-fall parameters */
  mmWave.setUserLog(0);

  /** set the height of the installation **/
  if (mmWave.setInstallationHeight(height)) {
    Serial.printf("setInstallationHeight success: %.2f\n", height);
  } else {
    Serial.println("setInstallationHeight failed");
  }

  /** Set threshold **/
  if (mmWave.setThreshold(threshold)) {
    Serial.printf("setThreshold success: %.2f\n", threshold);
  } else {
    Serial.println("setThreshold failed");
  }

  /** Set sensitivity **/
  if (mmWave.setSensitivity(sensitivity)) {
    Serial.printf("setSensitivity success %d\n", sensitivity);
  } else {
    Serial.println("setSensitivity failed");
  }

  /** get new parameters of mmwave **/
  if (mmWave.getRadarParameters(height, threshold, sensitivity, rect_XL,
                                rect_XR, rect_ZF, rect_ZB)) {
    Serial.printf("height: %.2f\tthreshold: %.2f\tsensitivity: %d\n", height,
                  threshold, sensitivity);
    Serial.printf(
        "rect_XL: %.2f\trect_XR: %.2f\trect_ZF: %.2f\trect_ZB: %.2f\n", rect_XL,
        rect_XR, rect_ZF, rect_ZB);
  } else {
    Serial.println("getRadarParameters failed");
  }
}

typedef enum {
  EXIST_PEOPLE,
  NO_PEOPLE,
  PEOPLE_FALL,
} MMWAVE_STATUS;

MMWAVE_STATUS status = NO_PEOPLE, last_status = NO_PEOPLE;
float lux = 100;
void loop() {
  /* get status */
  if (mmWave.update(100)) {
    bool is_human, is_fall;
    // Get the human detection status
    if (mmWave.getHuman(is_human)) {
      // Get the fall detection status
      if (mmWave.getFall(is_fall)) {
        // Determine the status based on human and fall detection
        if (!is_human && !is_fall) {
          status = NO_PEOPLE;  // No human and no fall detected
        } else if (is_fall) {
          status = PEOPLE_FALL;  // Fall detected
        } else {
          status = EXIST_PEOPLE;  // Human detected without fall
        }
      }
    }
    // Get the human detection status
    if (!mmWave.getHuman(is_human) && !mmWave.getFall(is_fall)) {
      status = NO_PEOPLE;  // No human and no fall detected
    } else if (is_fall) {
      status = PEOPLE_FALL;  // Fall detected
    } else {
      status = EXIST_PEOPLE;  // Human detected without fall
    }
  }

  switch (status) {
    case NO_PEOPLE:
      Serial.printf("Waiting for people");
      break;
    case EXIST_PEOPLE:
      Serial.printf("PEOPLE !!!");
      break;
    case PEOPLE_FALL:
      Serial.printf("FALL !!!");
      break;
    default:
      break;
  }
  Serial.print("\n");

  /* change interactive Light*/
  if (status != last_status) {  // switching LED
    switch (status) {
      case NO_PEOPLE:
        pixels.setPixelColor(0, pixels.Color(0, 0, 255));  // BLUE
        break;
      case EXIST_PEOPLE:
        pixels.setPixelColor(0, pixels.Color(0, 255, 0));  // GREEN
        break;
      case PEOPLE_FALL:
        pixels.setPixelColor(0, pixels.Color(255, 0, 0));  // RED
        break;
      default:
        break;
    }
    pixels.show();
    last_status = status;
  }

  /* update lux value */
  if (BH1750.hasValue() == true) {
    lux = BH1750.getLux();
    BH1750.start(BH1750_QUALITY_HIGH2, 254);
  }

  Serial.print("LUX: ");
  Serial.print(lux);
  Serial.print("\t");

  if ((status == EXIST_PEOPLE || status == PEOPLE_FALL) && lux < dark_lux) {
    relay_on();
  } else {
    relay_off();
  }
}

void relay_init() {
  pinMode(LIGHT_GPIO, OUTPUT);
}
void relay_on() {
  digitalWrite(LIGHT_GPIO, HIGH);
}
void relay_off() {
  digitalWrite(LIGHT_GPIO, LOW);
}
```

The output will be as follows on Arduino Serial Monitor:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/fall_detection.png" style={{width:700, height:'auto'}}/></div>

#### Blink RGB LED

This example demonstrates how to control an RGB LED using the NeoPixel library.

- **Step 1.** Download the `Adafruit_NeoPixel` library

Navigate to **Sketch > Include Liarbry > Manage Libraries...**, and search **Adafruit_NeoPixel**, install the lastest version.

- **Step 2.** Copy following code to a new sketch:

```cpp
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>

const int pixelPin = D1;

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(1, pixelPin, NEO_GRB + NEO_KHZ800);

void setup() {
Serial.begin(115200);
pixels.begin();
pixels.clear();
pixels.show();
}

void loop() {
for (int i = 0; i < 10; i++) {
 pixels.setPixelColor(0, pixels.Color(255, 0, 0));
 pixels.show();
 delay(100);
 pixels.setPixelColor(0, pixels.Color(0, 0, 0));
 pixels.show();
 delay(100);
}

for (int i = 255; i >= 0; i--) {
 pixels.setPixelColor(0, pixels.Color(i, 0, 0));
 pixels.show();
 delay(10);
}
}
```

- **Step 3.** Select the correct board and port number to upload the program.

Once the program is successfully uploaded, you will see RGB LED on the right side of the mmWave Sensor Modules is blinking.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### Light Sensor (BH1750)

This example shows how to read light intensity values using the BH1750 sensor.

- **Step 1.** Download the `hp_BH1750` library

Navigate to **Sketch > Include Liarbry > Manage Libraries...**, and search **hp_BH1750**, install the lastest version.

- **Step 2.** Copy following code to a new sketch:

```cpp
#include <Arduino.h>
#include <hp_BH1750.h>

hp_BH1750 BH1750;

void setup() {
Serial.begin(9600);

bool avail = BH1750.begin(BH1750_TO_GROUND);

if (!avail) {
 Serial.println("No BH1750 sensor found!");
 while (true) {}
}

Serial.printf("conversion time: %dms\n", BH1750.getMtregTime());
BH1750.start();
}

void loop() {
if (BH1750.hasValue()) {
 float lux = BH1750.getLux();
 Serial.println(lux);

 BH1750.start();
}
}
```

- **Step 3.** Select the correct board and port number to upload the program.

The output will be as follows on Arduino Serial Monitor:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

<!-- 
### Breath Module API

This example uses the `SEEED_MR60BHA2` class to interface with the MR60BHA2 sensor for heart and breath monitoring. Here’s what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**: 
  - Initializes the sensor for communication using the specified serial interface. It sets up the connection between the XIAO board and the MR60BHA2 sensor.

- **`mmWave.update(100)`**:
  - Updates the sensor data. The parameter `100` is a timeout value in milliseconds, specifying how long to wait for the sensor to provide new data. If new data is available within this timeframe, the function returns `true`.

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - Retrieves the phase information related to heart and breath activities. 
  - `total_phase` represents the overall phase shift, while `breath_phase` and `heart_phase` are specific to breathing and heartbeat activities, respectively.

- **`mmWave.getBreathRate(float &rate)`**:
  - Fetches the current breath rate detected by the sensor. The rate is returned in the reference variable `rate`.

- **`mmWave.getHeartRate(float &rate)`**:
  - Retrieves the current heart rate detected by the sensor. The rate is returned in the reference variable `rate`.

- **`mmWave.getDistance(float &distance)`**:
  - Gets the distance from the sensor to the detected object (e.g., human body). This function is useful for understanding the range of the detected signal. -->

## Fall Module API

This example uses the `SEEED_MR60FDA2` class to interface with the MR60FDA2 sensor for fall detection. Here’s what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Initializes the sensor for communication, setting up the serial connection between the XIAO board and the MR60FDA2 sensor.

- **`mmWave.setInstallationHeight(float height)`**:
  - Sets the installation height of the radar, which is crucial for accurate fall detection. The `height` parameter specifies the height (in meters) at which the sensor is installed, initialization setting parameters is `2.2 m`, with a valid range typically between 1 and 5 meters.

- **`mmWave.setThreshold(float threshold)`**:
  - Sets the fall detection threshold. The default fall threshold of the radar is `0.6 m`. This value determines the sensitivity of the radar in terms of detecting falls based on the height and distance from the sensor.

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - Adjusts the sensitivity of the radar for fall detection. The sensitivity initial value is `3`, which represents an average of 3 frames of data. And typically value ranges from 3 to 10, with higher values making the sensor more responsive to potential falls.

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - Retrieves the current configuration parameters of the radar, including installation height, fall detection threshold, and sensitivity settings. These parameters are returned via the reference variables.

- **`mmWave.getHuman()`**:
  - Checks if a human presence is detected by the radar. Returns `true` if a human is detected, and `false` otherwise.

- **`mmWave.getFall()`**:
  - Determines whether a fall has been detected. This function returns `true` if a fall is detected and `false` if not.

## Module firmware upgrade

:::caution
Modifying the radar firmware is a risky operation, so be sure to read this section carefully before following each step carefully. Please be aware that if a step is not performed correctly, the Radar may become bricked or unusable.

**Special note, if you purchased the Radar MR60BHA2, please do not flash the firmware illegally by the following way, it will surely brick your device!!!!**
:::

First, connect the XIAO ESP32C6 and MR60FDA2 modules together. Then use the following code to program XIAO.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// If the board is an ESP32, include the HardwareSerial library and create a
// HardwareSerial object for the mmWave serial communication
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
// Otherwise, define mmWaveSerial as Serial1
#  define mmWaveSerial Serial1
#endif

void setup() {
  // Initialize the serial communication for debugging
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for Serial to initialize
  }

  // Initialize the mmWaveSerial communication
  mmWaveSerial.begin(115200);
}

void loop() {
  // Check if there is data available from mmWaveSerial
  while (mmWaveSerial.available() > 0) {
    char receivedChar = mmWaveSerial.read();
    Serial.write(receivedChar); // Forward data to Serial
  }

  // Check if there is data available from Serial
  while (Serial.available() > 0) {
    char receivedChar = Serial.read();
    mmWaveSerial.write(receivedChar); // Forward data to mmWaveSerial
  }
}
```

:::tip
The function of the above code is to transparently transmit the serial port of the module to the USB serial port of XIAO, so as to upgrade the firmware of the module through XIAO.  
Please connect XIAO to your PC during the upgrade process.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" style={{width:700, height:'auto'}}/></div>

You will see the original data sent by the module.

Then you need to download and unzip the OTA tool and the firmware here.

- **MR60FDA2 Firmware upgrade tool**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **MR60FDA2 Firmware v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)

1. Check and connect to the serial port (set the baud rate to 115200)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. Click "REQUEST UPDATE" to enter the upgrade mode:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. If "C" or "43" is printed, it means that the module has entered upgrade mode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. Select the firmware to be upgraded. After selection, it will automatically enter the upgrade state.

After the upgrade is completed, it will automatically jump to normal mode. If it does not jump, power off and restart, and then use OTA tool to view the serial port data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file-fda2.png" style={{width:700, height:'auto'}}/></div>

5. After the upgrade is complete, you can use OTA tool to read the version and raw data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done-fda2.png" style={{width:700, height:'auto'}}/></div>

6. You need to re-flash the firmware of XIAO ESP32C6 after the upgrade is completed.

:::tip
If in the above steps you have operated incorrectly causing an anomaly to occur and have been unable to try to burn the firmware again and the radar is not working properly, then the radar may have suffered a brick due to corrupted firmware. The only way to try to recover the device is to refer to the files and documentation **[here](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**. However, please understand that we do not provide technical support and assistance for the device bricked due to incorrect operation.
:::

## Open for Customization

Want to tailor-make the kit to fit your unique applications?

For more information about 3D point cloud data generation and interference zone configuration when customizing mmWave modules. Seeed provides one-stop R&D customization and manufacturing services for fast development from concept to production. Contact us at [iot@seeed.cc](mailto:iot@seeed.cc) to learn more.

:::danger Customised Service Description
The firmware and algorithms of the radar are not open source, and complex parameters of the radar such as fall height settings, mounting position settings, etc. require customised services, which may involve additional customisation fees and MOQs.
:::

## Resources

- **STL**: [mmWave 3D Case](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHub Repository**: Access the full codebase and documentation at the [Seeed mmWave Library GitHub page](https://github.com/Love4yzp/Seeed-mmWave-library).
- **ESPHome Documentation**: For further customization and integration, refer to the [ESPHome documentation](https://esphome.io/).
- **MR60FDA2 Firmware upgrade tool**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **MR60FDA2 Firmware v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)
- **MR60FDA2 GUI Software**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)
- **mmWave Sensor SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60FDA2 Module Technical Specification**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)
- **MR60FDA2 Tiny Frame Interface Manual**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)
- **Radar Firmware Recovery Method via Jlink**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

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
