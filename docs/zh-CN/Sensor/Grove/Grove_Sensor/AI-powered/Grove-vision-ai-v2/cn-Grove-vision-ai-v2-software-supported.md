---
description: Getting Started with Grove Vision AI V2 and software platform
title: Software Support
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: cn//grove_vision_ai_v2_software_support
last_update:
  date: 3/12/2023
  author: guiyingzhao
---

# 软件支持概述

有两种方法可以启用Grove Vision AI模块V2：

- **使用SenseCraft AI进行无代码入门**
  - [什么是SenseCraft AI？](https://chat.openai.com/c/f0432c89-b8c8-47a6-b4fa-a98b12edfcf0#jump2)
  - [使用SenseCraft AI模型助手入门](https://chat.openai.com/c/f0432c89-b8c8-47a6-b4fa-a98b12edfcf0#jump3)
- **在Arduino上编程，连接Seeed Studio XIAO开发板**
  - [Arduino库介绍](https://chat.openai.com/c/f0432c89-b8c8-47a6-b4fa-a98b12edfcf0#jump5)
  - [使用Seeed Studio XIAO入门](https://chat.openai.com/c/f0432c89-b8c8-47a6-b4fa-a98b12edfcf0#jump6)

## <span id="jump1"> 使用SenseCraft AI进行无代码入门 </span>

在本节中，我们将向您介绍如何使用SenseCraft AI模型助手快速部署和观察结果，无需编写代码或其他开发板：

### <span id="jump2"> 什么是SenseCraft AI？ </span>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI可以帮助用户轻松地将大量公开可用的AI模型部署到他们的边缘设备上，包括：

- reComputer（NVIDIA Jetson）
- Seeed Studio XIAO S3开发板
- 视觉AI模块等

它提供了无缝且用户友好的体验，让您只需点击几下即可将公开的AI模型直接部署到您的边缘设备上。

<div class="get_one_now_container" style={{textAlign: 'center'}}>     <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home"><strong><span><font color={'FFFFFF'} size={"4"}>了解更多 📕</font></span></strong></a> </div>

它包括：

- 模型助手软件服务
- 设备工作区软件服务

在本节中，我们将使用这里的“模型助手”来启用模块。借助SenseCraft AI模型助手的支持，您可以轻松地上传各种合作创建的模型，并直接观察结果。

### <span id="jump3"> 使用SenseCraft AI模型助手入门 </span>

<!-- SenseCraft is a series of software services developed by Seeed Studio to provide users with faster and simpler software services and applications. With three product lines, Data line, Edge line and AI line, SenseCraft is able to fulfill users' needs in data services, device management and AI applications. No matter what solution you need, SenseCraft can provide you with efficient and reliable solutions and customized services. -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>
 -->现在，我们将使用SenseCraft AI快速启动模块，这只需要模块本身。

#### 步骤 1. 将Grove Vision AI V2连接到SenseCraft AI模型助手

首先，我们需要打开主SenseCraft AI模型助手页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>     <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process"><strong><span><font color={'FFFFFF'} size={"4"}>转到SenseCraft AI</font></span></strong></a> </div> <br />

请使用Type-C类型的电缆将Grove Vision AI V2连接到您的计算机。

在SenseCraft AI模型助手页面的右上角，您可以选择**Grove Vision AI (WE2)**。然后，单击右侧的**Connect（连接）**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

在弹出的新窗口中，选择设备的正确COM端口，并单击Connect 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

#### 步骤 2. 上传合适的模型

然后，只需选择您想要使用的模型，并单击下方的**Send（发送）**按钮。这里以手势检测为例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/4.png" style={{width:600, height:'auto'}}/></div>

等待1~2分钟，直到模型上传完成。

#### 步骤 3. 观察结果

一旦模型成功上传，您将能够在右侧的预览中看到来自Grove Vision AI V2摄像头的实时视频。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/5.gif" style={{width:1000, height:'auto'}}/></div> <br />

我们可以看到，在右侧的预览设置中，有两个设置选项，可以更改以优化模型的识别准确性。

- **置信度:** 置信度指的是模型对其预测的确定性或概率分配的级别。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU:** IoU用于评估预测的边界框与真实边界框之间的准确性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

到目前为止，您已经完成了上传模型并观察结果的过程。


## 使用Arduino编程连接Seeed Studio XIAO开发板

### <span id="jump5"> Arduino库介绍 </span>

:::提示

如果这是您第一次使用Arduino，请务必参考[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。

:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />
- Grove Vision AI使用WiseEye2 HX6538芯片，在Grove Vision AI内部进行图像处理和模型推理，然后通过IIC或UART将结果输出到XIAO上，因此该库的主要目的是处理Grove Vision AI的数据流，不涉及模型推理或图像处理。

  Grove Vision AI通过IIC与XIAO通信，设备的IIC地址为`0x62`。图像信息传输通过USB串行端口。

  #### 功能

  在开始开发草图之前，让我们看一下库中可用的函数。

  - `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— 初始化Grove Vision AI V2。

    **输入参数:**

    - `TwoWire *wire` —— 此指针指向一个TwoWire对象，通常用于与I2C设备进行通信。
    - `uint16_t address` —— 这是I2C设备的地址，用于标识连接到I2C总线的特定设备。
    - `uint32_t wait_delay` —— 发送命令前等待响应的延迟时间（毫秒）。
    - `uint32_t clock` —— 这是I2C总线的时钟速率（单位为Hz）。

    **返回:** `True` 或 `False`。初始化成功为True，初始化失败为False。

  - `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— 用于向Grove Vision AI V2发送INVOKE命令，允许Grove Vision AI开始调用模型、推理和识别。

    **输入参数:**

    - `int times` —— Invoke的次数。
    - `fileter` —— 意味着仅在上一个结果与先前结果不同（通过几何形状和分数比较）时才发送事件回复。
    - `bool show` —— 意味着仅在上一个结果与先前结果不同（通过几何形状和分数比较）时才发送事件回复。

  :::注意

  关于Grove Vision AI的协议定义的更多信息，请阅读[**协议文档**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)。 

  :::

  **返回:** `CMD_OK` 或 `CMD_ETIMEDOUT`。如果成功启用了模型，则返回 **CMD_OK**，否则返回 **CMD_ETIMEDOUT**。

  - `int available()` —— 检查通过IIC接口连接的设备上有多少字节的数据可供读取。

    **输入参数:** 无。

    **返回:** 可从设备读取的数据字节数。

  - `int read(char *data, int length)` —— 通过IIC接口从Grove Vision AI读取数据。该函数的目的是使用提供的数据指针指向的数组填充读取的数据。

    **输入参数:**

    - `char *data` —— 用于存储数据的数组。
    - `int length` —— 要读取的数据长度。

    **返回:** 要读取的数据长度。

  - `int write(const char *data, int length)` —— 通过I2C接口将数据写入指定设备。

    **输入参数:**

    - `const char *data` —— 要写入的数据内容。
    - `int length` —— 要写入的数据长度。

    **返回:** 要写入的数据长度。

  - `std::vector<boxes_t> &boxes() { return _boxes; }` —— 以框的形式输出结果。

```cpp
typedef struct
{
    uint16_t x;      // Horizontal coordinates of the centre of the box
    uint16_t y;      // Vertical coordinates of the centre of the box
    uint16_t w;      // Width of the identification box
    uint16_t h;      // Height of the identification box
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} boxes_t;
```

- `std::vector<classes_t> &classes() { return _classes; }` —— 将结果以类别形式输出。

```cpp
typedef struct
{
    uint8_t target;  // Target
    uint8_t score;   // Confidence in identifying as target
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— 以点形式输出结果。

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

:::注意：

这里的深度坐标是相对的，这并不意味着Grove Vision AI启用了深度摄像头，而是算法计算了一个相对的深度坐标，这在某些模型中是有效的（例如，面部3D模型）。

- `perf_t &perf() { return _perf; }` —— 图像处理和推理时间。

```cpp
typedef struct
{
    uint16_t prepocess;   // Pre-processing time
    uint16_t inference;   // inference time
    uint16_t postprocess; // Post-processing time
} perf_t;
```

:::注意：

输出的结果并不总是提供识别框和点的信息，这取决于模型。
:::

#### 安装

由于您已经下载了 zip 库，请打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### <span id="jump6"> 开始使用 Seeed Studio XIAO </span>

如果您想要一个具有机器视觉功能的传感器原型，那么您可能想要考虑添加一个 XIAO。使用 XIAO 和 Grove Vision AI V2，您可以使用您想要的模型，并快速部署到您的应用领域中。

<!-- 在此之前，您仍然需要按照 [**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma) 步骤和内容，首先上传您想要使用的模型。 -->

#### 准备工作

**步骤 1.** 所需材料

在本教程中，我们将以 XIAO ESP32S3 为例介绍使用 Arduino 程序的方法。因此，我们建议您准备以下硬件。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

然后，您需要通过引脚排（或使用扩展板和Grove接口）将XIAO和Grove Vision AI V2连接起来。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::警告 

请注意连接的方向，Grove Vision AI的Type-C连接器应与XIAO的Type-C连接器方向相同。

**步骤 2.** 启动Arduino应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载Arduino IDE</font></span></strong>
    </a>
</div>

<br />

**步骤 3.** 选择您的开发板型号并将其添加到Arduino IDE中。

:::tip 下面是Grove Vision AI V2示例支持的开发板列表，您可以选择要使用的开发板来完成下一个示例。在本教程中，将以XIAO ESP32S3为例。

- 如果您想在后续例程中使用Seeed Studio XIAO SAMD21，请参考[此教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)完成添加。
- 如果您想在后续例程中使用Seeed Studio XIAO RP2040，请参考[此教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)完成添加。
- 如果您想在后续例程中使用Seeed Studio XIAO nRF52840，请参考[此教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)完成添加。
- 如果您想在后续例程中使用Seeed Studio XIAO ESP32C3，请参考[此教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)完成添加。
- 如果您想在后续例程中使用Seeed Studio XIAO ESP32S3，请参考[此教程](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)完成添加。
- 如果您想在后续例程中使用Seeeduino V4.3，请参考[此教程](https://wiki.seeedstudio.com/Seeeduino_v4.2/)完成添加。 :::

**步骤 4.** 安装**ArduinoJSON**库。

转到“Sketch”菜单，然后选择“Include Library > Manage Libraries...”。这将打开库管理器。在库管理器顶部的搜索栏中，键入**ArduinoJSON**。搜索结果将列出ArduinoJSON库。库旁边将有一个“安装”按钮。点击“安装”按钮。Arduino IDE将自动下载并安装库到您的Arduino开发环境中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/20.png" style={{width:1000, height:'auto'}}/></div>

#### 演示 1. 使用 XIAO 获取识别结果

以下步骤是一个简单示例，帮助您获取并解析由 Grove Vision AI V2 报告的识别信息。

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

##### 程序说明

这个Arduino示例使用 Seeed_Arduino_SSCMA 库与 Grove Vision AI 模块 V2 进行交互。在 `setup()` 函数中，初始化了AI模块，并启动了串行通信。

`loop()` 函数重复调用 `invoke()` 方法，使用 Grove Vision AI 模块 V2 的内置算法进行推理。在成功推理之后，示例将性能指标打印到串行监视器上，包括预处理、推理和后处理时间。

示例处理并打印了推理结果的详细信息，包括：

- 边界框 (`boxes()`)，以 x 和 y 坐标、宽度和高度的形式标识检测到的对象的位置和尺寸。
- 分类 (`classes()`)，以及检测到的对象的类别及其置信度分数。
- 点 (`points()`)，表示检测到的对象的特定特征或关键点，以及它们的 x 和 y 坐标和置信度分数。

这些结果提供了有关AI模块检测到的对象、它们的位置、大小以及每个检测或分类的置信水平的见解。输出将打印到串行监视器上，以供进一步分析或调试。

##### 效果

我们仍然使用手势检测模型。在您上传了应用程序后，请打开串行监视器，并将串行监视器的波特率设置为 **9600**。请准备好您的“石头-剪刀-布”并对准相机的识别区域，串行监视器将输出识别结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>

#### 演示 2. 通过 XIAO 发送控制命令

Grove Vision AI V2 支持通过 [UART 协议](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md) 进行通信，通过使用内置协议，可以操作 Grove Vision AI V2 的 Himax WE2 芯片。以下示例程序展示了如何使用 XIAO 通过串行端口与 Grove Vision AI V2 进行通信。

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

##### 程序说明

这个 Arduino 范例利用 Seeed Studio 机器学习框架 SSCMA，在串口和 Grove Vision AI V2 模块之间建立了通信接口。这个范例旨在通过串行命令与 Grove Vision AI V2 模块之间传递数据。

以下是修改后的程序说明：

在 `setup()` 函数中：

- 使用 `Wire.begin()` 初始化 I2C 通信协议，以便与 Grove Vision AI V2 模块进行通信。
- 设置串行通信波特率为 115200。
- 等待串行连接激活，然后将 "Proxy start" 输出到串行监视器，表示代理通信通道已准备就绪。

在 `loop()` 函数中：

- 使用 `Serial.available()` 检查是否有串行数据到达。如果有数据，则将数据读入名为 `buf` 的缓冲区中。
- 将缓冲区中收集的数据通过 `AI.write()` 方法发送到 Grove Vision AI V2 模块。
- 接下来，检查 Grove Vision AI V2 模块是否有数据要发送回来，使用 `AI.available()` 方法。
- 如果 Grove Vision AI V2 模块发送了数据，程序会将这些数据读入到名为 `buf` 的缓冲区中，确保数据不超过 512 字节的缓冲区大小。
- 最后，通过 `Serial.write()` 将从 Grove Vision AI V2 模块接收到的数据传输回串行控制台，完成了串行接口和视觉 AI 模块之间的双向通信。

这个设置允许与 Grove Vision AI V2 模块进行交互式通信，使用户能够通过串行连接发送指令并接收来自模块的数据。

## 故障排除

### Q1: 成功上传了 Demo1 使用 XIAO ESP32C3 的代码后，为什么我在端口上看不到识别结果？

如果你使用的是 Arduino IDE 版本 1.xx，请在按下 C3 上的复位按钮后重新打开串行监视器以查看结果。如果你使用的是 Arduino 版本 2.xx，则在按下复位按钮后，串行监视器中的消息将被刷新。

## 技术支持和产品讨论

感谢选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

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