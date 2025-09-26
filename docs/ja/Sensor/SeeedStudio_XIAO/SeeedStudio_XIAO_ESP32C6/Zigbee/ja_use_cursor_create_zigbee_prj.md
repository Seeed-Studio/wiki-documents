---
description: XIAO ESP32C6とセンサーを使用してZigbeeアプリケーションを開発するためのCursorのAI搭載チャットの使用方法を学ぶ
title: CursorでXIAO ESP32C6を使ったZigbeeプロジェクトを作成する
image: https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.webp
slug: /ja/use_cursor_create_zigbee_prj
last_update:
  date: 03/04/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CursorでXIAO ESP32C6を使ったZigbeeプロジェクトを作成する

このガイドでは、CursorのAI搭載チャットを使用してXIAO ESP32C6とセンサーでZigbeeアプリケーションを開発する方法を説明します。このチュートリアルの終わりまでに、CursorのChatを使用してXIAOボードとセンサーでZigbeeアプリケーションを独立して開発できるようになります。

## Cursorとは？

CursorはVisual Studio Codeをベースに構築されたAI搭載のコードエディターです。コードの記述、理解、デバッグをより効率的に行うのに役立つ強力なAI機能を統合しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor.png" style={{width:600, height:'auto'}}/></div>

### 組み込み開発でCursorを使用する理由

Cursorは組み込みソフトウェア開発において以下のような利点を提供します：

1. **コード生成**: Cursorは要件に基づいてコードを生成し、時間と労力を節約できます。
2. **コンテキスト対応アシスタンス**: Cursorはプロジェクト構造を理解し、関連する提案を提供できます。
3. **デバッグサポート**: Cursorはコード内のバグの特定と修正を支援できます。
4. **学習ツール**: 初心者にとって、Cursorは複雑な概念を説明し、教育的な洞察を提供できます。
5. **効率性**: Cursorは大規模なコードベースのナビゲーションと、馴染みのないライブラリの迅速な理解を支援できます。

XIAO ESP32C6のような組み込みシステムでは、Cursorはハードウェア固有のAPIの理解、センサーとの相互作用のためのボイラープレートコードの生成、ハードウェア・ソフトウェア統合の問題のトラブルシューティングを支援できます。

## 必要な材料

このチュートリアルには以下が必要です：

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C6</th>
   <th>Grove DHT11温湿度センサー</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- Groveケーブル
- USB-Cケーブル
- Arduino IDEがインストールされたコンピュータ
- Cursorアプリケーション（次のセクションでインストールします）

