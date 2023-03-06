---
description: NFC Usage on Seeed Studio XIAO nRF52840 (Sense)
title: NFC Usage on Seeed Studio XIAO nRF52840 (Sense)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# NFC Usage on Seeed Studio XIAO nRF52840 (Sense)

Both the **Seeed Studio XIAO nRF52840** and **Seeed Studio XIAO nRF52840 Sense** are equipped with an **NFC (Near Field Communication) module**. This wiki will help you get started with using NFC on these boards. Here we will demonstrate a basic example where we send a text string from the board to the phone after placing the phone on the NFC antenna.

## Preparatory work

> The NFC function will perform well when we use the "Seeed nRF52 Boards Library".

For the board libraries installation, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) to finish installation. If you have already installed, we can move on and process the project.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png" /></div>


## Hardware required

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) or [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x NFC antenna
- 1 x USB Type-C cable
- 1 x Smartphone

## Software required

- [NFC TagInfo App (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [NFC TagInfo App (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## Hardware connection

Solder the NFC antenna to the Seeed Studio XIAO nRF52840 (Sense) as follows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3.png" alt="pir" width={550} height="auto" /></p>


## Send text string with NFC

- **Step 1.** Open Arduino IDE and upload the following codes

```cpp
#include <NFC.h>

void setup() { 
  // set the NFC message as first parameter and the language code as second
  NFC.setTXTmessage("Hello World!", "en");
  // start the NFC module
  NFC.start();
}

void loop() {

}
```

Here we simply send the text string "Hello World!" 

- **Step 2.** Open "NFC TagInfo" mobile app and click **Scan & Launch**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>


- **Step 3.** Place the NFC antenna close to the phone and you will see the following output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>
