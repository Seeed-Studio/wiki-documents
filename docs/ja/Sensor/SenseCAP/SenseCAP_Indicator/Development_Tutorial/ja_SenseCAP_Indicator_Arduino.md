---
description: Arduinoを使用してSenseCAP Indicatorの両チップを開発する
title: Arduinoを使用して両チップを開発する
keywords:
  - SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.webp
slug: /ja/SenseCAP_Indicator_ESP32_Arduino
last_update:
  date: 05/15/2025
  author: Hendra, LongDirtyAnimAlf
craft: true
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- :::danger
このWikiを実行する際にいくつかの問題があります。現在、[Contributor Program](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=70900433)の下で、このファームウェアを改善するために協力してくれる方を探しています。
::: -->

# Arduinoを使用してSenseCAP Indicatorの両チップを開発する

SenseCAP Indicatorは、ESP32とRP2040のデュアルMCUによって駆動される4インチのタッチスクリーンデバイスです。ESP32とRP2040はどちらも非常に高性能なマイクロコントローラーで、多くの機能を提供します。

このチュートリアルでは、Arduinoフレームワークのシンプルさと柔軟性を活用して、SenseCAP Indicator用のカスタムプロジェクト/ファームウェアを開発する方法を案内します。

## ハードウェア準備

ここではSenseCAP Indicatorをハードウェアとして使用し、4種類のセンサー（CO2、温度、湿度、TVOC）が搭載されています。以下の内容が含まれます：

<div class="table-center">
  <table align="center">
    <tr>
        <th>SenseCAP Indicator D1S</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:'auto', height:200}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1S-p-5645.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ハードウェア概要と開発知識

IndicatorはRP2040とESP32S3の2つのMCUで設計されており、同時に動作します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

上記の図に基づいて以下が分かります：

1. すべてのセンサーはI2Cプロトコルを使用してRP2040マイクロコントローラーに接続されています。
2. PCA9535 ICを使用した1つのI2C IOエクスパンダーモジュールがあります。
3. スクリーンはESP32S3マイクロコントローラーに接続されており、2つのピン（CS、RESET）がPCA9535 I2Cエクスパンダーに接続されています。
4. RP2040はUARTインターフェースを使用してESP32S3のピン20とピン19に接続されています。

したがって、SenseCAP Indicatorをコンピューターに接続すると、RP2040用とESP32S3用の2つのシリアルポートが表示されます。「USB-SERIAL CH340」という情報が表示されるポートがESP32S3に接続されており、このチュートリアルではこのポートを使用します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/1.jpg"/></div>

## ソフトウェア準備

ここではArduinoを使用します。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

:::note
チュートリアルを進める前に、Arduino IDEで以下の手順を完了してください：

1. **ESP32ボード定義**: ESP32ボード定義がインストールされ、最新バージョンに更新されていることを確認してください。Arduino IDEにESP32ボードがまだない場合は、[このガイド](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)を参照してください。
2. **ボード選択**: ボード定義として**ESP32S3 Dev Module**を選択してください。
3. **PSRAM**: Arduino IDEでOPI PSRAM機能を有効にして、スクリーンが正しく動作するようにしてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/2.jpg"/></div>

:::

### 使用するボード

プロジェクトの互換性を確保するために、以下のバージョンのボードを使用してください：

- **ESP32**: バージョン 3.1.2
- **Raspberry Pi Pico Arduino**: バージョン 4.4.3

### 使用するライブラリ

TouchLib: バージョン 0.0.2

