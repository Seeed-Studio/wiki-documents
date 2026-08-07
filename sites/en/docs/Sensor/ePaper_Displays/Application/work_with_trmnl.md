---
description: Use TRMNL with any compatible Seeed ePaper product - reTerminal E1001, E1002, E1003, E1004, TRMNL 7.5" (OG) DIY Kit, or XIAO 7.5" ePaper Panel.
title: Work with TRMNL
keywords:
  - ePaper display
  - TRMNL
  - reTerminal
  - reTerminal E1003
  - reTerminal E1004
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sidebar_position: 3
last_update:
  date: 08/05/2026
  author: dimo
aliases:
  - /ogdiy_kit_works_with_trmnl
  - /xiao_7_5_inch_epaper_panel_with_trmnl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/reterminal_e10xx_trmnl/
updatedAt: '2026-08-05'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

This guide is the single source of truth for using **TRMNL** with any compatible Seeed ePaper product. Pick your hardware once at each step that needs it, and the rest of the workflow is identical.

:::caution Hardware support
TRMNL officially supports the **reTerminal E1001**, **reTerminal E1002**, **reTerminal E1003**, **reTerminal E1004**, **TRMNL 7.5" (OG) DIY Kit**, and **XIAO 7.5" ePaper Panel**. The **E1002** and **E1004** have full-color Spectra™ 6 panels, but TRMNL firmware renders their content in **monochrome mode**. The **E1003** capacitive touch panel is available under SenseCraft HMI firmware only; TRMNL firmware uses the physical buttons on the device.
:::

## What is [TRMNL](https://trmnl.app/)?

TRMNL is an innovative platform designed to help people stay focused and calm in our increasingly distracting digital world. Founded in 2023, TRMNL has quickly become a leading solution for E Ink® dashboard management, offering a unique approach to displaying information without the constant notifications and distractions of traditional screens.

At its core, TRMNL is built on the philosophy that technology should enhance our lives without demanding constant attention. The platform provides an elegant way to view important information at a glance through E Ink® displays, creating a more mindful and less intrusive technological experience.

### Why use TRMNL?

- **Simplified dashboard creation**: TRMNL's growing library of apps and integrations makes it easy to create custom information displays without complex programming.
- **Low power consumption**: TRMNL's efficient software combined with E Ink® minimal power requirements creates an extremely energy-efficient solution.
- **Distraction-free information**: Get the information you need without notifications and eye strain.
- **Regular updates**: TRMNL's active development means new features and integrations are added weekly.
- **Developer-friendly**: TRMNL's open API and developer tools allow custom plugins and integrations.

## Compatible Hardware

### reTerminal E Series

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" Monochrome<br/>Integrated terminal</td>
      <td align="center">7.3" Spectra 6 (Color)<br/>Integrated terminal<br/>Mono mode in TRMNL</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">10.3" Monochrome<br/>16-level grayscale<br/>Integrated terminal</td>
      <td align="center">13.3" Spectra 6 (Color)<br/>Integrated terminal<br/>Mono mode in TRMNL</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### TRMNL DIY Kit & XIAO Panel

<div class="table-center">
  <table align="center">
    <tr>
      <th>TRMNL 7.5" (OG) DIY Kit</th>
      <th>XIAO 7.5" ePaper Panel</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" Mono + DIY case<br/>XIAO ESP32-S3 Plus driver</td>
      <td align="center">7.5" Mono bare panel<br/>XIAO ESP32-C3 directly</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Step 1: TRMNL Account Setup and BYOD Access

Before connecting your device to TRMNL you need a TRMNL account and BYOD (Bring Your Own Device) access — the same flow regardless of hardware.

