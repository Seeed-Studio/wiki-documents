---
sidebar_position: 11
description: 本文介绍如何在 XIAO 上使用 SSCMACore 库。
title: 使用 SSCMACore 库输出模型信息
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-sscmacore-library
aliases:
  - /cn/sensecraft_ai_sscmacore_library
last_update:
  date: 12/12/2024
  author: Citric
---

# 使用 SSCMACore 库为 XIAO ESP32S3 Sense 在 SenseCraft AI 上配置模型输出

本 wiki 提供了一个分步指南，介绍如何使用 SSCMACore（Seeed SenseCraft Model Assistant Core）库为 XIAO ESP32S3 Sense 开发板在 SenseCraft AI 上配置模型输出。通过遵循这些说明，您将能够设置您的 XIAO ESP32S3 Sense 以使用预训练模型，并利用 SSCMACore 库处理模型的输出。

## 前提条件

在继续之前，请确保您具备以下条件：

- XIAO ESP32S3 Sense
- 用于将 XIAO ESP32S3 Sense 连接到计算机的 USB-C 数据线
- 安装了 [Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore) 库的 Arduino IDE

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 步骤 1. 确保模型已加载到 XIAO ESP32S3 Sense 上

在继续之前，请确保您的 XIAO ESP32S3 Sense 开发板已加载了训练好的模型。如果您还没有加载模型，请参考 SenseCraft AI 文档了解如何训练和部署模型到您的设备。

- [为 XIAO ESP32S3 Sense 使用模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_xiao/)

如果您想使用自己训练的模型，可以参考以下两个 Wiki。

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 步骤 2. 设置 SSCMA 库

从 GitHub 仓库下载 [Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore) 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

按照以下步骤将下载的库添加到您的 Arduino 环境中：

- 打开 Arduino IDE。
- 转到 **Sketch -> Include Library -> Add .ZIP Library**。
- 导航到下载的 **Seeed_Arduino_SSCMACore** 库并选择它。
- 点击 **Open** 将库添加到您的 Arduino 环境中。

## 步骤 3. 选择并配置示例代码

SSCMA 库提供了两个示例代码，演示如何在 XIAO ESP32S3 Sense 开发板上处理模型输出。根据您的需求选择以下示例之一：

### 示例 1：推理

