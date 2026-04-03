---
description: SenseCAP ONE Weather Sensor Firmware Update
title: Firmware Update
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /firmware_update
last_update:
  date: 03/19/2026
  author: Kian
createdAt: '2026-03-19'
url: https://wiki.seeedstudio.com/firmware_update/
updatedAt: '2026-03-31'
---
## SenseCAP ONE Weather Sensor Firmware Update

:::tip
    This firmware update is intended exclusively for the SenseCAP ONE V2 weather station.
:::

### V1 vs V2 Weather Stations

V1 and V2 weather stations can be identified by **the SKU on the white label** or by the base design.

Additionally, the USB Type-C port is located differently: on V1, it is on the same side as the white label, while on V2, it is on the opposite side.

<div class="table-center">

| Product Name         |      V1 SKU          |       V2 SKU         |
| -------------------- | -------------------- | -------------------- |
| S200                 |        None          |      101991044       |
| S500                 |      101990693       |      101991021       |
| S600-A               |        None          |      101991232       |
| S700                 |      101990787       |      101991022       |
| S700-A               |        None          |      101991050       |
| S700-B               |        None          |      101991102       |
| S700-C               |        None          |      101991141       |
| S800                 |        None          |      101991023       |
| S900                 |      101990784       |        None          |
| S1000                |      101990902       |      101991024       |

</div>

### SenseCAP ONE Configuration Tool

SenseCAP ONE Configuration Tool offers a graphical interface for you to configure the device. And you can download the tool from the GitHub link below:

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

Select the software for the respective operating system, Windows, macOS, or Linux based on your needs.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

The next image shows the main interface of the SenseCAP ONE Configuration Tool.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

### Firmware Update Procedure

1. Open `SenseCAP One Configuration Tool`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. Connect the device to your computer via the Type-C cable

3. Open the software, select the correct `COM` port for the device, and click `"Connect"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. After connecting, click `"Firmware Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. Select the target board and the corresponding firmware file

- Select the `Master board` or  `Slave Board1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- Click `"Local File"` and browse to the firmware folder

- Click `"Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. Press the Reset button on the device (located next to the Type-C port) after clicking `"Update"`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

The update process will begin a few seconds after pressing the button.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. Once the update is complete, press the Reset button again, then click `"OK"` on the screen.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. Repeat the above steps to flash another firmware onto `Slave Board 1`.

9. Close the Firmware Update window after completion, Click `"Disconnect"`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

This completes all the firmware upgrade steps for the weather station.

## Firmware Resources

### 2025-04

- [Master Board Firmware](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/Firmware/sensecap-one-communication-v2_v4.7_release_20250407_154759.bin)

- [Slave Board 1 Firmware](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/Firmware/sensecap-one-driver-v2_v4.1_release_20250423_194038.bin)
