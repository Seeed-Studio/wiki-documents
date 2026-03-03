---
description: XIAO ESP32S3 を使用したスターウォーズテーマプレイヤー
title: スターウォーズテーマプレイヤー
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_streams_memory
last_update:
  date: 05/15/2025
  author: Jessie
---


このプロジェクトでは、reSpeaker Lite ボードを使用してスターウォーズのテーマ曲を再生する方法を示します。



### 機能

* メモリに保存されたスターウォーズのテーマ曲を再生
* I2S インターフェースを利用したオーディオ出力
* AudioTools フレームワークを使用したオーディオ処理とストリーミング
* デバッグとモニタリングに便利な AudioLogger を採用


### コード

```cpp
#include "AudioTools.h"
#include "StarWars30.h"

AudioInfo info(22050, 1, 16);
I2SStream i2s;  // I2S への出力
MemoryStream music(StarWars30_raw, StarWars30_raw_len);
StreamCopy copier(i2s, music); // 音声を I2S にコピー

void setup(){
    Serial.begin(115200);
    AudioLogger::instance().begin(Serial, AudioLogger::Info);

    auto config = i2s.defaultConfig(TX_MODE);
    config.copyFrom(info);
    i2s.begin(config);
}

void loop(){
    if (!copier.copy()){
      i2s.end();
      stop();
    }
}
```

### 設定

`info`: サンプルレート（22050 Hz）、チャンネル数（モノラルの場合は1）、サンプルあたりのビット数（16ビット）など、オーディオ設定を定義します。

`i2s`: I2SStream クラスのインスタンスを作成し、I2S インターフェースを介してオーディオを出力します。

`music`: メモリ内にスターウォーズのテーマ曲データを保存するための MemoryStream オブジェクトを作成します。

`copier`: メモリストリームから I2S ストリームにオーディオデータをコピーするための StreamCopy オブジェクトを作成します。

### カスタマイズ

`StarWars30_raw` と `StarWars30_raw_len` 変数を独自のオーディオデータに置き換えることで、別の曲や効果音を再生することができます。

AudioInfo オブジェクトのパラメータ（サンプルレート、チャンネル数、サンプルあたりのビット数など）を調整することで、オーディオ設定を変更できます。