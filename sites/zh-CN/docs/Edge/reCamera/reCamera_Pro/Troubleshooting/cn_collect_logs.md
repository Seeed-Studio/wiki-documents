---
description: 如何从 reCamera Pro 收集系统日志、固件版本和设备信息，以便进行故障排查或技术支持请求。
title: 为技术支持收集日志
keywords:
  - reCamera
  - reCamera Pro
  - 日志
  - 故障排查
  - 支持
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_collect_logs
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_collect_logs/
---

# 为技术支持收集日志

当通过 [按症状排查问题](/cn/recamera_pro_faqs/) 无法解决问题时，下一步就是收集日志和设备信息。技术支持会要求提供：

1. **固件版本和基本设备信息** — 设备当前运行的内容。
2. **系统日志** — 问题发生时设备正在执行的操作。
3. **复现步骤** — 如何稳定地触发该问题。

{/* TODO(verify): confirm whether the device or WebUI offers a one-click "export support bundle" feature on current firmware, and document it here if available. */}

## 1. 固件版本和基本设备信息

在左侧导航栏中打开 **Device Info**：

- **Basic Information** — 硬件/软件版本信息和系统资源使用情况。
- **System Settings** — 当前固件版本。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_aWZqM1cZvA.png" />

记录以下信息，并在提交支持请求时一并附上：

| 项目 | 获取位置 |
| --- | --- |
| 固件版本 | Device Info → System Settings |
| 硬件型号 / SKU | Basic Information |
| 软件版本 | Basic Information |
| 系统资源使用情况（CPU、内存、存储） | Basic Information |

## 2. 系统日志

在左侧导航栏中打开 **Terminal**，然后切换到 **System Log** 区域。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/20260708190224_6_2.png" />

在这里你可以：

- 实时查看系统日志输出。
- 按日志级别或关键字筛选日志。
- 清除当前显示内容。
- **下载日志文件** — 这是技术支持所需要的内容。

### 日志中需要捕获的内容

- 在系统日志持续输出时复现问题。
- 在问题发生**之后立即**下载日志，以确保相关条目仍在缓冲区中。
- 如果问题是间歇性的，每次出现后都下载日志，并记录每次事件的时间戳。

## 3. 终端控制台（可选，高级用户）

Terminal 中的 **Terminal console** 允许你直接从 Web UI 登录到 reCamera Pro 的系统 shell，而无需单独的 SSH 工具。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2dvKqObUbo.png" />

终端控制台的默认凭据：

```
Username: root
Password: recamera
```

:::caution
终端控制台提供对系统的完全访问权限。仅运行你理解的命令，且不要在未经技术支持指示的情况下修改系统文件。

{/* TODO(verify): confirm whether the default terminal password is still `recamera` on current firmware, and whether changing the WebUI admin password also changes the terminal root password. */}
:::

如果你已经在 Connection Settings 中[启用 SSH](/cn/recamera_pro_device_info/)，也可以通过 SSH 连接来收集日志——当 WebUI 本身无响应时非常有用。

## 4. 复现步骤

技术支持会询问如何触发该问题。请写下：

- 问题出现时你正在进行的操作（例如上传模型、开始录制、连接 Wi-Fi）。
- 你期望发生的情况与实际发生的情况。
- 问题是可复现的、间歇性的，还是只出现过一次。
- 固件版本以及任何最近的更改（模型上传、配置导入、固件更新）。

## 提交给技术支持

一份完整的技术支持请求应包含：

| 项目 | 来源 |
| --- | --- |
| 固件版本 | 步骤 1 |
| 基本设备信息截图 | 步骤 1 |
| 下载的系统日志文件 | 步骤 2 |
| 复现步骤 | 步骤 4 |

在创建工单时附上这些内容。初始信息越完整，问题解决就会越快。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
