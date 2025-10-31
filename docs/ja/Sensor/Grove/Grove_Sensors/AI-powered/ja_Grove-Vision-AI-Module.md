---
description: Grove - Vision AI モジュール
title: Grove Vision AI モジュール
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Vision-AI-Module
last_update:
  date: 05/15/2025
  author: Citric
---


<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

Grove Vision AI モジュールセンサーは、親指サイズのAIカメラであり、すでに人検出やその他のカスタマイズされたモデル用のMLアルゴリズムがインストールされたカスタマイズセンサーです。数分で簡単に展開および表示でき、超低消費電力モードで動作し、2つの信号伝送方法と複数のオンボードモジュールを提供します。これにより、AI対応カメラの入門に最適です。

このWikiでは、Grove Vision AI モジュールセンサーをSeeed Studio XIAO シリーズおよびArduinoに接続して、人やパンダを検出し、それをウェブサイトに表示する方法を紹介します。

### 仕様

<table class="tg">
<thead>
  <tr>
    <th class="tg-c3ow">パラメータ</th>
    <th class="tg-c3ow">説明</th>
    <th class="tg-c3ow">備考</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow" rowspan="3">コネクタ</td>
    <td class="tg-0pky">Grove (Arduino用Groveベース)</td>
    <td class="tg-0pky">5V充電およびデータ伝送</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>二列7ピンソケット (Seeed Duino XIAO)</span></td>
    <td class="tg-0pky">5V充電およびデータ伝送</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>USB Type-C</span></td>
    <td class="tg-0pky">5V充電およびファームウェア書き込み</td>
  </tr>
  <tr>
    <td class="tg-0pky">通信モード</td>
    <td class="tg-0pky">IIC</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">プロセッサ</td>
    <td class="tg-0pky">Himax HX6537-A</td>
    <td class="tg-0pky"><span>400Mhz DSP (超低消費電力)</span></td>
  </tr>
  <tr>
    <td class="tg-0pky">カメラセンサー</td>
    <td class="tg-0pky">OV2640チップ</td>
    <td class="tg-0pky">解像度 1600*1200</td>
  </tr>
  <tr>
    <td class="tg-0pky">マイク</td>
    <td class="tg-0pky">MSM261D3526H1CPMチップ</td>
    <td class="tg-0pky">-26dBFs感度</td>
  </tr>
  <tr>
    <td class="tg-0pky">加速度センサー</td>
    <td class="tg-0pky">STLSM6DS3TR-Cセンサー</td>
    <td class="tg-0pky">3D加速度計および3Dジャイロスコープ</td>
  </tr>
</tbody>
</table>

### 特徴

- **使いやすいAIカメラ**: カメラセンサーにエッジ機械学習アルゴリズムを適用し、物体検出に最適
- **プラグアンドプレイ**: 数分で完全な機能を実行し、表示するための手間いらず
- **超低消費電力**: 物体の動きを検出した際に起動し、省電力を実現
- **コンパクトなAI対応カメラセンサー**: デバイス自体は親指サイズで、視覚ベースでエッジインテリジェンスに適している
- **カスタマイズ可能なセンサーデザイン**: ユーザーが定義するカスタムMLモデルをサポート
- **2つの信号伝送をサポート**: Seeed Studio XIAO のエレガントな接続とArduino用Groveベースのシンプルな接続に対応
- **オンボードカメラセンサー**: OV2640チップを搭載し、1600*1200の解像度を提供
- **オンボードマイク**: MSM261D3526H1CPMチップを搭載し、-26dBFsの感度を提供
- **オンボード加速度センサー**: STLSM6DS3TR-Cセンサーを搭載し、3D加速度計および3Dジャイロスコープを検出
- **オンボード32MB SPI超低消費電力フラッシュ**
- **すべてのデータ出力に1本のケーブル**: Groveファミリーの簡素化された接続を表し、センサーとシングルボード間に1本のGroveケーブルのみが必要

## ハードウェア概要

製品の基本的なパラメータについて知りたいと思われるかもしれません。以下の表は、Grove Vision AI Module Sensor の特性とピン配置に関する情報を示しています。

