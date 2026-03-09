---
description: Getting Started with Semtech LR2021 LoRa Plus™ Evaluation Kit.
title: Semtech LR2021 LoRa Plus™ Evaluation Kit
keywords:
  - Semtech LR2021
  - XIAO
  - nRF54L15
  - docusaurus
image: https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/Semtech-LR2021-LoRa-Plus-Evaluation-Kit.webp
slug: /semtech_lr2021_evk_getting_started
last_update:
  date: 12/30/2025
  author: David Du
createdAt: '2026-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/semtech_lr2021_evk_getting_started/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/2-100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0.jpg" style={{width:600, height:'auto'}}/></div>

## Features

The **Semtech LR2021 LoRa Plus Evaluation Kit** features a modular design that seamlessly integrates the powerful **Seeed Studio XIAO nRF54L15 Core Board** with the **LoRa Plus Expansion Board**. This compact and robust hardware platform is specifically engineered for evaluating full-scenario ground-to-satellite communication. Its compatibility with numerous mainstream IoT protocols ensures it meets development requirements across diverse application scenarios.

### Semtech LR2021 Transceiver

- **Universal Connectivity (Multi-Band Support):**
    - **Sub-GHz LoRa/FSK:** Perfectly compatible with traditional 470/868/915 MHz LoRaWAN networks, maintaining extreme long-range transmission and penetration capabilities.
    - **2.4GHz LoRa:** Supports global ISM band LoRa modulation. This resolves regulatory fragmentation across different countries (enabling "One SKU Globally") while offering higher data rates than Sub-GHz.
    - **S-Band Satellite Support:** A major upgrade. The LR2021 features native support for the **1.9GHz - 2.5GHz** band, enabling direct communication with Low Earth Orbit (LEO) satellites to fill coverage gaps in oceans, deserts, and remote areas where terrestrial networks cannot reach.

- **Enhanced LR-FHSS Support:** 
The chip includes built-in hardware support for **Long Range - Frequency Hopping Spread Spectrum (LR-FHSS)**. This modulation technology significantly increases network capacity and interference immunity, serving as a critical technology for **Direct-to-Satellite IoT**.

- **Multiple Modulation Support:**
LoRa, LR-FHSS, FLRC, FSK/GFSK, OQPSK, OOK, BLE 5.0 PHY

- **Multiple Protocols Compatible:**
LoRaWAN(Sub-GHz, 2.4 GHz), Amazon Sidewalk, Wi-SUN, Wireless M-Bus, Z-Wave, BLE, IEEE 802.15.4 (Thread, Zigbee)

- **Ultra-Low Power Architecture:** 
Despite integrating a multi-band RF front-end, the LR2021 maintains Semtech's industry-leading low power standards: 
    - 105mA @ +22dBm transmit power
    - 5.7mA receiving current
    - 470nA sleeping current

Making it ideal for battery-powered, long-lifecycle asset tracking devices.

- **Enhanced Channel Activity Detection (CAD):**
LR2021's Fast CAD employs an intelligent adaptive threshold and early termination mechanism, which significantly reduces the power consumption and time required for idle channel detection.


### LoRa Plus Expansion Board Features

#### Dual Antenna Interface Design
- **LF Port (SMA):** Dedicated to Sub-GHz bands (150MHz - 960MHz).
- **HF Port (SMA):** Dedicated to 2.4GHz ISM and S-Band Satellite frequencies.

#### Host Core: XIAO nRF54L15
- **Next-Gen Silicon:** 
Powered by Nordic Semiconductor's latest **nRF54 Series** (nRF54L15).
- **High-Performance Processing:** 
Features an ARM Cortex-M33 core running at up to **128 MHz**, providing ample computing power for complex LoRaWAN protocol stacks and Edge AI algorithms.
- **Next-Gen Efficiency:** 
Compared to the nRF52 series, the nRF54 delivers a leap in power efficiency. When paired with the LR2021, it allows for the construction of terminal products with exceptional battery life.
- **Compact Form Factor:** 
Utilizes the classic XIAO stamp-hole design, making it easy to integrate into smaller prototype enclosures.

