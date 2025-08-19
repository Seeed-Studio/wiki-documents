---
description: このチュートリアルでは、円形スクリーンの拡張ボード機能の使用方法を紹介します。
title: ハードウェアの使用方法
keywords:
- 円形ディスプレイ
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/seeedstudio_round_display_usage
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio 円形ディスプレイ拡張機能の使用方法

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/79.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

このチュートリアルでは、円形ディスプレイの拡張機能の使用方法について詳しく説明します。RTC機能、SDカード機能、スクリーン機能の使用方法が含まれます。

## はじめに

このチュートリアルの内容は、すべてのXIAOシリーズ製品をサポートしています。そのため、どのXIAOを使用しても、このWikiの内容を完了することができます。

円形ディスプレイを初めて使用する場合は、以前に作成した準備コンテンツを読み、それに従ってライブラリ環境を構成することで、円形ディスプレイをスムーズに使用できるようにしてください。

- **[Seeed Studio 円形ディスプレイの準備 (XIAO用)](https://wiki.seeedstudio.com/ja/get_start_round_display#getting-started)**

### microSDカードの取り付け

円形ディスプレイは、**FAT32**形式で**32GB**以下のmicroSDカードを使用できます。microSDカードを取り付ける際は、microSDカードの金属端子をボードの内側に向けて挿入してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/64.jpg" style={{width:500, height:'auto'}}/></div>

### RTCバッテリーの取り付け

円形ディスプレイはRTC機能をサポートしており、PCF8563Tチップが内蔵されています。RTC機能を使用する場合は、コイン型電池が必要で、RTCを動作させ続けることができます。

CR927シリーズのボタン型電池を使用することを推奨します。取り付け時には、正極（平らな端子）が外側を向き、負極（少し突起した表面）が内側を向くようにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/65.jpg" style={{width:500, height:'auto'}}/></div>

:::note
上記の画像はバッテリーの取り付け方向のみを示しており、完全に取り付けられた状態ではありません。バッテリーを正しく取り付けるには、バッテリーホルダーに完全に挿入する必要があります。
:::

### 電源供給バッテリーの取り付け

円形ディスプレイは外部3.7Vリチウムバッテリーをサポートしています。また、内蔵の電源管理チップにより、バッテリーはXIAOのUSBポートを介して充電することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/77.jpg" style={{width:500, height:'auto'}}/></div>

円形ディスプレイには充電インジケーターも搭載されています。インジケーターには以下の3つの状態があります：

1. リチウムバッテリーが接続されていない場合、インジケーターライトは低輝度で常時点灯します。
2. リチウムバッテリーを接続すると、充電中は赤いライトが高輝度で常時点灯します。
3. リチウムバッテリーが接続され、バッテリーが完全に充電されるとライトが消灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/78.jpg" style={{width:500, height:'auto'}}/></div>

### 円形ディスプレイのスイッチ

円形ディスプレイにはスイッチも搭載されています。このスイッチはディスプレイのオン/オフとXIAOへの電源供給を制御するために使用されます。スイッチをOFFにすると、バッテリーはXIAOに電力を供給せず、ディスプレイ画面が消灯します。スイッチをONにすると、ディスプレイが点灯し、バッテリーがXIAOに電力を供給します（電源供給バッテリーが取り付けられている場合）。これによりプログラムが実行されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/66.jpg" style={{width:500, height:'auto'}}/></div>

:::note
ここで説明しているXIAOへの電力供給は、円形ディスプレイを介してXIAOに電力を供給することを指します。XIAOに直接電力を供給している場合、円形ディスプレイのスイッチではXIAOへの電力を切断することはできません。円形ディスプレイのスイッチでデバイス全体を制御したい場合は、円形ディスプレイに電源供給バッテリーを取り付ける必要があります。

また、一部のXIAO（例えばXIAO ESP32C3など）は、電源を切断して再度供給した際にプログラムを実行するためにXIAOのリセットボタンを押す必要がある場合があります。
:::

### 円形ディスプレイの回路設計

このセクションでは、円形ディスプレイのハードウェア回路の回路図を抜粋し、円形ディスプレイのハードウェアで使用されるXIAOのIOピンをユーザーに通知します。これにより、IOの使用における競合を回避できます。

#### バッテリー電圧測定ピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/70.png" style={{width:400, height:'auto'}}/></div>

円形ディスプレイの設計では、XIAOの**A0/D0**ピンを使用してオンボードバッテリーの回路に接続しています。このピンのアナログ値を読み取ることで、残りのバッテリー容量を取得できます。

#### SDカード回路ピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/67.png" style={{width:800, height:'auto'}}/></div>

SDカードセクションでは、XIAOの4つのIOポートを使用しています。使用状況は以下の表に示されています。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">microSDカードスロット</th>
        </tr>
        <tr>
            <td align="center">D2</td>
            <td align="center">CS</td>
        </tr>
        <tr>
            <td align="center">D8</td>
            <td align="center">SCK</td>
        </tr>
        <tr>
            <td align="center">D9</td>
            <td align="center">MISO</td>
        </tr>
        <tr>
            <td align="center">D10</td>
            <td align="center">MOSI</td>
        </tr>
    </table>
</div>

#### RTC回路のピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/68.png" style={{width:500, height:'auto'}}/></div>

RTC機能はIICプロトコルを使用するため、**D5 (SCL)** および **D4 (SDA)** ピンを占有します。

#### タッチスクリーン回路のピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/69.png" style={{width:400, height:'auto'}}/></div>

タッチスクリーン部分はXIAOの4つのIOポートを使用し、以下の表に示すように使用されます。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">タッチスクリーン</th>
        </tr>
        <tr>
            <td align="center">D4 (SDA)</td>
            <td align="center">タッチスクリーン IIC</td>
        </tr>
        <tr>
            <td align="center">D5 (SCL)</td>
            <td align="center">タッチスクリーン IIC</td>
        </tr>
        <tr>
            <td align="center">D3</td>
            <td align="center">LCD_DC</td>
        </tr>
        <tr>
            <td align="center">D1</td>
            <td align="center">LCD_CS</td>
        </tr>
        <tr>
            <td align="center">D7</td>
            <td align="center">TP_INT</td>
        </tr>
        <tr>
            <td align="center">D6</td>
            <td align="center">スクリーンバックライト</td>
        </tr>
    </table>
</div>


## ラウンドディスプレイライブラリの概要

ラウンドディスプレイのソフトウェア開発の大部分は、XIAOのハードウェアサポートに基づいています。グラフィックスはTFTライブラリ、LVGLライブラリ、およびArduino GFXライブラリに基づいています。

ラウンドディスプレイの機能をユーザーが簡単に使用できるようにするため、これらのライブラリのインターフェースを主に呼び出す独自のライブラリを作成しました。これにより、ユーザーが後の段階で独自に開発する際のハードルを下げることができます。この章では、ラウンドディスプレイ用に準備したこれらのライブラリの機能と、それぞれの使用方法について説明します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

### lv_xiao_round_screen.h

`lv_xiao_round_screen.h`ファイルは、ラウンドディスプレイライブラリ内のヘッダーファイルで、画面の表示およびタッチ機能を駆動します。

ファイルの冒頭でマクロ定義チェックが行われ、ラウンドディスプレイを使用する開発者が画面パターンを描画する際に使用するグラフィックスライブラリを選択する必要があることを要求しています。選択肢は2つあり、**TFT**と**Arduino GFX**です。**TFT**ライブラリを選択した場合、**LVGL**をサポートすることができます。

```cpp
#if defined(USE_TFT_ESPI_LIBRARY) && defined(USE_ARDUINO_GFX_LIBRARY)
#error "More than one graphics library is defined."
#elif defined(USE_TFT_ESPI_LIBRARY)
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI(SCREEN_WIDTH, SCREEN_HEIGHT);
#elif defined(USE_ARDUINO_GFX_LIBRARY)
#include <Arduino_GFX_Library.h>
```

この設計の理由は、特定のXIAOが異なるグラフィックスライブラリでパターンを描画する際に独自の利点を持っているためです。例えば、XIAO nRF52840を使用している場合、Arduino GFXライブラリを使用することでメモリ効率が高く、安定性が向上します。一方、XIAO ESP32S3のような大容量メモリを持つXIAOは、LVGLのようなグラフィックスライブラリを扱う際に固有の利点があり、より複雑なパターンやUIを描画することができます。

そのため、ラウンドディスプレイを使用してパターンを描画する必要がある場合は、使用するグラフィックスライブラリを選択し、Arduinoプログラムの冒頭で定義することを忘れないでください。

- TFTライブラリまたはLVGLライブラリを使用したい場合：

```cpp
#define USE_TFT_ESPI_LIBRARY
```

- Arduino GFXライブラリを使用したい場合：

```cpp
#define USE_ARDUINO_GFX_LIBRARY
```

1. `void xiao_disp_init(void)`：この関数は、ディスプレイのバックライトを初期化し、ディスプレイを初期位置に回転させるために使用されます。デバイスのディスプレイバックプレーンの色は単色の黒になります。この関数は通常単独では使用されず、初期化が必要な場合は`lv_xiao_disp_init()`関数が使用されます。

2. `void lv_xiao_disp_init(void)`：バックライトを初期化し、ディスプレイドライバを初期化します。通常、ディスプレイの初期化に使用されます。

3. `bool chsc6x_is_pressed(void)`：この関数は画面がタッチされているかどうかを確認するために使用され、画面がタッチされている場合は`True`を返します。

4. `void lv_xiao_touch_init(void)`：この関数はタッチスクリーンとそのドライバを初期化するために使用されます。

5. `void chsc6x_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )`：この関数はタッチスクリーンの座標点を取得するために使用されます。


### lv_hardware_test.h

`lv_hardware_test.h`ファイルは、ラウンドディスプレイライブラリ内のサンプル**HardwareTest**のヘッダーファイルです。このヘッダーファイルは、ラウンドディスプレイ用のほとんどのハードウェア使用関数を準備しています。

このヘッダーファイル内の関数を使用したい場合は、ファイルを直接Arduinoファイルと同じディレクトリにコピーすることができます。

1. `int32_t battery_level_percent(void)`：この関数を呼び出すことで、バッテリーの充電率を読み取り、計算してアプリケーション内でバッテリーレベルを表示することができます。

2. `void lv_hardware_test(void)`：この関数は、画面表示、画面タッチ、RTCクロック、バッテリーレベルを含むすべてのハードウェア機能をテストするために使用されます。この関数の記述方法を参考にして、必要なラウンドディスプレイ機能の開発を完了することができます。

## KEボタンとGPIO

新しいバージョンのラウンドディスプレイでは、ユーザーが選択的に使用できるGPIOを解放するためのKEスイッチを設計しました。

KEスイッチは、microSDカードスロットとXIAOに接続するピン列の間に設計されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/90.jpg" style={{width:400, height:'auto'}}/></div>

このスイッチの回路設計は以下の通りです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/91.png" style={{width:400, height:'auto'}}/></div>

これは、スイッチが閉じている場合 **(ON側に切り替えた場合)**、ラウンドディスプレイのバッテリー電圧読み取り機能とディスプレイバックライト機能が利用可能になることを意味します。

スイッチが切断されている場合 **(デジタル側に切り替えた場合)**、XIAOのピンA0とD6が利用可能な状態になります。

## バッテリー電圧の測定

XIAOのIOピンが不足しているため、大多数のXIAOではバッテリー電圧を測定することができません。ただし、一部のXIAOには外部バッテリーを許可する電源管理チップが構成されています。

しかし、ラウンドディスプレイを使用し、画面を通じてXIAOに電力を供給する場合、バッテリー電圧の測定が可能になります。

以下はバッテリー電圧を測定するサンプルプログラムです。このプログラムでは、`lv_hardware_test.h`ファイルから`battery_level_percent()`関数を使用しています。

```cpp
#define NUM_ADC_SAMPLE 20           // サンプリング周波数
#define RP2040_VREF 3300            // XIAO RP2040を使用する場合、3.3Vピンで実際の電圧を測定し、その値を修正する必要があります。(単位: mV)
#define BATTERY_DEFICIT_VOL 1850    // バッテリーが放電状態の電圧値
#define BATTERY_FULL_VOL 2450       // バッテリーが満充電状態の電圧値

int32_t battery_level_percent(void)
{
  int32_t mvolts = 0;
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    mvolts += analogReadMilliVolts(D0);
  }
  mvolts /= NUM_ADC_SAMPLE;
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
  analogReference(AR_INTERNAL2V4);  // 0.6V基準 1/4ゲイン
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = 2400 * adc_raw / (1<<12);
#elif defined(ARDUINO_SEEED_XIAO_RP2040)
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = RP2040_VREF * adc_raw / (1<<12);
#endif
  int32_t level = (mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL-BATTERY_DEFICIT_VOL); // 1850 ~ 2100
  level = (level<0) ? 0 : ((level>100) ? 100 : level); 
  return level;
}

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  while(!Serial);

  analogReadResolution(12);
}

void loop() {
  // 繰り返し実行するメインコード
  int32_t batteryVal = battery_level_percent();
  Serial.print("残り電力の割合は: ");
  Serial.print(batteryVal);
  Serial.print(" %");
  Serial.println();
  delay(1000);
}
```

:::tip
このプログラムは汎用プログラムではなく、測定されたバッテリーの割合が正確でない場合があります。これは、使用するバッテリーやチップ、開発ボードが異なるためです。このプログラムを実行する際には、実際の状況に応じてプログラムを修正する必要があります。修正方法については、このセクションの[プログラム注釈](#program-annotation)を参照してください。
:::

使用しているXIAOボードを選択し、プログラムをアップロードしてシリアルモニターを開き、ボーレートを**115200**に設定します。バッテリーが接続されて電源が入っている場合、シリアルモニターでバッテリー電圧を確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/80.png" style={{width:700, height:'auto'}}/></div>

### プログラム注釈

このコードは、ADCを使用してバッテリー電圧を測定し、バッテリーレベルの割合を計算します。実装はハードウェアプラットフォームによって異なります：

- ESP32-S3およびESP32-C3プラットフォームでは、`analogReadMilliVolts`関数を使用してアナログ電圧値を読み取り、複数のサンプルの平均値を取得してバッテリー電圧の平均値を得ます。
- Seeeduino XIAO NRF52840プラットフォームでは、まず`analogReference`関数を使用して基準電圧を2.4Vに指定し、その後`analogRead`関数を使用してアナログ電圧値を読み取り、バッテリー電圧の平均値を計算します。
- Seeeduino XIAO RP2040プラットフォームでは、`analogRead`関数を使用してアナログ電圧値を読み取り、バッテリー電圧の平均値を計算します。

いずれの場合も、バッテリー電圧の平均値を計算し、その後、`(mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL - BATTERY_DEFICIT_VOL)`という式を使用してバッテリーレベルの割合を計算します。ここで、`mvolts`はバッテリー電圧の平均値、`BATTERY_DEFICIT_VOL`はバッテリーの最小動作電圧、`BATTERY_FULL_VOL`はバッテリーの最大電圧です。最後に、バッテリーレベルの割合を0から100の範囲内に制限します。

まとめると、このプログラムを使用する際の電圧測定の精度は以下のパラメータによって決まります。

```c
#define RP2040_VREF 3300            // XIAO RP2040を使用する場合、3.3Vピンで実際の電圧を測定し、その値を修正する必要があります。(単位: mV)
#define BATTERY_DEFICIT_VOL 1850    // バッテリーが放電状態の電圧値
#define BATTERY_FULL_VOL 2450       // バッテリーが満充電状態の電圧値
```

バッテリーのアナログ値を取得する最初のステップは、購入したバッテリーが充電不足/満充電の状態でのアナログ値を取得することです。

以下の関数を使用してバッテリーのアナログ値を取得できます。この値を、バッテリーが満充電状態と不足状態の両方で一度ずつ取得する必要があります。

```cpp
int32_t battery_test(void)
{
  int32_t mvolts = 0;
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    mvolts += analogReadMilliVolts(D0);
  }
  mvolts /= NUM_ADC_SAMPLE;
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
  analogReference(AR_INTERNAL2V4);  // 0.6V基準 1/4ゲイン
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = 2400 * adc_raw / (1<<12);
#elif defined(ARDUINO_SEEED_XIAO_RP2040)
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = RP2040_VREF * adc_raw / (1<<12);
#endif
  return mvolts;
}
```

:::tip
`battery_test()` 関数は、実際には `battery_level_percent()` 関数からパーセンテージを計算する最後の2行を削除したものです。
:::

次に、測定した値に対応するプログラムの値を変更してください。

**XIAO RP2040** を使用している場合、追加のステップとして、ボルトメーターを使用して XIAO RP2040 の 3.3V ピンの実際の電圧を測定する必要があります。測定した電圧値を **mV** 単位に変換し、対応するプログラムを修正します。

例えば、以下は私が XIAO RP2040 とバッテリーを使用して実際に測定した値です。

```c
#define RP2040_VREF 3080
#define BATTERY_DEFICIT_VOL 1541
#define BATTERY_FULL_VOL 1791
```

## RTC機能

RTC機能の部分は、主に以下の4つのセクションに分けてその応用を紹介します。
1. ネットワーク機能のない XIAO の場合、RTCを手動で初期時間を設定して補正します。
2. コイン電池を使用してRTCに電力を供給し、正確な時間を継続的に取得します。
3. ネットワーク機能を持つ XIAO の場合、ネットワーク機能を使用して時間を補正します。
4. RTC機能を組み合わせて簡単な時計ダイヤルを描画します。

### オフラインでのRTCの手動補正

以下はRTC時間を手動で補正するサンプルプログラムです。この設定は `Setup()` 関数内に配置され、セットアッププログラムが一度だけ実行されるようにします。この手順は、ネットワーク機能のない XIAO にとって最も効率的な初期RTC時間の設定方法です。

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // シリアル初期化
  Serial.begin(115200);
  while(!Serial);
  delay(50);

  // I2C初期化
  Wire.begin();

  // RTC初期化
  rtc.begin();

  // RTC日付設定
  I2C_BM8563_DateTypeDef dateStruct;
  dateStruct.weekDay = 3;
  dateStruct.month = 4;
  dateStruct.date = 26;
  dateStruct.year = 2023;
  rtc.setDate(&dateStruct);

  // RTC時間設定
  I2C_BM8563_TimeTypeDef timeStruct;
  timeStruct.hours   = 9;
  timeStruct.minutes = 43;
  timeStruct.seconds = 10;
  rtc.setTime(&timeStruct);

  Serial.println("RTC時間の補正が完了しました！");
}

void loop() {

}
```

プログラムをアップロードしてシリアルモニターをオンにすると、RTC時間の補正が開始されます。**RTC時間の補正が完了しました！** と表示されたら、補正が完了です。

### RTC時間の取得

以下のプログラムは、RTCの時間を毎秒取得し、シリアルモニターに出力します。

:::tip
RTC時間を取得する手順は、上記の手動補正手順の後に使用できます。時間補正手順は一度だけ実行する必要があり、コイン電池の電力でRTCクロックが継続的に動作するようになります。その後は、時間を取得する手順を使用して正確な時間を取得するだけで済みます。

時間を補正するプログラムと時間を取得するプログラムを一緒に使用することはお勧めしません。そうすると、XIAO が電源を入れるたびに両方が設定した時間にリセットされ、正確な時間を取得できなくなります。
:::

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // シリアル初期化
  Serial.begin(115200);
  delay(50);

  // I2C初期化
  Wire.begin();

  // RTC初期化
  rtc.begin();
}

void loop() {
  I2C_BM8563_DateTypeDef dateStruct;
  I2C_BM8563_TimeTypeDef timeStruct;

  // RTC取得
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // RTC出力
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  Serial.printf("%04d/%02d/%02d %02d:%02d:%02d\n",
              dateStruct.year,
              dateStruct.month,
              dateStruct.date,
              timeStruct.hours,
              timeStruct.minutes,
              timeStruct.seconds
              );
#else
  Serial.print(dateStruct.year);
  Serial.print(", ");
  Serial.print(dateStruct.month);
  Serial.print(", ");
  Serial.print(dateStruct.date);
  Serial.print(", ");
  Serial.print(timeStruct.hours);
  Serial.print(", ");
  Serial.print(timeStruct.minutes);
  Serial.print(", ");
  Serial.print(timeStruct.seconds);
  Serial.println();
#endif

  // 待機
  delay(1000);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/71.png" style={{width:700, height:'auto'}}/></div>

### ネットワークによるRTC時間の補正

ネットワーク機能を持つ XIAO の場合、作業は非常に簡単になります。ネットワークを使用すれば、コイン電池を使用してRTCを動作させる必要すらありません。電源を入れるたびにネットワークで時刻を取得するだけで済みます。

以下は、ネットワークで時刻を取得し、RTC時間をシリアルモニターに出力するサンプルプログラムです。

:::caution
このプログラムは、XIAO ESP32シリーズにのみ適用されます。このシリーズのみがネットワーク機能を持っています。
:::

```cpp
#include "I2C_BM8563.h"
#include <WiFi.h>

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

const char* ntpServer = "time.cloudflare.com";
const char *ssid     = "YOUR_SSID";
const char *password = "YOUR_PASSWORD";

void setup() {
  // シリアル初期化
  Serial.begin(115200);
  delay(50);

  // アクセスポイントに接続
  WiFi.begin(ssid, password);
  Serial.print("Wi-Fiに接続中 ");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" 接続完了");

  // NTP時間をローカルに設定
  configTime(9 * 3600, 0, ntpServer);

  // I2C初期化
  Wire.begin();

  // RTC初期化
  rtc.begin();

  // ローカル時間を取得
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    // RTC時間を設定
    I2C_BM8563_TimeTypeDef timeStruct;
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);

    // RTC日付を設定
    I2C_BM8563_DateTypeDef dateStruct;
    dateStruct.weekDay = timeInfo.tm_wday;
    dateStruct.month   = timeInfo.tm_mon + 1;
    dateStruct.date    = timeInfo.tm_mday;
    dateStruct.year    = timeInfo.tm_year + 1900;
    rtc.setDate(&dateStruct);
  }
}

