---
description: 开始使用reComputer J30/40 系列
title: 开始使用reComputer J30/40 系列
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_J30_40_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# 开始使用reComputer J30/40 系列

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110110146--recomputer-j3010-first.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## 介绍
reComputer J3010是采用Jetson Orin Nano 4GB打造的强大且紧凑的智能边缘盒子，可为边缘带来高达20TOPS的现代AI性能，提供与Jetson Xavier NX相当的性能。它将NVIDIA Ampere™GPU架构与64位操作能力相结合。

整个系统包括一个NVIDIA Jetson Orin Nano 4GB生产模块、一个散热片和一个电源适配器。reComputer J3010预装有Jetpack 5.1，简化了开发，并适用于在智能城市、安全、工业自动化和智能工厂等各行业中从事视频分析、目标检测、自然语言处理、医学成像和机器人技术的边缘AI解决方案提供商。

如果您正在寻找带电源适配器的版本，请查看 [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-p-5589.html)。

## 特点

- **生产中的出色人工智能性能：** 基于设备的处理，实现最高20 TOPS的人工智能性能，功耗低，延迟低。
- **手掌大小的边缘人工智能设备：** 130mm x 120mm x 58.5mm的紧凑尺寸，包括NVIDIA Jetson Orin Nano 4GB生产模块、散热器、外壳和电源适配器。支持桌面、壁挂，方便携带。
- **丰富的可扩展性：** 4x USB3.2、HDMI 2.1、2xCSI、1x千兆以太网的RJ45、M.2 Key E、M.2 Key M、CAN和GPIO。
- **加速产品上市解决方案：** 预安装NVIDIA JetPack™5.1的Jetpack，搭载128GB NVMe固态硬盘、Linux操作系统BSP、128GB SSD、WiFi BT组合模块、两个天线，支持Jetson软件和主流人工智能框架和软件平台。
- **全面的证书：** FCC、CE、RoHS、UKCA。

## 规格说明

<table>
  <thead>
    <tr>
      <th>规格要求</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products">reComputer J3010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">reComputer J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products">reComputer J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products">reComputer J4012</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Module</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>AI Performance</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512-core NVIDIA Ampere architecture GPU with 16 Tensor Cores</td>
      <td>1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores</td>
      <td colspan='2' align='center'>1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>GPU Max Frequency</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU 1.5MB L2 + 4MB L3</td>
      <td>8-core Arm® Cortex®-A78AE v8.2 64-bit CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU Max Frequency</td>
      <td colSpan='2' align='center'>1.5 GHz</td>
      <td colSpan='2' align='center'>2 GHz</td>
    </tr>
    <tr>
      <td>Memory</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DL Accelerator</td>
      <td colSpan='2' align='center'>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>DLA Max Frequency</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>Vision Accelerator</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td colSpan='4' align='center'>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>Video Encoder</td>
      <td colSpan='2' align='center'>1080p30 supported by 1-2 CPU cores</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Video Decoder</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan='2' align='center'>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan='4' align='center'>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>CSI Camera</td>
      <td colSpan='4' align='center'>2* CSI （2-lane 15pin）</td>
    </tr>
    <tr>
      <td>Networking</td>
      <td colSpan='4' align='center'>1* Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>4* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (Device Mode)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td colSpan='4' align='center'>1* 4 pin Fan Connector(5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>Multifunctional Port</td>
      <td colSpan='4' align='center'>1* 40-Pin Expansion header,1* 12-Pin Control and UART header</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC 2-pin, RTC socket (supports CR1220 but not included)</td>
    </tr>
    <tr>
      <td>Power</td>
      <td colSpan='4' align='center'>9-19V</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td colSpan='4' align='center'>Power adapter not included</td>
    </tr>
    <tr>
      <td>Temperature</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Mechanical</td>
      <td colSpan='4' align='center'>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## Flash JetPack to reComputer J30/40

:::信息
请参考此[wiki](/reComputer_J4012_Flash_Jetpack)页面了解更多信息，因为J30/40使用J401载板。
:::
