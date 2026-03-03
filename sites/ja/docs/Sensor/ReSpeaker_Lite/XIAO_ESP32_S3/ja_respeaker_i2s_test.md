---
description: XIAO ESP32S3 を使用した I2S テスト
title: I2S テスト
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_i2s_test
last_update:
  date: 05/15/2025
  author: Jessie
---


このプロジェクトは、ReSpeaker Lite ボード上の I2S インターフェースの機能を検証するためのテストスケッチです。このボードには [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) マイクロコントローラーとマイクアレイが統合されています。このスケッチは、矩形波オーディオ信号を生成し、それを I2S インターフェースに書き込み、オンボードのマイクアレイからサンプルを読み取ることで、I2S の送受信の整合性を確認します。

### 機能

スケッチは、シリアル通信を初期化し、I2S ピンを設定するところから始まります。指定された周波数と振幅に基づいて矩形波オーディオ信号を生成します。生成されたオーディオサンプルは `I2S.write()` 関数を使用して I2S インターフェースに書き込まれます。

その後、スケッチは `I2S.read()` 関数を使用して I2S インターフェースを介してマイクアレイからサンプルを読み取り、受信した非ゼロサンプルの数をカウントします。

### コード

```cpp
#include <ESP_I2S.h>
#include <wav_header.h>

I2SClass I2S;

const int sampleRate = 16000;                         // サンプルレート（Hz）
const int frequency = 440;                            // 矩形波の周波数（Hz）
const int amplitude = 500;                            // 矩形波の振幅
int32_t sample = amplitude;                           // 現在のサンプル値
const int halfWavelength = sampleRate / frequency;    // 矩形波の半波長

int count = 0;
int i2s_read = 0;
bool i2s_test = true;

void setup() {
  Serial.begin(115200);
  while(!Serial);             // シリアルポートが接続されるまで待機

  I2S.setPins(8, 7, 43, 44);  // I2S ピンを設定
  if (!I2S.begin(I2S_MODE_STD, sampleRate, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)){
    Serial.println("I2S の初期化に失敗しました！");
    while(1);                 // 初期化に失敗した場合は停止
  }
}

void loop() {
  if(i2s_test){
    Serial.println("I2S テスト開始！");

    // 矩形波サンプルを生成して書き込み
    for(int i = 0; i < 32000; i++){
      if(count % halfWavelength == 0){
        sample = -sample;    // サンプル値を切り替えて矩形波を生成
      }
      I2S.write(sample);     // 右チャンネルにサンプルを書き込み
      count++;
    }

    // I2S からサンプルを読み取り、非ゼロサンプルをカウント
    i2s_read=0;
    for(int i = 0; i < 32000; i++){
      int sample_read = I2S.read();
      Serial.print(sample_read);
      Serial.print(" ");
      if(sample_read != 0 && sample_read != 0xFFFF){
        i2s_read++;
      }
    }
    Serial.println();

    // 有効なサンプル数が閾値を超えているか確認
    if(i2s_read > 16000){
      Serial.println("I2S RX 合格！");
    } else{
      i2s_read = 0;
      for(int i = 0; i < 32000; i++){
        int sample_read = I2S.read();
        if (sample_read != 0 && sample_read != 0xFFFF){
          i2s_read++;
        }
      }
      if(i2s_read > 16000)
        Serial.println("I2S RX 合格！");
      else
        Serial.println("I2S RX 不合格！");
    }

    Serial.println("終了");
    i2s_test = false;
  }
}
```




受信した非ゼロサンプルの数が閾値（この場合は 16000）を超えた場合、I2S の受信は合格とみなされます。それ以外の場合は不合格とみなされます。

テスト結果（I2S サンプル値と合格/不合格のステータスを含む）は、シリアルモニターに出力されます。

`Serial Monitor` を開いてテスト結果を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-test-pass.png" alt="pir" width={800} height="auto" /></p>