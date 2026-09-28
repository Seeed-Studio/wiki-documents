---
title: reCamera Pro 常见问题
description: 本文总结了 reCamera Pro 常见问题及其解决方案，帮助你快速定位并修复诸如 WebUI 无法预览视频流、上传模型导致系统卡死等问题。
keywords:
  - reCamera Pro
  - FAQ
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs_legacy
draft: true
sku: 10003420
sidebar_position: 1
last_update:
  date: 2026-08-05
  author: Sizhaozhou
createdAt: '2026-08-05'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/cn/recamera_pro_faqs_legacy/
---
<!-- 旧版页面（reCamera Pro wiki 重构，第 2 阶段）：此页面已被 Troubleshooting/troubleshooting.md（https://wiki.seeedstudio.com/cn/recamera_pro_faqs/）取代，该页面现在使用原始 slug /recamera_pro_faqs。此文件作为草稿（slug /recamera_pro_faqs_legacy）保留以供历史记录，并从正式构建中排除。请不要链接到此处。 -->

## 内容迁移索引（旧版页面）

| 原章节 | 新位置 |
| --- | --- |
| Q1 Wi-Fi 连接错误 / 无视频预览 | [故障排查](https://wiki.seeedstudio.com/cn/recamera_pro_faqs/)（此 slug） |
| Q2 FP16 模型上传导致 Web UI 卡死 | [故障排查](https://wiki.seeedstudio.com/cn/recamera_pro_faqs/), [验证你的模型](https://wiki.seeedstudio.com/cn/recamera_pro_model_validate/) |

# reCamera Pro 常见问题


## 1. WebUI 反复显示 Wi-Fi 连接错误且无法预览视频流

**现象**：WebUI 界面反复提示 Wi-Fi 连接错误，且无法正常预览视频流。

**解决方案**：

- 首先检查设备是否正常供电。
- 如果使用 Type-C 接口供电，请务必使用支持 PD 协议的电源适配器。
- 建议使用出厂附带的 DC 电源线供电，以确保电力供应稳定。

## 2. 上传 FB16 精度模型导致 WebUI 卡死

**现象**：在 V1.1.1 及更早版本中，上传 FB16 精度模型会导致系统主进程卡死。

**解决方案**：你可以通过以下两种方法之一进行修复：

1. **恢复出厂设置**：长按设备侧面的按键 15 秒，恢复出厂设置。
2. **修改系统配置文件**：
   - 通过 USB 线连接设备，并使用 SSH 登录设备。
   - 修改 `/userdata/config/rkipc.ini` 文件。
   - 将 `[rc_model.0]` 配置段中的 `model` 字段修改为 `yolox_s.rknn`。

## 技术支持与产品交流

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>