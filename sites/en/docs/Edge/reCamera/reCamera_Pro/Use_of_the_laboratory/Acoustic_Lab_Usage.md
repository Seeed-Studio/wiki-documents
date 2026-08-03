---
title: Acoustic Lab Usage
description: This article describes how to use the Acoustic Lab feature on the reCamera Pro to collect environmental sound samples, train custom sound models, and deploy them as sound-triggered events.
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

The reCamera Pro is equipped with a local sound training platform called Acoustic Lab. Through this platform, users can collect environmental sound samples, train custom sound models, and deploy them as sound-triggered events without an internet connection. This article details each functional module in Acoustic Lab, covering the complete workflow from audio acquisition and model training to deployment and usage.

## Accessing the Feature

1. Click the **Record Settings** button to enter the recording settings interface.
2. Click the **Recording Configuration** button to enter the recording options interface.
3. Below the **Sound Event Trigger** button, click the **Open Acoustic Lab** button to enter the sound training interface.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## Feature Overview

The main interface of Acoustic Lab includes the following core areas:

1. **Real-time Audio Spectrogram**: Displays the frequency spectrum of the currently captured audio signal in real time, helping users understand sound characteristics.
2. **Real-time Confidence Leaderboard**: Shows the confidence ranking of current environmental sounds, helping users understand the sound distribution.
3. **Microphone Configuration**: Select the microphone input source and number of channels.
4. **Audio Sampling Frequency**: Lower frequencies provide faster acquisition response but consume more system resources.
5. **Confidence Leaderboard Display Precision**: Customize the numerical precision displayed on the leaderboard.
6. **Status Information**: The first parameter indicates the algorithm runtime, and the second parameter indicates the number of sound models in the current workspace.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## Training Custom Sound Models

In addition to built-in sound models, users can train custom sound models according to their own needs. Users can choose to train locally or on the [SenseCraft](https://sensecraft.seeed.cc/ai/#/home) platform.

### Local Training

#### 1. Audio Acquisition

1. In Acoustic Lab, click the **Workspace** button to enter the workspace.
2. Click the **New workspace** button, name the new workspace, and then click the **Create** button.
3. In the **Dataset** area, first collect a sample of ambient background noise (recommended duration: 20 seconds). Click the **Background Noise** button, then click **Record** to start acquisition. The dropdown menu next to it allows you to select the microphone input source; the default is device audio.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

4. After acquisition is complete, click the **Stop** button. Then click the **Slice** button to split the background noise sample into 1-second segments.
   - (1) Specify the portion to trim from the beginning of the background noise
   - (2) Specify the portion to trim from the end of the background noise
   - (3) Split the background noise sample
   - (4) Display area for the split samples

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

5. Click the **Add category** button in the upper right corner to add a sound category and name it (e.g., the name of the sound you want to train).
6. Click the **Record** button to start recording sound samples (recommended duration: 10 seconds). The subsequent steps are the same as step 4.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

#### 2. Start Training

After completing sound sample collection, you can proceed with model training.

1. Click the **Hyperparameter** button to enter the hyperparameter settings interface (keep default settings if there are no special requirements).
2. Click the **Train model** button to start training the sound model.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

### Training Models on SenseCraft

Go to the [SenseCraft model training](https://sensecraft.seeed.cc/ai/training) platform and click the **Audio Classification Detection** button to enter the sound training interface.

#### 1. Select Audio Input Source

On the SenseCraft platform, there are multiple audio input sources available. Users can choose the appropriate microphone input source based on their actual situation. The default is computer audio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_SenseCraft_Source.png" /></div>

:::warning
Currently, the SenseCraft platform does not yet support device audio input, which may affect model recognition accuracy. For details, please refer to: [Decreased accuracy or false recognition after SenseCraft model deployment](#sensecraft-sound-model-accuracy).
:::

#### 2. Collect Background Noise

When collecting ambient background noise, it is recommended to collect more than 20 seconds of environmental background noise to ensure model training accuracy. Click the ***Collect Training Data*** button to start data collection.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Voice_Noice_Capture.png" /></div>

#### 3. Collect Sound Samples

When collecting sound samples, users can set the duration of each audio segment; the default is 2 seconds. Configure as shown in the image below.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Sample_Set_data.png" /></div>

#### 4. Train the Model

Click the ***Train Model*** button to start training the sound model.

## Deploying the Model

1. At the bottom of the Acoustic Lab interface, find the **Deploy** option. In the **MODELS** list, find the model you just trained, click to select it, and deploy it.
   - (1) Model list
   - (2) Real-time audio spectrogram

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. Return to the WebUI main interface and click the **Record Settings** button to enter the recording settings interface.
3. Find the **Sound Event Trigger** option and click the **Configuration** button on the right to enter the sound trigger configuration interface.
4. Select the sound category you just trained, and then click the **Confirm** button to complete the sound trigger configuration.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## Troubleshooting

### Issue: Trained model not found in the deployment list

- Confirm that the training process has been completed and that a model file has been generated in the workspace.
- Check whether the current workspace is the same one used during training.
- Try refreshing the Acoustic Lab page or re-entering.

### Issue: Sound trigger is insensitive or triggers falsely

- Check whether the background noise sample is sufficient; it is recommended to re-collect more than 20 seconds of environmental background noise.
- Adjust the confidence threshold in the hyperparameters.
- Confirm that the microphone input source and channel configuration are correct.

### Issue: SenseCraft sound classification model accuracy drops or false recognitions occur after deployment to the device {#sensecraft-sound-model-accuracy}

Because the device used for sound acquisition during SenseCraft training differs from the device used for actual model inference, there are certain differences in audio features. You can refer to the following methods to optimize the deployed model's accuracy:

- When deploying on SenseCraft, check the option to include the dataset and deploy it to the device.
- Open the corresponding workspace on the device, and based on actual detection results, add a small number of sample slices (more than 5 seconds) of data collected from the device's microphone to the dataset: 
***A.*** False recognition of non-target sounds: Use the device's microphone to record that sound in the background noise category and add slices; 
***B.*** False recognition of target sounds: Use the device's microphone to record that sound in the target category and add slices.

- Click the training button on the device to retrain the model. After training is complete, switch to the model and check the recognition performance again. If it still does not meet expectations, repeat the above steps.

We will continue to optimize and will support sound acquisition using the device's microphone on SenseCraft in the future. Stay tuned.

## Resources

- [reCamera Pro Product Page](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [reCamera Pro Getting Started Guide](https://wiki.seeedstudio.com/recamera_pro_getting_started/)

## Technical Support and Product Discussion

Thank you for choosing our product! We are committed to providing multi-tiered support to ensure a smooth experience with our products. We offer various communication channels to accommodate different user preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>