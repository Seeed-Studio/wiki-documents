---
description: 画像から犬と猫を分類します。
title: 画像分類
keywords:
  - tinyml コース
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/image_classification.webp
slug: /ja/tinyml_course_Image_classification_project
last_update:
  date: 05/15/2025
  author: Salman
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32S3-Sense 画像分類

ここでは、XIAO ESP32S3-Sense を使用して、写真内の犬と猫を分類する tinyML プロジェクトを構築します。それでは始めましょう。

## 動作の仕組み

私たちは XIAO 上で機械学習モデルを実行し、カメラストリームをそれに供給します。その後、XIAO は推論を行い、実装されたオンボードニューラルネットワークの助けを借りて予測を行います。それでは構築してみましょう。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/digram.png?raw=true" style={{width:1000, height:'auto'}}/></div>

### 必要なもの

- XIAO ESP32-Sense
- 32GB MicroSDカード
- Type-C ケーブル
- Arduino IDE
- Edge Impulse アカウント

:::info

1. Arduino-esp32 バージョン 2.x を使用してください。3.x とは互換性がありません。
2. カメラモジュール/機能を有効にするために PSRAM を有効にしてください。

:::

## ステップ 1. 犬と猫の画像を収集する

機械学習プロジェクトの最初のステップはデータセットを収集することです。ここでは、犬と猫の画像を収集する必要があります。画像を収集する方法は2つあります。

1. XIAO-ESP32S3 Sense から直接画像を収集し、SDカードに保存してから Edge Impulse にアップロードする
2. 携帯電話、インターネット、またはオープンデータセットを使用して直接画像を収集し、それを Edge Impulse にアップロードする

### 1.1 方法 1: XIAO-ESP32S3 Sense を使用して画像を収集する

ここでは、Sense カメラモジュールを使用して画像を収集し、SDカードに保存します。その後、Edge Impulse にアップロードします。

#### 1.1.1 カメラを接続する

XIAO ESP32S3 Sense を購入する場合、拡張ボードも含める必要があります。この拡張ボードには、1600\*1200 OV2640 カメラセンサー、オンボード SDカードスロット、デジタルマイクが搭載されています。

拡張ボードを XIAO ESP32S3 Sense に取り付けることで、拡張ボードの機能を使用できます。

拡張ボードの取り付けは非常に簡単です。拡張ボードのコネクタを XIAO ESP32S3 の B2B コネクタに合わせて押し込み、「カチッ」という音が聞こえたら取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

現在、当社の棚には新しい完全互換の強力なカメラ OV5640 があり、購入すればカメラを交換して使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

- **ステップ 1.** お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div>

#### 1.1.2 Arduino に XIAO-ESP32S3 Sense をインストールする

