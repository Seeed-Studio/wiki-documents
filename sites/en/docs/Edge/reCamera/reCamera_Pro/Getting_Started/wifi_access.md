---
description: Connect reCamera Pro to your Wi-Fi network, find its LAN IP address, and switch from the direct USB connection to fully wireless management.
title: Access the Device over Wi-Fi
keywords:
  - reCamera
  - reCamera Pro
  - Wi-Fi
  - wireless access
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_wifi_access
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_wifi_access/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Access the Device over Wi-Fi

Out of the box you reach reCamera Pro through the USB Type-C cable at `192.168.42.1`. To let the device access the Internet, or to manage it from anywhere on your local network, connect it to Wi-Fi and switch to its LAN IP address.

## 1. Connect to a Wi-Fi network

1. Log in to the Web UI (see the [quick start](/recamera_pro_getting_started/) if you have not already).
2. Click **Device Info** in the left navigation bar.
3. Open **Network Settings**. reCamera Pro has a built-in Wi-Fi module — enable Wi-Fi if it is off, and the system scans for nearby networks.
4. Select your Wi-Fi SSID, enter the password, and connect.

![Wireless network configuration steps diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_wifi_setting.png)

## 2. Find the device's LAN IP address

After connecting, click the connected network's info icon (the exclamation mark to its right) to view detailed network information — the assigned IP address, MAC address, and more.

![View Wi-Fi details diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

![Network details in Device Info](https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_vq4u1biblp.png)

## 3. Switch to wireless access and verify

1. On a computer connected to the **same local network**, open a browser and go to the LAN IP you just found, e.g. `http://192.168.4.200`.
2. Log in with your admin password — you should reach the same Web UI you used over USB.
3. Open **Real-time Preview** and click **Start** to confirm video streams over Wi-Fi as well.

:::tip Unplug the USB cable for fully wireless operation
Once the Web UI works over the LAN IP, you can safely **unplug the USB Type-C cable**. The USB connection only carries data — the device keeps running from its own power supply.
:::

:::note Power is still required
Removing the USB cable does **not** remove power: reCamera Pro must stay connected to its 12 V DC power supply (or another adequate power source) to keep running.

{/* TODO(verify): confirm supported power options when the USB cable is unplugged (DC barrel only, or also PD over Type-C) and state them explicitly here. */}
:::

## Notes

- If the computer and the device are on different networks (e.g. 2.4 GHz vs 5 GHz SSIDs that isolate clients, or a guest network), the LAN IP may be unreachable — put both on the same network.
- The Wi-Fi address may change when the device reconnects. For a permanent installation, reserve a fixed address for the device's MAC on your router, and finish the rest of the network setup in [Network, time and access control](/recamera_pro_device_info/).
- Connection failures during this step: see [Troubleshoot by symptom](/recamera_pro_faqs/).

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
