---
description: Create a doc page with rich content.
title: DAPLink Debugger
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_debug_mate_debug
sidebar_position: 2
last_update:
  date: 10/22/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Welcome to the official user manual for the XIAO Debug Mate’s DAPLink functionality. This comprehensive guide is designed to help both beginners and advanced users unlock the full potential of their XIAO Debug Mate for professional debugging tasks. Here, you will learn how to connect, configure, and operate the DAPLink debugger, understand essential software tools, and follow best practices to ensure a smooth and productive debugging experience with a wide range of XIAO series development boards. Whether you are troubleshooting complex firmware or streamlining your development workflow, this document provides clear step-by-step instructions, tips, and in-depth technical explanations to support your projects from start to finish.


## An Explanation of Some Debugger Concepts

To effectively use the XIAO Debug Mate's DAPLink functionality, it's helpful to understand the key software components and protocols that work together to make debugging possible. Here’s a breakdown of each concept and how they relate to one another.

### GDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/gdb.png" style={{width:800, height:'auto'}}/></div>

**[GDB](https://www.sourceware.org/gdb/)**, the GNU Project Debugger, is the core engine of the debugging process. It is a powerful command-line tool that runs on your host computer (PC). GDB is responsible for controlling the execution of your program on the target microcontroller. It allows you to:
*   Start and stop your program.
*   Set breakpoints to pause execution at specific lines of code.
*   Step through your code line-by-line.
*   Inspect the values of variables and the contents of memory registers.

Most modern Integrated Development Environments (IDEs) like VS Code (with PlatformIO) or Eclipse provide a graphical user interface that acts as a front-end for GDB, translating your clicks into GDB commands.

### OpenOCD/PyOCD

**[OpenOCD](https://openocd.org/)** (Open On-Chip Debugger) and **[PyOCD](https://pyocd.io/)** are essential "server" applications that run on your host computer. They act as a bridge or translator between the high-level commands from GDB and the low-level signals required by the physical debug probe (in this case, the XIAO Debug Mate).

When GDB issues a command like "read the value of variable `x`," OpenOCD receives this command, translates it into a sequence of instructions that the debug probe understands, and sends these instructions to the probe over USB.

### DAPLink

**[DAPLink](https://github.com/ARMmbed/DAPLink)** is the open-source firmware running on the XIAO Debug Mate's ESP32-S3 microcontroller. This firmware turns the Debug Mate into a fully functional debug probe. Its primary job is to implement the CMSIS-DAP protocol, allowing it to receive debugging commands from a host computer via USB and physically interact with the target chip's debug pins (SWD). In essence, DAPLink is the "agent" on the device that executes the orders sent by OpenOCD.

### CMSIS-DAP

**[CMSIS-DAP](https://github.com/ARM-software/CMSIS-DAP)** (Cortex Microcontroller Software Interface Standard - Debug Access Port) is a standardized protocol that defines how a host computer communicates with a debug probe over USB. Because the XIAO Debug Mate's DAPLink firmware adheres to this standard, it is instantly compatible with a wide range of industry-standard tools like OpenOCD, PyOCD, and Keil MDK, without needing any proprietary drivers or software.

### Telnet

**Telnet** is a simple, text-based network protocol. In the context of debugging, OpenOCD often opens a Telnet server on a specific port (commonly port 4444). This provides a direct, human-readable command-line interface to the OpenOCD server itself. While GDB is used for application-level debugging, the Telnet interface is useful for advanced tasks like configuring OpenOCD, inspecting the state of the debug probe, or issuing low-level reset commands.

### How They Work Together

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/openOCDDiagram.png" style={{width:800, height:'auto'}}/></div>

Here is a summary of the entire debug chain, from your IDE to the target XIAO:

1.  **You** (in your IDE) click "Start Debugging."
2.  The **IDE** launches **GDB** with the appropriate program file.
3.  **GDB** connects to the **OpenOCD** server running on your PC.
4.  **OpenOCD** detects the **XIAO Debug Mate** connected via USB. It communicates with the device using the **CMSIS-DAP** protocol.
5.  The **DAPLink** firmware on the Debug Mate receives these CMSIS-DAP commands.
6.  **DAPLink** translates these commands into electrical signals on the **SWD** (Serial Wire Debug) pins (SWDIO and SWCLK).
7.  These SWD signals directly control the **ARM Cortex core** inside the target XIAO, allowing OpenOCD and GDB to pause the CPU, read memory, and perform all other debugging actions.

In short: **GDB** is the commander, **OpenOCD** is the translator, **CMSIS-DAP** is the language they speak, and **DAPLink** is the soldier on the ground carrying out the orders.

## Getting Started with Debugging

### Compatibility Check

The XIAO Debug Mate is designed for the entire XIAO ecosystem, but the DAPLink debug feature is specific to ARM Cortex-M cores. The UART and Power monitoring functions, however, are universally compatible as they are architecture-agnostic. Please refer to the table below for detailed compatibility information.

<div class="table-center">

<table align="center">

<tr>

<th>XIAO Model</th>

<th>Core Architecture</th>

<th>DAPLink Debug</th>

<th>UART Monitor</th>

<th>Power Analyzer</th>

</tr>

<tr>

<td>XIAO SAMD21</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2040</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2350</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF52840</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RA4M1</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO MG24</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF54L15</td>

<td>ARM Cortex-M33</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C3</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C5</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C6</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-S3</td>

<td>Xtensa LX7</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

</table>

</div>

### Software Preparation

Before you can start debugging, you need to set up your host computer with the necessary software.

#### Install Drivers

The driver requirements vary by operating system.

<Tabs>
<TabItem value="Windows" label="Windows" default>

On Windows, you will need to install a generic USB driver for the CMSIS-DAP interface. The easiest way to do this is with the **Zadig** utility.

1.  Download Zadig from [its official website](https://zadig.akeo.ie/).
2.  Connect the XIAO Debug Mate to your PC.
3.  Run Zadig. Go to `Options` and make sure `List All Devices` is checked.
4.  From the dropdown list, find the device interface named **`CMSIS-DAP`**.

  :::warning
  Be very careful to select the correct interface. You may see multiple interfaces for the Debug Mate (e.g., one for serial). Only modify the `CMSIS-DAP` one.
  :::

5.  Select the **`WinUSB`** driver in the box to the right of the green arrow.
6.  Click `Replace Driver`. After the installation is complete, your system will be ready.

</TabItem>
<TabItem value="MacOS" label="MacOS">

No driver installation is necessary. macOS has built-in support for CMSIS-DAP devices through its generic USB drivers.

</TabItem>
<TabItem value="Linux" label="Linux">

No driver installation is necessary. The Linux kernel includes drivers for CMSIS-DAP devices.

</TabItem>
</Tabs>

#### Install OpenOCD

:::tip
Verified: Please use OpenOCD version 0.12.0-7 or later.
:::

To ensure compatibility and have access to the latest features, we strongly recommend using the **xPack** version of OpenOCD. System package managers (like Homebrew on macOS or APT on Linux) often provide older, outdated versions which may not work correctly with modern targets.

:::tip PlatformIO Note
If you are using VS Code with the PlatformIO extension, PlatformIO will automatically download and configure the correct version of OpenOCD for your project when you start a debug session. If you only use PlatformIO, no manual installation is needed.
:::

<Tabs>
<TabItem value="Windows" label="Windows" default>

On Windows, the manual installation method is straightforward.

1.  **Download the OpenOCD package**

Go to the [xPack OpenOCD releases page](https://github.com/xpack-dev-tools/openocd-xpack/releases). Scroll down to the latest release and find the Windows version (e.g., `xpack-openocd-...-win32-x64.zip`). Download this file.

2.  **Extract the Files**

Right-click the downloaded ZIP file and select "Extract All...". Choose a stable location, such as `C:\Users\YourName\AppData\Local\xPacks\OpenOCD`. After extraction, you will have a folder like `xpack-openocd-0.12.0-7` containing a `bin` directory.

3.  **Add OpenOCD to your System PATH**

This allows you to run `openocd` from any terminal.

    - Search for "Environment Variables" in the Start Menu and select "Edit the system environment variables".
    - Click **"Environment Variables..."**.
    - Under "User variables", select the **"Path"** variable and click **"Edit..."**.
    - Click **"New"** and paste the full path to the `bin` directory you extracted earlier. For example:  
      `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`
    - Click OK on all windows to save.

4.  **Verify the Installation**

Open a **new** Command Prompt or PowerShell window and run:

```bash
openocd --version
```

If the installation was successful, you will see the version information printed (e.g., `xPack Open On-Chip Debugger 0.12.0+dev-02228`).

</TabItem>
<TabItem value="MacOS" label="MacOS">

This process mirrors the Windows manual setup.

1.  **Download the OpenOCD package**

Go to the [xPack OpenOCD releases page](https://github.com/xpack-dev-tools/openocd-xpack/releases). Find the latest release and download the correct archive for your Mac (e.g., `...-darwin-x64.tar.gz` for Intel or `...-darwin-arm64.tar.gz` for Apple Silicon).

2.  **Extract the Files**

Open a Terminal and run the following commands. We'll create a standard location in your home directory.

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder (or wherever you saved the file)
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **Add OpenOCD to your PATH**

You need to tell your shell where to find the `openocd` executable. The default shell on modern macOS is Zsh.

```bash
# Add the path to your .zshrc file (for Zsh)
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.zshrc
```

:::note
Make sure to replace `xpack-openocd-0.12.0-7` with the actual folder name that was created. If you use Bash, edit `~/.bash_profile` instead of `~/.zshrc`.
:::

4.  **Apply and Verify**

The `PATH` change you made is not active in your current terminal session until the configuration file is reloaded.

Run the following command in your existing terminal:

```bash
# For Zsh (default on modern macOS)
source ~/.zshrc
```

Now, verify the installation by running:

```bash
openocd --version
```

You should see the correct xPack version information.

</TabItem>
<TabItem value="Linux" label="Linux">

This process mirrors the manual setup on other operating systems.

1.  **Download the OpenOCD package**

Go to the [xPack OpenOCD releases page](https://github.com/xpack-dev-tools/openocd-xpack/releases). Find the latest release and download the Linux archive (`...-linux-x64.tar.gz`).

2.  **Extract the Files**

Open a Terminal and run the following commands.

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **Add OpenOCD to your PATH**

You need to tell your shell where to find the `openocd` executable. Most Linux distributions use the Bash shell.

```bash
# Add the path to your .bashrc file
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.bashrc
```

:::note
Make sure to replace `xpack-openocd-0.12.0-7` with the actual folder name that was created.
:::

4.  **Apply and Verify**

The `PATH` change you made is not active in your current terminal session until the configuration file is reloaded.

Run the following command in your existing terminal:

```bash
# For Bash (default on most Linux distros)
source ~/.bashrc
```

Now, verify the installation by running:

```bash
openocd --version
```

You should see the correct xPack version information.

</TabItem>
</Tabs>


#### Install PyOCD

????????????????????????????


#### Understanding the `XIAO_Debug_Mate_DAPLink_Package` Package

Before you can start using the DAPLink Debugger feature, you'll need to download the ZIP file separately. This file contains all the files required for debugging various XIAO boards.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download ZIP file</font></span></strong>
    </a>
</div>


##### Directory Structure Explanation

After unzipping the file, you will see the following folder structure. Each part has a specific purpose:

```
XIAO_Debug_Mate_DAPLink_Package/
├── examples/
│   ├── Blink_nrf52840.elf
│   ├── Blink_SAMD21.bin
│   └── ... (other example firmwares)
├── target/
│   ├── XIAO_RA4M1/
│   │   └── ra4m1.cfg
│   └── XIAO_SAMD21/
│       └── at91samd21g18.cfg
├── XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/
│   ├── bin/
│   │   └── openocd
│   └── share/
│       └── ... (OpenOCD scripts)
└── XIAO_MG24_Win_OpenOCD-v0.12.0/
    ├── bin/
    │   └── openocd.exe
    └── share/
        └── ... (OpenOCD scripts)
```

*   **`examples/`**
    This folder contains pre-compiled example firmware files (e.g., `.bin`, `.elf`, `.hex`) for various XIAO boards, which were exported from Arduino. These will be used in later tutorials to demonstrate how to flash and debug the microcontrollers.

*   **`target/`**
    This folder contains target configuration (`.cfg`) files for XIAO boards that might be missing from the official OpenOCD distribution. When you use boards like the XIAO SAMD21 or XIAO RA4M1 with your system's existing OpenOCD installation, you will need to manually add these configuration files to your OpenOCD environment. The specific steps for how to do this will be covered later.

*   **`XIAO_MG24_..._OpenOCD-v0.12.0/`**
    This is a special and very important component for the **XIAO MG24** board. Currently, support for this chip is not available in the official OpenOCD releases or the standard xPack distributions. To solve this, we provide complete, standalone OpenOCD packages for both Windows (`XIAO_MG24_Win_...`) and macOS/Linux (`XIAO_MG24_Mac_Linux_...`). When you are working with the XIAO MG24, you **must** use the `openocd` executable provided within these specific folders.

### Hardware Preparation

Connecting your hardware for debugging is straightforward.

#### For XIAO Boards

The XIAO Debug Mate is designed for a seamless, plug-and-play experience with all Seeed Studio XIAO boards.

1.  Take your XIAO board and align it with the female headers on the Debug Mate.
2.  **Ensure the USB-C port on the XIAO faces the same direction as the USB-C port on the Debug Mate.**
3.  Firmly press the XIAO straight down into the socket until it is fully seated. This ensures that the pogo pins on the Debug Mate make a solid connection with the SWD pads on the underside of the XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/plug_in_xiao.png" style={{width:600, height:'auto'}}/></div>

:::note
Some of the earlier XIAO boards, such as the **XIAO SAMD21**, **XIAO RP2040**, and **XIAO nRF52840**, were designed before a unified standard for the back-side pads was established. While the Debug Mate's pogo pins are positioned to be as compatible as possible, slight variations in these older boards may lead to imperfect contact.

If you experience an unstable debug connection, try **slightly adjusting the position** of the XIAO board within the socket. You may not need to push it all the way down. A small shift can often ensure the pogo pins make solid contact with the SWD pads on the back of the XIAO.
:::

#### For Other Development Boards

You can also use the XIAO Debug Mate as a generic SWD debug probe for other ARM-based development boards.

1.  You will need four DuPont wires (female-to-male or female-to-female, depending on your target board).
2.  Locate the SWD debug pins on your target board. These are typically labeled `SWDIO`, `SWCLK`, `GND`, and sometimes `VTref` or `VCC`.
3.  Connect the wires from the XIAO Debug Mate's expansion headers to your target board as follows:

| XIAO Debug Mate Pin | Target Board Pin | Description                               |
| :------------------ | :--------------- | :---------------------------------------- |
| `SWDIO`             | `SWDIO`          | Serial Wire Data Input/Output             |
| `SWCLK`             | `SWCLK`          | Serial Wire Clock                         |
| `GND`               | `GND`            | Common Ground                             |
| `VCC`               | `VTref` or `3V3` | Target Voltage Reference (Important for level shifting) |

Once connected, you can configure OpenOCD to use the CMSIS-DAP interface and start your debug session as you would with any other probe.


## Interacting with OpenOCD via Telnet

While modern IDEs provide a graphical interface for debugging, sometimes you need a more direct, low-level way to interact with the debugger. This is where Telnet comes in. OpenOCD runs a Telnet server that allows you to connect directly and send text-based commands to control the target chip. This is incredibly useful for quick checks, scripting automated tasks, or debugging issues when a full IDE isn't available or necessary.

### Enabling the Telnet Client

Before you can use Telnet, you might need to enable it on your operating system, as it is not always installed or enabled by default.

<Tabs>
<TabItem value="Windows" label="Windows" default>

On modern Windows systems, the Telnet client is a legacy feature that needs to be manually enabled.

1.  Press `Win` + `R` to open the "Run" dialog, type `control panel`, and press Enter.
2.  Go to **Programs** > **Programs and Features**.
3.  On the left-hand side, click on **Turn Windows features on or off**.
4.  In the new window that appears, scroll down and find **Telnet Client**.
5.  Check the box next to it and click **OK**. Windows will install the feature.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/enable_telnet_win.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">
The native Telnet client may have been removed in recent versions of macOS. The easiest way to install it is using [Homebrew]. Open your Terminal and run:
```bash
brew install telnet
```
</TabItem>
<TabItem value="Linux" label="Linux">
Most Linux distributions come with a Telnet client. If it's not present, you can easily install it using your package manager. For Debian/Ubuntu-based systems, open a terminal and run:
```bash
sudo apt-get update
sudo apt-get install telnet
```
</TabItem>
</Tabs>

### Step-by-Step Debugging with Telnet

#### Step 1: Run the OpenOCD Server

Find your XIAO board in the list below and follow the specific instructions for your operating system to start the OpenOCD server. This server process will wait for a connection from a debugger like GDB.

##### For Seeed Studio XIAO SAMD21

The standard OpenOCD package does not include the configuration file for the XIAO SAMD21. You must manually copy it from our provided package into your system's OpenOCD installation directory.

**1. Copy the Configuration File**

*   **Source File:** From the `XIAO_Debug_Mate_DAPLink_Package`, find the file: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Destination Folder:** Copy this file into the `target` script folder of your xPack OpenOCD installation. The path will vary by OS:

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\share\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Replace `YourName` and `xpack-openocd-0.12.0-7` with your actual username and the version of OpenOCD you installed.
:::

**2. Run the OpenOCD Command**

Open a new terminal anywhere on your system and run the corresponding command:

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```

---

##### For Seeed Studio XIAO RP2040

The configuration for RP2040 is included in the standard xPack OpenOCD. Open a terminal and run the command.

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```

---

##### For Seeed Studio XIAO RP2350

The configuration for RP2350 is included in the standard xPack OpenOCD. Open a terminal and run the command.

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```

---

##### For Seeed Studio XIAO nRF52840

The configuration for nRF52 is included in the standard xPack OpenOCD. Open a terminal and run the command.

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```

---

##### For Seeed Studio XIAO RA4M1

Similar to the SAMD21, the standard OpenOCD package does not include the configuration file for the XIAO RA4M1. You must manually copy it.

**1. Copy the Configuration File**

*   **Source File:** From the `XIAO_Debug_Mate_DAPLink_Package`, find the file: `target/XIAO_RA4M1/ra4m1.cfg`.
*   **Destination Folder:** Copy this file into the `target` script folder of your xPack OpenOCD installation.

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\share\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Replace `YourName` and `xpack-openocd-0.12.0-7` with your actual username and the version of OpenOCD you installed.
:::

**2. Run the OpenOCD Command**

Open a new terminal anywhere on your system and run the corresponding command:

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```

---

##### For Seeed Studio XIAO MG24

:::warning[Important]
The XIAO MG24 requires a special version of OpenOCD that is included in the `XIAO_Debug_Mate_DAPLink_Package`. **Do not** use your system-wide OpenOCD installation. You **must** run the commands from within the specific directory provided in the package.
:::

**1. Prepare Your Terminal**

Open your command-line tool and navigate into the correct folder for your operating system within the unzipped package.

*   **Windows:**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd C:\Users\YourName\Desktop\XIAO_Debug_Mate_DAPLink_Package\XIAO_MG24_Win_OpenOCD-v0.12.0
    ```
*   **macOS / Linux:**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd ~/Desktop/XIAO_Debug_Mate_DAPLink_Package/XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0
    ```

**2. Run the OpenOCD Command**

Once you are inside the correct directory, execute the following command:

*   **Windows:**
    ```bash
    bin\openocd.exe -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```
*   **macOS / Linux:**
    ```bash
    bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```

#### Command Breakdown

Understanding what each part of the command does can help you troubleshoot issues or customize your workflow. Let's break down a typical command:

`bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "..."`

*   `bin/openocd` (or `bin\openocd.exe`): This executes the OpenOCD program. We assume it's located in a `bin` sub-directory, which is a standard convention. The name and extension will vary by OS.

*   `-s share/openocd/scripts`: The `-s` flag is crucial. It tells OpenOCD where to **s**earch for its script library. With this path set, OpenOCD can find the files specified by the `-f` flags.

*   `-f interface/cmsis-dap.cfg`: The `-f` flag specifies a con**f**iguration file to load. This first one defines the debug adapter we are using (a standard CMSIS-DAP probe).

*   `-f target/rp2040.cfg`: This second `-f` flag loads the configuration for the target microcontroller (the RP2040 chip on the XIAO board).

*   `-c "..."`: The `-c` flag passes a **c**ommand to OpenOCD after it starts.
    *   `adapter speed 5000`: (For RP2040/RP2350) Sets the SWD clock speed to 5000 kHz for stable communication.
    *   `reset_config srst_nogate`: (For MG24) A special reset configuration required for this specific target.

After running one of these commands, OpenOCD will initialize the connection and wait for a debugger, such as GDB, to connect (typically on port 3333). You can then use the debugger to load your program (`load <path/to/your/firmware.elf>`), set breakpoints, and debug your code.

#### Step 2: Connect to the Telnet Server

Now, open a **second, new** Command Prompt or Terminal window. Type the following command and press Enter:

```bash
telnet localhost 4444
```

*   `localhost` refers to your own computer.
*   `4444` is the default port number that OpenOCD uses for Telnet connections.

If the connection is successful, your terminal will display a welcome message from OpenOCD, and you will see a `>` prompt, ready to accept your commands.

#### Step 3: Execute Debug Commands

You can now type commands directly into the Telnet session to control the target chip. Here are some of the most common commands:

| Command             | Description                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `init`              | **Initialize Target.** Establishes the connection to the chip. This should always be the first command you run after connecting.                                        |
| `reset halt`        | **Reset and Halt.** Resets the microcontroller and immediately pauses (halts) its execution. This is the primary way to enter a debug-ready state.                       |
| `reg`               | **Show Registers.** Displays the current values of all CPU registers.                                                                                                   |
| `mdw [address] [count]` | **Memory Display Word.** Reads and displays memory content. For example, `mdw 0x20000000 10` will display 10 words (32-bit values) starting from memory address `0x20000000`. |
| `step`              | **Single Step.** Executes a single instruction on the CPU. If the instruction is a function call, it will step *into* the function.                                      |
| `resume`            | **Resume Execution.** Lets the program run freely from its current state. It will continue until it hits a breakpoint (if any are set) or you halt it again.              |
| `exit`              | **Exit Telnet.** Closes the Telnet connection and returns you to your command prompt. The OpenOCD server in the other window will remain running.                          |

A typical manual debug session might follow these steps:
1.  Type `init` to connect to the chip.
2.  Type `reset halt` to stop the program at the very beginning.
3.  Type `mdw 0x20000000 10` to inspect some RAM values.
4.  Type `step` a few times to walk through the initial startup code.
5.  Type `resume` to let the program run normally.
6.  Type `exit` when you are finished.








## Flash the firmware using OpenOCD/PyOCD

Beyond interactive debugging, the XIAO Debug Mate excels at programming (flashing) firmware directly onto a XIAO's microcontroller using command-line tools. The primary tools for this are **OpenOCD** (Open On-Chip Debugger) and **PyOCD**.

This guide will walk you through using these powerful tools to upload pre-compiled firmware files. We use the "OpenOCD/PyOCD" designation because most compatible XIAO boards use OpenOCD, while the **XIAO RA4M1** specifically requires PyOCD for flashing.

### Prerequisites

1.  **OpenOCD Installation:** For all XIAO boards **except the XIAO MG24**, you need to [have OpenOCD installed on your system and accessible from your command line (i.e., added to your system's PATH)](#install-openocd).

2.  **XIAO Debug Mate Firmware Package:** We have prepared a package containing custom configuration files and example firmware. Please download and extract it. The structure is as follows:

    *   `examples/`: Contains pre-compiled example firmware (`.elf`, `.hex`, `.bin`) for various XIAO boards.
    *   `target/`: Contains custom OpenOCD configuration files (`.cfg`) required for specific boards like the XIAO SAMD21 and RA4M1.
    *   `XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/`: A self-contained OpenOCD for flashing the XIAO MG24 on macOS and Linux.
    *   `XIAO_MG24_Win_OpenOCD-v0.12.0/`: A self-contained OpenOCD for flashing the XIAO MG24 on Windows.

3.  **Terminal/Command Prompt:** You will need to be comfortable opening and using a command-line interface (e.g., Command Prompt, PowerShell, or Terminal).

#### Command Execution Strategy

*   **Option A (Recommended): Run from the Package Directory**

    All commands in this guide assume you have opened your terminal in the root of the extracted `XIAO_Debug_Mate_DAPLink_Package` folder. This is the simplest method, as relative paths to firmware and configuration files will work directly.

*   **Option B (Advanced): Run from Any Directory**

    If you prefer to run commands from your own project folder, you can use the `-s` flag to tell OpenOCD where to find our package's custom scripts.

    *   **Action Required:** Add `-s <path_to_package_folder>` to your `openocd` command. For example:

        ```bash
        # Replace <path_to_package_folder> with the actual path
        openocd -s <path_to_package_folder> -f interface/cmsis-dap.cfg -f target/XIAO_SAMD21/at91samd21g18.cfg ...
        ```

:::note
**Windows vs. macOS/Linux:** In all commands, Windows users should use `openocd.exe` instead of `openocd`. We recommend using forward slashes (`/`) in file paths for cross-platform compatibility.
:::

**To flash your own custom firmware:**

Simply replace the example path (e.g., `examples/Blink_RP2040.elf`) with the path to your own firmware file.

### Understanding Firmware Files (.bin, .hex, .elf)

When you compile a project, the toolchain produces a file to be uploaded to the microcontroller. You'll commonly encounter three formats:

*   **.bin (Binary):** A raw, compact binary file containing only the machine code. It has no extra information about memory addresses, so the programming tool must be told where to place it.
*   **.hex (Intel HEX):** An ASCII-text representation of the binary code. It includes memory addresses, checksums, and metadata, making it a more robust format than `.bin`.
*   **.elf (Executable and Linkable Format):** The most comprehensive format. It contains the machine code, memory address information, and also debugging information like function names, variable names, and source code line numbers. This is the preferred format for debugging.

**How to get these files from your project:**

*   **Arduino IDE:** After compiling (`Sketch > Verify/Compile`), use `Sketch > Export compiled Binary`. This will save a `.hex` or `.bin` file into your sketch folder.
*   **PlatformIO:** After a successful build, the firmware files (`firmware.bin`, `firmware.hex`, `firmware.elf`) are located in your project's `.pio/build/<environment_name>/` directory.

### Flashing `.elf` Files

This format is ideal for debugging and is used by chips like the RP2040.

#### For Seeed Studio XIAO RP2040 / RP2350

These commands use standard configuration files (`rp2040.cfg`, `rp2350.cfg`) that are included with your main OpenOCD installation. The primary difference between operating systems is the name of the executable: `openocd` on macOS/Linux and `openocd.exe` on Windows.

**XIAO RP2040**

**On macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

**On Windows:**
```powershell
# Note the use of "openocd.exe"
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

---

**XIAO RP2350**

**On macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

**On Windows:**
```powershell
# Note the use of "openocd.exe"
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

### Flashing `.hex` Files

The `.hex` format is a versatile standard.

#### For Seeed Studio XIAO RA4M1

You can flash the RA4M1 using either PyOCD or the OpenOCD configuration file we provide.

*   **Method 1: Using PyOCD (Recommended)**
    Ensure you have `pyocd` installed (`pip install -U pyocd`).
    ```bash
    pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples/Blink_RA4M1.hex
    ```

*   **Method 2: Using OpenOCD**
    This command uses the custom `ra4m1.cfg` file from our package.
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/XIAO_RA4M1/ra4m1.cfg -c "program examples/Blink_RA4M1.hex verify reset exit"
    ```

#### For Seeed Studio XIAO MG24

This board requires its dedicated OpenOCD version from the package. You **must** navigate into the correct directory before running the command.

1.  **Navigate to the correct directory:**
    *   **On Windows:** Open a Command Prompt and run:
        `cd XIAO_MG24_Win_OpenOCD-v0.12.0/bin`
    *   **On macOS/Linux:** Open a Terminal and run:
        `cd XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/bin`

2.  **Run the flash command:**
    The path to the firmware is now `../../examples/Blink_MG24.hex` because you are two levels deep inside the package directory.
    ```bash
    # On Windows, use "openocd.exe". On macOS/Linux, use "./openocd".
    ./openocd -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../../examples/Blink_MG24.hex; reset; exit"
    ```

### Flashing Bootloader Files

This is a critical operation that can restore a board.

#### For Seeed Studio XIAO SAMD21

This command uses the custom `at91samd21g18.cfg` file provided in our package to flash a `.bin` bootloader.

```bash
openocd -f interface/cmsis-dap.cfg -f target/XIAO_SAMD21/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/bootloader-XIAO.bin verify reset; shutdown"
```

#### For Seeed Studio XIAO nRF52840

This process involves downloading the bootloader, then erasing the chip and flashing the new file.

1.  **Download the Bootloader:**
    *   **On macOS/Linux,** use `wget` in your terminal:
        ```bash
        wget https://raw.githubusercontent.com/0hotpotman0/BLE_52840_Core/refs/heads/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex
        ```
    *   **On Windows,** open the URL above in your browser and save the `.hex` file into the root of your `XIAO_Debug_Mate_DAPLink_Package` folder.

2.  **Flash the Bootloader:**
    This command uses the standard `nrf52.cfg` from your OpenOCD installation.
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex verify" -c "reset" -c "exit"
    ```

### Flashing Compatibility Summary

This table summarizes which XIAO boards and file types are supported for command-line flashing with the provided tools.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO Model</th>
			<th>Supported File Type</th>
			<th>Tool</th>
		</tr>
		<tr>
			<td>Seeed Studio XIAO SAMD21</td>
			<td>.bin (Bootloader)</td>
			<td>OpenOCD</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO RP2040</td>
			<td>.elf</td>
			<td>OpenOCD</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RP2350</td>
			<td>.elf</td>
			<td>OpenOCD</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO nRF52840</td>
			<td>.hex (Bootloader)</td>
			<td>OpenOCD</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RA4M1</td>
			<td>.hex</td>
			<td>PyOCD</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO MG24</td>
			<td>.hex</td>
			<td>OpenOCD</td>
		</tr>
	</table>
</div>


## Using Debugging on PlatformIO

First, ensure you have the PlatformIO IDE extension installed in Visual Studio Code.

1.  **Install VS Code**: [Download and install Visual Studio Code](https://code.visualstudio.com/).
2.  **Install PlatformIO IDE**: Open VS Code, navigate to the Extensions view (Ctrl+Shift+X), search for `PlatformIO IDE`, and install it.

### Creating and Configuring a PlatformIO Project

1.  **Launch PlatformIO**: Click the PlatformIO icon in the VS Code Activity Bar and select "Home" to open the PIO Home screen.
2.  **Create a New Project**: Click on "New Project", give your project a name, and select the specific XIAO board you intend to use.
3.  **Configure `platformio.ini`**: This is the most critical step. To enable debugging with the XIAO Debug Mate, you must modify the `platformio.ini` file located in the root of your project.

    This configuration file tells PlatformIO which board and framework to use, and most importantly, what tools to use for uploading and debugging. The XIAO Debug Mate functions as a standard **CMSIS-DAP** debugger.

    Below are the recommended `platformio.ini` configurations for various XIAO models. Copy the contents corresponding to your board. We are using the development version of the platform from GitHub to ensure you have the latest board support files.

<Tabs>
<TabItem value="rp2350" label="XIAO RP2350" default>

```ini
[env:seeed_xiao_rp2350]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2350
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

</TabItem>
<TabItem value="rp2040" label="XIAO RP2040">

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="samd21" label="XIAO SAMD21">

```ini
[env:seeed-xiao-samd]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-samd
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="nrf52840" label="XIAO nRF52840">

For the nRF52840, PlatformIO offers two board support packages. Choose the one that fits your project requirements.

**Mbed Core:**
```ini
[env:seeed-xiao-mbed-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mbed-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

**Adafruit Core:**
```ini
[env:seeed-xiao-afruitnrf52-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="ra4m1" label="XIAO RA4M1">

Note that the RA4M1 is a special case. It uses `pyocd` for uploading but still uses `cmsis-dap` for debugging.

```ini
[env:seeed-xiao-ra4m1]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-ra4m1
framework = arduino
upload_protocol = pyocd
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="mg24" label="XIAO MG24">

```ini
[env:seeed-xiao-mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
</Tabs>

After saving the `platformio.ini` file, PlatformIO will automatically download all the necessary toolchains and packages the next time you build or debug.

---

### Step-by-step debugging

Step-by-step execution is a core feature for tracing your code's logic and identifying bugs.

1.  **Connect Hardware**: Plug your XIAO board into the XIAO Debug Mate. Connect the Debug Mate to your computer using a USB-C cable.
2.  **Start Debugging**: You can initiate a debugging session in two ways:
    *   Press the `F5` key.
    *   Navigate to the "Run and Debug" view (bug icon in the Activity Bar) and click the green "Start Debugging" arrow at the top.
3.  **Debug Controls**: PlatformIO will compile your code, upload it to the XIAO via the Debug Mate, and pause execution at the first line of `main()` or `setup()`. A debug toolbar will appear at the top of the editor, allowing you to control the program flow:
    *   **Continue (F5)**: Resume execution until the next breakpoint is hit or the program finishes.
    *   **Step Over (F10)**: Execute the current line. If the line contains a function call, it will execute the entire function and stop on the next line.
    *   **Step Into (F11)**: Execute the current line. If the line contains a function call, the debugger will enter the function and stop at its first line.
    *   **Step Out (Shift+F11)**: If paused inside a function, this will execute the remainder of the function and return to the line where it was called.
    *   **Restart (Ctrl+Shift+F5)**: Terminate and restart the current debug session.
    *   **Stop (Shift+F5)**: Terminate the debug session.

### Breakpoint debugging

If you want the program to pause at a specific location, breakpoints are the tool for the job.

1.  **Set a Breakpoint**: In the code editor, move your cursor to the left of the line number where you want to pause. A faint red dot will appear. Click it to set a breakpoint (the dot will become bright red).
2.  **Run to Breakpoint**: Start a debug session (`F5`). The program will run at full speed and automatically pause when it reaches the line with the breakpoint.
3.  **Manage Breakpoints**: In the "Run and Debug" side panel, the "BREAKPOINTS" section lists all active breakpoints. You can enable, disable, or delete them from here.

### RAM Read/Write

While the program is paused at a breakpoint, you can inspect and even modify the state of variables.

1.  **View Variables (Read)**: In the "Run and Debug" side panel, the "VARIABLES" section displays all local and global variables within the current scope and their current values.
2.  **Watch Variables**: If you want to monitor specific variables or expressions, go to the "WATCH" section, click the `+` icon, and enter the variable name (e.g., `myVariable` or `&myVariable` to see its memory address).
3.  **Modify Variables (Write)**: In the "VARIABLES" or "WATCH" sections, you can often double-click on a variable's value to enter a new one. Press Enter to apply the change. This is incredibly useful for testing different conditions without restarting your program.

---

### Firmware Flashing

PlatformIO abstracts away the complexities of firmware file formats. You don't need to manually handle them.

#### Flash .elf file

The `.elf` file contains both the compiled code and the debugging symbols, making it essential for a debug session.
*   **How to Flash**: When you "Start Debugging" (by pressing `F5`), PlatformIO automatically compiles your project and flashes the resulting `.elf` file to the target chip before starting the GDB server. This process is seamless.

#### Flash .bin file / Flash .hex file

`.bin` and `.hex` files contain only the raw program data. They are smaller and suitable for final deployment when debugging is not needed.
*   **How to Flash**: To simply upload your program without starting a debug session, click the "Upload" button (right-arrow icon) in the VS Code status bar at the bottom. PlatformIO will compile the code and use the `upload_protocol` defined in your `platformio.ini` to flash the resulting `.bin` or `.hex` file using the XIAO Debug Mate.

In summary, the PlatformIO workflow simplifies this process for you:
*   **Debugging** automatically uses the **.elf** file.
*   **Uploading** automatically uses the **.bin** or **.hex** file.




## Resources






<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
