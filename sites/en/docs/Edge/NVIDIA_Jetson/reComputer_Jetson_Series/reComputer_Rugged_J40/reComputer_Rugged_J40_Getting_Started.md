---
description: Getting Started with reComputer Rugged J40
title: Getting Started with reComputer Rugged J40
keywords:
  - reComputer Rugged
  - IP66
  - Jetson
  - Getting Started
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_rugged_j40_getting_started
sku: 100046979,100002634
last_update:
  date: 03/04/2026
  author: Dayu
createdAt: '2026-03-04'
updatedAt: '2026-03-04'
url: https://wiki.seeedstudio.com/ai_robotics_recomputer_rugged_j40_getting_started/
---

# Getting Started with reComputer Rugged J40

:::note
This product is currently under development. Specifications and availability are subject to change.
:::

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png"/>
</div>

The reComputer Rugged J40 is an IP66-rated, fanless edge AI computer powered by NVIDIA Jetson Orin NX/Nano modules. Designed for harsh outdoor environments including marine, vehicle-mounted, and industrial deployments, it delivers up to 100 TOPS of AI performance in a compact, passively cooled enclosure with fully waterproof M12 connectors.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Get One Now 🖱️</font></span></strong>
  </a>
</div>

## Features

- **IP66 Waterproof**: Fully sealed enclosure with M12 waterproof connectors for all external interfaces
- **Fanless Passive Cooling**: Silent operation across -20°C to +60°C with 0.7 m/s airflow
- **Rugged & Vibration-Resistant**: 3 Grms @ 5–500 Hz, 1 hr/axis — suitable for vehicle and marine use
- **Rich Industrial I/O**: CAN-FD (isolated), RS-232/422/485, DI/DO, all via M12 A-code connectors
- **Flexible Networking**: 4× PoE GbE + 1× GbE (M12), M.2 Key E (Wi-Fi/BT), M.2 Key B (5G/GPS)
- **Wide Voltage Input**: 19–48 V DC via M12 B/A-code connector
- **Certifications**: CE, FCC, RoHS, REACH

## Specifications

<table>
  <thead>
    <tr>
      <th colSpan={2}>Product Name</th>
      <th>reComputer Rugged J4012</th>
      <th>reComputer Rugged J3011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>100046979</td>
      <td>100002634</td>
    </tr>
    <tr>
      <td colSpan={2}>NVIDIA Jetson Module</td>
      <td>Orin NX 16GB</td>
      <td>Orin Nano 8GB</td>
    </tr>
    <tr>
      <td rowSpan={4}>Processor System</td>
      <td>AI Performance</td>
      <td>100 TOPS</td>
      <td>40 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1024-core NVIDIA Ampere, 32 Tensor Cores</td>
      <td>1024-core NVIDIA Ampere, 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8-core Arm Cortex-A78AE v8.2 64-bit, 2MB L2 + 4MB L3</td>
      <td>6-core Arm Cortex-A78AE v8.2 64-bit, 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memory</td>
      <td>16GB 128-bit LPDDR5 @ 102.4 GB/s</td>
      <td>8GB 128-bit LPDDR5 @ 68 GB/s</td>
    </tr>
    <tr>
      <td rowSpan={2}>Storage</td>
      <td>eMMC</td>
      <td colSpan={2}>-</td>
    </tr>
    <tr>
      <td>Expansion</td>
      <td colSpan={2}>M.2 Key M (2280) NVMe SSD — 128 GB included</td>
    </tr>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={2}>4× GbE RJ45 PoE PSE (802.3af, M12 waterproof) + 1× GbE RJ45 (M12 waterproof)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={2}>4× USB 3.2 Type-A (M12 waterproof) + 1× USB 2.0/3.0 Type-C (flashing, waterproof cap) + 1× USB Type-C (debug)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={2}>1× HDMI (waterproof cap)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={2}>2× CAN-FD (isolated, 120 Ω) via M12 A-code 8-pin</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td colSpan={2}>1× RS-232/422/485 via M12 A-code 8-pin</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={2}>2× DI + 2× DO via M12 12-pin / 8-pin</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={2}>1× Nano SIM card slot</td>
    </tr>
    <tr>
      <td>Antenna</td>
      <td colSpan={2}>4× SMA waterproof antenna connectors</td>
    </tr>
    <tr>
      <td rowSpan={2}>Expansion</td>
      <td>M.2 Key E</td>
      <td colSpan={2}>Wi-Fi / Bluetooth module (optional)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={2}>5G / GPS module (optional)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Power</td>
      <td>Input</td>
      <td colSpan={2}>19–48 V DC via M12 B/A-code connector</td>
    </tr>
    <tr>
      <td>Consumption</td>
      <td colSpan={2}>Typical 25 W, fuse 10 A</td>
    </tr>
    <tr>
      <td rowSpan={6}>Environment</td>
      <td>Ingress Protection</td>
      <td colSpan={2}>IP66</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td colSpan={2}>-20°C to +60°C (with 0.7 m/s airflow)</td>
    </tr>
    <tr>
      <td>Humidity</td>
      <td colSpan={2}>10–95% RH (non-condensing)</td>
    </tr>
    <tr>
      <td>Vibration</td>
      <td colSpan={2}>3 Grms @ 5–500 Hz, random, 1 hr/axis</td>
    </tr>
    <tr>
      <td>Dimensions</td>
      <td colSpan={2}>210 mm × 190 mm × 93 mm</td>
    </tr>
    <tr>
      <td>Color</td>
      <td colSpan={2}>Silver-grey (mid-frame silver, heatsink black)</td>
    </tr>
    <tr>
      <td colSpan={2}>Certification</td>
      <td colSpan={2}>CE, FCC, RoHS, REACH</td>
    </tr>
    <tr>
      <td colSpan={2}>Warranty</td>
      <td colSpan={2}>2 Years</td>
    </tr>
  </tbody>
</table>

## Hardware Overview

:::note
Hardware overview images will be added once the product is finalized.
:::

**LED Indicators:**

| LED | Color | Status | Description |
|-----|-------|--------|-------------|
| PWR | Green | On | Device is powered |
| PWR | Green | Off | Device is not powered |
| ACT | Green | Flashing | SSD access activity |

## Flash JetPack

:::note
Flash instructions will be added once the BSP is available. The flashing process follows the same procedure as other reComputer J40 series devices.
:::

Please refer to the [Flash BSP with Jetpack to Selected Jetson](/flash/jetpack_to_selected_product) page for the latest flashing guide.

### Prerequisites

- reComputer Rugged J40
- Power supply (19–48 V DC)
- Ubuntu host PC (20.04 or 22.04)
- USB Type-C data cable (for flashing)
- External monitor + HDMI cable
- Keyboard and mouse

### Enter Force Recovery Mode

1. Connect a USB Type-C cable between the **DEVICE** port and your Ubuntu host PC.
2. Press and hold the **REC** (Recovery) button using a pin.
3. While holding REC, connect the power supply to power on the board.
4. Release the Recovery button.

On the Ubuntu host PC, verify recovery mode with:

```bash
lsusb
```

Expected output by module:
- Orin NX 16GB: `0955:7323 NVidia Corp`
- Orin Nano 8GB: `0955:7523 NVidia Corp`

## Resources

- [reComputer Rugged J40 Datasheet](#) *(coming soon)*
- [Linux_for_Tegra Source Code](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson Devices Comparison](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
