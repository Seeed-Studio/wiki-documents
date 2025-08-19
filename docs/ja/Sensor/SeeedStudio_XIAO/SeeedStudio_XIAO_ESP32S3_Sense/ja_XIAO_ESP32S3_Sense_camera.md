---
description: このチュートリアルでは、XIAO ESP32S3 Senseのカメラを正しく使用する方法を説明します。
title: Senseバージョンのカメラ使用法
keywords:
- xiao esp32s3
- esp32s3
- カメラ
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_camera_usage
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32S3 Senseでのカメラ使用法

:::tip
このチュートリアルの内容は、Seeed Studio XIAO ESP32S3 Senseにのみ適用されます。
:::

このチュートリアルでは、XIAO ESP32S3 Senseのカメラモジュールの使用方法を説明します。このチュートリアルは以下の部分に分かれています。まず、ESP32が提供するカメラ機能とその機能について説明します。次に、写真撮影とビデオ録画の2つの側面でカメラの使用方法を紹介し、最後に写真撮影とビデオ録画に関連するいくつかの面白いプロジェクトを作成します。

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

## はじめに

このチュートリアルでは、microSDカード、カメラ、アンテナなどを使用する場合があります。以下の材料を準備し、プロジェクトのニーズに応じて正しくインストールしてください。

#### アンテナの取り付け

XIAO ESP32S3の前面左下には、独立した「WiFi/BTアンテナコネクタ」があります。WiFi/Bluetooth信号をより良くするために、パッケージ内のアンテナを取り出し、コネクタに取り付ける必要があります。

アンテナの取り付けには少しコツがあります。直接強く押し込むと、非常に難しく感じ、指が痛くなるでしょう！正しい取り付け方法は、まずアンテナコネクタの片側をコネクタブロックに入れ、次にもう片側を少し押し込むことで、アンテナが取り付けられます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

### 拡張ボードの取り付け（Sense用）

拡張ボードの取り付けは非常に簡単です。拡張ボードのコネクタをXIAO ESP32S3のB2Bコネクタに合わせ、強く押し込んで「カチッ」という音が聞こえたら取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

現在、OV5640という新しい強力なカメラがXIAO ESP32S3 Senseに完全対応しており、購入すればカメラを交換して使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
</div>

OV5640の詳細なパラメータ情報を知りたい場合は、以下の表を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Wiki内のカメラに関するすべてのプログラムは、OV5640およびOV2640カメラの両方に対応しています。
:::

### microSDカードの準備

XIAO ESP32S3 Senseは最大**32GB**のmicroSDカードをサポートしています。そのため、XIAO用にmicroSDカードを購入する場合は、この仕様を参照してください。また、使用する前にmicroSDカードを**FAT32**形式にフォーマットしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

フォーマット後、microSDカードをmicroSDカードスロットに挿入できます。挿入方向に注意してください。金色の端子が内側を向くようにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### 拡張ボード用カメラスロット回路設計

XIAO ESP32S3 SenseのカードスロットはESP32-S3の14個のGPIOを占有しており、占有されるピンの詳細は以下の表に示されています。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">カメラ</th>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">カメラ</th>
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

### PSRAMオプションを有効にする

ESP32のPSRAMは、ESP32チップ上の外部PSRAM（擬似静的ランダムアクセスメモリ）を指し、ESP32システムの利用可能なメモリを増やすための追加のメモリ空間を提供します。ESP32システムにおいて、PSRAMは以下の主な用途があります：

1. **利用可能なRAMの拡張**：ESP32の内蔵RAMは限られており、特に画像処理や音声処理など大量のメモリを必要とするアプリケーションでは、内蔵RAMが不足する場合があります。PSRAMを使用することで、ESP32の利用可能なRAMを拡張し、これらのアプリケーションのニーズを満たすことができます。

2. **メモリアクセスの高速化**：PSRAMは外部メモリであるため、内蔵RAMよりもアクセス速度は遅いですが、キャッシュや一時メモリとして使用することで、メモリアクセスやデータ処理を高速化できます。

3. **バッファのストレージ**：ネットワークバッファやオーディオバッファなど、大きなバッファを必要とするアプリケーションでは、PSRAMが十分なストレージスペースを提供し、メモリ不足の状況を回避できます。

このチュートリアルの内容では、カメラが正常に動作することを保証するために、**Arduino IDEのPSRAM機能を有効にする必要があります**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>


## カメラライブラリの概要

始める前に、この章を読んで一般的なカメラ機能を理解することをお勧めします。これにより、これらの機能を使用して独自のプロジェクト開発を完了したり、プログラムをより簡単に読み取ることができるようになります。

### パートI: esp_camera.h

1. **カメラ初期化のための設定構造体**

