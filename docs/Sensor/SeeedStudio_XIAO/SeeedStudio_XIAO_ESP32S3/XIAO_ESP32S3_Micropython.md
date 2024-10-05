---
description: MicroPython for XIAO ESP32S3 Sense
title: XIAO ESP32S3 Project MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO_ESP32S3_Micropython
last_update:
  date: 08/30/2023
  author: Hendra
---

# Micropython for XIAO ESP32S3 Sense(Camera, Wi-Fi)

MicroPython is a lean and efficient implementation of the Python 3 programming language that includes a small subset of the Python standard library and is optimised to run on microcontrollers and in constrained environments.

Since its first initiation in 2014, micropython has already supported many microcontrollers including the ESP32S3 which is the main brain in the Xiao ESP32S3 Sense development board.

In this page I will guide on how to use the the Xiao ESP32S3 Sense capability using the simple and easy syntax from micropython

## Hardware Preparation

I am using Seeed Studio XIAO ESPS3 Sense board here.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
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
          <a class="get_one_now_item" href="https://thonny.org/">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 Greatly Thanks

<strong><font color={'8DC215'} size={"3"}>The firmware designed for XIAO ESP32S3 Sense board, using in this wiki is made by our friend: shariltumin, whom we are really greatful for.</font></strong>


## Getting Started

The firmware is designed only for XIAO ESP32S3 MicroPython programming. We will first flash the firmware and then use the example on it.

### Step 1. Flashing the firmware

Locate the usb to serial port address by opening the device manager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

Extract the downloaded zip file and navigate to the folder.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg" alt="pir" width={600} height="auto" /></p>

click On the path box then type "CMD" and press enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg" alt="pir" width={600} height="auto" /></p>

You will be directed to cmd terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg" alt="pir" width={600} height="auto" /></p>

Install esptool using pip command (make sure python 3 is already installed)
```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

Erase the flash memory on the Xiao ESP32S3 using this command

```cpp
esptool.py --port COMXX erase_flash
```

Now proceed to install the micropython firmware using this command
```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin 
```

:::tip
change the COMXX with port COM number on your PC
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>



### Step 2. Upload the example code

Now we will upload the example code to Xiao ESP32S3 sense internal flash memory.

For this part I am using thonny IDE first I configure the port

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png" alt="pir" width={600} height="auto" /></p>

then on the view menu check mark the file option

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png" alt="pir" width={600} height="auto" /></p>

Navigate to the folder where the example code is extracted then upload the files by right clicking on the file and choose the option like the picture below

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png" alt="pir" width={600} height="auto" /></p>

after all the example code uploaded to xiao esp32s3 board, change the wifi credential on both the streamin_server.py file and the Wifi.py file based on your local wifi configuration

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png" alt="pir" width={600} height="auto" /></p>


### Step 3. Testing the streaming example

Before testing the streaming make sure to install the opencv python library using pip

```cpp
pip install opencv-python
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png" alt="pir" width={600} height="auto" /></p>

after the opencv python library installed successfully I go back to thonny and run the streamin_server.py and copy the IP address of the xiao ESP32S3 board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png" alt="pir" width={600} height="auto" /></p>

then go back to the extracted zip folder and open the steamin_client.py using python's IDLE and change the IP address part to be the same with the xiao ESP32S3 board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png" alt="pir" width={600} height="auto" /></p>

Then try to run the file and you should see a new windows displaying the streaming image from the Xiao ESP32S3 sense board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg" alt="pir" width={600} height="auto" /></p>

:::caution
When launching the streaming example, the Xiao ESP32S3 Sense Board could get quite hot.
:::

## What's More

By using this examples you can make a fast and simple CCTV project and since the Xiao ESP32S3 sense is small in size the project could be seamless

## Troubleshooting

If the camera is not initialized successfully(display a frame then freeze) or can't reconnect to the wifi try to unplugged the board and relaunch Thonny IDE.

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- Thanks [Hendra and shariltumin efforts](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545) and your work will be [exhibited](https://wiki.seeedstudio.com/Honorary-Contributors/).

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