void loop() {
  I2C_BM8563_DateTypeDef dateStruct;
  I2C_BM8563_TimeTypeDef timeStruct;

  // RTC取得
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // RTC出力
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
    Serial.printf("%04d/%02d/%02d %02d:%02d:%02d\n",
                dateStruct.year,
                dateStruct.month,
                dateStruct.date,
                timeStruct.hours,
                timeStruct.minutes,
                timeStruct.seconds
               );
#else
     Serial.print(dateStruct.year);
     Serial.print(", ");
     Serial.print(dateStruct.month);
     Serial.print(", ");
     Serial.print(dateStruct.date);
     Serial.print(", ");
     Serial.print(timeStruct.hours);
     Serial.print(", ");
     Serial.print(timeStruct.minutes);
     Serial.print(", ");
     Serial.print(timeStruct.seconds);
     Serial.println();
#endif

  // 待機
  delay(1000);
}
```

このプログラムを使用する際は、ネットワークの名前とパスワードを実際の状況に応じて入力してください。プログラムをアップロードした後、シリアルモニタを開き、ボーレートを115200に設定すると、正確な時刻を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/72.png" style={{width:700, height:'auto'}}/></div>

### RTC時刻に基づくシンプルなダイヤル

以下のプログラムは、RTCクロック描画に基づくダイヤルプログラムです。

:::caution
以下のプログラムは、XIAO nRF52840を除くXIAOシリーズにのみ対応しています。XIAO nRF52840は現在、TFT互換性に問題があります。ただし、Arduino GFXライブラリまたはLVGLを使用してダイヤルを描画することを検討できます。
:::

```cpp
#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "I2C_BM8563.h"
#include <Wire.h>

