---
description: 介绍异常振动检测的使用方法。
title: 异常振动检测
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /cn/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 08/14/2025
  author: lian
---

# 振动异常检测

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

正如最小的病变可能导致致命疾病一样，最严重的工程灾难往往源于看似微不足道的异常，而这些异常实际上提供了充分的警告和明显的征象。振动就是这样一个关键指标——裂缝、堵塞、过载和磨损都会表现出独特的振动模式。如果我们选择这样做，我们可以收集振动信号并巧妙地运用数学和算法来分析它们，从而防止灾难性和代价高昂的灾难。

## 介绍

介绍振动异常检测套件。这是一个轻量级智能解决方案，旨在实时监控和识别异常振动模式。通过使用最少的训练数据学习设备的正常振动特征，它为机械故障、磨损或失效提供早期警告——在灾难性损坏发生之前预防它。它非常适合工业机械的预测性维护、车辆安全监控、桥梁/建筑物的结构健康评估、确保制造/实验室设备的精度，以及在智能家电/物联网设备中实现异常检测。
<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

请先观看此视频以获得初步了解。

---

## 应用场景

### 旋转设备的预测性维护

- 泵
- 空气压缩机
- 风扇
- 电机
- 齿轮箱

### 自动传送带

### 暖通空调/制冷设备

- 制冷压缩机
- 冷却塔
- 通风电机

### 车辆和机器人

- 农用拖拉机
- AGV/AMR 系统

### 数据中心和建筑暖通空调系统

- 冷水机组
- 二次泵
- 冷却塔
- 大型 UPS 隔音柜

### 家用和消费级设备

- 洗衣机/烘干机不平衡警报
- 车库卷帘门磨损预测

---

## 工作原理

如演示视频所示，该套件由 3 个硬件模块组成，依靠 SenseCraft AI 平台下载固件并进行配置。

- <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3（预焊接）**</a>
- <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield for Seeed Studio XIAO 带嵌入式电池管理芯片**</a>
- <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - 3 轴数字加速度计（LIS3DHTR）**</a>

**套件：** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**XIAO ESP32-S3 振动异常检测套件**</a>

我们将加速度计连接到具有一致、规律振动的物体上。然后通过 Grove 线缆将加速度计连接到 MCU（在本例中为 XIAO ESP32-S3）。MCU 实时收集和分析来自加速度计的三轴数据。通过仅在短暂时间内收集正常振动数据，系统可以学会自动确定物体是否正在经历异常振动。

当连接到计算机时，传感器数据和检测结果通过 USB（或其他方法）发送到 SenseCraft 控制台。在控制台上，您可以监控设备的当前状态。如果设备处于异常状态，将显示警报。此外，控制台不仅允许您保存学习到的"正常振动"数据以供将来使用，还允许您配置 GPIO 输出状态（例如激活 LED 灯）以在发生异常时发出信号。

这里我们详细解释振动异常检测算法——**陀螺仪欧几里得距离异常检测（GEDAD）**算法，该算法最初为陀螺仪开发，现在已扩展到 3 轴加速度计，同时保留其原始名称。GEDAD 算法包含两个核心阶段：**学习**和**推理**。

---

### 2.1 数据采集和预处理

该过程从数据采集开始。虽然振动数据通过 I2C 从三轴加速度计收集并存储在循环缓冲区中，但后来数据经历线性变换，其中乘以系数，并加上另一个系数 beta。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_1.png"/></div>

---

### 2.2 学习阶段

学习阶段的目标是为测量设备建立正常振动的基线模板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

1. **模板生成：** 首先，收集一组 3 轴加速度数据，大小足以覆盖完整的正常操作周期，作为模板数据。
2. **距离计算：** 然后算法从模板每个通道内的相同位置随机采样短数据段或称为*块*。然后每个块以定义的步长在其对应通道的整个模板上滑动，计算每个位置的欧几里得（L2）距离。
3. **阈值计算：** 接下来，从这些距离中过滤异常值（例如，使用 σ 规则；具体来说，小于给定限制的值）。对于每个通道，对剩余距离进行排序以识别最小值。然后从这些距离为每个通道计算平均阈值，定义正常和异常状态之间的边界。
4. **参数校准：** 最后，通过在后续比较中找到欧几里得距离低于阈值的连续实例的中位数计数来确定附加参数 *K*。存储此参数以提高下一阶段的检测精度。