- **ステップ 1.** Arduino IDE に ESP32 ボードパッケージを追加します。

  **ファイル > 環境設定** に移動し、**"追加のボードマネージャーの URL"** に以下の URL を入力します：
  `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

  **ツール > ボード > ボードマネージャー...** に移動し、検索ボックスに **esp32** と入力して、最新バージョンの **esp32** を選択してインストールします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3 用のオンボードパッケージは、少なくともバージョン **2.0.8** が必要です。
:::

- **ステップ 2.** ボードとポートを選択します。

Arduino IDE の上部でポートを直接選択できます。通常、これは COM3 以上になります（**COM1** と **COM2** は通常ハードウェアシリアルポートに予約されています）。

また、左側の開発ボードで **xiao** を検索し、**XIAO_ESP32S3** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

これで、XIAO ESP32S3 用のプログラムを作成し、コンパイルしてアップロードする準備が整いました。

#### 1.1.3 画像を撮影して SDカードに保存するスケッチをアップロードする

[こちら](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/take_photos_command.ino.zip) からスケッチファイルをダウンロードし、コンピュータで解凍して「take_photos_command.ino」をクリックしてスケッチを開きます。その後、XIAO 用の正しいポートとボードを選択してアップロードします。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/img_CaptureSketch01.png?raw=true
" style={{width:600, height:'auto'}}/></div>

写真を撮る際には、データセットとして収集する必要がある画像やオブジェクトを指すようにしてください。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/cat_image_snap.png?raw=true" style={{width:600, height:'auto'}}/></div>

画像分類のため、システムをより安定させるためにできるだけ多くの画像を収集する必要があります。かわいい犬や猫の画像をたくさん集めましょう。

### 1.2 方法 2: 画像を直接 Edge Impulse にアップロードする

この方法では、インターネットやスマートフォンを使用して画像を収集する必要があります。幸いなことに、[Kaggle](https://www.kaggle.com/)のようなサービスを利用して、犬と猫の画像データセットを入手できます。[こちらをご覧ください](https://www.kaggle.com/datasets/tongpython/cat-and-dog)。

データセットを収集したら、EdgeImpulseプロジェクトを開き、**Data acquisition**に移動して**+ Add data**を選択し、**Upload data**オプションを選択します。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/collectData1.png" style={{width:600, height:'auto'}}/></div>

ページから、アップロードモードを**"Select a folder"**に設定し、以下のオプションからファイルを選択します。**"Automaticlly split between training and testing"**を選択し、ラベルを**"Infer from file name"**に設定することを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection01.png?raw=true" style={{width:600, height:'auto'}}/></div>

アップロードが完了すると、以下のようなウィンドウが表示されます。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection02.png?raw=true" style={{width:600, height:'auto'}}/></div>

## ステップ2. インパルスの設計とニューラルネットワークのトレーニング

プロジェクト用のデータを収集した後、インパルスを作成できます。完全なインパルスは、入力ブロック、処理ブロック、学習ブロックの3つの主要な構成要素で構成されます。

1. インパルスを設計するには、**Impulse design**の下にある**Create an impulse**を選択します。
2. **入力ブロック**: 入力ブロックは、モデルをトレーニングする際に使用する入力データの種類を示します。これは、時系列データ（音声、振動、動き）や画像などが含まれます。ここでは、画像データを入力ブロックとして選択します。
3. **処理ブロック**: 処理ブロックは基本的に特徴抽出器です。これは、モデルが学習する特徴を抽出するために使用されるDSP（デジタル信号処理）操作で構成されています。これらの操作は、プロジェクトで使用するデータの種類によって異なります。ここでは、EdgeImpulseの事前構築された画像処理ブロックを使用します。
4. **学習ブロック**: 処理ブロックを追加した後、学習ブロックを追加してインパルスを完成させます。学習ブロックは、データを学習するためにトレーニングされたニューラルネットワークです。ここでは、転移学習（画像）を使用します。これは、事前トレーニングされた画像分類モデルをデータに微調整します。比較的小さな画像データセットでも良好なパフォーマンスを発揮します。
5. インパルスを設計した後、**save impulse**をクリックして続行します。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse01.png?raw=true" style={{width:600, height:'auto'}}/></div>

### ステップ2.1: 処理ブロックを使用した特徴抽出

ここでは、モデルが学習する特徴を抽出するために使用されるDSP（デジタル信号処理）操作を使用します。これらの操作は、プロジェクトで使用するデータの種類によって異なります。まず、以下に示すようにパラメータを設定する必要があります。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse02.png?raw=true" style={{width:600, height:'auto'}}/></div>

パラメータを設定したら、特徴を生成する必要があります。**generate features**をクリックして操作を開始します。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/feature03.png?raw=true" style={{width:600, height:'auto'}}/></div>

特徴を生成した後、データを学習するためにトレーニングされたニューラルネットワークを構成する必要があります。ここでは、転移学習（画像）を使用します。これは、事前トレーニングされた画像分類モデルをデータに微調整します。比較的小さな画像データセットでも良好なパフォーマンスを発揮します。以下に示すようにニューラルネットワークを選択し、**Start Training**をクリックします。これには時間がかかるため、待つ必要があります。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/train2.png?raw=true" style={{width:600, height:'auto'}}/></div>

トレーニングが完了すると、作成したtinyMLライブラリをダウンロードする準備が整います。**Deployment option**に移動し、**Arduino library**を選択してデプロイメントを行い、**Build**をクリックしてライブラリを生成します。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/deployment1.png?raw=true" style={{width:600, height:'auto'}}/></div>

ライブラリは自動的にダウンロードされます。その後、Arduino IDEに追加します。Arduino IDEを開き、Sketch > Include Library > Add .ZIP Libraryをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div>

ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウにライブラリが追加されたことが表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 3. サンプルスケッチを実行する

Edge ImpulseはESP NNアクセラレーターを使用したESP32S3向けのSDKをまだリリースしていませんが、Dmitry Maslovのおかげで、ESP32-S3向けにアセンブリ最適化を復元し修正することが可能です。このソリューションはまだ公式ではありませんが、EIが他のボードとの競合を修正した後、EI SDKに含まれる予定です。

:::caution
現在のところ、この方法は非EONバージョンでのみ動作します。そのため、**Enable EON Compiler**オプションを選択しないようにしてください。
:::

ビルドボタンを選択すると、Zipファイルが作成され、コンピュータにダウンロードされます。

ダウンロードしたライブラリを使用する前に、**ESP NN**アクセラレーターを有効にする必要があります。そのために、[プロジェクトのGitHub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip)から暫定版をダウンロードし、解凍して、Arduinoライブラリフォルダ内の`src/edge-impulse-sdk/porting/espressif/ESP-NN`にあるESP NNフォルダを置き換えてください。

:::warning 注意

- ESP-NNフォルダを置き換える際、既存のフォルダを残したり名前を変更したりせず、単純に削除して置き換えてください。
- ヘッダーファイルの順序がコンパイルに影響を与える可能性があるため、正しい順序を維持してください。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png" style={{width:800, height:'auto'}}/></div>

以下の推論コードをコピーして、Arduino IDEに貼り付けてください。

```cpp
/* Edge Impulse Arduino examples
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* Includes ---------------------------------------------------------------- */
#include <XIAO_esp32S3_CatDog2_inferencing.h>
#include "edge-impulse-sdk/dsp/image/image.hpp"

