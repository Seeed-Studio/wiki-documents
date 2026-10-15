---
description: このチュートリアルでは、XIAO ESP32S3 Sense 上のカメラを正しく使用する方法を説明します。
title: Sense バージョン向けカメラの使い方
keywords:
  - xiao esp32s3
  - esp32s3
  - camera
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_camera_usage
last_update:
  date: 04/17/2023
  author: Citric
createdAt: '2022-11-15'
updatedAt: '2025-12-24'
url: https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/
---

# Seeed Studio XIAO ESP32S3 Sense におけるカメラの使い方

:::tip
このチュートリアルの内容は、Seeed Studio XIAO ESP32S3 Sense のみに適用されます。
:::

このチュートリアルでは、XIAO ESP32S3 Sense 上のカメラモジュールの使い方を順を追って説明します。本チュートリアルは次のパートに分かれています。まず、ESP32 が提供するカメラ機能とその役割について説明します。次に、写真撮影と動画録画という 2 つの観点からカメラの使い方を紹介し、最後に、写真撮影と動画録画を中心にいくつかの面白いプロジェクトを作成します。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## はじめに

このチュートリアルでは、microSD カード、カメラ、アンテナなどを使用する場合があります。以下の部材を用意し、プロジェクトの要件に応じて正しく取り付けてください。

#### アンテナの取り付け

XIAO ESP32S3 の表面左下には、独立した「WiFi/BT Antenna Connector」があります。より良い WiFi/Bluetooth 信号を得るために、パッケージ内のアンテナを取り出し、このコネクタに取り付ける必要があります。

アンテナの取り付けにはちょっとしたコツがあります。いきなり強く押し込もうとすると、なかなかはまらず、指が痛くなってしまいます。正しい取り付け方法は、まずアンテナコネクタの片側をコネクタブロックに差し込み、もう片側を少し押し下げると、アンテナがカチッとはまります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

### 拡張ボードの取り付け（Sense 用）

拡張ボードの取り付けはとても簡単です。拡張ボード上のコネクタを XIAO ESP32S3 上の B2B コネクタに合わせ、しっかり押し込んで「カチッ」と音がすれば、取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

現在、XIAO ESP32S3 Sense と完全互換の高性能カメラ OV5640 を新たに販売しています。これを購入すれば、カメラを交換して使用することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

ov5640 の詳細なパラメータ情報が必要な場合は、次の図を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Wiki にあるカメラ関連のプログラムは、すべて OV5640 と OV2640 の両方のカメラに対応しています。
:::

### microSD カードの準備

XIAO ESP32S3 Sense は最大 **32GB** までの microSD カードをサポートしています。そのため、XIAO 用に microSD カードを購入する場合は、この仕様を参考にしてください。また、microSD カードを使用する前に、microSD カードを **FAT32** 形式でフォーマットしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

フォーマット後、microSD カードを microSD カードスロットに挿入できます。挿入方向に注意し、金色の端子（ゴールドフィンガ）が付いている面を内側に向けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### 拡張ボード用カメラスロットの回路設計

XIAO ESP32S3 Sense のカードスロットは、ESP32-S3 の 14 本の GPIO を使用しており、その使用ピンの詳細は以下の表のとおりです。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">Camera</th>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">Camera</th>
        </tr>
        <tr>
            <td align="center">GPIO10</td>
            <td align="center">XMCLK</td>
            <td align="center">GPIO11</td>
            <td align="center">DVP_Y8</td>
        </tr>
        <tr>
            <td align="center">GPIO12</td>
            <td align="center">DVP_Y7</td>
            <td align="center">GPIO13</td>
            <td align="center">DVP_PCLK</td>
        </tr>
        <tr>
            <td align="center">GPIO14</td>
            <td align="center">DVP_Y6</td>
            <td align="center">GPIO15</td>
            <td align="center">DVP_Y2</td>
        </tr>
        <tr>
            <td align="center">GPIO16</td>
            <td align="center">DVP_Y5</td>
            <td align="center">GPIO17</td>
            <td align="center">DVP_Y3</td>
        </tr>
        <tr>
            <td align="center">GPIO18</td>
            <td align="center">DVP_Y4</td>
            <td align="center">GPIO38</td>
            <td align="center">DVP_VSYNC</td>
        </tr>
        <tr>
            <td align="center">GPIO39</td>
            <td align="center">CAM_SCL</td>
            <td align="center">GPIO40</td>
            <td align="center">CAM_SDA</td>
        </tr>
        <tr>
            <td align="center">GPIO47</td>
            <td align="center">DVP_HREF</td>
            <td align="center">GPIO48</td>
            <td align="center">DVP_Y9</td>
        </tr>
    </table>
</div>

### PSRAM オプションを有効にする

ESP32 の PSRAM とは、ESP32 チップ上の外付け PSRAM（Pseudo Static Random Access Memory）を指し、ESP32 システムで利用可能なメモリを増やすための追加メモリ領域を提供します。ESP32 システムにおいて、PSRAM には次のような主な用途があります。

1. 利用可能な RAM の拡張：ESP32 に内蔵されている RAM は限られており、特に画像処理や音声処理など、多くのメモリを必要とするアプリケーションでは、内蔵 RAM だけでは足りない場合があります。PSRAM を使用することで、ESP32 の利用可能な RAM を拡張し、これらのアプリケーションのニーズを満たすことができます。

2. メモリアクセスの高速化：PSRAM は外部メモリであるため、アクセス速度は内部 RAM より遅くなりますが、キャッシュや一時メモリとして使用することで、メモリアクセスやデータ処理を高速化することができます。

3. バッファの格納：ネットワークバッファやオーディオバッファなど、大きなバッファを必要とするアプリケーションに対して、PSRAM は十分な記憶領域を提供し、メモリ不足の状況を回避できます。

本チュートリアルの内容を実行するには、カメラが正しく動作するように、Arduino IDE の **PSRAM 機能を有効にする必要があります**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>

## カメラライブラリの概要

始める前に、この章を読んで一般的なカメラ機能を理解しておくことをお勧めします。そうすることで、これらの機能を使って独自のプロジェクト開発を行ったり、プログラムをより読みやすくしたりできます。

### パート I: esp_camera.h

1. カメラ初期化用の設定構造体。

以下は設定の例で、実際のピンの状況に応じて記入するだけです。

```cpp
static camera_config_t camera_example_config = {
        .pin_pwdn       = PWDN_GPIO_NUM,
        .pin_reset      = RESET_GPIO_NUM,
        .pin_xclk       = XCLK_GPIO_NUM,
        .pin_sccb_sda   = SIOD_GPIO_NUM,
        .pin_sccb_scl   = SIOC_GPIO_NUM,
        .pin_d7         = Y9_GPIO_NUM,
        .pin_d6         = Y8_GPIO_NUM,
        .pin_d5         = Y7_GPIO_NUM,
        .pin_d4         = Y6_GPIO_NUM,
        .pin_d3         = Y5_GPIO_NUM,
        .pin_d2         = Y4_GPIO_NUM,
        .pin_d1         = Y3_GPIO_NUM,
        .pin_d0         = Y2_GPIO_NUM,
        .pin_vsync      = VSYNC_GPIO_NUM,
        .pin_href       = HREF_GPIO_NUM,
        .pin_pclk       = PCLK_GPIO_NUM,

        .xclk_freq_hz   = 20000000, // The clock frequency of the image sensor
        .fb_location = CAMERA_FB_IN_PSRAM; // Set the frame buffer storage location
        .pixel_format   = PIXFORMAT_JPEG, // The pixel format of the image: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size     = FRAMESIZE_UXGA, // The resolution size of the image: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality   = 12, // The quality of the JPEG image, ranging from 0 to 63.
        .fb_count       = 2, // The number of frame buffers to use.
        .grab_mode      = CAMERA_GRAB_WHEN_EMPTY //  The image capture mode.
    };
```

