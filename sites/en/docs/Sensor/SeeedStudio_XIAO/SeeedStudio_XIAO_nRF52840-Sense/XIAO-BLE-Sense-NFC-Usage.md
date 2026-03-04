---
description: NFC Usage for XIAO nRF52840 (Sense)
title: NFC Usage for both versions
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 05/31/2023
  author: Matthew
---

# NFC Usage on Seeed Studio XIAO nRF52840 (Sense)

<!-- :::note
The NFC function for Seeed Studio XIAO nRF52840 board is temportorily not functioning. The new wiki will be updated as soon as possible, once the new NFC library comes out.
::: -->

:::note
The Seeed nRF52 Boards version 1.1.3 and Seeed nRF52 mbed-enabled Boards version 2.9.2 have been tested and approved.
:::

Both the **Seeed Studio XIAO nRF52840** and **Seeed Studio XIAO nRF52840 Sense** are equipped with an **NFC (Near Field Communication) module**. This wiki will help you get started with using NFC on these boards. Here we will demonstrate a basic example where we send a text string from the board to the phone after placing the phone on the NFC antenna.

## Preparatory work

> The NFC function will perform well when we use the "Seeed nRF52 mbed-enabled Boards Library".

For the board libraries installation, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) to finish installation. If you have already installed, we can move on and process the project.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>


## Hardware required

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) or [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x NFC antenna
- 1 x USB Type-C cable
- 1 x Smartphone

## Software required

- [NFC TagInfo App (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [NFC TagInfo App (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## Hardware connection And Overview

Solder the NFC antenna to the Seeed Studio XIAO nRF52840 (Sense) as follows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3(1).png" alt="pir" width={550} height="auto" /></p>

- **Nature**: 13.56 MHz differential current-driven ports of the nRF52840 (NFC1 = P0.09, NFC2 = P0.10); must be used as a pair.
- **Difference**: Only opposite phase; no separate function. Swapping is possible but flips the UID.
- **Caution**: Bare pins, no ESD/TVS. Wear a wrist strap before soldering, both pads are mandatory, never use as GPIO.

## Send text string with NFC

- **Step 1.** Open Arduino IDE and upload the following codes

```cpp
#include <NFCT.h>

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

## Antenna Tuning


  All the operations described below are based on the core logic of this document.**[Nordic Official NFC Antenna Design](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)**
 - The NFC carrier is fixed at 13.56 MHz; the chip delivers full power only when it sees a **differential 100 Ω load at resonance**.

- Tuning = using two capacitors to achieve **resonance and impedance transformation** simultaneously, so the coil appears **exactly 100 Ω**.

**1.Three “Never-Change” Numbers**

| Item | Fixed Value | Source |
|---|---|---|
| Operating frequency f | 13.56 MHz | Global NFC standard, hard-coded in nRF52840 |
| Load the chip wants to see | 100 Ω (differential) | Nordic white-paper nWP_026 |

**2.Two Quantities to Measure**
  
   **Coil inductance L** – measure with DMM / LCR meter / VNA at 100 kHz, value in µH.

   **Coil loss resistance R** – read the series resistance from the same screen, in Ω (thicker wire & larger area → lower R).

**3  Pre-Check: Is the Coil Size OK?**
Using the impedance-transformation formula:


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="pir" width={250} height="auto" /></p>

Target: 90–120 Ω, the closer to 100 Ω the better.

| Result | Meaning | Next Step |
|---|---|---|
| < 60 Ω | Antenna “too small” | Add turns or enlarge area |
| 90 – 120 Ω | **PASS** | Go to Step 4 |
| > 150 Ω | Antenna “too big” | Remove turns or shrink area |

> Only after this gate is passed do you calculate capacitors; otherwise any cap value is useless.

**4  Calculate Resonant Capacitance C**
  
Formula with fixed 13.56 MHz:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="pir" width={250} height="auto" /></p>


→ Gives **total capacitance**; for π-network split equally:

**C1 = C2 = C / 2**  
Pick closest E12 value (39 pF, 47 pF, 56 pF, 68 pF …).

