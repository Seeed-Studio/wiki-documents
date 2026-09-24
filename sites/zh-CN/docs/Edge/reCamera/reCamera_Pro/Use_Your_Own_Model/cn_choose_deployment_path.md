---
description: 选择如何在 reCamera Pro 上部署自定义 AI 模型——上传预训练 RKNN 模型、通过 SenseCraft 转换 ONNX，或在本地使用 RKNN-Toolkit2。
title: 选择模型部署路径
keywords:
  - reCamera
  - reCamera Pro
  - 模型部署
  - RKNN
  - SenseCraft
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_path
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_model_path/
---

# 选择模型部署路径

reCamera Pro 支持部署用于目标检测、分类和其他任务的自定义 AI 模型。本页将根据你的模型格式和工作流程，帮助你选择合适的部署路径。

## 三种部署路径

| 路径 | 适用场景 | 技能水平 |
|---|---|---|
| **上传预训练 RKNN 模型** | 你已经有一个 RKNN 模型文件（`.rknn`） | 初级 |
| **通过 SenseCraft 将 ONNX 转换为 RKNN** | 你有一个 ONNX 模型并希望使用云端转换 | 初级–中级 |
| **通过 RKNN-Toolkit2 将 ONNX 转换为 RKNN** | 你希望完全控制量化（INT8/FP16）和校准过程 | 中级–高级 |

## 路径 1：上传预训练 RKNN 模型

如果你已经有一个 `.rknn` 模型文件，可直接通过 Web UI 上传。

→ [上传并配置 RKNN 模型](/cn/recamera_pro_rknn_upload/)

## 路径 2：SenseCraft 云端转换

SenseCraft 平台可以在云端将 ONNX 模型转换为 RKNN 格式，并支持可选量化。无需本地工具。

→ [SenseCraft ONNX-to-RKNN 转换](/cn/recamera_pro_sensecraft/)

## 路径 3：RKNN-Toolkit2 本地转换

如果你需要完全控制量化参数、校准数据集和模型优化，请在电脑上使用 RKNN-Toolkit2。

→ [RKNN-Toolkit2 转换](/cn/recamera_pro_rknn_model_conversion/)

## 部署完成后

当你的模型已经部署到设备上后：

1. [配置检测](/cn/recamera_pro_ai_inference/) —— 设置类别、阈值和推理频率
2. [验证模型性能](/cn/recamera_pro_model_validate/) —— 检查 FPS、精度和资源占用
3. [模型兼容性](/cn/recamera_pro_model_compatibility/) —— 支持的算子和量化格式

## 相关页面

- [上传并配置 RKNN 模型](/cn/recamera_pro_rknn_upload/)
- [SenseCraft ONNX-to-RKNN 转换](/cn/recamera_pro_sensecraft/)
- [RKNN-Toolkit2 转换](/cn/recamera_pro_rknn_model_conversion/)
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
