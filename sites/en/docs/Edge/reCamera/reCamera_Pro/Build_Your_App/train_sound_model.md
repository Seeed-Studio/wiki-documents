---
description: Collect sound samples, train a custom sound classification model on reCamera Pro or SenseCraft, and deploy it for sound-triggered events.
title: Train a Sound Model
keywords:
  - reCamera
  - reCamera Pro
  - Acoustic Lab
  - sound model
  - training
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_acoustic_lab_usage
sku: 10003420
sidebar_position: 8
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_acoustic_lab_usage/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Train a Sound Model

reCamera Pro includes a local sound training platform called **Acoustic Lab**. You can collect environmental sound samples, train custom sound models, and deploy them as sound-triggered events — all on-device, without an internet connection.

## Accessing Acoustic Lab

1. Click **Record Settings** in the Web UI.
2. Click **Recording Configuration**.
3. Below the **Sound Event Trigger** button, click **Open Acoustic Lab**.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## Interface overview

The main Acoustic Lab interface includes:

1. **Real-time Audio Spectrogram** — frequency spectrum of current audio
2. **Real-time Confidence Leaderboard** — confidence ranking of current sounds
3. **Microphone Configuration** — input source and channel count
4. **Audio Sampling Frequency** — lower = faster response, more resources
5. **Confidence Leaderboard Display Precision** — numeric precision
6. **Status Information** — algorithm runtime + number of sound models in workspace

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## Local training

### 1. Audio acquisition

1. Click **Workspace**, then **New workspace**. Name it and click **Create**.
2. In the **Dataset** area, first collect background noise (recommended: 20 seconds). Click **Background Noise** → **Record**. The dropdown lets you select the microphone input source; the default is device audio.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

3. After recording, click **Stop**, then **Slice** to split the background noise into 1-second segments:
   - (1) Trim from beginning
   - (2) Trim from end
   - (3) Split the sample
   - (4) Split samples display area

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

4. Click **Add category** to add a sound category and name it.
5. Click **Record** to record sound samples (recommended: 10 seconds). Slice the same way.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

### 2. Start training

1. Click **Hyperparameter** to review training parameters (keep defaults unless you have specific needs).
2. Click **Train model** to start.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

## Training on SenseCraft

Go to the [SenseCraft model training](https://sensecraft.seeed.cc/ai/training) platform and click **Audio Classification Detection**.

### 1. Select audio input source

Multiple input sources are available. The default is computer audio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_SenseCraft_Source.png" /></div>

:::warning
SenseCraft does not yet support device audio input, which may affect model recognition accuracy after deployment. See [SenseCraft model accuracy](#sensecraft-model-accuracy) below.
:::

### 2. Collect background noise

Collect at least 20 seconds of environmental background noise. Click **Collect Training Data**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Voice_Noice_Capture.png" /></div>

### 3. Collect sound samples

Set the duration of each audio segment (default: 2 seconds).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Sample_Set_data.png" /></div>

### 4. Train

Click **Train Model**.

## Deploy the model

1. In Acoustic Lab, find the **Deploy** option at the bottom. In the **MODELS** list, select your trained model and deploy it.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. Return to the Web UI main interface → **Record Settings** → **Sound Event Trigger** → **Configuration**.
3. Select your trained sound category and click **Confirm**.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## Troubleshooting

### Trained model not found in the deployment list
- Confirm training completed and a model file was generated.
- Check that you are in the same workspace used during training.
- Refresh the Acoustic Lab page.

### Sound trigger is insensitive or triggers falsely
- Re-collect at least 20 seconds of background noise.
- Adjust the confidence threshold in hyperparameters.
- Confirm microphone input source and channel configuration.

### SenseCraft model accuracy drops after deployment {#sensecraft-model-accuracy}

The audio features from SenseCraft training differ from on-device inference. To optimize:

1. When deploying on SenseCraft, check the option to include the dataset.
2. Open the workspace on the device. Based on actual detection results, add 5+ seconds of device-microphone recordings:
   - **A.** False recognition of non-target sounds → record that sound as background noise, add slices.
   - **B.** False recognition of target sounds → record that sound in the target category, add slices.
3. Retrain on the device and switch to the new model.

{/* TODO(verify): confirm whether local training supports multi-category models and maximum number of categories per model */}

## Related pages

- [Trigger Capture by Sound](/recamera_pro_sound_trigger/)
- [Configure Event Recording](/recamera_pro_record_settings/)

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
