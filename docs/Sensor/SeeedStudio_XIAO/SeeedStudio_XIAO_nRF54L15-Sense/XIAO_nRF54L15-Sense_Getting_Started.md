---
title: Seeed Studio XIAO nRF54L15(Sense)
description: |
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /xiao_nrf54l15_sense_getting_started
keywords:
  - XIAO
  - nRF54L15
last_update:
  date: 7/2/2025
  author: Jason
sidebar_position: 0
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:600, height:'auto'}}/></div>



# Getting Started with Seeed Studio XIAO nRF54L15(Sense)

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO nRF54L15</th>
			<th>Seeed Studio XIAO nRF54L15 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


## Introduction

The **Seeed Studio XIAO nRF54L15** is a compact, high-performance development board featuring the cutting-edge Nordic nRF54L15 chip. This next-generation SoC integrates an ultra-low-power multi-protocol 2.4 GHz radio with an MCU containing a **128 MHz Arm® Cortex®-M33 processor** and an **Arm® Cortex®-M0**+ for advanced power management. It offers scalable memory up to **1.5 MB NVM and 256 KB RAM**, and an internal ultra-low-power design that significantly extends battery life. Its powerful radio supports **Bluetooth® 6.0 (including Channel Sounding), Matter, Thread, Zigbee**, and high throughput 2.4 GHz proprietary modes up to **4 Mbps**. The board includes a comprehensive peripheral set, an integrated **128 MHz RISC-V coprocessor**, and advanced security features such as **TrustZone®** isolation and cryptographic engine protection. With **built-in Li-ion battery management**, the XIAO nRF54L15 is ideal for compact, secure and energy-efficient IoT solutions such as smart wearables, industrial sensors and advanced HMIs.

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


### Specification

<table align="center">
  <tr>
      <th>Item</th>
      <th>XIAO nRF52840</th>
      <th>XIAO nRF52840 Sense</th>
      <th><Highlight color="#92c52a">XIAO nRF54L15</Highlight></th>
      <th><Highlight color="#92c52a">XIAO nRF54L15 Sense</Highlight></th>
  </tr>
  <tr>
      <th>MCU</th>
      <td align="center">Arm Cortex-M4 with FPU 64 MHz</td>
      <td align="center">Arm Cortex-M4 with FPU 64 MHz</td>
      <td align="center">Arm Cortex-M33 128 MHz<br/>RISC-V coprocessor 128 MHz FLPR</td>
      <td align="center">Arm Cortex-M33 128 MHz<br/>RISC-V coprocessor 128 MHz FLPR</td>
  </tr>
  <tr>
      <th>Wireless Connectivity</th>
      <td align="center">
        Bluetooth 5.3<br/>
        BLE<br/>
        NFC
      </td>
      <td align="center">
        Bluetooth 5.3<br/>
        BLE<br/>
        NFC
      </td>
      <td align="center">
        Bluetooth 5.4<br/>
        BLE<br/>
        NFC<br/>
      </td>
      <td align="center">
        Bluetooth 5.4<br/>
        BLE<br/>
        NFC<br/>
      </td>
  </tr>
  <tr>
      <th>Bluetooth LE Version</th>
      <td align="center">6.0</td>
      <td align="center">6.0</td>
      <td align="center">6.0</td>
      <td align="center">6.0</td>
  </tr>
  <tr>
      <th>Memory</th>
      <td align="center">NVM 1MB+256 KB RAM<br/>Flash 2MB onboard Flash</td>
      <td align="center">NVM 1MB+256 KB RAM<br/>Flash 2MB onboard Flash</td>
      <td align="center">NVM 1.5 MB + RAM256 KB</td>
      <td align="center">NVM 1.5 MB + RAM256 KB</td>
  </tr>
  <tr>
      <th>Built-in Sensor</th>
      <td align="center">N/A</td>
      <td align="center">6 DOF IMU(LSM6DS3TR-C)<br/>Microphone(MSM261D3526H1CPM)</td>
      <td align="center">N/A</td>
      <td align="center">6 DOF IMU(LSM6DS3TR-C)<br/>Microphone (MSM261DGT006)</td>
  </tr>
  <tr>
      <th>TX power</th>
      <td align="center">+8 dBm</td>
      <td align="center">+8 dBm</td>
      <td align="center">+8 dBm</td>
      <td align="center">+8 dBm</td>
  </tr>
  <tr>
      <th>RX sensitivity</th>
      <td align="center">-97 dBm</td>
      <td align="center">-97 dBm</td>
      <td align="center">-96 dBm</td>
      <td align="center">-96 dBm</td>
  </tr>
  <tr>
      <th>Highlighted peripherals</th>
      <td align="center">12-bit ADC</td>
      <td align="center">12-bit ADC</td>
      <td align="center">14-bit ADC, Global RTC</td>
      <td align="center">14-bit ADC, Global RTC</td>
  </tr>
  <tr>
      <th>Power</th>
      <td align="center">
        USB Type-C interface power supply<br/>
        Support lithium battery power collection
      </td>
      <td align="center">
        USB Type-C interface power supply<br/>
        Support lithium battery power collection
      </td>
      <td align="center">
        USB Type-C interface power supply<br/>
        Internal PMIC supports lithium battery power supply<br/>
        Support lithium battery power collection
      </td>
      <td align="center">
        USB Type-C interface power supply<br/>
        Internal PMIC supports lithium battery power supply<br/>
        Support lithium battery power collection
      </td>
  </tr>
  <tr>
      <th>Operating temperature</th>
      <td align="center">-40 to 85 °C</td>
      <td align="center">-40 to 85 °C</td>
      <td align="center">-40 to +105°C</td>
      <td align="center">-40 to +105°C</td>
  </tr>
  <tr>
      <th>Supply voltage range</th>
      <td align="center">1.7 to 5.5 V</td>
      <td align="center">1.7 to 5.5 V</td>
      <td align="center">1.7 to 3.6 V</td>
      <td align="center">1.7 to 3.6 V</td>
  </tr>
  <tr>
      <th>ESB and 2.4 GHz Proprietary Protocols</th>
      <td align="center">up to 2 Mbps</td>
      <td align="center">up to 2 Mbps</td>
      <td align="center">up to 4 Mbps</td>
      <td align="center">up to 4 Mbps</td>
  </tr>
  <tr>
      <th>Tamer idetectors</th>
      <td align="center">NO</td>
      <td align="center">NO</td>
      <td align="center">YES</td>
      <td align="center">YES</td>
  </tr>
  <tr>
      <th>Bluetooth channel sounding</th>
      <td align="center">NO</td>
      <td align="center">NO</td>
      <td align="center">YES</td>
      <td align="center">YES</td>
  </tr>