以下は設定の例で、実際のピンの状況に応じて記入してください。

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

        .xclk_freq_hz   = 20000000, // イメージセンサーのクロック周波数
        .fb_location = CAMERA_FB_IN_PSRAM; // フレームバッファの保存場所を設定
        .pixel_format   = PIXFORMAT_JPEG, // 画像のピクセルフォーマット: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size     = FRAMESIZE_UXGA, // 画像の解像度サイズ: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality   = 12, // JPEG画像の品質（0～63の範囲）
        .fb_count       = 2, // 使用するフレームバッファの数
        .grab_mode      = CAMERA_GRAB_WHEN_EMPTY // 画像キャプチャモード
    };
```

2. **カメラドライバの初期化**

上記の形式で`camera_example_config`を設定した後、この関数を使用してカメラドライバを初期化する必要があります。

```cpp
esp_err_t esp_camera_init(const camera_config_t* config);
```

- **入力パラメータ**: カメラ設定パラメータ

- **出力**: 成功時にESP_OK

:::note
現在、この関数は一度しか呼び出すことができず、このモジュールを非初期化する方法はありません。
:::

3. **フレームバッファへのポインタを取得**

```cpp
camera_fb_t* esp_camera_fb_get();
```

カメラフレームバッファのデータ構造：

```cpp
typedef struct {
    uint8_t * buf;              /*!< ピクセルデータへのポインタ */
    size_t len;                 /*!< バッファの長さ（バイト単位） */
    size_t width;               /*!< バッファの幅（ピクセル単位） */
    size_t height;              /*!< バッファの高さ（ピクセル単位） */
    pixformat_t format;         /*!< ピクセルデータのフォーマット */
    struct timeval timestamp;   /*!< フレームの最初のDMAバッファの起動からのタイムスタンプ */
} camera_fb_t;
```

4. **フレームバッファを再利用のために返却**

```cpp
void esp_camera_fb_return(camera_fb_t * fb);
```

- **入力パラメータ**: フレームバッファへのポインタ

5. **イメージセンサー制御構造体へのポインタを取得**

```cpp
sensor_t * esp_camera_sensor_get();
```

- **出力**: センサーへのポインタ

6. **カメラ設定を不揮発性ストレージ（NVS）に保存**

```cpp
esp_err_t esp_camera_save_to_nvs(const char *key);
```

- **入力パラメータ**: カメラ設定用の一意のNVSキー名

7. **不揮発性ストレージ（NVS）からカメラ設定を読み込む**

```cpp
esp_err_t esp_camera_load_from_nvs(const char *key);
```

- **入力パラメータ**: カメラ設定用の一意のNVSキー名


### パートII: img_converters.h

1. **画像バッファをJPEGに変換**

```cpp
bool fmt2jpg_cb(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **入力パラメータ**:
    - **src**:       RGB565、RGB888、YUYVまたはGRAYSCALE形式のソースバッファ
    - **src_len**:   ソースバッファの長さ（バイト単位）
    - **width**:     ソース画像の幅（ピクセル単位）
    - **height**:    ソース画像の高さ（ピクセル単位）
    - **format**:    ソース画像のフォーマット
    - **quality**:   出力JPEG画像の品質
    - **cp**:        出力JPEGのバイトを書き込むために呼び出されるコールバック
    - **arg**:       コールバックに渡されるポインタ

- **出力**: 成功時にtrue

2. **カメラフレームバッファをJPEGに変換**

```cpp
bool frame2jpg_cb(camera_fb_t * fb, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **入力パラメータ**:
    - **fb**:       ソースカメラフレームバッファ
    - **quality**:  出力JPEG画像の品質
    - **cp**:       出力JPEGのバイトを書き込むために呼び出されるコールバック
    - **arg**:      コールバックに渡されるポインタ

- **出力**: 成功時にtrue

3. **画像バッファをJPEGバッファに変換**

```cpp
bool fmt2jpg(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **入力パラメータ**:
    - **src**:       RGB565、RGB888、YUYV または GRAYSCALE フォーマットのソースバッファ
    - **src_len**:   ソースバッファのバイト単位の長さ
    - **width**:     ソース画像のピクセル単位の幅
    - **height**:    ソース画像のピクセル単位の高さ
    - **format**:    ソース画像のフォーマット
    - **quality**:   出力されるJPEG画像の品質
    - **out**:       結果バッファのアドレスを格納するためのポインタ。使用後は必ずポインタを解放する必要があります。
    - **out_len**:   出力バッファの長さを格納するためのポインタ

- **出力**: 成功時は true

4. カメラフレームバッファをJPEGバッファに変換します。

```cpp
bool frame2jpg(camera_fb_t * fb, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **入力パラメータ**:
    - **fb**:       ソースカメラフレームバッファ
    - **quality**:  出力されるJPEG画像の品質
    - **out**:      結果バッファのアドレスを格納するためのポインタ
    - **out_len**:  出力バッファの長さを格納するためのポインタ

- **出力**: 成功時は true

5. 画像バッファをBMPバッファに変換します。

```cpp
bool fmt2bmp(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t ** out, size_t * out_len);
```

- **入力パラメータ**:
    - **src**:       RGB565、RGB888、YUYV または GRAYSCALE フォーマットのソースバッファ
    - **src_len**:   ソースバッファのバイト単位の長さ
    - **width**:     ソース画像のピクセル単位の幅
    - **height**:    ソース画像のピクセル単位の高さ
    - **format**:    ソース画像のフォーマット
    - **quality**:   出力されるJPEG画像の品質
    - **out**:       結果バッファのアドレスを格納するためのポインタ
    - **out_len**:   出力バッファの長さを格納するためのポインタ

- **出力**: 成功時は true

6. カメラフレームバッファをBMPバッファに変換します。

```cpp
bool frame2bmp(camera_fb_t * fb, uint8_t ** out, size_t * out_len);
```

- **入力パラメータ**:
    - **fb**:       ソースカメラフレームバッファ
    - **quality**:  出力されるJPEG画像の品質
    - **cp**:       出力JPEGのバイトを書き込むために呼び出されるコールバック
    - **arg**:      コールバックに渡されるポインタ

- **出力**: 成功時は true

### パート III: app_httpd.cpp

:::note
このライブラリの紹介は、[ビデオ保存端末の作成 -- WebServer ベース](#project-iii-create-a-video-preservation-terminal----based-webserver)セクションに基づいています。このライブラリは主に、Webサーバーの画像取得および顔認識機能を実行するために使用されます。ESPのオンボードパッケージには直接含まれていません。
:::

1. 顔認識機能。

```cpp
static int run_face_recognition(fb_data_t *fb, std::list<dl::detect::result_t> *results)
```

- **入力パラメータ**:
    - **fb**: 画像データを含むフレームバッファを表す構造体へのポインタ
    - **results**: 検出された顔の結果リストへのポインタ

2. BMP画像ファイルのHTTPリクエストを処理します。

```cpp
static esp_err_t bmp_handler(httpd_req_t *req)
```

- **入力パラメータ**: HTTPリクエストを表す構造体へのポインタ

3. JPEG画像データをストリーミング形式でエンコードします。

```cpp
static size_t jpg_encode_stream(void *arg, size_t index, const void *data, size_t len)
```

- **入力パラメータ**:
    - **arg**: 関数に渡されるユーザー定義の引数へのポインタ
    - **index**: 画像データ内の現在の位置を示すインデックス値
    - **data**: エンコードする画像データを含むバッファへのポインタ
    - **len**: データバッファの長さ

4. カメラから画像をキャプチャおよびストリーミングするHTTPリクエストを処理します。

```cpp
static esp_err_t capture_handler(httpd_req_t *req)
```

- **入力パラメータ**: HTTPリクエストを表す構造体へのポインタ

5. カメラからビデオをストリーミングするHTTPリクエストを処理します。

```cpp
static esp_err_t stream_handler(httpd_req_t *req)
```

- **入力パラメータ**: HTTPリクエストを表す構造体へのポインタ

6. HTTP経由でビデオをキャプチャおよびストリーミングするカメラサーバーを初期化して開始します。

```cpp
void startCameraServer()
```

## カメラで写真を撮る

次に、カメラの最も基本的な使用方法から始めます。例えば、まずカメラを使用して画像を取得します。この最初のプロジェクトでは microSD カードを使用します。このプログラムの主なタスクは、カメラの映像を毎分取得し、その映像を microSD に保存することです。

始める前に、私と同じように microSD カードとカメラを取り付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/91.jpg" style={{width:300, height:'auto'}}/></div>

以下のリンクから、完全なプログラムコードと必要な依存ファイルを見つけることができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/take_photos" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

以下は、このプロジェクトの Arduino プログラムです。

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // PSRAM を搭載

#include "camera_pins.h"

unsigned long lastCaptureTime = 0; // 最後の撮影時間
int imageCount = 1;                // ファイルカウンター
bool camera_sign = false;          // カメラの状態を確認
bool sd_sign = false;              // SD の状態を確認

// 写真を SD カードに保存
void photo_save(const char * fileName) {
  // 写真を撮る
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("カメラのフレームバッファを取得できませんでした");
    return;
  }
  // 写真をファイルに保存
  writeFile(SD, fileName, fb->buf, fb->len);
  
  // 画像バッファを解放
  esp_camera_fb_return(fb);

  Serial.println("写真がファイルに保存されました");
}

// SD カードにファイルを書き込む
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("ファイルを書き込み中: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("書き込み用にファイルを開けませんでした");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("ファイルが書き込まれました");
    } else {
        Serial.println("書き込みに失敗しました");
    }
    file.close();
}

void setup() {
  Serial.begin(115200);
  while(!Serial); // シリアルモニターがオンになるとプログラムが実行を開始

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
  config.pixel_format = PIXFORMAT_JPEG; // ストリーミング用
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // PSRAM IC が存在する場合、UXGA 解像度と高品質 JPEG で初期化
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // PSRAM が利用できない場合、フレームサイズを制限
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // 顔検出/認識に最適なオプション
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // カメラ初期化
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("カメラの初期化に失敗しました。エラー 0x%x", err);
    return;
  }
  
  camera_sign = true; // カメラ初期化チェック合格

  // SD カード初期化
  if(!SD.begin(21)){
    Serial.println("カードのマウントに失敗しました");
    return;
  }
  uint8_t cardType = SD.cardType();

  // SD カードの種類を確認
  if(cardType == CARD_NONE){
    Serial.println("SD カードが接続されていません");
    return;
  }

  Serial.print("SD カードの種類: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true; // SD 初期化チェック合格

  Serial.println("写真撮影は 1 分後に開始されます。準備してください。");
}

void loop() {
  // カメラと SD が利用可能な場合、写真撮影を開始
  if(camera_sign && sd_sign){
    // 現在の時間を取得
    unsigned long now = millis();
  
    // 最後の撮影から 1 分以上経過している場合、写真を撮影して SD カードに保存
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("保存された写真：%s\n", filename);
      Serial.println("写真撮影は 1 分後に開始されます。準備してください。");
      imageCount++;
      lastCaptureTime = now;
    }
  }
}
```

:::note
このプログラムのコンパイルとアップロードには、他に2つの依存関係が必要です。GitHubにアクセスして、それらを完全にダウンロードしてください。
:::

XIAO ESP32S3にプログラムをアップロードしてください。プログラムが正常にアップロードされた後、シリアルモニターをオンにし、カメラを撮影したい対象物に向けてください。1分待つと、撮影した写真がSDカードに保存されます。その後、XIAOは1分ごとに写真を撮影します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/89.png" style={{width:700, height:'auto'}}/></div>

microSDカードを取り外し、カードリーダーを使用してカード内に保存された写真を確認できます。

### プログラムの注釈

プログラムは、使用する必要があるカメラとSDカードライブラリ、およびXIAO ESP32S3用に定義されたいくつかのピン依存ファイルのインポートから始まります。

その後、読みやすくするために、2つの関数を順番に定義します。1つは撮影した画像をSDカードに保存する関数`photo_save()`で、もう1つはファイルを書き込む関数`writeFile()`です。

```cpp
// 写真をSDカードに保存
void photo_save(const char * fileName) {
  // 写真を撮影
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("カメラフレームバッファの取得に失敗しました");
    return;
  }
  // 写真をファイルに保存
  writeFile(SD, fileName, fb->buf, fb->len);
  
  // 画像バッファを解放
  esp_camera_fb_return(fb);

  Serial.println("写真がファイルに保存されました");
}
```

microSDカードに画像を保存する関数では、主に2つのタスクを実行します。1つ目は画像の取得、2つ目はファイルを書き込む関数の呼び出しです。

画像の取得は`esp_camera_fb_get()`を使用して行い、画像情報はポインタ`fb`に保存されます。その後、`fb`の`buf`をSDカードに書き込むことができます。

`Setup()`関数では、プログラムの大部分がカメラピンの設定とカメラの初期化を行っています。これらはデフォルトでそのまま適用できます。カメラの画素数や品質に関する要件がある場合は、[Camera Library Overview](#camera-library-overview)章で説明されている関数に従って値を調整できます。

最後に`loop()`関数では、写真を1分ごとに撮影し、撮影した写真のファイル名の接尾辞として増分番号を付ける制御を行います。

```cpp
if(camera_sign && sd_sign){
    // 現在の時刻を取得
    unsigned long now = millis();
  
    // 前回の撮影から1分以上経過している場合、写真を撮影してSDカードに保存
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("保存された写真：%s\n", filename);
      Serial.println("写真撮影は1分後に開始されます。準備してください。");
      imageCount++;
      lastCaptureTime = now;
    }
  }
```

`loop()`を実行する前に、2つのフラグチェック`camera_sign`と`sd_sign`を設定します。これにより、`Setup()`でカメラとSDカードのチェックが正常に実行された後にのみ、写真を撮影して保存するタスクが実行されることが保証されます。

## プロジェクト I: ハンドヘルドカメラの作成

次に、上記の理論的知識を使用して、超小型の写真撮影デバイスを作成します。このプロジェクトの最終的な成果物は、ライブカメラフィードがSeeed Studio Round Display for XIAOに表示され、撮影したい対象をロックした後、画面に触れて写真を撮影し、microSDカードに記録することです。

### 事前準備

このプロジェクトを開始する前に、以下のハードウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

このプロジェクトではRound Display for XIAOを使用するため、**[ディスプレイ拡張ボードのWiki環境設定](https://wiki.seeedstudio.com/ja/get_start_round_display#software-preparation)**の内容を読み、必要なライブラリをインストールし、TFT環境を設定してから、このプロジェクトのルーチンを実行してください。

XIAO ESP32S3 Senseは、SDカードスロットに接続された3つのプルアップ抵抗（R4～R6）を備えており、Round Displayにもプルアップ抵抗があるため、両方を同時に使用するとSDカードを読み取ることができません。この問題を解決するために、XIAO ESP32S3 Sense拡張ボードのJ3を切断する必要があります。

:::tip
しかし、**エンジニアMjrovaiによる新しい方法により、XIAO ESP32S3 SenseのmicroSDカードスロットをソフトウェアレベルで同時に使用することも可能です**。彼の**[方法と手順](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**を参照することができます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

J3を切断した後、XIAO ESP32S3 SenseのSDカードスロットは正常に動作しなくなるため、Round DisplayのSDカードスロットにmicroSDカードを挿入する必要があります。

次に、microSDカード、XIAO ESP32S3 Sense、Round Displayを順番に取り付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

:::tip
J3接続をブレードで切断する際にカメラを傷つけないよう、最初にカメラモジュールを取り外すことをお勧めします。
:::

### 具体的な操作

以下のリンクから、このプロジェクトの完全なプログラムコードと必要な依存ファイルを見つけることができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/round_display_take_picture" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

以下は、このプロジェクトのArduinoプログラムです。

```c
#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // PSRAMを搭載
#define TOUCH_INT D7

#include "camera_pins.h"

// ラウンドディスプレイの幅と高さ
const int camera_width = 240;
const int camera_height = 240;

// ファイルカウンター
int imageCount = 1;
bool camera_sign = false;          // カメラの状態を確認
bool sd_sign = false;              // SDカードの状態を確認

TFT_eSPI tft = TFT_eSPI();

// SDカードへのファイル書き込み
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("ファイルを書き込み中: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("ファイルを開くのに失敗しました");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("ファイルが書き込まれました");
    } else {
        Serial.println("書き込みに失敗しました");
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
  // 初回セットアップ
  Serial.begin(115200);
//  while(!Serial);

  // カメラのピン設定
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
//  config.frame_size = FRAMESIZE_UXGA;
  config.frame_size = FRAMESIZE_240X240;
//  config.pixel_format = PIXFORMAT_JPEG; // ストリーミング用
  config.pixel_format = PIXFORMAT_RGB565;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // PSRAM ICが存在する場合、UXGA解像度と高品質JPEGで初期化
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // PSRAMが利用できない場合、フレームサイズを制限
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // 顔認識/検出に最適なオプション
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // カメラ初期化
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("カメラ初期化に失敗しました。エラーコード: 0x%x", err);
    return;
  }
  Serial.println("カメラ準備完了");
  camera_sign = true; // カメラ初期化チェック合格

  // ディスプレイ初期化
  tft.init();
  tft.setRotation(1);
  tft.fillScreen(TFT_WHITE);

  // SDカード初期化
  if(!SD.begin(D2)){
    Serial.println("カードのマウントに失敗しました");
    return;
  }
  uint8_t cardType = SD.cardType();

  // SDカードの種類を確認
  if(cardType == CARD_NONE){
    Serial.println("SDカードが接続されていません");
    return;
  }

  Serial.print("SDカードの種類: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("不明");
  }

  sd_sign = true; // SD初期化チェック合格

}

void loop() {
  if( sd_sign && camera_sign){

    // 写真を撮影
    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("カメラフレームバッファの取得に失敗しました");
      return;
    }
    
    if(display_is_pressed()){
      Serial.println("ディスプレイがタッチされました");
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      // 写真をファイルに保存
      writeFile(SD, filename, fb->buf, fb->len);
      Serial.printf("写真を保存しました：%s\n", filename);
      imageCount++;
    }
  
    // JPEG画像をデコード
    uint8_t* buf = fb->buf;
    uint32_t len = fb->len;
    tft.startWrite();
    tft.setAddrWindow(0, 0, camera_width, camera_height);
    tft.pushColors(buf, len);
    tft.endWrite();
      
    // イメージバッファを解放
    esp_camera_fb_return(fb);

    delay(10);
  }
}
```

XIAO ESP32S3 Sense にプログラムをアップロードします。アップロードが成功した後に画面が点灯しない場合は、XIAO のリセットボタンをクリックする必要があるかもしれません。その後、ラウンドディスプレイにリアルタイムで監視画面が表示されます。画面の任意の場所をクリックすると、画像が記録され、microSDカードに保存されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/95.gif" style={{width:800, height:'auto'}}/></div>

### プログラムの注釈

カメラとmicroSDカードの設定は前の内容で説明済みなので、ここでは繰り返しません。microSDカードの使用方法については、[XIAO ESP32S3 Sense ファイルシステム](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem) Wiki を参照して使用方法を学んでください。

```cpp
// 写真を撮る
camera_fb_t *fb = esp_camera_fb_get();
if (!fb) {
  Serial.println("カメラフレームバッファの取得に失敗しました");
  return;
}

...
  
// 画像バッファを解放
esp_camera_fb_return(fb);

delay(10);
```

上記のプログラムは、カメラを呼び出すための基本的なコードブロックであり、画面キャプチャ、例外終了、写真バッファの解放の3つの部分に分かれています。

```cpp
if(display_is_pressed()){
  Serial.println("画面がタッチされました");
  char filename[32];
  sprintf(filename, "/image%d.jpg", imageCount);
  // 写真をファイルに保存
  writeFile(SD, filename, fb->buf, fb->len);
  Serial.printf("保存された写真：%s\n", filename);
  imageCount++;
}
```

上記のプログラムは、画面がタッチされているかどうかを確認します。タッチされている場合、キャプチャされた画像をmicroSDカード上のファイルに保存します。

```cpp
// JPEG画像をデコード
uint8_t* buf = fb->buf;
uint32_t len = fb->len;
tft.startWrite();
tft.setAddrWindow(0, 0, camera_width, camera_height);
tft.pushColors(buf, len);
tft.endWrite();
```

このコード部分は、キャプチャされた画像を画面に表示します。まず、`camera_fb_t`構造体から画像バッファとその長さを取得します。その後、画面を画像データを受け取るように設定し、`pushColors()`関数を使用して画像を画面に表示します。

## 短い動画を記録してmicroSDカードに保存する

:::note
MCU上での動画エンコードのエクスポートは推奨しません。現在サポートされているエンコードライブラリのリソースが非常に少なく、操作が非常に複雑で面倒だからです。

この例では動画エンコードを含まず、エクスポートされる動画はフレームごとのMJPGをAVI形式で合成したものです。そのため、動画記録の品質が特に良いとは限りません。このチュートリアルの目的は、短い動画を記録するための簡単な方法とアイデアを提供することであり、より良い解決策を持つパートナーからのPR提出を歓迎します。
:::

前の章では、カメラを使用して画像をキャプチャする方法を習得しました。単一の画像をつなぎ合わせて動く動画画像を作成するという理論を理解しています。この理論に基づいて、この章では、1分ごとに10秒間の動画を記録し、それをmicroSDカードに保存するプログラムを書く方法をガイドします。

以下のリンクから完全なプログラムコードと必要な依存ファイルを見つけることができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/record_video" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

以下はこのプロジェクトのArduinoプログラムです。

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include "esp_timer.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // PSRAMを搭載

#include "camera_pins.h"

const int SD_PIN_CS = 21;

File videoFile;
bool camera_sign = false;
bool sd_sign = false;
unsigned long lastCaptureTime = 0;
unsigned long captureDuration = 10000; // 10秒
int imageCount = 0;

void setup() {
  Serial.begin(115200);
  while(!Serial);
  
  // カメラを初期化
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

  // カメラ初期化
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("カメラ初期化に失敗しました。エラーコード：0x%x", err);
    return;
  }
  
  camera_sign = true;
  
  // SDカードを初期化
  if (!SD.begin(SD_PIN_CS)) {
    Serial.println("SDカードの初期化に失敗しました！");
    return;
  }

  uint8_t cardType = SD.cardType();

  // SDカードの種類を判定
  if(cardType == CARD_NONE){
    Serial.println("SDカードが接続されていません");
    return;
  }

  Serial.print("SDカードの種類: ");
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

  Serial.println("1分後に動画が開始されます。準備してください。");
}

void loop() {
  // カメラとSDカードが利用可能な場合、動画撮影を開始
  if (camera_sign && sd_sign) {
    // 現在の時間を取得
    unsigned long now = millis();

    // 前回の動画撮影から1分以上経過している場合、新しい動画撮影を開始
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/video%d.avi", imageCount);
      videoFile = SD.open(filename, FILE_WRITE);
      if (!videoFile) {
        Serial.println("動画ファイルのオープンに失敗しました！");
        return;
      }
      Serial.printf("動画を記録中：%s\n", filename);
      lastCaptureTime = now;
      
      // 動画フレームのキャプチャを開始
      while ((millis() - lastCaptureTime) < captureDuration) {
        camera_fb_t *fb = esp_camera_fb_get();
        if (!fb) {
          Serial.println("フレームバッファの取得に失敗しました！");
          break;
        }
        videoFile.write(fb->buf, fb->len);
        esp_camera_fb_return(fb);
      }
      
      // 動画ファイルを閉じる
      videoFile.close();
      Serial.printf("動画を保存しました：%s\n", filename);
      imageCount++;

      Serial.println("1分後に動画が開始されます。準備してください。");

      // 残りの時間を待機
      delay(60000 - (millis() - lastCaptureTime));
    }
  }
}
```

コードを XIAO ESP32S3 Sense にアップロードし、シリアルモニターをオンにしてください。この時点で、カメラの位置を録画したい対象物に調整してください。1分後、XIAO のオレンジ色の LED が点滅し始め、録画が開始され、microSD カードに保存されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/96.png" style={{width:800, height:'auto'}}/></div>

:::note
プログラムにはエンコードやフレームレートなどの設定が含まれていないため、録画された映像の各フレームに変化がない場合、動画が1秒しか再生されない可能性があります。
:::

### プログラムの注釈

動画を録画する手順の核心と鍵は、10秒間連続して写真ストリームを取得し、それを microSD カードに継続的に書き込むことです。

```cpp
// 動画フレームのキャプチャを開始
while ((millis() - lastCaptureTime) < captureDuration) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("フレームバッファの取得エラー！");
    break;
  }
  videoFile.write(fb->buf, fb->len);
  esp_camera_fb_return(fb);
}
```

さらに、外側に1分間の待機判定をネストして、動画が毎分開始されることを保証します。

```cpp
// 最後の動画キャプチャから1分以上経過している場合、新しい動画キャプチャを開始
if ((now - lastCaptureTime) >= 60000) {

  ...

  delay(60000 - (millis() - lastCaptureTime));
}
```

## プロジェクト II: 動画ストリーミング

このチュートリアルの最後に、動画ストリーミングプロジェクトを紹介します。このプロジェクトでは、XIAO ESP32S3 Sense によって作成されたウェブページでライブ動画ストリームを見ることができ、いくつかのパラメータを設定することで画面の表示を変更できます。

以下のリンクから完全なプログラムコードと必要な依存ファイルを見つけることができます。

Arduino で **2.0.x** バージョンの esp32 ボードパッケージを使用している場合、以下からダウンロードしてください：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Arduino で **3.0.x** バージョンの esp32 ボードパッケージを使用している場合、以下からダウンロードしてください：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_3.0.x" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

以下はこのプロジェクトの Arduino プログラムです。

```cpp
#include "esp_camera.h"
#include <WiFi.h>

#define CAMERA_MODEL_XIAO_ESP32S3 // PSRAM を搭載

#include "camera_pins.h"

// ===========================
// WiFi の認証情報を入力してください
// ===========================
const char* ssid = "**********";
const char* password = "**********";

void startCameraServer();
void setupLedFlash(int pin);

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
  config.pixel_format = PIXFORMAT_JPEG; // ストリーミング用
  //config.pixel_format = PIXFORMAT_RGB565; // 顔検出/認識用
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // PSRAM IC が存在する場合、UXGA 解像度と高い JPEG 品質で初期化
  // より大きな事前割り当てフレームバッファ用
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // PSRAM が利用できない場合、フレームサイズを制限
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // 顔検出/認識に最適なオプション
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // カメラ初期化
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("カメラ初期化に失敗しました。エラーコード: 0x%x", err);
    return;
  }

  sensor_t * s = esp_camera_sensor_get();
  // 初期センサーは垂直方向に反転しており、色が少し飽和しています
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1); // 元に戻す
    s->set_brightness(s, 1); // 明るさを少し上げる
    s->set_saturation(s, -2); // 彩度を下げる
  }
  // 初期フレームレートを上げるためにフレームサイズを下げる
  if(config.pixel_format == PIXFORMAT_JPEG){
    s->set_framesize(s, FRAMESIZE_QVGA);
  }