#include "esp_camera.h"

// カメラモデルを選択 - camera_pins.hファイルで他のカメラモデルを確認できます
// https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Camera/CameraWebServer/camera_pins.h

#define CAMERA_MODEL_XIAO_ESP32S3 // PSRAMを搭載

#define PWDN_GPIO_NUM     -1
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM     10
#define SIOD_GPIO_NUM     40
#define SIOC_GPIO_NUM     39

#define Y9_GPIO_NUM       48
#define Y8_GPIO_NUM       11
#define Y7_GPIO_NUM       12
#define Y6_GPIO_NUM       14
#define Y5_GPIO_NUM       16
#define Y4_GPIO_NUM       18
#define Y3_GPIO_NUM       17
#define Y2_GPIO_NUM       15
#define VSYNC_GPIO_NUM    38
#define HREF_GPIO_NUM     47
#define PCLK_GPIO_NUM     13

#define LED_GPIO_NUM      21


/* 定数定義 -------------------------------------------------------- */
#define EI_CAMERA_RAW_FRAME_BUFFER_COLS           320
#define EI_CAMERA_RAW_FRAME_BUFFER_ROWS           240
#define EI_CAMERA_FRAME_BYTE_SIZE                 3

/* プライベート変数 ------------------------------------------------------- */
static bool debug_nn = false; // 生信号から生成された特徴などを確認する場合はtrueに設定
static bool is_initialised = false;
uint8_t *snapshot_buf; // キャプチャの出力を指す

static camera_config_t camera_config = {
    .pin_pwdn = PWDN_GPIO_NUM,
    .pin_reset = RESET_GPIO_NUM,
    .pin_xclk = XCLK_GPIO_NUM,
    .pin_sscb_sda = SIOD_GPIO_NUM,
    .pin_sscb_scl = SIOC_GPIO_NUM,

    .pin_d7 = Y9_GPIO_NUM,
    .pin_d6 = Y8_GPIO_NUM,
    .pin_d5 = Y7_GPIO_NUM,
    .pin_d4 = Y6_GPIO_NUM,
    .pin_d3 = Y5_GPIO_NUM,
    .pin_d2 = Y4_GPIO_NUM,
    .pin_d1 = Y3_GPIO_NUM,
    .pin_d0 = Y2_GPIO_NUM,
    .pin_vsync = VSYNC_GPIO_NUM,
    .pin_href = HREF_GPIO_NUM,
    .pin_pclk = PCLK_GPIO_NUM,

    // XCLK 20MHzまたはOV2640のダブルFPS用10MHz（実験的）
    .xclk_freq_hz = 20000000,
    .ledc_timer = LEDC_TIMER_0,
    .ledc_channel = LEDC_CHANNEL_0,

    .pixel_format = PIXFORMAT_JPEG, // YUV422, GRAYSCALE, RGB565, JPEG
    .frame_size = FRAMESIZE_QVGA,    // QQVGA-UXGA JPEG以外ではQVG以上のサイズを使用しない

    .jpeg_quality = 12, // 0-63 低い数値ほど高品質
    .fb_count = 1,       // 1以上の場合、i2sは連続モードで動作。JPEGでのみ使用
    .fb_location = CAMERA_FB_IN_PSRAM,
    .grab_mode = CAMERA_GRAB_WHEN_EMPTY,
};