</table>


### Features

- **Powerful CPU**: 128 MHz Arm® Cortex®-M33 processor with support for DSP instructions and FPU floating-point operations, 32-bit RISC architecture, and integrated 128 MHz RISC-V co-processor.
- **Ultra-low Power**: Designed for superior ultra-low power consumption, significantly extends battery life and includes advanced power management.
- **Multi-Mode Wireless Transmission**: Integrated 2.4 GHz multi-protocol wireless transceiver supports Bluetooth Low Energy (including Channel Sounding), 802.15.4-2020, Matter, Thread, Zigbee, and 2.4 GHz proprietary modes (up to 4 Mbps).
- **Robust Security**: Advanced security features including TrustZone® isolation, tamper detection, and channel leakage protection on the encryption engine side.
- **Rich on-chip resources**: Scalable memory configurations up to 1.5 MB NVM and 256 KB RAM provide ample storage space.
- **Rich Interfaces**: Comprehensive peripheral set including the new Global RTC (available in System OFF mode), 14-bit ADC, and high-speed serial interfaces. Built-in lithium battery management.


## Hardware Overview
<Tabs>
<TabItem  value="54l15" label="XIAO nRF54L15" default>

<table align="center">
  <tr>
    <th>XIAO nRF54L15 Pin List</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/whitepinout.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 front indication diagram</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/whitenotsense.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 back indication diagram</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/backwhite.png" style={{width:850, height:'auto'}}/></div></td>
  </tr>
</table>

 </TabItem>
 <TabItem value="54L15Sense" label="XIAO nRF54L15 Sense" default>

 <table align="center">
  <tr>
    <th>XIAO nRF54L15 Sense Pin List</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/whitepinout2.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 Sense front indication diagram</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sensewhite.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 Sense back indication diagram</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/backwhite.png" style={{width:850, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>


## nRFConnect SDK Usage
The nRF Connect SDK (NCS) is an extensible, unified software development kit from Nordic Semiconductor specifically designed for building low-power wireless applications for Nordic nRF52, nRF53, nRF54, nRF70, and nRF91 series-based wireless devices.

NCS provides a rich ecosystem of off-the-shelf sample applications, protocol stacks, libraries and hardware drivers designed to simplify the development process and accelerate time-to-market. Its modular and configurable nature gives developers the flexibility to build size-optimized software for memory-constrained devices, as well as powerful functionality for more advanced and complex applications.NCS is an open-source project hosted on GitHub and offers excellent support for integrated development environments such as Visual Studio Code.

### Install With Vsocde

<details>

<summary>Install nRF Connect SDK Knowledge in advance</summary>

