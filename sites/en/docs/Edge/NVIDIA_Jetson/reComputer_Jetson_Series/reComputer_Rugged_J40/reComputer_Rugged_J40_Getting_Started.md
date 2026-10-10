---
description: Getting Started with reComputer Rugged J40
title: Getting Started with reComputer Rugged J40
keywords:
  - reComputer Rugged
  - IP66
  - Jetson
  - Getting Started
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg
slug: /jetson/recomputer_rugged_j401/getting_started
aliases:
  - /ai_robotics_recomputer_rugged_j40_getting_started
sku: 100046979,100002634
last_update:
  date: 09/30/2026
  author: Dayu,Dongxu Jin
createdAt: '2026-03-04'
updatedAt: '2026-09-30'
url: https://wiki.seeedstudio.com/jetson/recomputer_rugged_j401/getting_started/
---

import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {ruggedJ401DocNav} from '@site/src/data/jetson/productDocNavigation';

# Getting Started with reComputer Rugged J40

<JetsonProductDocNav {...ruggedJ401DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">Rugged Edge AI · NVIDIA Jetson</span>
    <h2>Deploy AI where dust, water, and vibration are part of the job</h2>
    <p>The reComputer Rugged J40 combines NVIDIA Jetson Orin performance with an IP66-rated, fanless enclosure and locking M12 connectivity. It is designed for reliable edge AI deployment on vehicles, in ports, on farms, at sea, and across industrial sites.</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">Get reComputer Rugged J4012 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">Start with JetPack ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg" alt="reComputer Rugged J40 industrial edge AI computer" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>IP66</strong><span>Sealed against dust and powerful water jets</span></div>
  <div className="jetson-product-fact"><strong>Up to 100 TOPS</strong><span>Jetson Orin NX 16GB edge AI performance</span></div>
  <div className="jetson-product-fact"><strong>4× PoE GbE</strong><span>Power and connect industrial IP cameras</span></div>
  <div className="jetson-product-fact"><strong>−20°C to 60°C</strong><span>Fanless operation with 0.7 m/s airflow</span></div>
</div>

## Choose Your Jetson Configuration

Both configurations use the same rugged enclosure and industrial interface set. Choose the Jetson module according to the AI workload, memory requirement, and power budget of your deployment.

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Performance configuration</span>
    <h3>reComputer Rugged J4012</h3>
    <p>For multi-camera vision, larger AI models, and workloads that benefit from higher GPU and memory bandwidth.</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin NX</span>
      <span>16GB LPDDR5</span>
      <span>100 TOPS</span>
    </div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Efficiency configuration</span>
    <h3>reComputer Rugged J3011</h3>
    <p>For efficient perception, monitoring, telemetry, and industrial control workloads with a lower power profile.</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin Nano</span>
      <span>8GB LPDDR5</span>
      <span>40 TOPS</span>
    </div>
  </article>
</div>

## Why reComputer Rugged J40

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>Sealed M12 Connectivity</strong><span>Locking connectors help maintain stable power, networking, and I/O in mobile and outdoor installations.</span></div>
  <div className="jetson-product-feature"><strong>Fanless Passive Cooling</strong><span>No moving fan reduces maintenance needs in dusty environments and enables quiet operation.</span></div>
  <div className="jetson-product-feature"><strong>Industrial I/O</strong><span>Isolated CAN-FD, RS-232/422/485, and digital I/O connect directly to sensors, actuators, and controllers.</span></div>
  <div className="jetson-product-feature"><strong>Camera-Ready Networking</strong><span>Four PoE GbE ports simplify multi-camera systems by carrying data and power over the same cable.</span></div>
  <div className="jetson-product-feature"><strong>Wireless Expansion</strong><span>M.2 Key E and Key B slots support Wi-Fi, Bluetooth, 5G, and GPS expansion.</span></div>
  <div className="jetson-product-feature"><strong>Vehicle &amp; Outdoor Deployment</strong><span>Wide-voltage input, vibration resistance, and an IP66 enclosure suit AMRs, vehicles, vessels, and field equipment.</span></div>
</div>

## Specifications

<div className="jetson-product-table-wrap">
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
      <td colSpan={2}>—</td>
    </tr>
    <tr>
      <td>Expansion</td>
      <td colSpan={2}>M.2 Key M (2280) NVMe SSD — 128 GB included</td>
    </tr>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={2}>4× GbE PoE PSE (802.3af, M12 waterproof) + 1× GbE (M12 waterproof)</td>
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
      <td colSpan={2}>−20°C to +60°C (with 0.7 m/s airflow)</td>
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
</div>

## Hardware Overview

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw1.png" alt="Side view of reComputer Rugged J40 showing its industrial connectors" />
    <figcaption>Side view · Network, USB, display, and antenna connections</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw2.png" alt="Opposite side view of reComputer Rugged J40" />
    <figcaption>Side view · Power, serial, CAN, and digital I/O connections</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw3.png" alt="Bottom view of reComputer Rugged J40" />
    <figcaption>Bottom view · Mounting and enclosure layout</figcaption>
  </figure>
</div>

### LED Indicators

| LED | Color | Status | Description |
| --- | --- | --- | --- |
| PWR | Green | On | Device is powered |
| PWR | Green | Off | Device is not powered |
| ACT | Green | Flashing | SSD access activity |

For connector pinouts, interface configuration, and expansion instructions, continue to the [Hardware & I/O guide](/jetson/recomputer_rugged_j401/hardware_and_interface_usage/).

## Flash JetPack {#flash-jetpack}

Follow the workflow in order. The numbered layout keeps the host preparation, recovery-mode operation, and terminal commands together in one place.

<div className="jetson-product-step-flow">
<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>Choose and Download the BSP</h3>
    <p className="jetson-product-step-label">Step 1 · Match the image to the exact Jetson configuration</p>

Open the Jetson flashing resource page and check for the latest image for your exact reComputer Rugged model and Jetson module.

<div className="jetson-product-actions">
  <a className="jetson-product-button" href="/flash/jetpack_to_selected_product" target="_blank">Open JetPack Image Selector ↗</a>
</div>

:::warning
Do not flash an image for a different carrier board or Jetson module. If your exact reComputer Rugged J4012 or J3011 configuration is not listed, contact Seeed Studio support before proceeding.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>Prepare the Equipment</h3>
    <p className="jetson-product-step-label">Step 2 · Set up the Ubuntu host and cables</p>

Prepare the following items before disconnecting or powering the device:

- reComputer Rugged J4012 or J3011
- 19–48 V DC power supply
- Physical Ubuntu 20.04 or 22.04 host PC
- USB Type-C data cable for flashing
- External monitor and HDMI cable
- Keyboard and mouse

:::tip
Use a physical Ubuntu host where possible. USB passthrough in a virtual machine can interrupt the flashing process.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>Enter Force Recovery Mode</h3>
    <p className="jetson-product-step-label">Step 3 · Connect the DEVICE port and verify the USB ID</p>

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/rugged_J401/1.jpg" alt="Recovery button and DEVICE port used to flash reComputer Rugged J40" />

1. Connect a USB Type-C data cable between the **DEVICE** port and the Ubuntu host.
2. Press and hold the **REC** button.
3. While holding **REC**, connect the power supply to turn on the device.
4. Release the **REC** button.
5. On the Ubuntu host, verify that the Jetson is detected:

```bash
lsusb
```

Expected output by configuration:

| Product | Jetson module | Expected USB ID |
| --- | --- | --- |
| reComputer Rugged J4012 | Orin NX 16GB | `0955:7323 NVidia Corp` |
| reComputer Rugged J3011 | Orin Nano 8GB | `0955:7523 NVidia Corp` |

If the expected ID is missing, reconnect the USB cable, try another host USB port, and repeat the recovery sequence before continuing.

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>Extract and Flash the Image</h3>
    <p className="jetson-product-step-label">Step 4 · Run the mass-flash package from the Ubuntu host</p>

Change to the directory containing the downloaded image and extract it:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
```

Enter the extracted directory and start flashing:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

Wait until the terminal reports that flashing completed successfully. Then disconnect the USB cable, power-cycle the reComputer, connect the monitor and input devices, and complete the Ubuntu first-boot setup.

  </div>
</section>
</div>

## Applications {#applications}

Explore application examples that combine reComputer Rugged J40 hardware with deployable edge AI workflows. New examples can be added to this collection as they become available.

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="/jetson/recomputer_rugged_j401/industrial_vision/" aria-label="Open the Industrial Forklift Vision application">
      <img src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="Industrial forklift vision applications powered by reComputer Rugged J401" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="Application capabilities">
        <span>Detection</span>
        <span>Inference Benchmark</span>
      </div>
      <h3><a href="/jetson/recomputer_rugged_j401/industrial_vision/">Industrial Forklift Vision</a></h3>
      <p>Deploy multi-camera detection, depth warning, driver monitoring, target tracking, and measured Jetson inference workloads on reComputer Rugged J401.</p>
    </div>
  </article>
</div>

## Resources

Use these files for mechanical integration, carrier-board design review, BSP development, and Jetson platform selection.

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Product Datasheet</strong><small>Electrical, mechanical, and environmental specifications</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>Carrier Board Schematic</strong><small>Review the carrier-board circuits and signal routing</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PSE</span>
    <span className="jetson-product-resource-copy"><strong>PSE Board Schematic</strong><small>PoE power-sourcing circuit design reference</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>3D Mechanical Model</strong><small>STEP assembly for installation and enclosure planning</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Linux_for_Tegra Source</strong><small>Seeed Jetson BSP sources and customization resources</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CMP</span>
    <span className="jetson-product-resource-copy"><strong>Jetson Device Comparison</strong><small>Compare Jetson modules and Seeed carrier platforms</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>

</div>
