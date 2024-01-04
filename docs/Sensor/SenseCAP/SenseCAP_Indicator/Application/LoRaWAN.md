---
description: To preview LoRaWAN feature of SenseCAP Indicator
title: LoRaWAN Network - SenseCAP Indicator
keywords:
  - IoT
  - LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png
slug: /SenseCAP_Indicator_Application_LoRaWAN
toc_max_heading_level: 4
sidebar_position: 4
last_update:
  date: 2024-01-04T01:21:24.006Z
  author: Spencer
---

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png"/>
</div>

## Hands-On Demo

In this section, we'll delve into the SenseCAP Indicator's basic LoRaWAN(*Class C* & *OTAA*) functionality through a practical demonstration. The process is divided into three main steps:

1. [Obtain Firmware](#flash_firmware): Customize and install the firmware as needed.
2. [Registering the Device](#HEAD_register_device): Add your device to a LoRaWAN Network Server.
3. [Configuring LoRaWAN Credentials](#configure_credentials): Enter necessary network details on your SenseCAP Indicator.

Before we begin, let's get some background on LoRaWAN.

## LoRaWAN

LoRaWAN is described as a Low Power, Wide Area (LPWA) networking protocol that wirelessly connects battery-operated devices to the internet across large regions or networks. It's a part of the LoRa wireless system and operates in a license-free spectrum, supporting long-range communication with limited bandwidth. It is characterized by long-range communication (up to 10 miles), long battery life (up to 10 years), low cost, and low power usage with a payload size ranging from 51 to 241 bytes depending on the data[^1].

[^1]: [A Gentle Introduction to LoRaWAN Gateways & Nodes
](https://www.seeedstudio.com/blog/2021/04/27/a-gentle-introduction-to-lorawan-gateways-nodes/)

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" alt="LoRaWAN Framwork" />
<div style={{ marginTop: '-8px' }}><em>LoRaWAN Network Framwork</em></div>

</div>  

## Advanced Perception System

Seeed Studio's "Advanced Perception System" is an [IoT solution](/SenseCAP_introduction) that provides a comprehensive array of sensing, networking, edge computing tools and cloud designed to enhance environmental awareness across various industries. This system, equipped with a diverse array of modules and devices[^2], acts as the digital "eyes and ears," facilitating a transformative understanding of the real world.

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={680} src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/03/Seeed-Studio-Advanced-Perception-System-2048x1150.png" alt="Advanced Perception System" />
<div style={{ marginTop: '-8px' }}><em>Advanced Perception System Layers</em></div>
<br/>
</div>

The SenseCAP Team focuses primarily on Sensor and Network components, committing to delivering top-notch quality and bespoke industry solutions. Their work has resulted in the creation of acclaimed offerings, such as the innovative [Smart Village Solution](https://www.seeedstudio.com/smart-village), which has garnered praise for its practicality and forward-thinking design.

In the realm of the Helium network, the team's contributions are particularly noteworthy. Devices like the SenseCAP M1, M2, and M4 are not just high-performance Helium hotspots; they are pivotal in enabling users to earn HNT cryptocurrency while concurrently constructing a decentralized wireless LoRaWAN® network infrastructure. The SenseCAP M4 Square stands out for its ability to operate multiple Web 3.0 Apps, thereby streamlining the deployment of intricate multi-application systems.[^3]

Leveraging this profound expertise and continual engagement with a diverse customer base, the SenseCAP Team has strategically decided to integrate LoRa functionality into the SenseCAP Indicator.

[^2]: [SenseCAP Products - Bazzar](https://www.seeedstudio.com/SenseCAP-c-1825.html)
[^3]: [SenseCAP MX](https://www.sensecapmx.com/)

Let's take a closer look at the [SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html)'s LoRaWAN functionality.

## Overview

| Feature                          | Details                                                      |
|:---:|:---:|
| Radio Transceivers               | SX1262                                                       |
| Classes Supported                | Class A/B/C                                                  |
| Supported Frequency Bands        | AS923, AU915, CN779, EU433, EU868, KR920, IN865, US915, RU864, US915 |
| LoRaWAN Mac Version              | 1.0.4/1.1.0                                                  |
| End-device LoRaWAN Stack Adopted | [LoRaMac-node](https://github.com/Lora-net/LoRaMac-node/releases/tag/v4.7.0)     |
| Documentation                    | [LoRaMac Documentation](http://stackforce.github.io/LoRaMac-doc/) |

<!-- |Regional parameters|RP002-1.0.3| -->

## 1. Obtain Firmware {#flash_firmware}

### 1.1 Download Firmware:

To begin, download the LoRaWAN firmware, `indicator_lorawan.bin`,  for the SenseCAP Indicator from the GitHub Release page.

<div class="github_container" style={{textAlign: 'center'}}>

<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases">

<strong><span><font color={'FFFFFF'} size={"4"}> Download the Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>

</div>
<br />

:::info Interested in custom firmware?
The [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/index.html#ide)(v5.1) provides insights on building your own. You can access and modify the [source code](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) to suit your specific needs.
:::



### 1.2 Flash Firmware:

To flash the firmware onto the SenseCAP Indicator, download it first and then use esptool (or `esptool.py` if you have an ESP-IDF environment) to flash it(for comprehensive guidance, refer to the [instructions](/SenseCAP_Indicator_Application_LoRaWAN)).

**Flashing firmware on Windows using esptool:**

Use the command below in the Windows command prompt to flash the firmware:

```jsx
<tool_path>/esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 <firmware_path>/indicator_lorawan.bin 
```

For example, if your `flash_bin` folder is located in drive `D:` and contains the following structure:

```sh
flash_bin/
├── esptool.exe
└── indicator_lorawan.bin
```

Your command will look like this:

```sh
./esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_nonport_flash.png.png"/>
</div>

If you have multiple ports and need to specify one, use the `-p` or `--port` argument:

```sh
./esptool.exe --chip esp32s3 -p COM20 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_port_flash.png"/>
</div>

:::note
Mac users should replace `./esptool.exe` with `./esptool`.

If you encounter issues during flashing, consider reducing the **baud speed** or refer to [these troubleshooting steps](https://askubuntu.com/questions/1411463/dev-ttyusb0-file-disappears-from-dev-directory-while-using-device).
:::

Once the firmware is successfully flashed, retrieve essential parameters like the Device EUI and APPkey from the LoRaWAN Network Server from the subsequent steps.

## 2. Register the Device on LoRaWAN Network Server {#HEAD_register_device}

> Before starting, ensure your device is within a LoRaWAN network's coverage area.

This section will guide you through connecting to a local LoRaWAN network server. We will use the [ChirpStack](https://www.chirpstack.io/) platform as an example, alongside the [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html). *If you are employing a different network server, the procedure will be similar*; you'll need to collect the essential information for activation:

- OTAA (Over The Air Activation):
  - DevEUI
  - AppKey
  - JoinEUI/AppEUI (Mac Version 1.1.0 needed)
- ABP (Activation By Personalization): 
  - DevEUI
  - DevAddr
  - AppSKey
  - NwkSKey

<!-- lorawan --eui c53364863bca6cad --app_key 220a52c272e2b1151ef5b626c0dab025 -->
<!-- lorawan --eui 97752c0092d12add --apps_key 22222222222222222222222222222222 --nwks_key 11111111111111111111111111111111 --dev_addr 33333333 -->
### 2.1 Configure the SenseCAP LoRaWAN Gateway

To configure your SenseCAP gateway, access its web interface where you'll begin setting up a ChirpStack network server. Below is a visual guide displaying the configuration page:

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/gateway_config.png"/>
</div>

After adjusting the settings, click `Save & Apply` to commit your changes.  You can then access the ChirpStack interface using the provided URL (for example, http://192.168.1.102:8080).

Use the following default credentials to log in:

- **Username:** `admin`
- **Password:** `admin`

For further details and advanced configuration options, visit the [SenseCAP M2 Gateway LNS Configuration Guide](https://wiki.seeedstudio.com/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/).


### 2.2 Configure the Local Network Server (ChirpStack)
Refer to the ChirpStack documentation for detailed features and LoRaWAN version support: [ChirpStack Network Server Documentation](https://www.chirpstack.io/network-server/features/lorawan-versions/).

Here are the steps to configure your local network server using ChirpStack:

1. **[Create a Device Profile](#create_dev_profile):**  This standardizes the settings and capabilities of your devices. It's crucial for ensuring that your devices communicate effectively within the network.
2. **[Add an Application](#add_appication):** This helps organize and manage your devices. Applications are used to group devices that share the same purpose or characteristics, making management more straightforward.
3. **[Register a device under an application](#register_device):** This step links your device to the specific settings and data handling rules you've established in your application. It's a critical step to make sure your device operates correctly within your network.

#### 2.2.1 Create a Device Profile {#create_dev_profile}

To create a new device profile in `Device profiles`, go to 'Tenant' in the sidebar and then select 'Device profiles'.

<div align="center">
  <img class='border-radius: 10px;' width={220} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/sidebar_device_profile.png"/>
</div>

Creating a device profile is a crucial step in ensuring your device effectively communicates over the LoRaWAN network. This involves selecting technical parameters that influence the device's performance and compatibility. Here's how you can set it up:

- **MAC Version:** This refers to the version of the Media Access Control (MAC) protocol your device utilizes. The MAC protocol is essential for managing how your device accesses the network. You can select between versions v1.0.4 and v1.1.0.
- **Regional Parameters Revision:** These are the specific parameters that need to be configured based on the geographical location of your device. They ensure that the device complies with local regulations and network specifications.

**Choosing MAC Version**

The MAC version you select is pivotal as it determines the set of credentials your device will require:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value='MAC Version 1.0.4'>

  You'll need the following credentials:

  - **DevEUI:** This is a unique identifier assigned to your device, ensuring global uniqueness.
  - **AppKey:** A secret key used for encrypting and securing your device's communications.

</TabItem>

<TabItem value='MAC Version 1.1.0'>

  Your device will require these credentials:

  - **DevEUI:** A globally unique identifier for your device.
  - **AppEUI/JoinEUI:** A unique identifier for the application your device connects to.
  - **AppKey:** The cryptographic key used for securing communications.

</TabItem>
</Tabs>


**Choosing Regional Parameters Revision**

In the context of setting up a device profile for the LoRaWAN network, the Regional Parameters (RP) version you choose is crucial for ensuring your device operates in compliance with specific regional standards and specifications.



**Current Setup**

For now, we are setting up a device profile with MAC Version `1.0.4` and Regional Parameters Revision `RP002-1.0.2`.

:::info Regional Parameters Revision
For configuring a device profile on the LoRaWAN network, `RP002-1.0.2` is a suitable choice for current needs. `RP002-1.0.3` is recommended by the [code](https://github.com/Lora-net/LoRaMac-node/blob/v4.7.0/src/mac/region/Region.h) as per the `v4.7.0` LoRaMac-node specification.
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_device_profile_check.png"/>
</div>

Correctly understanding and configuring the necessary elements is key to ensuring your device communicates effectively and securely over the LoRaWAN network. 

To use **Class C** device type, it's important to specifically enable this functionality in your device profile.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_classC_enable.png"/>
</div>


**Decoder Function**

Indeed, to make the payload data transmitted by your device meaningful and interpretable, it's essential to implement a decoder within the device profile. This decoder will translate the raw binary data into a readable format, allowing you to understand and utilize the information your device sends effectively.

<details>

<summary>Click to copy Decoder.js</summary>

The docoder is from [GitHub repository](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/docs/ChirpStackV4_Decoder.js)

```js
function decodeUplink(input) {
    var decoded = {
        data:[]
    };
    var type;
    var floatNumber;

    if ( (input.bytes.length  % 5) !== 0) {
        decoded.data.push({
            type: "error",
            Value: -1
        });

        return { data: decoded }
    }

    const arrayBuffer = new ArrayBuffer(4);
    const dataView = new DataView(arrayBuffer);
    
    for(let j =0 ; j < input.bytes.length; j+=5) {
        var num =0;
        switch ( input.bytes[j]) {
            case 0:
                type = 'Temp';
                num  = 2;
                break;
            case 1:
                type = 'Humidity';
                num  = 2;
                break;
            case 2:
                type = 'CO2';
                num  = 0;
                break;
            case 3:
                type = 'TVOC';
                num  = 0;
                break;
            case 4:
                type = 'Light';
                num  = 0;
                break;
            default:
                type = 'unknown';
                break;
        }
        for (let i = 0; i < 4; i++) {
            dataView.setUint8(i, input.bytes[j+i+1]);
        }
        floatNumber = dataView.getFloat32(0, true); 
        decoded.data.push({
            type:  type,
            Value: floatNumber.toFixed(num)
        });
    }
    return { data: decoded }
}

function encodeDownlink(input) {
  return {
    bytes: [225, 230, 255, 0]
  };
}
```

</details>

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_decoder.png"/>
</div>



Once device profile is created, the next step is to add an application.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_profile.png"/>
</div>


#### 2.2.2 Add an Application {#add_appication}

Create and configure an application within your LoRaWAN Network Server to manage your devices.

To create a new Application, go to 'Tenant' in the sidebar and then select 'Application'.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_create.png"/>
</div>

To submit, set the Name and optionally provide a description.

#### 2.2.3 Register a device under an application {#register_device}

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_device.png"/>
</div>

Press the `Add device` button in your application.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_device_add.png"/>
</div>

To add a device, you need to specify a `Name` and provide a `Device EUI` along with the `Device Profile` you've previously created. 

You can opt to auto-generate the Device EUI or use an existing one from your device. 

For this process, we'll employ the auto-generated Device EUI. After submitting these details, the device will be added to the application, and you'll be automatically redirected to the OTAA Keys section.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_otaa.png"/>
</div>

Click the button to generate a random **Application Key (AppKey)** or opt to use a pre-existing one. Ensure you have all the necessary credentials and parameters. For *MAC Version 1.0.4*, the required credentials are:

- **DevEUI (Example):** `5d61e4648dc926e2`
- **AppKey (Example):** `ec2b966c2c4bbe94a6ef79d0479db0e5`

With these details, you can now execute the command:

```sh
lorawan --eui 5d61e4648dc926e2 --app_key ec2b966c2c4bbe94a6ef79d0479db0e5
```

For additional commands and assistance, refer to the [console command](#commands) section.

## 3. Configure SenseCAP Indicator {#configure_credentials}

To establish a connection with your SenseCAP Indicator, you can use any **serial tool**([Minicom](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom), [Putty](https://www.putty.org/), etc.) or just use `idf monitor`(follow the detailed [instructions provided in the ESP-IDF documentation](https://docs.espressif.com/projects/esp-idf/en/v5.1.2/esp32/api-guides/tools/idf-monitor.html):

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esp_idf_monitor.png"/>
</div>

:::caution
Ensure your device hasn't started the LoRaWAN connection before this step.
If it has, you'll need to stop it.
:::

Enter the commands including the credentials in the console.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_otaa_config.png"/>
</div>

Now, you should be able to view the keys on your SenseCAP Indicator. If necessary, make any required updates to the configurations. 

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_press_join.png"/>
</div>

When you press the *Join* button, you'll be able to observe the connection process directly through the *console*, allowing you to monitor and verify the successful establishment of the connection.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_console.png"/>
</div>

Once the join process is successful, you can view the logs in the `LoRaWAN frames` section to monitor the data transmission and receive a detailed account of the device's communication with the network.

:::tip
Navigate to the *LoRaWAN frames* section of a device within the application you've created, and locate your specific device. This is where you can monitor and manage the data packets being transmitted and received by your device, ensuring smooth communication and operation within the LoRaWAN network.
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_frame.png"/>
</div>

Now, with the decoder function activated, you should be able to see the parsed data under the event section (you can reveal this by pressing the `+up` button). This will allow you to understand and analyze the incoming data from your device more effectively.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_event_view.png"/>
</div>

The demonstration is now complete. If you have any further questions or require additional guidance, feel free to ask. I'm here to help!

## Console Manual Page {#commands}

<!-- check the [indicator_lorawan - README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/README.md)): -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_cmd_all.png"/>
</div>

Here's an introduction to the terminal command for setting up LoRaWAN network information, styled like a manual entry:

### **lorawan**
This command configures the LoRaWAN network information for a device. It allows you to set various parameters required for both OTAA (Over-the-Air Activation) and ABP (Activation By Personalization) methods.

##### Usage:
```sh
lorawan [--eui=] [--join_eui=] [--app_key=] [--dev_addr=] [--apps_key=] [--nwks_key=]
```

##### Options:
- `--eui=`: Sets the EUI (Extended Unique Identifier) for the device. It requires 8 hexadecimal digits, with MSB (Most Significant Bit) first.
  
- `--join_eui=`: Sets the JOIN EUI (formerly known as APP EUI) which is an application identifier in OTAA. It requires 8 hexadecimal digits, with MSB first.

- `--app_key=`: Sets the APP KEY, which is a cryptographic key used in the OTAA joining process. It requires 16 hexadecimal digits, with MSB first.

- `--dev_addr=`: Sets the Device Address for ABP. It's a 4 hexadecimal digit identifier, with MSB first.

- `--apps_key=`: Sets the APPS KEY for ABP, which is used for encrypting application payloads. It requires 16 hexadecimal digits, with MSB first.

- `--nwks_key=`: Sets the NWKS KEY for ABP, which is used for encrypting network payloads and for device authentication. It requires 16 hexadecimal digits, with MSB first.

### **help**
This command provides a list of all available commands in the system.

##### Usage:
```sh
help
```

##### Description:
Prints a detailed list of all registered commands, providing a quick reference to the functions available for configuring and operating the device within the LoRaWAN network.

## FAQs

<details>

<summary>1. Why is the True Network Server not sending a joinAccept?</summary>

**Note:** There are a few scenarios where a device may fail to receive a `joinAccept` from the network server:

- **Frequency Change:** If you alter the frequency settings but retain the same device credentials on the network server, the device may not synchronize properly.

- **Device Flash Cleaned:** If you've cleared the device's flash memory but continue using the same credentials, this can lead to synchronization issues.

In both cases, it's crucial to ensure that the OTAA (Over-the-Air Activation) device nonces (number used once) are in sync. To address this, use the `Flush OTAA device nonces` feature on your network server. This action will reset the nonces and help re-establish a proper connection.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_flush_nonces.png"/>
</div>

</details>

## ODM Service

Seeed Studio offers a comprehensive one-stop ODM service to accommodate rapid customizations and scaling requirements for diverse needs. If you're looking to tailor your project with specialized features or need assistance in scaling up your operations efficiently, please reach out to us. For inquiries and more detailed information, contact us at iot@seeed.cc. We're here to help turn your unique ideas into reality.

## Tech Support

**Need help with your SenseCAP Indicator? We're here to assist you!**

If you encounter any issues or have any questions while following this tutorial, please feel free to reach out to our tech support. We are always here to help!

Visit our [Seeed Official Discord Channel](https://discord.com/invite/QqMgVwHT3X) to ask your questions or the [GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) to share all you want!