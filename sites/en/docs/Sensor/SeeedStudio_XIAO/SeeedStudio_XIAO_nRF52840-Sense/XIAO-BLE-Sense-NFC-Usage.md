---
description: NFC Usage for XIAO nRF52840 (Sense) with XIAO_nRF52840_NFC library.
title: NFC Usage for both versions
keywords:
  - xiao
  - nRF52840
  - NFC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-NFC-Usage
sku: 102010448, 102010469
last_update:
  date: 07/15/2026
  author: Morgan
---

# NFC Usage on Seeed Studio XIAO nRF52840 (Sense)

Both the **Seeed Studio XIAO nRF52840** and **Seeed Studio XIAO nRF52840 Sense** are equipped with an **NFC (Near Field Communication) module** based on the nRF52840's built-in NFCT (Near Field Communication Tag) peripheral. It supports NFC Type 2 Tag functionality. By connecting an external NFC antenna, the XIAO nRF52840 can act as an NFC tag and be read by smartphones and other NFC readers.

This wiki walks you through the complete NFC usage workflow — from library installation, hardware connection, antenna tuning, to a three-step verification process that ensures your NFC setup works reliably.

:::note
This tutorial is based on the **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** library. The Seeed nRF52 Boards version **1.1.13** has been tested and approved.
:::

## Preparatory Work

For the board libraries installation, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish installing the Seeed nRF52 Boards. If you have already installed, we can move on.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-select-board-NRF52840-for-nfc.png" /></div>

## Hardware Required

| Item | Description |
|------|-------------|
| Development Board | [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) or [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html) |
| NFC Antenna | 13.56 MHz NFC coil antenna, soldered to **D14** (NFC1 / P0.09) and **D15** (NFC2 / P0.10) |
| USB Cable | USB Type-C, for power and serial communication |
| Smartphone | iPhone or Android, for reading NFC tags |

