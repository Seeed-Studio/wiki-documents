---
description: how to use SDK for RP2350
title: Seeed Studio XIAO RP2350 with C/C++ SDK
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-rp2350-c-cpp-sdk
sidebar_position: 2
last_update:
    date: 2024-08-06T09:04:18.916Z
    author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

The Pico SDK represents a comprehensive software development kit tailored for the Raspberry Pi RP-family of microcontrollers, with a particular focus on the XIAO RP2350 board. This SDK incorporates a wide range of libraries and tools designed to facilitate the development of advanced applications, serving both novice enthusiasts and experienced professionals. The SDK functions as a foundational platform for exploiting the extensive capabilities of the RP2350 microcontroller across various projects.

## Prerequisites

Before initiating SDK programming on the XIAO RP2350, the following equipment is required:

- A USB Type-C cable
- The XIAO RP2350 board
- A personal computer equipped with a Linux/Unix operating system

:::caution Attention

This documentation predominantly addresses development under a Linux environment. Windows users are advised to consult the following resource for compatible setup instructions: [Raspberry Pi Pico Setup on Windows](https://github.com/raspberrypi/pico-setup-windows).

:::

## Installation Guide ▶️

### Step 1: Install System Dependencies

Execute the following commands in your Linux terminal to install the essential system dependencies:

```bash
sudo apt update
sudo apt install cmake gcc g++ git
```

### Step 2: 🔨 Toolchain Installation  {#install_gcc_arm}

To compile code for the RP2350, installation of a specific toolchain, `gcc-arm-none-eabi`, is imperative. This toolchain provides the necessary compilers and libraries for ARM architecture. Two methods for installation are provided below.

<Tabs>
<TabItem value="manual_install" label="Option 1: Manual Installation" default>

The manual installation process offers precise control over the installation environment by following these steps:

1. **Download the Toolchain**:

   Access the ARM Developer Downloads page and download the `.tar.bz2` file for the `gcc-arm-none-eabi` toolchain from [here](https://developer.arm.com/downloads/-/gnu-rm).

2. **Extract the Archive**:

   After downloading, open a terminal window, navigate to the directory containing the file, and execute the command below to extract the archive:

   ```shell
   tar -xjf {downloaded-file}.tar.bz2
   ```

3. **Update System Path**:

   To make the toolchain accessible from any terminal session, add its directory to your system's PATH by inputting the following command, substituting `{VERSION}` with the actual version number of the toolchain:

   ```shell
   echo "export PATH=\$PATH:$(pwd)/gcc-arm-none-eabi-{VERSION}/bin" >> ~/.bashrc
   ```

4. **Apply Configuration Changes**:

   To activate the PATH update immediately, source your `.bashrc` file:

   ```shell
   source ~/.bashrc
   ```

</TabItem>
<TabItem value="script_install" label="Option 2: Scripted Installation">

Opt for a scripted installation to streamline and automate the setup process with the following steps:

1. **Download and Execute the Script**:

   Utilize `curl` to download the installation script and set the necessary execution permissions:

   ```shell
   curl -O https://raw.githubusercontent.com/Seeed-Projects/Seeed-xiao-rp2350-sdk/main/install_gcc_arm.sh
   chmod +x install_gcc_arm.sh
   ./install_gcc_arm.sh
   ```

<details><summary>View Script Code</summary>

The script automates the download, extraction, and PATH configuration processes, as outlined below:

```shell
#!/bin/bash

# Handle the automatic download and installation of the gcc-arm-none-eabi toolchain
TOOLCHAIN_URL="https://developer.arm.com/-/media/Files/downloads/gnu-rm/{VERSION}/gcc-arm-none-eabi-{VERSION}-linux.tar.bz2"
wget $TOOLCHAIN_URL -O toolchain.tar.bz2
tar -xjf toolchain.tar.bz2
echo "export PATH=\$PATH:$(pwd)/gcc-arm-none-eabi-{VERSION}/bin" >> ~/.bashrc
source ~/.bashrc
rm toolchain.tar.bz2
```

</details>

</TabItem>
</Tabs>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/raspberrypi/pico-sdk">
    <strong><span><font color={'FFFFFF'} size={"4"}>Navigate to the SDK</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div> <br></br>

### Step 3: ⛓️ SDK Installation  {#install_sdk}

The Pico SDK is crucial as it provides the libraries, examples, and documentation necessary for software development on the RP2350. It abstracts much of the hardware complexity through user-friendly APIs and is regularly updated to incorporate new features and performance enhancements.

#### Installation Instructions

To install the Pico SDK, execute the following commands in your terminal:

```shell
git clone https://github.com/raspberrypi/pico-sdk.git
echo "export PICO_SDK_PATH=$(pwd)/pico-sdk" >> ~/.bashrc
source ~/.bashrc
```

These commands clone the SDK from its repository, set the `PICO_SDK_PATH` environment variable to its location, and update your shell configuration to include this path, ensuring the SDK is accessible in your development environment.

:::tip Enhanced Setup on Raspberry Pi 4B or Pi 400

If you are developing directly on a Raspberry Pi 4B or Raspberry Pi 400, you can streamline the installation process with a setup script that automates these steps:

```shell
wget https://raw.githubusercontent.com/raspberrypi/pico-setup/master/pico_setup.sh
chmod +x pico_setup.sh
./pico_setup.sh
```

This script configures your development environment specifically for the Pico on Raspberry Pi hardware, simplifying the initial setup and allowing you to focus on development.

:::

#### Expanded SDK Download and Setup

<details><summary>Expand to view the detailed SDK setup script</summary>

For a more tailored SDK installation, especially if working with different shell environments, consider using the detailed setup script below:

```shell
#!/bin/bash

# Clone the appropriate Pico SDK repository
git clone https://github.com/raspberrypi/pico-sdk.git # should be pico-sdk-rp2350-a1
cd pico-sdk
PICO_SDK_PATH="$HOME/pico-sdk-rp2350-a1"

# Add the SDK path to your shell's configuration file
if [ -n "$ZSH_VERSION" ]; then
    echo "export PICO_SDK_PATH=$PICO_SDK_PATH" >> ~/.zshrc
    source ~/.zshrc
elif [ -n "$BASH_VERSION" ]; then
    echo "export PICO_SDK_PATH=$PICO_SDK_PATH" >> ~/.bashrc
    source ~/.bashrc
else
    # For other shells, adjust accordingly
    SHELL_CONFIG_FILE="$(basename $SHELL)rc"
    echo "export PICO_SDK_PATH=$PICO_SDK_PATH" >> ~/$SHELL_CONFIG_FILE
    source ~/$SHELL_CONFIG_FILE
fi

# Verify the environment variable setting
echo "PICO_SDK_PATH is set to ${PICO_SDK_PATH}"
```

This script ensures that the SDK path is correctly set up in your environment, regardless of the shell you use, and verifies that the `PICO_SDK_PATH` environment variable is correctly set.

</details>

## Exploring the Examples and Building Projects

For newcomers to SDK programming, a practical approach involves studying the code of pre-existing Pico examples. This provides valuable insight into coding conventions and methodologies employed within the SDK environment.

### Steps to Execute the Code

The following steps outline the process from setting up the development environment to running your code on the XIAO RP2350 board:

1. **Development Environment Setup**: Initiate by configuring your development environment. Detailed instructions can be found on the [Setting Up the Pico SDK](/xiao-rp2350-c-cpp-sdk) documentation page. This setup is essential for ensuring that all necessary tools and libraries are correctly installed and configured.

2. **Code Composition**: Utilize a preferred text editor or Integrated Development Environment (IDE) to develop your application. For an initial test, you may start by writing the sample `blink.c` program, which toggles the board's LED. Save this file within your project directory.

3. **Code Compilation**:
   To compile your program, the Pico SDK offers a suite of tools streamlined for this purpose. Execute the following sequence of commands in your terminal, ensuring you are in the project directory where `blink.c` is located:

   ```sh
   mkdir build
   cd build
   cmake ..
   make
   ```

   This process will generate a build environment, configure the project, and compile the source code into an executable format.

4. **Code Upload**:
   Upon successful compilation, a binary file with the `.uf2` extension is created in the `build` directory. This file must be transferred to the XIAO RP2350 board for execution. Connect the board via USB and copy the `.uf2` file to the device's mounted storage, typically appearing as a removable drive on your computer.

   After transferring the file, the XIAO RP2350 will automatically reboot, and you should observe the onboard LED blinking—indicating that the program is running effectively.

### Example 1: LED Blink

To demonstrate basic SDK usage, the following example details programming the onboard LED to blink:

```c title="blink.c"
#include "pico/stdlib.h"

const int sleep_time = 250;

int main() {
    const uint LED_PIN = PICO_DEFAULT_LED_PIN; // GPIO25
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);
    while (true) {
        gpio_put(LED_PIN, 1);
        sleep_ms(sleep_time);
        gpio_put(LED_PIN, 0);
        sleep_ms(sleep_time);
    }
}
```

<!-- ## Takeaway

Summarize the previous content, list best practices, common problems, and solutions to help users avoid common errors in practical use.

How to assemble it, precautions, etc -->

## Reference

- 📄**[PDF]** [Getting started with Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf)  - Official Raspberry Pi documentation.

## Additional Resources

- 📄**[PDF]** [Raspberry Pi Pico C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) the book which documents the SDK APIs
- 📽️**[Video]** [Intro to Raspberry Pi Pico and RP2040](https://www.youtube.com/watch?v=B5rQSoOmR5w) -  A video tutorial.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>  