#define USE_TFT_ESPI_LIBRARY

#include "lv_xiao_round_screen.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
#include "esp_wifi.h"
#include "WiFi.h"

  const char *ntpServer = "time.cloudflare.com";
  const char *ssid     = "YOUR_SSID";
  const char *password = "YOUR_PASSWORD";
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "この手順はXIAO nRF52840シリーズには適用できません。他のXIAOに置き換えて再試行してください。"
#endif

//TFT_eSPI tft = TFT_eSPI();  // ライブラリを呼び出し、ピンはUser_Setup.hで定義
TFT_eSprite face = TFT_eSprite(&tft);

#define CLOCK_X_POS 0
#define CLOCK_Y_POS 0

#define CLOCK_FG   TFT_SKYBLUE
#define CLOCK_BG   TFT_NAVY
#define SECCOND_FG TFT_RED
#define LABEL_FG   TFT_GOLD

#define CLOCK_R       240.0f / 2.0f // 時計盤の半径（float型）
#define H_HAND_LENGTH CLOCK_R/2.0f
#define M_HAND_LENGTH CLOCK_R/1.4f
#define S_HAND_LENGTH CLOCK_R/1.3f

// 1秒ごとの角度増加を計算。時針と分針の角度は毎秒変化し、滑らかなサブピクセル移動を実現
#define SECOND_ANGLE 360.0 / 60.0
#define MINUTE_ANGLE SECOND_ANGLE / 60.0
#define HOUR_ANGLE   MINUTE_ANGLE / 12.0

