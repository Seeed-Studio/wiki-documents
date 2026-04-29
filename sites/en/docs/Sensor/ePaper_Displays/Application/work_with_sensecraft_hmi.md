---
description: Use SenseCraft HMI - Seeed's no-code visual interface design platform - to drive any compatible Seeed ePaper product, from the reTerminal E Series to every XIAO ePaper driver board.
title: Work with SenseCraft HMI
keywords:
  - ePaper display
  - SenseCraft HMI
  - reTerminal
  - EE02
  - EE03
  - EE04
  - EE05
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: dimo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with SenseCraft HMI

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) is Seeed Studio's powerful cloud-based interface design platform that lets you create professional visual interfaces for screen-based devices **without writing code**. With an intuitive drag-and-drop editor, pre-built templates, and AI-powered design capabilities, SenseCraft HMI turns your hardware into a beautiful information display, dashboard, digital signage, or control panel.

This guide is the single source of truth for using SenseCraft HMI with **any compatible Seeed ePaper product**. Pick your hardware once at the firmware step; the rest of the workflow is identical for every device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>

## Compatible Hardware

SenseCraft HMI works out of the box with the following Seeed ePaper products. The reTerminal E Series ships with HMI firmware preinstalled, while the XIAO ePaper Display Board (EE02–EE05) family is flashed from the SenseCraft HMI Tools page in your browser.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Product line</th>
      <th>Out-of-box experience</th>
      <th>Targeted screens</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>HMI firmware preinstalled — power on and pair</td>
      <td>Integrated 7.5" / 7.3" / 10.3" / 13.3" panels</td>
    </tr>
    <tr>
      <td><strong>EE02</strong></td>
      <td>Flash from SenseCraft HMI Tools page</td>
      <td>13.3" Spectra 6 (color)</td>
    </tr>
    <tr>
      <td><strong>EE03</strong></td>
      <td>Flash from SenseCraft HMI Tools page</td>
      <td>10.3" Monochrome (high-speed refresh)</td>
    </tr>
    <tr>
      <td><strong>EE04</strong></td>
      <td>Flash from SenseCraft HMI Tools page</td>
      <td>24-pin / 50-pin universal — many sizes</td>
    </tr>
    <tr>
      <td><strong>EE05</strong></td>
      <td>Flash from SenseCraft HMI Tools page</td>
      <td>24-pin / 50-pin universal (latest)</td>
    </tr>
  </table>
</div>

This article uses the **XIAO ePaper Display Board (ESP32-S3) – EE04** paired with the **7.3" Spectra 6** display as the primary hardware example because it covers the largest set of features. All steps apply to other products with minor differences noted in their respective tabs.

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7.3" Spectra 6 E-Ink</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### EE04 / EE05 — supported screen list

The XIAO ePaper Display Board EE04 / EE05 offers two connector options — **24-pin** and **50-pin** — supporting a wide range of screen sizes. Choose the one that matches your display from the list below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi71.png" style={{width:800, height:'auto'}}/></div>

<Tabs groupId="hmi-connector">
<TabItem value="24pin" label="24-Pin Connector" default>

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip Set the jumper to **24 Pin** before powering on
Using the wrong jumper may cause the ePaper to fail to display or show abnormal content. Always double-check the jumper position before powering on.
:::

</TabItem>
<TabItem value="50pin" label="50-Pin Connector">

