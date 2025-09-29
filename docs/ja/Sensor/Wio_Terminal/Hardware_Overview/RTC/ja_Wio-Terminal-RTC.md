---
description: 概要
title: RTC 概要
keywords:
- Wio_terminal RTC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-RTC
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# RTC 概要

この Wiki では、Wio Terminal 内の SAMD51 コアに組み込まれている RTC 機能を使用して時間を追跡する方法を紹介します。この機能により、外部 RTC モジュールをシステムに追加する必要がなくなります！

![](https://files.seeedstudio.com/wiki/Wio-Terminal-RTC/demo.png)

## Wio Terminal 用 Seeed_Arduino_RTC ライブラリのインストール

1. [Seeed_Arduino_RTC](https://github.com/Seeed-Studio/Seeed_Arduino_RTC) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、Seeed_Arduino_RTC を Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_RTC` ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## サンプルコード

以下のコードは、SAMD51 用 RTC ライブラリの基本的な使用例です。
> 詳細な API リファレンスについては、[こちら](https://github.com/Seeed-Studio/Seeed_Arduino_RTC) をご確認ください。

```cpp
#include "RTC_SAMD51.h"
#include "DateTime.h"

RTC_SAMD51 rtc;
void setup()
{
    rtc.begin();

    Serial.begin(115200);

    while (!Serial)
    {
        ;
    }

    DateTime now = DateTime(F(__DATE__), F(__TIME__));
    Serial.println("時間を調整します！");
    rtc.adjust(now);

    now = rtc.now();

    Serial.print(now.year(), DEC);
    Serial.print('/');
    Serial.print(now.month(), DEC);
    Serial.print('/');
    Serial.print(now.day(), DEC);
    Serial.print(" ");
    Serial.print(now.hour(), DEC);
    Serial.print(':');
    Serial.print(now.minute(), DEC);
    Serial.print(':');
    Serial.print(now.second(), DEC);
    Serial.println();

    DateTime alarm = DateTime(now.year(), now.month(), now.day(), now.hour(), now.minute(), now.second() + 15);

    rtc.setAlarm(0,alarm); // 15秒後に一致
    rtc.enableAlarm(0, rtc.MATCH_HHMMSS); // 毎日一致

    rtc.attachInterrupt(alarmMatch); // アラームが一致した際のコールバック

}

void loop()
{
}

void alarmMatch(uint32_t flag)
{

    Serial.println("アラーム一致！");
    DateTime now = rtc.now();
    Serial.print(now.year(), DEC);
    Serial.print('/');
    Serial.print(now.month(), DEC);
    Serial.print('/');
    Serial.print(now.day(), DEC);
    Serial.print(" ");
    Serial.print(now.hour(), DEC);
    Serial.print(':');
    Serial.print(now.minute(), DEC);
    Serial.print(':');
    Serial.print(now.second(), DEC);
    Serial.println();
}
```

## 高度な RTC 使用法

NTP を使用して RTC の時間を取得することもできます。

- このデモを実行するには、まず **[Wio Terminal ネットワーク Wiki](https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview/)** を確認してください。

### 依存ライブラリ

- Wio Terminal ネットワーク関連ライブラリ

- [Seeed_Arduino_RTC](https://github.com/Seeed-Studio/Seeed_Arduino_RTC)

- [millisDelay](https://github.com/ansonhe97/millisDelay)

```cpp
#include <AtWiFi.h>
#include <millisDelay.h>
#include <Wire.h>
#include "RTC_SAMD51.h"
#include "DateTime.h"


const char ssid[] = "Your-network"; // 必要なSSIDを追加してください
const char password[] = "Your-password"; // 自分のネットワークパスワードを追加してください

millisDelay updateDelay; // NTP定期更新用の遅延オブジェクト

unsigned int localPort = 2390;      // UDPパケットをリッスンするローカルポート

// ローカルとリモートのタイムサーバーを切り替え
// コメントアウトしてリモートサーバーを使用
//#define USELOCALNTP

#ifdef USELOCALNTP
    char timeServer[] = "n.n.n.n"; // ローカルNTPサーバー 
#else
    char timeServer[] = "time.nist.gov"; // 外部NTPサーバー例: time.nist.gov
#endif
const int NTP_PACKET_SIZE = 48; // NTPタイムスタンプはメッセージの最初の48バイトに含まれる

byte packetBuffer[NTP_PACKET_SIZE]; // 受信および送信パケットを保持するバッファ

// 時間オブジェクトを宣言
DateTime now;

// WiFiクライアントを定義
WiFiClient client;

// UDPライブラリクラス
WiFiUDP udp;

// ローカル時間
unsigned long devicetime;

RTC_SAMD51 rtc;

// Adafruit RTClibライブラリで使用するため
char daysOfTheWeek[7][12] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };

void setup() {

    Serial.begin(115200);

    while (!Serial); // ネイティブUSBに必要なシリアルポート接続を待機


    // RTCチェック前にネットワークをセットアップ
    connectToWiFi(ssid, password);

    // NTP（UDP）呼び出しでタイムサーバーから時間を取得
    // getNTPtimeはタイムゾーンに調整されたエポックUTC時間を返しますが、夏時間は含まれません
    devicetime = getNTPtime();

    // RTCが存在するか確認
    if (devicetime == 0) {
        Serial.println("ネットワークタイムサーバーから時間を取得できませんでした。");
    }

    if (!rtc.begin()) {
        Serial.println("RTCが見つかりませんでした");
        while (1) delay(10); // 動作停止
    }

    // 現在のRTC時間を取得して表示
    now = rtc.now();
    Serial.print("RTC時間: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    // NTP時間を使用して時間を調整
    rtc.adjust(DateTime(devicetime));

    // 起動時の更新詳細を表示
    Serial.println("RTC（起動）時間が更新されました。");
    // 調整されたRTC時間を取得して表示
    now = rtc.now();
    Serial.print("調整されたRTC（起動）時間: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    // 必要に応じてmillisdelaysタイマーを開始、要件に合わせて調整
    updateDelay.start(12 * 60 * 60 * 1000); // NTP経由で12時間ごとに時間を更新

}

void loop() {

    if (updateDelay.justFinished()) { // 12時間ループ
        // タイマーを繰り返し
        updateDelay.repeat(); // 繰り返し

        // RTC時間を更新
        devicetime = getNTPtime();
        if (devicetime == 0) {
            Serial.println("ネットワークタイムサーバーから時間を取得できませんでした。");
        }
        else {
            rtc.adjust(DateTime(devicetime));
            Serial.println("");
            Serial.println("RTC時間が更新されました。");
            // 調整されたRTC時間を取得して表示
            now = rtc.now();
            Serial.print("調整されたRTC時間: ");
            Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));
        }
    }
}


void connectToWiFi(const char* ssid, const char* pwd) {
    Serial.println("WiFiネットワークに接続中: " + String(ssid));

    // 古い設定を削除
    WiFi.disconnect(true);

    Serial.println("WiFi接続を待機中...");

    // 接続を開始
    WiFi.begin(ssid, pwd);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
    }

    Serial.println("接続完了。");
    printWifiStatus();

}


unsigned long getNTPtime() {

    // モジュールは1970年1月1日以降の秒数としてunsigned long型の時間値を返します
    // 問題が発生した場合は0を返します

    // 接続されている場合のみデータを送信
    if (WiFi.status() == WL_CONNECTED) {
        // UDP状態を初期化
        // これにより転送バッファが初期化されます
        udp.begin(WiFi.localIP(), localPort);

        sendNTPpacket(timeServer); // タイムサーバーにNTPパケットを送信
        // 応答が利用可能かどうかを確認
        delay(1000);
        if (udp.parsePacket()) {
            Serial.println("UDPパケットを受信しました");
            Serial.println("");
            // パケットを受信したのでデータを読み取ります
            udp.read(packetBuffer, NTP_PACKET_SIZE); // バッファにパケットを読み取ります

            // タイムスタンプは受信パケットの40バイト目から始まり、4バイトまたは2ワードの長さです。
            // まず2ワードを抽出します:

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // 4バイト（2ワード）を長整数に結合
            // これはNTP時間（1900年1月1日以降の秒数）です:
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // Unix時間は1970年1月1日に始まります。秒数では2208988800です:
            const unsigned long seventyYears = 2208988800UL;
            // 70年を減算:
            unsigned long epoch = secsSince1900 - seventyYears;

            // タイムゾーンオフセットを秒単位で調整（UTCからの+/-）
            // WA時間のUTCからのオフセットは+8時間（28,800秒）
            // + GMTの東
            // - GMTの西
            long tzOffset = 28800UL;

            // WAローカル時間 
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // UDPパケットを正常に解析できませんでした
            // UDP接続をクリア
            udp.stop();
            return 0; // 0は失敗を示します
        }
        // NTP時間を頻繁に呼び出さない場合、リソースを解放するために停止
        udp.stop();
    }
    else {
        // ネットワークが接続されていない
        return 0;
    }

}

// 指定されたアドレスのタイムサーバーにNTPリクエストを送信
unsigned long sendNTPpacket(const char* address) {
    // バッファ内のすべてのバイトを0に設定
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // NTPリクエストを形成するために必要な値を初期化
    // （パケットの詳細については上記URLを参照）
    packetBuffer[0] = 0b11100011;   // LI、バージョン、モード
    packetBuffer[1] = 0;     // ストラタムまたはクロックの種類
    packetBuffer[2] = 6;     // ポーリング間隔
    packetBuffer[3] = 0xEC;  // ピアクロック精度
    // ルート遅延とルート分散のための8バイトのゼロ
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // すべてのNTPフィールドに値が設定されたので、
    // タイムスタンプを要求するパケットを送信できます:
    udp.beginPacket(address, 123); // NTPリクエストはポート123に送信されます
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

void printWifiStatus() {
    // 接続しているネットワークのSSIDを表示:
    Serial.println("");
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());

    // WiFiシールドのIPアドレスを表示:
    IPAddress ip = WiFi.localIP();
    Serial.print("IPアドレス: ");
    Serial.println(ip);

    // 受信信号強度を表示:
    long rssi = WiFi.RSSI();
    Serial.print("信号強度 (RSSI):");
    Serial.print(rssi);
    Serial.println(" dBm");
    Serial.println("");
}
```
