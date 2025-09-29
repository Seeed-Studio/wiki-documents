---
description: このチュートリアルでは、円形スクリーンの拡張ボード機能の使用方法を紹介します。
title: ハードウェアの使用方法
keywords:
- Round display
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/seeedstudio_round_display_usage
last_update:
  date: 04/27/2023
  author: Citric
---

# Seeed Studio Round Display拡張機能の使用方法

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/79.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<br />

このチュートリアルでは、Round Displayの拡張機能の使用方法について詳しく説明します。RTC機能、SDカード機能、スクリーン機能の使用方法を含みます。

## はじめに

このチュートリアルの内容は、すべてのXIAOシリーズ製品をサポートしています。そのため、任意のXIAOを使用してこのWikiの内容を完了することができます。

Round Displayを初めて使用する場合は、事前に作成した準備コンテンツを読み、この内容に従ってライブラリ環境を設定して、Round Displayをスムーズに使用できるようにすることをお勧めします。

- **[Seeed Studio Round Display for XIAOの使用準備](https://wiki.seeedstudio.com/ja/get_start_round_display#getting-started)**

### microSDカードの取り付け

Round Displayは、**32GB**以下の**FAT32**フォーマットのmicroSDカードの使用をサポートしています。microSDカードを取り付ける際は、microSDカードのゴールドフィンガーをボードの内側に向けて挿入してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/64.jpg" style={{width:500, height:'auto'}}/></div>

### RTCバッテリーの取り付け

Round DisplayはRTC機能をサポートしており、PCF8563Tチップが内蔵されています。RTC機能を使用する必要がある場合は、RTCの動作を維持するためにコイン電池が必要になる場合があります。

CR927シリーズのボタン電池の使用をお勧めします。取り付け時は、プラス端子（平らな面）を外側に向け、マイナス端子（わずかに突出した面）を内側に向けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/65.jpg" style={{width:500, height:'auto'}}/></div>

:::note
上記の画像は電池の取り付け方向のみを示しており、完全に取り付けられた電池ではありません。電池の正しい取り付けは、電池ホルダーに完全に挿入する必要があります。
:::

### 電源バッテリーの取り付け

Round Displayは外部3.7Vリチウム電池をサポートしています。また、内蔵の電源管理チップにより、XIAOのUSBポートを通じて電池を充電することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/77.jpg" style={{width:500, height:'auto'}}/></div>

Round Displayには充電インジケーターもあります。3つの状態があります：

1. リチウム電池が接続されていない場合、インジケーターライトは低輝度で常時点灯します。
2. リチウム電池を接続し、リチウム電池を充電している場合、赤いライトが高輝度で常時点灯します。
3. リチウム電池が接続され、電池が完全に充電されると、ライトが消灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/78.jpg" style={{width:500, height:'auto'}}/></div>

### Round Displayスイッチ

Round Displayにはスイッチもあります。このスイッチは、ディスプレイのオン/オフとXIAOへの電源供給を制御するために使用されます。スイッチをOFFに切り替えると、電池はXIAOに電力を供給せず、ディスプレイスクリーンがオフになります。スイッチをONにすると、ディスプレイが点灯し、電池がXIAO（電源バッテリーが取り付けられている場合）に電力を供給して、プログラムの実行を確保します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/66.jpg" style={{width:500, height:'auto'}}/></div>

:::note
ここでの説明におけるXIAOへの電力供給とは、Round Displayを通じてXIAOに電力を供給することを指します。XIAOに直接電力を供給している場合、Round DisplayのスイッチはXIAOへの電力を切断することはできません。Round Displayのスイッチでデバイス全体を制御したい場合は、Round Displayに電源バッテリーを取り付ける必要があります。

また、一部のXIAO（XIAO ESP32C3など）では、電源を切って再び電源を入れてプログラムを実行する際に、XIAOのリセットボタンを押して動作を開始する必要がある場合があることにも注意してください。
:::

### Round Display回路設計

このセクションでは、Round Displayのハードウェア回路図を抜粋し、Round DisplayのハードウェアでXIAOのどのIOピンが使用されているかをユーザーに通知して、IOの使用における競合を回避します。

#### バッテリー電圧測定ピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/70.png" style={{width:400, height:'auto'}}/></div>

Round Displayの設計では、XIAOの**A0/D0**ピンを使用してオンボードバッテリーの回路に接続しました。このピンのアナログ値を読み取ることで、残りのバッテリー充電量を取得できます。

#### SDカード回路ピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/67.png" style={{width:800, height:'auto'}}/></div>

SDカード部分は、XIAOの4つのIOポートを使用しており、以下の表に示すように使用されます。

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

#### RTC回路ピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/68.png" style={{width:500, height:'auto'}}/></div>

RTC機能はIICプロトコルを使用するため、**D5 (SCL)** と **D4 (SDA)** ピンを占有します。

#### タッチスクリーン回路ピン

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

## Round Display ライブラリ概要

Round Display のソフトウェア開発の大部分は、XIAO 自体のハードウェアサポートに基づいています。グラフィックスは TFT ライブラリ、LVGL ライブラリ、Arduino GFX ライブラリに基づいています。

Round Display の機能をユーザーが使いやすくするために、主に上記のライブラリのインターフェースを呼び出す独立したライブラリを作成しました。これにより、後の段階でユーザー自身が独立して開発する際の敷居を下げることができます。この章では、Round Display 用に準備したこれらのライブラリの機能と、それぞれの使用方法について重点的に説明します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

### lv_xiao_round_screen.h

`lv_xiao_round_screen.h` ファイルは Round Display ライブラリのヘッダーファイルで、画面の表示とタッチ機能を駆動します。

ファイルの冒頭でマクロ定義チェックが行われており、Round Display を使用する開発者が画面パターンを描画する際に使用したいグラフィックスライブラリを選択する必要があることを意図しています。**TFT** と **Arduino GFX** の 2 つの選択肢があります。**TFT** ライブラリを選択した場合、**LVGL** をサポートできるライブラリになります。

```cpp
#if defined(USE_TFT_ESPI_LIBRARY) && defined(USE_ARDUINO_GFX_LIBRARY)
#error "More than one graphics library is defined."
#elif defined(USE_TFT_ESPI_LIBRARY)
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI(SCREEN_WIDTH, SCREEN_HEIGHT);
#elif defined(USE_ARDUINO_GFX_LIBRARY)
#include <Arduino_GFX_Library.h>
```

この設計の理由は、特定のXIAOが異なるグラフィックライブラリでパターンを描画する際にそれぞれ独自の利点を持っているからです。例えば、XIAO nRF52840を使用している場合、Arduino GFXライブラリを使用することでメモリ効率が良く、より安定した動作が期待できます。XIAO ESP32S3の場合、大容量メモリを持つXIAOはLVGLなどのグラフィックライブラリを処理する際に本質的な利点があり、より複雑なパターンやUIを描画することも可能です。

そのため、Round Displayを使用してパターンを描画する必要がある場合は、使用したいグラフィックライブラリを選択し、Arduinoプログラムの冒頭で定義することを忘れないでください。

- TFTライブラリまたはLVGLライブラリを使用したい場合：

```cpp
#define USE_TFT_ESPI_LIBRARY
```

- Arduino GFXライブラリを使用したい場合：

```cpp
#define USE_ARDUINO_GFX_LIBRARY
```

1. `void xiao_disp_init(void)`: この関数は、ディスプレイのバックライトを初期化し、ディスプレイを初期位置に回転させるために使用されます。デバイスのディスプレイ基板の色は純黒になります。この関数は通常単独では使用されず、初期化が必要な場合は代わりに `lv_xiao_disp_init()` 関数が使用されます。

2. `void lv_xiao_disp_init(void)`: バックライトを初期化し、ディスプレイドライバを初期化します。通常、ディスプレイの初期化に使用されます。

3. `bool chsc6x_is_pressed(void)`: この関数は、画面がタッチされているかどうかを確認するために使用され、画面がタッチされている場合は `True` を返します。

4. `void lv_xiao_touch_init(void)`: この関数は、タッチスクリーンとそのドライバを初期化するために使用されます。

5. `void chsc6x_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )`: この関数は、タッチスクリーンの座標点を取得するために使用されます。

### lv_hardware_test.h

`lv_hardware_test.h` ファイルは、Round Display ライブラリのサンプル **HardwareTest** のヘッダーファイルです。このヘッダーファイルは、Round Display のハードウェア使用機能の大部分を準備します。

このヘッダーファイル内の関数を使用したい場合は、ファイルを Arduino ファイルと同じファイルディレクトリに直接コピーできます。

1. `int32_t battery_level_percent(void)`: この関数を呼び出すことで、バッテリー充電率を読み取り、計算して、アプリケーションでバッテリーレベルを表示できます。

2. `void lv_hardware_test(void)`: この関数は、画面表示、画面タッチ、RTC クロック、バッテリーレベルを含むすべてのハードウェア機能をテストするために使用されます。この関数の記述方法を参考にして、必要な Round Display 機能の開発を完了できます。

## KE ボタン & GPIO

新しいバージョンの Round Display では、特定の GPIO を選択的に解放し、ユーザーが選択的に使用できるように KE スイッチを設計しました。

KE スイッチは、microSD カードスロットと XIAO に接続するピンの列の中間に設計されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/90.jpg" style={{width:400, height:'auto'}}/></div>

このスイッチの回路設計は以下のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/91.png" style={{width:400, height:'auto'}}/></div>

これは、スイッチが閉じられている **(ON 側に切り替えられている)** 場合、Round Display のバッテリー電圧読み取り機能とディスプレイバックライト機能が利用可能になることを意味します。

スイッチが切断されている **(デジタル側に切り替えられている)** 場合、XIAO の A0 ピンと D6 ピンが利用可能な状態になります。

## バッテリー電圧の測定

XIAO の IO ピンが不足しているため、一部の XIAO には外部バッテリーを可能にする電源管理チップが構成されているものの、大部分の XIAO はバッテリー電圧を測定できません。

しかし、Round Display を使用し、画面を通じて XIAO に電源を供給することを選択した場合、バッテリー電圧の測定が現実のものとなります。

以下は、バッテリー電圧を測定するサンプルプログラムです。関数 `battery_level_percent()` は `lv_hardware_test.h` ファイルから選択されています。

```cpp
#define NUM_ADC_SAMPLE 20           // Sampling frequency
#define RP2040_VREF 3300            // When you use the XIAO RP2040, you need to measure the actual voltage at the 3.3V pin and modify that value. (unit: mV)
#define BATTERY_DEFICIT_VOL 1850    // Battery voltage value at loss of charge
#define BATTERY_FULL_VOL 2450       // Battery voltage value at full charge

int32_t battery_level_percent(void)
{
  int32_t mvolts = 0;
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    mvolts += analogReadMilliVolts(D0);
  }
  mvolts /= NUM_ADC_SAMPLE;
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
  analogReference(AR_INTERNAL2V4);  // 0.6V ref  1/4 Gain
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
  // put your setup code here, to run once:
  Serial.begin(115200);
  while(!Serial);

  analogReadResolution(12);
}

void loop() {
  // put your main code here, to run repeatedly:
  int32_t batteryVal = battery_level_percent();
  Serial.print("The percentage of power remaining is: ");
  Serial.print(batteryVal);
  Serial.print(" %");
  Serial.println();
  delay(1000);
}
```

:::tip
このプログラムは汎用プログラムではなく、測定されるバッテリー残量パーセンテージは正確でない可能性があります。これは、使用するバッテリーやチップ、開発ボードがそれぞれ異なるためです。そのため、このプログラムを実行する際は、実際の状況に応じてプログラムを修正する必要がある場合があります。修正方法については、このセクションの[プログラム注釈](#program-annotation)セクションを参照してください。
:::

使用しているXIAOボードを選択し、プログラムをアップロードし、シリアルモニターを開いて、ボーレートを**115200**に設定します。バッテリーが接続され電源が入っている場合、シリアルモニターでバッテリー電圧を確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/80.png" style={{width:700, height:'auto'}}/></div>

### プログラム注釈

このコードはADCを使用してバッテリー電圧を測定し、バッテリー残量パーセンテージを計算します。実装はハードウェアプラットフォームによって異なります：

- ESP32-S3およびESP32-C3プラットフォームでは、`analogReadMilliVolts`関数を使用してアナログ電圧値を読み取り、複数のサンプルの平均値を取得して平均バッテリー電圧を求めます。
- Seeeduino XIAO NRF52840プラットフォームでは、まず`analogReference`関数を使用して基準電圧を2.4Vに指定し、次にanalogRead関数を使用してアナログ電圧値を読み取り、平均バッテリー電圧を計算します。
- Seeeduino XIAO RP2040プラットフォームでは、`analogRead`関数を使用してアナログ電圧値を読み取り、平均バッテリー電圧を計算します。

いずれの場合も、平均バッテリー電圧が計算され、その後`(mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL - BATTERY_DEFICIT_VOL)`の式を使用してバッテリー残量パーセンテージが計算されます。ここで、mvoltsは平均バッテリー電圧、`BATTERY_DEFICIT_VOL`はバッテリーの最小動作電圧、`BATTERY_FULL_VOL`はバッテリーの最大電圧です。最後に、コードはバッテリー残量パーセンテージを制限して、0から100の間になるようにします。

要約すると、このプログラムを使用する際の電圧測定の精度は、以下のパラメータによって決まります。

```c
#define RP2040_VREF 3300            // When you use the XIAO RP2040, you need to measure the actual voltage at the 3.3V pin and modify that value. (unit: mV)
#define BATTERY_DEFICIT_VOL 1850    // Battery voltage value at loss of charge
#define BATTERY_FULL_VOL 2450       // Battery voltage value at full charge
```

最初に行う必要があることは、購入したバッテリーが充電不足/満充電の状態にあるときのアナログ値を取得することです。

この関数を使用してバッテリーのアナログ値を取得できます。満充電と充電不足の両方のバッテリー状態で一度ずつ値を取得する必要があります。

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
  analogReference(AR_INTERNAL2V4);  // 0.6V ref  1/4 Gain
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
`battery_test()` 関数は実際には `battery_level_percent()` 関数から、パーセンテージを計算する最後の2行のコードを削除したものです。
:::

その後、測定した値に対応するプログラムの値を修正するだけです。

**XIAO RP2040** を使用している場合は、追加で1つのステップが必要です。電圧計を使用してXIAO RP2040の3.3Vピンの実際の電圧を測定する必要があります。測定した電圧値を **mV** 単位に変換し、対応するプログラムを修正します。

例えば、以下は私がXIAO RP2040とバッテリーを使用して実際に測定した値です。

```c
#define RP2040_VREF 3080
#define BATTERY_DEFICIT_VOL 1541
#define BATTERY_FULL_VOL 1791
```

## RTC機能

RTC機能部分では、主に以下の4つのセクションに分けてその応用を紹介します。

1. まず、ネットワーク機能のないXIAOについて、初期時刻を手動で設定することでRTCを校正できます。
2. 次に、コイン電池の助けを借りてRTCに電力を供給し、正確な時刻を継続的に取得します。
3. ネットワーク機能を持つXIAOについては、ネットワーク機能を使用して時刻を校正できます。
4. RTC機能と組み合わせてシンプルな時計の文字盤を描画します。

### RTCのオフライン手動校正

以下は、RTC時刻を手動で校正するサンプルプログラムです。設定は`Setup()`関数内に配置され、セットアッププログラムが一度だけ実行されることを保証します。この手順は、ネットワーク機能のないXIAOの初期RTC時刻を設定する最も効率的な方法です。

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // Init Serial
  Serial.begin(115200);
  while(!Serial);
  delay(50);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();

  // Set RTC Date
  I2C_BM8563_DateTypeDef dateStruct;
  dateStruct.weekDay = 3;
  dateStruct.month = 4;
  dateStruct.date = 26;
  dateStruct.year = 2023;
  rtc.setDate(&dateStruct);

  // Set RTC Time
  I2C_BM8563_TimeTypeDef timeStruct;
  timeStruct.hours   = 9;
  timeStruct.minutes = 43;
  timeStruct.seconds = 10;
  rtc.setTime(&timeStruct);

  Serial.println("RTC time calibration complete!");
}

void loop() {

}
```

プログラムをアップロードしてシリアルモニターを開くと、RTCの時刻較正が開始されます。**RTC time calibration complete!** が表示されると、較正が完了します。

### RTC時刻の取得

以下のプログラムは、RTCの時刻を毎秒取得し、シリアルモニターに出力します。

:::tip
RTC時刻を取得する手順は、上記の手動較正手順の後に使用できます。時刻較正手順は一度だけ実行する必要があり、RTCクロックはコイン電池の電力で継続的に動作できるようになります。その後は、時刻取得手順のみを使用して正確な時刻を取得できます。

時刻較正プログラムと時刻取得プログラムを一緒に使用することはお勧めしません。XIAOが電源投入されると、設定した時刻に従って両方が一度リセットされるため、正確な時刻を取得できなくなります。
:::

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // Init Serial
  Serial.begin(115200);
  delay(50);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();
}

void loop() {
  I2C_BM8563_DateTypeDef dateStruct;
  I2C_BM8563_TimeTypeDef timeStruct;

  // Get RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // Print RTC
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

  // Wait
  delay(1000);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/71.png" style={{width:700, height:'auto'}}/></div>

### ネットワーク校正RTC時刻

ネットワーク機能を持つXIAOにとって、事態は大幅に簡単になるようです。ネットワークがあれば、RTCを箱から出してすぐに動作させるためにコイン電池を使用する必要さえありません。電源を入れるたびにネットワーク経由で時刻合わせを行うだけで済みます。

以下は、ネットワーク時刻合わせを行い、シリアルモニターにRTC時刻読み取り値を出力するサンプルプログラムです。

:::caution
このプログラムはXIAO ESP32シリーズにのみ適用されます。このシリーズのみがネットワーク機能を持っているためです。
:::

```cpp
#include "I2C_BM8563.h"
#include <WiFi.h>

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

const char* ntpServer = "time.cloudflare.com";
const char *ssid     = "YOUR_SSID";
const char *password = "YOUR_PASSWORD";

void setup() {
  // Init Serial
  Serial.begin(115200);
  delay(50);

  // Connect to an access point
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi ");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" CONNECTED");

  // Set ntp time to local
  configTime(9 * 3600, 0, ntpServer);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();

  // Get local time
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    // Set RTC time
    I2C_BM8563_TimeTypeDef timeStruct;
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);

    // Set RTC Date
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

  // Get RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // Print RTC
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

  // Wait
  delay(1000);
}
```

このプログラムを使用する際は、実際の状況に応じてネットワークの名前とパスワードを入力してください。プログラムをアップロードした後、シリアルモニターを開いてボーレートを115200に設定すると、正確な時刻を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/72.png" style={{width:700, height:'auto'}}/></div>

### RTC時刻に基づくシンプルなダイヤル

以下のプログラムは、RTCクロック描画に基づくダイヤルプログラムです。

:::caution
以下のプログラムは、XIAO nRF52840を除くXIAOとのみ互換性があります。XIAO nRF52840は現在TFTとの互換性に問題があります。ただし、Arduino GFXライブラリやLVGLを使用してダイヤルを描画することを検討できます。
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
#error "This procedure is not applicable to XIAO nRF52840 series, please replace other XIAO and try again."
#endif


//TFT_eSPI tft = TFT_eSPI();  // Invoke library, pins defined in User_Setup.h
TFT_eSprite face = TFT_eSprite(&tft);

#define CLOCK_X_POS 0
#define CLOCK_Y_POS 0

#define CLOCK_FG   TFT_SKYBLUE
#define CLOCK_BG   TFT_NAVY
#define SECCOND_FG TFT_RED
#define LABEL_FG   TFT_GOLD

#define CLOCK_R       240.0f / 2.0f // Clock face radius (float type)
#define H_HAND_LENGTH CLOCK_R/2.0f
#define M_HAND_LENGTH CLOCK_R/1.4f
#define S_HAND_LENGTH CLOCK_R/1.3f

// Calculate 1 second increment angles. Hours and minute hand angles
// change every second so we see smooth sub-pixel movement
#define SECOND_ANGLE 360.0 / 60.0
#define MINUTE_ANGLE SECOND_ANGLE / 60.0
#define HOUR_ANGLE   MINUTE_ANGLE / 12.0

// Sprite width and height
#define FACE_W CLOCK_R * 2 + 1
#define FACE_H CLOCK_R * 2 + 1

// Time h:m:s
uint8_t h = 0, m = 0, s = 0;

float time_secs = h * 3600 + m * 60 + s;

// Time for next tick
uint32_t targetTime = 0;

// =========================================================================
// Setup
// =========================================================================
void setup() {
  Serial.begin(115200);
  Serial.println("Booting...");

  // Initialise the screen
  tft.init();

  // Ideally set orientation for good viewing angle range because
  // the anti-aliasing effectiveness varies with screen viewing angle
  // Usually this is when screen ribbon connector is at the bottom
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);

  // Create the clock face sprite
  //face.setColorDepth(8); // 8 bit will work, but reduces effectiveness of anti-aliasing
  face.createSprite(FACE_W, FACE_H);

  // Draw the whole clock - NTP time not available yet
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

//  struct tm timeInfo;
  I2C_BM8563_TimeTypeDef timeStruct;
  I2C_BM8563_DateTypeDef dateStruct;

// In case of XIAO ESP32 series, use network timing.
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);
  }
#else
  // Set RTC time, Other XIAOs do not have network functions and require manual time alignment.
  // Please note that the setting time should be set only once.
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
// Loop
// =========================================================================
void loop() {
  // Update time periodically
  if (targetTime < millis()) {

    // Update next tick time in 100 milliseconds for smooth movement
    targetTime = millis() + 100;

    // Increment time by 100 milliseconds
    time_secs += 0.100;

    // Midnight roll-over
    if (time_secs >= (60 * 60 * 24)) time_secs = 0;

    // All graphics are drawn in sprite to stop flicker
    renderFace(time_secs);

    I2C_BM8563_DateTypeDef dateStruct;
    I2C_BM8563_TimeTypeDef timeStruct;

    // Get RTC
    rtc.getTime(&timeStruct);
  
    // Print RTC
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
// Draw the clock face in the sprite
// =========================================================================
static void renderFace(float t) {
  float h_angle = t * HOUR_ANGLE;
  float m_angle = t * MINUTE_ANGLE;
  float s_angle = t * SECOND_ANGLE;

  // The face is completely redrawn - this can be done quickly
  face.fillSprite(TFT_BLACK);

  // Draw the face circle
  face.fillSmoothCircle( CLOCK_R, CLOCK_R, CLOCK_R, CLOCK_BG );

  // Set text datum to middle centre and the colour
  face.setTextDatum(MC_DATUM);

  // The background colour will be read during the character rendering
  face.setTextColor(CLOCK_FG, CLOCK_BG);

  // Text offset adjustment
  constexpr uint32_t dialOffset = CLOCK_R - 10;

  float xp = 0.0, yp = 0.0; // Use float pixel position for smooth AA motion

  // Draw digits around clock perimeter
  for (uint32_t h = 1; h <= 12; h++) {
    getCoord(CLOCK_R, CLOCK_R, &xp, &yp, dialOffset, h * 360.0 / 12);
    face.drawNumber(h, xp, 2 + yp);
  }

  // Add text (could be digital time...)
  face.setTextColor(LABEL_FG, CLOCK_BG);
  face.drawString("TFT_eSPI", CLOCK_R, CLOCK_R * 0.75);

  // Draw minute hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, M_HAND_LENGTH, m_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // Draw hour hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, H_HAND_LENGTH, h_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // Draw the central pivot circle
  face.fillSmoothCircle(CLOCK_R, CLOCK_R, 4, CLOCK_FG);

  // Draw cecond hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, S_HAND_LENGTH, s_angle);
  face.drawWedgeLine(CLOCK_R, CLOCK_R, xp, yp, 2.5, 1.0, SECCOND_FG);
  face.pushSprite(0, 0, TFT_TRANSPARENT);
}

// =========================================================================
// Get coordinates of end of a line, pivot at x,y, length r, angle a
// =========================================================================
// Coordinates are returned to caller via the xp and yp pointers
#define DEG2RAD 0.0174532925
void getCoord(int16_t x, int16_t y, float *xp, float *yp, int16_t r, float a)
{
  float sx1 = cos( (a - 90) * DEG2RAD);
  float sy1 = sin( (a - 90) * DEG2RAD);
  *xp =  sx1 * r + x;
  *yp =  sy1 * r + y;
}
```