---

### 2.3 推理阶段

在推理过程中，算法将实时三轴加速度数据与已建立的模板数据进行比较，以识别任何不符合正常"指纹"的振动。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

- 该过程与训练类似，但使用实时数据段进行比较，而不是随机采样的数据块。
- 如果实时数据段与模板的某一部分足够相似（即其欧几里得距离低于阈值），则认为振动是正常的。
- 相反，如果在与整个模板比较后距离仍高于阈值，系统会将振动标记为异常。

实际计算更为复杂，涉及跨通道异常分数的融合以及参数 *K* 的使用。

---

### 2.4 总结与未来工作

总结而言，该算法的优势包括：

- 快速的"训练"速度
- 低计算开销
- 适用于低功耗嵌入式设备
- 仅需少量正常数据进行训练

我们还在探索工程优化，例如使用**快速傅里叶变换（FFT）**来分析频率成分，并考虑时频特性和平均幅度。未来的工作将专注于进一步提高算法的准确性、效率和鲁棒性。

---

## 3. 如何使用

### 3.1 准备工作

#### 3.1.1 硬件

- 套件 - **套件：** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**XIAO ESP32-S3 振动异常检测套件**</a>
- 1 根 USB-C 数据线（用于设备供电和数据传输）
- 1 台计算机（用于访问 SenseCraft AI）
- 待监测对象（例如电机、家用电器）

#### 3.1.2 SenseCraft AI 登录

1. 打开浏览器，访问 <a href="https://sensecraft.seeed.cc/ai/home" target="_blank">**SenseCraft AI**</a> 官方网站，使用账号和密码登录（如果没有账号，需要先完成注册流程）。
2. 进入 XIAO ESP32S3 Sense 设备的工作空间，选择"Vibration"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

3. 检查连接。如果连接良好且固件正确，将显示设备信息。如果设备当前固件是 Vision 固件或任何其他固件，您可以通过界面上的固件烧录按钮直接将其更新为振动异常检测（VAD）固件。

---

### 3.2 SenseCraft AI 用户界面

平台的用户界面分为 4 个核心区域：

1. **设备信息区域：** 位于界面顶部，显示设备 ID、设备名称、设备固件版本、设备默认开机推理和 GPIO 引脚控制。
2. **参数和采集设置区域：** 包括算法参数窗口大小的设置和采集正常振动的功能。
3. **振动数据可视化区域：** 以波形图显示实时振动加速度数据（横轴为时间轴，纵轴为加速度值）。
4. **检测输出区域：** 显示正常和异常状态的检测结果（分别用 0 和 1 表示），以及异常振动的波形图（横轴为时间轴，纵轴为异常显示，范围为 0~1）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

---

### 3.3 详细操作流程

#### 3.3.1 设备连接和初始化

1. 通过数据线将 XIAO ESP32S3 Sense 连接到计算机。
2. 点击 SenseCraft AI 界面上的"Connect"按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>
3. 系统自动发送命令查询设备信息，设备返回相应的响应信息。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>
4. 设备信息显示后，进行参数配置：
   - 用户可以设置窗口大小，默认值为 192，范围为 192~768。此时，只需从默认值开始。如果在后续步骤中检测结果过于跳跃，可以回来调整此参数。请记住在验证参数达到最佳值后，最后点击"Save"按钮。
:::tip note
窗口过小可能导致振动模式学习不足，而窗口过大会增加推理时间。
:::
---

#### 3.3.2 正常振动数据采集（模型训练）

- 点击"Collect Normal Vibration"按钮开始采集正常振动数据（训练）。
- 等待采集完成，确认看到"Normal vibration collection succeeded"消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

- 保存采集的正常振动数据。"Save"按钮将把参数和学习到的"模型"都保存到 MCU 的闪存中，使它们在断电重启后仍然保持。

---

#### 3.3.3 异常振动检测

