---
description: 入门 Grove Vision AI V2 和软件平台
title: 软件支持
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_vision_ai_v2_software_support
last_update:
  date: 12/12/2023
  author: Citric
---

# 支持的软件概述

有两种方法可以启用 Grove Vision AI 模块 V2：

- [**使用 SenseCraft AI 无需编程快速入门**](#jump1)
   - [什么是 SenseCraft AI？](#jump2)
   - [使用 SenseCraft AI 模型助手快速入门](#jump3)
- [**通过 Arduino 编程并连接 Seeed Studio XIAO 板**](#jump4)
   - [Arduino 库介绍](#jump5)
   - [Seeed Studio XIAO 快速入门](#jump6)

## <span id="jump1"> 使用 SenseCraft AI 无需编程快速入门 </span>

在本节中，我们将向您展示如何使用 SenseCraft AI 模型助手快速部署并观察结果，无需编写代码或使用其他开发板：

### <span id="jump2"> 什么是 SenseCraft AI？ </span>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI 使用户能够轻松地将大量公开可用的 AI 模型部署到他们的边缘设备上：

- reComputer (NVIDIA Jetson)
- Seeed Studio XIAO S3 板
- Vision AI 模块等

它提供了无缝且用户友好的体验，只需几次点击即可将公开的 AI 模型直接部署到您的边缘设备上。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>了解更多 📕</font></span></strong></a>
</div>

它包括：

- 模型助手软件服务
- 设备工作空间软件服务

在本节中，我们将使用“模型助手”来启用模块。结合 SenseCraft AI 模型助手的功能，您可以轻松上传各种共创模型并直接观察结果。

### <span id="jump3"> 使用 SenseCraft AI 模型助手快速入门 </span>

<!-- SenseCraft 是由 Seeed Studio 开发的一系列软件服务，旨在为用户提供更快、更简单的软件服务和应用。通过数据线、边缘线和 AI 线三条产品线，SenseCraft 能够满足用户在数据服务、设备管理和 AI 应用方面的需求。无论您需要什么解决方案，SenseCraft 都可以为您提供高效可靠的解决方案和定制服务。 -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>
 -->
现在我们将快速使用 SenseCraft AI 启用模块，这只需要模块本身。

#### 第一步：选择模型

首先，我们需要打开 SenseCraft AI 模型助手的主页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>前往 SenseCraft AI</font></span></strong></a>
</div>
<br />

选择您想要部署的模型并点击进入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a1.png" style={{width:1000, height:'auto'}}/></div>

您可以在此处查看该模型的描述，如果适合您，请点击右侧的 **Deploy Model** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a2.png" style={{width:1000, height:'auto'}}/></div>

#### 第二步：连接模块并上传合适的模型

请使用 Type-C 类型的线缆将 Grove Vision AI V2 连接到您的电脑，然后点击 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

点击 **Confirm** 按钮。在页面左上角，您可以选择 **USB Single Serial**，然后点击 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

请保持在此页面 1-2 分钟，直到模型成功上传。请注意，在此过程中切换到其他页面可能会导致上传失败（我们的团队正在积极解决此问题，很快将修复）。

#### 第三步：观察结果

模型成功上传后，您将能够在左侧的预览中看到来自 Grove Vision AI V2 摄像头的实时画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a5.png" style={{width:1000, height:'auto'}}/></div>

<br />

我们可以看到在左侧的预览设置中，有两个可以更改的设置选项，用于优化模型的识别准确性。

- **Confidence（置信度）：** 置信度是模型对其预测分配的确定性或概率水平。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU（交并比）：** IoU 用于评估预测边界框与真实边界框的准确性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

:::提示
- **Confidence（置信度）：** 置信度表示计算机视觉模型对其预测的确定程度。可以将其理解为百分比：置信度越高，模型越确定。
- **IoU（交并比）：** IoU 衡量两个框之间的重叠程度。想象一下，您在图片中围绕一个物体画了一个框，而模型也画了一个框。IoU 告诉您两个框匹配的程度。IoU 越高，两个框越接近。
:::

在这一点上，您已经完成了模型上传并观察了结果。

## <span id="jump4"> 使用 Seeed Studio XIAO 板连接 Arduino 编程 </span>

### <span id="jump5"> Arduino 库介绍 </span>

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Grove Vision AI 使用 WiseEye2 HX6538 芯片，图像处理和模型推理均在 Grove Vision AI 本地完成，然后通过 IIC 或 UART 将结果输出到 XIAO。因此，该库的主要目的是处理 Grove Vision AI 的数据流，而不涉及模型推理或图像处理。该库的主要功能是处理 Grove Vision AI 的数据流，而不涉及模型推理或图像处理。

Grove Vision AI 通过 IIC 与 XIAO 通信，设备的 IIC 地址为 `0x62`。图像信息通过 USB 串口传输。

#### 功能

在开始开发代码之前，让我们先了解一下该库的可用功能。

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— 初始化 Grove Vision AI V2。

  **输入参数：**
    - `TwoWire *wire` —— 指向 TwoWire 对象的指针，通常用于与 I2C 设备通信。
    - `uint16_t address` —— I2C 设备的地址，用于标识连接到 I2C 总线的特定设备。
    - `uint32_t wait_delay` —— 发送命令前等待响应的延迟时间（以毫秒为单位）。
    - `uint32_t clock` —— I2C 总线的时钟速率（以 Hz 为单位）。

  **返回值：** `True` 或 `False`。初始化成功返回 true，初始化失败返回 false。

- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— 用于向 Grove Vision AI V2 发送 INVOKE 命令，以启动模型调用、推理和识别。

  **输入参数：** 
    - `int times` —— 调用次数。
    - `fileter` —— 表示只有当最后结果与之前结果不同（通过几何和分数比较）时，事件回复才会发送。
    - `bool show` —— 表示只有当最后结果与之前结果不同（通过几何和分数比较）时，事件回复才会发送。

:::note
有关 Grove Vision AI 协议定义的更多信息，您可以阅读 [**协议文档**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)。
:::

  **返回值：** `CMD_OK` 或 `CMD_ETIMEDOUT`。如果模型成功启用，则返回 **CMD_OK**，否则返回 **CMD_ETIMEDOUT**。

- `int available()` —— 检查通过 IIC 从连接设备读取的数据字节数。

  **输入参数：** 无。

  **返回值：** 可从设备读取的数据字节数。

- `int read(char *data, int length)` —— 通过 IIC 接口从 Grove Vision AI 读取数据。该函数的目的是将读取的数据填充到提供的数据指针指向的数组中。

  **输入参数：** 
    - `char *data` —— 用于存储数据的数组。
    - `int length` —— 要读取的数据长度。
  
  **返回值：** 要读取的数据长度。

- `int write(const char *data, int length)` —— 通过 I2C 接口向指定设备写入数据。

  **输入参数：**
    - `const char *data` —— 要写入的数据内容。
    - `int length` —— 要写入的数据长度。

  **返回值：** 要写入的数据长度。

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
这里的深度坐标是相对的，这并不意味着 Grove Vision AI 支持深度摄像头功能，而是算法计算了一个相对深度坐标，该坐标在某些模型中有效（例如，face-3d 模型）。
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
根据模型的不同，输出结果并不总是包含识别框和点的信息。
:::

#### 安装

既然您已经下载了 ZIP 库，请打开您的 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 ZIP 文件，如果库安装正确，您会在通知窗口中看到 **Library added to your libraries**，这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### <span id="jump6"> 开始使用 Seeed Studio XIAO </span>

如果您想要一个具有机器视觉功能的传感器原型，那么您可能需要考虑添加一个 XIAO。使用 XIAO 和 Grove Vision AI V2，您可以使用您想要的模型并快速将其部署到您的应用领域。

<!-- 在此之前，您仍需按照 [**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma) 的步骤和内容，先上传您想要使用的模型。 -->

#### 准备工作

**步骤 1.** 所需材料

在本教程中，我们将使用 XIAO ESP32S3 作为示例来介绍 Arduino 程序的使用。因此，我们建议您准备以下硬件。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

然后您需要通过排针连接 XIAO 和 Grove Vision AI V2（或者使用扩展板和 Grove 接口）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
请注意连接方向，Grove Vision AI 的 Type-C 接口应与 XIAO 的 Type-C 接口方向一致。
:::

**步骤 2.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

<br />

**步骤 3.** 选择您的开发板型号并将其添加到 Arduino IDE。

:::tip
以下是支持 Grove Vision AI V2 示例的开发板列表，您可以选择您想要使用的开发板来完成接下来的示例。在本教程中，将以 XIAO ESP32S3 为例。
:::

- 如果您想使用 **Seeed Studio XIAO SAMD21** 进行后续操作，请参考 **[本教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO RP2040** 进行后续操作，请参考 **[本教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO nRF52840** 进行后续操作，请参考 **[本教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO ESP32C3** 进行后续操作，请参考 **[本教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO ESP32S3** 进行后续操作，请参考 **[本教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

- 如果您想使用 **Seeeduino V4.3** 进行后续操作，请参考 **[本教程](https://wiki.seeedstudio.com/cn/Seeeduino_v4.2/)** 完成添加。

**步骤 4.** 安装 **ArduinoJSON** 库。

进入 Sketch 菜单，然后选择 **Include Library > Manage Libraries...**。这将打开库管理器。在库管理器顶部的搜索栏中输入 **ArduinoJSON**。搜索结果将列出 ArduinoJSON 库。库旁边会有一个安装按钮。点击安装按钮，Arduino IDE 将自动下载并安装该库到您的 Arduino 开发环境中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/20.png" style={{width:1000, height:'auto'}}/></div>

#### 示例 1. 使用 XIAO 获取识别结果

以下步骤是一个简单的示例，帮助您获取并解析 Grove Vision AI V2 报告的识别信息。

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

##### 步骤说明

此 Arduino 程序使用 Seeed_Arduino_SSCMA 库与 Grove Vision AI V2 模块进行交互。在 `setup()` 函数中，初始化 AI 模块并启动串行通信。

在 `loop()` 函数中，程序反复调用 `invoke()` 方法，使用 Grove Vision AI V2 模块内置算法进行推理。推理成功后，程序会将性能指标打印到串行监视器，包括预处理、推理和后处理时间。

程序处理并打印推理结果的详细信息，包括：

- 边界框 (`boxes()`)：标识检测到的对象的位置和尺寸，以 x 和 y 坐标、宽度和高度的形式表示。
- 分类 (`classes()`)：标识检测到的对象类别及其置信度分数。
- 点 (`points()`)：表示检测到的对象的特定特征或关键点，以及它们的 x 和 y 坐标及置信度分数。

这些结果提供了 AI 模块检测到的对象、它们的位置、大小以及每次检测或分类的置信度级别的洞察。输出结果打印到串行监视器以供进一步分析或调试。

##### 效果

我们仍然使用手势检测模型。在上传应用程序后，请打开串行监视器并将串行监视器的波特率设置为 **9600**。请准备好您的“石头-剪刀-布”手势，并将其对准摄像头的识别区域，串行监视器将输出识别结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>

#### 示例 2. 通过 XIAO 发送控制命令

Grove Vision AI V2 支持通过 [UART 协议](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)进行通信，并且通过使用内置协议，可以操作 Grove Vision AI V2 的 Himax WE2 芯片。以下示例程序展示了如何使用 XIAO 通过串口与 Grove Vision AI V2 进行通信。

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

##### 步骤说明

此 Arduino 程序通过串行控制台与 Grove Vision AI V2 模块建立通信接口，利用 Seeed Studio 机器学习框架 SSCMA。程序设计用于通过串行命令向 Grove Vision AI V2 模块传递数据并接收数据。

以下是程序的详细说明：

在 `setup()` 函数中：
- 使用 `Wire.begin()` 初始化 I2C 通信协议，以便与 Grove Vision AI V2 模块通信。
- 设置串行通信的波特率为 115200。
- 程序等待串行连接激活后，向串行监视器输出 "Proxy start"，表示代理通信通道已准备好。

在 `loop()` 函数中：
- 程序通过 `Serial.available()` 检查是否有传入的串行数据。如果有数据，则将其读取到名为 `buf` 的缓冲区中。
- 收集到的数据随后通过 `AI.write()` 方法发送到 Grove Vision AI V2 模块。
- 接下来，程序通过 `AI.available()` 检查 Grove Vision AI V2 模块是否有数据返回。
- 如果 Grove Vision AI V2 模块发送了数据，程序使用 `AI.read()` 将数据读取到缓冲区 `buf` 中，并确保数据不会超过 512 字节的缓冲区大小。
- 最后，从 Grove Vision AI V2 模块接收到的数据通过 `Serial.write()` 发送回串行控制台，完成串行接口与 Vision AI 模块之间的双向通信。

此设置允许与 Grove Vision AI V2 模块进行交互式通信，使用户能够通过串行连接向模块发送指令并接收数据。

## 资源
- [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home)
- [SenseCraft AI 模型助手](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process)
- [XIAO 的 Arduino 库](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)

## 故障排查

### 问题1：为什么在使用 XIAO ESP32C3 成功上传 Demo1 的代码后，我在端口上看不到识别结果？

如果您使用的是 Arduino IDE 1.xx 版本，请在按下 C3 的复位键后重新打开串行监视器以查看结果。如果您使用的是 Arduino 2.xx 版本，按下复位键后消息会在串行监视器中刷新。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>