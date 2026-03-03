---
description: 播放和录音
title: 播放和录音
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Audio-Play-Record
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# 音频功能

本教程介绍如何使用 ReSpeaker 2-Mic Hat 为 Wio Terminal 设置音频功能。

:::note
请访问 [**音频概述**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Audio-Overview/) 了解 **硬件连接** 方法。
:::

## 从 SD 卡播放音频

此示例使用 ReSpeaker 2-Mic Hat 播放 MicroSD 卡中的音乐文件。

- 您需要为 Wio Terminal 准备一张 MicroSD 卡。

- 将您的音乐文件保存为 **`.wav`** 格式，并保存到 MicroSD 卡中。在此示例中，您需要将音乐文件命名为 `SDTEST2.WAV`。

- 将 MicroSD 卡插入 Wio Terminal，然后将以下代码上传到 Wio Terminal。

- 确保 ReSpeaker 2-Mic 与 Wio Terminal 正确连接，并且 **扬声器已插入 ReSpeaker 2-Mic 上的 JST2.0 扬声器接口**。

您也可以在 [github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_1_03_Playing_Music/Part_1_03_Playing_Music.ino) 页面找到此示例。

:::note
您可以配置 `wm8960.volume(0.7)` 来调整扬声器的音量！此外，您还可以取消注释 `wm8960.outputSelect(HEADPHONE)` 来将音频插孔设置为输出！
:::

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

AudioPlaySdWav           playSdWav1;
AudioOutputI2S           i2s1;
AudioConnection          patchCord1(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord2(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;

void setup() {
  Serial.begin(9600);
  AudioMemory(8);
  while (!Serial) {};
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("Card Mount Failed");
      return;
  }
  delay(1000);
}

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("Start playing");
    playSdWav1.play("SDTEST2.WAV");
    delay(10); // wait for library to parse WAV info
  }
  // do nothing while playing...
}
```

## 录音和播放

此示例使用 ReSpeaker 2-Mic Hat 上的麦克风录制声音，将原始数据存储到 MicroSD 卡中，并通过扬声器播放。

- 您需要为 Wio Terminal 准备一张 MicroSD 卡。

- 将代码上传到 Wio Terminal。

- 按下 Wio Terminal 顶部的**右按钮**（`WIO_KEY_A`），它将开始录音。对着 ReSpeaker 2-Mic Hat 的麦克风说话。它会将录音保存到 MicroSD 卡中，文件名为 `RECORD.WAV`。

:::note
    录音时，按下其他任意两个按钮中的一个即可停止录音。
:::

- 按下 Wio Terminal 顶部的**左按钮**（`WIO_KEY_C`），它将播放刚刚录制的 `RECORD.WAV`。

- 按下 Wio Terminal 顶部的**中间按钮**（`WIO_KEY_B`）将停止播放录音。

您也可以在 [github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Recorder/Recorder.ino) 页面找到此示例。

```cpp
// 将声音作为原始数据录制到SD卡，并播放回来。
#include <Bounce.h>
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: 开始自动生成的代码
AudioInputI2S            i2s2;           //xy=105,63
AudioAnalyzePeak         peak1;          //xy=278,108
AudioRecordQueue         queue1;         //xy=281,63
AudioPlaySdRaw           playRaw1;       //xy=302,157
AudioOutputI2S           i2s1;           //xy=470,120
AudioConnection          patchCord1(i2s2, 0, queue1, 0);
AudioConnection          patchCord2(i2s2, 0, peak1, 0);
AudioConnection          patchCord3(playRaw1, 0, i2s1, 0);
AudioConnection          patchCord4(playRaw1, 0, i2s1, 1);

AudioControlWM8960 wm8960;

// GUItool: 结束自动生成的代码
Bounce buttonRecord = Bounce(WIO_KEY_A, 8);
Bounce buttonStop =   Bounce(WIO_KEY_B, 8);  // 8 = 8毫秒防抖时间
Bounce buttonPlay =   Bounce(WIO_KEY_C, 8);

// 音频扩展板上将使用哪个输入？
const int myInput = AUDIO_INPUT_MIC;