This document details how to install the nRF Connect SDK development environment on a Windows 11 computer.The following is an overview of the tools that need to be installed
- Visual Studio Code
- nRF Command Line Tools
- nRF Connect for Desktop
- Git
```cpp
git --version
```
- Python
```cpp
python --version
```
- Ninja
```cpp
ninja --version
```
- CMake 
```cpp
cmake --version
```
- Zephyr SDK
```cpp
west --version
```
- nRF Connect SDK
- VSCode nRF Connect plugin

***If you have pre-installed it on your computer, you can check the version number of your tool by following the command below***

</details>


<Steppers>

#### Installation of SEGGER J-Link v8.18
Download the installer for your platform from https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack. Run the installer; when the “Select Optional Components” window appears during the installation process, be sure to check “Install legacy USB driver for J-Link”, which is a required component for some supported development kits.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/jlink2.png" style={{width:600, height:'auto'}}/></div>
#### Install the nrfutil and nrfutil device commands.

- 2.1. Download a binary file compatible with your operating system from https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download?lang=en#infotabs and save it to your disk drive (e.g. Windows). For Windows, save it as C:\nordic_tools\nrfutil.exe. 
If you are using macOS or Linux, save it in a directory that has been added to your system's PATH (e.g., /usr/bin/), and you can skip step 2.2.

- 2.2. (Windows) Update your system's PATH to include where nrfutil is stored. Open “Edit account environment variables” and add the path where the nrfutil binaries are stored (C:\nordic_tools\). 

- 2.3. The nrfutil binaries you just downloaded do not contain any pre-installed commands. In this step, we will upgrade the core nrfutil and download the device commands.

- 2.3.1 To make sure we have the latest version of nrfutil, run the following command in a terminal (command prompt or PowerShell). It does not matter which terminal you use, as nrfutil was set globally in step 2.2.
```cpp
nrfutil self-upgrade
```

- 2.3.2 Installing the nrfutil device Command 
We need to burn the binary to the development kit using the device command.
In your currently active terminal, type: nrfutil install device 
You should see the following output:
```cpp
[00:00:02] ###### 100% [Install packages] Install packages
```

#### VScode configures the board and builds the burn-in file.

***1.install VS Studio Code***
[Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

2.Open VS Code and search for nRF Connect for VS Code Extension Pack in the Plugin Center. This plugin pack will automatically install other VS Code plugins required for nRF Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>

The nRF Connect for VS Code extension enables developers to utilize the popular Visual Studio Code Integrated Development Environment (VS Code IDE) to develop, build, debug and deploy embedded applications based on Nordic's nRF Connect SDK (Software Development Kit). The extension includes useful development tools such as a compiler interface, linker, complete build system, RTOS-enabled debugger, seamless interfacing with the nRF Connect SDK, device tree visualization editor, and an integrated serial terminal.
The nRF Connect extension package for VS Code includes the following components:
- nRF Connect for VS Code: The main extension contains the interface between the build system and the nRF Connect SDK, as well as an interface to manage the nRF Connect SDK version and toolchain.
- nRF DeviceTree: Provides device tree language support and a device tree visualization editor.
- nRF Kconfig: Provides Kconfig language support.
- nRF Terminal: Serial and RTT terminals.
- Microsoft C/C++: Adds language support for C/C++, including features of IntelliSense.
- CMake: CMake language support.
- GNU Linker Mapping Files: Support for linker mapping files.
We can download any preferred version of the nRF Connect SDK and its toolchain via the extension. The full nRF Connect for VS Code documentation is available at https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html.

#### Installing the toolchain
The toolchain is a collection of tools that work together to build nRF Connect SDK applications, including assembler, compiler, linker, and CMake components.
The first time you open nRF Connect for VS Code, you will be prompted to install the toolchain. This usually happens if the extension does not detect any installed toolchain on your computer.
Click Install Toolchain and a list of toolchain versions will be listed that can be downloaded and installed on your computer. Select the version of the toolchain that matches the version of the nRF Connect SDK you plan to use. We always recommend using the latest tagged version of the nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown1.png" style={{width:600, height:'auto'}}/></div>

By default, nRF Connect for VS Code only displays the Released tab (i.e., the stable version) of the toolchain. If you are evaluating a new feature and would like to use the Preview tab or another type of tab (e.g. Customer Sampling -cs), click on "Show all toolchain versions" as shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown2.png" style={{width:600, height:'auto'}}/></div>

:::note
**The ToolChain here is 3.0.1 or above**
:::
#### Installing the nRF Connect SDK
In the nRF Connect extension for VS Code, click on Manage SDK. from the Manage SDK menu, we can install or uninstall the nRF Connect SDK version. Since this is the first time we are using the extension, the interface will only show two options.
 
Clicking Install SDK will list all available nRF Connect SDK versions that can be downloaded and installed locally. Select the version of the nRF Connect SDK that is required for the development of your project.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown3.png" style={{width:600, height:'auto'}}/></div>

If you have opened the SDK folder in VS Code, instead of the Manage SDK menu option, you will see the Manage west workspace. To resolve this issue, open another window or folder in VS Code.

:::note
**The nRF Connect SDK here is 3.0.1 or above**
:::

:::tip
If you do not see either of these options, make sure you have the latest version of the nRF Connect for VS Code extension package installed.
It is important to note that the nRF Connect SDK is IDE independent, which means you can choose to use any IDE or none at all. The nRF Connect SDK is available via the https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil) command line The  (nrfutil) command line interface (CLI) will download and install nRF Connect. However, we highly recommend using our nRF Connect for VS Code extension with VS Code, as it integrates not only a convenient graphical user interface (GUI) and an efficient command line interface (CLI), but also includes a number of features that will greatly simplify firmware development. Configuring other IDEs to work with the nRF Connect SDK requires additional manual steps beyond the scope of this course.
:::


