---
description: 将 RKNN 模型文件上传到 reCamera Pro，配置检测类别，并设置后处理参数。
title: 上传并配置 RKNN 模型
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - model upload
  - detection categories
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rknn_upload
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_rknn_upload/
---

# 上传并配置 RKNN 模型

如果你已经有一个 `.rknn` 模型文件（参见 [选择模型部署路径](/cn/recamera_pro_model_path/)），可以将其上传到 reCamera Pro，并通过 Web UI 进行配置。

## 上传模型

1. 在 Web UI 中，进入 **AI Inference** → **Model Management**。
2. 点击 **Upload Model**。
3. 拖拽或选择你的 `.rknn` 文件。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

上传完成后，模型会出现在 Model Management 列表中。

{/* TODO(verify): confirm maximum model file size limit and whether multiple models can be stored simultaneously */}

## 模型字段

| 字段 | 描述 |
|---|---|
| Model File | 设备上的文件名 |
| Model Name | 显示名称 |
| Framework | 运行时框架（RKNN） |
| Algorithm | 算法类型，例如 YOLO、nanodet |
| Type | 任务类型，例如 Detection |
| Version | 模型版本 |
| Size | 文件大小 |
| Operations | 配置或删除 |

## 配置模型

每个模型都有一个 **Configure** 页面，用于设置基本信息、检测类别和后处理参数。

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
| Detection Categories | 模型输出类别的名称 |
| Post-processing Configuration | IOU、Confidence、max_obj |

### 检测类别

类别可以手动添加，也可以从 TXT 文件批量导入。配置好类别后，推理结果会使用你设置的类别名称进行显示和输出。

### 后处理参数

| 参数 | 描述 |
|---|---|
| IOU | 用于边界框非极大值抑制的交并比阈值 |
| Confidence | 目标检测置信度阈值 |
| max_obj | 每帧输出的最大目标数量 |

{/* TODO(verify): confirm recommended IOU/Confidence defaults for common detection models (YOLOv5, nanodet) on reCamera Pro */}

点击 **Save** 以应用。

## 运行模型

1. 进入 **AI Inference** → **Inference Configuration**。
2. 启用推理，将你上传的模型选择为 **Running Model**，并设置推理频率。
3. 点击 **Save Configuration**。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

## 相关页面

- [选择模型部署路径](/cn/recamera_pro_model_path/)
- [SenseCraft ONNX-to-RKNN 转换](/cn/recamera_pro_sensecraft/)
- [配置检测](/cn/recamera_pro_ai_inference/)
- [验证模型性能](/cn/recamera_pro_model_validate/)

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
