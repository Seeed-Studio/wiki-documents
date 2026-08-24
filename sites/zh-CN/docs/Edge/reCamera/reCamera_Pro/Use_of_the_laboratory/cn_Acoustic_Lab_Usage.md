---
title: 声学实验室使用
description: 本文介绍如何在 reCamera Pro 上使用 Acoustic Lab 功能采集环境声音样本、训练自定义声音模型，并将其部署为声音触发事件。
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
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/cn/recamera_pro_acoustic_lab_usage/
---

## 介绍

reCamera Pro 内置了一个本地声音训练平台，称为 Acoustic Lab。通过该平台，用户可以在无需连接互联网的情况下，采集环境声音样本、训练自定义声音模型，并将其部署为声音触发事件。本文将详细介绍 Acoustic Lab 中各个功能模块，涵盖从音频采集、模型训练到部署和使用的完整工作流程。

## 功能入口

1. 点击 **Record Settings** 按钮进入录制设置界面。
2. 点击 **Recording Configuration** 按钮进入录制选项界面。
3. 在 **Sound Event Trigger** 按钮下方，点击 **Open Acoustic Lab** 按钮进入声音训练界面。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## 功能概览

Acoustic Lab 主界面包括以下核心区域：

1. **实时音频频谱图**：实时显示当前采集到的音频信号频谱，帮助用户了解声音特征。
2. **实时置信度排行榜**：显示当前环境声音的置信度排名，帮助用户了解声音分布情况。
3. **麦克风配置**：选择麦克风输入源和通道数量。
4. **音频采样频率**：较低的频率可提供更快的采集响应，但会占用更多系统资源。
5. **置信度排行榜显示精度**：自定义排行榜中数值显示的精度。
6. **状态信息**：第一个参数表示算法运行时间，第二个参数表示当前工作空间中的声音模型数量。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## 训练自定义声音模型

除了内置声音模型外，用户还可以根据自身需求训练自定义声音模型。用户可以选择在本地训练，或在 [SenseCraft](https://sensecraft.seeed.cc/ai/#/home) 平台上训练。

### 本地训练

#### 1. 音频采集

1. 在 Acoustic Lab 中，点击 **Workspace** 按钮进入工作空间。
2. 点击 **New workspace** 按钮，为新工作空间命名，然后点击 **Create** 按钮。
3. 在 **Dataset** 区域，首先采集一段环境背景噪声样本（建议时长：20 秒）。点击 **Background Noise** 按钮，然后点击 **Record** 开始采集。其旁边的下拉菜单可选择麦克风输入源，默认是设备音频。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

4. 采集完成后，点击 **Stop** 按钮。然后点击 **Slice** 按钮，将背景噪声样本切分为 1 秒的片段。
   - (1) 指定从背景噪声开头需要裁剪的部分
   - (2) 指定从背景噪声结尾需要裁剪的部分
   - (3) 对背景噪声样本进行切分
   - (4) 切分样本的显示区域

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

5. 点击右上角的 **Add category** 按钮添加一个声音类别并命名（例如你想要训练的声音名称）。
6. 点击 **Record** 按钮开始录制声音样本（建议时长：10 秒），后续步骤与步骤 4 相同。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

#### 2. 开始训练

完成声音样本采集后，即可进行模型训练。

1. 点击 **Hyperparameter** 按钮进入超参数设置界面（如无特殊需求，保持默认设置）。
2. 点击 **Train model** 按钮开始训练声音模型。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

### 在 SenseCraft 上训练模型

进入 [SenseCraft 模型训练](https://sensecraft.seeed.cc/ai/training) 平台，点击 **Audio Classification Detection** 按钮进入声音训练界面。

#### 1. 选择音频输入源

在 SenseCraft 平台上，提供了多种音频输入源。用户可以根据实际情况选择合适的麦克风输入源，默认是电脑音频。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_SenseCraft_Source.png" /></div>

:::warning
目前 SenseCraft 平台尚不支持设备音频输入，这可能会影响模型识别精度。详情请参考：[问题：SenseCraft 声音分类模型部署到设备后精度下降或出现误识别](#sensecraft-sound-model-accuracy)。
:::

#### 2. 采集背景噪声

在采集环境背景噪声时，建议采集超过 20 秒的环境背景噪声，以保证模型训练精度。点击 ***Collect Training Data*** 按钮开始采集数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Voice_Noice_Capture.png" /></div>

#### 3. 采集声音样本

在采集声音样本时，用户可以设置每段音频的时长，默认是 2 秒。按下图所示进行配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Sample_Set_data.png" /></div>

#### 4. 训练模型

点击 ***Train Model*** 按钮开始训练声音模型。

## 部署模型

1. 在 Acoustic Lab 界面底部找到 **Deploy** 选项，在 **MODELS** 列表中找到刚刚训练好的模型，点击选中并进行部署。
   - (1) 模型列表
   - (2) 实时音频频谱图

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. 返回 WebUI 主界面，点击 **Record Settings** 按钮进入录制设置界面。
3. 找到 **Sound Event Trigger** 选项，点击右侧的 **Configuration** 按钮进入声音触发配置界面。
4. 选择刚刚训练好的声音类别，然后点击 **Confirm** 按钮完成声音触发配置。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## 故障排查

### 问题：在部署列表中找不到已训练的模型

- 确认训练过程已完成，并且在工作空间中生成了模型文件。
- 检查当前工作空间是否与训练时使用的工作空间一致。
- 尝试刷新 Acoustic Lab 页面或重新进入。

### 问题：声音触发不灵敏或误触发

- 检查背景噪声样本是否充足，建议重新采集超过 20 秒的环境背景噪声。
- 在超参数中调整置信度阈值。
- 确认麦克风输入源和通道配置是否正确。

### 问题：SenseCraft 声音分类模型部署到设备后精度下降或出现误识别 {#sensecraft-sound-model-accuracy}

由于 SenseCraft 训练时使用的声音采集设备与实际模型推理时使用的设备不同，音频特征存在一定差异。可以参考以下方法优化部署后模型的精度：

- 在 SenseCraft 部署时，勾选包含数据集并将其一同部署到设备。
- 在设备上打开对应的工作空间，并根据实际检测结果，将少量（超过 5 秒）的设备麦克风采集数据切片添加到数据集中： 
***A.*** 对非目标声音的误识别：使用设备麦克风在背景噪声类别中录制该声音并添加切片； 
***B.*** 对目标声音的误识别：使用设备麦克风在目标类别中录制该声音并添加切片。

- 在设备上点击训练按钮重新训练模型。训练完成后，切换到该模型再次查看识别效果，如仍未达到预期，可重复以上步骤。

我们会持续优化，并将在未来在 SenseCraft 上支持使用设备麦克风进行声音采集，敬请期待。

## 资源

- [reCamera Pro 产品页面](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [reCamera Pro 入门指南](https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于提供多层次的支持，确保您在使用产品的过程中体验顺畅。我们提供多种交流渠道，以满足不同用户的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>