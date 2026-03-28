---
description: A practical tutorial for setting up the MeshCore firmware source code environment, compiling the Tracker L1, and flashing the firmware.
title: MeshCore Source Code Development Tutorial
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_l1
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/meshcore_source_code_pratical_tutorial_l1/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

### Necessary Tool

Before you begin, prepare the following tools:

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python 3](https://www.python.org/downloads/)
3. [VS Code](https://code.visualstudio.com/)

### Install PlatformIO

Search for `PlatformIO` in the VS Code Extensions marketplace and install it.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

After installation, an ant-shaped icon usually appears in the left toolbar.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### Project Preparation

Open a folder you want your project in. Open the folder in terminal. [Click here](https://github.com/meshcore-dev/MeshCore) to git clone the project.

Open VSCode, then click platform IO icon, choose `select a folder`. Choose the folder you cloned the project with.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO will automatically install the necessary dependencies. After the installation succeed, you can see `Project has been successfully updated`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png)

## Firmware Development

### Development Torial

Find the environment for your target board. Take Solar node repeater as example:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/BoardSelection.png)

Tnen PtformmlIO will prepare the required dependencies for the board.

Change your code. It is recommended to change the `variant.h` file for your board.

After copleting the coding, run the following command to copiling the code and change to uf2 file.

``` bash
pio run -e SenseCap_Solar_repeater
pio run -e SenseCap_Solar_repeater -t create_uf2
```

Then double click the RST button to enter DFU mode. Drag the uf2 file into the pop-out disk.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/Dragin.png)

### Example

#### User Light Control

This example shows how to write a blinking loop for the user light. Copy the following code to `/examples/simple_repeater/main.cpp`

``` python
#endif
#ifdef LED_WHITE
static void updateUserLightBlink() {
  static unsigned long lastLedPhaseChangeAt = 0;
  static bool lightIsOn = true;

  const unsigned long now = millis();
  if ((unsigned long)(now - lastLedPhaseChangeAt) >= 5000) {
    lightIsOn = !lightIsOn;
    lastLedPhaseChangeAt = now;
  }

  digitalWrite(LED_WHITE, lightIsOn ? LED_STATE_ON : !LED_STATE_ON);
}
```

and write the loop:

``` python
#ifdef LED_WHITE
  updateUserLightBlink();
#endif
```

Copiling it and flash the uf2 file to your solar node.