---
description: SenseCAP ONE 气象传感器固件更新
title: 固件更新
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /firmware_update
last_update:
  date: 03/19/2026
  author: Kian
createdAt: '2026-03-19'
url: https://wiki.seeedstudio.com/cn/firmware_update/
updatedAt: '2026-03-31'
---
## SenseCAP ONE 气象传感器固件更新

:::tip
    本次固件更新仅适用于 SenseCAP ONE V2 气象站。
:::

### V1 与 V2 气象站对比

V1 和 V2 气象站可以通过**白色标签上的 SKU**或底座设计来区分。

此外，USB Type-C 接口的位置也不同：在 V1 上，它位于与白色标签同一侧，而在 V2 上，它位于相反的一侧。

<div class="table-center">

| 产品名称           |      V1 SKU          |       V2 SKU         |
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

### SenseCAP ONE 配置工具

SenseCAP ONE Configuration Tool 提供图形界面，方便你对设备进行配置。你可以通过下方 GitHub 链接下载该工具：

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

根据需要选择对应操作系统的版本：Windows、macOS 或 Linux。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

下图展示了 SenseCAP ONE Configuration Tool 的主界面。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

### 固件更新步骤

1. 打开 `SenseCAP One Configuration Tool`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. 使用 Type-C 线缆将设备连接到电脑

3. 打开软件，选择设备对应的正确 `COM` 端口，然后点击 `"Connect"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. 连接成功后，点击 `"Firmware Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. 选择目标板卡和对应的固件文件

- 选择 `Master board` 或 `Slave Board1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- 点击 `"Local File"` 并浏览到固件文件所在文件夹

- 点击 `"Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. 点击 `"Update"` 后，按下设备上的 Reset 按钮（位于 Type-C 接口旁边）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

按下按钮几秒钟后，更新过程将开始。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. 更新完成后，再次按下 Reset 按钮，然后在屏幕上点击 `"OK"`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. 重复上述步骤，将另一份固件烧录到 `Slave Board 1` 上。

9. 完成后关闭 Firmware Update 窗口，并点击 `"Disconnect"`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

至此，气象站的所有固件升级步骤全部完成。

## 固件资源

### 2025-04

- [主控板固件](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/Firmware/sensecap-one-communication-v2_v4.7_release_20250407_154759.bin)

- [从板 1 固件](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/Firmware/sensecap-one-driver-v2_v4.1_release_20250423_194038.bin)
