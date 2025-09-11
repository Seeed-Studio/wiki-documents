---
description: この記事では、XIAO ESP32S3 Sense拡張ボードのマイクロフォンの使用方法について説明します。
title: Senseバージョンのマイクロフォン使用方法
keywords:
- Template
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_sense_mic
last_update:
  date: 04/14/2023
  author: Citric
---

# Seeed Studio XIAO ESP32S3 マイクロフォンの使用方法

このチュートリアルでは、XIAO ESP32S3 Sense拡張ボードのマイクロフォンの使用方法をご紹介します。まず、I2Sピンの基本的な使用方法から始めます。I2Sとマイクロフォンを使用して現在の環境の音量を取得し、シリアル波形グラフに表示します。次に、音声を録音し、録音した音声をSDカードに保存する方法について説明します。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::caution
このチュートリアルのすべての内容は、XIAO ESP32S3 Senseのみに適用されます。
:::

## はじめに

チュートリアルの内容を開始する前に、以下のハードウェアとソフトウェアを事前に準備する必要があります。

### 拡張ボードの取り付け（Sense用）

拡張ボードの取り付けは非常に簡単です。拡張ボードのコネクタをXIAO ESP32S3のB2Bコネクタに合わせ、しっかりと押し込んで「カチッ」という音が聞こえれば、取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### microSDカードの準備

録音を保存するプロジェクトに取り組む際には、MicroSDカードが必要になる場合があります。

XIAO ESP32S3 Senseは最大**32GB**のmicroSDカードをサポートしているため、XIAOのためにmicroSDカードを購入する予定がある場合は、この仕様を参考にしてください。microSDカードを使用する前に、**FAT32**形式でフォーマットしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

フォーマット後、microSDカードをmicroSDカードスロットに挿入できます。挿入方向にご注意ください。金色の端子がある面を内側に向けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

## 音の大きさの検出

最初のプロジェクト事例として、環境内の騒音を検出し、Arduino IDEのシリアルポート波形グラフを使用して、マイクロフォンで検出された環境の音量を表示してみましょう。

以下が完全なサンプルプログラムです。

:::tip
使用している`esp32`のバージョンを確認してください。以下の例は2.0.x用で、下記は3.0.x以降用です。
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
上記の例は `esp32` の 2.0.x でのみ互換性があります。最新版（例：3.0.x）を使用している場合は、以下のものを使用してください
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

このプログラムをXIAO ESP32S3 Senseにアップロードし、**Serial Plotter**を開くと、音の音量変化曲線が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/83.png" style={{width:600, height:'auto'}}/></div>

### プログラムの注釈

プログラムの開始時に、マイクロフォンピンを使用するために、まずI2Sライブラリをインポートする必要があります。

```c
#include <I2S.h>
```

`setAllPins()` 関数は I2S オブジェクトに対して呼び出され、I2S インターフェースで使用されるピンを設定します。この関数は 5 つの整数パラメータを受け取り、それぞれ I2S インターフェースのビットクロック、ワードセレクト、データ入力、データ出力、チャンネルセレクトラインに接続された GPIO ピンを表します。

```c
I2S.setAllPins(-1, 42, 41, -1, -1);
```

このコードでは、`-1` の値は対応するピンが使用されていないことを示し、`42` と `41` の値はそれぞれワード選択とデータ入力ラインに接続されたGPIOピンを表しています。データ出力とチャンネル選択ラインはこの構成では使用されず、`-1` に設定されています。

```c
if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
}
```

`begin()` 関数は I2S オブジェクトに対して呼び出され、指定されたパラメータで I2S インターフェースを初期化します：`PDM_MONO_MODE`、`16000` Hz サンプリングレート、および `16-bit` 解像度。

:::tip
現在の ESP32-S3 チップでは、`PDM_MONO_MODE` のみ使用可能で、サンプリングビット幅は `16bit` のみ対応していることに注意してください。サンプリングレートのみ変更可能ですが、テストの結果、16kHz でのサンプリングレートが比較的安定しています。
:::

```c
int sample = I2S.read();

if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
}
```

`read()` 関数は I2S オブジェクトに対して呼び出され、I2S インターフェースから単一のオーディオサンプルを読み取ります。if 文は sample 変数の値をチェックします。sample 値が 0、-1、または 1 でない場合、それは有効なオーディオサンプルと見なされ、if ブロック内のコードが実行されます。この場合、sample 値は `Serial.println()` 関数を使用してシリアルコンソールに出力されます。

