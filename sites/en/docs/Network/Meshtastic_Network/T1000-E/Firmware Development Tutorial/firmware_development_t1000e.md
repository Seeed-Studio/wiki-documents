---
description: A practical tutorial for setting up the Meshtastic firmware source code environment, compiling the t1000_e, and flashing the firmware.
title: Meshtastic Source Code Development Tutorial
keywords:
  - Meshtastic
  - Source Code
  - PlatformIO
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial_t1000_e
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/meshtastic_source_code_practical_tutorial_t1000_e/
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Meshtastic Firmware Source Code Practical Tutorial

This tutorial is intended for users who are just getting started with the Meshtastic firmware source code. It includes common workflows for both Windows and macOS. The goal is straightforward: clone the official repository, complete a successful build, make one simple UI change, and flash the modified firmware to the device for verification.

If you are already familiar with Git, Python, or PlatformIO, you can skip the corresponding sections and jump directly to the hands-on part.

:::tip
This guide includes common commands for both Windows and macOS. Most screenshots are still taken from a Windows environment, but the overall workflow on macOS is very similar.
:::

## Prerequisites

Before you begin, prepare the following tools:

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. Install Git

<Tabs>
<TabItem value="windows" label="Windows">

Open the official Git for Windows download page:

[Git for Windows](https://git-scm.com/install/windows)

The installer usually starts downloading automatically when you open the page. After the download is complete, double-click the installer and follow the setup wizard.

During installation, the most important step is **Adjusting your PATH environment**. Choose:

**Git from the command line and also from 3rd-party software**

For the other options, the default values are usually fine. Just keep clicking `Next`.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

Wait until the installation finishes.

After installation, **close all current PowerShell and VS Code terminal windows**, then open a new PowerShell window and run:

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

If a Git version number is displayed, Git has been installed successfully.

**If the `git` command is still unavailable**

You can first run the following commands in PowerShell to confirm the default Git installation paths:

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

Then manually add Git to the system environment variables.

**GUI fix steps**

1. Press `Win`
2. Search for "Edit the system environment variables"
3. Open it and click **Environment Variables**
4. Find `Path` under **System variables**
5. Click **Edit**
6. Click **New** and add the following two paths:

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. Click **OK** all the way to save

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

After saving, you still need to:

- Close **all** PowerShell windows
- Open PowerShell again

Then run:

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

If a version number appears, the installation is complete.

</TabItem>

<TabItem value="macos" label="macOS">

On macOS, Git can be installed in more than one way, but using Homebrew is usually the easiest option:

1. Install the Command Line Tools first:

```bash
xcode-select --install
```

2. If Homebrew is not installed yet, install it first:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Install Git:

```bash
brew install git
```

4. Check the installed version:

```bash
git --version
```

If your terminal already returns a valid Git version, you do not need to install it again.

</TabItem>
</Tabs>

**Configure your Git identity**

Next, configure your Git user information. Replace the example values with your own name and email address:

```plain
git config --global user.name "your name"
git config --global user.email "your mail@gmail.com"
```

Then run:

```plain
git config --global --list
```

to confirm the configuration has taken effect.

### 2. Install Python 3

**Install Python from the command line**

<Tabs>
<TabItem value="windows" label="Windows">

Run the following commands in the terminal:

```plain
winget search --id Python.Python.3.13 --source winget
winget install -e --id Python.Python.3.13 --source winget
```

If the first command can find Python, the second one should normally install it directly.

After installation, close the terminal and open it again, then run:

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

If version numbers are shown, Python and pip are ready to use.

</TabItem>

<TabItem value="macos" label="macOS">

macOS often already includes a Python environment. Before installing a new version, check whether `python3` and `pip3` are already available:

```bash
python3 --version
pip3 --version
```

If they are not available, or if you want a newer version, install Python with Homebrew:

```bash
brew install python
```

After installation, reopen the terminal and run:

```bash
python3 --version
pip3 --version
```

If you prefer using `python` and `pip`, you can set shell aliases yourself. On macOS, however, using `python3` and `pip3` is usually the more reliable choice.

</TabItem>
</Tabs>

### 3. Install PlatformIO

This step may feel less beginner-friendly because PlatformIO downloads many dependencies automatically, and the installation can take some time. If errors appear during installation, it is usually best to wait patiently and troubleshoot one issue at a time. Using AI tools to help inspect the error messages can also save time.

Search for `PlatformIO` in the VS Code Extensions marketplace and install it.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

After installation, an ant-shaped icon usually appears in the left toolbar.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. Clone the Meshtastic firmware repository

The official Meshtastic firmware repository is `meshtastic/firmware`.

<Tabs>
<TabItem value="windows" label="Windows">

Run the following commands in your working directory terminal:

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

If your project directory is on a different drive or under a different path, switch to that location first.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

If the output looks similar to the screenshots above, the repository has been cloned successfully.

</TabItem>

<TabItem value="macos" label="macOS">

Run the following commands in your working directory terminal:

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

If `~/workplace` does not exist yet, create it first:

```bash
mkdir -p ~/workplace
```

If the commands complete normally, the repository has been cloned successfully.

</TabItem>
</Tabs>

### 5. Hands-on practice

At this stage, do not rush into editing the code. First, make sure the project can run through the complete build process successfully.

It is recommended to start with three tasks:

1. Open `firmware`
2. Check `platformio.ini`
3. Find the build environment for your target board

One important detail: do not focus only on the root `platformio.ini`. It actually includes additional configuration files, for example:

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

That means the real board-level environment definitions are usually located under `variants/.../platformio.ini`.

When identifying the target board, pay special attention to these two directories:

- `variants/`
- `boards/`

Here we use **Wio Tracker L1 Pro** as the example target.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

This shows that, in Meshtastic, **the build target for Wio Tracker L1 / L1 Pro is** `seeed_wio_tracker_L1`.

**Minimal modification summary**

If you only want to complete one minimal end-to-end practice run, focus on these key steps:

1. Install Git, Python 3, VS Code, and PlatformIO.
2. Clone the `meshtastic/firmware` repository and initialize the submodules.
3. Use `pio run -e seeed_wio_tracker_L1` to confirm the original project builds successfully.
4. Modify the display logic in `src/graphics/SharedUIDisplay.cpp`.
5. Rebuild the firmware and flash the generated UF2 file to the device for verification.

**Step 1: Confirm that the project builds successfully**

Here we use the PlatformIO Core CLI for building.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

For the first build, it is recommended to run the following command:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image13.png)