// スプライトの幅と高さ
#define FACE_W CLOCK_R * 2 + 1
#define FACE_H CLOCK_R * 2 + 1

// 時間 h:m:s
uint8_t h = 0, m = 0, s = 0;

float time_secs = h * 3600 + m * 60 + s;

// 次のティックの時間
uint32_t targetTime = 0;

// =========================================================================
// セットアップ
// =========================================================================
void setup() {
  Serial.begin(115200);
  Serial.println("起動中...");

  // 画面を初期化
  tft.init();

  // 視認性の良い角度範囲のために向きを設定
  // 通常、画面リボンコネクタが下部にあるときが最適
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);

  // 時計盤スプライトを作成
  //face.setColorDepth(8); // 8ビットでも動作しますが、アンチエイリアス効果が低下します
  face.createSprite(FACE_W, FACE_H);

  // 時計全体を描画 - NTP時刻はまだ利用不可
  renderFace(time_secs);

#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  WiFi.begin(ssid, password);
  while ( WiFi.status() != WL_CONNECTED ) 
  {
    delay ( 500 );
    Serial.print ( "." );
  }
  configTime(8 * 3600, 0, ntpServer);
#endif

  Wire.begin();
  rtc.begin();

  I2C_BM8563_TimeTypeDef timeStruct;
  I2C_BM8563_DateTypeDef dateStruct;

