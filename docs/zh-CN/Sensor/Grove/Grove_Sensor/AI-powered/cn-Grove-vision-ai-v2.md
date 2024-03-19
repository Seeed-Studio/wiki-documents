---
description: Getting Started with Grove Vision AI V2.
title: Grove Vision AI Module V2
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_vision_ai_v2a
last_update:
  date: 3/16/2024
  author: DuKaiyin
---

# Grove Vision AI 模块 V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/grove_vision_ai_v2">
            <strong><span><font color={'FFFFFF'} size={"4"}> 获取一个现在 🖱️</font></span></strong>
    </a>
</div>

## 简介

Grove - Vision AI V2 是一款拇指大小的人工智能视觉模块，配备了 WiseEye2 HX6538 处理器，采用 Arm Cortex-M55 双核架构。它具有标准的 CSI 接口，与树莓派摄像头兼容。它具有一个板载数字麦克风和一个 SD 卡槽。非常适合各种嵌入式人工智能视觉项目。通过 SenseCraft AI 算法平台，训练好的机器学习模型可以部署到传感器上，无需编码。它与 XIAO 系列和 Arduino 生态系统兼容，是各种目标检测应用的理想选择。

<div class="table-center">
<iframe width="900" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
###  特点

- 基于 WiseEye2 HX6538 处理器的首款板，具有双核 Arm Cortex-M55 架构。
- 配备集成的 Arm Ethos-U55 微型神经网络加速单元，非常适合 AI 图像视觉应用。
- 兼容广泛的树莓派摄像头。
- 板载 PDM 麦克风、SD 卡槽、Type-C、Grove 接口以及丰富的外围设备，有助于原型开发。
- 与 Seeed Studio XIAO 板的扩展性。
- 来自 SenseCraft AI 的现成 AI 模型，支持无代码部署。
- 支持各种高效的 AI 模型，包括 MobilenetV1、MobilenetV2、Efficientnet-lite、Yolov5 和 Yolov8。

### 应用

- 工业自动化：质量检测、预测性维护、语音控制等。
- 智能城市：设备监控、能源管理等。
- 交通：状态监测、位置跟踪等。
- 智能农业：环境监测等。
- 移动物联网设备：可穿戴设备、手持设备等。

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.jpg" style={{width:1000, height:'auto'}}/></div>


为了充分利用 Grove Vision AI V2 的全部功能，您可能需要单独购买一个 CSI 摄像头，我们推荐使用 [**OV5647-62 FOV 树莓派摄像头模块**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html)。

:::caution 请注意，摄像头不包含在 Grove Vision AI V2 的零件清单中。 :::

当您准备好 Grove Vision AI V2 和摄像头后，您可以通过 CSI 连接电缆将它们连接起来。连接时，请注意排针的方向，不要插反。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

##  入门指南

### 启动

如果您使用了一些不寻常的方法，导致 Grove Vision AI 完全无法正常工作（在软件层面上），那么您可能需要将设备置于 BootLoader 模式以恢复设备。以下是如何进入 BootLoader 模式的方法。

**方法 1**

请断开 Grove Vision AI 与计算机之间的连接电缆，然后按住设备上的 Boot 按钮不放。此时，请使用 Type-C 类型的数据电缆将 Grove Vision AI 连接到计算机上，然后再释放按钮。此时设备将进入 BootLoader 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**方法 2**

将 Grove Vision AI 连接到计算机上，您可以通过按下 Boot 按钮然后快速按下 Reset 按钮来进入 BootLoader 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

###  复位

如果您的设备突然无法上传数据或图像卡住，您可以尝试使用复位按钮重启设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

###  驱动程序

如果连接Grove Vision AI V2后发现计算机无法识别设备，则可能需要在计算机上安装CH343驱动程序。以下是下载和安装CH343驱动程序的链接。