| 特性                                    | 値       | 単位      |
| :-------:                              | :-------: | :-------: |
| 動作電圧                               |   5       |     V     |
| 通信速度                               | 115200    |           |
| I2C インターフェース                   | seeed studio XIAO & Arduino | - |
| 電源供給                               | デュアル7ピンコネクタ & Type-C | - |
| ダウンロード & ファームウェア書き込みインターフェース | Type-C | - |
| 寸法                                   | 40*20*13  | mm        |

### ピン配置概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout1.png" style={{width:800, height:'auto'}}/></div>

- 2 —— BL702
- 3 —— MIC MSM261D3526H1CPM
- 4 —— 6軸 LSM6DS3TR-C
- 5 —— SPI フラッシュ
- 9 —— USB Type-C
- 10 —— デュアル7ピンメスソケット
- 11 —— **リセットボタン**
- 12 —— **BOOTボタン**
- 13 —— **USERボタン**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout2.png" style={{width:800, height:'auto'}}/></div>

- 1 —— HX6537-A
- 6 —— カメラコネクタ
- 7 —— DC-DC チップ
- 8 —— Grove コネクタ
- 14 —— 電源ライト
- 15 —— 書き込みインジケータライト

## はじめに

このモジュールの基本的な機能を紹介し、その後、独自の機械学習モデルを構築するためのカスタマイズ方法を説明します。ただし、モジュールをプロジェクトに完全に適用する前に、モジュールを準備するためのいくつかのステップが必要です。

### 準備

**ハードウェア**

- Grove Vision AI Module Sensor
- **Windows ホスト**PC（Win10でテスト済み）
- Type-C ケーブル

### Arduino ライブラリ概要

:::tip
Arduino を初めて使用する場合は、[Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

ここで使用するコードは、分類方法や選択可能なモデル（カスタマイズモデルを含む）を提供します。ここでデフォルトとして選択されているのは、物体検出方法と事前学習済みモデルです。

*Seeed Studio は、今後さらに多くの方法とモデルを開発する予定ですので、ご期待ください。*

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### 機能

スケッチを開発する前に、ライブラリの利用可能な機能を確認しましょう。

1. `if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1))` - ここで分類方法とモデルを選択できます。

   `ALGO_OBJECT_DETECTION` を `ALGO_OBJECT_COUNT` または `ALGO_IMAGE_CLASSIFICATION` に変更できます。

   また、カスタマイズしたモデル（ファームウェア）をモジュールに書き込んだ場合、`MODEL_EXT_INDEX_1` を `MODEL_EXT_INDEX_2` または 3、4 に変更できます（命名したものに応じて）。

2. `object_detection_t data` - これは結果が出力される構造体データセットです。

   分類方法を変更した場合、`object_detection_t` を `image_classification_t` または `object_count_t` に対応して変更する必要があります。

3. `uint8_t len = ai.get_result_len()` - ここでの "len" は検出された人間の顔の数を意味します。

4. `object_detection_t data` - ここでのデータは **構造体** フォーマットを表し、タイプは事前定義された "object_detection_t" です。

   他の分類方法を選択した場合、`image_classification_t data` または `object_count_t data` に変更する必要があります。

5. `Serial.print(data.confidence)` - **構造体** フォーマットは直接出力に使用できないため、ヘッダーファイルで定義された特定のタイプを指す必要があります。

```cpp
typedef struct
{
    uint16_t x;
    uint16_t y;
    uint16_t w;
    uint16_t h;
    uint8_t confidence;
    uint8_t target;
} object_detection_t;
```

:::tip
ここで出力したい "confidence" は、カメラが物体を検出する際の「信頼度」を示します。
:::

### ライブラリのインストール

ZIP形式のライブラリをダウンロードしたら、Arduino IDE を開き、**スケッチ > ライブラリをインクルード > .ZIPライブラリを追加** をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **ライブラリがライブラリに追加されました** と表示されます。これでライブラリが正常にインストールされました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

### ライブラリのアップグレード

将来的に、より興味深い機能のために製品ライブラリを最適化およびアップグレードする予定です。上記のライブラリインストール方法に基づき、アップグレード方法を以下に紹介します。

ライブラリが最適化された際にはリンクを更新します。**コンピュータのフォルダ内の元のライブラリフォルダを削除**し、最新バージョンをダウンロードして解凍し、Arduino IDE のライブラリディレクトリに配置してください。（**...\Arduino\libraries. ....** は Arduino を設定したパスです）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" style={{width:600, height:'auto'}}/></div>

## Seeed Studio XIAO / Seeeduino / Arduinoの例

ライブラリのインストールとファームウェアの書き込みが完了したので、Seeed Studio XIAO nRF52840およびSeeeduino V4.2でGrove AIモジュールセンサーを使用していくつかの例を実行し、その動作を確認します。

**ステップ 1.** Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ 2.** 開発ボードモデルを選択し、Arduino IDEに追加します。

- **Seeeduino**を後の手順で使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を参照して追加を完了してください。

- **Seeed Studio XIAO SAMD21**を後の手順で使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を参照して追加を完了してください。

- **Seeed Studio XIAO RP2040**を後の手順で使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)を参照して追加を完了してください。