// XIAO ESP32シリーズの場合、ネットワーク時刻を使用
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);
  }
#else
  // RTC時刻を設定。他のXIAOはネットワーク機能がないため手動で時刻を合わせる必要があります。
  // 設定時刻は一度だけ設定してください。
  timeStruct.hours   = 9;
  timeStruct.minutes = 43;
  timeStruct.seconds = 10;
  rtc.setTime(&timeStruct);
#endif

  targetTime = millis() + 100;
  rtc.getTime(&timeStruct);
  time_secs = timeStruct.hours * 3600 + timeStruct.minutes * 60 + timeStruct.seconds;
}

// =========================================================================
// ループ
// =========================================================================
void loop() {
  // 定期的に時刻を更新
  if (targetTime < millis()) {

    // 次のティック時間を100ミリ秒後に更新（滑らかな動きのため）
    targetTime = millis() + 100;

    // 時刻を100ミリ秒進める
    time_secs += 0.100;

    // 深夜のロールオーバー
    if (time_secs >= (60 * 60 * 24)) time_secs = 0;

    // すべてのグラフィックはスプライト内で描画され、ちらつきを防止
    renderFace(time_secs);

    I2C_BM8563_DateTypeDef dateStruct;
    I2C_BM8563_TimeTypeDef timeStruct;

    // RTCを取得
    rtc.getTime(&timeStruct);
  
    // RTCを出力
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
    Serial.printf("%02d:%02d:%02d\n",
                timeStruct.hours,
                timeStruct.minutes,
                timeStruct.seconds
               );
#else
     Serial.print(timeStruct.hours);
     Serial.print(", ");
     Serial.print(timeStruct.minutes);
     Serial.print(", ");
     Serial.print(timeStruct.seconds);
     Serial.println();
#endif
  }
}