- Windows供应商VCP驱动程序一键安装程序：[CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Windows供应商VCP驱动程序：[CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Windows CDC驱动程序一键安装程序：[CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Windows CDC驱动程序：[CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- macOS供应商VCP驱动程序：[CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)

## Arduino库概述

:::tip 如果这是您第一次使用Arduino，我们强烈建议您参考[Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/">
    <strong><span><font color={'FFFFFF'} size={"4"}> 库下载</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Grove Vision AI使用WiseEye2 HX6538芯片，图像处理和模型推理在Grove Vision AI本地进行处理，然后结果通过IIC或UART输出到XIAO，因此该库的主要目的是处理Grove Vision AI的数据流，不涉及模型推理或图像处理。因此，该库的主要目的是处理Grove Vision AI的数据流，而不涉及模型推理或图像处理。

Grove Vision AI通过IIC与XIAO通信，设备的IIC地址为`0x62`。图像信息传输通过USB串行端口进行

- ### 功能

  在开始开发草图之前，让我们看看库中提供的可用函数。

  - `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— 初始化Grove Vision AI V2。

    **输入参数:**

    - `TwoWire *wire` —— 此指针指向一个TwoWire对象，通常用于与I2C设备通信。
    - `uint16_t address` —— 这是标识连接到I2C总线的特定设备的I2C设备的地址。
    - `uint32_t wait_delay` —— 在发送命令之前等待响应的延迟时间（以毫秒为单位）。
    - `uint32_t clock` —— 这是I2C总线的时钟速率（以Hz为单位）。

    **返回:** `True`或`False`。初始化成功为true，初始化失败为false。

  - `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— 用于向Grove Vision AI V2发送INVOKE命令，以允许Grove Vision AI开始调用模型、推理和识别。

    **输入参数:**

    - `int times` —— Invoke的次数。
    - `fileter` —— 意味着只有在最后一个结果与上一个结果不同时才会发送事件回复（通过几何和分数进行比较）。
    - `bool show` —— 意味着只有在最后一个结果与上一个结果不同时才会发送事件回复（通过几何和分数进行比较）。

    **返回:** `CMD_OK`或`CMD_ETIMEDOUT`。如果模型成功启用，则返回**CMD_OK**，否则返回**CMD_ETIMEDOUT**。

  - `int available()` —— 检查通过IIC连接的设备中有多少字节的数据可供读取。

    **输入参数:** 无。

    **返回:** 可从设备中读取的数据字节数。

  - `int read(char *data, int length)` —— 通过IIC接口从Grove Vision AI读取数据。该函数的目的是使用提供的数据指针指向的数组填充读取的数据。

    **输入参数:**

    - `char *data` —— 用于存储数据的数组。
    - `int length` —— 要读取的数据长度。

    **返回:** 要读取的数据长度。

  - `int write(const char *data, int length)` —— 通过I2C接口向指定设备写入数据。

    **输入参数:**

    - `const char *data` —— 要写入的数据内容。
    - `int length` —— 要写入的数据长度。

    **返回:** 要写入的数据长度。

  - `std::vector<boxes_t> &boxes() { return _boxes; }` —— 以框的形式输出结果。

```cpp
typedef struct
{
    uint8_t target;  // Target
    uint8_t score;   // Confidence in identifying as target
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— 将结果以点的形式输出。

```cpp
typedef struct
{
    uint16_t x;      // Horizontal coordinates of the identification point
    uint16_t y;      // Vertical coordinates of identification point
    uint16_t z;      // Relative depth coordinates of the identification point
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} point_t;
```

:::注意 这里的深度坐标是相对的，这并不意味着 Grove Vision AI 启用了深度摄像头，而是算法计算出一个相对深度坐标，在某些模型（例如 face-3d 模型）中是有效的。 :::

- `perf_t &perf() { return _perf; }` —— 图像处理和推断时间。

```cpp
typedef struct
{
    uint16_t prepocess;   // Pre-processing time
    uint16_t inference;   // inference time
    uint16_t postprocess; // Post-processing time
} perf_t;
```

:::注意 输出并不总是包含识别框和点的信息，这取决于模型。 :::

### 安装

由于您已经下载了 zip 库，请打开 Arduino IDE，单击 **Sketch > Include Library > Add .ZIP Library**。选择您刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## SenseCraft AI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/sensecraftai.jpg" style={{width:1000, height:'auto'}}/></div>

SenseCraft是Seeed Studio开发的一系列软件服务，旨在为用户提供更快速、更简单的软件服务和应用程序。SenseCraft拥有三个产品线，包括数据线、边缘线和人工智能线，能够满足用户在数据服务、设备管理和人工智能应用方面的需求。无论您需要什么解决方案，SenseCraft都能为您提供高效可靠的解决方案和定制服务。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/"><strong><span><font color={'FFFFFF'} size={"4"}>了解更多 📕</font></span></strong></a>
</div>

<br />结合SenseCraft AI模型助手的赋能，您可以轻松上传各种共创模型，并直接观察结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/"><strong><span><font color={'FFFFFF'} size={"4"}>了解更多 📕</font></span></strong></a>
</div>


<br />

在这一部分，我们将指导您如何使用SenseCraft AI模型助手快速部署和观察结果。

###  步骤 1：将 Grove Vision AI V2 连接到 SenseCraft AI 模型助手

首先，我们需要打开主 SenseCraft AI 模型助手页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process"><strong><span><font color={'FFFFFF'} size={"4"}>点击进入SenseCraft AI</font></span></strong></a>
</div>

<br />
请使用Type-C类型的电缆将Grove Vision AI V2连接到您的计算机。

在SenseCraft AI模型助手页面的右上角，您可以选择**Grove Vision AI (WE2)**。然后点击右侧的**连接**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

在弹出的新窗口中，选择设备的正确COM端口，然后点击连接按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

然后，只需选择您想要使用的模型，然后点击下方的“发送”按钮。这里以手势检测为例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/4.png" style={{width:600, height:'auto'}}/></div>

等待1到2分钟以上传模型。

### 步骤3：观察

一旦模型成功上传，您将能够在右侧的预览中看到来自Grove Vision AI V2摄像头的实时视频。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/5.gif" style={{width:1000, height:'auto'}}/></div>

<br />

- 我们可以看到在右侧的预览设置中，有两个设置选项可以更改，以优化模型的识别准确性。
  - **置信度：** 置信度是指模型对其预测所赋予的确定性或概率水平。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU:** IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

此时，您已经完成了上传模型并观察结果的过程。

## XIAO示例

如果您想要获得具有机器视觉功能的传感器原型，那么您可能希望考虑添加一个XIAO。 使用XIAO和Grove Vision AI V2，您可以使用您想要的模型，并快速部署到您的应用领域中。

在此之前，您仍然需要按照[**SenseCraft AI**](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#step-1-connect-the-grove-vision-ai-v2-to-the-sscma)的步骤和内容先上传您想要使用的模型。

**步骤 1.** 所需材料

在本教程中，我们将以XIAO ESP32S3为例介绍使用Arduino程序的方法。 因此，我们建议您准备以下硬件。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV Camera Module<br />for Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 获取一个现在 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="/grove_vision_ai_v2">
				<strong><span><font color={'FFFFFF'} size={"4"}> 获取一个现在🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 获取一个现在🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


You then need to connect the XIAO and Grove Vision AI V2 via the row of pins (or use the expansion board and Grove interface).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::

然后，您需要通过引脚排（或使用扩展板和Grove接口）将XIAO和Grove Vision AI V2连接起来。
:::

**步骤 2.** 启动Arduino应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>


<br />

**步骤 3.** 选择您的开发板型号并将其添加到Arduino IDE中。

:::tip 以下是Grove Vision AI V2示例支持的开发板列表，您可以选择要使用的开发板来完成接下来的示例。在本教程中，将以XIAO ESP32S3为例。 :::

- 如果您要在后续步骤中使用**Seeed Studio XIAO SAMD21**，请参考**[此教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)**进行设置。
- 如果您要在后续步骤中使用**Seeed Studio XIAO RP2040**，请参考**[此教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)**进行设置。
- 如果您要在后续步骤中使用**Seeed Studio XIAO nRF52840**，请参考**[此教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)**进行设置。
- 如果您要在后续步骤中使用**Seeed Studio XIAO ESP32C3**，请参考**[此教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)**进行设置。
- 如果您要在后续步骤中使用**Seeed Studio XIAO ESP32S3**，请参考**[此教程](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)**进行设置。
- 如果您要在后续步骤中使用**Seeeduino V4.3**，请参考**[此教程](https://wiki.seeedstudio.com/Seeeduino_v4.2/)**进行设置。

### 示例 1. 使用XIAO获取由Grove Vision AI V2报告的识别结果

以下步骤是一个简单的示例，可帮助您获取并解析由Grove Vision AI V2报告的识别信息。

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
        Serial.println("invoke success");
        Serial.print("perf: prepocess=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", inference=");
        Serial.print(AI.perf().inference);
        Serial.print(", postpocess=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("Box[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", score=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }
        for (int i = 0; i < AI.classes().size(); i++)
        {
            Serial.print("Class[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", score=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("Point[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.points()[i].target);
            Serial.print(", score=");
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

此Arduino示例使用Seeed_Arduino_SSCMA库与Grove Vision AI模块V2进行通信。在`setup()`函数中，初始化了AI模块，并启动了串行通信。

`loop()`函数反复调用`invoke()`方法，使用Grove Vision AI模块V2的内置算法进行推理。在成功推理后，Sketch会将性能指标打印到串行监视器中，包括预处理、推理和后处理时间。

Sketch会处理并打印推理结果的详细信息，包括：

- 边界框 (`boxes()`)，以x和y坐标、宽度和高度的形式标识检测到的对象的位置和尺寸。
- 分类 (`classes()`)，标识检测到的对象的类别以及它们的置信度分数。
- 点 (`points()`)，表示检测到的对象的特定特征或关键点，以及它们的x和y坐标和置信度分数。

这些结果提供了关于AI模块检测到的对象、它们的位置、大小以及每个检测或分类的置信水平的见解。输出将打印到串行监视器中，以进行进一步的分析或调试。

#### 效果

我们仍然使用手势检测模型。上传应用程序后，请打开串行监视器，并将串行监视器的波特率设置为 **9600**。准备好您的“剪刀-石头-布”，并将其对准摄像头的识别区域，串行监视器将输出识别结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>

###  演示 2. 使用XIAO与Grove Vision AI V2进行串行通信

Grove Vision AI V2支持通过[UART协议](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)进行通信，通过使用内置协议，可以操作Grove Vision AI V2的Himax WE2芯片。以下示例程序展示了如何使用XIAO通过串行端口与Grove Vision AI V2进行通信。

```cpp
#include <Arduino.h>
#include <Wire.h>

#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    // put your setup code here, to run once:
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

####  程序说明

这个Arduino示例利用了Seeed Studio的机器学习框架SSCMA，在串行控制台和Grove Vision AI V2模块之间建立了通信接口。该示例旨在通过串行命令与Grove Vision AI V2模块之间传递数据。

以下是修改后的示例程序说明：

在 `setup()` 函数中：

- 初始化了I2C通信协议，使用 `Wire.begin()` 可以与Grove Vision AI V2模块进行通信。
- 设置串行通信速率为115200。
- 等待串行连接激活，然后将 "Proxy start" 输出到串行监视器，表示代理通信通道已准备就绪。

在 `loop()` 函数中：

- 使用 `Serial.available()` 检查传入的串行数据。如果有数据，将其读入名为 `buf` 的缓冲区。
- 将缓冲区中收集的数据通过 `AI.write()` 方法发送给Grove Vision AI V2模块。
- 接下来，检查Grove Vision AI V2模块是否有数据发送回来，使用 `AI.available()`。
- 如果Grove Vision AI V2模块发送了数据，则使用 `AI.read()` 将这些数据读入缓冲区 `buf` 中，确保数据不超过512字节的缓冲区大小。
- 最后，使用 `Serial.write()` 将从Grove Vision AI V2模块接收到的数据传输回串行控制台，完成串行接口和视觉AI模块之间的双向通信。

这个设置允许与Grove Vision AI V2模块进行交互式通信，使用户能够通过串行连接向模块发送指令并接收来自模块的数据。

## 故障排除

### Q1：Grove Vision AI能否在输出实时屏幕的同时查看XIAO的结果信息？

不行。考虑到帧率或图像推理的速度，我们目前不支持同时执行两项工作。如果连接了XIAO，则只能接收报告的识别信息，而不能实时获取画面。

### Q2：Grove Vision AI V2支持哪些摄像头？它只支持OV5647-62吗？

目前我们为OV5642系列摄像头编写了驱动程序，因此Grove Vision AI V2支持全系列的树莓派OV5647摄像头，例如OV5647-62、OV5647-67和OV5647-160。理论上支持其他CSI摄像头，但由于一些摄像头没有为其编写驱动程序，或者它们自身没有颜色处理单元，因此可能会出现颜色仅为绿色的问题，完整颜色的丢失可能会对识别的准确性产生影响。

## 资源

- **[PDF]** [数据手册](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [Seeed Grove Vision AI 模块 V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里提供不同的支持，以确保您对我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>

