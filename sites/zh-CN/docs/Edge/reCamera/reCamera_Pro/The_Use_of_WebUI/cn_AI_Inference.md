---
description: recamera_pro_ai_inference
title: Ai 推理
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_ai_inference
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/cn/recamera_pro_ai_inference/
---

reCamera Pro 提供了内置的 AI 推理管理页面，允许用户在 Web UI 中直接管理模型、上传模型、转换模型、配置推理参数、查看实时推理状态以及配置推理结果输出。该页面适用于目标检测、工业识别、安全监控、事件触发以及边缘 AI 应用开发等场景。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

进入 Web UI 后，点击左侧菜单中的 **AI Inference** 进入 AI 推理配置页面。

## 功能概览

AI 推理页面主要包括以下功能模块：

- **模型管理**：查看、配置、删除或上传模型文件。
- **SenseCraft 模型转换**：将 ONNX 模型转换为 reCamera Pro 可运行的 RKNN 模型。
- **推理配置**：选择要运行的模型，设置推理启用/禁用，并配置推理频率。
- **实时推理监控**：查看模型输出结果和推理状态的实时信息。
- **推理输出配置**：通过 HTTP、MQTT 或 UART 将推理结果输出到外部系统。

通过该页面，用户无需使用命令行即可完成模型部署和推理配置。

## 模型管理

模型管理区域用于展示当前设备中已上传或内置的 AI 模型。列表会显示模型文件、模型名称、推理框架、算法类型、任务类型、版本、文件大小以及可用操作。

常见字段说明如下：

| 字段          | 描述                                       |
| ------------ | ----------------------------------------- |
| Model File   | 当前模型在设备上的文件名                  |
| Model Name   | 模型的显示名称                            |
| Framework    | 模型的运行框架，例如 RKNN                 |
| Algorithm    | 模型的算法类型，例如 YOLO、nanodet        |
| Type         | 模型的任务类型，例如 Detection            |
| Version      | 模型版本信息                              |
| Size         | 模型文件大小                              |
| Operations   | 支持模型配置或删除                        |

reCamera Pro 既可以使用内置检测模型，也支持用户上传自定义模型。对于目标检测场景，用户可以根据应用需求选择不同的模型，例如行人检测、安全帽检测、施工安全检测、车辆检测等。

## 上传模型

用户可以点击 **Upload Model** 按钮，将本地模型文件上传到 reCamera Pro。上传窗口支持拖拽文件或手动选择文件。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

当前页面支持上传 RKNN 模型文件。上传完成后，模型会出现在模型管理列表中，用户可以继续配置模型信息、类别以及后处理参数。

上传模型适用于以下场景：

- 使用用户自行训练的检测模型
- 替换默认模型
- 部署行业专用模型
- 根据项目需求新增识别类别

## SenseCraft 模型转换

AI 推理页面提供了 **View SenseCraft Models** 的入口。用户可以进入 SenseCraft 模型转换界面，将 ONNX 模型转换为 reCamera Pro 可运行的 RKNN 模型。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

在模型转换界面中，用户可以创建转换任务、上传 ONNX 模型文件，并可选上传量化数据集。如果未提供量化数据集，系统可以使用默认数据集完成转换。

转换流程如下：

1. 点击 **View SenseCraft Models**。
2. 选择需要转换的 ONNX 模型文件。
3. 按需上传量化数据集。
4. 点击 **Start Conversion**。
5. 转换完成后，将生成的 RKNN 模型部署到 reCamera Pro 上运行。

该功能降低了用户部署模型的门槛，使用户可以快速将自训练的 ONNX 模型转换为设备可执行模型。

## 模型配置

每个模型都可以进入 **Configure** 页面，设置基础模型信息、检测类别以及后处理参数。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

模型配置支持以下项目：

| 配置项                 | 描述                                       |
| ------------------ | ----------------------------------------- |
| Model Name         | 设置模型的显示名称                        |
| Framework          | 选择模型的运行框架，例如 RKNN             |
| Version            | 设置模型版本信息                          |
| Type               | 设置模型的任务类型，例如 Object Detection |
| Algorithm          | 选择模型的算法，例如 YOLOv5               |
| Author             | 输入模型作者信息                          |
| Description        | 添加模型描述                              |
| Detection Categories | 设置模型输出类别的名称                    |
| Post-processing Configuration | 设置 IOU、Confidence、max_obj 等参数     |

对于用户自定义的检测模型，可以在配置页面中手动添加检测类别，或通过 TXT 文件批量导入类别列表。配置完成类别后，推理结果将按照用户自定义的类别名称进行展示和输出。

后处理参数用于控制检测结果的筛选和输出，例如：

| 参数        | 描述                                       |
| ----------- | ------------------------------------------- |
| IOU         | 用于边界框非极大值抑制的交并比阈值        |
| Confidence  | 目标检测置信度阈值                         |
| max_obj     | 每帧输出的最大目标数量                     |

配置完成后，点击 **Save** 以应用模型配置。

## 推理配置

推理配置区域用于控制 AI 推理任务的运行状态以及所选模型。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

用户可以配置以下参数：

| 参数                 | 描述                                       |
| ----------------- | ----------------------------------------- |
| Inference Enable  | 启用或禁用 AI 推理功能                    |
| Running Model     | 选择当前要运行的模型                      |
| Inference Frequency (FPS) | 设置模型推理频率                        |
| Inference Status  | 显示当前推理任务是否在运行                |
| Real-time Inference FPS | 显示当前实际推理帧率                    |

用户可以从模型列表中选择一个模型作为当前运行模型，并通过滑块设置推理频率。设置完成后，点击 **Save Configuration** 以启动或更新推理任务。

页面右侧会显示当前推理状态，例如 **Running**，并展示当前实际推理帧率，方便用户判断模型是否正常运行。

## 实时推理监控

AI 推理页面提供了实时推理输出监控区域，用于查看模型推理结果。推理结果以日志形式实时显示，方便开发者调试模型输出、查看边界框坐标、类别 ID、置信度以及时间戳等信息。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_VulyBOkn3D.png" />

实时输出通常包括以下信息：

| 字段              | 描述                             |
| ------------------ | -------------------------------- |
| timestamp          | 推理结果时间戳                   |
| task_type          | 当前任务类型                     |
| class_id           | 检测到的类别 ID                  |
| class_name         | 检测到的类别名称                 |
| score              | 检测置信度                       |
| bbox               | 边界框坐标                       |
| detection_count    | 当前帧检测到的目标数量           |

页面提供了实时输出控制功能，例如禁用监控、暂停实时显示、清空日志等，方便用户在调试过程中观察和管理输出内容。

## 推理输出配置

除了在 Web UI 中查看实时推理日志外，reCamera Pro 还支持将推理结果输出到外部系统。用户可以在 **Inference Output Configuration** 中选择输出模板、任务类型以及输出方式。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

支持的输出方式包括：

- HTTP
- MQTT
- UART

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
