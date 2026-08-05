---
description: This article is a collection page for the reTerminal E Series.
title: reTerminal E Series
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /reterminal_e10xx_main_page
sku: 100017057,100073581
sidebar_position: 1
last_update:
  date: 08/05/2026
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/reterminal_e10xx_main_page/
---
# reTerminal E Series ePaper Display Overview

:::tip Generate ESPHome YAML or flash demos in the browser
Open the **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** to get started fast. Choose the **ESPHome** card, pick your device (E1001 / E1002 / E1003 / E1004), check the onboard features you need, and generate matching ESPHome YAML — or flash demo firmware directly from the browser (desktop Chrome or Edge).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Hub 🖱️</font></span></strong>
    </a>
</div><br />
:::

## Introduction

The reTerminal E Series is Seeed Studio's family of ESP32-S3-powered ePaper display terminals, purpose-built for **always-on, low-power information display**. The lineup spans four models — **E1001, E1002, E1003, E1004** — covering monochrome and full-color panels from 7.3" to 13.3", with options for touch interaction and multi-month battery life. They all share the same software stack (SenseCraft HMI, Home Assistant / ESPHome, Arduino, and more), so you only have to learn it once and then pick the form-factor that fits your scenario.

Unlike traditional displays that consume power continuously, the reTerminal E Series only draws current when redrawing content, making it ideal for digital photo frames, smart-home dashboards, retail signage, meeting-room boards, classroom displays, and other always-on use cases.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## Product Matrix at a Glance

Four models, one ecosystem. Pick by **screen size**, **color vs. monochrome**, **touch**, and **battery life**:

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:240, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center"><strong>7.5" Monochrome</strong><br/>4-level grayscale<br/>~3-month battery</td>
      <td align="center"><strong>7.3" Full Color</strong><br/>E Ink® Spectra™ 6<br/>~3-month battery</td>
      <td align="center"><strong>10.3" Monochrome</strong><br/>16-level grayscale + Touch<br/>~6-month battery</td>
      <td align="center"><strong>13.3" Full Color</strong><br/>E Ink® Spectra™ 6<br/>~6-month battery</td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer"><strong>Buy E1001</strong></a><br/><a href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer"><strong>Buy E1002</strong></a><br/><a href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer"><strong>Buy E1003</strong></a><br/><a href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer"><strong>Buy E1004</strong></a><br/><a href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
    </tr>
  </table>
</div>

## Specification Comparison