// =========================================================================
// スプライト内で時計盤を描画
// =========================================================================
static void renderFace(float t) {
  float h_angle = t * HOUR_ANGLE;
  float m_angle = t * MINUTE_ANGLE;
  float s_angle = t * SECOND_ANGLE;

  // 時計盤全体を再描画 - これは迅速に行えます
  face.fillSprite(TFT_BLACK);

  // 時計盤の円を描画
  face.fillSmoothCircle( CLOCK_R, CLOCK_R, CLOCK_R, CLOCK_BG );

  // テキスト基準を中央に設定し、色を指定
  face.setTextDatum(MC_DATUM);

  // 背景色は文字レンダリング中に読み取られます
  face.setTextColor(CLOCK_FG, CLOCK_BG);

  // テキストのオフセット調整
  constexpr uint32_t dialOffset = CLOCK_R - 10;

  float xp = 0.0, yp = 0.0; // 滑らかなAA動作のために浮動小数点ピクセル位置を使用

  // 時計周囲に数字を描画
  for (uint32_t h = 1; h <= 12; h++) {
    getCoord(CLOCK_R, CLOCK_R, &xp, &yp, dialOffset, h * 360.0 / 12);
    face.drawNumber(h, xp, 2 + yp);
  }

  // テキストを追加（デジタル時刻でも可）
  face.setTextColor(LABEL_FG, CLOCK_BG);
  face.drawString("TFT_eSPI", CLOCK_R, CLOCK_R * 0.75);

  // 分針を描画
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, M_HAND_LENGTH, m_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // 時針を描画
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, H_HAND_LENGTH, h_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // 中央のピボット円を描画
  face.fillSmoothCircle(CLOCK_R, CLOCK_R, 4, CLOCK_FG);

  // 秒針を描画
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, S_HAND_LENGTH, s_angle);
  face.drawWedgeLine(CLOCK_R, CLOCK_R, xp, yp, 2.5, 1.0, SECCOND_FG);
  face.pushSprite(0, 0, TFT_TRANSPARENT);
}

// =========================================================================
// 線の終点の座標を取得。ピボットはx,y、長さr、角度a
// =========================================================================
// 座標は呼び出し元にxpとypポインタを介して返されます
#define DEG2RAD 0.0174532925
void getCoord(int16_t x, int16_t y, float *xp, float *yp, int16_t r, float a)
{
  float sx1 = cos( (a - 90) * DEG2RAD);
  float sy1 = sin( (a - 90) * DEG2RAD);
  *xp =  sx1 * r + x;
  *yp =  sy1 * r + y;
}
```

上記のコードは、使用する開発ボードの種類に応じていくつかの小さな変更を加える必要があります。ネットワーク機能を備えたXIAOを使用している場合は、WiFiの名前とパスワードを設定する必要があります。そうでない場合は、手動でリアルタイムを調整する必要があります。

プログラムをアップロードすると、設定された時間に従って自動的に動作するダイヤルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/75.gif" style={{width:500, height:'auto'}}/></div>

## SDカード機能

Round Displayは、microSDカードを使用してデータの読み書きをサポートしています。microSDカードを使用する前に、カードを**FAT32**形式でフォーマットして、正しく認識され使用できるようにしてください。

### 全てのXIAOシリーズ（XIAO nRF52840シリーズを除く）

このセクションは、全てのXIAOシリーズ（XIAO nRF52840シリーズを除く）に適用され、ファイルの読み書きのための簡単なプログラムを示しています。

```cpp
#include <SPI.h>
#include <SD.h>
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

