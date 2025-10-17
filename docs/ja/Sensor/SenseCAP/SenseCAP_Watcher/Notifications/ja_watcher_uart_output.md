---
description: ユーザーは Watcher を Grove システムと統合する方法を学び、その機能を拡張し、幅広いセンサーや周辺機器と接続できるようになります。
title: UART出力
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg
slug: /ja/uart_output
sidebar_position: 1
last_update:
  date: 07/10/2024
  author: Citric
---

# センサーとして & Groveを使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手</font></span></strong>
    </a>
</div><br />

このwikiでは、センサーとして動作するWatcherがUART（Universal Asynchronous Receiver/Transmitter）機能を活用することで生まれるエキサイティングな可能性を探求します。UART通信を有効にすることで、Watcherはキャプチャした画像や認識結果などの貴重なデータを、デバイス背面にあるUARTインターフェースを通じて送信できます。これにより、Watcherを様々なハードウェアプラットフォームと統合し、革新的なアプリケーションを作成する機会の世界が開かれます。

このwiki全体を通して、WatcherのUARTインターフェースからのデータ出力を読み取り、解釈する詳細について詳しく説明します。さらに、XIAO、Arduino、Raspberry Pi、Jetsonなどの人気のある開発ボードやプラットフォームを使用して、このデータを解析し活用する方法について包括的なチュートリアルを提供します。

## SenseCAP Watcher 高度な設定

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcherは、インテリジェントな場所のための最初の物理的LLMエージェントで、シーンの監視、アクションのトリガー、コマンドに基づく相互作用が可能です。このビデオでは、SenseCAP Watcherがタスク分析に基づいてシーントリガーモデルを選択する方法を紹介します：オンデバイスモデルとLLMモデル。また、RGBライトとディスプレイ&サウンドアラートの設定方法、および通知プッシュモード：APP、UART、HTTPについても説明します。

## Watcher UART配線

UARTをメッセージアラームに使用する準備ができたら、以下のようにWatcherをMCUに接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/58.png" style={{width:800, height:'auto'}}/></div>

:::note
WatcherとMCUが別々に電源供給される場合、WatcherとMCUの**3.3Vまたは5V**ピンを接続する**必要はありません**。

WatcherでMCUに電源を供給する予定の場合、図の配線に加えて**3.3V**を使用してMCUに電源を供給できます。（5Vピンは使用しないでください。これらは入力専用です）

MCUでWatcherに電源を供給する予定の場合、**5V**入力を使用する必要があります。（3.3VではWatcherが正常に動作するのに十分でない場合があります）
:::

## WatcherでUART機能を有効にする

WatcherのUART機能の潜在能力を最大限に引き出すために、まずデバイス内でUART機能を有効にする必要があります。これは、Watcherがアラームシステムとして使用される場面で特に有用です。アラームがトリガーされると、WatcherはUART通信を起動し、キャプチャした画像や認識結果などの重要な情報を外部デバイスに送信して、さらなる処理と分析を行うことができます。

UARTアラーム機能を有効にするには、2つのオプションがあります：

1. SenseCraft APPを使用してタスクを割り当てる際に、WatcherにUART経由で通知するよう明示的に要求する。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/60.png" style={{width:250, height:'auto'}}/></div>

2. タスクの詳細設定でUARTアラーム機能を手動で有効にする：

   - 設定したいタスクの**Detail Config**にアクセスします。
   - **Action**セクションを見つけます。
   - **Serial Port / UART Output**を有効にするためのボックスにチェックを入れます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/86.png" style={{width:250, height:'auto'}}/></div><br />

:::tip
実際のアプリケーションシナリオに応じて、画像の出力を有効にするかどうかを選択してください。**Include base64 image**が有効になっている場合、MCUは画像をキャッシュするために**少なくとも70kのメモリ**が必要です。
:::

上記のいずれかの方法でUARTアラーム機能を有効にすると、Watcherは指定されたアラームコンテンツを検出するたびに、UART経由で必要なアラーム情報を出力します。UART経由で送信されるアラーム情報をキャプチャして処理するために、Watcherがマイクロコントローラーやシリアルターミナル付きのコンピューターなどの適切な受信デバイスに接続されていることを確認してください。

## WatcherからのUART出力の読み取り

UART機能が有効になると、WatcherはUARTインターフェース経由でデータの送信を開始します。このセクションでは、WatcherのUART出力から受信したデータを読み取り、解釈する方法について詳細なガイドを提供します。スムーズで成功したデータ取得プロセスを確保するために、必要なハードウェア接続、通信プロトコル、およびデータフォーマットについて説明します。