## 録音した音声を microSD カードに保存する

この次のプロジェクトでは、microSD カードの機能を組み合わせて、録音した音声を microSD カードに保存する方法をガイドします。このプロジェクトでは、microSD カードを準備し、事前に **FAT32** 形式でフォーマットしてください。

XIAO ESP32S3 で microSD カードを初めて使用する場合は、[ファイルシステム Wiki](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/#prepare-the-microsd-card) の内容を読んで、microSD カードのインストールと準備について学ぶことができます。

以下は、このプロジェクトの Arduino プログラムです。
:::tip
使用している `esp32` のバージョンを確認してください。以下の例は 2.0.x 用で、下記は 3.0.x 以降用です
:::

```cpp
/* 
 * WAV Recorder for Seeed XIAO ESP32S3 Sense 
*/

#include <I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// make changes as needed
#define RECORD_TIME   20  // seconds, The maximum value is 240
#define WAV_FILE_NAME "arduino_rec"

// do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2

void setup() {
  Serial.begin(115200);
  while (!Serial) ;
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }
  if(!SD.begin(21)){
    Serial.println("Failed to mount SD Card!");
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
  Serial.printf("Ready to start recording ...\n");

  File file = SD.open("/"WAV_FILE_NAME".wav", FILE_WRITE);
  // Write the header to the WAV file
  uint8_t wav_header[WAV_HEADER_SIZE];
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  file.write(wav_header, WAV_HEADER_SIZE);

  // PSRAM malloc for recording
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("malloc failed!\n");
    while(1) ;
  }
  Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());

  // Start recording
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("Record Failed!\n");
  } else {
    Serial.printf("Record %d bytes\n", sample_size);
  }

  // Increase volume
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // Write data to the WAV file
  Serial.printf("Writing to the file ...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("Write file Failed!\n");

  free(rec_buffer);
  file.close();
  Serial.printf("The recording is over.\n");
}

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}
```

:::tip
上記の例は `esp32` の 2.0.x でのみ互換性があります。最新版（例：3.0.x）を使用している場合は、以下のものを使用してください
:::

```cpp
#include "ESP_I2S.h"
#include "FS.h"
#include "SD.h"

void setup() {
  // Create an instance of the I2SClass
  I2SClass i2s;

  // Create variables to store the audio data
  uint8_t *wav_buffer;
  size_t wav_size;

  // Initialize the serial port
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  Serial.println("Initializing I2S bus...");

  // Set up the pins used for audio input
  i2s.setPinsPdmRx(42, 41);

  // start I2S at 16 kHz with 16-bits per sample
  if (!i2s.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }

  Serial.println("I2S bus initialized.");
  Serial.println("Initializing SD card...");

  // Set up the pins used for SD card access
  if(!SD.begin(21)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  Serial.println("SD card initialized.");
  Serial.println("Recording 20 seconds of audio data...");

  // Record 20 seconds of audio data
  wav_buffer = i2s.recordWAV(20, &wav_size);

  // Create a file on the SD card
  File file = SD.open("/arduinor_rec.wav", FILE_WRITE);
  if (!file) {
    Serial.println("Failed to open file for writing!");
    return;
  }

  Serial.println("Writing audio data to file...");

  // Write the audio data to the file
  if (file.write(wav_buffer, wav_size) != wav_size) {
    Serial.println("Failed to write audio data to file!");
    return;
  }

  // Close the file
  file.close();

  Serial.println("Application complete.");
}

void loop() {
  delay(1000);
  Serial.printf(".");
}
```

この例を実行するには、ESP-32チップのPSRAM機能を使用する必要があるため、アップロード前にオンにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>

このプログラムは、ユーザーが**シリアルモニターをオンにした**後に一度だけ実行され、20秒間録音してmicroSDカードに録音ファイルを「arduino_rec.wav」として保存します。

シリアルモニターで「.」が1秒ごとに出力されると、プログラムの実行が完了し、カードリーダーを使用して録音されたサウンドファイルを再生できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/102.png" style={{width:700, height:'auto'}}/></div>

:::tip
XIAO ESP32S3から録音されたオーディオを再生するには、WAV形式をサポートするオーディオプレーヤーを使用する必要がある場合があります。
:::

### プログラムの注釈

このプログラムでは、録音機能のために2つの関数を記述しました。1つは`record_wav()`で、もう1つは`generate_wav_header()`です。

- `record_wav()`: 録音機能。この関数では、プログラムはI2Sインターフェースを使用してマイクからオーディオデータを読み取り、WAVオーディオファイルとしてSDカードに保存します。

  a. 変数を初期化します。プログラムは録音データを保存するためのバッファ`rec_buffer`を定義し、録音時間`RECORD_TIME`を設定します。

  b. WAVファイルを開きます。プログラムは`SD.open()`関数を使用してWAVオーディオファイルを開き、そのファイル名を`WAV_FILE_NAME`として定義します。

  c. WAVファイルヘッダーを書き込みます。プログラムは`generate_wav_header()`関数を使用してWAVオーディオファイルのヘッダー情報を生成し、開いたWAVファイルに書き込みます。

  d. メモリを割り当てて録音を開始します。プログラムは`ps_malloc()`関数を使用してESP32S3のPSRAMに録音データを保存するためのメモリブロックを割り当て、`esp_i2s::i2s_read()`関数を使用してマイクからオーディオデータを読み取ります。読み取られたデータはrec_bufferバッファに保存されます。

  e. 音量を上げます。プログラムは`VOLUME_GAIN`定数で定義されたゲイン値を使用して、録音データの音量を上げます。

  f. 録音データをWAVファイルに書き込みます。プログラムは`file.write()`関数を使用して、録音データを開いたWAVファイルに書き込みます。

  g. バッファメモリを解放してWAVファイルを閉じます。プログラムは`free()`関数を使用して`rec_buffer`バッファのメモリを解放し、`file.close()`関数を使用して開いたWAVファイルを閉じます。

- `generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)`: WAVファイルのヘッダー情報を生成する関数。この関数では、プログラムはWAVファイルの仕様に基づいて、WAVファイルのヘッダー情報を含むバイト配列を生成します。

  a. WAVファイルヘッダー情報の定数を定義します。プログラムはWAVファイルのヘッダー情報を含むバイト配列`set_wav_header`を定義し、`NUM_CHANNELS`、`BITS_PER_SAMPLE`、`WAV_HEADER_SIZE`、`SUB_CHUNK_SIZE`を含むWAVファイルの仕様の定数を定義します。

  b. WAVファイルヘッダー情報を設定します。プログラムはステップaで定義された定数を使用してWAVファイルヘッダー情報を設定し、WAVファイルの仕様に基づいて`AUDIO_FORMAT`、`BYTE_RATE`、`BLOCK_ALIGN`、`SAMPLES_PER_CHANNEL`、`CHUNK_SIZE`を含むいくつかのフィールドの値を計算します。計算された値は`set_wav_header`バイト配列に保存されます。

  c. WAVファイルヘッダー情報をコピーします。プログラムは`set_wav_header`に保存されたヘッダー情報をバイト配列`wav_header`にコピーします。

## トラブルシューティング

### 録音したオーディオファイルが再生できないのはなぜですか？

再生できない状況に遭遇した場合は、シリアルモニターが出力するデバッグ情報を確認し、カードの読み書きに関するエラーメッセージがないかチェックしてください。エラーがある場合は、microSDカードを交換するか、カードと拡張ボードの接続が緩んでいたり不安定でないかを確認してください。カードに問題がない場合は、オーディオファイルのサイズを確認してください。録音に問題がある場合、録音されたオーディオファイルのサイズが0KBのみと表示される可能性があります。

例えば、下図のように、カードの読み書きに問題がある場合です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/103.png" style={{width:600, height:'auto'}}/></div>

カードに問題がなく、録音が正常に成功している場合は、ソフトウェアがWAV形式のオーディオ再生をサポートしているかを確認する必要があります。専用の音楽再生ソフトウェアを使用してオーディオを再生することをお勧めします。ビデオプレーヤーでの再生は避けてください。実際のテストの結果、多くのビデオプレーヤー（WAV形式をサポートしているにも関わらず）では再生できないことがあります。

## 技術サポート & 製品ディスカッション

.

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験を可能な限りスムーズにするため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