File myFile;

void setup() {
  // シリアル通信を開始し、ポートが開くのを待つ
  Serial.begin(115200);
  while(!Serial);

  // ディスプレイの初期化
  tft.init();

  Serial.print("SDカードを初期化中...");

  pinMode(D2, OUTPUT);
  if (!SD.begin(D2)) {
    Serial.println("初期化に失敗しました！");
    return;
  }
  Serial.println("初期化完了。");

  // ファイルを開く。1度に1つのファイルしか開けないため、
  // 別のファイルを開く前にこのファイルを閉じる必要があります。
  myFile = SD.open("/test.txt", FILE_WRITE);

  // ファイルが正常に開いた場合、書き込みを行う
  if (myFile) {
    Serial.print("test.txtに書き込み中...");
    myFile.println("テスト 1, 2, 3.");
    // ファイルを閉じる
    myFile.close();
    Serial.println("完了。");
  } else {
    // ファイルが開けなかった場合、エラーを表示
    Serial.println("test.txtのオープンエラー");
  }

  // ファイルを再度開いて読み込みを行う
  myFile = SD.open("/test.txt");
  if (myFile) {
    Serial.println("test.txtの内容:");

    // ファイルの内容をすべて読み込む
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // ファイルを閉じる
    myFile.close();
  } else {
    // ファイルが開けなかった場合、エラーを表示
    Serial.println("test.txtのオープンエラー");
  }
}

void loop() {
  // setup後は何も実行しない
}
```

このプログラムは、microSDカード上に**test.txt**という新しいファイルを作成し、その中に**テスト 1, 2, 3.**という内容を書き込みます。最後に、ファイルを読み込み、シリアルモニタを通じてその内容を出力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/83.png" style={{width:700, height:'auto'}}/></div>

:::caution
プログラム内でSDカード用に画面TFTの初期化が行われていることに気付くでしょう。これを不要だと思って削除しないでください。実際にはSDカードを使用するために必要です。これを行わないと、microSDカードのマウントに失敗したというエラーメッセージが表示されます。

ハードウェア設計上、一部のピンがデフォルトで低電位になっており、これが原因でmicroSDマウントプログラムがプルアップ抵抗がないと判断し、マウントに失敗することがあります。そのため、Round DisplayでSDカード機能を使用する際は、SDカードを初期化する前に画面ディスプレイを初期化することを確認してください。
:::

### XIAO nRF52840

XIAO nRF52840シリーズを使用している場合、SDカード機能を使用するために[SdFatライブラリ](https://github.com/greiman/SdFat)を別途ダウンロードする必要があります。

```cpp
#include <SPI.h>
#include "SdFat.h"
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // シリアル通信を開始し、ポートが開くのを待つ
  Serial.begin(9600);
  while (!Serial) {
    ; // ネイティブUSBポートのみで必要
  }

  // ディスプレイの初期化
  tft.init();

  Serial.print("SDカードを初期化中...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("初期化に失敗しました！");
    return;
  }
  Serial.println("初期化完了。");

  // ファイルを開く。1度に1つのファイルしか開けないため、
  // 別のファイルを開く前にこのファイルを閉じる必要があります。
  myFile = SD.open("/test.txt", FILE_WRITE);

  // ファイルが正常に開いた場合、書き込みを行う
  if (myFile) {
    Serial.print("test.txtに書き込み中...");
    myFile.println("テスト 1, 2, 3.");
    // ファイルを閉じる
    myFile.close();
    Serial.println("完了。");
  } else {
    // ファイルが開けなかった場合、エラーを表示
    Serial.println("test.txtのオープンエラー");
  }

  // ファイルを再度開いて読み込みを行う
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txtの内容:");

    // ファイルの内容をすべて読み込む
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // ファイルを閉じる
    myFile.close();
  } else {
    // ファイルが開けなかった場合、エラーを表示
    Serial.println("test.txtのオープンエラー");
  }
}

void loop() {
  // setup後は何も実行しない
}
```

### XIAO ESP32S3 & XIAO ESP32S3 Sense & XIAO ESP32C3

ESP32シリーズは非常に強力なファイルシステムサポートを備えているため、XIAO ESP32でファイルシステムを使用し、microSDカードを保存する方法についての一連の例を用意しています。以下のリンクから学ぶことができます。

- **[ファイルシステムとXIAO ESP32S3 Sense](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem)**

このWikiのチュートリアルはXIAO ESP32シリーズに適用されますが、Round DisplayのSDカードスロットを使用したい場合、上記のチュートリアルはXIAO ESP32S3 SenseのSDカードスロットの使用に焦点を当てているため、SDカードの初期化を以下の行に変更する必要があります。

```c
// ディスプレイの初期化
tft.init();