#### Creating User Programs

In this exercise we will write a simple application based on the blinky example to control blinking LEDs on a development board. The same applies to all supported NordicSemiconductor development boards (nRF54, nRF53, nRF52, nRF70 or nRF91 series). The goal is to make sure that all the tools needed to build and burn the example are set up correctly. The focus is on learning how to create an application, build it and burn it to a Nordic chip development board using the “Copy Example” template!

- In VS Code, click the nRF Connect extension icon. In the Welcome view, click Create New Application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blinky.png" style={{width:600, height:'auto'}}/></div>

- Type blinky in the search bar and select the second Blinky sample (path zephyr/samples/basic/blinky), as shown below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blinky2.png" style={{width:600, height:'auto'}}/></div>

The Blinky example will cause the LED1 on the development board to blink continuously.
Our first application will be based on the Blinky example. The Blinky example is derived from the Zephyr mold block in the nRF Connect SDK, so you will see the zephyr name in the sample path: zephyr\samples\basic\blinky.

#### Add XIAO nRF54L15 Board

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

To get started, **clone the repository from the GitHub link**`git clone https://github.com/Seeed-Studio/platform-seeedboards.git` into your preferred local folder. Once cloned, navigate to the `platform-seeedboards/zephyr/boards` directory. **Remember this `boards` folder**; you'll need to **replace the `boards` folder in your project directory** with this one.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config1.jpg" style={{width:600, height:'auto'}}/></div>

- In the application view, click Add Build Configuration below the application name .
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config3.png" style={{width:600, height:'auto'}}/></div>

- We can select the model of XIAO nRF54L15 in the Board target, and select the default prj.config file in the Base configuartion files, and finally click build to build the file.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config2.jpg" style={{width:600, height:'auto'}}/></div>

#### Download Burn-in Plug-in

<Tabs>
<TabItem  value="window" label="Window" default>

**Aditional Plugins:**

On Windows, we'll use the Chocolatey package manager to install OpenOCD.

**1.Open PowerShell (Run as Administrator):**

- In the Windows search bar, type "PowerShell".
- Right-click "Windows PowerShell" and select "Run as administrator".

**2.Check PowerShell Execution Policy:**

- Type `Get-ExecutionPolicy` and press Enter.
- Type `Get-ExecutionPolicy -List` and press Enter.

