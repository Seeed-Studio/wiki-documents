---
description: 学习如何在配备 XVF3800 ReSpeaker 的 Seeed XIAO ESP32 上训练和部署 TensorFlow Lite Micro (TFLM)语音模型，实现实时语音识别。本教程涵盖模型训练、TFLite 转换为十六进制代码，以及刷写以在微控制器上实现准确的关键词识别。

title: ReSpeaker XVF3800 上的 TensorFlow Lite

keywords:
- reSpeaker
- XIAO
- ESP32S3
- TensorFlow
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /cn/respeaker_xvf3800_xiao_tensorflow
last_update:
  date: 9/19/2025
  author: Kasun Thushara
---

## 介绍

在本教程中，我们将指导您使用 TensorFlow Lite Micro (TFLM)在配备 XVF3800 ReSpeaker 的 Seeed XIAO ESP32 上创建自定义语音识别系统。您将学习如何收集和标记音频数据，对其进行预处理以用于训练，并将其分为训练集和验证集。接下来，我们训练一个针对您的数据集定制的关键词识别模型，将其转换为 TFLite 格式，最后将其作为十六进制文件部署到 ESP32 上进行实时语音命令识别。最终，您将拥有一个功能完整的基于微控制器的系统，能够准确分类语音命令。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>


## 依赖项

要跟随本教程，您需要安装以下 Arduino 库：