タッチドライバーを統合し、タッチインターフェースを統一するために、TouchLibライブラリが必要です。このライブラリはArduino IDEのライブラリマネージャーにはありません。[TouchLib GitHubリポジトリ](https://github.com/mmMicky/TouchLib)から手動でダウンロードし、Arduino IDEに追加してください（スケッチ > ライブラリを含める > .ZIPライブラリを追加）。

ライブラリをダウンロードした後、Arduino IDEを開き、スケッチメニューに移動して「.ZIPライブラリを追加」を選択し、ダウンロードしたライブラリをIDEに追加します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/3.jpg"/></div>

同様に、スムーズな統合のために、同じスケッチメニューで「ライブラリを管理」を選択し、必要なライブラリ（例：「PCA9535」、hidea kitaiによるものを選択）を検索してインストールし、以下のバージョンを確認してください：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/5.jpg"/></div>

- **Adafruit TinyUSB**: バージョン 3.4.2
- **Anitracks_PCA95x5**: バージョン 0.1.3
- **GFX Library for Arduino**: バージョン 1.5.3
- **PacketSerial**: バージョン 1.4.0
- **lvgl**: バージョン 9.2.2
- **PCA95x5**: バージョン 0.1.3

これらのライブラリとボードがArduino IDEにインストールされていることを確認し、互換性の問題を回避してください。

## はじめに

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="LongDirtyAnimAlf" label="新しいチュートリアル (by LongDirtyAnimAlf)" default>

必要なライブラリをすべてインストールした後、以下のコードをアップロードして、画面が Arduino 環境で動作しているかをテストします。以下のコードをアップロードしてください：

```cpp
#include <Arduino_GFX_Library.h>
#include <PCA95x5.h>
#define GFX_BL DF_GFX_BL // デフォルトのバックライトピン。DF_GFX_BL を実際のバックライトピンに置き換えることができます。

/* 他のデバイス宣言についてはこちらを参照してください: https://github.com/moononournation/Arduino_GFX/wiki/Dev-Device-Declaration */
#if defined(DISPLAY_DEV_KIT)
Arduino_GFX *gfx = create_default_Arduino_GFX();
#else /* !defined(DISPLAY_DEV_KIT) */

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define GFX_BL 45
Arduino_DataBus *bus = new Arduino_SWSPI(
    GFX_NOT_DEFINED /* DC */, PCA95x5::Port::P04 /* CS */,
    41 /* SCK */, 48 /* MOSI */, GFX_NOT_DEFINED /* MISO */);

// オプション 1:
// 4インチ長方形ディスプレイ用にコメントを解除
Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,
    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    480 /* width */, 480 /* height */, rgbpanel, 2 /* rotation */, true /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_type1_init_operations, sizeof(st7701_type1_init_operations));

#endif /* !defined(DISPLAY_DEV_KIT) */
/*******************************************************************************
 * Arduino_GFX 設定の終了
 ******************************************************************************/

void setup(void)
{
  Serial.begin(115200);
  // Serial.setDebugOutput(true);
  // while(!Serial);
  Serial.println("Arduino_GFX Hello World example");

#ifdef GFX_EXTRA_PRE_INIT
  GFX_EXTRA_PRE_INIT();
#endif

  // ディスプレイの初期化
  if (!gfx->begin())
  {
    Serial.println("gfx->begin() failed!");
  }
  gfx->fillScreen(BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif

  gfx->setCursor(10, 10);
  gfx->setTextColor(RED);
  gfx->println("Sensecap Indicator");

  delay(5000); // 5秒
}

void loop()
{
  gfx->setCursor(random(gfx->width()), random(gfx->height()));
  gfx->setTextColor(random(0xffff), random(0xffff));
  gfx->setTextSize(random(6) /* x scale */, random(6) /* y scale */, random(2) /* pixel_margin */);
  gfx->println("Sensecap Indicator");

  delay(1000); // 1秒
}
```

すべてが正常に動作すれば、「Sensecap Indicator」というテキストが画面上にランダムに表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/6.jpg"/></div>

### SenseCap Indicator を使用したシンプルな GUI アプリケーションの作成

SenseCap Indicator は強力な ESP32-S3 マイクロコントローラーと高解像度の 480x480 ディスプレイを備えており、グラフィカルユーザーインターフェースを作成するのに最適です。ここでは、LVGL を使用してインタラクティブな GUI アプリケーションを作成する方法を探ります。プロジェクト全体（ソースコードとヘッダーファイルを含む）をリポジトリからダウンロードできます：
[SenseCap Indicator LVGL プロジェクトをダウンロード](https://github.com/LongDirtyAnimAlf/SenseCap)

プロジェクトファイルをダウンロードして解凍した後、以下のコードをアップロードして基本的なマルチスクリーン GUI アプリケーションを作成します：

```cpp
/* Arduino で LVGL を使用するにはいくつかの追加手順が必要です:
 * ドキュメントを必ず読んでください: https://docs.lvgl.io/master/get-started/platforms/arduino.html
 インストール: lvgl*/

// 古い ESP32-IDF バージョンを使用している場合、この定義が欠落していることがあります
//#define ESP_INTR_CPU_AFFINITY_AUTO 0

#include <Arduino.h>
#include <lvgl.h>
#include <Arduino_GFX_Library.h>
#include <PacketSerial.h>
#include "Indicator_Extender.h"
#include "Indicator_SWSPI.h"
#include "ui.h"
#include "touch.h"

#define HOR_RES 480
#define VER_RES 480

#define PACKET_UART_RXD 20
#define PACKET_UART_TXD 19

#define BUTTON_PIN 38

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define RGB_PANEL
#define GFX_BL 45
Arduino_DataBus *bus = new Indicator_SWSPI(
    GFX_NOT_DEFINED /* DC */, EXPANDER_IO_LCD_CS /* CS */,
    SPI_SCLK /* SCK */, SPI_MOSI /* MOSI */, GFX_NOT_DEFINED /* MISO */);

Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,
    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    HOR_RES /* width */, VER_RES /* height */, rgbpanel, 0 /* rotation */, false /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_indicator_init_operations, sizeof(st7701_indicator_init_operations));


COBSPacketSerial myPacketSerial;

void onPacketReceived(const uint8_t* buffer, size_t size);

uint32_t millis_cb(void)
{
  return millis();
}

/* タッチパッドを読み取る */
void my_touchpad_read(lv_indev_t *indev, lv_indev_data_t *data)
{
  if (touch_has_signal())
  {
    if (touch_touched())
    {
      data->state = LV_INDEV_STATE_PRESSED;

      /* 座標を設定 */
      data->point.x = touch_last_x;
      data->point.y = touch_last_y;
    }
    else if (touch_released())
    {
      data->state = LV_INDEV_STATE_RELEASED;
    }
  }
  else
  {
    data->state = LV_INDEV_STATE_RELEASED;
  }
}

// メインボタンのイベントハンドラー
static void event_handler(lv_event_t * e)
{
  lv_event_code_t code = lv_event_get_code(e);
  lv_obj_t * btn = lv_event_get_current_target_obj(e);

  if (btn != NULL)
  {
    if(code == LV_EVENT_CLICKED)
    {
      void * btn_no_void = (void*)lv_event_get_user_data(e);
      byte btn_no = (byte)((uintptr_t)btn_no_void);
      lv_obj_t * screen = lv_obj_get_screen(btn);
      if (screen != NULL)
      {
        Serial.println("Screen assigned");
        if (screen == screen2)
        {
          Serial.println("Screen 2");
          if (btn_no != 0)
          {
            Create_Screen3(event_handler);
            lv_screen_load(screen3);
          }
        }
        if (screen == screen3)
        {
          Serial.println("Screen 3");
          if (btn_no == 0)
          {
            lv_screen_load(screen2);
            lv_obj_delete(screen3);
          }
        }
      }
    }
  }
}

void setup()
{
  Serial.begin(115200);
  Serial.println("SenseCap Indicator startup");
  String LVGL_Arduino = String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  pinMode(BUTTON_PIN, INPUT);

  // インジケータハードウェアの初期化
  extender_init();

  myPacketSerial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, PACKET_UART_RXD, PACKET_UART_TXD);
  myPacketSerial.setStream(&Serial1);
  myPacketSerial.setPacketHandler(&onPacketReceived);

  // ディスプレイの初期化
  if (!gfx->begin(12000000L))
  {
    Serial.println("gfx->begin() failed!");
    Serial.println("重大なエラーが予想されます !!!");    
  }
  gfx->fillScreen(RGB565_BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif
  lv_init();

  /* 時間経過を LVGL に知らせるためのタイマーソースを設定 */
  lv_tick_set_cb(millis_cb);

  /* デバッグ用にプリント関数を登録 */
#if LV_USE_LOG != 0
  lv_log_register_print_cb(my_print);
#endif

  lv_screen_init(gfx, HOR_RES, VER_RES);
  //lv_display_set_rotation(disp, LV_DISPLAY_ROTATION_0);
  //lv_display_set_antialiasing(disp,false);

  // タッチデバイスの初期化
  touch_init(HOR_RES, VER_RES, 0); // 回転は lvgl によって処理されます
  /* 入力デバイスドライバを初期化 */
  lv_indev_t *indev = lv_indev_create();
  lv_indev_set_type(indev, LV_INDEV_TYPE_POINTER); /* タッチパッドは POINTER タイプである必要があります */
  lv_indev_set_read_cb(indev, my_touchpad_read);

  Screen2Create(event_handler);

  lv_screen_load(screen2);

  Serial.println("Setup done");
}

void loop()
{
  static TickType_t xLastWakeTime = xTaskGetTickCount();
  
  /*
  unsigned long startTime = millis();
  while (digitalRead(BUTTON_PIN) == LOW)
  {
    if (millis() - startTime >= 10000)
    {
      ESP.restart();
      //esp_restart();
    }
  }
  */

  myPacketSerial.update();
  // 受信バッファオーバーフローをチェック (オプション)。
  if (myPacketSerial.overflow())
  {
    // ピンを介してアラートを送信 (例: オーバーフロー LED を作成) または
    // ユーザー定義のパケットを送信者に返します。
  }

  lv_task_handler(); /* GUI の作業を実行 */

  // 常に 5ms の簡単な遅延
  //delay(5);

  // 上記のタスクで消費された時間に応じて遅延を調整
  // タスクが時間を消費する場合、遅延は短くなります
  vTaskDelayUntil( &xLastWakeTime, ( 5 / portTICK_PERIOD_MS ) );
}

void onPacketReceived(const uint8_t* buffer, size_t size)
{
  if (size < 1) {
    return;
  }

  byte index = 0;
  byte Command = buffer[index++];
  if (Command == 0x55)
  {
    long Temperature = 0;
    long Humidity = 0; 

    memcpy(&Temperature, &buffer[index], sizeof(Temperature));
    index += sizeof(Temperature);
    memcpy(&Humidity, &buffer[index], sizeof(Humidity));
    index += sizeof(Humidity);

    Screen2AddData(Temperature,Humidity);
  }
}
```

コードをアップロードした後、シリアルモニターを開き、ボーレートを115200に設定してください。初期化メッセージが表示され、GUIがディスプレイに表示されます。Screen2には、UART接続を通じて受信した温度と湿度のデータが表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/12.gif"/></div>

### 複数画面とデータ可視化を備えた高度なGUIアプリケーション

2つ目の例では、基本的なアプリケーションに加えて、バッテリー監視、動的データ可視化、色分けされたステータスインジケーターなどの高度な機能を追加しています。プロジェクト全体（ソースコードとヘッダーファイルを含む）は以下のリポジトリからダウンロードできます：
[SenseCap Indicator LVGL Projectをダウンロード](https://github.com/LongDirtyAnimAlf/SenseCap)

このバージョンを実装するには、以下のコードをアップロードしてください：

```cpp
/* ArduinoでLVGLを使用するにはいくつかの追加手順が必要です：
 * ドキュメントを必ず読んでください：https://docs.lvgl.io/master/get-started/platforms/arduino.html
 インストール: lvgl*/

// 古いESP32-IDFバージョンを使用する場合、この定義が欠落していることがあります
//#define ESP_INTR_CPU_AFFINITY_AUTO 0

#include <Arduino.h>
#include <lvgl.h>
#include <Arduino_GFX_Library.h>
#include <PacketSerial.h>
#include "Indicator_Extender.h"
#include "Indicator_SWSPI.h"
#include "ui.h"
#include "touch.h"
#include "shared.h"

#define HOR_RES 480
#define VER_RES 480

#define PACKET_UART_RXD 20
#define PACKET_UART_TXD 19

#define BUTTON_PIN 38

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define RGB_PANEL
#define GFX_BL 45
Arduino_DataBus *bus = new Indicator_SWSPI(
    GFX_NOT_DEFINED /* DC */, EXPANDER_IO_LCD_CS /* CS */,
    SPI_SCLK /* SCK */, SPI_MOSI /* MOSI */, GFX_NOT_DEFINED /* MISO */);

Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,
    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    HOR_RES /* width */, VER_RES /* height */, rgbpanel, 0 /* rotation */, false /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_indicator_init_operations, sizeof(st7701_indicator_init_operations));

TBatteryBoard BatteryBoards[DAUGHTERBOARDCOUNT] = {0};

COBSPacketSerial myPacketSerial;
//PacketSerial_<COBS, 0, 1024> myPacketSerial;

void onPacketReceived(const uint8_t* buffer, size_t size);

#if LV_USE_LOG != 0
void my_print(lv_log_level_t level, const char *buf)
{
  LV_UNUSED(level);
  Serial.println(buf);
  Serial.flush();
}
#endif

uint32_t millis_cb(void)
{
  return millis();
}

/* タッチパッドを読み取る */
void my_touchpad_read(lv_indev_t *indev, lv_indev_data_t *data)
{
  if (touch_has_signal())
  {
    if (touch_touched())
    {
      data->state = LV_INDEV_STATE_PRESSED;

      /* 座標を設定 */
      data->point.x = touch_last_x;
      data->point.y = touch_last_y;
    }
    else if (touch_released())
    {
      data->state = LV_INDEV_STATE_RELEASED;
    }
  }
  else
  {
    data->state = LV_INDEV_STATE_RELEASED;
  }
}

static void event_handler(lv_event_t * e)
{
  lv_event_code_t code = lv_event_get_code(e);
  lv_obj_t * btn = lv_event_get_current_target_obj(e);

  if (btn != NULL)
  {
    if(code == LV_EVENT_CLICKED)
    {
      void * btn_no_void = (void*)lv_event_get_user_data(e);
      byte btn_no = (byte)((uintptr_t)btn_no_void);
      lv_obj_t * screen = lv_obj_get_screen(btn);
      if (screen != NULL)
      {
        Serial.println("画面が割り当てられました");

        if (screen == screen1)
        {
          Serial.println("画面1");
          Screen2SetActive(btn_no);
          lv_screen_load(screen2);
          //Screen2SetActive(5);
        }
        if (screen == screen2)
        {
          Serial.println("画面2");
          if (btn_no == 0)
          {
            lv_screen_load(screen1);
          }
          else
          {
            Create_Screen3(event_handler);
            lv_screen_load(screen3);
          }
        }
        if (screen == screen3)
        {
          Serial.println("画面3");
          if (btn_no == 0)
          {
            lv_screen_load(screen2);
            lv_obj_delete(screen3);
          }
        }
      }
    }
  }
}

void setup()
{
  Serial.begin(115200);
  // Serial.setDebugOutput(true);
  // while(!Serial);
  Serial.println("SenseCap Indicator 起動");
  String LVGL_Arduino = String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  pinMode(BUTTON_PIN, INPUT);

  // Indicatorハードウェアを初期化
  extender_init();

  myPacketSerial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, PACKET_UART_RXD, PACKET_UART_TXD);
  myPacketSerial.setStream(&Serial1);
  myPacketSerial.setPacketHandler(&onPacketReceived);

  // ディスプレイを初期化
  if (!gfx->begin(12000000L))
  {
    Serial.println("gfx->begin() に失敗しました！");
    Serial.println("重大なエラーが予想されます !!!");    
  }
  gfx->fillScreen(RGB565_BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif
  lv_init();

  /* LVGLに経過時間を知らせるためのタイマーソースを設定 */
  lv_tick_set_cb(millis_cb);

  /* デバッグ用にprint関数を登録 */
#if LV_USE_LOG != 0
  lv_log_register_print_cb(my_print);
#endif

  lv_screen_init(gfx, HOR_RES, VER_RES);
  //lv_display_set_rotation(disp, LV_DISPLAY_ROTATION_0);
  //lv_display_set_antialiasing(disp,false);

  // タッチデバイスを初期化
  touch_init(HOR_RES, VER_RES, 0); // 回転はlvglによって処理されます
  /* 入力デバイスドライバを初期化 */
  lv_indev_t *indev = lv_indev_create();
  lv_indev_set_type(indev, LV_INDEV_TYPE_POINTER); /* タッチパッドはPOINTERタイプである必要があります */
  lv_indev_set_read_cb(indev, my_touchpad_read);

  Create_Screen1(event_handler);

  Screen2Create(event_handler);
  Screen2InitData();  

  lv_screen_load(screen1);

  Serial.println("セットアップ完了");
}

void loop()
{
  static TickType_t xLastWakeTime = xTaskGetTickCount();
  
  /*
  unsigned long startTime = millis();
  while (digitalRead(BUTTON_PIN) == LOW)
  {
    if (millis() - startTime >= 10000)
    {
      ESP.restart();
      //esp_restart();
    }
  }
  */

  myPacketSerial.update();
  // 受信バッファオーバーフローをチェック（オプション）
  if (myPacketSerial.overflow())
  {
    // ピンを介してアラートを送信（例：オーバーフローLEDを作成）または送信者にユーザー定義のパケットを返します。
  }

  lv_task_handler(); /* GUIが作業を行う */

  // 常に5msの簡単な遅延
  //delay(5);

  // 上記のタスクで消費された時間に応じて遅延を調整
  // これらのタスクが時間を消費する場合、遅延は短くなります
  vTaskDelayUntil( &xLastWakeTime, ( 5 / portTICK_PERIOD_MS ) );
}

void onPacketReceived(const uint8_t* buffer, size_t size)
{
#ifndef YOLO
  Serial.printf("<--- 受信 長さ:%d, データ: ", size);
  for (int i = 0; i < size; i++) {
    Serial.printf("0x%x ", buffer[i]);
  }
  Serial.println("");
#endif


  if (size < 1) {
    return;
  }

  byte index = 0;

  TCommands Command = (TCommands)buffer[index++];

  if ((Command == CMD_get_data) || (Command == CMD_set_value))
  {
    byte BatteryNumber = buffer[index++];

    if (Command == CMD_get_data)
    {
      dword tempcalc;
      word Volt = 0;
      word Amps = 0; 

      memcpy(&Volt, &buffer[index], 2);
      index += 2;
      memcpy(&Amps, &buffer[index], 2);
      index += 2;

      Screen2AddData((BatteryNumber+1),Volt,Amps);

      // 画面1にデータを表示
      tempcalc = Volt * 3300u;
      tempcalc /= (dword)((1u << BITS)-1u);
      SetVoltageScreen1mV(BatteryNumber,(word)tempcalc);

      tempcalc = Amps * 6000u;
      tempcalc /= (dword)((1u << BITS)-1u);
      SetCurrentScreen1mA(BatteryNumber,(word)tempcalc);
    }

    if (Command == CMD_set_value)
    {
      lv_color_t c = LV_COLOR_MAKE(0,0,0);  
      TBatteryStatus Status = (TBatteryStatus)buffer[index++];
      switch (Status)
      {
        case BSCurrent:
        case BSPower:
        case BSResistor:
        {
          c = lv_palette_main(LV_PALETTE_DEEP_ORANGE);
          break;
        }
        case BSCharge:
        case BSVoltage:
        case BSPulse:
        {
          c = lv_palette_main(LV_PALETTE_PURPLE);
          break;
        }  
        case BSOff:
        {
          c = LV_COLOR_MAKE(0X00,0xFF,0xFF);
          break;
        }
        default:
        {
          c = lv_palette_main(LV_PALETTE_YELLOW);
        }
      }
      SetLedScreen1(BatteryNumber,c);
    }
  }
}
```

このコードを使用すると、SenseCap Indicator は3画面のアプリケーションを表示します。Screen1はバッテリーデータの概要を色分けされたステータスインジケーターとともに表示し、Screen2は個々のバッテリーの詳細情報を提供し、Screen3は追加のコントロールや情報を提供します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/11.png"/></div>

</TabItem>
  
<TabItem value="Hendra" label="旧チュートリアル（Hendraによる）">

ESP32S3チップに接続された画面を開発し、RP2040チップにリンクされたセンサーを読み取ることができます。最終的に両方を組み合わせます。

<h3>ESP32-S3チップに接続された画面を開発する</h3>

SenseCap Indicatorは画面にST7701モジュールを使用しており、並列インターフェースを使用してESP32S3 MCUのピンに接続されています。
画面を駆動するためには、いくつかのArduinoライブラリが必要です。[こちら](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/Arduino_GFX-master.zip)からダウンロードできます。

ライブラリをダウンロードした後、Arduinoを開き、スケッチメニューで「ZIPライブラリを追加」を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/3.jpg"/></div>

ダウンロードしたライブラリをArduino IDEに追加します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/4.jpg"/></div>

同時に、同じスケッチメニューを確認し、「ライブラリを管理」を選択して「PCA9535」を検索し、hidea kitaiによって作成されたものを選択してインストールします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/5.jpg"/></div>

:::note
PCA9535ライブラリは、ST7701のCSピンがPCA9535 i2cエクスパンダーモジュールに接続されているため必要です。具体的には、i2cモジュールのピン4です。
:::

必要なライブラリをすべてインストールした後、以下のコードをアップロードして、画面がArduino環境で動作するかどうかをテストします。以下のコードをアップロードしてください：

```cpp
#include <Arduino_GFX_Library.h>
#include <PCA95x5.h>
#define GFX_BL DF_GFX_BL // デフォルトのバックライトピン、DF_GFX_BLを実際のバックライトピンに置き換えることができます

/* 開発デバイス宣言の詳細: https://github.com/moononournation/Arduino_GFX/wiki/Dev-Device-Declaration */
#if defined(DISPLAY_DEV_KIT)
Arduino_GFX *gfx = create_default_Arduino_GFX();
#else /* !defined(DISPLAY_DEV_KIT) */

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define GFX_BL 45
Arduino_DataBus *bus = new Arduino_SWSPI(
    GFX_NOT_DEFINED /* DC */, PCA95x5::Port::P04 /* CS */,
    41 /* SCK */, 48 /* MOSI */, GFX_NOT_DEFINED /* MISO */);

// オプション1:
// 4インチ矩形ディスプレイ用にコメント解除
Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,
    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    480 /* width */, 480 /* height */, rgbpanel, 2 /* rotation */, true /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_type1_init_operations, sizeof(st7701_type1_init_operations));

#endif /* !defined(DISPLAY_DEV_KIT) */
/*******************************************************************************
 * Arduino_GFX設定の終了
 ******************************************************************************/

void setup(void)
{
  Serial.begin(115200);
  // Serial.setDebugOutput(true);
  // while(!Serial);
  Serial.println("Arduino_GFX Hello World example");

#ifdef GFX_EXTRA_PRE_INIT
  GFX_EXTRA_PRE_INIT();
#endif

  // ディスプレイの初期化
  if (!gfx->begin())
  {
    Serial.println("gfx->begin() failed!");
  }
  gfx->fillScreen(BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif

  gfx->setCursor(10, 10);
  gfx->setTextColor(RED);
  gfx->println("Sensecap Indicator");

  delay(5000); // 5秒
}

void loop()
{
  gfx->setCursor(random(gfx->width()), random(gfx->height()));
  gfx->setTextColor(random(0xffff), random(0xffff));
  gfx->setTextSize(random(6) /* xスケール */, random(6) /* yスケール */, random(2) /* ピクセルマージン */);
  gfx->println("Sensecap Indicator");

  delay(1000); // 1秒
}
```

すべてが正常に動作すれば、「Sensecap Indicator」というテキストが画面上にランダムに表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/6.jpg"/></div>

<h3>RP2040チップにリンクされたセンサーを読み取る</h3>

準備セクションで述べたように、すべてのセンサーはRP2040に接続されています。RP2040にデフォルトのファームウェアがまだあると仮定すると、センサーデータはUARTインターフェースを使用してESP32S3に送信されます。

ESP32S3がデータを読み取れるようにするためには、**PacketSerial**というライブラリをインストールする必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/7.jpg"/></div>

ライブラリをインストールした後、以下のコードをアップロードしてESP32S3でセンサーデータを取得します：

```cpp
//
// Copyright (c) 2012 Christopher Baker <https://christopherbaker.net>
//
// SPDX-License-Identifier: MIT
//


#include <PacketSerial.h>

PacketSerial myPacketSerial;

#define RXD2 20
#define TXD2 19

#define PKT_TYPE_SENSOR_SCD41_CO2 0XB2
#define PKT_TYPE_SENSOR_SHT41_TEMP 0XB3
#define PKT_TYPE_SENSOR_SHT41_HUMIDITY 0XB4
#define PKT_TYPE_SENSOR_TVOC_INDEX 0XB5
#define DEBUG   0

void setup()
{
  // PacketSerialオブジェクトとの通信を開始し、通信速度をビット/秒（ボー）で設定します。
  myPacketSerial.begin(115200);

  // パケットを受信する場合、パケットハンドラ関数を指定する必要があります。
  // パケットハンドラは、以下のonPacketReceived関数のようなカスタム関数です。
 
  Serial1.begin(115200, SERIAL_8N1, RXD2, TXD2);
  myPacketSerial.setStream(&Serial1);
  myPacketSerial.setPacketHandler(&onPacketReceived);
}


void loop()
{
  // 通常通り、プログラム固有のloop()作業をここで行います。

  // PacketSerial::update()メソッドは、受信したシリアルデータを読み取り、
  // デコードされたパケットをユーザーが指定したパケットハンドラ関数を通じて送信します。
  //
  // PacketSerial::update()メソッドは、ループごとに1回呼び出される必要があります。
  // 頻繁に呼び出さないと、バッファシリアルオーバーフローが発生する可能性があります。
  myPacketSerial.update();

  // 受信バッファオーバーフローをチェックします（オプション）。
  if (myPacketSerial.overflow())
  {
    // ピンを介してアラートを送信する（例：オーバーフローLEDを作成する）か、
    // 送信者にユーザー定義のパケットを返します。
    //
    // 最終的には、README.mdを参照して受信バッファを増やす必要があるかもしれません。
  }
}



void onPacketReceived(const uint8_t *buffer, size_t size) {

  
  Serial.printf("<--- recv len:%d, data: ", size);


  if (size < 1) {
    return;
  }
  //byte serbytes[] = buffer[i];
  float dataval;
  switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SCD41_CO2:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("CO2 Level:  ");
        Serial.println(dataval);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SHT41_TEMP:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("sht temp:  ");
        Serial.println(dataval, 2);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SHT41_HUMIDITY:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("sht humidity:  ");
        Serial.println(dataval, 2);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_TVOC_INDEX:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("TVOC INDEX:  ");
        Serial.println(dataval);
        break;
      }
    default:
      break;
  }
}
```

シリアルモニターを開き、ボーレートを115200に設定すると、RP2040からセンサーのデータが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/8.jpg"/></div>

<h3>2つの例を組み合わせてセンサーのデータを画面に表示する</h3>

Arduino IDEの例メニューを開き、**GFX library for Arduino**に移動して、**SI_displaysensordata**の例を選択し、アップロードしてください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/9.jpg"/></div>

アップロードが成功すると、センサーのデータが画面に表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/10.jpg"/></div>

おめでとうございます！これでArduino IDEを使用してSensecap Indicatorを開発することができます。

<h2>さらに進めるには</h2>

1. 開発にはまだフェーズ1があり、このチュートリアルではタッチスクリーン部分が設定されていません。FT6336モジュール用のいくつかのArduinoライブラリを試しましたが、成功した結果は得られませんでした。
2. これは、FT6366モジュールのINTピンとRESETピンがPCA9535 I2Cエクスパンダーに接続されており、ライブラリで手動で設定する必要があるためです。将来的に再挑戦するかもしれません。

- ちなみに、Arduino GFXライブラリの使用についてさらに理解を深めたい場合は、[Arduino_GFX GitHubページ](https://github.com/moononournation/Arduino_GFX)を訪問してください。

</TabItem>
</Tabs>

## 特別な感謝

GitHubユーザー[u4mzu4](https://github.com/u4mzu4)に、Sensecap IndicatorをサポートするSWSPI設定ファイルを提供していただき感謝します。

[LongDirtyAnimAlf](https://github.com/LongDirtyAnimAlf)に、SenseCAP IndicatorのArduinoライブラリを更新し、タッチスクリーンのサポートを含めていただき感謝します。

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [LongDirtyAnimAlf](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=indi&pane=issue&itemId=70900433)、[Hendra](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35925769)、そしてu4mzu4の努力に感謝します。あなたの作業は展示される予定です。

## 技術サポートと製品に関する議論

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>