**3.Install Chocolatey:**
- Paste and run the following command:
```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

This command bypasses the execution policy for the current PowerShell session and installs Chocolatey. After installation, close and reopen the PowerShell window (still run as administrator).

**4.Install OpenOCD:**
- In the new PowerShell window (as administrator), type:
```cpp
choco install openocd
```

**5.Verify OpenOCD Installation:**

- Type `Get-Command openocd` and press Enter.

- If the installation is successful, this command will display the path to openocd.exe.

This command bypasses the execution policy for the current PowerShell session and installs Chocolatey. After installation, close and reopen the PowerShell window (still run as administrator).

</TabItem>


<TabItem value="mac" label="Mac OS" default>

**Aditional Plugins:**

On macOS, we'll use the Homebrew package manager to install the necessary tools.

**1.Install Homebrew (if not already installed):**

- Open Terminal.app.

- Run the following command:

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Follow the on-screen prompts; you might need to enter your macOS user password. After installation, run the commands prompted by the terminal to add Homebrew to your PATH environment variable `(e.g., eval "$(/opt/homebrew/bin/brew shellenv)")`. Then close and reopen the terminal.

**2.Install Ccache:**

In the terminal, type:

```cpp
brew install ccache
```
**3.Install OpenOCD:**

In the terminal, type:

```cpp
brew install openocd
```

**4.Verify OpenOCD Installation::**

- Type `which openocd` and press Enter.

- If the installation is successful, this command will display the path to the `openocd` executable.

</TabItem>

</Tabs>


#### West Flash burn-in program

- Open the nRF terminal
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn12.png" style={{width:600, height:'auto'}}/></div>

- Just enter the `west flash` command,To flash your device, simply enter the west flash command. The path highlighted in red indicates the location of your compiled .elf file. You can use this same path to find the corresponding .hex file, which is suitable for programming with a J-Link debugger.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn13.png" style={{width:600, height:'auto'}}/></div>


#### Light up th LED

When we successfully burned the program in the Seeed Studio XIAO nRF54L15 Sense, you can see the board above the user indicator in the non-stop blinking green light, if your hands are also the same rendering effect, it means that you have been successfully on it!🎊

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light.gif" style={{width:400, height:'auto'}}/></div>

#### Deep Dive into nRF Connect SDK Internals
To truly master the nRF Connect SDK, you need to understand its building blocks from the inside out. Jump into these courses to elevate your knowledge:

- [**nRF Connect SDK Fundamentals**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)

- [**nRF Connect SDK Intermediate**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-intermediate/)

- [**nRF Connect Vscode**](https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html)

</Steppers>


## Battery Powered Board
The XIAO nRF54L15 has a built-in power management chip that allows the XIAO nRF54L15 to be powered independently by using a battery or to charge the battery through the XIAO nRF54L15's USB port.

If you want to connect the battery for XIAO, we recommend you to purchase qualified rechargeable 3.7V lithium battery. When soldering the battery, please be careful to distinguish between the positive and negative terminals. 

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_connect.jpg" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:500, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Battery Connecting Schematic</em></p>
</div>

**Instructions on the use of batteries:**

1. Please use qualified batteries that meet the specifications.
2. XIAO can be connected to your computer device via data cable while using the battery, rest assured that XIAO has a built-in circuit protection chip, which is safe.
3. The XIAO nRF54L15 will not have any LED on when it is battery powered (unless you have written a specific program), please do not judge whether the XIAO nRF54L15 is working or not by the condition of the LED, please judge it reasonably by your program.

At the same time, we designed a red indicator light for battery charging, through the indicator light display to inform the user of the current state of the battery in the charge.

1. When XIAO nRF54L15 is not connected to the battery, the red light comes on when the Type-C cable is connected and goes off after 30 seconds.
2. The red light flashes when the battery is connected and the Type-C cable is connected for charging.
3. When connecting Type-C to charge the battery fully, the red light turns off.

:::caution
Please be careful not to short-circuit the positive and negative terminals and burn the battery and equipment when soldering.
:::


### Battery Voltage Detectio

The XIAO nRF54L15 integrates a battery voltage detection feature that centers on efficiently managing battery power measurements using the TPS22916CYFPR load switch. This guide will focus on analyzing the software implementation of the battery detection **(especially the main.c code)** and guide you on how to easily deploy and use this feature in a PlatformIO environment, avoiding the complexity of the Zephyr NCS SDK.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_A.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Detecting Battery Schematic</em></p>
</div>

What the TPS22916CYFPR chip does: 
- It is an intelligent power switch that controls the on-off of the battery voltage on demand. When the battery voltage needs to be measured, it will turn on, connecting the battery to the voltage divider circuit; when it does not need to be measured, it will turn off, disconnecting the connection.

- What does this feature help us do?
Through this on-demand switching mechanism, the chip greatly reduces unnecessary current consumption and effectively extends battery life. Combined with the subsequent voltage divider circuit and the nRF54L15's ADC (analog-to-digital converter), the XIAO nRF54L15 is able to accurately monitor the battery's remaining charge, providing important range optimization for battery-powered, low-power applications such as IoT devices.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Core Code

```cpp
#include <inttypes.h>
#include <stddef.h>
#include <stdint.h>
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/kernel.h>


#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
	!DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "No suitable devicetree overlay specified"
#endif

#define DT_SPEC_AND_COMMA(node_id, prop, idx) \
	ADC_DT_SPEC_GET_BY_IDX(node_id, idx),

/* Data of ADC io-channels specified in devicetree. */
static const struct adc_dt_spec adc_channels[] = {
	DT_FOREACH_PROP_ELEM(DT_PATH(zephyr_user), io_channels,
						 DT_SPEC_AND_COMMA)};

static const struct device *const vbat_reg = DEVICE_DT_GET(DT_NODELABEL(vbat_pwr));

