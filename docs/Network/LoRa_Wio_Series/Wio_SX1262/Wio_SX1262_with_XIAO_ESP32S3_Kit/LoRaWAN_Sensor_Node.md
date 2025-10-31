---
description: Lorawan sensor node based on Wio-SX1262 with XIAO esp32s3 module
title: LoRaWAN Sensor Node
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67_1.webp
slug: /wio_sx1262_xiao_esp32s3_for_lora_sensor_node
sidebar_position: 4
last_update:
  date: 10/23/2024
  author: Evelyn Chen
---

# Configuring XIAO ESP32S3 & Wio-SX1262 Kit as LoRaWAN Sensor Node

## Introduction

This wiki provides a step-by-step guide on configuring the XIAO ESP32S3 & Wio-SX1262 Kit to act as a LoRaWAN sensor node, connecting a DHT20 temperature and humidity sensor, adding an M2 LoRaWAN gateway, and sending data to the The Things Network LNS platform. It also covers the configuration of a format decoder.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67.png" style={{width:900, height:'auto'}}/></div>

## Prerequisites

- XIAO ESP32S3 & Wio-SX1262 Kit
- DHT20 temperature and humidity sensor
- XIAO Expansion Board
- M2 LoRaWAN Indoor gateway
- Access to The Things Network account

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262 Kit</th>
      <th>XIAO Expansion Board</th>
      <th>DHT20 temperature & humidity sensor</th>
      <th>M2 LoRaWAN Indoor gateway</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Hardware Setup

1. Connect the Wio-SX1262 module to the XIAO ESP32S3.
2. Connect the DHT20 sensor(I2C grove connector) and XIAO ESP32S3 & Wio-SX1262 Kit to the XIAO Expansion board.
3. Connect the kit to your PC.
4. Connect M2 gateway to power and Ethernet port.

## Video Instruction

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/7NptcHkVcpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Register & Setup on TTN

Go to https://www.thethingsnetwork.org/get-started and register - just like any other website. These instructions are for TTS Sandbox.