// 记住我们正在执行的模式
int mode = 0;  // 0=停止, 1=录制, 2=播放

// 数据录制的文件
File frec;

void setup() {
  Serial.begin(9600);
  // 配置按钮引脚
  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_B, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);

  // 音频连接需要内存，录制队列
  // 使用此内存来缓冲传入的音频。
  AudioMemory(60);

  // 启用音频扩展板，选择输入，并启用输出
  wm8960.enable();
  wm8960.inputSelect(myInput);
  wm8960.volume(1);

  // 初始化SD卡
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("Card Mount Failed");
      return;
  }
}

void loop() {
  // 首先，读取按钮
  buttonRecord.update();
  buttonStop.update();
  buttonPlay.update();

  // 响应按钮按下
  if (buttonRecord.fallingEdge()) {
    Serial.println("Record Button Press");
    if (mode == 2) stopPlaying();
    if (mode == 0) startRecording();
  }
  if (buttonStop.fallingEdge()) {
    Serial.println("Stop Button Press");
    if (mode == 1) stopRecording();
    if (mode == 2) stopPlaying();
  }
  if (buttonPlay.fallingEdge()) {
    Serial.println("Play Button Press");
    if (mode == 1) stopRecording();
    if (mode == 0) startPlaying();
  }

  // 如果我们正在播放或录制，继续...
  if (mode == 1) {
    continueRecording();
  }
  if (mode == 2) {
    continuePlaying();
  }

  // 使用麦克风时，持续调整增益
  if (myInput == AUDIO_INPUT_MIC) adjustMicLevel();
  
}

void startRecording() {
  Serial.println("startRecording");
  if (SD.exists("RECORD.RAW")) {
    // SD库将新数据写入文件末尾，
    // 所以要开始新的录制，必须在写入新数据之前
    // 删除旧文件。
    SD.remove("RECORD.RAW");
  }
  frec = SD.open("RECORD.RAW", FILE_WRITE);
  if (frec) {
    queue1.begin();
    mode = 1;
  }
}

