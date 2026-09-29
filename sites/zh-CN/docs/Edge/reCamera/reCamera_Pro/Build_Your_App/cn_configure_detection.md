---
description: 选择要运行的 AI 模型，配置检测类别，设置置信度和 IOU 阈值，控制推理频率，并在 reCamera Pro 上监控实时输出。
title: "配置检测：类别、阈值和频率"
keywords:
  - reCamera
  - reCamera Pro
  - AI inference
  - detection
  - confidence
  - IOU
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_ai_inference
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_ai_inference/
---

# 配置检测：类别、阈值和频率

reCamera Pro 在 Web UI 中内置了 AI 推理管理页面。你可以在这里管理模型、上传模型、转换模型、配置推理参数，并实时监控推理结果——全程无需使用命令行。

登录后，点击左侧菜单中的 **AI Inference**。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

## 功能概览

AI Inference 页面包含以下模块：

- **Model Management** — 查看、配置、删除或上传模型文件
- **SenseCraft Model Conversion** — 将 ONNX 模型转换为 RKNN
- **Inference Configuration** — 选择运行模型，启用/禁用推理，设置推理频率
- **Real-time Inference Monitoring** — 在模型运行时查看输出
- **Inference Output Configuration** — 通过 HTTP、MQTT 或 UART 将结果发送到外部系统

## 模型管理

模型管理区域列出了设备内置或上传的模型。常见字段如下：

| 字段 | 描述 |
|---|---|
| Model File | 设备上的文件名 |
| Model Name | 显示名称 |
| Framework | 运行时框架，例如 RKNN |
| Algorithm | 算法类型，例如 YOLO、nanodet |
| Type | 任务类型，例如 Detection |
| Version | 模型版本 |
| Size | 文件大小 |
| Operations | 配置或删除 |

reCamera Pro 支持内置检测模型和用户上传的自定义模型。对于目标检测，你可以选择行人检测、安全帽检测、施工安全、车辆检测等模型。

### 上传模型

点击 **Upload Model** 上传本地模型文件。上传窗口支持拖拽或手动选择。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

当前页面支持上传 RKNN 模型文件。上传后，模型会出现在 Model Management 中，你可以在此配置其名称、类别和后处理参数。

### 配置模型

每个模型都有一个 **Configure** 页面，用于配置基本信息、检测类别和后处理参数。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

| 配置项 | 描述 |
|---|---|
| Model Name | 显示名称 |
| Framework | 运行时框架，例如 RKNN |
| Version | 模型版本 |
| Type | 任务类型，例如 Object Detection |
| Algorithm | 算法，例如 YOLOv5 |
| Author | 作者信息 |
| Description | 模型描述 |
| Detection Categories | 模型输出类别名称 |
| Post-processing Configuration | IOU、Confidence、max_obj |

检测类别可以手动添加，也可以从 TXT 文件批量导入。配置好类别后，推理结果会使用你设置的类别名称进行显示和输出。

**后处理参数** 用于控制如何筛选检测结果：

| 参数 | 描述 |
|---|---|
| IOU | 用于边界框非极大值抑制的交并比阈值 |
| Confidence | 目标检测置信度阈值 |
| max_obj | 每帧输出的最大目标数量 |

较低的置信度 = 更多检测结果（更多误报）。较高的 IOU = 更少的重复框。请根据你的场景进行调优。

{/* TODO(verify): document recommended confidence/IOU ranges for common scenarios, and confirm max_obj upper limit on production firmware */}

点击 **Save** 以应用配置。

## 推理配置

推理配置区域用于控制 AI 推理是否运行以及当前激活的模型。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

| 参数 | 描述 |
|---|---|
| Inference Enable | 启用或禁用 AI 推理 |
| Running Model | 选择要运行的模型 |
| Inference Frequency (FPS) | 每秒进行推理的帧数 |
| Inference Status | 当前推理任务是否在运行 |
| Real-time Inference FPS | 实际推理帧率 |

选择一个模型，通过滑块设置推理频率，然后点击 **Save Configuration**。右侧会显示当前状态（例如 **Running**）和实际 FPS。

{/* TODO(verify): confirm maximum supported inference frequency and behavior when FPS exceeds model throughput */}

## 实时推理监控

该页面提供推理输出的实时日志，用于调试边界框坐标、类别 ID、置信度分数和时间戳。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_VulyBOkn3D.png" />

| 字段 | 描述 |
|---|---|
| timestamp | 推理结果时间戳 |
| task_type | 当前任务类型 |
| class_id | 检测到的类别 ID |
| class_name | 检测到的类别名称 |
| score | 检测置信度 |
| bbox | 边界框坐标 |
| detection_count | 当前帧检测到的目标数量 |

监控区域支持禁用、暂停和清空日志。

## 将检测结果连接到录像和输出

完成检测配置后，你可以使用推理结果来：

- **触发录像** — 参见 [配置事件录像](/cn/recamera_pro_record_settings/)（AI Inference Trigger）
- **通过 MQTT 发送结果** — 参见 [通过 MQTT 发送检测结果](/cn/recamera_pro_mqtt/)
- **通过 HTTP 或 UART 发送结果** — 参见 [通过 HTTP/UART 发送检测结果](/cn/recamera_pro_http_uart/)

## 相关页面

- [上传并配置 RKNN 模型](/cn/recamera_pro_rknn_upload/)
- [SenseCraft ONNX-to-RKNN 转换](/cn/recamera_pro_sensecraft/)
- [图像质量与低照度](/cn/recamera_pro_image_quality/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
