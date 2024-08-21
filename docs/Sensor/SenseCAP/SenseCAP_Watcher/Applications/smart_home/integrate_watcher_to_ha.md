---
description: Describes how to plug Watcher into Home Assistant both locally and via SenseCraft.
title: Integrate Watcher to Home Assistant
image: https://files.seeedstudio.com/wiki/watcher_getting_started/45.png
slug: /integrate_watcher_to_ha
sidebar_position: 1
last_update:
  date: 08/20/2024
  author: Citric
---

# Integrate Watcher to Home Assistant


The integration of artificial intelligence (AI) has revolutionized the world of smart home technology, and Watcher, a cutting-edge AI-powered device, has emerged as a game-changer. By seamlessly integrating Watcher with Home Assistant, a popular open-source home automation platform, users can unlock a new level of convenience, security, and efficiency in their smart homes.

In this comprehensive wiki, we will guide you through the process of integrating Watcher with Home Assistant, enabling you to harness the full potential of AI in your smart home setup. Whether you're a seasoned Home Assistant user or a newcomer to home automation, this integration opens up a realm of exciting possibilities, allowing your home to become smarter, more responsive, and tailored to your unique needs.

Below is the main content framework of this article.

1. [Installing the HACS plugin](#installing-the-hacs-plugin): Install the Home Assistant Community Store (HACS) to enable the installation of Seeed Studio's SenseCraft plugin within Home Assistant.
2. [Installing the SenseCraft plugin](#installing-the-sensecraft-plugin): Install the SenseCraft plugin by Seeed Studio, which allows for the swift deployment of Seeed Studio's products into Home Assistant.
3. [Building MQTT Services at Home Assistant](#building-mqtt-services-at-home-assistant): Leverage a local MQTT service to transmit data from the Watcher to Home Assistant.
4. [Integrate SenseCAP Watcher into Home Assistant](#integrate-sensecap-watcher-into-home-assistant): Integrate SenseCAP Watcher into Home Assistant and set up a visual dashboard for configuration.


## Getting Started

Before the tutorial content of this article begins, you may need to have the following hardware ready.

### Materials Required

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Watcher</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/1.png" style={{width:180, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.kickstarter.com/projects/seeed/sensecap-watcher-open-source-ai-assistant-for-smarter-spaces?ref=aulzfo">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green is the easiest and most privacy-focused way to automate your home. It offers an effortless setup and allows you to control all the smart devices with just one system, where all the data is stored locally by default. This board benefits from the thriving Home Assistant ecosystem and it will be improved every month by open source.

We recommend using Home Assistant Green as the Home Assistant host for this tutorial, or you can use any Home Assistant host with a Supervisor.

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

## Integrate SenseCAP Watcher into Home Assistant

In the **Settings** page, choose **Devices & Services**.

Then click the **ADD INTEGRATION** button in the bottom right corner and search for **SenseCraft**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

Click on SenseCraft and select Action as **Add device using SenseCraft Account (账号集成)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/2.png" style={{width:1000, height:'auto'}}/></div>



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/3.png" style={{width:1000, height:'auto'}}/></div>

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