2. カメラドライバを初期化します。

上記の形式で `camera_example_config` を設定した後、この関数を使用してカメラドライバを初期化する必要があります。

```cpp
esp_err_t esp_camera_init(const camera_config_t* config);
```

- **入力パラメータ**: カメラ設定パラメータ

- **出力**: 成功時は ESP_OK

:::note
現在、この関数は 1 回しか呼び出すことができず、このモジュールを非初期化する方法はありません。
:::

3. フレームバッファへのポインタを取得します。

```cpp
camera_fb_t* esp_camera_fb_get();
```

カメラフレームバッファのデータ構造：

```cpp
typedef struct {
    uint8_t * buf;              /*!< Pointer to the pixel data */
    size_t len;                 /*!< Length of the buffer in bytes */
    size_t width;               /*!< Width of the buffer in pixels */
    size_t height;              /*!< Height of the buffer in pixels */
    pixformat_t format;         /*!< Format of the pixel data */
    struct timeval timestamp;   /*!< Timestamp since boot of the first DMA buffer of the frame */
} camera_fb_t;
```

4. フレームバッファを返して再利用できるようにします。

```cpp
void esp_camera_fb_return(camera_fb_t * fb);
```

- **入力パラメータ**: フレームバッファへのポインタ

5. イメージセンサー制御構造体へのポインタを取得します。

```cpp
sensor_t * esp_camera_sensor_get();
```

- **出力**: センサーへのポインタ

6. カメラ設定を不揮発性ストレージ (NVS) に保存します。

```cpp
esp_err_t esp_camera_save_to_nvs(const char *key);
```

- **入力パラメータ**: カメラ設定用の一意な NVS キー名

7. 不揮発性ストレージ (NVS) からカメラ設定を読み込みます。

```cpp
esp_err_t esp_camera_load_from_nvs(const char *key);
```

- **入力パラメータ**: カメラ設定用の一意な NVS キー名

### パート II: img_converters.h

1. 画像バッファを JPEG に変換します。