int main(void)
{
	int err;
	uint16_t buf;
	int32_t val_mv;
	struct adc_sequence sequence = {
		.buffer = &buf,
		/* buffer size in bytes, not number of samples */
		.buffer_size = sizeof(buf),
	};

	regulator_enable(vbat_reg);
	k_sleep(K_MSEC(100));

	/* Configure channels individually prior to sampling. */
	if (!adc_is_ready_dt(&adc_channels[7]))
	{
		printf("ADC controller device %s not ready\n", adc_channels[7].dev->name);
		return 0;
	}

	err = adc_channel_setup_dt(&adc_channels[7]);
	if (err < 0)
	{
		printf("Could not setup channel #7 (%d)\n", err);
		return 0;
	}

	(void)adc_sequence_init_dt(&adc_channels[7], &sequence);

	err = adc_read_dt(&adc_channels[7], &sequence);
	if (err < 0)
	{
		printf("Could not read (%d)\n", err);
		return 0;
	}

	/*
	 * If using differential mode, the 16 bit value
	 * in the ADC sample buffer should be a signed 2's
	 * complement value.
	 */
	if (adc_channels[7].channel_cfg.differential)
	{
		val_mv = (int32_t)((int16_t)buf);
	}
	else
	{
		val_mv = (int32_t)buf;
	}
	err = adc_raw_to_millivolts_dt(&adc_channels[7],
								   &val_mv);
	/* conversion to mV may not be supported, skip if not */
	if (err < 0)
	{
		printf(" value in mV not available\n");
	}
	else
	{
		printf("bat vol = %" PRId32 " mV\n", val_mv * 2);
	}

	regulator_disable(vbat_reg);
	return 0;
}
```


## Acess The J-Link Pins For Burn a Program

**Hardware Required**

- [Seeed Studio XIAO nRF54L15](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Jlink](https://www.segger.com/downloads/jlink/)

:::tip
You need to download the latest version of J-Link to have the nRF54L15 model board support.
:::

**Software Required**

It is required to download the [Segger](https://www.segger.com/downloads/jlink/) software from the website.

- **Step 1.** Use Jlink to connect pins below:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link.png" alt="pir" width={250} height="auto" /></p>

- **Step 2.** Start the J-Flash and search nRF54L15, creating a new project:


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link4.jpg" alt="pir" width={700} height="auto" /></p>


- **Step 3.** Click "Target" and then select "Connect".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link3.jpg" alt="pir" width={700} height="auto" /></p>

- **Step 4.** Draw the bin or [hex file](ttps://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/zephyr.hex) to software. Then press F4 and F5 in that order. The reflashing is done.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link2.jpg" alt="pir" width={700} height="auto" /></p>



## Onboard Keys

XIAO nRF54L15(Sense) comes equipped with two important physical buttons that play crucial roles in device operation and firmware programming: the **Reset Button** and the **Boot Button**. Understanding their functions is essential for daily use and firmware updates.

---

### Reset Button

The Reset button is used to perform a hard reset operation on the device.

* **Functionality:**
    * **Forced Restart:** Pressing this button immediately interrupts all current device operations and causes it to restart, similar to a power cycle.
    * **Resolving Stuck Programs:** When the device's running program crashes, enters an infinite loop, or becomes unresponsive, pressing the Reset button is the quickest way to force it back to a normal operating state.
    * **No Firmware Impact:** A reset operation does not erase or alter the firmware already programmed into the device. It simply restarts the currently running application.
* **Use Cases:**
    * Quickly rerunning a program during development/debugging.
    * When the device exhibits unexpected behavior or becomes stuck.

---

### Boot Button

The Boot button is used to place the device into a specific boot mode, typically for firmware updates or to enter the Bootloader mode.

* **Functionality:**
    * **Entering Bootloader Mode:** This is its primary function. By following a specific sequence (usually holding down the Boot button, then pressing and releasing the Reset button, and finally releasing the Boot button), the device enters Bootloader mode. In this mode, the device can receive new firmware images, typically programmed via USB DFU (Device Firmware Update) or other programming interfaces.
    * **Firmware Updates:** Users can flash new application firmware, fix bugs, or upgrade functionalities through Bootloader mode.
    * **Recovery Mode:** When the main application has issues that prevent it from starting, Bootloader mode provides a recovery mechanism, allowing users to re-flash working firmware.
* **Use Cases:**
    * Initial programming of new firmware.
    * Updating the device's firmware version.
    * When the device's program is corrupted and cannot start normally, requiring re-flashing.

---

## Power-Consumpitons

### Bluetooth Connected

This section details the power consumption characteristics of the device while it is actively advertising as a Bluetooth Low Energy (BLE) peripheral. The device implements a custom BLE service, allowing other central devices to connect and interact with it.

The following graph illustrates the typical power consumption profile when the device is continuously advertising:

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/7.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Device Power Consumption during BLE Advertising</em></p>
</div>

As shown in the graph, the device exhibits periodic current peaks corresponding to each advertising event, followed by periods of lower current consumption. The average power consumption during advertising is higher than in System Off mode, reflecting the active radio operations required for broadcasting.

---
#### BLE Advertising Code Example

 
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-ble">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

 
Below is the code used to test the power consumption during BLE advertising:

```c
#include <stdio.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/uuid.h>
#include <zephyr/bluetooth/gatt.h>

