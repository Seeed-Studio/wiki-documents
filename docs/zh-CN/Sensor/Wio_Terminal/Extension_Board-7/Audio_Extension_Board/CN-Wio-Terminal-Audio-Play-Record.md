---
description:  演示和音频
title:  演示和音频
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Audio-Play-Record
last_update:
  date: 3/04/2024
  author: 金菊
---

# 音频功能

本文介绍如何使用ReSpeaker 2-Mic Hats为Wio Terminal设置音频。

:::注
有关**硬件连接**，请访问 [**音频概述**](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Overview/) 。
:::

## 从SD卡播放音频

此示例演示如何使用ReSpeaker 2-Mic Hat从MicroSD卡播放音乐文件。

- 需要一张用于Wio Terminal的MicroSD

- 将音乐文件以  **`.wav`** 格式保存并存储到MicroSD卡中。在本示例中，音乐文件的名称应命名为 `SDTEST2.WAV`。

- 将MicroSD卡插入Wio Terminal，并上传以下代码到Wio Terminal。

- 确保ReSpeaker 2-Mic正确连接到Wio Terminal，并**将扬声器插入ReSpeaker 2-Mic上的JST2.0扬声器引脚**.

您还可以在 [github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_1_03_Playing_Music/Part_1_03_Playing_Music.ino) 页面上找到此示例。

:::注
您可以通过配置 `wm8960.volume(0.7)` 来调整扬声器的音量！此外，您还可以取消注释！ `wm8960.outputSelect(HEADPHONE)` ，将音频插孔作为输出!
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

## 录制声音并播放

此示例使用ReSpeaker 2-Mic Hat上的麦克风录制声音，将原始数据存储到MicroSD卡中，并通过扬声器进行回放。

- 需要一张用于Wio Terminal的MicroSD卡。

- 将代码上传到Wio Terminal。

- 按下Wio Terminal顶部的 **right button** (`WIO_KEY_A`)，它将开始录制。对着ReSpeaker 2-Mic Hat的麦克风说话。它将录音保存到MicroSD卡中，文件名为 `RECORD.WAV`。

:::注
    在录制过程中，按下其他两个按钮中的任意一个按钮即可停止录制。
:::

- 按下Wio Terminal顶部的 **left button** (`WIO_KEY_C`) ，它将播放刚刚录制的。 `RECORD.WAV` 文件。
- 按下Wio Terminal顶部的 **middle button**  (`WIO_KEY_B`) 中间按钮（WIO_KEY_B）将停止播放录音。

您还可以在 [github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Recorder/Recorder.ino) 页面上找到此示例。

```cpp
// Record sound as raw data to a SD card, and play it back.
#include <Bounce.h>
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
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

// GUItool: end automatically generated code
Bounce buttonRecord = Bounce(WIO_KEY_A, 8);
Bounce buttonStop =   Bounce(WIO_KEY_B, 8);  // 8 = 8 ms debounce time
Bounce buttonPlay =   Bounce(WIO_KEY_C, 8);

// which input on the audio shield will be used?
const int myInput = AUDIO_INPUT_MIC;

// Remember which mode we're doing
int mode = 0;  // 0=stopped, 1=recording, 2=playing

// The file where data is recorded
File frec;

void setup() {
  Serial.begin(9600);
  // Configure the pushbutton pins
  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_B, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);

  // Audio connections require memory, and the record queue
  // uses this memory to buffer incoming audio.
  AudioMemory(60);

  // Enable the audio shield, select input, and enable output
  wm8960.enable();
  wm8960.inputSelect(myInput);
  wm8960.volume(1);

  // Initialize the SD card
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("Card Mount Failed");
      return;
  }
}

void loop() {
  // First, read the buttons
  buttonRecord.update();
  buttonStop.update();
  buttonPlay.update();

  // Respond to button presses
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

  // If we're playing or recording, carry on...
  if (mode == 1) {
    continueRecording();
  }
  if (mode == 2) {
    continuePlaying();
  }

  // when using a microphone, continuously adjust gain
  if (myInput == AUDIO_INPUT_MIC) adjustMicLevel();
  
}

void startRecording() {
  Serial.println("startRecording");
  if (SD.exists("RECORD.RAW")) {
    // The SD library writes new data to the end of the
    // file, so to start a new recording, the old file
    // must be deleted before new data is written.
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
    // Fetch 2 blocks from the audio library and copy
    // into a 512 byte buffer.  The Arduino SD library
    // is most efficient when full 512 byte sector size
    // writes are used.
    memcpy(buffer, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    memcpy(buffer+256, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    // write all 512 bytes to the SD card
    elapsedMicros usec = 0;
    frec.write(buffer, 512);
    // Uncomment these lines to see how long SD writes
    // are taking.  A pair of audio blocks arrives every
    // 5802 microseconds, so hopefully most of the writes
    // take well under 5802 us.  Some will take more, as
    // the SD library also must write to the FAT tables
    // and the SD card controller manages media erase and
    // wear leveling.  The queue1 object can buffer
    // approximately 301700 us of audio, to allow time
    // for occasional high SD card latency, as long as
    // the average write time is under 5802 us.
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
  // TODO: read the peak1 object and adjust sgtl5000_1.micGain()
  // if anyone gets this working, please submit a github pull request :-)
}
```