// LED フラッシュを設定 (camera_pins.h で LED ピンが定義されている場合)
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
  Serial.println("WiFi 接続完了");

  startCameraServer();

  Serial.print("カメラ準備完了！ 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' に接続してください");
}

void loop() {
  // 何もしません。すべてはウェブサーバーによる別のタスクで実行されます
  delay(10000);
}
```

プログラムをアップロードする前に、コード内のWiFi名とパスワードを自分のものに変更する必要があります。プログラムをアップロードした後、XIAO ESP32C3がWiFiに正常に接続されると、そのIPアドレスが出力されます。

:::caution
XIAO ESP32S3 このプロジェクトを長時間実行する場合は、放熱に注意してください。XIAOは非常に熱くなる可能性があるため、火傷に注意してください！
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/97.png" style={{width:800, height:'auto'}}/></div>

:::tip
上の図のように、デバッグ情報の出力をオンにすると、シリアルモニタにチップカーネルのデバッグ情報が表示される場合があります。例えば、`[0;31mE (2947) MFN: Partition Not found[0m` などです。これについて心配する必要はありません。プログラムの実行には影響しません。
:::

ブラウザを開き、EdgeまたはGoogle Chromeを推奨します。そのIPアドレスを入力すると、ビデオの設定ページが表示されます。

:::note
ブラウザを使用しているデバイスが、XIAOと同じLAN上にある必要があることに注意してください。
:::

設定したいビデオストリームの仕様を構成した後、左側のツールバーの下部にある**Start Stream**をクリックすると、カメラのライブ映像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:1000, height:'auto'}}/></div>

幸いなことに、ESP32は公式に顔認識機能をプログラムに追加しています。画質を下げて顔認識のスイッチをオンにすることで、この機能を体験できます。

:::tip
パフォーマンス上の理由から、画面の品質は**CIF**以下でなければなりません。それ以上の場合、顔認識のスイッチをオンにすると、ウェブページにエラーが表示されます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/99.png" style={{width:400, height:'auto'}}/></div>

ああ、私の大きな顔が囲まれています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/100.png" style={{width:600, height:'auto'}}/></div>

## OV5640 オートフォーカス

### ハードウェア準備

<div class="table-center">
  <table align="center">
    <tr>
        <th>OV5640 カメラ for XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html?qid=UXYOXT_08tfc9pt_1746512260418" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェア準備

#### 方法 1
**@Eric** に感謝します。オープンソースコードを提供してくれました。

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
フォーカス効果を見るためには解像度が1280*1024以上である必要があります。フォーカス中は画面が遅延し、しばらく待つ必要があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.gif" style={{width:700, height:'auto'}}/></div>

#### 方法 2

:::tip
フォーカス効果を見るためには解像度が1600*1200以上である必要があります。フォーカス中は画面が遅延し、しばらく待つ必要があります。
:::

以下の zip ファイルをダウンロードして Arduino に追加してください。
- **[ZIP]** [OV5640 Auto](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640_AF.zip)

:::tip
方法 1 と方法 2 のライブラリ内の OV5640 は同時に存在することはできません。
:::

```cpp
#include "esp_camera.h"
#include <WiFi.h>
#include "ESP32_OV5640_AF.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // PSRAM を搭載

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
    // PSRAM が利用できない場合、フレームサイズを制限
    config.frame_size = FRAMESIZE_SVGA;
    config.fb_location = CAMERA_FB_IN_DRAM;
  }

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("カメラの初期化に失敗しました。エラーコード: 0x%x", err);
    return;
  }

  // オートフォーカス
