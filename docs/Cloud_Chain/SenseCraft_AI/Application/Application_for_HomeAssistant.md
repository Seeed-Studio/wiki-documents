---
description: Introducing how to plug Grove Vision AI V2 into HomeAssistant.
title: Application for HomeAssistant
keywords:
- vision AI
- home assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/application-for-homeassistant
aliases:
  - /connect_vision_ai_v2_to_ha
sidebar_position: 1
last_update:
  date: 01/10/2024
  author: Citric
---

# Connect Grove Vision AI V2 to Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

Integrating Grove Vision AI V2 into Home Assistant can elevate your smart home setup by adding advanced visual sensing capabilities. This integration allows for real-time environmental analysis and customized automation, making your home environment more intelligent and responsive.

To facilitate this integration, the SenseCraft-HomeAssistant plugin, accessible via the HACS store, connects your Grove Vision AI V2 to Home Assistant through the SenseCraft Data Platform. This process is streamlined and user-friendly, requiring just a SenseCraft account login to bring your device and sensor data into the Home Assistant ecosystem, ready for you to customize and control.

Below is the main content framework of this article.

1. [Installing the HACS plugin](#installing-the-hacs-plugin): Install the Home Assistant Community Store (HACS) to enable the installation of Seeed Studio's SenseCraft plugin within Home Assistant.
2. [Installing the SenseCraft plugin](#installing-the-sensecraft-plugin): Install the SenseCraft plugin by Seeed Studio, which allows for the swift deployment of Seeed Studio's products into Home Assistant.
3. [Preparing the model for Grove Vision AI V2](#preparing-the-model-for-grove-vision-ai-v2): Select and deploy the model you wish to use for the Grove Vision AI V2, and thereafter, Home Assistant will receive the information of the recognition scene and results from Vision AI.
4. [Building MQTT Services at Home Assistant](#building-mqtt-services-at-home-assistant): Leverage a local MQTT service to transmit data from the Grove Vision AI V2 and XIAO to Home Assistant.
5. [Integrate Grove Vision AI V2 into Home Assistant](#integrate-grove-vision-ai-v2-into-home-assistant): Integrate Grove Vision AI V2 into Home Assistant and set up a visual dashboard for configuration.

## Getting Started

Before the tutorial content of this article begins, you may need to have the following hardware ready.

### Materials Required

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
   <th>XIAO ESP32C3</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Home Assistant Green is the easiest and most privacy-focused way to automate your home. It offers an effortless setup and allows you to control all the smart devices with just one system, where all the data is stored locally by default. This board benefits from the thriving Home Assistant ecosystem and it will be improved every month by open source.

We recommend using Home Assistant Green as the Home Assistant host for this tutorial, or you can use any Home Assistant host with a Supervisor.

You then need to connect the XIAO and Grove Vision AI V2 via the row of pins (or use the expansion board and Grove interface).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## Installing the HACS plugin

### Step 1. Open Advanced Mode in Home Assistant

To unlock the full potential of Home Assistant and gain access to advanced features, you can enable "Advanced Mode" in the user interface.

Navigate to your [Home Assistant web interface](http://homeassistant.local:8123). Click on your profile icon at the bottom left corner of the Home Assistant sidebar. On your profile page, scroll down to find the **Advanced Mode** toggle. Switch the toggle to the on position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### Step 2. Install Terminal & SSH

Click on **Settings** in the sidebar to access the settings menu. Click on **Add-ons** to access the add-on store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

Use the search bar or browse through the available add-ons to find **Terminal & SSH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

Once you've located **Terminal & SSH**, click on it to view the details. On the add-on's page, you'll see an overview, documentation, and configuration options. To install the add-on, click the **Install** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Step 3. Install HACS

Find the recently downloaded **Terminal & SSH** in the sidebar. In the terminal, navigate to the config directory, which is the root of your Home Assistant configuration:

```
cd /config
```

Execute the following command to download and run the HACS installation script:

```
wget -q -O - https://install.hacs.xyz | bash -
```

After the installation script has finished, you need to restart Home Assistant to apply the changes. You can restart Home Assistant through the UI by going to **Settings > System > Restart**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

After the reboot, click on **Settings** in the sidebar to open the settings menu. Within the settings menu, navigate to **Devices & Services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

Click on **ADD INTEGRATION** to add a new integration to your Home Assistant setup.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

In the search bar, type **HACS** to look for the Home Assistant Community Store integration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

If HACS is found, it should appear in the list of available integrations. Click on it to start the installation process.

A license agreement or terms of service may pop up. Read through the agreement carefully, and if you agree to the terms, check all the boxes to indicate your agreement. Click **SUBMIT** to proceed with the installation.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

Next, you will be prompted to log in with your GitHub account. This is necessary because HACS integrates with GitHub to manage the installation of community-created integrations and plugins.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

Follow the instructions to authorize Home Assistant to access your GitHub account. This will typically involve entering a verification code provided by GitHub to confirm your identity.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Once you have authorized Home Assistant to use your GitHub account, HACS will finish installing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

You may need to restart Home Assistant for HACS to fully integrate into your system.

## Installing the SenseCraft plugin

### Step 4. Installation of the SenseCraft plugin via HACS

Look for HACS in the sidebar and click on it to open the HACS interface. In the bottom right corner, you'll find a menu button (three dots or a plus sign, depending on your HACS version). Click on **Custom repositories**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

A dialog box will appear asking you to input the repository URL. Here, you will enter the custom repository URL for the SenseCraft integration. After entering the URL, select the category (for the SenseCraft integration, you would select **Integration**).

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

Click on **Add**. The repository is now added to your HACS, and you should be able to find the SenseCraft integration in the list under **Integrations**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

Locate the SenseCraft integration and click "DOWNLOAD".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

By this point, we have successfully completed the installation of the SenseCraft plugin.

## Preparing the model for Grove Vision AI V2

### Step 5. Flash Firmware for XIAO ESP32C3

Connect the XIAO ESP32C3 to your computer using a suitable USB-C cable. Ensure the device drivers are installed correctly.

Open the [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) in your web browser.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI Tool</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

Then select **XIAO ESP32S3** and click **Connect**.

:::caution
Note that although the XIAO ESP32S3 is selected here, we are still using the XIAO ESP32C3!
:::

Click the button below to download the firmware file and click the **Add File** button on the web page to flash the `SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin` firmware for the `0x0` address.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download the file</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

Finally, click the **Flash** button and wait for the programme to be uploaded successfully before disconnecting the XIAO ESP32C3 from the computer.

### Step 6. Connect the Grove Vision AI V2 to the SenseCraft AI Model Assistant

First, we need to open the main SenseCraft AI page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft AI</font></span></strong></a>
</div>
<br />

Click on **Vision Workspace -> Grove Vision AI V2** in the navigation menu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/52.png" style={{width:1000, height:'auto'}}/></div>

Please use a Type-C type cable to connect **Grove Vision AI V2** to your computer.

Then click the **Connect** button in the upper left corner and select the port number of the device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/53.png" style={{width:500, height:'auto'}}/></div>

### Step 7. Upload a suitable model

Then, please select the appropriate model you want to use after clicking **Select Model** to upload it to Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/54.png" style={{width:1000, height:'auto'}}/></div>

Wait for 1~2 minutes for the model to be uploaded.

### Step 8. Observations

Once the model is uploaded successfully, you will be able to see the live feed from the Grove Vision AI V2 camera in the Preview on the right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/55.png" style={{width:1000, height:'auto'}}/></div>

<br />

We can see that in the Preview Settings on the right hand side, there are two setting options that can be changed to optimise the recognition accuracy of the model.

:::tip
If there is no screen displayed in Preview or there is no information in the model information, there may be a problem with the model and you need to reselect the model or upload it again.
:::

## Building MQTT Services at Home Assistant

### Step 9. Install EMQX

Click on **Settings** in the sidebar to access the settings menu. Click on **Add-ons** to access the add-on store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

Use the search bar or browse through the available add-ons to find **emqx**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

Once you've located **EMQX**, click on it to view the details. On the add-on's page, you'll see an overview, documentation, and configuration options. To install the add-on, click the **Install** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

Once the EMQX Add-on is installed, turn on the **Start on boot**, **Watchdog** and **Show in sidebar** toggles. Click **Start** to start EMQX.

In the EMQX Dashboard login page, enter the default username and password.

- Default username: **admin**
- Default password: **public**

Click on the "Login" button to access the EMQX Dashboard.

In the EMQX Dashboard, navigate to the **Authentication** section from the left sidebar menu. Click on the **Databases** tab.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

Click on the **Create** button. In the **Mechanism** dropdown, select **Password-Based**, In the **Backend** dropdown, select **Built-in Database**. Click on the "Create" button to create the Built-in Database.

After creating the Built-in Database, click on the **Users** tab in the "Authentication" section. Click on the "Add User" button.

- In the "Username" field, enter "seeed".
- In the "Password" field, enter "seeed".

Go back to the "Databases" tab in the "Authentication" section. Locate the previously created database in the list of databases.

Click on the toggle switch next to the database to enable it. The database status should change to "Enabled".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

## Integrate Grove Vision AI V2 into Home Assistant

### Step 10. Configuring the network for Grove Vision AI V2 & XIAO

Connect the Grove Vision AI V2 to your computer and open the Grove Vision AI V2 configuration page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/56.png" style={{width:1000, height:'auto'}}/></div>

After clicking on the top left corner to connect to Grove Vision AI V2, please turn on the MQTT button and enter the following information that you need to fill in the page.

- **SSID & Password**: The device needs to be on the same LAN as the host where the Home Asistant is installed. So please configure the network under the same LAN. XIAO only supports 2.4G WiFi, 5G network is not available.
- **Encryption**: Select **AUTO**.
- **Host**: IP address of the host where Home Assistant is installed.
- **Port**: `1883`.
- **clientId**: For the device identification number, please prefix it with `grove_vision_ai_v2_` followed by the custom ID number.
- **username**: The name of the EMQX database you just create.
- **password**: The password of the EMQX database you just create.

Then click the **Apply** button below. After saving, it **does not mean that Grove Vision AI is connected to the network**, please go back to **Process** in the left menu bar and check if the IP address of the device has appeared and if the status of the MQTT connection is correct.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/57.png" style={{width:1000, height:'auto'}}/></div>

:::caution
When IP Address is displayed, it means there is no problem with WIFI, and Service status must be the text in the figure to represent normal, note that if WIFI is not normal, MQTT is definitely not normal; when you just switch over, it may show unconnected, and you need to wait for about 10s or so, you don't need to refresh to see the status, and it will show the newest status after the change of the status automatically.
:::

### Step 11. Integration into Home Assistant

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Scenario 1. If the device has been found" label="Scenario 1. If the device has been found">

By this point, normally, you can already search for Grove Vision AI V2 inside **Settings->Devices & services** in Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

Please click the **Configure** button to set the relevant information, and you have finished adding the device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

In **Settings->Devices & services**, you will be able to see the details of the device and show the supported tabs, you can add as many tabs as you want to show in the overview.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::note

1. If you configured a username and password in the previous steps, you may be asked to enter them when you add a device.
2. If you have more than one Vision AI device to add to Home Assistant, keep an eye out for the device's ID number, which serves as a distinguishing mark between the different Grove flags.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

</TabItem>

<TabItem value="Scenario 2. If the device is not found" label="Scenario 2. If the device is not found">

If there are too many devices in your home, they may not be directly searchable by Home Assistant sometimes. Then at this time you may need to add devices manually.

In the **Settings** page, choose **Devices & Services**.

Then click the **ADD INTEGRATION** button in the bottom right corner and search for **SenseCraft**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

Click on SenseCraft and select Action as **Add device using host/id**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

Click **SUBMIT**, then select your device type from the dropdown menu, such as `Grove Vision AI V2`, and click **SUBMIT** again.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:500, height:'auto'}}/></div>

In the following input field, enter the exact ID of your device. This ID is usually found on the device itself or on the SenseCraft AI website.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/70.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/58.png" style={{width:1000, height:'auto'}}/></div>

The next step is to configure the MQTT service. Enter the information that matches the MQTT service details you have set up on the website. If you haven't set up a username and password previously, you don't need to fill them in here. Then click **SUBMIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/59.png" style={{width:500, height:'auto'}}/></div>

- **Broker**: Home Assistant's IP address.
- **Port**: `1883`.
- **clientId**: For the device identification number, please prefix it with `grove_vision_ai_v2_` followed by the custom ID number.
- **username**: The name of the EMQX database you just create.
- **password**: The password of the EMQX database you just create.

</TabItem>

</Tabs>

If the setup is successful, the system will usually prompt you to select a location for your device. Choose the appropriate room or area based on your actual situation and click **Finish**.

Once the configuration is complete, you can view your device and its status on the "Overview" page of Home Assistant.

Following these steps should allow you to successfully add the "SenseCraft" device to your Home Assistant instance and configure it to use the MQTT service.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

## Troubleshooting

### Q1: What should I do if I never see the data messages in HA again after the Grove Vision AI V2 drops?

You may need to delete the device and re-add it in SenseCraft. After deleting it may not be able to be automatically searched again and you will need to manually add the device. Please refer to the **[steps here](#step-11-integration-into-home-assistant)** to re-add the device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

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
