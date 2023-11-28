---
description: Speech Recognition
title: 基于 TensorFlow Lite 的语音识别
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-TFLite-Mic
last_update:
  date: 10/30/2023
  author: 吴飞飞
---
# 基于 TensorFlow Lite 的语音识别

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" alt="pir" width={1000} height="auto" /></p>


本 wiki 将演示如何在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite，并使用板载麦克风执行语音识别。

> 对于嵌入式 AI 应用，我们强烈建议使用“支持 Seeed nrf52 mbed 的电路板库”。

## 软件设置

请务必先按照 [" Seeed Studio XIAO nRF52840 (Sense)入口"](https://wiki.seeedstudio.com/XIAO_BLE/) wiki 进行初始硬件和软件设置。

Now let's move on to the rest of the software setup.

- **步骤 1**. 将 [tflite-micro-arduino-examples 库](https://github.com/lakshanthad/tflite-micro-arduino-examples) 下载为ZIP文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/tflite-mic-github.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2**. 打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...`并打开下载的 zip 文件 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


## 训练数据并生成 TensorFlow Lite 模型

现在，我们将使用 Google Colab 笔记本来执行数据训练并生成 TensorFlow Lite 模型。

- **步骤 1.** 打开 [这个 Python 笔记本](https://colab.research.google.com/github/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-mic.jpg" alt="pir" width={1000} height="auto" /></p>


默认情况下，它将加载 [这个可以](https://storage.googleapis.com/download.tensorflow.org/data/speech_commands_v0.02.tar.gz) 识别单词的数据集： **"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**

- **步骤 2.** 在 **配置默认值** 根据您希望模型识别的单词更改 **WANTED_WORDS** 参数。您可以选择： **"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-wanted-words.png" alt="pir" width={600} height="auto" /></p>


**注意:** 在此示例中，选择 **yes,no,up,down**

- **步骤 3.** 导航到 `Runtime > Run all` 以运行所有代码单元

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png" alt="pir" width={450} height="auto" /></p>


- **步骤 4.** 单击 **Run anyway** 以获取弹出的错误消息

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>


**注意:** 此过程大约需要 2 小时才能完成

- **步骤 5.** 执行所有代码单元后，导航到左上角的 **files** 选项卡，您将在 **model.cc** 文件夹下找到一个新的 **models** 文件生成

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-cc.png" alt="pir" width={300} height="auto" /></p>


**注意:** 如果看不到上述 **model.cc** 文件，请刷新页面。

- **步骤 6.** 右键单击该文件，然后单击“下载”将文件 **下载** 到您的 PC

## 推理

现在，我们将使用下载的 TensorFlow Lite 模型文件 **(model.cc)**  通过 Seeed Studio XIAO nRF52840 Sense 上的麦克风识别不同的单词。

- **步骤 1.** 导航到 **tflite-micro-arduino-examples** 库的库路径(通常在 **Documents > Arduino > libraries > tflite-micro-arduino-examples下**), 访问 **examples > micro_speech** 并打开 **micro_features_model.cpp**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-features-model-open.png" alt="pir" width={550} height="auto" /></p>


- **步骤 2.** 将 **const unsigned char g_model[] DATA_ALIGN_ATTRIBUTE = {** 替换为 **model.cc** 文件中的新值

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-values.png" alt="pir" width={550} height="auto" /></p>


- **步骤 3.** 根据 **model.cc** 的值更改**g_model_len** 。在这里我们得到了 **26720**

```cpp
const int g_model_len = 26720;
```

- **步骤 4.** 打开文件夹**micro_speech**中的**micro_features_micro_model_settings.cpp** 并添加我们在训练过程中定义的所有单词。这里我们使用了 **yes,no,up,down**

```cpp
#include "micro_features_micro_model_settings.h"

const char* kCategoryLabels[kCategoryCount] = {
    "silence",
    "unknown",
    "yes",
    "no",
    "up",
    "down",
};
```

- **步骤 5.** 打开 文件夹**micro_speech**中的**micro_features_micro_model_settings.h** 并根据定义的类别数更改 **constexpr int kCategoryCount** 。这里有 6 个类别

```cpp
constexpr int kCategoryCount = 6;
```

- **步骤 6.** 打开文件夹 **micro_speech** 中的 **micro_speech.ino** ，将代码上传到 Seeed Studio XIAO nRF52840 Sense

- **步骤 7.** 打开 **串行监视器窗口** ，大声说出我们之前定义的单词。您将看到串行监视器输出识别后说出的正确单词。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/mic-capture.png" alt="pir" width={300} height="auto" /></p>


## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>