* [TFLite Micro Arduino Examples](https://github.com/pschatzmann/tflite-micro-arduino-examples)
* [Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools)

确保在您的 Arduino IDE 中安装这些库。每个 GitHub 仓库都包含如何正确安装和配置库的指南。


## 收集数据

我们将录制短语音样本（每个 10 秒），并将其分割为 1 秒的片段。要使用 XVF3800 ReSpeaker，您可能需要先安装 USB 固件。

**固件指南：**
[Seeed Studio XVF3800 固件刷写](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#flash-firmware)

---

### 步骤 1：查找设备 ID

使用以下 Python 脚本列出连接到您 PC 的所有音频设备，并找到 ReSpeaker 的正确设备索引：

```python
import sounddevice as sd

# List all available devices
devices = sd.query_devices()

# Print all devices
for i, device in enumerate(devices):
    print(f"Device {i}: {device['name']} (input channels: {device['max_input_channels']})")
```

> 注意：根据打印的 ReSpeaker 设备编号在下一个脚本中更新`DEVICE_INDEX`。


### 步骤 2：收集音频样本

这个 Python 脚本根据人名和标签收集音频样本。将为每个人创建一个文件夹，WAV 文件将保存在相应的标签下。

```python
import os
import sounddevice as sd
from scipy.io.wavfile import write

# === Settings ===
SAMPLERATE = 16000
CHANNELS = 1  # ReSpeaker 4-Mic Array
DURATION = 10  # seconds
DEVICE_INDEX = 2  # Set to your ReSpeaker device index


def record_audio(filename, samplerate=SAMPLERATE, channels=CHANNELS, duration=DURATION, device=DEVICE_INDEX):
    print(f"Recording '{filename}' for {duration} seconds...")
    recording = sd.rec(int(duration * samplerate),
                       samplerate=samplerate,
                       channels=channels,
                       dtype='int16',
                       device=device)
    sd.wait()
    write(filename, samplerate, recording)
    print(f"Saved: {filename}")


def get_next_filename(directory, label):
    existing = [f for f in os.listdir(directory) if f.startswith(label) and f.endswith('.wav')]
    index = len(existing) + 1
    return os.path.join(directory, f"{label}.{index}.wav")


def collect_samples():
    while True:
        sample_name = input("Enter sample name (e.g., PersonA): ").strip()
        if not sample_name:
            print("Sample name cannot be empty.")
            continue

        sample_dir = os.path.join(os.getcwd(), sample_name)
        os.makedirs(sample_dir, exist_ok=True)
        print(f"Directory created: {sample_dir}")

        while True:
            label = input("Enter sound/voice to record (e.g., yes, no): ").strip()
            if not label:
                print("Label cannot be empty.")
                continue

            while True:
                filename = get_next_filename(sample_dir, label)
                record_audio(filename)

                cont = input("Record another sample for this label? (yes/no): ").strip().lower()
                if cont != 'yes':
                    break

            next_label = input("Do you want to record a different label? (yes/no): ").strip().lower()
            if next_label != 'yes':
                break

        next_sample = input("Do you want to create a new sample? (yes/no): ").strip().lower()
        if next_sample != 'yes':
            print("Audio collection completed.")
            break


if __name__ == "__main__":
    collect_samples()
```

**工作原理：**

* 为每个人创建一个文件夹。
* 提示输入标签（例如"yes"、"no"）并保存相应的音频文件。
* 录制 10 秒音频片段，稍后可以分割为 1 秒片段用于训练。


## 数据预处理

收集完 10 秒音频样本后，下一步是将它们分割为 1 秒片段用于训练。我使用**Edge Impulse**来轻松可视化和分割录音。

### 音频文件格式

所有音频文件必须满足以下要求：

* **格式：** WAV (.wav)
* **采样率：** 16 kHz
* **声道：** 单声道（1 声道）
* **位深度：** 16 位 PCM
* **时长：** 1 秒（1000 毫秒）

> 注意：Edge Impulse 可以帮助自动将较长的录音分割为这些 1 秒片段。

### 目标标签

* 每个**文件夹名称**被视为一个**类别标签**。
* 示例：

  * `hi_speaker` → 模型识别"hi speaker"
  * `seeed` → 模型识别"seeed"
* 您可以根据需要添加更多类别，但文件夹名称**必须与训练期间使用的`WANTED_WORDS`列表匹配**。

### 未知/其他

* `other/`文件夹应包含**不在您目标列表中的随机单词**。这有助于模型正确分类未知单词。

### 静音/噪音

* `_background_noise_/`文件夹应包含环境声音，例如：

  * 办公室噪音
  * 街道噪音
  * 键盘打字声
  * 静音录音（麦克风开启但无说话）

> 适当的预处理确保模型学会区分目标命令、未知单词和背景噪音。

```sql
dataset_dir/
│
├── hi_speaker/           # All audio samples for the "hi_speaker" keyword
│   ├── audio_0.wav
│   ├── audio_1.wav
│   └── ...
│
├── seeed/                # All audio samples for the "seeed" keyword
│   ├── audio_2.wav
│   ├── audio_3.wav
│   └── ...
│
├── other/                # Random speech or non-target words
│   ├── audio_4.wav
│   ├── audio_5.wav
│   └── ...
│
└── _background_noise_/   # Background noise samples
    ├── noise_0.wav
    ├── noise_1.wav
    └── ...

```
## 数据训练

要训练您的自定义语音识别模型，建议使用配备**Ubuntu x86**的 PC。您还需要`xxd`工具，可以通过以下方式安装：

```bash
sudo apt-get install xxd
```

### 步骤 1：安装 Anaconda

* 下载并安装[**Anaconda Navigator**](https://www.anaconda.com/products/navigator)
* 在 Anaconda 中为此项目创建一个新环境。

### 步骤 2：设置环境

在环境中安装所需的包：

:::info

* **深度学习框架：** TensorFlow 1.5
* **编程语言：** Python 3.7
:::

> 此设置确保与用于微控制器部署的 TensorFlow Lite Micro 兼容。

### 步骤 3：运行训练笔记本

* 下载 Jupyter 笔记本：
  [train\_micro\_speech\_model.ipynb](https://github.com/KasunThushara/TFLM_voice_module/blob/main/train_micro_speech_model.ipynb)
* 在 Jupyter 中打开笔记本并按照说明操作。
* 完成后，笔记本将生成一个名为`model.cc`的**十六进制模型文件**，准备部署到 ESP32。

> `model.cc`文件然后可以包含在您的 Arduino 项目中，在配备 XVF3800 ReSpeaker 的 XIAO ESP32 上运行实时关键词识别。




## 在配备 XVF3800 的 XIAO ESP32 上进行推理

一旦您的`model.cc`文件准备就绪，您可以将其部署在 XIAO ESP32 上进行实时语音命令识别。由于 XVF3800 输出**32 位音频样本**，我们需要**将其转换为 16 位**以用于 TensorFlow Lite Micro。我们还配置 I2S 引脚、采样率和声道以匹配模型要求。



### Arduino 代码示例

```cpp
#include "AudioTools.h"
#include "AudioTools/AudioLibs/TfLiteAudioStream.h"
#include "model.h"  // Replace with your generated model.cc

I2SStream i2s;  
TfLiteAudioStream tfl;  
StreamCopy copier(tfl, i2s);

const char* kCategoryLabels[] = {
    "silence",
    "unknown",
    "hi_respeaker", //change the key word that you trained
    "seeed" // change the key word that you trained 
};

void respondToCommand(const char* found_command, uint8_t score, bool is_new_command) {
  if (is_new_command) {
    Serial.printf("Detected: %s (score: %d)\n", found_command, score);
  }
}

// Temp buffer for 32-bit I2S samples
int32_t i2s_buffer[512];
int16_t conv_buffer[512];

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Warning);

  // XVF3800 I2S input configuration
  auto cfg = i2s.defaultConfig(RX_MODE);
  cfg.sample_rate = 16000;
  cfg.channels = 1;            // Mono
  cfg.bits_per_sample = 32;    // XVF3800 streams 32-bit samples
  cfg.pin_bck = 8;
  cfg.pin_ws = 7;
  cfg.pin_data = 44;
  cfg.pin_data_rx = 43;
  cfg.is_master = true;
  i2s.begin(cfg);

  // TensorFlow Lite configuration
  auto tcfg = tfl.defaultConfig();
  tcfg.setCategories(kCategoryLabels);
  tcfg.sample_rate = 16000;
  tcfg.channels = 1;
  tcfg.kTensorArenaSize = 15 * 1024;
  tcfg.respondToCommand = respondToCommand;
  tcfg.model = g_model;  // Replace with your model.cc
  tfl.begin(tcfg);
}

void loop() {
  // Read 32-bit audio from XVF3800
  size_t n = i2s.readBytes((uint8_t*)i2s_buffer, sizeof(i2s_buffer));

  if (n > 0) {
    size_t samples = n / sizeof(int32_t);

    // Convert 32-bit -> 16-bit
    for (size_t i = 0; i < samples; i++) {
      conv_buffer[i] = (int16_t)(i2s_buffer[i] >> 16);
    }

    // Feed converted data into TensorFlow
    tfl.write((uint8_t*)conv_buffer, samples * sizeof(int16_t));
  }
}
```

#### 关键注意事项

* 确保**将 `g_model` 替换**为您生成的 `model.cc` 文件的名称。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/tflm/image1.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/tflm/image2.png" alt="pir" width={800} height="auto" /></p>

* XVF3800 默认输出**32 位立体声**；我们将其转换为**16 位单声道**以匹配模型。
* TensorFlow Lite Micro 持续读取音频数据，并在检测到识别的命令时触发 `respondToCommand()`。

> 通过这种设置，您的 XIAO ESP32 现在可以使用 XVF3800 麦克风阵列实时识别自定义语音命令。



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
