---
description: 连接网络和一些潜在的故障排除
title: 常见问题
keywords:
  - Edge
  - reCamera
  - network
  - network troubleshoot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/recamera_network_connection
sidebar_position: 6
last_update:
  date: 04/08/2025
  author: Parker Hu
---

# 常见问题

如果您在为 reCamera 配置网络时遇到 USB 连接设备无法识别 reCamera 的情况，以及配置网络后网络连接失败的问题，请参考本文。

需要修改和配置计算机网络环境，包括在 Windows 系统上安装驱动程序、在 Linux 系统上查询网卡，以及在 Mac 系统上配置网络优先级。

## 设置工作环境

### USB NET 设置

为了使用 USB 网络，我们在系统上默认启用了 UsbNcm 和 DHCP。
UsbNcm 在 Linux、macOS 和最新的 Windows 系统上是免驱动的。您可以直接使用 `ssh recamera@192.168.42.1`，`passwd = recamera` 登录到 recamera 的终端。

- [Windows](#jump1)
- [Linux](#jump2)
- [MacOS](#jump3)

### <span id="jump1"> Windows </span>

确保您的计算机上正确安装了 Ncm 驱动程序，如图所示。您可以通过以下路径检查：设备管理器 -> 网络适配器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/002.png" /></div>

如果您的机器没有此驱动程序，请按照以下步骤安装 Ncm。

#### 为 Windows 安装 NCM

**步骤 1**：
按 `win+x` 并选择 `Device Manager`。
在 `other devices` 中找到未识别的设备并选择 `Update driver`。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/003.png" /></div>

**步骤 2**：
选择 `Browse my computer for drivers`

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/004.png" /></div>

**步骤 3**：
选择 `Let me pick from a list of available drivers on my computer`  

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/005.png" /></div>

**步骤 4**：
选择 `Network adapters` 然后点击 `next`

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/014.png" /></div>

**步骤 5**：选择 `Microsoft` -> `UsbNcm Host Device` 然后点击 Next。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/006.png" /></div>

**步骤 6**：当弹出警告栏时，选择 `Yes`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/007.png" /></div>

**步骤 7**：在终端窗口中输入 ping 192.168.42.1。
<br />
以下输出显示您已成功连接到 reCamera。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/008.png" /></div>

### <span id="jump2"> Linux </span>

无需额外设置，只需插入 USB 线缆。输入 `ifconfig`，您将看到 usb1 网络适配器。例如：192.168.42.89。设备的 IP 是 192.168.42.1

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/009.png" /></div>

### <span id="jump3"> MacOS </span>

在系统设置 -> 网络中检查 USB 网络适配器。设备的 IP 是 192.168.42.1

## 计算机网络错误

### Windows

如果您的 Windows 10 系统计算机在使用 reCamera 的 USB 网络后出现网络访问问题。
按 `win+x` 点击 Control Panel。选择 All Control Panel Items -> Network Connections。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/010.png" /></div>

右键点击 UsbNcm Host Device。选择 `Properties` -> `TCP/IPv4` -> `Properties` -> `Advanced` -> 取消选中 `Automatic metric` -> 在 `Interface metric` 字段中输入 `255` -> 点击 `ok`
<br />

然后您的网络就恢复了。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/011.png" /></div>

### MAC

如果您的计算机运行 MacOS。您只需要将计算机网卡 UsbNcm 网卡的优先级设置为最后

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/012.png" /></div>

具体设置如下：

**步骤 1**：选择 `System Settings`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/015.png" /></div>

**步骤 2**：您将看到这个顺序，我们即将更改它。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/016.png" /></div>

**步骤 3**：一直拖到底部，然后点击它。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/017.png" /></div>

**步骤 4**：选择 `Set Service Order`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/018.png" /></div>

**步骤 5**：将 NCM 拖到 Wi-Fi 下方，然后点击 `ok`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/019.png" /></div>

**步骤 6**：最后，您应该看到所示的设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/020.png" /></div>

## 资源

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera 系列](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
