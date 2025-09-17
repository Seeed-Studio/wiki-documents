---
description: Grove - I2C カラーセンサー
title: Grove - I2C カラーセンサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-I2C_Color_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" /></div>

このモジュールは、デジタル出力 I2C を備えたカラーセンサー TCS3414CS に基づいています。8×2 配列のフィルタ付きフォトダイオードと 16 ビットのアナログ-デジタルコンバーターを基に、周囲光の色度や物体の色を測定できます。16 個のフォトダイオードのうち、4 個は赤フィルター、4 個は緑フィルター、4 個は青フィルター、4 個はフィルターなし（クリア）です。同期入力ピンを使用すると、外部のパルス光源が正確な同期変換制御を提供できます。

:::note
最新バージョン V2.0 では IC が TCS3472 に置き換えられ、古いライブラリも更新されています。V2.0 バージョンを使用している場合は、[新しいライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)を使用してください。
:::

特徴
--------

- Grove 互換インターフェース
- I2C による 16 ビットデジタル出力
- SYNC 入力により、変調光源との統合サイクルを同期
- 動作温度範囲 -40°C ～ 85°C
- ユーザー定義の上限および下限しきい値設定を備えたプログラム可能な割り込み機能
- RoHS 準拠

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

仕様
-------------

| パラメータ | 値/範囲                |
|------------|------------------------|
| PCB サイズ | 2.0 cm × 4.0 cm       |
| インターフェース | 2.0mm ピッチピンヘッダー |
| VCC        | 3.3 - 6.0 V            |
| I2C スピード | 400 kHz               |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォーム用のソフトウェアライブラリ/デモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

はじめに
---------------

以下のドキュメントは、Grove の使用を開始する際に役立ちます。