pinMode(D2, OUTPUT);
SD.begin(D2);
```

:::tip
SDカード機能を使用するには、TFT画面を最初に初期化する必要があることを忘れないでください。
:::

## スクリーン機能

スクリーンの使用部分では、主にタッチ機能とディスプレイ機能の2つの主要コンポーネントに分かれています。

### タッチ機能

タッチ機能はラウンドディスプレイの特別な特徴です。このタッチ機能を使用して、タップやホールドによるディスプレイ操作を実行できます。

以下のプログラムを使用して、ディスプレイがタッチされたかどうかの結果を出力することができます。

```cpp
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

void setup() {
  // 初期設定コード（1回だけ実行）
  Serial.begin(115200);
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
}

void loop() {
  // メインコード（繰り返し実行）
  if(chsc6x_is_pressed()){
    Serial.println("ディスプレイがタッチされました。");
  }
  else
    Serial.println("ディスプレイはタッチされていません。");
  delay(50);
}
```

以下のプログラムは、タッチ機能とディスプレイ機能を組み合わせた簡単な例です。このプログラムをアップロードして画面をタップすると、タップした位置に小さな円が描画されます。

:::caution
もしXIAO nRF52840を使用している場合、以下のTFTライブラリに基づくプログラムは正しく動作しない可能性があります。その場合、Arduino GFXライブラリを使用するようにプログラムを修正する必要があります。
:::

```cpp
#include <TFT_eSPI.h>
#include <SPI.h>
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

lv_coord_t touchX, touchY;

void setup() {
  // 初期設定コード（1回だけ実行）
  Serial.begin(115200);

  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
  
  // 画面の初期化
  tft.init();

  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
}

void loop() {
  // メインコード（繰り返し実行）
  if(chsc6x_is_pressed())
  {
    Serial.println("ディスプレイがタッチされました。");
    chsc6x_get_xy(&touchX, &touchY);
    tft.drawCircle(touchX, touchY, 15, TFT_WHITE);
  }
  
  delay(50);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/81.gif" style={{width:500, height:'auto'}}/></div>

### ディスプレイ機能

ディスプレイ部分については、主にLVGLライブラリとTFTライブラリの使用方法を紹介します。スペースの関係で、サポートされているグラフィックスライブラリを使用して複雑なダイヤルを描画する方法については、新しいWikiで詳しく説明します。

[Seeed Studio ラウンドディスプレイでの XIAO 用LVGLとTFTの使用方法](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display)

もちろん、簡単な例を実装したいだけの場合でも、グラフィックスライブラリには非常に豊富な例が用意されており、参考にすることができます。

- [TFTライブラリの例](https://github.com/Bodmer/TFT_eSPI/tree/master/examples)

- [Arduino GFXライブラリの例](https://github.com/moononournation/Arduino_GFX/tree/master/examples)

- [LVGLライブラリの例](https://github.com/lvgl/lvgl/tree/master/examples)

これらのライブラリがすでにインストールされている場合、Arduino IDEの**File->Example->ライブラリ名**から簡単に例を見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/82.png" style={{width:800, height:'auto'}}/></div>

:::tip
ここで紹介している例はあくまで参考用であり、すべての例が必ずしも動作するわけではありません。ラウンドディスプレイのピン配置やハードウェア定義に合わせてプログラムを修正する必要がある場合があります。
:::

## 技術サポートと製品に関する議論

### Q1: XIAO nRF52840 (Sense) を使用するとエラーが発生するのはなぜですか？

このチュートリアルの内容を使用する際、XIAO nRF52840 に関して2種類の問題が発生する可能性があります。

1. nRF52840 と TFT ライブラリの互換性の問題

   TFT ライブラリを使用している場合、コンパイルとアップロードはエラーなくスムーズに進みます。しかし、表示時に画像が表示されない場合、nRF52840 と TFT ライブラリの互換性の問題に直面している可能性があります。この場合、XIAO を交換するか、Arduino GFX ライブラリを使用して画像を完成させる必要があります。

2. 開発ボードの選択ミスによるコンパイルエラー

   コンパイルプロセスで問題が発生している場合、エラーメッセージは通常 SPI エラーに関するものです。例えば、`'SPI_X' was not declared in this scope` というエラーが表示されることがあります。この場合、開発ボードの種類を間違えて選択している可能性があります。このチュートリアルを使用するには、XIAO nRF52840 の **non-mbed** バージョンを使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>

### Q2: XIAO RP2040 にプログラムをアップロードすると、unaligned opcodes detected in executable segment というエラーが発生するのはなぜですか？

以下の画像の設定に従って、XIAO RP2040 のアップロードオプションを変更してください。デフォルトの **Small (-Os) (standard)** を除き、すべてのオプションは正常に動作します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/74.png" style={{width:600, height:'auto'}}/></div>

### Q3: XIAO SAMD21 用の円形スクリーンプログラムをコンパイルすると、ピン定義エラーが発生するのはなぜですか？

このエラーが発生した場合は、**Seeed SAMD** 開発ボードのオンボードパッケージを最新バージョンに更新してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/76.png" style={{width:700, height:'auto'}}/></div>

### Q4: XIAO ESP32C3 にプログラムをアップロードした後、画面が表示されないのはなぜですか？

プログラムに問題がなく、アップロード後に表示されない場合は、リセットが必要な可能性があります。XIAO ESP32C3 のリセットボタンを押してください。

## 技術サポートと製品に関する議論

.

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>