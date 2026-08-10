---
description: 介绍异常振动检测的使用。
title: 异常振动检测
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 01/06/2026
  author: jancee
createdAt: '2025-08-14'
updatedAt: '2026-01-06'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection/
---

# 振动异常检测

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

就像最微小的病灶也可能引发致命疾病一样，最严重的工程灾难往往源于看似微不足道的异常。振动是一个至关重要的指标——断裂、堵塞、过载和磨损都会表现出各不相同的振动模式。

本教程将介绍 **Vibration Anomaly Detection Kit**（振动异常检测套件）。它是一种轻量级智能解决方案，用于实时监测和识别异常振动模式。通过使用极少的训练数据学习设备的正常振动特征，它可以为机械故障提供早期预警。

<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

---

## 1. 准备工作

在开始检测异常之前，请确保已准备好以下硬件和软件环境。

### 硬件需求

该解决方案由 3 个硬件模块组成。

- **MCU：** <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3 (Pre-Soldered)**</a>
- **扩展板：** <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield for Seeed Studio XIAO**</a>（带有电池管理功能）
- **传感器：** <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - 3-Axis Digital Accelerometer (LIS3DHTR)**</a>
- **线缆：** 1 根 USB-C 数据线
- **目标对象：** 具有稳定、规律振动的设备（例如电机、风扇）。

**获取完整套件：** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Vibration Anomaly Detection Kit for XIAO ESP32-S3**</a>

### 软件设置

1. 打开浏览器并访问 <a href="https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home" target="_blank">**SenseCraft AI**</a>。
2. 使用你的账号登录（如果没有账号，请先注册）。
3. 进入 **XIAO ESP32S3 Sense** 工作空间，并选择 **"Vibration"**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

---

## 2. 分步指南

按照以下步骤训练你的设备识别“正常”振动，并检测异常。

### 步骤 1：连接与初始化

1. **组装：** 通过 Grove Shield 将加速度计连接到 XIAO ESP32-S3。将传感器牢固地固定在目标对象上。
2. **连接：** 通过 USB 将 XIAO ESP32S3 插入电脑。在 SenseCraft AI 界面上点击 **"Connect"** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>

3. **验证：** 系统会显示设备信息。
    * *注意：* 如果固件不正确，请使用界面上的烧录按钮更新为 **Vibration Anomaly Detection (VAD) firmware**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>

### 步骤 2：参数配置

连接成功后，你将看到参数设置区域。
* **Window Size：** 默认值为 **192**。目前保持默认即可。
    * *提示：* 窗口过小可能导致学习不足，而窗口过大会增加推理时间。你可以稍后再进行调优。

### 步骤 3：训练（采集正常数据）

设备需要学习“正常”是什么感觉。

1. 确保你的目标对象处于 **正常工作状态**。
2. 点击 **"Collect Normal Vibration"**。
3. 等待成功提示：“Normal vibration collection succeeded”。
4. 点击 **"Save"**。这会将模型存储到 MCU 的 Flash 存储器中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

### 步骤 4：检测异常

1. 点击 **"Detect"** 开始实时监测。
2. 观察 **Detection Output Area**（检测输出区域）：
    * **Normal：** 振动模式与已学习的模型匹配。
    * **Abnormal：** 检测到潜在异常（会显示告警）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>

### 步骤 5：部署与 GPIO

你可以配置设备在发生异常时触发外部硬件。

1. 找到 **GPIO Configuration**（GPIO 配置）部分。
2. 选择一个引脚（例如 Pin 21 上的 LED），并为异常状态设置有效电平。
3. 启用 **"Default Power-On Inference Mode"**。这样设备在使用电池供电时即可自动运行，无需连接电脑。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>

---

## 3. 参数调优指南

如果你发现检测过于敏感（误报过多）或不够敏感，则需要对参数进行调优。

### 调优界面概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

该界面可以帮助你可视化数据：
1.  **Device Info：** 顶部区域。
2.  **Settings：** 参数与采集设置。
3.  **Visualization：** 实时波形（时间 vs. 加速度）。
4.  **Output：** 检测结果（0 表示 Normal，1 表示 Abnormal）。

### 关键参数

#### 1. Window Size
定义一次分析“周期”的采样点数量。
* **默认值：** 192（在 100Hz 采样率下约为 1.92 秒）。
* **如何调优：** 窗口必须至少覆盖一个完整的振动周期。使用波形图测量机器振动的周期。如果机器振动较慢，请增大 Window Size。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

#### 2. Anomaly Threshold
定义检测的灵敏度。
* **范围：** 0.0 到 1.0（默认值：0.5）。
* **如何调优：**
    * **误报太多？** 提高阈值（例如调到 0.6 或 0.7）。
    * **漏报异常？** 降低阈值（例如调到 0.3 或 0.4）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

---

## 4. 算法与原理

*本节解释 “Collect” 和 “Detect” 按钮背后的技术。对于基础使用来说是可选内容。*

系统使用 **Gyroscope Euclidean Distance Anomaly Detection (GEDAD)** 算法，并针对三轴加速度计进行了适配。它包含两个阶段：

### 阶段 1：学习
算法会建立正常振动的基线模板。
1.  **模板生成：** 采集一组正常的三轴加速度数据。
2.  **阈值计算：** 算法在模板上滑动数据“块”，计算欧氏（L2）距离，然后通过统计方法确定一个阈值，用于区分正常波动与异常。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

### 阶段 2：推理
在实时检测过程中，输入数据会与已学习的模板进行比较。
* 如果实时数据的欧氏距离相对于模板低于阈值，则判定为 **Normal**。
* 如果距离持续高于阈值，则会被标记为 **Abnormal**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

**优势：**
* 训练速度快。
* 计算开销低（适用于 ESP32S3）。
* 所需训练数据量少。

---

## 5. 应用场景

Vibration Anomaly Detection Kit 非常适合用于各个领域的预测性维护和安全监测：

* **工业：** 泵、空压机、风机、电机、减速箱。
* **HVAC：** 制冷压缩机、冷却塔。
* **机器人：** AGV/AMR 系统、农业拖拉机。
* **数据中心：** 冷水机组、服务器散热系统。
* **消费类：** 洗衣机平衡告警、车库门机构。

---

## 开源与技术支持

**源代码：** <a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab</a>

我们的算法和固件是开源的。我们正在积极开发诸如 WiFi + MQTT 上报和 FFT 分析等功能。欢迎提交 <a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a> 或 <a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>。

**技术支持：**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