デフォルトでは、Watcherは次のUART設定を使用します：ボーレート**115200**、**8データビット**、**パリティなし**、**1ストップビット**、**ハードウェアフロー制御なし**。WatcherのUARTインターフェースに接続する際は、適切な通信を確保するために、受信デバイスが同じ設定で構成されていることを確認してください。

WatcherがUART経由でアラーム情報を送信する際、`tf_module_uart_alarm.h`ヘッダーファイルで定義された`tf_module_uart_alarm_t`構造体に基づく特定のプロトコルとフォーマットに従います。WatcherのUARTアラームモジュールのUARTプロトコルとフォーマットは以下の通りです：

### 出力フォーマット

UART出力のフォーマットは`output_format`フィールドによって制御されます。

- `output_format`が0に設定されている場合、出力はバイナリフォーマットです。
- `output_format`が1に設定されている場合、出力はJSONフォーマットです。

:::note
`output_format`はデフォルトで1に設定されており、JSON形式で出力されます。
:::

### バイナリ出力フォーマット

`output_format`が0に設定されている場合、UART出力パケットの構造は以下の通りです：

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:1000, height:'auto'}}/></div><br />

- `PKT_MAGIC_HEADER`：パケットのマジックヘッダー、"SEEED"として固定（5バイト）。
- `Prompt Str Len`：プロンプト文字列の長さ、リトルエンディアンの4バイト符号なし整数。
- `Prompt Str`：プロンプト文字列、Watcherが実行しているタスクを簡潔に説明するために使用。`text`パラメータが設定されている場合、その値が使用されます。
- `Big Image Len`：大きな画像の長さ、リトルエンディアンの4バイト符号なし整数。`include_big_image`が`true`の場合のみ含まれます。
- `Big Image`：640*480 JPG画像、base64エンコード、検出されたオブジェクトのボックスなし。`include_big_image`が`true`の場合のみ含まれます。
- `Small Image Len`：小さな画像の長さ、リトルエンディアンの4バイト符号なし整数。`include_small_image`が`true`の場合のみ含まれます。
- `Small Image`：240*240 JPG画像、base64エンコード、検出されたオブジェクトのボックスが描画されています。`include_small_image`が`true`の場合のみ含まれます。
- `Boxes Count`：検出されたオブジェクトボックスの数、リトルエンディアンの4バイト符号なし整数。`include_boxes`が`true`の場合のみ含まれます。
- `Box Structure`：検出されたオブジェクトボックスの構造、各ボックスは10バイトを占有し、座標、スコア、ターゲットクラスIDを含みます。`include_boxes`が`true`の場合のみ含まれます。

:::note
認識されたボックス（boxes）メッセージは現時点では受信されません。Watcherの対応機能はまだ開発中であり、最新のv1.1リリースではまだ報告されていないためです。
:::

### JSON出力フォーマット

`output_format`が1に設定されている場合、UART出力パケットの構造は以下の通りです：

```json
{
      "prompt": "People detected",
      "big_image": "base64 encoded JPG image, if include_big_image is enabled, otherwise this field is omitted",
      "inference":{
        "boxes": [
            {
                "x": 100,
                "y": 100,
                "w": 50,
                "h": 60,
                "score": 0.8,
                "target_cls_id": 1
            }
        ],
        "classes_name": ["person"]
      },

}
```

この中で、**(x,y)** は認識されたオブジェクトの中心点位置であり、**(w,h)** は認識ボックスの高さと幅です。下図に示すとおりです。**score** は信頼度レベル、**target_cls_id** は認識されたオブジェクトIDです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/xyhw.png" style={{width:400, height:'auto'}}/></div>

### 設定オプション

- `output_format`: UART出力のフォーマットを制御します。デフォルトは1（JSON形式）です。
- `text`: 出力パケットの`prompt`フィールドを埋めるために使用されます。
- `include_big_image`: ブール値（true | false）、出力に大きな画像を含めるかどうかを制御します。デフォルトは`true`です。
- `include_boxes`: ブール値（true | false）、出力にボックスを含めるかどうかを制御します。デフォルトは`true`です。

注意：設定フィールドが省略された場合、デフォルト値が適用されます。

:::note
認識されたボックス（boxes）メッセージは現時点では受信されません。Watcherの対応機能はまだ開発中であり、最新のv1.1リリースではまだ報告されていないためです。
:::

