---
description: How to connect your Seeed Jetson device to the host PC using Seeed Jetson DevelopTool via USB or Ethernet.
title: Connect Device
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - connect device
  - SSH
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_connect_device
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/jetson_developtool_connect_device/
---

Seeed Jetson DevelopTool connects to your Jetson device in two ways depending on the task:

| Connection Type | Used For |
|-----------------|----------|
| **USB (Recovery Mode)** | Firmware flashing via Flash Center |
| **Ethernet / SSH** | Device Management, Remote Dev, App Market, Skills, PC Network Sharing |

## USB Connection (Recovery Mode)

Recovery mode is required for flashing firmware. To enter Recovery mode:

1. Power off the Jetson device.
2. Hold the **Recovery** button on the device.
3. While holding Recovery, connect the USB-C cable between the device and your host PC (or power on the device).
4. Release the Recovery button after 2 seconds.

In the DevelopTool, open **Flash Center** and click **Detect Device** to confirm the USB connection is recognized.

:::tip
On Linux, you can verify the device appears with:

```bash
lsusb | grep NVIDIA
```

You should see an entry like `NVIDIA Corp. APX`.
:::

:::caution
On Windows, USB passthrough via WSL2 requires the `usbipd` tool. Native Linux is recommended for reliable flashing.
:::

## Ethernet / SSH Connection

For all non-flashing features, the DevelopTool connects to Jetson over SSH via Ethernet (or Wi-Fi if configured).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-device-connection.png" style={{width:800, height:'auto'}}/></div>

**Steps:**

1. Connect Jetson and the host PC to the same network, or use a direct Ethernet cable with [PC Network Sharing](./Jetson_DevelopTool_PC_Network_Sharing) enabled.
2. In the DevelopTool, open the **Remote Dev** tab.
3. Enter the Jetson's IP address, SSH username, and password in the **Device Connection** panel.
4. Click **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/connect-device-connection.png" style={{width:800, height:'auto'}}/></div>

Once connected, the device status panel shows real-time CPU, GPU, memory, and temperature information.

:::tip
If you don't know your Jetson's IP address, use the [Jetson Init](./Jetson_DevelopTool_Jetson_Init) serial wizard on first boot to configure the network and display the assigned IP.
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
