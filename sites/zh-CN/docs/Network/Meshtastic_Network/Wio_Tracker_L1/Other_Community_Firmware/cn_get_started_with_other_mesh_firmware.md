---
description: 通过 Web USB 或拖放方式在 Wio Tracker L1 Pro 上烧录 MeshCore 固件的指南，以及在应用中配置 LoRa 区域、GPS 和发送消息的步骤。
title: 在 Wio Tracker L1 Pro 上开始使用 MeshCore
keywords:
  - Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-04-17'
url: https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## 固件烧录

### 方法 1：通过 Web Flasher

使用 USB 线将设备连接到电脑。请确保数据线支持数据传输。

:::warning
在数据传输过程中请保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio Wio Tracker L1 Pro`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了 Bluetooth companion 固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

点击 `Enter DFU Mode`，选择名为 "L1 Pro" 或 "TinyUSB serial" 的串口。然后点击 `Erase Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Erase Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Erase Flash`，以确保已经成功进入 DFU 模式。

如果你看到 "Flashing erase firmware:100%"，说明设备已经成功完成擦除。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### 烧录固件

点击 `Enter DFU Mode`，选择名为 "L1 Pro" 或 "TinyUSB" serial 的串口。然后点击 `Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Flash`，以确保已经成功进入 DFU 模式。

当进度条完全填满时，表示 Flash 已完成。随后设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法 2：拖放方式

使用 USB 线将设备连接到电脑。请确保数据线支持数据传输。

:::warning
在数据传输过程中请保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio Wio Tracker L1 Pro`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了 Bluetooth companion 固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

双击 RST 按钮手动进入 DFU 模式。大约 10~15 秒后，你会看到一个名为 `TRACKER L1` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

固件成功烧录后，该磁盘会自动消失。此时设备中还没有固件，因此设备 `NOT` 会自动重启。

#### 烧录固件

选择最新的固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

双击 RST 按钮手动进入 DFU 模式。大约 10~15 秒后，你会看到一个名为 `TRACKER L1` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

固件成功烧录后，该磁盘会自动消失。此时设备中还没有固件，因此设备不会自动重启。

## 配置

### 启动设备

将电源开关向上拨动以开启设备。

:::tip
如果按下按钮时设备没有响应，请先为其充电。不要使用快充充电器。
:::

### 获取 APP

可从 Google Store 或 Apple Store 下载。或者[点击这里](https://meshcore.io/#download)获取 Meshcore APP。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### 通过 App 连接

点击 `Connect` 并选择目标设备。默认设备 ID 为 `Meshcore-MAC Address`。MAC 地址可以在设备底部的标签上看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

输入设备屏幕上显示的 PIN 码，然后点击 `Pair` 以连接设备。

:::tip
如果连接失败，请打开手机的蓝牙列表并 `forget` 或 `Unpair` 该设备，然后再尝试重新连接。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### 通过网页界面连接（BLE）

1. 打开 [MeshCore Web App](https://app.meshcore.nz/) 并点击 **Settings** 图标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. 选择 **BLE** 选项卡，然后点击 **Scan Now**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. 在系统蓝牙弹窗中选择你的设备（例如 MeshCore-xxxxxx），然后点击 **Pair**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. 按提示输入设备屏幕上显示的蓝牙密码，然后点击 **OK**。此密码不是 `123456`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. 等待状态变为已连接，并在 MeshCore 界面中看到你的节点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### 配置 LoRa

为了开始在 mesh 网络中通信，你必须设置所在区域。该设置控制设备使用的频率范围，应根据你所在的地区进行设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

然后重启设备，否则配置不会生效。

**区域列表**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868 MHz|869.4 - 869.65|10|27|

现在你已经在设备上设置了 LoRa 区域，可以继续配置任意[LoRa 参数](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general)以满足你的需求。

### 配置 GPS

如果你想使用 GPS，请将其设置为启用。

你可以在 APP 的 `Position Settings` 中启用 GPS。或者进入设备的 GPS 页面，通过按下四向摇杆来打开或关闭 GPS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### 配置蜂鸣器

点击用户按钮四次来控制蜂鸣器的开启或关闭。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/User.png" alt="pir" width={500} height="auto" /></p>

## 消息传输

如果你有两台受支持的设备，并且你附近没有太多 MeshCore 用户，可以将两台设备都烧录为 BLE Companion 固件，这样你就可以使用你的设备与附近的朋友和家人进行通信。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Frame.png" alt="pir" width={900} height="auto" /></p>

### 广播

MeshCore 允许你手动广播你的姓名、位置和公共加密密钥，这些信息也会被签名以防止伪造。当你点击广播按钮时，它会通过 LoRa 广播这些数据。MeshCore 将此称为一次广播（Advert）。有两种广播方式，“零跳”（zero hop）和“泛洪”（flood）。

- **零跳** 意味着你的广播会发送给所有能听到它的人，仅此而已。
- **泛洪** 意味着它会被广播出去，然后由所有听到它的中继器重复转发。

你可以在 APP 上发送广播。你也可以直接在设备的广播页面上发送广播。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### 公共消息

在你配置好 LoRa 之后，你可以在主信道中发送消息。同一频段内的所有附近用户都能收到。

### 私密消息

只有当两台设备都接收到对方的广播后，它们之间才会建立连接。

## 常见问题

### 设备变砖 & Bootloader 安装

**问题描述：**

设备没有响应，没有 LED 指示灯，无法与你的应用配对。如果你在烧录自己的固件后发现设备完全无法工作，你也可以尝试重新安装 bootloader。

:::danger note
在烧录 bootloader 时，请确保线缆连接稳定，并且在烧录过程中**不要**断开连接。
:::

- 步骤 1：[点击此处下载 Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- 步骤 2：进入 DFU 模式

  双击 RST 按钮进入 DFU 模式。名为 "Tracker L1" 的磁盘会弹出。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- 步骤 3：拷贝 bootloader 文件

  使用下载的 bootloader 文件覆盖磁盘上的所有文件。

- 步骤 4：烧录固件

  完成以上步骤后，你可以按照这个[步骤](https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/#固件烧录-1)来烧录应用固件。你可能需要[手动进入 DFU 模式](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#无法进入-dfu--手动进入-dfu-模式)

### 无法进入 DFU & 手动进入 DFU 模式

将设备连接到电脑，双击按下 `Reset` 按钮。黄色 LED 将保持常亮，并且在电脑上会出现一个名为 `Tracker L1` 的新 USB 驱动器。

### 退出 DFU 模式

按一次 `User` 按钮即可退出 DFU 模式。

### 设备自动关机

#### 问题描述

- 设备开机后，过一段时间会自动关机或重启。
- 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时，手动强制重启或关机导致的：尚未完成消息传输过程、正在配置中……

#### 故障排查

[Flash Erase](https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/#固件擦除-1) 固件

### 恢复出厂设置

如果你想恢复到默认设置，可以执行恢复出厂设置。你可以通过两种方式进行恢复出厂设置。

- [Flash Erase](https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/#固件擦除-1) 固件

- 在应用中点击 `Factory Reset` 按钮。设备将自动以出厂配置重启。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

    为获得最佳信号效果，请在开阔、无遮挡且干扰较少的区域使用设备。

### 兼容天线

如果你需要为 L1 Pro 更换天线，[点击这里](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html)获取一个。

## 资源

- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [(V1) 3D 打印参考文件](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 新四向摇杆) 3D 打印参考文件](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [L1 外壳设计挑战赛](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [外形轮廓文件](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC 认证](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC 认证](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE 认证](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [功耗测试与电池寿命计算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>