---
description: 画像から犬と猫を分類する。
title: 画像分類
keywords:
  - tinyml course
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/image_classification.webp
slug: /ja/tinyml_course_Image_classification_project
last_update:
  date: 11/29/2024
  author: Salman
---

# XIAO ESP32S3-Sense 画像分類

ここでは、XIAO ESP32S3-Senseを使用して写真の中の犬と猫を分類するtinyMLプロジェクトを構築します。始めましょう。

## 動作原理

XIAOで機械学習モデルを実行し、カメラストリームをそれに供給します。そして、XIAOが結果を推論し、実装したオンボードニューラルネットワークの助けを借りて予測を行います。一つ構築してみましょう。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/digram.png?raw=true" style={{width:1000, height:'auto'}}/></div>

### 必要なもの

- XIAO ESP32-Sense
- 32GB未満のMicroSDカード
- Type-Cケーブル
- Arduino IDE
- Edge Impulseアカウント

:::info

1. arduino-esp32バージョン2.xを使用してください。3.xとは互換性がありません。
2. カメラモジュール/機能を有効にするためにPSRAMを有効にしてください。

:::

## ステップ1. 猫と犬の画像を収集する

機械学習プロジェクトの最初のステップは、データセットを収集することです。ここでは犬と猫の画像を収集する必要があります。ここでは、2つの方法で画像を収集できます。

1. XIAO-ESP32S3 Senseから直接画像を収集し、SDカードに保存してからEdge Impulseにアップロードする
2. 携帯電話、インターネット、またはオープンデータセットから直接画像を収集し、Edge Impulseにアップロードする

### 1.1 方法1: XIAO-ESP32S3 Senseを使用して画像を収集する

ここでは、senseカメラモジュールを使用して画像を収集し、SDカードに保存し、後でEdgeImpulseにアップロードします。

#### 1.1.1 カメラを接続する

XIAO ESP32S3 Senseを購入する場合は、拡張ボードも含める必要があります。この拡張ボードには、1600\*1200 OV2640カメラセンサー、オンボードSDカードスロット、デジタルマイクが搭載されています。

拡張ボードをXIAO ESP32S3 Senseに取り付けることで、拡張ボード上の機能を使用できます。

拡張ボードの取り付けは非常に簡単です。拡張ボード上のコネクタをXIAO ESP32S3のB2Bコネクタに合わせ、強く押して「カチッ」という音が聞こえれば、取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

現在、XIAO ESP32S3 Sense互換の強力な新しいカメラ、OV5640を在庫しており、購入すればカメラを交換して使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

- **ステップ1.** お使いのオペレーティングシステムに応じて、Arduino IDEの安定版をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

#### 1.1.2 Arduino IDEにXIAO-ESP32S3 Senseをインストールする

- **ステップ1.** Arduino IDEにESP32ボードパッケージを追加します。

  **ファイル > 環境設定**に移動し、**「追加のボードマネージャのURL」**に以下のURLを入力します：
  *https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

  **ツール > ボード > ボードマネージャ...**に移動し、検索ボックスにキーワード**esp32**を入力し、**esp32**の最新バージョンを選択してインストールします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3のオンボードパッケージには、少なくともバージョン**2.0.8**が必要です。
:::

- **ステップ2.** ボードとポートを選択します。

Arduino IDEの上部で、ポートを直接選択できます。これは通常COM3以上になります（**COM1**と**COM2**は通常ハードウェアシリアルポート用に予約されています）。

また、左側の開発ボードで**xiao**を検索し、**XIAO_ESP32S3**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

この準備により、XIAO ESP32S3用のプログラムの作成、コンパイル、アップロードを開始できます。

#### 1.1.3 画像を撮影してSDカードに保存できるスケッチをアップロードする

[こちら](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/take_photos_command.ino.zip)からスケッチファイルをダウンロードし、コンピュータで解凍して「take_photos_command.ino」をクリックしてスケッチを開きます。次に、XIAOの正しいポートとボードを選択してアップロードします。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/img_CaptureSketch01.png?raw=true
" style={{width:600, height:'auto'}}/></div>

写真を撮影する際は、データセットとして収集する必要がある画像やオブジェクトに向けるようにしてください。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/cat_image_snap.png?raw=true" style={{width:600, height:'auto'}}/></div>

