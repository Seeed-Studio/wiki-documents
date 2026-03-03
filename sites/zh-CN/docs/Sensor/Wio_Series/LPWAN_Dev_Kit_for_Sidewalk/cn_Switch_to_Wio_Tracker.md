---
description: 将 Sidewalk 版本刷写为 LoRaWAN 版本
title: 将 Sidewalk 版本刷写为 LoRaWAN 版本
keywords:
- Tracker
- sidewalk
- Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/flash_to_wio_tracker
last_update:
  date: 12/22/2023
  author: Jessie
---

本教程将指导用户将 LPWAN Dev Board for Amazon Sidewalk 刷写为 Wio Tracker 1110 Dev Board，适用于想要使用 LoRaWAN 网络的用户。


### 准备工作

* LPWAN Dev Kit for Amazon Sidewalk x 1

* 计算机 x 1

* USB Type-C 数据线 x 1

* J-Link 调试编程器 x 1

* [引导加载程序文件](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110)

* [应用程序固件](https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)


:::note
请注意，刷写板子后，它无法使用 SenseCAP Cloud，因为没有 SenseCAP Cloud 的密钥，但您可以使用其他平台，如 TTN、Helium、AWS 等。
:::


### 连接板子

按如下方式将开发板连接到 J-Link 调试编程器：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connection-pin.png" alt="pir" width={700} height="auto" /></p>

:::info 连接方式：
**DIO** (Wio-WM1110 开发板 Pin2) -> **SWDIO** (J-Link 调试编程器 Pin7)  
**CLK** (Wio-WM1110 开发板 Pin4) -> **SWDCLK** (J-Link 调试编程器 Pin9)  
**GND** (Wio-WM1110 开发板 Pin5) -> **GND** (J-Link 调试编程器 GND)
:::


### 刷写引导加载程序

* **步骤 1**：创建新项目

打开 JFlash，选择 `Create new project`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

点击 `...` 选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

选择 `nRF52840_xxAA`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/choose-device.png" alt="pir" width={700} height="auto" /></p>

目标接口：`SWD`，然后点击 `OK`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/new-created.png" alt="pir" width={700} height="auto" /></p>

* **步骤 2**：连接目标

给板子上电并连接到 JLink，然后点击 `Target` -> `Connect`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connect-target.png" alt="pir" width={700} height="auto" /></p>

连接成功时，会显示如下提示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connected-.png" alt="pir" width={700} height="auto" /></p>


<details>

<summary>数据备份</summary>

在开始刷写板子之前，建议进行备份以防万一。

点击 `Target` -> `Manual Programming` -> `Read Back` -> `Entire chip`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-chip.png" alt="pir" width={700} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-success.png" alt="pir" width={700} height="auto" /></p>

然后保存数据，点击 `File` -> `Save data file as`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/files-save.png" alt="pir" width={700} height="auto" /></p>


</details>

* **步骤 3**：下载文件

点击 `File` -> 打开 `data file`，选择 Wio Tracker 1110 开发板的[引导加载程序](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110)文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/open-data-file.png" alt="pir" width={700} height="auto" /></p>

点击 `Target` -> `Production Programming`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flashing.png" alt="pir" width={700} height="auto" /></p>


编程成功时，会显示如下提示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flash-success.png" alt="pir" width={700} height="auto" /></p>

### 下载应用程序

双击 `Reset` 按钮，您的 PC 中应该会出现一个 `BOOT` 磁盘。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/boot-disk.png" alt="pir" width={700} height="auto" /></p>

将 .uf2 文件复制到磁盘中，下载将自动运行，然后磁盘将注销。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/uf2-file.png" alt="pir" width={700} height="auto" /></p>

您也可以通过 Arduino 升级自己的应用程序。


### 检查日志

然后我们可以打开串口监视器检查日志。
刷写后，DevEUI/AppEUI/Appkey 将为 0。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/join-fail.png" alt="pir" width={700} height="auto" /></p>


您可以使用 SenseCAP Mate APP 选择平台并定义 DevEUI/AppEUI/Appkey，查看[入门指南](https://wiki.seeedstudio.com/cn/Get_Started_with_Wio-Trakcer_1110/#configure-the-frequency-and-connect-to-the-gateway)了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>


:::info 注意
如果您想使用 SenseCAP Cloud，请联系 sensecap@seeed.cc
:::

设置完成后，板子将重置并重新加入网络。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/joined.png" alt="pir" width={700} height="auto" /></p>