## Specification

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Parameters</th><th class="tg-6cwf">Specifications</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">Dimension</td>
<td class="tg-g9rn">Expansion Board: 65(W)x73(L)x27(H)mm  Package: 200x130x50mm</td>
</tr>
<tr>
<td class="tg-g9rn">Voltage - Supply</td>
<td class="tg-g9rn">5V (USB Type C)</td>
</tr>
<tr>
<td class="tg-g9rn">Voltage - Output</td>
<td class="tg-g9rn">3.3V / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">Maximum Operating Current (Transmitter)</td>
<td class="tg-g9rn">Sub-GHz: 105mA @ +22dBm<br />2.4 GHz: 27mA @ +14dBm</td>
</tr>
<tr>
<td class="tg-g9rn">Maximum Operating Current (Receiver)</td>
<td class="tg-g9rn">LoRa SF7 @ 125KHz: 5.7mA<br />FLRC: 10.9mA</td>
</tr>
<tr>
<td class="tg-g9rn">Frequency Plan</td>
<td class="tg-g9rn">EU868 / US915 / CN490</td>
</tr>
<tr>
<td class="tg-g9rn">Output Power</td>
<td class="tg-g9rn">Sub-GHz: +22dBm to -10dBm<br />2.4 GHz: +12dBm</td>
</tr>
<tr>
<td class="tg-g9rn">Receiving Sensitivity</td>
<td class="tg-g9rn">LoRa SF12 @ 125kHz: -141.5dBm<br />FLRC @ 260kbps: -111dBm<br />BLE @ 2Mbps: -97dBm</td>
</tr>
<tr>
<td class="tg-g9rn">interfaces</td>
<td class="tg-g9rn">USB Type C / Grovex3(IICx2 / UARTx1) / SMA-Kx2 </td>
</tr>
<tr>
<td class="tg-g9rn">modulation</td>
<td class="tg-g9rn">LoRa, (G)FSK, LR-FHSS, FLRC, OQPSK, OOK, BLE 5.0 PHY</td>
</tr>
<tr>
<td class="tg-g9rn">working temperature</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
</tbody>
</table>

<br />

## Harware Overview



### Diagram



### Pinout

**Expansion Board:**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0-Pinout-Front.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0-Pinout-Back.jpg" style={{width:600, height:'auto'}}/></div>

<br />

**XIAO nRF54L15:**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nr_definition.png" style={{width:600, height:'auto'}}/></div>

<br />

**Pinout Mapping:**

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">XIAO Pin Definition</th><th class="tg-6cwf">nRF54L15 Pin Definition</th><th class="tg-6cwf">Pin Function</th><th class="tg-6cwf">DeviceTree Index</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">A0 / D0</td>
<td class="tg-g9rn">P1.04</td>
<td class="tg-g9rn">Digital IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A1 / D1</td>
<td class="tg-g9rn">P1.05</td>
<td class="tg-g9rn">Digital IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A2 / D2</td>
<td class="tg-g9rn">P1.06</td>
<td class="tg-g9rn">Digital IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A3 / D3</td>
<td class="tg-g9rn">P1.07</td>
<td class="tg-g9rn">Digital IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">SDA0 / D4</td>
<td class="tg-g9rn">P1.10</td>
<td class="tg-g9rn">I2C</td>
<td class="tg-g9rn" rowspan="2">i2c22</td>
</tr>
<tr>
<td class="tg-g9rn">SCL0 / D5</td>
<td class="tg-g9rn">P1.11</td>
<td class="tg-g9rn">I2C</td>
</tr>
<tr>
<td class="tg-g9rn">TX / D6</td>
<td class="tg-g9rn">P2.08</td>
<td class="tg-g9rn">UART</td>
<td class="tg-g9rn" rowspan="2">uart21</td>
</tr>
<tr>
<td class="tg-g9rn">RX / D7</td>
<td class="tg-g9rn">P2.07</td>
<td class="tg-g9rn">UART</td>
</tr>
<tr>
<td class="tg-g9rn">SCK / D8</td>
<td class="tg-g9rn">P2.01</td>
<td class="tg-g9rn">SPI</td>
<td class="tg-g9rn" rowspan="3">spi00</td>
</tr>
<tr>
<td class="tg-g9rn">MISO / D9</td>
<td class="tg-g9rn">P2.04</td>
<td class="tg-g9rn">SPI</td>
</tr>
<tr>
<td class="tg-g9rn">MOSI / D10</td>
<td class="tg-g9rn">P2.02</td>
<td class="tg-g9rn">SPI</td>
</tr>
<tr>
<td class="tg-g9rn">SCL1 / D11</td>
<td class="tg-g9rn">P0.03</td>
<td class="tg-g9rn">I2C</td>
<td class="tg-g9rn" rowspan="2">i2c30</td>
</tr>
<tr>
<td class="tg-g9rn">SDA1 / D12</td>
<td class="tg-g9rn">P0.04</td>
<td class="tg-g9rn">I2C</td>
</tr>
<tr>
<td class="tg-g9rn">D13</td>
<td class="tg-g9rn">P2.10</td>
<td class="tg-g9rn">Digital IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">D14</td>
<td class="tg-g9rn">P2.09</td>
<td class="tg-g9rn">Digital IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">D15</td>
<td class="tg-g9rn">P2.06</td>
<td class="tg-g9rn">Digital IO</td>
<td class="tg-g9rn"></td>
</tr>
</tbody>
</table>



