---
description: ReSpeaker XVF3800 USB 4-Mic ArrayとXIAO ESP32S3で強力な音声制御を実現。360°音声キャプチャ、ノイズ抑制、Edge Impulse経由のTinyML起動ワード検出機能を搭載—スマートデバイス、ロボティクス、IoTプロジェクトに最適。

title: TinyML音声認識とEdge Impulse

keywords:
- reSpeaker
- XIAO
- ESP32S3
- Edge Impulse
- TinyML
- Speech Recognition
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /ja/respeaker_xvf3800_xiao_edge_impulse
last_update:
  date: 8/7/2025
  author: Kasun Thushara
---

## 概要


TinyMLを活用したキーワードスポッティング（KWS）システムを使用して、リアルタイム音声コマンド検出によるハンズフリー制御を実現します。高性能なReSpeaker XVF3800マイクロフォンアレイと効率的なXIAO ESP32S3、そしてEdge Impulseプラットフォームを組み合わせることで、コンパクトで低消費電力のデバイスに音声認識機能をもたらします。トレーニング、デプロイ、リスニング—あなたのデバイスは常に次のコマンドに対応する準備ができています！

## 必要なハードウェア

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## データ収集 

### ReSpeaker XVF3800とXIAO ESP32S3用USBファームウェアのインストール

音声データ収集を開始するには、ReSpeakerにUSBファームウェアがフラッシュされており、USBマイクロフォンとして機能できることを確認してください。