画像分類なので、システムをより安定させるために多くの画像を収集する必要があります。そのため、より多くの可愛い犬と猫の画像を収集してください。

### 1.2 方法2: EdgeImpulseに直接画像をアップロードする

この方法では、インターネットや電話から画像を収集する必要があります。幸い、[Kaggle](https://www.kaggle.com/)のようなサービスが犬と猫の画像データセットを提供してくれています。[こちらをご覧ください](https://www.kaggle.com/datasets/tongpython/cat-and-dog)。

データセットを収集したら、EdgeImpulseプロジェクトを開き、**Data acquisition**に移動して**+ Add data**を選択し、**Upload data**オプションを選択します。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/collectData1.png" style={{width:600, height:'auto'}}/></div>

ページから、アップロードモードを**"Select a folder"**として選択し、下記のオプションからファイルを選択します。**"Automaticlly split between training and testing"**と**"Infer from file name"**をラベルとして選択することを確認してください。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection01.png?raw=true" style={{width:600, height:'auto'}}/></div>

アップロードが完了すると、以下のようなウィンドウが表示されます。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection02.png?raw=true" style={{width:600, height:'auto'}}/></div>

## ステップ2. インパルスの設計とニューラルネットワークの訓練

プロジェクトのデータを収集した後、インパルスを作成できます。完全なインパルスは3つの主要な構成要素で構成されます：入力ブロック、処理ブロック、学習ブロックです。

1. インパルスを設計するには、**Impulse design**の下にある**Create an impulse**を選択します。
2. **入力ブロック**：入力ブロックは、モデルを訓練する入力データのタイプを示します。これは時系列（音声、振動、動き）または画像である可能性があります。ここでは入力ブロックとして画像データを選択します。
3. **処理ブロック**：処理ブロックは基本的に特徴抽出器です。これは、モデルが学習する特徴を抽出するために使用されるDSP（デジタル信号処理）操作で構成されています。これらの操作は、プロジェクトで使用されるデータのタイプによって異なります。ここでは処理ブロックとしてEdgeImpulseの事前構築画像を使用しています。
4. **学習ブロック**：処理ブロックを追加した後、インパルスを完成させるために学習ブロックを追加します。学習ブロックは、データを学習するように訓練されたニューラルネットワークです。ここでは転移学習（画像）を使用しており、データに対して事前訓練された画像分類モデルを微調整します。比較的小さな画像データセットでも良好な性能を発揮します。
5. インパルスの設計後、**save impulse**をクリックして続行します。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse01.png?raw=true" style={{width:600, height:'auto'}}/></div>

### ステップ2.1：処理ブロックを使用した特徴抽出

ここでは、モデルが学習する特徴を抽出するために使用されるDSP（デジタル信号処理）操作を使用します。これらの操作は、プロジェクトで使用されるデータのタイプによって異なります。まず、以下に記載されているようにパラメータを設定する必要があります。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse02.png?raw=true
" style={{width:600, height:'auto'}}/></div>

パラメータを設定したら、特徴を生成する必要があります。**generate features**をクリックして操作を開始します。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/feature03.png?raw=true" style={{width:600, height:'auto'}}/></div>

特徴を生成したら、データを学習するように訓練されたニューラルネットワークを設定する必要があります。ここでは転移学習（画像）を使用しており、データに対して事前訓練された画像分類モデルを微調整します。比較的小さな画像データセットでも良好な性能を発揮します。以下に記載されているようにニューラルネットワークを選択し、**Start Training**をクリックします。時間がかかるので待つ必要があります。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/train2.png?raw=true" style={{width:600, height:'auto'}}/></div>

訓練が完了したら、作成されたtinyMLライブラリをダウンロードする準備が整いました。**Deployment option**に移動し、デプロイメントとして**Arduino library**を選択し、**Build**をクリックしてライブラリを生成します。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/deployment1.png?raw=true" style={{width:600, height:'auto'}}/></div>

ライブラリは自動的にダウンロードされます。その後、Arduino IDEに追加します。Arduino IDEを開き、Sketch > Include Library > Add .ZIP Libraryをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div>

ダウンロードしたzipファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに「Library added to your libraries」と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 3. サンプルスケッチを実行する

<!-- Even though Edge Impulse has not released its SDK for ESP32S3 using the ESP NN accelerator, thanks to Dmitry Maslov, we can have its assembly optimizations restored and fixed for ESP32-S3. This solution is not official yet, and EI will include it in EI SDK once they fix conflicts with other boards.

:::caution
For now, this only works with the non-EON version. So, you should also keep the the option **Enable EON Compiler** not selected.
:::

When the Build button is selected, a Zip file will be created and downloaded to your computer.

Before we use the downloaded library, we need to enable the **ESP NN** Accelerator. For that, you can download a preliminary version from the [project GitHub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip), unzip it, and replace the ESP NN folder with it under:`src/edge-impulse-sdk/porting/espressif/ESP-NN`, in your Arduino library folder.

:::warning Attention

- Remember to replace the ESP-NN folder, do not have an existing folder or change its name to restore it. simply remove it.
- The order of the header file could affect the compilation, so make sure to keep the correct order of the header files.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png" style={{width:800, height:'auto'}}/></div> -->

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

// Select camera model - find more camera models in camera_pins.h file here
// https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Camera/CameraWebServer/camera_pins.h

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

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


/* Constant defines -------------------------------------------------------- */
#define EI_CAMERA_RAW_FRAME_BUFFER_COLS           320
#define EI_CAMERA_RAW_FRAME_BUFFER_ROWS           240
#define EI_CAMERA_FRAME_BYTE_SIZE                 3

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal
static bool is_initialised = false;
uint8_t *snapshot_buf; //points to the output of the capture

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

    //XCLK 20MHz or 10MHz for OV2640 double FPS (Experimental)
    .xclk_freq_hz = 20000000,
    .ledc_timer = LEDC_TIMER_0,
    .ledc_channel = LEDC_CHANNEL_0,

    .pixel_format = PIXFORMAT_JPEG, //YUV422,GRAYSCALE,RGB565,JPEG
    .frame_size = FRAMESIZE_QVGA,    //QQVGA-UXGA Do not use sizes above QVGA when not JPEG

    .jpeg_quality = 12, //0-63 lower number means higher quality
    .fb_count = 1,       //if more than one, i2s runs in continuous mode. Use only with JPEG
    .fb_location = CAMERA_FB_IN_PSRAM,
    .grab_mode = CAMERA_GRAB_WHEN_EMPTY,
};

