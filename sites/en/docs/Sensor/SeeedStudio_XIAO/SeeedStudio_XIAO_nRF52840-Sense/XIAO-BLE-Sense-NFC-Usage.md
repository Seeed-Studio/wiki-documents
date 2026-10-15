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
  date: 07/16/2026
  author: Morgan
createdAt: '2023-01-16'
url: https://wiki.seeedstudio.com/XIAO-BLE-Sense-NFC-Usage/
updatedAt: '2026-07-17'
---

# NFC Usage on Seeed Studio XIAO nRF52840 (Sense)

Both the **Seeed Studio XIAO nRF52840 series** are equipped with an **NFC (Near Field Communication) module** based on the nRF52840's built-in NFCT (Near Field Communication Tag) peripheral. It supports NFC Type 2 Tag functionality. By connecting an external NFC antenna, the XIAO nRF52840 can act as an NFC tag and be read by smartphones and other NFC readers.

This wiki walks you through the complete NFC usage workflow — from library installation, hardware connection, antenna tuning, to setup verification and creating your own NFC tag.

:::note
This tutorial is based on the **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** library. The Seeed nRF52 Boards version **1.1.13** has been tested and approved.
:::

## Preparatory Work

For the board libraries installation, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish installing the Seeed nRF52 Boards. If you have already installed, we can move on.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-selecting-board-NRF52840-for-nfc.png" /></div>

:::note
Make sure to select the **Seeed XIAO nRF52840** board in the Boards Manager. The older "Seeed nRF52 mbed-enabled Boards" library is **no longer maintained** and should not be used.
:::

## Hardware Required

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840</th>
        <th>Seeed Studio XIAO nRF52840 Plus</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
    <tr>
        <th>Seeed Studio XIAO nRF52840 Sense</th>
        <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::tip