All four models share the same ESP32-S3 platform, Wi-Fi 4 / Bluetooth 5.0 wireless, on-board T/H sensor and buzzer, USB-C 5 V / 1 A input, and 0–40 °C operating range — all in a metal enclosure. The differences are primarily on the **display panel**, **refresh behavior**, **battery**, **expansion** and **certifications**:

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Item</th>
			<th align="center">reTerminal E1001</th>
			<th align="center">reTerminal E1002</th>
			<th align="center">reTerminal E1003</th>
			<th align="center">reTerminal E1004</th>
		</tr>
		<tr>
			<td align="center"><strong>Display Size</strong></td>
			<td align="center">7.5"</td>
			<td align="center">7.3"</td>
			<td align="center">10.3"</td>
			<td align="center">13.3"</td>
		</tr>
		<tr>
			<td align="center"><strong>Display Type</strong></td>
			<td align="center">Monochrome<br/>(4-level grayscale)</td>
			<td align="center">Full Color<br/>(E Ink® Spectra™ 6)</td>
			<td align="center">Monochrome<br/>(16-level grayscale)</td>
			<td align="center">Full Color<br/>(E Ink® Spectra™ 6)</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolution</strong></td>
			<td align="center">800 × 480</td>
			<td align="center">800 × 480</td>
			<td align="center">1404 × 1872</td>
			<td align="center">1200 × 1600</td>
		</tr>
		<tr>
			<td align="center"><strong>Partial Refresh</strong></td>
			<td align="center">✅</td>
			<td align="center">❌</td>
			<td align="center">✅</td>
			<td align="center">❌</td>
		</tr>
		<tr>
			<td align="center"><strong>Refresh Rate</strong></td>
			<td align="center">2–5 s</td>
			<td align="center">15–20 s</td>
			<td align="center">2–3 s</td>
			<td align="center">~20 s</td>
		</tr>
		<tr>
			<td align="center"><strong>Touch</strong></td>
			<td align="center">—</td>
			<td align="center">—</td>
			<td align="center">✅ Capacitive touch<br/>(SenseCraft HMI v1.1.2+)</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td align="center"><strong>Processor</strong></td>
			<td align="center" colspan="4">ESP32-S3 with 8 MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Storage</strong></td>
			<td align="center">32 MB Flash<br/>microSD up to 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD up to 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD up to 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD up to 32 GB<br/>(<strong>16 GB included</strong>)</td>
		</tr>
		<tr>
			<td align="center"><strong>Wireless</strong></td>
			<td align="center" colspan="4">2.4 GHz Wi-Fi 802.11 b/g/n + Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>On-board Sensors</strong></td>
			<td align="center" colspan="4">Temperature & Humidity sensor</td>
		</tr>
		<tr>
			<td align="center"><strong>Audio</strong></td>
			<td align="center" colspan="4">Buzzer (sound alert) · Microphone reserved on E1001 / E1002 / E1003</td>
		</tr>
		<tr>
			<td align="center"><strong>Battery</strong></td>
			<td align="center">2000 mAh<br/>~3 months</td>
			<td align="center">2000 mAh<br/>~3 months</td>
			<td align="center">3000 mAh<br/>~6 months</td>
			<td align="center">5000 mAh<br/>~6 months</td>
		</tr>
		<tr>
			<td align="center"><strong>Battery Monitoring</strong></td>
			<td align="center" colspan="4">✅ on-board battery voltage monitoring</td>
		</tr>
		<tr>
			<td align="center"><strong>Power Input</strong></td>
			<td align="center" colspan="4">USB-C 5 V / 1 A</td>
		</tr>
		<tr>
			<td align="center"><strong>Working Temp.</strong></td>
			<td align="center" colspan="4">0–40 °C</td>
		</tr>
		<tr>
			<td align="center"><strong>Enclosure</strong></td>
			<td align="center" colspan="4">Metal</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensions</strong></td>
			<td align="center">176 × 120 × 53 mm<br/>(17 mm w/o stand)</td>
			<td align="center">176 × 120 × 53 mm<br/>(17 mm w/o stand)</td>
			<td align="center">224 × 187 × 18.6 mm</td>
			<td align="center">376 × 311 × 40 mm</td>
		</tr>
		<tr>
			<td align="center"><strong>Expansion</strong></td>
			<td align="center">8-pin header<br/>UART / I²C / GPIO</td>
			<td align="center">8-pin header<br/>UART / I²C / GPIO</td>
			<td align="center">Pin header<br/>UART / I²C / GPIO</td>
			<td align="center">2 × 4 header<br/>UART / I²C / GPIO / ADC</td>
		</tr>
		<tr>
			<td align="center"><strong>Certifications</strong></td>
			<td align="center">FCC / CE / TELEC<br/>PSE / RoHS / UKCA</td>
			<td align="center">FCC / CE / TELEC<br/>PSE / RoHS / UKCA</td>
			<td align="center">FCC / CE</td>
			<td align="center">FCC / CE</td>
		</tr>
		<tr>
			<td align="center"><strong>MSRP</strong></td>
			<td align="center">&#36;69.00</td>
			<td align="center">&#36;99.00</td>
			<td align="center">&#36;159.90</td>
			<td align="center">&#36;279.90</td>
		</tr>
	</table>
</div>

## How to Choose

Use the quick guide below to narrow down to one model. If multiple rows apply, the **last row that matches** is usually the right pick.

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">If your priority is…</th>
			<th align="center">Recommended Model</th>
			<th align="center">Why</th>
		</tr>
		<tr>
			<td>Lowest cost / text-heavy info board / fast partial refresh</td>
			<td align="center"><strong>E1001</strong></td>
			<td>7.5" monochrome with 4-level grayscale, partial refresh, 2–5 s refresh rate.</td>
		</tr>
		<tr>
			<td>Same form-factor as E1001 but you want vivid, full-color content</td>
			<td align="center"><strong>E1002</strong></td>
			<td>7.3" Spectra™ 6 full-color panel — gallery, recipes, kid's chore charts, retail signage. Note: full color trades partial refresh for richer visuals (~15–20 s full refresh).</td>
		</tr>
		<tr>
			<td>Touch interaction / interactive dashboards / large monochrome reader</td>
			<td align="center"><strong>E1003</strong></td>
			<td>10.3" 16-level grayscale with capacitive touch (HMI v1.1.2+) and 6-month battery.</td>
		</tr>
		<tr>
			<td>Largest, sharpest, photo-frame-grade color display</td>
			<td align="center"><strong>E1004</strong></td>
			<td>13.3" Spectra™ 6 full color, 1200×1600, 5000 mAh battery, 16 GB microSD pre-installed.</td>
		</tr>
		<tr>
			<td>Need Home Assistant / ESPHome integration today</td>
			<td align="center"><strong>E1001 / E1002 / E1003 / E1004</strong></td>
			<td>All four models support Home Assistant through ESPHome. E1003 and E1004 require ESPHome 2026.7.0 or later.</td>
		</tr>
		<tr>
			<td>Want a TRMNL E-Ink dashboard</td>
			<td align="center"><strong>E1001 / E1002 / E1003</strong></td>
			<td>All three are officially supported. E1002 currently runs in monochrome mode under TRMNL.</td>
		</tr>
		<tr>
			<td>Battery life is the single most important factor</td>
			<td align="center"><strong>E1003 / E1004</strong></td>
			<td>Up to 6-month battery life under default refresh settings.</td>
		</tr>
	</table>
