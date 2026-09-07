---
description: SD Card Tutorial for Wio Tracker L2 Series. Including formatting, map generating and map installation
title: SD Card Usage
keywords:
  - Meshtastic
  - Wio Tracker L2
  - MUI
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /l2_sd_card
sku: 100029766
sidebar_position: 1
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/l2_sd_card/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Offline maps allow **Wio Tracker L2** to display map tiles locally without an Internet connection. It is useful when operating in remote areas or locations with limited network coverage.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={600} height="auto" /></p>

## Prerequisites

Prepare the following items before getting started.

### Hardware

- Wio Tracker L2
- microSD card (Capacity: **8 GB–32 GB**, File system: **FAT32**)
- Computer
- microSD card reader

### Software

- Meshtastic firmware
- Offline map package

:::tip

If MUI has not been installed on your device, please complete the firmware installation first.

:::

## Prepare the microSD Card

### Step 1. Format the microSD Card

[Click here](https://www.sdcard.org/downloads/formatter/) to download the formatter:

After installing the software:

1. Insert the microSD card into your card reader.
2. Launch **SD Memory Card Formatter**.
3. Select your microSD card.
4. Choose `Quick format`
5. Click **Format**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardFormat.png" alt="pir" width={400} height="auto" /></p>

The card is now ready for storing offline maps.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FormatSucceed.png" alt="pir" width={400} height="auto" /></p>

:::warning

Formatting permanently deletes all data on the microSD card. Back up any important files before proceeding.

:::
### Step2. Create the Directory Structure
For MUI to recognize your maps, they must be placed in a specific folder hierarchy on the root of your SD card:
1. Create a folder named maps (lowercase).
2. Inside maps, create a subfolder for the style, such as CartoDark.
3. The final path should look like: SD_ROOT/maps/CartoDark/


###  Step3. Download the Offline Map

[Click here](https://github.com/meshtastic/device-ui/tree/master/maps) to download the offline map package from the official download page. 

The downloaded package contains all required map data for MUI. `atlas.zip`, `dark-matter-brown.zip`, `osm.zip`, `positron.zip`are four different types of map file packages. You can choose one or more of your favorites to download.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Downloadmap.png" alt="pir" width={400} height="auto" /></p>

###  Step 4. Copy the Map Files

1. Open the microSD card.
2. Extract the downloaded ZIP package into the `maps` folder

The directory should look like this:

```text
microSD
└── maps
    ├── atlas
        └── 0
        └── ...
        └── 8
    ├── dark-matter-brown
    └── osm
```

:::note

Do not rename the **maps** folder unless otherwise instructed.

:::

Safely eject the microSD card after the copy process is complete. Then you can insert the card to L2 and check the map.