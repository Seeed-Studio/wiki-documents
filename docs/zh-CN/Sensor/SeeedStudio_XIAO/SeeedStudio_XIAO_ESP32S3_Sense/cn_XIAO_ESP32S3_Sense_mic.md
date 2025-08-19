---
description: 本文介绍如何使用 XIAO ESP32S3 Sense 扩展板上的麦克风。
title: Sense 版本的麦克风使用
keywords:
- Template
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_sense_mic
last_update:
  date: 04/14/2023
  author: Citric
---

# Seeed Studio XIAO ESP32S3 麦克风的使用

在本教程中，我们将为您介绍如何使用 XIAO ESP32S3 Sense 扩展板的麦克风。首先是 I2S 引脚的基本使用，我们将通过使用 I2S 和麦克风获取当前环境的响度，并在串口波形图中显示。然后我们将解释如何录制声音并将录制的声音保存到 SD 卡中。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
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

:::caution
本教程的所有内容仅适用于 XIAO ESP32S3 Sense。
:::

## 入门指南

在开始教程内容之前，您可能需要提前准备以下硬件和软件。

### 扩展板的安装（适用于 Sense）

安装扩展板非常简单，您只需要将扩展板上的连接器与 XIAO ESP32S3 上的 B2B 连接器对齐，用力按下并听到"咔嗒"声，安装就完成了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### 准备 microSD 卡

在进行保存录音的项目时，您可能需要一张 MicroSD 卡。

XIAO ESP32S3 Sense 支持最大 **32GB** 的 microSD 卡，所以如果您准备为 XIAO 购买 microSD 卡，请参考此规格。在使用 microSD 卡之前，请将 microSD 卡格式化为 **FAT32** 格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

格式化后，您可以将 microSD 卡插入 microSD 卡槽。请注意插入方向，金手指一面应朝内。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

## 声音响度检测

对于第一个项目案例，让我们检测环境中的噪音，并使用 Arduino IDE 的串口波形图显示麦克风检测到的环境响度。

以下是完整的示例程序。

:::tip
检查并确认您使用的是哪个版本的 `esp32`，以下示例适用于 2.0.x，下面的示例适用于 3.0.x 及更高版本
:::

```cpp
#include <I2S.h>

void setup() {
  // Open serial communications and wait for port to open:
  // A baud rate of 115200 is used instead of 9600 for a faster data rate
  // on non-native USB ports
  Serial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // start I2S at 16 kHz with 16-bits per sample
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }
}

void loop() {
  // read a sample
  int sample = I2S.read();

  if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
  }
}
```

:::tip
上面的示例仅与 `esp32` 的 2.0.x 版本兼容，如果您使用的是最新版本（例如 3.0.x），请使用下面的示例
:::

```cpp
#include <ESP_I2S.h>
I2SClass I2S;

void setup() {
  // Open serial communications and wait for port to open:
  // A baud rate of 115200 is used instead of 9600 for a faster data rate
  // on non-native USB ports
  Serial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // setup 42 PDM clock and 41 PDM data pins
  I2S.setPinsPdmRx(42, 41);

  // start I2S at 16 kHz with 16-bits per sample
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }
}

void loop() {
  // read a sample
  int sample = I2S.read();

  if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
  }
}
```

将此程序上传到 XIAO ESP32S3 Sense 并打开**串口绘图器**，您将看到声音的响度变化曲线。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/83.png" style={{width:600, height:'auto'}}/></div>

### 程序注释

在程序开始时，我们需要首先导入 I2S 库以便使用麦克风引脚。

```c
#include <I2S.h>
```

`setAllPins()` 函数在 I2S 对象上调用，用于配置 I2S 接口使用的引脚。该函数接受五个整数参数，分别代表连接到 I2S 接口的位时钟、字选择、数据输入、数据输出和通道选择线的 GPIO 引脚。

```c
I2S.setAllPins(-1, 42, 41, -1, -1);
```

在这个特定的代码中，`-1` 值表示相应的引脚未使用，而 `42` 和 `41` 值分别代表连接到字选择和数据输入线的 GPIO 引脚。数据输出和通道选择线在此配置中未使用，设置为 `-1`。

```c
if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
}
```

`begin()` 函数在 I2S 对象上被调用，用指定的参数初始化 I2S 接口：`PDM_MONO_MODE`、`16000` Hz 采样率和 `16-bit` 分辨率。

:::tip
需要注意的是，对于当前的 ESP32-S3 芯片，我们只能使用 `PDM_MONO_MODE`，采样位宽只能是 `16bit`。只有采样率可以修改，但经过测试，16kHz 的采样率相对稳定。
:::

