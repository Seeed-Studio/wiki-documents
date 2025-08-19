---
description: この記事では、XIAO ESP32S3 Sense拡張ボードのマイクの使用方法について説明します。
title: Senseバージョンのマイク使用方法
keywords:
- テンプレート
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_sense_mic
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32S3 マイクの使用方法

このチュートリアルでは、XIAO ESP32S3 Sense拡張ボードのマイクの使用方法を紹介します。まず、I2Sピンの基本的な使用方法を説明し、I2Sとマイクを使用して現在の環境の音量を取得し、シリアル波形グラフに表示します。その後、音声を録音し、録音した音声をSDカードに保存する方法を説明します。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::caution
このチュートリアルの内容は、XIAO ESP32S3 Sense専用です。
:::

## はじめに

チュートリアルの内容を始める前に、以下のハードウェアとソフトウェアを事前に準備する必要があります。

### 拡張ボードの取り付け（Sense用）

拡張ボードの取り付けは非常に簡単です。拡張ボードのコネクタをXIAO ESP32S3のB2Bコネクタに合わせて押し込み、「カチッ」という音が聞こえたら取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### microSDカードの準備

録音を保存するプロジェクトを行う場合、MicroSDカードが必要になることがあります。

XIAO ESP32S3 Senseは最大**32GB**のmicroSDカードをサポートしています。そのため、XIAO用にmicroSDカードを購入する場合は、この仕様を参考にしてください。また、microSDカードを使用する前に**FAT32**形式にフォーマットしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

フォーマット後、microSDカードをmicroSDカードスロットに挿入できます。挿入方向に注意してください。金色の端子が内側を向くようにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

## 音量の検出

最初のプロジェクトケースとして、環境のノイズを検出し、Arduino IDEのシリアルポート波形グラフを使用してマイクが検出した環境音量を表示します。

以下は完全なサンプルプログラムです。

:::tip
使用している`esp32`のバージョンを確認してください。以下の例は2.0.x用で、3.0.x以降の場合は次の例を使用してください。
:::

```cpp
#include <I2S.h>

void setup() {
  // シリアル通信を開始し、ポートが開くのを待つ
  // ネイティブUSBポート以外では、データレートを速くするために9600ではなく115200のボーレートを使用
  Serial.begin(115200);
  while (!Serial) {
    ; // ネイティブUSBポートのみでシリアルポート接続を待つ
  }

  // I2Sを16kHz、16ビット/サンプルで開始
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("I2Sの初期化に失敗しました！");
    while (1); // 何もしない
  }
}

void loop() {
  // サンプルを読み取る
  int sample = I2S.read();

  if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
  }
}
```

:::tip
上記の例は`esp32`の2.0.xにのみ対応しています。最新バージョン（例：3.0.x）の場合は以下を使用してください。
:::

```cpp
#include <ESP_I2S.h>
I2SClass I2S;

void setup() {
  // シリアル通信を開始し、ポートが開くのを待つ
  // ネイティブUSBポート以外では、データレートを速くするために9600ではなく115200のボーレートを使用
  Serial.begin(115200);
  while (!Serial) {
    ; // ネイティブUSBポートのみでシリアルポート接続を待つ
  }

  // 42番ピンをPDMクロック、41番ピンをPDMデータピンとして設定
  I2S.setPinsPdmRx(42, 41);

  // I2Sを16kHz、16ビット/サンプルで開始
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("I2Sの初期化に失敗しました！");
    while (1); // 何もしない
  }
}

void loop() {
  // サンプルを読み取る
  int sample = I2S.read();

  if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
  }
}
```

このプログラムをXIAO ESP32S3 Senseにアップロードし、**シリアルプロッタ**を開くと、音量の変化曲線が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/83.png" style={{width:600, height:'auto'}}/></div>

### プログラムの注釈

プログラムの冒頭で、マイクピンを使用するためにI2Sライブラリをインポートする必要があります。

```c
#include <I2S.h>
```

`setAllPins()`関数は、I2Sインターフェースで使用されるピンを設定するためにI2Sオブジェクトで呼び出されます。この関数は、ビットクロック、ワードセレクト、データ入力、データ出力、およびチャネルセレクトラインに接続されたGPIOピンを表す5つの整数パラメータを取ります。

```c
I2S.setAllPins(-1, 42, 41, -1, -1);
```

このコードでは、`-1`の値は対応するピンが使用されていないことを示し、`42`と`41`の値はそれぞれワードセレクトとデータ入力ラインに接続されたGPIOピンを表します。この構成では、データ出力とチャネルセレクトラインは使用されず、`-1`に設定されています。

```c
if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("I2Sの初期化に失敗しました！");
    while (1); // 何もしない
}
```

`begin()` 関数は、指定されたパラメータ（`PDM_MONO_MODE`、`16000` Hz のサンプルレート、`16-bit` の解像度）を使用して I2S インターフェースを初期化するために I2S オブジェクトで呼び出されます。