```cpp
bool fmt2jpg_cb(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **入力パラメータ**:
  - **src**:       RGB565、RGB888、YUYV または GRAYSCALE フォーマットのソースバッファ
  - **src_len**:   ソースバッファのバイト長
  - **width**:     ソース画像の幅（ピクセル）
  - **height**:    ソース画像の高さ（ピクセル）
  - **format**:    ソース画像のフォーマット
  - **quality**:   生成される画像の JPEG 品質
  - **cp**:        出力 JPEG のバイトを書き込むために呼び出されるコールバック
  - **arg**:       コールバックに渡されるポインタ

- **出力**: 成功時は true

2. カメラフレームバッファを JPEG に変換します。

```cpp
bool frame2jpg_cb(camera_fb_t * fb, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **入力パラメータ**:
  - **fb**:       ソースカメラフレームバッファ
  - **quality**:  生成される画像の JPEG 品質
  - **cp**:       出力 JPEG のバイトを書き込むために呼び出されるコールバック
  - **arg**:      コールバックに渡されるポインタ

- **出力**: 成功時は true

3. 画像バッファを JPEG バッファに変換します。

```cpp
bool fmt2jpg(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **入力パラメータ**:
  - **src**:       RGB565、RGB888、YUYV または GRAYSCALE フォーマットのソースバッファ
  - **src_len**:   ソースバッファのバイト長
  - **width**:     ソース画像の幅（ピクセル）
  - **height**:    ソース画像の高さ（ピクセル）
  - **format**:    ソース画像のフォーマット
  - **quality**:   生成される画像の JPEG 品質
  - **out**:       生成されるバッファのアドレスで埋められるポインタ。使用後は必ずこのポインタを解放しなければなりません。
  - **out_len**:   出力バッファの長さで埋められるポインタ

- **出力**: 成功時は true

4. カメラフレームバッファを JPEG バッファに変換します。

```cpp
bool frame2jpg(camera_fb_t * fb, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **入力パラメータ**:
  - **fb**:       ソースカメラフレームバッファ
  - **quality**:  生成される画像の JPEG 品質
  - **out**:      生成されるバッファのアドレスで埋められるポインタ
  - **out_len**:  出力バッファの長さで埋められるポインタ

- **出力**: 成功時は true

5. 画像バッファを BMP バッファに変換します。

```cpp
bool fmt2bmp(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t ** out, size_t * out_len);
```

- **入力パラメータ**:
  - **src**:       RGB565、RGB888、YUYV または GRAYSCALE フォーマットのソースバッファ
  - **src_len**:   ソースバッファのバイト長
  - **width**:     ソース画像の幅（ピクセル）
  - **height**:    ソース画像の高さ（ピクセル）
  - **format**:    ソース画像のフォーマット
  - **quality**:   生成される画像の JPEG 品質
  - **out**:       生成されるバッファのアドレスで埋められるポインタ。
  - **out_len**:   出力バッファの長さで埋められるポインタ

- **出力**: 成功時は true

6. カメラフレームバッファを BMP バッファに変換します。

```cpp
bool frame2bmp(camera_fb_t * fb, uint8_t ** out, size_t * out_len);
```

- **入力パラメータ**:
  - **fb**:       ソースカメラフレームバッファ
  - **quality**:  生成される画像の JPEG 品質
  - **cp**:       出力 JPEG のバイトを書き込むために呼び出されるコールバック
  - **arg**:      コールバックに渡されるポインタ

- **出力**: 成功時は true

### パート III: app_httpd.cpp

:::note
このライブラリ紹介のこの部分は、「Create a video preservation terminal -- Based WebServer」セクションに基づいています。このライブラリは主に、Web サーバー向けに画像取得および顔認識機能を実行するために使用されます。ESP のオンボードパッケージには直接含まれていません。
:::

1. 顔認識機能。

```cpp
static int run_face_recognition(fb_data_t *fb, std::list<dl::detect::result_t> *results)
```

- **入力パラメータ**:
  - **fb**: 画像データを含むフレームバッファを表す構造体へのポインタ。
  - **results**: 検出された顔の結果リストへのポインタ。

2. BMP 画像ファイルに対する HTTP リクエストを処理します。

```cpp
static esp_err_t bmp_handler(httpd_req_t *req)
```

- **入力パラメータ**: HTTP リクエストを表す構造体へのポインタ。

3. JPEG 画像データをストリーミング方式でエンコードします。

```cpp
static size_t jpg_encode_stream(void *arg, size_t index, const void *data, size_t len)
```

- **入力パラメータ**:
  - **arg**: 関数に渡されるユーザー定義引数へのポインタ。
  - **index**: 画像データ内の現在位置を示すインデックス値。
  - **data**: エンコードされる画像データを含むバッファへのポインタ。
  - **len**: データバッファの長さ。

4. カメラからの画像キャプチャおよびストリーミングに対する HTTP リクエストを処理します。

```cpp
static esp_err_t capture_handler(httpd_req_t *req)
```

- **入力パラメータ**: HTTP リクエストを表す構造体へのポインタ。

5. カメラからのビデオストリーミングに対する HTTP リクエストを処理します。

```cpp
static esp_err_t stream_handler(httpd_req_t *req)
```

- **入力パラメータ**: HTTP リクエストを表す構造体へのポインタ。

6. HTTP 経由でビデオをキャプチャおよびストリーミングするカメラサーバーを初期化して起動します。

```cpp
void startCameraServer()
```


## カメラで写真を撮る

次に、カメラの最も基本的な使い方から始めます。例えば、まずカメラを使って画像取得を行います。最初のプロジェクトでは microSD カードを使用します。このプログラムの主なタスクは、1 分ごとにカメラ映像を取得し、その映像を microSD カードに保存することです。

始める前に、私と同じように microSD カードとカメラを取り付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/91.jpg" style={{width:300, height:'auto'}}/></div>

以下のリンクから、完成したプログラムコードと必要な依存ファイルを入手できます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/take_photos" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

このプロジェクト用の Arduino プログラムは次のとおりです。

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"
#include "ESP32_OV5640_AF.h"   // OV5640 auto-focus library (github.com/0015/ESP32-OV5640-AF)

OV5640 ov5640 = OV5640();

#define OV5640_AF_FOCUS_FRAMESIZE FRAMESIZE_SXGA // AF focusing requires >=1280x1024
#define OV5640_FOCUS_TIMEOUT_MS  8000

unsigned long lastCaptureTime = 0; // Last shooting time
int imageCount = 1;                // File Counter
bool camera_sign = false;          // Check camera status
bool sd_sign = false;              // Check sd status

// Save pictures to SD card
void photo_save(const char * fileName) {
  // Take a photo
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Failed to get camera frame buffer");
    return;
  }
  // Save photo to file
  writeFile(SD, fileName, fb->buf, fb->len);

  // Release image buffer
  esp_camera_fb_return(fb);

  Serial.println("Photo saved to file");
}

// SD card write file
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Writing file: %s\r\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

// Wait for the OV5640 continuous auto-focus to settle (FW_STATUS == 0x10 FOCUSED)
bool waitForOv5640Focus() {
  const uint32_t started = millis();
  uint8_t status = 0;
  while (millis() - started < OV5640_FOCUS_TIMEOUT_MS) {
    status = ov5640.getFWStatus();
    if (status == 0x10) {
      Serial.printf("OV5640 focus settled: FW_STATUS=0x%02X\n", status);
      return true;
    }
    delay(100);
  }
  Serial.printf("ERROR: OV5640 focus not settled within %u ms; last FW_STATUS=0x%02X\n",
                OV5640_FOCUS_TIMEOUT_MS, status);
  return false;
}

void setup() {
  Serial.begin(115200);
  while(!Serial); // When the serial monitor is turned on, the program starts to execute

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  camera_sign = true; // Camera initialization check passes

  // --- OV5640 auto-focus init (a key step missing from factory firmware; without it the lens defaults out of focus) ---
  sensor_t *s = esp_camera_sensor_get();
  if (s && s->id.PID == OV5640_PID) {
    Serial.println("OV5640 detected, initializing auto-focus...");
    // Switch to SXGA for focusing (the AF firmware needs >=1280x1024 to evaluate contrast)
    if (s->set_framesize(s, OV5640_AF_FOCUS_FRAMESIZE) != 0) {
      Serial.println("WARN: cannot set SXGA for AF focus, captures will be out of focus");
    } else if (!ov5640.start(s)) {
      Serial.println("WARN: OV5640 CHIPID check failed, AF skipped");
      s->set_framesize(s, config.frame_size); // restore the capture framesize
    } else {
      int r1 = ov5640.focusInit();                       // load focus firmware, 0 = success
      int r2 = (r1 == 0) ? ov5640.autoFocusMode() : -1;  // enable continuous auto-focus
      Serial.printf("  focusInit=%d autoFocusMode=%d\n", r1, r2);
      if (r1 == 0 && r2 == 0 && waitForOv5640Focus()) {
        Serial.println("OV5640 AF ready.");
      } else {
        Serial.println("ERROR: OV5640 AF setup failed; captures will be out of focus.");
      }
      // Restore the capture framesize
      if (s->set_framesize(s, config.frame_size) != 0) {
        Serial.println("WARN: cannot restore capture framesize");
      }
    }
  }

  // Initialize SD card
  if(!SD.begin(21)){
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
  if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true; // sd initialization check passes

  Serial.println("Photos will begin in one minute, please be ready.");
}

void loop() {
  // Camera & SD available, start taking pictures
  if(camera_sign && sd_sign){
    // Get the current time
    unsigned long now = millis();

    //If it has been more than 1 minute since the last shot, take a picture and save it to the SD card
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Saved picture: %s\r\n", filename);
      Serial.println("Photos will begin in one minute, please be ready.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
}
```

:::note
このプログラムをコンパイルして書き込むには、他に 2 つの依存ライブラリが必要です。GitHub にアクセスして、それらをすべてダウンロードしてください。
:::

XIAO ESP32S3 用のプログラムを書き込んでください。書き込みが正常に完了したらシリアルモニタを開き、カメラを撮影したい対象物に向けて 1 分ほど待つと、撮影した画像が SD カードに保存されます。その後は、XIAO が 1 分ごとに写真を撮影します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/89.png" style={{width:700, height:'auto'}}/></div>

microSD カードを取り外し、カードリーダーを使って中身を確認すると、保存された写真を見ることができます。

### プログラムの解説

プログラムは、使用するカメラおよび SD カードのライブラリと、XIAO ESP32S3 用に定義したいくつかのピン依存ファイルのインポートから始まります。

次に、読みやすくするために 2 つの関数を順番に定義します。1 つは撮影した画像を SD カードに保存する関数 `photo_save()`、もう 1 つはファイルを書き込む関数 `writeFile()` です。

```cpp
// Save pictures to SD card
void photo_save(const char * fileName) {
  // Take a photo
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Failed to get camera frame buffer");
    return;
  }
  // Save photo to file
  writeFile(SD, fileName, fb->buf, fb->len);

  // Release image buffer
  esp_camera_fb_return(fb);

  Serial.println("Photo saved to file");
}
```

microSD カードに画像を保存する関数では、主に 2 つの処理を行います。1 つ目は画像の取得、2 つ目はファイルを書き込む関数の呼び出しです。

画像の取得は `esp_camera_fb_get()` で行うことができ、画像情報はポインタ `fb` に保存されます。その後、`fb` の `buf` を SD カードに書き込むことができます。

`Setup()` 関数では、プログラムの大部分がカメラピンの設定とカメラの初期化になっており、基本的にはデフォルトのままそのまま利用できます。カメラの画素数や画質に要件がある場合は、[Camera Library Overview](#カメラ-ライブラリ-概要) の章で説明している関数に従って、内部の値を調整してください。

`loop()` 関数で最後に行う処理は、1 分ごとに写真を撮影するよう制御し、撮影した写真のファイル名の末尾に連番を付けることです。

```cpp
if(camera_sign && sd_sign){
    // Get the current time
    unsigned long now = millis();

    //If it has been more than 1 minute since the last shot, take a picture and save it to the SD card
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Saved picture：%s\n", filename);
      Serial.println("Photos will begin in one minute, please be ready.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
```

`loop()` を実行する前に、2 つのフラグチェック `camera_sign` と `sd_sign` を設定します。これにより、`Setup()` 内でカメラと SD カードのチェックが正常に完了した後でのみ、撮影および保存のタスクが実行されることが保証されます。

## プロジェクト I: ハンドヘルドカメラの作成

次に、上記の理論知識を使って超小型の撮影ガジェットを作成します。このプロジェクトの最終的な成果物は、Seeed Studio Round Display for XIAO にライブカメラ映像を表示し、撮影したい対象物を捉えたら画面にタッチして写真を撮影し、microSD カードに記録できるようにすることです。

### 事前準備

このプロジェクトを始める前に、以下のハードウェアを事前に用意する必要があります。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

このプロジェクトでは Round Display for XIAO を使用するため、実行前に **[ディスプレイ拡張ボードの Wiki 環境構成](https://wiki.seeedstudio.com/ja/get_start_round_display#ソフトウェア-準備)** の内容を読み、必要なライブラリをインストールして TFT 環境を構成してください。

XIAO EPS32S3 Sense は、SD カードスロットに接続された 3 つのプルアップ抵抗 R4～R6 を備えて設計されており、Round Display 側にもプルアップ抵抗があるため、両方のボードを同時に使用すると 2 つの SD カードスロットが競合します。この問題を解決する方法は 2 つあります。

- **オプション 1 — ハードウェア変更なし（本プロジェクトのサンプルコードで使用）**: J3 をそのままにして、XIAO ESP32S3 Sense 本体の microSD カードスロットを使用します。**エンジニア Mjrovai** によって示されているように、これはソフトウェアレベルで実現可能であり、以下のコードでは `SD_CS_PIN 21`（Sense のカードリーダー）で SD カードを初期化します。詳細は **[彼の方法と手順](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)** を参照してください。
- **オプション 2 — J3 をカットして Round Display のスロットを使用**: XIAO ESP32S3 Sense 拡張ボード上の J3 を切り離します。J3 を切断すると、XIAO ESP32S3 Sense 上の SD カードスロットは動作しなくなるため、microSD カードを Round Display 上の SD カードスロットに挿入し、コード内の `SD_CS_PIN` を `21` から `D2` に変更する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

:::tip
オプション 2 を選択する場合は、刃物で J3 の接続を切る際にカメラを傷つけないよう、先にカメラモジュールを取り外すことをお勧めします。
:::

次に、microSD カード、XIAO ESP32S3 Sense、Round Display の順に取り付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

### 具体的な操作

以下のリンクから、完成したプログラムコードと必要な依存ファイル一式を入手できます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/round_display_take_picture_fix" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

以下が、このプロジェクト用の Arduino プログラムです。

```c
/*
 * This code was adapted from the original, developed by Seeed Studio:
 * https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera
 *
 * Important changes:
 *  - It is not necessary to to cut off J3 on the XIAO ESP32S3 Sense expansion board.
 *  It is possible to use the XIAO's SD Card Reader. For that you need use SD_CS_PIN as 21.
 *
 * - The camera buffer data should be captured as RGB565 (raw image) with a 240x240 frame size
 * to be displayed on the round display. This raw image should be converted to jpeg before save
 * in the SD card. This can be done with the line:
 * bool ok = frame2jpg(fb, 12, &out_buf, &out_len);
 *
 * - The XCLK_FREQ_HZ should be reduced from 20KHz to 10KHz in order to prevent
 * the message "no EV-VSYNC-OVF message" that appears on Serial Monitor (probably due the time
 * added for JPEG conversion.
 *
 * Adapted by MRovai @02June23
 *
 * Generic OV5640 auto-focus patch (only applies to the OV5640; fixed-focus modules
 * such as the OV3660/NT99141 are skipped automatically):
 *  - After esp_camera_init, run focusInit / autoFocusMode only when PID == OV5640_PID
 *  - In RGB565 mode do not switch to SXGA (it would overflow the fb buffer);
 *    rely on the OV5640's internal full-size image for focus evaluation
*/

#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "esp_camera.h"
#include "ESP32_OV5640_AF.h"   // OV5640 auto-focus library (github.com/0015/ESP32-OV5640-AF), OV5640 only
#include "FS.h"
#include "SD.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM
#define TOUCH_INT D7

/*
 * NOTE: This sketch keeps J3 intact and uses the microSD card slot on the
 * XIAO ESP32S3 Sense itself (SD_CS_PIN 21), so no hardware change is needed
 * (Mjrovai's software-level method). If you have cut J3 and want to use the
 * Round Display card reader instead, comment out the 21 line and use D2.
 */

#define SD_CS_PIN 21 // ESP32S3 Sense SD Card Reader
//#define SD_CS_PIN D2 // XIAO Round Display SD Card Reader (requires J3 cut)

#include "camera_pins.h"

// Width and height of round display
const int camera_width = 240;
const int camera_height = 240;

// File Counter
int imageCount = 1;
bool camera_sign = false;          // Check camera status
bool sd_sign = false;              // Check sd status

TFT_eSPI tft = TFT_eSPI();

// --- OV5640 AF (OV5640 module only) ---
OV5640 ov5640 = OV5640();
#define OV5640_FOCUS_TIMEOUT_MS 8000

// Wait for the OV5640 continuous auto-focus to settle (FW_STATUS == 0x10 FOCUSED)
bool waitForOv5640Focus() {
  const uint32_t started = millis();
  uint8_t status = 0;
  while (millis() - started < OV5640_FOCUS_TIMEOUT_MS) {
    status = ov5640.getFWStatus();
    if (status == 0x10) {
      Serial.printf("OV5640 focus settled: FW_STATUS=0x%02X\n", status);
      return true;
    }
    delay(100);
  }
  Serial.printf("WARN: OV5640 focus not settled within %u ms; last FW_STATUS=0x%02X\n",
                OV5640_FOCUS_TIMEOUT_MS, status);
  return false;
}

// SD card write file
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Writing file: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

bool display_is_pressed(void)
{
    if(digitalRead(TOUCH_INT) != LOW) {
        delay(3);
        if(digitalRead(TOUCH_INT) != LOW)
        return false;
    }
    return true;
}

void setup() {
  Serial.begin(115200);
  delay(300);
  Serial.println();
  Serial.println("==== round_display_take_picture_fix ====");

  // Camera pinout
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 10000000; // Reduced XCLK_FREQ_HZ from 20KHz to 10KHz (no EV-VSYNC-OVF message)
  config.frame_size = FRAMESIZE_240X240;
  config.pixel_format = PIXFORMAT_RGB565;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  // RGB565 240x240 uses a single internal-DRAM buffer: TFT_eSPI's SPI DMA can read
  // DRAM directly, while reading from PSRAM crashes pushColors (see the Setup66 + PSRAM issue notes)
  config.fb_location = CAMERA_FB_IN_DRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
  Serial.println("Camera ready");
  camera_sign = true; // Camera initialization check passes

  // --- OV5640 auto-focus init (OV5640 only; fixed-focus modules are skipped) ---
  // A key step missing from factory firmware: esp_camera_init does not set up AF,
  // so the OV5640 defaults to an out-of-focus lens.
  // In RGB565 mode do not switch to SXGA (it would overflow the fb buffer);
  // rely on the OV5640's internal full-size image for focus evaluation.
  sensor_t *s = esp_camera_sensor_get();
  if (s && s->id.PID == OV5640_PID) {
    Serial.println("OV5640 detected, initializing auto-focus...");
    if (!ov5640.start(s)) {
      Serial.println("WARN: OV5640 CHIPID check failed, AF skipped");
    } else {
      int r1 = ov5640.focusInit();                       // load focus firmware, 0 = success
      int r2 = (r1 == 0) ? ov5640.autoFocusMode() : -1;  // enable continuous auto-focus
      Serial.printf("  focusInit=%d autoFocusMode=%d\n", r1, r2);
      if (r1 == 0 && r2 == 0) {
        waitForOv5640Focus();
      } else {
        Serial.println("ERROR: OV5640 AF setup failed; captures will be out of focus.");
      }
    }
  } else {
    Serial.printf("PID=0x%04X (not OV5640), AF skipped - fixed-focus module works as-is.\n",
                  s ? s->id.PID : 0);
  }

  // Display initialization
  tft.init();
  pinMode(TFT_BL, OUTPUT);
  digitalWrite(TFT_BL, HIGH);  // turn on the backlight
  tft.setRotation(1);
  tft.fillScreen(TFT_WHITE);

  // Initialize SD card - Card Reader under the camera (21)
  // Change to D2 for using Display Card Reader
  if(!SD.begin(SD_CS_PIN)){
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
  if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true; // sd initialization check passes
}

void loop() {
  if( sd_sign && camera_sign){

    // Take a photo
    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("Failed to get camera frame buffer");
      return;
    }

    if(display_is_pressed()){
      Serial.println("display is touched");
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);

      // RGB565 -> JPEG, then save to SD (frame2jpg returns bool: true = success)
      size_t out_len = 0;
      uint8_t* out_buf = NULL;
      bool ok = frame2jpg(fb, 12, &out_buf, &out_len);
      if (ok) {
        // Save photo to file
        writeFile(SD, filename, out_buf, out_len);
        Serial.printf("Saved picture: %s\n", filename);
        imageCount++;
        free(out_buf);
      } else {
        Serial.println("JPEG conversion failed");
      }
    }

    // Draw image on the round display
    uint8_t* buf = fb->buf;
    uint32_t len = fb->len;
    tft.startWrite();
    tft.setAddrWindow(0, 0, camera_width, camera_height);
    tft.pushColors(buf, len);
    tft.endWrite();

    // Release image buffer
    esp_camera_fb_return(fb);

    delay(10);
  }
}
```

プログラムを XIAO ESP32S3 Sense に書き込みます。書き込みが成功しても画面が点灯しない場合は、XIAO 上の Reset ボタンをクリックする必要があるかもしれません。その後、Round Display にリアルタイムでモニタリング画面が表示されます。画面上の任意の場所をクリックすると、その画像が記録され、microSD カードに保存されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/95.gif" style={{width:800, height:'auto'}}/></div>

### プログラムの注釈

カメラと microSD カードの設定は前の内容と同じなので、ここでは繰り返しません。microSD カードの使用方法については、[XIAO ESP32S3 Sense file system](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem) Wiki を参照して使い方を学ぶことができます。

```cpp
// Take a photo
camera_fb_t *fb = esp_camera_fb_get();
if (!fb) {
  Serial.println("Failed to get camera frame buffer");
  return;
}

...

// Release image buffer
esp_camera_fb_return(fb);

delay(10);
```

上記のプログラムは、カメラを呼び出すための基本的なコードブロックであり、画面キャプチャ、例外終了、写真バッファの解放という 3 つの部分に分かれています。

```cpp
if(display_is_pressed()){
  Serial.println("display is touched");
  char filename[32];
  sprintf(filename, "/image%d.jpg", imageCount);
  // Save photo to file
  writeFile(SD, filename, fb->buf, fb->len);
  Serial.printf("Saved picture：%s\n", filename);
  imageCount++;
}
```

上記のプログラムは、画面がタッチされたかどうかをチェックするために使用されます。タッチされている場合、コードはキャプチャした画像を microSD カード上のファイルに保存します。

```cpp
// Decode JPEG images
uint8_t* buf = fb->buf;
uint32_t len = fb->len;
tft.startWrite();
tft.setAddrWindow(0, 0, camera_width, camera_height);
tft.pushColors(buf, len);
tft.endWrite();
```

このコード部分は、キャプチャした画像を画面に表示します。まず `camera_fb_t` 構造体から画像バッファとその長さを取得します。次に、画面が画像データを受信できるように設定し、`pushColors()` 関数を使用して画像を画面に表示します。

## 短い動画を記録して microSD カードに保存する

:::note
現在サポートされているエンコードライブラリのリソースが少なすぎ、操作も非常に複雑で面倒なため、MCU 上での動画エンコード出力は推奨しません。

このサンプルでは動画エンコードは扱っておらず、出力される動画はフレームごとに AVI の MJPG を合成したものなので、動画の録画品質はあまり良くなく、満足のいくものではないかもしれません。このチュートリアルの目的は、短い動画を記録するためのシンプルな方法とアイデアを提供することにあり、より良いソリューションをお持ちの方からの PR の提出を歓迎します。
:::

前の章では、カメラを使って画像をキャプチャする方法を習得しました。単一の画像をつなぎ合わせることで、動きのある動画が作られることも分かっています。この理論に基づき、本章のプロジェクトでは、1 分ごとに 10 秒間の動画を記録し、それを microSD カードに保存するプログラムの書き方を案内します。

以下のリンクから、完成したプログラムコードと必要な依存ファイルを入手できます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/record_video" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

このプロジェクト用の Arduino プログラムは次のとおりです。

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include "esp_timer.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

const int SD_PIN_CS = 21;

File videoFile;
bool camera_sign = false;
bool sd_sign = false;
unsigned long lastCaptureTime = 0;
unsigned long captureDuration = 10000; // 10 seconds
int imageCount = 0;

void setup() {
  Serial.begin(115200);
  while(!Serial);

  // Initialize the camera
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size = FRAMESIZE_SVGA;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  camera_sign = true;

  // Initialize the SD card
  if (!SD.begin(SD_PIN_CS)) {
    Serial.println("SD card initialization failed!");
    return;
  }

  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
  if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true;

  Serial.println("Video will begin in one minute, please be ready.");
}

void loop() {
  // Camera & SD available, start taking video
  if (camera_sign && sd_sign) {
    // Get the current time
    unsigned long now = millis();

    //If it has been more than 1 minute since the last video capture, start capturing a new video
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/video%d.avi", imageCount);
      videoFile = SD.open(filename, FILE_WRITE);
      if (!videoFile) {
        Serial.println("Error opening video file!");
        return;
      }
      Serial.printf("Recording video：%s\n", filename);
      lastCaptureTime = now;

      // Start capturing video frames
      while ((millis() - lastCaptureTime) < captureDuration) {
        camera_fb_t *fb = esp_camera_fb_get();
        if (!fb) {
          Serial.println("Error getting framebuffer!");
          break;
        }
        videoFile.write(fb->buf, fb->len);
        esp_camera_fb_return(fb);
      }

      // Close the video file
      videoFile.close();
      Serial.printf("Video saved: %s\n", filename);
      imageCount++;

      Serial.println("Video will begin in one minute, please be ready.");

      // Wait for the remaining time of the minute
      delay(60000 - (millis() - lastCaptureTime));
    }
  }
}
```

コードを XIAO ESP32S3 Sense に書き込み、シリアルモニタをオンにします。このとき、カメラの位置を記録したい対象物に合わせてください。1 分後、XIAO 上のオレンジ色の LED が点滅し始め、録画が開始されて microSD カードに保存されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/96.png" style={{width:800, height:'auto'}}/></div>

:::note
このプログラムではエンコードやフレームレートなどの設定を行っていないため、記録された映像の各フレームに変化がない場合、動画を開いても 1 秒しか再生されないことがあります。
:::

### プログラムの注釈

動画を記録する手順における中核かつ重要な点は、10 秒間連続してフォトストリームを取得し続け、それを途切れることなく microSD カードに書き込むことです。

```cpp
// Start capturing video frames
while ((millis() - lastCaptureTime) < captureDuration) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Error getting framebuffer!");
    break;
  }
  videoFile.write(fb->buf, fb->len);
  esp_camera_fb_return(fb);
}
```

その上で、外側に 1 分間の待機判定の層をネストし、1 分ごとに動画が開始されるようにしています。

```cpp
//If it has been more than 1 minute since the last video capture, start capturing a new video
if ((now - lastCaptureTime) >= 60000) {

  ...

  delay(60000 - (millis() - lastCaptureTime));
}
```

## プロジェクト II: ビデオストリーミング

このチュートリアルの最後に、ビデオストリーミングプロジェクトを紹介します。このプロジェクトでは、XIAO ESP32S3 Sense が作成した Web ページ上でライブビデオストリームを見ることができ、いくつかのパラメータを設定することで画面の表示を変更できます。

以下のリンクから、完成したプログラムコードと必要な依存ファイルを入手できます。

Arduino 上で **2.0.x** バージョンの esp32 boards パッケージを使用している場合は、次からダウンロードしてください：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_2.0.x" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

もし Arduino 上で **3.0.x** バージョンの esp32 boards パッケージを使用している場合は、次からダウンロードしてください：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_3.0.x" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

このプロジェクト用の Arduino プログラムは次のとおりです。

```cpp
#include "esp_camera.h"
#include "ESP32_OV5640_AF.h"   // OV5640 auto-focus library (OV5640 only)
#include <WiFi.h>

//
// WARNING!!! PSRAM IC required for UXGA resolution and high JPEG quality
//            Ensure ESP32 Wrover Module or other board with PSRAM is selected
//            Partial images will be transmitted if image exceeds buffer size
//
//            You must select partition scheme from the board menu that has at least 3MB APP space.
//            Face Recognition is DISABLED for ESP32 and ESP32-S2, because it takes up from 15
//            seconds to process single frame. Face Detection is ENABLED if PSRAM is enabled as well

// ===================
// Select camera model
// ===================
#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM
#include "camera_pins.h"

// ===========================
// Enter your WiFi credentials
// ===========================
const char *ssid = "**********";
const char *password = "**********";

void startCameraServer();
void setupLedFlash(int pin);

// --- OV5640 AF (OV5640 module only; fixed-focus modules such as the OV3660/NT99141 are skipped automatically) ---
OV5640 ov5640 = OV5640();
#define OV5640_AF_FOCUS_FRAMESIZE FRAMESIZE_SXGA  // AF focus evaluation requires >=1280x1024
#define OV5640_FOCUS_TIMEOUT_MS 8000
bool waitForOv5640Focus() {
  const uint32_t started = millis();
  uint8_t status = 0;
  while (millis() - started < OV5640_FOCUS_TIMEOUT_MS) {
    status = ov5640.getFWStatus();
    if (status == 0x10) { Serial.printf("OV5640 focus settled: FW_STATUS=0x%02X\n", status); return true; }
    delay(100);
  }
  Serial.printf("WARN: OV5640 focus not settled; last FW_STATUS=0x%02X\n", status);
  return false;
}

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;  // for streaming
  //config.pixel_format = PIXFORMAT_RGB565; // for face detection/recognition
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t *s = esp_camera_sensor_get();
  // --- OV5640 Heat Optimization: lower IO drive (0x302C bit[7:6] 11->00) ---
  if (s && s->id.PID == OV5640_PID) {
    s->set_reg(s, 0x302C, 0xC0, 0x00);
  }
  // --- OV5640 auto-focus init (OV5640 only; fixed-focus modules are skipped) ---
  if (s && s->id.PID == OV5640_PID) {
    Serial.println("OV5640 detected, initializing auto-focus...");
    if (s->set_framesize(s, OV5640_AF_FOCUS_FRAMESIZE) == 0 && ov5640.start(s)) {
      int r1 = ov5640.focusInit();
      int r2 = (r1 == 0) ? ov5640.autoFocusMode() : -1;
      Serial.printf("  focusInit=%d autoFocusMode=%d\n", r1, r2);
      if (r1 == 0 && r2 == 0) waitForOv5640Focus();
      s->set_framesize(s, config.frame_size);  // restore the capture framesize
    } else {
      Serial.println("WARN: OV5640 AF setup failed, skipped");
      s->set_framesize(s, config.frame_size);
    }
  }
  // initial sensors are flipped vertically and colors are a bit saturated
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // flip it back
    s->set_brightness(s, 1);   // up the brightness just a bit
    s->set_saturation(s, -2);  // lower the saturation
  }
  // drop down frame size for higher initial frame rate
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);
  }

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif

// Setup LED FLash if LED pin is defined in camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  startCameraServer();

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");
}

void loop() {
  // Do nothing. Everything is done in another task by the web server
  delay(10000);
}
```

プログラムを書き込む前に、コード内の WiFi 名とパスワードを自分のものに変更する必要があります。プログラムを書き込んだ後、XIAO ESP32C3 が WiFi への接続に成功すると、その IP アドレスが出力されます。

:::caution
XIAO ESP32S3 は長時間ストリーミングを実行すると非常に高温になります — やけどに注意してください。温度を下げるには、以下の [OV5640 Heat Optimization](#OV5640-熱最適化) パッチを適用してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/97.png" style={{width:800, height:'auto'}}/></div>

:::tip
上図のように、デバッグ情報の出力をオンにすると、シリアルモニタにチップコアのデバッグ情報がいくつか表示される場合があります。例えば `[0;31mE (2947) MFN: Partition Not found[0m` のようなものですが、これはプログラムの動作には影響しないので心配しないでください。
:::

ブラウザを開き（Edge または Google Chrome を推奨）、その IP アドレスを入力すると、ビデオの設定ページが表示されます。

:::note
ブラウザを使用しているデバイスは、XIAO と同じ LAN 上にある必要があることに注意してください。
:::

設定したいビデオストリーム仕様を構成したら、左側ツールバーの一番下にある **Start Stream** をクリックすると、カメラのライブ映像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:1000, height:'auto'}}/></div>

幸いなことに、ESP32 には公式に顔認識機能もプログラムに追加されています。画質を下げた状態で顔認識のボタンスイッチをオンにすることで、この機能を体験できます。

:::tip
パフォーマンス上の理由から、画面の画質は **CIF** より高くすることはできません。そうしないと、顔認識のスイッチをオンにしたときに Web ページでエラーがポップアップ表示されます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/99.png" style={{width:400, height:'auto'}}/></div>

おお、私の大きな顔が囲まれました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/100.png" style={{width:600, height:'auto'}}/></div>

## OV5640 オートフォーカス

### ハードウェアの準備

<div class="table-center">
  <table align="center">
    <tr>
        <th>XIAO ESP32S3 Sense 用 OV5640 カメラ</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html?qid=UXYOXT_08tfc9pt_1746512260418" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェアの準備

#### 方法 1

オープンソースコードを提供してくれた **@Eric** に特別な感謝を捧げます

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/0015/ESP32-OV5640-AF/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

**コード例**

``` cpp
#include "esp_camera.h"
#include <WiFi.h>
#include "ESP32_OV5640_AF.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

const char* ssid = "";
const char* password = "";

void startCameraServer();
void setupLedFlash(int pin);
OV5640 ov5640 = OV5640();

void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  //config.pixel_format = PIXFORMAT_RGB565; // for face detection/recognition
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t * s = esp_camera_sensor_get();
  // --- OV5640 Heat Optimization: lower IO drive (0x302C bit[7:6] 11->00) ---
  if (s && s->id.PID == OV5640_PID) {
    s->set_reg(s, 0x302C, 0xC0, 0x00);
  }
  ov5640.start(s);

    if (ov5640.focusInit() == 0) {
    Serial.println("OV5640_Focus_Init Successful!");
  }

  if (ov5640.autoFocusMode() == 0) {
    Serial.println("OV5640_Auto_Focus Successful!");
  }

// Setup LED FLash if LED pin is defined in camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  startCameraServer();

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");
}

void loop() {
  uint8_t rc = ov5640.getFWStatus();
  Serial.printf("FW_STATUS = 0x%x\n", rc);

  if (rc == -1) {
    Serial.println("Check your OV5640");
  } else if (rc == FW_STATUS_S_FOCUSED) {
    Serial.println("Focused!");
  } else if (rc == FW_STATUS_S_FOCUSING) {
    Serial.println("Focusing!");
  }
}

```

### 結果チャート

:::tip
フォーカス効果を確認するには、解像度を 1280×1024 以上にする必要があります。フォーカス中は画面が遅延するため、しばらく画面が更新されるのを待つ必要があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.gif" style={{width:700, height:'auto'}}/></div>

#### 方法 2

:::tip
フォーカス効果を確認するには、解像度を 1600×1200 以上にする必要があります。フォーカス中は画面が遅延するため、しばらく画面が更新されるのを待つ必要があります。
:::

次の zip ファイルをダウンロードして Arudino に追加します

- **[ZIP]** [OV5640 Auto](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640_AF.zip)

:::tip
方法 1 と方法 2 のライブラリ内の OV5640 は同時に存在することはできません
:::

```cpp
#include "esp_camera.h"
#include <WiFi.h>
#include "ESP32_OV5640_AF.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

const char *ssid = "";
const char *password = "";

void startCameraServer();
void setupLedFlash(int pin);
OV5640 ov5640 = OV5640();

void setup() {
  Serial.begin(115200);

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;
  config.grab_mode = CAMERA_GRAB_LATEST;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 10;
  config.fb_count = 2;

  if(psramFound()){
    config.jpeg_quality = 10;
    config.fb_count = 2;
    config.grab_mode = CAMERA_GRAB_LATEST;
  } else {
    // Limit the frame size when PSRAM is not available
    config.frame_size = FRAMESIZE_SVGA;
    config.fb_location = CAMERA_FB_IN_DRAM;
  }

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  // auto focus
#if 1
  sensor_t* sensor = esp_camera_sensor_get();
  // --- OV5640 Heat Optimization: lower IO drive (0x302C bit[7:6] 11->00) ---
  if (sensor && sensor->id.PID == OV5640_PID) {
    sensor->set_reg(sensor, 0x302C, 0xC0, 0x00);
  }
  int ret = 0;
  ov5640.start(sensor);

  if (ov5640.focusInit() == 0) {
      Serial.println("OV5640_Focus_Init Successful!");
  } else {
      Serial.println("OV5640_Focus_Init Failed!");
  }

  ret = ov5640.autoFocusMode(false);
  if (ret == 0) {
    Serial.println("OV5640_Auto_Focus Successful!");
  } else {
    Serial.printf("OV5640_Auto_Focus Failed! - [%d]\n", ret);
  }
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected");

  startCameraServer();

  Serial.printf("Camera Ready! Use 'http://%s' to connect\n", WiFi.localIP().toString().c_str());
}

void loop() {
  if (Serial.available()) {
    sensor_t* sensor = esp_camera_sensor_get();
    int ret = 0;

    switch (Serial.read()) {
      case 'b':
        ret = sensor->set_reg(sensor, 0x3022, 0xff, 0x03);
        Serial.printf("begin to auto focus - %d\n", ret);
        break;
      case 's':
        ret = sensor->set_reg(sensor, 0x3022, 0xff, 0x06);
        Serial.printf("focus stop here - %d\n", ret);
        break;
    }
  }

  uint8_t rc = ov5640.getFWStatus();
  Serial.printf("FW_STATUS = 0x%x\n", rc);

  if (rc == -1) {
    Serial.println("Check your OV5640");
  } else if (rc == FW_STATUS_S_FOCUSED) {
    Serial.println("Focused!");
  } else if (rc == FW_STATUS_S_FOCUSING) {
    Serial.println("Focusing!");
  } else {
  }

  delay(1000);
}
```

:::tip
モード 2 よりもフォーカス効果がはっきりしており、よりシャープな画像が得られるため、モード 1 を推奨します。
:::

## OV5640 の発熱最適化

OV5640 モジュールは、長時間連続で使用すると顕著に発熱します。このセクションでは、温度を下げる 2 つの方法を紹介します。ソフトウェアパラメータを調整する方法（方法 1）と、レジスタ設定によって IO ドライブ能力を下げる方法（方法 2）です。

### 方法 1: パラメータ調整による発熱低減

この Wiki のサンプルコードは、可能な限り最高の画質を得るためにチューニングされています。写真の例では UXGA 解像度（1600×1200）でダブルバッファの連続フレーム取得を行い、CPU は 240MHz で動作しているため、長時間の動作でボードが顕著に発熱します。もし温度が高すぎると感じる場合や、そこまで高い解像度が不要な場合は、以下の方法で消費電力を下げることができます。これらの多くは、単発撮影のシャープさには影響しません。

| レバー | 変更内容 | 発熱低減効果 | 画質に影響する？ |
|---|---|---|---|
| CPU 周波数 | Arduino IDE: `Tools → CPU Frequency: 240MHz` を `160MHz` に変更（または `setup()` 内に `setCpuFrequencyMhz(160);` を追加） | 中 | いいえ（センサーの撮像と JPEG エンコードは OV5640 内部で行われ、CPU とは独立しています） |
| フォーカス頻度 | 連続オートフォーカス（`autoFocusMode`）を、一定間隔でトリガーされるシングルショットフォーカスに切り替える、またはフォーカス間隔を長くする | 小 | 静止したシーンでは変化なし。動きのあるシーンでは再フォーカスに時間がかかる |
| フレーム取得 | `CAMERA_GRAB_LATEST` → `CAMERA_GRAB_WHEN_EMPTY`（カメラが利用可能なバッファを埋めることで、連続フレーム処理を減らします。オンデマンドキャプチャではなく、センサーをスタンバイにはしません） | 中 | 取得するフレームは、`CAMERA_GRAB_LATEST` の場合より数フレーム古い可能性があります。シャープネスには影響しません |
| 解像度 | `FRAMESIZE_UXGA` (1600×1200) → `FRAMESIZE_HD` (1280×720) または `SVGA` (800×600) | 大 | 画素数が減るため、拡大時の細部は少なくなります（画素ごとのシャープネスは変わりません） |
| ダブルバッファリング | `fb_count` を 2 から 1 に変更（上記のグラブモード変更と併用） | 中 | いいえ |

> 最もコストパフォーマンスが高い組み合わせは、解像度を下げてフレームバッファを 1 枚にし、キャプチャ処理のオーバーヘッドを減らすことです。つまり、解像度を 1 段階下げ、`CAMERA_GRAB_WHEN_EMPTY` と `fb_count = 1` を組み合わせます。温度ははっきりと下がり、単発キャプチャのシャープネスへの影響はほとんどありません。なお、`CAMERA_GRAB_WHEN_EMPTY` は利用可能なバッファを埋める動作であり、オンデマンドのセンサーキャプチャやスタンバイを提供するものではありません。

### 方法 2: IO ドライブ能力を下げて消費電力を削減する
:::tip
このセクションは **OV5640** カメラモジュールにのみ適用されます。OV2640 にはこのようなレジスタがなく、以下のコード中の `PID` チェックによって自動的にスキップされます。
:::

OV5640 を長時間連続動作させると（ビデオストリーミング、ライブプレビュー、連続オートフォーカスなど）、チップ温度は 70°C を超えることがあります。これはハードウェアレベルの根本原因であり、ソフトウェアだけで完全に解消することはできず、緩和することしかできません。

#### OV5640 が発熱する理由

1. **内部 DVDD レギュレータの電圧降下**: I/O 電源（DOVDD）が 2.8V で内部 DVDD レギュレータを使用している場合、大きな電圧降下そのものがかなりの電力を消費します（公式データシートに記載）。
2. **不適切な電源投入シーケンス** によりリーク電流が発生し、静的消費電力が増加します。
3. データシートでは、**センサーが未使用のときは外部 DVDD を含むすべての電源を切ることを強く推奨**しており、これは OV5640 のスタンバイ時消費電力が理想的ではないことを裏付けています。

唯一有効なソフトウェア上のレバーは、**IO ピンのドライブ電流を下げて** 動的消費電力を減らすことです。

#### 仕組み — レジスタ 0x302C

レジスタ `0x302C`（esp32-camera のソースでは `DRIVE_CAPABILITY` という名前）は、IO ピン（D0–D7, PCLK, VSYNC, HREF）のドライブ能力を制御します。重要なフィールドは **Bit[7:6]** です:

| Bit[7:6] | ドライブ能力 |
|---|---|
| `11` | 4x（チップの電源投入時デフォルト） |
| `10` | 3x |
| `01` | 2x |
| `00` | 1x（最も弱い、電流が最小、発熱も最小） |

Bit[7:6] を `11` から `00` に変更すると、ドライブ能力は 4x から 1x に下がります。原理はこれだけで、他に特別な仕掛けはありません。

#### コード — `esp_camera_init()` の直後に追加

```cpp
// --- OV5640 Heat Optimization ---
// Lower IO drive capability via register 0x302C.
// Bit[7:6]: 11=4x (chip default) -> 00=1x (lowest current, least heat).
// Drops chip temperature from ~70°C+ to ~54°C during continuous streaming.
// OV5640 only; the PID check skips OV2640, which has no such register.
sensor_t * s = esp_camera_sensor_get();
if (s && s->id.PID == OV5640_PID) {
  s->set_reg(s, 0x302C, 0xC0, 0x00);
}
```

- `esp_camera_init(&config)` — 通常どおり呼び出し、この関数自体は変更しません。内部で `sensor.reset()` を呼び出し、一連のデフォルトレジスタを書き込みます。
- `esp_camera_sensor_get()` — センサーと通信するために必要な `sensor_t *` ポインタを取得します。
- `if (s->id.PID == OV5640_PID)` — OV5640 にのみ適用されます。この wiki のすべてのサンプルは OV2640 とも互換性があり、`0x302C` は OV5640 固有なので、OV2640 に書き込んではいけません。ビデオストリーミングのサンプルでは、すでに同じ `if (s->id.PID == OV3660_PID)` パターンを使用しています。
- `s->set_reg(s, 0x302C, 0xC0, 0x00)` — `0x302C` を読み戻し、**Bit[7:6]** のみを `00` にクリアします（マスク `0xC0 = 0b11000000`, 値 `0x00`） 。その他のビットはライブラリが設定した値のまま残します。これは `0x03` を直接書き込むより安全で、ライブラリのデフォルト値に依存せず、ドライブ能力ビットだけに触れます。

#### 効果とリスク

- **効果**: 長時間の連続ストリーミング時に、OV5640 チップ温度は約 70°C 以上から約 54°C まで低下します（周囲温度やヒートシンクにより変動）。
- **リスク**: ドライブ能力を下げると信号エッジが遅くなり、PCB 配線のノイズ耐性に対する要求が高くなります。極端な場合、画像ノイズやサンプリングの歪みを引き起こす可能性があります。XIAO ESP32S3 Sense + OV5640（ヒートシンク付きバージョン）では、テスト上は影響は許容範囲内です。
- **適用範囲**: OV5640 のみ。OV2640 にはこのようなレジスタがなく、`PID` チェックによってスキップされます。

## トラブルシューティング

### Q1: XIAO ESP32S3 Sense と Round Display を同時に使用する場合、J3 ピンを切断する必要がありますか？どの SD カードスロットが使用できますか？

A: 原則として、XIAO ESP32S3 Sense と Round Display を同時に使用して microSD カードを使う場合は、J3 ピンを切断する必要があります。理由は、両方の拡張ボードの回路設計にプルアップ抵抗が含まれているため、理論上、2 つのプルアップ抵抗が同時に動作すると SD カードスロットが正しく動作しなくなるからです。SD カードのマウントに失敗したというエラーメッセージが表示されます。Round Display 側のプルアップ抵抗は遮断できないため、2 つを同時に使用する際にプルアップ抵抗が 1 つだけ動作するよう、Sense 拡張ボード側の J3 を切断する必要があります。したがって、両方を同時に使用する場合、有効になる SD カードスロットは Round Display 上のスロットのみとなります。

しかし、**XIAO ESP32S3 Sense 上の microSD カードスロットも同時に使用するための新しい方法を提案してくれたエンジニア Mjrovai 氏に感謝する必要があります。**これはソフトウェアレベルでも実現可能です。**[彼の方法と手順](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)** を参照できます。

### Q2: OV5640 が長時間のストリーミング中に非常に熱くなります。どうすればよいですか？

A: これは連続キャプチャ中の OV5640 では想定される動作です。[OV5640 Heat Optimization](#OV5640-Heat-Optimization) で説明したように、レジスタ `0x302C` を通じて IO ドライブ能力を下げてください。これによりチップ温度は約 70°C 以上から約 54°C まで下がります。高解像度が不要な場合は、フレームサイズを下げ、`CAMERA_GRAB_WHEN_EMPTY` に切り替えることで、さらに消費電力を削減できます。

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