- **Seeed Studio XIAO nRF52840**を後の手順で使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照して追加を完了してください。

### デモ 1 Seeed Studio XIAO nRF52840 / Seeeduino / Arduinoによる人間検出

このデモでは、人間の顔を検出し、モジュールが検出した人数をSeeed Studio XIAO nRF52840 SenseおよびSeeeduino V4.2 (Arduino UNO)で確認します。同時に、Seeed Studioはモジュールが見ている内容を表示するための[ウェブサイト](https://vision-ai-demo.seeed.cn/)を提供しています。

#### 必要な材料

- **Seeed Studio XIAO BLE Senseの場合**

|    Seeed Studio XIAO nRF52840 Sense          | Grove AI Camera  |
|--------------|--------------|
| <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a></div> |

- **Seeeduino V4.2の場合**

| Seeeduino V4.2 | Base Shield | Grove AI Camera|
|--------------|-------------|-----------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" style={{width:210, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a></div> |

#### 操作手順

- **ステップ 3 (Seeed Studio XIAOの場合).** Type-Cケーブルを準備し、Seeed Studio XIAOシリーズボードに接続します。ピンごとにGrove AIモジュールに差し込み、もう1本のType-Cケーブルをモジュールに接続します。

  両方のType-CケーブルはPCに接続する必要があります。最終的に、モジュールのType-Cコネクタの向きはSeeed Studio XIAO SAMD21のType-Cコネクタと同じである必要があります。例えば：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI11.JPG" style={{width:600, height:'auto'}}/></div>

- **ステップ 3 (Arduinoの場合).** Groveケーブルを準備し、Arduinoボードに接続します。もう1本のType-Cケーブルをモジュールに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI13.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 4.** プログラムをアップロードします。

```c
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;
void setup()
{
  Wire.begin();
  Serial.begin(115200);

   Serial.println("開始");
  if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11)) // オブジェクト検出と事前学習モデル1
  {
    Serial.print("バージョン: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("アルゴリズム: ");
    Serial.println( ai.algo());
    Serial.print("モデル: ");
    Serial.println(ai.model());
    Serial.print("信頼度: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("アルゴリズム開始失敗。");
  }
}

void loop()
{
  if (state == 1)
  {
    uint32_t tick = millis();
    if (ai.invoke()) // 呼び出し開始
    {
      while (1) // 呼び出し終了を待つ
      {
        CMD_STATE_T ret = ai.state();
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }

     uint8_t len = ai.get_result_len(); // 検出された人数を受信
     if(len)
     {
       int time1 = millis() - tick;
       Serial.print("処理時間: ");
       Serial.println(time1);
       Serial.print("人数: ");
       Serial.println(len);
       object_detection_t data;       // データ取得

       for (int i = 0; i < len; i++)
       {
          Serial.println("結果: 検出済み");
          Serial.print("検出と計算中: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); // 結果取得

          Serial.print("信頼度:");
          Serial.print(data.confidence);
          Serial.println();
        }
     }
     else
     {
       Serial.println("識別なし");
     }
    }
    else
    {
      delay(1000);
      Serial.println("呼び出し失敗。");
    }
  }
  else
  {
    state == 0;
  }
}
```

シリアルモニターを開き、ボーレートを115200に設定すると、人検出の結果が継続的に表示されます。同時に、モジュールがキャプチャした画像も[ウェブサイト](https://vision-ai-demo.seeed.cn/)に表示されます。成功した出力は以下のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI12.png" style={{width:400, height:'auto'}}/></div>

[ウェブサイト](https://vision-ai-demo.seeed.cn/)の表示では、2つの顔がそれぞれ2つの番号で囲まれているのが確認できます。番号0はモジュールが検出した人の顔を示し、もう1つの番号は信頼度を示します。

:::note
すべてのブラウザがVision AIの結果表示をサポートしているわけではありません。以下の表で主要なブラウザごとのサポート状況を確認してください。

| Chrome | Edge | Firefox | Opera | Safari |
|--------|------|---------|-------|--------|
| サポート | サポート | 非サポート | サポート | 非サポート |
:::


## モデルについて

Seeed Studioは、事前にトレーニングされた人検出モデルを提供しており、今後さらに多くのモデルを提供する予定です。これらを直接使用することで、AIカメラを迅速に理解することができます。

Grove Vision AI用のファームウェアとモデルは以下の場所で見つけることができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> モデルをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### デフォルトファームウェア: 人検出モデル

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI20.png" style={{width:800, height:'auto'}}/></div>

### その他のモデル

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/2.png" style={{width:800, height:'auto'}}/></div>

私たちは、より便利なモデルを継続的にメンテナンスおよび更新しています。このリポジトリを定期的にチェックしてください。

:::tip
通常、モデルファイルは**UF2**形式であり、**pre_num**形式のサフィックスを持っています。
:::

### カスタムモデル

独自のモデルをカスタマイズしたい場合は、YOLOV5を使用した<a href="https://github.com/Seeed-Studio/yolov5-swift" target="_blank"><span>こちら</span></a>を参照してください。

または、[こちらのチュートリアル](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-Grove-Vision-AI/)を参照して、ニーズに合わせたモデルをトレーニングしてください。

## 新しいモデルの置き換え

トレーニングモデルはすべて ".uf2" ファイルとして表されており、これが必要な形式です。

:::tip
通常、モデルファイルは **UF2** 形式であり、ファイル名の末尾に **pre_num** の形式の接尾辞が付いています。
:::

- **ステップ 1**. モジュールを Type-C ケーブルでホスト PC に接続し、モジュールの BOOT ボタンを **ダブルクリック** します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

  "GROVEAI" ディスクがポップアップ表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **ステップ 2**. モデル `.uf2` ファイルを GROVEAI ディスクにコピーして、ファームウェアのフラッシュを完了してください。

モジュールの作業 LED が高速で点滅しているのが確認できます。これはプロセスが進行中であることを意味します。ディスクが消えると、ファームウェアの書き込みプロセスが完了したことを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI10.png" style={{width:600, height:'auto'}}/></div>

- **ステップ 3**. 使用しているモデルに応じてプログラムを修正してください。

提供されているデモでは、`setup()` 関数内で `ai.begin()` を呼び出してモデルを初期化しています。

```cpp
if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11))
```

`ai.begin()` には2つの引数があります。1つはモデルの種類、もう1つはモデル番号です。番号はモデルによって異なる場合があります。つまり、サンプルプログラムのモデル番号は **People Detected Model** にのみ適用されます。他のモデルを使用する場合、番号は `0x11` ではなくなります。

:::caution
デモを使用している際に "Algo begin failed." というエラーメッセージが表示された場合、まずモデル番号が間違っていないか確認してください。
:::

では、モデル番号をどのように決定するのでしょうか？R&D エンジニアが開発者向けに詳細な紹介文書を提供していますので、そちらをご覧ください。

- [プロトコル](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/Protocol.md)

しかし、長い記事を読みたくない場合は、リリースのモデル名の最後の数字に注目する簡単な方法があります。この数字が必要なモデル番号です。

例えば、モデル **pfld_meter_pre_5.uf2** の場合、最後の数字は **5** です。これを使用して

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)5)
```

または、16進数に書き換えて

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x05)
```

と記述できます。

## 例外処理

実際の使用中に予期しない状況に遭遇した場合や、誤った使用によって医療処置以外の結果が発生した場合は、以下の手順を参照してモジュールのトラブルシューティングと修復を試みてください。

### パート 1. BootLoader バージョンの確認

BootLoader バージョンを更新する必要があるかどうかを検出し、更新するかどうかを決定する必要があります。バージョン番号を確認する方法は以下の通りです。

Grove Vision AI を USB-C ポートを介してコンピュータに接続します。その後、Boot ボタンをダブルクリックすると、コンピュータに GROVEAI という名前の USB フラッシュドライブが表示されます。

このディスクドライブを開き、**INFO_UF2.TXT** ファイルを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/3.png" style={{width:1000, height:'auto'}}/></div>

図のように、最初の行に BootLoader バージョン番号が表示されます。2023年9月現在、最新の BootLoader バージョン番号は **v2.0.1** です。同じバージョン番号を確認した場合、原則として次のステップを実行する必要はありません。

### パート 2. BootLoader の更新

Grove Vision AI がコンピュータに認識されず、ポート番号が表示されない場合は、BootLoader を更新する必要があるかもしれません。

- **ステップ 1**. Windows PC に BootLoader `.bin` ファイルをダウンロードします。

以下のリンクから最新バージョンの BootLoader ファイルをダウンロードしてください。BootLoader の名前は通常 `tinyuf2-grove_vision_ai_vx.x.x.bin` です。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/tinyuf2-grove_vision_ai_v2.0.1.bin" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> BootLoader をダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

これは BL702 チップを制御するファームウェアであり、コンピュータと Himax チップ間の接続を構築します。最新バージョンの BootLoader では、Vision AI が Mac や Linux に認識されない問題が修正されています。

- **ステップ 2**. [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar) ソフトウェアをダウンロードして開き、**BL702/704/706** を選択し、**Finish** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **ステップ 3**. **View** をクリックし、まず **MCU** を選択します。その後 **Image file** に移動し、**Browse** をクリックして先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **ステップ 4**. PCに他のデバイスが接続されていないことを確認してください。その後、モジュールのBootボタンを押しながらPCに接続します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI05.png" style={{width:600, height:'auto'}}/></div>

  モジュールの背面で5Vライトと3.3V LEDライトが点灯しているのが確認できます。その後、Bootボタンを離します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI06.png" style={{width:600, height:'auto'}}/></div>

- **ステップ 5**. PC上のBLDevCubeソフトウェアに戻り、**Refresh**をクリックして適切なポートを選択します。その後、**Open UART**をクリックし、**Chip Erase**を**True**に設定してから、**Create&Program**をクリックします。プロセスが完了するのを待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

- **ステップ 6**. 最新のBootLoaderが使用されていることを確認するために、Vision AIのバージョン番号を再度確認することをお勧めします。

### パート 3. 工場出荷時のファームウェアを復元する

:::tip
最新バージョンのWindows 11でファームウェアをアップロードした際にデバイスが使用不能になった場合は、[BootLoaderの更新](#step-2-update-bootloader)セクションを参照する必要があります。
:::

- **ステップ 1**. ファームウェアを消去する

:::caution
このステップをスキップして直接Vision AIにファームウェアをコピーすることを試みることができます。それが成功すれば、元のファームウェアを消去する必要はありません。失敗した場合は、ファームウェアを消去する必要があります。
:::

お持ちのArduinoマザーボードを使用してください。Seeed Studio XIAOシリーズ、Wio Terminal、またはSeeeduinoを推奨します。Grove Vision AIをIICインターフェースを介してマザーボードに接続します。

Arduino IDEを開き、ファームウェアを消去するプログラムをアップロードします。

```c
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>
WEI wei(Wire);

void setup()
{
    Wire.begin();
    Serial.begin(115200);
    while (!Serial)
    {
        /* コード */
    }
    delay(1000);
    Serial.println("任意のキーを押して消去を開始");
}

void loop()
{
    if (Serial.available())
    {
        while (Serial.available())
        {
            Serial.read();
        }
        uint32_t id = wei.ID();
        Serial.print("ID: 0x");
        Serial.println(id, HEX);
        wei.enter_bootloader();
        Serial.println("消去中");
        wei.erase();
        Serial.println("消去完了");
    }
}
```

シリアルモニタを開き、ランダムな文字（例: "a"）を入力して送信をクリックします。すると消去操作が開始されます。以下のメッセージが表示された場合、ファームウェアの消去が成功したことを示します。次のステップに進むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI23.png" style={{width:800, height:'auto'}}/></div>

- **ステップ 2**. モジュールをType-CケーブルでホストPCに接続し、モジュールのBOOTボタンを**ダブルクリック**します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

「GROVEAI」というディスクがポップアップ表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **ステップ 3**. 工場出荷時のファームウェアをダウンロードする

以下のリンクから最新バージョンの工場出荷時ファームウェアをダウンロードしてください。工場出荷時ファームウェアの名前は通常、`grove_ai_without_crc_vxx.uf2`または`grove_ai_vxx.uf2`です。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ファームウェアをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
2023年9月時点での最新ファームウェアバージョンは**grove_ai_v02-00.uf2**です。
:::

- **ステップ 4**. 工場出荷時ファームウェアをフラッシュする

`grove_ai_without_crc_vxx.uf2`または`grove_ai_vxx.uf2`ファイルをGROVEAIディスクにコピーして、ファームウェアのフラッシュを完了します。

上記の3つのパートを順に判断して実行する必要があります。これらのステップを実行した後、再度操作を試みてください。それでも問題が解決しない場合は、技術サポートチームにお問い合わせください。

## トラブルシューティング

### Q1: 主な接続方法は何ですか？

- a. まずマイクロコントローラーとモジュールを接続します。
- b. 次にマイクロコントローラーをホストPCに接続します。
- c. 最後にモジュールをホストPCに接続します。

### Q2: なぜウェブサイトで画像が表示されないのですか？または検出が行われないのですか？

- a. モジュールが加熱されていますか？モジュールのみを接続すると加熱問題が発生し、一時的にモジュールが機能しなくなることがあります。
- b. 正しい方法で接続されていますか？

### Q3: Grove Vision AIが使用中に突然「Algo begin failed.」というエラーを表示するのはなぜですか？

提供されたデモでは、`setup()`関数内で`ai.begin()`を呼び出してモデルを初期化しています。

```cpp
if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11))
```

`ai.begin()`には2つの引数があります。1つ目はモデルの種類、2つ目はモデル番号です。モデル番号はモデルによって異なる場合があります。つまり、サンプルプログラムのモデル番号は**People Detected Model**にのみ適用されます。他のモデルを使用する場合、番号は`0x11`ではなくなります。

:::caution
デモを使用中に「Algo begin failed.」というエラーメッセージが表示された場合、まずモデル番号が間違っていないか確認してください。
:::

では、モデル番号をどのように確認するのでしょうか？弊社のR&Dエンジニアが開発者向けに詳細な紹介文書を提供しています。

- [プロトコル](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/Protocol.md)

しかし、長い記事を読みたくない場合、簡単な方法としては、リリース内のモデルの最後の数字に注目することです。この数字が必要なモデル番号です。

例えば、モデル **pfld_meter_pre_5.uf2**の場合、最後の数字は**5**です。つまりモデル番号は**5**です。以下のように直接使用できます。

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)5)
```

または、16進数に書き換えて

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x05)
```

とすることもできます。

## リソース
- **[PDF]** [回路図](https://files.seeedstudio.com/wiki/Grove_AI_Module/Grove_Vision_AI_NORF_v1.1.pdf)
- **[Zip]** [レイアウト図](https://files.seeedstudio.com/wiki/Grove_AI_Module/Grove_Vision_AI_NORF_v1.1.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>