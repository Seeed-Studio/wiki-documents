---
description: 使用 SenseCraft 平台将 ONNX 模型转换为 RKNN 格式，然后无需本地工具即可部署到 reCamera Pro。
title: "SenseCraft ONNX-to-RKNN 转换"
keywords:
  - reCamera
  - reCamera Pro
  - SenseCraft
  - ONNX
  - RKNN
  - model conversion
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sensecraft
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_sensecraft/
---

# SenseCraft ONNX-to-RKNN 转换

reCamera Pro 集成了一个通往 **SenseCraft** 的入口。SenseCraft 是一个基于云的平台，可将 ONNX 模型转换为 RKNN 格式。通过它，你可以在无需本地安装 RKNN-Toolkit2 的情况下部署自定义模型。

## 访问 SenseCraft

1. 在 Web UI 中，进入 **AI Inference**。
2. 点击 **View SenseCraft Models**。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

## 转换工作流程

1. 点击 **View SenseCraft Models** 打开转换界面。
2. 选择要转换的 **ONNX 模型文件**。
3. 可选地上传一个 **量化数据集**。如果未提供，系统将使用默认数据集。
4. 点击 **Start Conversion**。
5. 转换完成后，生成的 RKNN 模型即可部署到 reCamera Pro。

{/* TODO(verify): confirm whether SenseCraft conversion supports INT8 quantization, FP16, or both, and the maximum model file size */}

## 何时使用 SenseCraft 与 RKNN-Toolkit2

| 因素 | SenseCraft | RKNN-Toolkit2 |
|---|---|---|
| 部署环境 | 无需配置（云端） | 本地 Python 环境 |
| 量化控制 | 基础（默认或自定义数据集） | 完整（INT8/FP16，自定义校准，层级控制） |
| 速度 | 上传 + 等待 | 本地转换 |
| 最适合 | 快速部署 | 生产级优化 |

如需完整的量化控制，请参阅 [RKNN-Toolkit2 转换](/cn/recamera_pro_rknn_model_conversion/)。

## 相关页面

- [选择模型部署路径](/cn/recamera_pro_model_path/)
- [上传并配置 RKNN 模型](/cn/recamera_pro_rknn_upload/)
- [RKNN-Toolkit2 转换](/cn/recamera_pro_rknn_model_conversion/)

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
