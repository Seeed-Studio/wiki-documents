---
description: This is SenseCraft-HomeAssistant User Manual
title: SenseCraft-HomeAssistant User Manual
keywords:
- home assistant 
slug: /sensecraft_homeassistant_userguide
last_update:
  date: 04/12/2024
  author: WenHao
---

# SenseCraft-HomeAssistant User Manual

## Introduction

SenseCraft-HomeAssistant is a plugin for HomeAssistant. By using this plugin, users can log in with the SenseCraft Data Platform (originally SenseCAP Cloud Platform) account to access cloud devices and sensor data on the HomeAssistant platform, generating custom device reporting dashboards.

:::note
The SenseCraft-HomeAssistant plugin is currently only available for installation via HACS, which is a third-party app store on the HomeAssistant system. When the official integrations provided by HomeAssistant are not sufficient, HACS allows for the easy addition and management of third-party integrations.
:::

### 1.1 Installation Steps for HACS

Since downloading the HACS plugin requires terminal commands, you must first install the Terminal app.

1. **Enable Advanced Mode and Search for Terminal App**

- Open the Advanced Mode and navigate to the Add-ons and search for the Terminal application.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage2.png" alt="pir" width={800} height="auto" /></p>

- If you cannot find it, first check your network connection, then try restarting HomeAssistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage3.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage4.png" alt="pir" width={800} height="auto" /></p>

2. **Install, Launch, and Open the Terminal Interface**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage5.png" alt="pir" width={800} height="auto" /></p>