// Custom 128-bit UUID for the ONOFF Service
#define BT_UUID_ONOFF_VAL BT_UUID_128_ENCODE(0x8e7f1a23, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF     BT_UUID_DECLARE_128(BT_UUID_ONOFF_VAL)

// Custom 128-bit UUID for the ONOFF Action Characteristic (Write)
#define BT_UUID_ONOFF_ACTION_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a24, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF_ACTION BT_UUID_DECLARE_128(BT_UUID_ONOFF_ACTION_VAL)

// Custom 128-bit UUID for the ONOFF Read Characteristic (Read)
#define BT_UUID_ONOFF_READ_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a25, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120003)
#define BT_UUID_ONOFF_READ BT_UUID_DECLARE_128(BT_UUID_ONOFF_READ_VAL)

// Static flag to hold the on/off state, initialized to 0 (off)
static uint8_t onoff_flag = 0;

// Advertising data: flags and complete device name
static const struct bt_data ad[] = {
	BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)), // General Discoverable, No BR/EDR
	BT_DATA(BT_DATA_NAME_COMPLETE, CONFIG_BT_DEVICE_NAME, sizeof(CONFIG_BT_DEVICE_NAME) - 1), // Device Name
};

// Scan response data: include the 128-bit UUID of our custom service
static const struct bt_data sd[] = {
	BT_DATA_BYTES(BT_DATA_UUID128_ALL, BT_UUID_ONOFF_VAL), // Service UUID
};

/**
 * @brief GATT read callback for the ONOFF Read characteristic.
 *
 * This function is called when a connected central device attempts to read
 * the ONOFF Read characteristic. It returns the current value of onoff_flag.
 *
 * @param conn Pointer to the connection object.
 * @param attr Pointer to the GATT attribute being read.
 * @param buf Buffer to store the read value.
 * @param len Maximum length of the buffer.
 * @param offset Offset from which to read the attribute value.
 * @return Number of bytes read, or a negative error code.
 */
static ssize_t read_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
                  void *buf, uint16_t len, uint16_t offset)
{
    // The user_data field of the attribute points to onoff_flag
    const uint8_t *value = attr->user_data;
    // Perform the GATT attribute read operation
    return bt_gatt_attr_read(conn, attr, buf, len, offset, value, sizeof(*value));
}

/**
 * @brief GATT write callback for the ONOFF Action characteristic.
 *
 * This function is called when a connected central device attempts to write
 * to the ONOFF Action characteristic. It updates the onoff_flag based on
 * the received value.
 *
 * @param conn Pointer to the connection object.
 * @param attr Pointer to the GATT attribute being written.
 * @param buf Buffer containing the value to be written.
 * @param len Length of the value in the buffer.
 * @param offset Offset at which to write the attribute value.
 * @param flags Flags for the write operation.
 * @return Number of bytes written, or a negative error code.
 */
static ssize_t write_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
			       const void *buf, uint16_t len, uint16_t offset, uint8_t flags)
{
	uint8_t val;

	// Ensure the length of the written data is 1 byte
	if (len != 1U) {
		return BT_GATT_ERR(BT_ATT_ERR_INVALID_ATTRIBUTE_LEN);
	}

	// Ensure the write operation starts from offset 0
	if (offset != 0) {
		return BT_GATT_ERR(BT_ATT_ERR_INVALID_OFFSET);
	}

	// Get the value from the buffer
	val = *((uint8_t *)buf);

	// Update onoff_flag based on the received value
	if (val == 0x00U) {
		printf("Write: 0\n");
		onoff_flag = 0; // Set to off
	} else if (val == 0x01U) {
		printf("Write: 1\n");
		onoff_flag = 1; // Set to on
	} else {
		// Return error if value is not 0 or 1
		return BT_GATT_ERR(BT_ATT_ERR_VALUE_NOT_ALLOWED);
	}

	return len; // Return number of bytes successfully written
}

// Define the custom GATT service and its characteristics
BT_GATT_SERVICE_DEFINE(lbs_svc, 
    BT_GATT_PRIMARY_SERVICE(BT_UUID_ONOFF), // Primary Service: ONOFF Service
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_ACTION, BT_GATT_CHRC_WRITE, // Characteristic: ONOFF Action (Write)
        BT_GATT_PERM_WRITE, NULL, write_onoff_val, NULL), // Permissions, callbacks
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_READ, BT_GATT_CHRC_READ, // Characteristic: ONOFF Read (Read)
        BT_GATT_PERM_READ, read_onoff_val, NULL, &onoff_flag), // Permissions, callbacks, user_data (onoff_flag)
);

