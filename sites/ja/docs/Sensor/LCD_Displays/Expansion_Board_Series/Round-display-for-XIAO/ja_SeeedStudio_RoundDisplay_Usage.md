---
description: このチュートリアルでは、円形スクリーンの拡張ボード機能の使用方法を紹介します。
title: ハードウェアの使用方法
keywords:
  - Round display
  - XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /seeedstudio_round_display_usage
sidebar_position: 2
last_update:
  date: 04/27/2023
  author: Citric
createdAt: '2023-04-27'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/ja/seeedstudio_round_display_usage/
---

# Seeed Studio Round Display 拡張ボードの使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/79.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br />

このチュートリアルでは、Round Display 上の拡張機能の使い方を詳しく説明します。RTC 機能、SD カード機能、画面機能の使用方法を含みます。

## 入門ガイド

このチュートリアルの内容は、すべての XIAO シリーズ製品をサポートしています。そのため、どの XIAO を使用しても、この Wiki の内容を実行できます。

初めて Round Display を使用する場合は、事前に用意した準備コンテンツを読み、その内容に従ってライブラリ環境を構成し、Round Display をスムーズに使用できるようにすることをお勧めします。

- **[Seeed Studio Round Display for XIAO を使用するための準備](https://wiki.seeedstudio.com/ja/get_start_round_display#入門ガイド)**

### microSD カードの取り付け

Round Display は、**FAT32** 形式で **32GB** 以下の microSD カードに対応しています。microSD カードを取り付ける際は、microSD カードの金色端子をボードの内側に向けて挿入してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/64.jpg" style={{width:500, height:'auto'}}/></div>

### RTC バッテリーの取り付け

Round Display は RTC 機能をサポートしており、PCF8563T チップを内蔵しています。RTC 機能を使用する必要がある場合は、RTC を動作させ続けるためのコイン型電池が必要になる場合があります。

CR927 シリーズのボタン電池の使用を推奨します。取り付け時は、プラス（平らな面）を外側に、マイナス（わずかに突起のある面）を内側に向けて装着してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/65.jpg" style={{width:500, height:'auto'}}/></div>

:::note
上の写真はバッテリーの取り付け方向のみを示しており、バッテリーが完全に装着された状態ではありません。正しいバッテリーの取り付けは、バッテリーホルダーに最後までしっかりと差し込まれている状態です。
:::

### 電源用バッテリーの取り付け

Round Display は外部 3.7V リチウムバッテリーに対応しています。電源管理チップを内蔵しており、XIAO の USB ポートからバッテリーを充電できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/77.jpg" style={{width:500, height:'auto'}}/></div>

Round Display には充電インジケーターも搭載されています。状態は 3 つあります。

1. リチウムバッテリーが接続されていない場合、インジケーターは低輝度で常時点灯します。
2. リチウムバッテリーを接続し、充電中は赤色のランプが高輝度で常時点灯します。
3. リチウムバッテリーが接続されており、満充電になるとランプは消灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/78.jpg" style={{width:500, height:'auto'}}/></div>

### Round Display のスイッチ

Round Display にはスイッチも搭載されています。このスイッチは、ディスプレイのオン/オフと XIAO への電源供給を制御するために使用されます。スイッチを OFF にすると、バッテリーは XIAO に給電せず、ディスプレイスクリーンはオフになります。スイッチを ON にすると、ディスプレイが点灯し（電源用バッテリーが取り付けられていることが前提）、バッテリーが XIAO に給電してプログラムが実行されるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/66.jpg" style={{width:500, height:'auto'}}/></div>

:::note
ここで説明している XIAO への給電とは、Round Display を介して XIAO に給電することを指します。XIAO に直接給電している場合、Round Display 上のスイッチでは XIAO への電源を遮断できません。Round Display 上のスイッチでデバイス全体を制御したい場合は、Round Display に電源用バッテリーを取り付ける必要があります。

また、一部の XIAO（XIAO ESP32C3 など）では、電源を切って再度入れてプログラムを実行する際に、XIAO 上の Reset ボタンを押して動作を開始する必要がある場合があることにも注意してください。
:::

### Round Display の回路設計

このセクションでは、Round Display ハードウェアの回路図の一部を抜粋し、Round Display のハードウェアで使用されている XIAO 上のどの IO ピンが使用されているかをユーザーに知らせ、IO 使用時の競合を避けられるようにします。

#### バッテリー電圧測定ピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/70.png" style={{width:400, height:'auto'}}/></div>

Round Display の設計では、XIAO 上の **A0/D0** ピンを使用してオンボードバッテリーの回路に接続しています。このピンのアナログ値を読み取ることで、残りのバッテリー残量を取得できます。

#### SD カード回路ピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/67.png" style={{width:800, height:'auto'}}/></div>

SD カード部は XIAO 上の 4 つの IO ポートを使用しており、その用途は下表のとおりです。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">microSD Card Slot</th>
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

#### RTC 回路ピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/68.png" style={{width:500, height:'auto'}}/></div>

RTC 機能は IIC プロトコルを使用するため、**D5 (SCL)** と **D4 (SDA)** ピンを占有します。

#### タッチスクリーン回路ピン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/69.png" style={{width:400, height:'auto'}}/></div>

タッチスクリーン部は XIAO 上の 4 つの IO ポートを使用しており、その用途は下表のとおりです。

<div class="table-center">
  <table align="center">
    <tr>
        <th align="center">XIAO GPIO</th>
        <th align="center">Touch screen</th>
    </tr>
    <tr>
        <td align="center">D4 (SDA)</td>
        <td align="center">Touch Screen IIC</td>
    </tr>
    <tr>
        <td align="center">D5 (SCL)</td>
        <td align="center">Touch Screen IIC</td>
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
        <td align="center">Screen backlight</td>
    </tr>
  </table>
</div>

## Round Display ライブラリ概要

Round Display のソフトウェア開発の大部分は、XIAO 自身のハードウェアサポートに基づいています。グラフィックスは、TFT ライブラリ、LVGL ライブラリ、および Arduino GFX ライブラリに基づいています。

ユーザーが Round Display 上の機能を簡単に使用できるようにするため、上記ライブラリのインターフェースを主に呼び出す専用ライブラリを作成しました。これにより、後の段階でユーザー自身が単独で開発する際のハードルを下げることを目的としています。本章では、Round Display 用に用意したこれらのライブラリにはどのような機能があり、それぞれをどのように使用するかに焦点を当てて説明します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

### lv_xiao_round_screen.h

`lv_xiao_round_screen.h` ファイルは Round Display ライブラリ内のヘッダーファイルで、スクリーンの表示およびタッチ機能を駆動します。

ファイルの先頭ではマクロ定義チェックが行われており、Round Display を使用する開発者に対して、画面パターンを描画する際に開発に使用するグラフィックスライブラリを選択することを求めています。選択肢は **TFT** と **Arduino GFX** の 2 つです。**TFT** ライブラリを選択した場合、それは **LVGL** をサポートできるものになります。

```cpp
#if defined(USE_TFT_ESPI_LIBRARY) && defined(USE_ARDUINO_GFX_LIBRARY)
#error "More than one graphics library is defined."
#elif defined(USE_TFT_ESPI_LIBRARY)
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI(SCREEN_WIDTH, SCREEN_HEIGHT);
#elif defined(USE_ARDUINO_GFX_LIBRARY)
#include <Arduino_GFX_Library.h>
```

このような設計にしている理由は、特定の XIAO が、異なるグラフィックライブラリ上でパターンを描画する際にそれぞれ固有の利点を持っているためです。例えば XIAO nRF52840 を使用している場合、Arduino GFX ライブラリを使用した方がメモリ効率と安定性が高い可能性があります。XIAO ESP32S3 では、大容量メモリを備えた XIAO が LVGL のようなグラフィックライブラリを扱う際に本来的な優位性を持ち、より複雑なパターンや UI を描画することも可能です。

したがって Round Display を使ってパターンを描画する必要がある場合は、使用したいグラフィックライブラリを忘れずに選択し、Arduino プログラムの先頭で定義してください。

- TFT ライブラリまたは LVGL ライブラリを使用したい場合：

```cpp
#define USE_TFT_ESPI_LIBRARY
```

- Arduino GFX ライブラリを使用したい場合：

```cpp
#define USE_ARDUINO_GFX_LIBRARY
```

1. `void xiao_disp_init(void)`：この関数はディスプレイのバックライトを初期化し、ディスプレイを初期位置に回転させ、デバイスのディスプレイ背面色を真っ黒にします。この関数は通常単独では使用せず、初期化が必要な場合は代わりに `lv_xiao_disp_init()` 関数が使用されます。

2. `void lv_xiao_disp_init(void)`：バックライトを初期化し、ディスプレイドライバを初期化します。通常、ディスプレイの初期化に使用されます。

3. `bool chsc6x_is_pressed(void)`：この関数は画面がタッチされているかどうかを確認するために使用され、画面がタッチされている場合は `Ture` を返します。

4. `void lv_xiao_touch_init(void)`：この関数はタッチスクリーンとそのドライバを初期化するために使用されます。

5. `void chsc6x_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )`：この関数はタッチスクリーンの座標点を取得するために使用されます。

### lv_hardware_test.h

`lv_hardware_test.h` ファイルは、Round Display ライブラリ内のサンプル **HardwareTest** のヘッダーファイルです。このヘッダーファイルには、Round Display 用のハードウェア使用関数のほとんどが用意されています。

このヘッダーファイル内の関数を使用したい場合は、ファイルをそのまま Arduino ファイルと同じディレクトリにコピーすれば使用できます。

1. `int32_t battery_level_percent(void)`：この関数を呼び出すことで、バッテリーの充電率を読み取り・計算し、アプリケーション内でバッテリーレベルを表示できます。

2. `void lv_hardware_test(void)`：この関数は、画面表示、画面タッチ、RTC クロック、バッテリーレベルを含むすべてのハードウェア機能をテストするために使用されます。Round Display で実現したい機能の開発を完了するために、この関数の記述方法を参考にすることができます。

## KE ボタン & GPIO

新バージョンの Round Display では、ユーザーが選択的に使用できるように、特定の GPIO を選択的に解放するための KE スイッチを設計しました。

KE スイッチは、microSD カードスロットと XIAO に接続するピン列の中間に配置されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/90.jpg" style={{width:400, height:'auto'}}/></div>

このスイッチの回路設計は以下の通りです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/91.png" style={{width:400, height:'auto'}}/></div>

これは、スイッチが閉じている **（ON 側に切り替えられている）** 場合、Round Display のバッテリー電圧読み取り機能とディスプレイバックライト機能が利用可能になることを意味します。

スイッチが切断されている **（digital 側に切り替えられている）** 場合、XIAO 上の A0 と D6 ピンが利用可能な状態になります。

## バッテリー電圧の測定

XIAO には IO ピンが不足しているため、一部の XIAO には外部バッテリーを可能にする電源管理チップが搭載されているにもかかわらず、ほとんどの XIAO ではバッテリー電圧を測定することができません。

しかし Round Dislay を選択し、画面を介して XIAO に電源を供給する場合、バッテリー電圧の測定が現実のものとなります。

以下はバッテリー電圧を測定するためのサンプルプログラムです。`battery_level_percent()` 関数は `lv_hardware_test.h` ファイルから選択されています。

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
このプログラムは汎用プログラムではなく、測定されるバッテリー残量のパーセンテージは正確でない可能性があります。これは、使用するバッテリーやチップ、開発ボードが人それぞれ異なるためであり、このプログラムを実行する際には実際の状況に応じてプログラムを修正する必要があるかもしれません。修正方法については、このセクションの [program annotation](#program-annotation) セクションを参照してください。
:::

使用している XIAO ボードを選択し、プログラムを書き込み、シリアルモニタを開いてボーレートを **115200** に設定します。バッテリーを接続して電源を入れていれば、シリアルモニタ上でバッテリー電圧を確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/80.png" style={{width:700, height:'auto'}}/></div>

### Program annotation

このコードは ADC を使用してバッテリー電圧を測定し、バッテリー残量のパーセンテージを計算します。実装はハードウェアプラットフォームによって異なります。

- ESP32-S3 および ESP32-C3 プラットフォームでは、`analogReadMilliVolts` 関数を使用してアナログ電圧値を読み取り、その後複数サンプルの平均値を取って平均バッテリー電圧を取得します。
- Seeeduino XIAO NRF52840 プラットフォームでは、まず `analogReference` 関数を使用して基準電圧を 2.4V に指定し、その後 `analogRead` 関数を使用してアナログ電圧値を読み取り、平均バッテリー電圧を計算します。
- Seeeduino XIAO RP2040 プラットフォームでは、`analogRead` 関数を使用してアナログ電圧値を読み取り、平均バッテリー電圧を計算します。

いずれの場合も平均バッテリー電圧を算出し、その後 `(mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL - BATTERY_DEFICIT_VOL)` という式を用いてバッテリー残量のパーセンテージを計算します。ここで mvolts は平均バッテリー電圧、`BATTERY_DEFICIT_VOL` はバッテリーの最低動作電圧、`BATTERY_FULL_VOL` はバッテリーの最大電圧です。最後に、コードはバッテリー残量のパーセンテージを 0 から 100 の範囲内に収まるよう制限します。

まとめると、このプログラムを使用する際の電圧測定の精度は、以下のパラメータによって決まります。

```c
#define RP2040_VREF 3300            // When you use the XIAO RP2040, you need to measure the actual voltage at the 3.3V pin and modify that value. (unit: mV)
#define BATTERY_DEFICIT_VOL 1850    // Battery voltage value at loss of charge
#define BATTERY_FULL_VOL 2450       // Battery voltage value at full charge
```

まず最初に行うべきことは、購入したバッテリーが放電状態／満充電状態のときのアナログ値を取得することです。

この関数を使用することで、バッテリーのアナログ値を取得できます。満充電状態と不足状態の両方で、それぞれ一度ずつ値を取得する必要があります。

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
`battery_test()` 関数は、実際には `battery_level_percent()` 関数からパーセンテージを計算する最後の 2 行のコードを取り除いたものです。
:::

あとは、測定した値に対応するようにプログラム内の値を修正するだけです。

**XIAO RP2040** を使用している場合に追加で必要な手順は、テスターを使用して XIAO RP2040 の 3.3V ピン上の実際の電圧を測定することです。測定した電圧値を **mV** 単位に変換し、それに応じてプログラムを修正します。

例えば、以下は私が自分の XIAO RP2040 とバッテリーを使用して実際に測定した値です。

```c
#define RP2040_VREF 3080
#define BATTERY_DEFICIT_VOL 1541
#define BATTERY_FULL_VOL 1791
```

## RTC 機能

RTC 機能の部分については、その応用を紹介するために主に次の 4 つのセクションに分けています。

1. まず、ネットワーク機能を持たない XIAO の場合、初期時刻を手動で設定して RTC を補正します。
2. 次に、ボタン電池を使って RTC に電源を供給し、正確な時刻を継続的に維持します。
3. ネットワーク機能を持つ XIAO の場合は、ネットワーク機能を使って時刻を補正できます。
4. RTC 機能を組み合わせて、シンプルな時計の文字盤を描画します。

### オフラインでの RTC 手動キャリブレーション

以下は、RTC 時刻を手動でキャリブレーションするためのサンプルプログラムです。設定は `Setup()` 関数内に配置されており、セットアッププログラムが一度だけ実行されるようになっています。この手順は、ネットワーク機能を持たない XIAO の初期 RTC 時刻を設定する最も効率的な方法です。

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

プログラムを書き込んでシリアルモニタを起動すると、RTC 時刻のキャリブレーションが開始されます。**RTC time calibration complete!** と表示されたら、キャリブレーションは完了です。

### RTC 時刻の取得

次のプログラムは、RTC の時刻を毎秒取得し、シリアルモニタに出力します。

:::tip
RTC 時刻を取得する手順は、上記の手動キャリブレーション手順の後に使用できます。時刻キャリブレーション手順は一度だけ実行すればよく、その後はボタン電池からの電源供給により RTC クロックが継続して動作します。そのため、正確な時刻を取得するには、以降は時刻取得用の手順だけを使用すれば十分です。

時刻をキャリブレーションするプログラムと時刻を取得するプログラムを同時に使用することは推奨しません。そうすると、XIAO の電源投入時に両方があなたの設定した時刻に基づいてリセットされてしまい、正確な時刻を得ることができなくなります。
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

### ネットワークによる RTC 時刻のキャリブレーション

ネットワーク機能を備えた XIAO では、状況はかなり簡単になります。ネットワークがあれば、RTC を常時動作させるためにボタン電池を使用する必要すらなく、電源を入れるたびにネットワーク経由で時刻合わせをするだけで済みます。

以下は、ネットワークで時刻同期を行い、RTC の時刻読み取り値をシリアルモニタに出力するためのサンプルプログラムです。

:::caution
このプログラムは XIAO ESP32 シリーズにのみ適用できます。ネットワーク機能を持つのはこのシリーズだけだからです。
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

このプログラムを使用する際は、実際の状況に応じてネットワークの名前とパスワードを入力してください。プログラムを書き込んだ後、シリアルモニタを開き、ボーレートを 115200 に設定すると、正確な時刻を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/72.png" style={{width:700, height:'auto'}}/></div>

### RTC 時刻に基づくシンプルな文字盤

以下のプログラムは、RTC クロックに基づいて文字盤を描画するためのプログラムです。

:::caution
以下のプログラムは、XIAO nRF52840 を除く XIAO のみと互換性があります。XIAO nRF52840 は現在、TFT との互換性に問題があります。ただし、Arduino GFX ライブラリや LVGL を使用して文字盤を描画することは検討できます。
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

上記のコードは、使用している開発ボードの種類に応じて、いくつかの軽微な修正を行う必要があります。ネットワーク機能を備えた XIAO を使用している場合は、WiFi の名前とパスワードを設定する必要があります。そうでない場合は、リアルタイムを手動で調整する必要があります。

プログラムを書き込むと、設定した時刻に従って自動的に動くダイヤルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/75.gif" style={{width:500, height:'auto'}}/></div>

## SD カード機能

Round Display は microSD カードを使用したデータの読み書きをサポートしています。microSD カードを使用する前に、必ず microSD カードを **FAT32** 形式でフォーマットして、正しく認識・使用できるようにしてください。

### すべての XIAO シリーズ（XIAO nRF52840 シリーズを除く）

このセクションは、すべての XIAO（XIAO nRF52840 シリーズを除く）に適用され、ファイルの読み書きを行うシンプルなプログラムです。

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

このプログラムは、microSD カード上に **test.txt** という新しいファイルを作成し、その中に **testing 1, 2, 3.** という内容を書き込みます。最後に、そのファイルを読み出し、シリアルモニタを通してファイルの内容を出力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/83.png" style={{width:700, height:'auto'}}/></div>

:::caution
SD カード用のプログラムでは、画面の TFT 初期化が行われていることに気づくでしょう。これは不要なので削除できると考えないでください。実際には SD カードを使用するために必要であり、これを行わないと microSD カードのマウントに失敗したというエラーメッセージが表示されます。

ハードウェア設計上、一部のピンはデフォルトで Low になっており、そのため microSD マウント用のプログラムはプルアップ抵抗がないと判断し、マウントに失敗してしまいます。したがって、Round Display で SD カード機能を使用する場合は、SD カードを初期化する前に必ず画面表示を初期化してください。
:::

### XIAO nRF52840

XIAO nRF52840 シリーズを使用している場合は、SD カード機能を使用するために、別途 [SdFat library](https://github.com/greiman/SdFat) をダウンロードする必要があるかもしれません。

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

### XIAO ESP32S3 & XIAO ESP32S3 Sense & XIAO ESP32C3

ESP32 シリーズは非常に強力なファイルシステムサポートを備えているため、XIAO ESP32 でファイルシステムを使用し、microSD カードに保存する方法について、一連のサンプルを用意しました。以下のリンクから使い方を学ぶことができます。

- **[File System and XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem)**

この Wiki のチュートリアルは XIAO ESP32 シリーズに適用されますが、今回は Round Display の SD カードスロットを使用したい一方で、上記のチュートリアルは XIAO ESP32S3 Sense 上の SD カードスロットの使用に焦点を当てています。そのため、SD カードの初期化部分を、以下の行に合わせて修正する必要があります。

```c
// Display initialization
tft.init();

pinMode(D2, OUTPUT);
SD.begin(D2);
```

:::tip
SD カード機能を使用するには、TFT 画面も先に初期化する必要があることを忘れないでください。
:::

## 画面機能

画面の使用部分では、主にタッチと表示の 2 つのコンポーネントに分かれます。

### タッチ機能

タッチ機能は Round Display の特別な機能です。タッチ機能を使って、タップや長押しに応じた表示操作を行うことができます。

次のプログラムでは、ディスプレイがタッチされたかどうかの結果を出力することができます。

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

次のプログラムは、タッチ機能と表示機能を組み合わせた簡単なサンプルです。以下のプログラムを書き込んでから画面をタップすると、タップした位置に小さな円が描画されます。

:::caution
XIAO nRF52840 を使用している場合、TFT ライブラリ表示に基づく以下のプログラムは正しく動作しない可能性があります。その場合は、Arduino GFX library を使用するようにプログラムを修正する必要があります。
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

### 表示機能

表示部分については、主に LVGL ライブラリと TFT ライブラリの使い方を紹介します。紙面の都合上、対応するグラフィックスライブラリを使って複雑なダイヤルを描画する方法の詳細は、新しい Wiki で解説します。

[Using LVGL and TFT on the Seeed Studio Round Display for XIAO](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display)

もちろん、簡単なサンプルだけを実装したい場合でも、グラフィックスライブラリには参考にできる豊富なサンプルが用意されています。

- [TFT library example](https://github.com/Bodmer/TFT_eSPI/tree/master/examples)

- [Arduino GFX library example](https://github.com/moononournation/Arduino_GFX/tree/master/examples)

- [LVGL library example](https://github.com/lvgl/lvgl/tree/master/examples)

これらのライブラリをすでにインストールしている場合は、Arduino IDE の **File->Example->ライブラリ名** から簡単にサンプルを見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/82.png" style={{width:800, height:'auto'}}/></div>

:::tip
ここで紹介しているサンプルはあくまで参考用であり、すべてのサンプルが必ず動作するとは限りません。Round Display のピン配置やハードウェア定義に合わせて、プログラムを修正する必要がある場合があります。
:::

## 技術サポート & 製品ディスカッション

### Q1: なぜ XIAO nRF52840（Sense）を使用するとエラーが発生するのですか？

このチュートリアルの内容を使用する際、XIAO nRF52840 では 2 種類の問題が発生する可能性があります。

1. nRF52840 と TFT ライブラリ間の互換性の問題。

  TFT ライブラリを使用していて、コンパイルと書き込みはエラーもなく非常にスムーズに完了するものの、表示してみると画像が出ない場合、nRF52840 と TFT ライブラリの互換性の問題に遭遇している可能性があります。この場合は、XIAO を別のものに置き換えるか、Arduino GFX library を使用して描画を行う必要があります。

2. 誤った開発ボードの選択によるコンパイルエラー。

コンパイル中に問題が発生している場合、エラーメッセージは通常 SPI に関するもので、例えば `'SPI_X' was not declared in this scope` のような内容になります。これは、誤った種類の開発ボードを選択していることを意味します。このチュートリアル全体を使用するには、**non-mbed** バージョンの XIAO nRF52840 を使用する必要があります。 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>

### Q2: XIAO RP2040 にプログラムを書き込むときに「unaligned opcodes detected in executable segment」というエラーが発生するのはなぜですか？

下の画像の設定に従って、XIAO RP2040 のアップロードオプションを変更してください。デフォルトの **Small (-Os) (standard)** 以外のすべてのオプションは正常に動作します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/74.png" style={{width:600, height:'auto'}}/></div>

### Q3: XIAO SAMD21 用の円形ディスプレイのプログラムをコンパイルすると、なぜピン定義エラーが出るのですか？

このエラーが発生した場合は、**Seeed SAMD** 開発ボードのボードパッケージを最新バージョンに更新してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/76.png" style={{width:700, height:'auto'}}/></div>

### Q4: プログラムを XIAO ESP32C3 に書き込んだ後、なぜ画面が表示されないのですか？

プログラムに問題がなく、書き込み後も表示されない場合は、リセットが必要な可能性があります。XIAO ESP32C3 上のリセットボタンを押してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