/* Function definitions ------------------------------------------------------- */
bool ei_camera_init(void);
void ei_camera_deinit(void);
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) ;

/**
* @brief      Arduino setup function
*/
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    //comment out the below line to start inference immediately after upload
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");
    if (ei_camera_init() == false) {
        ei_printf("Failed to initialize Camera!\r\n");
    }
    else {
        ei_printf("Camera initialized\r\n");
    }

    ei_printf("\nStarting continious inference in 2 seconds...\n");
    ei_sleep(2000);
}

/**
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
void loop()
{

    // instead of wait_ms, we'll wait on the signal, this allows threads to cancel us...
    if (ei_sleep(5) != EI_IMPULSE_OK) {
        return;
    }

    snapshot_buf = (uint8_t*)malloc(EI_CAMERA_RAW_FRAME_BUFFER_COLS * EI_CAMERA_RAW_FRAME_BUFFER_ROWS * EI_CAMERA_FRAME_BYTE_SIZE);

    // check if allocation was successful
    if(snapshot_buf == nullptr) {
        ei_printf("ERR: Failed to allocate snapshot buffer!\n");
        return;
    }

    ei::signal_t signal;
    signal.total_length = EI_CLASSIFIER_INPUT_WIDTH * EI_CLASSIFIER_INPUT_HEIGHT;
    signal.get_data = &ei_camera_get_data;

    if (ei_camera_capture((size_t)EI_CLASSIFIER_INPUT_WIDTH, (size_t)EI_CLASSIFIER_INPUT_HEIGHT, snapshot_buf) == false) {
        ei_printf("Failed to capture image\r\n");
        free(snapshot_buf);
        return;
    }

    // Run the classifier
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // print the predictions
    ei_printf("Predictions (DSP: %d ms., Classification: %d ms., Anomaly: %d ms.): \n",
                result.timing.dsp, result.timing.classification, result.timing.anomaly);

#if EI_CLASSIFIER_OBJECT_DETECTION == 1
    bool bb_found = result.bounding_boxes[0].value > 0;
    for (size_t ix = 0; ix < result.bounding_boxes_count; ix++) {
        auto bb = result.bounding_boxes[ix];
        if (bb.value == 0) {
            continue;
        }
        ei_printf("    %s (%f) [ x: %u, y: %u, width: %u, height: %u ]\n", bb.label, bb.value, bb.x, bb.y, bb.width, bb.height);
    }
    if (!bb_found) {
        ei_printf("    No objects found\n");
    }
#else
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label,
                                    result.classification[ix].value);
    }
#endif

#if EI_CLASSIFIER_HAS_ANOMALY == 1
        ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif


    free(snapshot_buf);

}

/**
 * @brief   Setup image sensor & start streaming
 *
 * @retval  false if initialisation failed
 */