void continueRecording() {
  if (queue1.available() >= 2) {
    byte buffer[512];
    // 从音频库获取2个块并复制
    // 到512字节缓冲区中。Arduino SD库
    // 在使用完整的512字节扇区大小
    // 写入时最高效。
    memcpy(buffer, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    memcpy(buffer+256, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    // 将所有512字节写入SD卡
    elapsedMicros usec = 0;
    frec.write(buffer, 512);
    // 取消注释这些行以查看SD写入
    // 花费的时间。一对音频块每
    // 5802微秒到达一次，所以希望大多数写入
    // 花费的时间远少于5802微秒。有些会花费更多时间，因为
    // SD库还必须写入FAT表
    // 并且SD卡控制器管理介质擦除和
    // 磨损均衡。queue1对象可以缓冲
    // 大约301700微秒的音频，以允许时间
    // 处理偶尔的高SD卡延迟，只要
    // 平均写入时间低于5802微秒。
    Serial.print("SD write, us=");
    Serial.println(usec);
  }
}

void stopRecording() {
  Serial.println("stopRecording");
  queue1.end();
  if (mode == 1) {
    while (queue1.available() > 0) {
      frec.write((byte*)queue1.readBuffer(), 256);
      queue1.freeBuffer();
    }
    frec.close();
  }
  mode = 0;
}

void startPlaying() {
  Serial.println("startPlaying");
  playRaw1.play("RECORD.RAW");
  mode = 2;
}

void continuePlaying() {
  if (!playRaw1.isPlaying()) {
    playRaw1.stop();
    mode = 0;
  }
}

void stopPlaying() {
  Serial.println("stopPlaying");
  if (mode == 2) playRaw1.stop();
  mode = 0;
}

void adjustMicLevel() {
  // TODO: 读取peak1对象并调整sgtl5000_1.micGain()
  // 如果有人让这个工作，请提交github拉取请求 :-)
}
```

## 峰值检测

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detect.gif"/></div>

此示例从 MicroSD 卡播放音乐文件，检测两个声道的峰值并在串口监视器上显示。

- 配置与上面的*从 SD 卡播放音频*相同。

- 上传代码，您应该能够在串口监视器上看到两个声道的峰值，同时音乐通过扬声器播放。

```cpp
#include <Audio.h>
#include <Wire.h>
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: 开始自动生成的代码
AudioPlaySdWav           playSdWav1;     //xy=422,359
AudioAnalyzePeak         peak1;          //xy=611,306
AudioAnalyzePeak         peak2;          //xy=612,396
AudioOutputI2S           i2s1;           //xy=792,365
AudioConnection          patchCord1(playSdWav1, 0, peak1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord3(playSdWav1, 1, peak2, 0);
AudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;
// GUItool: 结束自动生成的代码

void setup() {
  Serial.begin(9600);
  AudioMemory(10);
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("Card Mount Failed");
      return;
  }
  delay(1000);
}

// 为了获得最佳效果，请将您的终端/监视器设置为至少62个字符宽，并尽可能高。
elapsedMillis msecs;

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("Start playing");
    //playSdWav1.play("SDTEST1.WAV");
    playSdWav1.play("SDTEST2.WAV");
    //playSdWav1.play("SDTEST3.WAV");
    //playSdWav1.play("SDTEST4.WAV");
    delay(10); // 等待库解析WAV信息
  }
  
  if (msecs > 40) {
    if (peak1.available() && peak2.available()) {
      msecs = 0;
      float leftNumber = peak1.read();
      float rightNumber = peak2.read();
      int leftPeak = leftNumber * 30.0;
      int rightPeak = rightNumber * 30.0;
      int count;
      for (count=0; count < 30-leftPeak; count++) {
        Serial.print(" ");
      }
      while (count++ < 30) {
        Serial.print("<");
      }
      Serial.print("||");
      for (count=0; count < rightPeak; count++) {
        Serial.print(">");
      }
      while (count++ < 30) {
        Serial.print(" ");
      }
      Serial.print(leftNumber);
      Serial.print(", ");
      Serial.print(rightNumber);
      Serial.println();
    }
  }
}
```

## 使用LCD显示屏播放音频

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio.mp4" type="video/mp4" />
  </video></div>

此示例也从MicroSD卡播放音乐文件，并在Wio Terminal的屏幕上显示两个声道的峰值。

- 配置与上面的*从SD卡播放音频*相同。

- 上传代码，您应该能够在屏幕上看到两个声道的峰值，同时音乐通过扬声器播放。

**注意：** 由于我们将LCD图形与音频库一起使用，工作负载更大。建议在此示例中**超频SAMD51**。在Arduino IDE中，选择**工具** -> **CPU速度** -> **200MHz**。这将提高整体图形性能。

您也可以在[github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_3_03_TFT_Display/Part_3_03_TFT_Display.ino)页面找到此示例。

```cpp
#include <TFT_eSPI.h> // 硬件特定库
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: 开始自动生成的代码
AudioPlaySdWav           playSdWav1;     //xy=512,375
AudioAnalyzePeak         peak2;          //xy=787,543
AudioAnalyzePeak         peak1;          //xy=790,488
AudioOutputI2S           i2s1;           //xy=827,334
AudioConnection          patchCord1(playSdWav1, 0, peak1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord3(playSdWav1, 1, peak2, 0);
AudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;

// GUItool: 结束自动生成的代码
TFT_eSPI tft_e = TFT_eSPI();
TFT_eSprite tft = TFT_eSprite(&tft_e);

void setup() {
  Serial.begin(9600);
  delay(500);

  tft_e.begin();
  tft_e.fillScreen(ILI9341_BLACK);
  tft.createSprite(240, 320);
  tft.fillSprite(TFT_BLACK);
  tft.setTextColor(ILI9341_YELLOW);
  //tft.setTextSize(3);
  tft.setCursor(40, 8);
  tft.println("峰值表");
  
  AudioMemory(10);
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);

  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("存储卡挂载失败");
      return;
  }
  delay(1000);
}

