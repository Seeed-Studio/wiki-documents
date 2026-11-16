---
title: NFC for XIAO nRF54LM20B
sidebar_label: NFC for XIAO
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - nfc
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/xiao_nrf54lm20b_nfc.webp
slug: /xiao_nrf54lm20b_with_nfc
sku:
last_update:
  date: 11/11/2026
  author: Brandy
createdAt: '2026-10-19'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_nfc/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_NFC_Usage.png" style={{width:600, height:'auto'}}/></div>

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

## Introduction

Near Field Communication (NFC) is a technology for wirelessly transferring small amounts of data between two devices. It uses very simple protocols, so it connects faster than Bluetooth Low Energy, but because it relies on magnetic induction the two devices must be very close — under 10 cm — to connect. The XIAO nRF54LM20B exposes the nRF54LM20's on-chip NFCT peripheral on two pins, letting you use the board as an NFC Type 4 Tag that a phone or reader can tap to read or write.

For the Nordic NFC protocol reference, see [Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/nfc/index.html); for the specification itself, see the [NFC Forum specification overview](https://nfc-forum.org/build/specifications).


## Hardware Preparation

You need an XIAO nRF54LM20B and an NFC antenna. The bare 20B board has **no on-board NFC coil** — the NFC pins are routed to test points only — so an external antenna is required for any of the samples below to scan.

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20B Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
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
      </td>
    </tr>
  </table>
</div>

:::tip
The Nordic NFC antenna is not sold separately on Seeed Studio Bazaar, so you will need to purchase it from other sources. A bare 13.56 MHz coil antenna (roughly 4.6 µH) also works — see the tuning note under soldering.
:::


### Solder the antenna

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-3.jpg" style={{display:'inline-block', width:'450px', height:'auto', margin:'-75px 0', transform:'rotate(-90deg)', transformOrigin:'center center'}}/></div>

On the XIAO nRF54LM20B the NFC pins are P1.01 and P1.02, the same as on the 20A. Solder your external antenna to TP19 and TP20; their location on the board is shown above.

:::caution
The NFC pins do not distinguish positive and negative. Soldering fine-pitch test points is challenging — take safety precautions to avoid personal injury and equipment damage, or use flying wires instead.
:::

:::note Tuning caveat
The on-board 300 pF (C25/C26) is sized for a **bare coil antenna**. If you instead wire a pre-tuned commercial NFC tag — which carries its own internal matching capacitance — to TP19/TP20, its capacitance goes in parallel with the 300 pF, the tank detunes away from 13.56 MHz, and it still will not scan. For a bare coil, keep C25/C26; for a pre-tuned tag, remove C25/C26 and let the tag use its own matching network.
:::

## Software

### NFC Read/Write Sample: Writable NDEF Message

This is the Nordic Connect SDK **[writable NDEF message](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/nfc/writable_ndef_msg/README.html)** sample, built for the XIAO nRF54LM20B. It turns the board into an NFC Type 4 Tag in read-write emulation: a phone tapping the antenna reads a default URI record (`http://www.nordicsemi.com`), and NFC Tools can overwrite it with your own NDEF message — the new message is written back to flash and survives reboots.


1. Ready-made example code is available.
<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/12_NFC/writable_ndef_msg_3" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

2. Pull the sample from the official nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/1.png" style={{width:600, height:'auto'}}/></div>

<br/>

3. Build the sample.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/2.png" style={{width:600, height:'auto'}}/></div>

<br/>

4. Flash the signed image through MCUboot serial-recovery DFU. Hold **B0 (P0.09)**, tap **RST**, release **B0**, then:

```bash
nrfutil mcu-manager serial image-upload
nrfutil mcu-manager serial reset
```

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
