---
description: ODYSSEY - X86J4105
title: LinkStar Introduction
tags:
  - LinkStar
  - Getting started
keywords:
  - LinkStar
  - Getting started
image: https://avatars.githubusercontent.com/u/10758833
slug: /Linkstar_Datasheet
last_update:
  date: 01/03/2023
  author: w0x7ce
---

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

LinkStar-H68K router equips quad-core Cortex-A55 RK3568 chip, featuring 4 Ethernet interfaces for dual-2.5G and dual-1G, along with Wi-Fi 6 technology(optional), while providing high storage capacity and media player functionality. In this wiki we will show you the hardware overview and how to quickly get started with LinkStar

## Hardware Overview

This is the hardware overview of LinkStar - H68K, we here will present you the details about each component.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/hardware_overview1.jpg" /></div>

### Power Supply

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">Operating Voltage</th>
      <th className="tg-0lax">5V~24V DC (12V-1A DC recommended)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">DC Power Adapter</td>
      <td className="tg-0lax">12V-1A DC (recommended)</td>
    </tr>
    <tr>
      <td className="tg-y6fn">DC Power Adapter</td>
      <td className="tg-0lax">12-2A DC for additional hardware driver (recommended)</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Type-C power supply</span></td>
      <td className="tg-0lax">Under 5V (not supporting quick charge)</td>
    </tr>
  </tbody>
</table>

### Ethernet Networking

<div align="center"><img width={700} src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_968748_fi2e0dpZ5__TlzPp_1668582262?w=960&h=500" /></div>

### Chip Performace

RK3568 is a 4K flagship SoC chip with high cost performance owned by SWICK. It adopts ARM architecture and integrates a quad-core Cortex-A55 with a separate NEON coprocessor to support 4K video decoding and 3K video encoding. Many powerful embedded hardware engines provide optimized performance for high-end applications.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/chip_performance.png" /></div>

### Interfaces

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-w2ai{background-color:#FFF;border-color:inherit;color:#3D3D3D;text-align:left;vertical-align:top}\n.tg .tg-2e9t{background-color:#FFF;color:#3D3D3D;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">ETH0</td>
    <td class="tg-0pky">Supprot 1G Ethernet with RTL8211F PHY Chip</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH1</td>
    <td class="tg-0pky">Supprot 1G Ethernet with RTL8211F PHY Chip</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH2</td>
    <td class="tg-0pky">Supprot 2.5G/1G Ethernet with RTL8211F PHY Chip</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH3</td>
    <td class="tg-0pky">Supprot 2.5G/1G Ethernet with RTL8211F PHY Chip</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB3.0 Type-C</td>
    <td class="tg-0pky">Straight through IO with 5V power supply(not supporting quick charge)</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Type-A</td>
    <td class="tg-0pky">x2</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI(optional)</td>
    <td class="tg-0pky">MT7921 Module with PCIE2.0 interface</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">HDMI 2.0 for 4K output, both audio and visual</td>
  </tr>
  <tr>
    <td class="tg-0pky">3.5mm Audio input/output</td>
    <td class="tg-0pky">Implement by RK809-5 power supply chip</td>
  </tr>
  <tr>
    <td class="tg-0pky">Infrared Receiver</td>
    <td class="tg-0pky">IRM-3638 Model</td>
  </tr>
  <tr>
    <td class="tg-0pky">TF card slot</td>
    <td class="tg-0pky">SDIO signal SDMMC0</td>
  </tr>
</tbody>
</table>

### Indicator Light

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/indicator.png" /></div>

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-y698">STA</th>
    <th class="tg-y698">Hard Disk indicator</th>
    <th class="tg-y698">ETH indicator</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Operating/Active indicator</td>
    <td class="tg-0pky">Hard Disk connection instructions</td>
    <td class="tg-0pky">Network connection indication</td>
  </tr>
</tbody>
</table>

## Quick Start

With pre-installed Andriod 11 system, you can directly use LinkStar once you received the package.

### Preparative

- LinkStar
- HDMI connector
- Monitor
- Mouse
- 12V1A power adaptor

### Installation

- **Step 1**. Connect LinkStar with a monior and a mouse.

- **Step 2**. Power it up by plugging 12V1A power adaptor and push the power button.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/power.png" /></div>

- **Step 3**. The monitor will be shown as:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/display.png" /></div>

:::note
Please note that the right mouse button represents "return", as you click it the page will be returned.
:::

Now you are good to go!

## Resources

- [RK3568 Datasheet](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf)
- [M7921E Wi-Fi Module](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
