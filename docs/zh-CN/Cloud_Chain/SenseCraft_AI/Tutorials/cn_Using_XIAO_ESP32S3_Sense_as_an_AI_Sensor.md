---
sidebar_position: 10
description: 本文描述了如何在 XIAO 上使用 SenseCraft AI 的库。
title: 作为传感器
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/uart_connection.png
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-output-libraries-xiao
aliases:
  - /cn/sensecraft_ai_output_libraries_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# 使用 XIAO ESP32S3 Sense 和 SenseCraft AI 作为 AI 传感器

本指南提供了逐步教程，教您如何配置 SenseCraft AI 模型的输出，并将 XIAO ESP32S3 Sense 用作 AI 传感器。通过以下步骤，您将学习如何将 XIAO ESP32S3 Sense 连接到您的计算机，选择适当的输出方式，并通过 UART、I2C 和 SPI 等不同通信协议检索模型数据。

## 前置条件

在开始之前，请确保您具备以下条件：

- XIAO ESP32S3 Sense
- 一个额外的 XIAO 板（例如 XIAO ESP32C3），用于接收模型数据
- 用于将 XIAO ESP32S3 Sense 连接到计算机的 USB-C 数据线
- 安装了 [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main) 库的 Arduino IDE

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 第一步：访问 SenseCraft AI Vision Workspace 并连接 XIAO ESP32S3 Sense

打开您的网页浏览器，导航到 SenseCraft AI Vision Workspace 页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

从可用设备中选择 XIAO ESP32S3 Sense 板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

使用 USB-C 数据线将您的 XIAO ESP32S3 Sense 板连接到计算机。连接后，点击 SenseCraft AI Vision Workspace 页面左上角的 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## 第二步：确保 XIAO ESP32S3 Sense 上已加载模型

在继续之前，请确保您的 XIAO ESP32S3 Sense 板已加载训练好的模型。如果尚未加载模型，请参考 SenseCraft AI 文档，了解如何训练和部署模型到设备。

- [在 XIAO ESP32S3 Sense 上使用模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_xiao/)

如果您希望使用自己训练的模型，可以参考以下两个 Wiki：

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 第 3 步：准备所需的方式和程序

XIAO 支持通过 UART、IIC 或 SPI 输出模型结果，您可以根据实际情况选择输出结果的方式。

### 选项 1：UART 通信

将两个 XIAO 板的 TX 和 RX 引脚连接在一起。对于 AI 传感器（已建模）的 XIAO ESP32S3 Sense，输出引脚定义如下：

- **TX: GPIO43**
- **RX: GPIO44**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/uart_connection.png" style={{width:1000, height:'auto'}}/></div>

从 GitHub 下载 [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main) 库，并将其添加到您的 Arduino 环境中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

使用以下示例代码：

:::note
将波特率设置为 921600，数据位为 8，无校验位，停止位为 1（8N1）。
:::

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// 定义映射到两个内部 UART 的两个串口设备
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
    Serial.begin(9600);
    AI.begin(&atSerial);
}

