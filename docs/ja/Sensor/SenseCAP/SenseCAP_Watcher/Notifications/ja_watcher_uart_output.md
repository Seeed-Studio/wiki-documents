---
description: ユーザーは Watcher を Grove システムと統合する方法を学び、その機能を拡張し、幅広いセンサーや周辺機器と接続できるようになります。
title: UART 出力
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg
slug: /ja/uart_output
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# センサーとして使用 & Grove を活用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
</div><br />

この Wiki では、Watcher がセンサーとして動作し、UART（Universal Asynchronous Receiver/Transmitter）機能を活用することで生まれるエキサイティングな可能性を探ります。UART 通信を有効にすることで、Watcher はキャプチャされた画像や認識結果などの貴重なデータをデバイス背面にある UART インターフェースを通じて送信できます。これにより、Watcher をさまざまなハードウェアプラットフォームと統合し、革新的なアプリケーションを作成するための新たな機会が広がります。

この Wiki を通じて、Watcher の UART インターフェースからのデータ出力を読み取り、解釈する詳細を掘り下げます。また、XIAO、Arduino、Raspberry Pi、Jetson などの人気のある開発ボードやプラットフォームを使用して、このデータを解析し活用する方法について包括的なチュートリアルを提供します。

## SenseCAP Watcher 高度な設定

<div class="table-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcher は、インテリジェントな場所向けの初の物理 LLM エージェントであり、シーンを監視し、アクションをトリガーし、コマンドに基づいて対話することができます。この動画では、SenseCAP Watcher がタスク分析に基づいてシーントリガーモデルを選択する方法（オンデバイスモデルと LLM モデル）を紹介します。また、RGB ライトの設定、ディスプレイ＆サウンドアラートの設定、通知プッシュモード（APP、UART、HTTP）の設定方法も紹介します。

## Watcher UART 配線

メッセージアラーム用に UART を使用する準備ができたら、以下のように Watcher を MCU に接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/58.png" style={{width:800, height:'auto'}}/></div>

:::note
Watcher と MCU が別々に電源供給されている場合は、Watcher と MCU の **3.3V または 5V** ピンを接続する必要はありません。

Watcher を使用して MCU に電源を供給する予定の場合は、画像の配線に加えて **3.3V** を使用して MCU に電源を供給できます。（5V ピンは入力専用であるため使用しないでください）

MCU を使用して Watcher に電源を供給する予定の場合は、**5V** 入力を使用する必要があります。（3.3V では Watcher が正常に動作しない可能性があります）
:::

## WatcherでのUART機能の有効化

WatcherのUART機能を最大限に活用するには、まずデバイス内でUART機能を有効にする必要があります。これは特に、Watcherがアラームシステムとして使用されるシナリオで役立ちます。アラームがトリガーされると、WatcherはUART通信を有効化し、キャプチャした画像や認識結果などの重要な情報を外部デバイスに送信し、さらなる処理や分析を行うことができます。

UARTアラーム機能を有効にするには、以下の2つの方法があります：

1. SenseCraft APPを使用してタスクを割り当てる際に、WatcherにUARTを介して通知するよう明示的にリクエストする。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/60.png" style={{width:250, height:'auto'}}/></div>

2. タスクの詳細設定で手動でUARTアラーム機能を有効にする：

   - 設定したいタスクの**Detail Config**にアクセスします。
   - **Action**セクションを見つけます。
   - **Serial Port / UART Output**を有効にするチェックボックスをオンにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/86.png" style={{width:250, height:'auto'}}/></div><br />

:::tip
実際のアプリケーションシナリオに応じて、画像の出力を有効にするかどうかを選択してください。**Include base64 image**が有効になっている場合、MCUには画像をキャッシュするために**少なくとも70kのメモリ**が必要です。
:::

上記のいずれかの方法でUARTアラーム機能を有効にすると、Watcherは指定されたアラーム内容を検出するたびにUARTを介して必要なアラーム情報を出力します。Watcherが適切な受信デバイス（マイクロコントローラーやシリアルターミナルを備えたコンピューターなど）に接続されていることを確認し、UARTを介して送信されたアラーム情報をキャプチャおよび処理してください。