elapsedMillis msecs;

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("开始播放");
    playSdWav1.play("SDTEST2.WAV");
    delay(10); // 等待库解析WAV信息
  }
  
  if (msecs > 15) {
    if (peak1.available() && peak2.available()) {
      msecs = 0;
      float leftNumber = peak1.read();
      float rightNumber = peak2.read();
      Serial.print(leftNumber);
      Serial.print(", ");
      Serial.print(rightNumber);
      Serial.println();

      // 绘制垂直条形图
      int height = leftNumber * 240;
      tft.fillRect(60, 280 - height, 40, height, ILI9341_GREEN);
      tft.fillRect(60, 280 - 240, 40, 240 - height, ILI9341_BLACK);
      height = rightNumber * 240;
      tft.fillRect(140, 280 - height, 40, height, ILI9341_GREEN);
      tft.fillRect(140, 280 - 240, 40, 240 - height, ILI9341_BLACK);
      // 更智能的方法是只重绘改变的部分...

      // 在每个条形图下方绘制数字
      tft.fillRect(60, 284, 40, 16, ILI9341_BLACK);
      tft.setCursor(67, 284);
      tft.print(leftNumber);
      tft.fillRect(140, 284, 40, 16, ILI9341_BLACK);
      tft.setCursor(147, 284);
      tft.print(rightNumber);
      tft.pushSprite(0, 0);
    }
  }
}
```

## 示例演示

### 音频频谱可视化器

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/Audio-Spectrum.mp4" type="video/mp4" />
  </video></div>

这是一个使用音频库的FFT功能来计算和可视化音频频谱的示例。

#### 功能特性

- 音乐的音频频谱

- 按下按钮增加/减少音量

#### 完整代码

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include <TFT_eSPI.h> // 硬件特定库
#include <Bounce.h>

// 要使用的显示尺寸和颜色
const unsigned int matrix_width = 19;
const unsigned int matrix_height = 12;

// 这些参数调整垂直阈值
const float maxLevel = 0.5;      // 1.0 = 最大值，较低值更"敏感"
const float dynamicRange = 10.0; // 要显示的总范围，以分贝为单位
const float linearBlend = 0.4;   // 有用范围是 0 到 0.7

// GUItool: 开始自动生成的代码
AudioPlaySdWav           playSdWav1;     //xy=260,184
AudioMixer4              mixer1;         //xy=505,238
AudioOutputI2S           i2s2;           //xy=701,139
AudioAnalyzeFFT1024      fft1024_1;      //xy=761,235
AudioConnection          patchCord1(playSdWav1, 0, mixer1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s2, 0);
AudioConnection          patchCord3(playSdWav1, 1, mixer1, 1);
AudioConnection          patchCord4(playSdWav1, 1, i2s2, 1);
AudioConnection          patchCord5(mixer1, fft1024_1);
AudioControlWM8960 wm8960;
// GUItool: 结束自动生成的代码

const int lowerFFTBins[] = {0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 45, 53, 63, 74, 87, 102, 119, 138, 160, 186, 216, 250, 289, 334, 385, 444};
const int upperFFTBins[] = {0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 21, 26, 31, 37, 44, 52, 62, 73, 86, 101, 118, 137, 159, 185, 215, 249, 288, 333, 384, 443, 511};
float thresholdVertical[matrix_height];
float thresholdVert[matrix_height];

float level;
unsigned int x, y;
const uint8_t gridSize = 10;
float val = 0.7;

Bounce buttonUp = Bounce(WIO_KEY_A, 8);
Bounce buttonDown =   Bounce(WIO_KEY_C, 8);

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  Serial.begin(115200);
//  while (!Serial);

  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);

  tft.begin();
  tft.fillScreen(TFT_BLACK);
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.drawString("音频频谱可视化器", 10, 10);

  AudioMemory(20);
  computeVerticalLevels();

  for (int i = 0; i < 8; i++) {
    Serial.print("thresholdVertical ");
    Serial.print(i);
    Serial.print(" = ");
    Serial.println(thresholdVertical[i]);
  }
  for (unsigned int j = 0; j < matrix_height; j++) {
    thresholdVert[j] = thresholdVertical[matrix_height - j - 1];
  }
  wm8960.enable();
//  wm8960.outputSelect(HEADPHONE);
  wm8960.volume(val);
  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 16000000UL)) {
    Serial.println("SD卡挂载失败");
    return;
  }
  playSdWav1.play("SDTEST2.WAV");
  delay(20);
  
  fft1024_1.windowFunction(AudioWindowHanning1024);
  
  spr.createSprite(180, 320);
  spr.fillSprite(TFT_BLACK);
  tft.setRotation(2);
}

void loop() {
    buttonUp.update();
    buttonDown.update();
    if (buttonUp.fallingEdge() && val < 1.0) {
        val += 0.1;
    }
    if(buttonDown.fallingEdge() && val >= 0.1) {
        val -= 0.1;
    }
    wm8960.volume(val);
  
    if (fft1024_1.available()) {
        colorRainbow();
        spr.pushSprite(0, 10);
    }
}

void colorRainbow() {
  for (x = 0; x < matrix_width; x++) {
    level = fft1024_1.read(lowerFFTBins[x], upperFFTBins[x]);
    for (y = 0; y < 12; y++) {
      if (level >= thresholdVert[y]) {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, Wheel(y * 24));
        // Serial.println(xy(x, y));
      }
      else {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, TFT_BLACK);
      }
    }
  }
}

// 输入 0 到 255 的值来获取颜色值。
// 颜色是 r - g - b - 回到 r 的过渡。
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if (WheelPos < 85) {
    return color2color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    return color2color(0, WheelPos * 3, 255 - WheelPos * 3);
  } else {
    WheelPos -= 170;
    return color2color(WheelPos * 3, 255 - WheelPos * 3, 0);
  }
}

uint32_t color2color(uint8_t r, uint8_t g, uint8_t b) {
  return ((uint32_t)r << 16) | ((uint32_t)g <<  8) | b;
}

unsigned int xy(unsigned int x, unsigned int y) {
  return x * 8;
}

void computeVerticalLevels() {
  unsigned int y;
  float n, logLevel, linearLevel;

  for (y = 0; y < matrix_height; y++) {
    n = (float)y / (float)(matrix_height - 1);
    logLevel = pow(n * -1.0 * (dynamicRange / 20.0), 10);
    linearLevel = 1.0 - n;
    linearLevel = linearLevel * linearBlend;
    logLevel = logLevel * (1.0 - linearBlend);
    thresholdVertical[y] = (logLevel + linearLevel) * maxLevel;
  }
}
```

