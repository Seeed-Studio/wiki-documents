---
title: Grove - アナログマイク

nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Analog-Microphone/
slug: /ja/Grove-Analog-Microphone
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/04.png)

Grove - アナログマイクは、高性能な **SiSonic MEMS** 技術を基盤としており、オープンソースハードウェア業界に向けて、極めて低ノイズ、低消費電流、信頼性が高く、コンパクトなマイクを提供します。また、厳しい条件下での性能が向上しています。

Grove - アナログマイクは、優れた音声性能が求められる音センサーに最適な選択肢です。最大20dBのゲインを提供できるほか、低消費電流と最大RF保護機能を備えており、ArduinoやRaspberry Piに最適なマイクです。当社の注目製品である<a href="https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html">ReSpeaker Core v2.0</a>もMEMS技術を採用しており、Grove - アナログマイクと同じマイクを使用しています。高品質なマイクをお探しなら、こちらが最適です。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 特徴

- 高性能なSiSonic MEMS技術
- 極めて低ノイズ、低消費電流、信頼性の高い設計
- コンパクトで洗練されたデザイン

:::warning
    この音センサーは周囲に音があるかどうかを検出するためのものであり、音声信号を収集するためのモジュールとして使用しないでください。例えば、音声制御ランプを作るためには使用できますが、録音デバイスとしては使用できません。
:::

## 応用例

- 音センサー
- 音声信号の収集
- 音声認識
- 録音

## 仕様

|項目|値|
|-----|------|
|寸法 |20mm x 20mm|
|動作電圧 |3.3V|
|動作電流| 5mA|
|動作温度範囲|-40 °C ～ 100 °C|

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

**ハードウェア**

|Seeeduino V4.2| Base Shield|Grove-アナログマイクロフォン|
|--------------|------------|-----------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)|

- **ステップ 1.** Grove-Sound SensorをGrove-Base Shieldのポート**A0**に接続します。
- **ステップ 2.** Grove-Base ShieldをSeeeduinoに差し込み、USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/hardware_connection.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove-Sound SensorをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Grove-Sound Sensor      |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| A1            | 白                     |
| A0            | 黄                     |

**ソフトウェア**

- **ステップ 1.** 以下のコードをArduino IDEにコピーしてArduinoにアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
/*
  アナログ入力、アナログ出力、シリアル出力

  アナログ入力ピンを読み取り、その結果を0から255の範囲にマッピングし、
  結果を使用して出力ピンのパルス幅変調（PWM）を設定します。
  また、結果をシリアルモニタに出力します。
*/

// これらの定数は変更されません。使用するピンに名前を付けるために使用されます。
const int analogInPin = A0;  // ポテンショメータが接続されているアナログ入力ピン
const int analogOutPin = 9; // LEDが接続されているアナログ出力ピン

int sensorValue = 0;        // ポテンショメータから読み取った値
int outputValue = 0;        // PWM（アナログ出力）に出力する値

void setup() {             
  Serial.begin(9600);      // シリアル通信を9600 bpsで初期化
}

void loop() {
  sensorValue = analogRead(analogInPin);        // アナログ入力値を読み取る
  outputValue = map(sensorValue, 0, 1023, 0, 255);       // アナログ出力の範囲にマッピング
  analogWrite(analogOutPin, outputValue);               // アナログ出力値を変更

  Serial.println(outputValue);    // 結果をシリアルモニタに出力

  // アナログ-デジタルコンバータが最後の読み取り後に安定するまで2ミリ秒待機
  delay(2);
}
```

- **ステップ 2.** **シリアル > プロッタ**をクリックして、センサーの変化曲線を取得します。音を立てて値の変化を確認してください。

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/outcome.png)

### Wio Terminalで遊ぶ

**ハードウェア**

|Wio Terminal|Grove-アナログマイクロフォン|
|--------------|-----------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png)|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)|

#### ハードウェア接続

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/connection.jpg)

**ステップ 1** Grove-アナログマイクロフォンをGroveケーブルを介してWio Terminalに接続し、USBケーブルを使用してWio TerminalをPCに接続します。

**ステップ 2** デモコードをArduino IDEにコピーしてアップロードします。

**ソフトウェア**

```cpp
#include "seeed_line_chart.h" // ライブラリをインクルード

