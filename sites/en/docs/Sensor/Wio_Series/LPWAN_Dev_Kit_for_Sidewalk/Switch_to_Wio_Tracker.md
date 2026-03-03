---
description: Flash the Sidewalk version to LoRaWAN version
title: Flash the Sidewalk version to LoRaWAN version
keywords:
- Tracker
- sidewalk
- Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /flash_to_wio_tracker
last_update:
  date: 12/22/2023
  author: Jessie
---

This tutorial will guide users to flash the LPWAN Dev Board for Amazon Sidewalk to the Wio Tracker 1110 Dev Board, for those who want to use the LoRaWAN network.

### Preparation

- LPWAN Dev Kit for Amazon Sidewalk x 1

- Computer x 1

- USB Type-C Cable x 1

- J-Link Debug Programmer x 1

- [Bootloader file](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110)

- [Application Firmware](https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)

:::note
Please note that, after you flashing the board, it can not use SenseCAP Cloud, because there is no keys of SenseCAP Cloud, but you can use other platforms like TTN, Helium, AWS, etc.
:::

### Connect the board

Connect the Dev Board to the J-Link Debug Programmer as follows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connection-pin.png" alt="pir" width={700} height="auto" /></p>

:::info Connection:
**DIO** (Wio-WM1110 Dev Board Pin2) -> **SWDIO** (J-Link Debug Programmer Pin7)  
**CLK** (Wio-WM1110 Dev Board Pin4) -> **SWDCLK** (J-Link Debug Programmer Pin9)  
**GND** (Wio-WM1110 Dev Board Pin5) -> **GND** (J-Link Debug Programmer GND)
:::

### Flash the bootloader

- **Step 1**: Create a new project

Open the JFlash, select `Create new project`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

Click the `...` to select the target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

Select `nRF52840_xxAA`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/choose-device.png" alt="pir" width={700} height="auto" /></p>

Target interface: `SWD`, then click `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/new-created.png" alt="pir" width={700} height="auto" /></p>

- **Step 2**: Connect the target

Power on the board and connect to the JLink, then click `Target` -> `Connect`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connect-target.png" alt="pir" width={700} height="auto" /></p>

When the connection is successful, it will show a prompt like this:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connected-.png" alt="pir" width={700} height="auto" /></p>

<details>

<summary>Data Backup</summary>

Before we start flashing the board, it is recommended to make a backup just in case.

Click `Target` -> `Manual Programming` -> `Read Back` -> `Entire chip`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-chip.png" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-success.png" alt="pir" width={700} height="auto" /></p>

Then save the data, click `File` -> `Save data file as`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/files-save.png" alt="pir" width={700} height="auto" /></p>

</details>

- **Step 3**: Download the file

Click `File` -> Open `data file`, select the [bootloader](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110) file of the Wio Tracker 1110 Dev Board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/open-data-file.png" alt="pir" width={700} height="auto" /></p>

Click `Target` -> `Production Programming`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flashing.png" alt="pir" width={700} height="auto" /></p>

When programming is successful, it will show a prompt like this:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flash-success.png" alt="pir" width={700} height="auto" /></p>

### Download the application

Double click the `Reset` button, there should be a `BOOT` disk in your PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/boot-disk.png" alt="pir" width={700} height="auto" /></p>

Copy the .uf2 file to the disk, the download will run automatically, then the disk will log out.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/uf2-file.png" alt="pir" width={700} height="auto" /></p>

You can also upgrade your own applicaiton by Arduino.

### Check the log

Then we can open the serial monitor to check the log.
After the flashing, the DevEUI/AppEUI/Appkey will be 0.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/join-fail.png" alt="pir" width={700} height="auto" /></p>

You can use the SenseCAP Mate APP to choose the platform and define the DevEUI/AppEUI/Appkey, check the [Get Started](https://wiki.seeedstudio.com/Get_Started_with_Wio-Trakcer_1110/#configure-the-frequency-and-connect-to-the-gateway) for more details.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

:::info note
If you want to use the SenseCAP Cloud, please contact sensecap@seeed.cc
:::

After the settings, the board will reset and rejoin the network.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/joined.png" alt="pir" width={700} height="auto" /></p>