The basic NFC functionality works with just the antenna soldered to NFC1/NFC2. After community testing (special thanks to **[andriandreo](https://forum.seeedstudio.com/u/andriandreo/summary)** from the Seeed forum), both of the following antennas worked right after soldering without further circuit tuning:

- **MOLEX 1462360051**
- **TAOGLAS FXR.07.A.DG**

Later, we added two **43 pF** tuning capacitors from each NFC pad (D14, D15) to GND for the TAOGLAS FXR.07.A.DG to further enhance the interrogation distance. The ~40 pF capacitor value was calculated from subsection **"6.14.10 NFCT antenna recommendations"** in the nRF52840 MCU product specification datasheet.

If you experience unstable behavior (incomplete pop-ups, intermittent detection), adding matching capacitors will significantly improve reliability. See [Antenna Tuning](#antenna-tuning) for details.

For more real-world testing insights, check out the [original forum discussion](https://forum.seeedstudio.com/t/xiao-nrf52840-nfc-antenna-insights/277696).
:::

## Software Required

<div class="table-center">
  <table align="center">
    <tr>
        <th>Item</th>
        <th>Version / Notes</th>
    </tr>
    <tr>
        <td>Arduino IDE</td>
        <td>1.8.x or later</td>
    </tr>
    <tr>
        <td>Seeed nRF52 Boards</td>
        <td><strong>1.1.13</strong> (install via Arduino IDE Boards Manager)</td>
    </tr>
    <tr>
        <td><a href="https://github.com/limengdu/XIAO_nRF52840_NFC">XIAO_nRF52840_NFC</a> Library</td>
        <td>Download from <a href="https://github.com/limengdu/XIAO_nRF52840_NFC">GitHub</a>, install via <strong>Sketch &gt; Include Library &gt; Add .ZIP Library</strong> (see below)</td>
    </tr>
    <tr>
        <td>NFC Tools App</td>
        <td><a href="https://play.google.com/store/apps/details?id=com.wakdev.wdnfc">Android</a> / <a href="https://apps.apple.com/us/app/nfc-tools/id1252962749">Apple</a></td>
    </tr>
  </table>
</div>

### Installing the XIAO_nRF52840_NFC Library

This library is **not** included in the Arduino Library Manager — you need to install it manually from GitHub.

- **Step 1.** Go to the **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** GitHub repository, click the green **Code** button, and select **Download ZIP**.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_nRF52840_NFC" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<!-- TODO: Screenshot of GitHub Download ZIP button -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-download-zip.png" style={{width:800, height:'auto'}}/></div>

- **Step 2.** Open Arduino IDE, go to **Sketch > Include Library > Add .ZIP Library...**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-installed.png" style={{width:800, height:'auto'}}/></div>

- **Step 3.** Select the downloaded ZIP file (`XIAO_nRF52840_NFC-main.zip`). You should see **"Library added to your libraries"** in the status bar.

- **Step 4.** Restart Arduino IDE. After restarting, you should see the examples under **File > Examples > XIAO_nRF52840_NFC**.

<!-- TODO: Screenshot of examples menu showing XIAO_nRF52840_NFC -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-examples.png" style={{width:1000, height:'auto'}}/></div>

## Hardware Connection

XIAO nRF52840's NFC pins are located on the back of the board, labeled **P0.09** and **P0.10**:

```
D14 (P0.09) — NFC1 — Antenna end A
D15 (P0.10) — NFC2 — Antenna end B
```

Solder the NFC antenna to P0.09 and P0.10 as shown below:

In this tutorial, we are using the **Seeed Studio XIAO nRF52840** with a Nordic-recommended NFC antenna for demonstration.

**Front view:**

<!-- TODO: Photo of antenna soldered to XIAO (front) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-F.jpg" alt="Antenna soldered to XIAO front view" width={550} height="auto" /></p>

**Back view:**

<!-- TODO: Photo of antenna soldered to XIAO (back) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-B.jpg" alt="Antenna soldered to XIAO back view" width={550} height="auto" /></p>

:::caution

- NFC antenna is a differential signal and has **no polarity** — either end can go to D14 or D15.
- The two pins ship from factory as NFC antenna mode (UICR = `0xFFFFFFFF`) on **XIAO nRF52840** and **XIAO nRF52840 Sense**. On **XIAO nRF52840 Plus** and **XIAO nRF52840 Sense Plus**, they may be configured as GPIO by default — check UICR first (see [Step 1](#step-1-check-uicr-pin-configuration)).
- It is recommended to measure DC resistance across the antenna terminals with a multimeter before soldering (usually 1–3 Ω) to confirm continuity and rule out shorts.

:::

### Antenna Tuning

NFC relies on a resonant LC tank circuit. The antenna coil provides inductance (L), and the matching capacitors provide capacitance (C). Together they form a resonant circuit at the target frequency:

```
f = 1 / (2π√(LC))
```

The target is **13.56 MHz**. Without external capacitors, only the nRF52840's internal ~4 pF parasitic capacitance participates — the resonance point is far from 13.56 MHz. The NFC function will still work, but communication may be unstable: phone pop-ups may show "NFC tag detected" without the full content, and error codes may appear in the serial output. Adding matching capacitors brings the LC tank to resonance and dramatically improves reliability.

:::tip
All the operations below are based on the **[Nordic Official NFC Antenna Design](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)** document. The chip delivers full power only when it sees a **differential 100 Ω load at resonance**.
:::

#### Fixed Parameters

<div class="table-center">
  <table align="center">
    <tr>
        <th>Item</th>
        <th>Fixed Value</th>
        <th>Source</th>
    </tr>
    <tr>
        <td>Operating frequency f</td>
        <td>13.56 MHz</td>
        <td>Global NFC standard, hard-coded in nRF52840</td>
    </tr>
    <tr>
        <td>Load impedance</td>
        <td>100 Ω (differential)</td>
        <td>Nordic white-paper nWP_026</td>
    </tr>
  </table>
</div>

#### Measurements You Need

- **Coil inductance L** — measure with a DMM / LCR meter / VNA at 100 kHz, value in µH.
- **Coil loss resistance R** — read the series resistance from the same screen, in Ω.

#### Step 1: Impedance Pre-Check

Using the impedance-transformation formula:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="Impedance formula" width={250} height="auto" /></p>

Target: **90–120 Ω**, the closer to 100 Ω the better.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Result</th>
        <th>Meaning</th>
        <th>Next Step</th>
    </tr>
    <tr>
        <td>&lt; 60 Ω</td>
        <td>Antenna too small</td>
        <td>Add turns or enlarge the coil area</td>
    </tr>
    <tr>
        <td>90 – 120 Ω</td>
        <td><strong>PASS</strong></td>
        <td>Go to Step 2</td>
    </tr>
    <tr>
        <td>&gt; 150 Ω</td>
        <td>Antenna too big</td>
        <td>Remove turns or shrink the coil area</td>
    </tr>
  </table>
</div>

> Only after this gate is passed do you calculate capacitors; otherwise any capacitor value is useless.

#### Step 2: Calculate Resonant Capacitance

Formula with fixed 13.56 MHz:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="Capacitance formula" width={250} height="auto" /></p>

This gives the **total capacitance** needed. For a π-network, split equally:

**C1 = C2 = C / 2**

Pick the closest E12 value (e.g., 39 pF, 47 pF, 56 pF, 68 pF …).

#### Recommended Antenna

If you don't have an LCR meter and prefer a known starting point, a standard 13.56 MHz NFC coil antenna works well with the XIAO nRF52840. Below is the antenna we used during testing:

<!-- Antenna photo: see Hardware Connection section (NRF52840NFC-final-output-successfully.jpg) -->

<div class="table-center">
  <table align="center">
    <tr>
        <th>Parameter</th>
        <th>Value</th>
    </tr>
    <tr>
        <td>Type</td>
        <td>13.56 MHz NFC coil</td>
    </tr>
    <tr>
        <td>DC Resistance</td>
        <td>~2.3 Ω</td>
    </tr>
    <tr>
        <td>Connection</td>
        <td>Solder directly to NFC1 / NFC2</td>
    </tr>
  </table>
</div>

:::note
The antenna shown above is not a Seeed Studio product. You can use any 13.56 MHz NFC coil antenna with similar specifications. The key is to measure the inductance and calculate the matching capacitor value using the formulas above.
:::

## NFC Setup & Examples

The following workflow first verifies your NFC hardware setup, then walks you through creating your own NFC tag. We use the **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** library, which wraps the nRF52840 NFCT peripheral into a clean Arduino API.

The library includes six example sketches:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Category</th>
        <th>Example Sketch</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td rowspan="2"><strong>Verification</strong></td>
        <td><code>xiao-nrf52840-nfc-probe</code></td>
        <td>Check UICR pin configuration + verify RF link</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-restore-uicr</code></td>
        <td>Restore NFC pins if they were changed to GPIO</td>
    </tr>
    <tr>
        <td rowspan="1"><strong>Plus Fix</strong></td>
        <td><code>xiao-nrf52840-plus-bootloader-verify</code></td>
        <td>Verify bootloader on Plus variants before UICR restore</td>
    </tr>
    <tr>
        <td rowspan="3"><strong>Demo</strong></td>
        <td><code>xiao-nrf52840-nfc-tag-readonly</code></td>
        <td>Read-Only Tag — phone reads a fixed URL</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-tag-writable</code></td>
        <td>Writable Tag — phone can write data to the tag</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-tag-persistent</code></td>
        <td>Persistent Tag — data survives power cycles (stored in Flash)</td>
    </tr>
  </table>
</div>

### Step 1: Check UICR Pin Configuration

**Purpose**: Confirm P0.09/P0.10 are configured as NFC antenna pins.

Open **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-probe** and upload it to your board. (Steps 1 and 2 share the same sketch — one upload does both.)

Open Serial Monitor at **115200 baud**. The first few lines show the current UICR status:

<!-- TODO: Screenshot of Serial Monitor showing UICR check PASS -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result.png" style={{width:1000, height:'auto'}}/></div>

**How to interpret the output:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>UICR Value</th>
        <th>Meaning</th>
        <th>Action</th>
    </tr>
    <tr>
        <td><code>0xFFFFFFFF</code></td>
        <td>NFC antenna mode ✅</td>
        <td>Proceed to Step 2</td>
    </tr>
    <tr>
        <td><code>0xFFFFFFFE</code></td>
        <td>GPIO mode ❌</td>
        <td>Upload <code>xiao-nrf52840-plus-bootloader-verify</code> first (Plus variants), then upload <code>xiao-nrf52840-nfc-restore-uicr</code>, send <code>RESTORE_NFC</code> in Serial Monitor, confirm <code>Verify result: PASS</code>, then power-cycle the board</td>
    </tr>
  </table>
</div>

:::note
**XIAO nRF52840** and **XIAO nRF52840 Sense** ship from factory with UICR = `0xFFFFFFFF` (NFC mode). In most cases, this step is a pass and no action is needed. **XIAO nRF52840 Plus** and **XIAO nRF52840 Sense Plus** may ship with GPIO mode — if the output shows `0xFFFFFFFE`, follow the restore action below.
:::

### Step 2: Probe — Verify RF Link

**Purpose**: Confirm that NFC command frames from the phone can reach the board.

After the UICR check, the same sketch automatically enters **Probe mode**. In this mode, the tag does **not** reply to any frames — it only listens. This isolates the receive direction, making it easy to confirm whether the RF link is alive.

Place your phone's NFC area close to the antenna for a few seconds, then check the Serial Monitor output:

<!-- TODO: Screenshot of Serial Monitor showing Probe results with phone -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result-with-phone.png" style={{width:800, height:'auto'}}/></div>

**Key indicators:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Counter</th>
        <th>Meaning</th>
        <th>Pass Criteria</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>Phone's 13.56 MHz RF field detected</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>FIELD_LOST</code></td>
        <td>RF field disappeared</td>
        <td>Close to FIELD_DETECT</td>
    </tr>
    <tr>
        <td><code>READER_FRAMES</code></td>
        <td>NFC command frames received from phone</td>
        <td><strong>&gt; 0</strong> (critical)</td>
    </tr>
  </table>
</div>

> `READER_FRAMES > 0` means the phone's command frames successfully reached the board and the bidirectional RF link is established. The phone should **not** show a pop-up at this stage (Probe mode does not reply).

**Common error codes:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Error Code</th>
        <th>Name</th>
        <th>Meaning</th>
    </tr>
    <tr>
        <td><code>0x01</code></td>
        <td><code>FRAMEDELAYTIMEOUT</code></td>
        <td>Frame delay timeout — tag did not receive next command within expected interval</td>
    </tr>
    <tr>
        <td><code>0x02</code></td>
        <td><code>NFCANTENNAERROR</code></td>
        <td>NFCT cannot drive antenna — usually caused by impedance mismatch or missing antenna</td>
    </tr>
    <tr>
        <td><code>0x80</code></td>
        <td>RX frame receive error</td>
        <td>Frame received but CRC/parity check failed (may appear in Readonly stage)</td>
    </tr>
  </table>
</div>

## Demo 1: Read-Only Tag

**Purpose**: A simple NFC tag that broadcasts a fixed URL. The phone reads it and displays a pop-up — the most common NFC use case.

Open **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-readonly** and upload it. Place your phone on the antenna for 2–3 seconds.

<!-- TODO: Screenshot of Serial Monitor showing Readonly results -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-readonly-output.png" style={{width:1000, height:'auto'}}/></div>

The phone should display a pop-up containing the link `https://seeedstudio.com`.

<!-- TODO: Photo of antenna soldered to XIAO + phone showing NFC pop-up -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-final-output-successfully.png" alt="Antenna soldered and phone NFC popup" width={300} height="auto" /></p>

**Key indicators:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Counter</th>
        <th>Meaning</th>
        <th>Pass Criteria</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>Phone's 13.56 MHz RF field detected</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>SELECTED</code></td>
        <td>Phone completed anti-collision + SELECT handshake</td>
        <td><strong>&gt; 0</strong> (core indicator)</td>
    </tr>
    <tr>
        <td><code>READ</code></td>
        <td>Phone successfully read NDEF data pages</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>FAST_READ</code></td>
        <td>Number of FAST_READ requests received</td>
        <td>0 or small (normal)</td>
    </tr>
    <tr>
        <td><code>UNSUPPORTED</code></td>
        <td>Phone sent an unsupported command</td>
        <td>A few is normal</td>
    </tr>
  </table>
</div>

> `SELECTED > 0` is the key threshold: the anti-collision flow passed and the phone recognized the Type 2 Tag. `READ > 0` means NDEF pages were actually read. The final verification is that the phone displays the full URL pop-up.
:::note
The URL is hard-coded in the sketch. To change it, open the sketch and modify the NDEF message, then re-upload. The tag data is stored in RAM and will be lost after a power cycle.
:::

## Demo 2: Writable Tag

**Purpose**: An NFC tag that the phone can both read and write. The tag starts with a default URI (`https://seeedstudio.com`), and the phone can overwrite it with new NDEF content using the **NFC Tools** app.

Open **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-writable** and upload it.

**Test steps:**

- **Step 1.** Open Serial Monitor at **115200 baud**. The boot log shows the tag identity (NFCID1), initial memory dump, and the default URI (`https://seeedstudio.com`).

<!-- TODO: Screenshot of Serial Monitor showing Writable boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-boot-log.png" style={{width:1000, height:'auto'}}/></div>

The boot log also prints the default URI that the tag will broadcast:

<!-- TODO: Screenshot of Serial Monitor showing default URI in boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-boot-log-of-URI.png" style={{width:1000, height:'auto'}}/></div>

- **Step 2.** Read the tag with your phone first. The phone should detect `https://seeedstudio.com`.

- **Step 3.** Open **NFC Tools** (or any NFC writer app), write the content you want to the tag. In this example, we write a simple text: `hello!`. After entering your content, click **"Write / XX Bytes"** — the byte count depends on the length of your content.

<!-- TODO: Screenshot of NFC Tools write screen -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-nfc-tools-write.png" style={{width:300, height:'auto'}}/></div>

- **Step 4.** Read the tag again. The phone should now display the newly written content (`hello!`).

<!-- TODO: Screenshot of phone showing written content -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-writable-final-output.png" style={{width:300, height:'auto'}}/></div>

After the phone leaves the NFC field, the Serial Monitor shows the updated key indicators reflecting the complete read-after-write session:

<!-- TODO: Screenshot of Serial Monitor showing key indicators after reading written tag -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-writable-result-with-phone.png" style={{width:1000, height:'auto'}}/></div>

**Key indicators:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Counter</th>
        <th>Meaning</th>
        <th>Pass Criteria</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>Phone's 13.56 MHz RF field detected</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>SELECTED</code></td>
        <td>Phone completed anti-collision + SELECT handshake</td>
        <td><strong>&gt; 0</strong> (core indicator)</td>
    </tr>
    <tr>
        <td><code>READ</code></td>
        <td>Phone successfully read NDEF data pages</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>WRITE</code></td>
        <td>Phone successfully wrote data to the tag</td>
        <td><strong>&gt; 0</strong> (core indicator)</td>
    </tr>
    <tr>
        <td><code>FAST_READ</code></td>
        <td>Number of FAST_READ requests received</td>
        <td>0 or small (normal)</td>
    </tr>
    <tr>
        <td><code>WRITE_REJECTED</code></td>
        <td>Write attempts rejected (protected pages)</td>
        <td>0 (should never occur with standard apps)</td>
    </tr>
    <tr>
        <td><code>UNSUPPORTED</code></td>
        <td>Phone sent an unsupported command</td>
        <td>A few is normal</td>
    </tr>
  </table>
</div>

> `WRITE > 0` is the key threshold for Writable: the phone successfully wrote data to the tag. `WRITE_REJECTED` should always be `0` — if it increases, something went wrong during the write session.

:::note
The written data is stored in **RAM only** and will be lost after a power cycle, restoring the default URI — which makes repeated write tests easy. For data that needs to survive power cycles, use the **Persistent Tag** demo below.
:::

## Demo 3: Persistent Tag

**Purpose**: An NFC tag whose data survives power cycles. The NDEF content is stored in the nRF52840's internal Flash memory (LittleFS), so it persists even after the board is powered off and on again — ideal for long-term deployments.

Open **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-persistent** and upload it.

**Test steps:**

- **Step 1.** On first boot, open Serial Monitor at **115200 baud**. The boot log shows the default URI and `Storage state: no stored content, using default URI`.

<!-- TODO: Screenshot of Serial Monitor showing Persistent first boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-boot-log-first.png" style={{width:1000, height:'auto'}}/></div>

- **Step 2.** Read the tag with your phone. On first boot, the phone detects `https://seeedstudio.com`.

- **Step 3.** Open **NFC Tools** (or any NFC writer app), write a new text or URL record to the tag. In this example, we write a simple text: `hi!`. After entering your content, click **"Write / XX Bytes"** — the byte count depends on the length of your content.

<!-- TODO: Screenshot of NFC Tools writing "hi!" -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-nfc-tools-write.png" style={{width:300, height:'auto'}}/></div>

- **Step 4.** After the phone leaves the NFC field, the Serial Monitor prints `Storage: tag content saved to flash`, confirming the content has been written to internal Flash.

<!-- TODO: Screenshot of Serial Monitor showing saved to flash -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-saved-to-flash.png" style={{width:1000, height:'auto'}}/></div>

- **Step 5.** **Power-cycle the board** — unplug the USB cable and plug it back in.

- **Step 6.** After reboot, the Serial Monitor prints `Storage state: previous content restored from flash`, confirming the written content has survived the power cycle.

<!-- TODO: Screenshot of Serial Monitor showing restored from flash after reboot -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-boot-log-restored.png" style={{width:1000, height:'auto'}}/></div>

- **Step 7.** Read the tag with your phone again. The phone should display the content written in Step 3 — even after the power cycle.

<!-- TODO: Screenshot of phone showing "hi!" after reboot -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-phone-hi-after-reboot.png" style={{width:300, height:'auto'}}/></div>

<!-- TODO: Screenshot of phone showing restored content after reboot + serial indicators -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-result-after-reboot.png" style={{width:1000, height:'auto'}}/></div>

**Key indicators:**

The key indicators are the same as the Writable Tag — refer to the [Writable Tag table](#demo-2-writable-tag) for the full list.

> `Storage state: previous content restored from flash` in the boot log is the core confirmation for Persistent: the data survived the power cycle. `Storage: tag content saved to flash` confirms each write was saved to Flash.

:::note
In Step 7, the phone only **reads** the restored content — it does not write anything. So `WRITE` will remain `0` in the counters, which is expected. You only see `WRITE > 0` during the earlier write session (Step 3–4).
:::

:::note

- The stored content lives in the **internal Flash filesystem** (`/nfc-tag-data.bin`), separate from the sketch area — it survives sketch re-uploads.
- To restore the default URI at any time, send `RESET_TAG` in the Serial Monitor.
- Flash save happens once per write session after the phone leaves the field. If you remove the phone too early, the content may be incomplete — just write again to fix it.

:::

:::tip
**Summary of the three demos:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Demo</th>
        <th>Data Storage</th>
        <th>Survives Power Cycle</th>
        <th>Writeable by Phone</th>
    </tr>
    <tr>
        <td>Read-Only Tag</td>
        <td>RAM</td>
        <td>❌</td>
        <td>❌</td>
    </tr>
    <tr>
        <td>Writable Tag</td>
        <td>RAM</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>Persistent Tag</td>
        <td>Flash</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
  </table>
</div>
:::

## Resources

- **[GitHub]** [XIAO_nRF52840_NFC Library](https://github.com/limengdu/XIAO_nRF52840_NFC) — The open-source NFC library used in this tutorial

## Special Thanks

Special thanks to **[andriandreo](https://forum.seeedstudio.com/u/andriandreo/summary)** for the extensive real-world testing of NFC antennas (MOLEX 1462360051 and TAOGLAS FXR.07.A.DG) on the XIAO nRF52840, and to **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso/summary)** for the capacitor calculation guidance and iPhone compatibility troubleshooting.

If you encounter NFC issues not covered here, you may find helpful tips in the original forum thread:

- [XIAO nRF52840 NFC Antenna Insights](https://forum.seeedstudio.com/t/xiao-nrf52840-nfc-antenna-insights/277696)

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