void loop()
{
    if (!AI.invoke(1,false,true))
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
            Serial.print("]: target=");
            Serial.print(AI.points()[i].target);
            Serial.print(", score=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
        for (int i = 0; i < AI.keypoints().size(); i++)
        {
            Serial.print("keypoint[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.keypoints()[i].box.target);
            Serial.print(", score=");
            Serial.print(AI.keypoints()[i].box.score);
            Serial.print(", box:[x=");
            Serial.print(AI.keypoints()[i].box.x);
            Serial.print(", y=");
            Serial.print(AI.keypoints()[i].box.y);
            Serial.print(", w=");
            Serial.print(AI.keypoints()[i].box.w);
            Serial.print(", h=");
            Serial.print(AI.keypoints()[i].box.h);
            Serial.print("], points:[");
            for (int j = 0; j < AI.keypoints()[i].points.size(); j++)
            {
                Serial.print("[");
                Serial.print(AI.keypoints()[i].points[j].x);
                Serial.print(",");
                Serial.print(AI.keypoints()[i].points[j].y);
                Serial.print("],");
            }
            Serial.println("]");
        }
        if(!AI.last_image().isEmpty())
        {
            Serial.print("Last image:");
            Serial.println(AI.last_image().c_str());
        }
    }
}
```

如果一切正常，您将看到如下所示的模型结果输出信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/70.png" style={{width:1000, height:'auto'}}/></div>

### 选项 2：I2C 通信

将两个 XIAO 板的 SDA 和 SCL 引脚连接在一起。对于 AI 传感器（已建模）的 XIAO ESP32S3 Sense，输出引脚定义如下：

- **SDA: GPIO5**（带上拉电阻）
- **SCL: GPIO6**（带上拉电阻）
- I2C 从设备地址为 `0x62`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/iic_connection.png" style={{width:1000, height:'auto'}}/></div>

从 GitHub 下载 [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main) 库，并将其添加到您的 Arduino 环境中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

使用以下示例代码：

:::note
使用以下协议进行 I2C 通信：
- 读取 (READ)：发送字节 0x10, 0x01, LEN &lt;&lt; 8, LEN &amp; 0xff
- 写入 (WRITE)：发送字节 0x10, 0x02, LEN &lt;&lt; 8, LEN &amp; 0xff
- 数据可用性检查 (AVAIL)：发送字节 0x10, 0x03
- 重置 (RESET)：发送字节 0x10, 0x06
:::

```cpp
#include <Seeed_Arduino_SSCMA.h>
#include <Wire.h>

SSCMA AI;

void setup()
{
    Wire.begin();
    AI.begin(&Wire);
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
            Serial.print(", 分数=");
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
            Serial.print(", 分数=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("点[");
            Serial.print(i);
            Serial.print("]: 目标=");
            Serial.print(AI.points()[i].target);
            Serial.print(", 分数=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
        for (int i = 0; i < AI.keypoints().size(); i++)
        {
            Serial.print("关键点[");
            Serial.print(i);
            Serial.print("] 目标=");
            Serial.print(AI.keypoints()[i].box.target);
            Serial.print(", 分数=");
            Serial.print(AI.keypoints()[i].box.score);
            Serial.print(", 框:[x=");
            Serial.print(AI.keypoints()[i].box.x);
            Serial.print(", y=");
            Serial.print(AI.keypoints()[i].box.y);
            Serial.print(", 宽度=");
            Serial.print(AI.keypoints()[i].box.w);
            Serial.print(", 高度=");
            Serial.print(AI.keypoints()[i].box.h);
            Serial.print("], 点:[");
            for (int j = 0; j < AI.keypoints()[i].points.size(); j++)
            {
                Serial.print("[");
                Serial.print(AI.keypoints()[i].points[j].x);
                Serial.print(",");
                Serial.print(AI.keypoints()[i].points[j].y);
                Serial.print("],");
            }
            Serial.println("]");
        }
    }
}
```

如果一切正常，您将看到如下所示的模型结果输出消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/71.png" style={{width:1000, height:'auto'}}/></div>

### 选项 3. SPI 通信

1. 将两个 XIAO 板的以下引脚连接在一起。对于 AI 传感器（已建模）的 XIAO ESP32S3 Sense，输出引脚定义如下：

- **MOSI: GPIO9**（带上拉电阻）
- **MISO: GPIO8**
- **SCLK: GPIO7**（带上拉电阻）
- **CS: GPIO4**（带上拉电阻）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/spi_connection.png" style={{width:1000, height:'auto'}}/></div>

2. 从 GitHub 下载 [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main) 库文件并将其添加到您的 Arduino 环境中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. 修改提供的示例代码以使用 SPI 通信。

:::note
使用以下协议进行 SPI 通信：
- 读取（READ）：发送字节 0x10, 0x01, LEN &lt;&lt; 8, LEN & 0xff
- 写入（WRITE）：发送字节 0x10, 0x02, LEN &lt;&lt; 8, LEN & 0xff
- 数据可用性检查（AVAIL）：发送字节 0x10, 0x03
- 重置（RESET）：发送字节 0x10, 0x06
:::

```cpp
#include <Seeed_Arduino_SSCMA.h>
#include <SPI.h>

SSCMA AI;

void setup()
{
    SPI.begin(SCK, MISO, MOSI, -1);
    AI.begin(&SPI, D3, -1, -1);
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
            Serial.print(", 分数=");
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
            Serial.print(", 分数=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("点[");
            Serial.print(i);
            Serial.print("]: 目标=");
            Serial.print(AI.points()[i].target);
            Serial.print(", 分数=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
        for (int i = 0; i < AI.keypoints().size(); i++)
        {
            Serial.print("关键点[");
            Serial.print(i);
            Serial.print("] 目标=");
            Serial.print(AI.keypoints()[i].box.target);
            Serial.print(", 分数=");
            Serial.print(AI.keypoints()[i].box.score);
            Serial.print(", 框:[x=");
            Serial.print(AI.keypoints()[i].box.x);
            Serial.print(", y=");
            Serial.print(AI.keypoints()[i].box.y);
            Serial.print(", 宽度=");
            Serial.print(AI.keypoints()[i].box.w);
            Serial.print(", 高度=");
            Serial.print(AI.keypoints()[i].box.h);
            Serial.print("], 点:[");
            for (int j = 0; j < AI.keypoints()[i].points.size(); j++)
            {
                Serial.print("[");
                Serial.print(AI.keypoints()[i].points[j].x);
                Serial.print(",");
                Serial.print(AI.keypoints()[i].points[j].y);
                Serial.print("],");
            }
            Serial.println("]");
        }
    }
}
```

如果一切正常，您将看到如下所示的模型结果输出消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/72.png" style={{width:1000, height:'auto'}}/></div>

## 第 4 步：上传代码并运行

在 Arduino IDE 中打开与您选择的通信协议相对应的示例代码。验证并将代码上传到接收端的 XIAO 板。然后在 Arduino IDE 中打开串口监视器以查看接收到的模型数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/73.png" style={{width:1000, height:'auto'}}/></div>

## 结论

通过遵循本分步指南，您已经成功配置了 SenseCraft AI 上模型的输出，并使用 XIAO ESP32S3 Sense 作为 AI 传感器。现在，您可以根据项目需求，通过 UART、I2C 或 SPI 等不同的通信协议来获取模型数据。

请记得参考提供的示例代码，并根据您的具体设置和通信协议选择进行必要的修改。

如果您遇到任何问题或有进一步的疑问，请查阅 Seeed Studio 文档或在社区论坛中寻求帮助。

祝您使用 XIAO ESP32S3 Sense 和 SenseCraft AI 愉快！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>