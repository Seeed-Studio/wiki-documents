---
description: Which model formats, frameworks, algorithms and output fields reCamera Pro supports — a compatibility summary for deploying your own models.
title: Model Compatibility and Output Formats
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
url: https://wiki.seeedstudio.com/recamera_pro_model_compatibility/
---

# Model Compatibility and Output Formats

This page summarizes what runs on the reCamera Pro NPU (Rockchip RV1126B, 3 TOPS, mixed INT8/INT16) and what the inference pipeline outputs. Use it as a quick check before you invest time converting or training a model.

## Supported model format

| Item | Value |
| --- | --- |
| On-device model format | RKNN (`.rknn`), compiled for **RV1126B** |
| Required target platform | `target_platform='rv1126b'` when building with RKNN-Toolkit2 |
| Conversion toolkit | [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) **2.3.2**, host-side (x86_64 Linux or WSL 2, Python 3.6–3.12) |
| Runtime alignment | Keep the Toolkit version aligned with the RKNN Runtime shipped in the reCamera Pro firmware |
| Precision | FP16 (non-quantized baseline) and INT8 (quantized with a calibration dataset) |
| Source formats | ONNX (via RKNN-Toolkit2 or SenseCraft conversion); Ultralytics YOLO checkpoints (`.pt`) can export directly to RKNN |

- Do **not** use `rknn-toolkit-lite2` for conversion — it is a device-side runtime library, not a converter.
- A model built for a different Rockchip SoC (e.g., RK3566/RK3588) will not run on RV1126B.

Conversion walkthroughs: [RKNN-Toolkit2 Conversion](/recamera_pro_rknn_model_conversion/) (host, scriptable) and [SenseCraft ONNX-to-RKNN](/recamera_pro_sensecraft/) (browser-based, no code).

## Built-in and tested model families

The firmware ships with built-in detection models, and the Web UI Model Management list exposes these attributes per model:

| Field | Typical values |
| --- | --- |
| Framework | RKNN |
| Algorithm | YOLO, nanodet |
| Type | Detection |

Tested/bundled use cases include person detection, hard-hat detection, construction-safety detection and vehicle detection.

<!-- TODO(verify): enumerate the exact list of built-in models (names, classes, sizes) shipped with the current firmware; confirm additional supported algorithms beyond YOLO/nanodet (e.g., classification, segmentation support level). -->

## Input contract requirements

Your ONNX model must have a known, static input contract before conversion. RKNN applies `(input − mean) / std` once — if normalization is already inside the ONNX graph, use identity values (`mean=[0,0,0]`, `std=[1,1,1]`).

| Item | Requirement |
| --- | --- |
| Input shape | Static, batch-1 preferred (e.g., `[1, 3, 640, 640]`) |
| Layout | NCHW or NHWC, matching the exported graph |
| Channel order | RGB vs BGR must match training — a swap severely reduces accuracy |
| Resize policy | Stretch, crop or letterbox must be identical at runtime |
| Unsupported operators | Re-export the ONNX model or use a semantically equivalent supported op |

Inspect the contract with [Netron](https://netron.app/) or `model-inspect` before converting. Details and troubleshooting: [RKNN-Toolkit2 Conversion](/recamera_pro_rknn_model_conversion/).

## Custom classes and post-processing

Uploaded models are configured in the Web UI ([Upload and Configure an RKNN Model](/recamera_pro_rknn_upload/), [Configure Detection](/recamera_pro_ai_inference/)):

- **Detection Categories** — set output class names manually or bulk-import a category list from a TXT file; inference results then display your own labels
- **Post-processing parameters** — `IOU` (NMS threshold), `Confidence` (detection threshold), `max_obj` (max objects per frame)

## Inference output formats

Real-time inference output (Web UI monitoring, logs) uses these fields:

| Field | Description |
| --- | --- |
| `timestamp` | Inference result timestamp |
| `task_type` | Current task type |
| `class_id` | Detected class ID |
| `class_name` | Detected class name |
| `score` | Detection confidence |
| `bbox` | Bounding box coordinates |
| `detection_count` | Number of objects detected in the current frame |

Results can be pushed to external systems over three channels, with configurable output template and task type:

| Channel | Guide |
| --- | --- |
| HTTP | [Send Detection Results over HTTP/UART](/recamera_pro_http_uart/) |
| UART | [Send Detection Results over HTTP/UART](/recamera_pro_http_uart/) |
| MQTT | [Send Detection Results over MQTT](/recamera_pro_mqtt/) |

Recordings can also be triggered directly by inference results (categories, confidence range, trigger areas): [Configure Event Recording](/recamera_pro_record_settings/).

<!-- TODO(verify): document the exact JSON payload schema for HTTP/MQTT output (field names, nesting, configurable template variables) against the shipping firmware. -->

## Native (C/C++) inference

For custom applications outside the Web UI, models are loaded through the RKNN Runtime C API. Cross-compilation setup and a minimal application: [SDK Setup](/recamera_pro_sdk_setup/), [Native Development](/recamera_pro_media_dev/). An AI-agent-assisted workflow with a C++ template: [Develop with AI Coding Agents](/recamera_pro_development_cpp_skill/).

## Sound models

Sound event detection uses a separate pipeline: models are visualized, trained and switched in the Sound Lab (Web UI), and selected sound categories can trigger recording. See [Train a Sound Model](/recamera_pro_acoustic_lab_usage/) and [Sound-Triggered Capture](/recamera_pro_sound_trigger/).

<!-- TODO(verify): document sound model format and on-device runtime (distinct from RKNN visual models). -->


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
