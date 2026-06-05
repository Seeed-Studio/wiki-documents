---
description: SenseCraft AI 是 Seeed Studio 推出的零代码/低代码 AIoT 平台，可让你将预训练 AI 模型部署到诸如 reSpeaker XVF3800 等边缘设备上。通过唤醒词 "Lumio"，本方案可以实现语音控制的 AI 应用——无需复杂编码。
title: 搭配 reSpeaker XVF3800 使用 SenseCraft AI
keywords:
  - SenseCraft
  - reSpeaker XVF3800
  - 关键词检测
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg
slug: /respeaker_xvf3800_sensecraft
sku: 114993702,114993700
last_update: 
  date: 6/4/2026
  author: Kasun Thushara
createdAt: '2026-06-04'
updatedAt: '2026-06-04'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf3800_sensecraft/
---


## 介绍

SenseCraft AI 是 Seeed Studio 推出的零代码/低代码 AI 平台，可简化将预训练人工智能模型部署到诸如 reSpeaker XVF3800 等边缘设备的流程。本指南重点介绍如何将 reSpeaker XVF3800 配置为使用自定义触发词 "Lumio" 进行唤醒词检测，从而在无需编写复杂代码的情况下，为你的项目实现语音激活控制。借助 SenseCraft AI，你可以快速测试、预览并将唤醒词事件集成到硬件工作流中。该平台还允许你创建并上传自己的自定义模型，用于检测特定声音事件和自定义唤醒词，为你量身定制语音交互提供充分的灵活性，以满足独特的应用需求。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 部署现有模型

### 步骤 1：更新设备固件

在部署唤醒词模型之前，请确保你的 reSpeaker XVF3800 正在运行正确的固件版本。

所需的固件文件为：
> `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.7_48k_test5.bin`

请按照设备的标准 DFU（设备固件更新）[流程](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)将此文件烧录到 reSpeaker XVF3800。


### 步骤 2：进入 SenseCraft AI 平台

打开你的网页浏览器并访问：
> **https://sensecraft.seeed.cc/**

### 步骤 3：进入训练部分

在主导航菜单中：
1. 点击 **Products**
2. 选择 **SenseCraft AI**
3. 选择 **Training AI Models**



### 步骤 4：打开你的工作区

1. 进入你的 **Workspace**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_0.jpg" alt="pir" width={800} height="auto" /></p>

2. 确认工作区中已将 **reSpeaker** 设置为当前活动设备类型
3. 在设备列表中选择 **reSpeaker**
4. 点击 **Connect** 按钮，与设备建立连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_1.jpg" alt="pir" width={800} height="auto" /></p>

### 步骤 5：替换正在运行的模型

连接成功后，你将替换设备上现有的模型：

1. 在“Replace the device running model”下找到 **Model** 部分
2. 点击 **Select Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_2.jpg" alt="pir" width={800} height="auto" /></p>

3. 从可用选项中选择 **Keyword Spotting- Lumos Keyword recognition**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_3.jpg" alt="pir" width={800} height="auto" /></p>

:::note

你正在部署的模型名为 **Lumos**。它是一款轻量级语音识别模型，旨在为边缘设备提供高效、低延迟的语音交互能力。通过分析音频的频谱特征，该模型即使在复杂的环境背景噪声中，也能准确检测到特定唤醒词 **"Lumos"**。
:::


### 步骤 6：确认模型部署

1. 将会弹出一个包含模型详细信息的对话框
2. 点击 **Confirm** 以继续将模型烧录到设备
3. 在模型烧录到 reSpeaker XVF3800 的过程中，请稍候片刻

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_4.jpg" alt="pir" width={800} height="auto" /></p>

### 步骤 8：测试唤醒词检测

部署成功后，你将看到：

- **音频频谱可视化** – 显示实时声音输入
- **两个检测类别**：
  - *背景噪声*
  - *Lumos*

要测试唤醒词：
1. 对着 reSpeaker 麦克风清晰地说出 **"Lumos"**
2. 观察 Lumos 类别的置信度水平上升
3. 根据需要调整 **threshold parameter**，以微调检测灵敏度

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg" alt="pir" width={800} height="auto" /></p>

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

