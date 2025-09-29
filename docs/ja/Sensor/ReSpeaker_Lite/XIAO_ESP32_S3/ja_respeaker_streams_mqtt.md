---
description: MQTTオーディオストリーミング
title: MQTTオーディオストリーミング
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_steams_mqtt
last_update:
  date: 05/15/2025
  author: Jessie
---


このプロジェクトでは、統合されたXIAO ESP32S3マイクロコントローラーを含むreSpeaker Liteボードを使用して、オーディオデータを生成し、MQTTブローカーに送信する方法を示します。

### 必要なライブラリ

* [ArduinoMqttClient](https://www.arduino.cc/reference/en/libraries/arduinomqttclient/)

### 機能

このスケッチは以下のタスクを実行します：

* 指定されたWiFiネットワークに接続します。
* 指定されたMQTTブローカーに接続します。
* reSpeaker LiteライブラリのWhiteNoiseGeneratorクラスを使用してホワイトノイズオーディオを生成します。
* reSpeaker LiteライブラリのWAVEncoderクラスを使用してオーディオデータをWAVファイルとしてエンコードします。
* ArduinoMqttClientライブラリのMqttClientクラスを使用して、エンコードされたオーディオデータを指定されたMQTTトピックに送信します。
* poll()関数を定期的に呼び出してMQTT接続を維持します。

### コード

以下の行を変更して、WiFiおよびMQTTブローカーの設定を一致させてください：

```cpp
const char* ssid = "SSID";    // Wi-FiのSSID（名前）
const char* password = "PASSWORD";    // Wi-Fiのパスワード（WPAの場合は使用、WEPの場合はキーとして使用）
const char* broker = "test.mosquitto.org"; 
const char* topic = "audio.wav";
int port = 1883;
```

<details>

<summary>コード</summary>

```cpp
#include "WiFi.h"
#include "ArduinoMqttClient.h"
#include "AudioTools.h"

#define SIZE 1024
#define N 100

// 通信
const char* ssid = "SSID";    // Wi-FiのSSID（名前）
const char* password = "PASSWORD";    // Wi-Fiのパスワード（WPAの場合は使用、WEPの場合はキーとして使用）
const char* broker = "test.mosquitto.org"; 
const char* topic = "audio.wav";
int port = 1883;
WiFiClient wifiClient;
MqttClient mqttClient(wifiClient);

// オーディオ
AudioInfo info(16000, 1, 32);
WhiteNoiseGenerator<int16_t> noise(32000);                        // 最大振幅32000のホワイトノイズを生成するSoundGeneratorのサブクラス
GeneratedSoundStream<int16_t> in_stream(noise);                   // ノイズから生成されたストリーム
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());     // WAVファイルとしてエンコード
StreamCopy copier(out_stream, in_stream, SIZE);                   // MQTTクライアントに音声をコピー

// WiFiに接続
void connectWIFI() {
  // WiFiネットワークへの接続を試みる
  Serial.print("WPA SSIDに接続を試みています: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  Serial.print("WiFiに接続中...");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }

  Serial.println("ネットワークに接続しました");
  Serial.println();  
}

// MQTTサーバーに接続
void connectMQTT() {
  // ユニークなクライアントIDを提供できます。設定しない場合、ライブラリはArduino-millis()を使用します。
  // 各クライアントはユニークなクライアントIDを持つ必要があります。
  mqttClient.setId("reSpeaker");

  // 認証のためにユーザー名とパスワードを提供できます。
  // mqttClient.setUsernamePassword("username", "password");

  Serial.print("MQTTブローカーに接続を試みています: ");
  Serial.println(broker);

  if (!mqttClient.connect(broker, port)) {
    Serial.print("MQTT接続に失敗しました！エラーコード = ");
    Serial.println(mqttClient.connectError());

    stop();
  }

  Serial.println("MQTTブローカーに接続しました！");
  Serial.println();
}  

// MQTTサーバーにオーディオを送信
void sendMQTT() {
    // WAVヘッダーを書き込むことを確認
    out_stream.begin(info);

    // メッセージを送信。Printインターフェースを使用してメッセージ内容を設定できます。
    mqttClient.beginMessage(topic, SIZE * N, true);

    // オーディオデータをMQTTにコピー：100 * 1024バイト
    copier.copyN(N);

    mqttClient.endMessage();
}


void setup() {
  // ロガーを初期化
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // 接続
  connectWIFI();
  connectMQTT();

  // オーディオ設定
  noise.begin(info);
  in_stream.begin(info);

  // オーディオ送信
  sendMQTT();
}

void loop() {
  // poll()を定期的に呼び出して、ライブラリがMQTTキープアライブを送信できるようにします。
  // これにより、ブローカーによる切断を回避します。
  mqttClient.poll();
  delay(10000);
}
```
</details>

`シリアルモニター`を開いて出力とログを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-log.png" alt="pir" width={600} height="auto" /></p>

その後、MQTTサーバー上でデータを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-data.png" alt="pir" width={800} height="auto" /></p>

### カスタマイズ

以下の行を変更することで、オーディオ生成とエンコードをカスタマイズできます：

```cpp
WhiteNoiseGenerator<int16_t> noise(32000);
GeneratedSoundStream<int16_t> in_stream(noise);
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());
```

* `WhiteNoiseGenerator`は指定された最大振幅でホワイトノイズオーディオを生成します。
* `GeneratedSoundStream`は生成されたオーディオから入力ストリームを作成します。
* `EncodedAudioStream`は指定されたエンコーダ（この場合はWAV）を使用してオーディオデータをエンコードします。

また、送信するオーディオデータのサイズを以下の定数を変更することで調整できます：

```cpp
#define SIZE 1024
#define N 100
```

* `SIZE`は各オーディオデータチャンクのサイズを表します。
* `N`は送信するオーディオデータチャンクの数を表します。