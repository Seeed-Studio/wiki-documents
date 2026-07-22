---
description: recamera_pro_ai_inference_cn
title: AI推理
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_ai_inference_cn
sku: 10003420
sidebar_position: 13
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/cn/recamera_pro_ai_inference_cn/
---

reCamera Pro 提供内置 AI 推理管理页面，用户可以直接在 Web UI 中完成模型管理、模型上传、模型转换、推理参数配置、实时推理状态查看以及推理结果输出配置。该页面适用于目标检测、工业识别、安防监控、事件触发和边缘 AI 应用开发等场景。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708171836.png" />

进入 Web UI 后，点击左侧菜单中的 **AI 推理**，即可进入 AI 推理配置页面。

## 功能概览

AI 推理页面主要包含以下功能模块：

- **模型管理**：查看、配置、删除或上传模型文件。
- **SenseCraft 模型转换**：将 ONNX 模型转换为 reCamera Pro 可运行的 RKNN 模型。
- **推理配置**：选择运行模型，设置推理开关和推理频率。
- **实时推理监控**：查看模型实时输出结果和推理状态。
- **推理输出配置**：将推理结果通过 HTTP、MQTT 或 UART 输出到外部系统。

通过该页面，用户无需使用命令行，即可完成模型部署和推理配置。

## 模型管理

模型管理区域用于展示当前设备中已经上传或内置的 AI 模型。列表中会显示模型文件、模型名称、推理框架、算法类型、任务类型、版本、文件大小以及可执行操作。

常见字段说明如下：

| 字段   | 说明                       |
| ---- | ------------------------ |
| 模型文件 | 当前模型在设备中的文件名称            |
| 模型名称 | 模型的显示名称                  |
| 框架   | 模型运行框架，例如 RKNN           |
| 算法   | 模型算法类型，例如 YOLO、nanodet 等 |
| 类型   | 模型任务类型，例如 Detection      |
| 版本   | 模型版本信息                   |
| 大小   | 模型文件大小                   |
| 操作   | 支持模型配置或删除                |

reCamera Pro 可使用内置的检测模型，也支持用户上传自定义模型。对于目标检测场景，用户可以根据自己的应用需求选择不同模型，例如人员检测、安全帽检测、施工安全检测、车辆检测等。

## 上传模型

用户可以点击 **上传模型** 按钮，将本地模型文件上传到 reCamera Pro。上传窗口支持拖拽文件或手动选择文件。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708171916.png" />

当前页面支持上传 RKNN 模型文件。上传完成后，模型会出现在模型管理列表中，用户可以继续对模型信息、类别和后处理参数进行配置。

上传模型适用于以下场景：

- 使用用户自行训练的检测模型
- 替换默认模型
- 部署特定行业模型
- 根据项目需求添加新的识别类别

## SenseCraft 模型转换

AI 推理页面提供 **查看 SenseCraft 模型** 入口，用户可以进入 SenseCraft 模型转换界面，将 ONNX 模型转换为 reCamera Pro 可运行的 RKNN 模型。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708171933.png" />

在模型转换界面中，用户可以创建转换任务，上传 ONNX 模型文件，并可选择上传量化数据集。如果不提供量化数据集，系统可使用默认数据集完成转换。

转换流程如下：

1. 点击 **查看 SenseCraft 模型**。
2. 选择需要转换的 ONNX 模型文件。
3. 根据需要上传量化数据集。
4. 点击 **开始转换**。
5. 转换完成后，将生成的 RKNN 模型部署到 reCamera Pro 中运行。

该功能可以降低用户部署模型的门槛，使用户能够从自训练 ONNX 模型快速转换到设备端可运行模型。

## 模型配置

每个模型都可以进入 **配置** 页面，对模型基础信息、检测类别和后处理参数进行设置。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708174404.png" />

模型配置支持的内容包括：

| 配置项 | 说明 |
|---|---|
| 模型名 | 设置模型显示名称 |
| 框架 | 选择模型运行框架，例如 RKNN |
| 版本号 | 设置模型版本信息 |
| 类型 | 设置模型任务类型，例如目标检测 |
| 算法 | 选择模型算法，例如 YOLOv5 |
| 作者 | 填写模型作者信息 |
| 描述 | 添加模型说明 |
| 检测类别 | 设置模型输出类别名称 |
| 后处理配置 | 设置 IOU、Confidence、max_obj 等参数 |

对于用户自定义检测模型，可以在配置页面中手动添加检测类别，也可以通过 TXT 文件批量导入类别列表。配置类别后，推理结果会按照用户定义的类别名称进行显示和输出。

后处理参数用于控制检测结果的过滤和输出，例如：

| 参数 | 说明 |
|---|---|
| IOU | 用于控制目标框去重的交并比阈值 |
| Confidence | 目标检测置信度阈值 |
| max_obj | 单帧最大输出目标数量 |

配置完成后，点击 **保存** 即可应用模型配置。

## 推理配置

推理配置区域用于控制 AI 推理任务的运行状态和运行模型。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708174310.png" />

用户可以配置以下参数：

| 参数 | 说明 |
|---|---|
| 推理使能 | 开启或关闭 AI 推理功能 |
| 运行模型 | 选择当前需要运行的模型 |
| 推理频率（FPS） | 设置模型推理频率 |
| 推理状态 | 显示当前推理任务是否正在运行 |
| 实时推理帧率 | 显示当前实际推理帧率 |

用户可以从模型列表中选择一个模型作为当前运行模型，并通过滑块设置推理频率。设置完成后，点击 **保存配置** 即可启动或更新推理任务。

页面右侧会显示当前推理状态，例如 **正在运行**，并展示当前实际推理帧率，方便用户判断模型运行是否正常。

## 实时推理监控

AI 推理页面提供实时推理输出监控区域，用于查看模型推理结果。推理结果会以日志形式实时显示，便于开发者调试模型输出、检查检测框坐标、类别 ID、置信度和时间戳等信息。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708174443.png" />

实时输出中通常包含以下信息：

| 字段              | 说明          |
| --------------- | ----------- |
| timestamp       | 推理结果时间戳     |
| task_type       | 当前任务类型      |
| class_id        | 检测类别 ID     |
| class_name      | 检测类别名称      |
| score           | 检测置信度       |
| bbox            | 检测框坐标       |
| detection_count | 当前帧检测到的目标数量 |

页面提供实时输出控制功能，例如关闭监控、暂停实时显示、清空日志等，方便用户在调试过程中观察和管理输出内容。

## 推理输出配置

除了在 Web UI 中查看实时推理日志，reCamera Pro 还支持将推理结果输出到外部系统。用户可以在 **推理输出配置** 中选择输出模板、任务类型和输出方式。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708174505.png" />

支持的输出方式包括：

- HTTP
- MQTT
- UART

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
