---
title: NFC for XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - nfc
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_NFC.webp
slug: /xiao_nrf54lm20a_with_nfc
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-25'
updatedAt: '2026-07-06'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20a_with_nfc/
---

# NFC for XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_NFC.png" style={{width:400, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Get One Now 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

<br/>
Near Field Communication (NFC) is a technology for wireless transfer of small amounts of data between two devices. It uses very simple communication protocols and, therefore, allows quicker connection than Bluetooth® Low Energy. However, because NFC uses magnetic induction to enable communication, the devices must be very close (< 10 cm) to connect.】

- *For NFC tutorials and references for Nordic series chips, refer to[Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-3.2.0/page/nrf/protocols/nfc/index.html)*
- *Technical specifications for NFC are available from the [NFC Forum specification overview](https://nfc-forum.org/build/specifications)*.

The XIAO nRF54LM20A is equipped with a reserved NFC interface for you to explore and utilize NFC functions further.

:::tip

This tutorial is based on VS Code and the nRF Connect Extension. If you are new to them, you can refer to [XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/xiao_nrf54lm20a_ncs/)

:::

## Hardware Preperation

Before starting the experiment, you need to prepare an XIAO nRF54LM20A and a Nordic NFC antenna.

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

:::tip

The Nordic NFC antenna is not sold separately on Seeed Studio Bazaar, so you will need to purchase it from other sources.

:::

### Solder the antenna

On the XIAO nRF54LM20A, the default pins for the external NFC antenna are P1.01 and P1.02, marked N1 and N2 on the silkscreen. See the soldering example below.

- Pre-connection Diagram

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_1.png" style={{width:600, height:'auto'}}/></div>
<br/>
- Physical Connection Diagram

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_2.jpg" style={{width:600, height:'auto'}}/></div>
<br/>
:::caution

This welding process is quite challenging and requires skilled welding techniques. Alternatively, you can choose to connect XIAO and NFC using flying wires. Please pay attention to safety precautions to avoid personal injury and equipment damage.

The pins of NFC do not distinguish between positive and negative

:::

## Software

:::tip

- This section demonstrates how to use NFC based on sample code from the Nordic Connect SDK.
<!-- - 由于 Platfrom IO 下我们没有编写NFC的设备树支持，所以无法使用 -->

:::

### NFC Records text

This example demonstrates reading text information via NFC.

1. Within the extension, create a blank routine and choose to copy an existing routine.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_3.png" style={{width:800, height:'auto'}}/></div>

2. Enter nfc, select NFC text Records sample

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/1.png" style={{width:800, height:'auto'}}/></div>

3. Select storage path

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/2.png" style={{width:800, height:'auto'}}/></div>

4. Open the project, add the XIAO nRF54LM20A configuration under the corresponding extension, and compile.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/3.png" style={{width:800, height:'auto'}}/></div>

5. Open the terminal and enter the command `west flash` to burn the firmware to the XIAO nRF54LM20A.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/4.png" style={{width:800, height:'auto'}}/></div>

#### Result

Please select a mobile phone with NFC functionality to attempt this experiment.

1. To view NFC read information in more detail, you need to download the corresponding app for your system.

- iOS :[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Place your phone's NFC area close to the NFC antenna to read detailed NFC information.

The text information displayed on your phone is:

```txt
Hello World!
Hallo Verden!
Witaj świecie!
```

<div className="table-center">
<table align="center">
<tr>
      <td>NFC Tools</td>
      <td>nRF NFC Toolbox</td>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_8.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_9.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

### NFC Launch App

This section covers the NFC function. Please search for **nRF Toolbox for Bluetooth LE**.

1. Within the extension, create a blank sample project, select to copy an existing sample, and choose **NFC Launch App**. Configure and compile it by referring to [NFC Records text](#nfc-records-text).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_10.png" style={{width:800, height:'auto'}}/></div>

2. Open the project, add the XIAO nRF54LM20A configuration under the corresponding extension, and compile.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/5.png" style={{width:800, height:'auto'}}/></div>

3. Open the terminal, enter the `west flash` command to flash it onto the XIAO nRF54LM20A.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/6.png" style={{width:800, height:'auto'}}/></div>

#### Result

1. To view NFC read information in more detail, you need to download the corresponding app for your system.

- iOS :[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Bring your phone's NFC sensor close to the NFC antenna. The browser will launch and search for "no.nordicsemi.android.nrftoolbox", and the reading record will be displayed in nRF NFC Toolbox.

<div className="table-center">
<table align="center">
<tr>
      <td>Chrome</td>
      <td>nRF NFC Toolbox</td>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_12.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_13_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

## Summary

NFC features can be reused in various scenarios, such as data writing and low-power wake-up. The nRF Connect SDK provides corresponding sample codes. You can extend these samples for practical applications. For instance, combining NFC low-power wake-up with motor control enables a simple smart lock for daily use.

In addition, we believe you have gained a basic understanding of NFC implementation on the XIAO nRF54LM20A through the above examples. We look forward to your creative ideas and contributions to the open-source community.

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
