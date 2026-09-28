---
description: 常见 reCamera Pro 问题及其解决方案——按症状组织。涵盖 Wi-Fi 错误、视频预览失败、FP16 模型卡死、USB 网络和恢复出厂设置。
title: 按症状排查
keywords:
  - reCamera
  - reCamera Pro
  - FAQ
  - troubleshooting
  - FP16
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_faqs/
---

# 按症状排查

本页按你**看到的现象**来归类 reCamera Pro 常见问题，方便你直接跳转到对应解决方案。如果都不匹配，请先[收集日志](/cn/recamera_pro_collect_logs/)，再与技术支持分享。

| 症状 | 章节 |
| --- | --- |
| WebUI 反复提示 Wi-Fi 错误 / 无法预览 | [1. Wi-Fi 错误且无预览画面](#1-wi-fi-错误且无预览画面) |
| 上传 FP16 模型后 WebUI 卡死 | [2. 上传 FP16 模型导致 WebUI 卡死](#2-上传-fp16-模型导致-webui-卡死) |
| Windows 通过 USB 无法访问 `192.168.42.1` | [3. Windows USB 连接失败](#3-windows-usb-连接失败) |
| 插上 USB 后电脑无法上网 | [4. 主机电脑通过 USB 失去网络](#4-主机电脑通过-usb-失去网络) |
| 设备需要完全重置 | [5. 恢复出厂设置](#5-恢复出厂设置) |

---

## 1. Wi-Fi 错误且无预览画面

**症状**：WebUI 反复弹出 Wi-Fi 连接错误提示，且无法显示实时预览画面。

**解决方案**：

- 检查设备供电是否正常——供电不稳定是最常见原因。
- 如果通过 Type-C 接口供电，请确保适配器支持 **PD 协议**。
- 为保证稳定运行，建议使用出厂附带的直流电源线（12 V，3 A）。
- 处理好供电后，在 **Device Info → Network Settings** 中确认 Wi-Fi 连接，并确认绿灯常亮，再重新打开预览。

## 2. 上传 FP16 模型导致 WebUI 卡死

**症状**：在固件 **V1.1.1 及更早版本**上，上传 FP16 精度模型会导致主系统进程卡死，WebUI 无响应。

:::note 术语说明
此问题适用于 **FP16**（16 位浮点）模型量化。一些旧文档中使用缩写 “FB16”——两者指的是同一种量化格式。
:::

**解决方案**——根据可用条件选择任一方法：

### 方案 A：恢复出厂设置

长按**设备侧面的按键 15 秒**以恢复出厂设置。设备会在干净配置下重启，并移除有问题的模型。完整重置流程见 [固件升级与恢复](/cn/recamera_pro_firmware_update/)。

### 方案 B：通过 SSH 编辑配置文件

1. 通过 USB 连接设备，并通过 SSH 登录。
2. 打开 `/userdata/config/rkipc.ini` 进行编辑。
3. 在 `[rc_model.0]` 段中，将 `model` 字段改为 `yolox_s.rknn`。
4. 保存并重启设备。

{/* TODO(verify): confirm whether this freeze is fixed on firmware versions after V1.1.1, and state the first firmware version where FP16 models can be uploaded without freezing. */}

## 3. Windows USB 连接失败

**症状**：连接 Type-C 线后，在 Windows 上浏览器访问 `http://192.168.42.1` 无法打开。

**解决方案**：通常是 Windows 虚拟网卡没有自动获取 IP 地址。

1. 打开 **控制面板 → 网络和 Internet → 网络和共享中心 → 更改适配器设置**。
2. 找到名称类似 `Remote NDIS based Internet Sharing Device` 或与 reCamera 相关的适配器（可通过拔插 USB 线观察哪个适配器消失又出现——那就是 reCamera Pro 接口）。
3. 右键 → **属性**。
4. 双击 **Internet 协议版本 4 (TCP/IPv4)**。
5. 选择 **自动获得 IP 地址** 和 **自动获得 DNS 服务器地址**。
6. 点击确定，然后再次尝试访问 `http://192.168.42.1`。

<video
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4"
  controls
  width="100%"
  preload="metadata">
  您的浏览器不支持播放此视频。
</video>

{/* TODO(verify): add equivalent steps for macOS and Linux if the USB connection exposes a network interface on those platforms too. */}

## 4. 主机电脑通过 USB 失去网络

**症状**：通过 USB 将 reCamera 连接到电脑后，主机电脑无法访问互联网。

这是因为 USB 网卡在操作系统路由表中获得了更高优先级。解决方法见[网络连接故障排查示意图](https://wiki.seeedstudio.com/cn/recamera_network_connection/#computer-network-error)。

## 5. 恢复出厂设置

如果以上情况都不适用且设备仍然异常，可恢复出厂设置：

- **硬件方式**：长按侧面按键 **约 15 秒**，直到听到提示音。等待绿灯常亮。
- **WebUI**：**Device Info → System Settings → Factory Reset**。

关于哪些内容会保留、哪些会被清除，请参见 [固件升级与恢复](/cn/recamera_pro_firmware_update/)。

## 其他问题

- RTSP、录像或存储问题 → 参见 [事件录像配置](/cn/recamera_pro_record_settings/) 和 [查找录像与存储](/cn/recamera_pro_storage/)。
- 模型转换或推理问题 → 参见 [AI 推理配置](/cn/recamera_pro_ai_inference/)，自定义模型请参见 [选择模型部署路径](/cn/recamera_pro_model_path/)。
- API 调用失败 → 参见 [API 故障排查](/cn/recamera_pro_api_faq/)（B4 / T3 占位）。

{/* TODO(verify): cross-reference RTSP/recording/storage and API troubleshooting issues from real support tickets once T3 (api_troubleshooting.md) lands. */}

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
