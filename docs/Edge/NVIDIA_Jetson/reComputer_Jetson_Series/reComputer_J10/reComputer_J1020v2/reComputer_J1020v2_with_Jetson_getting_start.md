---
description: Flash JetPack to reComputer J4012 (J401 carrier board)
title: Getting start with reComputer J1020v2
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J1020v2_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# Getting start with reComputer J1020v2

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061441.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Introduction
reComputer series for Jetson are compact edge computers built with NVIDIA advanced AI embedded systems: J10 (Jetson Nano 4GB) and J20 (Jetson [Xavier NX](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Module-p-4421.html?queryID=fa33abfaf6f67f95a4c01b60263d2793&objectID=4421&indexName=bazaar_retailer_products) 8GB and Jetson Xavier 16GB). With rich extension modules, industrial peripherals, and thermal management, reComputer for Jetson is ready to help you accelerate and scale the next-gen AI product by deploying popular DNN models and ML frameworks to the edge and inferencing with high performance.

reComputer J1020 v2 is a powerful and compact intelligent edge box built with Jetson Nano production module, bringing modern AI performance to the edge. The built-in J202 carrier board is the same dimension as the Jetson Nano Developer Kit, including 4xUSB 3, M.2 Key M, HDMI, and DP. The full system also includes a fan and a power adapter.

For AI beginners, if you would like to get critical AI skills and dive into deep learning. [NVIDIA’s Deep Learning Institute (DLI)](https://www.nvidia.com/en-us/training/) delivers practical, hands-on training and certification. Please also check out Seeed [wiki](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Started_Guide/) guide including getting started with Jetson Nano and also building different projects.

For solution providers, reComputer J1020 v2 is preinstalled with Jetpack 4.6.1, with a rich set of I/Os, this AI box simplifies development and fits for deployment for edge AI solution providers working in video analytics, object detection, natural language processing, medical imaging, and robotics across industries of smart cities, security, industrial automation, smart factories.

## Features

- **NVIDIA Jetson Nano Dev Kit alternative:** hand-size Edge AI device built with Jetson Nano 4GB Production Module, the carrier board brings extensive I/Os: GPIO, CSI, Gigabit Ethernet, 4 x USB 3.0 Type A, onboard 16 GB eMMC, Please check here for SSD storage expansion.
- **128 NVIDIA CUDA® cores deliver 0.5 TFLOPs (FP16)** to run AI frameworks and models for applications like image classification, object detection, segmentation, and speech processing.
- **Pre-installed NVIDIA Jetpack**, JetPack SDK includes a board support package (BSP), Linux OS, NVIDIA CUDA, cuDNN, and TensorRT software libraries for deep learning, computer vision, GPU computing, multimedia processing, etc.
- **Support the entire** [Jetson software stack](https://developer.nvidia.com/embedded/develop/software) and various [developer tools](https://wiki.seeedstudio.com/Jetson-AI-developer-tools/) for building fast and robust AI applications provided by Seeed Edge AI partners.

## Specifications

<table>
  <thead>
    <tr>
      <th>Specifications</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html">reComputer J1020v2</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano Developer Kit-B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Module</td>
      <td colspan='2'>Jetson Nano 4GB (production version)</td>
      <td>Nano (not production version)</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD (Card not included)</td>
    </tr>
    <tr>
      <td>SD Card Slot</td>
      <td>Included (On the carrier board)</td>
      <td>-</td>
      <td>Included (On the module)</td>
    </tr>
    <tr>
      <td>Video Encoder</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Video Decoder</td>
      <td colspan='2'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)</td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Gigabit Ethernet</td>
      <td colspan='3' align='center'>1\*RJ45 Gigabit Ethernet Connector (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 \* USB 3.0 Type A;
2 \* USB 2.0 Type A;
1 \* USB Type C for device mode;
1 \* USB Type C for 5V power input</td>
      <td>4 \* USB 3.0 Type-A ；
1 \* Micro-USB port for device mode;</td>
      <td>4 \* USB 3.0 Type-A;
1 \* Micro-USB port for 5V power input  or for device mode</td>
    </tr>
    <tr>
      <td>CSI Camera Connect</td>
      <td colspan='3' align='center'>2\*CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1\*HDMI Type A</td>
      <td colspan='2' align='center'>1\*HDMI Type A; 1\*DP</td>
    </tr>
    <tr>
      <td>FAN</td>
      <td colspan='3' align='center'>1\* FAN connetcor (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1\*M.2 Key E</td>
      <td>1\*M.2 Key E (Disabled)</td>
      <td>1\*M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1\*M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1\*RTC Socket</td>
      <td>1\*RTC Socket 1\*RTC 2-pin</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Multifunctional port</td>
      <td colspan='3' align='center'>1\* 40-Pin header</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>USB-Type C 5V⎓3A</td>
      <td>9-12V Power adapter not included(Barrel Jack 5.5/2.5mm)</td>
      <td>DC Jack 5V⎓4A；Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>Mechanical</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm (with case)</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## Flash JetPack to reComputer J1020v2

:::info
Please refer to this [wiki](/reComputer_J2021_J202_Flash_Jetpack) page for more information because J1020v2 use J202 carrier board.
:::

## Resources
[reComputer J1020 v2 datasheet](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1020-v2-datasheet.pdf)

[reComptuer J102 (Also J202) Carrier Boards Schematic](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J1010 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio Edge AI Success Stories](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson Serials Comparision](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

