---
description: Upload an RKNN model file to reCamera Pro, configure detection categories, and set post-processing parameters.
title: Upload and Configure an RKNN Model
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
url: https://wiki.seeedstudio.com/recamera_pro_rknn_upload/
---

# Upload and Configure an RKNN Model

If you already have a `.rknn` model file (see [Choose a Model Deployment Path](/recamera_pro_model_path/)), upload it to reCamera Pro and configure it via the Web UI.

## Upload a model

1. In the Web UI, go to **AI Inference** → **Model Management**.
2. Click **Upload Model**.
3. Drag and drop or select your `.rknn` file.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

After uploading, the model appears in the Model Management list.

{/* TODO(verify): confirm maximum model file size limit and whether multiple models can be stored simultaneously */}

## Model fields

| Field | Description |
|---|---|
| Model File | Filename on the device |
| Model Name | Display name |
| Framework | Runtime framework (RKNN) |
| Algorithm | Algorithm type, e.g. YOLO, nanodet |
| Type | Task type, e.g. Detection |
| Version | Model version |
| Size | File size |
| Operations | Configure or delete |

## Configure the model

Each model has a **Configure** page for setting basic information, detection categories, and post-processing parameters.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

| Configuration Item | Description |
|---|---|
| Model Name | Display name |
| Framework | Runtime framework, e.g. RKNN |
| Version | Model version |
| Type | Task type, e.g. Object Detection |
| Algorithm | Algorithm, e.g. YOLOv5 |
| Author | Author information |
| Description | Model description |
| Detection Categories | Names of the model's output categories |
| Post-processing Configuration | IOU, Confidence, max_obj |

### Detection categories

Categories can be added manually or imported in bulk from a TXT file. After configuring categories, inference results are displayed and output using your category names.

### Post-processing parameters

| Parameter | Description |
|---|---|
| IOU | Intersection over Union threshold for bounding box non-maximum suppression |
| Confidence | Object detection confidence threshold |
| max_obj | Maximum number of objects output per frame |

{/* TODO(verify): confirm recommended IOU/Confidence defaults for common detection models (YOLOv5, nanodet) on reCamera Pro */}

Click **Save** to apply.

## Run the model

1. Go to **AI Inference** → **Inference Configuration**.
2. Enable inference, select your uploaded model as the **Running Model**, and set the inference frequency.
3. Click **Save Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

## Related pages

- [Choose a Model Deployment Path](/recamera_pro_model_path/)
- [SenseCraft ONNX-to-RKNN Conversion](/recamera_pro_sensecraft/)
- [Configure Detection](/recamera_pro_ai_inference/)
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
