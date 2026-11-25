---
title: NFC for Seeed Studio XIAO nRF54L15 Series
description: Use the NFC interface on XIAO nRF54L15 and XIAO nRF54L15 Sense with the nRF Connect SDK.
keywords:
  - xiao
  - nrf54l15
  - nfc
  - ncs
slug: /xiao_nrf54l15_nfc
url: https://wiki.seeedstudio.com/xiao_nrf54l15_nfc/
---

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html"
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

## Introduction

Near Field Communication (NFC) is a technology for wirelessly transferring small amounts of data between two devices. It uses very simple protocols, so it connects faster than Bluetooth Low Energy, but because it relies on magnetic induction the two devices must be very close — under 10 cm — to connect. The XIAO nRF54L15 exposes the nRF54L15's on-chip NFCT peripheral on two pins, letting you use the board as an NFC Type 4 Tag that a phone or reader can tap to read or write.

For the Nordic NFC protocol reference, see [Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/nfc/index.html); for the specification itself, see the [NFC Forum specification overview](https://nfc-forum.org/build/specifications).


## Hardware Preparation

You need an XIAO nRF54L15 and an NFC antenna. The bare L15 board has **no on-board NFC coil** — the NFC pins are routed to the N1 and N2 pads only — so an external antenna is required for any of the samples below to scan.

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html"
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
      </td>
    </tr>
  </table>
</div>

:::tip
The Nordic NFC antenna is not sold separately on Seeed Studio Bazaar, so you will need to purchase it from other sources.
:::


### Solder the antenna

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/0.png" style={{width:600, height:'auto'}}/></div>

On the XIAO nRF54L15 the NFC pins are P1.02 and P1.03. Solder your external antenna to the N1 and N2 pads; their location on the board is shown above.

:::caution
The NFC pins do not distinguish positive and negative. Soldering fine-pitch test points is challenging — take safety precautions to avoid personal injury and equipment damage, or use flying wires instead.
:::

## Software

### NFC Records text

This example demonstrates reading text information via NFC.

1. Within the extension, create a blank routine and choose to copy an existing routine.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_3.png" style={{width:800, height:'auto'}}/></div>

2. Enter nfc, select NFC text Records sample

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/1.png" style={{width:800, height:'auto'}}/></div>

3. Select storage path

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/2.png" style={{width:800, height:'auto'}}/></div>

4. Open the project, add the XIAO nRF54L15 configuration under the corresponding extension, and compile.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/1.png" alt="XIAO nRF54L15 rear NFC pads (N1 and N2)" style={{width:1000, height:'auto'}}/></div>


5. Open the terminal and enter the command `west flash` to burn the firmware to the XIAO nRF54L15.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/2.png" alt="XIAO nRF54L15 rear NFC pads (N1 and N2)" style={{width:1000, height:'auto'}}/></div>


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
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/10.gif"
    alt="NFC tag read on a phone"
    style={{width: 800, height: 'auto'}}
  />
</div>

### NFC Read/Write Sample: Writable NDEF Message

This is the Nordic Connect SDK **[writable NDEF message](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/nfc/writable_ndef_msg/README.html)** sample, built for the XIAO nRF54L15. 



1. Pull the sample from the official nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/1.png" style={{width:600, height:'auto'}}/></div>




2. Build the sample.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/4.png" alt="XIAO nRF54L15 rear NFC pads (N1 and N2)" style={{width:1000, height:'auto'}}/></div>


3. Flash 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/5.png" alt="XIAO nRF54L15 NFC pad close-up" style={{width:1000, height:'auto'}}/></div>
<br/>


#### Result

1. To inspect the NFC content in detail, install the matching app for your phone.

- iOS: [NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android: [nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Power the board and hold your phone's NFC area close to the antenna. The browser opens `http://www.nordicsemi.com`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-4.jpg" style={{width:200, height:'auto'}}/></div>



3. Overwrite the tag with your own NDEF message using NFC Tools (or equivalent). Because this is a read/write example, you can enter a different URL of your own and tap the tag to write it — the next time you read the tag, the content will have changed.

<div className="table-center">
<table align="center">
<tr>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-2.jpg" style={{width:200, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-5.jpg" style={{width:200, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-1.jpg" style={{width:200, height:'auto'}}/></div></td>
</tr>
</table>
</div>




## Summary

NFC can be reused across many scenarios — data handoff, low-power wake-up, pairing — and the nRF Connect SDK ships matching samples for each. You can extend this read/write sample into real applications, for example pairing NFC low-power wake-up with motor control to build a simple smart lock. With the antenna soldered and the sample running, the rest is up to your own ideas and contributions back to the open-source community.




## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
