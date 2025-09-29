---
description: Arduino Uno R4とLoRaモジュールの使用方法
title: Grove - Wio-E5 をArduino Uno R4で使用するデモ
keywords:
- LoRaWAN
- Home Assistant
- Arduino UNO R4
- Wio E5
slug: /ja/Grove_Wio_E5_SenseCAP_Cloud_Demo
last_update:
  date: 05/15/2025
  author: JoJang
---


# Home AssistantでArduino Uno R4とLoRaモジュールを使用する方法

### はじめに

**Arduino UNO R4**は、処理能力が向上し、追加の周辺機器が統合されたツールであり、初心者から経験豊富な電子機器愛好家まで幅広く利用できる優れたプロトタイプおよび学習ツールです。しかし、Arduino UNO R4を所有していて、超低消費電力で長距離のメッセージ送信機能を求める場合は、Grove Wio-E5を組み込むことをお勧めします。

**Grove Wio-E5**は使いやすいLoRaモジュールです。LoRaは、低ビットレートで少量のデータを送信する必要があるアプリケーションに適しており、WiFi、Bluetooth、ZigBeeなどの技術と比較して長い送信距離を提供します。これらの特性により、LoRaは低消費電力モードでの動作に特に適しています。

次に、**Arduino UNO R4、Grove-Wio-E5、およびGrove-温湿度センサー**を使用してLoRa通信を行う方法を説明します。このチュートリアルは、LoRaを基盤としたワイヤレス通信の設定と実装に関する包括的な手順を初心者および中級者向けに提供することを目的としています。Arduino UNO R4を使用してLoRa通信を行うスキルを習得する手助けをします。最後に、**ChirpStack**を通じてデータを**Home Assistant**に表示します。

### 実装

#### Arduinoプログラムコード

* **ハードウェア**

このチュートリアルでは、Arduino UNO R4 WiFi開発ボードとGrove - Wio-E5を使用します。以下の画像をご覧ください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_1.jpeg" alt="pir" width={700} height="auto" /></p>

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino UNO R4</th>
        <th>Grove-Wio-E5</th>
        <th>Grove-温湿度センサー</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_2.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_3.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_4.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Grove Wio-E5のピンをR4ボードの対応するピンに接続する必要があります。以下の表をご覧ください。
<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">Arduino Uno R4</th>
            <th align="center">Grove Wio-E5</th>
        </tr>
        <tr>
            <td align="center">Pin 2</td>
            <td align="center">TX</td>
        </tr>
        <tr>
            <td align="center">Pin 7</td>
            <td align="center">RX</td>
        </tr>
        <tr>
            <td align="center">3.3V</td>
            <td align="center">VCC</td>
        </tr>
        <tr>
            <td align="center">GND</td>
            <td align="center">GND</td>
        </tr>
    </table>
</div>

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">Arduino Uno R4</th>
            <th align="center">Grove-温湿度センサー</th>
        </tr>
        <tr>
            <td align="center">A5</td>
            <td align="center">SCL</td>
        </tr>
        <tr>
            <td align="center">A4</td>
            <td align="center">SDA</td>
        </tr>
        <tr>
            <td align="center">5V</td>
            <td align="center">VCC</td>
        </tr>
        <tr>
            <td align="center">GND</td>
            <td align="center">GND</td>
        </tr>
    </table>
</div>

プロジェクトに必要なハードウェアが揃いました。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_5.png" alt="pir" width={700} height="auto" /></p>

* **ソフトウェア**

以下のコードはArduino Uno R4を基に書かれており、R4ボードにカスタムセンサーを追加しています。センサー値を読み取り、直接割り当てます。

