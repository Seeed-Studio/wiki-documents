---
description: この記事は Grove SGP41 センサーの使用に焦点を当てています。
title: 湿度と温度に依存する SGP41（生データ）測定の補正
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove-sgp41-with-aht20
last_update:
  date: 05/15/2025
  author: Hans Bausewein
---


# 湿度と温度に依存する SGP41（生データ）測定の補正

## 概要（このプロジェクトを始める方法）

まず、[Grove - スマート空気質センサー (SGP41)](https://wiki.seeedstudio.com/ja/grove-smart-air-quality-sensor-sgp41) と [Grove - AHT20 I2C 工業用温湿度センサー](https://wiki.seeedstudio.com/ja/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/) のドキュメントを読みました。

[SGP41 データシート (PDF)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf) のセクション 3.2（生信号測定）によると、SGP41 の測定値は湿度と温度に依存するため、一貫したデータを得るには補正を適用する必要があります。具体的には、AHT20（または他のセンサー）から相対湿度と温度を読み取り、ティック値を計算して *sgp41_measure_raw_signals* 関数に渡します。

### 理論テスト

ページ 15 の表 11（I2C 測定コマンドの説明）には、ティック値を計算するための公式が記載されています：

```
RHticks = RH% × 65535 / 100
Tticks = (T°C + 45) × 65535 / 175
```

デフォルト値の 25°C と 50% の相対湿度を使用して検証します：

```
50 × 65535 / 100 = 32767.5 = 0x8000（16進数、四捨五入）
(25 + 45) × 65535 / 175 = 26214 = 0x6666（16進数）
```
結果は、[Grove - スマート空気質センサー (SGP41)](https://wiki.seeedstudio.com/ja/grove-smart-air-quality-sensor-sgp41) で使用されているプログラムおよび [SGP41 データシート (PDF)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf) の表 11 に定義されている定数と一致します。

C 言語での同様のコード：
```cpp
        int h_ticks = humi * 0xFFFF;
        int t_ticks = (temp + 45) * 0xFFFF / 175;
```
プログラム内の 'humi' は 0 から 1 の間の値であるため、100 での除算とそれ以前の乗算は削除されています。

## ハードウェア準備

私は Seeeduino Nano を制御ボードとして使用し、Grove - スマート空気質センサー (SGP41) と Grove - AHT20 I2C 工業用温湿度センサーを使用して実現しました。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino Nano</th>
			<th>Grove - AHT20 温湿度センサー</th>
            <th>Grove - スマート空気質センサー (SGP41)</th>
			<th>Grove - ブランチケーブル</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-wiki.jpg" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/Grove-Branch_Cable-5PCs_pack-.jpg" style={{width:185, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"3"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"3"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"3"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"3"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## ソフトウェアの準備

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino IDE</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

必要な複数のライブラリがあり、次のステップで説明します。

## はじめに

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### 1. Arduino Nanoとの接続

:::note
USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - Branch CableをSeeeduino Nanoの**I2C**ポートに接続します。

- **ステップ 2.** Grove - Branch CableをI2C Grove AHT20センサーモジュールに接続します。

- **ステップ 3.** Grove - Branch CableをI2C Grove SGP41センサーモジュールに接続します。

- **ステップ 4.** SeeeduinoをUSBケーブルを介してPCに接続します。

![Seeeduino_SGP41_AHT20](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/1.jpg)

### 2. 必要なライブラリをダウンロードしてArduinoに追加

- **ステップ 1.** Githubから依存ライブラリをダウンロードします。

    - **arduino-core ライブラリ**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-core" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

    - **arduino-i2c-sgp41 ライブラリ**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-i2c-sgp41" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

   - **Seeed_Arduino_AHT20 ライブラリ**: 

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_AHT20" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** ライブラリを正しくダウンロードしてインストールした後、以下のコードをアップロードできます。このコードは、[SGP41](https://wiki.seeedstudio.com/ja/grove-smart-air-quality-sensor-sgp41#software)と[AHT20](https://wiki.seeedstudio.com/ja/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor//#software-code)のソフトウェアを組み合わせ、導入部分で説明した式を追加したものです。

### 3. コードをアップロードして結果を確認

- **ステップ 1.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

```cpp
// GROVE-AHT20+SGP41用ARDUINOデモ
//
#include <Wire.h>
#include "AHT20.h"
#include <Arduino.h>
#include <SensirionI2CSgp41.h>

SensirionI2CSgp41 sgp41;

// NOxコンディショニングに必要な時間（秒単位）
uint16_t conditioning_s = 10;

AHT20 AHT;

void setup() {
    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp41.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp41.getSerialNumber(serialNumber, serialNumberSize);

    if (error) {
        Serial.print("getSerialNumber()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("シリアル番号:");
        Serial.print("0x");
        for (size_t i = 0; i < serialNumberSize; i++) {
            uint16_t value = serialNumber[i];
            Serial.print(value < 4096 ? "0" : "");
            Serial.print(value < 256 ? "0" : "");
            Serial.print(value < 16 ? "0" : "");
            Serial.print(value, HEX);
        }
        Serial.println();
    }

    uint16_t testResult;
    error = sgp41.executeSelfTest(testResult);
    if (error) {
        Serial.print("executeSelfTest()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else if (testResult != 0xD400) {
        Serial.print("executeSelfTestがエラーで失敗しました: ");
        Serial.println(testResult);
    }
    AHT.begin();
}

uint16_t read_sgp41(uint16_t rh, uint16_t t) {
    uint16_t error;
    char errorMessage[256];
    uint16_t srawVoc = 0;
    uint16_t srawNox = 0;

    delay(1000);

    if (conditioning_s > 0) {
        // NOxコンディショニング中（10秒間）、SRAW NOxは0のまま
        error = sgp41.executeConditioning(rh, t, srawVoc);
        conditioning_s--;
    } else {
        // 測定を読み取る
        error = sgp41.measureRawSignals(rh, t, srawVoc, srawNox);
    }

    if (error) {
        Serial.print("measureRawSignals()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("RH ticks: ");
        Serial.print(rh);
        Serial.print("\t");
        Serial.print("T ticks: ");
        Serial.print(t);
        Serial.print("\t");
        Serial.print("SRAW_VOC: ");
        Serial.print(srawVoc);
        Serial.print("\t");
        Serial.print("SRAW_NOx: ");
        Serial.println(srawNox);
    }
    return error;
}

void loop()
{
    float humi, temp;
    
    int ret = AHT.getSensor(&humi, &temp);
    
    if(ret)     // データ取得成功
    {
        Serial.print("湿度: ");
        Serial.print(humi*100);
        Serial.print("%\t 温度: ");
        Serial.print(temp);
        Serial.print("\t");
        // T-ticks = (T/°C + 45) × 65535 / 175
        // H-ticks = RH/% × 65535 / 100
        int h_ticks = humi * 0xFFFF;
        int t_ticks = (temp + 45) * 0xFFFF / 175;
        read_sgp41(h_ticks, t_ticks);
    }
    else        // データ取得失敗
    {
        Serial.println("AHT20からデータ取得失敗");
    }
    
    delay(100);
}

// ファイル終了
```

- **ステップ 2.** Arduino IDE の **シリアルモニター** を開くには、**ツール -> シリアルモニター** をクリックしてください。

![シリアルコンソール出力](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/2.jpg)

最初の10個の SRAW_NOx 値はコンディショニングのためゼロであることに注意してください。

## リソース

- [SGP41](https://wiki.seeedstudio.com/ja/grove-smart-air-quality-sensor-sgp41#resources)
- [AHT20](https://wiki.seeedstudio.com/ja/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/#resources)

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- [Hansの努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35179519) に感謝します。あなたの作業は [展示されます](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>