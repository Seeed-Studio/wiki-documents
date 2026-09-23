---
description: reCamera Pro 支持哪些模型格式、框架、算法和输出字段——用于部署自定义模型的兼容性汇总。
title: 模型兼容性与输出格式
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - RV1126B
  - model compatibility
  - inference output
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_compatibility
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_model_compatibility/
---

# 模型兼容性与输出格式

本页总结了可以在 reCamera Pro NPU（Rockchip RV1126B，3 TOPS，混合 INT8/INT16）上运行的内容，以及推理流水线的输出内容。可在投入时间转换或训练模型之前，将其作为快速检查参考。

## 支持的模型格式

| 项目 | 数值 |
| --- | --- |
| 设备端模型格式 | RKNN (`.rknn`)，为 **RV1126B** 编译 |
| 目标平台要求 | 使用 RKNN-Toolkit2 构建时设置 `target_platform='rv1126b'` |
| 转换工具链 | [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) **2.3.2**，主机端（x86_64 Linux 或 WSL 2，Python 3.6–3.12） |
| 运行时版本对齐 | 保持 Toolkit 版本与 reCamera Pro 固件中内置的 RKNN Runtime 保持一致 |
| 精度 | FP16（非量化基线）和 INT8（使用校准数据集量化） |
| 源格式 | ONNX（通过 RKNN-Toolkit2 或 SenseCraft 转换）；Ultralytics YOLO 检查点（`.pt`）可直接导出为 RKNN |

- **不要**使用 `rknn-toolkit-lite2` 进行转换——它是设备端运行时库，而不是转换器。
- 为其他 Rockchip SoC（例如 RK3566/RK3588）构建的模型无法在 RV1126B 上运行。

转换操作示例：[RKNN-Toolkit2 转换](/cn/recamera_pro_rknn_model_conversion/)（主机端，可脚本化）以及 [SenseCraft ONNX-to-RKNN](/cn/recamera_pro_sensecraft/)（基于浏览器，无需代码）。

## 内置与已测试的模型家族

固件内置了检测模型，Web UI 的模型管理列表会为每个模型展示以下属性：

| 字段 | 典型取值 |
| --- | --- |
| 框架 | RKNN |
| 算法 | YOLO、nanodet |
| 类型 | 检测 |

已测试/预置的使用场景包括：行人检测、安全帽检测、施工安全检测以及车辆检测。

<!-- TODO(verify): enumerate the exact list of built-in models (names, classes, sizes) shipped with the current firmware; confirm additional supported algorithms beyond YOLO/nanodet (e.g., classification, segmentation support level). -->

## 输入约定要求

在转换之前，你的 ONNX 模型必须具有已知的静态输入约定。RKNN 会对输入执行一次 `(input − mean) / std`——如果归一化已经在 ONNX 计算图中，请使用恒等值（`mean=[0,0,0]`，`std=[1,1,1]`）。

| 项目 | 要求 |
| --- | --- |
| 输入形状 | 静态，推荐 batch=1（例如 `[1, 3, 640, 640]`） |
| 布局 | NCHW 或 NHWC，与导出的计算图保持一致 |
| 通道顺序 | RGB 与 BGR 必须与训练时一致——通道交换会严重降低精度 |
| 缩放策略 | 拉伸、裁剪或 letterbox 必须与运行时完全一致 |
| 不支持的算子 | 重新导出 ONNX 模型，或使用语义等价的受支持算子 |

在转换前使用 [Netron](https://netron.app/) 或 `model-inspect` 检查输入约定。更多细节与排错说明： [RKNN-Toolkit2 转换](/cn/recamera_pro_rknn_model_conversion/)。

## 自定义类别与后处理

上传的模型可在 Web UI 中进行配置（[上传并配置 RKNN 模型](/cn/recamera_pro_rknn_upload/)、[配置检测](/cn/recamera_pro_ai_inference/)）：

- **检测类别**——可手动设置输出类别名称，或从 TXT 文件批量导入类别列表；推理结果将显示你自定义的标签
- **后处理参数**——`IOU`（NMS 阈值）、`Confidence`（检测阈值）、`max_obj`（每帧最大目标数）

## 推理输出格式

实时推理输出（Web UI 监控、日志）使用以下字段：

| 字段 | 描述 |
| --- | --- |
| `timestamp` | 推理结果时间戳 |
| `task_type` | 当前任务类型 |
| `class_id` | 检测到的类别 ID |
| `class_name` | 检测到的类别名称 |
| `score` | 检测置信度 |
| `bbox` | 目标框坐标 |
| `detection_count` | 当前帧检测到的目标数量 |

结果可以通过三种通道推送到外部系统，并可配置输出模板和任务类型：

| 通道 | 指南 |
| --- | --- |
| HTTP | [通过 HTTP/UART 发送检测结果](/cn/recamera_pro_http_uart/) |
| UART | [通过 HTTP/UART 发送检测结果](/cn/recamera_pro_http_uart/) |
| MQTT | [通过 MQTT 发送检测结果](/cn/recamera_pro_mqtt/) |

录像也可以由推理结果直接触发（类别、置信度范围、触发区域）：[配置事件录像](/cn/recamera_pro_record_settings/)。

<!-- TODO(verify): document the exact JSON payload schema for HTTP/MQTT output (field names, nesting, configurable template variables) against the shipping firmware. -->

## 原生（C/C++）推理

对于 Web UI 之外的自定义应用，可通过 RKNN Runtime C API 加载模型。交叉编译环境搭建与最小示例应用： [SDK 设置](/cn/recamera_pro_sdk_setup/)、[原生开发](/cn/recamera_pro_media_dev/)。基于 C++ 模板的 AI 代理辅助开发流程：[使用 AI 编码代理进行开发](/cn/recamera_pro_development_cpp_skill/)。

## 声音模型

声音事件检测使用独立的流水线：模型在 Sound Lab（Web UI）中可视化、训练和切换，选定的声音类别可以触发录像。参见 [训练声音模型](/cn/recamera_pro_acoustic_lab_usage/) 和 [声音触发抓拍](/cn/recamera_pro_sound_trigger/)。

<!-- TODO(verify): document sound model format and on-device runtime (distinct from RKNN visual models). -->


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
