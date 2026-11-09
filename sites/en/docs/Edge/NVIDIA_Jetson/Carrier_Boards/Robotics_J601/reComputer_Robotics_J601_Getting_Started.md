---
description: Getting started with the reComputer Robotics J601 carrier board for NVIDIA Jetson AGX Thor modules.
title: Getting Started with reComputer Robotics J601
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg
slug: /jetson/recomputer_robotics_j601/getting_started
aliases:
  - /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 10/22/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/jetson/recomputer_robotics_j601/getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {roboticsJ601DocNav} from '@site/src/data/jetson/productDocNavigation';

# Getting Started with reComputer Robotics J601

<JetsonProductDocNav {...roboticsJ601DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">Robotics &amp; Physical AI · NVIDIA Jetson AGX Thor</span>
    <h2>Connect perception and control on one robotics carrier board</h2>
    <p>The reComputer Robotics J601 carrier board supports NVIDIA Jetson AGX Thor T5000 and T4000 modules for multi-camera perception, sensor fusion, and embodied AI development. Combine high-speed Ethernet, GMSL2 camera expansion, and isolated robotics I/O with the Jetson software platform.</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">Buy One · J601 Carrier Board ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">Start with JetPack ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" alt="reComputer Robotics J601 carrier board for NVIDIA Jetson AGX Thor modules" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>Up to 2070 TFLOPS</strong><span>AI performance with a Jetson AGX Thor T5000 module</span></div>
  <div className="jetson-product-fact"><strong>Up to 4× 10GbE</strong><span>Four RJ45 ports with T5000; three with T4000</span></div>
  <div className="jetson-product-fact"><strong>Up to 8× GMSL2</strong><span>Multi-camera input through two GMSL extension boards</span></div>
  <div className="jetson-product-fact"><strong>19–48 V DC</strong><span>Wide-range input through an XT30 power connector</span></div>
</div>

## Choose Your Jetson Configuration

The J601 is a **carrier board**. Select a compatible Jetson AGX Thor module, NVMe SSD, and cooling solution for your build. The J6015 and J6014 names below identify the module-specific configurations and BSP packages used in this guide.

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">T5000 configuration</span>
    <h3>reComputer Robotics J6015</h3>
    <p>Use the T5000 BSP for the configuration with four active 10GbE ports and four isolated CAN interfaces.</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T5000</span><span>4× 10GbE</span><span>4× CAN FD</span></div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">T4000 configuration</span>
    <h3>reComputer Robotics J6014</h3>
    <p>Use the T4000 BSP for the configuration with three active 10GbE ports and two isolated CAN interfaces.</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T4000</span><span>3× 10GbE</span><span>2× CAN FD</span></div>
  </article>
</div>

Compatible modules: [NVIDIA Jetson AGX Thor T5000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html) and [NVIDIA Jetson AGX Thor T4000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html).

## Why reComputer Robotics J601

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>Multi-Camera Perception</strong><span>GMSL extension boards support up to eight GMSL2 cameras for surround perception and sensor fusion.</span></div>
  <div className="jetson-product-feature"><strong>High-Speed Networking</strong><span>Up to four 10GbE RJ45 connections carry data between sensors, compute nodes, and development systems.</span></div>
  <div className="jetson-product-feature"><strong>Robotics I/O</strong><span>Isolated CAN FD, RS-232/422/485, I2C, I2S, and digital I/O connect controllers, sensors, and actuators.</span></div>
  <div className="jetson-product-feature"><strong>Modular Expansion</strong><span>M.2 Key M supports an NVMe 2280 SSD; Key E and Key B support compatible Wi-Fi/Bluetooth and 4G/5G modules.</span></div>
  <div className="jetson-product-feature"><strong>Development Connectivity</strong><span>Four USB 3.2 Type-A ports and HDMI 2.1 connect peripherals and a display, with separate debug and recovery USB-C ports.</span></div>
  <div className="jetson-product-feature"><strong>Physical AI Workflows</strong><span>Build on Jetson with frameworks such as NVIDIA Isaac, ROS, PyTorch, and Hugging Face, following each framework's platform requirements.</span></div>
</div>

## Specifications

<div className="jetson-product-table-wrap">
<table>
  <thead><tr><th scope="col">Interface / Property</th><th scope="col">J601 Carrier Board</th></tr></thead>
  <tbody>
    <tr>
      <td>Module Compatibility</td>
      <td>NVIDIA Jetson AGX Thor T5000 / T4000</td>
    </tr>
    <tr>
      <td>PCB Size</td>
      <td>168 mm x 155 mm (without the Jetson AGX Thor module)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4x USB 3.2 Type-A (10Gbps, Host), 1x USB 2.0 Type-C (Debug), 1x USB 3.0 Type-C (Recovery)</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>4x RJ45 10GbE with T5000; 3x RJ45 10GbE with T4000</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td>1x M.2 Key M for PCIe Gen 4 NVMe 2280 SSD</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td>1x M.2 Key E for M.2 2230 Wi-Fi module</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1x M.2 Key B for 4G/5G module</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td>1x RS-232/422/485 (DB9 connector)</td>
    </tr>
    <tr>
      <td>JST Ports</td>
      <td>4x CAN with T5000 or 2x CAN with T4000, 1x RS-485, 1x I2S, 1x I2C, 4x GPI, and 4x GPO</td>
    </tr>
    <tr>
      <td>Audio</td>
      <td>1x microphone input and 1x audio output</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td>1x 4-pin fan connector (12V PWM)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin header</td>
    </tr>
    <tr>
      <td>LEDs</td>
      <td>1x green PWR LED, 1x green SSD LED, and 1x RGB USR LED</td>
    </tr>
    <tr>
      <td>Buttons</td>
      <td>1x Recovery button and 1x Reset button</td>
    </tr>
    <tr>
      <td>GMSL</td>
      <td>2x Mini-Fakra connectors for up to 8x GMSL2 cameras</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>-10°C to 60°C with thermal grease; -10°C to 55°C with a thermal pad</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>XT30, 19V to 48V DC</td>
    </tr>
    <tr>
      <td>JetPack</td>
      <td>JetPack 7.1</td>
    </tr>
  </tbody>
</table>
</div>

## Hardware Overview

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg" alt="reComputer Robotics J601 side view 1 · carrier-board connectors" loading="lazy" />
    <figcaption>Side view 1 · Carrier-board connectors</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg" alt="reComputer Robotics J601 side view 2 · additional interfaces" loading="lazy" />
    <figcaption>Side view 2 · Additional interfaces</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg" alt="reComputer Robotics J601 bottom view · expansion slots and board layout" loading="lazy" />
    <figcaption>Bottom view · Expansion slots and board layout</figcaption>
  </figure>
</div>

| Indicator | Color | Role |
| --- | --- | --- |
| PWR | Green | Power indicator |
| SSD | Green | Storage activity indicator |
| USR | RGB | User-controllable status LED |

For connector pinouts, wiring, interface tests, and RGB LED control, open [Hardware & I/O](/jetson/recomputer_robotics_j601/hardware_and_interface_usage/).

## Flash JetPack

This workflow installs **JetPack 7.1 (L4T 38.4.0)** to an NVMe SSD on the J601 carrier board. Choose the BSP for the installed module: **J6015 for T5000** or **J6014 for T4000**.

:::caution
Flashing erases data on the target NVMe SSD. Back up important data before starting, and keep power and USB connected until flashing completes.
:::

<div className="jetson-product-step-flow">

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>Prepare the Equipment</h3>
    <p className="jetson-product-step-label">Step 1 · Set up the Ubuntu host and target hardware</p>

Prepare the following equipment:

- J601 carrier board with a Jetson AGX Thor T5000 or T4000 module and suitable cooling
- NVMe M.2 2280 SSD installed in the Key M slot
- 19–48 V DC power supply connected through XT30
- Physical Ubuntu **22.04 or 24.04** host PC with **at least 220 GB** of free storage
- USB Type-C **data** cable
- HDMI display, keyboard, and mouse for first boot

:::tip
A native Ubuntu host provides the most reliable flashing experience. Seeed Jetson DevelopTool also supports Windows through WSL2; follow its [installation guide](/jetson_developtool_installation/) for host setup.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>Enter Force Recovery Mode</h3>
    <p className="jetson-product-step-label">Step 2 · Connect J4 and verify the installed module</p>

1. With the board powered off, connect the host PC to the **USB 3.0 Type-C recovery/flashing port (J4)**. The USB 2.0 Type-C debug port (J3) is a separate connector.
2. Press and hold **RECOVERY**.
3. Connect the 19–48 V DC power supply through XT30.
4. Release **RECOVERY** after two seconds.
5. Run the following command on the Ubuntu host:

```bash
lsusb
```

| Configuration | Module | Expected recovery USB ID |
| --- | --- | --- |
| J6015 | AGX Thor T5000 | `0955:7026 NVIDIA Corp.` |
| J6014 | AGX Thor T4000 | `0955:7226 NVIDIA Corp.` |

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg" alt="J601 USB-C flashing port and recovery button connections" loading="lazy" />

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg" alt="Ubuntu host lsusb output while a J601 is in Force Recovery Mode" loading="lazy" />

If the expected ID is missing, check the data cable and recovery port, then repeat the recovery sequence before continuing.

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>Prepare the Matching BSP</h3>
    <p className="jetson-product-step-label">Step 3 · Choose software or command-line flashing</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="Software Flashing" default>

Install and launch [Seeed Jetson DevelopTool](/jetson_developtool_installation/), then prepare the firmware:

1. Open **Flash Center** and select **reComputer J601** and **JetPack 7.1 (L4T 38.4.0)**.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg" alt="Jetson DevelopTool Flash Center with reComputer J601 selected" loading="lazy" />

2. Confirm the recovery wiring from Step 2.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg" alt="J601 power and USB connections for Jetson DevelopTool" loading="lazy" />

3. Click **Detect Device**, confirm the installed module, and click **Next**.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg" alt="Jetson DevelopTool detecting the AGX Thor module" loading="lazy" />

4. Click **Download / Prepare BSP**. The tool downloads the firmware, verifies its SHA-256 checksum, and extracts the package.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg" alt="Jetson DevelopTool downloading and preparing the J601 BSP" loading="lazy" />

<details>
<summary>Watch the Jetson DevelopTool flashing tutorial</summary>

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/O2rlSOdYujE" title="Flash JetPack on reComputer J601 with Seeed Jetson DevelopTool" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

</details>

</TabItem>
<TabItem value="command-line" label="Command-Line Flashing">

Download the **module-specific** BSP package below. The archive is large; downloading may take around 60 minutes. Wait for the download to finish before extracting it.

<Tabs groupId="j601-thor-module">
<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

<div className="jetson-product-table-wrap">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Jetson Module</th>
      <th>Product</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T5000</td>
      <td>reComputer Robotics J6015</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAq5ofKK9Y1RaCzAfJ8-3J4ARhePBbGBc-mcjQ1bNAP0bY?e=CbmAN9" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>3f75780b43f6559bc950b6a97aa38fd6f61d4d001cce870bdfb498f64e6d18e5</td>
    </tr>
  </tbody>
</table>
</div>

</TabItem>
<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

<div className="jetson-product-table-wrap">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Jetson Module</th>
      <th>Product</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T4000</td>
      <td>reComputer Robotics J6014</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBofCO4bWF9SLdbLQE1V8DgAS1tW6-UmQGEH3ULOZ7W16o?e=zdnK3s" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>c63eddfe7005a088ab439c64fb5d3bf9a52b85d62d377c6a4bf829295f7222ef</td>
    </tr>
  </tbody>
</table>
</div>

</TabItem>
</Tabs>

On the Ubuntu host, verify the downloaded archive and compare the full result with the checksum for your module:

```bash
sha256sum <downloaded-archive.tar.gz>
```

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>Flash the NVMe SSD</h3>
    <p className="jetson-product-step-label">Step 4 · Use the same flashing method and module selection</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="Software Flashing" default>

Click **Start Flash** in Jetson DevelopTool and wait for the interface to report success. Keep the power supply and USB data cable connected throughout the process.

</TabItem>
<TabItem value="command-line" label="Command-Line Flashing">

Extract the archive on the Ubuntu host, then run the command for your installed module. Replace `YYYY-MM-DD` with the date in the downloaded archive's filename.

<Tabs groupId="j601-thor-module">
<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6015-7.1-38.4.0-YYYY-MM-DD.tar.gz
cd mfi_recomputer-thor-carrier-j6015
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6015 external
```

</TabItem>
<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6014-7.1-38.4.0-YYYY-MM-DD.tar.gz
cd mfi_recomputer-thor-carrier-j6014
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6014 external
```

</TabItem>
</Tabs>

The flash command usually takes 2–10 minutes. Wait for the terminal to report a successful flash.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png" alt="Example terminal output after successful Jetson flashing" loading="lazy" />

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">5</span>
  <div className="jetson-product-step-content">
    <h3>Complete the First Boot</h3>
    <p className="jetson-product-step-label">Step 5 · Configure Ubuntu and check your interfaces</p>

Connect the HDMI display, keyboard, and mouse, and complete Ubuntu's initial system configuration. If the setup screen does not appear after flashing, power-cycle the board after the flashing tool reports success.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png" alt="Example Jetson Ubuntu first-boot configuration screen" loading="lazy" />

Continue with [Hardware & I/O](/jetson/recomputer_robotics_j601/hardware_and_interface_usage/) to verify your peripherals, or explore the [perception demo](#applications). Seeed's carrier-board device-tree and BSP sources are available in [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra).

  </div>
</section>

</div>

:::tip Optional: Explore Other Jetson Carrier Boards
After completing setup, you can explore firmware downloads and flashing instructions for other Seeed Jetson carrier boards.

<div className="jetson-product-actions">
  <a className="jetson-product-button jetson-product-button--secondary" href="/flash/jetpack_to_selected_product/" target="_blank" rel="noopener noreferrer">Browse Other Jetson Flashing Guides ↗</a>
</div>

:::

## Applications

Start with a camera-and-LiDAR perception example for reComputer Robotics J601.

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer" aria-label="Open the J601 multi-camera and LiDAR perception demo repository">
      <img src="https://img.youtube.com/vi/gFFaiGvRdtg/hqdefault.jpg" alt="Video preview of the J601 camera and LiDAR perception demo" loading="lazy" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="Application capabilities"><span>Detection</span><span>Sensor Fusion</span><span>BEV</span></div>
      <h3><a href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">Multi-Camera &amp; LiDAR Perception</a></h3>
      <p>Replay six camera streams and LiDAR data while Jetson runs TensorRT detection, road segmentation, geometric bird's-eye-view fusion, and pose-aligned local mapping, with synchronized browser views.</p>
    </div>
  </article>
</div>

### Watch the Perception Demo

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/gFFaiGvRdtg" title="reComputer J601 multi-camera and LiDAR perception demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

<div className="jetson-product-actions">
  <a className="jetson-product-button" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">Get the Demo &amp; Deployment Guide ↗</a>
  <a className="jetson-product-button jetson-product-button--secondary" href="https://youtu.be/gFFaiGvRdtg" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a>
</div>

The repository documents validation on **JetPack 7.2 / L4T R39.2, CUDA 13.2, and TensorRT 10.16.2**. Follow its environment and deployment instructions; this page's **JetPack 7.1** flash package is a separate software baseline. Build TensorRT engines on the target device for the installed software versions.

The demo uses recorded nuScenes data and geometric camera/LiDAR fusion. Its local map uses dataset-provided poses; segmentation accuracy on nuScenes has not been evaluated. See the repository for validation conditions and dataset/model licenses.

## Resources

Use these resources for board integration, mechanical design, and BSP development.

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Carrier Board Datasheet</strong><small>Connector pinouts, electrical limits, and board specifications</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>Carrier Board Schematic</strong><small>J601 V1.0 circuits and signal routing</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>3D Mechanical Model</strong><small>STEP model for mounting and enclosure planning</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Linux_for_Tegra Source</strong><small>Seeed Jetson BSP and device-tree sources</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SHOP</span>
    <span className="jetson-product-resource-copy"><strong>J601 Carrier Board</strong><small>Purchase options for the Jetson AGX Thor carrier board</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Jetson Product Catalog</strong><small>Browse Seeed NVIDIA Jetson products</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CASE</span>
    <span className="jetson-product-resource-copy"><strong>Jetson Success Cases</strong><small>Deployment examples across edge AI applications</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Jetson AGX One Pager</strong><small>Seeed Jetson AGX platform overview</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## Tech Support & Product Discussion


Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed community forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed support"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Discord community"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Wiki product discussion"></a>
</div>

</div>