## WatcherからのUART出力の読み取り

UART機能が有効になると、WatcherはUARTインターフェースを介してデータの送信を開始します。このセクションでは、WatcherのUART出力から受信したデータを読み取り、解釈する方法について詳しく説明します。必要なハードウェア接続、通信プロトコル、およびデータ形式をカバーし、スムーズで成功したデータ取得プロセスを確保します。

デフォルトでは、Watcherは以下のUART設定を使用します：**115200のボーレート**、**8データビット**、**パリティなし**、**1ストップビット**、および**ハードウェアフロー制御なし**。WatcherのUARTインターフェースに接続する際は、受信デバイスが同じ設定で構成されていることを確認してください。

WatcherがUARTを介してアラーム情報を送信する際、`tf_module_uart_alarm.h`ヘッダーファイルで定義された`tf_module_uart_alarm_t`構造に基づいた特定のプロトコルと形式に従います。WatcherのUARTアラームモジュールのUARTプロトコルと形式は以下の通りです：

### 出力形式

UART出力の形式は、`output_format`フィールドによって制御されます。

- `output_format`が0に設定されている場合、出力はバイナリ形式になります。
- `output_format`が1に設定されている場合、出力はJSON形式になります。

:::note
`output_format`はデフォルトで1に設定されており、JSON形式で出力されます。
:::

### バイナリ出力形式

`output_format`が0に設定されている場合、UART出力パケットの構造は以下の通りです：

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:1000, height:'auto'}}/></div><br />

- `PKT_MAGIC_HEADER`: パケットのマジックヘッダーで、固定値は"SEEED"（5バイト）。
- `Prompt Str Len`: プロンプト文字列の長さ、リトルエンディアンの4バイト符号なし整数。
- `Prompt Str`: Watcherが実行しているタスクを簡単に説明するためのプロンプト文字列。`text`パラメータが設定されている場合、その値が使用されます。
- `Big Image Len`: 大きな画像の長さ、リトルエンディアンの4バイト符号なし整数。`include_big_image`が`true`の場合のみ含まれます。
- `Big Image`: 640*480のJPG画像、Base64エンコード済み、検出されたオブジェクトのボックスなし。`include_big_image`が`true`の場合のみ含まれます。
- `Small Image Len`: 小さな画像の長さ、リトルエンディアンの4バイト符号なし整数。`include_small_image`が`true`の場合のみ含まれます。
- `Small Image`: 240*240のJPG画像、Base64エンコード済み、検出されたオブジェクトのボックス付き。`include_small_image`が`true`の場合のみ含まれます。
- `Boxes Count`: 検出されたオブジェクトボックスの数、リトルエンディアンの4バイト符号なし整数。`include_boxes`が`true`の場合のみ含まれます。
- `Box Structure`: 検出されたオブジェクトボックスの構造。各ボックスは10バイトを占め、座標、スコア、ターゲットクラスIDを含みます。`include_boxes`が`true`の場合のみ含まれます。

:::note
認識されたボックス（boxes）メッセージは現時点では受信されません。この機能はWatcherの開発中であり、最新のv1.1リリースではまだ報告されていません。
:::

### JSON出力形式

`output_format`が1に設定されている場合、UART出力パケットの構造は以下の通りです：

