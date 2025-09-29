---
description: Grove - Wio-E5 と XIAO-ESP32-S3 を Arduino 経由で使用
title: Grove - Wio-E5 を XIAO ESP32S3 と組み合わせたデモ
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3
last_update:
  date: 05/15/2025
  author: Yvonne
---


# Arduino を使用して XIAO ESP32S3 と LoRa モジュールを接続する方法

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image1.png"/></div>

Arduino を介して Wio-E5 と XIAO-ESP32-S3 を統合することで、IoT プロジェクト開発における強力なプラットフォームを提供します。このガイドは、Wio-E5 と XIAO-ESP32-S3 の間でシームレスな接続を確立するための手順を示し、幅広いアプリケーションと機能を可能にします。

本ガイドでは、**XIAO-ESP32-S3、Grove-Wio-E5、および Grove-温湿度センサー**を使用して LoRa 通信を行う方法を説明します。このチュートリアルは初心者から中級者までを対象としており、LoRa 技術を使用した無線通信のセットアップと実装に関するステップバイステップの指示を提供します。最終的な目標は、XIAO-ESP32-S3 を効果的に使用して LoRa 通信を行うスキルを身につけることです。最後の段階では、**ChirpStack** を使用して収集したデータを **Home Assistant** に表示します。

## 実装

### Arduino プログラムコード

### ソフトウェア

以下のコードにいくつかの変更を加える必要があります。たとえば、LoRa 通信モジュールの AppKEY やその他の必要な情報を変更して LoRaWAN にアクセスできるようにし、送信したいデータをコマンド AT+CMSGHEX を使用して変更します。ここでは、温度と湿度をシミュレートしてデータを送信します。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <DHT.h>

// データを受信するためのバッファ
static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

int sensorPin = A1;          // センサーピンを定義
#define DHTTYPE DHT20        // DHT 20 タイプを使用
DHT dht(DHTTYPE);            // 温湿度センサーを初期化

// ATコマンドを送信し、タイムアウト内に期待される応答を確認する関数
static int at_send_check_response(char *expected_ack, int timeout_ms, char *command_format, ...) {
    int character;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, command_format);
    Serial1.printf(command_format, args);
    Serial.printf(command_format, args);
    va_end(args);
    delay(200);
    startMillis = millis();

    if (expected_ack == NULL) {
        return 0;
    }

    do {
        while (Serial1.available() > 0) {
            character = Serial1.read();
            recv_buf[index++] = character;
            Serial.print((char)character);
            delay(2);
        }

        if (strstr(recv_buf, expected_ack) != NULL) {
            return 1;
        }
    } while (millis() - startMillis < timeout_ms);
    return 0;
}

// 受信メッセージを解析する関数
static void recv_parse(char *message) {
    if (message == NULL) {
        return;
    }
    char *start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    start = strstr(message, "RX");
    if (start && (1 == sscanf(start, "RX: \"%d\"\r\n", &data))) {
        Serial.println(data);
        Serial.print("led :");
        led = !!data;
        Serial.println(led);
        digitalWrite(LED_BUILTIN, led ? LOW : HIGH);
    }

    start = strstr(message, "RSSI");
    if (start && (1 == sscanf(start, "RSSI %d,", &rssi))) {
        Serial.print("RSSI:");
        Serial.println(rssi);
    }
    
    start = strstr(message, "SNR");
    if (start && (1 == sscanf(start, "SNR %d", &snr))) {
        Serial.print("SNR :");
        Serial.println(snr);
    }
}

void setup() {
    Serial.begin(115200); // シリアル通信を初期化
    Serial1.begin(9600, SERIAL_8N1, 44, 43);
    Wire.begin();
    dht.begin();

    // モジュールの存在を確認する基本的な AT コマンド
    if (at_send_check_response("+AT: OK", 100, "AT\r\n")) {
        is_exist = true;

        // AT+ID コマンドを送信してデバイス ID を取得
        if (at_send_check_response("+ID:", 1000, "AT+ID\r\n")) {
            Serial.print("受信した ID データ: ");
            Serial.println(recv_buf);
        } else {
            Serial.println("ID データの取得に失敗しました。");
        }

        // その他の設定コマンド
        at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
        at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
        at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
        at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"2B7E151628AED2A6ABF7158809CF4F3D\"\r\n");
        at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
        at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
        
        delay(200);
        is_join = true;
    } else {
        is_exist = false;
        Serial.println("E5 モジュールが見つかりません。");
    }
}