## 峰值检测

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detect.gif"/></div>

此示例从MicroSD卡播放音乐文件，并检测两个声道的峰值，并在串行监视器上显示。

- 与上述 *从SD卡播放音频* 示例相同的配置。

- 上传代码，您应该能够在串行监视器上看到两个声道的峰值，同时音乐通过扬声器播放。

```cpp
#include <Audio.h>
#include <Wire.h>
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=422,359
AudioAnalyzePeak         peak1;          //xy=611,306
AudioAnalyzePeak         peak2;          //xy=612,396
AudioOutputI2S           i2s1;           //xy=792,365
AudioConnection          patchCord1(playSdWav1, 0, peak1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord3(playSdWav1, 1, peak2, 0);
AudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;
// GUItool: end automatically generated code

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

// for best effect make your terminal/monitor a minimum of 62 chars wide and as high as you can.
elapsedMillis msecs;

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("Start playing");
    //playSdWav1.play("SDTEST1.WAV");
    playSdWav1.play("SDTEST2.WAV");
    //playSdWav1.play("SDTEST3.WAV");
    //playSdWav1.play("SDTEST4.WAV");
    delay(10); // wait for library to parse WAV info
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

该示例还从MicroSD卡播放音乐文件，并在Wio Terminal的屏幕上显示两个声道的峰值。

- 与上述*从SD卡播放音频* 示例相同的配置。 

- 上传代码，您应该能够在屏幕上看到两个声道的峰值，同时音乐通过扬声器播放。

**注:** 因为我们在音频库中使用了LCD图形，它的工作量更大。建议在此示例中使用 **超频SAMD51**。在Arduino IDE中，选择**Tools** -> **CPU Speed** -> **200MHz** 这将提高整体图形性能。  

您还可以在 [github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_3_03_TFT_Display/Part_3_03_TFT_Display.ino) 页面上找到此示例。

```cpp
#include <TFT_eSPI.h> // Hardware-specific library
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=512,375
AudioAnalyzePeak         peak2;          //xy=787,543
AudioAnalyzePeak         peak1;          //xy=790,488
AudioOutputI2S           i2s1;           //xy=827,334
AudioConnection          patchCord1(playSdWav1, 0, peak1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord3(playSdWav1, 1, peak2, 0);
AudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;

// GUItool: end automatically generated code
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
  tft.println("Peak Meter");
  
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

elapsedMillis msecs;

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("Start playing");
    playSdWav1.play("SDTEST2.WAV");
    delay(10); // wait for library to parse WAV info
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

      // draw the verticle bars
      int height = leftNumber * 240;
      tft.fillRect(60, 280 - height, 40, height, ILI9341_GREEN);
      tft.fillRect(60, 280 - 240, 40, 240 - height, ILI9341_BLACK);
      height = rightNumber * 240;
      tft.fillRect(140, 280 - height, 40, height, ILI9341_GREEN);
      tft.fillRect(140, 280 - 240, 40, 240 - height, ILI9341_BLACK);
      // a smarter approach would redraw only the changed portion...

      // draw numbers underneath each bar
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

这是一个使用音频库的FFT函数计算和可视化音频频谱的示例。

#### 特点

- 音乐的音频频谱

- 音乐的音频频谱

#### 完整代码

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include <TFT_eSPI.h> // Hardware-specific library
#include <Bounce.h>

// The display size and color to use
const unsigned int matrix_width = 19;
const unsigned int matrix_height = 12;

// These parameters adjust the vertical thresholds
const float maxLevel = 0.5;      // 1.0 = max, lower is more "sensitive"
const float dynamicRange = 10.0; // total range to display, in decibels
const float linearBlend = 0.4;   // useful range is 0 to 0.7

// GUItool: begin automatically generated code
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
// GUItool: end automatically generated code

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
  tft.drawString("Audio Spectrum Visualiser", 10, 10);

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
    Serial.println("Card Mount Failed");
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

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
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

这是一个使用ReSpeaker 2-Mic Hats的麦克风和FFT计算的示例。

#### 特点

- 麦克风的音频频谱

#### 完整代码

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include <TFT_eSPI.h> // Hardware-specific library

// The display size and color to use
const unsigned int matrix_width = 19;
const unsigned int matrix_height = 12;

// These parameters adjust the vertical thresholds
const float maxLevel = 0.6;      // 1.0 = max, lower is more "sensitive"
const float dynamicRange = 10.0; // total range to display, in decibels
const float linearBlend = 0.6;   // useful range is 0 to 0.7

// GUItool: begin automatically generated code
AudioInputI2S            i2s1;           //xy=376,203
AudioMixer4              mixer1;         //xy=608,235
AudioAnalyzeFFT1024      fft1024_1;      //xy=770,200
AudioConnection          patchCord1(i2s1, 0, mixer1, 0);
AudioConnection          patchCord2(i2s1, 1, mixer1, 1);
AudioConnection          patchCord3(mixer1, fft1024_1);
AudioControlWM8960 wm8960;
// GUItool: end automatically generated code

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
  tft.drawString("Mic Spectrum Visualiser", 20, 10);

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
    Serial.println("Card Mount Failed");
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

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
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

### 麦克风的音频频谱

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play.mp4" type="video/mp4" />
  </video></div>

麦克风的音频频谱

#### 特点

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
