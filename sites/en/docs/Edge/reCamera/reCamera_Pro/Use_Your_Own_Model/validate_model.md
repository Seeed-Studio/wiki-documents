---
description: Verify that a custom model runs correctly on reCamera Pro — check inference status, FPS, detection output, and resource usage.
title: Validate Model Performance
keywords:
  - reCamera
  - reCamera Pro
  - model validation
  - inference
  - FPS
  - performance
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_validate
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_model_validate/
---

# Validate Model Performance

After uploading or converting a custom model, verify it runs correctly on reCamera Pro before deploying it in production.

## Step 1: Start inference

1. In the Web UI, go to **AI Inference** → **Inference Configuration**.
2. Enable inference.
3. Select your model as the **Running Model**.
4. Set the inference frequency.
5. Click **Save Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

## Step 2: Check real-time monitoring

Go to **Real-time Inference Monitoring** to observe:

| Metric | What to check |
|---|---|
| Inference Status | Running or stopped |
| FPS | Frames per second — higher is better |
| Detection Results | Class names, confidence scores, bounding boxes |
| Detection Count | Number of objects per frame |

{/* TODO(verify): confirm exact field names displayed in Real-time Inference Monitoring (e.g. whether FPS, CPU usage, NPU usage, or memory usage are shown) */}

## Step 3: Validate detection accuracy

1. Point the camera at test subjects matching your detection categories.
2. Observe whether detections appear with correct class names and reasonable confidence scores.
3. Check for false positives (objects detected that are not present) and false negatives (objects present but not detected).

### Adjusting post-processing parameters

If detection quality is poor, revisit [Model Configuration](/recamera_pro_rknn_upload/):

| Parameter | Effect |
|---|---|
| IOU threshold | Lower → fewer duplicate boxes; higher → more overlapping boxes kept |
| Confidence threshold | Lower → more detections (including false positives); higher → fewer but more reliable detections |
| max_obj | Maximum objects reported per frame |

## Step 4: Check resource usage

Monitor device resource usage during inference via SSH:

```bash
# CPU and memory
top -bn1 | head -5

# NPU usage (if available)
# TODO(verify): confirm the command to check RKNN NPU utilization on reCamera Pro
```

{/* TODO(verify): confirm exact SSH commands for monitoring NPU/RKNN utilization and memory consumption during inference */}

## Common issues

| Symptom | Possible cause | Fix |
|---|---|---|
| Model fails to load | Incompatible operator or quantization format | Re-convert with RKNN-Toolkit2; check [Model Compatibility](/recamera_pro_model_compatibility/) |
| Very low FPS | Model too large or complex | Use a lighter model or reduce input resolution |
| No detections | Wrong category configuration or threshold too high | Verify detection categories match model output; lower confidence threshold |
| Garbled class names | Category list mismatch | Re-import correct category TXT in Model Configuration |

## Related pages

- [Choose a Model Deployment Path](/recamera_pro_model_path/)
- [Upload and Configure an RKNN Model](/recamera_pro_rknn_upload/)
- [Configure Detection](/recamera_pro_ai_inference/)
- [Model Compatibility](/recamera_pro_model_compatibility/)

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