## XIAO ESP32シリーズ & Watcher

WatcherをXIAO ESP32シリーズボードに接続し、Arduinoを使用してUARTデータを解析する方法を学びます。このセクションでは、WatcherをXIAO ESP32シリーズボードに接続し、Arduinoを使用してUARTデータを解析する方法をガイドします。

### 配線

このチュートリアルは以下のXIAOシリーズをサポートします：

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C3</th>
   <th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
これは他のXIAOシリーズがサポートされていないという意味ではありません。主にWatcherが報告するメッセージデータが約**100k**（最低70k）のメモリを占有するため、WatcherのUART部分の開発にはXIAOのESP32シリーズを使用することをお勧めします。画像データを解析する必要がない場合は、他のXIAOのメモリでも十分に対応できます。
:::

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/63.png" style={{width:700, height:'auto'}}/></div><br />

- WatcherのTXピンをXIAOのUARTインターフェースのRXピンに接続します。

- WatcherのRXピンをXIAOのUARTインターフェースのTXピンに接続します。

- WatcherのGNDピンをXIAOのGNDピンに接続します。

### コード説明

任意のXIAO ESP32シリーズ開発ボードまたは他のESP32シリーズボードを使用して、以下のプログラムでWatcherのUARTデータストリームを読み取ることができます。

:::note
現在、JSONデータストリームのみ出力可能なため、JSONデータストリームを解析するプログラムのみ提供されています。

他のXIAOは常にサポートされているわけではありません。主にJSONストリームの解析には最低70kのメモリが必要なためです。
:::

```cpp
#include <ArduinoJson.h>

long int count = 0;  // Number of alarms

void setup() {
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, D7, D6);  // RX, TX
  while(!Serial);
  delay(100);

  Serial.println("Device Ready. Waiting for Watcher's JSON data...");
}

void loop() {
  if (Serial1.available()) {
    // Set up enough space to store the parsed JSON objects
    const size_t capacity = 1024 * 100 + 512; // At least 70k, insurance 100k
    DynamicJsonDocument doc(capacity);

    // Streaming parsing from Serial1
    DeserializationError error = deserializeJson(doc, Serial1);

    if (error) {
      Serial.print("deserializeJson() failed: ");
      Serial.println(error.c_str());
      return;
    }

    // Print the parsed key-value pairs
    if (doc.containsKey("prompt")) {
      Serial.print("prompt: ");
      Serial.println(doc["prompt"].as<String>());
    }

    if (doc.containsKey("inference")) {
      Serial.print("inference: ");
      Serial.println(doc["inference"].as<String>());
    }

   if (doc.containsKey("inference")) {
     JsonArray boxes = doc["inference"]["boxes"][0].as<JsonArray>();
      Serial.println();
      Serial.println("You can get the number inside the boxes.");
      Serial.print("Box -> ");
      Serial.print("x: ");
      Serial.print(boxes[0].as<int>());
      Serial.print(", y: ");
      Serial.print(boxes[1].as<int>());
      Serial.print(", widths: ");
      Serial.print(boxes[2].as<int>());
      Serial.print(", height: ");
      Serial.print(boxes[3].as<int>());
      Serial.print(", score: ");
      Serial.print(boxes[4].as<int>());
      Serial.print(", target_cls_id: ");
      Serial.println(boxes[5].as<int>());
   }
    
    // You need to turn on "Inculde base64 iamge" button in your app, default is off.
    //And then, uncomment the following code.
    /*
    if (doc.containsKey("big_image")) {
      Serial.print("big_image: ");
      String big_imageData = doc["big_image"].as<String>();
      // Print only the first 100 characters of the image data for example
      Serial.println(big_imageData.substring(0, 100) + "...");
    }
    */


    count++;
    if(count > 2147483646){  // Spillage prevention
      count = 0;
    }
    Serial.print("The ");
    Serial.print(count);
    Serial.println(" alarm message reception is complete. Wait for the next message...");
    Serial.println("------------------------------------------------------------------");
  }
}
```

提供されたコードは、Arduino IDEとArduinoJsonライブラリを使用してWatcherからJSONデータを受信し、解析する方法を示しています。コードの簡単な説明は以下の通りです：

1. JSON解析を処理するために必要なライブラリ **ArduinoJson** がインクルードされています。Arduinoのライブラリマネージャーで検索してインストールできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/bblanchon/ArduinoJson" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Go To Github 🖱️</font></span></strong>
    </a>