TFT_eSPI tft;
#define LINE_DIS 0X00
#define STRING_DIS 0X01
#define max_size 30 // データの最大サイズ
doubles data;       // データを格納するためのdoubles型を初期化
int brightness;
TFT_eSprite spr = TFT_eSprite(&tft); // スプライト

const int MIC = A0; // マイクアンプ出力がピンA0に接続されている
int adc;
int dB, PdB; // マイクから読み取った値を保持する変数
uint8_t mode = LINE_DIS;
void setup()
{
    Serial.begin(9600); // ボーレートを9600に設定して、シリアルモニタでマイクが取得する値を確認
    pinMode(A0, INPUT);
    pinMode(WIO_KEY_C, INPUT_PULLUP);
    pinMode(WIO_BUZZER, OUTPUT);
    tft.begin();
    spr.createSprite(TFT_HEIGHT, TFT_WIDTH);
    spr.setRotation(3);
    tft.setRotation(3);
}

void loop() {
 
    if (digitalRead(WIO_KEY_C) == LOW) {
        mode ++;
        if(mode > STRING_DIS ) mode = LINE_DIS;
        while(!digitalRead(WIO_KEY_C));
    }
    display(mode);
}

void display(uint8_t mode)
{
    adc = analogRead(MIC); // アンプからADC値を読み取る
    //Serial.println (adc);// 初期計算用にADCを出力
    dB = (adc + 83.2073) / 7.003; // 回帰値を使用してADC値をdBに変換

    if(dB > 50)
    {
        analogWrite(WIO_BUZZER, 128);

    }else{
        analogWrite(WIO_BUZZER, 0);
    }

    spr.fillSprite(TFT_WHITE);

    if (data.size() == max_size)
    {
        data.pop(); // 最初に読み取った変数を削除
    }
    data.push(dB); // 変数を読み取り、データに格納

    // ライングラフタイトルの設定
    auto header = text(0, 0)
                      .value("MIC DB Readings")
                      .align(center)
                      .valign(vcenter)
                      .width(tft.width())
                      .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); // ヘッダーの高さはフォントの高さの2倍
    if (LINE_DIS == mode){
    // ライングラフの設定
    auto content = line_chart(20, header.height()); //(x,y) ライングラフの開始位置
    content
        .height(tft.height() - header.height() * 1.5) // ライングラフの実際の高さ
        .width(tft.width() - content.x() * 2)         // ライングラフの実際の幅
        .based_on(0.0)                                // y軸の開始点（float型で指定）
        .show_circle(false)                           // 各ポイントに円を描画（デフォルトはオン）
        .value(data)                                  // ライングラフにデータを渡す
        .color(TFT_RED)                               // ラインの色を設定
        .draw();
    } else if (STRING_DIS == mode){
        for(int8_t line_index = 0;line_index < 5 ; line_index++)
        {
            spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
        }        
        auto header =  text(0, 0)
                    .thickness(1);
        spr.setFreeFont(&FreeSansBoldOblique24pt7b); 
        if(dB > 50){
            spr.setTextColor(TFT_RED);
        }else{
            spr.setTextColor(TFT_BLUE);
        }
        spr.drawFloat(dB,2,70,110);
        spr.drawString(" dB",80 + 100,110,1);
    }
    spr.pushSprite(0, 0);
    delay(100);
}
```

:::success
   すべてが正常に動作していれば、Wio Terminal の画面に画像が表示されます。
:::

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/02.gif" alt="Grove-Analog Microphone の結果" title="デモ" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- [**ZIP**] [Grove-Analog_Microphone_v1.0_SCH&PCB.zip](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip)
- [**PDF**] [SMD Mic OMNI-22DB_Specification.pdf](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/SMD_Mic_OMNI-22DB_Specification.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>