- [序文 - はじめに](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [Grove について](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

### ハードウェア接続

Grove 製品はエコシステムを持ち、すべて同じコネクタを備えており、Grove ベースシールドに接続できます。このモジュールをベースシールドの I2C ポートに接続してください。ただし、ジャンパーワイヤーを使用して Grove - I2C カラーセンサーを Arduino に直接接続することもできます。

| Arduino UNO | Grove - I2C カラーセンサー |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

ソフトウェアインストール
---------------------

Arduino をダウンロードし、Arduino ドライバーをインストールします。

Seeeduino/Arduino の使い方を始める

デモ
-----

このモジュールは、光源の色や物体の色を検出するために使用できます。光源の色を検出する場合、LED スイッチをオフにし、光源をセンサーに直接照射する必要があります。物体の色を検出する場合、LED をオンにし、物体をエンクロージャーの上部に密着させる必要があります。物体の色を検出する理論は反射検知理論です。以下の図のように動作します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Reflcect.jpg" /></div>

### カラーセンサーライブラリ

Seeeduino/Arduino をすぐに使い始めるためのライブラリを作成しました。このセクションでは、ライブラリのセットアップ方法を説明します。

#### セットアップ

1. [Grove_I2C_Color_Sensor GitHub ページ](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)から[ライブラリコードを zip ファイルとしてダウンロード](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)します。最新バージョン V2.0（IC が TCS3472）の場合は、この[新しいライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)を使用してください。
2. ダウンロードしたファイルを …/arduino/libraries に解凍します。
3. 解凍したフォルダの名前を "Color_Sensor" に変更します。
4. Arduino IDE を起動（または開いている場合は再起動）します。

#### 関数の説明

このライブラリで最も重要かつ有用な関数です。利用可能なすべての関数を確認するために、ぜひ .h ファイルと .cpp ファイルをご覧ください。

##### ライブラリ関数を使用して RGB データを読み取る

**readRGB(int \*red, int \*green, int \*blue)**

- **red:** R の値を保存する変数のアドレス。
- **green:** G の値を保存する変数のアドレス。
- **blue:** B の値を保存する変数のアドレス。

```
void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // カラーセンサーの LED をオンにする場合は ledStatus = 1; オフにする場合は ledStatus = 0。
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    // RGB 値を変数に読み取る。
        delay(300);
        Serial.print("RGB 値は: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
    }
}
```

### カラーセンサーの例/応用

この例では、Grove - I2C カラーセンサーの機能を使用し、[Chainable RGB LED Grove](/ja/Grove-Chainable_RGB_LED/) を使用して検出された色を表示する方法を示します。

:::note
Arduino IDE に <a href="https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED">Grove-Chainable RGB LED ライブラリ</a> をまだダウンロードしていない場合は、まずライブラリをダウンロードしてセットアップしてください。
:::

- 完全な例を確認するには、File->Examples->Color_Sensor->example->ColorSensorWithRGB-LED スケッチを開くか、以下のコードを新しい Arduino スケッチにコピーして貼り付けてください。

**説明**: この例では、周囲光の色の色度や物体の色を測定し、Chainable RGB LED Grove を介して検出された色を表示します。

また、他の表示モジュールを使用して Grove - I2C カラーセンサーで検出された色を表示することもできます。

```
#include <Wire.h>
#include <GroveColorSensor.h>
#include <ChainableLED.h>
 
#define CLK_PIN   7
#define DATA_PIN  8
#define NUM_LEDS  1            // Chainable RGB LED の数
 
ChainableLED leds(CLK_PIN, DATA_PIN, NUM_LEDS);
 
void setup()
{
    Serial.begin(9600);
    Wire.begin();
}
 
void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // カラーセンサーの LED をオンにする場合は ledStatus = 1; オフにする場合は ledStatus = 0。
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    // RGB 値を変数に読み取る。
        delay(300);
        Serial.print("RGB 値は: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
        for(int i = 0; i<NUM_LEDS; i++)
        {
            leds.setColorRGB(i, red, green, blue);
        }
    }
}
```

- コードを開発ボードにアップロードします。
- その後、Grove_-_Chainable_RGB_LED が検出された色を表示します。

その他の参考情報
------------------

このモジュールはカラーセンサー TCS3414CS をベースにしています。TCS3414CS デジタルカラーセンサーは、赤(R)、緑(G)、青(B)、およびクリア(C)(フィルターなし)の4つのチャンネルからデータを返します。赤、緑、青のチャンネル (RGB) の応答を使用して、特定の光源の色度座標 (x, y) を決定できます。これらの基準は国際照明委員会 (CIE) によって設定されています。CIE は色と色の測定に関する主要な国際機関です。

TCS3414CS を使用して特定の物体の色を取得するには、センサーの応答 (RGB) を CIE 三刺激値 (XYZ) にマッピングする必要があります。その後、色度座標 (x, y) を計算する必要があります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Coordinates_transform.png" /></div>

色度計算プロセス概要

変換を行うための方程式:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Equations.png" /></div>

変換方程式

- 座標 (x, y) を取得したら、以下の図を参考にして推奨される色を確認してください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Chromaticity_Diagram.jpg" /></div>

## FAQs

**Q1: コマンドの意味をどのように理解すればよいですか？ 例えば、REG_GREEN_LOW = 0xD0**

A1: 添付された画像から、コマンドの内容を確認できます。バイトプロトコルコマンドを使用する場合、必ず「0x80+ADDRESS」の形式である必要があります。例えば、REG_TIMING(01h) = 0x81。  
バイトおよびブロック読み取りの場合、コマンドは「0xC0+ADDRESS」の形式である必要があります。例えば、REG_GREEN_LOW(10h) = 0xD0。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Color%20sensor%20register.png" /></div>

# Grove-I2C カラーセンサー Eagle ファイル V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-I2C カラーセンサー Eagle ファイル V2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# リソース

---------

- **[ライブラリ]** [Grove - I2C カラーセンサー V1.2 用ライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)
- **[ライブラリ]** [Grove - I2C カラーセンサー V2.0 用ライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
- **[Eagle]** [Grove-I2C カラーセンサー Eagle ファイル V1.2](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip)
- **[Eagle]** [Grove-I2C カラーセンサー Eagle ファイル V2.0](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip)
- **[データシート]** [TCS3414-A データシート](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3404_TCS3414-A.pdf)
- **[データシート]** [TCS3472 データシート](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3472%20Datasheet.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_I2C_Color_Sensor から作成されました -->

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力な APP サポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x を試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>