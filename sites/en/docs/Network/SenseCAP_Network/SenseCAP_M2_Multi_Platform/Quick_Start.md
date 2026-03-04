---
description: Quick_Start
title: Quick Start
keywords:
- gateway
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /quick_start_with_M2_MP
last_update:
  date: 9/26/2023
  author: Jessie
---


## POE connection

SenseCAP M2 supports PoE (Power on Ethernet) and is compatible with IEEE 802.3 af standard.

:::tip
You will need to have an extra PoE switch that provides 40V-57V DC power as a PSE (Power Sourcing Equipment) if your modem/router does not support PoE.
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## Gateway Network Configuration

Connect the antenna and power adaptor to the gateway.
The power LED will show in red, and in about 15s, the indicator on the top will flash green, indicating that the gateway is booting.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

There are two ways to connect to the Internet. Choose the one that works for you.

### Ethernet Connection

Connect the Ethernet cable to the Ethernet port, and the indicator on the top will show solid green if the gateway is successfully connected to the internet.

### WIFI Connection

There are two ways for users to login Luci configuration page.

#### Access via router

- Step 1: Connect your device to a Ethernet cable, and connect your PC to the same router.

:::note Your PC and device should be connected to the same router/network.
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

- Step 2: Get IP Address of your device

Check the IP Address of your device on your router admin page.

- Step 3: Get your device Username and Password

You can find the Username and Password on your device label.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- Step 4: Login Luci

Input the IP Address of your device in a browser to enter the Luci page.
Then input your device username and password to login.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### Access via device AP hotspot

- Step 1: Turn on the device AP hotspot.

Press the button for 5s until the blue indicator flashes slowly to enter the configuration mode.

- Step 2: Connect to the AP hotspot.
AP hotspot name is SenseCAP_XXXXXX (6-figure MAC address),default password is 12345678; connect your computer to this AP hotspot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

- Step 3: Get your device Username and Password

You can find the Username and Password on your device label.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- Step 4: Log in to the Local Console

Input the IP Address (192.168.168.1) in your browser to enter the Local Console. Then input your device username and password, and click the Login button.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### Connect to a WIFI

- Step 1: Click on `Network` - `Wireless`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

- Step 2: Click on the `Scan` button to scan the WIFI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

- Step 3: Select your WI-FI to join the network.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

- Step 4: Submit the Wi-Fi password, and then click `Submit` and Save.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

Then click Save and Apply to apply your settings.

The indicator on the top will show solid green if the gateway is successfully connected to the WIFI.

### Cellular Connection (for 4G version)

- Step 1: Plug your SIM card into the Nano-SIM card slot

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

- Step 2: Login the Luci page, and click on `Network` - `Cellular`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

- Step 3: Setup the APN info, and click `Save and Apply` to apply your settings.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
To reduce data consumption, please check [Low Data Consumption Mode Config](https://wiki.seeedstudio.com/traffic_saving_config).
:::

### Channel Plan Settings

Navigate to `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Select the Region and Frequency plan.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

After setting, click `Save&Apply`.

### Checking the Gateway Connection Status

After powering on the gateway, there are two ways for you to check the gateway working status:

#### LED Indicator

<table>
<tr><th colspan="2" valign="top"><b>Mode</b></th><th colspan="1" valign="top"><b>Description</b></th></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p></p><p>Green</p></td><td colspan="1" valign="top">Solid</td><td colspan="1" valign="top">Gateway is healthy and the internet is well connected.</td></tr>
<tr><td colspan="1" valign="top">Slow blinking</td><td colspan="1" valign="top">Gateway is booting, please wait.</td></tr>
<tr><td colspan="1" rowspan="3" valign="top"><p></p><p></p><p></p><p></p><p>Blue</p></td><td colspan="1" valign="top"><p></p><p>Solid</p></td><td colspan="1" valign="top"><p>The gateway is ready for internet connection.</p><p>Further configuration is needed.</p></td></tr>
<tr><td colspan="1" valign="top">Slow blinking</td><td colspan="1" valign="top">Configuration mode, and will auto exit after 5 mins if no activity.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Fast blinking</p></td><td colspan="1" valign="top">Press the button for 30s until the indicator show fast flash will trigger the factory reset.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Orange</p></td><td colspan="1" valign="top"><p></p><p>Slow blinking</p></td><td colspan="1" valign="top">Firmware is updating, and please do not power off the gateway or disconnect the internet.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>White</p></td><td colspan="1" valign="top"><p></p><p>Solid</p></td><td colspan="1" valign="top">Gateway is only with a factory firmware, and will be updated to the latest firmware automatically when it is connected to the internet.</td></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p>Red</p></td><td colspan="1" valign="top">Solid</td><td colspan="1" valign="top">Hardware issue or internet connection failure.</td></tr>
<tr><td colspan="1" valign="top">Slow blinking</td><td colspan="1" valign="top">Gateway not connected to the LNS.</td></tr>
</table>

#### SenseCAP Mate APP

In the SenseCAP Mate App, `Online status` indicates `Online` when the gateway is connected to the network.
Please refer to the next chapter for obtaining the SenseCAP App.

## Bind the gateway

SenseCAP Mate APP supports device configuration and remote management.

- Step 1: Download the SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- Step 2: Login the APP
If it is your first time to use the SenseCAP platform, please register an account first.

:::tip
Please select Global of Server Location.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

- Step 3: Add device

Click the `+` in the upper right corner and select Add device
Then scan the QR code on your gateway label.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

Set up your device name and location. Then confirm your settings.
After successful binding, you will see your gateway in the Device directory.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## Connect the SenseCAP Sensors

- Step 1: Add device

Click the `+` in the upper right corner and select Add device
Then scan the QR code on your gateway label.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

- Step 2: Select the frequency plan

Click on `Settings`, set the platform and frequency, the frequency should match your gateway frequency.

eg: If your gateway is US915 version , then you need to set your sensor to US915 frequency.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip
SenseCAP M2 Multi-Platform Gateway can't connect to Helium network.
:::

For more configurations about SenseCAP sensors, please refer to: SenseCAP Sensors

## SenseCAP Portal and Mate APP

SenseCAP Mate APP and SenseCAP Portal can be used to check your device status and device management.

- [SenseCAP Mate APP for iOS on App Store](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
- [SenseCAP Mate APP for Android on the Google Play Store](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
- [SenseCAP Portal](https://sensecap.seeed.cc/portal/)

### Gateway Info

Check the gateway info on the SenseCAP Portal and SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### Sensor data

Check the sensor data on the SenseCAP Portal and SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>
