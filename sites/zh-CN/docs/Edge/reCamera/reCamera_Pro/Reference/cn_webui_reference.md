---
description: reCamera Pro 内置 Web UI 的现场级索引——每个页面、其关键设置，以及在哪里找到完整指南。
title: Web UI 参考
keywords:
  - reCamera
  - reCamera Pro
  - Web UI
  - 实时预览
  - AI 推理
  - 录像设置
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_webui_reference
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_webui_reference/
---

# Web UI 参考

reCamera Pro 自带 Web UI。将设备连接到你的网络，在浏览器中打开其 IP 地址并登录（默认凭据：`root` / `recamera`——在部署前请更改，参见 [网络、时间和访问](/cn/recamera_pro_device_info/)）。

本页是一个现场级索引：针对每个 Web UI 模块，列出你可以配置的关键设置，并链接到任务指南，说明在何时以及如何使用它们。

## 模块总览

| Web UI 模块 | 功能说明 | 完整指南 |
| --- | --- | --- |
| 实时预览 | 实时视频、拍照、录像、主/子码流切换 | [预览、抓拍和录像](/cn/recamera_pro_live_preview/) |
| 基本/显示设置 | 分辨率、编码、FPS、GOP、码率；翻转/旋转、昼夜切换、图像调节 | [图像质量与低照度](/cn/recamera_pro_image_quality/) |
| OSD 设置 | 通道名称、日期/时间、序列号叠加 | [OSD 与隐私遮罩](/cn/recamera_pro_osd_masks/) |
| 图像遮罩 | 对敏感区域进行隐私遮挡 | [OSD 与隐私遮罩](/cn/recamera_pro_osd_masks/) |
| 流媒体设置 | 面向第三方平台和 NVR 的 RTSP 流 | [通过 RTSP 推流视频](/cn/recamera_pro_rtsp/) |
| AI 推理 | 模型管理、上传、配置、推理控制、监控、输出 | [配置检测](/cn/recamera_pro_ai_inference/) |
| 录像设置 | 触发规则（AI / 定时 / GPIO / 串口 / HTTPS / 循环 / 声音）、存储、文件预览 | [配置事件录像](/cn/recamera_pro_record_settings/) |
| 设备信息 | 系统信息、时间、网络（WiFi）、连接设置（SSH/HTTP/波特率）、固件、配置导出/导入 | [网络、时间和访问](/cn/recamera_pro_device_info/) |
| 终端 | 实时系统日志和浏览器终端控制台 | [终端、SSH 与调试 UART](/cn/recamera_pro_terminal/) |

## 实时预览

页面左侧显示实时视频预览；右侧显示配置面板。

- **开始/停止播放** — 在浏览器中播放当前摄像头画面
- **主码流 / 子码流** — 主码流用于高清预览、存储和 AI 分析；子码流用于低带宽或多通道查看
- **拍照 / 录像** — 从当前画面抓拍静态图像或录制视频片段
- **音量 / 连接状态** — 播放音量和实时连接状态；当设备断开或码流异常时会出现故障提示

## 基本设置（视频编码）

主码流和子码流分别配置；点击 **保存视频设置** 生效，点击 **重置** 恢复。

| 参数 | 说明 |
| --- | --- |
| 分辨率 | 视频输出分辨率，例如 1920×1080（1080P） |
| 编码格式 | 视频编码格式，例如 H.264 |
| 帧率 (FPS) | 视频帧率，例如 30 FPS |
| GOP | 关键帧间隔 |
| 码率控制模式 | 例如 VBR（可变码率） |
| 最大码率 | 最大码率，单位 Kbps |
| 码率质量 | 编码质量等级 |

可以在此启用或禁用音频采集和音频存储（**音频设置** / **音频存储设置**）。

## 显示设置

| 分组 | 参数 |
| --- | --- |
| 方向 | 翻转、旋转（例如 0°）、视频制式（例如 PAL 50Hz） |
| 昼/夜 | 切换模式（例如自动）、切换阈值灵敏度、切换滞后时间 |
| 图像调节 | 亮度、对比度、饱和度、锐度、色调、曝光模式、增益模式（基于配置文件） |

## OSD 设置

叠加内容渲染在视频画面上。坐标为相对位置，也可以直接拖动调整。

