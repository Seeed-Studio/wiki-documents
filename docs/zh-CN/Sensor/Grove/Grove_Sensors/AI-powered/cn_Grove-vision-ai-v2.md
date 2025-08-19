---
description: 入门指南 Grove Vision AI V2。
title: Grove Vision AI 模块 V2
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_vision_ai_v2a
last_update:
  date: 12/12/2023
  author: Citric
---

# Grove Vision AI 模块 V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/grove_vision_ai_v2" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

Grove - Vision AI V2 是一款拇指大小的 AI 视觉模块，配备 WiseEye2 HX6538 处理器，采用 Arm Cortex-M55 双核架构。它具有标准 CSI 接口，兼容树莓派摄像头，并配备板载数字麦克风和 SD 卡插槽，非常适合各种嵌入式 AI 视觉项目。借助 SenseCraft AI 算法平台，训练好的机器学习模型可以无需编码直接部署到传感器上。它兼容 XIAO 系列和 Arduino 生态系统，是各种目标检测应用的理想选择。

<div class="table-center">
<iframe width="900" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 特性

- 基于 WiseEye2 HX6538 处理器的首款开发板，采用双核 Arm Cortex-M55 架构。
- 配备集成的 Arm Ethos-U55 微型神经网络加速单元，非常适合 AI 图像视觉应用。
- 兼容多种树莓派摄像头。
- 板载 PDM 麦克风、SD 卡插槽、Type-C 接口、Grove 接口以及丰富的外设设备，便于原型开发。
- 可扩展至 Seeed Studio XIAO 系列开发板。
- SenseCraft AI 提供现成的 AI 模型，可实现无代码部署。
- 支持多种高效 AI 模型，包括 MobilenetV1、MobilenetV2、Efficientnet-lite、Yolov5 和 Yolov8。

### 应用场景

- 工业自动化：质量检测、预测性维护、语音控制等。
- 智慧城市：设备监控、能源管理等。
- 交通运输：状态监控、位置追踪等。
- 智慧农业：环境监测等。
- 移动物联网设备：可穿戴设备、手持设备等。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.jpg" style={{width:1000, height:'auto'}}/></div>

要充分使用 Grove Vision AI V2 的功能，您可能需要单独购买一款 CSI 摄像头，我们推荐 [**OV5647-62 FOV 树莓派摄像头模块**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html)。

:::caution
请注意，摄像头不包含在 Grove Vision AI V2 的部件清单中。
:::

当您准备好 Grove Vision AI V2 和摄像头后，可以通过 CSI 连接线将它们连接起来。连接时，请注意针脚的方向，避免反向插入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

## 入门指南

### 启动

如果您使用了一些不常见的方法，导致 Grove Vision AI 完全无法正常工作（软件层面），那么您可能需要将设备置于 BootLoader 模式以恢复设备。以下是进入 BootLoader 模式的方法。

**方法 1**

请断开 Grove Vision AI 与您的计算机之间的连接线，然后按住设备上的 Boot 按钮并保持不松开。这时，请使用 Type-C 数据线将 Grove Vision AI 连接到您的计算机，然后再松开按钮。此时设备将进入 BootLoader 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**方法 2**

在 Grove Vision AI 已连接到您的计算机的情况下，您可以通过按下 Boot 按钮，然后快速按下 Reset 按钮来进入 BootLoader 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

### 重置

如果您遇到设备数据突然无法上传或图像卡住的问题，可以尝试使用 Reset 按钮重新启动设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

### 驱动程序

如果您发现 Grove Vision AI V2 在连接到您的计算机后无法被识别，那么您可能需要在计算机上安装 CH343 驱动程序。以下是下载和安装 CH343 驱动程序的链接：

