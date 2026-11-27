---
description: 基于 Edge Impulse 的语音识别
title: 基于 Edge Impulse 的语音识别
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-PDM-EI
last_update:
  date: 10/12/2023
  author: Bruno Santos (Feiticeir0)
createdAt: '2023-10-11'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/cn/XIAO-BLE-PDM-EI/
---

:::caution
本教程的内容可能已不再有效，且不再提供新的软件维护和技术支持。
:::

# 使用 XIAO nRF52840 基于 Edge Impulse 的语音识别

在本 wiki 中，我将展示如何将 Edge Impulse 与 Seeed Studio XIAO nRF52840 的机器学习能力结合，用于语音识别。我们将使用已经集成在 XIAO nRF52840 Sense 上的麦克风。

## 项目前的知识准备

XIAO nRF52840 尚未被 Edge Impulse 官方支持，也不会作为采集数据的设备出现在列表中，但我将演示如何使用它通过设备麦克风运行推理。

## 入门

要跟随本教程，你需要以下硬件

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 硬件准备

我们不需要做任何硬件准备。XIAO nRF52840 已经具备本项目所需的一切。我们只需要 PDM 麦克风。

#### 下面是 XIAO nRF52840 Sense 的硬件引脚图

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png" alt="XIAO nrf82840 hardware" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}></p>

## 软件准备

要进行尝试，我们只需要三样东西：