| 配置项 | 说明 |
| --- | --- |
| 字体大小 / 字体颜色 / 颜色模式 | OSD 文本外观，支持自定义颜色 |
| 通道名称叠加 / 名称 / 坐标 | 例如 “Camera 01”，并在画面中定位 |
| 日期和时间叠加 / 日期格式 / 时间格式 / 显示星期 / 坐标 | 时间叠加选项 |
| 序列号叠加 | 显示或隐藏设备序列号 |

## 图像遮罩

手动或自动绘制隐私遮罩，以在预览、录像和码流中遮挡敏感区域（办公室、住宅、门牌号、屏幕）。遮罩在保存后立即生效。

## 流媒体设置

按码流（主/子）分别配置：

| 参数 | 说明 |
| --- | --- |
| 码流设置开关 | 启用或禁用当前码流的推流 |
| 流媒体协议 | 例如 RTSP |
| 认证类型 | 例如无认证 |
| 应用设置 | 保存并应用配置 |

配置完成后，第三方客户端、平台或 NVR 可以通过码流地址拉取视频画面。

## AI 推理

| 子模块 | 关键字段 |
| --- | --- |
| 模型管理 | 模型文件、模型名称、框架（例如 RKNN）、算法（例如 YOLO、nanodet）、类型（例如检测）、版本、大小、操作（配置 / 删除） |
| 上传模型 | 拖拽或文件选择器；RKNN 模型文件 |
| SenseCraft 模型转换 | 入口 **View SenseCraft Models**；将 ONNX 转换为 RKNN（量化数据集可选） |
| 模型配置 | 模型名称、框架、版本、类型、算法、作者、描述、检测类别（手动或 TXT 导入）、后处理（IOU、置信度、max_obj） |
| 推理配置 | 推理启用、运行模型、推理频率 (FPS)、推理状态、实时推理 FPS |
| 实时监控 | 日志字段：timestamp、task_type、class_id、class_name、score、bbox、detection_count；控制：禁用、暂停或清空 |
| 推理输出 | 输出模板、任务类型以及输出方式：HTTP、MQTT 或 UART |

字段详情和工作流：参见 [配置检测](/cn/recamera_pro_ai_inference/)。输出集成： [HTTP/UART](/cn/recamera_pro_http_uart/)、[MQTT](/cn/recamera_pro_mqtt/)。

## 录像设置

| 子模块 | 关键字段 |
| --- | --- |
| 录像配置 | 录像格式、触发规则、时间计划 |
| 触发方式 | AI 推理触发（类别、置信度范围、触发区域）、定时触发（间隔）、GPIO 触发（引脚、状态、信号、防抖）、串口触发（端口、命令）、HTTPS 触发（触发 URL）、循环触发（持续）、声音事件触发（Sound Lab 模型和声音类别） |
| 计划管理 | 录像规则的生效时间段 |
| 存储管理 | 查看和管理设备存储空间 |
| 文件预览 | 浏览已录制的视频文件 |

操作步骤：参见 [配置事件录像](/cn/recamera_pro_record_settings/) 和 [查找录像与存储](/cn/recamera_pro_storage/)。

## 设备信息

| 子模块 | 关键字段 |
| --- | --- |
| 基本信息 | 硬件/软件版本、系统资源使用情况 |
| 时间设置 | 系统时间 |
| 网络设置 | WiFi 状态；每个已连接网络的详细网络信息 |
| 连接设置 | SSH 远程连接启用、HTTP 设置、串口波特率 |
| 系统设置 | 固件版本和更新、重启、更改密码、恢复出厂设置 |
| 导出/导入配置 | 导出会下载一个设置文件（tar）；导入会加载该文件并在重启后生效 |

详情： [网络、时间和访问](/cn/recamera_pro_device_info/)、[固件更新与恢复](/cn/recamera_pro_firmware_update/)、[备份与恢复](/cn/recamera_pro_backup_restore/)。

## 终端

- **系统日志** — 实时运行日志；可按级别或关键字过滤、清空，或下载日志文件用于分析和支持
- **终端控制台** — 通过浏览器登录设备 shell，无需 SSH 工具（默认 `root` / `recamera`）

详情： [终端、SSH 与调试 UART](/cn/recamera_pro_terminal/)；用于技术支持的日志收集： [收集日志](/cn/recamera_pro_collect_logs/)。

<!-- TODO(verify): confirm default Web UI login credentials and firmware-shipped defaults against the current release; confirm exact module labels in the shipping firmware UI. -->


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
