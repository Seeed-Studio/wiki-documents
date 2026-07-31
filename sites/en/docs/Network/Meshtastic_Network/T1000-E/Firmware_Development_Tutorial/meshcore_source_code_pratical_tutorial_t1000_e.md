---
description: A practical tutorial for setting up the MeshCore firmware source code environment, compiling the T1000-E, and flashing the firmware.
title: MeshCore Source Code Development Tutorial
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_t1000_e
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/meshcore_source_code_pratical_tutorial_t1000_e/
createdAt: '2026-03-27'
updatedAt: '2026-04-02'
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


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png" style={{width:800, height:'auto'}}/></div>


## Firmware Development

### Development Torial

Find the environment for your target board. Take T1000-E Bluetooth Copanion as example:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000EBoard.jpg" style={{width:800, height:'auto'}}/></div>


Tnen PtformmlIO will prepare the required dependencies for the board.

Change your code. It is recommended to change the `variant.h` file for your board.

After copleting the coding, run the following command to copiling the code and change to uf2 file.

``` bash
pio run -e t1000e_companion_radio_ble
pio run -e t1000e_companion_radio_ble -t create_uf2
```

Press and hold the device button, then quickly connect the charging cable twice, the green LED will be solid on. Drag the uf2 file into the pop-out disk. The uf2 file should be found in `.pio\build\t1000e_companion_radio_ble`

### Example

#### User Light Control

This example shows how to control the user light to be on constantly. Copy the following code to `/examples/companion_radio/ui-new/ui-orig/UITask.cpp`

``` python
void UITask::userLedHandler() {
#ifdef PIN_STATUS_LED
#ifdef T1000_E
  // T1000-E: keep status LED continuously on.
  digitalWrite(PIN_STATUS_LED, LED_STATE_ON);
  return;
#endif
  static int state = 0;
  static int next_change = 0;
  static int last_increment = 0;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000ELight.jpg" style={{width:900, height:'auto'}}/></div>


Copiling it and flash the uf2 file to your T1000-E.

## (Advanced) Pr Submitting

Thanks for considering contributing to MeshCore project! How Can you Contribute?
**1. Reporting Bugs**

- Use the Issues tracker
- Use a clear title (e.g. "Crash when calling begin() with invalid pin")
- Describe the exact steps to reproduce
- Include your board, IDE version, library version and relevant code snippet
- Attach minimal complete example sketch if possible

**2. Suggesting Enhancements / New Features**
- Open an issue with the prefix [Feature request]
- Explain the use-case → what problem would this solve?
- Describe your ideal API / behavior (code examples are very helpful)
**3. Submitting Code Changes (Pull Requests)**
### Small fixes 
(typos, comments, examples, small bug fixes)
→ Just open a pull request — no prior issue needed

### Larger changes / new features
1. Open an issue first to discuss the idea
2. Get a rough 👍 from maintainer(s)
3. Fork the repo from 'dev' branch and create your branch (fix/xxx, feature/yyy, docs/whatever)
4. Make your changes
5. Update or add examples when appropriate
6. Add/update comments in code
7. Submit the pull request

### Pull Request Guidelines
- One feature / fix = one pull request (smaller PRs are easier & faster to review)
- Use descriptive commit messages
  Good: Fix I2C timeout handling on ESP32
  Bad: update
- Reference any related issue (Fixes #123, Closes #89, etc.)
- If you change public API, update README.md and library.properties
- New features should include an example sketch in examples/
### Coding Style
PLease follow the existing C++ style (per the .clang-format)

- 2 spaces indentation (no tabs)
- camelCase for functions and variables
- UpperCamelCase / PascalCase for class names
- #define constants in ALL_CAPS
- Keep lines < ~100 characters when reasonable
(But consistency with existing code is more important than strict rules)

## Tech Support & Product Discussion

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>