上記のコードは、使用している開発ボードの種類に応じて若干の修正が必要です。ネットワーク機能を持つXIAOを使用している場合は、WiFi名とパスワードを設定する必要があります。そうでない場合は、リアルタイムを手動で調整する必要があります。

プログラムをアップロードすると、設定された時間に従って自動的に動く文字盤が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/75.gif" style={{width:500, height:'auto'}}/></div>

## SDカード機能

Round DisplayはmicroSDカードを使用してデータの読み書きをサポートしています。microSDカードを使用する前に、microSDカードを**FAT32**形式にフォーマットして、正常に認識され使用できることを確認してください。

### 全XIAOシリーズ（XIAO nRF52840シリーズを除く）

このセクションは全XIAO（XIAO nRF52840シリーズを除く）に適用され、ファイルの読み書きを行うシンプルなプログラムです。

```cpp
#include <SPI.h>
#include <SD.h>
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(115200);
  while(!Serial);

  // Display initialization
  tft.init();

  Serial.print("Initializing SD card...");

  pinMode(D2, OUTPUT);
  if (!SD.begin(D2)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("/test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

このプログラムは、microSDカード上に**test.txt**という新しいプログラムを作成し、**testing 1, 2, 3.**の内容を書き込みます。最後に、ファイルを読み取り、シリアルモニターを通じてファイルの内容を出力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/83.png" style={{width:700, height:'auto'}}/></div>

:::caution
SDカード用のプログラムでTFT画面の初期化が使用されていることがわかりますが、これが不要で削除できると思わないでください。実際には、SDカードを使用するために必要であり、そうでなければmicroSDカードのマウントに失敗したというエラーメッセージが表示されます。

ハードウェア設計により、一部のピンはデフォルトでローになっており、これによりmicroSDマウントプログラムがプルアップ抵抗がないと判断し、マウントが失敗する原因となります。そのため、Round DisplayでSDカード機能を使用する際は、SDカードを初期化する前に必ず画面表示を初期化してください。
:::

### XIAO nRF52840

XIAO nRF52840シリーズを使用している場合、SDカード機能を使用するために[SdFatライブラリ](https://github.com/greiman/SdFat)を別途ダウンロードする必要がある場合があります。

```cpp
#include <SPI.h>
#include "SdFat.h"
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // Display initialization
  tft.init();

  Serial.print("Initializing SD card...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

### XIAO ESP32S3 & XIAO ESP32S3 センス & XIAO ESP32C3

ESP32シリーズは非常に強力なファイルシステムサポートを持っているため、XIAO ESP32でファイルシステムを使用し、microSDカードを保存する方法について一連の例を書きました。以下のリンクで使用方法を学ぶことができます。

- **[ファイルシステムと XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem)**

このWikiのチュートリアルはXIAO ESP32シリーズに適用されますが、現在Round DisplayのSDカードスロットを使用したい場合、上記のチュートリアルはXIAO ESP32S3 SenseのSDカードスロットの使用に焦点を当てているため、SDカードの初期化を以下の行に変更する必要があります。

```c
// Display initialization
tft.init();

pinMode(D2, OUTPUT);
SD.begin(D2);
```

:::tip
SD カード機能を使用するには、まず TFT スクリーンを初期化する必要があることも忘れないでください。
:::

## スクリーン機能

スクリーンの使用部分では、主に 2 つのコンポーネントに分かれています：タッチと表示です。

### タッチ機能

タッチ機能は Round Display の特別な機能です。タッチ機能を使用して、タップアンドホールド表示操作を実行できます。

以下のプログラムを使用して、ディスプレイがタッチされたかどうかの結果を出力できます。

```cpp
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
  if(chsc6x_is_pressed()){
    Serial.println("The display is touched.");
  }
  else
    Serial.println("The display is not touched.");
  delay(50);
}
```

以下のプログラムは、タッチ機能と表示機能を組み合わせた簡単な例です。以下のプログラムをアップロードしてから画面をタップすると、画面がタップされた場所に小さな円が描画されます。

:::caution
XIAO nRF52840 を使用している場合、TFTライブラリベースの以下のプログラムは正常に動作しない可能性があります。Arduino GFXライブラリを使用するようにプログラムを修正する必要があります。
:::

```cpp
#include <TFT_eSPI.h>
#include <SPI.h>
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

lv_coord_t touchX, touchY;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
  
  // Initialise the screen
  tft.init();

  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(chsc6x_is_pressed())
  {
    Serial.println("The display is touched.");
    chsc6x_get_xy(&touchX, &touchY);
    tft.drawCircle(touchX, touchY, 15, TFT_WHITE);
  }
  
  delay(50);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/81.gif" style={{width:500, height:'auto'}}/></div>

### ディスプレイ機能

ディスプレイ部分については、主にLVGLライブラリとTFTライブラリの使用について紹介します。スペースの問題により、サポートされているグラフィックスライブラリを使用して複雑なダイヤルを描画する方法の詳細については、新しいWikiで説明します。

[Seeed Studio Round Display for XIAOでのLVGLとTFTの使用](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display)

もちろん、いくつかの簡単な例を実装したいだけであれば、グラフィックスライブラリには参考用として非常に豊富な例のセットもあります。

- [TFTライブラリの例](https://github.com/Bodmer/TFT_eSPI/tree/master/examples)

- [Arduino GFXライブラリの例](https://github.com/moononournation/Arduino_GFX/tree/master/examples)

- [LVGLライブラリの例](https://github.com/lvgl/lvgl/tree/master/examples)

これらのライブラリがすでにインストールされている場合は、Arduino IDEの**File->Example->library name**で例を簡単に見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/82.png" style={{width:800, height:'auto'}}/></div>

:::tip
ここの例は参考用のみであり、すべての例が必ずしも動作するとは限りません。Round Displayのピン配置とハードウェア定義に対応するようにプログラムを修正する必要がある場合があります。
:::

## 技術サポートと製品ディスカッション

### Q1: XIAO nRF52840 (Sense)を使用するとエラーが発生するのはなぜですか？

このチュートリアルの内容を使用する際、XIAO nRF52840では2つの異なるタイプの問題が発生する可能性があります。

1. nRF52840とTFTライブラリ間の互換性の問題。

  TFTライブラリを使用している場合、コンパイルとアップロードはエラーなく、非常にスムーズです。しかし、表示する際に画像がないことがわかります。その場合、nRF52840とTFTライブラリ間の互換性の問題に遭遇した可能性があります。これは、XIAOを交換するか、Arduino GFXライブラリを使用して画像を完成させることしかできないことを意味します。

2. 間違った開発ボードを選択したことによるコンパイルエラー。

コンパイル過程で問題が発生している場合。エラーメッセージは通常SPIエラーに関するもので、例えば`'SPI_X' was not declared in this scope`などです。これは、間違ったタイプの開発ボードを選択していることを意味します。このチュートリアルのすべてを使用するには、XIAO nRF52840の**non-mbed**バージョンを使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>

### Q2: XIAO RP2040のプログラムをアップロードする際に、エラーが発生します：unaligned opcodes detected in executable segment？

以下の画像の設定に従って、XIAO RP2040のアップロードオプションを変更してください。デフォルトの**Small (-Os) (standard)**以外のすべてのオプションは正常に動作します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/74.png" style={{width:600, height:'auto'}}/></div>

### Q3: XIAO SAMD21用の円形スクリーンプログラムをコンパイルする際にピン定義エラーが発生するのはなぜですか？

このエラーに遭遇した場合は、**Seeed SAMD**開発ボードのオンボードパッケージを最新バージョンに更新してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/76.png" style={{width:700, height:'auto'}}/></div>

### Q4: XIAO ESP32C3にプログラムをアップロードした後、スクリーンが表示されないのはなぜですか？

プログラムに問題がなく、アップロード後に表示されない場合は、リセットが必要な可能性があります。XIAO ESP32C3のリセットボタンを押すだけです。

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
