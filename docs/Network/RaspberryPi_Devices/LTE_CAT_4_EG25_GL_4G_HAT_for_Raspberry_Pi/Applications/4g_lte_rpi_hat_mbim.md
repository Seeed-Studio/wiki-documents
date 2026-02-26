---
description: Guide to setting up Quectel 4G Raspberry Pi HAT on Windows using MBIM mode for stable cellular internet connection.

title: 4G Raspberry Pi HAT - MBIM Mode Setup on Windows
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - MBIM
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.webp
slug: /raspberry_pi_4g_lte_hat_mbim
last_update:
  date: 3/18/2025
  author: Kasun Thushara
---

## Introduction

The **Quectel 4G Raspberry Pi HAT** supports internet connectivity on Windows by utilizing MBIM (Mobile Broadband Interface Model) mode. This mode enables Windows to recognize the 4G module as a native cellular modem, facilitating a stable and driver-supported network connection.

This guide will walk you through the necessary steps to configure your Quectel module in MBIM mode and connect it to the internet on Windows 10/11 systems.

## Prerequisites

### Hardware Requirements

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Software Prerequisites

Before proceeding, ensure that:

- Any previously installed Quectel NDIS or other drivers are uninstalled.
- The correct MBIM driver is installed using the links provided below.

### MBIM Driver Download

- [Download Quectel Windows MBIM Driver v1.3](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_MBIM_V1.3_EN.zip)
- [Get the latest updates from Quectel](https://www.quectel.com/download-zone/?_sf_s=MBIM)

Once installed, you can verify driver installation by navigating to **Computer Management** → **Device Manager**. A successful installation will show devices under "Network Adapters" and "Ports (COM & LPT)" similar to the image below:

  <div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree_mbim.PNG"
    style={{ width: 600}}
  />
</div>

### Configure MBIM Mode

To switch the module to MBIM mode, you will need the **QCOM Tool**.

1. Download and open the [QCOM Tool](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar).
2. Connect your 4G HAT to your Windows PC via USB and power it on.
3. In QCOM, send the following AT command to check the current USB mode:

   ```
   AT+QCFG="usbnet"?
   ```

   - If it returns anything other than `"usbnet",2`, skip this.

4. To switch to MBIM mode, send:

   ```
   AT+QCFG="usbnet",2
   ```

5. Then reboot

   ```
   AT+CFUN=1,1
   ```

:::note
Sometimes you may experience the AT port not responding. In such cases, use the DM port instead.
:::

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcommand.PNG"
    style={{ width: 600}}
  />
</div>

## Connect to Network

Once configured in MBIM mode:

- Windows should detect a **Cellular Network Interface**.
- You can now manage and connect to networks directly from the Windows **Network & Internet Settings**.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/windows.PNG"
    style={{ width: 600}}
  />
</div>

## Verify Network Configuration

To verify if your PC has acquired a network connection via MBIM:

1. Open Command Prompt.
2. Run:

   ```
   ipconfig
   ```

   You should see an interface with an IP address under "Mobile Broadband Connection" or "Cellular".

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.PNG"
    style={{ width: 600}}
  />
</div>

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
