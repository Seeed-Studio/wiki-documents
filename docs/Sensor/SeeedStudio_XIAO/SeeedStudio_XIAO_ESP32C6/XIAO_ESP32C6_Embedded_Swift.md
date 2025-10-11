---
description: utilize Embedded swift to work with XIAO ESP32C6
title: XIAO ESP32C6 with (Embedded) Swift
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png
slug: /xiao-esp32-swift
last_update:
  date: 2024-07-12T02:50:00.462Z
  author: Spencer
---
# Guide to Embedded Swift with Seeed Studio XIAO-C6

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png" alt="pir" width={600} height="auto" /></p>

## Introduction

The Seeed Studio XIAO ESP32C6 is a powerful and versatile development board built around the ESP32-C6 SoC, featuring dual 32-bit **RISC-V** processors. The high-performance processor operates up to 160 MHz, while the low-power processor runs up to 20 MHz. With 512KB SRAM and 4MB Flash, the XIAO ESP32C6 offers significant programming space, making it ideal for various IoT applications. This board excels in wireless connectivity, supporting 2.4 GHz Wi-Fi 6, Bluetooth® 5.3, Zigbee, and Thread (802.15.4), and is Matter-native, which is crucial for smart-home interoperability.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

[Swift](https://www.swift.org/) is a powerful and intuitive programming language developed by Apple Inc. for developing software for iOS, macOS, watchOS, tvOS, and beyond.  At [WWDC2024](https://developer.apple.com/wwdc24/), Apple announced Embedded Swift, an open source project that aims to bring Swift to the world of embedded systems and IoT. It enables using Swift on microcontrollers with no operating system and with minimal resources available. Currently, the official swift-embedded-examples supports hardware platforms of STM32, Raspberry Pi Pico, Nordic Semiconductor, and even RISC-V ESP32 (ESP32C6).

<div style={{ textAlign: 'center' }}>
<img width={680} src="https://user-images.githubusercontent.com/1186214/264192528-ec5673ba-eec5-422a-b28c-8c0a1e814d1c.png" alt="Vision of Embedded Swfit " />

<div style={{ marginTop: '-8px' }}><em>Swift Language</em></div>

</div>  

<br></br>

Embedded Swift provides several advantages:

- **Performance and Ease of Use**: It offers C/C++-level performance while maintaining the user-friendly syntax and features of Swift ([Swift Forums](https://forums.swift.org/t/accepted-a-vision-for-embedded-swift/68067)).
- **Library and Framework Integration**: Swift’s ability to link directly with C/C++ libraries allows developers to utilize existing frameworks seamlessly ([GitHub](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)).
- **Developer Familiarity**: Developers already proficient in Swift can quickly adopt Embedded Swift for their projects, leveraging familiar APIs and tools ([Swift.org](https://www.swift.org/getting-started/embedded-swift/)).

:::tip Objectives of This Guide

In this page, we are going to cover the following:

- How to set up the necessary development environment.
- Running a GPIO-based Blink example.

:::

## Prerequisites

To get started with Embedded Swift on the Seeed Studio XIAO-C6, you'll need the following skills and setup:

- **Seeed Studio XIAO-C6**: The core hardware for this guide.
- **USB-C cable**: To connect the XIAO-C6 to your computer.
- **A computer**: which running *Linux*, *macOS*, , or Windows (using **WSL2**).
- **[ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/index.html)**: Version 5.2(*recommend*) is required for developing with ESP32-C6. You can download and install it from the [Espressif website](https://github.com/espressif/esp-idf).
- **[Swift Toolchain](https://www.swift.org/getting-started/embedded-swift/)**: Ensure Swift 6.0 is installed on your computer. This can be obtained from the official Swift website or through your operating system's package manager.

:::info Installation Guide

**ESP-IDF Installation:**

- Follow the [Linux and macOS](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/linux-macos-setup.html) page to install ESP-IDF
- Follow the [Developed on XIAO using Espressif ESP-IDF guide](/xiao_idf) for detailed steps.

**Swift Toolchain Installation:**

- Install Swift `release/6.0` toolchain from the [official site](https://www.swift.org/install/).

If you prefer docker solution, please refer to [Dockerfile](https://github.com/apple/swift-matter-examples/blob/main/Dockerfile) from `apple/swift-matter-examples/`
:::

Before proceeding, ensure you have all necessary prerequisites for a smooth setup and development process.

:::caution attention

In this page, we'll be going through the setup and usage of Embedded Swift on Ubuntu 22.04 Jammy Linux (WSL2).

:::

### Install ESP-IDF

```shell
#!/bin/bash
# Update and install required packages
sudo apt-get update
sudo apt-get install -y git wget flex bison gperf python3 python3-pip python3-venv python3.10-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0

# Clone the ESP-IDF repository
cd ~
git clone --recursive https://github.com/espressif/esp-idf.git --jobs 10
cd esp-idf
git checkout v5.2.1; git submodule update --init --recursive

# Run the install script for ESP-IDF
cd ~/esp-idf && ./install.sh

# Set up alias for ESP-IDF environment
echo 'alias get_idf=". ~/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc

echo "Installation complete. Use 'get_idf' to set up the ESP-IDF environment."
```

### Install Swift 6.0

you could directly running this script to have swift 6.0 to be installed.

```shell
#!/bin/bash
# Download the Swift 6.0 Snapshot
wget https://download.swift.org/swift-6.0-branch/ubuntu2204/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

# Extract the Tarball
tar -xvzf swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

sudo mv swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04 $HOME/swift-6.0

# Update PATH
echo 'export PATH=$HOME/swift-6.0/usr/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Verify Installation
swift --version

echo "Swift 6.0 installation complete."
```

## Run your first Blink program with Swift

### Step 1. Get the example

```shell showLineNumbers
get_idf #get idf enviorment
cd ~ && git clone https://github.com/apple/swift-embedded-examples.git #get GitHub repo
cd ~/swift-embedded-examples/esp32-led-blink-sdk
```

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/apple/swift-embedded-examples" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub Repository</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Step 2. Build the example

As the user led is connected to GPIO15, you'll need to modify the code to `let led = Led(gpioPin: 15)`:

```swift
@_cdecl("app_main")
func app_main() {
    print("Hello from Swift on ESP32-C6!")

    var ledValue: Bool = false
    let blinkDelayMs: UInt32 = 500
    let led = Led(gpioPin: 15)

    while true {
        led.setLed(value: ledValue)
        ledValue.toggle() // Toggle the boolean value
        vTaskDelay(blinkDelayMs / (1000 / UInt32(configTICK_RATE_HZ)))
    }
}
```

Then you could build the firmware:

```shell
idf.py set-target esp32c6
idf.py build
```

:::info issue?
If you encounter the problem `/bin/sh: 1: -target: not found`, you can resolve it by editing the `build.ninja` file located in the build folder.

Find the keyword `-target` and add the `swiftc` keyword before it, so it reads `swiftc -target ...`. This adjustment should help address the issue.
:::

Now we can have the firmware into out XIAO C6, once you got prompt `Project build complete.`

### Step 3. Flash the firmware

<details>
<summary>usbipd is nedded if using WSL2</summary>

If you are working with WSL2, you'll need to have [usbipd](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/WSL.md#usbipd) installed.

To install, use the Windows Package Manager with the command:

```shell
winget install usbipd
```

After installation, share the USB device using:

```shell
usbipd list #Check BUSID
usbipd bind -b '<BUSID>'
```

To attach the device from within WSL2:

```shell
usbipd attach --wsl --busid=<BUSID>
```

To see which port is shared:

```shell
dmesg | tail
# dmesg | tail -n 100 | sed -n 's/.*\(ttyACM[0-9]*\).*/\1/p'
```

</details>

Assuming you have `ttyACM0` detacted, the command would be:

```shell
idf.py -p /dev/ttyACM0 flash monitor
```

*This command will:*

1. Flash the firmware to the device connected to ttyACM0.
2. Start monitoring the serial output from the device, displaying any print statements or logs.

### Demostration

<div class="video-container">
<iframe width="407" height="724" src="https://www.youtube.com/embed/byqY2bYfVjA" title="Embedded Swift on XIAO ESP32C6 #Swift #Embedded #ESP32C6 #iot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Reference

- [Embedded Swift Blog](https://www.swift.org/blog/embedded-swift-examples/)
- [A Vision for Embedded Swift](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)
- [swift-embedded-examples](https://github.com/apple/swift-embedded-examples)
- [esp32-led-blink-sdk - GitHub](https://github.com/apple/swift-embedded-examples/tree/main/esp32-led-blink-sdk)

## Resource

- [WWDC24: Go small with Embedded Swift - Apple YouTube](https://www.youtube.com/watch?v=LqxbsADqDI4&t)
- [Add support for Matter in your smart home app](https://developer.apple.com/videos/play/wwdc2021/10298)
- [Embedde Swift - Apple Forum](https://forums.swift.org/c/development/embedded/107)
- [Use C, C++ and Objective C Libraries in a Swift Project - Cecilia Humlelu - YouTube](https://www.youtube.com/watch?v=jcNxtM_yTfk)
- [Mixing Swift and C++](https://www.swift.org/documentation/cxx-interop/)
- [awesome-embedded-swift](https://github.com/Cosmo/awesome-embedded-swift)

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
