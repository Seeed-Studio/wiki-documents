---
description: 如何通过 USB 或以太网使用 Seeed Jetson DevelopTool 将 Seeed Jetson 设备连接到主机电脑。
title: 连接设备
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - connect device
  - SSH
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_connect_device
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/cn/jetson_developtool_connect_device/
---

Seeed Jetson DevelopTool 会根据任务类型，以两种方式连接到你的 Jetson 设备：

| 连接类型 | 用途 |
|-----------------|----------|
| **USB（恢复模式）** | 通过 Flash Center 烧录固件 |
| **以太网 / SSH** | 设备管理、远程开发、应用市场、技能、PC 网络共享 |

## USB 连接（恢复模式）

烧录固件需要进入恢复模式。进入恢复模式的方法如下：

1. 关闭 Jetson 设备电源。
2. 按住设备上的 **Recovery** 按钮。
3. 在按住 Recovery 的同时，将 USB-C 线缆连接设备与主机电脑（或给设备上电）。
4. 2 秒后松开 Recovery 按钮。

在 DevelopTool 中打开 **Flash Center**，点击 **Detect Device** 以确认已识别到 USB 连接。

:::tip
在 Linux 上，你可以通过以下方式确认设备是否出现：

```bash
lsusb | grep NVIDIA
```

你应该能看到类似 `NVIDIA Corp. APX` 的条目。
:::

:::caution
在 Windows 上，通过 WSL2 进行 USB 透传需要 `usbipd` 工具。为了获得更可靠的烧录体验，推荐使用原生 Linux。
:::

## 以太网 / SSH 连接

对于所有非固件烧录的功能，DevelopTool 会通过以太网（或已配置的 Wi-Fi）使用 SSH 连接到 Jetson。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-device-connection.png" style={{width:800, height:'auto'}}/></div>

**步骤：**

1. 将 Jetson 和主机电脑连接到同一网络，或者使用启用了 [PC Network Sharing](/cn/jetson_developtool_remote_development) 的直连以太网线缆。
2. 在 DevelopTool 中打开 **Remote Dev** 选项卡。
3. 在 **Device Connection** 面板中输入 Jetson 的 IP 地址、SSH 用户名和密码。
4. 点击 **Connect**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/connect-device-connection.png" style={{width:800, height:'auto'}}/></div>

连接成功后，设备状态面板会显示实时的 CPU、GPU、内存和温度信息。

:::tip
如果你不知道 Jetson 的 IP 地址，可以在首次启动时使用 [Jetson Init](/cn/jetson_developtool_remote_development) 串口向导配置网络并显示分配的 IP。
:::

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