```c
int sample = I2S.read();

if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
}
```

`read()` 函数在 I2S 对象上被调用，用于从 I2S 接口读取单个音频样本。if 语句检查 sample 变量的值。如果样本值不是 0、-1 或 1，则被认为是有效的音频样本，if 块内的代码将被执行。在这种情况下，样本值使用 `Serial.println()` 函数打印到串行控制台。


## 将录制的声音保存到 microSD 卡

在下一个项目中，我们将指导您如何结合 microSD 卡的功能，将录制的声音保存到 microSD 卡中。对于这个项目，请提前准备 microSD 卡并将其格式化为 **FAT32** 格式。

如果这是您第一次在 XIAO ESP32S3 上使用 microSD 卡，您可以阅读[文件系统 Wiki](https://wiki.seeedstudio.com/cn/xiao_esp32s3_sense_filesystem/#prepare-the-microsd-card) 内容来了解 microSD 卡的安装和准备。

以下是此项目的 Arduino 程序。
:::tip
检查并确认您使用的是哪个版本的 `esp32`，以下示例适用于 2.0.x，下面的示例适用于 3.0.x 及更高版本
:::

```cpp
/* 
 * 适用于 Seeed XIAO ESP32S3 Sense 的 WAV 录音器
*/

#include <I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 根据需要进行更改
#define RECORD_TIME   20  // 秒，最大值为 240
#define WAV_FILE_NAME "arduino_rec"

// 为了获得最佳效果，请勿更改
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2

void setup() {
  Serial.begin(115200);
  while (!Serial) ;
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("初始化 I2S 失败！");
    while (1) ;
  }
  if(!SD.begin(21)){
    Serial.println("挂载 SD 卡失败！");
    while (1) ;
  }
  record_wav();
}

void loop() {
  delay(1000);
  Serial.printf(".");
}

void record_wav()
{
  uint32_t sample_size = 0;
  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;
  uint8_t *rec_buffer = NULL;
  Serial.printf("准备开始录音...\n");

  File file = SD.open("/"WAV_FILE_NAME".wav", FILE_WRITE);
  // 将头部写入 WAV 文件
  uint8_t wav_header[WAV_HEADER_SIZE];
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  file.write(wav_header, WAV_HEADER_SIZE);

  // 为录音分配 PSRAM 内存
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("内存分配失败！\n");
    while(1) ;
  }
  Serial.printf("缓冲区：%d 字节\n", ESP.getPsramSize() - ESP.getFreePsram());

  // 开始录音
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("录音失败！\n");
  } else {
    Serial.printf("录制了 %d 字节\n", sample_size);
  }

  // 增加音量
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // 将数据写入 WAV 文件
  Serial.printf("正在写入文件...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("写入文件失败！\n");

  free(rec_buffer);
  file.close();
  Serial.printf("录音结束。\n");
}

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考资料请见：http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (PCM 为 16)
    0x01, 0x00, // AudioFormat (PCM 为 1)
    0x01, 0x00, // NumChannels (1 声道)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 位)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}
```

:::tip
上面的示例仅与 `esp32` 的 2.0.x 版本兼容，如果您使用的是最新版本（例如 3.0.x），请使用下面的示例
:::

```cpp
#include "ESP_I2S.h"
#include "FS.h"
#include "SD.h"

void setup() {
  // 创建 I2SClass 的实例
  I2SClass i2s;

  // 创建变量来存储音频数据
  uint8_t *wav_buffer;
  size_t wav_size;

  // 初始化串口
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  Serial.println("正在初始化 I2S 总线...");

  // 设置用于音频输入的引脚
  i2s.setPinsPdmRx(42, 41);

  // 以 16 kHz 采样率和 16 位采样深度启动 I2S
  if (!i2s.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("初始化 I2S 失败！");
    while (1); // 什么都不做
  }

  Serial.println("I2S 总线已初始化。");
  Serial.println("正在初始化 SD 卡...");

  // 设置用于 SD 卡访问的引脚
  if(!SD.begin(21)){
    Serial.println("挂载 SD 卡失败！");
    while (1) ;
  }
  Serial.println("SD 卡已初始化。");
  Serial.println("正在录制 20 秒音频数据...");

  // 录制 20 秒音频数据
  wav_buffer = i2s.recordWAV(20, &wav_size);

  // 在 SD 卡上创建文件
  File file = SD.open("/arduinor_rec.wav", FILE_WRITE);
  if (!file) {
    Serial.println("打开文件进行写入失败！");
    return;
  }

  Serial.println("正在将音频数据写入文件...");

  // 将音频数据写入文件
  if (file.write(wav_buffer, wav_size) != wav_size) {
    Serial.println("将音频数据写入文件失败！");
    return;
  }

  // 关闭文件
  file.close();

  Serial.println("应用程序完成。");
}

void loop() {
  delay(1000);
  Serial.printf(".");
}
```

要执行此示例，我们需要使用 ESP-32 芯片的 PSRAM 功能，因此请在上传前将其打开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>


此程序仅在用户**打开串口监视器**后执行一次，录制 20 秒并将录制文件保存到 microSD 卡中，文件名为"arduino_rec.wav"。

当串口监视器中每 1 秒输出一个"."时，程序执行完成，您可以借助读卡器播放录制的声音文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/102.png" style={{width:700, height:'auto'}}/></div>

:::tip
要播放从 XIAO ESP32S3 录制的音频，您可能需要使用支持 WAV 格式的音频播放器。
:::

### 程序注释

在此程序中，我们为录音功能编写了两个函数，一个是 `record_wav()`，另一个是 `generate_wav_header()`。

- `record_wav()`：录音函数。在此函数中，程序使用 I2S 接口从麦克风读取音频数据，并将其存储到 SD 卡中作为 WAV 音频文件。

  a. 初始化变量。程序定义了一个用于存储录制数据的缓冲区 `rec_buffer`，并设置录制时间 `RECORD_TIME`。

  b. 打开 WAV 文件。程序使用 `SD.open()` 函数打开一个 WAV 音频文件，并将其文件名定义为 `WAV_FILE_NAME`。

  c. 写入 WAV 文件头。程序使用 `generate_wav_header()` 函数生成 WAV 音频文件的头信息，并将其写入打开的 WAV 文件中。

  d. 分配内存并开始录制。程序使用 `ps_malloc()` 函数在 ESP32S3 的 PSRAM 中分配一块内存用于存储录制数据，并使用 `esp_i2s::i2s_read()` 函数从麦克风读取音频数据。读取的数据存储在 rec_buffer 缓冲区中。

  e. 增加音量。程序使用由 `VOLUME_GAIN` 常量定义的增益值来增加录制数据的音量。

  f. 将录制数据写入 WAV 文件。程序使用 `file.write()` 函数将录制数据写入打开的 WAV 文件中。

  g. 释放缓冲区内存并关闭 WAV 文件。程序使用 `free()` 函数释放 `rec_buffer` 缓冲区的内存，并使用 `file.close()` 函数关闭打开的 WAV 文件。

- `generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)`：用于生成 WAV 文件头信息的函数。在此函数中，程序根据 WAV 文件的规范生成包含 WAV 文件头信息的字节数组。

  a. 定义 WAV 文件头信息的常量。程序定义了一个包含 WAV 文件头信息的字节数组 `set_wav_header`，并定义了 WAV 文件规范的常量，包括 `NUM_CHANNELS`、`BITS_PER_SAMPLE`、`WAV_HEADER_SIZE` 和 `SUB_CHUNK_SIZE`。

  b. 设置 WAV 文件头信息。程序使用步骤 a 中定义的常量设置 WAV 文件头信息，并根据 WAV 文件的规范计算一些字段的值，包括 `AUDIO_FORMAT`、`BYTE_RATE`、`BLOCK_ALIGN`、`SAMPLES_PER_CHANNEL` 和 `CHUNK_SIZE`。计算出的值存储在 `set_wav_header` 字节数组中。

  c. 复制 WAV 文件头信息。程序将存储在 `set_wav_header` 中的头信息复制到字节数组 `wav_header` 中。

## 故障排除

### 为什么无法播放录制的音频文件？

如果您遇到无法播放的情况，请检查串口监视器打印的调试信息中是否有关于读写卡的错误消息。如果有，请更换 microSD 卡或检查卡和扩展板连接是否松动或不稳定。如果卡没有问题，那么音频文件应该有大小，如果录制有问题，可能会显示录制的音频文件大小只有 0KB。

例如，在下图中，读写卡存在问题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/103.png" style={{width:600, height:'auto'}}/></div>

如果卡没有问题且录制相当成功。那么您需要检查软件是否支持 WAV 格式的音频播放。我们建议使用专门的音乐播放软件来播放音频，尽量不要使用视频播放器来播放。经过实际测试，有许多视频播放器（虽然它们支持 WAV 格式）无法播放。


## 技术支持与产品讨论

.

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>