Go to [the instruction of TTS Sandbox](https://www.thethingsnetwork.org/get-started) and register.
Once you have confirmed your email address, you can log in to the [console](https://console.cloud.thethings.network/). If you have any doubts, you can ask on [the things network forum](https://www.thethingsnetwork.org/forum/). You log in with exactly the same details.

### Register gateway on TTN

It is simpler to register your gateway first. I got [SenseCAP M2 LoRaWAN Indoor Gateway(SX1302)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html) as an example.

For your personal LoRaWAN Gateway, you can read up on key concepts and troubleshooting [here](https://www.thethingsindustries.com/docs/gateways/).

### Create a new application on TTN

An application is like a box to keep some devices in - normally doing the same thing - on larger deployments this may be 1,000's of similar devices. Starting out it is likely to be just a few so there is no need to get concerned about how to divide up your use just yet.

Once logged in to the console you can go in to Applications to create your first application. The ID must be all lower case or numbers, no spaces, dashes are OK and it has to be unique to the entire TTN community - so first-app will be rejected - you could use your-username-first-app as that's likely to be unique. The name and description are for your own use and are optional.

### Register end device on TTN

**Step 1**. Go to the application you created in the previous step.

**Step 2**. Click to create new end device

On the right hand side about half way down on your application's summary is a big blue button **+ Register end device**. Click this to create the settings for your first device.

**Step 3**. Enter end device specifics

You are making your own device using a third party LoRaWAN stack so there will not be an entry in the device repository so choose '**Enter end device specifics manually**'.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/61.png" style={{width:400, height:'auto'}}/></div>

**Step 4**. Enter device specifics

Choose the **Frequency plan** appropriate for your region. Consider that almost all countries have laws relating to what frequencies you use so don't get creative. For Europe please use the recommended option. For other regions use the entry marked 'used by TTN'. For this case, select **868 MHz**.

Choose **LoRaWAN 1.1.0** - the last one in the list - the latest specification. **RadioLib uses RP001 Regional Parameters 1.1 revision A**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/62.png" style={{width:400, height:'auto'}}/></div>

At this point you will be asked for your **JoinEUI**. As this is a DIY device and we are using RadioLib, you can use **all zero's** as recommended by The LoRa Alliance TR007 Technical Recommendations document. Once you've put in all zeros and clicked confirm you will be asked for a **DevEUI**, **AppKey** and **NwkKey**. It is preferable to have the console **generate** them so they are properly formatted.

Your End device ID can be changed to make the device more identifiable. Something related to your hardware helps - like **test-device**. The you can click the blue '**Register device**'.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/63.png" style={{width:400, height:'auto'}}/></div>

**Step 5**. Copy device details to config file on Arduino

You then need to copy over the device details in to the **config file** for RadioLib. There are buttons to copy items to the clipboard so you don't have to hand type them.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/64.png" style={{width:400, height:'auto'}}/></div>

## Configure XIAO ESP32S3 & Wio-SX1262 Kit as LoRaWAN Sensor Node

The code is written in Arduino and is designed to configure a Wio-SX1262 module along with an XIAO ESP32S3 board to act as a LoRaWAN sensor node. It connects a DHT20 sensor to read temperature and humidity data and sends this data via LoRaWAN to The Things Network.

### Install the necessary libraries for XIAO ESP32S3 and DHT20 sensor

- Install Arduino Environnment for XIAO ESP32S3

Refer to https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation.

- Install `DHT20` sensor library
package:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/DHT.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download ⬇️</font></span></strong>
    </a>
</div>

- Install `RadioLib` library
Note. Install **version 6.6.0**, otherwise the code will not compile.

### Setup

**Step 1**. Fill in LoRaWAN device authentication and network access parameters

`RADIOLIB_LORAWAN_JOIN_EUI` and `RADIOLIB_LORAWAN_DEV_EUI` are used for device identification when a device joins the LoRaWAN network. Just like in a large online community, these two parameters are the "identity card" of the device, letting the network know which device is requesting to join.

`RADIOLIB_LORAWAN_APP_KEY` and `RADIOLIB_LORAWAN_NWK_KEY` are used for security authentication and network access control. They are similar to the "password" for entering the network community, ensuring that only devices with the correct keys can communicate securely with the network. Moreover, they can restrict the operation of the device according to the permissions of the application (distinguished by APP_KEY) and the network (distinguished by NWK_KEY).

Just **copy** the parameter from TTN to the config file.

1. Here, a macro named `RADIOLIB_LORAWAN_JOIN_EUI` is defined. If this macro is not defined elsewhere, it will be set to a hexadecimal `all-zero` value.
  
```cpp
#ifndef RADIOLIB_LORAWAN_JOIN_EUI
#define RADIOLIB_LORAWAN_JOIN_EUI  0x0000000000000000
#endif
```

2. Similarly, the `RADIOLIB_LORAWAN_DEV_EUI` macro is defined, representing the `DevEUI` (Device Unique Identifier), with a specific hexadecimal value set here, which is used for device identification when a device joins the LoRaWAN network.

```cpp
#ifndef RADIOLIB_LORAWAN_DEV_EUI
#define RADIOLIB_LORAWAN_DEV_EUI   0x****************
#endif
```

1. The `RADIOLIB_LORAWAN_APP_KEY` and `RADIOLIB_LORAWAN_NWK_KEY` macros are defined, representing the AppKey and NwkKey, respectively, used for security authentication and network access control.

```cpp
#ifndef RADIOLIB_LORAWAN_APP_KEY
#define RADIOLIB_LORAWAN_APP_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif

#ifndef RADIOLIB_LORAWAN_NWK_KEY   // Put your Nwk Key here
#define RADIOLIB_LORAWAN_NWK_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif
```

4. The following macros are defined, representing the `LoRaWAN uplink parameters`. These parameters are used to configure the uplink payload sent to the LoRaWAN network.

```cpp
#define LORAWAN_UPLINK_USER_PORT  2
#define LORAWAN_UPLINK_DATA_RATE  3

#define LORAWAN_UPLINK_PERIOD     10000 // ms

#define LORAWAN_UPLINK_DATA_MAX   115 // byte
```

**Step 2**. Select the LoRaWAN regional parameters

There are several regional choices available for LoRaWAN communication, including `EU868` (European 868 MHz band), `US915` (United States 915 MHz band), `AU915` (Australian 915 MHz band), `AS923` (Asian 923 MHz band), `IN865` (Indian 865 MHz band), `KR920` (South Korean 920 MHz band), `CN780` (Chinese 780 MHz band), and `CN500`.

The line const `LoRaWANBand_t Region = EU868;` sets the region for the LoRaWAN communication to EU868. This means that the device will be configured to operate in the European 868 MHz frequency band.

For US915 and AU915 defines a sub-band variable. In this case, it is set to 0. The comment suggests that this sub-band variable is specifically for the US915 and AU915 regions, although it is not being used for the EU868 region in this code snippet.

```cpp
const LoRaWANBand_t Region = EU868;
const uint8_t subBand = 0; // For US915 and AU915
```

### Read sensor data and send LoRa uplink payload

Read and send sensor data via LoRa communication. The conversion to bytes with decimal precision allows for more accurate representation of the temperature and humidity values in the uplink payload.

```cpp
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) {
    uplinkPayloadLen = 0;
    memset(uplinkPayload, sizeof(uplinkPayload), 0);

    // Convert temperature and humidity to bytes with decimal precision
    uint16_t tempDecimal = (temp_hum_val[1] * 100);
    uint16_t humDecimal = (temp_hum_val[0] * 100);
    uplinkPayload[uplinkPayloadLen++] = (tempDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = tempDecimal & 0xFF;
    uplinkPayload[uplinkPayloadLen++] = (humDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = humDecimal & 0xFF;

    for (int i = 0; i < uplinkPayloadLen; i++) {
      Serial.print(uplinkPayload[i], HEX);
      Serial.print(" ");
    }
```

## Flash Firmware

The completed firmware package here:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download ⬇️</font></span></strong>
    </a>
</div>

Please download and flash it to the XIAO ESP32S3. For the first use of XIAO ESP32S3, refer to [the flashing tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation) here.

## Setup Payload Formatter

The payload formatter is used to convert the raw data received from the sensor into a human-readable format. In this case, the payload formatter is used to convert the raw data received from the DHT20 sensor into a JSON format.

Formatter type: `Custom Javascript formatter`

```js
function decodeUplink(input) {
  var bytes = input.bytes;
  var temperatureDecimal = (bytes[0] << 8) | bytes[1];
  var humidityDecimal = (bytes[2] << 8) | bytes[3];

  var temperature = temperatureDecimal / 100;
  var humidity = humidityDecimal / 100;

  return {
    data: {
      temperature: temperature,
      humidity: humidity
    }
  };
}
```

## Monitor LoRaWAN data

For specific device activity, click the device in the middle list. A device's main menu has options like Device Overview, Live Data, etc. Click **Live Data** or the link above the activity box.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/65.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/66.png" style={{width:800, height:'auto'}}/></div>

## Resource

- [Code Package](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip)

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
