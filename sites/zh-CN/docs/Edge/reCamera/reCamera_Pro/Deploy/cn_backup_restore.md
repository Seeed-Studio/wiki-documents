---
description: 将 reCamera Pro 配置导出为文件并在另一台设备上导入——备份包含哪些内容、如何恢复以及如何验证。
title: 备份和恢复配置
keywords:
  - reCamera
  - reCamera Pro
  - 备份
  - 恢复
  - 配置
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_backup_restore
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_backup_restore/
---

# 备份和恢复配置

reCamera Pro 可以将当前设置导出为一个文件（`tar` 压缩包），由浏览器下载，并在同一台或另一台设备上导入该文件。这是最快的方式来：

- 在一批设备之间复制经过验证的配置，
- 在[恢复出厂设置或固件恢复](/cn/recamera_pro_firmware_update/)后快速恢复，
- 在更改检测、录像或网络设置之前保留一个已知可用的快照。

## 导出配置备份

1. 登录 Web UI，打开 **Device Info → System Settings**。
2. 点击 **Export Configuration**。
3. 浏览器会自动下载一个包含当前设置的 `tar` 文件。将其安全保存，并使用设备和日期命名（例如 `recamera-frontdoor-2026-09-21.tar`）。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_eBayhpwddh.png" />

:::info 备份包含的内容
导出的文件包含设备当前的设置。在依赖它之前，请在你自己的设备上核实其中包含哪些项目（网络、时间、连接、密码、录像规则、AI 模型配置、声音模型）——并注意，已上传的模型文件和已录制的视频是大量数据，而不是设置。

{/* TODO(verify): enumerate exactly what Export Configuration includes and excludes on current firmware — network/Wi-Fi credentials, admin password, recording trigger rules and schedules, AI model configuration, uploaded .rknn model files, Sound Lab trained models, and recorded media. */}
:::

## 恢复（导入）配置

1. 在目标设备上打开 **Device Info → System Settings**。
2. 选择导入选项，并选择之前导出的 `tar` 文件（与导出相同的文件扩展名）。
3. 导入完成后，配置会自动加载，设备会**重启**。等待重启完成——之后导入的设置即会生效。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_4h4p6raYPF.png" />

:::caution 导入会覆盖当前设置
导入操作会用文件中的内容替换设备现有的配置。如果目标设备上有值得保留的设置，请先导出它们。

{/* TODO(verify): confirm whether import merges or fully replaces settings, and whether importing a backup from a different firmware version is supported or rejected. */}
:::

## 验证恢复结果

设备重启后，确认恢复确实生效：

- [ ] 使用预期密码可以登录 Web UI。
- [ ] 网络/Wi-Fi 状态与备份一致（设备可能会重新连接到文件中记录的 Wi-Fi——请确保该网络在新位置可达）。
- [ ] 时间设置正确（参见 [网络、时间和访问控制](/cn/recamera_pro_device_info/)）。
- [ ] 在 **Recording Settings** 下可以看到录像规则和计划。
- [ ] AI 推理运行的是预期模型，并能检测到真实目标。

## 设备群与生命周期小贴士

- 在每次进行你希望保留的配置更改之后，以及通过[部署前检查清单](/cn/recamera_pro_deploy_checklist/)之后，导出一次备份。
- 要将一台设备克隆到多台设备：配置一台黄金设备，导出一次，然后在每台设备上导入——之后按需调整每台设备的项目（例如 Wi-Fi、时间）。
- 将备份保存在设备之外（电脑或文件服务器）；只保存在设备上的备份会在设备被重置或更换时一并丢失。

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