</div>

2. `setup()` 関数では、USBシリアル（デバッグ用）とUARTシリアル（Watcherからのデータ受信用）の両方でシリアル通信が初期化されます。

3. `loop()` 関数では、UARTシリアルで利用可能なデータがあるかどうかをチェックします。

4. データが利用可能な場合、解析されたJSONオブジェクトを格納するために指定された容量で `DynamicJsonDocument` が作成されます。

5. JSONデータは `deserializeJson()` 関数を使用して解析され、解析エラーが処理されます。

6. コードは解析されたJSONオブジェクト内の特定のキー（"prompt"、"big_image"、"small_image"など）の存在をチェックします。

:::note
認識されたボックス（boxes）に関する情報の解析は現在利用できません。Watcherの対応する機能がまだ開発中であり、この情報は最新のv1.0.1バージョンではまだ報告されていないためです。
:::

7. キーが見つかった場合、対応する値がデバッグ目的でUSBシリアルに出力されます。

8. コードは `count` 変数を使用して受信したアラームメッセージの数も追跡します。

9. 最後に、各アラームメッセージ受信の完了を示すメッセージが出力され、コードは次のメッセージを待機します。

### XIAO ESP32シリーズへのコードアップロード

XIAO ESP32シリーズボードにコードをアップロードするには、以下の手順に従ってください：

1. USBケーブルを使用してXIAO ESP32シリーズボードをコンピューターに接続します。

2. Arduino IDEを開き、XIAO ESP32シリーズに必要なボードサポートパッケージがインストールされていることを確認します。

   - ルーチンに **Seeed Studio XIAO ESP32C3** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照して追加を完了してください。

   - ルーチンに **Seeed Studio XIAO ESP32S3** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して追加を完了してください。

   - ルーチンに **Seeed Studio XIAO ESP32C6** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/)** を参照して追加を完了してください。

3. Arduino IDEのToolsメニューから適切なボードとポートを選択します。

4. 提供されたコードをArduino IDEで開きます。

5. **Upload** ボタンをクリックして、コードをコンパイルしてXIAO ESP32シリーズボードにアップロードします。

### 期待される結果

コードがXIAO ESP32シリーズボードにアップロードされて実行されると、Watcherがターゲットアラームを識別した後、以下の動作が確認できるはずです：

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/62.png" style={{width:800, height:'auto'}}/></div><br />

他のArduino開発ボードを使用することもできますが、十分なメモリがあることを確認してください。

## Raspberry Pi & Watcher

Watcherを Raspberry Pi に接続し、Python スクリプトを使用してUARTデータを解析・分析するプロセスを探索します。

### 配線

このセクションでは Raspberry Pi 5 を例として説明します。必要であれば、以下のリンクから注文することができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Buy Raspberry Pi 🖱️</font></span></strong>
    </a>
</div>

他の Raspberry Pi シリーズを使用している場合でも、使用方法のコードとチュートリアルは基本的に同じです。

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/65.png" style={{width:800, height:'auto'}}/></div><br />

- Watcher の TX ピンを Raspberry Pi の RX ピン（GPIO 15）に接続します。

- Watcher の RX ピンを Raspberry Pi の TX ピン（GPIO 14）に接続します。

- Watcher の GND ピンを Raspberry Pi の GND ピンに接続します。

### コード説明

Python スクリプトを実行する前に、必要な依存関係をインストールしてください：

```
sudo apt update
sudo apt install python3-pip
pip3 install pyserial pillow
```

Raspberry Pi上のUARTインターフェースのデバイス名を確認します：

```
ls /dev/ttyAMA*
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/67.png" style={{width:700, height:'auto'}}/></div><br />

最初のPythonスクリプトは、UART経由でWatcherからJSONデータを読み取り、それを出力します：

```python
import serial