If the interface looks similar to the screenshot above, the build process has started correctly. The first build often takes a while, so be patient.

**If the build fails**

When a build fails, you can first ask PlatformIO to install the dependencies required by the current environment:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio pkg install -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio pkg install -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

This approach has several benefits:

- It installs dependencies only, without immediately starting a full build.
- It makes it easier to see which package is causing the problem.
- The error messages are usually more focused and easier to troubleshoot.

After the dependencies are installed, run:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio run -e seeed_wio_tracker_L1 -v
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio run -e seeed_wio_tracker_L1 -v
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image14.png)

Once dependency installation is complete, run the normal build again:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image15.png)

If the build passes at this point, your firmware output has been generated successfully.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**Step 2: Modify the code**

**Practice 1: Modify the UI display**

Start by tracing the display implementation from the board-level configuration. You can first check:

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

From these configuration files, you can see that L1 defines `HAS_SCREEN` and `USE_SSD1306`. That means it uses the standard OLED display pipeline, not a screenless configuration and not an E-Ink solution.

If you continue tracing the display logic, most of the related code is located under:

- `src/graphics/`
- `src/graphics/draw/`

Exactly how you modify it depends on your ability to read the source code. Here we start with a very simple example: modifying the home screen UI.

**Change 1: Record the right edge of the battery text**

```cpp
Before / After

// Before
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;

// After
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;
int batteryTextEndX = batteryX - 1;
```

`src/graphics/SharedUIDisplay.cpp:157`

This adds `batteryTextEndX`, which records the end position of the battery percentage text. That makes it easier to append custom text after the battery information later.

**Change 2: Calculate the right boundary while drawing the battery percentage**

```cpp
// Before
if (chargePercent != 101) {
    char chargeStr[4];
    snprintf(chargeStr, sizeof(chargeStr), "%d", chargePercent);
    int chargeNumWidth = display->getStringWidth(chargeStr);
    display->drawString(batteryX, textY, chargeStr);
    display->drawString(batteryX + chargeNumWidth - 1, textY, "%");
    if (isBold) {
        display->drawString(batteryX + 1, textY, chargeStr);
        display->drawString(batteryX + chargeNumWidth, textY, "%");
    }
}

// After
if (chargePercent != 101) {
    char chargeStr[4];
    snprintf(chargeStr, sizeof(chargeStr), "%d", chargePercent);
    int chargeNumWidth = display->getStringWidth(chargeStr);
    int percentWidth = display->getStringWidth("%");
    display->drawString(batteryX, textY, chargeStr);
    display->drawString(batteryX + chargeNumWidth - 1, textY, "%");
    if (isBold) {
        display->drawString(batteryX + 1, textY, chargeStr);
        display->drawString(batteryX + chargeNumWidth, textY, "%");
    }
    batteryTextEndX = batteryX + chargeNumWidth + percentWidth - 1 + (isBold ? 1 : 0);
} else {
    batteryTextEndX = batteryX - 1;
}
```

`src/graphics/SharedUIDisplay.cpp:204`

