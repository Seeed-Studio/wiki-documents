---
description: XIAO MG24 Example - Matter
title: Seeed Studio XIAO MG24 Example - Matter
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /xiao_mg24_matter
sidebar_position: 2
last_update:
  date: 11/07/2024
  author: Spencer
---

## Introduction

Matter is an **open-source, unified standard** for smart home technology that promotes interoperability across devices and ecosystems. Developed by the Connectivity Standards Alliance (CSA), it enables seamless communication between devices from various manufacturers without requiring internet connectivity. Matter supports native compatibility with platforms such as Apple HomeKit, Google Home, and Amazon Alexa, making it easier to integrate devices across smart home setups. For a deeper understanding of Matter, refer to the [official Matter documentation](https://project-chip.github.io/connectedhomeip-doc/index.html).

> In 2024[^1], Silicon Labs and Arduino joined forces to lower barriers to Matter adoption, providing a development path that simplifies using Matter with the Arduino ecosystem. This collaboration aims to make Matter development more accessible, helping Arduino developers overcome typical challenges and adopt Matter seamlessly.

[^1]: [Silicon Labs and Arduino Partner to Democratize Matter - Feb 6, 2024](https://news.silabs.com/2024-02-06-Silicon-Labs-and-Arduino-Partner-to-Democratize-Matter)

Matter operates efficiently over local networks, offering reliable, low-latency communication without needing internet access. This feature significantly improves both security and device performance.

This documentation will guide you through the steps to develop a Matter application on the XIAO MG24, using Arduino.

## Prerequisites

To begin developing a Matter application on the XIAO MG24, ensure that the following hardware and software components are prepared and ready.

### Hardware

- **Seeed Studio XIAO MG24** board.
- **Supported Matter Hub** (e.g., Apple HomePod mini) to connect to the Matter network.
- **Matter Controller** (e.g., Apple HomeKit App) to manage and interact with your Matter-enabled device.

The following table[^2] provides examples of Matter-compatible hubs across various ecosystems:

| Manufacturer / Ecosystem | Device                     |
| ------------------------ | -------------------------- |
| Google Home              | Nest Hub Gen2              |
| Apple HomeKit            | HomePod Gen2, HomePod mini |
| Amazon Alexa             | Echo Gen4                  |
| Raspberry Pi OTBR        | Raspberry Pi               |

By default, it is assumed you have at least one [Matter Hub](https://en.wikipedia.org/wiki/Matter_(standard)#Supported_ecosystems_and_hubs) and one Matter Controller (e.g., an iPhone with HomeKit installed) ready for testing.

[^2]: [README - Arduino Matter library](https://github.com/SiliconLabs/arduino/blob/main/libraries/Matter/readme.md)

### Software

The required software includes the **Arduino IDE with Silicon Labs' Arduino Core**:

- If not already installed, download and set up the [Silicon Labs Arduino Core](https://github.com/SiliconLabs/arduino) for compatibility with the XIAO MG24.
- For detailed setup instructions, refer to the [Getting Started Guide](/xiao_mg24_getting_started/#add-board).

Be sure to opt for the Matter Protocol stack:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-arduino-tool-option.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

## Quick Started with Matter Bulb Example

The [Matter Light Bulb Example](https://github.com/Silabs/arduino-matter/tree/main/examples/MatterLightBulb) demonstrates a simple Matter application, allowing control of the `built-in LED` via a Matter network. This example serves as a practical starting point for developers new to Matter integration on the XIAO MG24.

To access the example in the Arduino IDE:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-bulb-example.png" style={{width:480, height:'auto', "border-radius": '12.8px'}}/></div>

For convenience, modifications to the device name in the example code are provided below to allow for personalized setup.

```cpp
/*
   Matter lightbulb example

   The example shows how to create a simple on/off lightbulb with the Arduino Matter API.

   The example lets users control the onboard LED through Matter.
   The device has to be commissioned to a Matter hub first.

   Author: Tamas Jozsi (Silicon Labs)
   Modified by: Spencer Y (Seeed Studio)
 */
#include <Matter.h>
#include <MatterLightbulb.h>

MatterLightbulb matter_bulb;

void setup()
{
  Serial.begin(115200);
  Matter.begin();
  matter_bulb.begin();

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);

  Serial.println("Matter lightbulb");

  matter_bulb.set_device_name("XIAO MG24 bulb");    // Customize the default device name
  matter_bulb.set_vendor_name("Seeed Studio");      // Set the vendor name
  matter_bulb.set_product_name("Seeed Matter Lightbulb"); // Define the product name

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter device is not commissioned");
    Serial.println("Commission it to your Matter hub with the manual pairing code or QR code");
    Serial.printf("Manual pairing code: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR code URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }

  Serial.println("Waiting for Thread network...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Connected to Thread network");

  Serial.println("Waiting for Matter device discovery...");
  while (!matter_bulb.is_online()) {
    delay(200);
  }
  Serial.println("Matter device is now online");
}

void loop()
{
  static bool matter_lightbulb_last_state = false;
  bool matter_lightbulb_current_state = matter_bulb.get_onoff();

  // Turn on the LED if the state is ON and the previous state was OFF
  if (matter_lightbulb_current_state && !matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
    Serial.println("Bulb ON");
  }

  // Turn off the LED if the state is OFF and the previous state was ON
  if (!matter_lightbulb_current_state && matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
    Serial.println("Bulb OFF");
  }
}
```

### Flashing the Firmware

1. Copy the code into the Arduino IDE and upload it to the XIAO MG24 board.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-lightbulb-flash.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>
2. After flashing the firmware, press the `RESET` button or reconnect the XIAO MG24 to restart the board.
3. Open the Serial Monitor to confirm the setup. You should see output similar to this:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-url.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### QR Code for Commissioning

The serial monitor will display a URL to generate a QR code, required for device commissioning. Copy the URL, paste it into a browser, and scan the resulting QR code with your Matter controller(e.g., HomeKit).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-scan.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### Testing the Device

After scanning the QR code, the Matter controller(HomeKit) will prompt you to confirm the device’s identity. Once confirmed, the device will be visible in the app. You can now control the XIAO MG24’s built-in LED and test its responsiveness directly from the app interface.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-device-online.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

<div class="video-container">
<iframe
  className="youtube-video-r"
  src="https://youtube.com/embed/tmCpIWuRojQ"
  title="MG24 Matter Lightbulb Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>
</div>

## Reference & Resources

If you're new to Matter, the following resources provide foundational knowledge and development support for working within the Matter ecosystem:

- **[Quick-Start Guides](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**: An ideal starting point to learn the fundamentals of Matter, covering essential concepts and components of the ecosystem.
- **[Matter Developer Journey](https://www.silabs.com/wireless/matter/matter-developer-journey)**: A comprehensive guide through the Matter development process, including necessary tools, resources, and best practices for effective implementation.
- **[Matter Specifications](https://csa-iot.org/developer-resource/specifications-download-request/)**: Technical specifications for the Matter protocol and its components. This is the primary resource for understanding the protocol’s capabilities and operational details.
- **[The Device Data Model - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**: An in-depth explanation of the device data model, which standardizes how device features and capabilities are represented in the Matter ecosystem.
- **[Matter Development Framework Overview](/matter_development_framework)**: A guide specifically tailored to the Matter Development Framework for the XIAO ESP32C6, offering an alternative approach for Matter device development.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