```json
{
      "prompt": "People detected",
      "big_image": "include_big_imageが有効な場合はBase64エンコードされたJPG画像、それ以外の場合はこのフィールドは省略されます",
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
ここで、**(x,y)**は認識されたオブジェクトの中心点の位置を示し、**(w,h)**は認識ボックスの高さと幅を示します。以下の図のように、**score**は信頼度、**target_cls_id**は認識されたオブジェクトのIDです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/xyhw.png" style={{width:400, height:'auto'}}/></div>

### 設定オプション

- `output_format`: UART出力の形式を制御します。デフォルトは1（JSON形式）。
- `text`: 出力パケットの`prompt`フィールドを埋めるために使用されます。
- `include_big_image`: ブール値（true | false）、出力に大きな画像を含めるかどうかを制御します。デフォルトは`true`。
- `include_boxes`: ブール値（true | false）、出力にボックスを含めるかどうかを制御します。デフォルトは`true`。

注: もし設定フィールドが省略された場合、デフォルト値が適用されます。

:::note
認識されたボックス（boxes）メッセージは現時点では受信されません。これは、Watcherの対応する機能がまだ開発中であり、最新のv1.1リリースでは報告されていないためです。
:::

## XIAO ESP32シリーズ & Watcher

WatcherをXIAO ESP32シリーズボードに接続し、Arduinoを使用してUARTデータを解析する方法を学びます。このセクションでは、WatcherをXIAO ESP32シリーズボードに接続し、Arduinoを使用してUARTデータを解析する方法を説明します。

### 配線

このチュートリアルは以下のXIAOシリーズをサポートしています：

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

:::tip
これは他のXIAOシリーズがサポートされていないという意味ではありません。主に、Watcherが報告するメッセージデータが約**100k**（最低でも70k）のメモリを占有するため、Watcher開発のUART部分にはESP32シリーズのXIAOを使用することをお勧めします。画像データを解析する必要がない場合は、他のXIAOのメモリでも十分です。
:::

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/63.png" style={{width:700, height:'auto'}}/></div><br />

- WatcherのTXピンをXIAOのUARTインターフェースのRXピンに接続します。

- WatcherのRXピンをXIAOのUARTインターフェースのTXピンに接続します。

- WatcherのGNDピンをXIAOのGNDピンに接続します。

### コードの説明

以下のプログラムを使用して、WatcherのUARTデータストリームを読み取ることができます。どのXIAO ESP32シリーズ開発ボード、または他のESP32シリーズボードでも使用可能です。

:::note
現在、JSONデータストリームのみが出力可能であるため、JSONデータストリームを解析するプログラムのみが提供されています。

他のXIAOが常にサポートされるわけではありません。主に、JSONストリームを解析するには少なくとも70kのメモリが必要です。
:::

```cpp
#include <ArduinoJson.h>

long int count = 0;  // アラームの数

void setup() {
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, D7, D6);  // RX, TX
  while(!Serial);
  delay(100);

  Serial.println("デバイス準備完了。WatcherのJSONデータを待機中...");
}

