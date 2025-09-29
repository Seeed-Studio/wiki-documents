---
description: reServer Industrial Getting Started
title: reServer Industrial Getting Started
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reServer_Industrial_Getting_Started
last_update:
  date: 09/22/2023
  author: Lakshantha
---

# Getting Started with reServer Industrial

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

reServer Industrial series offers fanless, compact, AI-enabled NVR (Network Video Recorder) servers including NVIDIA Jetson™ Orin Nano/Orin NX modules, ranging from 20 TOPS to 100 TOPS AI performance. reServer Industrial is preinstalled with Jetpack 5.1.1, simplifies development, ideal for bulding VMS (Video Management System) together with powerful AI capabilities, which brings digital transformantion across industries of smart cities, security, industrial automation, smart factories.

reServer Industrial comes with a passive heatsink and a fanless design, making it ideal for use in demanding environments. The passive heatsink allows for efficient cooling without the need for a fan, reducing the risk of component failure due to dust or other contaminants. The fanless design also reduces noise levels and power consumption, making it suitable for use in noise-sensitive environments and minimizing energy costs.

reServer industrial has 5 RJ45 GbE ports, 4 of which are PoE PSE ports for providing power over Ethernet to devices like IP cameras. This eliminates the need for a separate power source and makes it easier to deploy network devices in areas without readily available power outlets. The remaining GbE port is used to connect to a network switch or router, enabling communication with other devices on the network and access to the Internet.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Features

- **Fanless Compact Edge AI Server:** Powered by NVIDIA Jetson™ Orin Nano/Orin NX modules, ranging from 20 TOPS to 100 TOPS AI performance, wider temperature range from -20 ~ 60°C with 0.7m/s airflow
- **Multi-Stream Processing:** 5× GbE RJ45(4 for 802.3af PSE ), handles multiple streams with real-time processing
- **Expandable Storage:** 2 drive bays for 2.5" SATA HDD/SSD, plus an M.2 2280 socket for NVMe SSD
- **Industrial Interfaces:** Includes COM port, DI/DO ports, CAN port, USB 3.1, and optional TPM2.0 module
- **Hybrid Connectivity:** Supports 5G/4G/LTE/LoRaWAN® (module optional) with Nano SIM card slot
- **Certifications:** FCC, CE, UKCA, ROHS, KC

## Specifications

