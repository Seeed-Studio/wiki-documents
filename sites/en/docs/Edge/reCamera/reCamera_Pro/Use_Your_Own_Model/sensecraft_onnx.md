---
description: Convert ONNX models to RKNN format using the SenseCraft platform, then deploy to reCamera Pro without local tooling.
title: SenseCraft ONNX-to-RKNN Conversion
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
url: https://wiki.seeedstudio.com/recamera_pro_sensecraft/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# SenseCraft ONNX-to-RKNN Conversion

reCamera Pro includes an integrated entry point to **SenseCraft**, a cloud-based platform that converts ONNX models to RKNN format. This lets you deploy custom models without installing RKNN-Toolkit2 locally.

## Access SenseCraft

1. In the Web UI, go to **AI Inference**.
2. Click **View SenseCraft Models**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

## Conversion workflow

1. Click **View SenseCraft Models** to open the conversion interface.
2. Select the **ONNX model file** to convert.
3. Optionally upload a **quantization dataset**. If none is provided, the system uses a default dataset.
4. Click **Start Conversion**.
5. After conversion completes, the generated RKNN model can be deployed to reCamera Pro.

{/* TODO(verify): confirm whether SenseCraft conversion supports INT8 quantization, FP16, or both, and the maximum model file size */}

## When to use SenseCraft vs RKNN-Toolkit2

| Factor | SenseCraft | RKNN-Toolkit2 |
|---|---|---|
| Setup | None (cloud) | Local Python environment |
| Quantization control | Basic (default or custom dataset) | Full (INT8/FP16, custom calibration, layer-level control) |
| Speed | Upload + wait | Local conversion |
| Best for | Quick deployment | Production optimization |

For full quantization control, see [RKNN-Toolkit2 Conversion](/recamera_pro_rknn_model_conversion/).

## Related pages

- [Choose a Model Deployment Path](/recamera_pro_model_path/)
- [Upload and Configure an RKNN Model](/recamera_pro_rknn_upload/)
- [RKNN-Toolkit2 Conversion](/recamera_pro_rknn_model_conversion/)

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
