---
description: Set_AI_With_A1102
title: 使用 SenseCraft APP 在 SenseCAP A1102 上设置 AI 模型
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /cn/setting_ai_with_a1102
sidebar_position: 2
# sidebar_class_name: hidden
last_update:
  date: 12/31/2025
  author: Twelve
---

# 使用 SenseCraft APP 在 SenseCAP A1102 上设置 AI 模型

SenseCAP A1102 是一款功能强大的传感器设备，结合了先进的 AI 功能和易于部署的特性。本指南将引导您使用 **SenseCraft** 应用在 A1102 上部署 AI 模型，提供配对、配置和测试的分步说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.jpg" style={{width:800, height:'auto'}}/></div>

## **SenseCAP A1102 入门指南**

### **什么是 SenseCAP A1102？**

SenseCAP A1102 是一款专为边缘 AI 应用设计的智能摄像头传感器。配备 8GB 内存，它可以：

- 部署自定义 AI 模型。
- 自动保存识别的图像。
- 实现高精度的实时识别。

### **要求**

开始之前，请确保您拥有：

- SenseCAP A1102 设备。
- 在您的智能手机上安装 **SenseCraft AI** 应用。
- 任何用于部署的预训练 AI 模型。

## **配置 SenseCAP A1102**

### 启动视觉 AI 摄像头

:::tip
如果您需要修改 AI 摄像头设置，必须按照以下步骤为 AI 摄像头供电。

如果您只需要修改 LoRaWAN 传输相关设置，可以跳过此部分。
:::

按照以下说明将 Type-C 端口连接到 A1102 和您的计算机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:700, height:'auto'}}/></div>

如果连接正确，您可以看到两个指示灯亮起。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/check_indicators.png" style={{width:400, height:'auto'}}/></div>

### **访问高级设置**

在底部导航栏中选择 "User"，然后点击 "Device Bluetooth Configuration"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step1.png" style={{width:400, height:'auto'}}/></div>

滑动到底部并选择 "SenseCAP A1102"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step2.png" style={{width:400, height:'auto'}}/></div>

按住 SenseCAP A1102 上的电源按钮**三秒钟**以启用配对模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/11.png" style={{width:400, height:'auto'}}/></div>

配对完成后，在 SenseCraft AI 应用中点击 **Advanced Settings**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/1.png" style={{width:400, height:'auto'}}/></div>

再次点击 **Advanced Settings** 导航到其他配置选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/2.png" style={{width:400, height:'auto'}}/></div>

再次点击 **AI Camera** 选择 A1102 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/picture10.png" style={{width:400, height:'auto'}}/></div>

## **部署 AI 模型**

### **选择 AI 模型**

从设置菜单中，选择您想要部署的 AI 模型。从预加载的模型中选择或上传自定义模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/3.png" style={{width:400, height:'auto'}}/></div>

### **配置模型参数**

:::warning note
如果您需要修改 AI 摄像头设置，必须按照步骤为 AI 摄像头供电。  
请参考[启动视觉 AI 摄像头](#启动视觉-AI-摄像头)。
:::

设置参数，如：

- **置信度级别**：调整物体识别的阈值（例如，80% 置信度）。
- **保存识别图像**：启用或禁用将识别图像保存到存储卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/5.png" style={{width:400, height:'auto'}}/></div>

## **测试和运行模型**

### **预览摄像头捕获**

部署模型后，直接在应用中预览摄像头捕获的图像，以确保模型按预期工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/7.png" style={{width:400, height:'auto'}}/></div>

### **查看设备信息**

扫描 LoRaWAN 传感器 S2100 上的二维码以绑定设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture1.png" style={{width:400, height:'auto'}}/></div>

返回应用主页查看 A1102 的设备信息，如模型状态、连接性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/18.png" style={{width:400, height:'auto'}}/></div>

### **查看识别结果**

查看识别数据和日志。例如，设置报告间隔（例如，每 5 分钟）来跟踪识别的物体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/11.jpg" style={{width:400, height:'auto'}}/></div>

### **访问 SD 卡**

找到 A1102 设备上的缝隙，轻轻插入螺丝刀。施加一点力将其撬开。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/8.jpg" style={{width:400, height:'auto'}}/></div>

找到四个螺丝孔并旋转旋钮将其打开。确保在转动时施加一致的压力，以确保它们松动。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/9.jpg" style={{width:400, height:'auto'}}/></div>

螺丝松动后，取下盖子以访问 SD 卡插槽。然后您可以取出 SD 卡来读取存储在其中的信息。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_10.jpg" style={{width:400, height:'auto'}}/></div>

### **自动图像保存**

凭借 8GB 的内部存储，A1102 可以自动将识别的图像保存到存储卡。稍后访问和检索这些图像用于分析或报告。

:::tip
配备 8GB 内存，A1102 能够在识别到目标时自动将图像保存到存储卡。当我们需要访问这些图像信息时，可以直接从存储卡中提取和访问所需的图像数据。
:::

## **故障排除**

### 常见问题

1. **配置 AI 模型的两种方法**
  - 使用 SenseCraft APP 配置 AI 摄像头的内置模型
    - 连接到底部 ESP32 端口，用于为设备供电。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:400, height:'auto'}}/></div>
  - [使用 SenseCraft AI 网站](https://sensecraft.seeed.cc/ai)配置非出厂预加载的 AI 模型
    - 连接到顶部 Himax 端口，用于将模型刷写到 Himax 芯片。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:300, height:'auto'}}/></div>

2. **AI 摄像头已连接但应用显示未连接**
  - 检查数据记录器的状态，确保在返回信息页面之前先在设置中配置它。
  - 说明：为了节省电力，数据记录器只有在进入设置页面时才为 AI 摄像头供电。

3. **呼吸灯与闪烁灯**
  - 呼吸灯效果表示设备正在**搜索网络**。
  - 闪烁灯表示设备已进入**蓝牙配置模式**。
  - 如果设备处于呼吸灯模式，按一次按钮切换到红灯，然后长按按钮进入**蓝牙配置模式**（闪烁灯）。

4. **AI 摄像头成功启动，但无法通过 APP 蓝牙配置找到**
  - 当 AI 摄像头启动时，但：
    - SenseCraft APP 无法搜索到设备。
    - 尝试搜索 **Vision AI V2**，仍然检测不到设备。
  - 这表明 **ESP32 固件可能无法正常工作**（ESP32 负责蓝牙广播）。
  - **解决方案：**  
    - 将电缆连接到 **ESP32 端口**并打开串行监视器检查 ESP32 是否正常运行。  
    - 如果出现异常日志或启动错误，请联系技术支持获取**重新刷写 ESP32 固件**的说明。

## **技术支持与产品讨论**

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
