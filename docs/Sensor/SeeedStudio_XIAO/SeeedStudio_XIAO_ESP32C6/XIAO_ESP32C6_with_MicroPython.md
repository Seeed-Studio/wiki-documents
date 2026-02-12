---
description: MicroPython for XIAO ESP32C6
title: XIAO ESP32C6 with MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32c6_micropython
last_update:
  date: 08/30/2023
  author: Hendra
---

# Micropython for XIAO ESP32C6

MicroPython is a lean and efficient implementation of the Python 3 programming language that includes a small subset of the Python standard library and is optimised to run on microcontrollers and in constrained environments.

In this page, we will guide on how to use the the XIAO ESP32C6 capability using the simple and easy syntax from micropython.

## Hardware Preparation

I am using Seeed Studio XIAO ESP32C6 board here.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991254-seeedxiao-esp32c6-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Software Preparation

In this guide I will be using **windows 10** alongside with Thonny IDE and esptool. In order to use esptool make sure to install Python 3 environment on your windows OS. Before getting started make sure to download the firmware and Install Thonny

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>Firmware and Sample Code</th>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/ESP32C6-MicroPy/XIAO_ESP32C6_Micropython.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 Greatly Thanks

<strong><font color={'8DC215'} size={"3"}>The firmware designed for XIAO ESP32C6 board, using in this wiki is made by our friend: Zhishuo Song, whom we are really greatful for.</font></strong>

## Getting Started

The firmware is designed only for XIAO ESP32C6 MicroPython programming. We will first flash the firmware and then use the example on it.

### Step 1. Flashing the firmware

Locate the usb to serial port address by opening the device manager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

Extract the downloaded zip file and navigate to the folder.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205037972.png" alt="pir" width={600} height="auto" /></p>

click On the path box then type "CMD" and press enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205105289.png" alt="pir" width={600} height="auto" /></p>

You will be directed to cmd terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022204711119.png" alt="pir" width={600} height="auto" /></p>

Install esptool using pip command (make sure python 3 is already installed)

```bash
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

:::caution Put the board into Bootloader mode
Before flashing, you **must** put the XIAO ESP32C6 into bootloader (download) mode. To do this:
1. Press and **hold** the **BOOT** button.
2. While holding BOOT, press and release the **RESET** button.
3. Release the **BOOT** button.

If the board is not in bootloader mode, flashing will fail with a **"Write timeout"** error and may brick the module.
:::

Erase the flash memory on the XIAO ESP32C6 using this command

```bash
esptool --port COMXX --chip esp32c6 erase-flash
```

Now proceed to install the micropython firmware using this command

```bash
esptool --port COMXX --baud 460800 --before default-reset --after hard-reset --chip esp32c6 write-flash --flash-mode dio --flash-size detect --flash-freq 80m 0x0 ESP32C6_MicroPython.bin
```

:::tip
Change the COMXX with the port COM number on your PC. If flashing fails with a timeout error, try lowering the baud rate to `115200`.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205457866.png" alt="pir" width={600} height="auto" /></p>

### Step 2. Upload the example code

Now we will upload the example code to XIAO ESP32C6 internal flash memory.

For this part I am using thonny IDE first I configure the port

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205437800.png" alt="pir" width={600} height="auto" /></p>

run `blinker.py` example program

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220104960.png" alt="pir" width={600} height="auto" /></p>

## NTP get now time from wifi

### step1: Open `wifi_Ntp.py` file on Thonny

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220645986.png" alt="pir" width={600} height="auto" /></p>

### step2: change you wifi router ssid and password on line 8

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220714175.png" alt="pir" width={600} height="auto" /></p>

### step3: run code

When running the program, you can see in the shell window that the XIAO is connected to the specified wifi and get the NTP network time.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220808948.png" alt="pir" width={600} height="auto" /></p>

## Troubleshooting

- **"Write timeout" or serial exception error**: Make sure the board is in **bootloader mode** before flashing. Hold the **BOOT** button, press and release **RESET**, then release **BOOT**. You should also try lowering the baud rate (e.g., use `--baud 115200` instead of `460800`).
- **Command not found (`esptool.py`)**: Use `esptool` (without `.py`) when installed via `pip install esptool`. On some systems, you may need to use `python -m esptool` instead.
- **Bricked module**: If the module appears bricked, try entering bootloader mode and erasing the flash with `esptool --port COMXX --chip esp32c6 erase-flash`, then re-flash the firmware.

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- Thanks [Hendra and shariltumin efforts](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=c6&pane=issue&itemId=59874459&issue=Seeed-Studio%7Cwiki-documents%7C1117) and your work will be [exhibited](https://wiki.seeedstudio.com/contributors/).

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