- Windows Vendor VCP 驱动程序一键安装程序：[CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Windows Vendor VCP 驱动程序：[CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Windows CDC 驱动程序一键安装程序：[CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Windows CDC 驱动程序：[CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.ZIP)
- macOS Vendor VCP 驱动程序：[CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)

## Arduino 库概述

:::提示
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Grove Vision AI 使用 WiseEye2 HX6538 芯片，图像处理和模型推理均在 Grove Vision AI 本地完成，然后通过 IIC 或 UART 将结果输出到 XIAO。因此，该库的主要目的是处理 Grove Vision AI 的数据流，而不涉及模型推理或图像处理。

Grove Vision AI 通过 IIC 与 XIAO 通信，设备的 IIC 地址为 `0x62`。图像信息通过 USB 串口传输。

### 功能

在开始开发代码之前，让我们先了解一下库的可用功能。

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— 初始化 Grove Vision AI V2。

  **输入参数：**
    - `TwoWire *wire` —— 指向 TwoWire 对象的指针，通常用于与 I2C 设备通信。
    - `uint16_t address` —— I2C 设备的地址，用于标识连接到 I2C 总线的特定设备。
    - `uint32_t wait_delay` —— 在发送命令之前等待响应的延迟时间（以毫秒为单位）。
    - `uint32_t clock` —— I2C 总线的时钟速率（以 Hz 为单位）。

  **返回值：** `True` 或 `False`。初始化成功返回 True，初始化失败返回 False。

- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— 用于向 Grove Vision AI V2 发送 INVOKE 命令，以使 Grove Vision AI 开始调用模型、推理和识别。

  **输入参数：** 
    - `int times` —— 调用次数。
    - `fileter` —— 表示只有当最后结果与之前结果不同（通过几何和分数比较）时，事件回复才会发送。
    - `bool show` —— 表示只有当最后结果与之前结果不同（通过几何和分数比较）时，事件回复才会发送。

:::注意
有关 Grove Vision AI 协议定义的更多信息，您可以阅读 [**协议文档**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)。
:::

  **返回值：** `CMD_OK` 或 `CMD_ETIMEDOUT`。如果模型成功启用，则返回 **CMD_OK**，否则返回 **CMD_ETIMEDOUT**。

- `int available()` —— 检查通过 IIC 从连接的设备读取数据时有多少字节可用。

  **输入参数:** 无。

  **返回值:** 可以从设备读取的数据字节数。

- `int read(char *data, int length)` —— 通过 IIC 接口从 Grove Vision AI 读取数据。此函数的目的是将读取的数据填充到由提供的数据指针指向的数组中。

  **输入参数:** 
    - `char *data` —— 用于存储数据的数组。
    - `int length` —— 要读取的数据长度。
  
  **返回值:** 要读取的数据长度。

- `int write(const char *data, int length)` —— 通过 I2C 接口向指定设备写入数据。

  **输入参数:**
    - `const char *data` —— 要写入的数据内容。
    - `int length` —— 要写入的数据长度。

  **返回值:** 要写入的数据长度。

- `std::vector<boxes_t> &boxes() { return _boxes; }` —— 以框的形式输出结果。

```cpp
typedef struct
{
    uint16_t x;      // 框中心的水平坐标
    uint16_t y;      // 框中心的垂直坐标
    uint16_t w;      // 识别框的宽度
    uint16_t h;      // 识别框的高度
    uint8_t score;   // 识别为目标的置信度
    uint8_t target;  // 目标
} boxes_t;
```

- `std::vector<classes_t> &classes() { return _classes; }` —— 以类别的形式输出结果。

```cpp
typedef struct
{
    uint8_t target;  // 目标
    uint8_t score;   // 识别为目标的置信度
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— 以点的形式输出结果。

```cpp
typedef struct
{
    uint16_t x;      // 识别点的水平坐标
    uint16_t y;      // 识别点的垂直坐标
    uint16_t z;      // 识别点的相对深度坐标
    uint8_t score;   // 识别为目标的置信度
    uint8_t target;  // 目标
} point_t;
```

:::note
这里的深度坐标是相对的，这并不意味着 Grove Vision AI 支持深度摄像头功能，而是算法计算了一个相对深度坐标，该坐标在某些模型（例如，面部-3D模型）中有效。
:::

- `perf_t &perf() { return _perf; }` —— 图像处理和推理时间。

```cpp
typedef struct
{
    uint16_t prepocess;   // 预处理时间
    uint16_t inference;   // 推理时间
    uint16_t postprocess; // 后处理时间
} perf_t;
```

:::note
输出结果并不总是包含识别框和点的信息，这取决于模型。
:::

### 安装

在下载了 zip 库之后，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚刚下载的 zip 文件，如果库安装正确，您会在通知窗口中看到 **Library added to your libraries** 的提示。这表示库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## SenseCraft AI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/sensecraftai.jpg" style={{width:1000, height:'auto'}}/></div>

SenseCraft 是由 Seeed Studio 开发的一系列软件服务，旨在为用户提供更快速、更简单的软件服务和应用。通过三个产品线——数据线、边缘线和 AI 线，SenseCraft 能够满足用户在数据服务、设备管理和 AI 应用方面的需求。无论您需要什么解决方案，SenseCraft 都能为您提供高效可靠的解决方案和定制服务。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>了解更多 📕</font></span></strong></a>
</div>

<br />

结合 SenseCraft AI 模型助手的赋能，您可以轻松上传各种协作创建的模型并直接观察结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>了解更多 📕</font></span></strong></a>
</div>

<br />

在本节中，我们将引导您使用 SenseCraft AI 模型助手快速部署并观察结果。

### 第一步：将 Grove Vision AI V2 连接到 SenseCraft AI 模型助手

首先，我们需要打开 SenseCraft AI 模型助手的主页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>前往 SenseCraft AI</font></span></strong></a>
</div>
<br />

请使用 Type-C 类型的线缆将 Grove Vision AI V2 连接到您的电脑。

在 SenseCraft AI 模型助手页面的右上角，您可以选择 **Grove Vision AI (WE2)**。然后点击最右侧的 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

在弹出的新窗口中，选择设备的正确 COM 端口并点击 Connect 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### 第二步：上传合适的模型

接下来，只需选择您想使用的模型并点击下方的 **Send** 按钮。以下是一个手势检测的示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/4.png" style={{width:600, height:'auto'}}/></div>

等待 1~2 分钟，模型即可上传完成。

### 第三步：观察结果

模型成功上传后，您将能够在右侧的预览中看到来自 Grove Vision AI V2 摄像头的实时画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/5.gif" style={{width:1000, height:'auto'}}/></div>

<br />

我们可以看到，在右侧的预览设置中，有两个设置选项可以更改，以优化模型的识别准确性。

- **Confidence（置信度）：** 置信度指的是模型对其预测分配的确定性或概率水平。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU（交并比）：** IoU 用于评估预测边界框与真实边界框的准确性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

至此，您已经完成了模型的上传并观察结果。

## XIAO 示例

如果您希望获得一个具备机器视觉功能的传感器原型，那么您可能需要考虑添加一个 XIAO。使用 XIAO 和 Grove Vision AI V2，您可以使用所需的模型并快速将其部署到您的应用领域。

在此之前，您仍需按照 [**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma) 的步骤和内容，先上传您想使用的模型。

**步骤 1.** 所需材料

在本教程中，我们将以 XIAO ESP32S3 为例，介绍如何使用 Arduino 程序。因此，我们建议您准备以下硬件。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV 摄像头模块<br />适用于 Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="/cn/grove_vision_ai_v2" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

然后，您需要通过排针连接 XIAO 和 Grove Vision AI V2（或者使用扩展板和 Grove 接口）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
请注意连接方向，Grove Vision AI 的 Type-C 接口应与 XIAO 的 Type-C 接口保持相同方向。
:::

**步骤 2.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div>

<br />

**步骤 3.** 选择您的开发板型号并将其添加到 Arduino IDE。

:::tip
以下是支持 Grove Vision AI V2 示例的开发板列表，您可以选择您想使用的开发板来完成后续示例。在本教程中，将以 XIAO ESP32S3 为例。
:::

- 如果您希望使用 **Seeed Studio XIAO SAMD21** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO RP2040** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO nRF52840** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO ESP32C3** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO ESP32S3** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

- 如果您希望使用 **Seeeduino V4.3** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/Seeeduino_v4.2/)** 完成添加。


### 示例 1. 使用 XIAO 获取 Grove Vision AI V2 报告的识别结果

以下过程是一个简单示例，帮助您获取并解析 Grove Vision AI V2 报告的识别信息。

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
}

void loop()
{
    if (!AI.invoke())
    {
        Serial.println("调用成功");
        Serial.print("性能: 预处理=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", 推理=");
        Serial.print(AI.perf().inference);
        Serial.print(", 后处理=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("框[");
            Serial.print(i);
            Serial.print("] 目标=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", 评分=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", 宽度=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", 高度=");
            Serial.println(AI.boxes()[i].h);
        }
        for (int i = 0; i < AI.classes().size(); i++)
        {
            Serial.print("类别[");
            Serial.print(i);
            Serial.print("] 目标=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", 评分=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("点[");
            Serial.print(i);
            Serial.print("] 目标=");
            Serial.print(AI.points()[i].target);
            Serial.print(", 评分=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
    }
}
```

#### 程序说明

此 Arduino 示例代码使用 Seeed_Arduino_SSCMA 库与 Grove Vision AI Module V2 进行交互。在 `setup()` 函数中，AI 模块被初始化，同时启动了串行通信。

在 `loop()` 函数中，代码反复调用 `invoke()` 方法，利用 Grove Vision AI Module V2 内置算法进行推理。推理成功后，程序会将性能指标打印到串行监视器，包括预处理时间、推理时间和后处理时间。

程序处理并打印推理结果的详细信息，包括：

- 边界框 (`boxes()`)：以 x 和 y 坐标、宽度和高度的形式标识检测到的对象的位置和尺寸。
- 分类 (`classes()`)：标识检测到的对象类别及其置信度分数。
- 点 (`points()`)：表示检测到的对象的特定特征或关键点，包括其 x 和 y 坐标及置信度分数。

这些结果提供了有关 AI 模块检测到的对象、其位置、大小以及每次检测或分类的置信度水平的洞察。输出结果会打印到串行监视器，以供进一步分析或调试。


#### 效果

我们仍然使用手势检测模型。在上传应用程序后，请打开串行监视器并将其波特率设置为 **9600**。请准备好您的“石头-剪刀-布”手势并将其指向摄像头的识别区域，串行监视器将输出识别结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>


### 示例 2. 使用 XIAO 与 Grove Vision AI V2 进行串行通信

Grove Vision AI V2 支持通过 [UART 协议](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)进行通信，利用内置协议可以操作 Grove Vision AI V2 的 Himax WE2 芯片。以下示例程序展示了如何使用 XIAO 通过串口与 Grove Vision AI V2 进行通信。

```cpp
#include <Arduino.h>
#include <Wire.h>

#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    // 在此处放置您的初始化代码，仅运行一次：
    Wire.begin();
    Serial.begin(115200);
    while (!Serial)
        delay(1000);

    Serial.println("Proxy start");
}

char buf[512];
void loop()
{
    int s_len = Serial.available();
    if (s_len)
    {
        int len = Serial.readBytes((char *)buf, s_len);
        AI.write(buf, len);
    }
    int t_len = AI.available();
    if (t_len)
    {
        if (t_len > 512)
        {
            t_len = 512;
        }

        AI.read(buf, t_len);
        Serial.write(buf, t_len);
    }
}
```


#### 程序说明

此 Arduino 示例代码通过 Seeed Studio 机器学习框架 SSCMA 建立了串行控制台与 Grove Vision AI V2 模块之间的通信接口。该代码旨在通过串行命令实现与 Grove Vision AI V2 模块的数据交互。

以下是代码的详细说明：

在 `setup()` 函数中：
- 使用 `Wire.begin()` 初始化 I2C 通信协议，以便与 Grove Vision AI V2 模块通信。
- 将串行通信的波特率设置为 115200。
- 程序等待串行连接激活后，向串行监视器输出 "Proxy start"，表示代理通信通道已准备好。

在 `loop()` 函数中：
- 程序使用 `Serial.available()` 检查是否有串行数据输入。如果有数据，则将其读取到名为 `buf` 的缓冲区中。
- 收集到的缓冲区数据通过 `AI.write()` 方法发送到 Grove Vision AI V2 模块。
- 接着，程序使用 `AI.available()` 检查 Grove Vision AI V2 模块是否有数据返回。
- 如果 Grove Vision AI V2 模块发送了数据，程序使用 `AI.read()` 将数据读取到缓冲区 `buf` 中，并确保数据大小不超过 512 字节的缓冲区限制。
- 最后，程序通过 `Serial.write()` 将从 Grove Vision AI V2 模块接收到的数据传回串行控制台，完成串行接口与视觉 AI 模块之间的双向通信。

此设置允许用户与 Grove Vision AI V2 模块进行交互式通信，能够通过串口发送指令并接收模块返回的数据。

## 故障排除

### Q1: Grove Vision AI 是否可以在输出实时屏幕的同时查看 XIAO 的结果信息？

不可以。考虑到帧率或图像推理的速度，我们目前不支持同时执行这两项任务。如果连接了 XIAO，则只能接收识别信息的报告，而无法查看实时帧。

### Q2: Grove Vision AI V2 支持哪些摄像头？是否仅支持 OV5647-62？

目前我们已经为 OV5642 系列摄像头编写了驱动，因此 Grove Vision AI V2 支持全系列的 Raspberry Pi OV5647 摄像头，例如 OV5647-62、OV5647-67 和 OV5647-160。其他 CSI 摄像头理论上是支持的，但由于某些摄像头没有驱动程序或自身没有颜色处理单元，可能会出现颜色仅为绿色的问题，缺失全彩色可能会对识别的准确性产生影响。

## 资源

- **[PDF]** [数据手册](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>