:::tip
The basic NFC functionality works with just the antenna soldered to D14/D15. If you experience unstable behavior (incomplete pop-ups, intermittent detection), adding matching capacitors will significantly improve reliability. See [Antenna Tuning](#antenna-tuning) for details.
:::

## Software Required

| Item | Version / Notes |
|------|-----------------|
| Arduino IDE | 1.8.x or later |
| Seeed nRF52 Boards | **1.1.13** (install via Arduino IDE Boards Manager) |
| XIAO_nRF52840_NFC Library | Download from [GitHub](https://github.com/limengdu/XIAO_nRF52840_NFC), install via **Sketch > Include Library > Add .ZIP Library** (see below) |
| NFC Tools App | [Android](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc) / [Apple](https://apps.apple.com/us/app/nfc-tools/id1252962749) |

### Installing the XIAO_nRF52840_NFC Library

This library is **not** included in the Arduino Library Manager — you need to install it manually from GitHub.

- **Step 1.** Go to [https://github.com/limengdu/XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC), click the green **Code** button, and select **Download ZIP**.

<!-- TODO: Screenshot of GitHub Download ZIP button -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-download-zip.png" style={{width:800, height:'auto'}}/></div>

- **Step 2.** Open Arduino IDE, go to **Sketch > Include Library > Add .ZIP Library...**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-installed.png" style={{width:800, height:'auto'}}/></div>

- **Step 3.** Select the downloaded ZIP file (`XIAO_nRF52840_NFC-main.zip`). You should see **"Library added to your libraries"** in the status bar.

- **Step 4.** Restart Arduino IDE. After restarting, you should see the examples under **File > Examples > XIAO_nRF52840_NFC**.

<!-- TODO: Screenshot of examples menu showing XIAO_nRF52840_NFC -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-examples.png" style={{width:800, height:'auto'}}/></div>

## Hardware Connection

XIAO nRF52840's NFC pins are located on the back of the board, labeled **D14** and **D15**:

```
D14 (P0.09) — NFC1 — Antenna end A
D15 (P0.10) — NFC2 — Antenna end B
```

Solder the NFC antenna to D14 and D15 as shown below:

**Front view:**

<!-- TODO: Photo of antenna soldered to XIAO (front) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-F.jpg" alt="Antenna soldered to XIAO front view" width={550} height="auto" /></p> 

**Back view:**

<!-- TODO: Photo of antenna soldered to XIAO (back) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-B.jpg" alt="Antenna soldered to XIAO back view" width={550} height="auto" /></p> 

:::caution
- NFC antenna is a differential signal and has **no polarity** — either end can go to D14 or D15.
- The two pins ship from factory as NFC antenna mode (UICR = `0xFFFFFFFF`). If you previously set these pins to GPIO, restore UICR first (see [Step 1](#step-1-check-uicr-pin-configuration)).
- It is recommended to measure DC resistance across the antenna terminals with a multimeter before soldering (usually 1–3 Ω) to confirm continuity and rule out shorts.
:::

## NFC Tag Verification Workflow

The following three steps provide a systematic verification of your NFC hardware setup. We use the **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** library, which wraps the nRF52840 NFCT peripheral into a clean Arduino API.

The library includes three example sketches used in this workflow:

| Example Sketch | Purpose |
|---------------|---------|
| `xiao-nrf52840-nfc-restore-uicr` | Restore NFC pins if they were changed to GPIO |
| `xiao-nrf52840-nfc-probe` | Verify RF link — check if phone commands reach the board |
| `xiao-nrf52840-nfc-tag-readonly` | Full tag read — verify complete NFC Type 2 Tag communication |

### Step 1: Check UICR Pin Configuration

**Purpose**: Confirm D14/D15 are configured as NFC antenna pins.

Open **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-probe** and upload it to your board. (Steps 1 and 2 share the same sketch — one upload does both.)

Open Serial Monitor at **115200 baud**. The first few lines show the current UICR status:

<!-- TODO: Screenshot of Serial Monitor showing UICR check PASS -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result.png" style={{width:800, height:'auto'}}/></div> 

**How to interpret the output:**

| UICR Value | Meaning | Action |
|------------|---------|--------|
| `0xFFFFFFFF` | NFC antenna mode ✅ | Proceed to Step 2 |
| `0xFFFFFFFE` | GPIO mode ❌ | Upload `xiao-nrf52840-nfc-restore-uicr`, send `RESTORE_NFC` in Serial Monitor, confirm `Verify result: PASS`, then power-cycle the board |

:::note
Factory boards ship with UICR = `0xFFFFFFFF`. In most cases, this step is a pass and no action is needed.
:::

### Step 2: Probe — Verify RF Link

**Purpose**: Confirm that NFC command frames from the phone can reach the board.

After the UICR check, the same sketch automatically enters **Probe mode**. In this mode, the tag does **not** reply to any frames — it only listens. This isolates the receive direction, making it easy to confirm whether the RF link is alive.

Place your phone's NFC area close to the antenna for a few seconds, then check the Serial Monitor output:

<!-- TODO: Screenshot of Serial Monitor showing Probe results with phone -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result-with-phone.png" style={{width:800, height:'auto'}}/></div>

**Key indicators:**

| Counter | Meaning | Pass Criteria |
|---------|---------|---------------|
| `FIELD_DETECT` | Phone's 13.56 MHz RF field detected | > 0 |
| `FIELD_LOST` | RF field disappeared | Close to FIELD_DETECT |
| `READER_FRAMES` | NFC command frames received from phone | **> 0** (critical) |

> `READER_FRAMES > 0` means the phone's command frames successfully reached the board and the bidirectional RF link is established. The phone should **not** show a pop-up at this stage (Probe mode does not reply).

**Common error codes:**

| Error Code | Name | Meaning |
|------------|------|---------|
| `0x01` | `FRAMEDELAYTIMEOUT` | Frame delay timeout — tag did not receive next command within expected interval |
| `0x02` | `NFCANTENNAERROR` | NFCT cannot drive antenna — usually caused by impedance mismatch or missing antenna |
| `0x80` | RX frame receive error | Frame received but CRC/parity check failed (may appear in Readonly stage) |

### Step 3: Readonly — Verify Complete Tag Read

**Purpose**: Confirm the full NFC Type 2 Tag communication chain — anti-collision → selection → NDEF page read → phone pop-up.

Open **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-readonly** and upload it. Place your phone on the antenna for 2–3 seconds.

<!-- TODO: Screenshot of Serial Monitor showing Readonly results -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-readonly-output.png" style={{width:800, height:'auto'}}/></div>

The phone should display a pop-up containing the link `https://seeedstudio.com`.

<!-- TODO: Photo of antenna soldered to XIAO + phone showing NFC pop-up -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-final-output-successfully.jpg" alt="Antenna soldered and phone NFC popup" width={550} height="auto" /></p>

<!-- Phone popup photo: see Hardware Connection section (NRF52840NFC-final-output-successfully.jpg) -->

**Key indicators:**

| Counter | Meaning | Pass Criteria |
|---------|---------|---------------|
| `FIELD_DETECT` | Phone's 13.56 MHz RF field detected | > 0 |
| `SELECTED` | Phone completed anti-collision + SELECT handshake | **> 0** (core indicator) |
| `READ` | Phone successfully read NDEF data pages | > 0 |
| `FAST_READ` | Number of FAST_READ requests received | 0 or small (normal) |
| `UNSUPPORTED` | Phone sent an unsupported command | A few is normal |

> `SELECTED > 0` is the key threshold for Readonly: the anti-collision flow passed and the phone recognized the Type 2 Tag. `READ > 0` means NDEF pages were actually read. The final verification is that the phone displays the full URL pop-up. After a successful session, the serial output should also print `HLTA received` indicating a normal end of the communication.

## Antenna Tuning

NFC relies on a resonant LC tank circuit. The antenna coil provides inductance (L), and the matching capacitors provide capacitance (C). Together they form a resonant circuit at the target frequency:

```
f = 1 / (2π√(LC))
```

The target is **13.56 MHz**. Without external capacitors, only the nRF52840's internal ~4 pF parasitic capacitance participates — the resonance point is far from 13.56 MHz. The NFC function will still work, but communication may be unstable: phone pop-ups may show "NFC tag detected" without the full content, and error codes may appear in the serial output. Adding matching capacitors brings the LC tank to resonance and dramatically improves reliability.

:::tip
All the operations below are based on the **[Nordic Official NFC Antenna Design](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)** document. The chip delivers full power only when it sees a **differential 100 Ω load at resonance**.
:::

### Fixed Parameters

| Item | Fixed Value | Source |
|------|-------------|--------|
| Operating frequency f | 13.56 MHz | Global NFC standard, hard-coded in nRF52840 |
| Load impedance | 100 Ω (differential) | Nordic white-paper nWP_026 |

### Measurements You Need

- **Coil inductance L** — measure with a DMM / LCR meter / VNA at 100 kHz, value in µH.
- **Coil loss resistance R** — read the series resistance from the same screen, in Ω.

### Step 1: Impedance Pre-Check

Using the impedance-transformation formula:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="Impedance formula" width={250} height="auto" /></p>

Target: **90–120 Ω**, the closer to 100 Ω the better.

| Result | Meaning | Next Step |
|--------|---------|-----------|
| < 60 Ω | Antenna too small | Add turns or enlarge the coil area |
| 90 – 120 Ω | **PASS** | Go to Step 2 |
| > 150 Ω | Antenna too big | Remove turns or shrink the coil area |

> Only after this gate is passed do you calculate capacitors; otherwise any capacitor value is useless.

### Step 2: Calculate Resonant Capacitance

Formula with fixed 13.56 MHz:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="Capacitance formula" width={250} height="auto" /></p>

This gives the **total capacitance** needed. For a π-network, split equally:

**C1 = C2 = C / 2**

Pick the closest E12 value (e.g., 39 pF, 47 pF, 56 pF, 68 pF …).

### Recommended Antenna

If you don't have an LCR meter and prefer a known starting point, a standard 13.56 MHz NFC coil antenna works well with the XIAO nRF52840. Below is the antenna we used during testing:

<!-- Antenna photo: see Hardware Connection section (NRF52840NFC-final-output-successfully.jpg) -->

| Parameter | Value |
|-----------|-------|
| Type | 13.56 MHz NFC coil |
| DC Resistance | ~2.3 Ω |
| Connection | Solder directly to D14 / D15 |

:::note
The antenna shown above is not a Seeed Studio product. You can use any 13.56 MHz NFC coil antenna with similar specifications. The key is to measure the inductance and calculate the matching capacitor value using the formulas above.
:::

## Resources

- **[GitHub]** [XIAO_nRF52840_NFC Library](https://github.com/limengdu/XIAO_nRF52840_NFC) — The open-source NFC library used in this tutorial

## Special Thanks

Special thanks to **[limengdu](https://github.com/limengdu)** for developing the **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** library. This library provides a complete, easy-to-use Arduino wrapper for the nRF52840 NFCT peripheral, including field detection and full tag read/write examples.

If you would like to explore more projects based on the XIAO nRF52840, please visit the author's GitHub page.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
