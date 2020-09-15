# Bluetooth Overview

This wiki introduce how to update the Bluetooth firmware for the Wireless Core Realtek RTL8720 on Wio Terminal, as well as installing all the dependent libraries for Wio Terminal to enable BLE functionality.

!!!Note
        Please note for the current framework, **the BLE firmware and Wi-Fi firmware are different** (BLE: eRPC and Wi-Fi: AT Commands) and therefore they **cannot be used together** for a period of time. The Wi-Fi will be able to use with BLE very shortly after the BLE release.

## Update the Wireless Core Firmware(BLE)

In order to use the Bluetooth functionality, you must **update the Bluetooth firmware** to the Wireless Core to Wio Terminal.

### Tools and Set-ups

Same configuration as updating network firmware, Please follow [**this guide**](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware) for **tools and procedures**, but use the Bluetooth Firmware files below.

### Bluetooth Firmware Files

Download the Bluetooth Firmware Files from **[here](https://files.seeedstudio.com/wiki/Wio-Terminal-BLE/20200914-seeed-ambd-firmware-rpc-v1.0.0.zip)**

## Libraries Installations

- Update your **ArduinoSAMD Core** for Seeed's board to the latest verison: **≥1.8.0**.

### Installing the Seeed_Arduino_rpcBLE

1. Visit the [Seeed_Arduino_rpcBLE](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE) repositories and download the entire repo to your local drive.

2. Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_rpcBLE` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Installing the Seeed_Arduino_rpcUnified

1. Visit the [Seeed_Arduino_rpcUnified](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE) repositories and download the entire repo to your local drive.

2. Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_rpcUnified` file that you've have just downloaded.