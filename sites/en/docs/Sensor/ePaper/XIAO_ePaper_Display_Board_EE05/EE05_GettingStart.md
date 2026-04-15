---
description: Getting Started with XIAO ePaper Display Board(ESP32-S3) - EE05
sku: TBD
title: Getting Started with XIAO ePaper Display Board(ESP32-S3) - EE05
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/Epaper/EE05/4.jpg
slug: /epaper_ee05
last_update:
  date: 04/07/2026
  author: Jackson.Li
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/epaper_ee05/
updatedAt: '2026-04-10'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Getting Started with XIAO ePaper Display EE05

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/4.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=EE05" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introduction

Powered by **XIAO ESP32-S3 Plus**, the display board EE05 is a compact ePaper driver board supporting 24-Pin ePaper displays. It features a JST 2.0 mm battery connector with a power switch, built-in battery level detection circuitry, and comes with one reset button and three user-programmable buttons. Well-suited for low-power ePaper projects such as digital signage, electronic labels, and portable information boards.

### Features

- **Powered by XIAO ESP32-S3 Plus:** Works immediately when connected to a compatible ePaper display.
- **Versatile Display Support:** Compatible with a wide range of ePaper screens, natively supporting 24-Pin SPI interfaces.
- **BAT Connector with Switch:** Provides a simple battery connection and integrates a hardware slide switch, enabling efficient power management and energy savings. Added additional circuitry for XIAO ESP32 battery level detection.
- **User-Friendly Buttons:** Includes 1 side-mounted reset button and 3 user-programmable buttons, offering flexibility for customizable functions (e.g., wake up / previous page / next page).
- **Low Power Design:** Effectively controls or shuts down peripheral power consumption during MCU sleep.

### Specifications

| Parameter | Description |
|---|---|
| **Processor** | XIAO ESP32-S3 Plus |
| **ePaper Connector** | SPI FPC 24-Pin 0.5mm |
| **Battery Connector** | JST 2.0mm |
| **Switch** | Hardware power slide switch |
| **Power Supply** | 3.7V Li-Battery / USB Type-C |
| Button | 1x Reset button (side-mounted) <br/> 3x User button (side-mounted) |

## Hardware Overview

### Supported ePaper Displays

The EE05 supports a variety of 24-Pin SPI ePaper displays, including but not limited to:

- [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch Monochrome ePaper Display with 800x480 Pixels](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)



## Software Overview

### Install Seeed GFX Library

:::tip
This library has the same function as the TFT library and is not compatible with it. If you have installed the TFT library or other similar display libraries, please uninstall them first.
:::

Download and install the Seeed GFX library from GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

Scroll down and open this link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Select your device type and it will generate some code. Copy those code and we will use them later.

:::tip
If you make the wrong choice, the screen will display nothing.

So please make sure you select the correct device or component type.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/1.jpg" style={{width:800, height:'auto'}}/></div>

After downloading the library, go to **Sketch** -> **Include Library** -> **Add .ZIP Library** and select the downloaded library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## Getting Started

Here, we use a 7.5-inch monochrome display as an example. The steps are identical for other supported screens; you simply need to select the appropriate screen size identifier in the driver.

### Configure and burn the program
Select the example shown in the figure

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

Create a new "driver.h" file and paste those code into it. The code should be like:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE05
```

After that, go to **Tools** -> **Board** -> **XIAO ESP32S3** and **Tools** -> **Port** -> **Select the port your board is connected to**.


Note that PSRAM must be enabled.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

Then click **Upload** to upload the code.
Now you will see the feedback in your epaper screen! Following are the results of Bitmap examples.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_3.jpg" style={{width:500, height:'auto'}}/></div>

## Resources

- **[PDF]** [XIAO ePaper Display Board Ex05 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)

## Troubleshooting

**Q1: The screen does not display anything after uploading the code.**
- **Check the FPC Cable**: Ensure the ePaper FPC cable is inserted in the correct orientation and is securely locked in the connector.
- **Verify the Driver Configuration**: Double-check `driver.h` to make sure the correct `BOARD_SCREEN_COMBO` is selected for your specific screen size.

**Q2: The colors are inverted or the display shows abnormal patterns.**
- **Select the Exact Model**: Different screen sizes or IC revisions require specific driver configurations. Ensure the combo number perfectly matches your screen model.
- **Check Power Supply**: For larger screens (like 7.5-inch), ensure your power source can provide adequate current during screen refresh.

**Q3: The board doesn't power on when connected to a battery.**
- **Hardware Switch**: Verify that the hardware slide switch on the board is toggled to the ON position.
- **Battery Connection**: Check the JST 2.0mm connector polarity to ensure it matches the board's design.

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