- [7.3-Inch Spectra 6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>

:::tip Set the jumper to **50 Pin** before powering on
Using the wrong jumper may cause the ePaper to fail to display or show abnormal content. Always double-check the jumper position before powering on.
:::

</TabItem>
</Tabs>

## Step 1: Register a SenseCraft HMI Account

Click the button in the upper-right corner of the [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) page to create an account.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi63.png" style={{width:1000, height:'auto'}}/></div>

## Step 2: Get HMI Firmware on Your Device

<Tabs groupId="hmi-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

The reTerminal **E1001 / E1002 / E1003 / E1004** ships with the SenseCraft HMI firmware preinstalled. Just power the device on and skip to Step 3 (Network Setup).

If you previously flashed a different firmware (for example TRMNL), you can switch back to HMI from the SenseCraft HMI Tools page:

1. Open the [SenseCraft HMI device page](https://sensecraft.seeed.cc/hmi/device) and select your reTerminal model.
2. Pick the latest **HMI** firmware build (use **Full Flash** if you want a clean device).
3. Plug the device into your computer via USB-C and follow the on-screen serial-port prompts.

</TabItem>
<TabItem value="ee04" label="EE02 / EE03 / EE04 / EE05">

After registration, click **Tools** in the top menu bar to enter the firmware flashing section.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi62.png" style={{width:1000, height:'auto'}}/></div>

:::tip
The XIAO ePaper Display Board EE04 / EE05 supports the following ePaper screens out of the box:

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.3-inch Spectra 6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

EE02 ships dedicated to 13.3" Spectra 6; EE03 ships dedicated to 10.3" monochrome with high-speed refresh.
:::

The flashing flow is identical for every screen size — pick the right firmware build for your panel. The example below uses the **7.3" Full-Color Display (800×480)**.

**Step 1.** Select the **7.3" Full-Color Display 800×480** entry on the Tools page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

**Step 2.** Select the latest firmware (e.g. `EE04_7_3_color_1.0.5`).

:::tip
The SenseCraft HMI platform is regularly updated. Always pick the latest firmware version for best compatibility and performance.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** Click **Flash** to upload the firmware.

After clicking Flash, the platform will prompt a port selection window. Choose the port corresponding to your device.

- **Full Flash**: clears all stored information including Wi-Fi networks and user panel data.

:::tip
If no port appears, simply press the **RESET** button on the board to refresh the connection.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>

**Step 4.** Check the display output.

After flashing, the ePaper display will briefly flicker and show the QR code screen below. Two QR codes lead to the User Guide and Wi-Fi Setup pages respectively.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

The configuration is not yet complete. Please continue to **Step 3: Network Setup** below.

</TabItem>
</Tabs>

## Step 3: Network Setup

The Wi-Fi pairing flow is the same for every Seeed ePaper product running HMI firmware.

**Step 1.** Connect your phone or computer to the device's Wi-Fi access point. The AP name is shown on the device's screen (no password required).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

**Step 2.** Once connected, scan the QR code on the ePaper screen — your phone should redirect automatically to the Wi-Fi configuration page. If not, open a browser and visit `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

**Step 3.** Select your local Wi-Fi network and enter the password, then click **Connect**.

:::tip
The XIAO ESP32-S3 family only supports **2.4 GHz Wi-Fi** networks. 5 GHz networks are not supported.
:::

**Step 4.** After the connection completes, the screen will display a pair code:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>

## Step 4: Add the Device to SenseCraft HMI

**Step 1.** Navigate to the **Workspace** section and click **Add Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

**Step 2.** Name your device, enter the pair code displayed on the device's screen, and click **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

**Step 3.** After pairing, your device appears in the Workspace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi68.png" style={{width:700, height:'auto'}}/></div>

You can now start designing dashboards in SenseCraft HMI.

## Creating Dashboards

The SenseCraft HMI platform offers powerful tools for designing and customizing content. The five core building blocks are described below; for a complete reference see the [SenseCraft HMI documentation](https://sensecraft-hmi-docs.seeed.cc/en/).

:::note
The following demos use a 7.3" screen. When using a different size, remember to:

- Confirm the orientation of the screen flex cable (front and back).
- Verify the number of pin headers matches your device's connector.
- Use the corresponding size cover cap.
- Avoid bending or excessive folding when installing the flex cable.
:::

### AI Generator

Let AI design your dashboard. Describe what information you want displayed, and the AI Generator will automatically create an attractive, functional layout — perfect for weather displays, calendars, to-do lists, or informational panels without manual design work.

[Learn more about AI Generator →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>

**ePaper display result:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

### Gallery

Turn your ePaper display into a digital photo frame. Upload favorite images and the platform optimizes them for ePaper. Create slideshows with custom transition times.

[Learn more about Gallery →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>

**ePaper display result:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

### Canvas

Design your dashboard from scratch with Canvas — a drag-and-drop interface offering:

- Text blocks with customisable fonts and sizes
- Image placeholders
- Widgets for time, date, and weather
- Data visualization tools
- Shapes and dividers for layout organisation

[Learn more about Canvas →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>

**ePaper display result:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

### RSS Feed Integration

Stay updated with your favorite news sources or websites by adding RSS feeds to your dashboard. Display headlines, summaries, or full articles from multiple sources.

Two recommended sources:

- [BBC News](http://feeds.bbci.co.uk/news/rss.xml)
- [The New York Times](https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml)

[Learn more about RSS Feed Integration →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/75hmi.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>

**ePaper display result:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

### Web Content Display

Embed any web URL directly on your ePaper dashboard. Perfect for transparently showing tools and pages that don't have a native HMI plugin yet.

[Learn more about Web Content Display →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

**ePaper display result:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi53.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

## Reference & Resources

- [Getting Started with SenseCraft HMI (official docs)](https://sensecraft-hmi-docs.seeed.cc/en/) — gain a deeper understanding of how to use SenseCraft HMI to maximise its capabilities and enhance your projects.

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
