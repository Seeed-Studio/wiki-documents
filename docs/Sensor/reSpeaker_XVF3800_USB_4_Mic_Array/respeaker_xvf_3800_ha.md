---
description: Experience the power of the ReSpeaker XVF3800 USB 4-Mic Array—an advanced circular microphone array with AEC, beamforming, noise suppression, and 360° voice capture. Paired with the compact XIAO ESP32S3, it delivers high-performance voice control for smart devices, robotics, and IoT applications. Join us as we demonstrate seamless integration with Home Assistant to control devices using voice commands.

title: Smart Home Voice Control with Home Assistant

keywords:
- reSpeaker
- XIAO
- ESP32S3
- Home Assistant
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_xiao_home_assistant
last_update:
  date: 7/30/2025
  author: Kasun Thushara
---

## Overview

Talk with smart spaces with new **ReSpeaker XMOS XVF3800 with XIAO ESP32S3** switch up the lights, crank up the tunes, or even ask about the weather  using voice 

This chapter we will use the ReSpeaker XMOS XVF3800 with XIAO ESP32S3  HA Voice Assistant to connect the Sonoff smart switch to realize voice control of the light switch.


<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/iqlsNezHYuE"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## Hardware Required

<table align="center">
  <tr>
      <th>ReSpeaker XVF3800 with XIAO ESP32S3</th>
        <th>Home Assistant Device</th>
        <th>Sonoff BASICR2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home_Assistant_Green/HAyellow.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991074-sonoff-basicr2-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Standard-Version-with-CM4-p-5809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Sonoff-BasicR2-p-5514.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>


## Firmware update

To get the best playback experience, we need to update XMOS firmware to
Download the firmware from here. On your computer, plug in the ReSpeaker XMOS XVF3800 with XIAO ESP32S3 and run the in our guide:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_firmware.PNG" alt="pir" width={800} height="auto" /></p>

:::note
The XVF3800 mic array needs a 12.288 MHz MCLK to work, but ESPHome (used in Home Assistant) can't generate it due to API limits. This firmware makes the XVF3800 act as the I2S master instead, so it can generate its own clocks without needing MCLK from the ESP32.
Our firmware fixes this limitation, so the mic works properly with Home Assistant.
:::


You can download Firmware From [Here](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s) 

The installtion guide is [Here](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#update-firmware)

## Prepare ReSpeaker XMOS XVF3800 with XIAO ESP32S3 

Go to **Home Assistant > Settings > Add-ons**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_Settings.PNG" alt="pir" width={800} height="auto" /></p>

Click **Add-on Store** (usually at the bottom right)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_addon.PNG" alt="pir" width={800} height="auto" /></p>

Under **Official add-ons**, search for and install **ESPHome Device Builder**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome.PNG" alt="pir" width={800} height="auto" /></p>


After installation, click **Start** to run the ESPHome add-on.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_Start.PNG" alt="pir" width={800} height="auto" /></p>

Enable **Start on Boot, Watchdog, and Show in Sidebar** for easier access.

From the Home Assistant sidebar, go to **ESPHome Builder**.

Click **+ NEW DEVICE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_add_new.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_device.PNG" alt="pir" width={500} height="auto" /></p>

When prompted, click **SKIP** – we’ll create the configuration manually.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_skip.PNG" alt="pir" width={500} height="auto" /></p>

Select your new device entry and click **EDIT**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_respeaker_device.PNG" alt="pir" width={800} height="auto" /></p>

Replace the content with your custom **YAML configuration** 

You can Found the YAML file from [Here](https://github.com/respeaker/reSpeaker_XVF3800_ESPHome_Assistant)

Once your YAML is saved, click **INSTALL**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_yaml.PNG" alt="pir" width={800} height="auto" /></p>

Choose **Manual Download**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_manual.PNG" alt="pir" width={800} height="auto" /></p>

Wait for the firmware to compile.

Download the generated .bin firmware file to your computer.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_factory.PNG" alt="pir" width={800} height="auto" /></p>


Connect the **ESP32-S3** board (with XVF3800 connected) to your PC using a **USB Type-C cable**.

Open [**Web-ESPHome**](https://web.esphome.io/?dashboard_wizard) in Chrome or Edge.

Click **CONNECT** and choose the appropriate serial port

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/connect-port.png" alt="pir" width={800} height="auto" /></p>

Once connected, click **INSTALL**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_install.PNG" alt="pir" width={500} height="auto" /></p>

Select the .bin file you just downloaded.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_bin_write.PNG" alt="pir" width={500} height="auto" /></p>

Wait for the installation to complete (may take a few minutes).

After success, you’ll see a confirmation message.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_congrats.PNG" alt="pir" width={500} height="auto" /></p>

Return to **Home Assistant > Settings > Devices & Services**.

You should see **ESPHome** listed as a discovered integration.

Click **CONFIGURE**, then **Submit** to finish setup.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_discover.PNG" alt="pir" width={800} height="auto" /></p>

## Add your smart device

Set up the **Sonoff BASICR2** device according to the manufacturer's user manual. You will need to create eWELink account. 

### Install HACS

If not already installed, follow the official guide to set up the [**Home Assistant Community Store**](https://hacs.xyz/docs/use/):

Open **HACS** from the sidebar.
Search for **Sonoff LAN** in the Search section.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_HACS.PNG" alt="pir" width={800} height="auto" /></p>

Click **Install** to add the integration.
Restart Home Assistant to apply changes.

### Sonoff

Navigate to **Settings → Devices & Services**.
Click **Add Integration**.
Search for and select **Sonoff**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_sonoff.PNG" alt="pir" width={800} height="auto" /></p>

Enter your **eWeLink account credentials** to authenticate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/credentials.png" alt="pir" width={500} height="auto" /></p>

Once connected successfully, you will see the associated entities listed under:
**Settings → Devices & Services → Entities**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/sonoff-id.png" alt="pir" width={800} height="auto" /></p>

## Voice Assistant with Nabu Cloud 


In this demo, we are showcasing how to connect with **Home Assistant Cloud (Nabu Casa)** using voice. The setup is simple, and you can take advantage of a **one-month free trial** to explore its full capabilities.
With the built-in **wake word**: “Okay Nabu”, you can effortlessly trigger voice commands and **seamlessly integrate** with devices and services **anywhere, anytime** — all without complex configurations.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice_nabu.PNG" alt="pir" width={800} height="auto" /></p>

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

