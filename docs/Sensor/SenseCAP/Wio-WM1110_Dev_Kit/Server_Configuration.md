---
description: Wio-WM1110 Dev Kit_Server Configuration
title: Server Configuration
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-WM1110_Dev_Kit_Server_Configuration
last_update:
  date: 6/26/2023
  author: Jessie
---





This guide walks you through the steps to set up all required servers. It also provides several sample applications.

**Architecture & Data Flow**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/modem-e_flow.png" alt="pir" width={800} height="auto" /></p>




## LoRa Cloud™ Modem & Geolocation Services


The LoRa Cloud Modem & Geolocation Services provide a full set of lifecycle management features for LoRa® devices operating on a LoRaWAN network. These features include but are not limited to:

* Comprehensive device telemetry
* Device and application configuration
* Clock synchronization
* Advanced data transport services with robustness against packet loss and transparent data fragmentation (buffer streaming and file upload).
* Geolocation

To begin, go to the [LoRa Cloud™ portal](https://www.loracloud.com/?__hstc=212684107.3eb7c02aaa159a9e414cb1b589ca989c.1678419369281.1686727930327.1686794688289.35&__hssc=212684107.3.1686794688289&__hsfp=1476773244) and register for an account.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/signup.png" alt="pir" width={800} height="auto" /></p>

### Step 1: Create an Owner
To create a token, you first need to create an owner.
Navigate to the DEVICE OWNERS page.
Click CREATE NEW OWNER.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner2.png" alt="pir" width={800} height="auto" /></p>

### Step 2: Get a Token

A token is required for the application server to authenticate calls to the LoRa Cloud Modem & Geolocation Services server. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/tokens.png" alt="pir" width={800} height="auto" /></p>


### Step 3: API URL

The LoRa Cloud Modem & Geolocation Services URL depends on the region in which the device will be deployed. 
Click "Manage Tokens", then you can check the API URL:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MGS.png" alt="pir" width={800} height="auto" /></p>


:::tip 
When data is received from a device, it is automatically registered with the LoRa Cloud Modem & Geolocation Services server. This means that the device does not need to be registered beforehand.
:::




## LoRaWAN® Network Server(TTN)


Currently we use [The Things Network V3](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)



To begin, register for an account with The Things Industries or The Things Network.

Refer to the page What is the difference between The Things Industries and The Things Network? to understand the differences between The Things Industries and The Things Network.

This section use indistincly The Things Industries or The Things Network.

### Step 1: Create an application

Navigate to Applications page, click "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Enter an Application ID, click Create Application to save your changes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>


### Step 2: Register the Device


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


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>





### Step 3: Create Credentials
The Things Network V3 network server requires that you generate a unique MQTT password. On the Application page of the console:

* Click Integrations and then MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT1.png" alt="pir" width={800} height="auto" /></p>


* Select Generate new API Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/API_key.png" alt="pir" width={800} height="auto" /></p>


* Copy the values from the following fields: Server Address, Username, and Password.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>



## Application Server


The application server handles application data and device management frames. As there is no background connection between the LoRaWAN® network server and the LoRa Cloud™ Modem & Geolocation Services, all uplinks related to modem traffic must be forwarded by the application server to the Lora Cloud Modem & Geolocation Services.

We use Node-RED as the application server. Node-RED is a browser-based visual programming tool that allows for fast prototyping. Built on Node.js, Node-RED can be used to wire flows together using a wide array of nodes. These nodes can then be deployed to the Node-RED runtime with a single click.


### Install Node.js®

To install Node-RED locally you will need a <a  href="https://nodered.org/docs/faq/node-versions" target="_blank"><span> Supported Node Version </span></a>


Download the latest 14.x LTS version of Node.js from the official <a  href="https://nodejs.org/en/" target="_blank"><span>Node.js</span></a>
 It will offer you the best version for your system.
 
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


### Install Node-RED

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

* **Palette**: This is where you can select nodes; these are functional blocks that can be dragged-and-dropped, and then can be linked together to create a flow.
* **Flow**: This is the source code of the program. In this pane, you can link nodes together to create an application.
* **Sidebar**: The Sidebar displays any Help or debugging information available for the selected node.

### Importing the Flow

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


### Configure the Flow

Configuring the LoRaWAN Network Server (MQTT)
All network server connectors are activated by default; however, the MQTT connection must be set up separately.
Before you begin, get the required data:
* MQTT server address
* MQTT port
* MQTT username
* MQTT password


This data can be obtained in **Step 3: Create Credentials**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt2.png" alt="pir" width={800} height="auto" /></p>

Doule click"TTN v3-Uplinks" node,and edit MQTT node.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt1.png" alt="pir" width={800} height="auto" /></p>


Enter values in the Server, Port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt2.png" alt="pir" width={800} height="auto" /></p>


#### LoRa Cloud Configuration

To configure the server, the MGS URL and MGS TOKEN values from the LoRa Cloud Modem & Geolocation Services setup step, are required, as is the device’s DevEUI.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_token.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_url.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_eui.png" alt="pir" width={800} height="auto" /></p>

#### Configuring Node-RED User Interface Elements





### Data View

Click "Debug", to view the data returned by the LoRa Cloud Modem & Geolocation Services:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/debug_page.png" alt="pir" width={800} height="auto" /></p>


#### Geolocation 


To display the map, add `/worldmap` to the URL in your web browser. 
For example: http://127.0.0.1:1880/worldmap

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/map_page.png" alt="pir" width={800} height="auto" /></p>






# Tech Support

**Need help with your Wio-WM1110 Dev Kit? We're here to assist you!**




<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board" class="button_discussion"></a>
</div>