/* 関数定義 ------------------------------------------------------- */
bool ei_camera_init(void);
void ei_camera_deinit(void);
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) ;

/**
* @brief      Arduinoのセットアップ関数
*/
void setup()
{
    // 初回実行時にセットアップコードを記述
    Serial.begin(115200);
    // 以下の行をコメントアウトすると、アップロード後すぐに推論が開始されます
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");
    if (ei_camera_init() == false) {
        ei_printf("カメラの初期化に失敗しました！\r\n");
    }
    else {
        ei_printf("カメラが初期化されました\r\n");
    }

    ei_printf("\n2秒後に連続推論を開始します...\n");
    ei_sleep(2000);
}

/**
* @brief      データを取得して推論を実行
*
* @param[in]  debug  trueの場合デバッグ情報を取得
*/
void loop()
{

    // wait_msの代わりに信号を待機します。これによりスレッドがキャンセル可能になります...
    if (ei_sleep(5) != EI_IMPULSE_OK) {
        return;
    }

    snapshot_buf = (uint8_t*)malloc(EI_CAMERA_RAW_FRAME_BUFFER_COLS * EI_CAMERA_RAW_FRAME_BUFFER_ROWS * EI_CAMERA_FRAME_BYTE_SIZE);

    // メモリ割り当てが成功したか確認
    if(snapshot_buf == nullptr) {
        ei_printf("ERR: スナップショットバッファの割り当てに失敗しました！\n");
        return;
    }

    ei::signal_t signal;
    signal.total_length = EI_CLASSIFIER_INPUT_WIDTH * EI_CLASSIFIER_INPUT_HEIGHT;
    signal.get_data = &ei_camera_get_data;

    if (ei_camera_capture((size_t)EI_CLASSIFIER_INPUT_WIDTH, (size_t)EI_CLASSIFIER_INPUT_HEIGHT, snapshot_buf) == false) {
        ei_printf("画像のキャプチャに失敗しました\r\n");
        free(snapshot_buf);
        return;
    }

    // 分類器を実行
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: 分類器の実行に失敗しました (%d)\n", err);
        return;
    }

    // 予測結果を出力
    ei_printf("予測結果 (DSP: %d ms., 分類: %d ms., 異常検知: %d ms.): \n",
                result.timing.dsp, result.timing.classification, result.timing.anomaly);

#if EI_CLASSIFIER_OBJECT_DETECTION == 1
    bool bb_found = result.bounding_boxes[0].value > 0;
    for (size_t ix = 0; ix < result.bounding_boxes_count; ix++) {
        auto bb = result.bounding_boxes[ix];
        if (bb.value == 0) {
            continue;
        }
        ei_printf("    %s (%f) [ x: %u, y: %u, 幅: %u, 高さ: %u ]\n", bb.label, bb.value, bb.x, bb.y, bb.width, bb.height);
    }
    if (!bb_found) {
        ei_printf("    オブジェクトが見つかりませんでした\n");
    }
#else
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label,
                                    result.classification[ix].value);
    }
#endif

#if EI_CLASSIFIER_HAS_ANOMALY == 1
        ei_printf("    異常スコア: %.3f\n", result.anomaly);
#endif


    free(snapshot_buf);

}

/**
 * @brief   イメージセンサーをセットアップしてストリーミングを開始
 *
 * @retval  初期化に失敗した場合はfalse
 */