</div>

## reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"3"}>reTerminal E1001 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Get One Now</font></span></strong>
  </a>
</div><br />

The reTerminal E1001 features a 7.5-inch monochrome ePaper display with 4-level grayscale capability. With its 800×480 resolution, it delivers crisp text and clear images while consuming minimal power. The monochrome display is perfect for applications where text legibility and battery life are priorities.

### Key Features

- 7.5-inch monochrome ePaper display with 4-level grayscale
- 800×480 resolution
- Ultra-low power consumption for extended battery life
- Perfect for text-heavy applications like calendars, to-do lists, and information displays

## reTerminal E1002

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1002 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Get One Now</font></span></strong>
  </a>
</div><br />

The reTerminal E1002 features a vibrant 7.3-inch full-color ePaper display with ACeP (Advanced Color ePaper) technology. This color display offers the same power efficiency benefits of ePaper technology while allowing for more visually engaging content with multiple colors, making it ideal for applications where visual distinction and aesthetic appeal are important.

### Key Features

- 7.3-inch full-color ePaper display with ACeP technology
- 800×480 resolution
- Rich color representation while maintaining low power consumption
- Perfect for gallery displays, colorful dashboards, and visually oriented applications

## reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1003 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Get One Now</font></span></strong>
  </a>
</div><br />

reTerminal E1003 is a 10.3-inch open-source monochrome ePaper display featuring 16 levels of grayscale and a high resolution of 1404×1872 pixels, with up to 6-month battery life. Touch interaction is currently supported on SenseCraft HMI firmware v1.1.2. Powered by ESP32-S3, it natively supports SenseCraft HMI no-code UI design, while Arduino, PlatformIO, and ESPHome (Home Assistant) are available for further development.

The touch-related Arduino library is planned for future open-source release, providing greater flexibility to customize panels. More updates will be shared soon. ESPHome already supports the E1003 display driver and GT911 capacitive touch — see the [ESPHome cookbooks](/reterminal_e10xx_with_esphome).

### Key Features

- 10.3-inch monochrome ePaper display with touch interaction support on HMI firmware v1.1.2
- 16-level grayscale with 1404×1872 high resolution
- Up to 6-month battery life with ultra-low power operation
- Native SenseCraft HMI support plus Arduino, PlatformIO, and ESPHome (Home Assistant) compatibility

## reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1004 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Get One Now</font></span></strong>
  </a>
</div><br />

The reTerminal E1004 features a 13.3-inch full-color ePaper display and up to 6-month battery life. Powered by ESP32-S3, it supports SenseCraft HMI for no-code dashboard creation and image uploading, while also supporting Home Assistant via ESPHome, Arduino, and ESP-IDF for advanced development workflows. ESPHome **2026.7.0 or later** is required for the E1004 display driver — see the [ESPHome cookbooks](/reterminal_e10xx_with_esphome).

### Key Features

- 13.3-inch full-color ePaper display
- Up to 6-month battery life for always-on scenarios
- ESP32-S3 platform with SenseCraft HMI no-code support
- Compatible with Home Assistant / ESPHome, Arduino, and ESP-IDF

## SenseCraft HMI — The Default No-Code Platform

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI Wiki</font></span></strong>
  </a>
</div><br />

Every reTerminal E Series device ships with **SenseCraft HMI** firmware out of the box, so you can be up and running without writing a single line of code. The web app handles login, dashboard design, and over-the-air deployment to your device:

- **AI Generator** — describe a dashboard in plain text and let the AI lay it out for you.
- **Gallery** — push images and slideshows directly to the panel for digital-frame use cases.
- **Canvas** — drag-and-drop widgets to build custom dashboards.
- **RSS / Web Content** — pull live news, weather, calendar, or any web feed onto the screen.
- **Touch interaction** — fully supported on E1003 starting from HMI firmware v1.1.2.

