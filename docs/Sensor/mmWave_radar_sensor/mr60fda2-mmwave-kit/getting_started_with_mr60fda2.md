---
description: Getting started with 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)
title: Getting started with MR60FDA2
keywords:
- mmwave
- radar
- MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /getting_started_with_mr60fda2_mmwave_kit
last_update:
  date: 08/19/2024
  author: Spencer
---

# Getting started with 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg" style={{width:'auto', height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
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
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library">
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
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60FDA2 mmWave;

void setup() {
Serial.begin(115200);
mmWave.begin(&mmWaveSerial);

delay(1000);

uint32_t sensitivity = 15;
float height = 3.0, threshold = 1.0;
float rect_XL, rect_XR, rect_ZF, rect_ZB;

if (mmWave.setInstallationHeight(height)) {
 Serial.printf("setInstallationHeight success: %.2f\n", height);
} else {
 Serial.println("setInstallationHeight failed");
}

if (mmWave.setThreshold(threshold)) {
 Serial.printf("setThreshold success: %.2f\n", threshold);
} else {
 Serial.println("setThreshold failed");
}

if (mmWave.setSensitivity(sensitivity)) {
 Serial.printf("setSensitivity success %d\n", sensitivity);
} else {
 Serial.println("setSensitivity failed");
}

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

void loop() {
if (mmWave.update(100)) {
 bool is_human = mmWave.getHuman();
 if (is_human) {
   Serial.printf("People Exist: %s\n", is_human ? "true" : "false");
 }

 bool is_fall = mmWave.getFall();
 if (is_fall) {
   Serial.printf("isFall: %s\n", is_fall ? "true" : "false");
 }
}
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
  - Sets the installation height of the radar, which is crucial for accurate fall detection. The `height` parameter specifies the height (in meters) at which the sensor is installed, initialization
setting parameters is `2.2 m`, with a valid range typically between 1 and 5 meters.

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

## Open for Customization

Want to tailor-make the kit to fit your unique applications?

For more information about 3D point cloud data generation and interference zone configuration when customizing mmWave modules. Seeed provides one-stop R&D customization and manufacturing services for fast development from concept to production. Contact us at <iot@seeed.cc> to learn more.

## Resources

- **STP**: [mmWave 3D Case](https://files.seeedstudio.com/wiki/mmwave-for-xiao/xiao_mm_wave.stp)
- **GitHub Repository**: Access the full codebase and documentation at the [Seeed mmWave Library GitHub page](https://github.com/Love4yzp/Seeed-mmWave-library).
- **ESPHome Documentation**: For further customization and integration, refer to the [ESPHome documentation](https://esphome.io/).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
