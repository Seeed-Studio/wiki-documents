---
description: Get Started with Wio-WM1110 Dev Kit
title: Get Started with Wio-WM1110 Dev Kit
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_Wio-WM1110_Dev_Kit
sidebar_position: 2
last_update:
  date: 8/7/2023
  author: Jessie
---

## Preparation

- Wio-WM1110 Dev Kit x 1
- Computer x 1
- USB Type-C Cable x 1
- J-Link Debug Programmer x 1

### Device Connection

Connect the Wio-WM1110 Dev Board to the J-Link Debug Programmer as follows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_connection.png" alt="pir" width={800} height="auto" /></p>

:::info Connection:
**3V3** (Wio-WM1110 Dev Board) -> **VTref** (J-Link Debug Programmer Pin 1)  
**CLK** (Wio-WM1110 Dev Board) -> **SWCLK** (J-Link Debug Programmer Pin 9)  
**DIO** (Wio-WM1110 Dev Board) -> **SWDIO** (J-Link Debug Programmer Pin 7)  
**GND** (Wio-WM1110 Dev Board) -> **GND** (J-Link Debug Programmer GND)
:::

### Set up your toolchain

Before you can start developing，the following tools are required for this Getting Started Guide.

#### SEGGER Embedded Studio (SES)

SES is an all-in-one solution for managing, building, testing and deploying embedded applications. This means smooth, efficient development operations thanks to its wide range of features. The powerful project manager enables the management of projects large and small. Version control features enable automatic application deployment.

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-Download</span></a>

:::tip
It's recommended to use 5.68 version.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### SEGGER J-Link Software and Documentation Pack

<a  href="https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack" target="_blank"><span>SEGGER J-Link Software and Documentation Pack-Download</span></a>

#### nRF5 SDK

The nRF5 SDK provides a rich developing environment for nRF5 Series devices by including a broad selection of drivers, libraries, examples for peripherals, SoftDevices, and proprietary radio protocols.

All code examples included in the SDK are tailored to compile for and run on Wio-WM1110 Dev Kit.

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-Download</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Seeed Example Package

Seeed provides an example project for developers to get started more quickly. This example includes LoRaWAN communication, positioning information acquisition, onboard sensor data acquisition, etc.

<a  href="https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board" target="_blank"><span>Seeed Example-Download</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/list.png" alt="pir" width={600} height="auto" /></p>

## Running a First Test

**Add Seeed Example file to nRF5 SDK**

Copy the [Seeed Example file](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board) to the following path of nRF5 SDK:
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/copyfile.png" alt="pir" width={800} height="auto" /></p>

Let's build the ses_blinky" project to check if your toolchain is set up correctly.
Import the "ses_blinky" project.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/open-project.png" alt="pir" width={800} height="auto" /></p>

**Compiling the test application**

Select "Build" > "Compile project_target".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/complie.png" alt="pir" width={800} height="auto" /></p>

**Programming the test application**

After compiling the application, you can program it to the Dev board.

Click "Target" -- "Connect J-Link"
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/connect-to-JLink.png" alt="pir" width={800} height="auto" /></p>

Click "Build" -- "Build and Run" to build the blinky project.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/run.png" alt="pir" width={800} height="auto" /></p>

You will see "Download successful" when it has completed.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/download-seccessful.png" alt="pir" width={800} height="auto" /></p>

Then the 2 LEDs on the board will blink as follows.

<div align="center"><img width={253} src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/blink-test.gif" /></div>

## Get Started

This chapter will walk you through displaying current location information on Node-Red via TTN, and explains how to set up all required servers(Network Server(NS) and an Application Server(AS)).

**Architecture & Data Flow**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/flow.png" alt="pir" width={800} height="auto" /></p>

### Setup the Keys

Before a device can communicate via the NS, we need to register it with the 3 keys.

Wio-WM1110 DK allows users to set the DevEUI, AppEUI, and AppKey, this is required on the next steps, so you can define our own parameters in the 'lorawan_key_config.h' file, then flash it onto the DK.

