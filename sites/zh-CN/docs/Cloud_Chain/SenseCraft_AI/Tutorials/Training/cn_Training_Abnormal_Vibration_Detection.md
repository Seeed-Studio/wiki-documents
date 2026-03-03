---
description: 介绍异常振动检测的使用方法。
title: 异常振动检测
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /cn/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 01/06/2026
  author: jancee
---

# 振动异常检测

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

正如最小的病变可能导致致命疾病一样，最严重的工程灾难往往源于看似微不足道的异常。振动是一个关键指标——裂缝、堵塞、过载和磨损都会表现出不同的振动模式。

本教程介绍了**振动异常检测套件**。这是一个轻量级智能解决方案，旨在实时监控和识别异常振动模式。通过使用最少的训练数据学习设备的正常振动特征，它可以为机械故障提供早期预警。

<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

---

## 1. 准备工作

在开始检测异常之前，请确保您已准备好以下硬件和软件环境。

### 硬件要求

该解决方案由 3 个硬件模块组成。

- **MCU：** <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3（预焊接版）**</a>
- **扩展板：** <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield for Seeed Studio XIAO**</a>（内置电池管理）
- **传感器：** <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - 3 轴数字加速度计（LIS3DHTR）**</a>
- **线缆：** 1 根 USB-C 数据线
- **目标对象：** 具有一致规律振动的设备（例如电机、风扇）。

**获取完整套件：** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**XIAO ESP32-S3 振动异常检测套件**</a>

### 软件设置

1. 打开浏览器并访问<a href="https://sensecraft.seeed.cc/ai/home" target="_blank">**SenseCraft AI**</a>。
2. 使用您的账户登录（如果没有账户请先注册）。
3. 进入**XIAO ESP32S3 Sense**工作区并选择**"Vibration"**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

---

## 2. 分步指南

按照以下步骤训练您的设备识别"正常"振动并检测异常。

### 步骤 1：连接和初始化

1. **组装：** 通过 Grove Shield 将加速度计连接到 XIAO ESP32-S3。将传感器牢固地附着到您的目标对象上。
2. **连接：** 通过 USB 将 XIAO ESP32S3 插入您的计算机。在 SenseCraft AI 界面上点击**"Connect"**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>

3. **验证：** 系统将显示设备信息。
    * *注意：* 如果固件不正确，请使用界面上的烧录按钮更新为**振动异常检测（VAD）固件**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>

### 步骤 2：配置

连接后，您将看到参数设置区域。
* **Window Size：** 默认为**192**。现在保持此默认值。
    * *提示：* 窗口太小可能导致学习不足，而窗口太大会增加推理时间。您可以稍后调整此参数。

### 步骤 3：训练（收集正常数据）

设备需要学习什么是"正常"的感觉。

1. 确保您的目标对象在其**正常状态**下运行。
2. 点击**"Collect Normal Vibration"**。
3. 等待成功消息："Normal vibration collection succeeded"。
4. 点击**"Save"**。这会将模型存储到 MCU 的闪存中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

### 步骤 4：检测异常

1. 点击**"Detect"**开始实时监控。
2. 观察**检测输出区域**：
    * **Normal：** 振动模式与学习的模型匹配。
    * **Abnormal：** 检测到潜在异常（显示警报）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>

### 步骤 5：部署和 GPIO

您可以配置设备在发生异常时触发外部硬件。

1. 找到**GPIO Configuration**部分。
2. 选择一个引脚（例如，Pin 21 上的 LED）并为异常状态设置有效电平。
3. 启用**"Default Power-On Inference Mode"**。这允许设备在电池供电时自动运行，无需计算机连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>

---

## 3. 参数调优指南

如果您发现检测过于敏感（误报）或不够敏感，您需要调整参数。

### 调优界面概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

界面帮助您可视化数据：
1.  **设备信息：** 顶部区域。
2.  **设置：** 参数和收集设置。
3.  **可视化：** 实时波形（时间 vs 加速度）。
4.  **输出：** 检测结果（0 表示正常，1 表示异常）。

### 关键参数

#### 1. Window Size
定义一个分析"周期"的采样点数量。
* **默认：** 192（在 100Hz 下约 1.92 秒）。
* **如何调整：** 窗口必须覆盖至少一个完整的振动周期。使用波形图测量您机器振动的周期。如果机器振动缓慢，请增加 Window Size。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

#### 2. Anomaly Threshold
定义检测的敏感度。
* **范围：** 0.0 到 1.0（默认：0.5）。
* **如何调整：**
    * **误报太多？** 增加阈值（例如，到 0.6 或 0.7）。
    * **漏检异常？** 降低阈值（例如，到 0.3 或 0.4）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

---

## 4. 算法与原理

*本节解释"Collect"和"Detect"按钮背后的技术。对于基本使用是可选的。*

系统使用**陀螺仪欧几里得距离异常检测（GEDAD）**算法，适用于 3 轴加速度计。它包含两个阶段：

### 阶段 1：学习
算法建立正常振动的基线模板。
1.  **模板生成：** 收集一组正常的 3 轴加速度数据。
2.  **阈值计算：** 算法在模板上滑动数据"块"，计算欧几里得（L2）距离。然后统计确定一个将正常变化与异常分离的阈值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

### 阶段 2：推理
在实时检测期间，传入数据与学习的模板进行比较。
* 如果实时数据相对于模板的欧几里得距离低于阈值，则为**正常**。
* 如果距离保持在阈值之上，则标记为**异常**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

**优势：**
* 训练速度快。
* 计算开销低（适合 ESP32S3）。
* 训练所需数据量少。

---

## 5. 应用场景

振动异常检测套件非常适合各个领域的预测性维护和安全监控：

* **工业：** 泵、空气压缩机、风扇、电机、齿轮箱。
* **暖通空调：** 制冷压缩机、冷却塔。
* **机器人：** AGV/AMR 系统、农用拖拉机。
* **数据中心：** 冷水机组、服务器冷却。
* **消费级：** 洗衣机平衡警报、车库门机构。

---

## 开源与支持

**源代码：** <a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab</a>

我们的算法和固件是开源的。我们正在积极开发 WiFi + MQTT 报告和 FFT 分析等功能。欢迎提交<a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a>或<a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>。

**技术支持：**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
