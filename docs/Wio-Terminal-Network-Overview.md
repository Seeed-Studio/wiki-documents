# Overview

This wiki introduce how to update the latest firmware for the Wireless Core Realtek RTL8720 on Wio Terminal, as well as installing all the dependent libraries for Wio Terminal to enable wireless connectivity.

!!!Note
    **We are moving the Wi-Fi Software to the new eRPC Structure which is more stable and can work with the Bluetooth at the same time**! Please follow through to update to eRPC Wi-Fi firmware and related libraries!

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

- Download the [**rtl8720_update_v2.uf2**](http://files.seeedstudio.com/wiki/Wio-Terminal/res/rtl8720_update_v2.uf2) `uf2` files.

Entering the bootloader mode by **sliding the power switch twice quickly**. For more reference, please also see [here](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

An external drive named `Arduino` should appear in your PC. Drag the the downloaded `rtl8720_update_v2.uf2` files into the `Arduino` drive and it will reset the Wio Terminal and loaded loaded the sketch!

<div align=center><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png"/></div>

You should see that **Burn RTL8720 fw** on the Wio Terminal's screen. This means that it is currently in the burning firmware mode!

!!!Note
    If you want to get out of the **Burn RTL8720 fw** mode, you simply need to [reset](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq) the Wio Terminal and upload any Arduino sketch using the Arduino IDE.

> You can also find the source code of the rtl8720_update_v2.uf2 [**here**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_USB2Serial_Burn8720/WioTerminal_USB2Serial_Burn8720.ino).

### Step 2 - Download the Latest Firmware

**Note:** This is the latest **eRPC Structure Firmware** for RTL8720

- Download the latest [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) Here.

## CLI Methods

Now, you can flash the RTL8720 firmware to Wio Terminal using the **CLI methods**.

Download the **CLI tools** as follows using **Terminal**:

```sh
$ cd ~
$ git clone https://github.com/LynnL4/ambd_flash_tool
```

### CLI Example Usage

- For **macOS** and **LinuxOS**, please use the **`ambd_flash_tool.py`** script.

- For **Windows OS**, please use the **`ambd_flash_tool.exe`** script.

> Usage under **Window OS**:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/win-new-tool.png"/></div>

Let's take macOS as an example, which is the `ambd_flash_tool.py` script.

- Open terminal and navigate to the file location. Run `python3 ambd_flash_tool.py` in the location and you should see the help usage:

**NOTE**: Make you have **Python 3 installed on your PC (macOS and LinuxOS)**, and the script will auto-download all the dependent libraries.

> In some cases, you may only have Python 3 on your PC, then replace `python3 ambd_flash_tool.py` with `python ambd_flash_tool.py`.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/v2-1.png"/></div>

- To erase the initial firmware inside the RTL8720, run:

> It supports Auto-Detect Port function!

```sh
$ python3 ambd_flash_tool.py erase
```
  
  **NOTE:** The initial erase process may take a while. Please be patient and **do not** close windows.

It should look something like this:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/v2-2.png"/></div>

- To flash the new downloaded firmware into the RTL8720, run:

```sh
$ python3 ambd_flash_tool.py flash -d [RTL8720-firmware-path]
```

Replace `[RTL8720-firmware-path]` with the path you downloaded the RTL8720 from above.

This location should contain `km0_boot_all.bin`, `km0_km4_image2.bin` and `km4_boot_all.bin` these 3 files.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/v2-3.png"/></div>

If everything goes well, you should see all a successful message. Now you have flashed the new RTL8720 firmware into the RTL8720 core!

## Libraries Installations (eRPC)

There are few Arduino Libraries that are needed for the Wireless connectivity. Follow  through to install all the libraries needed:

!!!Note
    Please update the **Seeed SAMD ArduinoCore to the latest version(>=1.8.1)**!

> You can also find the source code of Seeed SAMD ArduinoCore [**here**](https://github.com/Seeed-Studio/ArduinoCore-samd).    

### 1. Install the Seeed_Arduino_rpcWiFi
 
1. Visit the [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) repositories and download the entire repo to your local drive.
 
2. Now, the Seeed_Arduino_rpcWiFi library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_rpcWiFi` file that you've have just downloaded.
 
![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 2. Install the Seeed_Arduino_rpcUnified

1. Visit the [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_rpcUnified library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_rpcUnified` file that you've have just downloaded.

### 3. Install the Seeed_Arduino_mbedtls

1. Visit the [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls/tree/dev) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_mbedtls library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_mbedtls` file that you've have just downloaded.

### 4. Install the Seeed_Arduino_FS

1. Please follow the [**Wio Terminal FS Overview**](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/) to install dependent libraries.

-----------

> **NOTE:** The following are dependencies of the **old AT-Command Structure Wi-Fi  firmware and related libraries**.This software does not work with Bluetooth at the same time and is getting **depreciated**, please move the eRPC firmware if possible!


> ## RTL8720 AT-Command Structure Firmware
> 
>This is the AT-Command Structure [RTL8720 Firmware](https://files.seeedstudio.com/wiki/Wio-Terminal/res/20200730-rtl8720d-images-v2.2.0.2.zip).
> 
> ## AT-Firmware Libraries Installation
> 
> There are few Arduino Libraries that are needed for the Wireless connectivity. Follow  through to install all the libraries needed:
> 
> ### 1. Install the Seeed_Arduino_atWiFi
> 
> 1. Visit the [Seeed_Arduino_atWiFi](https://github.com/Seeed-Studio/Seeed_Arduino_atWiFi) > repositories and download the entire repo to your local drive.
> 
> 2. Now, the Seeed_Arduino_atWiFi library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_atWiFi` file that you've have just downloaded.
> 
> ![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)
> 
> ### 2. Install the Seeed-Arduino-FreeRTOS
> 
> 1. Visit the [Seeed-Arduino-FreeRTOS](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS) repositories and download the entire repo to your local drive.
> 
> 2. Now, the Seeed-Arduino-FreeRTOS library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed-Arduino-FreeRTOS` file that you've have just downloaded.
> 
> ### 3. Install the Seeed_Arduino_atUnified
> 
> 1. Visit the [Seeed_Arduino_atUnified](https://github.com/Seeed-Studio/Seeed_Arduino_atUnified) repositories and download the entire repo to your local drive.
> 
> 2. Now, the Seeed_Arduino_atUnified library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_atUnified` file that you've have just downloaded.
> 
> ### 4. Install the Seeed-Studio/esp-at-lib
> 
> 1. Visit the [Seeed-Studio/esp-at-lib](https://github.com/Seeed-Studio/esp-at-lib) > repositories and download the entire repo to your local drive.
> 
> 2. Now, the esp-at-lib library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `esp-at-lib` file that you've have just downloaded.
> 
> ### 5. Install the Seeed_Arduino_mbedtls
> 
> 1. Visit the [Seeed_Arduino_mbedtls](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) repositories and download the entire repo to your local drive.
> 
> 2. Now, the Seeed_Arduino_mbedtls library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_mbedtls` file that you've have just downloaded.
> 
> ### 6. Install the Seeed_Arduino_atWiFiClientSecure
> 
> 1. Visit the [Seeed_Arduino_atWiFiClientSecure](https://github.com/Seeed-Studio/Seeed_Arduino_atWiFiClientSecure.git) repositories and download the entire repo to your local drive.
> 
> 2. Now, the Seeed_Arduino_atWiFiClientSecure library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_atWiFiClientSecure` file that you've have just downloaded.