If you need more control than the no-code workflow gives you, every device also exposes the underlying ESP32-S3, so you can drop down to ESPHome / Home Assistant, Arduino, and the application tutorials below at any time. For a ready-made ESPHome YAML, use the [Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) ESPHome card and check the features you need.

## Applications & Tutorials

Beyond SenseCraft HMI, the reTerminal E Series integrates with several industry-standard platforms and visual UI design tools. The matrix below tells you, for each tutorial, which models it currently covers.

### Smart-home & dashboard frameworks

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tutorial</th>
			<th>What it does</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome">ESPHome — Display</a></td>
			<td>Plug the device into Home Assistant and draw simple ePaper graphics with YAML. Generate a starter YAML from the <a href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/">Firmware Hub</a> by selecting your device and features.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome_advanced">ESPHome — I/O, Battery, Touch &amp; Power</a></td>
			<td>Buttons, buzzer, onboard LED, battery monitoring, deep sleep, multi-page dashboards, and capacitive touch (E1003).</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome_rtc_sd_microphone">ESPHome — RTC, SD &amp; Microphone</a></td>
			<td>PCF8563 RTC time sync, microSD card detect, and onboard PDM microphone setup.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅ <em>(no mic)</em></td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_trmnl">Works with TRMNL</a></td>
			<td>Deploy E-Ink dashboards through the TRMNL platform.</td>
			<td align="center">✅</td>
			<td align="center">✅ <em>(mono mode)</em></td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
	</table>
</div>

### No-code / visual UI design tools

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tutorial</th>
			<th>What it does</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_squareline_vision">Work with SquareLine Vision</a></td>
			<td>Drag-and-drop LVGL UI in the browser, then export ready-to-compile code.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_eezstudio">Work with EEZ Studio</a></td>
			<td>Design HMI screens visually and deploy through Arduino IDE.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_lopaka">Work with Lopaka</a></td>
			<td>Web-based drawing tool that exports code for monochrome and color ePaper layouts.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
	</table>
</div>

### Code-based development

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tutorial</th>
			<th>What it does</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_arduino">Arduino — ePaper Display</a></td>
			<td>Render text, graphics, and images on the ePaper screen with the Seeed_GFX or GxEPD2 libraries.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_arduino_peripherals">Arduino — Onboard Peripherals</a></td>
			<td>Drive the onboard LED, buzzer, three user buttons, SHT4x sensor, battery monitor, and microSD card.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_arduino_peripherals_2">Arduino — RTC, Low Power, Audio &amp; Touch</a></td>
			<td>RTC time management, deep sleep / light sleep, I2S microphone recording, and capacitive touch drawing (E1003 only for mic &amp; touch).</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
	</table>
</div>

:::tip
Looking for the per-device getting-started instructions (unboxing, Wi-Fi setup, firmware update)? Jump to the product Wiki linked in the matrix above:
[E1001](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001) ·
[E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002) ·
[E1003](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003) ·
[E1004](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004).
:::

## Resources

- [SenseCraft HMI Documentation](https://wiki.seeedstudio.com/sensecraft_hmi_overview/)
- [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [reTerminal MIC Radio Certificate](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reTerminal_MIC_Radio_Certificate.pdf)

## FCC Notice

Any changes or modifications not expressly approved by the party responsible for compliance could void the user’s authority to operate the equipment. This device complies with Part 15 of the FCC Rules. Operation is subject to the following two conditions:

(1) this device may not cause harmful interference, and

(2) this device must accept any interference received, including interference that may cause undesired operation. This transmitter must not be co-located or operating in conjunction with any other antenna or transmitter.

Note: This equipment has been tested and found to comply with the limits for a Class B digital device, pursuant to Part 15 of the FCC Rules. These limits are designed to provide reasonable protection against harmful interference in a residential installation. This equipment generates, uses, and can radiate radio frequency energy, and if not installed and used in accordance with the instructions, may cause harmful interference to radio communications. However, there is no guarantee that interference will not occur in a particular installation. If this equipment does cause harmful interference to radio or television reception, which can be determined by turning the equipment off and on, the user is encouraged to try to correct the interference by one or more of the following measures:

– Reorient or relocate the receiving antenna.

– Increase the separation between the equipment and receiver.

– Connect the equipment into an outlet on a circuit different from that to which the receiver is connected.

– Consult the dealer or an experienced radio/TV technician for help. This device complies with FCC radiation exposure limits set forth for an uncontrolled environment. This device should be installed and operated with minimum distance 20cm between the radiator & your body.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
