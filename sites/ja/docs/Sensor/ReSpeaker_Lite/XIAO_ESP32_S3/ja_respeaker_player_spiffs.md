---
description: XIAO ESP32S3 を使用した MP3 プレーヤー
title: MP3 プレーヤー
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_player_spiffs
last_update:
  date: 05/15/2025
  author: Jessie
---


このプロジェクトでは、reSpeaker Lite ボードを使用して SPIFFS ファイルシステムに保存された MP3 ファイルを再生する方法を示します。

### 必要なライブラリ

* [ReSpeaker Lite ライブラリ](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git)
* [ReSpeaker Lite arduino libhelix](https://github.com/limengdu/reSpeaker_Lite-arduino-libhelix)

### 機能

* SPIFFS ファイルシステムから MP3 ファイルを再生
* オーディオ出力に I2S インターフェースを利用
* メタデータの抽出とコールバックをサポート
* 簡単に使用できる AudioPlayer クラスによるシームレスなオーディオ再生

### SPIFFS へのファイルのアップロード

[Wiki](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem/#serial-peripheral-interface-flash-file-system-spiffs) を参照してください。

SPIFFS にファイルをアップロードするための必要なツールを準備してください。Arduino IDE の "ESP32 Sketch Data Upload" ツールや "ESP32 File Uploader" のような外部ツールを使用できます。

スケッチディレクトリに "data" フォルダを作成し、再生したい MP3 ファイルをその中に配置します。

選択したツールを使用してファイルを SPIFFS にアップロードします。

### コード

```cpp
#include "AudioTools.h"
#include "AudioLibs/AudioSourceSPIFFS.h"
#include "AudioCodecs/CodecMP3Helix.h"

const char *startFilePath="/";
const char* ext="mp3";
AudioSourceSPIFFS source(startFilePath, ext);
I2SStream i2s;
MP3DecoderHelix decoder;
AudioPlayer player(source, i2s, decoder);

void printMetaData(MetaDataType type, const char* str, int len){
  Serial.print("==> ");
  Serial.print(toStr(type));
  Serial.print(": ");
  Serial.println(str);
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // 出力の設定
  auto cfg = i2s.defaultConfig(TX_MODE);
  i2s.begin(cfg);

  // プレーヤーの設定
  //source.setFileFilter("*Bob Dylan*");
  player.setMetadataCallback(printMetaData);
  player.begin();
}

void loop() {
  player.copy();
}
```

### 設定

`startFilePath`: SPIFFS 内で MP3 ファイルが配置されているディレクトリパス (デフォルト: "/")。

`ext`: オーディオファイルの拡張子 (デフォルト: "mp3")。

これらの定数は、スケッチ内で変更して特定のファイル構造や要件に合わせることができます。

### カスタマイズ

`printMetaData`: オーディオファイルからメタデータが抽出された際に呼び出される関数です。この関数をカスタマイズして、メタデータを必要に応じて処理できます。

`AudioSourceSPIFFS`: ファイルフィルターを変更するには、行 //source.setFileFilter("*Bob Dylan*"); のコメントを解除し、フィルターを希望する条件に置き換えてください。