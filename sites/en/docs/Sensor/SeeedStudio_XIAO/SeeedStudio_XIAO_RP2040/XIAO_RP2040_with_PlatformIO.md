---
description: Seeed Studio XIAO RP2040 with PlatformIO
title: XIAO RP2040 with PlatformIO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.webp
slug: /xiao_rp2040_with_platform_io
last_update:
  date: 04/08/2025
  author: Hugo
createdAt: '2024-08-27'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/xiao_rp2040_with_platform_io/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.jpg" /></div>

## PlatformIO Introduce

PlatformIO is a development platform that integrates many types of development boards and has good scalability. If the platform does not have the type you need, you can manually add the type of development board yourself. The code you write on Arduino can use it, just add the corresponding library.

In this wiki, we wiil introduce how to install and run the sample code in PlatformIO.

## Use PlatformIO For XIAO RP2040

### Setup 1 . SteDownload VS Code

Download according to the system you are using [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Setup 2 . Install the PlatformIO extension

Open VSCode, click on Extensions, then search for PlatformIO and select to install. After the installation is complete, restart VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### Setup 3 . Install the platform-seeedboards platform package

The Seeed Studio XIAO series boards use a custom PlatformIO platform, so you need to install the corresponding platform package manually.

- Run the following command for a fresh installation:

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- If you have previously used Seeed Studio XIAO series boards in PlatformIO, run the command below to update:


```bash
pio pkg uninstall -g -p "SeeedStudio"
pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```

:::tip

Alternatively, you can perform replacements based on existing projects.

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
```

:::

### Setup 4 . Create any project in PlatformIO

Open the PlatformIO extension and select Create New Project.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/pio_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

### Setup 4 . Compile and Burn

Copy the following program into `main.c` and upload it to the board.

```cpp
#include <Arduino.h>

void setup() {
    pinMode(PIN_LED, OUTPUT);
}

void loop() {
    digitalWrite(PIN_LED, HIGH);
    delay(1000);
    digitalWrite(PIN_LED, LOW);
    delay(1000);
}
```
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/pio_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

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