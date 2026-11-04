---
description: Choose which AI model to run, configure detection classes, set confidence and IOU thresholds, control inference frequency, and monitor real-time output on reCamera Pro.
title: 'Configure Detection: Classes, Thresholds and Frequency'
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
url: https://wiki.seeedstudio.com/recamera_pro_ai_inference/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Configure Detection: Classes, Thresholds and Frequency

reCamera Pro has a built-in AI inference management page in the Web UI. You can manage models, upload models, convert models, configure inference parameters, and monitor inference results in real time — all without the command line.

After logging in, click **AI Inference** in the left-side menu.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

## Feature overview

The AI Inference page has these modules:

- **Model Management** — view, configure, delete, or upload model files
- **SenseCraft Model Conversion** — convert ONNX models to RKNN
- **Inference Configuration** — select the running model, enable/disable inference, set inference frequency
- **Real-time Inference Monitoring** — view model output as it runs
- **Inference Output Configuration** — send results to external systems via HTTP, MQTT, or UART

## Model management

The Model Management area lists models that are built in or uploaded to the device. Common fields:

| Field | Description |
|---|---|
| Model File | Filename on the device |
| Model Name | Display name |
| Framework | Runtime framework, e.g. RKNN |
| Algorithm | Algorithm type, e.g. YOLO, nanodet |
| Type | Task type, e.g. Detection |
| Version | Model version |
| Size | File size |
| Operations | Configure or delete |

reCamera Pro supports built-in detection models and user-uploaded custom models. For object detection you can choose models for person detection, hard hat detection, construction safety, vehicle detection, etc.

### Upload a model

Click **Upload Model** to upload local model files. The upload window supports drag-and-drop or manual selection.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

The page currently supports uploading RKNN model files. After uploading, the model appears in Model Management, where you can configure its name, categories, and post-processing parameters.

### Configure a model

Each model has a **Configure** page for basic information, detection categories, and post-processing parameters.

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

Detection categories can be added manually or imported in bulk from a TXT file. After configuring categories, inference results are displayed and output using your category names.

**Post-processing parameters** control how detection results are filtered:

| Parameter | Description |
|---|---|
| IOU | Intersection over Union threshold for bounding box non-maximum suppression |
| Confidence | Object detection confidence threshold |
| max_obj | Maximum number of objects output per frame |

Lower confidence = more detections (more false positives). Higher IOU = fewer duplicate boxes. Tune these for your scene.

{/* TODO(verify): document recommended confidence/IOU ranges for common scenarios, and confirm max_obj upper limit on production firmware */}

Click **Save** to apply.

## Inference configuration

The Inference Configuration area controls whether AI inference is running and which model is active.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

| Parameter | Description |
|---|---|
| Inference Enable | Enable or disable AI inference |
| Running Model | Select which model to run |
| Inference Frequency (FPS) | How many frames per second to run inference on |
| Inference Status | Whether the inference task is currently running |
| Real-time Inference FPS | Actual inference frame rate |

Select a model, set the inference frequency with the slider, then click **Save Configuration**. The right side shows the current status (e.g. **Running**) and actual FPS.

{/* TODO(verify): confirm maximum supported inference frequency and behavior when FPS exceeds model throughput */}

## Real-time inference monitoring

The page provides a real-time log of inference output for debugging bounding box coordinates, class IDs, confidence scores, and timestamps.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_VulyBOkn3D.png" />

| Field | Description |
|---|---|
| timestamp | Inference result timestamp |
| task_type | Current task type |
| class_id | Detected class ID |
| class_name | Detected class name |
| score | Detection confidence |
| bbox | Bounding box coordinates |
| detection_count | Number of objects detected in the current frame |

The monitoring area supports disabling, pausing, and clearing the log.

## Connect detection to recording and output

Once detection is configured, you can use inference results to:

- **Trigger recordings** — see [Configure Event Recording](/recamera_pro_record_settings/) (AI Inference Trigger)
- **Send results via MQTT** — see [Send Detection Results over MQTT](/recamera_pro_mqtt/)
- **Send results via HTTP or UART** — see [Send Detection Results over HTTP/UART](/recamera_pro_http_uart/)

## Related pages

- [Upload and Configure an RKNN Model](/recamera_pro_rknn_upload/)
- [SenseCraft ONNX-to-RKNN Conversion](/recamera_pro_sensecraft/)
- [Image Quality and Low Light](/recamera_pro_image_quality/)

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