- 点击"Detect"开始实时检测。
- 检查检测结果；平台显示实时振动数据和检测结果 - 正常或异常。"异常"结果意味着检测到潜在异常。用户可以选择直接使用，或根据对异常模式的信心程度进行进一步验证。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>
- 如果满意，请继续进行部署步骤，否则返回参数调优或重新收集正常数据。

---

#### 3.3.4 部署

目前固件可以通过GPIO输出结果状态。根据您的需要选择GPIO编号，并记住启用"默认上电推理模式"。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>
**GPIO使用方法：**  
目前，XIAO ESP32S3 Sense的GPIO 1、2、3、21（LED）、41和42可用。您可以为异常状态设置有效电平。例如，通过设置LED点亮，当检测到异常振动时LED将亮起。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace8.png"/></div>
---

### 3.4 参数调优指南

我们为用户提供了两个核心算法参数：**窗口大小**和**异常阈值**。这些参数直接影响异常检测算法的实时性能、鲁棒性和精度。

#### 3.4.1 窗口大小

窗口大小定义为算法学习阶段从每个通道收集的样本数据点数量，用于建立正常状态的模板。这是算法有效性的关键因素。

- 范围：192到768之间的整数。默认值为192。假设默认传感器采样率为100Hz，此范围对应1.92到7.68秒的时间窗口。
- 调优原则：窗口大小必须至少包含物体在正常条件下的一个完整振动周期。如果物体的振动周期较长，应增加窗口大小。相应地，算法的学习和推理时间会增加，反之亦然。

通常，可以通过观察正常条件下"异常振动检测"区域中的"加速度"图表来确定振动周期。首先，观察整体曲线是否显示规律的重复模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

- 如果有规律模式，使用图表下方的滑块分离出一个或两个完整的振动周期。然后可以通过将鼠标悬停在曲线上并计算两个相似点之间的时间差来确定周期长度。
- 如果周期难以辨别，可以将窗口大小设置为最大值768，以确保算法捕获所有潜在的振动模式。
:::tip note
一般来说，"周期"是指物体运动、发展或变化过程中以固定间隔重复的特征。
:::

---

#### 3.4.2 异常阈值

异常阈值定义为算法用来判断当前状态是否异常的值。它直接影响算法的精度和鲁棒性。

- 范围：0.0到1.0之间的浮点数。默认值为0.5。
- 调优原则：异常阈值应根据具体应用需求进行调整，确定最佳值通常需要多次实验。

一般来说，较低的异常阈值会导致更多误报，而较高的阈值可能导致漏报。为了使传感器更敏感，可以降低异常阈值；相反，为了减少误报，可以提高阈值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

为了提高传感器敏感性，可以使用二分搜索方法更高效地找到最佳异常阈值。步骤如下：

- 将初始异常阈值设置为0.5并观察输出。如果状态仍为"正常"，阈值可能过高。
- 将异常阈值降低到上界（0.5）的一半，即0.25，再次观察输出。
- 如果状态仍为"正常"，将当前值设为新的上界；否则，将其设为新的下界。
- 接下来，将异常阈值调整到当前上界和下界的中点并观察输出。
- 如果输出为"异常"，当前阈值过低，将此值设为新的下界。如果输出为"正常"，将此值设为新的上界。
- 重复步骤4和5，直到在当前异常阈值下在所需敏感度水平上持续产生"正常"状态。

---

#### 3.4.3 其他注意事项

基于当前算法的实现，三个旋转自由度的变化是异常检测的主要决定因素，而平移自由度的变化影响很小。因此，当设备的部署环境发生变化（特别是其方向）时，通常需要启动新的学习过程并重新调整参数。如果您发现通过参数调优难以达到所需的检测精度，也可以尝试重新学习正常振动状态，然后再重新调优参数。

---

## 开源

<a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab: AcousticsLab 是一个用于声音和振动分析的跨平台框架。</a>

我们的算法和固件目前是开源的。如果您有任何问题或建议，请随时提交 <a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a>。

---

## 未来

即将推出的功能包括：

- 添加多种前沿/最先进的基于深度学习的振动异常检测算法。
- 支持通过 WiFi + MQTT 进行数据和结果报告。
- 支持更多 MCU 和加速度计。

欢迎建议您感兴趣的功能或提交 <a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
