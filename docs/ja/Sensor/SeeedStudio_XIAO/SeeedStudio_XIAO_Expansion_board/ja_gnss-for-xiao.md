---
description: L76-L GNSS を XIAO で始める
title: L76-L GNSS for XIAO
keywords:
- gps
- gnss
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/gnss_for_xiao
last_update:
  date: 05/15/2025
  author: Stephen Lo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# L76-L GNSS for XIAO

:::danger
この製品は現在保留中です。
:::

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/Longan-Labs/XIAO_GPS/main/IMG/back.png" alt="pir" width={250} height="auto" /></p>

L76-L GNSS for XIAO へようこそ！これは Seeed Studio の XIAO 製品シリーズに新たに加わった最新のモジュールです。この GNSS モジュールは、プロジェクトに正確な位置情報を提供するだけでなく、XIAO メインコントローラーとのシームレスな統合により、強力なツールとなります。モバイルアプリケーションの設計、追跡デバイスの構築、またはプロジェクトに地理位置情報機能を追加したい場合、このモジュールが最適な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/gnss_for_xiao" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

### 特徴

- マルチコンステレーション対応: GPS、GLONASS、Galileo、QZSS をサポート。
- 高性能: 33 の追跡チャネル、99 の取得チャネル、210 の PRN チャネルを搭載。
- XIAO 互換性: XIAO メインコントローラーとのシームレスな統合を実現。
- 柔軟な接続性: XIAO との接続に加え、VCC、GND などのパッドも提供。

### 仕様

- GNSS タイプ: L76-L
- 対応衛星システム: GPS、GLONASS、Galileo、QZSS
- 接続ポート: XIAO 用に特化
- XIAO 用接続ポート: D2/D3(TX/RX)
- 追加パッド: VCC、GND、TX、RX

### 応用例

- モバイルアプリケーション: モバイルアプリに正確な地理位置情報機能を提供。
- 追跡デバイス: 位置情報および追跡デバイスの設計と構築。
- 地理位置情報機能: プロジェクトに地理位置情報機能を追加。


## クイックスタートガイド

L76-L GNSS for XIAO のクイックスタートガイドへようこそ。このガイドでは、新しい GPS 拡張ボードを XIAO nRF52840 メインコントローラーと組み合わせてセットアップし、使用を開始する方法を説明します。


### ハードウェア準備

#### ヘッダーのはんだ付け

製品を受け取ったら、いくつかのはんだ付け作業が必要です。パッケージには 2 つのピンヘッダーが付属しています。これらのヘッダーを拡張ボードに取り付ける必要があります。

#### XIAO と拡張ボードの接続

はんだ付けが完了したら、拡張ボードを XIAO メインコントローラーに接続します。

### ソフトウェア準備

#### EspSoftwareSerial (XIAO ESP32 シリーズ専用)

XIAO ESP32 シリーズをマスターとして使用する場合、ソフトシリアルポート用のライブラリを別途ダウンロードする必要があります。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/espsoftwareserial/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Arduino IDE のライブラリマネージャーから `EspSoftwareSerial` ライブラリを直接検索してインストールできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/1.png" style={{width:400, height:'auto'}}/></div>

:::note
他の XIAO シリーズを使用している場合、ソフトシリアルポート用のライブラリを別途ダウンロードする必要はありません。
:::

#### TinyGPSPlus

拡張ボードが報告する GPS データメッセージを解析するためのライブラリも必要です。この **TinyGPSPlus** ライブラリを以下のボタンをクリックしてダウンロードできます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/tinygpsplus/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Arduino IDE のライブラリマネージャーから `TinyGPSPlus` ライブラリを直接検索してインストールできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/2.png" style={{width:400, height:'auto'}}/></div>

## XIAO nRF52840 の例

L76-L モジュールは、1秒ごとにシリアルポートを介してGPS情報を出力します。この例では、シリアルポートから受信した内容を出力します。時間、衛星、緯度および経度を含む多くの情報を確認することができます。以下はコードです。

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>

static const int RXPin = D3, TXPin = D2;
static const uint32_t GPSBaud = 9600;

// TinyGPSPlus オブジェクト
TinyGPSPlus gps;

// GPSデバイスへのシリアル接続
SoftwareSerial ss(RXPin, TXPin);

void setup()
{
    Serial.begin(115200);
    ss.begin(GPSBaud);

    Serial.println(F("DeviceExample.ino"));
    Serial.println(F("TinyGPSPlus を使用した GPS モジュールの簡単なデモ"));
    Serial.print(F("TinyGPSPlus ライブラリのバージョン: ")); Serial.println(TinyGPSPlus::libraryVersion());
    Serial.println(F("作成者: Mikal Hart"));
    Serial.println();
}

void loop()
{
    // 新しい文が正しくエンコードされるたびに情報を表示します。
    while (ss.available() > 0)
    if (gps.encode(ss.read()))
    displayInfo();

    if (millis() > 5000 && gps.charsProcessed() < 10)
    {
        Serial.println(F("GPS が検出されません: 配線を確認してください。"));
        while(true);
    }
}

void displayInfo()
{
    Serial.print(F("位置: "));
    if (gps.location.isValid())
    {
        Serial.print(gps.location.lat(), 6);
        Serial.print(F(","));
        Serial.print(gps.location.lng(), 6);
    }
    else
    {
        Serial.print(F("無効"));
    }

    Serial.print(F("  日付/時刻: "));
    if (gps.date.isValid())
    {
        Serial.print(gps.date.month());
        Serial.print(F("/"));
        Serial.print(gps.date.day());
        Serial.print(F("/"));
        Serial.print(gps.date.year());
    }
    else
    {
        Serial.print(F("無効"));
    }

    Serial.print(F(" "));
    if (gps.time.isValid())
    {
        if (gps.time.hour() < 10) Serial.print(F("0"));
        Serial.print(gps.time.hour());
        Serial.print(F(":"));
        if (gps.time.minute() < 10) Serial.print(F("0"));
        Serial.print(gps.time.minute());
        Serial.print(F(":"));
        if (gps.time.second() < 10) Serial.print(F("0"));
        Serial.print(gps.time.second());
        Serial.print(F("."));
        if (gps.time.centisecond() < 10) Serial.print(F("0"));
        Serial.print(gps.time.centisecond());
    }
    else
    {
        Serial.print(F("無効"));
    }

    Serial.println();
}
```

GPSモジュールが良好なGPS信号を受信できるよう、より開けた場所で使用することを確認してください。良好なGPS信号があれば、5分以内にシリアルポートでGPSモジュールから返される緯度、経度、および時刻情報を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/3.png" style={{width:700, height:'auto'}}/></div>


## XIAO を使用しない場合

GPSモジュールを他のマイクロコントローラーで使用したい場合、基板上の4つのはんだパッド（3V、GND、TX、RX）を利用できます。

これらのパッドを目的のマイクロコントローラーの対応するピンに接続することで、L76-L モジュールを統合して XIAO なしで動作させることができます。適切なピン配置と接続については、使用するマイクロコントローラーのドキュメントを参照してください。

|L76-L モジュール|他の MCU|
|----------------|---------|
|3V|3.3V|
|GND|GND|
|TX|RX|
|RX|TX|

## リソース

- **[Zip]** [Eagleファイル](https://files.seeedstudio.com/wiki/gnss-xiao/XIAO_GPS_SCH&PCB.zip)
- **[PDF]** [データシート - L76-L](https://files.seeedstudio.com/wiki/gnss-xiao/L76-L_doc.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>