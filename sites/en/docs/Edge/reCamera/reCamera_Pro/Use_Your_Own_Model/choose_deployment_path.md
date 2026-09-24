---
description: Choose how to deploy a custom AI model on reCamera Pro — upload a pre-trained RKNN model, convert ONNX via SenseCraft, or use RKNN-Toolkit2 locally.
title: Choose a Model Deployment Path
keywords:
  - reCamera
  - reCamera Pro
  - model deployment
  - RKNN
  - SenseCraft
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_path
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_model_path/
---

# Choose a Model Deployment Path

reCamera Pro supports deploying custom AI models for object detection, classification, and other tasks. This page helps you choose the right path based on your model format and workflow.

## Three deployment paths

| Path | When to use | Skill level |
|---|---|---|
| **Upload a pre-trained RKNN model** | You already have an RKNN model file (`.rknn`) | Beginner |
| **Convert ONNX to RKNN via SenseCraft** | You have an ONNX model and want cloud-based conversion | Beginner–Intermediate |
| **Convert ONNX to RKNN via RKNN-Toolkit2** | You want full control over quantization (INT8/FP16) and calibration | Intermediate–Advanced |

## Path 1: Upload a pre-trained RKNN model

If you already have a `.rknn` model file, upload it directly via the Web UI.

→ [Upload and Configure an RKNN Model](/recamera_pro_rknn_upload/)

## Path 2: SenseCraft cloud conversion

The SenseCraft platform converts ONNX models to RKNN format in the cloud, with optional quantization. No local tooling required.

→ [SenseCraft ONNX-to-RKNN Conversion](/recamera_pro_sensecraft/)

## Path 3: RKNN-Toolkit2 local conversion

For full control over quantization parameters, calibration datasets, and model optimization, use RKNN-Toolkit2 on your PC.

→ [RKNN-Toolkit2 Conversion](/recamera_pro_rknn_model_conversion/)

## After deploying

Once your model is on the device:

1. [Configure Detection](/recamera_pro_ai_inference/) — set classes, thresholds, and inference frequency
2. [Validate Model Performance](/recamera_pro_model_validate/) — check FPS, accuracy, and resource usage
3. [Model Compatibility](/recamera_pro_model_compatibility/) — supported operators and quantization formats

## Related pages

- [Upload and Configure an RKNN Model](/recamera_pro_rknn_upload/)
- [SenseCraft ONNX-to-RKNN Conversion](/recamera_pro_sensecraft/)
- [RKNN-Toolkit2 Conversion](/recamera_pro_rknn_model_conversion/)
- [Validate Model Performance](/recamera_pro_model_validate/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