[**ファームウェアインストールWiki**](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#update-firmware)

[**ファームウェアファイル**](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)

### Python環境のセットアップ

次に、**音声データを収集するためにラップトップまたはPCでpython環境を作成**する必要があります。ここではrespeaker-envを作成します

```bash
python -m venv respeaker-env
source respeaker-env/bin/activate  
```

必要なライブラリをインストール：

```bash
pip install sounddevice scipy numpy 
```

### ReSpeaker デバイス ID を見つける

正しいマイク入力から録音するために、ReSpeaker マイクのデバイスインデックスを特定する必要があります。

```python
import sounddevice as sd

devices = sd.query_devices()
for i, device in enumerate(devices):
    print(f"Device {i}: {device['name']} (input channels: {device['max_input_channels']})")

```

デバイス名でReSpeakerに対応するもの（通常はReSpeaker XVF3800 USB 4-Mic Arrayのような名前）を探し、インデックス番号（例：Device 2）をメモしてください。

### 音声サンプルの録音

以下のスクリプトを使用すると、人物とコマンド/キーワード別に整理されたラベル付き音声サンプルを録音できます。

```python

import os
import sounddevice as sd
from scipy.io.wavfile import write

# === Settings ===
SAMPLERATE = 16000
CHANNELS = 1  # Mono input
DURATION = 10  # seconds
DEVICE_INDEX = 2  # Replace with correct device index

def record_audio(filename, samplerate=SAMPLERATE, channels=CHANNELS, duration=DURATION, device=DEVICE_INDEX):
    print(f"Recording '{filename}' for {duration} seconds...")
    recording = sd.rec(int(duration * samplerate),
                       samplerate=samplerate,
                       channels=channels,
                       dtype='int32',
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

### フォルダ構造の例

```
/PersonA
    ├── red.1.wav
    ├── red.2.wav
    ├── blue.1.wav
    └── blue.2.wav
/PersonB
    ├── red.1.wav
    └── green.1.wav

```

各人のフォルダには、後でモデル訓練のためにEdge Impulseにアップロードされるラベル付きの.wavファイルが含まれています。

## Edge Impulseでのオーディオデータのアップロードと準備

ReSpeaker XVF3800を使用して生のオーディオサンプルを収集し、ラベル別に整理した後、次のステップはキーワードスポッティングモデルの訓練のためにEdge Impulse Studioでそれらをアップロードし、処理することです。

### Edge Impulseで新しいプロジェクトを作成

- [Edge Impulse](https://edgeimpulse.com/)にアクセスしてログインします（新規の場合はサインアップ）。

- 「Create new project」をクリックします。

- プロジェクトの名前を入力します（例：「Voice Command KWS」）

### 既存のオーディオサンプルをアップロード

収集したデータをアップロードするには：

- 1.**Data Acquisition**タブに移動します。
- 2.**「Upload existing data」**（右上）をクリックします。
- 3.フォルダに含まれる.wavファイルを選択してアップロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/edge_impuse/files.png" alt="pir" width={800} height="auto" /></p>

- 4.データを自動的に訓練用とテスト用に分割するオプションを有効にします（Edge Impulseは約80/20の分割を推奨）。

### 10秒のオーディオを1秒のサンプルに分割

Edge Impulseはキーワードスポッティングに1秒のオーディオクリップで最適に動作します。元のサンプルは10秒のセグメントで録音されているため、それぞれを複数の1秒サンプルに分割する必要があります。

**以下の手順に従ってください**：
- 1.アップロード後、**Data Acquisition**ページに移動します。
- 2.サンプル（例：yes.1.wav）を見つけて、サンプルの横にある3つの**ドット（…）**をクリックします。
- 3.メニューから「**Split sample**」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/edge_impuse/split.png" alt="pir" width={800} height="auto" /></p>

- 4.ツールを使用して波形を1秒のセグメントに分割します。
    - a.必要に応じてセグメントを調整したり、追加/削除したりできます。
- 5.Save and Splitをクリックします。

訓練用とテスト用の両方で、すべてのクラスの10秒サンプルごとにこのプロセスを繰り返します。

これにより、データセットが適切にフォーマットされ、高精度モデルの訓練に最適化されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/edge_impuse/split2.png" alt="pir" width={800} height="auto" /></p>

## インパルスの作成（前処理/モデル定義）
 
Edge Impulseの**インパルス**は、生データを訓練済み機械学習モデルに変換するエンドツーエンドのパイプラインを定義します。これには**信号処理**、**特徴抽出**、および分類のための**学習ブロック**が含まれます。

### インパルスの作成

- 1.Edge Impulseプロジェクトの**「Impulse Design」**タブに移動します。
- 2.**「Create Impulse」**をクリックします。
- 3.入力ウィンドウを設定します：
    - a.**Window size**: 1000 ms（1秒）
    - b.**Window increase**: 500 ms（データを増強するためのオーバーラップウィンドウ）
    - c.**「Zero-pad data」を有効にする**: これにより、短いセグメント（例：800ms）がゼロでパディングされ、サンプル分割時にノイズトリミングが適用される場合に特に有用です。

### MFCC特徴抽出器の追加

インパルスウィンドウを作成した後：

- 1.**「Add a processing block」**をクリックして**MFCC（Mel Frequency Cepstral Coefficients）**を選択します。
    - a.MFCCは、オーディオ信号を音声周波数パターンを表す2D特徴に変換するために広く使用される方法です。
    - b.これらの特徴は音声ベースの認識モデルに最適です。
- 2.MFCCパラメータを設定します（デフォルトはほとんどの場合でうまく動作します）：
    - a.出力形状: 13 x 49 x 1
    - b.これにより、オーディオクリップが分類用の「画像」に変換されます。

### 学習ブロックの追加

- 1.**「Add a learning block」**をクリックして**「Classification (Keras)」**を選択します。
- 2.これにより、MFCC特徴に対して**画像分類**を実行するカスタム**畳み込みニューラルネットワーク（CNN）**が作成されます。
- 3.これで**NN Classifier**タブに進んで、モデルをカスタマイズし、訓練することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/edge_impuse/impulse.png" alt="pir" width={800} height="auto" /></p>

## 前処理（MFCC）

次のステップは、録音された音声からスペクトログラム画像を生成することです。これらの画像はモデルの訓練に使用されます。デフォルトのDSPパラメータを使用することもできますが、今回のケースでは、DSP Autotuneフィーチャーを活用して、より良いパフォーマンスのために自動的に最適化します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/edge_impuse/mfcc.png" alt="pir" width={800} height="auto" /></p>

## 機械学習モデルの構築

このプロジェクトでは、畳み込みニューラルネットワーク（CNN）モデルを使用します。アーキテクチャは、それぞれ8個と16個のフィルターを持つ2つのConv1D + MaxPooling層で構成され、その後に0.25のDropout層が続きます。フラット化後、最終的な密結合層には4つのニューロンが含まれており、各クラスに1つずつ対応しています。
学習率0.005で100エポックにわたってモデルを訓練します。汎化性能と堅牢性を向上させるため、背景ノイズなどのデータ拡張技術を適用します。初期結果は有望です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/edge_impuse/accuracy.png" alt="pir" width={800} height="auto" /></p>

## XIAO ESP32 S3を使用したReSpeaker XVF3800への展開


**Edge Impulseは、必要なすべてのライブラリ、前処理関数、および訓練済みモデルを自動的にダウンロード可能なパッケージにバンドルします。**
進行するには：
- 1.展開オプションとして**「Arduino Library」**を選択します。
- 2.下部で**「Quantized (Int8)」**フォーマットを選択します。
- 3.**「Build」**をクリックしてライブラリを生成します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/edge_impuse/arduino.png" alt="pir" width={800} height="auto" /></p>

ダウンロードが完了したら：
- 4.**Arduino IDE**を開き、**Sketch**メニューに移動します。
- 5.**「Include Library」** > **「Add .ZIP Library...」**を選択します。
- 6.Edge Impulseからダウンロードした.zipファイルを選択して、Arduinoプロジェクトに追加します。

### ファームウェアをI2Sモードに切り替え

Arduinoコードをアップロードする前に、I2Cプロトコル経由での通信を有効にするため、ReSpeaker XVF3800ファームウェアをI2Sモードに切り替える必要があります。
[ファームウェアインストールガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#update-firmware)

### Arduinoコードの統合

Edge Impulseによって提供されるArduinoコードは、ReSpeaker XVF3800とXIAO ESP32S3ハードウェアとの互換性を確保するために、いくつかの修正が必要です：セットアップに応じて**GPIOピン定義、I2Sサンプリングレート**、およびその他のハードウェア固有のパラメータを更新してください。

```c
#define EIDSP_QUANTIZE_FILTERBANK   0
#include <Kasun9603-project-1_inferencing.h> // Change with your one
#include "driver/i2s.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

// ==== AUDIO CONFIG ====
#define I2S_PORT            I2S_NUM_0
#define I2S_WS              7   // L/R clock
#define I2S_SD              43  // Serial Data In
#define I2S_SCK             8   // Bit Clock

#define SAMPLE_RATE         16000
#define I2S_SAMPLE_BITS     32
#define SAMPLE_BUFFER_SIZE  2048

// ==== INFERENCE STATE ====
typedef struct {
    int16_t *buffer;
    uint8_t buf_ready;
    uint32_t buf_count;
    uint32_t n_samples;
} inference_t;

static inference_t inference;
static int32_t i2s_samples[SAMPLE_BUFFER_SIZE];
static bool record_status = true;
static bool debug_nn = false;

// ==== FUNCTION DECLARATIONS ====
static bool microphone_inference_start(uint32_t n_samples);
static bool microphone_inference_record(void);
static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr);
static void audio_inference_callback(uint32_t n_bytes);
static void capture_samples(void *arg);
static int i2s_init();
static void i2s_deinit();

