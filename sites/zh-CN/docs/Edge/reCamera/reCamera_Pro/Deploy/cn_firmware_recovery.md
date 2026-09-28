---
description: 检查固件版本、更新 reCamera Pro 固件、重启系统，以及通过出厂重置（按键或 Web UI）恢复设备。
title: 固件更新与恢复
keywords:
  - reCamera
  - reCamera Pro
  - firmware update
  - factory reset
  - recovery
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_firmware_update
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_firmware_update/
---

# 固件更新与恢复

本页介绍 **Device Info → System Settings** 中的生命周期操作：检查固件版本、更新固件、重启系统——以及当设备异常时的恢复路径：出厂重置。

:::caution 开始之前
在进行任何更新或重置前，请先导出[配置备份](/cn/recamera_pro_backup_restore/)，并记录当前固件版本。整个过程中请保持设备电源稳定——中断的更新可能导致设备无法启动。
:::

## 检查当前固件版本

打开 **Device Info → System Settings**：页面会显示设备当前的固件版本（基础软硬件版本也会显示在 [Basic Information](/cn/recamera_pro_device_info/#basic-information) 下）。请在资产清单中记录该版本——技术支持和缺陷报告都需要这一信息。

{/* TODO(verify): add a screenshot of System Settings highlighting the firmware version field, and document where official firmware packages are published (download page / release notes) and how version numbers map to releases. */}

## 更新固件

在 **Device Info → System Settings** 中，选择是否更新到新固件，并按照屏幕上的流程操作。在空中升级过程中，绿色状态指示灯会以 **约 100 ms 频率闪烁**——此时请勿断电。更新完成并且设备重启后，指示灯会恢复为常亮绿色。

更新完成后：

1. 在 System Settings 中重新检查固件版本，确认新版本已在运行。
2. 验证设备仍能按预期进行检测和录像（[部署前检查清单](/cn/recamera_pro_deploy_checklist/)中的第 5–6 项是不错的快速测试）。
3. 如果你从旧版本导入了配置，请重新执行[恢复验证步骤](/cn/recamera_pro_backup_restore/#verify-a-restore)。

{/* TODO(verify): document the exact update flow on current firmware — whether updates are pulled OTA from the Internet, uploaded as a package, or both; what data is preserved across an update (settings, uploaded models, recordings); and the failure-recovery path if an update is interrupted. */}

## 重启系统

System Settings 也提供远程**重启**功能。可在导入配置、修改网络设置之后，或用于清除卡死的服务时使用。设备会重启，并应在正常启动时间内恢复为绿色常亮。

## 恢复：出厂重置

如果设备卡死、使用已配置密码无法访问，或在更新后出现异常行为，可以恢复出厂设置。共有两种方法：

### 方法一：硬件按键

按住并**长按侧边按键约 15 秒**，直到听到提示音——此时设备已进入重置模式。等待绿色状态指示灯保持常亮，然后重新登录（将进入首次登录流程并使用初始密码，与新设备相同）。

### 方法二：Web UI

点击 **Device Info → System Settings → Factory Reset**。

![Factory reset diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-Pro_reset_Device.jpg)

:::warning 出厂重置会将设备恢复到开箱状态
设置会被清除——请计划在之后重新导入你的[配置备份](/cn/recamera_pro_backup_restore/)，然后重新验证网络访问、时间和检测功能。

{/* TODO(verify): state exactly what a factory reset preserves vs wipes on current firmware (recorded media on SD/eMMC, uploaded model files, Wi-Fi credentials, admin password), and whether the button-reset prompt sound/15 s timing is unchanged. */}
:::

## 如果设备完全无法启动

- 先检查电源：绿色指示灯熄灭表示核心进程未运行；短暂的绿色闪烁表示检测到文件系统不干净的 SD 卡——请重新插拔或重新格式化 SD 卡。
- 呼吸灯一直不变为常亮表示启动卡住——请对设备断电重启，然后尝试按键出厂重置。
- 指示灯状态参考：[快速上手，状态指示灯](/cn/recamera_pro_getting_started/#status-indicator-reference)。更多症状请参考：[按症状排查](/cn/recamera_pro_faqs/)。

{/* TODO(verify): confirm the last-resort recovery path (e.g. re-flashing factory system image over USB/SD) for a device that does not respond to button reset, and link the official recovery material once identified. */}

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