```cpp
# include <Arduino.h>
# include <SoftwareSerial.h>
#include "Wire.h"
#include "DHT.h"

#define DHTTYPE DHT20   // DHT 20
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

int temp = 1;
int humi = 56;

SoftwareSerial mySerial(2, 7); // Rx, Tx


static int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    char cmd_buffer[256];  // Adjust the buffer size as needed
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    vsprintf(cmd_buffer, p_cmd, args);  // Format the command string
    mySerial.print(cmd_buffer);
    Serial.print(cmd_buffer);
    va_end(args);
    delay(50);
    startMillis = millis();


    if (p_ack == NULL)
    {
        Serial.println("p_ack none");
        return 0;
    }

    do
    {
        while (mySerial.available() > 0)
        {
            ch = mySerial.read();
            recv_buf[index++] = ch;
            Serial.print((char)ch);
            delay(2);
        }

        if (strstr(recv_buf, p_ack) != NULL)
        {
            return 1;
        }

    } while (millis() - startMillis < timeout_ms);
    return 0;
}

static void recv_prase(char *p_msg)
{
    if (p_msg == NULL)
    {
        return;
    }
char*p_start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    p_start = strstr(p_msg, "RX");
    if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data)))
    {
        Serial.println(data);
        Serial.print("led :");
        led = !!data;
        Serial.print(led);
        if (led)
        {
            digitalWrite(LED_BUILTIN, LOW);
        }
        else
        {
            digitalWrite(LED_BUILTIN, HIGH);
        }
    }

    p_start = strstr(p_msg, "RSSI");
    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))
    {
        Serial.print("rssi:");
        Serial.print(rssi);
    }
    p_start = strstr(p_msg, "SNR");
    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))
    {
        Serial.print("snr :");
        Serial.print(snr);
    }
}

void setup() {
  Serial.begin(115200); // 初期化シリアル通信
  Wire.begin();
  dht.begin();
  if (!mySerial.begin(9600, SERIAL_8N1)) {
        Serial.println("ソフトシリアルの初期化に失敗しました");
        while (1);
    }

  if (at_send_check_response("+AT: OK", 200, "AT\r\n"))
{
    is_exist = true;
    
    // AT+IDコマンドを送信
    if (at_send_check_response("+ID:", 1000, "AT+ID\r\n")) {
        // コマンドが正常に送信され、応答を受信
        // recv_bufに返されたデータが見つかる
        Serial.print("受信したIDデータ: ");
        Serial.println(recv_buf);
    } else {
        // コマンド送信失敗または応答なし
        Serial.println("IDデータの取得に失敗しました。");
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
}
else
{
    is_exist = false;
    Serial.print("E5モジュールが見つかりませんでした。\r\n");
}
}


void loop() {
    float temp_hum_val[2] = {0};
    if(is_exist)
    {
        Serial.println("成功");
        delay(1000);
    }

    if (is_exist)
        {
            int ret = 0;
            if (is_join)
            {

                ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
                if (ret)
                {
                    is_join = false;
                }
                else
                {
                    at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
                    Serial.print("JOIN失敗!\r\n\r\n");
                    delay(5000);
                }
            }
            else
            {
              if (!dht.readTempAndHumidity(temp_hum_val)) {
                char cmd[128];
                sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", int(temp_hum_val[1]*100), int(temp_hum_val[0]*100));
                Serial.print(temp_hum_val[0]);
                Serial.println(temp_hum_val[1]);
                ret = at_send_check_response("Done", 5000, cmd);
                if (ret)
                {
                    recv_prase(recv_buf);
                }
                else
                {
                    Serial.print("送信失敗!\r\n\r\n");
                }
              }
                delay(30000);
            }
        }
        else
        {
            delay(1000);
        }
}
```

#### ChirpStackの設定

**ChirpStack** は、LoRaWANネットワークを構築および管理するために設計されたオープンソースのIoT（モノのインターネット）ソリューションです。ゲートウェイ、ネットワークサーバー、アプリケーションサーバー、デバイスを含むLoRaWANネットワークの展開、管理、監視を支援するための包括的なツールとサービスを提供します。ChirpStackへの接続方法については、以下のリンクを参照してください：[Chirpstack-Configuration](https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration)

ChirpStackで新しいデバイスプロファイルを作成した後、以下のコードをペイロードコーデックに入力してください：

```javascript
function decodeUplink(input) {
    var decoded = {
        temp: 0,
        humi: 0
    };
    var bytes = input['bytes'];
    bytes = bytes2HexString(bytes);

    decoded.temp = parseInt(bytes.slice(0, 4), 16) / 100;
    decoded.humi = parseInt(bytes.slice(-4), 16) / 100;

    let messages = [
        {
            type: 'temp',
            measurementId: 4097,
            measurementValue: decoded.temp
        },
        {
            type: 'humi',
            measurementId: 4098,
            measurementValue: decoded.humi
        }
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
  function toBinary (arr) {
    let binaryData = arr.map((item) => {
      let data = parseInt(item, 16)
        .toString(2)
      let dataLength = data.length
      if (data.length !== 8) {
        for (let i = 0; i < 8 - dataLength; i++) {
          data = `0` + data
        }
      }
      return data
    })
    let ret = binaryData.toString()
      .replace(/,/g, '')
    return ret
  }
  
  
  function bytes2HexString (arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
      var tmp
      var num = arrBytes[i]
      if (num < 0) {
        tmp = (255 + num + 1).toString(16)
      } else {
        tmp = num.toString(16)
      }
      if (tmp.length === 1) {
        tmp = '0' + tmp
      }
      str += tmp
    }
    return str
  }
```

その後、`Submit`をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_6.png" alt="pir" width={700} height="auto" /></p>

以下の図のように、関連データが受信されていることが確認できれば、データが正常に送信されたことを示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_7.png" alt="pir" width={700} height="auto" /></p>

デコードだけではセンサーデータを直感的に視覚化することが難しい場合があります。そのような場合には、Home Assistantのようなユーザーフレンドリーなプラットフォームを利用することができます。

### アプリケーション：Home Assistantとの統合

Home Assistantは、さまざまなスマートデバイスやサービスを統合、制御、自動化するために設計されたオープンソースのスマートホームオートメーションプラットフォームです。幅広いスマートホームデバイスとの相互運用性をサポートしており、カスタマイズされたオートメーションシナリオやスマートホーム制御システムを作成することができます。Arduino UNO R4をHome Assistantと統合することで、Arduino UNO R4の開発可能性を多様化することができます。

ChirpStackとHome Assistantの両方には、組み込みのMQTTプラグイン統合が備わっています。これにより、MQTTプロトコルを介してデータを通信し、ゲートウェイ（MQTTプラグインを搭載）からHome Assistantへのセンサーデータの送信を容易にします。

また、Arduino Uno R4をHome Assistantに統合することも可能です。以下のチュートリアルを参照してください：[home_assistant_sensecap](https://wiki.seeedstudio.com/ja/home_assistant_sensecap/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_8.png" alt="pir" width={700} height="auto" /></p>