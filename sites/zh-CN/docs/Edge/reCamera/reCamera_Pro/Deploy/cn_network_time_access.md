---
description: 配置 reCamera Pro 在日常运行中在网络上的行为——系统时间、SSH/HTTP 访问、串口波特率以及管理员密码。
title: 网络、时间与访问控制
keywords:
  - reCamera
  - reCamera Pro
  - 网络设置
  - SSH
  - 时间设置
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_device_info
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_device_info/
---

# 网络、时间与访问控制

Web UI 的 **Device Info** 区域涵盖了决定已部署的 reCamera Pro 在你网络中如何运行的设置：它的时钟、哪些远程访问服务是开放的，以及谁可以登录。首次 Wi-Fi 连接请参见 [Access the device over Wi-Fi](/cn/recamera_pro_wifi_access/)，本页讲的是设备接入网络后用于 **长期运行** 的配置。

Device Info 还会报告软硬件版本和资源使用情况——参见底部的 [Basic information](#basic-information)，以及系统设置中其余项目的 [Back up and restore](/cn/recamera_pro_backup_restore/) 和 [Firmware update and recovery](/cn/recamera_pro_firmware_update/)。

## 时间设置

系统时间会影响录像计划、文件时间戳和日志条目。在 **Device Info → Time Settings** 中进行设置。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_F3jLNlVu0W.png" />

- 每次重启后，以及将设备移动到无互联网访问的网络后，请核对时钟。
- 如果计划任务或录像目录落在错误的时间点，先检查时间——时钟错误是最常见原因。

{/* TODO(verify): document whether the device syncs time via NTP automatically when connected to the Internet, which NTP servers/regions are used, and how time behaves after reboot without network. */}

## 网络设置（长期）

**Device Info → Network Settings** 显示 Wi-Fi 模组状态、已连接网络，以及详细的网络信息（点击已连接网络旁的感叹号可查看 IP/MAC 详情）。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_GJspvgAFdl.png" />
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_vq4u1biblp.png" />

对于长期部署：

- 在路由器上为设备的 MAC 地址保留一个固定 IP（DHCP 保留），或在资产清单中记录分配到的地址。
- 将设备放在只有目标客户端才能访问 Web UI 和开放服务的网络网段中。

## 连接设置：SSH、HTTP、串口

**Device Info → Connection Settings** 控制你如何连接到设备：

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZH9JMcsCen.png" />

| 设置 | 作用 | 部署建议 |
| --- | --- | --- |
| SSH remote connection | 启用/禁用对系统的 SSH 访问 | 开发和维护阶段启用；对不需要 Shell 访问的生产设备禁用 |
| HTTP settings | 配置设备的 HTTP 服务 | 将暴露范围限制在受信任网络 |
| Serial port baud rate | 设置串口的波特率 | 必须与集成的外部控制器/MCU 保持一致 |

:::caution 访问更改会立即生效
禁用 SSH 或更改 HTTP 设置可能会使你当前的远程会话失效。在修改连接设置时，请保持 Web UI（或 `192.168.42.1` 的 USB 直连）可用，作为回退路径。
:::

{/* TODO(verify): confirm exact HTTP settings fields exposed in Connection Settings on current firmware (port, enable switch, TLS) and document them here. */}

## 密码管理

管理员密码在 **Device Info → System Settings** 中修改。Web UI 登录使用用户名 `admin`；全新设备的初始密码为 `recamera`（首次登录时会要求你设置新密码）。

- **在部署前更改默认密码**——否则任何知道默认密码的人都可以访问 Web UI，而且 [web terminal](/cn/recamera_pro_terminal/) / SSH root 登录（默认 `root` / `recamera`）与设备的凭据状态是共享的。
- 更改密码会影响 Web UI 登录；请记录新密码的存放位置。

{/* TODO(verify): confirm the exact relationship between the Web UI admin password, the root SSH/terminal password, and whether changing one changes the other, on current firmware. */}

## 基本信息

**Device Info → Basic Information** 显示软硬件版本以及系统资源的实时使用情况——这是技术支持首先会询问的信息。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_aWZqM1cZvA.png" />

在进行 [updating firmware](/cn/recamera_pro_firmware_update/) 或 [collecting logs for support](/cn/recamera_pro_collect_logs/) 时，请引用此页面上的固件版本。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
