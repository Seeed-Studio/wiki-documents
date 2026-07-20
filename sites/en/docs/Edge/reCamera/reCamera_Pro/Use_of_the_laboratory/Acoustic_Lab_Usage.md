---
title: Acoustic Lab Usage
description: This article introduces how to use the Acoustic Lab feature on reCamera Pro to collect environmental sound samples, train custom sound models, and deploy them as sound-triggered events.
keywords:
  - reCamera
  - reCamera Pro
  - Acoustic Lab
  - Sound Model
  - Sound Trigger
  - Custom Training
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_acoustic_lab_usage
sidebar_position: 1
last_update:
  date: 2026-07-13
  author: sizhaozhou
createdAt: '2026-07-13'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/recamera_pro_acoustic_lab_usage/
---


## Introduction

The reCamera Pro features a dedicated local sound training platform called the Acoustic Lab. Through this platform, users can collect environmental sound samples, train custom sound models, and deploy them as sound-triggered events without needing an internet connection. This article provides a detailed walkthrough of each functional module in the Acoustic Lab, covering the complete workflow from audio collection and model training to deployment and usage.

## Accessing the Feature

1. Click the **Record Settings** button to enter the recording settings interface.
2. Click the **Recording Configuration** button to enter the recording options interface.
3. Under the **Sound Event Trigger** button, click the **Open Acoustic Lab** button to enter the sound training interface.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## Feature Overview

The main interface of the Acoustic Lab includes the following core areas:

1. **Real-time Audio Spectrogram**: Displays the spectrum of the currently captured audio signal in real-time, helping users understand sound characteristics.
2. **Real-time Confidence Leaderboard**: Shows the confidence ranking of the current environmental sounds, helping users understand the sound distribution.
3. **Microphone Configuration**: Select the microphone input source and number of channels.
4. **Audio Capture Frequency**: A lower frequency results in faster capture response but consumes more system resources.
5. **Confidence Leaderboard Display Precision**: Customize the numerical display precision of the leaderboard.
6. **Status Information**: The first parameter indicates the algorithm runtime, and the second parameter indicates the number of sound models in the current workspace.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## Training a Custom Sound Model

In addition to the built-in sound models, users can train custom sound models based on their specific needs.

### Collecting Audio

1. In the Acoustic Lab, click the **Workspace** button to enter the workspace.
2. Click the **New workspace** button, name the new workspace, and then click the **Create** button.
3. In the **Dataset** area, first collect an environmental background noise sample (recommended duration: 20 seconds). Click the **Background Noise** button, then click the **Record** button to start capturing. The dropdown menu next to it allows you to select the microphone input source; the default is the device audio.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

4. After collection is complete, click the **Stop** button. Then click the **Slice** button to split the background noise sample into 1-second segments.
   - (1) Specify the portion to trim from the beginning of the background noise
   - (2) Specify the portion to trim from the end of the background noise
   - (3) Split the background noise sample
   - (4) Area for the sliced samples

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

5. Click the **Add category** button in the top-right corner to add a sound category and name it (e.g., the name of the sound you want to train).
6. Click the **Record** button to start recording sound samples (recommended duration: 10 seconds). The subsequent steps are the same as in step 4.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

### Starting the Training

Once the sound samples are collected, you can proceed with model training.

1. Click the **Hyperparameter** button to enter the hyperparameter settings interface (keep the defaults unless you have specific requirements).
2. Click the **Train model** button to start training the sound model.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

## Deploying the Model

1. At the bottom of the Acoustic Lab interface, find the **Deploy** option. In the **MODELS** list, locate the model you just trained, and click on it to select and deploy it.
   - (1) Model list
   - (2) Real-time audio spectrogram

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. Return to the WebUI main interface and click the **Record Settings** button to enter the recording settings interface.
3. Find the **Sound Event Trigger** option and click the **Configuration** button on the right to enter the sound trigger configuration interface.
4. Select the sound category you just trained, then click the **Confirm** button to complete the sound trigger configuration.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## Troubleshooting

**Problem: The trained model cannot be found in the deployment list**

- Ensure the training process is complete and a model file has been generated in the workspace.
- Check that the current workspace is the same one used during training.
- Try refreshing the Acoustic Lab page or re-entering it.

**Problem: Sound trigger is not sensitive or triggers falsely**

- Check if the background noise sample is sufficient. It is recommended to re-collect over 20 seconds of environmental background noise.
- Adjust the confidence threshold in the hyperparameters.
- Verify that the microphone input source and channel configuration are correct.

## Resources

- [reCamera Pro Product Page](https://www.seeedstudio.com/)
- [reCamera Pro Getting Started](https://wiki.seeedstudio.com/recamera_pro_getting_started/)

## Tech Support & Product Discussion

Thank you for choosing our product! We are here to provide you with different levels of support to ensure your experience with our product is as smooth as possible. We offer multiple communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>