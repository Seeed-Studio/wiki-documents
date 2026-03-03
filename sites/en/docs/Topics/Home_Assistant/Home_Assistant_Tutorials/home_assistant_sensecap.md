---
description: Home Assistant Intergration for SenseCAP LoRaWAN Sensors
title: SenseCAP Integration for Home Assistant
keywords:
- SenseCAP M2 Multi-Platform 
- Home Assistant
- LoRaWAN Sensors
slug: /home_assistant_sensecap
last_update:
  date: 10/19/2023
  author: JoJang
---

# Automatic intergrate  all your SenseCAP Sensors to Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/overview.jpg" alt="pir" width={800} height="auto" /></p>

## 1. SenseCAP M2 Multi-Platform Configuration

### 1.1 LoRa Network Configuration

**Step 1.** Click **LoRa** and choose **LoRa Network**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lora_network.png"/></div>

**Step 2.** Choose Local Network Server mode and fill your MQTT host information **(Include your host, username, password and port).** Then Click **Save&&Apply**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lns.png"/></div>

At this point we have finished the server mode setup, and we wiil configure the ChirpStack later.

### 1.2 ChirpStack Configuration

**Step 1.** Open the ChirpStack configuration page, then **Click Device profiles**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles.png"/></div>

**Step 2.** Click **Add device profile**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles_2.png"/></div>

**Step 3.** First, fill in the device profile according to your SenseCAP configuration: **Name, Region, MAC version**, and **Regional parameters revision**, in which the **Expected uplink interval** needs to be changed to **120**, and this one can be adjusted according to your own requirements. In the second step, we Click the **Codec** at the top
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_general.png"/></div>

**Step 4.** In this step, we need to choose the decoder according to our Sensor model, the code can be found [Here](https://github.com/Seeed-Solution/SenseCAP-Decoder.git). We need to select the code in the **TTN** folder as our decoder.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_decoder.png"/></div>

**Step 5.** Next step, we are going to add devices. Click **Applications**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_applications.png"/></div>

**Step 6.** Click **Add applications**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_2.png"/></div>

**Step 7.** Fill the application information and Click **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_3.png"/></div>

**Step 8.** Use the **SenseCAP Mate APP** to configure Sensor, Set the **Platform** to **Other Platform**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/SenseCAP_Mate.jpg"/></div>

**Step 9.** Click **Add device**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice.png"/></div>

**Step 10.** Fill your device information and Click **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_2.png"/></div>

**Step 11.** Click the **DevEUI** of your devices to turn the page
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_3.png"/></div>

**Step 12.** Click **OTAA keys** and enter your **Application key** of the SenseCAP Sensor. Then Click **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_appkey.png"/></div>

**Step 13.** Activate your SenseCAP Sensor and wait for it to automatically connect to LoRaWAN. Then you can see the data uploaded by the sensor in the **Events** and **LoRaWAN frames**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_data.png"/></div>

**Step 14.** At this point, we have completed all configurations of the M2 gateway.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_updata.png"/></div>

:::tip
When adding a device to the M2 gateway for the **first time**, wait at least **2-5** minutes until the data reported by **up** can be seen in **Events**. Then the device addition initialization is complete. Then we can configure the Home Assistant plug-in.
:::

## 2. Home Assistant Configuration

### 2.1 Install

**1.HACS**

- First installation
  - 1.HACS > Integrations >
  - 2.Click on top right corner > Custom repositories ：

    ```
      Repository: https://github.com/Seeed-Solution/home-assistant-SenseCAP.git
      Category: Intergration
    ```

  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_2.png"/></div>  

  - 3.Click ADD
  - 4.HACS > Integrations > ➕ EXPLORE & DOWNLOAD REPOSITORIES > Seeed Studio-SenseCAP > DOWNLOAD THIS REPOSITORY

  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_3.png"/></div>  

- Update component
    > HACS > Integrations > [`Seeed Studio-SenseCAP`](https://my.home-assistant.io/redirect/hacs_repository/?owner=Seeed-Solution&repository=https%3A%2F%2Fgithub.com%2FSeeed-Solution%2Fhome-assistant-SenseCAP.git) > UPDATE / Redownload

**2.Install via SSH & Web Terminal add-on**

1. Open SSH Terminal and enter the following command:

```
cd ~/config/custom_components && git clone https://github.com/Seeed-Solution/home-assistant-SenseCAP.git && cd home-assistant-SenseCAP/custom_components && mv sensecap ../../ && cd ../../ && rm -r home-assistant-SenseCAP
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/Install.jpg"/></div>

2. Restart HA core
3. Add Integration

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/add_intergration.png"/></div>

### 2.2 Configuration

1. Enter your MQTT information and Click **SUBMIT**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_1.png"/></div>

2. Waiting for few minutes (**The Uplink time depends on your setting in M2 Chirpstack and SenseCAP Mate APP**), and Click **Notifications** in the left sidebar. Then we can see the SenseCAP Sensors have been automatically added to HA. Click **Check it out** and turn to the Integration

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_2.png"/></div>

3. Click on one of the devices and we can see that all of the entities have been automatically created and added to the device. Click **ADD TO DASHBOARD** so as to add all the entites of entire device directly to the dashboard through the form of cards

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_3.png"/></div>

4. Go to **Overview** and we can find the card we just added

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_4.png"/></div>

5. Click **Edit dashboard**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_5.png"/></div>

6. Click **EDIT** to edit

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_6.png"/></div>

7. We can add a header Picture to decorate the card

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_7.png"/></div>

8. Replace the url to yours in order to display your favorite picture

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_8.png"/></div>

9. Choose the entity to modify

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_9.png"/></div>

10. Change the icon to one that is similar to the type of sensor entity

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_10.png"/></div>

11. We have now completed the entire plugin configuration process here. Subsequently, you can perform custom optimizations according to your own requirements

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_11.png"/></div>

12. Here are the visual representations of the effects on the "Overview" page after adding various models of SenseCAP sensors.

The aforementioned constitutes the complete step-by-step tutorial for integrating SenseCAP into the Home Assistant platform. Home Assistant has the capability to seamlessly integrate different types of devices from various platforms into a single ecosystem, facilitating cross-platform interoperability. This holds profound significance for the comprehensiveness of the smart home ecosystem. Presently, Seeed has also become a part of the extensive Home Assistant community, enabling the integration of our SenseCAP devices into the platform. We believe that this endeavor will contribute to the further strengthening and growth of the Internet of Things ecosystem !

:::tip
**The SenseCAP for Home Assistant intergration is completely open source, and you can download the source code project here**: [https://github.com/Seeed-Solution/home-assistant-SenseCAP.git](https://github.com/Seeed-Solution/home-assistant-SenseCAP.git).
:::

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
