---
description: ReSpeaker Lite を使用した I2S から CSV へのコンバーター
title: CSV コンバーター
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_streams_print
last_update:
  date: 05/15/2025
  author: Jessie
---


このプロジェクトでは、ReSpeaker Lite ボードを使用して I2S インターフェースからオーディオデータをキャプチャし、それを CSV 形式に変換してさらなる分析や処理を行う方法を示します。ReSpeaker Lite は、デュアルチャンネルマイクとスピーカーを備えた XIAO ESP32S3 マイクロコントローラーを統合したオーディオボードです。




### 機能

* I2S インターフェースからオーディオデータをキャプチャ
* キャプチャしたオーディオデータを CSV 形式に変換
* CSV データをシリアルインターフェース経由でストリーム配信し、さらなる処理を可能に
* AudioTools フレームワークを利用してオーディオ処理とストリーミングを実現
* デバッグとモニタリングに便利な AudioLogger を使用



### コード

```cpp
#include "AudioTools.h"

AudioInfo info(16000, 2, 32);
I2SStream i2sStream; // ストリームとして I2S にアクセス
CsvOutput<int32_t> csvStream(Serial);
StreamCopy copier(csvStream, i2sStream); // i2sStream を csvStream にコピー

// Arduino Setup
void setup(void) {
    Serial.begin(115200);
    AudioLogger::instance().begin(Serial, AudioLogger::Info);
    
    auto cfg = i2sStream.defaultConfig(RX_MODE);
    cfg.copyFrom(info);
    cfg.i2s_format = I2S_STD_FORMAT; // または I2S_LSB_FORMAT を試す
    cfg.is_master = false;  // ESP32 がマスターの場合、モジュールはマスタークロックを必要とする
    cfg.use_apll = false;   // 有効にして試す
    i2sStream.begin(cfg);

    // 正しいチャンネルが設定されていることを確認
    csvStream.begin(info);

}

// Arduino loop - データをコピー
void loop() {
    copier.copy();
}
```

### 設定

`info`: オーディオ設定を定義します。サンプルレート、チャンネル数（ステレオの場合は 2、モノラルの場合は 1）、およびサンプルあたりのビット数（32 ビット）を含みます。

`i2sStream`: I2S インターフェースをストリームとしてアクセスするための `I2SStream` クラスのインスタンスを作成します。

`csvStream`: オーディオデータを CSV 形式に変換し、シリアルインターフェース経由でストリーム配信するための `CsvOutput` オブジェクトを作成します。

`copier`: I2S ストリームから CSV ストリームにオーディオデータをコピーするための `StreamCopy` オブジェクトを作成します。

`cfg`: オーディオフォーマット、マスター/スレーブモード、APLL 使用など、必要な設定で I2S ストリームを構成します。



`Serial Plotter` を開いて出力波形を確認してください。



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/waves.gif" alt="pir" width={600} height="auto" /></p>