void loop() {
  if (Serial1.available()) {
    // 解析されたJSONオブジェクトを格納するための十分なスペースを設定
    const size_t capacity = 1024 * 100 + 512; // 最低70k、保険として100k
    DynamicJsonDocument doc(capacity);

    // Serial1からのストリーミング解析
    DeserializationError error = deserializeJson(doc, Serial1);

    if (error) {
      Serial.print("deserializeJson() 失敗: ");
      Serial.println(error.c_str());
      return;
    }

    // 解析されたキーと値のペアを出力
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
      Serial.println("ボックス内の数値を取得できます。");
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
    
    // アプリで「Inculde base64 image」ボタンをオンにする必要があります（デフォルトはオフ）。
    // その後、以下のコードをコメント解除してください。
    /*
    if (doc.containsKey("big_image")) {
      Serial.print("big_image: ");
      String big_imageData = doc["big_image"].as<String>();
      // 例として画像データの最初の100文字のみを出力
      Serial.println(big_imageData.substring(0, 100) + "...");
    }
    */


    count++;
    if(count > 2147483646){  // オーバーフロー防止
      count = 0;
    }
    Serial.print("第 ");
    Serial.print(count);
    Serial.println(" 回目のアラームメッセージ受信完了。次のメッセージを待機中...");
    Serial.println("------------------------------------------------------------------");
  }
}
```

提供されたコードは、Arduino IDEとArduinoJsonライブラリを使用してWatcherからJSONデータを受信および解析する方法を示しています。以下はコードの簡単な説明です：

1. 必要なライブラリである **ArduinoJson** が含まれており、JSON の解析を処理します。このライブラリは Arduino のライブラリマネージャーで検索してインストールできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/bblanchon/ArduinoJson" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>GitHubへ移動 🖱️</font></span></strong>
    </a>
</div>

2. `setup()` 関数では、USB シリアル（デバッグ用）と UART シリアル（Watcher からデータを受信するため）の両方のシリアル通信が初期化されます。

3. `loop()` 関数では、UART シリアルに利用可能なデータがあるかどうかを確認します。

4. データが利用可能な場合、指定された容量で `DynamicJsonDocument` が作成され、解析された JSON オブジェクトを格納します。

5. JSON データは `deserializeJson()` 関数を使用して解析され、解析エラーが処理されます。

6. その後、コードは解析された JSON オブジェクト内に特定のキー（例: "prompt", "big_image", "small_image"）が存在するかどうかを確認します。

:::note
認識されたボックス（boxes）に関する情報の解析は現在利用できません。これは Watcher の対応する機能がまだ開発中であり、最新の v1.0.1 バージョンではこの情報が報告されていないためです。
:::

7. キーが見つかった場合、その対応する値がデバッグ目的で USB シリアルに出力されます。

8. また、コードは `count` 変数を使用して受信したアラームメッセージの数を追跡します。

9. 最後に、各アラームメッセージの受信完了を示すメッセージが出力され、次のメッセージを待機します。

### XIAO ESP32 シリーズへのコードのアップロード

XIAO ESP32 シリーズボードにコードをアップロードするには、以下の手順を実行してください：

1. USB ケーブルを使用して XIAO ESP32 シリーズボードをコンピュータに接続します。

2. Arduino IDE を開き、XIAO ESP32 シリーズ用の必要なボードサポートパッケージがインストールされていることを確認します。

   - **Seeed Studio XIAO ESP32C3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照して追加を完了してください。

   - **Seeed Studio XIAO ESP32S3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して追加を完了してください。

   - **Seeed Studio XIAO ESP32C6** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/)** を参照して追加を完了してください。

3. Arduino IDE のツールメニューから適切なボードとポートを選択します。

4. Arduino IDE で提供されたコードを開きます。

5. **アップロード** ボタンをクリックしてコードをコンパイルし、XIAO ESP32 シリーズボードにアップロードします。

### 期待される結果

コードが XIAO ESP32 シリーズボードにアップロードされ、実行されると、Watcher がターゲットアラームを識別した後、以下の動作が確認できます：

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/62.png" style={{width:800, height:'auto'}}/></div><br />

他の Arduino 開発ボードを使用することもできますが、十分なメモリがあることを確認してください。

## Raspberry Pi & Watcher

WatcherをRaspberry Piに接続し、Pythonスクリプトを使用してUARTデータを解析および分析するプロセスを探ります。

### 配線

このセクションでは、Raspberry Pi 5を例として説明します。必要に応じて、以下のリンクから注文することができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Raspberry Pi を購入 🖱️</font></span></strong>
    </a>
</div>

他のRaspberry Piシリーズを使用している場合でも、コードや使用方法のチュートリアルは基本的に同じです。

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/65.png" style={{width:800, height:'auto'}}/></div><br />

- WatcherのTXピンをRaspberry PiのRXピン（GPIO 15）に接続します。

- WatcherのRXピンをRaspberry PiのTXピン（GPIO 14）に接続します。

- WatcherのGNDピンをRaspberry PiのGNDピンに接続します。

### コードの説明

Pythonスクリプトを実行する前に、必要な依存関係をインストールしてください：

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

# シリアルポートの設定
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("Raspberry PiでシリアルJSONリーダーを開始します...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/68.png" style={{width:900, height:'auto'}}/></div><br />

:::note
1. 私のUARTインターフェースは`/dev/ttyAMA0`に対応しています。異なる場合は、自分で修正してください。

2. このスクリプトは、Raspberry Pi/WatcherのUARTが正常に動作しているかを確認するためのテストスクリプトです。
:::

2つ目のPythonスクリプトは、最初のスクリプトを基にしてJSON解析と画像データの保存機能を追加しています：

```python
import json
import serial  
import base64
from PIL import Image
import io

