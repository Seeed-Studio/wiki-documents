---
description: Use SenseCraft HMI to design and deploy no-code dashboards for compatible Seeed ePaper display devices.
title: Work with SenseCraft HMI
keywords:
  - ePaper display
  - SenseCraft HMI
  - no-code dashboard
  - reTerminal
  - XIAO ePaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 1
last_update:
  date: 06/15/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/EE04_with_hmi/
updatedAt: '2026-06-16'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with SenseCraft HMI

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) is Seeed Studio's no-code interface design platform for ePaper display devices. You can design dashboards, image galleries, calendars, RSS pages, web content pages, and other always-on information screens in a browser, then deploy them to a compatible device over Wi-Fi.

This Wiki is an ePaper Display application guide. It explains the shortest path from a Seeed ePaper device to a working SenseCraft HMI page, and uses one ePaper display board plus one ePaper screen as an example hardware setup.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Open SenseCraft HMI</font></span></strong>
    </a>
</div><br />

## When to Use This Guide

Use this guide when you want to use SenseCraft HMI with a compatible Seeed ePaper product and quickly complete the following workflow:

1. Confirm or flash the SenseCraft HMI firmware.
2. Connect the device to Wi-Fi.
3. Add the device to your SenseCraft HMI workspace.
4. Deploy your first page to the ePaper display.