void loop() {
    float temp_hum_val[2] = {0};
    if (is_exist) {
        int ret = 0;
        if (is_join) {
            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret) {
                is_join = false;
            } else {
                at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
                Serial.println("JOIN に失敗しました！");
                delay(5000);
            }
        } else {
            if (!dht.readTempAndHumidity(temp_hum_val)) {
                char cmd[128];
                sprintf(cmd, "AT+CMSGHEX=\"%04X%04X%04X\"\r\n", int(temp_hum_val[1] * 100), int(temp_hum_val[0] * 100), analogRead(sensorPin));
                ret = at_send_check_response("Done", 5000, cmd);
                if (ret) {
                    recv_parse(recv_buf);
                } else {
                    Serial.println("送信に失敗しました！");
                }
            }
            delay(30000);
        }
    } else {
        delay(1000);
    }
}
```

### ChirpStack の設定

ChirpStackは、LoRaWANネットワークを構築および管理するために設計されたオープンソースのIoT（モノのインターネット）ソリューションです。ゲートウェイ、ネットワークサーバー、アプリケーションサーバー、デバイスを含むLoRaWANネットワークの展開、管理、監視を支援するための包括的なツールとサービスを提供します。ChirpStackへの接続方法については、こちらの[リンク](https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration)をご参照ください。

ChirpStackで新しいデバイスプロファイルを作成した後、以下のコードをペイロードコーデックに入力してください：

```js
function decodeUplink(input) {
  var decoded = {
    temp: 0,
    humi: 0,
    moisture: 0,
  };
  var bytes = input["bytes"];
  bytes = bytes2HexString(bytes);

  // データが100倍の比率でエンコードされていると仮定
  decoded.temp = parseInt(bytes.slice(0, 4), 16) / 100;
  decoded.humi = parseInt(bytes.slice(4, 8), 16) / 100;
  decoded.moisture = parseInt(bytes.slice(-4), 16);

  let messages = [
    {
      type: "temp",
      measurementId: 4097,
      measurementValue: decoded.temp,
    },
    {
      type: "humi",
      measurementId: 4098,
      measurementValue: decoded.humi,
    },
    {
      type: "moisture",
      measurementId: 4103,
      measurementValue: decoded.moisture,
    },
  ];

  var result = {};
  result.messages = messages;
  return { data: result };
}

/**
 * 数値を先頭に0を付けた8桁の2進数に変換
 * @param arr
 * @returns {string}
 */
function toBinary(arr) {
  let binaryData = arr.map((item) => {
    let data = parseInt(item, 16).toString(2);
    let dataLength = data.length;
    if (data.length !== 8) {
      for (let i = 0; i < 8 - dataLength; i++) {
        data = `0` + data;
      }
    }
    return data;
  });
  let ret = binaryData.toString().replace(/,/g, "");
  return ret;
}

function bytes2HexString(arrBytes) {
  var str = "";
  for (var i = 0; i < arrBytes.length; i++) {
    var tmp;
    var num = arrBytes[i];
    if (num < 0) {
      tmp = (255 + num + 1).toString(16);
    } else {
      tmp = num.toString(16);
    }
    if (tmp.length === 1) {
      tmp = "0" + tmp;
    }
    str += tmp;
  }
  return str;
}
```

#### **Submit**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image4.png"/></div>

以下の図のように、関連データが受信され、データが正常に送信されたことを示しています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image6.png"/></div>

デコードだけではセンサーデータを直感的に視覚化することが難しい場合があります。そのような場合には、Home Assistantのようなユーザーフレンドリーなプラットフォームを利用することができます。

### アプリケーション: Home Assistantとの統合

**Home Assistant**は、さまざまなスマートデバイスやサービスを統合、制御、自動化するために設計されたオープンソースのスマートホームオートメーションプラットフォームです。幅広いスマートホームデバイスとの相互運用性をサポートしており、カスタマイズされたオートメーションシナリオやスマートホーム制御システムを作成することができます。XIAO-ESP32-S3をHome Assistantと統合することで、XIAO-ESP32-S3の開発可能性を多様化することができます。

ChirpStackとHome Assistantの両方には、組み込みのMQTTプラグイン統合機能があります。これにより、MQTTプロトコルを介してデータを通信し、ゲートウェイ（MQTTプラグインを搭載）からHome Assistantへのセンサーデータの送信を容易にします。

また、Wio-E5とXIAO-ESP32-S3をHome Assistantに統合することも可能です。詳細については、こちらの[チュートリアル](https://wiki.seeedstudio.com/ja/home_assistant_sensecap/)をご参照ください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **ステップ3:** **Send**をクリックし、**Measure**をクリックしてセンサーをテストします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image7.png"/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>