File located at:
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board/apps/common/lorawan_key_config.h`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>

Or you can get the keys generated by TTN, then fill into the 'lorawan_key_config.h' file and run it on the DK.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

### LoRa Cloud™ Modem & Geolocation Services

The LoRa Cloud Modem & Geolocation Services provide a full set of lifecycle management features for LoRa® devices operating on a LoRaWAN network. These features include but are not limited to:

- Comprehensive device telemetry
- Device and application configuration
- Clock synchronization
- Advanced data transport services with robustness against packet loss and transparent data fragmentation (buffer streaming and file upload).
- Geolocation

To begin, go to the [LoRa Cloud™ portal](https://www.loracloud.com/?__hstc=212684107.3eb7c02aaa159a9e414cb1b589ca989c.1678419369281.1686727930327.1686794688289.35&__hssc=212684107.3.1686794688289&__hsfp=1476773244) and register for an account.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/signup.png" alt="pir" width={800} height="auto" /></p>

#### Step 1: Create an Owner

To create a token, you first need to create an owner.
Navigate to the DEVICE OWNERS page.
Click CREATE NEW OWNER.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner2.png" alt="pir" width={800} height="auto" /></p>

#### Step 2: Get a Token

A token is required for the application server to authenticate calls to the LoRa Cloud Modem & Geolocation Services server.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/tokens.png" alt="pir" width={800} height="auto" /></p>

#### Step 3: API URL

The LoRa Cloud Modem & Geolocation Services URL depends on the region in which the device will be deployed.
Click "Manage Tokens", then you can check the API URL:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MGS.png" alt="pir" width={800} height="auto" /></p>

:::tip
When data is received from a device, it is automatically registered with the LoRa Cloud Modem & Geolocation Services server. This means that the device does not need to be registered beforehand.
:::

### LoRaWAN® Network Server(TTN)

Currently we use [The Things Network V3](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)

To begin, register for an account with The Things Industries or The Things Network.

#### Step 1: Create an application

Navigate to Applications page, click "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Enter an Application ID, click Create Application to save your changes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Step 2: Register the Device

Click "Register end device".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Set the following parameters:

**Frequency Plan**: Select the appropriate Frequency plan for the target region

**LoRaWAN version**:LoRaWAN Specification 1.0.3

**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip
JoinEUI/DevEUI/APPEUI: Which you defined in the 'lorawan_key_config.h' file in the previous setting.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

#### Step 3: Create Credentials

The Things Network V3 network server requires that you generate a unique MQTT password. On the Application page of the console:

- Click Integrations and then MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT1.png" alt="pir" width={800} height="auto" /></p>

- Select Generate new API Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/API_key.png" alt="pir" width={800} height="auto" /></p>

- Copy the values from the following fields: Server Address, Username, and Password.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

### Application Server

The application server handles application data and device management frames. As there is no background connection between the LoRaWAN® network server and the LoRa Cloud™ Modem & Geolocation Services, all uplinks related to modem traffic must be forwarded by the application server to the Lora Cloud Modem & Geolocation Services.

We use Node-RED as the application server. Node-RED is a browser-based visual programming tool that allows for fast prototyping. Built on Node.js, Node-RED can be used to wire flows together using a wide array of nodes. These nodes can then be deployed to the Node-RED runtime with a single click.

#### Install Node.js®

To install Node-RED locally you will need a <a  href="https://nodered.org/docs/faq/node-versions" target="_blank"><span> Supported Node Version </span></a>

Download the latest 16.x LTS version of Node.js from the official <a  href="https://nodejs.org/en/" target="_blank"><span>Node.js</span></a>. It will offer you the best version for your system.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodejs_version.png" alt="pir" width={600} height="auto" /></p>

When installing Node.js, if you are using a computer that has not had any programming environment installed, we would recommend that you check the box to install the necessary tools while installing Node.js, which will save you a lot of necessary trouble.

The easiest way to install Node-RED is, using Node's package management tool, npm. However, we do not recommend installing Node-RED with npm 1.x, but rather upgrading it to the latest npm 2.x version.

:::note
On Windows (Requires Windows 10 and above), use the Win+R shortcut and type cmd in the pop-up window to bring up the terminal and execute the following command.
:::

If you are using MacOS or Linux, please execute the following command in the terminal and add sudo in front of the command for non-root users.

```cpp
npm install -g npm@2.x
```

Once installed, open a command prompt and run the following command to ensure Node.js and npm are installed correctly.

```cpp
node --version && npm --version
```

You should receive back output that looks similar to:

```cpp
> v18.7.0
> 9.6.5
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/npm_version.png" alt="pir" width={600} height="auto" /></p>