void setup() {
    Serial.begin(115200);
    while (!Serial);

    ei_printf("XVF3800 Keyword Spotting Inference Start\n");

    ei_printf("Model info:\n");
    ei_printf("\tFrame size: %d\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
    ei_printf("\tSample length: %d ms\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / (SAMPLE_RATE / 1000));
    ei_printf("\tInterval: %.2f ms\n", EI_CLASSIFIER_INTERVAL_MS);

    if (!microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT)) {
        ei_printf("ERR: Audio buffer allocation failed.\n");
        return;
    }

    ei_printf("Listening...\n");
}

void loop() {
    if (!microphone_inference_record()) {
        ei_printf("ERR: Failed to record audio.\n");
        return;
    }

    signal_t signal;
    signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
    signal.get_data = &microphone_audio_signal_get_data;

    ei_impulse_result_t result = {0};
    EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);

    if (r != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", r);
        return;
    }

    ei_printf("Predictions:\n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("  %s: ", result.classification[ix].label);
        ei_printf_float(result.classification[ix].value);
        ei_printf("\n");
    }

#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("  Anomaly score: ");
    ei_printf_float(result.anomaly);
    ei_printf("\n");
#endif
}

// ==== INFERENCE AND AUDIO HANDLING ====

static void audio_inference_callback(uint32_t n_bytes) {
    for (uint32_t i = 0; i < n_bytes / sizeof(int32_t); i++) {
        int16_t val = i2s_samples[i] >> 16; // Convert from 32-bit signed to 16-bit
        inference.buffer[inference.buf_count++] = val;

        if (inference.buf_count >= inference.n_samples) {
            inference.buf_ready = 1;
            inference.buf_count = 0;
        }
    }
}

static void capture_samples(void *arg) {
    size_t bytes_read;
    while (record_status) {
        i2s_read(I2S_PORT, (char *)i2s_samples, SAMPLE_BUFFER_SIZE * sizeof(int32_t), &bytes_read, portMAX_DELAY);

        if (bytes_read > 0) {
            audio_inference_callback(bytes_read);
        } else {
            ei_printf("ERR: I2S read failed\n");
        }
    }
    vTaskDelete(NULL);
}

static bool microphone_inference_start(uint32_t n_samples) {
    inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));
    if (!inference.buffer) return false;

    inference.buf_count = 0;
    inference.n_samples = n_samples;
    inference.buf_ready = 0;

    if (i2s_init() != 0) {
        ei_printf("ERR: I2S init failed\n");
        return false;
    }

    xTaskCreate(capture_samples, "CaptureSamples", 4096, NULL, 1, NULL);
    return true;
}

static bool microphone_inference_record(void) {
    while (!inference.buf_ready) {
        delay(10);
    }
    inference.buf_ready = 0;
    return true;
}

static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr) {
    numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);
    return 0;
}

static int i2s_init() {
    i2s_config_t i2s_config = {
        .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
        .sample_rate = SAMPLE_RATE,
        .bits_per_sample = (i2s_bits_per_sample_t)I2S_SAMPLE_BITS,
        .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
        .communication_format = I2S_COMM_FORMAT_I2S,
        .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count = 8,
        .dma_buf_len = 512,
        .use_apll = false,
        .tx_desc_auto_clear = false,
        .fixed_mclk = 0
    };

    i2s_pin_config_t pin_config = {
        .bck_io_num = I2S_SCK,
        .ws_io_num = I2S_WS,
        .data_out_num = -1,
        .data_in_num = I2S_SD
    };

    esp_err_t err;
    err = i2s_driver_install(I2S_PORT, &i2s_config, 0, NULL);
    if (err != ESP_OK) return err;

    err = i2s_set_pin(I2S_PORT, &pin_config);
    if (err != ESP_OK) return err;

    err = i2s_zero_dma_buffer(I2S_PORT);
    return err;
}

static void i2s_deinit() {
    i2s_driver_uninstall(I2S_PORT);
}

```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>