# Overview

This wiki introduce how to update the latest firmware for the Wireless Core Realtek RTL8720 on Wio Terminal, as well as installing all the dependent libraries for Wio Terminal to enable wireless connectivity.

## Update the Wireless Core Firmware

First, we need to update the firmware for the Realtek RTL8720 Wireless core on Wio Terminal. **This is essential and must update to the latest firmware before proceeding to examples.**
        
<div class="tips" style="display: table; table-layout: fixed; background-color: #F5A9A9; height: auto;  width: 100%;">
<div class="left-icon" style="display: table-cell; vertical-align: middle; background-color: #DF0101; padding-top: 10px; box-sizing: border-box; height: auto; width: 38px; text-align: center;"><img style="width: 26px; vertical-align: middle;" src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
<div class="right-desc" style="display: table-cell; vertical-align: middle; padding-left: 15px; box-sizing: border-box; width: calc(95% - 38px);">
<p style="color: #000000; font-weight: bold; margin-top: 10px;">Attention</p>
<p style="color: #000000; font-size: 14px;">Please update the Wi-Fi Core before usage!</p>
</div>
</div>

### Step 1 - Arduino Configuration

To be able to update the firmware on the RTL8720, we need to enable the Serial connection from SAMD51 to RTL8720. This is done by a simple Arduino Program.

#### `uf2` Method

For convenience, we the provide `uf2` methods of uploading Wio Terminal's firmware. Simply download the `uf2` files from below.

- Download the [**rtl8720_update.uf2**](http://files.seeedstudio.com/wiki/Wio-Terminal/res/rtl8720_update.uf2) `uf2` files.

Entering the bootloader mode by **sliding the power switch twice quickly**. For more reference, please also see [here](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

An external drive named `Arduino` should appear in your PC. Drag the the downloaded `rtl8720_update.uf2` files into the `Arduino` drive and it will reset the Wio Terminal and loaded loaded the sketch!

<div align=center><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png"/></div>

### Step 2 - Download the Latest Firmware

Download the latest [**RTL8720 Firmware**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/20200730-rtl8720d-images-v2.2.0.2.zip) Here.

## CLI Methods

Now, you can flash the RTL8720 firmware to Wio Terminal using the **CLI methods**.

Download the **CLI firmware flash tools** for your OS:

- [**Windows**](http://files.seeedstudio.com/arduino/tools/amebad_flash_tool/amebad_flash_tool_v0.1.0_windows.7z)

- [**macOS**](http://files.seeedstudio.com/arduino/tools/amebad_flash_tool/amebad_flash_tool_v0.1.0_macos.zip)

- [**Linux**](http://files.seeedstudio.com/arduino/tools/amebad_flash_tool/amebad_flash_tool_v0.1.0_linux.tar.gz)

### CLI Example Usage

Let's take macOS as an example. Unzip the downloaded file into your drive.

- Open terminal and navigate to the file location:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/CLI-methods.png"/></div>

- Run `./amebad_flash_tools` in the location you should see the help usage:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/CLI-HELP.png"/></div>

- To erase the initial firmware inside the RTL8720, run:

```sh
./amebad_flash_tools erase --port /dev/cu.usbmodem*
```

Replace `/dev/cu.usbmodem*` with the port name in your PC.

!!!Note
        For **Linux**, the port name should be something like: `/dev/ttyACM*`.
  
  **NOTE:** The initial erase process may take a while. Please be patient and **do not** close windows.

It should look something like this:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/CLI-ERASE-1.png"/></div>

- To flash the new downloaded firmware into the RTL8720, run:

```sh
./amebad_flash_tools flash -d [RTL8720-firmware-path] --port /dev/cu.usbmodem*
```

Replace `[RTL8720-firmware-path]` with the path you downloaded the RTL8720 from above.

This location should contain `km0_boot_all.bin`, `km0_km4_image2.bin` and `km4_boot_all.bin` these 3 files.

Also replace `/dev/cu.usbmodem*` with the port name in your PC.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/CLI-UPLOAD-1.png"/></div>

If everything goes well, you should see all a successful message. Now you have flashed the new RTL8720 firmware into the RTL8720 core!

## Libraries Installation

There are few Arduino Libraries that are needed for the Wireless connectivity. Follow through to install all the libraries needed:

### 1. Install the Seeed_Arduino_atWiFi

1. Visit the [Seeed_Arduino_atWiFi](https://github.com/Seeed-Studio/Seeed_Arduino_atWiFi) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_atWiFi library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_atWiFi` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 2. Install the Seeed-Arduino-FreeRTOS

1. Visit the [Seeed-Arduino-FreeRTOS](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS) repositories and download the entire repo to your local drive.

2. Now, the Seeed-Arduino-FreeRTOS library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed-Arduino-FreeRTOS` file that you've have just downloaded.

### 3. Install the Seeed_Arduino_atUnified

1. Visit the [Seeed_Arduino_atUnified](https://github.com/Seeed-Studio/Seeed_Arduino_atUnified) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_atUnified library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_atUnified` file that you've have just downloaded.

### 4. Install the Seeed-Studio/esp-at-lib

1. Visit the [Seeed-Studio/esp-at-lib](https://github.com/Seeed-Studio/esp-at-lib) repositories and download the entire repo to your local drive.

2. Now, the esp-at-lib library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `esp-at-lib` file that you've have just downloaded.

### 5. Install the Seeed_Arduino_mbedtls

1. Visit the [Seeed_Arduino_mbedtls](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_mbedtls library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_mbedtls` file that you've have just downloaded.

### 6. Install the Seeed_Arduino_atWiFiClientSecure

1. Visit the [Seeed_Arduino_atWiFiClientSecure](https://github.com/Seeed-Studio/Seeed_Arduino_atWiFiClientSecure.git) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_atWiFiClientSecure library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_atWiFiClientSecure` file that you've have just downloaded.