# Set up the serial port
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("Starting serial JSON reader on Raspberry Pi...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/68.png" style={{width:900, height:'auto'}}/></div><br />

:::note

1. 私のUARTインターフェースは `/dev/ttyAMA0` に対応しています。もしあなたのものが異なる場合は、自分で修正してください。

2. これはテストスクリプトで、Raspberry Pi/WatcherのUARTが正常に動作しているかどうかを確認するために使用できます。

:::

2番目のPythonスクリプトは最初のスクリプトをベースに構築され、JSONパースと画像データの保存機能を追加しています：

```python
import json
import serial  
import base64
from PIL import Image
import io

# Set up the serial port
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1)

# Initialize image counters
big_image_counter = 1
small_image_counter = 1

def read_json_from_serial(): 
    buffer = ""
    try:
        while True:
            if ser.in_waiting > 0:
                data = ser.read(ser.in_waiting).decode()  
                buffer += data

                if '}' in buffer:
                    end = buffer.rfind('}')
                    json_data = buffer[:end+1]
                    buffer = buffer[end+1:]

                    try:  
                        data = json.loads(json_data)
                        print("Received JSON data, processing...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("Error decoding JSON")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"An error occurred: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # Declare global variables

    # Process prompt info
    if "prompt" in data:  
        print(f"Prompt: {data['prompt']}")
    
    # Process boxes info
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"Box {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, score: {box['score']}, target_cls_id: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"Big image processed and saved as {filename}.")
        big_image_counter += 1  # Update global variable 

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"Small image processed and saved as {filename}.")  
        small_image_counter += 1  # Update global variable

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # Save as PNG file
    return image

if __name__ == "__main__": 
    print("Starting serial JSON reader on Raspberry Pi...")
    read_json_from_serial()
```

:::note
現在、JSON データストリームのみ出力可能なため、JSON データストリームを解析するプログラムのみが提供されています。
:::

このスクリプトは以下の処理を行います：

- ループ内で UART から JSON データを読み取り

- JSON データをデコードし、`process_json_data` を呼び出して処理

- JSON からプロンプト情報と画像データを抽出

:::note
認識されたボックス（boxes）に関する情報の解析は現在利用できません。これは、Watcher の対応機能がまだ開発中であり、この情報が最新の v1.0.1 バージョンではまだ報告されていないためです。
:::

- base64 エンコードされた画像データをデコードし、`decode_and_save_image` を使用して PNG ファイルとして保存

- 抽出された情報と保存された画像のファイル名を出力

### Raspberry Pi でのコード実行

1. Raspberry Pi で新しい Python ファイルを作成します（例：watcher_uart.py）：

```
nano watcher_uart.py
```

2. 完全なPythonコードをファイルにコピー&ペーストします。

3. Ctrl+Xを押し、次にYとEnterを押して保存し、エディタを終了します。

4. Pythonスクリプトを実行します：

```
python watcher_uart.py
```

### 期待される結果

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/69.png" style={{width:1000, height:'auto'}}/></div><br />

スクリプトを実行した後：

- WatcherからのパースされたJSONデータがターミナルにリアルタイムで出力されます。

- 受信した大きな画像と小さな画像は、big_image_x.pngとsmall_image_x.pngファイルとして自動的に保存されます。

以上です！これで、WatcherをRaspberry Piに接続し、PythonでUARTデータを読み取り、JSONをパースし、送信された画像を保存する方法を学びました。Raspberry Piに接続されたスクリーンに受信データをリアルタイムで表示するなど、さらなる実験を自由に行ってください。

## reComputer Jetson & Watch

WatcherをreComputer（NVIDIA Jetsonベースのデバイス）に接続し、Pythonスクリプトを使用してUARTデータをパースおよび分析するプロセスを探索します。

### 配線

このチュートリアルでは、開発者に適したJ401 reComputerキャリアボードを例として説明します。reComputerを購入したい場合は、以下のリンクから入手できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Buy reComputer 🖱️</font></span></strong>
    </a>
</div>

理論的には、このセクションの内容とコードはすべてのNVIDIA Jetsonシリーズ製品に適用されます。

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/66.png" style={{width:800, height:'auto'}}/></div><br />

- WatcherのTXピンをreComputerのUARTインターフェースのRXピンに接続します。

- WatcherのRXピンをreComputerのUARTインターフェースのTXピンに接続します。

- WatcherのGNDピンをreComputerのGNDピンに接続します。

### コードの説明

Pythonスクリプトを実行する前に、必要な依存関係をインストールしてください：

```
sudo apt-get update
sudo apt-get install python3-serial
sudo apt-get install python3-pillow
```

UARTでシリアルコンソールを使用する予定がない場合は、シリアルコンソールを無効にする必要があります：

```
systemctl stop nvgetty
systemctl disable nvgetty
udevadm trigger
```

この時点で変更を有効にするために、reComputerを再起動する必要がある場合があります。

reComputer上のUARTインターフェースのデバイス名を確認してください：

```
ls /dev/ttyTHS*
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/71.png" style={{width:700, height:'auto'}}/></div><br />

最初のPythonスクリプトは、UART経由でWatcherからJSONデータを読み取り、それを出力します：

```python
import serial

# Set up the serial port
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("Starting serial JSON reader on reComputer...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/70.png" style={{width:1000, height:'auto'}}/></div><br />

:::note

1. 私のUARTインターフェースは `/dev/ttyTHS0` に対応しています。もしあなたのものが異なる場合は、自分で修正してください。

2. これはテストスクリプトで、reComputer/WatcherのUARTが正常に動作しているかどうかを確認するために使用できます。

:::

2番目のPythonスクリプトは最初のスクリプトをベースに構築され、JSONパースと画像データの保存機能を追加しています：

```python
import json
import serial  
import base64
from PIL import Image
import io

# Set up the serial port
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1)

# Initialize image counters
big_image_counter = 1
small_image_counter = 1

def read_json_from_serial(): 
    buffer = ""
    try:
        while True:
            if ser.in_waiting > 0:
                data = ser.read(ser.in_waiting).decode()  
                buffer += data

                if '}' in buffer:
                    end = buffer.rfind('}')
                    json_data = buffer[:end+1]
                    buffer = buffer[end+1:]

                    try:  
                        data = json.loads(json_data)
                        print("Received JSON data, processing...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("Error decoding JSON")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"An error occurred: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # Declare global variables

    # Process prompt info
    if "prompt" in data:  
        print(f"Prompt: {data['prompt']}")
    
    # Process boxes info
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"Box {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, score: {box['score']}, target_cls_id: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"Big image processed and saved as {filename}.")
        big_image_counter += 1  # Update global variable 

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"Small image processed and saved as {filename}.")  
        small_image_counter += 1  # Update global variable

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # Save as PNG file
    return image

if __name__ == "__main__": 
    print("Starting serial JSON reader on reComputer...")
    read_json_from_serial()
```

:::note
現在、JSON データストリームのみが出力可能なため、JSON データストリームを解析するプログラムのみが提供されています。
:::

このスクリプトは以下の処理を行います：

- ループ内で UART から JSON データを読み取り

- JSON データをデコードし、process_json_data を呼び出して処理

- JSON からプロンプト情報と画像データを抽出

- base64 エンコードされた画像データをデコードし、`decode_and_save_image` を使用して PNG ファイルとして保存

:::note
認識されたボックス（boxes）に関する情報の解析は現在利用できません。これは、Watcher の対応する機能がまだ開発中であり、この情報が最新の v1.0.1 バージョンではまだ報告されていないためです。
:::

- 抽出された情報と保存された画像のファイル名を出力

### reComputer へのコードのアップロード

reComputer 上で新しい Python ファイルを作成します。例：`watcher_uart.py`：

```
nano watcher_uart.py
```

完全なPythonコードをファイルにコピー＆ペーストしてください。Ctrl+Xを押し、次にYとEnterを押して保存し、エディタを終了します。Pythonスクリプトを実行してください：

```
sudo python watcher_uart.py
```

### 期待される結果

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/72.png" style={{width:1000, height:'auto'}}/></div><br />

スクリプトを実行した後：

- Watcherから受信した解析済みJSONデータが、プロンプト情報を含めてターミナルにリアルタイムで出力されます。

- 受信した大きな画像と小さな画像は、big_image_x.pngとsmall_image_x.pngファイルとして自動的に保存されます。

以上です！これでWatcherをreComputerに接続し、PythonでUARTデータを読み取り、JSONを解析し、送信された画像を保存する方法を学びました。さらに実験を行い、reComputerプラットフォーム上で特定の用途に合わせてコードを適応させてください。

## リソース

- [Getting Started with SenseCAP Watcher](https://wiki.seeedstudio.com/ja/getting_started_with_watcher/)

- [Watcher Quick Start Series 1# : How to assign tasks to Watcher](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)

- [Watcher Quick Start Series 2# : Watcher Looks & SenseCraft Tools](https://wiki.seeedstudio.com/ja/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block)

- [Watcher Quick Start Series 3# : As a sensor & Use Grove](https://wiki.seeedstudio.com/ja/watcher_as_grove)

- [Watcher Quick Start Series 4# : Deploy Watcher's AI capabilities locally](https://wiki.seeedstudio.com/ja/watcher_local_deploy)

- Watcher Quick Start Series 5# : Training a model for Watcher

- [Watcher Quick Start Series 6# : What does Watcher do](https://wiki.seeedstudio.com/ja/what_does_watcher_do)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
