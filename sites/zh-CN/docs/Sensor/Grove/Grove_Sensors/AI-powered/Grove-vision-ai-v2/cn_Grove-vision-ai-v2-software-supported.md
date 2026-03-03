---
description: Grove Vision AI V2 入门指南和软件平台
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

- [**使用 SenseCraft AI 无代码入门**](#jump1)
   - [什么是 SenseCraft AI？](#jump2)
   - [SenseCraft AI 模型助手入门指南](#jump3)
- [**在 Arduino 上编程连接 Seeed Studio XIAO 开发板**](#jump4)
   - [Arduino 库介绍](#jump5)
   - [Seeed Studio XIAO 入门指南](#jump6)

## <span id="jump1"> 使用 SenseCraft AI 无代码入门 </span>

在本节中，我们将引导您使用 SenseCraft AI 模型助手快速部署和观察结果，无需代码且无需其他开发板：

### <span id="jump2"> 什么是 SenseCraft AI？  </span>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI 使用户能够轻松地将大量公开可用的 AI 模型部署到他们的边缘设备上：

- reComputer (NVIDIA Jetson)
- Seeed Studio XIAO S3 开发板
- Vision AI 模块等

它提供了无缝且用户友好的体验，让您只需点击几下即可将公共 AI 模型直接部署到您的边缘设备上。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>了解更多 📕</font></span></strong></a>
</div>

它包括：

- 模型助手软件服务
- 设备工作区软件服务

在本节中，我们将使用"模型助手"来启用模块。结合 SenseCraft AI 模型助手的赋能，您可以轻松上传各种协作创建的模型并直接观察结果。




### <span id="jump3"> SenseCraft AI 模型助手入门指南  </span>

<!-- SenseCraft is a series of software services developed by Seeed Studio to provide users with faster and simpler software services and applications. With three product lines, Data line, Edge line and AI line, SenseCraft is able to fulfill users' needs in data services, device management and AI applications. No matter what solution you need, SenseCraft can provide you with efficient and reliable solutions and customized services. -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>
 -->
现在我们将使用 SenseCraft AI 快速启动模块，这只需要模块本身。

#### 步骤 1. 选择模型

首先，我们需要打开 SenseCraft AI 模型助手主页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>前往 SenseCraft AI</font></span></strong></a>
</div>
<br />

选择您想要部署的模型并点击进入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a1.png" style={{width:1000, height:'auto'}}/></div>

您可以在这里看到此模型的描述，如果适合您，请点击右侧的 **Deploy Model** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a2.png" style={{width:1000, height:'auto'}}/></div>

#### 步骤 2. 连接模块并上传合适的模型

请使用 Type-C 类型的线缆将 Grove Vision AI V2 连接到您的计算机，然后点击 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

点击 **Confirm** 按钮。在此页面的左上角，您可以选择 **USB Single Serial**。然后点击 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

请在此页面停留 1-2 分钟，直到模型成功上传。请注意，在此过程中切换到另一个页面标签可能会导致上传失败（我们的团队正在积极解决此问题，很快就会修复）。

#### 步骤 3. 观察结果

模型成功上传后，您将能够在左侧的预览中看到来自 Grove Vision AI V2 摄像头的实时画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a5.png" style={{width:1000, height:'auto'}}/></div>

<br />

我们可以看到在左侧的预览设置中，有两个设置选项可以更改以优化模型的识别准确性。

- **Confidence：** 置信度是指模型对其预测分配的确定性或概率水平。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU：** IoU 用于评估预测边界框与真实边界框相比的准确性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

:::tip
- **Confidence：** 这告诉您计算机视觉模型对其猜测的确定程度。可以将其视为百分比：置信度越高意味着模型越确定。
- **IoU（交并比）：** 这衡量两个框之间的重叠程度。想象您在图片中的对象周围画了一个框，模型也画了一个框。IoU 告诉您框的匹配程度。IoU 越高意味着框越接近。
:::

至此，您已经完成了模型上传和结果观察。

## <span id="jump4"> 在 Arduino 上编程连接 Seeed Studio XIAO 开发板 </span>

### <span id="jump5"> Arduino 库介绍 </span>

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Grove Vision AI 使用 WiseEye2 HX6538 芯片，图像处理和模型推理在 Grove Vision AI 本地处理，然后结果通过 IIC 或 UART 输出到 XIAO，因此该库的主要目的是处理 Grove Vision AI 的数据流，不涉及模型推理或图像处理。

Grove Vision AI 通过 IIC 与 XIAO 通信，设备的 IIC 地址是 `0x62`。图像信息传输通过 USB 串口进行。

#### 功能

在我们开始开发草图之前，让我们看看库的可用功能。

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— 初始化 Grove Vision AI V2。

  **输入参数：**
    - `TwoWire *wire` —— 此指针指向 TwoWire 对象，通常用于与 I2C 设备通信。
    - `uint16_t address` —— 这是 I2C 设备的地址，用于标识连接到 I2C 总线的特定设备。
    - `uint32_t wait_delay` —— 发送命令前等待响应的延迟（以毫秒为单位）。
    - `uint32_t clock` —— 这是 I2C 总线的时钟频率（以 Hz 为单位）。

  **返回值：** `True` 或 `False`。初始化成功为 true，初始化失败为 false。


- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— 用于向 Grove Vision AI V2 发送 INVOKE 命令，以允许 Grove Vision AI 开始调用模型、推理和识别。

  **输入参数：** 
    - `int times` —— 调用次数。
    - `fileter` —— 意味着只有当最后结果与之前结果不同时才会发送事件回复（通过几何形状和分数进行比较）。
    - `bool show` —— 意味着只有当最后结果与之前结果不同时才会发送事件回复（通过几何形状和分数进行比较）。

:::note
有关 Grove Vision AI 协议定义的更多信息，您可以阅读 [**协议文档**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)。
:::

  **返回值：** `CMD_OK` 或 `CMD_ETIMEDOUT`。如果模型成功启用则返回 **CMD_OK**，否则返回 **CMD_ETIMEDOUT**。

- `int available()` —— 检查通过 IIC 从连接的设备可读取多少字节的数据。

  **输入参数：** 无。

  **返回值：** 可以从设备读取的数据字节数。

- `int read(char *data, int length)` —— 通过 IIC 接口从 Grove Vision AI 读取数据。该函数的目的是用读取的数据填充由提供的数据指针指向的数组。

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
    uint16_t x;      // Horizontal coordinates of the centre of the box
    uint16_t y;      // Vertical coordinates of the centre of the box
    uint16_t w;      // Width of the identification box
    uint16_t h;      // Height of the identification box
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} boxes_t;
```

- `std::vector<classes_t> &classes() { return _classes; }` —— 以类别的形式输出结果。

```cpp
typedef struct
{
    uint8_t target;  // Target
    uint8_t score;   // Confidence in identifying as target
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— 以点的形式输出结果。

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

:::note
这里的深度坐标是相对的，这并不意味着 Grove Vision AI 具备深度相机功能，而是算法计算出的相对深度坐标，在某些模型中有效（例如，face-3d 模型）。
:::

- `perf_t &perf() { return _perf; }` —— 图像处理和推理时间。

```cpp
typedef struct
{
    uint16_t prepocess;   // Pre-processing time
    uint16_t inference;   // inference time
    uint16_t postprocess; // Post-processing time
} perf_t;
```

:::note
输出并不总是输出识别框和点的信息，这取决于模型。
:::

#### 安装

由于您已经下载了 zip 库文件，请打开您的 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### <span id="jump6"> Seeed Studio XIAO 入门指南 </span>


如果您想获得一个具有机器视觉功能的传感器原型，那么您可能需要考虑添加一个 XIAO。使用 XIAO 和 Grove Vision AI V2，您可以使用想要的模型并快速将其部署到您的应用领域。

<!-- Before that, you still need to follow the [**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma) steps and content to upload a model you want to use first. -->

#### 准备工作

**步骤 1.** 所需材料

在本教程中，我们将以 XIAO ESP32S3 为例介绍 Arduino 程序的使用。因此，我们建议您准备以下硬件。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV 相机模块<br />适用于 Raspberry Pi 3B+4B</th>
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

然后您需要通过排针将 XIAO 和 Grove Vision AI V2 连接起来（或使用扩展板和 Grove 接口）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
请注意连接方向，Grove Vision AI 的 Type-C 连接器应与 XIAO 的 Type-C 连接器方向相同。
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
以下是 Grove Vision AI V2 示例支持的开发板列表，您可以选择想要使用的开发板来完成下一个示例。在本教程中，将以 XIAO ESP32S3 为例。
:::

- 如果您想在后续例程中使用 **Seeed Studio XIAO SAMD21**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)** 完成添加。

- 如果您想在后续例程中使用 **Seeed Studio XIAO RP2040**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果您想在后续例程中使用 **Seeed Studio XIAO nRF52840**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)** 完成添加。

- 如果您想在后续例程中使用 **Seeed Studio XIAO ESP32C3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您想在后续例程中使用 **Seeed Studio XIAO ESP32S3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

- 如果您想在后续例程中使用 **Seeeduino V4.3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/Seeeduino_v4.2/)** 完成添加。

**步骤 4.** 安装 **ArduinoJSON** 库。

转到 Sketch 菜单，然后选择 **Include Library > Manage Libraries...**。这将打开库管理器。在库管理器顶部的搜索栏中，输入 **ArduinoJSON**。搜索结果将列出 ArduinoJSON 库。库旁边会有一个 Install 按钮。点击 Install 按钮。Arduino IDE 将自动下载并安装库到您的 Arduino 开发环境中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/20.png" style={{width:1000, height:'auto'}}/></div>

#### 演示 1. 使用 XIAO 获取识别结果

以下程序是一个简单的示例，帮助您获取和解析 Grove Vision AI V2 报告的识别信息。

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

这个 Arduino 程序使用 Seeed_Arduino_SSCMA 库与 Grove Vision AI Module V2 进行接口通信。在 `setup()` 函数中，AI 模块被初始化，并启动串口通信。

`loop()` 函数重复调用 `invoke()` 方法，使用 Grove Vision AI Module V2 的内置算法执行推理。推理成功后，程序会将性能指标打印到串口监视器，包括预处理、推理和后处理时间。

程序处理并打印推理结果的详细信息，包括：

- 边界框（`boxes()`），以 x 和 y 坐标、宽度和高度的形式识别检测到的物体的位置和尺寸。
- 分类（`classes()`），识别检测到的物体类别及其置信度分数。
- 点（`points()`），表示检测到的物体的特定特征或关键点，以及它们的 x 和 y 坐标和置信度分数。

这些结果提供了关于 AI 模块检测到的物体、它们的位置、大小以及每次检测或分类的置信度水平的见解。输出被打印到串口监视器以供进一步分析或调试。


##### 效果

我们仍然使用手势检测模型。上传应用程序后，请打开串口监视器并将串口监视器的波特率设置为 **9600**。请准备您的"石头剪刀布"并将其指向摄像头的识别区域，串口监视器将输出识别结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>


#### 演示 2. 通过 XIAO 发送控制命令

Grove Vision AI V2 支持通过 [UART 协议](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md) 进行通信，通过使用内置协议，可以操作 Grove Vision AI V2 的 Himax WE2 芯片。以下示例程序展示了如何使用 XIAO 通过串口与 Grove Vision AI V2 进行通信。

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

这个 Arduino 程序在串口控制台和 Grove Vision AI V2 模块之间建立通信接口，利用 Seeed Studio 机器学习框架 SSCMA。该程序旨在通过串口命令向 Grove Vision AI V2 模块传递数据和从中接收数据。

以下是程序的修改描述：

在 `setup()` 函数中：
- 使用 `Wire.begin()` 初始化 I2C 通信协议，允许与 Grove Vision AI V2 模块进行通信。
- 以 115200 的波特率设置串口通信。
- 程序等待串口连接激活，然后向串口监视器输出 "Proxy start"，表示代理通信通道已准备就绪。

在 `loop()` 函数中：
- 程序使用 `Serial.available()` 检查传入的串口数据。如果有数据，它将其读取到名为 `buf` 的缓冲区中。
- 缓冲区中收集的数据然后使用 `AI.write()` 方法发送到 Grove Vision AI V2 模块。
- 接下来，程序使用 `AI.available()` 检查 Grove Vision AI V2 模块是否有数据要发送回来。
- 如果 Grove Vision AI V2 模块发送了数据，程序使用 `AI.read()` 将此数据读取到缓冲区 `buf` 中，确保数据不超过 512 字节的缓冲区大小。
- 最后，从 Grove Vision AI V2 模块接收的数据使用 `Serial.write()` 传输回串口控制台，完成串口接口和视觉 AI 模块之间的双向通信。

这种设置允许与 Grove Vision AI V2 模块进行交互式通信，使用户能够通过串口连接向模块发送指令并从模块接收数据。


## 资源
- [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home)
- [SenseCraft AI Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process)
- [Arduino Library for XIAO](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)
- [恢复 Grove Vision AI V2 到出厂固件](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/Vision_AI_Module_V2_factory_flasher.zip)

## 故障排除

### Q1：为什么使用 XIAO ESP32C3 成功上传 Demo1 代码后，我在端口上看不到识别结果？

如果您使用的是 Arduino IDE 版本 1.xx，请在按下 C3 上的 Reset 按钮后重新打开串口监视器以查看结果。如果您使用的是 Arduino 版本 2.xx，按下 Reset 按钮后消息将在串口监视器中刷新。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
