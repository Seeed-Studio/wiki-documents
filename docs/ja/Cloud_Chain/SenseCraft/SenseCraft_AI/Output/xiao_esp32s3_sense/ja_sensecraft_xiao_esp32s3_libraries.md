---
description: この記事では、SenseCraft AIのライブラリをXIAOで使用する方法について説明します。
title: センサーとして
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/uart_connection.png
slug: /ja/sensecraft_ai_output_libraries_xiao
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCraft AIを使用してXIAO ESP32S3 SenseをAIセンサーとして利用する

このWikiでは、SenseCraft AIでモデルの出力を設定し、XIAO ESP32S3 SenseをAIセンサーとして使用する方法をステップバイステップで説明します。この手順に従うことで、XIAO ESP32S3 Senseをコンピュータに接続し、適切な出力方法を選択し、UART、I2C、SPIなどの異なる通信プロトコルを使用してモデルデータを取得する方法を学ぶことができます。

## 前提条件

以下のものを準備してください：

- XIAO ESP32S3 Sense
- モデルデータを受信するための追加のXIAOボード（例：XIAO ESP32C3）
- XIAO ESP32S3 Senseをコンピュータに接続するためのUSB-Cデータケーブル
- Arduino IDE（[Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main)ライブラリがインストールされていること）

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ステップ1. SenseCraft AI Vision Workspaceにアクセスし、XIAO ESP32S3 Senseを接続する

ウェブブラウザを開き、SenseCraft AI Vision Workspaceページにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックでアクセス 🖱️</font></span></strong>
    </a>
</div><br />

利用可能なデバイスからXIAO ESP32S3 Senseボードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

USB-Cケーブルを使用して、XIAO ESP32S3 Senseボードをコンピュータに接続します。接続後、SenseCraft AI Vision Workspaceページの左上にある**Connect**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ2. XIAO ESP32S3 Senseにモデルがロードされていることを確認する

次に進む前に、XIAO ESP32S3 Senseボードにトレーニング済みのモデルがロードされていることを確認してください。まだモデルをロードしていない場合は、SenseCraft AIのドキュメントを参照して、デバイスにモデルをトレーニングおよびデプロイする方法を確認してください。

- [XIAO ESP32S3 Senseでモデルを使用する](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_xiao/)

独自にトレーニングしたモデルを使用したい場合は、以下の2つのWikiを参照してください。