/**
 * @brief Callback function for successful Bluetooth connection.
 *
 * @param conn Pointer to the connection object.
 * @param err Error code (0 if successful).
 */
static void connected(struct bt_conn *conn, uint8_t err)
{
	if (err != 0U) {
		printf("Connection failed (%02x, %s)\n", err, bt_hci_err_to_str(err));
		return;
	}

	printf("Connected\n");
}

/**
 * @brief Callback function for Bluetooth disconnection.
 *
 * @param conn Pointer to the connection object.
 * @param reason Reason for disconnection.
 */
static void disconnected(struct bt_conn *conn, uint8_t reason)
{
	printf("Disconnected (%02x, %s)\n", reason, bt_hci_err_to_str(reason));
}

// Define connection callbacks
BT_CONN_CB_DEFINE(conn_callbacks) = {
	.connected = connected,
	.disconnected = disconnected,
};

/**
 * @brief Main function of the application.
 *
 * Initializes the Bluetooth stack, starts advertising, and enters the main loop.
 * @return 0 on success, negative error code on failure.
 */
int main(void)
{
	int err;

	// Enable the Bluetooth stack
	err = bt_enable(NULL);
	if (err < 0) {
		printf("Bluetooth enable failed (err %d)", err);
		return err;
	}

	// Start BLE advertising
	err = bt_le_adv_start(BT_LE_ADV_CONN_FAST_1, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
	if (err < 0) {
		printf("Advertising failed to start (err %d)", err);
		return err;
	}

	printf("Bluetooth enabled");
	return 0;
}
```

### Ultra-low Power State b

To achieve extremely low power consumption for the device, we conducted power consumption tests in **System Off** mode. System Off mode is a deep sleep mode provided by Zephyr OS, where most peripherals and the CPU are turned off, retaining only essential wake-up sources (such as GPIO interrupts) to minimize power consumption.

The following graph illustrates the typical power consumption curve after the device enters System Off mode:

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/6.png" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Device Power Consumption in System Off Mode</em></p>
</div>

As shown in the graph, after entering System Off mode, the power consumption is significantly reduced, maintaining only microampere levels, which greatly extends battery life. When the `sw0` button is pressed, the device will wake up from System Off mode and restart.

---

#### Power Consumption Code Example

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-lowpower">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />



Below is the code used to test the power consumption in the System Off mode described above:

```c
/*
 * Copyright (c) 2019 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */
#include <inttypes.h>
#include <stdio.h>

#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/hwinfo.h>
#include <zephyr/drivers/comparator.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/device.h>
#include <zephyr/sys/poweroff.h>
#include <zephyr/sys/util.h>

static const struct gpio_dt_spec sw0 = GPIO_DT_SPEC_GET(DT_ALIAS(sw0), gpios);

void print_reset_cause(void)
{
	uint32_t reset_cause;

	hwinfo_get_reset_cause(&reset_cause);
	if (reset_cause & RESET_DEBUG) {
		printf("Reset by debugger.\n");
	} else if (reset_cause & RESET_CLOCK) {
		printf("Wakeup from System OFF by GRTC.\n");
	} else  {
		printf("Other wake up cause 0x%08X.\n", reset_cause);
	}
}

int main(void)
{
	int rc;
	const struct device *const cons = DEVICE_DT_GET(DT_CHOSEN(zephyr_console));

	if (!device_is_ready(cons)) {
		printf("%s: device not ready.\n", cons->name);
		return 0;
	}

	printf("\n%s system off demo\n", CONFIG_BOARD);
	print_reset_cause();


	/* configure sw0 as input, interrupt as level active to allow wake-up */
	rc = gpio_pin_configure_dt(&sw0, GPIO_INPUT);
	if (rc < 0) {
		printf("Could not configure sw0 GPIO (%d)\n", rc);
		return 0;
	}

	rc = gpio_pin_interrupt_configure_dt(&sw0, GPIO_INT_LEVEL_LOW);
	if (rc < 0) {
		printf("Could not configure sw0 GPIO interrupt (%d)\n", rc);
		return 0;
	}

	printf("Entering system off; press sw0 to restart\n");


	rc = pm_device_action_run(cons, PM_DEVICE_ACTION_SUSPEND);
	if (rc < 0) {
		printf("Could not suspend console (%d)\n", rc);
		return 0;
	}

	hwinfo_clear_reset_cause();
	sys_poweroff();

	return 0;
}
```


### Seeed Studio XIAO nRF54L15

- **[PDF]** [Seeed Studio XIAO nRF54L15 Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 KiCAD Libraries](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 pinout sheet](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)


### Seeed Studio XIAO nRF54L15 Sense

- **[PDF]** [Seeed Studio XIAO nRF54L15 Sense Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 Sense KiCAD Libraries](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 Sense Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 Sense pinout sheet](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)


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