1. 打开 [`inference.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference/inference.ino) 示例代码。

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // Init serial port
    Serial.begin(115200);

    // Init video capture
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // Init SSCMA Micro Core
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    Serial.println("Init done");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));

    for (const auto& box : instance.getBoxes()) {
        Serial.printf("Box: x=%f, y=%f, w=%f, h=%f, score=%f, target=%d\n", box.x, box.y, box.w, box.h, box.score, box.target);
    }

    for (const auto& cls : instance.getClasses()) {
        Serial.printf("Class: target=%d, score=%f\n", cls.target, cls.score);
    }

    for (const auto& point : instance.getPoints()) {
        Serial.printf("Point: x=%f, y=%f, z=%f, score=%f, target=%d\n", point.x, point.y, point.z, point.score, point.target);
    }

    for (const auto& kp : instance.getKeypoints()) {
        Serial.printf("Keypoints: box: x=%f, y=%f, w=%f, h=%f, score=%f, target=%d\n", kp.box.x, kp.box.y, kp.box.w, kp.box.h, kp.box.score, kp.box.target);
        for (const auto& point : kp.points) {
            Serial.printf("Keypoint: x=%f, y=%f, z=%f, score=%f, target=%d\n", point.x, point.y, point.z, point.score, point.target);
        }
    }

    auto perf = instance.getPerf();
    Serial.printf("Perf: preprocess=%dms, inference=%dms, postprocess=%dms\n", perf.preprocess, perf.inference, perf.postprocess);

}
```

这个示例代码演示了如何使用 SSCMA 库执行推理并检索模型的输出，包括边界框、类别、点和关键点。代码初始化视频捕获、SSCMA Micro Core，并对摄像头捕获的每一帧执行推理。模型的输出，如边界框、类别、点和关键点，会打印到串行监视器。

:::note
`loop()` 函数是推理过程发生的地方。它首先使用 `capture.getManagedFrame()` 捕获一帧，然后使用 `instance.invoke(frame)` 对捕获的帧调用推理。

推理后，代码检索并打印模型的各种输出：

- **边界框**：`instance.getBoxes()` 函数返回一个边界框向量。每个边界框包含坐标 (x, y, w, h)、分数和目标类别等信息。
- **类别**：`instance.getClasses()` 函数返回一个检测到的类别向量。每个类别包含目标类别及其对应分数的信息。
- **点**：`instance.getPoints()` 函数返回一个检测到的点向量。每个点包含坐标 (x, y, z)、分数和目标类别等信息。
- **关键点**：`instance.getKeypoints()` 函数返回一个检测到的关键点向量。每个关键点包含一个边界框和一个关联点的向量。代码打印边界框信息并遍历这些点，打印它们的坐标、分数和目标类别。

最后，代码使用 `instance.getPerf()` 检索性能指标，并打印预处理、推理和后处理时间（以毫秒为单位）。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/74.png" style={{width:1000, height:'auto'}}/></div>

### 示例 2：使用回调的推理

1. 打开 [`inference_cb.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference_cb/inference_cb.ino) 示例代码。

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // Init serial port
    Serial.begin(115200);

    // Init video capture
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // Init SSCMA Micro Core
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    instance.registerPerfCallback(SSCMAMicroCore::DefaultPerfCallback);
    instance.registerBoxesCallback(SSCMAMicroCore::DefaultBoxesCallback);
    instance.registerClassesCallback(SSCMAMicroCore::DefaultClassesCallback);
    instance.registerPointsCallback(SSCMAMicroCore::DefaultPointsCallback);
    instance.registerKeypointsCallback(SSCMAMicroCore::DefaultKeypointsCallback);

    Serial.println("Init done");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));
    
}
```

这个示例代码演示了如何使用 SSCMA 库执行推理并注册回调函数来处理模型的输出。代码初始化视频捕获、SSCMA Micro Core，并注册回调函数来处理性能指标、边界框、类别、点和关键点。在推理过程中，注册的回调函数会被调用，允许您自定义模型输出的处理方式。

:::note
代码定义了几个回调函数：

- `perfCb`：当性能指标可用时调用此函数。它接收一个 `SSCMAMicroCore::PerfMetrics` 实例并打印预处理、推理和后处理时间。
- `boxCb`：为每个检测到的边界框调用此函数。它接收一个 `SSCMAMicroCore::Box` 实例并打印框坐标、分数和目标类别。
- `classCb`：为每个检测到的类别调用此函数。它接收一个 `SSCMAMicroCore::Class` 实例并打印目标类别和分数。
- `pointCb`：为每个检测到的点调用此函数。它接收一个 `SSCMAMicroCore::Point3D` 实例并打印点坐标、分数和目标类别。
- `keypointsCb`：为每个检测到的关键点调用此函数。它接收一个 `SSCMAMicroCore::Keypoints` 实例，其中包含一个边界框和相关点的向量。该函数打印边界框信息并遍历点，打印它们的坐标、分数和目标类别。

在 `setup()` 函数中，串行通信以 115200 的波特率初始化。然后使用 `capture.begin()` 函数和 XIAO ESP32S3 Sense 的默认相机配置初始化视频捕获。使用 `instance.begin()` 函数和默认配置初始化 SSCMA Micro Core。

初始化后，代码使用 SSCMAMicroCore 实例提供的适当方法注册回调函数：

- `instance.setPerfCallback(perfCb)`：将 perfCb 函数注册为性能指标的回调。
- `instance.setBoxCallback(boxCb)`：将 boxCb 函数注册为边界框的回调。
- `instance.setClassCallback(classCb)`：将 classCb 函数注册为检测类别的回调。
- `instance.setPointCallback(pointCb)`：将 pointCb 函数注册为检测点的回调。
- `instance.setKeypointsCallback(keypointsCb)`：将 keypointsCb 函数注册为检测关键点的回调。

`loop()` 函数使用 `capture.getManagedFrame()` 捕获帧，并使用 `instance.invoke(frame)` 对捕获的帧调用推理。在推理过程中，每当相应的输出数据可用时，注册的回调函数就会被调用。

您可以修改回调函数以执行特定操作或根据应用程序的要求进一步处理接收到的数据。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 4. 上传并运行代码

使用 USB-C 数据线将您的 XIAO ESP32S3 Sense 开发板连接到计算机。在 Arduino IDE 中打开选定的示例代码（`inference.ino` 或 `inference_cb.ino`）。

在 Arduino IDE 中选择适当的开发板和端口：

- 转到 **工具 -> 开发板** 并选择 "XIAO ESP32S3 Sense"。
- 转到 **工具 -> 端口** 并选择您的 XIAO ESP32S3 Sense 连接的端口。
- 转到 **工具 -> PSRAM -> OPI PSRAM**。请确保打开 PSRAM！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/75.png" style={{width:600, height:'auto'}}/></div>

在 Arduino IDE 中点击"上传"按钮，编译并将代码上传到您的 XIAO ESP32S3 Sense 开发板。上传完成后，在 Arduino IDE 中打开串口监视器以查看模型的输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/73.png" style={{width:1000, height:'auto'}}/></div>

## 结论

通过遵循这个分步指南，您现在应该能够使用 SSCMA 库为您的 XIAO ESP32S3 Sense 开发板在 SenseCraft AI 上配置模型输出。根据您选择的示例代码，您可以直接检索模型的输出或使用回调函数来自定义输出的处理。

请随意探索和修改示例代码以满足您的特定需求。SSCMA 库提供了一套强大的工具和函数，用于在 XIAO ESP32S3 Sense 开发板上处理计算机视觉和机器学习模型。

如果您遇到任何问题或有进一步的疑问，请参考 SenseCraft AI 文档或从 Seeed Studio 社区论坛寻求帮助。

祝您在使用 XIAO ESP32S3 Sense 开发板探索计算机视觉和机器学习世界时编程愉快！

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