- [トレーニングの種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [トレーニングの種類 - オブジェクト検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ 3. 使用する方法とプログラムの準備

XIAO は、UART、IIC、または SPI を介してモデルの結果を出力することをサポートしています。実際の状況に応じて、結果を出力する方法を選択してください。

### オプション 1. UART 通信

2つの XIAO ボードの TX と RX ピンを接続します。AI センサー（すでにモデル化済み）の XIAO ESP32S3 Sense の出力ピンは以下のように定義されています：

- **TX: GPIO43**
- **RX: GPIO44**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/uart_connection.png" style={{width:1000, height:'auto'}}/></div>

GitHub から [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main) ライブラリをダウンロードし、Arduino 環境に追加してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下のサンプルコードを使用してください：

:::note
ボーレートを 921600、データビットを 8、パリティなし、ストップビットを 1 (8N1) に設定してください。
:::

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// 2つの内部UARTにマッピングされた2つのシリアルデバイスを定義
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
    Serial.begin(9600);
    AI.begin(&atSerial);
}

void loop()
{
    if (!AI.invoke(1,false,true))
    {
        Serial.println("invoke success");
        Serial.print("perf: prepocess=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", inference=");
        Serial.print(AI.perf().inference);
        Serial.print(", postpocess=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("Box[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", score=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }
        for (int i = 0; i < AI.classes().size(); i++)
        {
            Serial.print("Class[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", score=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("Point[");
            Serial.print(i);
            Serial.print("]: target=");
            Serial.print(AI.points()[i].target);
            Serial.print(", score=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
        for (int i = 0; i < AI.keypoints().size(); i++)
        {
            Serial.print("keypoint[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.keypoints()[i].box.target);
            Serial.print(", score=");
            Serial.print(AI.keypoints()[i].box.score);
            Serial.print(", box:[x=");
            Serial.print(AI.keypoints()[i].box.x);
            Serial.print(", y=");
            Serial.print(AI.keypoints()[i].box.y);
            Serial.print(", w=");
            Serial.print(AI.keypoints()[i].box.w);
            Serial.print(", h=");
            Serial.print(AI.keypoints()[i].box.h);
            Serial.print("], points:[");
            for (int j = 0; j < AI.keypoints()[i].points.size(); j++)
            {
                Serial.print("[");
                Serial.print(AI.keypoints()[i].points[j].x);
                Serial.print(",");
                Serial.print(AI.keypoints()[i].points[j].y);
                Serial.print("],");
            }
            Serial.println("]");
        }
        if(!AI.last_image().isEmpty())
        {
            Serial.print("Last image:");
            Serial.println(AI.last_image().c_str());
        }
    }
}
```

すべてが正常に動作すれば、以下のようにモデル結果の出力メッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/70.png" style={{width:1000, height:'auto'}}/></div>

### オプション 2. I2C 通信

2つの XIAO ボードの SDA と SCL ピンを接続します。AI センサー（すでにモデル化済み）の XIAO ESP32S3 Sense の出力ピンは以下のように定義されています：

- **SDA: GPIO5**（プルアップ抵抗付き）
- **SCL: GPIO6**（プルアップ抵抗付き）
- I2C スレーブアドレスは `0x62`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/iic_connection.png" style={{width:1000, height:'auto'}}/></div>

GitHub から [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main) ライブラリをダウンロードし、Arduino 環境に追加してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下の例のコードを使用してください：

:::note
I2C通信には以下のプロトコルを使用してください：
- READ: バイト 0x10, 0x01, LEN &lt;&lt; 8, LEN &amp; 0xff を送信
- WRITE: バイト 0x10, 0x02, LEN &lt;&lt; 8, LEN &amp; 0xff を送信
- AVAIL（データの有無を確認）: バイト 0x10, 0x03 を送信
- RESET（バッファをクリア）: バイト 0x10, 0x06 を送信
:::

```cpp
#include <Seeed_Arduino_SSCMA.h>
#include <Wire.h>

SSCMA AI;

void setup()
{
    Wire.begin();
    AI.begin(&Wire);
    Serial.begin(9600);
}

void loop()
{
    if (!AI.invoke())
    {
        Serial.println("呼び出し成功");
        Serial.print("パフォーマンス: 前処理=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", 推論=");
        Serial.print(AI.perf().inference);
        Serial.print(", 後処理=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("ボックス[");
            Serial.print(i);
            Serial.print("] ターゲット=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", スコア=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }
        for (int i = 0; i < AI.classes().size(); i++)
        {
            Serial.print("クラス[");
            Serial.print(i);
            Serial.print("] ターゲット=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", スコア=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("ポイント[");
            Serial.print(i);
            Serial.print("]: ターゲット=");
            Serial.print(AI.points()[i].target);
            Serial.print(", スコア=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
        for (int i = 0; i < AI.keypoints().size(); i++)
        {
            Serial.print("キーポイント[");
            Serial.print(i);
            Serial.print("] ターゲット=");
            Serial.print(AI.keypoints()[i].box.target);
            Serial.print(", スコア=");
            Serial.print(AI.keypoints()[i].box.score);
            Serial.print(", ボックス:[x=");
            Serial.print(AI.keypoints()[i].box.x);
            Serial.print(", y=");
            Serial.print(AI.keypoints()[i].box.y);
            Serial.print(", w=");
            Serial.print(AI.keypoints()[i].box.w);
            Serial.print(", h=");
            Serial.print(AI.keypoints()[i].box.h);
            Serial.print("], ポイント:[");
            for (int j = 0; j < AI.keypoints()[i].points.size(); j++)
            {
                Serial.print("[");
                Serial.print(AI.keypoints()[i].points[j].x);
                Serial.print(",");
                Serial.print(AI.keypoints()[i].points[j].y);
                Serial.print("],");
            }
            Serial.println("]");
        }
    }
}
```

すべてが正常に動作すれば、以下のようにモデル結果の出力メッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/71.png" style={{width:1000, height:'auto'}}/></div>

### オプション 3. SPI通信

1. 2つのXIAOボードの以下のピンを接続します。AIセンサー（すでにモデル化済み）のXIAO ESP32S3 Senseでは、出力ピンは以下のように定義されています：

- **MOSI: GPIO9**（プルアップ抵抗付き）
- **MISO: GPIO8**
- **SCLK: GPIO7**（プルアップ抵抗付き）
- **CS: GPIO4**（プルアップ抵抗付き）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/spi_connection.png" style={{width:1000, height:'auto'}}/></div>

2. GitHubから[Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main)ライブラリをダウンロードし、Arduino環境に追加します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. 提供された例のコードを修正して、SPI通信を使用するようにします。

:::note
SPI通信には以下のプロトコルを使用してください：
- READ: バイト 0x10, 0x01, LEN &lt;&lt; 8, LEN &amp; 0xff を送信
- WRITE: バイト 0x10, 0x02, LEN &lt;&lt; 8, LEN &amp; 0xff を送信
- AVAIL (データの有無を確認): バイト 0x10, 0x03 を送信
- RESET (バッファをクリア): バイト 0x10, 0x06 を送信
:::

```cpp
#include <Seeed_Arduino_SSCMA.h>
#include <SPI.h>

SSCMA AI;

void setup()
{
    SPI.begin(SCK, MISO, MOSI, -1);
    AI.begin(&SPI, D3, -1, -1);
    Serial.begin(9600);
}

void loop()
{
    if (!AI.invoke())
    {
        Serial.println("呼び出し成功");
        Serial.print("パフォーマンス: 前処理=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", 推論=");
        Serial.print(AI.perf().inference);
        Serial.print(", 後処理=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("ボックス[");
            Serial.print(i);
            Serial.print("] ターゲット=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", スコア=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", 幅=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", 高さ=");
            Serial.println(AI.boxes()[i].h);
        }
        for (int i = 0; i < AI.classes().size(); i++)
        {
            Serial.print("クラス[");
            Serial.print(i);
            Serial.print("] ターゲット=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", スコア=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("ポイント[");
            Serial.print(i);
            Serial.print("]: ターゲット=");
            Serial.print(AI.points()[i].target);
            Serial.print(", スコア=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
        for (int i = 0; i < AI.keypoints().size(); i++)
        {
            Serial.print("キーポイント[");
            Serial.print(i);
            Serial.print("] ターゲット=");
            Serial.print(AI.keypoints()[i].box.target);
            Serial.print(", スコア=");
            Serial.print(AI.keypoints()[i].box.score);
            Serial.print(", ボックス:[x=");
            Serial.print(AI.keypoints()[i].box.x);
            Serial.print(", y=");
            Serial.print(AI.keypoints()[i].box.y);
            Serial.print(", 幅=");
            Serial.print(AI.keypoints()[i].box.w);
            Serial.print(", 高さ=");
            Serial.print(AI.keypoints()[i].box.h);
            Serial.print("], ポイント:[");
            for (int j = 0; j < AI.keypoints()[i].points.size(); j++)
            {
                Serial.print("[");
                Serial.print(AI.keypoints()[i].points[j].x);
                Serial.print(",");
                Serial.print(AI.keypoints()[i].points[j].y);
                Serial.print("],");
            }
            Serial.println("]");
        }
    }
}
```

すべてが正常に動作すれば、以下のようにモデル結果の出力メッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/72.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4: コードをアップロードして実行

選択した通信プロトコルに基づいて、Arduino IDEで適切なサンプルコードを開きます。コードを確認し、受信側のXIAOボードにアップロードしてください。Arduino IDEのシリアルモニターを開き、受信したモデルデータを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/73.png" style={{width:1000, height:'auto'}}/></div>

## 結論

このステップバイステップガイドに従うことで、SenseCraft AI上でモデルの出力を設定し、XIAO ESP32S3 SenseをAIセンサーとして使用することに成功しました。プロジェクトの要件に応じて、UART、I2C、SPIなどの異なる通信プロトコルを使用してモデルデータを取得できるようになりました。

提供されたサンプルコードを参照し、特定のセットアップや通信プロトコルの選択に基づいて必要な変更を加えることを忘れないでください。

もし問題が発生したり、さらに質問がある場合は、Seeed Studioのドキュメントを参照するか、コミュニティフォーラムでサポートを求めてください。

XIAO ESP32S3 SenseとSenseCraft AIでのセンシングをお楽しみください！

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>