bool ei_camera_init(void) {

    if (is_initialised) return true;

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

    //initialize the camera
    esp_err_t err = esp_camera_init(&camera_config);
    if (err != ESP_OK) {
      Serial.printf("Camera init failed with error 0x%x\n", err);
      return false;
    }

    sensor_t * s = esp_camera_sensor_get();
    // initial sensors are flipped vertically and colors are a bit saturated
    if (s->id.PID == OV3660_PID) {
      s->set_vflip(s, 1); // flip it back
      s->set_brightness(s, 1); // up the brightness just a bit
      s->set_saturation(s, 0); // lower the saturation
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
 * @brief      Stop streaming of sensor data
 */
void ei_camera_deinit(void) {

    //deinitialize the camera
    esp_err_t err = esp_camera_deinit();

    if (err != ESP_OK)
    {
        ei_printf("Camera deinit failed\n");
        return;
    }

    is_initialised = false;
    return;
}


/**
 * @brief      Capture, rescale and crop image
 *
 * @param[in]  img_width     width of output image
 * @param[in]  img_height    height of output image
 * @param[in]  out_buf       pointer to store output image, NULL may be used
 *                           if ei_camera_frame_buffer is to be used for capture and resize/cropping.
 *
 * @retval     false if not initialised, image captured, rescaled or cropped failed
 *
 */
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) {
    bool do_resize = false;

    if (!is_initialised) {
        ei_printf("ERR: Camera is not initialized\r\n");
        return false;
    }

    camera_fb_t *fb = esp_camera_fb_get();

    if (!fb) {
        ei_printf("Camera capture failed\n");
        return false;
    }

   bool converted = fmt2rgb888(fb->buf, fb->len, PIXFORMAT_JPEG, snapshot_buf);

   esp_camera_fb_return(fb);

   if(!converted){
       ei_printf("Conversion failed\n");
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
    // we already have a RGB888 buffer, so recalculate offset into pixel index
    size_t pixel_ix = offset * 3;
    size_t pixels_left = length;
    size_t out_ptr_ix = 0;

    while (pixels_left != 0) {
        out_ptr[out_ptr_ix] = (snapshot_buf[pixel_ix] << 16) + (snapshot_buf[pixel_ix + 1] << 8) + snapshot_buf[pixel_ix + 2];

        // go to the next pixel
        out_ptr_ix++;
        pixel_ix+=3;
        pixels_left--;
    }
    // and done!
    return 0;
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_CAMERA
#error "Invalid model for current sensor"
#endif
```

**`#include <XIAO_esp32S3_CatDog2_inferencing.h>`** を生成したライブラリに置き換えることを確認してください。コードをアップロードして猫や犬の画像または実際の画像を指すと、シリアルモニターで結果を確認できます。

tinyML画像分類プロジェクトの完了おめでとうございます 🙌

## リソース

[PDF] **[ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### Seeed Studio XIAO ESP32S3 用

- **[PDF]** [Seeed Studio XIAO ESP32S3 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 DXF 寸法図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)

- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle フットプリント](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 3D Model]() -->

### Seeed Studio XIAO ESP32S3 Sense 用

- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 寸法図（上面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 寸法図（下面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D Model]() -->

### その他

- **[STP]** [XIAO ESP32S3 Sense ハウジング設計（上面）](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp>)

- **[STP]** [XIAO ESP32S3 Sense ハウジング設計（下面）](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp>)

*残りのオープンソース資料は現在編集中ですので、お楽しみに！*

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