<br />

## Getting Started

### 1. Overview
This guide provides step-by-step instructions for setting up a command-line Zephyr RTOS development environment integrated with Semtech's `usp_zephyr` module for a quick evaluation by using the provided samples with the on-board **XIAO-nRF54L15**. Learn more about Semtech's LoRa [USP™ (Unified Software Platform)](https://www.semtech.com/products/wireless-rf/unified-software-platform). You can also download the source code and find more detailed information in the Semtech **usp_zephyr** repository:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Lora-net/usp_zephyr" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download from GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

The `usp_zephyr` project follows a hybrid structure, combining:

- **West Workspace Module Structure:** The core hardware support (boards, drivers, HAL) integrates directly into the Zephyr build system as a standard module.

- **Layered Structure:** Application-layer libraries and examples reside separately in the workspace for better organization and reuse.

### 2. Prerequisites

Ensure your system meets these requirements before proceeding. Learn [more](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) about setting up the Zephyr development environment:

- **Operating System:** 
    - Ubuntu 22.04 LTS (recommended) or another supported Linux distribution, Windows (10 and later), or macOS.

- **Main Dependencies:**

    - `west` (Zephyr's meta-tool)

    - `ninja`

    - `cmake` (version 3.20.0 or higher)

    - Python 3.8 or higher with `pip`

    - Devicetree compiler `dtc`


<details>
<summary>Install & Check Dependencies</summary>

- For Linux:
```shell
sudo apt install --no-install-recommends git cmake ninja-build gperf \
  ccache dfu-util device-tree-compiler wget python3-dev python3-venv python3-tk \
  xz-utils file make gcc gcc-multilib g++-multilib libsdl2-dev libmagic1
```
Due to the unavailability of `gcc-multilib` and `g++-multilib` on AArch64 (ARM64) systems, you may need to omit them from the list of packages to install.

- For macOS:
Use `brew` to install the required dependencies:
```shell
brew install cmake ninja gperf python3 python-tk ccache qemu dtc libmagic wget openocd
```

- For Windows:
Here we use the pre-installed windows package manager `winget`. If this is not an option, you can also install the dependencies from their respective websites and add their environment varibles to `PATH`.

Use `winget` to install the required dependencies:
```shell
winget install Kitware.CMake Ninja-build.Ninja oss-winget.gperf Python.Python.3.12 Git.Git oss-winget.dtc wget 7zip.7zip
```

<br />

You can verify the versions of the main dependencies installed on your system by:

```shell
cmake --version
```

```shell
python3 --version
```

```shell
ninja --version
```

</details>


### 3. Setup Zephyr Workspace（Standalone Workspace）

Create a foundational Zephyr workspace:
```shell
# Create and navigate into your workspace directory
mkdir ~/zephyr_workspace && cd ~/zephyr_workspace
```

:::note
To avoid Python environment conflicts, we strongly recommend creating and using a virtual environment for development and testing. Please remember to activate the virtual environment every time you start working.
:::


<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Linux" label="Linux">

Create a new virtual environment:
```shell
python3 -m venv ~/zephyr_workspace/.venv
```

Activate the virtual environment:
```shell
source ~/zephyr_workspace/.venv/bin/activate
```

Once activated your shell will be prefixed with `(.venv)`. The virtual environment can be deactivated at any time by running `deactivate`.

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
west packages pip --install
```

Then we need to install the Zephyr Software Development Kit (SDK), which contains toolchains for all architectures supported by Zephyr. The SDK includes a compiler, assembler, linker and other programs required to build Zephyr applications:
```shell
cd ~/zephyr_workspace/zephyr
west sdk install
```

</TabItem>
<TabItem value="macOS" label="macOS">

Create a new virtual environment:
```shell
python3 -m venv ~/zephyr_workspace/.venv
```

Activate the virtual environment:
```shell
source ~/zephyr_workspace/.venv/bin/activate
```

Once activated your shell will be prefixed with `(.venv)`. The virtual environment can be deactivated at any time by running `deactivate`.

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
west packages pip --install
```

Then we need to install the Zephyr Software Development Kit (SDK), which contains toolchains for all architectures supported by Zephyr. The SDK includes a compiler, assembler, linker and other programs required to build Zephyr applications:
```shell
cd ~/zephyr_workspace/zephyr
west sdk install
```

</TabItem>
<TabItem value="Windows" label="Windows">

Open a `cmd.exe` as a regular user, and create a new virtual environment:
```shell
cd %HOMEPATH%
python -m venv zephyr_workspace\.venv
```

Activate the virtual environment:
```shell
zephyr_workspace\.venv\Scripts\activate.bat
```

Once activated your shell will be prefixed with `(.venv)`. The virtual environment can be deactivated at any time by running `deactivate`.

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
cmd /c scripts\utils\west-packages-pip-install.cmd
```

Then we need to install the Zephyr [Software Development Kit (SDK)](https://docs.zephyrproject.org/latest/develop/toolchains/zephyr_sdk.html#toolchain-zephyr-sdk), which contains toolchains for all architectures supported by Zephyr. The SDK includes a compiler, assembler, linker and other programs required to build Zephyr applications:
```shell
cd %HOMEPATH%\zephyr_workspace\zephyr
west sdk install
```

</TabItem>
</Tabs>


<br />

Please wait while the `west` tool completes the fetching and installation of all modules and components. Once installation is complete, you will obtain the following `zephyr_workspace` directory structure:

```shell
zephyr_workspace/
├── bootloader/
├── modules/
├── tools/
├── usp_zephyr/
│       ├── boards/
│       │     ├── seeed/xiao_nrf54l15/
│       │     └── shields/
│       ├── doc/
│       ├── drivers/
│       │     └── usp/
│       │          ├── lr11xx/
│       │          ├── lr20xx/
│       │          └── sx126x/
│       ├── dts/bindings/
│       ├── include/zephyr/
│       ├── modules/
│       │     ├── lora_basics_modem/
│       │     ├── smtc_modem_hal/
│       │     ├── usp/
│       │     └── usp_drivers/
│       ├── samples/
│       │     └── usp/
│       │          ├── lbm/
│       │          ├── rac/
│       │          └── sdk/
│       ├── subsys/
│       └── zephyr/
│             └─ module.yml
└── zephyr
```

<br />

**USP for Zephyr Project Structure:**

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Directory Path</th><th class="tg-6cwf">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">boards/</td>
<td class="tg-g9rn">**Board Support** Contains definitions for hardware platforms: <br />- `seeed/xiao_nrf54l15/`: Support for the Seeed Studio XIAO nRF54L15 board <br />- `shields/`: Definitions for Zephyr shields (add-on boards) that are compatible with the LoRa radio drivers</td>
</tr>
<tr>
<td class="tg-g9rn">drivers/usp/</td>
<td class="tg-g9rn">**Device Drivers** Core hardware abstraction layer for Semtech radios:<br />- `lr11xx/`,`lr20xx/`,`sx126x/`: Contains the Radio HAL & BSP implementation for specific Semtech LoRa transceiver chips.
User should not modify those files.</td>
</tr>
<tr>
<td class="tg-g9rn">dts/bindings/</td>
<td class="tg-g9rn">**Devicetree Bindings** Contains YAML files that define how to describe the LoRa radio hardware (SPI connection, control pins) in the Zephyr Devicetree (`.dts` files). This links hardware description to the drivers.</td>
</tr>
<tr>
<td class="tg-g9rn">include/zephyr/</td>
<td class="tg-g9rn">**Public API Headers** Exposes the public driver APIs (`drivers/usp/lr20xx.h`) to the rest of the Zephyr application code.</td>
</tr>
<tr>
<td class="tg-g9rn">modules/</td>
<td class="tg-g9rn">**Semtech Libraries & HALs** <br />- `lora_basics_modem/`: Semtech LoRa Basics Modem software library. <br />- `smtc_modem_hal/`: Hardware Abstraction Layer (HAL) for the modem. <br />- `usp/` & `usp_drivers/`: Guide the compilation file pointing to the corresponding component in Zephyr modules.</td>
</tr>
<tr>
<td class="tg-g9rn">samples/usp/</td>
<td class="tg-g9rn">**Example Applications** Ready-to-build sample code demonstrating key funxtions. <br />- `lbm/`: Samples for the Lora Basics Modem. <br />- `rac/`: Samples for the Radio Abstraction Controller. <br />- `sdk/`: Generic SDK examples</td>
</tr>
<tr>
<td class="tg-g9rn">subsys/</td>
<td class="tg-g9rn">**Subsystem Integration** </td>
</tr>
<tr>
<td class="tg-g9rn">zephyr/module.yml</td>
<td class="tg-g9rn">**Module Manifest** The YAML file declares this entire `usp_zephyr/` directory as a Zephyr module. The `west` tool will use this to find and integrate the module's `boards`, `drivers` into the build.</td>
</tr>
</tbody>
</table>

<br />

### 4. Build and Run

Semtech has provided several samples for a quick evaluation along with the evaluation kit. All samples are located in the `samples/usp` directory and you can use any supported board/shield as define to build and flash these samples. We will begin with the `LBM` samples, demonstrating the core features of the new-generation LR2021.

```shell
usp_zephyr/samples/
└── usp/
     ├── lbm/
     │    ├── geolocation
     │    ├── lctt_certif
     │    ├── periodical_uplink
     │    └── porting_tests     
     ├── rac/
     └── sdk/
```

<br />

:::note
**LoRa Basics Modem (LBM):**

LoRa Basics Modem is a user-friendly software library designed by Semtech to streamline the development of LoRaWAN® end-nodes operating in both the ISM Sub-GHz and 2.4GHz bands, ensuring worldwide interoperability. It offers developers a high-level, event-driven interface, abstracting away complexity while maintaining full compliance with the [TS001-LoRaWAN L2 1.0.4](https://resources.lora-alliance.org/technical-specifications/ts001-1-0-4-lorawan-l2-1-0-4-specification) specification and the Regional Parameters [RP2-1.0.3](https://resources.lora-alliance.org/technical-specifications/rp2-1-0-3-lorawan-regional-parameters) standard.

Learn more about [LoRa Basics Modem](https://www.semtech.com/products/wireless-rf/lora-basics-modem) here.
:::

<br />

#### 4.1. LoRaWAN Periodical Uplink

This application demonstrates how to set up and run a LoRaWAN device using the LoRa Basics Modem (LBM) stack. It supports `periodic automatic uplinks`, `manual button-triggered uplinks`, and `downlink reception` making it an ideal prototype for basic LoRaWAN function validation.

**Key Features**
- **LoRaWAN Network Join:** Support **OTAA** (Over-The-Air Activation) network joining only.
- **Periodic Uplinks:** Configurable automatic uplinks every 60 seconds by default at `FPort 101`.
- **Button-Triggered Uplinks:** Manual uplink transmission triggered by button pressing at `FPort 102`.
- **Downlink Reception:** Receives and processes downlink messages.
- **Multiple LoRaWAN Regions:** Support for multiple regions including EU868, US915 and CN470.
- **Relay TX Support:** Optional LoRaWAN relay transmission capability.
- **Low Power Mode:** Optional power-optimized configuration available.

**Prerequisites**

- A **LoRaWAN network** account (The Things Network, ChirpStack, etc.)
- Valid LoRaWAN **credentials**: `DevEUI`, `JoinEUI`, `AppKey`
- A compatible **LoRaWAN gateway** within range

**Set LoRaWAN Credentials**

:::note
Here we use The Thing Network as the example. You can choose your preferred LNS if needed.
:::

- **Step 1.** Visit [The Things Network](https://www.thethingsnetwork.org) website and sign up for a new account.

- **Step 2.** After logging in, click your profile and select **Console**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **Step 3.** Select a cluster to start adding gateways and devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_cluster.png" style={{width:600, height:'auto'}}/></div>

<br />

:::note
For a rapid deployment of LoRaWAN coverage networks at your site, check out our out-of-the-box [SenseCAP M2 multi-platform LoRaWAN indoor gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html).
:::

- **Step 4.** Click **Applications** on the panel, then click **Add application**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_add_application.png" style={{width:600, height:'auto'}}/></div>

- **Step 5.** Fill **Application ID** then click **Create application**.

- **Step 6.** Click the application created and choose the **End devices** on the panel, then click **Register end device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_add_device.png" style={{width:600, height:'auto'}}/></div>

- **Step 7.** Choose **Manually** to enter the registration credentials manually.

- **Step 8.** Select the **Frequency plan** according to your region. Also make sure you use the same frequency as the gateway in which you will connect this device to. Select **LoRaWAN Specification 1.0.4** as the **LoRaWAN version** and **RP002 Regional Parameters 1.0.3** as the **Regional Parameters version**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_register_device_1.png" style={{width:500, height:'auto'}}/></div>

- **Step 9.** Set the **JoinEUI**, **DevEUI** and **AppKey** according to your own needs. These credentials will be further used for the end device configuration. Choose a **End device ID** for the registered device, then click **Register end device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_register_device_2.png" style={{width:500, height:'auto'}}/></div>

- **Step 10.** Edit the file `boards/user_keys.overlay` and replace the placeholder values with your actual credentials:

```dts
/ {
    zephyr,user {
        user-lorawan-device-eui = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-join-eui = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-gen_app-key = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
                                   0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-app-key = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
                               0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-region = "EU_868";
    };
};
```

Choose the appropriate region code from the supported list, and update the `user-lorawan-region` in the `user_keys.overlay`:

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Region Code</th><th class="tg-6cwf">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">EU_868</td>
<td class="tg-g9rn">Europe 868 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">US_915</td>
<td class="tg-g9rn">North America 915 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP1</td>
<td class="tg-g9rn">Asia-Pacific 923 MHz (GRP1)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP2</td>
<td class="tg-g9rn">Asia-Pacific 923 MHz (GRP2)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP3</td>
<td class="tg-g9rn">Asia-Pacific 923 MHz (GRP3)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP4</td>
<td class="tg-g9rn">Asia-Pacific 923 MHz (GRP4)</td>
</tr>
<tr>
<td class="tg-g9rn">AU_915</td>
<td class="tg-g9rn">Australia 915 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">CN_470</td>
<td class="tg-g9rn">China 470 MHz (RP2)</td>
</tr>
<tr>
<td class="tg-g9rn">CN_470_RP_1_0</td>
<td class="tg-g9rn">China 470 MHz (RP1)</td>
</tr>
<tr>
<td class="tg-g9rn">IN_865</td>
<td class="tg-g9rn">India 865 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">KR_920</td>
<td class="tg-g9rn">South Korea 920 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">RU_864</td>
<td class="tg-g9rn">Russia 864 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">WW_2G4</td>
<td class="tg-g9rn">WW 2.4 GHz</td>
</tr>
</tbody>
</table>

<br />

**Build Standard Version:**

```shell
# Enable full logging and debug capabilities
west build --pristine --board xiao_nrf54l15/nrf54l15/cpuapp --shield semtech_loraplus_expansion_board --shield semtech_wio_lr2021 usp_zephyr/samples/usp/lbm/periodical_uplink
```

**Build Low-Power Version:**

```shell
# Power-optimized with minimal logging features
west build --pristine --board xiao_nrf54l15/nrf54l15/cpuapp --shield semtech_loraplus_expansion_board --shield semtech_wio_lr2021 usp_zephyr/samples/usp/lbm/periodical_uplink -- -DCONF_FILE=prj_lowpower.conf
```



If the build process is successful, you should see Zephyr compilation and build information as shown below:

```shell
...
-- Zephyr version: 4.2.0 (/Users/admin/zephyr_workspace/zephyr), build: v4.2.0
[248/248] Linking C executable zephyr/zephyr.elf
Memory region         Used Size  Region Size  %age Used
           FLASH:      257576 B      1428 KB     17.61%
             RAM:       40292 B       188 KB     20.93%
        IDT_LIST:          0 GB        32 KB      0.00%
Generating files from /Users/admin/zephyr_workspace/build/zephyr/zephyr.elf for board: xiao_nrf54l15
```

**Flash the Device:**

```shell
# Flash the firmware to the board
west flash
```
**Monitor the Serial Console Output:**

Connect a serial monitor (screen, PuTTY, etc.) to view logs. Here we use the built-in Terminal app `screen` to demonstrate:

```shell
# Unplug the XIAO-nRF54L15
# Use ls /dev/tty.* command to list current ports
ls /dev/tty.*
```

```shell
# Plug in the Type-c cable and run the ls /dev/tty.* command again
/dev/tty.Bluetooth-Incoming-Port	/dev/tty.usbmodemB141F6A13
/dev/tty.debug-console			/dev/tty.wlan-debug
```

Here, we find the new entry `/dev/tty.usbmodemB141F6A13`, which is the port for our dev board.

```shell
# Connect to the device with screen
# The default baud rate is 115200
screen /dev/tty.usbmodemB141F6A13 115200
```

Now the serial output will appear in the terminal, from which you can monitor the output logs of the kit. To exit the `screen` session, press `Ctrl + A`, then `Ctrl + \`.

<br />

**Join the LNS:**

<details>
<summary>Output: Startup and Join the LNS</summary>

```shell
[00:00:00.046,323] <inf> lorawan: smtc_modem_join_network
[00:00:00.046,388] <inf> lorawan:  Start a new join sequence in 5 seconds on stack 0
[00:00:05.057,559] <inf> lorawan: DevEUI
                                  70 b3 d5 7e d0 07 44 86                          |p..~..D.         
[00:00:05.057,586] <inf> lorawan: JoinEUI
                                  00 00 00 00 00 00 00 00                          |........         
[00:00:05.057,624] <inf> lorawan: DevNonce 0x1d2, stack_id 0
...
[00:00:12.433,537] <inf> usp: Event received: JOINED
[00:00:12.433,543] <inf> usp: Modem is now joined 
[00:00:12.433,568] <inf> lorawan: add send task
[00:00:12.438,666] <inf> lorawan:  User LoRaWAN tx on FPort 101
```

</details>

- **Periodical Uplink:** The device uploads data once per minute using a counter that increments starting from `01` on `FPort 101`. You can monitor the data in real time on the console as shown below:

<details>
<summary>Output: Periodical Uplink</summary>

```shell
[00:00:18.811,852] <inf> lorawan:   *************************************
[00:00:18.811,879] <inf> lorawan:   *  TX DONE
[00:00:18.811,896] <inf> lorawan:   *************************************
[00:00:18.811,984] <inf> lorawan: 

[00:00:18.812,016] <inf> lorawan:   Open Rx1 for Hook Id = 4
[00:00:18.812,072] <inf> lorawan:   RX1 LoRa at 23841 ms: freq:867300000, SF12, BW125, sync word = 0x34
[00:00:18.812,102] <inf> lorawan:   Timer will expire in 5030 ms
[00:00:24.041,328] <inf> lorawan: 

[00:00:24.041,357] <inf> lorawan:   *************************************
[00:00:24.041,389] <inf> lorawan:   * RX1 Timeout for stack_id = 0
[00:00:24.041,407] <inf> lorawan:   *************************************
[00:00:24.041,498] <inf> lorawan: 

[00:00:24.041,530] <inf> lorawan:   Open Rx2 for Hook Id = 4
[00:00:24.041,585] <inf> lorawan:   RX2 LoRa at 24813 ms: freq:869525000, SF9, BW125, sync word = 0x34
[00:00:24.041,614] <inf> lorawan:   Timer will expire in 772 ms
[00:00:24.839,344] <inf> lorawan: 

[00:00:24.839,363] <inf> lorawan:   *************************************
[00:00:24.839,408] <inf> lorawan:   * RX2 Timeout for stack_id = 0
[00:00:24.839,426] <inf> lorawan:   *************************************
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_periodical_uplink.png" style={{width:600, height:'auto'}}/></div>

<br />

**Button-Triggered Uplink:** Each press of the `user_key` triggers an immediate data uplink, incrementing the counter by `1` on `FPort 102`. Button-triggered reports do not affect the timing of periodical reports.

<details>
<summary>Output: Button-Triggered Uplink</summary>

```shell
[00:01:43.010,970] <inf> usp: Button pushed
[00:01:43.011,015] <inf> lorawan: add send task
[00:01:43.011,449] <inf> lorawan:  User LoRaWAN tx on FPort 102
[00:01:43.011,489] <inf> lorawan: 

[00:01:43.011,507] <inf> lorawan:   *************************************
[00:01:43.011,536] <inf> lorawan:   * Send Payload  for stack_id = 0
[00:01:43.011,553] <inf> lorawan:   *************************************
[00:01:43.011,627] <inf> lorawan:   Tx  LoRa at 107167 ms: freq:867100000, SF12, BW125, len 17 bytes 14 dBm, fcnt_up 4, toa = 1319
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_button_uplink.png" style={{width:600, height:'auto'}}/></div>

<br />

**Scheduled Downlink:** Schedule a downlink packet from the TTN in the `Messaging` opetion. Specify the frame port (`FPort 1`) and the data content (`AA BB CC DD`), then click **Schedule downlink**. You can observe that the payload now is waiting in the queue, once the next uplink coming, the downlink packet will be sent by the network server and received by the device.

<details>
<summary>Output: Downlink Reception</summary>

```shell
[00:02:14.666,960] <inf> lorawan:   Open Rx1 for Hook Id = 4
[00:02:14.667,016] <inf> lorawan:   RX1 LoRa at 139695 ms: freq:867100000, SF12, BW125, sync word = 0x34
[00:02:14.667,046] <inf> lorawan:   Timer will expire in 5029 ms
[00:02:20.837,445] <inf> lorawan: 

[00:02:20.837,477] <inf> lorawan:   *************************************
[00:02:20.837,523] <inf> lorawan:   * Receive a Valid downlink Rx1 for stack_id = 0, rssi: -121 dBm, snr: -9 dB
[00:02:20.837,540] <inf> lorawan:   *************************************
[00:02:20.837,594] <inf> usp: Event received: DOWNDATA
[00:02:20.837,625] <inf> usp: Event received: TXDONE
[00:02:20.837,630] <inf> usp: Transmission done 
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_downlink_config.png" style={{width:600, height:'auto'}}/></div>

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_downlink_payload.png" style={{width:600, height:'auto'}}/></div>


## Resources

### Semtech LR2021

- **[PDF]** [Semtech LR2021 Datasheet](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ00000BIigz/OP1EbZuxbCU2JJQ7kD9ooPlC8c0u0TFp3e0WDJ5yrNQ)

- **[PDF]** [Semtech LR2021_EU868/US915 Schematic](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR2021WIO1XDCS_Wio-LR2021_e769v02a_868_915_sch_layout.pdf)

- **[PDF]** [Semtech LR2021_CN490 Schematic](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR2021WIO1XGCS_Wio_LR2021_e768v02a_490_sch_layout.pdf)

### Expansion Board

- **[PDF]** [Expansion Board Schematic](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR20xx_XIAO_LoRa_Plus_Expansion_Board_e758v03a_sch_layout.pdf)

### Seeed Studio XIAO nRF54L15

- **[PDF]** [Seeed Studio XIAO nRF54L15 Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 KiCAD Libraries](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 pinout sheet](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)


## Certificates



## Tech Support & Product Discussion

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