For the full platform manual, including account settings, editor details, templates, data widgets, and release notes, see the [official SenseCraft HMI documentation](https://sensecraft-hmi-docs.seeed.cc/en/overview/).

## Before You Start

Prepare the following items before using SenseCraft HMI:

- A compatible Seeed ePaper display device.
- A SenseCraft account. You can create one from the [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) login page.
- A 2.4 GHz Wi-Fi network.
- A USB-C data cable if your device needs firmware flashing.
- A computer running a browser that supports serial-port flashing from the SenseCraft HMI web tool.

:::tip
Different ePaper products use different HMI firmware builds. Always select the firmware that matches your exact device and screen size.
:::

## Official SenseCraft HMI Documentation

SenseCraft HMI has a dedicated documentation site. Use this Wiki for the ePaper Display quick-start flow, and use the official documentation for complete platform instructions.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Topic</th>
      <th>Use this when you need to</th>
      <th>Link</th>
    </tr>
    <tr>
      <td>Overview</td>
      <td>Understand what SenseCraft HMI is and what it can do.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Open Overview</a></td>
    </tr>
    <tr>
      <td>Supported Hardware</td>
      <td>Check the current device and screen compatibility list.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/" target="_blank" rel="noopener noreferrer">Open Supported Hardware</a></td>
    </tr>
    <tr>
      <td>Getting Started</td>
      <td>Follow the official account, firmware, connection, and deployment flow.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/" target="_blank" rel="noopener noreferrer">Open Getting Started</a></td>
    </tr>
    <tr>
      <td>Workspace and Canvas</td>
      <td>Learn the editor layout, widgets, data sources, and page-building flow.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/workspace/" target="_blank" rel="noopener noreferrer">Open Workspace Guide</a></td>
    </tr>
    <tr>
      <td>AI Generation</td>
      <td>Generate images or page layouts with text prompts.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/ai_gen/" target="_blank" rel="noopener noreferrer">Open AI Generation</a></td>
    </tr>
    <tr>
      <td>Release Notes</td>
      <td>Check the latest platform and firmware updates.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/release_note/" target="_blank" rel="noopener noreferrer">Open Release Notes</a></td>
    </tr>
  </table>
</div>

## Example Hardware Setup

The steps below use the **XIAO ePaper Display Board (ESP32-S3) - EE04** with the **7.3" Spectra 6 ePaper display** as an example. Other compatible Seeed ePaper devices follow the same platform flow, but the firmware build, screen size, and hardware assembly may be different.

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ePaper Display Board (ESP32-S3) - EE04</th>
      <th>7.3" Spectra 6 ePaper Display</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
This example is not a compatibility list. For the current supported hardware and firmware matrix, always refer to the [SenseCraft HMI Supported Hardware page](https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/).
:::

## Step 1: Confirm or Flash HMI Firmware

The first step is to make sure your ePaper device is running SenseCraft HMI firmware.

<Tabs groupId="hmi-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

The reTerminal E Series is designed to work with SenseCraft HMI out of the box. Power on the device and continue to [Step 2: Connect the Device to Wi-Fi](#step-2-connect-the-device-to-wi-fi).

If you previously flashed another firmware, open the [SenseCraft HMI device page](https://sensecraft.seeed.cc/hmi/device), choose your device model, and follow the on-screen firmware instructions.

:::tip
Use **Full Flash** only when you want to clear stored Wi-Fi information, pairing data, and existing device content.
:::

</TabItem>
<TabItem value="display-board" label="ePaper Display Board + Screen">

For a display board plus separate ePaper screen, flash the HMI firmware that matches your board and panel.

**Step 1.** Sign in to [SenseCraft HMI](https://sensecraft.seeed.cc/hmi), then open **Tools** from the top menu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/256.png" style={{width:1000, height:'auto'}}/></div>

**Step 2.** Select the firmware entry that matches your display. In this example, select the **7.3" Full-Color Display 800 x 480** entry.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** Select the latest available firmware version for your hardware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

**Step 4.** Connect the board to your computer with a USB-C data cable, then click **Flash**.

After clicking **Flash**, the browser will show a serial-port selection window. Choose the port that belongs to your device.

:::tip
If no port appears, press the **RESET** button on the board and try again. Also confirm that your USB-C cable supports data transfer.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>

**Step 5.** Wait for the ePaper display to refresh and show the setup QR code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Step 2: Connect the Device to Wi-Fi

After the device is running HMI firmware, connect it to your local Wi-Fi network.

**Step 1.** Connect your phone or computer to the Wi-Fi access point shown on the ePaper screen. This temporary access point does not require a password.

The access point name depends on the device type. For an ePaper Display Board with a separate screen, the name may appear as `ePaper DIY Kit-xxxx`. For a reTerminal E Series device, the name may appear as `reTerminal E100x-xxxx`. In both cases, `xxxx` usually represents the last four characters of the MAC address.

<div class="table-center">
  <table align="center">
    <tr>
      <th>ePaper Display Board + Screen</th>
      <th>reTerminal E Series</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:360, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:360, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td>AP name example: <code>ePaper DIY Kit-xxxx</code></td>
      <td>AP name example: <code>reTerminal E100x-xxxx</code></td>
    </tr>
  </table>
</div>

**Step 2.** Scan the QR code on the ePaper screen. If the configuration page does not open automatically, open a browser and visit `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

**Step 3.** Select your local Wi-Fi network, enter the password, and click **Connect**.

:::tip
Use a 2.4 GHz Wi-Fi network. Many ESP32-S3-based devices do not connect to 5 GHz Wi-Fi networks.
:::

**Step 4.** Wait until the device joins the network and shows a pair code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>

## Step 3: Add the Device to SenseCraft HMI

After Wi-Fi setup, add the device to your SenseCraft HMI workspace.

**Step 1.** Open the **Device** page and click **Add Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/255.png" style={{width:700, height:'auto'}}/></div>

**Step 2.** Enter a device name and the pair code shown on the ePaper screen, then click **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/251.png" style={{width:700, height:'auto'}}/></div>

**Step 3.** Confirm that the device appears in your Panel.

## Step 4: Deploy Your First Page

Once the device is paired, you can deploy content from SenseCraft HMI to the ePaper screen.

The fastest way to start is to use an existing template or one of the built-in creation tools. For the detailed editor flow, follow the [official Getting Started guide](https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/).

<div class="table-center">
  <table align="center">
    <tr>
      <th>Feature</th>
      <th>What it is for</th>
      <th>Official guide</th>
    </tr>
    <tr>
      <td>Canvas</td>
      <td>Build a page from text, images, widgets, shapes, and data sources.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/workspace/" target="_blank" rel="noopener noreferrer">Open guide</a></td>
    </tr>
    <tr>
      <td>AI Generation</td>
      <td>Create images or layouts from text prompts.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/ai_gen/" target="_blank" rel="noopener noreferrer">Open guide</a></td>
    </tr>
    <tr>
      <td>Gallery</td>
      <td>Display uploaded images or slideshow-style content.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Open docs</a></td>
    </tr>
    <tr>
      <td>RSS</td>
      <td>Show headlines or article content from an RSS feed.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Open docs</a></td>
    </tr>
    <tr>
      <td>Web Content</td>
      <td>Render a web page or web-based information panel on the ePaper display.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Open docs</a></td>
    </tr>
  </table>
</div>

The example below shows a SenseCraft HMI page deployed to a 7.3" ePaper display.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="SenseCraft HMI page on a 7.3 inch ePaper display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Example result on a 7.3" ePaper display</em></p>
</div>

## Troubleshooting

### Q1: Why does my computer not detect the device during flashing?

This usually means the browser cannot access the serial port, the cable only supports charging, or the board has not entered the right USB state.

- Use a USB-C cable that supports data transfer.
- Connect the device directly to the computer instead of through a USB hub.
- Press the **RESET** button and open the port selection window again.
- Try a Chromium-based browser if your current browser does not support web serial flashing.

### Q2: Why does the device fail to connect to Wi-Fi?

The most common cause is using an unsupported Wi-Fi band or entering the wrong password.

- Use a 2.4 GHz Wi-Fi network.
- Re-enter the Wi-Fi password carefully.
- Move the device closer to the router during setup.
- If the device was previously configured, use **Full Flash** only when you want to clear saved network settings and start again.

### Q3: Why does the screen not show the expected setup QR code after flashing?

The firmware may not match the connected screen, or the screen may not be connected correctly.

- Recheck the device model, screen size, and firmware entry on the SenseCraft HMI Tools page.
- Power off the board before reconnecting the ePaper flex cable.
- Confirm that the flex cable direction and connector type match your hardware.
- Flash the matching firmware again and wait for the ePaper refresh to finish.

### Q4: Why does the deployed page look different from the editor preview?

Different ePaper panels have different resolution, color capability, grayscale behavior, and refresh characteristics.

- Build the page with the same resolution as the target screen.
- Avoid very small text if the screen resolution is low.
- Use high-contrast colors for monochrome or grayscale screens.
- Check the official documentation for editor and deployment details.

## Resources

- [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi)
- [SenseCraft HMI Official Documentation](https://sensecraft-hmi-docs.seeed.cc/en/overview/)
- [SenseCraft HMI Supported Hardware](https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/)
- [SenseCraft HMI Getting Started](https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/)
- [SenseCraft HMI Release Notes](https://sensecraft-hmi-docs.seeed.cc/en/release_note/)

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