1. Google 语音命令数据集（见下文）
2. [Edge Impulse 账号](https://edgeimpulse.com/)
3. [Arduino IDE](https://www.arduino.cc/)

### 数据集

- 我将使用 Google 语音命令数据集。不是整个数据集，只是其中的一些单词。
- 现在，请下载数据集并解压。完整数据集大小为 2.3GB。
- 这个 <a href="https://www.tensorflow.org/lite/microcontrollers" target="_blank">Google 语音命令数据集</a> 被 Google 用在其 TensorFlow Lite for MicroControllers 的 micro speech 示例中。
- <a href="https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb" target="_blank"> 你可以在这里找到代码。</a>

我们可以从上面第一个链接下载数据集，解压后如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png" alt="Dataset extracted" alt="Speech commands dataset" width={600} height="auto" /></p>

## 入门

现在让我们开始使用 Edge Impulse 基于该数据集创建一个 ML 模型。

### 步骤 1 - 打开 Edge Impulse

- Edge Impulse 是一个机器学习（ML）开发平台，使开发者能够为边缘设备（如微控制器和智能手机）创建并部署自定义 ML 模型。
- 它提供多种工具和资源，帮助为特定任务（如关键词检测、异常检测和分类）构建和优化 ML 模型。

让我们创建一个新项目，并给它起个名字。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png" alt="Edge Impulse New project" width={600} height="auto" /></p>

创建新项目后，进入数据采集页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png" alt="Edge Impulse Data Aquisition" width="{600}" height="auto" /></p>

### 步骤 2 - 添加数据

因为我们要使用 Google 语音命令数据集，选择“Add existing data”。
接着，选择“Upload data”

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png" alt="Edge Impulse upload data" width={600} height="auto" /></p>

接下来，我们要选择数据——让我们从语音数据集中选择其中一个文件夹。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

该数据集包含大量可用于训练的单词。让我们选择 3 个文件夹（我们的标签）来训练，再加上背景噪声。这样我们就有 4 个标签。
按下“Browse”按钮。
第一个是“go”。选择该文件夹——你可以看到所有的 .wav 文件——然后点击“Upload”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png" alt="Files to upload" width={600} height="auto" /></p>

接下来，在类别上保持默认选项。让 Edge Impulse 来划分数据。
对于标签，请自己填写标签。完成后，点击“Upload data”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

在右侧，你会看到文件正在上传。因为文件很多，可能需要一段时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png" alt="Files upload progress" width={600} height="auto" /></p>

过一会儿，上传完成，并显示一个已上传文件的小结。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png" alt="Files upload resume" width={600} height="auto" /></p>

之后，界面如下所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

要上传更多数据，点击右侧文件列表上方的小上传按钮。
重复此操作 3 次——再添加 2 个标签以及背景噪声。
我将选择 happy、bird 以及“background noise”文件夹，并将其标签设为“noise”。
最后，我们拥有的所有标签如下所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

接下来，让我们创建网络来学习这些单词。点击 Impulse design 来创建 impulse。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### 步骤 3 - 选择训练方法

因为音频片段都是 1 秒长且采样率为 16Khz，让我们保持相同的窗口大小和频率。现在，添加一个处理模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Edge Impulse 在这里也为我们提供了很大帮助。点击“Add a processing block”，然后选择 Audio (MFCC)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

接着，点击“Add learning block”，选择 Classification。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

现在，我们的最后一列——Output features——已经包含了 4 个标签（bird、go、happy、noise）。
点击“Save Impulse”来保存目前的工作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### 步骤 4 - 生成特征

现在，让我们看一下 MFCC 参数。如果你愿意，可以修改这些数值。
目前，我们保持默认值。点击“Save Parameters”。
保存参数后，我们会看到一个新的窗口，用于“Generate features”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

点击之后，Edge Impulse 将开始生成特征。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png" alt="Generate features" width={600} height="auto" /></p>

过一会儿，我们的特征就生成完毕，并且可以对其进行可视化。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png" alt="Feature explorer" width={600} height="auto" /></p>

现在我们可以使用选定的参数来训练网络。点击“Classifier”。

### 步骤 5 - 分类器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png" alt="Classifier" width={600} height="auto" /></p>

在这里，我们可以调整网络设置，比如训练轮数、是否启用数据增强等。
Edge Impulse 为关键词检测提供了一个简单但有效的神经网络架构。该架构由以下几层组成：

- <b>输入层：</b> 输入层将 MFCC 特征作为输入。
- <b>隐藏层：</b> 隐藏层学习从 MFCC 特征中提取更高层次的特征。Edge Impulse 支持多种隐藏层类型，例如卷积层和循环层。
- <b>输出层：</b> 输出层预测音频输入中包含某个关键词的概率。

我们可以更改默认参数，但默认值已经足够。点击 "Start Training"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png" alt="Network architecture" width={600} height="auto" /></p>

开始训练后，在屏幕右侧我们可以看到训练进度。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png" alt="Training progress" width={600} height="auto" /></p>

我们可以将 Target device 更改为 nRF52840 ——就像我们的 XIAO nRF52840 Sense 一样——这样我们就可以看到性能计算和优化结果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png" alt="Target device" width={600} height="auto" /></p>

训练完成后，我们会得到混淆矩阵和数据浏览器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png" alt="Confusion Matrix" width={600} height="auto" /></p>

现在网络已经准备好了，让我们尝试一些样本并进行实时分类。
如果你进入 live classification，我们可以选择一个样本并查看分类结果。这里，以鸟叫为例，我们在结果中得到了 bird。这太棒了，模型在工作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png" alt="Live classification" width={600} height="auto" /></p>

现在，我们进入模型测试。
让我们使用拆分出来的测试样本来测试模型。点击 "Classify all"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png" alt="Test data" width={600} height="auto" /></p>

我们得到了接近 90% 的准确率。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png" alt="Accuracy" width={600} height="auto" /></p>

### 步骤 6 - 部署并获取 Arduino 库

现在，让我们进入部署页面，为我们的微控制器获取文件。

#### 部署选项

让我们选择 Arduino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png" alt="Accuracy" width={600} height="auto" /></p>

接下来，保持选择 Quantized(int8)，然后点击 "Build" 来下载用于 Arduino IDE 的文件。
我们可以稍微尝试一下不同的优化。如果你发现准确率较低，试着关闭 EON compiler 然后再试一次。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png" alt="Accuracy" width={600} height="auto" /></p>

过一会儿，文件会自动下载。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png" alt="Arduino Files download" width={600} height="auto" /></p>

### 步骤 7 - 将库添加到 Arduino IDE

在 Arduino IDE 中，让我们添加刚刚下载的文件。
进入 Sketch > Include Library > Add .ZIP Library

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png" alt="Arduino IDE Add library" width={600} height="auto" /></p>

选择下载的文件。过一会儿，在输出窗口会出现一条消息，提示库已安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png" alt="Library installed" width={600} height="auto" /></p>

### 步骤 8 - 语音控制 XIAO nRF52840 Sense 上的 RGB 灯

让我们打开一个示例
进入 Examples > &lt;your_files_names&gt; > nano_ble33_sense > nano_ble33_sense_microphone

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png" alt="Library installed" width={600} height="auto" /></p>

为什么是 Arduino BLE 33 Sense？它们使用相同的库 —— PDM（脉冲密度调制） —— 来控制麦克风。Arduino Nano BLE 33 Sense 使用的是 MP34DT05，而 XIAO nRF52840 Sense 使用的是 MSM261D3526H1CPM。
在打开示例程序后，让我们编译一下，看看是否没有错误。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png" alt="Sketch open" width={600} height="auto" /></p>

过一会儿，示例程序编译完成且没有报错。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png" alt="Sketch open" width={600} height="auto" /></p>

现在，连接 XIAO nRF52840 Sense（如果你还没有连接的话），并将代码上传到开发板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png" alt="Sketch open" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png" alt="Compile result" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png" alt="Upload" width={600} height="auto" /></p>

现在，打开串口（Ctrl+Shitf+M），检查推理结果（开发板已经开始录音、推理和预测）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png" alt="Serial Monitor" width={600} height="auto" /></p>

尝试说出其中一个选定的单词。我说的是 go

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png" alt="Serial Monitor" width={600} height="auto" /></p>

如果正确检测到该单词，最可能的单词结果会最接近 1.0，而其他单词的值会更接近 0.0。
现在，让我们来点乐趣，稍微修改一下代码。
XIAO nRF52840 Sense 有一个内置 LED，具有 3 种颜色：

- 红色 - LED_BUILTIN 或 LED_RED

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif" alt="Red LED" width={600} height="auto" /></p>
- 绿色 - LED_GREEN
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif" alt="Green LED" width={600} height="auto" /></p>
- 蓝色 - LED_BLUE
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif" alt="Blue LED" width={600} height="auto" /></p>

既然我们有 3 个单词，就给每个单词分配一种颜色，并在识别到该单词时点亮对应的颜色。

- 红色对应 bird
- 绿色对应 Go
- 蓝色对应 happy

为了更方便，我查看了开发板的 PIN 定义，发现以下 PIN 分配给 LED 颜色：

- 红色 - Pin 11
- 绿色 - Pin 13
- 蓝色 - Pin 12

首先，我们需要定义一个阈值。我们知道预测值从 0.0 到 1.0。越接近 1.0，我们对该单词分类就越有把握。这个值之后可以微调。我将其设置为 0.7。

首先，定义一些变量。我在包含库之后立刻定义了这些变量：

```cpp
/* threshold for predictions */
float threshold = 0.7;

/** 
  LABELS INDEX:
  0 - bird
  1 - go
  2 - happy
  3 - noise
*/
// LED pin (defines color) to light up
/**
 PIN 11 - RED
 PIN 12 - BLUE
 PIN 13 - GREEN
*/
int LED = 0;
int oldLED;
```

<i>int oldLED</i> 将保存上一次点亮的 LED，这样当没有预测结果或预测发生变化时，我们可以将其关闭。

<i>int LED</i> 是我们当前要点亮的 LED。

接下来，在 loop() 函数中，在 for 循环语句内部，我们遍历 CLASSIFIER_LABEL_COUNT（大约在第 129 行 —— 已经包含上面的新增代码）：

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
```

我们使用 if 语句来检查分类值。如果它高于定义的阈值，我们使用 switch 语句检查录到的是哪个单词。

完整的 for 循环，加上我们的修改后如下：

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
        //lets light up some LEDS

        if (result.classification[ix].value > threshold) {
          //now let's see what label were in
          switch (ix) {
            case 0: LED = 11; break;
            case 1: LED = 13; break;
            case 2: LED = 12; break;
            default: LED = 0;
          }
          //in Sense, LOW will light up the LED
          if (LED != 0) {
            digitalWrite (oldLED, HIGH); //if we enter a word right next to previous - we turn off the previous LED
            digitalWrite (LED, LOW);            
            oldLED = LED;
          }
          else //turn off LED
            digitalWrite (oldLED, HIGH);
        }
    }
```

完成这些修改后，只需将代码上传到你的微控制器，然后尝试说出训练过的单词，观察 LED 是否会根据单词点亮相应的颜色。

就是这样。虽然没有被直接支持，但我们现在可以使用 XIAO nRF52840 Sense 通过 Edge Impulse 来运行一些 ML 模型了

## ✨ 贡献者项目

- 本项目由 Seeed Studio 的 [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 [Bruno 的付出](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)，你的工作将会被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
