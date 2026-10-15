---
description: 了解如何使用搭载 XMOS XVF3800 的 ReSpeaker Flex 实现关键词唤醒和 NLU，该产品为机器人和智能设备提供环形和线性 4 麦克风阵列。
title: 使用 Pico-voice 在 reSpeaker Flex 上控制唤醒词和 NLU
keywords:
  - reSpeaker
  - python
  - picovoice
  - NLU
  - Keyword Spotting
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg
slug: /respeaker_flex_picovoice_nlu_keyword_spotting
sku: 114993700
last_update:
  date: 4/3/2026
  author: Kasun Thushara
createdAt: '2026-04-01'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/cn/respeaker_flex_picovoice_nlu_keyword_spotting/
---
## 介绍 

[Picovoice](https://picovoice.ai/) 是一家专注于端侧语音 AI 的公司，提供包括唤醒词检测、语音转文本和意图识别在内的完整技术栈，这些技术可以在嵌入式和边缘设备本地运行，而无需依赖云端。他们的解决方案面向低延迟、隐私保护和跨平台部署，非常适合用于物联网和机器人系统。 

[Porcupine](https://picovoice.ai/docs/porcupine/) 是 Picovoice 推出的轻量级且高精度的唤醒词检测引擎，基于深度神经网络构建并针对嵌入式系统进行了优化。它允许应用始终处于“监听”状态的同时保持较低的计算成本，并可运行在微控制器、Raspberry Pi、移动端和桌面端等多种平台上。 

Picovoice [Rhino](https://picovoice.ai/docs/rhino/) 是一个语音转意图引擎，可以在不需要单独语音转文本步骤的情况下，直接将口语命令转换为结构化意图。它采用单步深度学习方法，将语音识别与自然语言理解结合在一起，以提高准确率并降低延迟。

## 什么是 NLP、NLU 和 STT？

自然语言处理（NLP）是一个广泛的领域，使机器能够处理人类语言，而自然语言理解（NLU）是其中的一个子集，专注于从语言中提取含义或意图。语音转文本（STT）会将语音音频转换为文本，然后通常将该文本交给 NLU，以理解用户意图。Picovoice Rhino 采用了不同的方法：跳过 STT，直接将语音转换为意图（语音转意图），从而提升效率和准确率。

关键词（唤醒词）检测（例如 “Hey device”）是激活系统的第一步，在激活之后，可以通过 STT → NLU 流水线，或者使用语音转意图（Rhino）来理解并执行指令。

## 目标

本演示展示了如何在 Raspberry Pi 上，将使用 Picovoice Porcupine 的唤醒词检测与 Picovoice Rhino 相结合，实现高效的语音转意图处理。系统首先监听关键词以进行激活，一旦被触发，就会直接将口语命令转换为可执行的意图，而不依赖于繁重的云端处理。该方案针对低资源嵌入式设备进行了高度优化，非常适合用于机器人和边缘 AI 应用。它可实现低延迟、实时的语音交互，即使在受限硬件上也能确保快速可靠的性能。

## 所需硬件 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 唤醒词检测 

在机器人嵌入式系统中，唤醒词可以实现**事件驱动处理**，让设备保持在低功耗监听状态，仅在需要时才激活高负载的语音处理。这大幅降低了在资源受限硬件（如微控制器和边缘设备）上的 CPU、内存和能耗占用。它同时在音频处理链路中充当一种**门控机制**，过滤无关噪声，避免不必要地触发语音识别和控制逻辑。从隐私角度看，唤醒词检测可确保只有在检测到明确的用户意图后才会采集或传输音频，使大部分数据处理保持在本地设备上。此外，它还能通过提供一种自然的交互触发方式来改善人机交互，帮助系统区分环境对话与面向机器的指令。

将唤醒词与 reSpeaker Flex 这样的高级麦克风阵列系统结合使用，可以在具身系统中实现**高效且可靠**的语音交互。唤醒词确保系统只在需要时才激活完整语音处理，从而降低嵌入式硬件上的功耗和 CPU 使用率。麦克风阵列通过在环形麦克风阵列上提供**波束形成、噪声抑制和方向检测**等能力，能够在嘈杂环境中依然实现精确的唤醒词识别。这种组合可以最大限度地减少误触发并提升整体系统响应速度，同时还能改善人机交互体验，确保设备只在被明确呼叫时做出响应，并聚焦于正确的说话者。

## 如何在 Pico-voice 中使用唤醒词

在 [Picovoice](https://console.picovoice.ai/) 上注册账号后，你将获得 Access Key（访问密钥） 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic1.png" alt="pir" width={800} height="auto" /></p>


### 选项 A：内置关键词 

 Porcupine 提供了多种内置唤醒词选项，例如 **AMERICANO、BLUEBERRY、BUMBLEBEE、GRAPEFRUIT、GRASSHOPPER、PICOVOICE、PORCUPINE、TERMINATOR 和 JARVIS，**在拥有有效访问密钥的情况下可以直接使用。借助该访问密钥，这些关键词可以轻松集成到你的应用中，而无需训练自定义模型。

在本方案中，我们使用 **Raspberry Pi 5** 作为主机设备，唤醒词检测将在该设备本地运行。基于 XMOS 的麦克风系统已刷入 **USB 音频固件**，使其能够被操作系统识别为标准音频输入设备。

首先，需要在环境中安装 Porcupine 所需的库和依赖。

```bash
pip install pvporcupine
```

安装完成后，可以使用示例代码来初始化音频录制器、加载选定的关键词，并持续监听唤醒词。一旦检测到关键词，系统就可以触发后续操作，例如录音或处理语音指令。

```python
import pvporcupine
from pvrecorder import PvRecorder

access_key = "YOUR_ACCESS_KEY"

porcupine = pvporcupine.create(
    access_key=access_key,
    keywords=["porcupine"]
)

recorder = PvRecorder(device_index=-1, frame_length=porcupine.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    result = porcupine.process(pcm)
    if result >= 0:
        print("Wake word detected!")

porcupine.delete()
recorder.stop()
recorder.delete()
```

### 选项 B：自定义关键词 

进入 Picovoice Console 并打开自定义唤醒词页面。选择你偏好的语言，并定义一个唤醒词，例如 “hi flex”。你可以在控制台中测试该唤醒词，以验证它的检测性能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic2.png" alt="pir" width={400} height="auto" /></p>

当测试结果令人满意后，点击 Train 来生成模型。然后选择你的目标平台——这里我们选择 Raspberry Pi。最后下载生成的 .ppn 文件，该文件将在你的应用中用于自定义唤醒词检测。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic3.png" alt="pir" width={600} height="auto" /></p>

**示例代码**

```python

import pvporcupine
from pvrecorder import PvRecorder

access_key = "YOUR_ACCESS_KEY"

porcupine = pvporcupine.create(
    access_key=access_key,
    keyword_paths=["/home/pi/porcupine_env/hi-flex_en_raspberry-pi_v4_0_0.ppn"]
)

recorder = PvRecorder(device_index=-1, frame_length=porcupine.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    result = porcupine.process(pcm)
    if result >= 0:
        print("Wake word detected!")

porcupine.delete()
recorder.stop()
recorder.delete()
```

## 语音转意图 

Picovoice Rhino 是一个语音转意图引擎，可以在不需要单独语音转文本步骤的情况下，直接将口语命令转换为结构化意图。它采用**单步深度学习方法**，将语音识别与自然语言理解结合在一起，以提高准确率并降低延迟。 
Rhino 针对**实时、本地处理**进行了优化，这意味着它可以离线运行，没有任何网络延迟，并且将所有语音数据保留在本地以保护隐私。它具有极高的效率，并专为 Raspberry Pi 和微控制器等嵌入式和物联网系统设计。 
此外，Rhino 允许开发者定义包含意图和槽位的自定义上下文，使系统能够理解特定领域的命令，并直接从语音输入中触发相应动作。 

### 创建一个上下文 

上下文定义了特定领域内的口语命令、意图以及槽位集合；在这里，我们创建一个 **“Bumblebee”** 上下文，通过语音指令控制 ReSpeaker Flex。进入 Picovoice 中的 Rhino Speech-to-Intent 控制台，然后使用 **“Empty”** 模板创建一个名为 **Bumblebee** 的新上下文。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic4.png" alt="pir" width={600} height="auto" /></p>

### 创建意图

在顶层，一个上下文是由一组意图组成，这些意图代表用户在特定领域中的操作。例如，在 HiFlex 上下文中创建一个名为 “Gesture” 的意图，用于表示与手势相关的语音指令。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic5.png" alt="pir" width={600} height="auto" /></p>

### 为意图添加表达式

用户可以用多种方式表达同一个意图，每一种变体都称为一个表达式。对于 **Gesture** 意图，可以添加诸如 **“wave your head” 和 “shake your antenna”** 这样的表达式，因为它们都映射到同一组动作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic6.png" alt="pir" width={600} height="auto" /></p>

### 使用槽位来捕获变量


使用槽位来捕获用户话语中的可变部分。在本例中，**“wave”** 和 **“shake”** 这样的词表示指令中的变化状态，因此可以将它们建模为变量。在 Rhino 上下文中创建一个名为 **“commands”** 的槽位，以动态捕获这些变化。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic8.png" alt="pir" width={800} height="auto" /></p>

修改已有表达式以包含新创建的槽位。添加槽位时，使用 `$` 符号来表示槽位，然后从自动完成下拉列表中选择所需的槽位类型，并为其指定一个名称。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic9.png" alt="pir" width={800} height="auto" /></p>

如果你已经准备好，可以先点击 test 按钮进行测试

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic10.png" alt="pir" width={800} height="auto" /></p>

### 让我们下载模型

上下文设计完成后，点击右上角的下载图标，选择目标平台，然后点击 **“Download.”**。Picovoice Console 会为该平台自动训练 Rhino 模型，通常需要大约 5–10 秒。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic11.png" alt="pir" width={800} height="auto" /></p>

### 示例代码

```python
import pvporcupine
import pvrhino
from pvrecorder import PvRecorder

access_key = "ACCESS KEY"

rhino = pvrhino.create(
    access_key=access_key,
    context_path="/home/pi/porcupine_env/Bumblebee_en_raspberry-pi_v4_0_0.rhn",
)

recorder = PvRecorder(device_index=-1, frame_length=rhino.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    is_finalized = rhino.process(pcm)

    if is_finalized:
        inference = rhino.get_inference()
        if inference.is_understood:
            print("Intent:", inference.intent)
            print("Slots:", inference.slots)
        else:
            print("Didn't understand")

        rhino.reset()


```

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们的产品时体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
