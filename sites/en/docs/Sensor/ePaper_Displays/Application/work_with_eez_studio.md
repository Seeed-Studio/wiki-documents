---
description: Design professional LVGL-based interfaces for Seeed ePaper products with EEZ Studio, then deploy them with PlatformIO - works across the reTerminal E Series and the XIAO ePaper Display Board (EE04).
title: Work with EEZ Studio
keywords:
  - ePaper display
  - EEZ Studio
  - LVGL
  - reTerminal
  - EE04
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 8
last_update:
  date: 06/26/2026
  author: dimo
aliases:
  - /epaper_ee04_eezstudio
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/reterminal_e10xx_with_eezstudio/
updatedAt: '2026-06-26'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with EEZ Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

This guide walks you through designing a professional user interface with the visual design tool [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/), generating LVGL code, and deploying it to a Seeed ePaper product with PlatformIO. The flow is the same for every supported board — the only differences are display resolution and the board environment, which we surface in tabs.

## Compatible Hardware

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001 / E1002 / E1003 / E1004</th>
      <th>XIAO ePaper Display Board (ESP32-S3) – EE04</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" mono / 7.3" Spectra 6 / 10.3" mono / 13.3" Spectra 6</td>
      <td align="center">Universal driver — pair with any of our 24-pin or 50-pin Seeed ePaper screens</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## What is EEZ Studio?

EEZ Studio is a modern visual programming and UI design environment originally built for test & measurement instruments and embedded devices. It combines drag-and-drop GUI design, scripting, and device integration tools, allowing developers, engineers, and makers to quickly create professional interfaces without starting from scratch.

In short, EEZ Studio acts as a bridge between hardware and software, enabling you to design, prototype, and deploy user experiences more efficiently.

### Why use EEZ Studio?

- **Visual interface design** — create complex UIs with a WYSIWYG editor.
- **Rapid prototyping** — quickly test and validate design ideas.
- **Cross-platform** — build apps that run on multiple OSs and embedded targets.
- **Hardware integration** — directly connect lab instruments, IoT devices, and custom boards.
- **Open source** — community-driven toolset with optional premium support.

### EEZ Studio vs. SquareLine Studio

Both are GUI design tools but they target slightly different audiences:

<table>
    <thead>
        <tr><th>Aspect</th><th>EEZ Studio</th><th>SquareLine Studio</th></tr>
    </thead>
    <tbody>
        <tr>
            <th>Primary purpose</th>
            <td>Test & measurement instruments, embedded systems, hardware/software integration</td>
            <td>Embedded GUIs, especially with LVGL</td>
        </tr>
        <tr>
            <th>Target users</th>
            <td>Engineers, product developers, makers, lab/test instrument designers</td>
            <td>Embedded UI developers, hobbyists, IoT product designers</td>
        </tr>
        <tr>
            <th>Hardware integration</th>
            <td>Direct integration with instruments, measurement devices, automation</td>
            <td>UI generation focused, less external device integration</td>
        </tr>
        <tr>
            <th>Open source</th>
            <td>Community-driven, transparent, extensible (premium support available)</td>
            <td>Closed-source, commercial product with licensing</td>
        </tr>
        <tr>
            <th>Workflow</th>
            <td>Prototype, simulate, and control real devices from one environment</td>
            <td>Primarily generates UI code to be compiled into an embedded project</td>
        </tr>
    </tbody>
</table>

## Step 1: Install EEZ Studio