#### Install Node-RED

Installing Node-RED as a global module adds the command node-red to your system path. Execute the following at the command prompt:

```cpp
npm install -g --unsafe-perm node-red
```

If Node-RED is installed as a global npm package, then execute the command node-red directly:

```cpp
node-red
```

This will allow you to see the Node-RED editor on http://localhost:1880.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/node-red.png" alt="pir" width={600} height="auto" /></p>

The user interface has three key areas:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodered1.png" alt="pir" width={800} height="auto" /></p>

- **Palette**: This is where you can select nodes; these are functional blocks that can be dragged-and-dropped, and then can be linked together to create a flow.
- **Flow**: This is the source code of the program. In this pane, you can link nodes together to create an application.
- **Sidebar**: The Sidebar displays any Help or debugging information available for the selected node.

#### Install libraries

To set up the demonstration, we will install 2 additional libraries:

- [node-red-contrib-loracloud-utils](https://www.npmjs.com/package/@semtech-wsp-apps/node-red-contrib-loracloud-utils): Handles connections to LoRa Cloud™ servers

- [node-red-contrib-web-worldmap](https://www.npmjs.com/package/node-red-contrib-web-worldmap): World map web page for plotting "things" on

Click the menu in the top right corner and select "Manage palette".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install.png" alt="pir" width={800} height="auto" /></p>

Select Install on the Palette menu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_pak.png" alt="pir" width={800} height="auto" /></p>

Search for "node-red-contrib-loracloud-utils" and install.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_loracloud.png" alt="pir" width={800} height="auto" /></p>

Repeat these steps to install the "node-red-contrib-web-worldmap" libraries.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_worldmap.png" alt="pir" width={800} height="auto" /></p>

#### Importing the Flow

The Seeed package includes useful samples to walk you through this example project,just need to import these 2 config file.

```
.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/modem.json

.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/geolocation.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow2.png" alt="pir" width={800} height="auto" /></p>

Then you will see the following flows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow3.png" alt="pir" width={800} height="auto" /></p>

#### Configure the Flow

**Configuring the LoRaWAN Network Server (MQTT)**
All network server connectors are activated by default; however, the MQTT connection must be set up separately.
Before you begin, get the required data:

- MQTT server address
- MQTT port
- MQTT username
- MQTT password

This data can be obtained in **Step 3: Create Credentials**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

Doule click"TTN v3-Uplinks" node,and edit MQTT node.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt1.png" alt="pir" width={800} height="auto" /></p>

You can find the Server, Port in the [previous step](https://wiki.seeedstudio.com/Wio-WM1110_Dev_Kit_Server_Configuration/#step-3-create-credentials:~:text=Copy%20the%20values%20from%20the%20following%20fields%3A%20Server%20Address%2C%20Username%2C%20and%20Password.).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_TLS.png" alt="pir" width={800} height="auto" /></p>

Then add the username and password to "Security".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_se.png" alt="pir" width={800} height="auto" /></p>

Click Add and then click Done.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/add_and_done.png" alt="pir" width={600} height="auto" /></p>

Doule click"TTN joinReq" node,and select the MQTT server we added in the previous step.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/select_server.png" alt="pir" width={800} height="auto" /></p>

**Modem & Geolocation Service Configuration**

To configure the server, the MGS URL and MGS TOKEN values from the [previous step](https://wiki.seeedstudio.com/Wio-WM1110_Dev_Kit_Server_Configuration/#step-2-get-a-token)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_url.png" alt="pir" width={800} height="auto" /></p>

Fill in the EUI of your device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_eui.png" alt="pir" width={800} height="auto" /></p>

Click "Deploy" button to delpoy the flow.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/deploy.png" alt="pir" width={800} height="auto" /></p>

#### Data View

Click "Debug", to view the data returned by the LoRa Cloud Modem & Geolocation Services:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/debug_page.png" alt="pir" width={800} height="auto" /></p>

**Geolocation**

To display the map, add `/worldmap` to the URL in your web browser.
For example: http://127.0.0.1:1880/worldmap

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/map_page.png" alt="pir" width={800} height="auto" /></p>

## Resources

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)

[SEGGER J-Link Software and Documentation Pack](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)

## Tech Support

**Need help with your Wio-WM1110 Dev Kit? We're here to assist you!**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