:::tip
このチュートリアルでは、DHT11温湿度センサーを例として使用します。他のセンサーをお持ちの場合は、それらでも自由に実験してください。最良の体験のために、[ESP Zigbee SDK](https://github.com/espressif/esp-zigbee-sdk)で現在サポートされているセンサータイプの使用をお勧めします。これにより、Zigbeeプロジェクトを構築する際の互換性と円滑な実装が保証されます。
:::

## Cursorのインストール

お使いのオペレーティングシステムにCursorをインストールするには、以下の手順に従ってください：

<Tabs>
<TabItem value="Windows" label="Windows" default>

1. [Cursorダウンロードページ](https://cursor.sh/)にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/windows_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. 「Windows」をクリックします。
3. ダウンロードしたインストーラーを実行します。
4. 画面の指示に従ってインストールを完了します。

</TabItem>
<TabItem value="MACOS" label="MACOS">

1. [Cursorダウンロードページ](https://cursor.sh/)にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/mac_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. 「MacOS」をクリックします。
3. ダウンロードした.dmgファイルを開きます。
4. CursorアプリをApplicationsフォルダにドラッグします。
5. ApplicationsフォルダからCursorを開きます。

</TabItem>
</Tabs>

## Cursorサブスクリプション

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor_price.png" style={{width:1000, height:'auto'}}/></div>

Cursorは、さまざまなユーザーニーズに対応するため、異なるサブスクリプション階層を提供しています：

**無料Hobbyプラン**

CursorはHobbyプランで無料でダウンロードして使用でき、以下が含まれます：

- 2000回の補完
- 50回のスロープレミアムリクエスト
- Pro機能の2週間トライアル

この無料階層は、開始してCursorの機能を探索するのに十分です。

**有料プラン**

より高度な機能と高い使用制限については、Cursorは有料サブスクリプションオプションを提供しています：

**Proプラン（月額$20）**

- 無制限の補完
- 月500回の高速プレミアムリクエスト
- 無制限のスロープレミアムリクエスト

**Businessプラン（ユーザーあたり月額$40）**

- すべてのPro機能
- 組織全体でのプライバシーモード強制
- 一元化されたチーム請求
- 使用統計付き管理ダッシュボード
- SAML/OIDC SSO

完全な価格詳細は[Cursor価格ページ](https://www.cursor.com/pricing)で確認できます。

どのプランを使用しても、Cursorで生成されたすべてのコードはあなたに帰属し、商用目的を含めて自由に使用できることが重要です。

## Cursorのセットアップ

Cursorをインストールした後、以下の手順でセットアップしてください：

1. Cursorを起動します
2. アカウントでサインインするか、新しいアカウントを作成します
3. チャットパネルにアクセスできることを確認します（通常はインターフェースの右側にあります）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/1.png" style={{width:1000, height:'auto'}}/></div>

## Zigbeeサンプルを開く

プロジェクトのコード生成にCursorを使用する際、サンプルコードを提供することで生成されるプロジェクトの精度を大幅に向上させることができます。サンプルはCursorの参照ポイントとして機能し、プロジェクトの構造、構文、および特定の要件を理解できるようにします。これらのサンプルを分析することで、Cursorはより正確で関連性の高いコードを生成し、あなたのニーズに合わせてカスタマイズできます。

私たちのZigbeeプロジェクトの文脈では、適切なサンプルを見つけることでCursorが以下を行えるようになります：

- 必要な特定の機能を理解する
- 使用する適切なライブラリと関数を特定する
- 使用しているハードウェアとインターフェースと互換性のあるコードを生成する

関連するサンプルを提供することで、生成されるコードがより正確に動作し、プロジェクトの要件を満たす可能性が高くなり、デバッグと修正にかかる時間と労力を節約できます。

それでは、ESP32 Arduinoパッケージによって提供されるZigbeeサンプルを見つけて開いてみましょう：

1. まず、Arduino IDEに**最新のESP32ボードパッケージ**がインストールされていることを確認してください：

- Arduino IDEを開く
- **ツール > ボード > ボードマネージャー**に移動
- **esp32**を検索
- **Espressif SystemsによるESP32**を見つける
- **インストール**または**更新**をクリックして最新バージョンを取得
- インストールが完了するまで待つ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/3.png" style={{width:1000, height:'auto'}}/></div>

2. Zigbeeサンプルディレクトリに移動：

以下のパスはESP32ボードパッケージバージョン3.1.3を例として使用しています。異なる場合は、`3.1.3`をインストールされているバージョン番号に置き換えてください：

- Windowsの場合：

```
C:\Users\[YourUsername]\AppData\Local\Arduino15\packages\esp32\hardware\esp32\3.1.3\libraries\Zigbee\
```

- macOSの場合：

```
/Users/[YourUsername]/Library/Arduino15/packages/esp32/hardware/esp32/3.1.3/libraries/Zigbee/
```

3. Cursorを開き、ファイルメニューから**Open Folder**を選択します。

4. ステップ2のZigbeeディレクトリパスに移動し、**Open**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/4.png" style={{width:1000, height:'auto'}}/></div>

## 適切なサンプルの選択

CursorのChatを使用してコードを生成する前に、出発点として使用する最も適切なサンプルを特定する必要があります：

### デバイスタイプの決定

Zigbeeデバイスは一般的に2つの主要なカテゴリに分類され、これを理解することは適切なサンプルコードを選択するために重要です：

1. **センサー**：
   - センサーは環境を「感知」してデータを収集するデバイスです
   - 現実世界の物理的情報を電子信号に変換します
   - センサーはデータを「読み取り」、それをネットワークに送信するだけです

   - **例**：
     - 温度センサー：周囲の温度を測定
     - 湿度センサー：空気中の湿度レベルを測定
     - 光センサー：周囲光の強度を検出
     - モーションセンサー：近くで物体が動いているかを検出
     - ガスセンサー：特定のガスの濃度を検出

2. **アクチュエーター**：
   - アクチュエーターは「動作を実行する」デバイスです
   - コマンドを受信して物理世界に影響を与えます
   - アクチュエーターは何かの状態を「変更する」責任があります

   - **例**：
     - ライトスイッチ：ライトのオン/オフを切り替え
     - モーターコントローラー：モーターの回転を制御
     - リレー：高電力電気デバイスを制御
     - バルブコントローラー：水や空気の流れを制御
     - ドアロック：ドアの施錠/解錠

**デバイスタイプの判定方法**：

- デバイスが主にデータを収集する（情報を読み取る）場合、それはセンサーです
- デバイスが主に動作を実行する（状態を変更する）場合、それはアクチュエーターです
- 一部のデバイスは両方の機能を持つ場合がありますが、その場合は主要な機能に基づいて選択してください

この例では、DHT11は温度と湿度データを読み取りますが環境を変更しないため、典型的なセンサーです。

### インターフェースタイプの特定

次に、センサーが使用するインターフェースタイプを決定します：

- **GPIO**：シンプルなデジタルまたはアナログピン
- **I2C**：通信用の2線式インターフェース
- **SPI**：シリアルペリフェラルインターフェース
- **UART**：シリアル通信

DHT11は単一のデータラインを持つシンプルなGPIOインターフェースを使用します。

### Zigbeeデバイスサポートの確認

進める前に、意図するデバイスタイプがESP Zigbee SDKでサポートされているかを確認することが重要です。サポートされているデバイスタイプは以下で確認できます：

- [ESP Zigbee Device Types](https://github.com/espressif/esp-zigbee-sdk/blob/main/components/esp-zigbee-lib/include/esp_zigbee_type.h)

このヘッダーファイルには、ESPのZigbee実装で現在サポートされているすべてのデバイスタイプが含まれています。このファイルを確認して：

1. デバイスタイプがサポートされていることを確認
2. 必要な特定のデバイスIDとクラスターIDを記録
3. デバイスタイプで利用可能な機能を理解

デバイスタイプがリストにない場合、以下が必要になる場合があります：

- ニーズに合致する類似のサポートされているデバイスタイプを選択
- カスタムデバイスタイプの実装を検討（上級者向け）
- ガイダンスについてESPサポートに連絡

### 最も近いサンプルの検索

Zigbeeライブラリのサンプルを参照し、ニーズに最も近いものを見つけます。DHT11センサーの場合、以下のようなサンプルを探します：

- `ZigbeeTemperatureSensor`
- `ZigbeeHumiditySensor`
- GPIOセンサーからの読み取りを実演する任意のサンプル

幸い、ESPはZigbeeサンプルに「Zigbee_Temp_Hum_Sensor_Sleepy」サンプルを提供しており、これは温度・湿度センサープロジェクトの作成ニーズに完璧に合致します。このサンプルは以下を実演します：

- 温度・湿度センサーデバイスの実装方法
- 電力節約のためのスリーピーエンドデバイスとしてのデバイス設定
- センサー読み取り値の定期的な報告
- Zigbeeネットワーキングとデータ送信の処理

このサンプルは以下の場所にあります：
`zigbee/example/Zigbee_Temp_Hum_Sensor_Sleepy`

このサンプルは、DHT11ベースのZigbeeセンサープロジェクトの優れた出発点として機能します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/5.png" style={{width:1000, height:'auto'}}/></div>

## ピン接続の決定

XIAO ESP32C6 と DHT11 センサーの場合、使用するピンを決定する必要があります：

1. DHT11 センサーには単一のデータピンが必要です。

2. XIAO ESP32C6 のピン D0（GPIO1）に接続します。

:::tip
XIAO の例では、GPIO（デジタル/アナログ）と SPI プロトコルデバイスのみが手動でのピン設定を必要とします。I2C と UART デバイスの場合、ピン定義は XIAO のボードパッケージで事前に設定されているため、この手順をスキップできます。
:::

## 技術文書の収集

センサーの技術文書を入手することは非常に重要です。Seeed の製品を使用している場合、**[Seeed Studio 公式 Wiki](https://wiki.seeedstudio.com/ja/)** でセンサーやアクチュエーターの詳細な文書とリソースを見つけることができます。Wiki のリソースセクションには、Cursor に提供できる Grove 製品のデータシートも含まれています。例えば、このプロジェクトで使用する DHT11 センサーの場合：

- [Grove DHT11 Wiki ページ](https://wiki.seeedstudio.com/ja/Grove-TemperatureAndHumidity_Sensor/)

他のメーカーのセンサーを使用している場合は、必要な技術文書を入手するために直接メーカーに連絡してください。

## Cursor のチャットを使用したコード生成

必要な情報がすべて揃ったので、Cursor のチャットを使用して Zigbee アプリケーションコードを生成できます。

ここで、Cursor のチャット用のプロンプトを作成する必要があります。

### センサープロジェクトテンプレート

私のようにセンサーをデバイスとして使用することを選択した場合、以下のプロンプトを参考にできます。

```
Please refer to the code and then create an Arduino sensor project with ESP32-C6 using Zigbee protocol.

Project name: [project name]

Sensor details:
- Type: [sensor model]
- Connections: [pin connections]

Sensing specifications:
- Parameters to measure: [measurement values]
- Transmission frequency: [sending interval]

Reference materials:
- Documentation: [documentation links]

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

DHT11センサーを使用したプロジェクトのプロンプトテンプレートの記入方法と例を詳しく説明しましょう：

1. **プロジェクト名**: プロジェクトの内容を表す分かりやすい名前を選択
2. **センサー詳細**:
   - タイプ: 正確なセンサーモデルを指定
   - 接続: センサーとXIAO ESP32C6間のすべてのピン接続をリスト化
3. **センシング仕様**:
   - パラメータ: 測定したい項目をリスト化（温度、湿度など）
   - 送信頻度: データ送信の間隔（例：5秒ごと）
4. **参考資料**: データシートやドキュメントのリンクを含める

以下は、DHT11温湿度センサープロジェクトの完成したプロンプト例です：

```
Please refer to the code and then create an Arduino sensor project with ESP32-C6 using Zigbee protocol.

Project name: Zigbee_DHT11_XIAO

Sensor details:
- Type: DHT11 Temperature and Humidity Sensor
- Connections: DHT11 data pin connected to D2 of XIAO ESP32C6

Sensing specifications:
- Parameters to measure: Temperature (°C) and Relative Humidity (%)
- Transmission frequency: Every 1 hour

Reference materials:
- Documentation: 
  - DHT11 Sensor: https://wiki.seeedstudio.com/Grove-TemperatureAndHumidity_Sensor/
  - XIAO ESP32C6: https://wiki.seeedstudio.com/xiao_pin_multiplexing_esp33c6/

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

### アクチュエータプロジェクトテンプレート

アクチュエータを使用したい場合は、以下のプロンプトテンプレートを使用できます。アクチュエータプロジェクト用のプロンプトの構造を見てみましょう：

```
Please refer to the code and then create an Arduino actuator project with ESP32-C6 using Zigbee protocol.

Project name: [project name]

Actuator details:
- Type: [actuator model]
- Connections: [pin connections]

Control specifications:
- Default behavior: [startup state]

Reference materials:
- Documentation: [documentation links]

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

:::tip
Cursorで最初のプロジェクトを構築する際は、複雑なロジックや要件ではなく、シンプルで基本的な機能から始めることをお勧めします。このアプローチにより、Cursorが間違ったコードを生成する可能性を大幅に減らすことができます。まず、Cursorに正常に動作することを確認できる基本的なプログラムを作成させます。しっかりとした基盤ができたら、徐々に機能や複雑さを追加してプロジェクトを強化できます。この反復的なアプローチにより、より信頼性が高く保守しやすいコードが生まれます。
:::

プロジェクトに関するすべての具体的な詳細を含むプロンプトを準備した後、以下の手順に従ってください：

1. CursorのChatパネルを開きます（通常はサイドバーのチャットアイコンをクリック）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/6.png" style={{width:1000, height:'auto'}}/></div>

2. プロジェクト要件に最も近いサンプルコードを見つけます。DHT11温湿度センサープロジェクトの場合、「Zigbee_Temp_Hum_Sensor_Sleepy」サンプルを使用します。

3. ZigbeeサンプルディレクトリからサンプルコードファイルをCursor Chatウィンドウにドラッグ＆ドロップします。これにより、CursorがZigbeeセンサー実装の構造と要件を理解できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/7.png" style={{width:1000, height:'auto'}}/></div>

4. 事前に作成したプロンプトをチャット入力フィールドにコピー＆ペーストし、Enterキーを押します。Cursorがプロンプトとサンプルコードに基づいてプロジェクトを生成するまで待ちます。

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/9.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

5. **Accept**ボタンをクリックして生成されたコードを保存します。これにより、ワークスペースにプロジェクトファイルが作成されます。

## 生成されたコードの確認

Cursorがコードを生成した後、デバイスにアップロードする前に慎重に確認することが重要です。確認すべき主要な点は以下の通りです：

1. ピン設定

- すべてのピン割り当てが物理的な接続と一致することを確認
- 指定されたピンがXIAO ESP32C6で実際に利用可能であることを確認
- ピンの競合がないことを確認（例：同じピンが複数の目的で使用されている）
- ピンが必要な機能（アナログ、デジタル、I2C等）をサポートしていることを確認

2. 機能チェック

生成されたコードを要件と比較します：

- 要求されたすべての機能を実装しているか？

例えば、提供されたプログラム内では、ピンがGPIO番号で定義されており、これはwikiを読んでからXIAOのA/D番号が正しいGPIO番号と一致することを確認する必要があり、より煩雑になる可能性があります。これに対して、CursorにA/Dと同じ方法でピンを使用するよう依頼できます。

<details>

<summary>完全なコードをプレビューするにはここをクリック</summary>

```cpp
/**
 * @brief DHT11 Temperature and Humidity Sensor with Zigbee for XIAO ESP32C6
 * 
 * This example demonstrates how to create a Zigbee end device that measures temperature
 * and humidity using a DHT11 sensor and reports the data every hour.
 * 
 * Hardware Requirements:
 * - XIAO ESP32C6 board
 * - DHT11 Temperature and Humidity Sensor
 * 
 * Connections:
 * - DHT11 Data Pin -> D2 (GPIO8) of XIAO ESP32C6
 * - DHT11 VCC -> 3.3V
 * - DHT11 GND -> GND
 * 
 * The device operates as a Zigbee end device and goes into deep sleep between measurements
 * to conserve power.
 */

#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"
#include "DHT.h"

/* Pin Definitions */
#define DHT_PIN 8  // D2 on XIAO ESP32C6
#define BOOT_BUTTON 9  // Boot button on XIAO ESP32C6

/* DHT11 Sensor Configuration */
#define DHT_TYPE DHT11
DHT dht(DHT_PIN, DHT_TYPE);

/* Zigbee Configuration */
#define TEMP_SENSOR_ENDPOINT_NUMBER 10

/* Sleep Configuration */
#define uS_TO_S_FACTOR 1000000ULL  // Conversion factor for micro seconds to seconds
#define TIME_TO_SLEEP  3600        // Sleep for 1 hour (3600 seconds)

/* Global Variables */
ZigbeeTempSensor zbTempSensor = ZigbeeTempSensor(TEMP_SENSOR_ENDPOINT_NUMBER);

/************************ Sensor Functions *****************************/
void measureAndSleep() {
  // Read temperature and humidity from DHT11
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // Check if readings are valid
  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT11 sensor!");
    delay(1000);
    return;
  }

  // Update temperature and humidity values in Temperature sensor EP
  zbTempSensor.setTemperature(temperature);
  zbTempSensor.setHumidity(humidity);

  // Report temperature and humidity values
  zbTempSensor.report();
  Serial.printf("Reported temperature: %.2f°C, Humidity: %.2f%%\r\n", temperature, humidity);

  // Add small delay to allow the data to be sent before going to sleep
  delay(100);

  // Put device to deep sleep
  // Serial.println("Going to sleep for 1 hour");
  // esp_deep_sleep_start();
}

/********************* Arduino Setup **************************/
void setup() {
  Serial.begin(115200);
  
  // Initialize DHT11 sensor
  dht.begin();

  // Init button switch
  pinMode(BOOT_BUTTON, INPUT_PULLUP);

  // Configure the wake up source
  // esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);

  // Set Zigbee device information
  zbTempSensor.setManufacturerAndModel("Seeed", "XIAO_DHT11_Sensor");

  // Set temperature measurement range (-20°C to 60°C for DHT11)
  zbTempSensor.setMinMaxValue(-20, 60);

  // Set tolerance for temperature measurement (±2°C accuracy for DHT11)
  zbTempSensor.setTolerance(2);

  // Configure humidity sensor (20-90% RH range for DHT11, ±5% RH accuracy)
  zbTempSensor.addHumiditySensor(20, 90, 5);

  // Set power source to battery (assuming battery-powered operation)
  zbTempSensor.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);

  // Add endpoint to Zigbee Core
  Zigbee.addEndpoint(&zbTempSensor);

  // Create Zigbee configuration for End Device
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  zigbeeConfig.nwk_cfg.zed_cfg.keep_alive = 60000; // 60 second keep-alive

  // Start Zigbee
  if (!Zigbee.begin(&zigbeeConfig, false)) {
    Serial.println("Zigbee failed to start!");
    Serial.println("Rebooting...");
    ESP.restart();
  }

  Serial.println("Connecting to Zigbee network");
  while (!Zigbee.connected()) {
    Serial.print(".");
    delay(100);
  }
  Serial.println("\nSuccessfully connected to Zigbee network");

  // Allow time for connection establishment
  delay(1000);
}

/********************* Arduino Loop **************************/
void loop() {
  // Check boot button for factory reset
  if (digitalRead(BOOT_BUTTON) == LOW) {
    delay(100); // Debounce
    int startTime = millis();
    while (digitalRead(BOOT_BUTTON) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.println("Factory reset initiated. Rebooting in 1s...");
        delay(1000);
        Zigbee.factoryReset();
      }
    }
  }

  // Measure sensor data and go to sleep
  measureAndSleep();
} 
```

</details>

やることは、変更したい部分を選択し、プロンプトワードを入力してEnterキーを押すだけです。

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/11.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## プログラムの検証とアップロード

CursorがZigbeeプロジェクトコードを生成したので、正しく動作するかを検証する必要があります。最良の方法は、XIAO ESP32C6ボードへのコードのコンパイルとアップロードに優れたツールを提供するArduino IDEを使用することです。Arduino IDEに切り替えて、検証プロセスを実行しましょう：

1. Arduino IDEでメインファイルを開きます。
2. ボードメニューから**XIAO ESP32C6**ボードを選択します。
3. 適切なポートを選択します。
4. **検証**をクリックしてコードをコンパイルします。
5. エラーがある場合は、CursorのChatに戻って修正の手助けを求めます。
6. コードが正常にコンパイルされたら、XIAO ESP32C6にアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/10.png" style={{width:1000, height:'auto'}}/></div>

すべてがうまくいけば、Home Assistant（Home AssistantセットアップにZigbeeゲートウェイがある場合）によって発見できるZigbeeデバイスができあがります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/12.png" style={{width:1000, height:'auto'}}/></div>

## Cursorでのトラブルシューティング

生成されたコードで問題が発生した場合、Cursorに助けを求めることができます：

1. 直面している具体的なエラーや問題を説明する
2. Arduino IDEからのエラーメッセージを含める
3. Cursorに修正や改善の提案を求める
4. 提案された変更を実装して再度テストする

CursorのAIは特にデバッグが得意で、手動では発見が困難な問題を特定できることがよくあります。

例えば、Zigbee機能を初めて使用する場合や、次のようなコンパイルエラーに遭遇した場合

```
#error Zigbee end device mode is not selected in Tools->Zigbee mode
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/15.png" style={{width:1000, height:'auto'}}/></div>

見落としがあった場合でも、いつでもCursorにガイダンスを求めることができます。単純にプロンプトを入力してください：

***Arduino IDEでコンパイルエラーが発生し、'Compilation error: #error Zigbee end device mode is not selected in Tools->Zigbee mode'と表示されました。どうすればよいですか？***

Cursorは、Arduino IDEのToolsメニューを確認し、適切なZigbeeモードを選択することを提案するでしょう：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/16.png" style={{width:400, height:'auto'}}/></div>

遭遇したエラーについてCursorに質問することができ、解決プロセスをガイドしてくれます。質問したい他の一般的な問題には以下があります：

- ライブラリインストールの問題
- ピン設定エラー
- センサー接続の問題
- 通信プロトコルの設定
- 電源管理の懸念

問題を明確にプロンプトで説明するだけで、Cursorが関連する提案と解決策を提供します。

## Cursorでプログラムを強化する

基本的なZigbee機能が動作するようになったら、Cursorを使用してプログラムにより多くの機能と改善を追加できます。シリアルポート初期化チェックを追加してコードを強化する例を見てみましょう。

これは開発とデバッグ中に特に有用で、セットアップを進める前にシリアルポートが準備完了するのを待つことで、シリアル出力を見逃さないことを保証します。

1. Cursorでプロジェクトを開き、コード内の`setup()`関数を見つけます。

2. Chatパネルで、追加したい内容を説明します。例えば：
   「セットアップを進める前にシリアルポートが準備完了するのを待つコードを追加」

3. Cursorは次のような修正を提案します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.png" style={{width:1000, height:'auto'}}/></div>

これらの小さな改善を超えて、基本機能の上に省電力機能を実装することでZigbeeの価値を最大化できます。Zigbeeの主要な利点の一つは低消費電力機能であり、スリープモードの適切な実装によってさらに最適化できます。

センサープロジェクトにディープスリープ機能を追加するようCursorに依頼する方法は次のとおりです：

1. Chatパネルを開き、ディープスリープ実装を要求します：

***温度と湿度の値を3時間ごとに1回報告するようにプログラムを修正してください。残りの時間はディープスリープして電力を節約してください。***

2. Cursorは以下を含むコード修正を提案します：

- スリープ時間の更新
- より良いフィードバックのためのスリープメッセージの更新
- 新しい報告間隔を反映するドキュメントの更新
- 3時間のディープスリープに戻る

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/14.png" style={{width:1000, height:'auto'}}/></div>

この電力最適化は、バッテリー駆動のセンサーノードにとって特に価値があり、報告頻度とセンサータイプに応じて、バッテリー寿命を数日から数ヶ月、さらには数年まで延長する可能性があります。

Cursorはこれらすべての機能の実装を支援できます - 支援を求める際は要件を具体的に述べてください。

## 結論

XIAO ESP32C6とセンサーを使用したZigbeeアプリケーションの開発において、CursorのAI搭載チャット機能の使用方法を学習しました。このアプローチにより、開発プロセスを大幅に高速化し、技術的な課題を克服することができます。

Cursorに慣れ親しむにつれて、組み込みプロジェクトでその機能を活用する追加の方法を発見するでしょう。プロンプトの品質が生成されるコードの品質に大きく影響することを覚えておいてください。要件を説明する際は、具体的で詳細に記述してください。

このチュートリアルは、組み込み開発をより身近なものにするための重要な前進を表しています。CursorのようなAIツールとXIAO ESP32C6のような強力なハードウェアを組み合わせることで、IoTとセンサーネットワーク開発への参入障壁を下げています。これは特に以下の方々にとって価値があります：

- 組み込みシステムの学習を始めたばかりの初心者
- プロトタイピングプロセスを加速したい経験豊富な開発者
- IoTと無線通信の概念を教える教育者
- スマートホームソリューションを作成したいメーカーや愛好家

AI支援開発ツールとZigbee技術の統合により、エネルギー効率が高く信頼性のある無線センサーネットワークを作成する新たな可能性が開かれます。これらの技術の組み合わせにより、高いコード品質を維持しながら開発サイクルを高速化し、最終的にIoT分野でのイノベーションの推進に貢献します。

:::tip
この記事はCitricがCursorの支援を受けて執筆しました。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