This code sits inside the battery percentage drawing logic. In addition to displaying the battery level normally, it also calculates the right boundary of the text area so that custom labels can be placed after the battery information.

**Change 3: Reserve a boundary for the icon area on the right**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

This part handles the area used by the time, mail, mute, and other icons on the right side. I added `headerLabelRight` to limit the maximum right boundary of the center text and prevent overlap with the right-side content.

**Change 4: Draw a custom label when the title is empty**

```cpp
// Newly added core logic
#if defined(SEEED_WIO_TRACKER_L1) && !defined(SEEED_WIO_TRACKER_L1_EINK)
if (titleStr && titleStr[0] == '\0') {
    static const char *yclLabel = "made by AE";
    int labelWidth = display->getStringWidth(yclLabel);
    int labelLeft = batteryTextEndX + 4;
    if (labelLeft + labelWidth <= headerLabelRight) {
        int labelX = labelLeft + ((headerLabelRight - labelLeft) - labelWidth) / 2;
        display->drawString(labelX, textY, yclLabel);
        if (isBold)
            display->drawString(labelX + 1, textY, yclLabel);
    }
}
#endif
```

`src/graphics/SharedUIDisplay.cpp:350`

This is the core logic of the modification. It only applies to `SEEED_WIO_TRACKER_L1` and explicitly excludes the E-Ink variant. It centers the text `made by AE` in the blank space between the battery information and the time display.

**Change 5: Handle the branch where no time is displayed**

```cpp
// Add the same boundary control for the no-time branch
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;
```

`src/graphics/SharedUIDisplay.cpp:377`

This is the branch used when no time value is displayed. The same boundary control needs to be added here as well.

```cpp
#if defined(SEEED_WIO_TRACKER_L1) && !defined(SEEED_WIO_TRACKER_L1_EINK)
        if (titleStr && titleStr[0] == '\0') {
            static const char *yclLabel = "made by AE";
            int labelWidth = display->getStringWidth(yclLabel);
            int labelLeft = batteryTextEndX + 4;
            if (labelLeft + labelWidth <= headerLabelRight) {
                int labelX = labelLeft + ((headerLabelRight - labelLeft) - labelWidth) / 2;
                display->drawString(labelX, textY, yclLabel);
                if (isBold)
                    display->drawString(labelX + 1, textY, yclLabel);
            }
        }
#endif
```

`src/graphics/SharedUIDisplay.cpp:426`

This is the implementation for drawing `made by AE` in the no-time branch.

You can find the complete code here:

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**Step 3: Build your own firmware**

After finishing the modification, return to the project root and build the same target again:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

The display logic has changed, but the build target is still the same:

```plain
seeed_wio_tracker_L1
```

After a successful build, the output is usually located in:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
D:\workplace\firmware\.pio\build\seeed_wio_tracker_L1\
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
~/workplace/firmware/.pio/build/seeed_wio_tracker_L1/
```

</TabItem>
</Tabs>

The file you should confirm has been updated is:

```plain
firmware-seeed_wio_tracker_L1-*.uf2
```

### 6. Flash the firmware

After the build is complete, open the official flashing page:

[Meshtastic Flasher](https://flasher.meshtastic.org/)

In most cases, you should perform an erase operation first.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

Then select the firmware file you just built and flash it to the device.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

At this point, the practical Meshtastic source code exercise is complete. You have gone through the full workflow: environment setup, repository cloning, board configuration discovery, firmware compilation, display logic modification, and final flashing verification.

If you want to go further, you can continue exploring these directions:

1. Modify more elements on the home screen
2. Adjust the behavior of buttons, GPS, Bluetooth, and other modules
3. Add an independent `variant` for your own board
4. Continue tracing the relationships between `src/`, `variants/`, and `boards/`

## Common issues

**The `git` command is unavailable**

- On Windows, first check whether Git has been added to `PATH`.
- On macOS, run `git --version` first. If the system asks you to install the Command Line Tools, follow the prompt.

**`python3` or `pip3` is unavailable**

- On Windows, confirm that Python was added to `PATH`, or reopen the terminal and try again.
- On macOS, first check whether `python3` / `pip3` already exists, and install Python with Homebrew only if needed.

**The `pio` command is unavailable**

- Run `pio --version` first.
- If the command is still unavailable, restart VS Code and the terminal, then try again.
- If necessary, reinstall the PlatformIO extension and confirm that PlatformIO Core has been initialized correctly.

**The code still looks incomplete after `git submodule update --init`**

- First make sure you are in the root directory of the `firmware` repository.
- If the network connection is unstable, try again with:

```bash
git submodule update --init --recursive
```

**The first build takes too long**

- It is normal for the first build to download many dependencies.
- If it seems stuck for too long, try installing the packages separately first:

```bash
pio pkg install -e seeed_wio_tracker_L1
```

Then run the build again.