1. **Purchase TRMNL Access**

   - Buy access to the TRMNL web app + device capabilities at: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - This provides you with the necessary credentials to use TRMNL's platform.
   - Go to [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) to activate a virtual device (may take up to 10 minutes following purchase).

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Create a TRMNL Account**

   - Visit [TRMNL's website](https://usetrmnl.com)
   - Click on "Sign Up" to create a new account.
   - Follow the registration process.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Your TRMNL credentials are sensitive information. Never share them publicly or commit them to version control systems.
:::

If you encounter any issues, contact the TRMNL team directly at [team@usetrmnl.com](mailto:team@usetrmnl.com).

## Step 2: Hardware Setup

The reTerminal E Series and the XIAO 7.5" Panel are pre-assembled — you only need to power them on. The TRMNL DIY Kit requires assembly.

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

The reTerminal E Series is fully integrated. Just connect the USB-C cable, slide the power switch to **ON**, and power it on. No assembly steps are needed.

:::tip reTerminal E1003 only
If the device is asleep and does not respond, press the **Refresh** button on the top of the unit to wake it before connecting USB or entering flashing mode.
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

**Step 1. Connect the display to the driver board**  
Align the FPC cable with the connector on the XIAO ePaper Display Board, then secure the latch to ensure a firm connection.

:::tip
The metal side of the FPC cable should face upwards, otherwise no content will be displayed. Please follow the installation video below — many people get this wrong.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Step 2. Attach the battery**  
Connect the battery cable to the JST connector on the driver board, ensuring correct polarity (red wire to +, black to -).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Step 3. Enclosure assembly (optional)**

:::tip
Please note that the screen's flexible cable is very fragile. Be careful when operating. If it gets damaged, the entire screen will stop working.
:::

Print the open-source enclosure parts from the [Resources](#resources) section and assemble the components inside.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

First, assemble driver board and battery:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

Test the TRMNL kit:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

Plug the screen into the case and route the FPC cable out:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

Connect the FPC extension cable and assemble the whole case:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

The L-shape enclosure assembly is very similar:

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

:::tip
If your TRMNL kit is far away from your router, you can route the antenna outside the case for better signal performance.
:::

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

The XIAO 7.5" ePaper Panel ships with the XIAO ESP32-C3 directly mated to the panel. Just plug in via USB-C — no further assembly required.

</TabItem>
</Tabs>

## Step 3: Flash the TRMNL Firmware

Three flashing methods are available. **Method 1 (Web Flasher)** is the easiest and works for all supported hardware. **Method 2 (reTerminal E-Series Firmware Flasher)** is exclusive to reTerminal E Series. **Method 3 (Build from Source)** is for advanced users.

:::tip Brand-new TRMNL DIY Kits already ship with TRMNL firmware
If you bought a brand-new TRMNL 7.5" (OG) DIY Kit, it already has TRMNL firmware preinstalled — you can skip the flashing step entirely and jump to Step 4.
:::

### Method 1: TRMNL Web Flasher (recommended)

The TRMNL Web Flasher works directly in the browser and supports every device on this page.

1. Visit [https://usetrmnl.com/flash](https://usetrmnl.com/flash).
2. Plug in your device via USB-C and follow the on-screen instructions.
3. Pick the firmware that matches your hardware:

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

- **reTerminal E1001 / E1002**: use **FW 1.6.7 or newer** for Seeed compatibility.
- **reTerminal E1003**: select **reTerminal E1003** in the firmware list and use **FW 1.8.7 or newer**.
- **reTerminal E1004**: select **reTerminal E1004** in the firmware list and use **FW 1.8.10 or newer**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/258.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

Use **FW 1.5.12 or newer** for Seeed compatibility on the TRMNL DIY Kit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/259.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

Use **FW 1.5.12 or newer** for Seeed compatibility on the XIAO 7.5" ePaper Panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/260.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Method 2: Flash via reTerminal E-Series Firmware Flasher (reTerminal E Series only)

:::info
This method is applicable to **reTerminal E1001 / E1002 / E1003 / E1004**. (**FW 1.8.10** and newer).
:::

:::caution Prefer Method 1 for newer TRMNL firmware
The reTerminal E-Series Firmware Flasher provides a Seeed-hosted TRMNL firmware channel for reTerminal E Series devices. Seeed does not update this channel as frequently as the official TRMNL Web Flasher, and not every upstream TRMNL firmware release is synchronized here.

Use [Method 1: TRMNL Web Flasher](#method-1-trmnl-web-flasher-recommended) first when you want a newer TRMNL firmware release. Use this method when you need the Seeed-hosted reTerminal E Series flashing flow.
:::

<details>
<summary>Click to expand the reTerminal E-Series Firmware Flasher steps</summary>

1. Visit the [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/). For a direct E1004 TRMNL entry, you can also open the [E1004 TRMNL 1.8.10 Hub link](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/?platform=trmnl&device=E1004&firmware=TRMNL_reTerminal_E1004&version=1.8.10).

2. In **Select platform**, choose the **TRMNL** card from the official platform section.

3. Select your device:

   - **reTerminal E1001**
   - **reTerminal E1002**
   - **reTerminal E1003**
   - **reTerminal E1004**

4. On the second page, review the available TRMNL firmware version for your selected device (for E1004, use **1.8.10 or newer**).

5. Connect your device to the computer with a USB data cable.

6. In **Flash to device**, select **Erase flash + flash** for the first installation, then click **Connect & flash**.

7. Choose the serial port for your device in the browser prompt and start the flashing process.

:::tip First-time flashing
For the first installation, select **Erase flash + flash** so the device starts from a clean firmware state.
:::

:::tip reTerminal E1003 only
Make sure the power switch is **ON**. If the device is asleep and the flash does not start, press the **Refresh** button on the top of the unit to wake it, then retry.
:::

:::note reTerminal E1002 / E1004 display behavior
The reTerminal E1002 uses a full-color ePaper screen, but TRMNL firmware currently renders E1002 content in monochrome mode. During Wi-Fi provisioning, the E1002 AP screen shows a compact layout with the TRMNL logo in the lower-right corner. When you see this screen, search for and connect to the E1002 hotspot, then continue with the same Wi-Fi setup flow as the other devices.

The reTerminal E1004 also uses a full-color Spectra™ 6 panel, but TRMNL firmware likewise renders its content in monochrome mode. Pick **reTerminal E1004** in the flasher so the correct panel is used.
:::

After flashing is complete, continue to [Step 4: Connect Device to Wi-Fi](#step-4-connect-device-to-wi-fi).

</details>

### Method 3: Build and Flash from Source (advanced)

1. **Clone the firmware repository**

   - Visit the [official firmware repository](https://github.com/usetrmnl/trmnl-firmware) and clone it:

     ```bash
     git clone https://github.com/usetrmnl/trmnl-firmware.git
     ```

   :::tip
   Sometimes our PRs to TRMNL upstream are still under review. If you want the latest Seeed-side patches, use the Seeed-maintained source snapshots in the [OSHW-reTerminal-Series-E-D](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D) repository instead:

   ```bash
   git clone https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D.git
   ```

   - For **reTerminal E1001 / E1002 / E1003**, use [`examples/official/TRMNL`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL).
   - For **reTerminal E1004**, use the dedicated [`examples/official/TRMNL_E1004`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004) project.
   :::

2. **Install [PlatformIO](https://platformio.org/)** as a VS Code extension or via the command line.

3. **Open the project**: open the cloned `firmware` folder in VS Code.

4. **Select the correct PlatformIO environment** for your hardware:

   <Tabs groupId="trmnl-hardware">
   <TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

   In `platformio.ini`:

   - For **reTerminal E1001**, select the `seeed_reTerminal_E1001` environment.
   - For **reTerminal E1002**, select the `seeed_reTerminal_E1002` environment (TRMNL renders content in monochrome on E1002).
   - For **reTerminal E1003**, select the `TRMNL_X_E1003` environment in the [official TRMNL firmware repository](https://github.com/usetrmnl/trmnl-firmware).
   - For **reTerminal E1004**, open the dedicated [`examples/official/TRMNL_E1004`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004) PlatformIO project and select the `seeed_reTerminal_E1004` environment (firmware ID `TRMNL_reTerminal_E1004`).

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

   In `platformio.ini`, select the `TRMNL_7inch5_OG_DIY_Kit` environment.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/5.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

   In `platformio.ini`, select the `seeed_xiao_esp32c3` environment.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. **Connect your device** via USB-C.

6. **Build and upload**: click the PlatformIO **Upload** button or run:

   ```bash
   pio run --target upload
   ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

## Step 4: Configure Wi-Fi and Provision the Device

The Wi-Fi provisioning workflow is identical for all supported hardware.

> 💡 **Trouble connecting Wi-Fi?** See the [TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting).

### Power on and enter provisioning mode

After flashing the TRMNL firmware and powering on your device, it will automatically enter provisioning mode if it is not yet connected to Wi-Fi.

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Connect to the TRMNL Wi-Fi

On your phone or computer, open the list of available Wi-Fi networks. Look for a network named **TRMNL** and connect to it (no password required by default).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Open the captive portal

Once connected, open a web browser. The device should automatically redirect you to the TRMNL configuration page; if it does not, manually visit [http://4.3.2.1](http://4.3.2.1).

### Enter your Wi-Fi credentials

- Select your **2.4 GHz Wi-Fi network** (5 GHz networks are not supported).
- Enter your Wi-Fi password and click **Save** / **Connect**.

> ⚠️ **Important:** make sure to use a 2.4 GHz Wi-Fi network. The ESP32-C3 / ESP32-S3 chips on these devices do not support 5 GHz networks.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### Device joins your network

The device will disconnect from the TRMNL Wi-Fi and join your home network. The captive-portal window will show the device's MAC address. **Record the MAC address** — you'll need it in the next step.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Note:** the MAC address is only visible in the captive portal for 1–2 seconds. If you miss it you can also:
>
> - Retrieve it from the VS Code → PlatformIO build/upload logs.
> - Use the [usetrmnl.com/flash](https://usetrmnl.com/flash) method and check the browser developer console during flashing.
> - Find it in your router or mesh-network app's list of connected devices.
>
> See the official guide: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address).

## Step 5: Register the Device on TRMNL

After your device is connected to Wi-Fi and you have its MAC address, register it on the TRMNL web interface:

1. **Open the TRMNL web interface** at [https://trmnl.app](https://trmnl.app).
2. **Go to the Devices page**.
3. **Add a new device** (button at top right or in the page center).

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Enter the Device ID** you received when you purchased BYOD access (this is **not** the MAC address — find the Device ID in your purchase confirmation email or TRMNL dashboard). Click **Add new device**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Bind the device's MAC address** in the device settings page:

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   You can also set a custom name and adjust other settings here.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

Your device is now linked to your TRMNL account! You can now send playlists, images, and other content directly from the TRMNL interface.

> 💡 **Tip:** if you have multiple devices, repeat the above steps for each one using their unique Device IDs.

:::caution Disable Firmware Early Release & OTA Updates
After adding your device in the TRMNL web interface, go to the device's settings page and **turn off** both **Firmware Early Release** and **OTA Updates Enabled**.

If left enabled, your device may automatically download firmware updates intended for official TRMNL hardware that **are not compatible with Seeed devices**. Installing incompatible firmware may cause your device to malfunction or become unresponsive.

Always keep both options disabled to ensure stable operation.
:::

## Buttons Usage

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1004" default>

The reTerminal E1001 and E1002 expose a single user-facing button under TRMNL firmware:

- **Green Button — long press 5 s**: enter Wi-Fi reconfiguration mode.
- **Reset button**: single click to reboot the device.

The reTerminal E1004 uses the front physical buttons under TRMNL firmware. Use those buttons to wake or refresh the panel, and slide the power switch **OFF** then **ON** to reboot. For Wi-Fi reconfiguration, follow the same long-press / provisioning flow shown on the device screen after a factory flash or network reset.

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

The reTerminal E1003 exposes three top-mounted buttons under TRMNL firmware:

- **Refresh button — single press**: wake the device or immediately refresh the current screen.
- **Page Up + Page Down — press and hold 2 s**: enter Wi-Fi reconfiguration mode.
- **Power switch**: slide to **OFF** then **ON** to reboot the device.

:::note
Capacitive touch is supported under SenseCraft HMI firmware only. TRMNL firmware does not use the touch panel — all interaction is through the physical buttons above.
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

The XIAO ePaper Display Board has 4 buttons (RESET / KEY1 / KEY2 / KEY3). **Only RESET and KEY3 are used by the TRMNL firmware.**

**KEY3 usage:**

1. **Single click**: refresh the page immediately.
2. **Double click**: custom function — configure it from the TRMNL settings page.
3. **Long press (~5 s)**: reconfigure the network.

**RESET usage**: single click to reset the device.

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

The XIAO ESP32-C3 has the standard **RESET** and **BOOT** buttons.

- **Reset → release → hold BOOT for 5 s**: reconfigure the network (returns to the TRMNL provisioning portal).
- **RESET single click**: reboot the device.

</TabItem>
</Tabs>

## Understanding the TRMNL Playlist

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

The TRMNL Playlist controls exactly what is displayed on your ePaper device and when.

### Playlist overview

- **Playlist Title**: the name of your TRMNL device.
- **Display Time Range**: when the playlist is active (e.g. 00:00–23:45).
- **Update Interval**: how often the display refreshes (e.g. every 5 minutes).
- **Add a Group / Add a Plugin**: organise the playlist into groups or add new content plugins.

### Playlist items

Each row is a screen or widget that will be shown on your device. Examples:

1. **Weather** — current weather information for your location.
2. **Days Left This Year** — countdown of days remaining in the current year.
3. **Custom Text** — display any custom message (e.g. "Hello World").

For each item:

- **Settings (gear icon)**: configure the plugin's options.
- **Delete (X icon)**: remove the item from your playlist.
- **Preview (eye icon)**: preview what the screen will look like.
- **Reorder (bars icon)**: drag to change the order.

### Smart Playlist

At the bottom you can choose whether to automatically skip screens whose content hasn't changed. See the [Smart Playlists blog post](https://usetrmnl.com/blog/smart-playlists) for details.

## Exploring TRMNL Plugins

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

Plugins are modular content blocks that can show weather, calendar events, stock prices, RSS feeds, motivational quotes, GitHub activity, and much more.

### Connected plugins

At the top of the Plugins page you see all the plugins already connected to your TRMNL account. Examples include Weather, Days Left This Year, Stock Price, RSS Feed, Reddit, Hacker News, Language Learning, Motivational Quote, Custom Text, …

### Plugin marketplace

Below your connected plugins you'll find the marketplace. Plugins are organized by categories and tags (#productivity, #news, #ecommerce, …). Browse, search, and click any plugin to connect it to your account.

Developers can also create and publish their own plugins — see the [plugin marketplace docs](https://docs.usetrmnl.com/go/plugin-marketplace/introduction) for details.

For more advanced features see the official TRMNL documentation: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go).

## FAQ

### Q1: How do I reconfigure the network?

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

Press and hold the **Green Button** for 5 seconds. The device will return to the initial TRMNL interface and activate the AP.

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

Press and hold **Page Up** and **Page Down** together for 2 seconds. The device will return to the initial TRMNL interface and activate the AP.

If the screen is asleep, press the **Refresh** button once first to wake the device.

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

Press and hold **KEY3** (next to the Reset button) for 5 seconds. The device will return to the initial TRMNL interface and activate the AP.

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

Press the **Reset** button on the XIAO, release it, then press and hold the **BOOT** button for 5 seconds. The device will return to the initial TRMNL interface and activate the AP.

</TabItem>
</Tabs>

### Q2: What should I do if the screen always shows a low battery warning?

Two different situations can trigger this screen:

1. **The battery voltage is actually low.** This is the most common case — the device really needs charging. Plug it in or replace/charge the battery and the warning should clear once the voltage recovers.

2. **A TRMNL server-side issue.** Battery level is evaluated on TRMNL's servers, not only on the device. A server bug or a recent platform update can temporarily mis-report battery status and keep showing the warning even when the hardware is fine.

**If the battery is genuinely low**, charge the device first — do not hide the warning until you have confirmed the pack is healthy.

**If you are sure the battery is fine** but the warning will not go away, you do **not** need to modify the firmware. TRMNL lets you suppress the on-screen prompt from the web dashboard:

**Step 1.** Open the [TRMNL web interface](https://trmnl.app) and go to **Devices**.

**Step 2.** Select the affected device and open its **Battery** settings.

**Step 3.** Turn on **Hide Low Battery Screen**. This stops the low-battery warning screen from appearing on the device while TRMNL's server-side battery detection recovers, or when you need the display to stay on your playlist.

**Step 4.** (Optional) Leave **Low Battery Email Notification** enabled if you still want email alerts without interrupting the display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/261.png" style={{width:800, height:'auto'}}/></div>

### Q3: Web Flasher / PlatformIO can't find the device or upload fails

Sometimes the wrong program can cause the XIAO to lose its port or not function correctly:

- The XIAO is connected but **no port number** is found.
- The XIAO is connected, the port appears, but the **upload fails**.

Put the XIAO into BootLoader mode to recover:

- **Step 1**: press and hold the `BOOT` button on the XIAO ESP32-S3 / ESP32-C3 without releasing it.
- **Step 2**: while still holding `BOOT`, connect the device to the computer via USB-C. Release `BOOT` after the device is connected.
- **Step 3**: re-run the upload / flash. Most "device not recognised" or "upload failed" issues are solved by this.

## Special Thanks

Special thanks to the entire **TRMNL team** for their strong support and invaluable help across this integration. In particular we want to thank **Bogdan**, **Ryan Kulp**, **Fr3d**, **Schappi**, and all other team members for their dedication throughout development and documentation.

Their expertise made this integration possible and greatly improved the experience for the reTerminal E Series (E1001, E1002, E1003, and E1004), TRMNL DIY Kit, and XIAO 7.5" ePaper Panel communities.

## Resources

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

- **[GitHub]** [TRMNL firmware source for E1001 / E1002 / E1003](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL)
- **[GitHub]** [TRMNL firmware source for E1004](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004)
- **[GitHub]** [Official TRMNL firmware](https://github.com/usetrmnl/trmnl-firmware)
- **[Wiki]** [Getting Started with reTerminal E1003](/getting_started_with_reterminal_e1003)
- **[Wiki]** [Getting Started with reTerminal E1004](/getting_started_with_reterminal_e1004)

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

- **[Firmware]** [TRMNL ePaper Library (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [Driver Board SCH](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Printable]** [Triangular base](https://www.printables.com/model/1354873)
- **[Printable]** [Protected triangular base](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)
- **[Printable]** [L-shaped base](https://www.printables.com/model/1354879)
- **[Thingiverse]** [Triangular base](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [Protected triangular base](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [L-shaped base](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [Triangular base](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [Protected triangular base](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [L-shaped base](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

- **[STP]** [3D Model enclosure](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]** [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GitHub]** [TRMNL firmware repository](https://github.com/usetrmnl/firmware)
- **[GitHub]** [Seeed_TRMNL_Eink_Project repository](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

</TabItem>
</Tabs>

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