### 麦克风频谱可视化器

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/mic-spec.mp4" type="video/mp4" />
  </video></div>

这是一个使用 ReSpeaker 2-Mic Hats 的麦克风和 FFT 计算的示例。

#### 功能特性

- 麦克风的音频频谱

#### 完整代码

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include <TFT_eSPI.h> // 硬件特定库

// 要使用的显示尺寸和颜色
const unsigned int matrix_width = 19;
const unsigned int matrix_height = 12;

// 这些参数调整垂直阈值
const float maxLevel = 0.6;      // 1.0 = 最大值，较低值更"敏感"
const float dynamicRange = 10.0; // 要显示的总范围，以分贝为单位
const float linearBlend = 0.6;   // 有用范围是 0 到 0.7

// GUItool: 开始自动生成的代码
AudioInputI2S            i2s1;           //xy=376,203
AudioMixer4              mixer1;         //xy=608,235
AudioAnalyzeFFT1024      fft1024_1;      //xy=770,200
AudioConnection          patchCord1(i2s1, 0, mixer1, 0);
AudioConnection          patchCord2(i2s1, 1, mixer1, 1);
AudioConnection          patchCord3(mixer1, fft1024_1);
AudioControlWM8960 wm8960;
// GUItool: 结束自动生成的代码

const int lowerFFTBins[] = {0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 45, 53, 63, 74, 87, 102, 119, 138, 160, 186, 216, 250, 289, 334, 385, 444};
const int upperFFTBins[] = {0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 21, 26, 31, 37, 44, 52, 62, 73, 86, 101, 118, 137, 159, 185, 215, 249, 288, 333, 384, 443, 511};
float thresholdVertical[matrix_height];
float thresholdVert[matrix_height];

