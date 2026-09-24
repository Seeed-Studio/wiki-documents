---
description: 在 reCamera Pro 或 SenseCraft 上采集声音样本，训练自定义声音分类模型，并部署用于声音触发事件。
title: 训练声音模型
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
url: https://wiki.seeedstudio.com/cn/recamera_pro_acoustic_lab_usage/
---

# 训练声音模型

reCamera Pro 内置一个本地声音训练平台 **Acoustic Lab**。你可以采集环境声音样本、训练自定义声音模型，并将其部署为声音触发事件——全部在设备本地完成，无需互联网连接。

## 进入 Acoustic Lab

1. 在 Web UI 中点击 **Record Settings**。
2. 点击 **Recording Configuration**。
3. 在 **Sound Event Trigger** 按钮下方，点击 **Open Acoustic Lab**。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## 界面概览

Acoustic Lab 主界面包括：

1. **实时音频频谱图** — 当前音频的频率谱
2. **实时置信度排行榜** — 当前声音的置信度排序
3. **麦克风配置** — 输入源和通道数量
4. **音频采样频率** — 越低 = 响应越快，占用资源越多
5. **置信度排行榜显示精度** — 数值精度
6. **状态信息** — 算法运行时间 + 工作区中的声音模型数量

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## 本地训练

### 1. 音频采集

1. 点击 **Workspace**，然后点击 **New workspace**。为其命名并点击 **Create**。
2. 在 **Dataset** 区域，先采集背景噪声（推荐：20 秒）。点击 **Background Noise** → **Record**。下拉菜单可选择麦克风输入源；默认是设备音频。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

3. 录制完成后，点击 **Stop**，然后点击 **Slice** 将背景噪声切分为 1 秒片段：
   - (1) 从开头裁剪
   - (2) 从结尾裁剪
   - (3) 切分样本
   - (4) 切分样本显示区域

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

4. 点击 **Add category** 添加一个声音类别并为其命名。
5. 点击 **Record** 录制声音样本（推荐：10 秒）。按同样方式进行切分。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

### 2. 开始训练

1. 点击 **Hyperparameter** 查看训练参数（除非有特殊需求，建议保持默认）。
2. 点击 **Train model** 开始训练。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

## 在 SenseCraft 上训练

前往 [SenseCraft 模型训练](https://sensecraft.seeed.cc/ai/training) 平台并点击 **Audio Classification Detection**。

### 1. 选择音频输入源

提供多种输入源。默认是电脑音频。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_SenseCraft_Source.png" /></div>

:::warning
SenseCraft 目前尚不支持设备音频输入，这可能会影响部署后模型的识别精度。请参见下文的 [SenseCraft 模型精度](#SenseCraft-模型精度)。
:::

### 2. 采集背景噪声

采集至少 20 秒的环境背景噪声。点击 **Collect Training Data**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Voice_Noice_Capture.png" /></div>

### 3. 采集声音样本

设置每段音频的时长（默认：2 秒）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Sample_Set_data.png" /></div>

### 4. 训练

点击 **Train Model**。

## 部署模型

1. 在 Acoustic Lab 中，在底部找到 **Deploy** 选项。在 **MODELS** 列表中选择你训练好的模型并进行部署。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. 返回 Web UI 主界面 → **Record Settings** → **Sound Event Trigger** → **Configuration**。
3. 选择你训练好的声音类别并点击 **Confirm**。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## 故障排查

### 训练好的模型在部署列表中找不到
- 确认训练已完成并生成了模型文件。
- 检查当前是否处于训练时使用的同一工作区。
- 刷新 Acoustic Lab 页面。

### 声音触发不灵敏或误触发
- 重新采集至少 20 秒的背景噪声。
- 在超参数中调整置信度阈值。
- 确认麦克风输入源和通道配置。

### SenseCraft 模型部署后精度下降 {#SenseCraft-模型精度}

SenseCraft 训练得到的音频特征与设备端推理存在差异。要进行优化：

1. 在 SenseCraft 上部署时，勾选包含数据集的选项。
2. 在设备上打开该工作区。根据实际检测结果，补充录制 5 秒以上的设备麦克风录音：
   - **A.** 将非目标声音误识别为目标 → 将该声音录制为背景噪声，并添加切片。
   - **B.** 将目标声音误识别为非目标 → 将该声音录制到目标类别中，并添加切片。
3. 在设备上重新训练并切换到新模型。

{/* TODO(verify): confirm whether local training supports multi-category models and maximum number of categories per model */}

## 相关页面

- [通过声音触发抓拍](/cn/recamera_pro_sound_trigger/)
- [配置事件录制](/cn/recamera_pro_record_settings/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