:::tip
現在の ESP32-S3 チップでは、`PDM_MONO_MODE` のみ使用可能であり、サンプリングビット幅は `16bit` のみです。サンプリングレートのみ変更可能ですが、テストの結果、16kHz のサンプリングレートが比較的安定しています。
:::

```c
int sample = I2S.read();

if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
}
```

`read()` 関数は、I2S オブジェクトで呼び出され、I2S インターフェースから単一のオーディオサンプルを読み取ります。`if` 文は `sample` 変数の値をチェックします。`sample` の値が 0、-1、または 1 でない場合、それは有効なオーディオサンプルと見なされ、`if` ブロック内のコードが実行されます。この場合、`Serial.println()` 関数を使用してサンプル値がシリアルコンソールに出力されます。

## 録音した音声を microSD カードに保存する

次のプロジェクトでは、microSD カードの機能を組み合わせて録音した音声を microSD カードに保存する方法を説明します。このプロジェクトのために、microSD カードを準備し、事前に **FAT32** フォーマットでフォーマットしてください。

初めて XIAO ESP32S3 で microSD カードを使用する場合は、microSD カードのインストールと準備について学ぶために [ファイルシステム Wiki](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem/#prepare-the-microsd-card) の内容を読むことをお勧めします。

以下は、このプロジェクトの Arduino プログラムです。
:::tip
使用している `esp32` のバージョンを確認してください。以下の例は 2.0.x 用であり、3.0.x 以降の場合は後述の例を使用してください。
:::

```cpp
/* 
 * Seeed XIAO ESP32S3 Sense 用 WAV レコーダー
*/

#include <I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 必要に応じて変更
#define RECORD_TIME   20  // 秒, 最大値は 240
#define WAV_FILE_NAME "arduino_rec"

// 最適な設定のため変更しない
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2

void setup() {
  Serial.begin(115200);
  while (!Serial) ;
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("I2S の初期化に失敗しました!");
    while (1) ;
  }
  if(!SD.begin(21)){
    Serial.println("SD カードのマウントに失敗しました!");
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
  Serial.printf("録音の準備ができました...\n");

  File file = SD.open("/"WAV_FILE_NAME".wav", FILE_WRITE);
  // WAV ファイルにヘッダーを書き込む
  uint8_t wav_header[WAV_HEADER_SIZE];
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  file.write(wav_header, WAV_HEADER_SIZE);

  // PSRAM を使用して録音用メモリを確保
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("メモリ確保に失敗しました!\n");
    while(1) ;
  }
  Serial.printf("バッファ: %d バイト\n", ESP.getPsramSize() - ESP.getFreePsram());

  // 録音開始
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("録音に失敗しました!\n");
  } else {
    Serial.printf("録音 %d バイト\n", sample_size);
  }

  // 音量を増加
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // WAV ファイルにデータを書き込む
  Serial.printf("ファイルに書き込み中...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("ファイル書き込みに失敗しました!\n");

  free(rec_buffer);
  file.close();
  Serial.printf("録音が終了しました。\n");
}

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (PCM の場合は 16)
    0x01, 0x00, // AudioFormat (PCM の場合は 1)
    0x01, 0x00, // NumChannels (1 チャンネル)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 ビット)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}
```

:::tip
上記の例は `esp32` の 2.0.x にのみ対応しています。最新バージョン（例: 3.0.x）の場合は以下を使用してください。
:::

```cpp
#include "ESP_I2S.h"
#include "FS.h"
#include "SD.h"

void setup() {
  // I2SClass のインスタンスを作成
  I2SClass i2s;

  // オーディオデータを保存する変数を作成
  uint8_t *wav_buffer;
  size_t wav_size;

  // シリアルポートを初期化
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  Serial.println("I2S バスを初期化中...");

  // オーディオ入力に使用するピンを設定
  i2s.setPinsPdmRx(42, 41);

  // I2S を 16 kHz、16 ビットサンプルで開始
  if (!i2s.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("I2S の初期化に失敗しました!");
    while (1); // 何もしない
  }

  Serial.println("I2S バスが初期化されました。");
  Serial.println("SD カードを初期化中...");

  // SD カードアクセスに使用するピンを設定
  if(!SD.begin(21)){
    Serial.println("SD カードのマウントに失敗しました!");
    while (1) ;
  }
  Serial.println("SD カードが初期化されました。");
  Serial.println("20 秒間のオーディオデータを録音中...");

  // 20 秒間のオーディオデータを録音
  wav_buffer = i2s.recordWAV(20, &wav_size);

  // SD カードにファイルを作成
  File file = SD.open("/arduinor_rec.wav", FILE_WRITE);
  if (!file) {
    Serial.println("ファイルの書き込み用オープンに失敗しました!");
    return;
  }

  Serial.println("オーディオデータをファイルに書き込み中...");

  // ファイルにオーディオデータを書き込む
  if (file.write(wav_buffer, wav_size) != wav_size) {
    Serial.println("ファイルへのオーディオデータ書き込みに失敗しました!");
    return;
  }

  // ファイルを閉じる
  file.close();

  Serial.println("アプリケーションが完了しました。");
}

void loop() {
  delay(1000);
  Serial.printf(".");
}
```

この例を実行するには、ESP-32チップのPSRAM機能を使用する必要がありますので、アップロードする前に必ず有効にしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>

このプログラムは、ユーザーが**シリアルモニターをオンにした後**に一度だけ実行され、20秒間録音を行い、録音ファイルをmicroSDカードに「arduino_rec.wav」として保存します。

シリアルモニターで1秒ごとに「.」が出力されると、プログラムの実行が終了し、カードリーダーを使用して録音された音声ファイルを再生することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/102.png" style={{width:700, height:'auto'}}/></div>

:::tip
XIAO ESP32S3で録音した音声を再生するには、WAV形式をサポートするオーディオプレーヤーを使用する必要があります。
:::

### プログラムの注釈

このプログラムでは、録音機能のために2つの関数を記述しています。一つは`record_wav()`、もう一つは`generate_wav_header()`です。

- `record_wav()`：録音機能。この関数では、プログラムがI2Sインターフェースを使用してマイクから音声データを読み取り、SDカードにWAV音声ファイルとして保存します。

  a. 変数の初期化。プログラムは録音データを保存するためのバッファ`rec_buffer`を定義し、録音時間`RECORD_TIME`を設定します。

  b. WAVファイルを開く。プログラムは`SD.open()`関数を使用してWAV音声ファイルを開き、そのファイル名を`WAV_FILE_NAME`として定義します。

  c. WAVファイルヘッダーを書き込む。プログラムは`generate_wav_header()`関数を使用してWAV音声ファイルのヘッダー情報を生成し、開いたWAVファイルに書き込みます。

  d. メモリを割り当てて録音を開始する。プログラムは`ps_malloc()`関数を使用してESP32S3のPSRAMに録音データを保存するためのメモリブロックを割り当て、`esp_i2s::i2s_read()`関数を使用してマイクから音声データを読み取ります。読み取ったデータは`rec_buffer`バッファに保存されます。

  e. 音量を増加させる。プログラムは`VOLUME_GAIN`定数で定義されたゲイン値を使用して録音データの音量を増加させます。

  f. 録音データをWAVファイルに書き込む。プログラムは`file.write()`関数を使用して録音データを開いたWAVファイルに書き込みます。

  g. バッファメモリを解放してWAVファイルを閉じる。プログラムは`free()`関数を使用して`rec_buffer`バッファのメモリを解放し、`file.close()`関数を使用して開いたWAVファイルを閉じます。

- `generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)`：WAVファイルのヘッダー情報を生成する関数。この関数では、プログラムがWAVファイルの仕様に基づいてヘッダー情報を含むバイト配列を生成します。

  a. WAVファイルヘッダー情報の定数を定義する。プログラムはWAVファイルのヘッダー情報を含むバイト配列`set_wav_header`を定義し、`NUM_CHANNELS`、`BITS_PER_SAMPLE`、`WAV_HEADER_SIZE`、`SUB_CHUNK_SIZE`などのWAVファイルの仕様に関する定数を定義します。

  b. WAVファイルヘッダー情報を設定する。プログラムはステップaで定義された定数を使用してWAVファイルヘッダー情報を設定し、`AUDIO_FORMAT`、`BYTE_RATE`、`BLOCK_ALIGN`、`SAMPLES_PER_CHANNEL`、`CHUNK_SIZE`などのフィールドの値をWAVファイルの仕様に基づいて計算します。計算された値は`set_wav_header`バイト配列に保存されます。

  c. WAVファイルヘッダー情報をコピーする。プログラムは`set_wav_header`に保存されたヘッダー情報をバイト配列`wav_header`にコピーします。

## トラブルシューティング

### 録音した音声ファイルが再生できないのはなぜですか？

録音した音声ファイルが再生できない場合、まずシリアルモニターに表示されるデバッグ情報を確認し、カードの読み書きに関するエラーメッセージがあるかどうかをチェックしてください。エラーメッセージがある場合は、microSDカードを交換するか、カードと拡張ボードの接続が緩んでいる、または不安定でないか確認してください。カードに問題がない場合、音声ファイルのサイズを確認してください。録音に問題がある場合、録音された音声ファイルのサイズが0KBと表示されることがあります。

例えば、以下の図ではカードの読み書きに問題があることが示されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/103.png" style={{width:600, height:'auto'}}/></div>

カードに問題がなく、録音が正常に行われている場合は、ソフトウェアがWAV形式の音声再生をサポートしているか確認する必要があります。音声を再生する際には、専用の音楽再生ソフトウェアを使用することをお勧めします。ビデオプレーヤーを使用して再生することは避けてください。実際のテストでは、多くのビデオプレーヤー（WAV形式をサポートしている場合でも）が再生できないことが確認されています。



## 技術サポートと製品に関するディスカッション

.

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>