bool ei_camera_init(void) {

    if (is_initialised) return true;

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

    // カメラを初期化
    esp_err_t err = esp_camera_init(&camera_config);
    if (err != ESP_OK) {
      Serial.printf("カメラの初期化に失敗しました。エラーコード: 0x%x\n", err);
      return false;
    }

    sensor_t * s = esp_camera_sensor_get();
    // 初期センサーは垂直方向に反転しており、色がやや飽和しています
    if (s->id.PID == OV3660_PID) {
      s->set_vflip(s, 1); // 元に戻す
      s->set_brightness(s, 1); // 明るさを少し上げる
      s->set_saturation(s, 0); // 彩度を下げる
    }

#if defined(CAMERA_MODEL_M5STACK_WIDE)
    s->set_vflip(s, 1);
    s->set_hmirror(s, 1);
#elif defined(CAMERA_MODEL_ESP_EYE)
    s->set_vflip(s, 1);
    s->set_hmirror(s, 1);
    s->set_awb_gain(s, 1);
#endif

    is_initialised = true;
    return true;
}

/**
 * @brief      センサーデータのストリーミングを停止
 */
void ei_camera_deinit(void) {

    // カメラを非初期化
    esp_err_t err = esp_camera_deinit();

    if (err != ESP_OK)
    {
        ei_printf("カメラの非初期化に失敗しました\n");
        return;
    }

    is_initialised = false;
    return;
}


/**
 * @brief      画像をキャプチャ、リスケール、クロップ
 *
 * @param[in]  img_width     出力画像の幅
 * @param[in]  img_height    出力画像の高さ
 * @param[in]  out_buf       出力画像を格納するポインタ。NULLを使用してei_camera_frame_bufferをキャプチャとリサイズ/クロップに使用可能。
 *
 * @retval     初期化されていない場合、画像のキャプチャ、リスケールまたはクロップに失敗した場合はfalse
 *
 */
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) {
    bool do_resize = false;

    if (!is_initialised) {
        ei_printf("ERR: カメラが初期化されていません\r\n");
        return false;
    }

    camera_fb_t *fb = esp_camera_fb_get();

    if (!fb) {
        ei_printf("カメラのキャプチャに失敗しました\n");
        return false;
    }

   bool converted = fmt2rgb888(fb->buf, fb->len, PIXFORMAT_JPEG, snapshot_buf);

   esp_camera_fb_return(fb);

   if(!converted){
       ei_printf("変換に失敗しました\n");
       return false;
   }

    if ((img_width != EI_CAMERA_RAW_FRAME_BUFFER_COLS)
        || (img_height != EI_CAMERA_RAW_FRAME_BUFFER_ROWS)) {
        do_resize = true;
    }

    if (do_resize) {
        ei::image::processing::crop_and_interpolate_rgb888(
        out_buf,
        EI_CAMERA_RAW_FRAME_BUFFER_COLS,
        EI_CAMERA_RAW_FRAME_BUFFER_ROWS,
        out_buf,
        img_width,
        img_height);
    }


    return true;
}

static int ei_camera_get_data(size_t offset, size_t length, float *out_ptr)
{
    // すでにRGB888バッファがあるため、オフセットをピクセルインデックスに再計算
    size_t pixel_ix = offset * 3;
    size_t pixels_left = length;
    size_t out_ptr_ix = 0;

    while (pixels_left != 0) {
        out_ptr[out_ptr_ix] = (snapshot_buf[pixel_ix] << 16) + (snapshot_buf[pixel_ix + 1] << 8) + snapshot_buf[pixel_ix + 2];

        // 次のピクセルへ移動
        out_ptr_ix++;
        pixel_ix+=3;
        pixels_left--;
    }
    // 完了！
    return 0;
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_CAMERA
#error "現在のセンサーに対して無効なモデルです"
#endif
```

`#include <XIAO_esp32S3_CatDog2_inferencing.h>` を生成したライブラリに置き換えてください。その後、コードをアップロードし、猫や犬の画像、または実際のものを指してみてください。シリアルモニターで結果を確認できます。

この tinyML 画像分類プロジェクトを完了したことをおめでとうございます 🙌。

## リソース

[PDF] **[ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### Seeed Studio XIAO ESP32S3 用

- **[PDF]** [Seeed Studio XIAO ESP32S3 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 DXF 寸法図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)

- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle フットプリント](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 3D モデル]() -->



### Seeed Studio XIAO ESP32S3 Sense 用

- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 寸法図 (上面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 寸法図 (底面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D モデル]() -->



### その他

- **[STP]** [XIAO ESP32S3 Sense ハウジングデザイン (上面)](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp>)

- **[STP]** [XIAO ESP32S3 Sense ハウジングデザイン (底面)](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp>)

_残りのオープンソース資料は現在編集中ですので、続報をお待ちください！_

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>