<table>
  <thead>
    <tr>
      <th colSpan={2}>Product Name </th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">J4012</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html">J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J3011-p-5750.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J3011-p-5750.html">J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J3010-p-5749.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J3010-p-5749.html">J3010</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>NVIDIA Jetson Module</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>114110247</td>
      <td>114110248</td>
      <td>114110249</td>
      <td>114110250</td>
    </tr>
    <tr>
      <td rowSpan={6}>Processor<br />System</td>
      <td>AI Performance</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores </td>
      <td>512-core NVIDIA Ampere architecture GPU with 16 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8-core Arm® Cortex®-A78AE v8.2 64- bit CPU; 2MB L2 + 4MB L3 </td>
      <td colSpan={3}>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memory</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>8GB 128-bit LPDDR5 68 GB/s</td>
      <td>4GB 64-bit LPDDR5 34 GB/s</td>
    </tr>
    <tr>
      <td>Video Encode</td>
      <td colSpan={2}>Standards supported: H.265 (HEVC), H.264, AV1 1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 supported by 1-2 CPU cores </td>
    </tr>
    <tr>
      <td>Video Decode</td>
      <td colSpan={2}>Standards supported: H.265 (HEVC), H.264, VP9, AV1 1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>Standards supported: H.265 (HEVC), H.264, VP9, AV1 1×4K60 (H.265) | 2×4K30 (H.265) | 5×1080p60 (H.265) | 11×1080p30 (H.265)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Storage</td>
      <td>eMMC</td>
      <td colSpan={4}>-</td>
    </tr>
    <tr>
      <td>Expansion</td>
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD (M.2 NVMe SSD 128G included)</td>
    </tr>
    <tr>
      <td rowSpan={9}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={4}>1× LAN0 RJ45 GbE (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 GbE PoE(PSE 802.3 af 15 W, 10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1, 1× USB2.0 Type C(Device mode), 1× USB2.0 Type C For Debug UART &amp; RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4×DI,4×DO,3×GND_DI,2×GND_DO,1×GND_ISO,1×CAN</td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={4}>1× DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={2}>1×HDMI 2.1 Type A 7680x4320 at 30 Hz</td>
      <td colSpan={2}>1×HDMI 1.4 Type A 3840x2160 at 30 Hz</td>
    </tr>
    <tr>
      <td>SATA</td>
      <td colSpan={4}>2 Drive Bays to support 2.5" SATA HDD/SSD(SATA III 6.0Gbps)</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={4}>1× Nano SIM card slot</td>
    </tr>
    <tr>
      <td>Button</td>
      <td colSpan={4}>Reset Button, Recovery Button</td>
    </tr>
    <tr>
      <td rowSpan={5}>Expansion</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>Mini PCIe for LoRaWAN®/4G/Series Wireless (Module optional)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) support 4G/5G (Module optional) </td>
    </tr>
    <tr>
      <td>Fan</td>
      <td colSpan={4}>Fanless, passive heatsink; 1×Fan connectors(5V PWM)</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={4}>1× TPM 2.0 connector (Module optional)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>1× RTC socket (CR1220 included),×RTC 2-pin</td>
    </tr>
    <tr>
      <td rowSpan={2}>Power</td>
      <td>Power Supply</td>
      <td colSpan={4}>DC 12V-36V Terminal block 2 pin</td>
    </tr>
    <tr>
      <td>Power Adapter</td>
      <td colSpan={4}>24V /5A Power Adapter(Without power cord)</td>
    </tr>
    <tr>
      <td rowSpan={9}>Mechanical</td>
      <td>Dimensions (W x D x H)</td>
      <td colSpan={4}>194.33mm×187mm×95.5mm</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>Installation</td>
      <td colSpan={4}>Desk, DIN rail, VESA</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td colSpan={4}>-20 ~ 60°C with 0.7m/s</td>
    </tr>
    <tr>
      <td>Operating Humidity</td>
      <td colSpan={4}>95% @ 40 °C (Non-condensing)</td>
    </tr>
    <tr>
      <td>Storage temperature</td>
      <td colSpan={4}>-40 ~ 85°C</td>
    </tr>
    <tr>
      <td>Storage humidity</td>
      <td colSpan={4}>60°C@ 95% RH(Non-condensing)</td>
    </tr>
    <tr>
      <td>Vibration</td>
      <td colSpan={4}>3 Grms @ 5 ~ 500 Hz, random, 1 hr/axis</td>
    </tr>
    <tr>
      <td>Shock</td>
      <td colSpan={4}>50G peak acceleration (11 msec. duration,eMMC,microSD, or mSATA)</td>
    </tr>
    <tr>
      <td colSpan={2}>OS</td>
      <td colSpan={4}>Pre-installed Jetpack 5.1.1 (above) (provide Linux OS with board support package) </td>
    </tr>
    <tr>
      <td colSpan={2}>Certification</td>
      <td colSpan={4}>FCC, CE, RoHS, UKCA, KC</td>
    </tr>
    <tr>
      <td colSpan={2}>Warranty</td>
      <td colSpan={4}>2 Years</td>
    </tr>
  </tbody>
</table>

## Hardware Overview

### Full System

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

### Carrier Board

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

## Flash JetPack

:::danger
The device will come pre-installed with JetPack 5.1.1. If there are no special requirements, you don't need to reflash the system.
:::

reServer Industrial comes pre-installed with JetPack 5.1.1 on a 128GB SSD along with the necessary drivers. This includes SDK components such as CUDA, CUDNN and TensorRT. However, if you want to reflash Jetpack to the included SSD or to a new SSD, you can follow the steps below. Currently we only provide guidance for JP5.1.1 and we will keep updating this in the future.

:::note
If you want to use SSDs with reServer Industrial, we only recommend you choose the [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), the [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html), [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html), and the [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) versions from Seeed.
:::

### Prerequisites

You need to prepare the following hardware before getting started with reServer Industrial

- reServer Industrial
- Provided Power Adapter with power cord ([US version](https://www.seeedstudio.com/AC-US-p-5122.html) or [EU version](https://www.seeedstudio.com/AC-EU-p-5121.html))
- Ubuntu Host PC (native or VM using VMware Workstation Player)
- USB Type-C data transmission cable
- External monitor
- HDMI cable
- Keyboard and Mouse

### Enter Force Recovery Mode

Now you need to enter recovery mode on the reServer Industrial board in order to flash the device. Connect a USB Type-C cable between **DEVICE** port and your PC. Use a pin and insert into the **REC** hole to press the recovery button and while holding this, connect the included **2-Pin Terminal block power connector** to the power connector on the board (make sure to use the 2 screws to screw the terminal in place) and connect the included power adapter with a power cord to turn on the board

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
Make sure you power on the device while holding the RECOVERY button or otherwise it will not enter recovery mode
:::

On the Ubuntu host PC, open a Terminal window and enter the command **lsusb**. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.

- For Orin NX 16GB: **0955:7323 NVidia Corp**
- For Orin NX 8GB: **0955:7423 NVidia Corp**
- For Orin Nano 8GB: **0955:7523 NVidia Corp**
- For Orin Nano 4GB: **0955:7623 NVidia Corp**

### Different Methods of Flashing

Here we offer 2 different methods of flashing.

1. Download the entire system image we have prepared which includes NVIDIA JetPack, hardware periheral drivers and flash to device
2. Download official NVIDIA L4T, use the included hardware periheral drivers and flash to device

:::note
The first method download is around 14GB and the second method download is about 3GB
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="Method 1">

#### Download System Image

- **Step 1:** Download the system image to your Ubuntu PC corresponding to the board you are using.

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>Device</th>
        <th>JetPack Version</th>
        <th>L4T Version</th>
        <th>Image Link</th>
        <th>Alternative Image Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={5}>reServer Industrial J4012</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUVO61wR2NhFqcAQCeWxsBsBWgOf5p_BBTxSgPG4gfAx7g?e=v0Qhhm" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EWxVw3rZF-JPuKp0ksJZkGABWmsSxVizaJIqQBL5TDL1JA?e=4JJ2XV" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWcp7ma66_9JmfEjnMrxbfEBZk7LxwoJ2YuN-LDWEITE_g?e=NuKvDr" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV0nlnSfW3NEmcDq4l3u1M4BrzThb0-y44qa4hGXk-XfWg?e=G9ub1C" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdCn0yi0ArRKivHb3mKLrwcBmBEKXlGKLCnNkRQNzyylAw?e=QTnhQa" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbfqyoEzXBBsDycFgKH0lEB05TQNLcZidMt2Py2ZOtLdw?e=4etAqu" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVOMzCf8ulxAgCOCN9jlsUcBNR29X1dB6ILeYngqVHtwVA?e=UVc1qc" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J4011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYMjh00vng9JhG0d26iS1oIBOhHSs4oa19pPd40qrTkD7Q?e=x6zZTH" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EW5Dood6aQ9DpT6ZaXWF50QBmyAyOowCktzqZj48sQeyhw?e=VVP56J" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcbD8zqcSTpAjBmjHZTAvU8BBd80FekQMV9jMD35xU4Arw?e=DNWcyn" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZlrBLKGf5VDiczIJaPNpNoBcby3urzv85oWmS34pKtcGg?e=u7aWDL" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQJBb6D2ISBEnoUnUkqVEgkB9npGJ48jw5p2DXFIWaNJxA?e=lOJiFM" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EekoAp4j8WJHi9xe-eoJTW4BH-qx2Sttmlh7uljQdNkGXw?e=g7ZNa1" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
            <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeSEdyl9XTNEkea8ntTsqM8B8w_Hs8JV-toT71bgvR3V0A?e=9P4ZAw" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J3011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EelLW5qjyWBEgoJN_SUmKhQBTnkElasNJtxxfSgfVuXXuw?e=c2THTl" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb6xTuWGRdlDpJfgLSWS7S4BpnKYxkI9RKl6tJbU0xI4FQ?e=m84vbP" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eeg04qGBxQNOjC2Q0hvfvugBx_V05xFkYM5ThVH9ECMZ6A?e=8fDLxZ" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0cen9MPIhJpM2LBfm2edEBZtw53n2C9PwqsY2XaiSH_w?e=LWQren" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdqRMLVCzHtIkHUShgZ91xoBK367uzXyC_mTGQOzlfJhyQ?e=wgOhwj" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUnzsQBX-jxJkHZNxkYdoFsBN0coyFSY50_5LspOv8kfew?e=2baOzY" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EahC2mJQOQRBtoqG7fhuIecBSEo7w_Py8nGy_FB51QdtHg?e=W0U23d" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J3010</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETo-G6kS2atGpfsWK6uX2HIBcrwsAboHjDBB_rypE4iyTA?e=GZyglq" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVqo37I8yiNEjpo14kR5kYAB0ZhMNUhIN8X5pZCEjk4f6A?e=0XGC0W" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQgrBDUICyZCnKBI_qVeupoBYqQJ1dP7_lcxUwxUphg6Qw?e=ObUzPI" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EXxmIAk7sGdOnPcaZHvz7ykB36pGkNwZscpdu3ZytrfD0Q?e=ElJ2bb" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ET-LxPOYaNtIjoJQ4I-gKEcBxU-AmFX9R-mWPH1p-eyBdA?e=EpAopw" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQd4hYwgVPxEk8CtZgfU2SsBzn18zMuQOHXq45yq6gykYw?e=sAoguo" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * The image files from both Download1 and Download2 are the same. You can choose the link with the faster download speed.
</p>

<!-- The source code for the above images can be found [here](https://github.com/Seeed-Studio/Linux_for_Tegra) -->

- **Step 2:** Extract the generated file

```sh
tar -xvf <file_name>.tar.gz
```

#### Flash to Jetson

- **Step 1:** Navigate to the extracted file from before and execute the flash command as follows

```sh
cd mfi_reserver-orin-industrial
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Now it will start to flash the system image to the board. If the flashing is successful, you will see the below output

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Step 2:** Connect the board to a display using the HDMI connector on the board and finish the initial configuration setup

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

After that, the board will reboot and will be ready to use!

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

---

</TabItem>
<TabItem value="method2" label="Method 2">

#### Download and Prepare NVIDIA L4T and rootfs

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

#### Download and Prepare Drivers

- **Step 1:** Download the driver files to your Ubuntu PC corresponding to the board you are using

<table>
  <thead>
    <tr>
      <th>Jetson Module</th>
      <th>Download Link</th>
      <th>JetPack Version</th>
      <th>L4T Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nx-8-16-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 8GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-8-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-4-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>

- **Step 2:** Move the downloaded peripheral drivers into the same folder with **Linux_For_Tegra** directory

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **Step 3:** Extract the downloaded driver .zip file. Here we additionally install the **unzip** package which is needed to decompress the .zip file

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

Here it will ask whether to replace the files. Type A and press ENTER to replace the necessary files

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### Flash to Jetson

- **Step 1:** Navigate to the **Linux_for_Tegra** directory and execute the flash command as follows

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

Now it will start to flash the system image to the board. If the flashing is successful, you will see the below output

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Step 2:** Connect the board to a display using the HDMI connector on the board and finish the initial configuration setup

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

After that, the board will reboot and you will see the following

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **Step 3:** Open a terminal window inside the device, execute the following, the device will reboot and ready to use!

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

Futhermore, if you want to install SDK components such as CUDA, cuDNN, TensorRT, please execute the following

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## Hardware and Interfaces Usage

:::info
  To learn more about how to use all the hardware and interfaces on the reServer Industrial board, you need to follow this [**wiki**](/reserver_industrial_hardware_interface_usage):
:::

## Resources

(change the links)

- [reServer Industrial Datasheet](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial Reference Guide](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson Devices and Carrier Boards Comparison](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D File](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## Tech Support

Please do not hesitate to submit issues into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