float level;
unsigned int x, y;
const uint8_t gridSize = 10;

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  Serial.begin(115200);
  //  while (!Serial);

  tft.begin();
  tft.fillScreen(TFT_BLACK);
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.drawString("麦克风频谱可视化器", 20, 10);

  AudioMemory(20);
  computeVerticalLevels();

  for (int i = 0; i < 8; i++) {
    Serial.print("thresholdVertical ");
    Serial.print(i);
    Serial.print(" = ");
    Serial.println(thresholdVertical[i]);
  }
  for (unsigned int j = 0; j < matrix_height; j++) {
    thresholdVert[j] = thresholdVertical[matrix_height - j - 1];
  }
  wm8960.enable();
  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 16000000UL)) {
    Serial.println("SD卡挂载失败");
    return;
  }
  delay(20);

  fft1024_1.windowFunction(AudioWindowHanning1024);

  spr.createSprite(180, 320);
  spr.fillSprite(TFT_BLACK);
  tft.setRotation(2);
}

void loop() {
  if (fft1024_1.available()) {
    colorRainbow();
    spr.pushSprite(0, 10);
  }
}

void colorRainbow() {
  for (x = 0; x < matrix_width; x++) {
    level = fft1024_1.read(lowerFFTBins[x], upperFFTBins[x]);
    for (y = 0; y < 12; y++) {
      if (level >= thresholdVert[y]) {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, Wheel(y * 24));
        // Serial.println(xy(x, y));
      }
      else {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, TFT_BLACK);
      }
    }
  }
}

// 输入 0 到 255 的值来获取颜色值。
// 颜色是 r - g - b - 回到 r 的过渡。
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if (WheelPos < 85) {
    return color2color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    return color2color(0, WheelPos * 3, 255 - WheelPos * 3);
  } else {
    WheelPos -= 170;
    return color2color(WheelPos * 3, 255 - WheelPos * 3, 0);
  }
}

uint32_t color2color(uint8_t r, uint8_t g, uint8_t b) {
  return ((uint32_t)r << 16) | ((uint32_t)g <<  8) | b;
}

unsigned int xy(unsigned int x, unsigned int y) {
  return x * 8;
}

void computeVerticalLevels() {
  unsigned int y;
  float n, logLevel, linearLevel;

  for (y = 0; y < matrix_height; y++) {
    n = (float)y / (float)(matrix_height - 1);
    logLevel = pow(n * -1.0 * (dynamicRange / 20.0), 10);
    linearLevel = 1.0 - n;
    linearLevel = linearLevel * linearBlend;
    logLevel = logLevel * (1.0 - linearBlend);
    thresholdVertical[y] = (logLevel + linearLevel) * maxLevel;
  }
}
```

### 实时录制和播放

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play.mp4" type="video/mp4" />
  </video></div>

这是一个实时录制和播放的示例。

#### 功能特性

- 实时录制和播放

#### 完整代码

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioInputI2S            i2s1;           //xy=274,186
AudioRecordQueue         queue1;         //xy=550,172
AudioPlayQueue           queue2;         //xy=550,220
AudioOutputI2S           i2s2;           //xy=769,208
AudioConnection          patchCord1(i2s1, 0, queue1, 0);
AudioConnection          patchCord2(queue2, 0, i2s2, 0);
AudioConnection          patchCord3(queue2, 0, i2s2, 1);
AudioControlWM8960 wm8960;
// GUItool: end automatically generated code

const int myInput = AUDIO_INPUT_MIC;

void setup() {
  Serial.begin(9600);
//  while (!Serial);
  AudioMemory(20);
  wm8960.enable();
  wm8960.inputSelect(myInput);
  wm8960.volume(0.9);
  //  wm8960.outputSelect(HEADPHONE);
  queue1.begin();
}

void loop() {
  if (queue1.available() >= 2)
  {
    // Recording buffer
    byte buffer[256];
    memcpy(buffer, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    // Playing buffer
    queue2.getBuffer();
    queue2.playBuffer();
  }
}
```