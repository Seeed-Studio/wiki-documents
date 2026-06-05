---
sidebar_position: 10
description: この記事では、SenseCraft AI のライブラリを XIAO 上で使用する方法について説明します。
title: XIAO_ESP32S3_Sense を AI センサーとして使用する
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/uart_connection.png
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-libraries-xiao
aliases:
  - /sensecraft_ai_output_libraries_xiao
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2025-09-05'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/sensecraft-ai-output-libraries-xiao/
---

# SenseCraft AI を使って XIAO ESP32S3 Sense を AI センサーとして使用する

この Wiki では、SenseCraft AI 上でモデルの出力を設定し、XIAO ESP32S3 Sense を AI センサーとして使用するための手順を順を追って説明します。ここでの手順に従うことで、XIAO ESP32S3 Sense をコンピュータに接続し、適切な出力方法を選択し、UART、I2C、SPI などのさまざまな通信プロトコルを使用してモデルデータを取得する方法を学ぶことができます。

## 事前準備

作業を進める前に、以下のものを用意してください。

- XIAO ESP32S3 Sense
- モデルデータを受信するための追加の XIAO ボード（例：XIAO ESP32C3）
- XIAO ESP32S3 Sense をコンピュータに接続するための USB-C データケーブル
- Arduino IDE と、インストール済みの [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main) ライブラリ

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ステップ 1. XIAO ESP32S3 Sense ワークスペースへアクセスし、デバイスを接続する

**[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`XIAO ESP32S3 Sense`** の順に進んで XIAO ESP32S3 Sense のワークスペースにアクセスするか、[ワークスペースへの直接リンク](https://sensecraft.seeed.cc/ai/device/local/32)を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/xiao_esp32s3_sense_workspace.png" style={{width:1000, height:'auto'}}/></div>

USB-C ケーブルを使用して、XIAO ESP32S3 Sense ボードをコンピュータに接続します。接続が完了したら、ワークスペースページ左上にある **Connect** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ 2. XIAO ESP32S3 Sense にモデルがロードされていることを確認する

次に進む前に、XIAO ESP32S3 Sense ボードに学習済みモデルがロードされていることを確認してください。まだモデルをロードしていない場合は、SenseCraft AI のドキュメントを参照して、デバイスにモデルを学習・デプロイする方法を確認してください。

- [XIAO ESP32S3 Sense 用モデルの使用](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_xiao/)

自分で学習させたモデルを使用したい場合は、次の 2 つの Wiki を参照してください。

- [トレーニングの種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [トレーニングの種類 - 物体検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ 3. 使用したい方式とプログラムを準備する

XIAO は UART、IIC、SPI を介してモデル結果を出力することをサポートしており、実際の状況に応じて結果の出力方法を選択できます。

### オプション 1. UART 通信

2 枚の XIAO ボードの TX ピンと RX ピンをそれぞれ接続します。AI センサー（すでにモデリング済み）の XIAO ESP32S3 Sense では、出力ピンは次のように定義されています。

- **TX: GPIO43**
- **RX: GPIO44**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/uart_connection.png" style={{width:1000, height:'auto'}}/></div>

GitHub から [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main) ライブラリをダウンロードし、Arduino 環境に追加します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

次のサンプルのコードを使用します。

:::note
ボーレートを 921600、データビット 8、パリティなし、ストップビット 1（8N1）に設定してください。
:::

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// Define two Serial devices mapped to the two internal UARTs
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

すべてが正しく動作していれば、以下のようにモデル結果の出力メッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/70.png" style={{width:1000, height:'auto'}}/></div>

### オプション 2. I2C 通信

2 枚の XIAO ボードの SDA ピンと SCL ピンをそれぞれ接続します。AI センサー（すでにモデリング済み）の XIAO ESP32S3 Sense では、出力ピンは次のように定義されています。

- **SDA: GPIO5**（プルアップ抵抗付き）
- **SCL: GPIO6**（プルアップ抵抗付き）
- I2C スレーブアドレスを `0x62` に設定

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/iic_connection.png" style={{width:1000, height:'auto'}}/></div>

GitHub から [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main) ライブラリをダウンロードし、Arduino 環境に追加します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

次のサンプルのコードを使用します：

:::note
I2C 通信には次のプロトコルを使用します：

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
    }
}
```

すべてが正常に動作すれば、以下のようにモデル結果の出力メッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/71.png" style={{width:1000, height:'auto'}}/></div>

### オプション 3. SPI 通信

1. 2 枚の XIAO ボードの次のピン同士を接続します。AI センサ（すでにモデリング済み）の XIAO ESP32S3 Sense では、出力ピンは次のように定義されています：

- **MOSI: GPIO9**（プルアップ抵抗付き）
- **MISO: GPIO8**
- **SCLK: GPIO7**（プルアップ抵抗付き）
- **CS: GPIO4**（プルアップ抵抗付き）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/spi_connection.png" style={{width:1000, height:'auto'}}/></div>

2. GitHub から [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main) ライブラリをダウンロードし、Arduino 環境に追加します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. 提供されているサンプルコードを SPI 通信を使用するように変更します。

:::note
SPI 通信には次のプロトコルを使用します：

- READ: バイト 0x10, 0x01, LEN &lt;&lt; 8, LEN & 0xff を送信
- WRITE: バイト 0x10, 0x02, LEN &lt;&lt; 8, LEN & 0xff を送信
- AVAIL（データの有無を確認）: バイト 0x10, 0x03 を送信
- RESET（バッファをクリア）: バイト 0x10, 0x06 を送信

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
    }
}
```

すべてが正常に動作すれば、以下のようにモデル結果の出力メッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/72.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4: コードをアップロードして実行する

選択した通信プロトコルに基づいて、Arduino IDE で適切なサンプルコードを開きます。コードを検証して受信側の XIAO ボードに書き込みます。Arduino IDE のシリアルモニタを開き、受信したモデルデータを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/73.png" style={{width:1000, height:'auto'}}/></div>

## まとめ

このステップバイステップガイドに従うことで、SenseCraft AI 上のモデル出力を正しく設定し、XIAO ESP32S3 Sense を AI センサーとして使用できるようになりました。これで、プロジェクトの要件に応じて UART、I2C、SPI などのさまざまな通信プロトコルを使用してモデルデータを取得できます。

提供されているサンプルコードを参照し、ご自身の具体的な構成や選択した通信プロトコルに応じて必要な変更を加えるようにしてください。

問題が発生した場合や、さらに質問がある場合は、Seeed Studio のドキュメントを参照するか、コミュニティフォーラムでサポートを受けてください。

XIAO ESP32S3 Sense と SenseCraft AI で、楽しいセンシングをお楽しみください！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