#if 1
  sensor_t* sensor = esp_camera_sensor_get();
  int ret = 0;
  ov5640.start(sensor);

  if (ov5640.focusInit() == 0) {
      Serial.println("OV5640_Focus_Init 成功！");
  } else {
      Serial.println("OV5640_Focus_Init 失敗！");
  }

  ret = ov5640.autoFocusMode(false);
  if (ret == 0) {
    Serial.println("OV5640_Auto_Focus 成功！");
  } else {
    Serial.printf("OV5640_Auto_Focus 失敗！ - [%d]\n", ret);
  }
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi 接続完了");

  startCameraServer();

  Serial.printf("カメラ準備完了！'http://%s' を使用して接続してください\n", WiFi.localIP().toString().c_str());
}

void loop() {
  if (Serial.available()) {
    sensor_t* sensor = esp_camera_sensor_get();
    int ret = 0;

    switch (Serial.read()) {
      case 'b':
        ret = sensor->set_reg(sensor, 0x3022, 0xff, 0x03);
        Serial.printf("オートフォーカス開始 - %d\n", ret);
        break;
      case 's':
        ret = sensor->set_reg(sensor, 0x3022, 0xff, 0x06);
        Serial.printf("フォーカス停止 - %d\n", ret);
        break;
    }
  }

  uint8_t rc = ov5640.getFWStatus();
  Serial.printf("FW_STATUS = 0x%x\n", rc);

  if (rc == -1) {
    Serial.println("OV5640 を確認してください");
  } else if (rc == FW_STATUS_S_FOCUSED) {
    Serial.println("フォーカス完了！");
  } else if (rc == FW_STATUS_S_FOCUSING) {
    Serial.println("フォーカス中！");
  } else {
  }

  delay(1000);
}
```

:::tip
方法 1 は、方法 2 よりもフォーカス効果が顕著で、より鮮明な画像を提供するため推奨されます。
:::

## トラブルシューティング

### Q1: XIAO ESP32S3 Sense と Round Display を一緒に使用する場合、J3 ピンを切断する必要がありますか？どの SD カードスロットが使用可能ですか？

A: 原則として、XIAO ESP32S3 Sense と Round Display を一緒に使用する場合、microSD カードを使用するためには J3 ピンを切断する必要があります。その理由は、両方の拡張ボードの回路設計にプルアップ抵抗が含まれているためです。理論的には、2 つのプルアップ抵抗が同時に動作すると SD カードスロットが正常に動作しなくなり、SD カードのマウント失敗エラーメッセージが表示されます。Round Display のプルアップ抵抗はブロックできないため、Sense 拡張ボードの J3 を切断する必要があります。これにより、2 つを一緒に使用する場合、1 つのプルアップ抵抗のみが動作することが保証されます。この条件により、両方を一緒に使用する場合、Round Display 上の SD カードスロットのみがアクティブになります。

しかしながら、**エンジニア Mjrovai に感謝すべき新しい方法があり、ソフトウェアレベルで XIAO ESP32S3 Sense 上の microSD カードスロットを同時に使用することも可能です**。彼の方法と手順については、**[こちらのリンク](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)** を参照してください。



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>