# シリアルポートの設定
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1)

# 画像カウンターの初期化
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
                        print("JSONデータを受信しました。処理中...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("JSONのデコードエラー")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"エラーが発生しました: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # グローバル変数の宣言

    # プロンプト情報の処理
    if "prompt" in data:  
        print(f"プロンプト: {data['prompt']}")
    
    # ボックス情報の処理
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"ボックス {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, スコア: {box['score']}, ターゲットクラスID: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"大きな画像を処理し、{filename}として保存しました。")
        big_image_counter += 1  # グローバル変数を更新

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"小さな画像を処理し、{filename}として保存しました。")  
        small_image_counter += 1  # グローバル変数を更新

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # PNGファイルとして保存
    return image

if __name__ == "__main__": 
    print("Raspberry PiでシリアルJSONリーダーを開始します...")
    read_json_from_serial()
```

:::note
現在、JSONデータストリームのみが出力可能であるため、JSONデータストリームを解析するプログラムのみが提供されています。
:::

このスクリプトは以下を行います：

- UARTからJSONデータをループで読み取ります。

- JSONデータをデコードし、`process_json_data`を呼び出して処理します。

- JSONからプロンプト情報と画像データを抽出します。

:::note
認識されたボックス（boxes）に関する情報の解析は現在利用できません。Watcherの対応する機能がまだ開発中であり、最新バージョンv1.0.1ではこの情報が報告されていません。
:::

- Base64でエンコードされた画像データをデコードし、`decode_and_save_image`を使用してPNGファイルとして保存します。

- 抽出した情報と保存された画像のファイル名を出力します。

### Raspberry Piでコードを実行する

1. Raspberry Pi上で新しいPythonファイルを作成します（例：watcher_uart.py）：

```
nano watcher_uart.py
```

2. 完全なPythonコードをファイルにコピー＆ペーストします。

3. Ctrl+Xを押し、次にYを押してEnterを押し、エディタを保存して終了します。

4. Pythonスクリプトを実行します：

```
python watcher_uart.py
```

### 期待される結果

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/69.png" style={{width:1000, height:'auto'}}/></div><br />

スクリプトを実行した後：

- Watcherから受信した解析済みJSONデータは、リアルタイムでターミナルに表示されます。

- 受信した大画像と小画像は、自動的にbig_image_x.pngおよびsmall_image_x.pngファイルとして保存されます。

以上です！これでWatcherをRaspberry Piに接続し、PythonでUARTデータを読み取り、JSONを解析し、送信された画像を保存する方法を学びました。さらに実験を行い、例えばRaspberry Piに接続された画面に受信データをリアルタイムで表示することなどを試してみてください。

## reComputer Jetson & Watch

WatcherをreComputer（NVIDIA Jetsonベースのデバイス）に接続し、Pythonスクリプトを使用してUARTデータを解析・分析するプロセスを探ります。

### 配線

このチュートリアルでは、開発者向けに適したJ401 reComputerキャリアボードを例として説明します。reComputerを購入したい場合は、以下のリンクから入手できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> reComputerを購入 🖱️</font></span></strong>
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

UARTでシリアルコンソールを使用しない場合は、シリアルコンソールを無効にする必要があります：

```
systemctl stop nvgetty
systemctl disable nvgetty
udevadm trigger
```

この時点でreComputerを再起動する必要がある場合があります。

reComputerのUARTインターフェースのデバイス名を確認します：

```
ls /dev/ttyTHS*
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/71.png" style={{width:700, height:'auto'}}/></div><br />

最初のPythonスクリプトは、UART経由でWatcherからJSONデータを読み取り、それを表示します：