3. **Enter the following commands in the terminal to download the HACS installation package** (details at [https://hacs.xyz/docs/setup/download](https://hacs.xyz/docs/setup/download)):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage6.png" alt="pir" width={800} height="auto" /></p>

- Enter the config directory:

```
cd config
```

- Download and install HACS:

```
wget -q -O - https://install.hacs.xyz | bash -
```

4. **Restart Home Assistant**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage7.png" alt="pir" width={800} height="auto" /></p>

5. **Search for and Install the HACS Plugin**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage8.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage9.png" alt="pir" width={800} height="auto" /></p>

6. **A license agreement will pop up; check all agreements and submit**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage10.png" alt="pir" width={800} height="auto" /></p>

7. **Click the link to go to the GitHub page and log in, then enter the 8-letter code at the bottom into the GitHub interface**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage11.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage12.png" alt="pir" width={800} height="auto" /></p>

8. **Authorize**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage13.png" alt="pir" width={800} height="auto" /></p>

9. **At this point, the HACS store is installed**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage14.png" alt="pir" width={800} height="auto" /></p>

### 1.2 Installing the SenseCraft Plugin

1. After completing the above steps, a new "HACS" item will appear in the left menu bar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage15.png" alt="pir" width={800} height="auto" /></p>

2. Enter the SenseCraft repository URL and category, then click the "Add" button:

:::note

- Repository: `https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git`
- Category: `Integration`

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage16.png" alt="pir" width={800} height="auto" /></p>

3. Enter 'sensecraft' in the search box and find the SenseCraft plugin.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage17.png" alt="pir" width={800} height="auto" /></p>

4. Click on the SenseCraft plugin, go to the plugin introduction page and click the "Download" button.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage18.png" alt="pir" width={800} height="auto" /></p>

This completes the addition of SenseCraft to your current Home Assistant setup.

## Grove Vision AI(V2) with SenseCraft-HomeAssistant

If you've just acquired the device without firmware or a model, you'll need to burn the firmware and model first.

If the device already has firmware and model, you can skip the **step 2**. Here’s how to check if your device contains firmware and models, as firmware and models are bundled together.

### 2.1 Check if the Device Contains Firmware and Models

1. Open the website [https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) and connect the device to your computer.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage19.png" alt="pir" width={800} height="auto" /></p>

2. Connect the Grove Vision AI V2 to the computer

3. Switch to Grove Vision AI option.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage20.png" alt="pir" width={800} height="auto" /></p>

4. If it's the first time, you will be prompted for permissions, select the device that appears and click connect.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage21.png" alt="pir" width={800} height="auto" /></p>

5. If the information and images shown resemble the ones in the screenshot, it is functioning correctly.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage22.png" alt="pir" width={800} height="auto" /></p>

### 2.2 Burning Firmware and Models

If no model information is detected and there is no live preview, it indicates that the firmware and model need to be re-burned.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage23.png" alt="pir" width={800} height="auto" /></p>

Choose one of the pre-set models (e.g., Gender Detection) and click 'Send'. Wait for the firmware to complete burning.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage24.png" alt="pir" width={800} height="auto" /></p>

### 2.3 Setting Up MQTT Service

#### Opention 1: Setting Up MQTT Service in Home Assistant

1. **Open “Configuration > Add-ons > Add-on Store”** and find the "Add-on Store" at the bottom right.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage25.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage26.png" alt="pir" width={300} height="auto" /></p>

2. Search for “mqtt” in the store.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage27.png" alt="pir" width={800} height="auto" /></p>

3. Click to install and configure the MQTT service with username and password:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage28.png" alt="pir" width={400} height="auto" /></p>

4. Navigate to “Options > Logins” and replace the user or passwd with your desired username and password. Save the configuration.

:::note

- username: user
- password: passwd

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage29.png" alt="pir" width={800} height="auto" /></p>

:::note
If there are no errors, it means success, if there are errors, you can try to uninstall and reinstall, and then configure again.
:::

#### Option 2: Installing MQTT Service on Your Own Computer

1. **Download EMQX** for your system from [https://www.emqx.com/en/downloads/broker/5.4.0](https://www.emqx.com/en/downloads/broker/5.4.0) and follow the given instructions for your OS.

2. Take MacOS as an example:

Using:

```
wget https://www.emqx.com/en/downloads/broker/5.4.0/emqx-5.4.0-macos13-amd64.zip
```

to download the package. And installing EMQX:

```
mkdir -p emqx && unzip emqx-5.4.0-macos13-amd64.zip -d emqx
```

Finally running EMQX:

```
./emqx/bin/emqx start
```

3. Test if it is functional:

Go to the [MQTT download](https://mqttx.app/downloads) to download the terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage30.png" alt="pir" width={800} height="auto" /></p>

### Verifying MQTT Service Success

- Download the MQTTX client from the [MQTTX Download page](https://mqttx.app/downloads) to ensure your MQTT service can be accessed from your PC (either deployed on a public network server or within the same network segment as your PC).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage31.png" alt="pir" width={800} height="auto" /></p>

- Connecting successfully indicates no issues.

### 2.4 Configuring WIFI and MQTT

#### Why configure these two?

Because the operation of Grove Vision AI in Home Assistant is done through MQTT, and MQTT itself requires a network connection, which is why it is necessary to configure WIFI. Note that you cannot select 5G WIFI. Go to the configuration page:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage32.png" alt="pir" width={800} height="auto" /></p>

Enter the corresponding information and click save. However, saving here just saves the information, it is not known whether it has actually been configured okay. You need to switch back to the Process page:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage33.png" alt="pir" width={800} height="auto" /></p>

When the IP Address shows an IP address, it means there are no problems with the WIFI. The Service status must be as shown in the picture to indicate normal operation. Note, if the WIFI is not normal, then MQTT will definitely not be normal.

When switching over, it might initially show as disconnected and you may need to wait approximately 10s, but generally no more than 20s.

**You do not need to refresh to see the status; the status will automatically update to show the latest.**

### 2.5 Integrate into HA via Discovery

To have your device appear in the discovered section, you need to ensure the device and HA are on the same network segment, otherwise, it will not appear. If you are unsure about the network segment, you can connect the network of HA and the device to the same WIFI or say, the same router via ethernet.

If you have just completed the above operation, it is best to power off the device and plug it in again. Enter the configuration page:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage34a.png" alt="pir" width={800} height="auto" /></p>

Then you see the following page:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage34.png" alt="pir" width={800} height="auto" /></p>

Here, we can see the first device discovered. You can check the corresponding id to see if it is your device:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage35.png" alt="pir" width={400} height="auto" /></p>

The circled part is the device ID, corresponding to the device ID on the website:
https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage36.png" alt="pir" width={400} height="auto" /></p>

If it is indeed your device, then click configure. Here, if your MQTT service does not have a username and password, the following dialog box will be displayed, otherwise, it will prompt you to enter a username and password. Then click submit.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage37.png" alt="pir" width={800} height="auto" /></p>

If your MQTT service has a username and password, then:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage38.png" alt="pir" width={600} height="auto" /></p>

Then it's about choosing the region, that is, where your device is located, such as the living room, kitchen, etc.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage39.png" alt="pir" width={600} height="auto" /></p>

I chose living room here, then click done, and thus the device is added to HA. At this point, you can click overview to see the effect of the completed configuration.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage40.png" alt="pir" width={800} height="auto" /></p>

### 2.6 Manually Integrate into HA

If you can use the discovered devices, please configure from the discovered section as it is simpler than manual configuration. Select configuration, then devices and services.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage41.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage42.png" alt="pir" width={800} height="auto" /></p>

Then select **Another instance of the device "SenseCraft"** as shown:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage43.png" alt="pir" width={500} height="auto" /></p>

Then select **Add device using host/id (LAN integration)**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage44.png" alt="pir" width={500} height="auto" /></p>

Then click submit, select `grove_vision_ai_we2` from the dropdown, and click submit.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage45.png" alt="pir" width={500} height="auto" /></p>

Then enter the device ID, which is the device ID corresponding to the website, not something arbitrary.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage46.png" alt="pir" width={500} height="auto" /></p>

Then click submit, next is configuring the MQTT service.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage47.png" alt="pir" width={500} height="auto" /></p>

The details filled here should be consistent with those configured on the website; previously, there was no username and password, so no need to fill those here. Then click submit, if successful, you will be asked to choose a location for the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage48.png" alt="pir" width={500} height="auto" /></p>

Choose the location based on actual circumstances, then click done. This way you can see the effect in the overview, the rest is the same as the “discovered” method.

## Integrate Sensor Nodes into HA

Our company has many sensors, such as light, carbon dioxide, etc., which can also be easily integrated into HA. To integrate sensor nodes, it is necessary to have an account on the [SENSECAP website](https://sensecap.seeed.cc/portal/), so you first need to register an account there, depending on whether you are registering on the international or domestic site, and add your sensor nodes to your account.

Below we will first discuss how to add devices through the app:

- [SenseCAP Mate App](https://sensecap-mate-download.seeed.cn/)

### 3.1 Add sensor nodes through the sensecap mate app

Please log in to the homepage of the app first. Follow the steps below to add.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage49.png" alt="pir" width={800} height="auto" /></p>

### 3.2 Adding sensor nodes through the website

Go to the [SENSECAP website](https://sensecap.seeed.cc/portal/), enter the EUI, Key, etc., of your sensor device, and then click confirm.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage50.png" alt="pir" width={800} height="auto" /></p>

Then you can see the devices you have added in the sensor node list.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage51.png" alt="pir" width={800} height="auto" /></p>

### 3.3 Adding to HA

Go to “Configuration >Add Integration”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage52.png" alt="pir" width={800} height="auto" /></p>

In the dialog that appears, search for "sensecraft".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage53.png" alt="pir" width={500} height="auto" /></p>

Then click on the filter result, enter and select **another instance of device "SenseCraft"**, then select "Add devices using SenseCraft Account".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage54.png" alt="pir" width={800} height="auto" /></p>

Click Submit, then enter the registered account and password, and select an environment, that is, you registered international station (global) or domestic station (china).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage55.png" alt="pir" width={500} height="auto" /></p>

Once added, you can configure the sensor settings according to your needs.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage56.png" alt="pir" width={500} height="auto" /></p>

## What's More

Integrating Home Assistant to NVIDIA Jetson will be coming soon!

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