Download EEZ Studio for your operating system from [the official site](https://www.envox.eu/studio/studio-introduction/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/30.png" style={{width:1000, height:'auto'}}/></div>

## Step 2: Create an LVGL Project

At the top of the EEZ Studio interface, click **CREATE**. Select the **LVGL** template on the left:

- **Name** — give your project a name (we'll use `EEZ_UI` in this article).
- **LVGL Version** — pick `9.5.0` from the dropdown.
- **Location** — choose where to save the project files.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/31.png" style={{width:1000, height:'auto'}}/></div>

### Project Settings

Click the ⚙️ icon on the toolbar to open Project Settings.

Under **General → Display**, set the resolution **for your hardware**:

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- **Display width**: 800
- **Display height**: 480

(7.5" mono on E1001 and 7.3" Spectra 6 on E1002 share the same 800×480 resolution.)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/32.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="e1003" label="reTerminal E1003">

- **Display width**: 1872
- **Display height**: 1404

(The 10.3" mono panel on E1003 uses a 1872×1404 resolution.)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/36.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="e1004" label="reTerminal E1004">

- **Display width**: 1200
- **Display height**: 1600

(The 13.3" Spectra 6 panel on E1004 uses a 1200×1600 resolution.)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/37.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- **Display width**: 648
- **Display height**: 480

(Match the values to whichever Seeed ePaper screen you have plugged into the EE04. The example below uses the 5.83" 648×480 monochrome screen.)

</TabItem>
</Tabs>

## Step 3: Design the UI

UI design directly determines the user experience. EEZ Studio lets you rapidly assemble interfaces by dragging and dropping components and using **Styles**, **Fonts**, **Bitmaps**, **Themes**, and **Groups** to control the visual result.

Recommended online resources:

- [Coolors](https://coolors.co/) — color palette generator
- [PeisekA](https://peiseka.com/) — color chart
- [iconfont](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl) — icon library
- [Google Fonts](https://fonts.google.com/) — free fonts

The right-hand sidebar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/33.png" style={{width:1000, height:'auto'}}/></div>

- **Styles** — visual attributes for unifying and reusing interface elements.
- **Bitmaps** — backgrounds, icons, logos.
- **Fonts** — text rendering and multilingual support.
- **Themes** — light/dark and other top-level styles.
- **Groups** — layout helpers.

### Example layout (Hello World + Panel + Image + Line + Label)

For this tutorial we'll build a simple homepage from five components:

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

**Step 1.** Change the canvas background colour — select the canvas, check **Color**, pick a hex value.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

**Step 2.** Drag a **Panel** onto the canvas, adjust its width/height, and pick a colour.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

**Step 3.** Add bitmaps via the right-hand **Bitmaps** panel, name them, then drag the **Image** widget to the canvas and bind your bitmap.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

**Step 4.** Add a **Line** from the Visualiser group and configure its **Points**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

**Step 5.** Add a **Label**, pick the colour, then add fonts via the right-hand **Fonts** panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

## Step 4: Generate Code

After the design is complete:

1. **Save** — press Control + S to save. If you are on macOS, press Command + S to save.
2. **Preview** — click **Run** to launch the simulator and preview the UI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/35.png" style={{width:600, height:'auto'}}/></div>

3. **Compile / Build** — click the ✓ icon to check for errors, then the wrench icon to generate UI code, image data, and font data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/34.png" style={{width:600, height:'auto'}}/></div>

A green **Build successful** message confirms code generation. The output goes to the **`src/ui`** folder of your project (you can rename it to `src/EEZ_UI` if you prefer).

## Step 5: Set up PlatformIO

Deploy the EEZ Studio output with PlatformIO. PlatformIO provides the project structure, board environment, library dependencies, and build settings needed for Seeed ePaper products.

If this is your first time using PlatformIO with Seeed ePaper products, follow the setup guide linked below to configure your development environment.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/epaper_work_with_platformio/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}>PlatformIO Guide</font></span></strong>
    </a>
</div><br />

:::tip
The PlatformIO setup guide covers board definitions, library dependencies, and build configuration — once complete, return here to continue.
:::

## Step 6: Download the EEZ Studio PlatformIO Template

Open the reTerminal E-Series Firmware Hub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Open Firmware Hub</font></span></strong>
    </a>
</div><br />

On the Firmware Hub page:

1. Under **Official Platforms**, find the **EEZ Studio** card and click it to expand.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/38.png" style={{width:800, height:'auto'}}/></div>

2. Select your device — **E1001**, **E1002**, **E1003**, or **E1004**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/39.png" style={{width:800, height:'auto'}}/></div>

3. The page displays a step-by-step usage guide for the template. Click the **Download project template** button to get the PlatformIO project ZIP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/40.png" style={{width:800, height:'auto'}}/></div>

## Step 7: Deploy the EEZ Studio Project

After downloading the template, replace the template UI with the files generated by EEZ Studio.

1. Unzip the downloaded template.
2. Open the unzipped project folder in VS Code with the PlatformIO extension installed.
3. Navigate to the `src/ui` directory inside the template project.
4. Replace all files in `src/ui` with the files exported by EEZ Studio in Step 4.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/41.png" style={{width:800, height:'auto'}}/></div>

5. In the PlatformIO toolbar, select the correct environment for your board.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/42.png" style={{width:1000, height:'auto'}}/></div>

6. Click **Build** to compile, then **Upload** to flash the firmware to your device.

:::tip
The template already includes all necessary drivers and LVGL configuration for your device. You only need to replace the UI files.
:::

### Resulting screens

<div class="table-center">
  <table align="center">
    <tr>
      <th>Home Page</th>
      <th>Workstation Page</th>
      <th>Photo Page</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez02.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez01.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## Reference & Resources

- [EEZ Studio PlatformIO Template & Source Code](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/EEZStudio)

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