```python
import serial

# シリアルポートの設定
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("reComputerでシリアルJSONリーダーを開始します...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/70.png" style={{width:1000, height:'auto'}}/></div><br />

:::note
1. 私のUARTインターフェースは`/dev/ttyTHS0`に対応しています。異なる場合は、自分で修正してください。

2. これは、reComputer/WatcherのUARTが正常に動作しているかどうかを確認するためのテストスクリプトです。
:::

2番目のPythonスクリプトは、最初のスクリプトを基にしてJSON解析と画像データの保存を追加します：

```python
import json
import serial  
import base64
from PIL import Image
import io

# シリアルポートの設定
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1)

# 画像カウンターの初期化
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
                        print("JSONデータを受信しました。処理中...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("JSONのデコードエラー")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"エラーが発生しました: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # グローバル変数の宣言

    # プロンプト情報の処理
    if "prompt" in data:  
        print(f"プロンプト: {data['prompt']}")
    
    # ボックス情報の処理
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"ボックス {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, score: {box['score']}, target_cls_id: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"大画像を処理し、{filename}として保存しました。")
        big_image_counter += 1  # グローバル変数の更新

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"小画像を処理し、{filename}として保存しました。")  
        small_image_counter += 1  # グローバル変数の更新

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # PNGファイルとして保存
    return image

if __name__ == "__main__": 
    print("reComputerでシリアルJSONリーダーを開始します...")
    read_json_from_serial()
```

:::note
現在、JSONデータストリームのみを出力できるため、JSONデータストリームを解析するプログラムのみが提供されています。
:::

このスクリプトは以下を行います：

- UARTからJSONデータをループで読み取る

- JSONデータをデコードし、`process_json_data`を呼び出して処理する

- JSONからプロンプト情報と画像データを抽出する

- Base64でエンコードされた画像データをデコードし、`decode_and_save_image`を使用してPNGファイルとして保存する

:::note
認識されたボックス（boxes）に関する情報の解析は現在利用できません。Watcherの対応する機能はまだ開発中であり、最新のv1.0.1バージョンではこの情報はまだ報告されていません。
:::

- 抽出された情報と保存された画像のファイル名を出力します

### reComputerへのコードのアップロード

reComputer上で新しいPythonファイルを作成します。例: `watcher_uart.py`:

```
nano watcher_uart.py
```

完全なPythonコードをファイルにコピー＆ペーストします。Ctrl+Xを押し、次にYを押してEnterを押すことで保存してエディタを終了します。Pythonスクリプトを実行します:

```
sudo python watcher_uart.py
```

### 期待される結果

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/72.png" style={{width:1000, height:'auto'}}/></div><br />

スクリプトを実行した後:

- Watcherから受信した解析済みのJSONデータがリアルタイムでターミナルに表示され、プロンプト情報が含まれます。

- 受信した大きな画像と小さな画像は自動的にbig_image_x.pngおよびsmall_image_x.pngファイルとして保存されます。

以上です！これでWatcherをreComputerに接続し、PythonでUARTデータを読み取り、JSONを解析し、送信された画像を保存する方法を学びました。さらに実験を行い、コードをreComputerプラットフォーム上の特定のユースケースに適応させてみてください。


## リソース

- [SenseCAP Watcherの使い方](https://wiki.seeedstudio.com/ja/getting_started_with_watcher/)

- [Watcherクイックスタートシリーズ1#: Watcherにタスクを割り当てる方法](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)

- [Watcherクイックスタートシリーズ2#: Watcherの外観とSenseCraftツール](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_look_tool)

- [Watcherクイックスタートシリーズ3#: センサーとしての使用 & Groveの利用](https://wiki.seeedstudio.com/ja/watcher_as_grove)

- [Watcherクイックスタートシリーズ4#: WatcherのAI機能をローカルで展開する](https://wiki.seeedstudio.com/ja/watcher_local_deploy)

- Watcherクイックスタートシリーズ5#: Watcher用のモデルをトレーニングする

- [Watcherクイックスタートシリーズ6#: Watcherの機能](https://wiki.seeedstudio.com/ja/what_does_watcher_do)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>