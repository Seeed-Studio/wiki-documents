---
description: AI_Inference
title: AI_Inference
keywords:
  - reCamera pro
  - web ui
slug: /ai_inference
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ai_inference/
---

reCamera Pro provides a built-in AI inference management page, allowing users to directly manage models, upload models, convert models, configure inference parameters, view real-time inference status, and configure inference result output within the Web UI. This page is suitable for scenarios such as object detection, industrial recognition, security monitoring, event triggering, and edge AI application development.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

After entering the Web UI, click **AI Inference** in the left-side menu to access the AI inference configuration page.

## Feature Overview

The AI Inference page primarily includes the following functional modules:

- **Model Management**: View, configure, delete, or upload model files.
- **SenseCraft Model Conversion**: Convert ONNX models to RKNN models that reCamera Pro can run.
- **Inference Configuration**: Select the model to run, set inference enable/disable, and configure inference frequency.
- **Real-time Inference Monitoring**: View real-time model output results and inference status.
- **Inference Output Configuration**: Output inference results to external systems via HTTP, MQTT, or UART.

Through this page, users can complete model deployment and inference configuration without using the command line.

## Model Management

The Model Management area is used to display AI models that have already been uploaded or are built into the current device. The list will show the model file, model name, inference framework, algorithm type, task type, version, file size, and available operations.

Common field descriptions are as follows:

| Field        | Description                               |
| ------------ | ----------------------------------------- |
| Model File   | The filename of the current model on the device |
| Model Name   | The display name of the model               |
| Framework    | The model's runtime framework, e.g., RKNN   |
| Algorithm    | The model's algorithm type, e.g., YOLO, nanodet |
| Type         | The model's task type, e.g., Detection      |
| Version      | Model version information                   |
| Size         | Model file size                           |
| Operations   | Supports model configuration or deletion    |

reCamera Pro can use built-in detection models and also supports users uploading custom models. For object detection scenarios, users can choose different models based on their application needs, such as person detection, hard hat detection, construction safety detection, vehicle detection, etc.

## Upload Model

Users can click the **Upload Model** button to upload local model files to reCamera Pro. The upload window supports dragging and dropping files or manually selecting files.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

The current page supports uploading RKNN model files. After uploading, the model will appear in the Model Management list, and users can continue to configure model information, categories, and post-processing parameters.

Uploading models is suitable for the following scenarios:

- Using user-trained detection models
- Replacing default models
- Deploying industry-specific models
- Adding new recognition categories based on project requirements

## SenseCraft Model Conversion

The AI Inference page provides an entry point to **View SenseCraft Models**. Users can enter the SenseCraft model conversion interface to convert ONNX models into RKNN models that reCamera Pro can run.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

In the model conversion interface, users can create conversion tasks, upload ONNX model files, and optionally upload a quantization dataset. If no quantization dataset is provided, the system can use a default dataset to complete the conversion.

The conversion process is as follows:

1. Click **View SenseCraft Models**.
2. Select the ONNX model file to be converted.
3. Upload a quantization dataset as needed.
4. Click **Start Conversion**.
5. After conversion is complete, deploy the generated RKNN model to reCamera Pro for execution.

This feature lowers the barrier for users to deploy models, enabling them to quickly convert self-trained ONNX models into device-executable models.

## Model Configuration

Each model can enter the **Configure** page to set basic model information, detection categories, and post-processing parameters.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

Model configuration supports the following items:

| Configuration Item | Description                               |
| ------------------ | ----------------------------------------- |
| Model Name         | Set the display name of the model         |
| Framework          | Select the model's runtime framework, e.g., RKNN |
| Version            | Set the model version information           |
| Type               | Set the model's task type, e.g., Object Detection |
| Algorithm          | Select the model's algorithm, e.g., YOLOv5 |
| Author             | Enter model author information            |
| Description        | Add model description                     |
| Detection Categories | Set the names of the model's output categories |
| Post-processing Configuration | Set parameters such as IOU, Confidence, max_obj |

For user-defined detection models, detection categories can be manually added on the configuration page, or a category list can be imported in bulk via a TXT file. After configuring categories, inference results will be displayed and output according to the user-defined category names.

Post-processing parameters are used to control the filtering and output of detection results, for example:

| Parameter   | Description                                     |
| ----------- | ----------------------------------------------- |
| IOU         | Intersection over Union threshold for bounding box non-maximum suppression |
| Confidence  | Object detection confidence threshold           |
| max_obj     | Maximum number of objects to output per frame   |

After configuration, click **Save** to apply the model configuration.

## Inference Configuration

The Inference Configuration area is used to control the running status and selected model of the AI inference task.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

Users can configure the following parameters:

| Parameter         | Description                               |
| ----------------- | ----------------------------------------- |
| Inference Enable  | Enable or disable AI inference function   |
| Running Model     | Select the model currently to run         |
| Inference Frequency (FPS) | Set the model inference frequency       |
| Inference Status  | Display whether the current inference task is running |
| Real-time Inference FPS | Display the current actual inference frame rate |

Users can select a model from the model list as the currently running model and set the inference frequency using a slider. After setting, click **Save Configuration** to start or update the inference task.

The right side of the page displays the current inference status, such as **Running**, and shows the current actual inference frame rate, making it convenient for users to determine if the model is running normally.

## Real-time Inference Monitoring

The AI Inference page provides a real-time inference output monitoring area for viewing model inference results. Inference results are displayed in real-time as logs, making it easy for developers to debug model output, check bounding box coordinates, class IDs, confidence scores, and timestamps.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_VulyBOkn3D.png" />

Real-time output typically includes the following information:

| Field              | Description                     |
| ------------------ | ------------------------------- |
| timestamp          | Inference result timestamp      |
| task_type          | Current task type               |
| class_id           | Detected class ID               |
| class_name         | Detected class name             |
| score              | Detection confidence            |
| bbox               | Bounding box coordinates        |
| detection_count    | Number of objects detected in the current frame |

The page provides real-time output control functions, such as disabling monitoring, pausing real-time display, clearing logs, etc., making it convenient for users to observe and manage output content during debugging.

## Inference Output Configuration

In addition to viewing real-time inference logs in the Web UI, reCamera Pro also supports outputting inference results to external systems. Users can select the output template, task type, and output method in **Inference Output Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

Supported output methods include:

- HTTP
- MQTT
- UART

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
